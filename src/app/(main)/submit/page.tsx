'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CATEGORIES, AI_MECHANICS, AI_TYPES, PLATFORMS } from '@/data/categories';
import { PlusCircle, Sparkles, CheckCircle2, Upload, Link as LinkIcon, Gamepad2 } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export default function SubmitGamePage() {
  const [formData, setFormData] = useState({
    title: '',
    websiteUrl: '',
    tier: 'AI-Native',
    genre: 'narrative-adventure',
    mechanic: 'ai-npc-interrogation',
    platforms: ['Browser'],
    developer: '',
    releaseYear: '2026',
    tagline: '',
    description: '',
    aiRoleDescription: '',
    contactEmail: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
          Are you building an AI-native game or an experimental LLM-powered interactive experience? Submit your title to be indexed in the global AiGamesHub directory.
        </p>
      </div>

      {isSubmitted ? (
        <div className="archive-surface rounded-3xl p-10 text-center border border-emerald-400/30 bg-emerald-950/20 space-y-4">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400 animate-bounce" />
          <h2 className="text-xl font-bold text-stone-100">
            Game Submission Received!
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            Thank you for submitting <strong>{formData.title}</strong>. Our editorial team will review your AI play mechanisms and verify your links within 24-48 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="rounded-xl bg-[#8FAFA3] px-6 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition"
          >
            Submit Another Game
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
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
                  placeholder="e.g. Suck Up! or Vaudeville"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Game URL / Store Page *</label>
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
                <label className="block text-xs text-stone-300 mb-1 font-medium">Studio / Developer Name *</label>
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
                <label className="block text-xs text-stone-300 mb-1 font-medium">Contact Email (for verification)</label>
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
              <span>2. AI Taxonomy & Mechanics</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">AI Type</label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  <option value="AI-Native">AI-Native (Generative AI is Core Loop)</option>
                  <option value="AI-Augmented">AI-Augmented (AI Enriches Content)</option>
                  <option value="AI-Boundary">AI-Boundary (Experimental / Companion)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">Primary Genre</label>
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
                <label className="block text-xs text-stone-300 mb-1 font-medium">AI Play Mechanic</label>
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

            {/* Platforms Selector */}
            <div>
              <label className="block text-xs text-stone-300 mb-1.5 font-medium">Supported Platforms</label>
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

          {/* Descriptions */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              3. Description & AI Mechanism Breakdown
            </h2>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">One-Line Hook / Tagline *</label>
              <input
                type="text"
                required
                placeholder="A compelling 1-sentence description of the gameplay premise"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">
                How does Generative AI power this game? (Crucial for Classification) *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Explain what the AI does in real-time: Is it driving NPC dialogues, generating storylines as a Game Master, interpreting natural speech, or authoring rules?"
                value={formData.aiRoleDescription}
                onChange={(e) => setFormData({ ...formData, aiRoleDescription: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">Detailed Game Overview</label>
              <textarea
                rows={4}
                placeholder="Provide a comprehensive summary of the story, gameplay loop, controls, and features."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-[#8FAFA3] px-8 py-3 text-xs font-bold text-[#101715] shadow-lg shadow-black/30 hover:bg-[#A2BDB3] transition"
            >
              Submit Game for Indexing
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
