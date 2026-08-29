import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './db/schema';

export interface EnvBindings {
  DB: D1Database;
  R2_BUCKET: R2Bucket;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
  CORS_ORIGIN?: string;
  PUBLIC_R2_URL?: string;
}

export function createAuth(dbInstance: D1Database, env: EnvBindings) {
  const db = drizzle(dbInstance, { schema });

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'sqlite',
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
      },
    }),
    secret: env.BETTER_AUTH_SECRET || 'aigameshub_jwt_secret_dev_2026',
    baseURL: env.BETTER_AUTH_URL || 'http://127.0.0.1:8787',
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
    },
    socialProviders: {
      ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET ? {
        google: {
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
        }
      } : {}),
      ...(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET ? {
        github: {
          clientId: env.GITHUB_CLIENT_ID,
          clientSecret: env.GITHUB_CLIENT_SECRET,
        }
      } : {}),
    },
    plugins: [
      admin({
        defaultRole: 'user',
        adminRoles: ['admin', 'editor'],
      }),
    ],
  });
}
