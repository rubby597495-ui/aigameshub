export type AiType = 'AI_NATIVE' | 'AI_AUGMENTED';

export type GameStatus = 
  | 'Released' 
  | 'Early Access' 
  | 'Demo/Playtest' 
  | 'Research prototype' 
  | 'Announced/TBA' 
  | 'Delisted';

export interface Game {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  descCn?: string;
  aiRoleDescription: string;
  tier: 'AI-Native' | 'AI-Augmented' | 'AI-Boundary';
  aiType: AiType;
  genreKey: string;
  genreName: string;
  genreSlug: string;
  mechanicKey: string;
  mechanicName: string;
  mechanicSlug: string;
  releaseYear: string;
  status: GameStatus;
  platforms: string[];
  websiteUrl: string;
  developer: string;
  publisher: string;
  coverUrl: string;
  hasLocalCover?: boolean;
  screenshots: string[];
  viewCount: number;
  likeCount: number;
  bookmarkCount: number;
  aiScore: number;
  funScore: number;
  isFeatured: boolean;
  isHot: boolean;
  createdAt: string;
}

export interface SearchGameItem {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  genreName: string;
  mechanicName: string;
  developer: string;
  coverUrl: string;
  aiScore: number;
}

export interface Category {
  key: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface AiMechanic {
  key: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverUrl: string;
  tags: string[];
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  sourceUrl?: string;
  publishedAt: string;
  category: string;
  image?: string;
}

export interface FilterOptions {
  search?: string;
  aiType?: string;
  genre?: string;
  mechanic?: string;
  platform?: string;
  status?: string;
  sort?: 'hot' | 'latest' | 'top_rated' | 'most_liked' | 'most_bookmarked' | 'random';
}

export interface Review {
  id: string;
  gameId: number;
  author: string;
  avatar: string;
  rating: number;
  aiDepthScore: number;
  comment: string;
  date: string;
  likes: number;
}
