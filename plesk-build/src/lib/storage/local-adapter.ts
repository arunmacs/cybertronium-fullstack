import { StorageProvider, UploadResult } from './types';
import fs from 'fs/promises';
import path from 'path';

export class LocalAdapter implements StorageProvider {
  private uploadDir: string;
  private publicPath: string;

  constructor() {
    this.publicPath = '/uploads'; // The path to serve the files
    this.uploadDir = path.join(process.cwd(), 'public', 'uploads');
  }

  private async ensureUploadDir() {
    try {
      await fs.access(this.uploadDir);
    } catch {
      await fs.mkdir(this.uploadDir, { recursive: true });
    }
  }

  async upload(file: Buffer, filename: string, mimeType: string): Promise<UploadResult> {
    await this.ensureUploadDir();
    
    // Add timestamp to filename to prevent collisions
    const ext = path.extname(filename);
    const baseName = path.basename(filename, ext);
    const uniqueFilename = `${baseName}-${Date.now()}${ext}`;
    
    const filePath = path.join(this.uploadDir, uniqueFilename);
    
    await fs.writeFile(filePath, file);

    return {
      url: `${this.publicPath}/${uniqueFilename}`,
      filename: uniqueFilename,
      mimeType,
      size: file.length,
      provider: 'local',
    };
  }

  async delete(url: string): Promise<boolean> {
    try {
      const filename = path.basename(url);
      const filePath = path.join(this.uploadDir, filename);
      await fs.unlink(filePath);
      return true;
    } catch (error) {
      console.error('Error deleting local file:', error);
      return false;
    }
  }
}
