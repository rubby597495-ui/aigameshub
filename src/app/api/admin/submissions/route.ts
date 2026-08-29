import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const submissionsFilePath = path.join(process.cwd(), 'src', 'data', 'submissions.json');

async function readSubmissions() {
  try {
    const raw = await fs.readFile(submissionsFilePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function GET() {
  const submissions = await readSubmissions();
  return NextResponse.json({ success: true, submissions });
}
