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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const numId = Number(id);
    const body = await request.json();
    const games = await readGames();

    const index = games.findIndex((g) => g.id === numId);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Game not found' },
        { status: 404 }
      );
    }

    games[index] = {
      ...games[index],
      ...body,
      id: numId // preserve ID
    };

    await saveGames(games);

    return NextResponse.json({ success: true, game: games[index] });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update game' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const numId = Number(id);
    const games = await readGames();

    const filtered = games.filter((g) => g.id !== numId);
    await saveGames(filtered);

    return NextResponse.json({ success: true, message: 'Game deleted' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete game' },
      { status: 500 }
    );
  }
}
