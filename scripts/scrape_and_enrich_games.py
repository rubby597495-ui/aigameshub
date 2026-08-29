# scripts/scrape_and_enrich_games.py
import re
import os
import json
import time
import urllib.request
import urllib.parse
from html import unescape

# Ensure directories exist
os.makedirs('data', exist_ok=True)
os.makedirs('public/uploads/games', exist_ok=True)
os.makedirs('public/images/placeholders', exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
}

GENRE_MAP = {
    'G1': {'name': 'Narrative Adventure', 'slug': 'narrative-adventure', 'desc': 'Story-driven high freedom text adventures and interactive fiction.'},
    'G2': {'name': 'RPG', 'slug': 'rpg', 'desc': 'Role playing adventures featuring dynamic AI NPCs, quests, and worlds.'},
    'G3': {'name': 'Puzzle & Mystery', 'slug': 'puzzle', 'desc': 'Interrogate AI suspects, solve murder mysteries, and jailbreak LLMs.'},
    'G4': {'name': 'Strategy & Management', 'slug': 'strategy', 'desc': 'Lead kingdoms, manage startups, or command space fleets with AI advisors.'},
    'G5': {'name': 'Simulation', 'slug': 'simulation', 'desc': 'Living ecosystems, autonomous AI towns, and emergent society simulators.'},
    'G6': {'name': 'Sandbox & Creation', 'slug': 'sandbox', 'desc': 'Endless crafting, generative item combining, and generative building.'},
    'G7': {'name': 'Party & Social Deduction', 'slug': 'party-social', 'desc': 'AI art guessing, AI judge survival, and human vs. AI bluffing games.'},
    'G8': {'name': 'Romance & Companion', 'slug': 'romance-companion', 'desc': 'Emotional connection, virtual AI companions, and conversational romance.'},
    'G9': {'name': 'Experimental & Hybrid', 'slug': 'experimental', 'desc': 'Unconventional AI game mechanics, prompt combat, and meta-gameplay.'},
}

MECHANIC_MAP = {
    'N1': {'name': 'Epistemic & Info-Gathering', 'slug': 'ai-npc-interrogation', 'desc': 'Interrogating unscripted AI NPCs to extract secrets, clues, or diagnoses.'},
    'N2': {'name': 'Social Influence & Persuasion', 'slug': 'social-persuasion', 'desc': 'Persuading, deceiving, romancing, or negotiating with dynamic AI minds.'},
    'N3': {'name': 'Generative Narrative & AI GM', 'slug': 'generative-narrative-ai-gm', 'desc': 'AI acts as the Dungeon Master / storyteller, generating events and consequences.'},
    'N4': {'name': 'Semantic Mechanic & Environment', 'slug': 'semantic-mechanic', 'desc': 'Language and natural words act as physical mechanics, crafting rules, or combat spells.'},
    'N5': {'name': 'Agentic Simulation & Autonomous Society', 'slug': 'agentic-simulation', 'desc': 'Populations of autonomous AI agents interact, work, and build emergent societies.'},
    'N6': {'name': 'Generative Artifact as Gameplay', 'slug': 'generative-artifact', 'desc': 'AI-generated images, 3D assets, or items form the core competitive gameplay.'},
    '—': {'name': 'AI Enhanced / Mixed', 'slug': 'ai-enhanced', 'desc': 'Generative AI enriches dialogue, procedural scenarios, or background worldbuilding.'}
}

def clean_slug(title):
    slug = re.sub(r'[^a-zA-Z0-9\s-]', '', title).strip().lower()
    slug = re.sub(r'[\s_]+', '-', slug)
    return slug or 'ai-game'

def extract_steam_id(url):
    m = re.search(r'store\.steampowered\.com/app/(\d+)', url)
    return m.group(1) if m else None

def fetch_steam_details(app_id):
    api_url = f'https://store.steampowered.com/api/appdetails?appids={app_id}&l=english'
    req = urllib.request.Request(api_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if data and str(app_id) in data and data[str(app_id)].get('success'):
                return data[str(app_id)]['data']
    except Exception as e:
        print(f"  [!] Steam API error for app {app_id}: {e}")
    return None

def fetch_og_image(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            m = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']', html, re.I)
            if not m:
                m = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']', html, re.I)
            if m:
                img_url = m.group(1)
                if img_url.startswith('//'):
                    img_url = 'https:' + img_url
                elif img_url.startswith('/'):
                    parsed = urllib.parse.urlparse(url)
                    img_url = f"{parsed.scheme}://{parsed.netloc}{img_url}"
                return img_url
    except Exception as e:
        print(f"  [!] OG image fetch error for {url}: {e}")
    return None

def download_image(img_url, local_path):
    if not img_url:
        return False
    if os.path.exists(local_path) and os.path.getsize(local_path) > 1000:
        return True
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=12) as resp, open(local_path, 'wb') as f:
            f.write(resp.read())
        print(f"    [+] Saved image to {local_path}")
        return True
    except Exception as e:
        print(f"    [-] Failed downloading image {img_url}: {e}")
        return False

def parse_readme():
    with open('awesome_readme_raw.md', 'r', encoding='utf-8') as f:
        content = f.read()

    sections = [
        ('AI-Native', 'AI_NATIVE', r'### 🟢 AI Native.*?(\|[ \t]*\d+.*?)(?=(?:###|$))'),
        ('AI-Augmented', 'AI_AUGMENTED', r'### 🔵 AI Augmented.*?(\|[ \t]*\d+.*?)(?=(?:###|$))'),
        ('AI-Boundary', 'AI_NATIVE', r'### 🟠 AI Boundary.*?(\|[ \t]*\d+.*?)(?=(?:###|$))'),
    ]

    games_raw = []
    for tier_name, ai_type, pattern in sections:
        match = re.search(pattern, content, re.DOTALL)
        if not match:
            continue
        table_text = match.group(1)
        for line in table_text.strip().split('\n'):
            line = line.strip()
            if not line.startswith('|') or '[http' not in line and 'http' not in line:
                continue
            cols = [c.strip() for c in line.split('|')[1:-1]]
            if len(cols) >= 6:
                games_raw.append({
                    'tier': tier_name,
                    'ai_type': ai_type,
                    'num': cols[0],
                    'game_col': cols[1],
                    'year': cols[2],
                    'genre_col': cols[3],
                    'mechanic_col': cols[4],
                    'status': cols[5],
                    'desc_cn': cols[6] if len(cols) > 6 else '',
                })

    print(f"Total raw games extracted: {len(games_raw)}")
    return games_raw

def enrich_all_games():
    raw_list = parse_readme()
    enriched_games = []

    for idx, item in enumerate(raw_list):
        m_link = re.search(r'\[(.*?)\]\((.*?)\)', item['game_col'])
        if m_link:
            title = m_link.group(1).strip()
            url = m_link.group(2).strip()
        else:
            title = item['game_col']
            url = ''

        genre_key = 'G1'
        m_g = re.search(r'G\d', item['genre_col'])
        if m_g and m_g.group(0) in GENRE_MAP:
            genre_key = m_g.group(0)

        mech_key = '—'
        m_n = re.search(r'N\d', item['mechanic_col'])
        if m_n and m_n.group(0) in MECHANIC_MAP:
            mech_key = m_n.group(0)

        slug = clean_slug(title)
        if not slug or slug == 'ai-game':
            slug = f"game-{idx+1}"

        print(f"[{idx+1}/{len(raw_list)}] Processing {title} ({slug})...")

        steam_id = extract_steam_id(url)
        steam_data = None
        cover_filename = f"{slug}.jpg"
        local_cover_path = os.path.join('public', 'uploads', 'games', cover_filename)
        public_cover_url = f"/uploads/games/{cover_filename}"

        developer = "Independent AI Creator"
        publisher = "Self-Published"
        tagline = ""
        detailed_desc = ""
        screenshots = []
        platforms = ["Browser"]

        if steam_id:
            platforms = ["Steam", "PC"]
            steam_data = fetch_steam_details(steam_id)
            if steam_data:
                title = steam_data.get('name', title)
                developer = ", ".join(steam_data.get('developers', [])) or developer
                publisher = ", ".join(steam_data.get('publishers', [])) or publisher
                tagline = steam_data.get('short_description', '')
                detailed_desc = steam_data.get('detailed_description', '')
                
                header_img = steam_data.get('header_image')
                if header_img:
                    download_image(header_img, local_cover_path)
                
                for s in steam_data.get('screenshots', [])[:4]:
                    screenshots.append(s.get('path_full', s.get('path_thumbnail', '')))
                
                time.sleep(0.3)
        else:
            if 'itch.io' in url:
                platforms = ["itch.io", "Browser", "PC"]
            elif 'github.com' in url or 'arxiv.org' in url or 'dl.acm.org' in url:
                platforms = ["Browser", "Open Source / Prototype"]
            else:
                platforms = ["Browser"]

            if url and ('http://' in url or 'https://' in url):
                og_img = fetch_og_image(url)
                if og_img:
                    download_image(og_img, local_cover_path)

        genre_info = GENRE_MAP.get(genre_key, GENRE_MAP['G1'])
        mech_info = MECHANIC_MAP.get(mech_key, MECHANIC_MAP['N1'])

        if not tagline:
            tagline = f"An innovative {genre_info['name']} powered by generative AI and {mech_info['name'].lower()}."

        ai_role = f"In this game, generative AI powers the core loop through {mech_info['name']}. {item['desc_cn']}"

        base_views = 2000 + (idx * 573) % 45000
        base_likes = int(base_views * 0.05) + 35
        base_bookmarks = int(base_views * 0.025) + 18
        ai_score = round(8.8 + ((idx * 7) % 12) / 10.0, 1)
        if ai_score > 9.9: ai_score = 9.9
        fun_score = round(8.4 + ((idx * 11) % 15) / 10.0, 1)
        if fun_score > 9.8: fun_score = 9.8

        is_featured = idx in [0, 1, 3, 4, 5, 8, 11, 16, 17, 22, 28, 38, 40, 52, 74, 84]
        is_hot = idx % 5 == 0 or is_featured

        game_obj = {
            "id": idx + 1,
            "slug": slug,
            "title": title,
            "tagline": tagline,
            "description": detailed_desc or tagline,
            "descCn": item['desc_cn'],
            "aiRoleDescription": ai_role,
            "tier": item['tier'],
            "aiType": item['ai_type'],
            "genreKey": genre_key,
            "genreName": genre_info['name'],
            "genreSlug": genre_info['slug'],
            "mechanicKey": mech_key,
            "mechanicName": mech_info['name'],
            "mechanicSlug": mech_info['slug'],
            "releaseYear": item['year'],
            "status": item['status'],
            "platforms": platforms,
            "websiteUrl": url,
            "developer": developer,
            "publisher": publisher,
            "coverUrl": public_cover_url if os.path.exists(local_cover_path) else f"/images/placeholders/{genre_info['slug']}.jpg",
            "hasLocalCover": os.path.exists(local_cover_path),
            "screenshots": screenshots,
            "viewCount": base_views,
            "likeCount": base_likes,
            "bookmarkCount": base_bookmarks,
            "aiScore": ai_score,
            "funScore": fun_score,
            "isFeatured": is_featured,
            "isHot": is_hot,
            "createdAt": "2026-08-25T00:00:00.000Z"
        }
        enriched_games.append(game_obj)

    with open('data/games.json', 'w', encoding='utf-8') as f:
        json.dump(enriched_games, f, ensure_ascii=False, indent=2)

    print(f"\n[+] Successfully generated data/games.json with {len(enriched_games)} games!")

if __name__ == '__main__':
    enrich_all_games()
