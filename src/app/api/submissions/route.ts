export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.websiteUrl) {
      return NextResponse.json(
        { success: false, error: 'Title and Website URL are required.' },
        { status: 400 }
      );
    }

    // In production with PostgreSQL, insert into submission table
    console.log('[+] Received game submission:', body.title);

    return NextResponse.json({
      success: true,
      message: 'Game submission received successfully.',
      submissionId: `sub-${Date.now()}`
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid submission data.' },
      { status: 500 }
    );
  }
}
