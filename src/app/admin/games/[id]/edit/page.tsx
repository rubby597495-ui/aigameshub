'use client';

export const runtime = 'edge';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Edit3, 
  ArrowLeft, 
  Sparkles, 
  Gamepad2, 
  CheckCircle2, 
  Trash2
} from 'lucide-react';
import { CATEGORIES, AI_MECHANICS, PLATFORMS } from '@/data/categories';
import { Game } from '@/types/game';
import { ImageUploadManager } from '@/components/ui/ImageUploadManager';

export default function AdminEditGamePage() {
  const router = useRouter();
  const params = useParams();
  const gameId = params.id as string;

  const [formData, setFormData] = useState<Game | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGame() {
      try {
        const res = await fetch('/api/admin/games');
        const data = await res.json();
        if (data.success) {
          const found = data.games.find((g: Game) => g.id.toString() === gameId);
          if (found) {
            setFormData(found);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadGame();
  }, [gameId]);

  if (loading) {
    return <div className="py-20 text-center text-xs text-stone-400">Loading game details...</div>;
  }

  if (!formData) {
    return (
      <div className="py-20 text-center space-y-3">
        <p className="text-sm font-semibold text-stone-300">Game not found.</p>
        <Link href="/admin/games" className="text-xs text-emerald-400 hover:underline">
          Return to Games List
        </Link>
      </div>
    );
  }

  const handleGenreChange = (slug: string) => {
    const found = CATEGORIES.find((c) => c.slug === slug);
    if (found) {
      setFormData({
        ...formData,
        genreSlug: found.slug,
        genreKey: found.key,
        genreName: found.name
      });
    }
  };

  const handleMechanicChange = (slug: string) => {
    const found = AI_MECHANICS.find((m) => m.slug === slug);
    if (found) {
      setFormData({
        ...formData,
        mechanicSlug: found.slug,
        mechanicKey: found.key,
        mechanicName: found.name
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/games/${gameId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/games');
      } else {
        alert(data.error || 'Failed to update game.');
      }
    } catch (err) {
      alert('Error updating game.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Breadcrumb & Actions */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <Link
          href="/admin/games"
          className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-emerald-300 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Games List</span>
        </Link>
        <div className="flex items-center gap-2 text-xs">
          <Link
            href={`/games/${formData.slug}`}
            target="_blank"
            className="text-emerald-400 hover:underline"
          >
            View Public Page →
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
          <h2 className="text-sm font-bold text-stone-100 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
            <Edit3 className="h-4 w-4 text-emerald-400" />
            <span>Editing: {formData.title}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Game Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">URL Slug</label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Developer</label>
              <input
                type="text"
                required
                value={formData.developer}
                onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Release Year</label>
              <input
                type="text"
                value={formData.releaseYear}
                onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              >
                <option value="Released">Released</option>
                <option value="Early Access">Early Access</option>
                <option value="Demo/Playtest">Demo / Playtest</option>
                <option value="Research prototype">Research prototype</option>
                <option value="Announced/TBA">Announced / TBA</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Website / Steam URL</label>
              <input
                type="url"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Cover Image URL</label>
              <input
                type="text"
                value={formData.coverUrl}
                onChange={(e) => setFormData({ ...formData, coverUrl: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* AI Taxonomy */}
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
          <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
            <Sparkles className="h-4 w-4" />
            <span>AI Taxonomy & Ratings</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Tier</label>
              <select
                value={formData.tier}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tier: e.target.value as any,
                    aiType: e.target.value === 'AI-Augmented' ? 'AI_AUGMENTED' : 'AI_NATIVE'
                  })
                }
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              >
                <option value="AI-Native">AI-Native</option>
                <option value="AI-Augmented">AI-Augmented</option>
                <option value="AI-Boundary">AI-Boundary</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Genre</label>
              <select
                value={formData.genreSlug}
                onChange={(e) => handleGenreChange(e.target.value)}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Mechanic</label>
              <select
                value={formData.mechanicSlug}
                onChange={(e) => handleMechanicChange(e.target.value)}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              >
                {AI_MECHANICS.map((m) => (
                  <option key={m.slug} value={m.slug}>{m.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">AI Depth Score (0-10)</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="10"
                value={formData.aiScore}
                onChange={(e) => setFormData({ ...formData, aiScore: Number(e.target.value) })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Cover Art & Screenshots Management (Cloudflare R2) */}
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
          <h2 className="text-sm font-bold text-stone-100 uppercase tracking-wider border-b border-white/10 pb-3">
            图片与截图管理 (Cloudflare R2 直传)
          </h2>

          <ImageUploadManager
            coverUrl={formData.coverUrl}
            onCoverChange={(url) => setFormData((prev) => prev ? ({ ...prev, coverUrl: url }) : null)}
            screenshots={formData.screenshots || []}
            onScreenshotsChange={(urls) => setFormData((prev) => prev ? ({ ...prev, screenshots: urls }) : null)}
            maxScreenshots={5}
            maxFileSizeMB={3}
          />
        </div>

        {/* Descriptions */}
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
          <h2 className="text-sm font-bold text-stone-100 uppercase tracking-wider border-b border-white/10 pb-3">
            Description & AI in Action
          </h2>

          <div>
            <label className="block text-xs text-stone-300 mb-1 font-medium">Tagline / Hook</label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-stone-300 mb-1 font-medium">AI in Action Breakdown</label>
            <textarea
              rows={3}
              required
              value={formData.aiRoleDescription}
              onChange={(e) => setFormData({ ...formData, aiRoleDescription: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#121619] p-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-stone-300 mb-1 font-medium">Detailed Overview</label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#121619] p-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/games"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-stone-300 hover:bg-white/10 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-[#8FAFA3] px-6 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow disabled:opacity-50"
          >
            {saving ? 'Updating...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
