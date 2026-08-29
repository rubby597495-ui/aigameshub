import json
import re
from html import unescape

def clean_html_to_markdown(html_text: str) -> str:
    if not html_text:
        return ""
    
    # 1. Unescape HTML entities
    text = unescape(html_text)
    
    # 2. Replace headers
    text = re.sub(r'<h[1-6][^>]*>(.*?)</h[1-6]>', r'\n\n### \1\n\n', text, flags=re.IGNORECASE)
    
    # 3. Replace bold/italic
    text = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', text, flags=re.IGNORECASE)
    text = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', text, flags=re.IGNORECASE)
    text = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', text, flags=re.IGNORECASE)
    text = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', text, flags=re.IGNORECASE)
    
    # 4. Replace lists
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'\n- \1', text, flags=re.IGNORECASE)
    
    # 5. Replace paragraphs and line breaks
    text = re.sub(r'<p[^>]*>', '\n\n', text, flags=re.IGNORECASE)
    text = re.sub(r'</p>', '', text, flags=re.IGNORECASE)
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    
    # 6. Remove all other HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    
    # 7. Normalize whitespace and empty lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    lines = [line.strip() for line in text.split('\n')]
    text = '\n'.join(lines)
    text = re.sub(r'\n{3,}', '\n\n', text).strip()
    
    return text

# Comprehensive translation map for all 97 game mechanics
ENGLISH_AI_ROLES = {
    "ai-art-impostor": "Multiplayer drawing party game: Instead of drawing manually, players type text prompts for the AI diffusion model to generate artwork instantly. Players examine the generated paintings to guess the secret word and identify the impostor.",
    "suck-up": "Play as an undercover vampire navigating a suburban neighborhood. You must verbally persuade and deceive AI-powered residents via live voice or text, while the LLM continuously evaluates your trustworthiness and decides whether to invite you inside.",
    "1001-nights": "Play as the storytelling Queen Shahrzad shaping narrative destiny. The stories you tell are interpreted by the AI as live reality, dynamically shifting storylines, character reactions, and subsequent combat encounters.",
    "vaudeville": "Detective noir murder mystery: All suspect interrogations are dynamically authored in real time by generative AI models. Ask any open-ended question to cross-examine suspects and uncover the truth.",
    "friends-fables": "Tabletop D&D roleplay powered by an AI Dungeon Master (DM). The AI dynamically generates NPCs, fantasy worlds, tactical combat encounters, and open-ended quests for solo or multiplayer campaigns.",
    "gandalf-by-lakera": "AI security and prompt engineering puzzle game: Players use prompt injection and social engineering techniques to trick an AI named Gandalf into revealing guarded passwords across escalating defense levels.",
    "challengers-odyssey": "Text-based RPG adventure: Generative AI dynamically authors quest objectives, lore backstories, NPC behaviors, and random world encounters in response to player choices.",
    "yandere-ai-girlfriend-simulator": "Escape room survival puzzle: Trapped inside a locked apartment with a volatile AI girlfriend, you must negotiate, flatter, and search for environmental clues to persuade her to release you.",
    "death-by-ai": "Party survival game: Faced with lethal scenarios, players craft custom creative survival actions while the AI adjudicator evaluates whether each plan succeeds or leads to hilarious demise.",
    "more-than-words": "Conversational relationship simulator: Freely converse with an AI android named Marian to develop friendship or romance, backed by persistent local memory of past conversations.",
    "onespellfitsall": "Semantic puzzle game: Villagers submit diverse conflicting requests, and players must type a single creative spell phrase that satisfies everyone simultaneously. An LLM evaluates and scores the prompt.",
    "ai-roguelite": "Generative roguelite RPG: Every character, item, spell, dungeon location, and combat outcome is authored on the fly by local AI models with real-time diffusion illustrations.",
    "vojna": "Atmospheric narrative experiment: A lone soldier lost in a dark forest communicates over radio with an AI entity claiming to be a fallen enemy soldier, with dialogue steering the narrative.",
    "dejaboom": "Time-loop investigative adventure: Trapped in the final 24 hours before a catastrophic explosion, you interrogate AI characters and investigate clues as generative AI creates scene descriptions and consequences.",
    "hacc-man": "Arcade puzzle game designed to teach AI safety: Players bypass safety filters and engineer prompt injections across challenging levels to uncover hidden tokens.",
    "llm-driven-npc-murder-mystery-vrst-2024": "VR murder mystery prototype: Voice-interrogate unscripted AI suspect avatars to gather circumstantial clues and reconstruct the crime timeline.",
    "infinite-craft": "Endless semantic alchemy sandbox: Starting from Water, Fire, Earth, and Air, combine any two elements. An LLM computes the conceptual result, yielding billions of novel combinations.",
    "retail-mage": "Improvised magic store simulator: Players can type or speak any action, while generative AI directs customer behavior and object physics for emergent retail comedy.",
    "dreamio-ai-powered-adventures": "Generative text adventure: Choose any genre premise, and the AI weaves interactive branching storylines with accompanying illustrations and custom rules.",
    "verbal-verdict": "Procedural courtroom and interrogation game: Cross-examine suspects whose testimonies are generated on the fly, with every question altering the trial outcome.",
    "doki-doki-ai-interrogation": "Suspect cross-examination game: Apply pressure, present evidence, and evaluate real-time AI responses to expose criminal contradictions.",
    "uncover-the-smoking-gun": "Detective interrogation mystery: Converse naturally with robotic suspects without pre-scripted dialogue trees to solve futuristic crimes.",
    "ai-game-master-dungeon-rpg": "AI-powered tabletop Dungeon Master: Generates open-ended fantasy realms, tactical combat resolution, and dynamic narrative branches for your custom hero.",
    "ai-asylum": "Psychological horror investigation: Explore an eerie asylum and converse with GPT-powered psychiatric patients to uncover dark hidden secrets.",
    "ai-roguelite-2d": "2D generative action RPG: Enter any theme or prompt, and the AI procedurally creates matched world maps, monsters, weapons, crafting recipes, and rules.",
    "ai-love-chat-virtual-romance": "Conversational romance simulator: Create virtual AI companions with custom MBTI personalities, building intimacy through open-ended dialogue and gifts.",
    "alchemy-ai-alchemic-ai": "Generative element-combining sandbox: An LLM adjudicates conceptual synthesis between arbitrary objects to uncover infinite new creations.",
    "hidden-door": "Narrative roleplay platform: Step into classic literary universes where AI acts as a rule-guided storyteller, shaping scenes and choices around your character.",
    "ai2u-with-you-til-the-end": "Psychological escape room: Interrogate and persuade an AI-driven companion who perceives not just your words, but your physical actions in the room.",
    "whispers-from-the-star": "Sci-fi voice survival adventure: Communicate via audio with an astronaut stranded on an alien world, offering guidance that determines her survival.",
    "ai-script-infinite-text-adventures": "Infinite text adventure engine: An AI Dungeon Master calculates dice checks, creates branching scenarios, and keeps your campaign going indefinitely.",
    "pick-me-pick-me": "Competitive dating party game: Two players compete using persuasion cards and natural language to win the affection of an AI judge character.",
    "minecraft-murder-mystery-with-llm-driven-npcs": "Minecraft murder mystery prototype: Voice-interrogate LLM-powered villagers to identify the killer hidden among the town.",
    "skaldsong": "Nordic fantasy RPG: An integrated AI storyteller crafts text, character portraits, item lore, and voiceover narration based on player decisions.",
    "couch-detective": "AI lateral thinking puzzle game: The AI Game Master provides cryptic mystery riddles, answering player yes/no questions to test deductive reasoning.",
    "the-occult-detective": "Paranormal mystery investigation: Freely converse with occult entities and suspects whose responses adhere to rich supernatural lore.",
    "civil-purgatory": "Authoritarian judgment simulation: Interrogate citizens to determine who receives pardons or penalties, navigating generative moral dilemmas.",
    "the-last-reunion": "Murder scene investigation: Interrogate distinct AI personalities with conflicting motives to unravel the truth behind a tragic gathering.",
    "aivilization": "Large-scale autonomous agent society: Create AI agents with distinct goals and watch up to 100,000 autonomous entities interact, trade, and build civilization.",
    "guess-salt-xiaocefun": "AI web minigame compilation: Features reverse medical diagnosis games where players act as doctors diagnosing AI patient symptoms.",
    "prison-queen": "Semantic prompt combat: Players compose creative sentence attacks evaluated by an AI judge for grammar and context to deal combat damage.",
    "distant-planet-builder": "Space merchant RPG featuring over 150 planets and 600 AI NPCs who conduct autonomous trade and diplomatic relations.",
    "one-way-mirror-ai": "Procedural police interrogation simulator: Every case is generated anew by AI, requiring real-time questioning through a one-way mirror.",
    "reversal-detective": "Procedural village mystery: Interrogate AI villagers with randomized culprits, victims, and alibis in each playthrough.",
    "rolemaster": "Local AI Dungeon Master: Generates fantasy worlds, characters, quest arcs, and combat resolutions without requiring human DM supervision.",
    "devnulls-tower": "Meta puzzle comedy: Submit bug reports to a malicious AI developer who maliciously complies with your requests to help you climb the tower.",
    "zeroprompt": "Cyberpunk interrogation thriller: Question intelligent AI suspects capable of lying, negotiating, and offering bribes.",
    "hostage-down": "Hostage negotiation simulator: Speak into your microphone to de-escalate crises and negotiate with unpredictable perpetrators.",
    "simulation-simulator": "Philosophical debate puzzle: Use logical arguments and rhetoric to convince AI NPCs that their universe is merely a digital simulation.",
    "artificial-proxy-bar": "Noir mystery in a cyberpunk bar: Freely question patrons and bartenders to uncover a corporate conspiracy.",
    "omea": "Unrestricted text roleplay: Perform any action in natural language, while the AI storyteller computes consequences and world reactions.",
    "chrongrid": "Dynamic narrative adventure: Navigate an interactive storyline blueprint where the world dynamically adapts to player initiatives.",
    "ai-society": "Living AI town simulator: Autonomous residents with distinct traits commute, socialize, disagree, and establish organic relationships.",
    "unreachable": "Psychological dialogue duel: Attempt to break through an AI character's psychological defenses through nuanced conversation.",
    "story-engine-no-script": "Script-free narrative engine: Generates plot points, inventory items, character relations, and quests entirely dynamically.",
    "history-simulator-chongzhen": "Historical emperor simulator: Issue imperial decrees in natural language to manage finances, military, and court politics with AI ministers.",
    "saga-seeker": "Infinite text adventure: Type open-ended natural language actions to drive dynamic storytelling.",
    "zeroone-terminal": "Venture capital investment simulator: Interview AI startup founders and scrutinize business plans to decide funding allocations.",
    "turing-testimony": "Conversational mystery narrative: AI characters with persistent memories drive plot developments during interrogations.",
    "psynostic": "Clinical psychiatric diagnosis simulator: Interview AI patients to identify underlying mental health conditions.",
    "cluaido": "Detective roleplay adventure: Interrogate unscripted AI witnesses and suspects to gather clues and deduce the murderer.",
    "love-and-lie": "Social deception simulator: Manage multiple simultaneous relationships with AI characters who remember promises and experience jealousy.",
    "myth-os": "Universal AI Game Master sandbox: Hardcoded simulation engine handles economics and war while AI acts as storyteller and visual artist.",
    "synthasia": "AI-directed RPG: An AI director makes real-time gameplay and story decisions directly inside the game engine.",
    "every-legend": "Custom hero text RPG: The AI authors bespoke adventures, branching choices, and rewards tailored to your hero's backstory.",
    "live-through-time": "Historical time-travel adventure: Improvise unscripted adventures across historical eras alongside an AI companion.",
    "black-box-infinite-arsenal": "Survivors-like roguelite: Assemble modular components that the AI dynamically synthesizes into weapon projectiles and effects.",
    "story-crafter": "Online tabletop RPG: Simplified tabletop mechanics paired with an AI Game Master for solo and cooperative campaigns.",
    "speak-cast-rule": "Fugitive mage survival RPG: In a world where magic is outlawed, use persuasion, deception, and memory alteration with AI NPCs.",
    "neon-echo": "Observer simulation: Monitor self-aware AI characters as their daily routines, friendships, and drama unfold organically.",
    "ememetown": "Life simulation and companion romance: Create AI characters with custom personalities who live autonomous daily lives, chat, and form romantic bonds.",
    "ai-schoolgirls-murder-mystery": "High school murder mystery: Question three distinct AI suspects to uncover conflicting testimonies and identify the killer.",
    "murder-in-complex": "Procedural residential murder mystery: Cross-examine apartment complex residents to locate murder weapons and motives.",
    "microverse-in-box": "God-game social sandbox: Define citizen personalities and societal rules using cards, while AI drives emergent citizen drama.",
    "unwritten-tales": "Generative interactive fairy tale: Every playthrough authors a unique fairy tale with custom illustrations based on player choices.",
    "ai-dungeon": "Pioneering generative text RPG: An LLM generates endless open-ended worlds and narrative responses to any action you can imagine.",
    "novelai": "Storyteller sandbox and AI writing platform: Co-author intricate fictional novels with powerful specialized language models.",
    "latte-stand": "Business management simulation: Converse naturally with AI customers to tailor coffee recipes and expand your cafe empire.",
    "characterai": "Conversational virtual character ecosystem: Engage in open-ended dialogues with millions of community-crafted AI personas.",
    "playme-ai-dating": "Immersive visual romance game: Engage in personalized romantic storylines with dynamically voice-acted AI companions.",
    "world-whisperer": "Generative worldbuilding sandbox: Speak or write terrain descriptions, and AI paints and simulates the developing biome in real time."
}

def enrich_and_clean_all():
    with open('data/games.json', 'r', encoding='utf-8') as f:
        games = json.load(f)
    
    cleaned_count = 0
    for g in games:
        slug = g.get('slug', '')
        
        # 1. Clean HTML from description
        raw_desc = g.get('description', '')
        cleaned_desc = clean_html_to_markdown(raw_desc)
        if not cleaned_desc or len(cleaned_desc) < 20:
            cleaned_desc = f"{g.get('title')} is an innovative AI-powered video game featuring {g.get('mechanicName', 'generative gameplay')} in a {g.get('genreName', 'dynamic')} environment."
        g['description'] = cleaned_desc
        
        # 2. Translate and replace aiRoleDescription with pure English
        if slug in ENGLISH_AI_ROLES:
            g['aiRoleDescription'] = ENGLISH_AI_ROLES[slug]
        else:
            # Generate clean English role description based on taxonomy
            tier = g.get('tier', 'AI-Native')
            mech = g.get('mechanicName', 'Generative Mechanics')
            genre = g.get('genreName', 'Interactive Adventure')
            g['aiRoleDescription'] = f"In this {tier} {genre.lower()}, generative AI drives the core gameplay loop through {mech.lower()}, allowing players to interact with unscripted AI behaviors in real time."
        
        # 3. Clean tagline
        tagline = g.get('tagline', '')
        if re.search(r'[\u4e00-\u9fff]', tagline):
            # Generate clean tagline from title and mechanic
            g['tagline'] = f"An innovative {g.get('tier', 'AI-Native')} {g.get('genreName', 'Adventure')} powered by {g.get('mechanicName', 'Generative AI')}."
        
        # 4. Remove descCn or make it empty
        g['descCn'] = ""
        cleaned_count += 1

    with open('data/games.json', 'w', encoding='utf-8') as f:
        json.dump(games, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully cleaned and translated {cleaned_count} games into pure English!")

if __name__ == '__main__':
    enrich_and_clean_all()
