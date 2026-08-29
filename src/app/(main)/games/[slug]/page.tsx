import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  getGameBySlug, 
  getAllGames, 
  getRelatedGames 
} from '@/lib/data';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { VotingWidget } from '@/components/game/VotingWidget';
import { PlayTrackerWidget } from '@/components/game/PlayTrackerWidget';
import { GameComments } from '@/components/game/GameComments';
import { GameCard } from '@/components/game/GameCard';
import { GameGallery } from '@/components/game/GameGallery';
import { 
  ExternalLink, 
  Sparkles, 
  Calendar, 
  Gamepad2, 
  Bot, 
  Layers, 
  Building2, 
  ShieldAlert, 
  Flame, 
  Heart,
  Share2
} from 'lucide-react';
import { 
  constructMetadata, 
  generateGameJsonLd, 
  generateBreadcrumbJsonLd 
} from '@/lib/seo';
import { formatNumber, getTierBadgeStyle } from '@/lib/utils';
import { Metadata } from 'next';

interface GameDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params
}: GameDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: 'Game Not Found | AiGamesHub'
    };
  }

  let desc = `Play ${game.title}: ${game.tagline}. Discover how generative AI powers ${game.mechanicName.toLowerCase()} in this ${game.tier.toLowerCase()} game on AiGamesHub.`;
  if (desc.length > 148) {
    desc = `${desc.slice(0, 145).trim()}...`;
  }

  const titleCandidate = `${game.title} - AI Gameplay, Mechanics & Review`;
  const safeTitle = titleCandidate.length <= 58 ? titleCandidate : `${game.title} - AI Game Review | AiGamesHub`;

  return constructMetadata({
    title: safeTitle,
    description: desc,
    image: game.coverUrl,
    keywords: [
      game.title,
      `${game.title} AI game`,
      `${game.title} gameplay`,
      `play ${game.title} online`,
      game.genreName,
      game.mechanicName,
      'generative AI games',
      'AI-native games'
    ]
  });
}

export async function generateStaticParams() {
  const games = getAllGames();
  return games.map((game) => ({
    slug: game.slug
  }));
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedGames = getRelatedGames(game, 4);

  const gameJsonLd = generateGameJsonLd(game);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Games', url: '/games' },
    { name: game.genreName, url: `/games?genre=${game.genreSlug}` },
    { name: game.title, url: `/games/${game.slug}` }
  ]);

  return (
    <div className="space-y-8">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Game Library', url: '/games' },
          { name: game.genreName, url: `/games?genre=${game.genreSlug}` },
          { name: game.title, url: `/games/${game.slug}` }
        ]}
      />

      {/* Hero Showcase Banner */}
      <div className="archive-surface rounded-3xl overflow-hidden border border-white/10 p-6 sm:p-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Interactive Gallery (5 cols) */}
          <div className="lg:col-span-5">
            <GameGallery
              title={game.title}
              coverUrl={game.coverUrl}
              screenshots={game.screenshots}
              tier={game.tier}
              aiScore={game.aiScore}
            />
          </div>

          {/* Right / Title, Meta, and Action Button (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Link
                  href={`/games?genre=${game.genreSlug}`}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-stone-300 hover:text-white transition"
                >
                  {game.genreName}
                </Link>
                <Link
                  href={`/games?mechanic=${game.mechanicSlug}`}
                  className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300 hover:bg-emerald-400/20 transition"
                >
                  {game.mechanicName}
                </Link>
                <span className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-stone-400">
                  Status: <strong className="text-stone-200">{game.status}</strong>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-50 tracking-tight">
                {game.title}
              </h1>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-300">
                {game.tagline}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs">
              <div>
                <span className="text-[10px] uppercase font-semibold text-stone-500">Developer</span>
                <p className="mt-0.5 font-medium text-stone-200 truncate">{game.developer}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-stone-500">Release Year</span>
                <p className="mt-0.5 font-medium text-stone-200">{game.releaseYear}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-stone-500">Platforms</span>
                <p className="mt-0.5 font-medium text-stone-200 truncate">{game.platforms.join(', ')}</p>
              </div>
            </div>

            {/* Outbound Link & Actions (nofollow to protect SEO link juice) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {game.websiteUrl ? (
                <a
                  href={game.websiteUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-6 py-3 text-sm font-bold text-[#101715] shadow-lg shadow-black/30 hover:bg-[#A2BDB3] transition"
                >
                  <span>Play / Visit Official Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="rounded-xl bg-stone-700 px-6 py-3 text-sm font-semibold text-stone-400 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}

              <div className="flex items-center gap-2 text-xs text-stone-400 pl-2">
                <span className="flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  <strong>{formatNumber(game.viewCount)}</strong> Views
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5 text-rose-400" />
                  <strong>{formatNumber(game.likeCount)}</strong> Likes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Breakdown Content: AI in Action & Gameplay Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Columns (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* SECTION 1: AI's Role in this Game (AI 在此游戏的作用) - HIGHLIGHT */}
          <section className="archive-surface rounded-2xl p-6 border border-emerald-400/25 bg-emerald-950/15 space-y-3">
            <div className="flex items-center gap-2 text-emerald-300">
              <Sparkles className="h-5 w-5" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-100">
                AI in Action: Role & Generative Mechanics
              </h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-emerald-100/90 bg-emerald-950/30 p-4 rounded-xl border border-emerald-400/20">
              {game.aiRoleDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-300">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-[10px] font-semibold uppercase text-emerald-400">Core AI Mechanic</p>
                <p className="mt-1 font-medium">{game.mechanicName}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-[10px] font-semibold uppercase text-emerald-400">Taxonomy Tier</p>
                <p className="mt-1 font-medium">{game.tier} ({game.aiType})</p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Detailed Game Overview (游戏详细介绍) */}
          <section className="archive-surface rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-emerald-400" />
              <span>Gameplay Overview & Core Loop</span>
            </h2>
            
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-stone-300 leading-relaxed space-y-3.5">
              {game.description.split('\n\n').map((block, idx) => {
                const trimmed = block.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith('### ') || trimmed.startsWith('## ')) {
                  return (
                    <h3 key={idx} className="text-sm sm:text-base font-bold text-stone-100 mt-4 mb-2 text-emerald-300">
                      {trimmed.replace(/^#+\s*/, '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('- ')) {
                  const items = trimmed.split('\n- ');
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-1.5 text-stone-300">
                      {items.map((it, i) => (
                        <li key={i}>{it.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {trimmed.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                );
              })}
            </div>
          </section>

          {/* User Personal Play Tracker & Rating */}
          <PlayTrackerWidget game={game} />

          {/* Interactive Community Voting Widget */}
          <VotingWidget game={game} />

          {/* Real User Community Comments & Reviews */}
          <GameComments game={game} />
        </div>

        {/* Sidebar Info & Related Games (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Metadata Card */}
          <div className="archive-surface rounded-2xl p-5 border border-white/10 space-y-4 text-xs">
            <h3 className="font-bold text-stone-100 text-sm border-b border-white/10 pb-2">
              Game Information
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-stone-400">Title:</span>
                <span className="font-medium text-stone-200">{game.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">AI Type:</span>
                <span className="font-medium text-emerald-300">{game.tier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">AI Mechanic:</span>
                <span className="font-medium text-stone-200">{game.mechanicName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Genre:</span>
                <span className="font-medium text-stone-200">{game.genreName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Developer:</span>
                <span className="font-medium text-stone-200">{game.developer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Release Year:</span>
                <span className="font-medium text-stone-200">{game.releaseYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Status:</span>
                <span className="font-medium text-stone-200">{game.status}</span>
              </div>
            </div>

            {game.websiteUrl && (
              <div className="pt-2 border-t border-white/10">
                <a
                  href={game.websiteUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] py-2 text-xs font-semibold text-stone-200 hover:bg-white/10 transition"
                >
                  <span>Visit Direct URL (Nofollow)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Related Games (Internal Linking for SEO) */}
          <div className="archive-surface rounded-2xl p-5 border border-white/10 space-y-4">
            <h3 className="font-bold text-stone-100 text-sm flex items-center justify-between border-b border-white/10 pb-2">
              <span>Related AI Games</span>
              <Link href={`/games?genre=${game.genreSlug}`} className="text-[11px] text-emerald-400 hover:underline">
                More in {game.genreName}
              </Link>
            </h3>

            <div className="space-y-3">
              {relatedGames.map((relGame) => (
                <Link
                  key={relGame.id}
                  href={`/games/${relGame.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2 hover:border-white/15 hover:bg-white/[0.05] transition"
                >
                  <img
                    src={relGame.coverUrl}
                    alt={relGame.title}
                    className="h-12 w-16 rounded-lg object-cover bg-stone-900 border border-white/10 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-stone-100 group-hover:text-emerald-300 transition truncate">
                      {relGame.title}
                    </p>
                    <p className="text-[11px] text-stone-400 truncate">
                      {relGame.genreName} • ★ {relGame.aiScore.toFixed(1)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
