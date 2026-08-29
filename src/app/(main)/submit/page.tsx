'use client';

import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CATEGORIES, AI_MECHANICS, AI_TYPES, PLATFORMS } from '@/data/categories';
import { PlusCircle, Sparkles, CheckCircle2, Link as LinkIcon, Gamepad2, ImageIcon, User, Lock, ArrowRight } from 'lucide-react';
import { ImageUploadManager } from '@/components/ui/ImageUploadManager';
import { useUserAuth } from '@/contexts/UserAuthContext';

export default function SubmitGamePage() {
  const { user, openAuthModal } = useUserAuth();

  const [formData, setFormData] = useState({
    title: '',
    websiteUrl: '',
    tier: 'AI-Native',
    genre: 'narrative-adventure',
    mechanic: 'ai-npc-interrogation',
    platforms: ['Browser'],
    developer: '',
    releaseYear: '2026',
    coverUrl: '',
    screenshots: [] as string[],
    tagline: '',
    description: '',
    aiRoleDescription: '',
    contactEmail: ''
  });

  // Pre-fill user data when logged in
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        developer: prev.developer || user.name,
        contactEmail: prev.contactEmail || user.email,
      }));
    }
  }, [user]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!user) {
      openAuthModal('login');
      return;
    }

    if (!formData.coverUrl) {
      setSubmitError('Please upload at least one image to serve as the game cover.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userId: user.id,
        })
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.error || 'Submission failed. Please check your inputs and try again.');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlatformChange = (plat: string) => {
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

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ name: 'Submit Game', url: '/submit' }]} />

      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <PlusCircle className="h-7 w-7 text-emerald-400" />
          <span>Submit Your AI Game</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
          Are you an indie developer or studio? Submit your game utilizing Generative AI, LLM NPCs, or neural generation mechanics to the AiGamesHub global index.
        </p>
      </div>

      {!user ? (
        <div className="archive-surface rounded-3xl p-10 sm:p-12 text-center border border-white/10 bg-white/[0.02] space-y-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 mx-auto">
            <Lock className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-stone-100">
            Sign in Required to Submit a Game
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            To ensure authorship verification and feedback delivery, submitting games requires an active player or developer account.
          </p>
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-8 py-3 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-lg shadow-emerald-950/40"
          >
            <User className="h-4 w-4" />
            <span>Sign In / Register to Submit</span>
          </button>
        </div>
      ) : isSubmitted ? (
        <div className="archive-surface rounded-3xl p-10 text-center border border-emerald-400/30 bg-emerald-950/20 space-y-4">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400 animate-bounce" />
          <h2 className="text-xl font-bold text-stone-100">
            Game Submitted Successfully!
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            Thank you for submitting <strong>{formData.title}</strong>. Our editorial team will review the AI mechanics and external links within 24-48 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                title: '',
                websiteUrl: '',
                tier: 'AI-Native',
                genre: 'narrative-adventure',
                mechanic: 'ai-npc-interrogation',
                platforms: ['Browser'],
                developer: user.name,
                releaseYear: '2026',
                coverUrl: '',
                screenshots: [],
                tagline: '',
                description: '',
                aiRoleDescription: '',
                contactEmail: user.email
              });
            }}
            className="rounded-xl bg-[#8FAFA3] px-6 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition"
          >
            Submit Another Game
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          {/* Submitter info banner */}
          <div className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-950/30 p-3.5 text-xs text-emerald-200">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-400/20 text-emerald-300 font-bold uppercase text-xs">
                {user.name.charAt(0)}
              </span>
              <span>Submitted by: <strong>{user.name}</strong> ({user.email})</span>
            </div>
            <span className="text-[10px] text-emerald-400/70 font-mono">Verified Creator Account</span>
          </div>

          {submitError && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
              {submitError}
            </div>
          )}

          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              <span>1. Basic Game Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Game Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suck Up! or Infinite Craft"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Official Website / Steam Store URL *</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
                  <input
                    type="url"
                    required
                    placeholder="https://store.steampowered.com/app/..."
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Developer / Studio Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Proxima Studio"
                  value={formData.developer}
                  onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Contact Email (for review updates) *</label>
                <input
                  type="email"
                  required
                  placeholder="developer@studio.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* AI Taxonomy Classification */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>2. AI Taxonomy & Classification</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">AI Integration Tier *</label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  <option value="AI-Native">AI-Native (Core loop powered by AI)</option>
                  <option value="AI-Augmented">AI-Augmented (Enhanced with generative features)</option>
                  <option value="AI-Boundary">AI-Boundary (Experimental research prototype)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Primary Genre *</label>
                <select
                  value={formData.genre}
                  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Core AI Interaction Mechanic *</label>
                <select
                  value={formData.mechanic}
                  onChange={(e) => setFormData({ ...formData, mechanic: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  {AI_MECHANICS.map((m) => (
                    <option key={m.slug} value={m.slug}>{m.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-xs text-stone-300 mb-1.5 font-medium">Supported Platforms *</label>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.filter((p) => p.slug !== 'all').map((p) => {
                  const selected = formData.platforms.includes(p.name);
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => handlePlatformChange(p.name)}
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

          {/* 3. Image Management */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <ImageUploadManager
              images={[
                formData.coverUrl,
                ...(formData.screenshots || []).filter((s) => s !== formData.coverUrl)
              ].filter(Boolean)}
              onImagesChange={(newImgs) =>
                setFormData((prev) => ({
                  ...prev,
                  coverUrl: newImgs[0] || '',
                  screenshots: newImgs
                }))
              }
              maxImages={5}
              maxFileSizeMB={3}
            />
          </div>

          {/* Descriptions */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              4. Gameplay Tagline & AI Implementation Breakdown
            </h2>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">One-Line Hook / Tagline *</label>
              <input
                type="text"
                required
                placeholder="e.g. Converse with LLM NPCs to uncover a suburban neighborhood mystery."
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">
                What does Generative AI do in this game? (Crucial) *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Detail how AI operates in the core loop: unscripted dynamic dialogue, neural world generation, intelligent Game Master agent, real-time image synthesis..."
                value={formData.aiRoleDescription}
                onChange={(e) => setFormData({ ...formData, aiRoleDescription: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Detailed Overview</label>
              <textarea
                rows={4}
                placeholder="Introduce premise, key mechanics, player progression, and innovation highlights..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-[#8FAFA3] px-8 py-3 text-xs font-bold text-[#101715] shadow-lg shadow-black/30 hover:bg-[#A2BDB3] transition disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Game to Global Index'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
