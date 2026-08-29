import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const submissionsFilePath = path.join(process.cwd(), 'src', 'data', 'submissions.json');

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subRaw = await fs.readFile(submissionsFilePath, 'utf-8');
    let submissions = JSON.parse(subRaw);

    submissions = submissions.filter((s: any) => s.id !== id);
    await fs.writeFile(submissionsFilePath, JSON.stringify(submissions, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: 'Submission rejected' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to reject submission' },
      { status: 500 }
    );
  }
}
