import gamesData from '../../data/games.json';
import { Game, FilterOptions, SearchGameItem } from '@/types/game';
import { CATEGORIES, AI_MECHANICS, AI_TYPES } from '@/data/categories';
import { ARTICLES } from '@/data/articles';

const games: Game[] = gamesData as unknown as Game[];

export function getAllGames(): Game[] {
  return games;
}

export function getSearchIndex(): SearchGameItem[] {
  return games.map((g) => ({
    id: g.id,
    slug: g.slug,
    title: g.title,
    tagline: g.tagline,
    genreName: g.genreName,
    mechanicName: g.mechanicName,
    developer: g.developer,
    coverUrl: g.coverUrl,
    aiScore: g.aiScore
  }));
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug || g.id.toString() === slug);
}

export function getFeaturedGames(): Game[] {
  return games.filter((g) => g.isFeatured).slice(0, 10);
}

export function getTrendingGames(limit = 12): Game[] {
  return [...games]
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, limit);
}

export function getLatestGames(limit = 12): Game[] {
  return [...games]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}

export function getTopRatedGames(limit = 12): Game[] {
  return [...games]
    .sort((a, b) => b.aiScore - a.aiScore)
    .slice(0, limit);
}

export function getMostLikedGames(limit = 12): Game[] {
  return [...games]
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, limit);
}

export function getMostBookmarkedGames(limit = 12): Game[] {
  return [...games]
    .sort((a, b) => b.bookmarkCount - a.bookmarkCount)
    .slice(0, limit);
}

export function getRandomGame(): Game {
  const randomIndex = Math.floor(Math.random() * games.length);
  return games[randomIndex];
}

export function getRelatedGames(currentGame: Game, limit = 6): Game[] {
  return games
    .filter(
      (g) =>
        g.id !== currentGame.id &&
        (g.genreKey === currentGame.genreKey ||
          g.mechanicKey === currentGame.mechanicKey ||
          g.aiType === currentGame.aiType)
    )
    .slice(0, limit);
}

export function filterGames(options: FilterOptions): {
  items: Game[];
  total: number;
} {
  let result = [...games];

  if (options.search) {
    const q = options.search.toLowerCase().trim();
    result = result.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.tagline.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.genreName.toLowerCase().includes(q) ||
        g.mechanicName.toLowerCase().includes(q) ||
        g.developer.toLowerCase().includes(q)
    );
  }

  if (options.aiType && options.aiType !== 'all' && options.aiType !== 'ALL') {
    result = result.filter((g) => g.aiType === options.aiType);
  }

  if (options.genre && options.genre !== 'all') {
    const genreStr = options.genre.toLowerCase();
    result = result.filter(
      (g) => g.genreSlug.toLowerCase() === genreStr || g.genreKey.toLowerCase() === genreStr
    );
  }

  if (options.mechanic && options.mechanic !== 'all') {
    const mechStr = options.mechanic.toLowerCase();
    result = result.filter(
      (g) => g.mechanicSlug.toLowerCase() === mechStr || g.mechanicKey.toLowerCase() === mechStr
    );
  }

  if (options.platform && options.platform !== 'all') {
    const p = options.platform.toLowerCase();
    result = result.filter((g) =>
      g.platforms.some((plat) => plat.toLowerCase().includes(p))
    );
  }

  if (options.status && options.status !== 'all') {
    const statusStr = options.status.toLowerCase();
    result = result.filter(
      (g) => g.status.toLowerCase() === statusStr
    );
  }

  switch (options.sort) {
    case 'latest':
      result.sort((a, b) => b.id - a.id);
      break;
    case 'top_rated':
      result.sort((a, b) => b.aiScore - a.aiScore);
      break;
    case 'most_liked':
      result.sort((a, b) => b.likeCount - a.likeCount);
      break;
    case 'most_bookmarked':
      result.sort((a, b) => b.bookmarkCount - a.bookmarkCount);
      break;
    case 'random':
      result.sort(() => Math.random() - 0.5);
      break;
    case 'hot':
    default:
      result.sort((a, b) => b.viewCount - a.viewCount);
      break;
  }

  return {
    items: result,
    total: result.length
  };
}

export function getPlatformStats() {
  const totalGames = games.length;
  const totalNative = games.filter((g) => g.aiType === 'AI_NATIVE').length;
  const totalAugmented = games.filter((g) => g.aiType === 'AI_AUGMENTED').length;
  const totalViews = games.reduce((acc, g) => acc + g.viewCount, 0);
  const totalLikes = games.reduce((acc, g) => acc + g.likeCount, 0);

  return {
    totalGames,
    totalNative,
    totalAugmented,
    totalCreators: 84,
    totalExplorations: 64280,
    totalViews,
    totalLikes
  };
}
