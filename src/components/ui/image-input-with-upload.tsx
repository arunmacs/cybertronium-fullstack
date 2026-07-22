"use client";
'use client';

import React, { useState } from 'react';
import { ImageUpload } from './image-upload';
import { MediaLibrary } from './media-library';
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
  // Lock the URL field whenever a value exists from upload, library pick, OR pre-existing defaultUrl (edit mode).
  // This prevents accidental edits that could silently break image references.
  const [isLocked, setIsLocked] = useState(!!defaultUrl);
  // Track which source set the image so the pill toggle reflects the correct origin when locked.
  const [lockedSource, setLockedSource] = useState<'url' | 'upload' | 'library'>(defaultUrl ? 'url' : 'url');
  const [showLibrary, setShowLibrary] = useState(false);

  const handleImageSelected = (selectedUrl: string, source: 'upload' | 'library') => {
    setUrl(selectedUrl);
    setIsLocked(true);
    setLockedSource(source);
    setMode('url'); // Switch back to URL view to see the result
  };

  const handleClear = () => {
    setUrl('');
    setIsLocked(false);
    setLockedSource('url');
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
            className={`h-6 px-2 text-[10px] ${(isLocked ? lockedSource === 'url' : mode === 'url') ? 'bg-white dark:bg-slate-950 shadow-sm' : ''} ${isLocked ? 'opacity-50' : ''}`}
          >
            URL
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={isLocked}
            onClick={() => setMode('upload')}
            className={`h-6 px-2 text-[10px] ${(isLocked ? lockedSource === 'upload' : mode === 'upload') ? 'bg-white dark:bg-slate-950 shadow-sm' : ''} ${isLocked ? 'opacity-50' : ''}`}
          >
            Upload
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={isLocked}
            onClick={() => setShowLibrary(true)}
            className={`h-6 px-2 text-[10px] ${(isLocked && lockedSource === 'library') ? 'bg-white dark:bg-slate-950 shadow-sm' : ''} ${isLocked ? 'opacity-50' : ''}`}
          >
            Library
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
              className={`h-9 text-sm bg-white dark:bg-slate-950 flex-1 ${isLocked ? 'cursor-default text-slate-500' : ''}`}
              readOnly={isLocked}
            />
            {url && (
              <Button type="button" variant="outline" size="sm" onClick={handleClear} className="h-9 shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                Clear
              </Button>
            )}
          </div>
          {isLocked && (
            <p className="text-[10px] text-slate-500 mt-1.5 flex items-center gap-1 px-1">
              <span className="w-3 h-3 inline-flex items-center justify-center rounded-full border border-slate-400 text-[8px] font-bold">i</span>
              This URL is read-only. Click Clear to change it.
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
          <ImageUpload onUploadSuccess={(uploadedUrl) => handleImageSelected(uploadedUrl, 'upload')} />
        </div>
      )}

      {description && <p className="text-[11px] text-slate-400 mt-1">{description}</p>}

      {/* Media Library Dialog — same pattern as markdown-editor.tsx */}
      {showLibrary && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 !m-0">
          <div className="bg-white dark:bg-slate-950 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Select {label}</h3>
              <Button size="sm" variant="ghost" onClick={() => setShowLibrary(false)}>Close</Button>
            </div>
            <div className="p-5 overflow-auto flex-1">
              <MediaLibrary onSelect={(selectedUrl) => {
                handleImageSelected(selectedUrl, 'library');
                setShowLibrary(false);
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

