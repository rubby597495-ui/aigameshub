# scripts/polish_games_dataset.py
import json
import os
import re

TRANSLATION_MAP = {
    "遥远行星：建造师": {"title": "Distant Planet: Builder", "slug": "distant-planet-builder"},
    "历史模拟器：崇祯": {"title": "History Simulator: Chongzhen", "slug": "history-simulator-chongzhen"},
    "青椒模拟器": {"title": "Tenure-Track Chili: Academic Simulator", "slug": "tenure-track-chili"},
    "麦琪的花园": {"title": "Maggie's Garden: AI Sandbox Adventure", "slug": "maggies-garden"},
    "昭阳传": {"title": "Legend of Zhaoyang: AI Wuxia RPG", "slug": "legend-of-zhaoyang"},
    "星之低语": {"title": "Whispers From the Star", "slug": "whispers-from-the-star"},
    "沙发侦探": {"title": "Couch Detective", "slug": "couch-detective"},
    "图灵证言": {"title": "Turing Testimony", "slug": "turing-testimony"},
    "线索智能": {"title": "CLUAIDO: Clue Intelligence", "slug": "cluaido"},
    "盒中小世界": {"title": "Microverse In Box: Society Sandbox", "slug": "microverse-in-box"},
    "逆転探偵": {"title": "Reversal Detective", "slug": "reversal-detective"},
    "猜盐 (xiaoce.fun)": {"title": "Xiaoce AI Mystery Mini-Games", "slug": "xiaoce-ai-mystery"},
}

def polish():
    with open('data/games.json', 'r', encoding='utf-8') as f:
        games = json.load(f)

    for g in games:
        # Check if title matches translation map or contains Chinese characters
        for cn_pattern, trans in TRANSLATION_MAP.items():
            if cn_pattern in g['title'] or cn_pattern in g.get('descCn', ''):
                g['title'] = trans['title']
                g['slug'] = trans['slug']

        # Clean non-ascii characters in titles
        clean_title = re.sub(r'[\u4e00-\u9fff/：]+', '', g['title']).strip()
        if len(clean_title) >= 3:
            g['title'] = clean_title

        # Clean slug
        slug = re.sub(r'[^a-zA-Z0-9\s-]', '', g['title']).strip().lower()
        slug = re.sub(r'[\s_]+', '-', slug)
        if not slug:
            slug = f"ai-game-{g['id']}"
        g['slug'] = slug

        # Check local cover image
        expected_cover_jpg = f"public/uploads/games/{g['slug']}.jpg"
        if os.path.exists(expected_cover_jpg) and os.path.getsize(expected_cover_jpg) > 500:
            g['coverUrl'] = f"/uploads/games/{g['slug']}.jpg"
            g['hasLocalCover'] = True
        else:
            # Check if an alternative filename exists
            found = False
            for f in os.listdir('public/uploads/games'):
                if g['slug'] in f or (f.startswith(f"game-{g['id']}") and f.endswith('.jpg')):
                    g['coverUrl'] = f"/uploads/games/{f}"
                    g['hasLocalCover'] = True
                    found = True
                    break
            if not found:
                g['coverUrl'] = f"/images/placeholders/{g['genreSlug']}.jpg"
                g['hasLocalCover'] = False

    with open('data/games.json', 'w', encoding='utf-8') as f:
        json.dump(games, f, ensure_ascii=False, indent=2)

    print(f"[+] Successfully polished {len(games)} games in data/games.json")

if __name__ == '__main__':
    polish()
