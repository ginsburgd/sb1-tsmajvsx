import { Handler } from '@netlify/functions';
import { neon } from '@neondatabase/serverless';

// Initialize Neon database connection
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  if (!sql) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Database not configured' })
    };
  }

  try {
    if (event.httpMethod === 'GET') {
      // Get league state
      try {
        const result = await sql`SELECT data FROM league_state WHERE id = 1`;
        const data = result.length > 0 ? result[0].data : {};
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(data)
        };
      } catch (error) {
        console.error('Database read error:', error);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({})
        };
      }
    }

    if (event.httpMethod === 'POST') {
      // Save league state
      const body = event.body || '{}';
      
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
          VALUES (1, ${body}, NOW())
          ON CONFLICT (id) 
          DO UPDATE SET data = ${body}, updated_at = NOW()
        `;
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ status: 'ok' })
        };
      } catch (error) {
        console.error('Database write error:', error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Failed to save league state' })
        };
      }
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found' })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};