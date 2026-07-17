"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Trash2, Copy, Check, Image as ImageIcon, Loader2, Search, XSquare, CheckSquare, X, ShieldAlert } from "lucide-react";
import { ConfirmAction } from "@/components/ui/confirm-action";
import { FormattedDate } from "@/components/ui/formatted-date";

export function MediaLibrary({ onSelect, isAdmin = false }: { onSelect?: (url: string) => void, isAdmin?: boolean }) {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scanner & Bulk selection state
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchMedia = async () => {
    try {
      const res = await fetch("/api/media");
      if (res.ok) {
        const data = await res.json();
        setMedia(data);
      }
    } catch (error) {
      console.error("Failed to fetch media", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        await fetchMedia();
        setHasScanned(false); // Reset scan state when new media is added
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error", error);
      alert("Upload error.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setMedia((prev) => prev.filter((m) => m.id !== id));
        if (selectedIds.has(id)) {
          const newSelected = new Set(selectedIds);
          newSelected.delete(id);
          setSelectedIds(newSelected);
        }
      } else {
        alert("Failed to delete media.");
      }
    } catch (error) {
      console.error("Delete error", error);
    }
  };

  const handleBulkDelete = async () => {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) return;

    try {
      const res = await fetch("/api/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });
      if (res.ok) {
        setMedia((prev) => prev.filter((m) => !selectedIds.has(m.id)));
        setSelectedIds(new Set());
        setSelectionMode(false);
      } else {
        alert("Failed to delete selected media.");
      }
    } catch (error) {
      console.error("Bulk delete error", error);
    }
  };

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleScan = async () => {
    setIsScanning(true);
    setHasScanned(false);
    abortControllerRef.current = new AbortController();

    try {
      const res = await fetch("/api/media?includeUsage=true", {
        signal: abortControllerRef.current.signal,
      });
      if (res.ok) {
        const data = await res.json();
        setMedia(data);
        setHasScanned(true);
      }
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error("Failed to scan media", error);
      }
    } finally {
      setIsScanning(false);
      abortControllerRef.current = null;
    }
  };

  const cancelScan = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const selectAllUnused = () => {
    const unusedIds = media.filter(m => m.isUsed === false).map(m => m.id);
    setSelectedIds(new Set(unusedIds));
  };

  // Insights Calculations
  const totalSize = media.reduce((acc, m) => acc + m.size, 0);
  const unusedMedia = media.filter((m) => m.isUsed === false);
  const unusedSize = unusedMedia.reduce((acc, m) => acc + m.size, 0);

  return (
    <div className="space-y-4">
      {/* Top Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-lg font-semibold">Media Library</h2>
        
        <div className="flex items-center gap-2">
          {!selectionMode && isAdmin && (
            <Button variant="outline" size="sm" onClick={() => setSelectionMode(true)}>
              <CheckSquare className="w-4 h-4 mr-2" /> Select
            </Button>
          )}

          {selectionMode && (
            <Button variant="outline" size="sm" onClick={() => { setSelectionMode(false); setSelectedIds(new Set()); }}>
              <X className="w-4 h-4 mr-2" /> Cancel Selection
            </Button>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleUpload}
          />
          <Button onClick={() => fileInputRef.current?.click()} disabled={uploading || isScanning} size="sm">
            {uploading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
            Upload New Image
          </Button>
        </div>
      </div>

      {/* Storage Insights & Scanner */}
      {!loading && media.length > 0 && (
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
                Storage Insights
                {hasScanned && <span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Scan Complete</span>}
              </h3>
              <p className="text-xs text-slate-500">
                Total Assets: <strong className="text-slate-900 dark:text-slate-100">{media.length}</strong> 
                <span className="mx-2">•</span> 
                Total Space Used: <strong className="text-slate-900 dark:text-slate-100">{(totalSize / 1024 / 1024).toFixed(2)} MB</strong>
                
                {hasScanned && (
                  <>
                    <span className="mx-2">•</span> 
                    Orphaned (Unused): <strong className="text-red-600">{unusedMedia.length} assets ({(unusedSize / 1024 / 1024).toFixed(2)} MB)</strong>
                  </>
                )}
              </p>
            </div>
            
            {isAdmin && (
              <div className="flex items-center gap-2">
                {isScanning ? (
                  <Button variant="destructive" size="sm" onClick={cancelScan}>
                    <XSquare className="w-4 h-4 mr-2" /> Stop Scan
                  </Button>
                ) : (
                  <Button variant="secondary" size="sm" onClick={handleScan}>
                    <Search className="w-4 h-4 mr-2" /> {hasScanned ? "Rescan Usage" : "Scan for Unused Media"}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Selection Actions Bar */}
          {selectionMode && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{selectedIds.size} selected</span>
                {hasScanned && unusedMedia.length > 0 && (
                  <Button variant="outline" size="sm" onClick={selectAllUnused} className="h-8 text-xs">
                    Select All Unused
                  </Button>
                )}
              </div>
              <ConfirmAction
                action={handleBulkDelete}
                title="Bulk Delete Media"
                description={`Are you sure you want to permanently delete ${selectedIds.size} selected assets? This action cannot be undone.`}
                confirmText="Bulk Delete"
                confirmLabel={`Delete ${selectedIds.size} Selected`}
                disabled={selectedIds.size === 0}
              />
            </div>
          )}
        </div>
      )}

      {/* Media Grid */}
      {loading ? (
        <div className="h-40 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
        </div>
      ) : media.length === 0 ? (
        <div className="text-center py-12 border border-dashed rounded-lg border-slate-200 dark:border-slate-800">
          <ImageIcon className="w-12 h-12 mx-auto text-slate-300 mb-3" />
          <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">No media found</h3>
          <p className="text-xs text-slate-500 mt-1">Upload an image to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((asset) => {
            const isSelected = selectedIds.has(asset.id);
            const isUnused = hasScanned && asset.isUsed === false;

            return (
              <Card 
                key={asset.id} 
                className={`overflow-hidden group flex flex-col relative transition-all ${
                  isSelected ? "ring-2 ring-indigo-500" : ""
                } ${isUnused ? "border-red-300 dark:border-red-900/50" : ""}`}
              >
                
                {selectionMode ? (
                  <div 
                    className="absolute inset-0 z-20 cursor-pointer"
                    onClick={() => toggleSelection(asset.id)}
                  >
                    <div className={`absolute top-2 left-2 w-5 h-5 rounded border-2 flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm ${isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                      {isSelected && <Check className="w-3 h-3 text-indigo-500" />}
                    </div>
                  </div>
                ) : onSelect ? (
                  <button
                    onClick={() => onSelect(asset.url)}
                    className="absolute inset-0 z-10 w-full h-full opacity-0 hover:opacity-100 bg-black/50 flex items-center justify-center transition-opacity"
                  >
                    <span className="text-white font-medium text-sm bg-indigo-600 px-3 py-1.5 rounded-md">Insert</span>
                  </button>
                ) : null}

                {/* Badge for unused */}
                {isUnused && !selectionMode && (
                  <div className="absolute top-2 left-2 z-10 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center shadow-sm">
                    <ShieldAlert className="w-3 h-3 mr-1" /> Unused
                  </div>
                )}

                <div className={`aspect-square bg-slate-50 dark:bg-slate-900/50 relative p-2 flex items-center justify-center ${isSelected ? "opacity-80" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.url}
                    alt={asset.filename}
                    className="max-w-full max-h-full object-contain rounded-sm"
                  />
                </div>
                
                <div className="p-2 border-t text-xs flex flex-col gap-1 bg-white dark:bg-slate-950 relative z-10">
                  <p className="truncate font-medium" title={asset.filename}>{asset.filename}</p>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>{(asset.size / 1024).toFixed(1)} KB</span>
                    <FormattedDate date={asset.createdAt} />
                  </div>
                  {!selectionMode && (
                    <div className="flex items-center gap-1 mt-1 justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={(e) => { e.stopPropagation(); handleCopy(asset.url, asset.id); }}
                        title="Copy URL"
                      >
                        {copiedId === asset.id ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      </Button>
                      <ConfirmAction
                        action={async () => handleDelete(asset.id)}
                        title="Delete Media"
                        description={`Are you sure you want to delete ${asset.filename}? This might break posts using it.`}
                        confirmText="Delete"
                        confirmLabel="delete"
                      />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
