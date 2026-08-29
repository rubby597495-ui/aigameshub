export const runtime = 'edge';

import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

// Fallback seed users for preview if database is empty
const MOCK_USERS = [
  {
    id: 'user-admin-01',
    name: 'Super Admin',
    email: 'admin@aigameshub.io',
    emailVerified: true,
    image: '/images/placeholders/narrative-adventure.jpg',
    role: 'admin',
    createdAt: '2026-08-20T08:00:00.000Z',
  },
  {
    id: 'user-editor-01',
    name: 'Sarah Connor',
    email: 'sarah.editor@aigameshub.io',
    emailVerified: true,
    image: '/images/placeholders/puzzle.jpg',
    role: 'editor',
    createdAt: '2026-08-22T10:30:00.000Z',
  },
  {
    id: 'user-creator-02',
    name: 'Marcus Vance',
    email: 'marcus.ai@gmail.com',
    emailVerified: true,
    image: '/images/placeholders/rpg.jpg',
    role: 'user',
    createdAt: '2026-08-24T14:15:00.000Z',
  },
  {
    id: 'user-player-03',
    name: 'Elena Rostova',
    email: 'elena.gaming@outlook.com',
    emailVerified: false,
    image: '/images/placeholders/strategy.jpg',
    role: 'user',
    createdAt: '2026-08-26T18:45:00.000Z',
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';
  const role = searchParams.get('role') || 'ALL';

  try {
    const res = await fetch(`${API_BASE}/api/admin/users?${searchParams.toString()}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (data.data && data.data.length > 0) {
        return NextResponse.json(data);
      }
    }
  } catch {
    // Fallback to local memory users
  }

  let filtered = MOCK_USERS;
  if (role !== 'ALL') {
    filtered = filtered.filter((u) => u.role === role);
  }
  if (search) {
    filtered = filtered.filter(
      (u) => u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({
    success: true,
    data: filtered,
    pagination: {
      page: 1,
      limit: 20,
      total: filtered.length,
      totalPages: 1,
    },
  });
}
