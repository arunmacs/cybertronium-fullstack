import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getStorageProvider } from '@/lib/storage';
import { prisma } from '@/lib/prisma';
import { APP_CONFIG } from '@/lib/constants';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id;
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Check file size limit
    if (file.size > APP_CONFIG.upload.maxSizeBytes) {
      return NextResponse.json({ error: `File size exceeds ${APP_CONFIG.upload.maxSizeMB}MB limit` }, { status: 400 });
    }

    // Check file type (must be an image, no PDFs etc)
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Unsupported file type. Please upload an image.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Get the active storage provider (fetches from DB)
    const storage = await getStorageProvider();

    // Upload via our storage provider (Local, S3, Cloudinary, etc.)
    const uploadResult = await storage.upload(buffer, file.name, file.type);
    
    // Save record in the database
    const mediaAsset = await prisma.mediaAsset.create({
      data: {
        url: uploadResult.url,
        filename: uploadResult.filename,
        mimeType: uploadResult.mimeType,
        size: uploadResult.size,
        provider: uploadResult.provider,
        uploaderId: userId,
      }
    });

    return NextResponse.json({ success: true, asset: mediaAsset });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to process upload' }, { status: 500 });
  }
}
