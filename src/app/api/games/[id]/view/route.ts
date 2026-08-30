export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

// Global In-memory live stats accumulator for Edge
const liveViewsStore: Record<number, number> = {};
const liveLikesStore: Record<number, number> = {};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const gameId = parseInt(id, 10);

  return NextResponse.json({
    success: true,
    views: liveViewsStore[gameId] || 0,
    likes: liveLikesStore[gameId] || 0,
  });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const gameId = parseInt(id, 10);

  liveViewsStore[gameId] = (liveViewsStore[gameId] || 0) + 1;

  return NextResponse.json({
    success: true,
    views: liveViewsStore[gameId],
    likes: liveLikesStore[gameId] || 0,
  });
}
