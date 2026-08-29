import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { createAuth, EnvBindings } from './auth';
import { gamesRoute } from './routes/games';
import { searchRoute } from './routes/search';
import { uploadRoute } from './routes/upload';
import { submissionsRoute } from './routes/submissions';
import { statsRoute } from './routes/stats';
import { usersRoute } from './routes/users';

const app = new Hono<{ Bindings: EnvBindings }>();

// 1. Logger Middleware
app.use('*', logger());

// 2. Dynamic CORS Middleware
app.use('*', async (c, next) => {
  const allowed = (c.env.CORS_ORIGIN || 'http://localhost:3000,https://aigameshub.io')
    .split(',')
    .map((s) => s.trim());

  return cors({
    origin: (origin) => {
      if (!origin) return allowed[0];
      return allowed.includes(origin) ? origin : allowed[0];
    },
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    maxAge: 86400,
  })(c, next);
});

// 3. Health & Discovery Route
app.get('/', (c) => {
  return c.json({
    service: 'AiGamesHub Backend API',
    engine: 'Hono + Drizzle ORM + Cloudflare D1 + SQLite FTS5',
    storage: 'Cloudflare R2',
    auth: 'better-auth (Google/GitHub OAuth2 + JWT/Refresh + RBAC)',
    status: 'online',
    version: '1.0.0',
  });
});

app.get('/health', (c) => c.json({ status: 'ok', timestamp: Date.now() }));

// 4. Mount Better-Auth Route Handler (/api/auth/*)
app.on(['POST', 'GET'], '/api/auth/**', (c) => {
  const auth = createAuth(c.env.DB, c.env);
  return auth.handler(c.req.raw);
});

// 5. Mount REST APIs
app.route('/api/games', gamesRoute);
app.route('/api/search', searchRoute);
app.route('/api/upload', uploadRoute);
app.route('/api/submissions', submissionsRoute);
app.route('/api/stats', statsRoute);
app.route('/api/admin/users', usersRoute);

// 6. Global 404 Handler
app.notFound((c) => {
  return c.json({ success: false, error: 'Endpoint not found' }, 404);
});

// 7. Global Error Handler
app.onError((err, c) => {
  console.error('API Error:', err);
  return c.json({ success: false, error: err.message || 'Internal Server Error' }, 500);
});

export default app;
