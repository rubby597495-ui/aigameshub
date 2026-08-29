import { NextRequest, NextResponse } from 'next/server';
import { getCommentsStore } from '@/lib/comments-store';
import { GameComment } from '@/types/comment';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search')?.toLowerCase();

    let comments = [...getCommentsStore()];

    if (status && status !== 'ALL') {
      comments = comments.filter((c) => c.status === status);
    }

    if (search) {
      comments = comments.filter(
        (c) =>
          c.content.toLowerCase().includes(search) ||
          c.authorName.toLowerCase().includes(search) ||
          (c.gameTitle && c.gameTitle.toLowerCase().includes(search))
      );
    }

    return NextResponse.json({
      success: true,
      comments,
      total: comments.length
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
