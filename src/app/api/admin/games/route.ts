import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Game } from '@/types/game';

const dataFilePath = path.join(process.cwd(), 'data', 'games.json');

async function readGames(): Promise<Game[]> {
  try {
    const raw = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function saveGames(games: Game[]): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(games, null, 2), 'utf-8');
}

export async function GET() {
  const games = await readGames();
  return NextResponse.json({ success: true, games, total: games.length });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const games = await readGames();

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
      createdAt: new Date().toISOString()
    };

    games.unshift(newGame);
    await saveGames(games);

    return NextResponse.json({ success: true, game: newGame });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create game' },
      { status: 500 }
    );
  }
}
