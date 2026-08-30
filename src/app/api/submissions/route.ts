export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { addSubmissionToStore } from '@/lib/submissions-store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.websiteUrl) {
      return NextResponse.json(
        { success: false, error: 'Title and Website URL are required.' },
        { status: 400 }
      );
    }

    const newSub = addSubmissionToStore(body);

    return NextResponse.json({
      success: true,
      message: 'Game submission received successfully.',
      submissionId: newSub.id,
      data: newSub
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Invalid submission data.' },
      { status: 500 }
    );
  }
}
