export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { getAllGames } from '@/lib/data';
import { Game } from '@/types/game';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/api/games?limit=100`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.data) {
        return NextResponse.json({ success: true, games: data.data, total: data.pagination?.total || data.data.length });
      }
    }
  } catch {
    // Fallback to static games
  }
  const games = getAllGames();
  return NextResponse.json({ success: true, games, total: games.length });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    try {
      const res = await fetch(`${API_BASE}/api/admin/games`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch {
      // Offline fallback
    }

    const games = getAllGames();
    const newId = games.length > 0 ? Math.max(...games.map((g) => g.id)) + 1 : 1;
    const newGame: Game = {
      id: newId,
      slug: body.slug || `ai-game-${newId}`,
      title: body.title,
      tagline: body.tagline || '',
      description: body.description || '',
      aiRoleDescription: body.aiRoleDescription || '',
      tier: body.tier || 'AI-Native',
      aiType: body.aiType || 'AI_NATIVE',
      genreKey: body.genreKey || 'G1',
      genreName: body.genreName || 'Narrative Adventure',
      genreSlug: body.genreSlug || 'narrative-adventure',
      mechanicKey: body.mechanicKey || 'N1',
      mechanicName: body.mechanicName || 'AI NPC Interrogation',
      mechanicSlug: body.mechanicSlug || 'ai-npc-interrogation',
      releaseYear: body.releaseYear || '2026',
      status: body.status || 'Released',
      platforms: body.platforms || ['Browser'],
      websiteUrl: body.websiteUrl || '',
      developer: body.developer || 'Independent Creator',
      publisher: body.publisher || 'Self-Published',
      coverUrl: body.coverUrl || `/images/placeholders/${body.genreSlug || 'narrative-adventure'}.jpg`,
      screenshots: body.screenshots || [],
      viewCount: 1,
      likeCount: 0,
      bookmarkCount: 0,
      aiScore: Number(body.aiScore) || 9.0,
      funScore: Number(body.funScore) || 9.0,
      isFeatured: Boolean(body.isFeatured),
      isHot: Boolean(body.isHot),
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, game: newGame });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create game' },
      { status: 500 }
    );
  }
}
