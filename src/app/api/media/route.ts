import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getStorageProvider } from '@/lib/storage';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const whereClause: any = {};
    // RBAC: Authors only see their own media. Admins/Editors see all.
    if (session.user.role === 'AUTHOR') {
      whereClause.uploaderId = session.user.id;
    }

    const media = await prisma.mediaAsset.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });

    const includeUsage = req.nextUrl.searchParams.get('includeUsage') === 'true';

    if (includeUsage && session.user.role === 'ADMIN') {
      // Run usage check for all assets in parallel
      const enrichedMedia = await Promise.all(
        media.map(async (asset) => {
          // Check users
          const userCount = await prisma.user.count({ where: { image: asset.url } });
          if (userCount > 0) return { ...asset, isUsed: true };

          // Check posts
          const postCount = await prisma.post.count({
            where: {
              OR: [
                { coverImage: asset.url },
                { thumbnailImage: asset.url },
                { content: { contains: asset.url } },
              ],
            },
          });
          
          return { ...asset, isUsed: postCount > 0 };
        })
      );
      return NextResponse.json(enrichedMedia);
    }

    return NextResponse.json(media);
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, ids } = await req.json();
    
    // Support bulk deletion
    const targets = ids ? ids : id ? [id] : [];
    
    if (targets.length === 0) {
      return NextResponse.json({ error: 'Media ID or IDs required' }, { status: 400 });
    }

    const storage = await getStorageProvider();

    for (const targetId of targets) {
      const asset = await prisma.mediaAsset.findUnique({
        where: { id: targetId },
      });

      if (!asset) continue;

      // RBAC: Authors can only delete their own media
      if (session.user.role === 'AUTHOR' && asset.uploaderId !== session.user.id) {
        continue; // Skip items they can't delete instead of failing the whole batch
      }

      // Delete from storage provider
      if (storage.delete) {
        try {
          await storage.delete(asset.url);
        } catch (err) {
          console.error(`Failed to delete blob for ${targetId}`, err);
        }
      }

      // Delete DB record
      await prisma.mediaAsset.delete({
        where: { id: targetId },
      });
    }

    return NextResponse.json({ success: true, deletedCount: targets.length });
  } catch (error) {
    console.error('Error deleting media:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
