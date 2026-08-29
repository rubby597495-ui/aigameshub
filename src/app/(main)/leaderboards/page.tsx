import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { 
  getTrendingGames, 
  getTopRatedGames, 
  getMostLikedGames, 
  getMostBookmarkedGames, 
  getFeaturedGames 
} from '@/lib/data';
import { Trophy, Flame, ThumbsUp, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { constructMetadata, generateCollectionJsonLd } from '@/lib/seo';
import { formatNumber, getTierBadgeStyle } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Top AI Games Leaderboard & Highest Rated Games 2026',
  description:
    'Discover top-rated generative AI video games ranked by AI depth, innovation scores & player upvotes. Find the best AI RPGs to play now on AiGamesHub.',
  keywords: [
    'top AI games',
    'best AI video games 2026',
    'AI games leaderboard',
    'highest rated AI RPGs',
    'popular generative AI games'
  ]
});

interface LeaderboardsPageProps {
  searchParams: Promise<{
    tab?: 'recommended' | 'hot' | 'liked' | 'saved' | 'innovation';
  }>;
}

export default async function LeaderboardsPage({ searchParams }: LeaderboardsPageProps) {
  const params = await searchParams;
  const currentTab = params.tab || 'recommended';

  let gamesList = [];
  let tabTitle = 'All-Round Recommended AI Games';
  let tabDesc = 'Comprehensive index of editorial quality, community engagement, and AI mechanic depth.';

  switch (currentTab) {
    case 'hot':
      gamesList = getTrendingGames(25);
      tabTitle = 'Trending & Most Played AI Games';
      tabDesc = 'Ranked by total community player sessions and traffic volume in the last 30 days.';
      break;
    case 'liked':
      gamesList = getMostLikedGames(25);
      tabTitle = 'Most Upvoted Community Favorites';
      tabDesc = 'Ranked by verified positive player upvotes and feedback.';
      break;
    case 'saved':
      gamesList = getMostBookmarkedGames(25);
      tabTitle = 'Most Bookmarked & Saved for Later';
      tabDesc = 'Titles added to player bookmarks the most for ongoing playthroughs.';
      break;
    case 'innovation':
      gamesList = getTopRatedGames(25);
      tabTitle = 'Highest AI Innovation & Mechanic Depth';
      tabDesc = 'Ranked by AI autonomy score, prompt responsiveness, and unscripted generative loops.';
      break;
    case 'recommended':
    default:
      gamesList = getFeaturedGames();
      if (gamesList.length < 15) {
        gamesList = [...gamesList, ...getTrendingGames(15)].slice(0, 20);
      }
      break;
  }

  const collectionJsonLd = generateCollectionJsonLd(
    tabTitle,
    tabDesc,
    gamesList
  );

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Leaderboards', url: '/leaderboards' }
        ]}
      />

      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <Trophy className="h-7 w-7 text-amber-400" />
          <span>AI Games Leaderboards</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-3xl leading-relaxed">
          Explore top-performing generative AI titles ranked across multiple dimensions including community popularity, unscripted AI depth, and verified player upvotes.
        </p>
      </div>

      {/* Leaderboard Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <Link
          href="/leaderboards?tab=recommended"
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition ${
            currentTab === 'recommended'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow-md border border-white/10'
              : 'border border-white/5 bg-white/[0.03] text-stone-400 hover:text-stone-200'
          }`}
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>⭐ Recommended</span>
        </Link>

        <Link
          href="/leaderboards?tab=hot"
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition ${
            currentTab === 'hot'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow-md border border-white/10'
              : 'border border-white/5 bg-white/[0.03] text-stone-400 hover:text-stone-200'
          }`}
        >
          <Flame className="h-3.5 w-3.5 text-amber-400" />
          <span>🔥 Trending Hot</span>
        </Link>

        <Link
          href="/leaderboards?tab=innovation"
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition ${
            currentTab === 'innovation'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow-md border border-white/10'
              : 'border border-white/5 bg-white/[0.03] text-stone-400 hover:text-stone-200'
          }`}
        >
          <Trophy className="h-3.5 w-3.5 text-emerald-400" />
          <span>🧠 AI Innovation</span>
        </Link>

        <Link
          href="/leaderboards?tab=liked"
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition ${
            currentTab === 'liked'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow-md border border-white/10'
              : 'border border-white/5 bg-white/[0.03] text-stone-400 hover:text-stone-200'
          }`}
        >
          <ThumbsUp className="h-3.5 w-3.5 text-blue-400" />
          <span>👍 Most Liked</span>
        </Link>

        <Link
          href="/leaderboards?tab=saved"
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition ${
            currentTab === 'saved'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow-md border border-white/10'
              : 'border border-white/5 bg-white/[0.03] text-stone-400 hover:text-stone-200'
          }`}
        >
          <Heart className="h-3.5 w-3.5 text-rose-400" />
          <span>🤍 Most Saved</span>
        </Link>
      </div>

      {/* Current Chart Overview */}
      <div className="archive-surface rounded-2xl p-4 border border-white/10">
        <h2 className="text-sm font-bold text-stone-200">{tabTitle}</h2>
        <p className="text-xs text-stone-400 mt-0.5">{tabDesc}</p>
      </div>

      {/* Ranking List Table */}
      <div className="space-y-2.5">
        {gamesList.map((game, index) => {
          const rank = index + 1;
          const rankBadge =
            rank === 1 ? '🥇 #1' : rank === 2 ? '🥈 #2' : rank === 3 ? '🥉 #3' : `#${rank}`;
          const rankColor =
            rank === 1
              ? 'text-amber-300 font-extrabold'
              : rank === 2
              ? 'text-slate-300 font-extrabold'
              : rank === 3
              ? 'text-amber-500 font-extrabold'
              : 'text-stone-500 font-semibold';

          return (
            <div
              key={game.id}
              className="archive-surface group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-3 sm:p-4 hover:border-white/20 transition"
            >
              {/* Rank & Game Info */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <span className={`w-8 text-center text-sm sm:text-base ${rankColor}`}>
                  {rankBadge}
                </span>

                <Link href={`/games/${game.slug}`} className="shrink-0">
                  <img
                    src={game.coverUrl}
                    alt={game.title}
                    className="h-14 w-20 sm:h-16 sm:w-24 rounded-lg object-cover bg-stone-900 border border-white/10"
                  />
                </Link>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/games/${game.slug}`}
                      className="font-bold text-stone-100 group-hover:text-emerald-300 transition text-sm sm:text-base truncate"
                    >
                      {game.title}
                    </Link>
                    <span className={`hidden sm:inline-flex rounded-full border px-2 py-0.2 text-[9px] font-semibold ${getTierBadgeStyle(game.tier)}`}>
                      {game.tier}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-400 truncate mt-0.5">
                    {game.genreName} • {game.mechanicName} • By {game.developer}
                  </p>

                  <p className="hidden md:block text-xs text-stone-400 line-clamp-1 mt-1">
                    {game.tagline}
                  </p>
                </div>
              </div>

              {/* Metrics & Action Button */}
              <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                <div className="text-right text-xs">
                  <p className="font-bold text-emerald-300">★ {game.aiScore.toFixed(1)}</p>
                  <p className="text-[10px] text-stone-500">{formatNumber(game.viewCount)} views</p>
                </div>

                <Link
                  href={`/games/${game.slug}`}
                  className="rounded-lg bg-[#2A3442] px-3 py-1.5 text-xs font-semibold text-[#D8E1EA] hover:bg-[#344255] transition flex items-center gap-1"
                >
                  <span className="hidden sm:inline">Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
