import json
import os
import re

def escape_sql(text):
    if text is None:
        return "NULL"
    if isinstance(text, (int, float)):
        return str(text)
    if isinstance(text, bool):
        return "1" if text else "0"
    if isinstance(text, list) or isinstance(text, dict):
        text = json.dumps(text, ensure_ascii=False)
    
    # Escape single quotes
    clean = str(text).replace("'", "''")
    return f"'{clean}'"

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    workspace_dir = os.path.dirname(root_dir)

    games_path = os.path.join(workspace_dir, 'data', 'games.json')
    with open(games_path, 'r', encoding='utf-8') as f:
        games = json.load(f)

    sql_statements = []
    sql_statements.append("-- ==========================================")
    sql_statements.append("-- Seed 97+ AI Games Dataset into Cloudflare D1")
    sql_statements.append("-- ==========================================\n")

    for g in games:
        sql = f"""INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  {g['id']},
  {escape_sql(g['slug'])},
  {escape_sql(g['title'])},
  {escape_sql(g['tagline'])},
  {escape_sql(g['description'])},
  {escape_sql(g['aiRoleDescription'])},
  {escape_sql(g['tier'])},
  {escape_sql(g.get('aiType', 'AI_NATIVE'))},
  {escape_sql(g['genreKey'])},
  {escape_sql(g['genreName'])},
  {escape_sql(g['genreSlug'])},
  {escape_sql(g['mechanicKey'])},
  {escape_sql(g['mechanicName'])},
  {escape_sql(g['mechanicSlug'])},
  {escape_sql(g.get('releaseYear', '2026'))},
  {escape_sql(g.get('status', 'Released'))},
  {escape_sql(g.get('platforms', ['Browser']))},
  {escape_sql(g.get('websiteUrl', ''))},
  {escape_sql(g.get('developer', 'Independent Studio'))},
  {escape_sql(g.get('publisher', 'Self-Published'))},
  {escape_sql(g.get('coverUrl', ''))},
  {escape_sql(g.get('screenshots', []))},
  {g.get('viewCount', 0)},
  {g.get('likeCount', 0)},
  {g.get('bookmarkCount', 0)},
  {g.get('aiScore', 9.0)},
  {g.get('funScore', 9.0)},
  {1 if g.get('isFeatured') else 0},
  {1 if g.get('isHot') else 0},
  {escape_sql(g.get('createdAt', '2026-08-25T00:00:00.000Z'))},
  {escape_sql(g.get('updatedAt', '2026-08-25T00:00:00.000Z'))}
);"""
        sql_statements.append(sql)

    # Initial Admin user for better-auth
    sql_statements.append("\n-- Default Admin User (Role: admin)")
    sql_statements.append("""INSERT OR REPLACE INTO user (
  id, name, email, email_verified, image, role, created_at, updated_at
) VALUES (
  'admin-root-01',
  'Super Admin',
  'admin@aigameshub.io',
  1,
  '/images/placeholders/narrative-adventure.jpg',
  'admin',
  unixepoch() * 1000,
  unixepoch() * 1000
);""")

    # Articles
    articles_data = [
        {
            "id": "art-1",
            "slug": "what-are-ai-native-games-guide-2026",
            "title": "What Are AI-Native Games? The 2026 Design Frontier",
            "excerpt": "An in-depth exploration of how Large Language Models and diffusion architectures transform video game core loops.",
            "content": "Full guide content detailing AI-Native game mechanics...",
            "author": "Dr. Alex Vance",
            "authorAvatar": "/images/placeholders/rpg.jpg",
            "category": "Design Theory",
            "readTime": "8 min read",
            "publishedAt": "2026-08-20T09:00:00Z",
            "coverUrl": "/images/placeholders/narrative-adventure.jpg",
            "tags": ["AI-Native", "Game Design", "LLMs"],
            "featured": True
        },
        {
            "id": "art-2",
            "slug": "death-of-the-dialogue-tree-llm-npcs",
            "title": "The Death of the Dialogue Tree: Designing Unscripted AI NPCs",
            "excerpt": "Why rigid branching dialogue trees are falling behind conversational LLMs with dynamic memory graphs and emotional modeling.",
            "content": "Analysis of unscripted AI NPC interaction...",
            "author": "Elena Rostova",
            "authorAvatar": "/images/placeholders/puzzle.jpg",
            "category": "NPC Engineering",
            "readTime": "6 min read",
            "publishedAt": "2026-08-18T14:00:00Z",
            "coverUrl": "/images/placeholders/puzzle.jpg",
            "tags": ["NPCs", "Dialogue", "Social AI"],
            "featured": True
        },
        {
            "id": "art-3",
            "slug": "infinite-craft-semantic-alchemy-phenomenon",
            "title": "The Infinite Craft Phenomenon: Language Models as Physical Rules",
            "excerpt": "How Neal Agarwal leveraged semantic word embeddings to build an endless associative crafting universe.",
            "content": "Deep dive into semantic alchemy mechanics...",
            "author": "Marcus Chen",
            "authorAvatar": "/images/placeholders/sandbox.jpg",
            "category": "Case Study",
            "readTime": "5 min read",
            "publishedAt": "2026-08-15T11:00:00Z",
            "coverUrl": "/images/placeholders/sandbox.jpg",
            "tags": ["Infinite Craft", "Semantic Rules", "Emergent Play"],
            "featured": False
        }
    ]

    sql_statements.append("\n-- Editorial Articles")
    for a in articles_data:
        sql = f"""INSERT OR REPLACE INTO articles (
  id, slug, title, excerpt, content, author, author_avatar, category,
  read_time, published_at, cover_url, tags, featured
) VALUES (
  {escape_sql(a['id'])},
  {escape_sql(a['slug'])},
  {escape_sql(a['title'])},
  {escape_sql(a['excerpt'])},
  {escape_sql(a['content'])},
  {escape_sql(a['author'])},
  {escape_sql(a['authorAvatar'])},
  {escape_sql(a['category'])},
  {escape_sql(a['readTime'])},
  {escape_sql(a['publishedAt'])},
  {escape_sql(a['coverUrl'])},
  {escape_sql(a['tags'])},
  {1 if a['featured'] else 0}
);"""
        sql_statements.append(sql)

    output_path = os.path.join(root_dir, 'seed.sql')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(sql_statements))

    print(f"Generated seed.sql successfully with {len(games)} games and articles at {output_path}")

if __name__ == '__main__':
    main()
