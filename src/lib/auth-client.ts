import { createAuthClient } from 'better-auth/react';
import { adminClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790',
  plugins: [
    adminClient(),
  ],
});

export const { signIn, signUp, signOut, useSession } = authClient;
