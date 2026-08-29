import { NextRequest, NextResponse } from 'next/server';
import { getCommentsStore, updateCommentsStore } from '@/lib/comments-store';
import { GameComment, CommentStatus } from '@/types/comment';

export const runtime = 'edge';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, flagReason } = body as { status: CommentStatus; flagReason?: string };

    const store = getCommentsStore();
    const index = store.findIndex((c) => c.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Comment not found' }, { status: 404 });
    }

    store[index] = {
      ...store[index],
      status: status || store[index].status,
      flagReason: flagReason !== undefined ? flagReason : store[index].flagReason,
    };

    updateCommentsStore([...store]);

    return NextResponse.json({
      success: true,
      comment: store[index],
      message: `Comment status updated to ${status}`
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const store = getCommentsStore();
    const filtered = store.filter((c) => c.id !== id);

    if (filtered.length === store.length) {
      return NextResponse.json({ success: false, error: 'Comment not found' }, { status: 404 });
    }

    updateCommentsStore(filtered);

    return NextResponse.json({
      success: true,
      message: 'Comment deleted successfully'
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
