import { createServer, IncomingMessage, ServerResponse } from 'http';
import { readFile, writeFile } from 'fs/promises';
import { randomBytes, createHash } from 'crypto';

const USERS_FILE = new URL('./users.json', import.meta.url);
const sessions = new Map<string, string>();

async function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
}

async function loadUsers(): Promise<Record<string, string>> {
  try {
    const data = await readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data || '{}');
  } catch {
    return {};
  }
}

async function saveUsers(users: Record<string, string>) {
  await writeFile(USERS_FILE, JSON.stringify(users), 'utf-8');
}

function getUserFromReq(req: IncomingMessage): string | null {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) return null;
  const token = auth.slice(7);
  return sessions.get(token) || null;
}

async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/signup' && req.method === 'POST') {
    try {
      const { username, password } = await parseBody(req);
      const users = await loadUsers();
      if (users[username]) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'User already exists' }));
        return;
      }
      const hash = createHash('sha256').update(password).digest('hex');
      users[username] = hash;
      await saveUsers(users);
      const token = randomBytes(16).toString('hex');
      sessions.set(token, username);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ token }));
    } catch {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Signup failed' }));
    }
    return;
  }

  if (req.url === '/login' && req.method === 'POST') {
    try {
      const { username, password } = await parseBody(req);
      const users = await loadUsers();
      const hash = createHash('sha256').update(password).digest('hex');
      if (users[username] !== hash) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid credentials' }));
        return;
      }
      const token = randomBytes(16).toString('hex');
      sessions.set(token, username);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ token }));
    } catch {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Login failed' }));
    }
    return;
  }

  if (req.url === '/league' && req.method === 'GET') {
    const user = getUserFromReq(req);
    if (!user) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }
    const dataFile = new URL(`./league-${user}.json`, import.meta.url);
    try {
      const data = await readFile(dataFile, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data || '{}');
    } catch {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{}');
    }
    return;
  }

  if (req.url === '/league' && req.method === 'POST') {
    const user = getUserFromReq(req);
    if (!user) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }
    const dataFile = new URL(`./league-${user}.json`, import.meta.url);
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        await writeFile(dataFile, body || '{}', 'utf-8');
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
});
