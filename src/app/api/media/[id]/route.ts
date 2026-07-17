import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const mediaBlob = await prisma.mediaBlob.findUnique({
      where: { id },
    });

    if (!mediaBlob) {
      return new NextResponse('Not Found', { status: 404 });
    }

    // We don't have mimeType stored on the blob directly, but browsers can usually sniff it.
    // For a perfect implementation, we should look up the MediaAsset to get the exact mimeType.
    // Let's look up the MediaAsset to get the mimeType.
    const url = `/api/media/${id}`;
    const mediaAsset = await prisma.mediaAsset.findUnique({
      where: { url },
    });

    const headers = new Headers();
    if (mediaAsset) {
      headers.set('Content-Type', mediaAsset.mimeType);
    } else {
      // Fallback
      headers.set('Content-Type', 'image/jpeg');
    }

    headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');

    return new NextResponse(mediaBlob.data, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error serving media blob:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // We'll implement DELETE here for convenience as it targets a specific ID.
  // BUT wait, the ID here is the MediaBlob ID from the URL, or the MediaAsset ID?
  // Let's implement the general DELETE in `/api/media/route.ts` instead since it works with MediaAsset IDs.
  return new NextResponse('Method Not Allowed', { status: 405 });
}
