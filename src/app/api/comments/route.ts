import { NextRequest, NextResponse } from 'next/server';
import { GameComment } from '@/types/comment';
import { checkCommentSafety } from '@/lib/moderation';
import { getAllGames } from '@/lib/data';
import { getCommentsStore, addCommentToStore } from '@/lib/comments-store';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const gameId = searchParams.get('gameId');

    let results = getCommentsStore().filter((c) => c.status === 'APPROVED');
    if (gameId) {
      const gIdNum = parseInt(gameId, 10);
      results = results.filter((c) => c.gameId === gIdNum);
    }

    // Sort newest first
    results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      success: true,
      comments: results,
      total: results.length
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { gameId, authorName, content, rating, userId } = body;

    if (!gameId || !content || !authorName) {
      return NextResponse.json(
        { success: false, error: 'Missing required comment fields (gameId, authorName, content).' },
        { status: 400 }
      );
    }

    // 1. Content Moderation & Anti-Abuse Check
    const modResult = checkCommentSafety(content, authorName);
    if (!modResult.safe) {
      return NextResponse.json(
        {
          success: false,
          error: `Safety Alert: ${modResult.reason}`,
          flagged: true
        },
        { status: 400 }
      );
    }

    // Find game metadata
    const game = getAllGames().find((g) => g.id === Number(gameId));

    const newComment: GameComment = {
      id: `cmt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      gameId: Number(gameId),
      gameTitle: game?.title || 'Unknown Game',
      gameSlug: game?.slug || '',
      userId: userId || null,
      authorName: authorName.trim(),
      rating: rating ? Number(rating) : undefined,
      content: modResult.sanitizedContent,
      createdAt: new Date().toISOString(),
      status: 'APPROVED',
      likes: 0
    };

    addCommentToStore(newComment);

    return NextResponse.json({
      success: true,
      comment: newComment,
      message: 'Comment posted successfully!'
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
