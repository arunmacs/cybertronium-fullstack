export interface UploadResult {
  url: string;
  filename: string;
  mimeType: string;
  size: number;
  provider: string;
}

export interface StorageProvider {
  /**
   * Uploads a file buffer to the storage provider
   */
  upload(file: Buffer, filename: string, mimeType: string): Promise<UploadResult>;
  
  /**
   * Deletes a file from the storage provider
   */
  delete(url: string): Promise<boolean>;
}
