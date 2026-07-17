import { StorageProvider, UploadResult } from './types';
import { prisma } from '@/lib/prisma';

export class DatabaseAdapter implements StorageProvider {
  async upload(file: Buffer, filename: string, mimeType: string): Promise<UploadResult> {
    try {
      // We must insert the blob into the database to get an ID.
      // This ID will be used to construct the URL that the frontend uses to fetch the image.
      const mediaBlob = await prisma.mediaBlob.create({
        data: {
          data: file as any,
        },
      });

      // The URL points to our new API endpoint that will serve the blob
      const url = `/api/media/${mediaBlob.id}`;

      return {
        url,
        filename,
        mimeType,
        size: file.length,
        provider: 'database',
      };
    } catch (error) {
      console.error('DatabaseAdapter upload error:', error);
      throw new Error(`Failed to upload file to database storage: ${(error as any).message}`);
    }
  }

  async delete(url: string): Promise<boolean> {
    try {
      // The URL looks like /api/media/cm...
      const match = url.match(/\/api\/media\/([^/?]+)/);
      if (match && match[1]) {
        const id = match[1];
        await prisma.mediaBlob.delete({
          where: { id },
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('DatabaseAdapter delete error:', error);
      return false;
    }
  }
}
