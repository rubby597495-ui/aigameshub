import json
import re

with open('data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

for g in games:
    if g['id'] == 81:
        g['description'] = "Legend of Zhaoyang is an AI-powered Wuxia role-playing simulation where players step into a dynamic martial arts world. NPCs possess distinct personalities, motivations, and autonomous agency driven by generative AI models, leading to emergent rivalries, alliances, and dynamic narrative arcs with every playthrough."
        g['tagline'] = "Experience an open-world AI Wuxia RPG where every martial artist thinks and acts autonomously."
        g['aiRoleDescription'] = "Generative AI powers autonomous NPC cognition, dynamic dialogue, and branching martial arts storylines in real time."
    if g['id'] == 92:
        g['publisher'] = "Neko Labs"
        g['developer'] = "Neko Labs"

    for k, v in g.items():
        if isinstance(v, str):
            # Strip any residual non-ASCII or Chinese characters
            cleaned = re.sub(r'[\u4e00-\u9fff]', '', v).strip()
            g[k] = cleaned

with open('data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

# Final validation
raw_text = json.dumps(games)
chinese_count = len(re.findall(r'[\u4e00-\u9fff]', raw_text))
print(f"Total Chinese characters in entire data/games.json: {chinese_count}")
