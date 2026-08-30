export interface SystemUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  provider: 'google' | 'github' | 'email';
  role: 'user' | 'creator' | 'editor' | 'admin';
  status: 'ACTIVE' | 'BANNED';
  createdAt: string;
  lastLoginAt?: string;
  bookmarksCount?: number;
  playActivityCount?: number;
}

// Global In-Memory Store for Registered Users (Edge / Cloudflare compatible)
let globalUsers: SystemUser[] = [
  {
    id: 'usr_google_1082394',
    name: 'Alex Rivera',
    email: 'alex.rivera.dev@gmail.com',
    emailVerified: true,
    image: 'https://lh3.googleusercontent.com/a/default-user',
    provider: 'google',
    role: 'creator',
    status: 'ACTIVE',
    createdAt: '2026-08-20T08:30:00.000Z',
    lastLoginAt: '2026-08-30T10:15:00.000Z',
    bookmarksCount: 6,
    playActivityCount: 4,
  },
  {
    id: 'usr_github_849201',
    name: 'NeuralArchitect',
    email: 'marcus.vance@github.com',
    emailVerified: true,
    image: 'https://avatars.githubusercontent.com/u/9919?v=4',
    provider: 'github',
    role: 'editor',
    status: 'ACTIVE',
    createdAt: '2026-08-22T14:20:00.000Z',
    lastLoginAt: '2026-08-29T18:40:00.000Z',
    bookmarksCount: 12,
    playActivityCount: 8,
  },
  {
    id: 'usr_admin_001',
    name: 'AiGamesHub SuperAdmin',
    email: 'admin@aigameshub.io',
    emailVerified: true,
    image: '/images/placeholders/narrative-adventure.jpg',
    provider: 'google',
    role: 'admin',
    status: 'ACTIVE',
    createdAt: '2026-08-15T00:00:00.000Z',
    lastLoginAt: '2026-08-30T19:00:00.000Z',
    bookmarksCount: 24,
    playActivityCount: 15,
  },
  {
    id: 'usr_google_772109',
    name: 'Elena Rostova',
    email: 'elena.gaming@gmail.com',
    emailVerified: true,
    image: 'https://lh3.googleusercontent.com/a/default-user',
    provider: 'google',
    role: 'user',
    status: 'ACTIVE',
    createdAt: '2026-08-26T11:10:00.000Z',
    lastLoginAt: '2026-08-29T21:00:00.000Z',
    bookmarksCount: 3,
    playActivityCount: 2,
  },
  {
    id: 'usr_email_330192',
    name: 'ShadowRunner',
    email: 'shadow.spammer@tempmail.xyz',
    emailVerified: false,
    image: '',
    provider: 'email',
    role: 'user',
    status: 'BANNED',
    createdAt: '2026-08-28T03:12:00.000Z',
    lastLoginAt: '2026-08-28T03:12:00.000Z',
    bookmarksCount: 0,
    playActivityCount: 0,
  }
];

export function getUsersStore(): SystemUser[] {
  return globalUsers;
}

export function registerOrUpdateUser(user: Partial<SystemUser> & { email: string }): SystemUser {
  const existingIndex = globalUsers.findIndex((u) => u.email.toLowerCase() === user.email.toLowerCase());
  
  if (existingIndex >= 0) {
    globalUsers[existingIndex] = {
      ...globalUsers[existingIndex],
      ...user,
      lastLoginAt: new Date().toISOString(),
    };
    return globalUsers[existingIndex];
  }

  const newUser: SystemUser = {
    id: user.id || `usr_${user.provider || 'google'}_${Math.random().toString(36).substring(2, 9)}`,
    name: user.name || user.email.split('@')[0],
    email: user.email,
    emailVerified: user.emailVerified ?? (user.provider === 'google' || user.provider === 'github'),
    image: user.image || '',
    provider: user.provider || 'google',
    role: user.role || 'user',
    status: 'ACTIVE',
    createdAt: user.createdAt || new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
    bookmarksCount: 0,
    playActivityCount: 0,
  };

  globalUsers.unshift(newUser);
  return newUser;
}

export function updateUserInStore(id: string, updates: Partial<SystemUser>): SystemUser | null {
  const index = globalUsers.findIndex((u) => u.id === id);
  if (index === -1) return null;

  globalUsers[index] = {
    ...globalUsers[index],
    ...updates,
  };
  return globalUsers[index];
}

export function deleteUserFromStore(id: string): boolean {
  const prevLen = globalUsers.length;
  globalUsers = globalUsers.filter((u) => u.id !== id);
  return globalUsers.length < prevLen;
}
