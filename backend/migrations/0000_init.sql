-- ==========================================
-- Cloudflare D1 Initial Migration (SQLite)
-- ==========================================

CREATE TABLE IF NOT EXISTS `games` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`tagline` text NOT NULL,
	`description` text NOT NULL,
	`ai_role_description` text NOT NULL,
	`tier` text DEFAULT 'AI-Native' NOT NULL,
	`ai_type` text DEFAULT 'AI_NATIVE' NOT NULL,
	`genre_key` text NOT NULL,
	`genre_name` text NOT NULL,
	`genre_slug` text NOT NULL,
	`mechanic_key` text NOT NULL,
	`mechanic_name` text NOT NULL,
	`mechanic_slug` text NOT NULL,
	`release_year` text DEFAULT '2026' NOT NULL,
	`status` text DEFAULT 'Released' NOT NULL,
	`platforms` text DEFAULT '["Browser"]' NOT NULL,
	`website_url` text NOT NULL,
	`developer` text NOT NULL,
	`publisher` text DEFAULT 'Independent Creator' NOT NULL,
	`cover_url` text NOT NULL,
	`screenshots` text DEFAULT '[]' NOT NULL,
	`view_count` integer DEFAULT 0 NOT NULL,
	`like_count` integer DEFAULT 0 NOT NULL,
	`bookmark_count` integer DEFAULT 0 NOT NULL,
	`ai_score` real DEFAULT 9 NOT NULL,
	`fun_score` real DEFAULT 9 NOT NULL,
	`is_featured` integer DEFAULT 0 NOT NULL,
	`is_hot` integer DEFAULT 0 NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS `games_slug_idx` ON `games` (`slug`);
CREATE INDEX IF NOT EXISTS `games_genre_slug_idx` ON `games` (`genre_slug`);
CREATE INDEX IF NOT EXISTS `games_mechanic_slug_idx` ON `games` (`mechanic_slug`);
CREATE INDEX IF NOT EXISTS `games_ai_type_idx` ON `games` (`ai_type`);
CREATE INDEX IF NOT EXISTS `games_is_featured_idx` ON `games` (`is_featured`);
CREATE INDEX IF NOT EXISTS `games_is_hot_idx` ON `games` (`is_hot`);

-- Better-Auth Tables
CREATE TABLE IF NOT EXISTS `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`email_verified` integer DEFAULT 0 NOT NULL,
	`image` text,
	`role` text DEFAULT 'user' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS `user_email_unique` ON `user` (`email`);

CREATE TABLE IF NOT EXISTS `session` (
	`id` text PRIMARY KEY NOT NULL,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` text NOT NULL REFERENCES `user`(`id`) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS `session_token_unique` ON `session` (`token`);

CREATE TABLE IF NOT EXISTS `account` (
	`id` text PRIMARY KEY NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` text NOT NULL REFERENCES `user`(`id`) ON DELETE CASCADE,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`password` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);

CREATE TABLE IF NOT EXISTS `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);

-- Submissions Table
CREATE TABLE IF NOT EXISTS `submissions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text REFERENCES `user`(`id`) ON DELETE SET NULL,
	`title` text NOT NULL,
	`website_url` text NOT NULL,
	`developer` text NOT NULL,
	`contact_email` text,
	`tier` text DEFAULT 'AI-Native' NOT NULL,
	`genre` text DEFAULT 'narrative-adventure' NOT NULL,
	`mechanic` text DEFAULT 'ai-npc-interrogation' NOT NULL,
	`platforms` text DEFAULT '["Browser"]' NOT NULL,
	`tagline` text NOT NULL,
	`description` text,
	`ai_role_description` text NOT NULL,
	`status` text DEFAULT 'PENDING' NOT NULL,
	`created_at` text NOT NULL
);

-- Interactive Tables
CREATE TABLE IF NOT EXISTS `game_votes` (
	`id` text PRIMARY KEY NOT NULL,
	`game_id` integer NOT NULL REFERENCES `games`(`id`) ON DELETE CASCADE,
	`user_id` text REFERENCES `user`(`id`) ON DELETE SET NULL,
	`ip_address` text,
	`ai_score` real,
	`fun_score` real,
	`is_upvote` integer DEFAULT 1 NOT NULL,
	`created_at` text NOT NULL
);
CREATE INDEX IF NOT EXISTS `game_votes_game_id_idx` ON `game_votes` (`game_id`);

CREATE TABLE IF NOT EXISTS `game_bookmarks` (
	`id` text PRIMARY KEY NOT NULL,
	`game_id` integer NOT NULL REFERENCES `games`(`id`) ON DELETE CASCADE,
	`user_id` text NOT NULL REFERENCES `user`(`id`) ON DELETE CASCADE,
	`created_at` text NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS `game_bookmarks_user_game_unique` ON `game_bookmarks` (`user_id`, `game_id`);

CREATE TABLE IF NOT EXISTS `game_comments` (
	`id` text PRIMARY KEY NOT NULL,
	`game_id` integer NOT NULL REFERENCES `games`(`id`) ON DELETE CASCADE,
	`user_id` text REFERENCES `user`(`id`) ON DELETE SET NULL,
	`author_name` text NOT NULL,
	`avatar` text,
	`rating` integer DEFAULT 5 NOT NULL,
	`ai_depth_score` real DEFAULT 9 NOT NULL,
	`content` text NOT NULL,
	`created_at` text NOT NULL
);
CREATE INDEX IF NOT EXISTS `game_comments_game_id_idx` ON `game_comments` (`game_id`);

-- Articles & News
CREATE TABLE IF NOT EXISTS `articles` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`author` text NOT NULL,
	`author_avatar` text,
	`category` text NOT NULL,
	`read_time` text NOT NULL,
	`published_at` text NOT NULL,
	`cover_url` text NOT NULL,
	`tags` text DEFAULT '[]' NOT NULL,
	`featured` integer DEFAULT 0 NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS `articles_slug_unique` ON `articles` (`slug`);

CREATE TABLE IF NOT EXISTS `news_items` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`content` text NOT NULL,
	`source` text NOT NULL,
	`source_url` text,
	`published_at` text NOT NULL,
	`category` text NOT NULL,
	`image` text
);
CREATE UNIQUE INDEX IF NOT EXISTS `news_items_slug_unique` ON `news_items` (`slug`);
