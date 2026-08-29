import { Hono } from 'hono';
import { EnvBindings } from '../auth';

export const uploadRoute = new Hono<{ Bindings: EnvBindings }>();

// =========================================================
// POST /api/upload - Direct Cloudflare R2 Upload
// =========================================================
uploadRoute.post('/', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'covers';

    if (!file) {
      return c.json({ success: false, message: 'No file provided' }, 400);
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const key = `${folder}/${timestamp}-${randomSuffix}.${ext}`;

    const arrayBuffer = await file.arrayBuffer();

    // Direct Cloudflare R2 Put Binding
    await c.env.R2_BUCKET.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type || 'image/jpeg',
      },
      customMetadata: {
        originalName: file.name,
        uploadedAt: new Date().toISOString(),
      },
    });

    const publicBase = c.env.PUBLIC_R2_URL || 'https://cdn.aigameshub.io';
    const publicUrl = `${publicBase}/${key}`;

    return c.json({
      success: true,
      key,
      url: publicUrl,
      size: file.size,
      contentType: file.type,
    });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
