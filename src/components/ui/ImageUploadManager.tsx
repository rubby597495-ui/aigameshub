'use client';

import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Trash2, 
  Sparkles, 
  Image as ImageIcon, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  Plus,
  GripVertical,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { uploadToR2 } from '@/lib/api-client';

interface ImageUploadManagerProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
  maxFileSizeMB?: number;
}

export function ImageUploadManager({
  images = [],
  onImagesChange,
  maxImages = 5,
  maxFileSizeMB = 3
}: ImageUploadManagerProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Drag and drop state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxSizeBytes = maxFileSizeMB * 1024 * 1024;

  const showNotification = (type: 'error' | 'success', msg: string) => {
    if (type === 'error') {
      setErrorMessage(msg);
      setTimeout(() => setErrorMessage(null), 4500);
    } else {
      setSuccessMessage(msg);
      setTimeout(() => setSuccessMessage(null), 3500);
    }
  };

  // Handle batch file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const remainingSlots = maxImages - images.length;
    if (remainingSlots <= 0) {
      showNotification('error', `Maximum image limit reached (up to ${maxImages} images).`);
      return;
    }

    const filesToUpload = files.slice(0, remainingSlots);
    if (files.length > remainingSlots) {
      showNotification('error', `Only the first ${remainingSlots} images were selected (Limit: ${maxImages}).`);
    }

    // Validate size & type
    for (const f of filesToUpload) {
      if (!f.type.startsWith('image/')) {
        showNotification('error', `File "${f.name}" is not a supported image format.`);
        return;
      }
      if (f.size > maxSizeBytes) {
        showNotification('error', `Image "${f.name}" exceeds the ${maxFileSizeMB}MB limit (${(f.size / 1024 / 1024).toFixed(1)}MB). Please compress before uploading.`);
        return;
      }
    }

    try {
      setIsUploading(true);
      const uploadedUrls: string[] = [];

      for (const file of filesToUpload) {
        const res = await uploadToR2(file, 'game-media');
        if (res.success && res.url) {
          uploadedUrls.push(res.url);
        } else {
          showNotification('error', res.error || `Failed to upload "${file.name}"`);
        }
      }

      if (uploadedUrls.length > 0) {
        const updated = [...images, ...uploadedUrls];
        onImagesChange(updated);
        showNotification('success', `Successfully uploaded ${uploadedUrls.length} image(s) to Cloudflare R2!`);
      }
    } catch (err: any) {
      showNotification('error', err.message || 'Image upload error. Please try again.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Remove an image
  const handleRemoveImage = (indexToRemove: number) => {
    const updated = images.filter((_, idx) => idx !== indexToRemove);
    onImagesChange(updated);
  };

  // Set an image directly as Cover (moves to index 0)
  const handleSetAsCover = (index: number) => {
    if (index === 0) return;
    const updated = [...images];
    const [selected] = updated.splice(index, 1);
    updated.unshift(selected);
    onImagesChange(updated);
    showNotification('success', 'Set as primary cover image!');
  };

  // Move left / right
  const handleMove = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= images.length) return;
    const updated = [...images];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    onImagesChange(updated);
  };

  // Drag and drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }
    const updated = [...images];
    const [moved] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, moved);
    onImagesChange(updated);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="space-y-4">
      {/* Toast Alert */}
      {errorMessage && (
        <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 animate-fadeIn">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/40 p-3 text-xs text-emerald-300 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-emerald-400" />
            <span>Image Management</span>
          </label>
          <span className="rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
            {images.length} / {maxImages} Images
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-stone-400">
          <span className="text-emerald-400 font-semibold">★ 1st leftmost image is the Cover</span>
          <span>·</span>
          <span>Drag & Drop to reorder</span>
          <span>·</span>
          <span>Max {maxFileSizeMB}MB/each</span>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleFileUpload}
        className="hidden"
        id="unified-image-upload-input"
      />

      {/* Main Image Grid (Draggable) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {images.map((imgUrl, idx) => {
          const isCover = idx === 0;
          const isDraggingThis = draggedIndex === idx;
          const isDragOverThis = dragOverIndex === idx;

          return (
            <div
              key={`${imgUrl}-${idx}`}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDrop={() => handleDrop(idx)}
              onDragEnd={() => {
                setDraggedIndex(null);
                setDragOverIndex(null);
              }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition duration-200 cursor-grab active:cursor-grabbing shadow-lg select-none ${
                isCover
                  ? 'border-emerald-400/60 ring-2 ring-emerald-400/30 bg-emerald-950/20'
                  : 'border-white/10 bg-[#0d1012] hover:border-white/20'
              } ${isDraggingThis ? 'opacity-40 scale-95 border-dashed border-emerald-400' : ''} ${
                isDragOverThis ? 'border-2 border-emerald-300 ring-4 ring-emerald-400/40 scale-102' : ''
              }`}
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                <img
                  src={imgUrl}
                  alt={isCover ? 'Game Cover Art' : `Game Screenshot ${idx}`}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />

                {/* Top Badge: Cover vs Screenshot Index */}
                <div className="absolute left-2 top-2 z-10 flex items-center gap-1">
                  {isCover ? (
                    <span className="flex items-center gap-1 rounded-lg bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold text-black shadow-md backdrop-blur">
                      <Star className="h-3 w-3 fill-black" />
                      <span>Cover</span>
                    </span>
                  ) : (
                    <span className="rounded-md bg-black/75 px-1.5 py-0.5 text-[9px] font-bold text-stone-300 backdrop-blur">
                      #{idx + 1}
                    </span>
                  )}
                </div>

                {/* Drag Grip Handle */}
                <div className="absolute right-2 top-2 z-10 rounded-md bg-black/70 p-1 text-stone-300 backdrop-blur opacity-70 group-hover:opacity-100 transition">
                  <GripVertical className="h-3.5 w-3.5" />
                </div>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(idx);
                  }}
                  className="absolute right-2 bottom-2 z-10 grid h-7 w-7 place-items-center rounded-lg bg-rose-600/90 text-white shadow hover:bg-rose-700 transition opacity-0 group-hover:opacity-100"
                  title="Remove image"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Bottom Quick Controls (Order & Set As Cover) */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-2 py-1.5 text-[10px]">
                {!isCover ? (
                  <button
                    type="button"
                    onClick={() => handleSetAsCover(idx)}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
                  >
                    ★ Set as Cover
                  </button>
                ) : (
                  <span className="text-emerald-300 font-bold">Default Cover</span>
                )}

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => handleMove(idx, idx - 1)}
                    className="grid h-5 w-5 place-items-center rounded bg-white/10 text-stone-300 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition"
                    title="Move Left"
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </button>
                  <button
                    type="button"
                    disabled={idx === images.length - 1}
                    onClick={() => handleMove(idx, idx + 1)}
                    className="grid h-5 w-5 place-items-center rounded bg-white/10 text-stone-300 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition"
                    title="Move Right"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Upload Card Box (if under max limit) */}
        {images.length < maxImages && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`aspect-[16/9] sm:aspect-auto sm:min-h-[140px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] cursor-pointer transition hover:border-emerald-400/50 hover:bg-white/[0.04] text-center p-4 group ${
              isUploading ? 'pointer-events-none opacity-60' : ''
            }`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-6 w-6 text-emerald-400 animate-spin" />
                <span className="text-xs text-emerald-300 font-medium">Uploading to R2...</span>
              </div>
            ) : (
              <>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 group-hover:scale-110 transition mb-2 shadow-inner">
                  <Plus className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold text-stone-200">
                  {images.length === 0 ? 'Upload Images' : 'Add Image'}
                </p>
                <p className="text-[10px] text-stone-400 mt-1">
                  Multi-select · {maxImages - images.length} remaining
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {images.length === 0 && (
        <p className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-xl p-2.5">
          💡 Note: Please upload at least 1 image. The 1st leftmost image will serve as the primary game cover across cards, search, and detail pages.
        </p>
      )}
    </div>
  );
}
