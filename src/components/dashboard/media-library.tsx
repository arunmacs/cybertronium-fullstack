'use client';

import React from 'react';
import Image from 'next/image';
import { MediaAsset } from '@prisma/client';

interface MediaLibraryProps {
  assets: MediaAsset[];
  onSelectAsset?: (asset: MediaAsset) => void;
}

export function MediaLibrary({ assets, onSelectAsset }: MediaLibraryProps) {
  if (assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/20 rounded-lg border border-dashed">
        <p className="text-muted-foreground">No media assets found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {assets.map((asset) => (
        <div 
          key={asset.id} 
          className="group relative aspect-square bg-muted rounded-md overflow-hidden border cursor-pointer hover:ring-2 ring-primary ring-offset-2 transition-all"
          onClick={() => onSelectAsset?.(asset)}
        >
          <Image
            src={asset.url}
            alt={asset.filename}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity flex justify-between">
            <span className="truncate mr-2" title={asset.filename}>{asset.filename}</span>
            <span className="shrink-0">{(asset.size / 1024).toFixed(0)} KB</span>
          </div>
          <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-background/80 backdrop-blur rounded text-[10px] uppercase font-bold text-foreground">
            {asset.mimeType.split('/')[1]}
          </div>
        </div>
      ))}
    </div>
  );
}
