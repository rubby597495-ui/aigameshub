import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Gamepad2, 
  Dices, 
  PlusCircle, 
  Flame, 
  ArrowRight, 
  Cpu, 
  Bot, 
  BookOpen,
  Filter
} from 'lucide-react';
import { 
  getFeaturedGames, 
  getTrendingGames, 
  getLatestGames, 
  getAllGames 
} from '@/lib/data';
import { CATEGORIES, AI_MECHANICS, AI_TYPES } from '@/data/categories';
import { ARTICLES } from '@/data/articles';
import { GameCard } from '@/components/game/GameCard';
import { FeaturedCarousel } from '@/components/game/FeaturedCarousel';
import { constructMetadata, generateCollectionJsonLd } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'AiGamesHub: Best AI Games & AI-Native Video Games 2026',
  description:
    'Explore 90+ top AI-native & generative AI video games. Play unscripted AI RPGs, LLM NPC mysteries, and semantic sandboxes online free on AiGamesHub.',
  keywords: [
    'AI games',
    'AI native games',
    'best AI games 2026',
    'play AI games online',
    'generative AI RPG',
    'AI NPC games'
  ]
});

export default function HomePage() {
  const allGames = getAllGames();
  const featuredGames = getFeaturedGames();
  const trendingGames = getTrendingGames(8);
  const latestGames = getLatestGames(8);

  const collectionJsonLd = generateCollectionJsonLd(
    'Featured AI-Native Games Catalog',
    'Comprehensive directory of generative AI video games',
    featuredGames
  );

  return (
    <div className="space-y-8">
      {/* Schema.org CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Hero Section (miyeji.cn style) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AiGamesHub / Next-Gen AI Play Discovery Platform</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl leading-[1.15]">
            Discover the World's Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-blue-300">AI-Native Games</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300 max-w-2xl">
            Explore 90+ curated titles where generative AI forms the core gameplay loop. Interrogate unscripted AI suspects, persuade dynamic NPCs, explore AI Dungeon Masters, and experiment with semantic crafting.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-5 py-3 text-sm font-bold text-[#101715] shadow-lg shadow-black/30 hover:bg-[#A2BDB3] transition"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Explore All AI Games</span>
            </Link>

            <Link
              href="/games?sort=random"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-[#2A3442] px-5 py-3 text-sm font-semibold text-[#D8E1EA] hover:bg-[#344255] transition"
            >
              <Dices className="h-4 w-4 text-emerald-300" />
              <span>🎲 Random Play</span>
            </Link>

            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-stone-200 hover:bg-white/10 transition"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Submit Game</span>
            </Link>

            <Link
              href="/games?filters=1"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-stone-400 hover:text-white transition"
            >
              <Filter className="h-4 w-4" />
              <span>Advanced Filter</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Exploration Ticker */}
      <div className="flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-950/20 px-4 py-3 text-xs text-stone-200">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <p className="leading-5">
          <strong className="text-emerald-300">Live Pulse:</strong> Over 42,600 community sessions explored across 97 AI games. 3 new experimental prototypes added this week!
        </p>
      </div>

      {/* Featured Snap Carousel (Editor's Choice) */}
      <FeaturedCarousel
        title="⭐ Editor's Choice AI Breakthroughs"
        subtitle="Hand-picked landmark titles where generative AI defines the core play loop."
        badgeText="Curated 2026"
        games={featuredGames}
      />

      {/* AI Play Mechanics Quick Navigation */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <span>Explore by AI Play Mechanism</span>
          </h2>
          <Link href="/games" className="text-xs text-emerald-400 hover:underline">
            View taxonomy →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {AI_MECHANICS.slice(0, 6).map((mech) => (
            <Link
              key={mech.slug}
              href={`/games?mechanic=${mech.slug}`}
              className="archive-surface rounded-xl p-3 text-left transition hover:border-emerald-400/30 hover:bg-emerald-950/20 group"
            >
              <span className="text-[10px] font-bold text-emerald-400 uppercase">
                {mech.key}
              </span>
              <p className="text-xs font-semibold text-stone-200 group-hover:text-emerald-300 mt-1 line-clamp-1">
                {mech.name}
              </p>
              <p className="text-[10px] text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                {mech.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending AI Games Grid */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-400" />
              <span>Trending & Most Played AI Games</span>
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">
              Popular titles generating the highest community engagements and review scores.
            </p>
          </div>

          <Link
            href="/games?sort=hot"
            className="text-xs font-medium text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>View All ({allGames.length})</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Latest AI-Native Releases */}
      <section className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-400" />
              <span>Newly Released & Verified AI Games</span>
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">
              The freshest interactive prototypes, Steam launches, and web games.
            </p>
          </div>

          <Link
            href="/games?sort=latest"
            className="text-xs font-medium text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>Browse Library</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {latestGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Articles & Deep-Dive Insights Section */}
      <section className="archive-surface rounded-2xl p-6 sm:p-8 my-10 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-400" />
              <span>AI Game Design & Editorial Insights</span>
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">
              Deep dives into runtime LLM mechanics, prompt design, and the philosophy of generative entertainment.
            </p>
          </div>

          <Link href="/articles" className="text-xs text-emerald-400 hover:underline">
            Read all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/20 hover:bg-white/[0.04] transition"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  {article.category}
                </span>
                <h3 className="mt-1 text-sm font-bold text-stone-100 group-hover:text-emerald-300 transition line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs text-stone-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-stone-500">
                <span>{article.author}</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
