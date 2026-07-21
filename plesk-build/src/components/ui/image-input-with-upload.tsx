"use client";
'use client';

import React, { useState } from 'react';
import { ImageUpload } from './image-upload';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

interface ImageInputWithUploadProps {
  name: string;
  label: string;
  defaultUrl?: string;
  placeholder?: string;
  description?: string;
}

export function ImageInputWithUpload({ name, label, defaultUrl = '', placeholder, description }: ImageInputWithUploadProps) {
  const [mode, setMode] = useState<'url' | 'upload'>('url');
  const [url, setUrl] = useState(defaultUrl);
  const [isLocked, setIsLocked] = useState(false);

  const handleUploadSuccess = (uploadedUrl: string) => {
    setUrl(uploadedUrl);
    setIsLocked(true);
    setMode('url'); // Switch back to URL view to see the result
  };

  return (
    <div 
      className="space-y-2 border border-slate-100 dark:border-slate-800 rounded-md p-3 bg-slate-50/50 dark:bg-slate-900/20 transition-colors duration-200"
      onDragEnter={(e) => {
        if (e.dataTransfer.types.includes('Files') && mode === 'url' && !isLocked) {
          setMode('upload');
        }
      }}
      onDragOver={(e) => {
        if (e.dataTransfer.types.includes('Files')) {
          e.preventDefault();
        }
      }}
    >
      <div className="flex items-center justify-between">
        <Label className="text-xs font-semibold">{label}</Label>
        <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={isLocked}
            onClick={() => setMode('url')}
            className={`h-6 px-2 text-[10px] ${mode === 'url' ? 'bg-white dark:bg-slate-950 shadow-sm' : ''} ${isLocked ? 'opacity-50' : ''}`}
          >
            URL
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={isLocked}
            onClick={() => setMode('upload')}
            className={`h-6 px-2 text-[10px] ${mode === 'upload' ? 'bg-white dark:bg-slate-950 shadow-sm' : ''} ${isLocked ? 'opacity-50' : ''}`}
          >
            Upload
          </Button>
        </div>
      </div>

      <input type="hidden" name={name} value={url} />

      {mode === 'url' ? (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={placeholder || 'https://example.com/image.jpg'} 
              className="h-9 text-sm bg-white dark:bg-slate-950 flex-1" 
              readOnly={isLocked}
            />
            {url && (
              <Button type="button" variant="outline" size="sm" onClick={() => { setUrl(''); setIsLocked(false); }} className="h-9 shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                Clear
              </Button>
            )}
          </div>
          {isLocked && (
            <p className="text-[10px] text-slate-500 mt-1.5 flex items-center gap-1 px-1">
              <span className="w-3 h-3 inline-flex items-center justify-center rounded-full border border-slate-400 text-[8px] font-bold">i</span>
              This is the public URL of your uploaded image.
            </p>
          )}
          {url && (
            <div className="mt-2 relative h-32 w-full rounded-md overflow-hidden border border-slate-200 dark:border-slate-800">
              <img 
                src={url} 
                alt="Preview" 
                className="object-contain w-full h-full" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="pt-1">
          <ImageUpload onUploadSuccess={handleUploadSuccess} />
        </div>
      )}

      {description && <p className="text-[11px] text-slate-400 mt-1">{description}</p>}
    </div>
  );
}
