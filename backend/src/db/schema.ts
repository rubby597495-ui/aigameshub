import { sqliteTable, text, integer, real, index, uniqueIndex } from 'drizzle-orm/sqlite-core';

// ==========================================
// 1. Games Table (97+ AI Games Dataset)
// ==========================================
export const games = sqliteTable('games', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  tagline: text('tagline').notNull(),
  description: text('description').notNull(),
  aiRoleDescription: text('ai_role_description').notNull(),
  tier: text('tier', { enum: ['AI-Native', 'AI-Augmented', 'AI-Boundary'] }).notNull().default('AI-Native'),
  aiType: text('ai_type', { enum: ['AI_NATIVE', 'AI_AUGMENTED'] }).notNull().default('AI_NATIVE'),
  genreKey: text('genre_key').notNull(),
  genreName: text('genre_name').notNull(),
  genreSlug: text('genre_slug').notNull(),
  mechanicKey: text('mechanic_key').notNull(),
  mechanicName: text('mechanic_name').notNull(),
  mechanicSlug: text('mechanic_slug').notNull(),
  releaseYear: text('release_year').notNull().default('2026'),
  status: text('status').notNull().default('Released'),
  platforms: text('platforms').notNull().default('["Browser"]'), // JSON array string
  websiteUrl: text('website_url').notNull(),
  developer: text('developer').notNull(),
  publisher: text('publisher').notNull().default('Independent Creator'),
  coverUrl: text('cover_url').notNull(),
  screenshots: text('screenshots').notNull().default('[]'), // JSON array string
  viewCount: integer('view_count').notNull().default(0),
  likeCount: integer('like_count').notNull().default(0),
  bookmarkCount: integer('bookmark_count').notNull().default(0),
  aiScore: real('ai_score').notNull().default(9.0),
  funScore: real('fun_score').notNull().default(9.0),
  isFeatured: integer('is_featured', { mode: 'boolean' }).notNull().default(false),
  isHot: integer('is_hot', { mode: 'boolean' }).notNull().default(false),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
  updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
}, (table) => [
  uniqueIndex('games_slug_idx').on(table.slug),
  index('games_genre_slug_idx').on(table.genreSlug),
  index('games_mechanic_slug_idx').on(table.mechanicSlug),
  index('games_ai_type_idx').on(table.aiType),
  index('games_is_featured_idx').on(table.isFeatured),
  index('games_is_hot_idx').on(table.isHot),
]);

// ==========================================
// 2. Better-Auth Standard Tables (D1 SQLite)
// ==========================================
export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'boolean' }).notNull().default(false),
  image: text('image'),
  role: text('role', { enum: ['user', 'editor', 'admin'] }).notNull().default('user'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
  token: text('token').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = sqliteTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: integer('access_token_expires_at', { mode: 'timestamp' }),
  refreshTokenExpiresAt: integer('refresh_token_expires_at', { mode: 'timestamp' }),
  scope: text('scope'),
  password: text('password'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const verification = sqliteTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

// ==========================================
// 3. Submissions Table (User & Studio Submits)
// ==========================================
export const submissions = sqliteTable('submissions', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => user.id, { onDelete: 'set null' }),
  title: text('title').notNull(),
  websiteUrl: text('website_url').notNull(),
  developer: text('developer').notNull(),
  contactEmail: text('contact_email'),
  tier: text('tier').notNull().default('AI-Native'),
  genre: text('genre').notNull().default('narrative-adventure'),
  mechanic: text('mechanic').notNull().default('ai-npc-interrogation'),
  platforms: text('platforms').notNull().default('["Browser"]'),
  tagline: text('tagline').notNull(),
  description: text('description'),
  aiRoleDescription: text('ai_role_description').notNull(),
  status: text('status', { enum: ['PENDING', 'APPROVED', 'REJECTED'] }).notNull().default('PENDING'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ==========================================
// 4. Interactive Tables (Votes, Bookmarks, Comments)
// ==========================================
export const gameVotes = sqliteTable('game_votes', {
  id: text('id').primaryKey(),
  gameId: integer('game_id').notNull().references(() => games.id, { onDelete: 'cascade' }),
  userId: text('user_id').references(() => user.id, { onDelete: 'set null' }),
  ipAddress: text('ip_address'),
  aiScore: real('ai_score'),
  funScore: real('fun_score'),
  isUpvote: integer('is_upvote', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
}, (table) => [
  index('game_votes_game_id_idx').on(table.gameId),
]);

export const gameBookmarks = sqliteTable('game_bookmarks', {
  id: text('id').primaryKey(),
  gameId: integer('game_id').notNull().references(() => games.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
}, (table) => [
  uniqueIndex('game_bookmarks_user_game_unique').on(table.userId, table.gameId),
]);

export const gameComments = sqliteTable('game_comments', {
  id: text('id').primaryKey(),
  gameId: integer('game_id').notNull().references(() => games.id, { onDelete: 'cascade' }),
  userId: text('user_id').references(() => user.id, { onDelete: 'set null' }),
  authorName: text('author_name').notNull(),
  avatar: text('avatar'),
  rating: integer('rating').notNull().default(5),
  aiDepthScore: real('ai_depth_score').notNull().default(9.0),
  content: text('content').notNull(),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
}, (table) => [
  index('game_comments_game_id_idx').on(table.gameId),
]);

// ==========================================
// 5. Articles & News Tables
// ==========================================
export const articles = sqliteTable('articles', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  author: text('author').notNull(),
  authorAvatar: text('author_avatar'),
  category: text('category').notNull(),
  readTime: text('read_time').notNull(),
  publishedAt: text('published_at').notNull(),
  coverUrl: text('cover_url').notNull(),
  tags: text('tags').notNull().default('[]'),
  featured: integer('featured', { mode: 'boolean' }).notNull().default(false),
});

export const newsItems = sqliteTable('news_items', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  content: text('content').notNull(),
  source: text('source').notNull(),
  sourceUrl: text('source_url'),
  publishedAt: text('published_at').notNull(),
  category: text('category').notNull(),
  image: text('image'),
});
