import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Info, Sparkles, Target, Layers, Globe, Shield } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'About AiGamesHub: AI-Native Game Research & Directory',
  description:
    'Learn about AiGamesHub: our mission to catalog generative AI video games, AI play mechanic taxonomies & screening standards for developers.',
  keywords: [
    'about AiGamesHub',
    'AI-native game taxonomy',
    'AI video game research',
    'generative AI gameplay standards',
    'AI game classification'
  ]
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-100 flex items-center gap-3">
          <Info className="h-8 w-8 text-emerald-400" />
          <span>About AiGamesHub</span>
        </h1>
        <p className="mt-2 text-sm text-stone-400 leading-relaxed max-w-2xl">
          The international discovery hub, research catalog, and community rating platform dedicated exclusively to generative AI video games.
        </p>
      </div>

      {/* Mission Section */}
      <section className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-emerald-300">
          <Target className="h-5 w-5" />
          <h2 className="text-lg sm:text-xl font-bold text-stone-100">Our Mission</h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          The emergence of Large Language Models (LLMs), diffusion models, and autonomous multi-agent architectures has sparked a paradigm shift in interactive entertainment. AiGamesHub exists to track, curate, and critically analyze games where <strong>generative AI is not merely a production tool, but the runtime heart of gameplay</strong>.
        </p>
      </section>

      {/* Classification Methodology */}
      <section className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-emerald-300">
          <Layers className="h-5 w-5" />
          <h2 className="text-lg sm:text-xl font-bold text-stone-100">The Dual-Axis Classification Methodology</h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          Every game in our directory is verified and categorized across two orthogonal dimensions to distinguish game themes from underlying AI mechanics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
            <h3 className="font-bold text-emerald-300 text-sm">Axis G: Traditional Game Genre</h3>
            <p className="text-stone-400 leading-relaxed">
              Classifies the structural gameplay framework players know: Narrative Adventure, RPG, Puzzle & Mystery, Strategy & Management, Simulation, Sandbox & Creation, Party & Social, Romance & Companion, and Experimental Hybrid.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
            <h3 className="font-bold text-emerald-300 text-sm">Axis N: AI Play Mechanic</h3>
            <p className="text-stone-400 leading-relaxed">
              Defines what the player actually does <em>through</em> the AI: Interrogating unscripted AI suspects (N1), Persuading dynamic minds (N2), Generative AI Dungeon Master (N3), Semantic mechanics (N4), Agentic simulation (N5), and Generative artifacts (N6).
            </p>
          </div>
        </div>
      </section>

      {/* Tiers Explained */}
      <section className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-stone-100">Eligibility Tiers</h2>
        <div className="space-y-3 text-xs">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
            <p className="font-bold text-emerald-300 text-sm">🟢 AI-Native</p>
            <p className="text-stone-300 mt-1">
              Generative AI is the irreducible core loop. Remove the AI, and the game collapses into an unplayable state.
            </p>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4">
            <p className="font-bold text-blue-300 text-sm">🔵 AI-Augmented</p>
            <p className="text-stone-300 mt-1">
              Solid traditional games where generative AI significantly enriches characters, dialogue variations, or procedural events.
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
            <p className="font-bold text-amber-300 text-sm">🟠 AI-Boundary</p>
            <p className="text-stone-300 mt-1">
              Play-adjacent interactive media exploring companion lifespans, infinite world generation, and open-ended conversation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
