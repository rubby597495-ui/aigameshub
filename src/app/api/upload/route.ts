export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'covers';

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    // 5MB limit
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ success: false, error: 'File size exceeds 5MB limit' }, { status: 400 });
    }

    // 1. If Cloudflare Worker API is configured, forward to R2 upload endpoint
    if (API_BASE) {
      try {
        const workerFormData = new FormData();
        workerFormData.append('file', file);
        workerFormData.append('folder', folder);

        const upstreamRes = await fetch(`${API_BASE}/api/upload`, {
          method: 'POST',
          body: workerFormData,
        });

        if (upstreamRes.ok) {
          const upstreamData = await upstreamRes.json();
          return NextResponse.json(upstreamData);
        }
      } catch (upstreamErr) {
        console.error('Failed to proxy upload to Cloudflare Worker, falling back to Base64:', upstreamErr);
      }
    }

    // 2. Edge-compatible Base64 fallback (works in all serverless/edge environments)
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    // Chunked Base64 encoding to prevent stack overflow on large buffers
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      binary += String.fromCharCode.apply(
        null,
        uint8Array.subarray(i, i + chunkSize) as unknown as number[]
      );
    }
    const base64 = btoa(binary);
    const mimeType = file.type || 'image/jpeg';
    const dataUrl = `data:${mimeType};base64,${base64}`;

    return NextResponse.json({
      success: true,
      url: dataUrl,
      fileName: file.name,
      size: file.size,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'File upload failed' },
      { status: 500 }
    );
  }
}
