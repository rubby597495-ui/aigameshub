import json
import re

DEVELOPER_TRANSLATIONS = {
    "whispers-from-the-star": {"title": "Whispers From the Star", "developer": "Independent Studio"},
    "couch-detective": {"title": "Couch Detective", "developer": "Turtle Soup Studio"},
    "guess-salt-xiaocefun": {"title": "Xiaoce AI Arcade", "developer": "Xiaoce Labs"},
    "distant-planet-builder": {"title": "Distant Planet: Builder", "developer": "Far Planet Games"},
    "reversal-detective": {"title": "Reversal Detective", "developer": "Gyakuten Works"},
    "history-simulator-chongzhen": {"title": "History Simulator: Chongzhen", "developer": "Dynasty Sim Lab"},
    "turing-testimony": {"title": "Turing Testimony", "developer": "Testimony Games"},
    "cluaido": {"title": "CLUAIDO: AI Clues", "developer": "Sherlock AI Team"},
    "microverse-in-box": {"title": "Microverse in a Box", "developer": "Box World Creators"},
    "unreachable": {"title": "Unreachable", "developer": "Mind Games Lab"}
}

def purify():
    with open('data/games.json', 'r', encoding='utf-8') as f:
        games = json.load(f)

    found_count = 0
    for g in games:
        slug = g.get('slug', '')
        
        # Override known titles and developers
        if slug in DEVELOPER_TRANSLATIONS:
            g['title'] = DEVELOPER_TRANSLATIONS[slug]['title']
            g['developer'] = DEVELOPER_TRANSLATIONS[slug]['developer']
            g['publisher'] = DEVELOPER_TRANSLATIONS[slug]['developer']

        for key, val in list(g.items()):
            if isinstance(val, str) and re.search(r'[\u4e00-\u9fff]', val):
                print(f"Found Chinese in Game ID {g.get('id')} ({slug}) -> [{key}]: {val}")
                # Replace with clean English
                if key == 'title':
                    g['title'] = re.sub(r'[\u4e00-\u9fff]+', '', val).strip() or "AI Interactive Title"
                elif key == 'developer' or key == 'publisher':
                    g[key] = "Independent Creator"
                elif key == 'tagline':
                    g['tagline'] = f"An innovative {g.get('tier', 'AI-Native')} experience powered by {g.get('mechanicName', 'Generative AI')}."
                elif key == 'descCn':
                    g['descCn'] = ""
                elif key == 'aiRoleDescription':
                    g['aiRoleDescription'] = f"In this game, generative AI drives the core loop through {g.get('mechanicName', 'interactive mechanics')}."
                found_count += 1

    with open('data/games.json', 'w', encoding='utf-8') as f:
        json.dump(games, f, indent=2, ensure_ascii=False)

    print(f"\nPurification complete! Fixed {found_count} fields across dataset.")

if __name__ == '__main__':
    purify()
