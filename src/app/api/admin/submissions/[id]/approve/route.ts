export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getSubmissionsStore, updateSubmissionStatus } from '@/lib/submissions-store';
import { getAllGames, addGame } from '@/lib/data';
import { Game } from '@/types/game';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE}/api/admin/submissions/${id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch {
      // Fallback to internal store
    }
  }

  const sub = getSubmissionsStore().find((s) => s.id === id);
  updateSubmissionStatus(id, 'APPROVED');

  const allGames = getAllGames();
  const newId = allGames.length > 0 ? Math.max(...allGames.map((g) => g.id)) + 1 : 1;
  const cleanSlug = sub?.title
    ? sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    : `game-${newId}`;

  const newGame: Game = {
    id: newId,
    slug: cleanSlug || `game-${newId}`,
    title: sub?.title || 'Approved Community AI Game',
    tagline: sub?.tagline || '',
    description: sub?.description || '',
    aiRoleDescription: sub?.aiRoleDescription || '',
    tier: (sub?.tier === 'AI-Augmented' || sub?.tier === 'AI-Boundary') ? sub.tier : 'AI-Native',
    aiType: sub?.tier === 'AI-Native' ? 'AI_NATIVE' : 'AI_AUGMENTED',
    genreKey: 'G1',
    genreName: sub?.genreName || 'Narrative Adventure',
    genreSlug: sub?.genreSlug || 'narrative-adventure',
    mechanicKey: 'N1',
    mechanicName: sub?.mechanicName || 'AI NPC Interrogation',
    mechanicSlug: sub?.mechanicSlug || 'ai-npc-interrogation',
    releaseYear: '2026',
    status: 'Released',
    platforms: sub?.platforms && sub.platforms.length > 0 ? sub.platforms : ['Browser'],
    websiteUrl: sub?.websiteUrl || '',
    developer: sub?.developer || 'Independent Creator',
    publisher: 'Self-Published',
    coverUrl: sub?.coverUrl || '/images/placeholders/narrative-adventure.jpg',
    screenshots: sub?.screenshots || [],
    viewCount: 1,
    likeCount: 0,
    bookmarkCount: 0,
    aiScore: 9.0,
    funScore: 8.8,
    isFeatured: false,
    isHot: true,
    createdAt: new Date().toISOString(),
  };

  addGame(newGame);

  return NextResponse.json({
    success: true,
    game: newGame,
    message: `Submission ${id} approved and published to catalog successfully`,
  });
}
