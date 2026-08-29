import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Game } from '@/types/game';

const submissionsFilePath = path.join(process.cwd(), 'src', 'data', 'submissions.json');
const gamesFilePath = path.join(process.cwd(), 'data', 'games.json');

function cleanSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-');
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Read submissions
    const subRaw = await fs.readFile(submissionsFilePath, 'utf-8');
    let submissions = JSON.parse(subRaw);
    const targetSub = submissions.find((s: any) => s.id === id);

    if (!targetSub) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    // 2. Read games
    const gamesRaw = await fs.readFile(gamesFilePath, 'utf-8');
    const games: Game[] = JSON.parse(gamesRaw);

    const newId = games.length > 0 ? Math.max(...games.map((g) => g.id)) + 1 : 1;
    const slug = cleanSlug(targetSub.title) || `game-${newId}`;

    const newGame: Game = {
      id: newId,
      slug,
      title: targetSub.title,
      tagline: targetSub.tagline || '',
      description: targetSub.description || targetSub.tagline || '',
      aiRoleDescription: targetSub.aiRoleDescription || '',
      tier: targetSub.tier || 'AI-Native',
      aiType: targetSub.tier === 'AI-Augmented' ? 'AI_AUGMENTED' : 'AI_NATIVE',
      genreKey: targetSub.genreKey || 'G1',
      genreName: targetSub.genreName || 'Narrative Adventure',
      genreSlug: targetSub.genre || 'narrative-adventure',
      mechanicKey: targetSub.mechanicKey || 'N1',
      mechanicName: targetSub.mechanicName || 'AI NPC Interrogation',
      mechanicSlug: targetSub.mechanic || 'ai-npc-interrogation',
      releaseYear: targetSub.releaseYear || '2026',
      status: 'Released',
      platforms: targetSub.platforms || ['Browser'],
      websiteUrl: targetSub.websiteUrl || '',
      developer: targetSub.developer || 'Independent Developer',
      publisher: 'Self-Published',
      coverUrl: targetSub.coverUrl || `/images/placeholders/${targetSub.genre || 'narrative-adventure'}.jpg`,
      screenshots: [],
      viewCount: 10,
      likeCount: 1,
      bookmarkCount: 0,
      aiScore: 9.2,
      funScore: 9.0,
      isFeatured: false,
      isHot: true,
      createdAt: new Date().toISOString()
    };

    games.unshift(newGame);
    await fs.writeFile(gamesFilePath, JSON.stringify(games, null, 2), 'utf-8');

    // Remove from submissions
    submissions = submissions.filter((s: any) => s.id !== id);
    await fs.writeFile(submissionsFilePath, JSON.stringify(submissions, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: 'Game approved and published!', game: newGame });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to approve submission' },
      { status: 500 }
    );
  }
}
