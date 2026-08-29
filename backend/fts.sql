-- =========================================================
-- SQLite FTS5 Full-Text Search Virtual Table for AiGamesHub
-- Supported by Cloudflare D1 (SQLite)
-- =========================================================

CREATE VIRTUAL TABLE IF NOT EXISTS games_fts USING fts5(
  title,
  tagline,
  description,
  ai_role_description,
  genre_name,
  mechanic_name,
  developer,
  content='games',
  content_rowid='id'
);

-- Trigger: Synchronize on game insert
CREATE TRIGGER IF NOT EXISTS trg_games_ai AFTER INSERT ON games BEGIN
  INSERT INTO games_fts(rowid, title, tagline, description, ai_role_description, genre_name, mechanic_name, developer)
  VALUES (new.id, new.title, new.tagline, new.description, new.ai_role_description, new.genre_name, new.mechanic_name, new.developer);
END;

-- Trigger: Synchronize on game delete
CREATE TRIGGER IF NOT EXISTS trg_games_ad AFTER DELETE ON games BEGIN
  INSERT INTO games_fts(games_fts, rowid, title, tagline, description, ai_role_description, genre_name, mechanic_name, developer)
  VALUES ('delete', old.id, old.title, old.tagline, old.description, old.ai_role_description, old.genre_name, old.mechanic_name, old.developer);
END;

-- Trigger: Synchronize on game update
CREATE TRIGGER IF NOT EXISTS trg_games_au AFTER UPDATE ON games BEGIN
  INSERT INTO games_fts(games_fts, rowid, title, tagline, description, ai_role_description, genre_name, mechanic_name, developer)
  VALUES ('delete', old.id, old.title, old.tagline, old.description, old.ai_role_description, old.genre_name, old.mechanic_name, old.developer);
  INSERT INTO games_fts(rowid, title, tagline, description, ai_role_description, genre_name, mechanic_name, developer)
  VALUES (new.id, new.title, new.tagline, new.description, new.ai_role_description, new.genre_name, new.mechanic_name, new.developer);
END;
