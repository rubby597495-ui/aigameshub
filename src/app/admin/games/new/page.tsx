'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  PlusCircle, 
  ArrowLeft, 
  Sparkles, 
  Gamepad2, 
  CheckCircle2, 
  Image as ImageIcon,
  Layers
} from 'lucide-react';
import { CATEGORIES, AI_MECHANICS, PLATFORMS } from '@/data/categories';
import { ImageUploadManager } from '@/components/ui/ImageUploadManager';

export default function AdminNewGamePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    developer: '',
    publisher: 'Self-Published',
    releaseYear: '2026',
    websiteUrl: '',
    tier: 'AI-Native',
    aiType: 'AI_NATIVE',
    genreKey: 'G1',
    genreSlug: 'narrative-adventure',
    genreName: 'Narrative Adventure',
    mechanicKey: 'N1',
    mechanicSlug: 'ai-npc-interrogation',
    mechanicName: 'AI NPC Interrogation',
    status: 'Released',
    platforms: ['Browser'],
    coverUrl: '',
    screenshots: [] as string[],
    tagline: '',
    aiRoleDescription: '',
    description: '',
    aiScore: 9.2,
    funScore: 9.0,
    isFeatured: false,
    isHot: true
  });

  const [saving, setSaving] = useState(false);

  const handleTitleChange = (val: string) => {
    const slug = val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/[\s_]+/g, '-');

    setFormData({
      ...formData,
      title: val,
      slug: slug || formData.slug
    });
  };

  const handleGenreChange = (slug: string) => {
    const found = CATEGORIES.find((c) => c.slug === slug);
    if (found) {
      setFormData({
        ...formData,
        genreSlug: found.slug,
        genreKey: found.key,
        genreName: found.name,
        coverUrl: formData.coverUrl || `/images/placeholders/${found.slug}.jpg`
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

  const handlePlatformToggle = (plat: string) => {
    if (formData.platforms.includes(plat)) {
      if (formData.platforms.length > 1) {
        setFormData({
          ...formData,
          platforms: formData.platforms.filter((p) => p !== plat)
        });
      }
    } else {
      setFormData({
        ...formData,
        platforms: [...formData.platforms, plat]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/games');
      } else {
        alert(data.error || 'Failed to create game.');
      }
    } catch (err) {
      alert('Error submitting game.');
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
        <span className="text-xs text-stone-500 font-mono">POST /api/admin/games</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Form (8 cols) */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
            <h2 className="text-sm font-bold text-stone-100 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
              <Gamepad2 className="h-4 w-4 text-emerald-400" />
              <span>1. Basic Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Game Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vaudeville"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">URL Slug *</label>
                <input
                  type="text"
                  required
                  placeholder="vaudeville"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Developer / Studio *</label>
                <input
                  type="text"
                  required
                  placeholder="Bumblehead Games"
                  value={formData.developer}
                  onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Release Year</label>
                <input
                  type="text"
                  placeholder="2026"
                  value={formData.releaseYear}
                  onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
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

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Website / Steam URL *</label>
              <input
                type="url"
                required
                placeholder="https://store.steampowered.com/app/..."
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          {/* AI Taxonomy Classification */}
          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
              <Sparkles className="h-4 w-4" />
              <span>2. AI Taxonomy & Rules</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">AI Eligibility Tier</label>
                <select
                  value={formData.tier}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tier: e.target.value,
                      aiType: e.target.value === 'AI-Augmented' ? 'AI_AUGMENTED' : 'AI_NATIVE'
                    })
                  }
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  <option value="AI-Native">AI-Native (Core Loop)</option>
                  <option value="AI-Augmented">AI-Augmented (Enhanced)</option>
                  <option value="AI-Boundary">AI-Boundary (Companion / Sandbox)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Genre (Axis G)</label>
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
                <label className="block text-xs text-stone-300 mb-1 font-medium">AI Mechanic (Axis N)</label>
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
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-xs text-stone-300 mb-1.5 font-medium">Supported Platforms</label>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.filter((p) => p.slug !== 'all').map((p) => {
                  const selected = formData.platforms.includes(p.name);
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => handlePlatformToggle(p.name)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition ${
                        selected
                          ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                          : 'border-white/10 bg-white/[0.02] text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Cover Art & Screenshots Management (Cloudflare R2 Direct Upload) */}
          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
            <h2 className="text-sm font-bold text-stone-100 uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
              <ImageIcon className="h-4 w-4 text-emerald-400" />
              <span>3. 图片与截图管理 (Cloudflare R2 直传)</span>
            </h2>

            <ImageUploadManager
              coverUrl={formData.coverUrl}
              onCoverChange={(url) => setFormData((prev) => ({ ...prev, coverUrl: url }))}
              screenshots={formData.screenshots || []}
              onScreenshotsChange={(urls) => setFormData((prev) => ({ ...prev, screenshots: urls }))}
              maxScreenshots={5}
              maxFileSizeMB={3}
            />
          </div>

          {/* Descriptions & AI Mechanism Breakdown */}
          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4">
            <h2 className="text-sm font-bold text-stone-100 uppercase tracking-wider border-b border-white/10 pb-3">
              4. Description & Generative Breakdown
            </h2>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">One-Line Hook / Tagline *</label>
              <input
                type="text"
                required
                placeholder="Talk your way into strangers' homes as a deceptive vampire."
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#121619] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">
                AI in Action: What does Generative AI do in this game? (Crucial) *
              </label>
              <textarea
                required
                rows={3}
                placeholder="In this game, generative AI powers the core loop through unscripted dialogue..."
                value={formData.aiRoleDescription}
                onChange={(e) => setFormData({ ...formData, aiRoleDescription: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#121619] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Detailed Gameplay Overview</label>
              <textarea
                rows={4}
                placeholder="Comprehensive summary of gameplay loop, controls, and features."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#121619] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
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
              {saving ? 'Creating Game...' : 'Save & Publish Game'}
            </button>
          </div>
        </form>

        {/* Live Card Preview (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="sticky top-20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Live Card Preview
            </h3>

            <div className="archive-surface rounded-xl border border-white/10 overflow-hidden bg-[#161B1E] p-3 space-y-2">
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-stone-900 border border-white/10">
                <img
                  src={formData.coverUrl || `/images/placeholders/${formData.genreSlug}.jpg`}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                  {formData.tier}
                </span>
                <span className="absolute right-2 bottom-2 rounded bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
                  ★ {formData.aiScore}
                </span>
              </div>

              <div>
                <p className="font-bold text-stone-100 text-sm truncate">
                  {formData.title || 'Untitled Game'}
                </p>
                <p className="text-[10px] text-stone-400">
                  By {formData.developer || 'Studio'} • {formData.releaseYear}
                </p>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1">
                  {formData.tagline || 'Game tagline will appear here...'}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                <span className="rounded bg-white/[0.04] border border-white/10 px-1.5 py-0.5 text-[9px] text-stone-300">
                  {formData.genreName}
                </span>
                <span className="rounded bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 text-[9px] text-emerald-300">
                  {formData.mechanicName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
