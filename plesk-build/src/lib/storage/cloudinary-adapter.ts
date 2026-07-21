import { StorageProvider, UploadResult } from './types';
import { v2 as cloudinary } from 'cloudinary';

// Configure cloudinary with env variables (CLOUDINARY_URL or specific keys)
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export class CloudinaryAdapter implements StorageProvider {
  async upload(file: Buffer, filename: string, mimeType: string): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'cms-uploads',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error || !result) {
            console.error('Cloudinary upload error:', error);
            return reject(error || new Error('Upload failed'));
          }

          resolve({
            url: result.secure_url,
            filename: result.public_id,
            mimeType: mimeType,
            size: result.bytes,
            provider: 'cloudinary',
          });
        }
      );

      // End the stream with the buffer
      uploadStream.end(file);
    });
  }

  async delete(url: string): Promise<boolean> {
    try {
      // Extract public_id from the URL
      // E.g., https://res.cloudinary.com/demo/image/upload/v1234567890/cms-uploads/sample.jpg
      const urlParts = url.split('/');
      const filenameWithExt = urlParts[urlParts.length - 1];
      const filename = filenameWithExt.split('.')[0];
      const folder = urlParts[urlParts.length - 2];
      
      const publicId = folder === 'cms-uploads' ? `${folder}/${filename}` : filename;

      const result = await cloudinary.uploader.destroy(publicId);
      return result.result === 'ok';
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      return false;
    }
  }
}
