import { StorageProvider } from './types';
import { LocalAdapter } from './local-adapter';
import { CloudinaryAdapter } from './cloudinary-adapter';
import { DatabaseAdapter } from './database-adapter';
import { prisma } from '@/lib/prisma';

export async function getStorageProvider(): Promise<StorageProvider> {
  let providerName = process.env.STORAGE_PROVIDER || 'local';

  try {
    const setting = await prisma.setting.findUnique({
      where: { key: "storageProvider" }
    });
    if (setting?.value) {
      providerName = setting.value;
    }
  } catch (error) {
    console.error("Failed to fetch storage provider setting from DB", error);
  }

  switch (providerName) {
    case 'local':
      return new LocalAdapter();
    case 'cloudinary':
      return new CloudinaryAdapter();
    case 'database':
      return new DatabaseAdapter();
    // case 's3':
    //   return new S3Adapter();
    default:
      console.warn(`Unknown storage provider: ${providerName}, falling back to local`);
      return new LocalAdapter();
  }
}
