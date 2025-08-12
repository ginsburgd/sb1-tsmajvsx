import { createServer, IncomingMessage, ServerResponse } from 'http';
import { readFile, writeFile } from 'fs/promises';
import { neon } from '@neondatabase/serverless';

const DATA_FILE = new URL('./league.json', import.meta.url);

// Initialize Neon database connection if DATABASE_URL is available
let sql: any = null;
if (process.env.DATABASE_URL) {
  sql = neon(process.env.DATABASE_URL);
  console.log('✅ Neon database connection initialized');
} else {
  console.log('⚠️  No DATABASE_URL found, using file storage only');
}

async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/league' && req.method === 'GET') {
    try {
      let data = '{}';
      
      if (sql) {
        // Try to get data from Neon database first
        try {
          const result = await sql`SELECT data FROM league_state WHERE id = 1`;
          if (result.length > 0) {
            data = result[0].data;
          }
        } catch (dbError) {
          console.log('Database read failed, falling back to file:', dbError);
          // Fall back to file storage
          try {
            data = await readFile(DATA_FILE, 'utf-8');
          } catch {
            data = '{}';
          }
        }
      } else {
        // Use file storage
        try {
          data = await readFile(DATA_FILE, 'utf-8');
        } catch {
          data = '{}';
        }
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data || '{}');
    } catch {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{}');
    }
    return;
  }

  if (req.url === '/league' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        if (sql) {
          // Try to save to Neon database first
          try {
            // Create table if it doesn't exist
            await sql`
              CREATE TABLE IF NOT EXISTS league_state (
                id INTEGER PRIMARY KEY,
                data JSONB NOT NULL,
                updated_at TIMESTAMP DEFAULT NOW()
              )
            `;
            
            // Upsert the data
            await sql`
              INSERT INTO league_state (id, data, updated_at) 
              VALUES (1, ${body || '{}'}, NOW())
              ON CONFLICT (id) 
              DO UPDATE SET data = ${body || '{}'}, updated_at = NOW()
            `;
            console.log('✅ Data saved to Neon database');
          } catch (dbError) {
            console.log('Database write failed, falling back to file:', dbError);
            // Fall back to file storage
            await writeFile(DATA_FILE, body || '{}', 'utf-8');
          }
        } else {
          // Use file storage
          await writeFile(DATA_FILE, body || '{}', 'utf-8');
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok' }));
      } catch {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to save league state' }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
}

const server = createServer((req, res) => {
  handleRequest(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`League API server running on http://localhost:${PORT}`);
  if (sql) {
    console.log('🗄️  Using Neon database for storage');
  } else {
    console.log('📁 Using file storage');
  }
});
