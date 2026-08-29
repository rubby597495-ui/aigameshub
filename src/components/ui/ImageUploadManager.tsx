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
  Eye
} from 'lucide-react';
import { uploadToR2 } from '@/lib/api-client';

interface ImageUploadManagerProps {
  coverUrl: string;
  onCoverChange: (url: string) => void;
  screenshots: string[];
  onScreenshotsChange: (urls: string[]) => void;
  maxScreenshots?: number;
  maxFileSizeMB?: number;
}

export function ImageUploadManager({
  coverUrl,
  onCoverChange,
  screenshots = [],
  onScreenshotsChange,
  maxScreenshots = 5,
  maxFileSizeMB = 3
}: ImageUploadManagerProps) {
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingScreenshots, setIsUploadingScreenshots] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const coverInputRef = useRef<HTMLInputElement>(null);
  const screenshotsInputRef = useRef<HTMLInputElement>(null);

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

  // Handle Cover Image Upload
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showNotification('error', '请上传有效的图片文件 (PNG, JPG, WEBP)');
      return;
    }

    if (file.size > maxSizeBytes) {
      showNotification('error', `封面图片过大 (${(file.size / 1024 / 1024).toFixed(1)}MB)，单张图片最大支持 ${maxFileSizeMB}MB`);
      return;
    }

    try {
      setIsUploadingCover(true);
      const res = await uploadToR2(file, 'covers');
      if (res.success && res.url) {
        onCoverChange(res.url);
        showNotification('success', '主封面图片已成功上传至 Cloudflare R2！');
      } else {
        showNotification('error', res.error || '上传到 R2 失败，请检查网络或后端服务');
      }
    } catch (err: any) {
      showNotification('error', err.message || '上传异常，请稍后重试');
    } finally {
      setIsUploadingCover(false);
      if (coverInputRef.current) coverInputRef.current.value = '';
    }
  };

  // Handle Screenshots Batch Upload (Max 5)
  const handleScreenshotsUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const remainingSlots = maxScreenshots - screenshots.length;
    if (remainingSlots <= 0) {
      showNotification('error', `已达到最大截图数量限制 (最多 ${maxScreenshots} 张)`);
      return;
    }

    const filesToUpload = files.slice(0, remainingSlots);
    if (files.length > remainingSlots) {
      showNotification('error', `已自动截取前 ${remainingSlots} 张图片，最多允许上传 ${maxScreenshots} 张截图`);
    }

    // Validate sizes
    for (const f of filesToUpload) {
      if (f.size > maxSizeBytes) {
        showNotification('error', `图片 "${f.name}" 超过 ${maxFileSizeMB}MB 限制，请压缩后重试`);
        return;
      }
    }

    try {
      setIsUploadingScreenshots(true);
      const uploadedUrls: string[] = [];

      for (const file of filesToUpload) {
        const res = await uploadToR2(file, 'screenshots');
        if (res.success && res.url) {
          uploadedUrls.push(res.url);
        } else {
          showNotification('error', res.error || `图片 "${file.name}" 上传失败`);
        }
      }

      if (uploadedUrls.length > 0) {
        onScreenshotsChange([...screenshots, ...uploadedUrls]);
        showNotification('success', `成功上传 ${uploadedUrls.length} 张截图至 Cloudflare R2！`);
      }
    } catch (err: any) {
      showNotification('error', err.message || '截图上传失败');
    } finally {
      setIsUploadingScreenshots(false);
      if (screenshotsInputRef.current) screenshotsInputRef.current.value = '';
    }
  };

  // Remove Screenshot
  const handleRemoveScreenshot = (indexToRemove: number) => {
    const updated = screenshots.filter((_, idx) => idx !== indexToRemove);
    onScreenshotsChange(updated);
  };

  return (
    <div className="space-y-6">
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

      {/* 1. Main Cover Art Upload Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-semibold text-stone-200">
            1. 游戏主封面图 (Game Cover Art) <span className="text-emerald-400">*</span>
          </label>
          <span className="text-[10px] text-stone-400 font-mono">
            单张最大 {maxFileSizeMB}MB · 推荐 16:9 (1280×720)
          </span>
        </div>

        <input
          ref={coverInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={handleCoverUpload}
          className="hidden"
          id="cover-file-input"
        />

        {coverUrl ? (
          <div className="relative group aspect-[16/9] w-full max-w-md overflow-hidden rounded-2xl border border-emerald-400/30 bg-[#0d1012] shadow-xl">
            <img
              src={coverUrl}
              alt="Game Cover Preview"
              className="h-full w-full object-cover transition group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-between p-3.5">
              <span className="rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-emerald-300 backdrop-blur">
                Cloudflare R2 CDN 已就绪
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={isUploadingCover}
                  className="rounded-lg bg-white/20 px-2.5 py-1 text-xs font-semibold text-white hover:bg-white/30 backdrop-blur transition"
                >
                  {isUploadingCover ? '上传中...' : '更换封面'}
                </button>
                <button
                  type="button"
                  onClick={() => onCoverChange('')}
                  className="grid h-7 w-7 place-items-center rounded-lg bg-rose-500/70 text-white hover:bg-rose-600 transition"
                  title="删除封面"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => coverInputRef.current?.click()}
            className={`group relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] p-8 text-center cursor-pointer transition hover:border-emerald-400/50 hover:bg-white/[0.04] ${
              isUploadingCover ? 'pointer-events-none opacity-60' : ''
            }`}
          >
            {isUploadingCover ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 text-emerald-400 animate-spin" />
                <span className="text-xs text-emerald-300 font-medium">正在直传至 Cloudflare R2 存储桶...</span>
              </div>
            ) : (
              <>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 mb-3 group-hover:scale-110 transition">
                  <Upload className="h-6 w-6" />
                </div>
                <p className="text-xs font-bold text-stone-200">
                  点击或拖拽上传游戏主封面
                </p>
                <p className="text-[10px] text-stone-400 mt-1">
                  自动上传至 R2 并回传全球 CDN 高速链接 (PNG / JPG / WEBP，最大 {maxFileSizeMB}MB)
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* 2. Screenshots Gallery Upload Section (Max 5) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-semibold text-stone-200 flex items-center gap-2">
            <span>2. 游戏实机截图画廊 (Screenshots Gallery)</span>
            <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.2 text-[10px] font-bold text-emerald-300">
              {screenshots.length} / {maxScreenshots} 张
            </span>
          </label>
          <span className="text-[10px] text-stone-400 font-mono">
            最多 {maxScreenshots} 张 · 每张最大 {maxFileSizeMB}MB
          </span>
        </div>

        <input
          ref={screenshotsInputRef}
          type="file"
          multiple
          accept="image/png,image/jpeg,image/webp"
          onChange={handleScreenshotsUpload}
          className="hidden"
          id="screenshots-file-input"
        />

        {/* Thumbnails Grid & Upload Box */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {screenshots.map((shotUrl, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d1012] shadow-md"
            >
              <img
                src={shotUrl}
                alt={`Screenshot ${idx + 1}`}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-1.5 top-1.5 rounded bg-black/70 px-1.5 py-0.2 text-[8px] font-bold text-stone-300 backdrop-blur">
                #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveScreenshot(idx)}
                className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-lg bg-rose-500/80 text-white opacity-0 group-hover:opacity-100 hover:bg-rose-600 transition shadow"
                title="删除截图"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}

          {/* Add Screenshot Card (if below max limit) */}
          {screenshots.length < maxScreenshots && (
            <div
              onClick={() => screenshotsInputRef.current?.click()}
              className={`aspect-[16/9] w-full flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/15 bg-white/[0.02] cursor-pointer transition hover:border-emerald-400/50 hover:bg-white/[0.04] text-center p-2 group ${
                isUploadingScreenshots ? 'pointer-events-none opacity-60' : ''
              }`}
            >
              {isUploadingScreenshots ? (
                <div className="flex flex-col items-center gap-1">
                  <Loader2 className="h-5 w-5 text-emerald-400 animate-spin" />
                  <span className="text-[9px] text-emerald-300">上传中...</span>
                </div>
              ) : (
                <>
                  <div className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.05] border border-white/10 text-stone-400 group-hover:text-emerald-300 group-hover:scale-110 transition mb-1">
                    <Plus className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-medium text-stone-300">
                    添加截图
                  </span>
                  <span className="text-[8px] text-stone-500">
                    还可添加 {maxScreenshots - screenshots.length} 张
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
