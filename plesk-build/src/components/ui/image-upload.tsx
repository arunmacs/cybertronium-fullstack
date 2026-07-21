"use client";
'use client';

import React, { useState, useCallback } from 'react';
import { UploadCloud, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { APP_CONFIG } from '@/lib/constants';

interface ImageUploadProps {
  onUploadSuccess: (url: string, asset: any) => void;
  maxSizeMB?: number;
}

export function ImageUpload({ onUploadSuccess, maxSizeMB = APP_CONFIG.upload.maxSizeMB }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const uploadFile = async (file: File) => {
    setError(null);
    
    // Validate size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds the ${maxSizeMB}MB limit.`);
      return;
    }

    // Validate type (Images only)
    if (!file.type.startsWith('image/')) {
      setError('Unsupported file type. Please upload an image.');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to upload image');
      }

      onUploadSuccess(data.asset.url, data.asset);
    } catch (err: any) {
      setError(err.message || 'An error occurred during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg transition-colors ${
          isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:bg-muted/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept="image/*"
          disabled={isUploading}
        />
        
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
          {isUploading ? (
            <Loader2 className="w-10 h-10 mb-3 text-muted-foreground animate-spin" />
          ) : (
            <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
          )}
          
          <p className="mb-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground mt-2 max-w-xs">
            Supported formats: Images only (Max {maxSizeMB}MB).
          </p>
          
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-md text-xs border border-blue-100 dark:border-blue-800/30 flex items-start gap-2 max-w-xs text-left">
            <ImageIcon className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Pro Tip:</strong> We highly recommend using the <strong>WebP</strong> format for better quality and significant space retention.
            </span>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-2 text-sm text-destructive flex items-center gap-1">
          <X className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
}
