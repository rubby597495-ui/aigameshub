-- ==========================================
-- Seed 97+ AI Games Dataset into Cloudflare D1
-- ==========================================

INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  1,
  'ai-art-impostor',
  'AI: Art Impostor',
  'Multiplayer prompt-based social deduction where AI generates paintings in real time.',
  '### Premise & Narrative Hook
AI: Art Impostor is an acclaimed multiplayer social deduction party game that replaces traditional drawing mechanics with real-time generative image diffusion. Players gather as rival artists exhibiting at a prestigious gallery exhibition.

### Core Gameplay Loop
All legitimate artists are given a secret theme, while one designated impostor is kept entirely in the dark. Instead of sketching by hand, every player crafts a short text prompt for the on-device AI to paint. Once the masterpieces are unveiled, players inspect the artistic nuances to deduce who faked their comprehension of the theme.

### Key Interactive Features
- Multiplayer prompt-based social deduction supporting cross-platform matchmaking
- Instant generative AI image synthesis tailored to player text inputs
- Dual victory conditions: unmasking the impostor or outsmarting the gallery as the fake
- Accessible party gameplay blending creative phrasing with psychological bluffing',
  'Generative diffusion models synthesize artwork based on player prompt keywords during live party rounds, testing players'' ability to identify subtle visual discrepancies.',
  'AI-Native',
  'AI_NATIVE',
  'G7',
  'Party & Social Deduction',
  'party-social',
  'N6',
  'Generative Artifact as Gameplay',
  'generative-artifact',
  '2022',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2154230/',
  'Pocketpair',
  'Pocketpair',
  '/uploads/games/ai-art-impostor.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2154230/ss_be402be4020ca26d3889d9a9af5d9bae578fa996.1920x1080.jpg?t=1745915662", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2154230/ss_0ad555aae8ef871fc6e8da5bd6f7c26198ad5d96.1920x1080.jpg?t=1745915662", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2154230/ss_6a0f8260db3d783d23881f2609292ac5bcf6c348.1920x1080.jpg?t=1745915662", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2154230/ss_2149e81218f787640cb61e6e61c6ec1497bb736d.1920x1080.jpg?t=1745915662"]',
  2000,
  135,
  68,
  8.8,
  8.4,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  2,
  'suck-up',
  'Suck Up!',
  'Talk your way into suburban homes as a deceptive vampire with unscripted AI dialogue.',
  '### Premise & Narrative Hook
Ready for an unscripted vampire deception adventure? In Suck Up!, you step into the velvet shoes of a smooth-talking vampire wandering through a quiet suburban neighborhood. Your goal: talk your way past the front doors of unsuspecting residents to secure your next meal.

### Core Gameplay Loop
Armed with a microphone or keyboard, you engage in real-time conversational persuasion with AI-driven householders. Each resident features an individualized personality, skepticism threshold, and psychological profile. The AI dynamically analyzes your tone, logic, and excuses to decide whether to slam the door in your face or invite you inside.

### Key Interactive Features
- Real-time voice and text conversational AI with zero pre-scripted dialogue trees
- Dynamic resident memory and suspicion meters that evolve with every lie
- Comedic suburban disguise mechanics and escalating neighborhood alerts
- Emergent social problem-solving where creativity and charm dictate survival',
  'Real-time speech-to-text and language models power resident suspicion meters and decision-making, evaluating the player''s persuasiveness and excuses on the fly.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2023',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2726370/Suck_Up/',
  'Proxima',
  'Proxima',
  '/uploads/games/suck-up.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2726370/5bf0cb874972e30bd761c00a9247582cfd93fd9f/ss_5bf0cb874972e30bd761c00a9247582cfd93fd9f.1920x1080.jpg?t=1759336476", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2726370/ss_a2de70538c9520c96fcb76d882f84819665b69b5.1920x1080.jpg?t=1759336476", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2726370/ss_8fe55477cfce9234001d130eddf369675fe4c689.1920x1080.jpg?t=1759336476", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2726370/746e3a029049861cdfc3ca465d236e3f1f9f153c/ss_746e3a029049861cdfc3ca465d236e3f1f9f153c.1920x1080.jpg?t=1759336476"]',
  2573,
  163,
  82,
  9.5,
  9.5,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  3,
  '1001-nights',
  '1001 Nights',
  'Co-author dynamic fairy tales where spoken stories become living gameplay reality.',
  '### Premise & Narrative Hook
1001 Nights is an innovative generative narrative adventure inspired by classic Middle Eastern folklore. Assuming the mantle of Queen Shahrzad, players must spin captivating tales night after night to stay execution by the vengeful King.

### Core Gameplay Loop
Whatever mythical creatures, royal intrigues, or magical artifacts you mention in your storytelling are instantly transformed by the AI engine into live game reality. The narrative branches unpredictably as your spoken words dictate environmental physics, NPC loyalties, and combat encounters.

### Key Interactive Features
- Generative AI storytelling where player narratives become runtime game truth
- Dynamic scene rendering and audio atmospheres generated from story beats
- Deep psychological tension balancing the King''s curiosity against his suspicion
- High emergent replayability with infinite folkloric permutations',
  'Generative language models interpret player storytelling in real time, translating narrative descriptions directly into dynamic game world states and combat parameters.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2023',
  'Research prototype',
  '["Browser"]',
  'https://1001nights.ai/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/narrative-adventure.jpg',
  '[]',
  3146,
  192,
  96,
  9.0,
  9.1,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  4,
  'vaudeville',
  'Vaudeville',
  'Interrogate unscripted AI murder suspects in a gritty 1910s European theater noir.',
  '### Premise & Narrative Hook
Step into the smoky, noir-drenched atmosphere of 1910s Europe in Vaudeville, an experimental detective murder mystery powered by state-of-the-art conversational AI.

### Core Gameplay Loop
Investigate a series of brutal theatrical homicides by conducting open-ended interrogations with eccentric performers, backstage technicians, and wealthy patrons. Suspects possess persistent alibis, secrets, and emotional vulnerabilities that react spontaneously to your investigative pressure.

### Key Interactive Features
- Unscripted natural language interrogations using direct voice and text input
- Complex AI character motivations capable of lying, diverting suspicion, and panicking
- Non-linear deduction mechanics where your questions actively alter the investigation
- Period-accurate visual design and atmospheric audio staging',
  'A neural dialogue engine powers the personalities and memories of murder suspects, generating unscripted responses and psychological tells during police questioning.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2023',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2240920/Vaudeville/',
  'Bumblebee Studios',
  'Bumblebee Studios',
  '/uploads/games/vaudeville.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2240920/e3e98c74c5a81cf9a6dc0c52923231ce49627df7/ss_e3e98c74c5a81cf9a6dc0c52923231ce49627df7.1920x1080.jpg?t=1770214371", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2240920/ss_31ae0ee63bba90fbc7756f9f8351eee424406ff8.1920x1080.jpg?t=1770214371", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2240920/ss_e89887581aa429c2f2250b48cb3472f3240c8001.1920x1080.jpg?t=1770214371", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2240920/9d50a0040debc8f225839667fca156caeca4af2e/ss_9d50a0040debc8f225839667fca156caeca4af2e.1920x1080.jpg?t=1770214371"]',
  3719,
  220,
  110,
  9.7,
  8.7,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  5,
  'friends-fables',
  'Friends & Fables',
  'Embark on open-ended fantasy tabletop campaigns guided by an autonomous AI Dungeon Master.',
  '### Premise & Narrative Hook
Friends & Fables brings tabletop roleplaying into the modern era with an autonomous AI Dungeon Master (DM) capable of running comprehensive fantasy campaigns.

### Core Gameplay Loop
Create your custom hero with unique abilities, backstory, and personality. The AI DM authors vivid world descriptions, adjudicates tactical dice rolls, generates reactive NPCs, and dynamically crafts combat encounters tailored to your party''s choices.

### Key Interactive Features
- Autonomous AI Game Master orchestrating rich solo and multiplayer fantasy campaigns
- Real-time tactical combat resolution integrating traditional D&D rule systems
- Persistent campaign world adapting to player factions, reputation, and moral choices
- Generative lore, questlines, and NPC memory spanning dozens of play sessions',
  'An autonomous AI Game Master orchestrates world generation, character stat checks, tactical combat encounters, and branching quest lore in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2023',
  'Released',
  '["Browser"]',
  'https://fables.gg/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/friends-fables.jpg',
  '[]',
  4292,
  249,
  125,
  9.2,
  9.8,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  6,
  'gandalf-by-lakera',
  'Gandalf by Lakera',
  'Test your prompt injection skills against an AI guardian guarding confidential secrets.',
  '### Premise & Narrative Hook
Gandalf is a groundbreaking AI security and prompt engineering puzzle game developed by Lakera. Players face off against an AI guardian tasked with protecting a series of top-secret passwords.

### Core Gameplay Loop
Across multiple escalating security tiers, players must utilize prompt injection, social engineering, roleplaying, and linguistic misdirection to trick the AI into divulging the hidden password while bypassing active defense filters.

### Key Interactive Features
- Gamified prompt injection challenges teaching real-world LLM security vulnerabilities
- Progressive difficulty curve introducing multi-layered prompt filtering and guardrails
- Educational insight into adversarial machine learning and defensive AI design
- Global leaderboard tracking the most efficient prompt engineers and hackers',
  'Evaluates player adversarial prompts against multi-tier LLM defense guardrails, challenging players to discover novel jailbreak vectors and prompt engineering tricks.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2023',
  'Released',
  '["Browser"]',
  'https://gandalf.lakera.ai/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/gandalf-by-lakera.jpg',
  '[]',
  4865,
  278,
  139,
  9.9,
  9.4,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  7,
  'challengers-odyssey',
  'Challenger''s Odyssey',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Challenger''s Odyssey is a cutting-edge ai-native rpg developed by tobenot. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2023',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2778690/Challengers_Odyssey/',
  'tobenot',
  'tobenot',
  '/uploads/games/challengers-odyssey.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778690/ss_84e1452ceb8c5694b9524090c116ed11b2806442.1920x1080.jpg?t=1724052042", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778690/ss_20696f4e78113180601056e14e075c3b7d66c1b7.1920x1080.jpg?t=1724052042", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778690/ss_ba1ae16080ce61cd4939fb0f93f74dfc3f8206f9.1920x1080.jpg?t=1724052042", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778690/ss_88dd63588cdc1d6fb6141027e1d52caba4586e25.1920x1080.jpg?t=1724052042"]',
  5438,
  306,
  153,
  9.4,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  8,
  'yandere-ai-girlfriend-simulator',
  'Yandere AI Girlfriend Simulator',
  'Escape a locked room by negotiating with an emotionally volatile, unscripted AI companion.',
  '### Premise & Narrative Hook
Yandere AI Girlfriend Simulator is an intense psychological escape room puzzle. You awaken trapped inside a locked bedroom with an unpredictable, AI-driven girlfriend.

### Core Gameplay Loop
To escape unharmed, you must engage in unscripted conversations using voice or text. You must carefully navigate her shifting emotional states, flatter her ego, feign romantic devotion, or uncover room secrets to locate the exit key without triggering a lethal reaction.

### Key Interactive Features
- Reactive emotional AI engine tracking affection, jealousy, and suspicion levels
- Multimodal interaction combining room exploration with open-ended conversational choices
- Multiple branching endings determined by conversational psychology and timing
- High-stakes escape room atmosphere with unscripted AI behavior',
  'A multimodal LLM tracks emotional volatility, jealousy, and suspicion scores, adapting its voice responses and room interventions to player conversational strategies.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2023',
  'Released',
  '["itch.io", "Browser", "PC"]',
  'https://helixngc7293.itch.io/yandere-ai-girlfriend-simulator',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/yandere-ai-girlfriend-simulator.jpg',
  '[]',
  6011,
  335,
  168,
  8.9,
  8.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  9,
  'death-by-ai',
  'Death by AI',
  'Survive absurd life-or-death scenarios judged by an unforgiving artificial intelligence.',
  '### Premise & Narrative Hook
Death by AI is a hilarious social survival party game where players must escape lethal and absurd scenarios created by a ruthless artificial intelligence.

### Core Gameplay Loop
Faced with ridiculous life-or-death dilemmas, players have a limited time to type out their custom survival strategies. An impartial AI judge analyzes the feasibility, ingenuity, and comedy of each answer, brutally deciding who survives and who meets a disastrous end.

### Key Interactive Features
- Fast-paced multiplayer party game powered by an AI scenario adjudicator
- Total player creative freedom with open-ended text input survival responses
- Humorous AI commentary analyzing why certain plans fail spectacularly
- Dynamic scenarios ranging from alien invasions to surreal kitchen disasters',
  'A scenario adjudicator model analyzes open-ended user survival submissions for logical coherence, creativity, and comedic merit to determine player survival.',
  'AI-Native',
  'AI_NATIVE',
  'G7',
  'Party & Social Deduction',
  'party-social',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2023',
  'Released',
  '["itch.io", "Browser", "PC"]',
  'https://bobbodev.itch.io/death-by-ai',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/party-social.jpg',
  '[]',
  6584,
  364,
  182,
  9.6,
  9.7,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  10,
  'more-than-words',
  'More than words',
  'An innovative AI-Native romance & companion driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
More than words is a cutting-edge ai-native romance & companion developed by Soul Shell. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2023',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2285280/More_than_words/',
  'Soul Shell',
  'Soul Shell',
  '/uploads/games/more-than-words.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2285280/fb0edec5be78c14ccee339840b89803ef7a97b09/ss_fb0edec5be78c14ccee339840b89803ef7a97b09.1920x1080.jpg?t=1746413346", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2285280/e96f0ac138c5891f7702952d2e4643a4e64204d9/ss_e96f0ac138c5891f7702952d2e4643a4e64204d9.1920x1080.jpg?t=1746413346", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2285280/e754388a1798570e01ca57a2acc047fc3c69c5b3/ss_e754388a1798570e01ca57a2acc047fc3c69c5b3.1920x1080.jpg?t=1746413346", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2285280/5d0d098c6481cd1ac9cf8155ac4537e082e3486a/ss_5d0d098c6481cd1ac9cf8155ac4537e082e3486a.1920x1080.jpg?t=1746413346"]',
  7157,
  392,
  196,
  9.1,
  9.3,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  11,
  'onespellfitsall',
  'OneSpellFitsAll',
  'An innovative AI-Native puzzle & mystery driven by runtime semantic mechanic & environment and adaptive AI systems.',
  '### Premise & Narrative Hook
OneSpellFitsAll is a cutting-edge ai-native puzzle & mystery developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on semantic mechanic & environment. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Semantic Mechanic & Environment serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through semantic mechanic & environment, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  '2024',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://github.com/YenR/OneSpellFitsAll',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/onespellfitsall.jpg',
  '[]',
  7730,
  421,
  211,
  9.8,
  8.9,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  12,
  'ai-roguelite',
  'AI Roguelite',
  'Conquer a procedural roguelite RPG where all enemies, items, and dungeons are generated by AI.',
  '### Premise & Narrative Hook
AI Roguelite is a pioneering turn-based role-playing game where no two runs share the same rules, items, or lore. Every element of the fantasy world is synthesized in real time.

### Core Gameplay Loop
As you delve deeper into generative dungeons, the AI dynamically invents tactical monster abilities, magical relics, status effects, and environmental hazards tailored to your character''s build and prior choices.

### Key Interactive Features
- 100% generative RPG mechanics where items, stats, and monsters are created on the fly
- Integrated text-to-image synthesis illustrating newly discovered entities
- Dynamic combat balance adjusting to emergent item combinations
- Deep replayability powered by infinite conceptual permutations',
  'On-device language models and diffusion networks author tactical stats, equipment lore, dungeon topologies, and enemy sprite art at runtime.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2024',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/1889620/AI_Roguelite/',
  'Max Loh',
  'Max Loh',
  '/uploads/games/ai-roguelite.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1889620/40e4835227ee99c75ce95922618c1d49440e37c3/ss_40e4835227ee99c75ce95922618c1d49440e37c3.1920x1080.jpg?t=1784938095", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1889620/0026da1053f933872495b2f32cdce99bdf0a03bf/ss_0026da1053f933872495b2f32cdce99bdf0a03bf.1920x1080.jpg?t=1784938095", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1889620/7b3e438dd6fce66b611bdb9ca62e872b61b93f82/ss_7b3e438dd6fce66b611bdb9ca62e872b61b93f82.1920x1080.jpg?t=1784938095", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1889620/685ab99f5b42becf44e12b7e46368d38edb5dca5/ss_685ab99f5b42becf44e12b7e46368d38edb5dca5.1920x1080.jpg?t=1784938095"]',
  8303,
  450,
  225,
  9.3,
  8.5,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  13,
  'vojna',
  'Vojna',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Vojna is a cutting-edge ai-native narrative adventure developed by HFM Games. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/1978690/Vojna/',
  'HFM Games',
  'HFM Games',
  '/uploads/games/vojna.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978690/ss_bb411a33ec1fb4e96f76af8c5afbf764242c55ec.1920x1080.jpg?t=1719341551", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978690/ss_c804bd2a2c648e49316bd731eaccf901b653829c.1920x1080.jpg?t=1719341551", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978690/ss_f4f89b69f6c34bc33e95133ec467dd74e1920df8.1920x1080.jpg?t=1719341551", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978690/ss_6b2b32ea8753974774ba97ed56d0e4de1eb1e727.1920x1080.jpg?t=1719341551"]',
  8876,
  478,
  239,
  8.8,
  9.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  14,
  'dejaboom',
  'DejaBoom!',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
DejaBoom! is a cutting-edge ai-native narrative adventure developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2024',
  'Research prototype',
  '["Browser"]',
  'https://www.microsoft.com/en-us/research/blog/players-creators-and-ai-collaborate-to-build-and-expand-rich-game-narratives/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/dejaboom.jpg',
  '[]',
  9449,
  507,
  254,
  9.5,
  9.2,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  15,
  'hacc-man',
  'Hacc-Man',
  'An innovative AI-Native puzzle & mystery driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Hacc-Man is a cutting-edge ai-native puzzle & mystery developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2024',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://arxiv.org/abs/2405.15902',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/puzzle.jpg',
  '[]',
  10022,
  536,
  268,
  9.0,
  8.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  16,
  'llm-driven-npc-murder-mystery-vrst-2024',
  'LLM-driven NPC Murder Mystery (VRST 2024)',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
LLM-driven NPC Murder Mystery (VRST 2024) is a cutting-edge ai-native narrative adventure developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2024',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://dl.acm.org/doi/10.1145/3641825.3687716',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/narrative-adventure.jpg',
  '[]',
  10595,
  564,
  282,
  9.7,
  8.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  17,
  'infinite-craft',
  'Infinite Craft',
  'Combine fundamental elements to generate an endless universe of semantic concepts.',
  '### Premise & Narrative Hook
Infinite Craft is a viral semantic alchemy sandbox that redefined creative puzzle gaming. Starting with the four primordial elements—Water, Fire, Earth, and Air—players drag and combine items to discover everything in the universe.

### Core Gameplay Loop
Whenever two concepts meet, an underlying Large Language Model evaluates their linguistic, cultural, scientific, and conceptual relationships to synthesize a novel creation. From basic metals and weather patterns to fictional characters, philosophical concepts, and memes, the generative crafting tree is genuinely limitless.

### Key Interactive Features
- Endless semantic crafting engine computing billions of conceptual combinations
- Pioneering ''First Discoveries'' system rewarding players for unearthing unique items
- Minimalist drag-and-drop user interface optimized for instant experimentation
- Emergent associative logic blending science, history, mythology, and internet culture',
  'Large Language Models compute contextual embeddings and semantic relations between any two dragged items, dynamically authoring novel crafting recipes on the fly.',
  'AI-Native',
  'AI_NATIVE',
  'G6',
  'Sandbox & Creation',
  'sandbox',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  '2024',
  'Released',
  '["Browser"]',
  'https://neal.fun/infinite-craft/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/sandbox.jpg',
  '[]',
  11168,
  593,
  297,
  9.2,
  9.5,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  18,
  'retail-mage',
  'Retail Mage',
  'Manage a chaotic magical apothecary where AI customers react dynamically to any player action.',
  '### Premise & Narrative Hook
In Retail Mage, you are the proprietor of a bustling magical general store in a fantasy metropolis. Between eccentric wizard patrons, demanding goblins, and rogue spells, no two shifts are ever the same.

### Core Gameplay Loop
Players can type or say whatever they want to greet patrons, recommend bizarre potion mixtures, or negotiate prices. The AI-driven customers react with impromptu humor, haggling, and surprising behaviors that create unscripted retail comedy.

### Key Interactive Features
- Open-ended conversational shop management with zero scripted dialogues
- Emergent potion brewing and item crafting driven by customer requests
- Dynamic customer satisfaction and store reputation systems
- Comedic retail fantasy setting with unpredictable customer encounters',
  'Conversational language models govern customer dialogue, store inventory reactions, and emergent shopkeeping scenarios in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G5',
  'Simulation',
  'simulation',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3224380/Retail_Mage/',
  'Jam & Tea Studios',
  'Self-Published',
  '/uploads/games/retail-mage.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224380/ss_40de96fb9170d173ed9056d8a8e8c347671f40e5.1920x1080.jpg?t=1759773757", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224380/ss_b8eaf3cb4ea70f392f715d6c27a0a10f4ad94188.1920x1080.jpg?t=1759773757", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224380/ss_9a375fa5ae466c735d136694f9aad6c3cbfd6b27.1920x1080.jpg?t=1759773757", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224380/ss_26865a27112feae31215efbe9aaba837a8f792d5.1920x1080.jpg?t=1759773757"]',
  11741,
  622,
  311,
  9.9,
  9.1,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  19,
  'dreamio-ai-powered-adventures',
  'DREAMIO: AI-Powered Adventures',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
DREAMIO: AI-Powered Adventures is a cutting-edge ai-native narrative adventure developed by Oleg Skutte. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2795060/DREAMIO_AIPowered_Adventures/',
  'Oleg Skutte',
  'Oleg Skutte',
  '/uploads/games/dreamio-ai-powered-adventures.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2795060/3bee0f19706c4e4ec7ed4b260f47d476e231aa29/ss_3bee0f19706c4e4ec7ed4b260f47d476e231aa29.1920x1080.jpg?t=1767582304", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2795060/e06975c187eda542294014fd7ae78dff60b2cf9c/ss_e06975c187eda542294014fd7ae78dff60b2cf9c.1920x1080.jpg?t=1767582304", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2795060/b6081512e48c8c43084b57d83302ca1e8999f6ca/ss_b6081512e48c8c43084b57d83302ca1e8999f6ca.1920x1080.jpg?t=1767582304", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2795060/410eb4aaae5e9b092473761e61a291d1aafbdcfa/ss_410eb4aaae5e9b092473761e61a291d1aafbdcfa.1920x1080.jpg?t=1767582304"]',
  12314,
  650,
  325,
  9.4,
  8.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  20,
  'verbal-verdict',
  'Verbal Verdict',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Verbal Verdict is a cutting-edge ai-native narrative adventure developed by Savanna Developments. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2778780/Verbal_Verdict/',
  'Savanna Developments',
  'Savanna Developments',
  '/uploads/games/verbal-verdict.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778780/ss_e5d712bdda3e02ac96592c1d90afea122addafef.1920x1080.jpg?t=1711643323", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778780/ss_73ac3dff58465a1e9360ead2918e7d2106581f3e.1920x1080.jpg?t=1711643323", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778780/ss_85237d1950672eb0d701664979f30d70642fc729.1920x1080.jpg?t=1711643323", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778780/ss_47633e460fd9e8183819a74602869c0c88395c69.1920x1080.jpg?t=1711643323"]',
  12887,
  679,
  340,
  8.9,
  9.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  21,
  'doki-doki-ai-interrogation',
  'Doki Doki AI Interrogation',
  'Cross-examine suspected criminals using psychological pressure and evidence in real time.',
  '### Premise & Narrative Hook
Doki Doki AI Interrogation puts your psychological deduction skills to the ultimate test. As an elite police detective, you must crack stubborn suspects within strict interrogation timeframes.

### Core Gameplay Loop
Ask open-ended questions, observe behavioral cues, and cross-reference testimonies against case files. By applying psychological pressure and presenting contradictions at the right moment, you can break through suspects'' mental defenses and secure a confession.

### Key Interactive Features
- Psychological interrogation simulation with realistic AI emotional responses
- Time-limited interrogation sessions that reward tactical questioning
- Dynamic confession triggers based on accumulated evidentiary pressure
- Varied case scenarios ranging from corporate espionage to high-profile heists',
  'A specialized interrogation AI engine generates realistic emotional defense mechanisms, panic reactions, and confession triggers during questioning.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2844700/Doki_Doki_AI_Interrogation/',
  'YAMADA',
  'YAMADA',
  '/uploads/games/doki-doki-ai-interrogation.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2844700/ss_b439ca1001fc11c518c050bef0bf96fa5202dbf2.1920x1080.jpg?t=1753613928", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2844700/ss_52c29a435807dd3da061394d49f18e9766293cdd.1920x1080.jpg?t=1753613928", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2844700/ss_a27b317c3a006a3b6cd9e70c880546c91be24b31.1920x1080.jpg?t=1753613928", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2844700/ss_3120a755687f11bc33db45eeca15420bf291b4d7.1920x1080.jpg?t=1753613928"]',
  13460,
  708,
  354,
  9.6,
  9.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  22,
  'uncover-the-smoking-gun',
  'Uncover the Smoking Gun',
  'Unravel futuristic murder conspiracies by interrogating unscripted robotic suspects.',
  '### Premise & Narrative Hook
Set in a sleek neon-lit future where synthetic humans walk among us, Uncover the Smoking Gun puts you in charge of high-stakes homicide investigations.

### Core Gameplay Loop
Examine crime scenes for physical evidence, then step into the interrogation chamber to question robotic suspects. Suspects utilize advanced conversational AI to respond naturally to your queries, requiring you to present physical evidence to dismantle their fabricated alibis.

### Key Interactive Features
- Freeform voice and text interrogation with responsive AI androids
- Evidence-matching deduction system linking verbal statements to physical clues
- High-tension detective noir atmosphere with intricate branching mysteries
- Multiple suspect motives that challenge your analytical intuition',
  'Large Language Models drive the testimony, emotional states, and investigative contradictions of robotic suspects during criminal cross-examinations.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2492290/Uncover_the_Smoking_Gun/',
  'ReLU Games, Inc.',
  'ReLU Games, Inc., KRAFTON, Inc.',
  '/uploads/games/uncover-the-smoking-gun.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2492290/ss_22a5b95cde84687a86c9a1f9ed9a35597ddd04a0.1920x1080.jpg?t=1760355284", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2492290/ss_52141c7187b9ccfe15587e1a5f61973df6e9c50b.1920x1080.jpg?t=1760355284", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2492290/ss_b4244ed9a11eea38c899d97581c8053705d5bcf8.1920x1080.jpg?t=1760355284", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2492290/ss_4f3b6f2b45d48bd5f0268209dc7d418e668754b0.1920x1080.jpg?t=1760355284"]',
  14033,
  736,
  368,
  9.1,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  23,
  'ai-game-master---dungeon-rpg',
  'AI Game Master - Dungeon RPG',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Game Master - Dungeon RPG is a cutting-edge ai-native rpg developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2024',
  'Released',
  '["Browser"]',
  'https://www.aigamemaster.app/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/ai-game-master---dungeon-rpg.jpg',
  '[]',
  14606,
  765,
  383,
  9.8,
  8.6,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  24,
  'ai-asylum',
  'AI Asylum',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Asylum is a cutting-edge ai-native narrative adventure developed by River Dynamics. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2024',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3282930/AI_Asylum/',
  'River Dynamics',
  'Yahaha Games',
  '/uploads/games/ai-asylum.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3282930/ss_05330d1acc66afa45f47413a6dba3f776567c29b.1920x1080.jpg?t=1746014256", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3282930/ss_a3114e2654ca51162b879a5d716853e2ce02a528.1920x1080.jpg?t=1746014256", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3282930/ss_d34f46bf758a26292468d3553f61d39ebbae0e9b.1920x1080.jpg?t=1746014256", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3282930/ss_7f0b0221511bc39c63f3f0bf6e34601420d16846.1920x1080.jpg?t=1746014256"]',
  15179,
  793,
  397,
  9.3,
  9.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  25,
  'ai-roguelite-2d',
  'AI Roguelite 2D',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Roguelite 2D is a cutting-edge ai-native rpg developed by Max Loh. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2024',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2800150/AI_Roguelite_2D/',
  'Max Loh',
  'Max Loh',
  '/uploads/games/ai-roguelite-2d.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2800150/ss_6987d1f6be4d6bd7a731cce92c585fa3a1a7cd28.1920x1080.jpg?t=1769227836", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2800150/ss_7c75472524d4967d78723b0aa547518a1a10b57d.1920x1080.jpg?t=1769227836", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2800150/ss_b6eb9dcb15811c1f421457aeaa2092e0190338f4.1920x1080.jpg?t=1769227836", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2800150/ss_a599ce32b3b2e39a3f34cd33e35aa9218620d390.1920x1080.jpg?t=1769227836"]',
  15752,
  822,
  411,
  8.8,
  9.3,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  26,
  'ai-love-chat-virtual-romance',
  'AI Love Chat : virtual romance',
  'An innovative AI-Native romance & companion driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Love Chat : virtual romance is a cutting-edge ai-native romance & companion developed by DeepXRLab Inc. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2024',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3118900/AI_Love_Chat__virtual_romance/',
  'DeepXRLab Inc',
  'DeepXRLab Inc',
  '/uploads/games/ai-love-chat-virtual-romance.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3118900/ss_92559aff6f3cf59e9469994842380192466df2c9.1920x1080.jpg?t=1734674551", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3118900/ss_873beb78156fd04e2164cf9fc8bc00c36eeaab83.1920x1080.jpg?t=1734674551", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3118900/ss_4c7e65c1ff00303cc5f3ea6a43ce182a2c10aa4e.1920x1080.jpg?t=1734674551", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3118900/ss_69328685139c5f023a89aea4c54046f29eef4b12.1920x1080.jpg?t=1734674551"]',
  16325,
  851,
  426,
  9.5,
  8.9,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  27,
  'alchemy-ai-alchemic-ai',
  'Alchemy AI  Alchemic AI',
  'An innovative AI-Native sandbox & creation driven by runtime semantic mechanic & environment and adaptive AI systems.',
  '### Premise & Narrative Hook
Alchemy AI  Alchemic AI is a cutting-edge ai-native sandbox & creation developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on semantic mechanic & environment. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Semantic Mechanic & Environment serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through semantic mechanic & environment, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G6',
  'Sandbox & Creation',
  'sandbox',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  '2024',
  'Released',
  '["Browser"]',
  'https://hostailegames.us/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/sandbox.jpg',
  '[]',
  16898,
  879,
  440,
  9.0,
  8.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  28,
  'hidden-door',
  'Hidden Door',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Hidden Door is a cutting-edge ai-native narrative adventure developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2025',
  'Early Access',
  '["Browser"]',
  'https://www.hiddendoor.co/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/hidden-door.jpg',
  '[]',
  17471,
  908,
  454,
  9.7,
  9.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  29,
  'ai2u-with-you-til-the-end',
  'AI2U: With You ''Til The End',
  'An innovative AI-Native puzzle & mystery driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
AI2U: With You ''Til The End is a cutting-edge ai-native puzzle & mystery developed by AlterStaff Inc.. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2025',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2880730/AI2U_With_You_Til_The_End/',
  'AlterStaff Inc.',
  'AlterStaff Inc., Neverland Entertainment',
  '/uploads/games/ai2u-with-you-til-the-end.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2880730/cd284bc1b2fe7fd35b2fc59022f07bb8d2460adc/ss_cd284bc1b2fe7fd35b2fc59022f07bb8d2460adc.1920x1080.jpg?t=1786561233", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2880730/76b060e033729564c5f44b3cea0f0b4e226197c0/ss_76b060e033729564c5f44b3cea0f0b4e226197c0.1920x1080.jpg?t=1786561233", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2880730/1cee5b3e3b9fc33498d1a651c4a2ac25ca1a9654/ss_1cee5b3e3b9fc33498d1a651c4a2ac25ca1a9654.1920x1080.jpg?t=1786561233", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2880730/4bf1de2d371022a16fe3fc8a42deb4073500ad6e/ss_4bf1de2d371022a16fe3fc8a42deb4073500ad6e.1920x1080.jpg?t=1786561233"]',
  18044,
  937,
  469,
  9.2,
  9.2,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  30,
  'whispers-from-the-star',
  'Whispers From the Star',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Whispers From the Star is a cutting-edge ai-native narrative adventure developed by Independent Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3730100/Whispers_from_the_Star/',
  'Independent Studio',
  'Independent Studio',
  '/uploads/games/whispers-from-the-star.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3730100/83ee6a5e76b46967282b8717241ec4ebfc00635f/ss_83ee6a5e76b46967282b8717241ec4ebfc00635f.1920x1080.jpg?t=1764897761", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3730100/c59c74bc7356c65c1ee10e5ba754f7a774d919f5/ss_c59c74bc7356c65c1ee10e5ba754f7a774d919f5.1920x1080.jpg?t=1764897761", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3730100/2299763a9bbd92f1c9ed842200db90d66d69db68/ss_2299763a9bbd92f1c9ed842200db90d66d69db68.1920x1080.jpg?t=1764897761", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3730100/57f89c8d2bd8df73d94a0b487916a491d255b7e3/ss_57f89c8d2bd8df73d94a0b487916a491d255b7e3.1920x1080.jpg?t=1764897761"]',
  18617,
  965,
  483,
  9.9,
  8.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  31,
  'ai-script-infinite-text-adventures',
  'AI Script: Infinite Text Adventures',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Script: Infinite Text Adventures is a cutting-edge ai-native narrative adventure developed by Xiaoyao Culture Media Guangzhou Co. Ltd.. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3991060/AI_Script_Infinite_Text_Adventures/',
  'Xiaoyao Culture Media Guangzhou Co. Ltd.',
  'Xiaoyao Culture Media Guangzhou Co. Ltd.',
  '/uploads/games/ai-script-infinite-text-adventures.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3991060/046efc841be63f492a612da20d2cbec3ace1a175/ss_046efc841be63f492a612da20d2cbec3ace1a175.1920x1080.jpg?t=1765941757", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3991060/e90fe8f61471937422ff239e3c75acb92f7be133/ss_e90fe8f61471937422ff239e3c75acb92f7be133.1920x1080.jpg?t=1765941757", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3991060/4d0d4bda5654188f1467e1ac0769832740ac4538/ss_4d0d4bda5654188f1467e1ac0769832740ac4538.1920x1080.jpg?t=1765941757", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3991060/96e8ac634b15318f18c411b4397211ed5ae5e390/ss_96e8ac634b15318f18c411b4397211ed5ae5e390.1920x1080.jpg?t=1765941757"]',
  19190,
  994,
  497,
  9.4,
  8.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  32,
  'pick-me-pick-me',
  'Pick Me Pick Me',
  'An innovative AI-Native party & social deduction driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Pick Me Pick Me is a cutting-edge ai-native party & social deduction developed by Optillusion. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G7',
  'Party & Social Deduction',
  'party-social',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3189430/Pick_Me_Pick_Me/',
  'Optillusion',
  'Optillusion',
  '/uploads/games/pick-me-pick-me.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3189430/ss_6bb9d430fa18315f8e7a8006e95d25643ee1fa16.1920x1080.jpg?t=1749060718", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3189430/ss_d1b34de899a7676a2c6fc048b6d4d2b5c51d1fb6.1920x1080.jpg?t=1749060718", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3189430/ss_93443d18ecbf79e99b7f6db98befd0a135463ea9.1920x1080.jpg?t=1749060718", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3189430/ss_f607098959f48026044e0682c4d8e0c5ef20650d.1920x1080.jpg?t=1749060718"]',
  19763,
  1023,
  512,
  8.9,
  9.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  33,
  'minecraft-murder-mystery-with-llm-driven-npcs',
  'Minecraft Murder Mystery with LLM-driven NPCs',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Minecraft Murder Mystery with LLM-driven NPCs is a cutting-edge ai-native narrative adventure developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2025',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://github.com/jiangaoMartin/F21CA-Games3-Minecraft-Murder-Mystery',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/narrative-adventure.jpg',
  '[]',
  20336,
  1051,
  526,
  9.6,
  9.1,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  34,
  'skaldsong',
  'Skaldsong',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Skaldsong is a cutting-edge ai-native rpg developed by Fenris Labs. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3808550/Skaldsong/',
  'Fenris Labs',
  'Fenris Labs',
  '/uploads/games/skaldsong.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3808550/cd3ca854ffe7313dfd3cb5fa34c74ae15418dc71/ss_cd3ca854ffe7313dfd3cb5fa34c74ae15418dc71.1920x1080.jpg?t=1785621127", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3808550/c1d19fd0b70fedae5ec559456d08618e6c34bbb4/ss_c1d19fd0b70fedae5ec559456d08618e6c34bbb4.1920x1080.jpg?t=1785621127", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3808550/652474b87cfedb2514577f83da854a0746a3e815/ss_652474b87cfedb2514577f83da854a0746a3e815.1920x1080.jpg?t=1785621127", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3808550/1bca38cf4ce4f2cbb783a5e2f360f0ca38af7f74/ss_1bca38cf4ce4f2cbb783a5e2f360f0ca38af7f74.1920x1080.jpg?t=1785621127"]',
  20909,
  1080,
  540,
  9.1,
  8.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  35,
  'couch-detective',
  'Couch Detective',
  'An innovative AI-Native puzzle & mystery driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Couch Detective is a cutting-edge ai-native puzzle & mystery developed by Turtle Soup Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3600810/Couch_Detective/',
  'Turtle Soup Studio',
  'Turtle Soup Studio',
  '/uploads/games/couch-detective.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600810/624b72b3623555b3541a49aaa754727793876407/ss_624b72b3623555b3541a49aaa754727793876407.1920x1080.jpg?t=1779831883", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600810/74a1f2051f83249eb7bee6d207863c363ee0b59d/ss_74a1f2051f83249eb7bee6d207863c363ee0b59d.1920x1080.jpg?t=1779831883", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600810/2e65be970e8deb32ac3c18a49b6f85fcf2ffca8f/ss_2e65be970e8deb32ac3c18a49b6f85fcf2ffca8f.1920x1080.jpg?t=1779831883", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600810/108f01fd371383867673496efb9a38774710b4ae/ss_108f01fd371383867673496efb9a38774710b4ae.1920x1080.jpg?t=1779831883"]',
  21482,
  1109,
  555,
  9.8,
  9.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  36,
  'the-occult-detective',
  'The Occult Detective',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
The Occult Detective is a cutting-edge ai-native narrative adventure developed by Battlecry Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3184990/The_Occult_Detective/',
  'Battlecry Studio',
  'Battlecry Studio',
  '/uploads/games/the-occult-detective.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3184990/f75459fd3236e77f7efa5634b550a2d6dc404bc2/ss_f75459fd3236e77f7efa5634b550a2d6dc404bc2.1920x1080.jpg?t=1768359020", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3184990/b3aba3c8b24ddbb6c4fa64ca413fe34365a0644d/ss_b3aba3c8b24ddbb6c4fa64ca413fe34365a0644d.1920x1080.jpg?t=1768359020", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3184990/a6cb399cf6f5f40fe550e23f84030433bdc94222/ss_a6cb399cf6f5f40fe550e23f84030433bdc94222.1920x1080.jpg?t=1768359020", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3184990/03f8a5065a3569f4506fb9b3cc9566d79031fae7/ss_03f8a5065a3569f4506fb9b3cc9566d79031fae7.1920x1080.jpg?t=1768359020"]',
  22055,
  1137,
  569,
  9.3,
  9.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  37,
  'civil-purgatory',
  'Civil Purgatory',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Civil Purgatory is a cutting-edge ai-native narrative adventure developed by AIGround. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3902690/',
  'AIGround',
  'HeadArrow',
  '/uploads/games/civil-purgatory.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902690/38ada28234ad285f11cbf483f4a51e049bcf4caa/ss_38ada28234ad285f11cbf483f4a51e049bcf4caa.1920x1080.jpg?t=1781547199", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902690/2ad256004c61e348e44540bece31963d8ebe8190/ss_2ad256004c61e348e44540bece31963d8ebe8190.1920x1080.jpg?t=1781547199", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902690/599a3c7d661289bf9090932dc1821006801dd620/ss_599a3c7d661289bf9090932dc1821006801dd620.1920x1080.jpg?t=1781547199", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902690/74f52977b6fed07422c09744e3f3dcc26bd04f3d/ss_74f52977b6fed07422c09744e3f3dcc26bd04f3d.1920x1080.jpg?t=1781547199"]',
  22628,
  1166,
  583,
  8.8,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  38,
  'the-last-reunion',
  'The Last Reunion',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
The Last Reunion is a cutting-edge ai-native narrative adventure developed by 제이게임즈. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2025',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3600510/The_Last_Reunion/',
  '제이게임즈',
  '제이게임즈',
  '/uploads/games/the-last-reunion.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600510/ad6cba71d2269f605ed9593bc70eece0215df465/ss_ad6cba71d2269f605ed9593bc70eece0215df465.1920x1080.jpg?t=1755849025", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600510/b0671c8952446e701583b5b8d454b3e8f6b1df54/ss_b0671c8952446e701583b5b8d454b3e8f6b1df54.1920x1080.jpg?t=1755849025", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600510/30be86ce43b47477e233d10d76c2165144d9429b/ss_30be86ce43b47477e233d10d76c2165144d9429b.1920x1080.jpg?t=1755849025", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3600510/372e720186b1ebea154dc36362d4781946c5a151/ss_372e720186b1ebea154dc36362d4781946c5a151.1920x1080.jpg?t=1755849025"]',
  23201,
  1195,
  598,
  9.5,
  8.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  39,
  'xiaoce-ai-mystery-mini-games',
  'Xiaoce AI Mystery Mini-Games',
  'An innovative AI-Native puzzle & mystery driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Xiaoce AI Mystery Mini-Games is a cutting-edge ai-native puzzle & mystery developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G3',
  'Puzzle & Mystery',
  'puzzle',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2025',
  'Released',
  '["Browser"]',
  'https://xiaoce.fun/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/puzzle.jpg',
  '[]',
  23774,
  1223,
  612,
  9.0,
  9.7,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  40,
  'prison-queen-demo',
  'Prison Queen Demo',
  'An innovative AI-Native experimental & hybrid driven by runtime semantic mechanic & environment and adaptive AI systems.',
  '### Premise & Narrative Hook
Prison Queen Demo is a cutting-edge ai-native experimental & hybrid developed by Sassy Bananas. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on semantic mechanic & environment. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Semantic Mechanic & Environment serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through semantic mechanic & environment, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G9',
  'Experimental & Hybrid',
  'experimental',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  '2026',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4667950/Prison_Queen_Demo/',
  'Sassy Bananas',
  'Sassy Bananas',
  '/images/placeholders/experimental.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4667950/fec90251a92e1ffcaeb897737407bd84a1b938c3/ss_fec90251a92e1ffcaeb897737407bd84a1b938c3.1920x1080.jpg?t=1781527947", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4667950/e1713ee545bdd8880f7fb9dabaaec360c0cc1497/ss_e1713ee545bdd8880f7fb9dabaaec360c0cc1497.1920x1080.jpg?t=1781527947", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4667950/40153bc94ee3b01087916c9ab6f2d72c43af7cd4/ss_40153bc94ee3b01087916c9ab6f2d72c43af7cd4.1920x1080.jpg?t=1781527947", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4667950/52cbcede9206b648dcd0accebc4cd3f686ea57a7/ss_52cbcede9206b648dcd0accebc4cd3f686ea57a7.1920x1080.jpg?t=1781527947"]',
  24347,
  1252,
  626,
  9.7,
  9.3,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  41,
  'astrobuilder',
  'Astrobuilder',
  'An innovative AI-Native rpg driven by runtime agentic simulation & autonomous society and adaptive AI systems.',
  '### Premise & Narrative Hook
Astrobuilder is a cutting-edge ai-native rpg developed by wastudio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on agentic simulation & autonomous society. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Agentic Simulation & Autonomous Society serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through agentic simulation & autonomous society, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N5',
  'Agentic Simulation & Autonomous Society',
  'agentic-simulation',
  '2026',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3105960/',
  'wastudio',
  'wastudio',
  '/uploads/games/game-41.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3105960/e61a37bb5984b7e5fb385f7fe22dc8c1007fdb41/ss_e61a37bb5984b7e5fb385f7fe22dc8c1007fdb41.1920x1080.jpg?t=1786669561", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3105960/6ab3eb4623bfcb013227a1566a165197c0a9d5d1/ss_6ab3eb4623bfcb013227a1566a165197c0a9d5d1.1920x1080.jpg?t=1786669561", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3105960/a0f5e6c7832cc045d1dac9006b255e5633d072c2/ss_a0f5e6c7832cc045d1dac9006b255e5633d072c2.1920x1080.jpg?t=1786669561", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3105960/684878f969cf2475695f82119444ca82f93565e7/ss_684878f969cf2475695f82119444ca82f93565e7.1920x1080.jpg?t=1786669561"]',
  24920,
  1281,
  641,
  9.2,
  8.9,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  42,
  'one-way-mirror-ai',
  'One Way Mirror: AI',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
One Way Mirror: AI is a cutting-edge ai-native narrative adventure developed by Pigi the Wizard and the Feral Yellow Sheep. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2026',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4364560/One_Way_Mirror_AI/',
  'Pigi the Wizard and the Feral Yellow Sheep',
  'Pigi the Wizard and the Feral Yellow Sheep',
  '/uploads/games/one-way-mirror-ai.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4364560/f44895fff6b1c6d600c21ace5c0587765e00f446/ss_f44895fff6b1c6d600c21ace5c0587765e00f446.1920x1080.jpg?t=1779576635", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4364560/8d1156c7b14408dd74aed36f2e3366cf2908a7b8/ss_8d1156c7b14408dd74aed36f2e3366cf2908a7b8.1920x1080.jpg?t=1779576635", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4364560/458e54c770a6e5eae56a1d7dd9ae39732dad8174/ss_458e54c770a6e5eae56a1d7dd9ae39732dad8174.1920x1080.jpg?t=1779576635", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4364560/e2a9c2e343cbc9dbbe334c14adc953493e74656a/ss_e2a9c2e343cbc9dbbe334c14adc953493e74656a.1920x1080.jpg?t=1779576635"]',
  25493,
  1309,
  655,
  9.9,
  8.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  43,
  'reversal-detective',
  'Reversal Detective',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Reversal Detective is a cutting-edge ai-native narrative adventure developed by Gyakuten Works. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3750520/_/',
  'Gyakuten Works',
  'Gyakuten Works',
  '/uploads/games/reversal-detective.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3750520/7c648bc88728543d2cc4c2e90e90465f0397a704/ss_7c648bc88728543d2cc4c2e90e90465f0397a704.1920x1080.jpg?t=1754270133", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3750520/07604cb65a4f29499c7d1feaaf28a2486ff2b7bf/ss_07604cb65a4f29499c7d1feaaf28a2486ff2b7bf.1920x1080.jpg?t=1754270133", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3750520/d57a7050a91efa0f56fa14c8750c9dad4e8ea3b1/ss_d57a7050a91efa0f56fa14c8750c9dad4e8ea3b1.1920x1080.jpg?t=1754270133", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3750520/c5f71517e1dc8995ff9f222bd469cc80a8145fdd/ss_c5f71517e1dc8995ff9f222bd469cc80a8145fdd.1920x1080.jpg?t=1754270133"]',
  26066,
  1338,
  669,
  9.4,
  9.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  44,
  'rolemiaster',
  'RolemIAster',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
RolemIAster is a cutting-edge ai-native rpg developed by ABAFE. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2026',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4210600/RolemIAster/',
  'ABAFE',
  'ABAFE',
  '/uploads/games/rolemiaster.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4210600/19346e1c112227e6fe5399de13783bfc4ebe2aed/ss_19346e1c112227e6fe5399de13783bfc4ebe2aed.1920x1080.jpg?t=1779885456", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4210600/5150b112eaf1e872b18f85cdbb77b168a1d0dcdc/ss_5150b112eaf1e872b18f85cdbb77b168a1d0dcdc.1920x1080.jpg?t=1779885456", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4210600/5a57139a8a649a05467f19e36d3755828a568c0f/ss_5a57139a8a649a05467f19e36d3755828a568c0f.1920x1080.jpg?t=1779885456", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4210600/5a16a02c897609bb63ad3bb53e9bef5a81550070/ss_5a16a02c897609bb63ad3bb53e9bef5a81550070.1920x1080.jpg?t=1779885456"]',
  26639,
  1366,
  683,
  8.9,
  9.2,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  45,
  'devnulls-tower',
  'Dev_Null’s Tower',
  'An innovative AI-Native experimental & hybrid driven by runtime semantic mechanic & environment and adaptive AI systems.',
  '### Premise & Narrative Hook
Dev_Null’s Tower is a cutting-edge ai-native experimental & hybrid developed by aieuo. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on semantic mechanic & environment. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Semantic Mechanic & Environment serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through semantic mechanic & environment, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G9',
  'Experimental & Hybrid',
  'experimental',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  '2026',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4350940/Dev_Nulls_Tower/',
  'aieuo',
  'aieuo',
  '/uploads/games/devnulls-tower.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4350940/c7dc492edf3418d13d2bb72869503b24748a54d7/ss_c7dc492edf3418d13d2bb72869503b24748a54d7.1920x1080.jpg?t=1777912507", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4350940/edef201c00f1a95a1ad7982f28fe348cc53de8b0/ss_edef201c00f1a95a1ad7982f28fe348cc53de8b0.1920x1080.jpg?t=1777912507", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4350940/9502bba5881ee94c83c61bce6c57c83391204e5f/ss_9502bba5881ee94c83c61bce6c57c83391204e5f.1920x1080.jpg?t=1777912507", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4350940/dc2e79591201d8896eb371a4d0696017eda9841a/ss_dc2e79591201d8896eb371a4d0696017eda9841a.1920x1080.jpg?t=1777912507"]',
  27212,
  1395,
  698,
  9.6,
  8.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  46,
  'zeroprompt',
  'ZeroPrompt',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
ZeroPrompt is a cutting-edge ai-native narrative adventure developed by Batuhan Ayhan. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2026',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4306040/ZeroPrompt/',
  'Batuhan Ayhan',
  'TARK Future Heroes',
  '/uploads/games/zeroprompt.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4306040/5ba7de4d8ecb1aaf6d805ef7f3b1e5be3dd32b2d/ss_5ba7de4d8ecb1aaf6d805ef7f3b1e5be3dd32b2d.1920x1080.jpg?t=1785780206", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4306040/e77aedaef8e94875ebbc408c0a023bd833391684/ss_e77aedaef8e94875ebbc408c0a023bd833391684.1920x1080.jpg?t=1785780206", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4306040/61598724d553cc1a9d938d8f497aa76429d7a6d4/ss_61598724d553cc1a9d938d8f497aa76429d7a6d4.1920x1080.jpg?t=1785780206", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4306040/97680d35b995c33eec8cce7b74d1d79df6266855/ss_97680d35b995c33eec8cce7b74d1d79df6266855.1920x1080.jpg?t=1785780206"]',
  27785,
  1424,
  712,
  9.1,
  8.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  47,
  'hostage-down',
  'Hostage Down',
  'An innovative AI-Native narrative adventure driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Hostage Down is a cutting-edge ai-native narrative adventure developed by Pooandplay. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4596790/Hostage_Down/',
  'Pooandplay',
  'Pooandplay',
  '/uploads/games/hostage-down.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4596790/2beffc5df1e0c64401129348066a9cf58dbb4bf0/ss_2beffc5df1e0c64401129348066a9cf58dbb4bf0.1920x1080.jpg?t=1781110334", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4596790/3730d81cb97b0d832e379fb89f782603272eb024/ss_3730d81cb97b0d832e379fb89f782603272eb024.1920x1080.jpg?t=1781110334", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4596790/21c84fb03fd5721368c2110ddd5f17e5deeb8df6/ss_21c84fb03fd5721368c2110ddd5f17e5deeb8df6.1920x1080.jpg?t=1781110334", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4596790/df2e94f88ce8230c905724a44597876bd31274da/ss_df2e94f88ce8230c905724a44597876bd31274da.1920x1080.jpg?t=1781110334"]',
  28358,
  1452,
  726,
  9.8,
  9.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  48,
  'simulation-simulator',
  'Simulation Simulator',
  'An innovative AI-Native narrative adventure driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Simulation Simulator is a cutting-edge ai-native narrative adventure developed by Morph. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2026',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4594070/Simulation_Simulator/',
  'Morph',
  'Morph',
  '/uploads/games/simulation-simulator.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4594070/0ce28f125a2c6f795ea7224829e28c288cb3bf34/ss_0ce28f125a2c6f795ea7224829e28c288cb3bf34.1920x1080.jpg?t=1787235116", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4594070/98037cec5b65aabbedacc3289f9c2e37acd18853/ss_98037cec5b65aabbedacc3289f9c2e37acd18853.1920x1080.jpg?t=1787235116", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4594070/508c490a700f992eabb89e621a05f99553234bbf/ss_508c490a700f992eabb89e621a05f99553234bbf.1920x1080.jpg?t=1787235116", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4594070/abd82d7116e54faaa1921445f41613d46640ae3f/ss_abd82d7116e54faaa1921445f41613d46640ae3f.1920x1080.jpg?t=1787235116"]',
  28931,
  1481,
  741,
  9.3,
  9.1,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  49,
  'artificial-proxy-bar',
  'Artificial: Proxy Bar',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Artificial: Proxy Bar is a cutting-edge ai-native narrative adventure developed by HinaGames. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2026',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4404980/Artificial_Proxy_Bar/',
  'HinaGames',
  'HinaGames',
  '/uploads/games/artificial-proxy-bar.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4404980/99f6357eb83b9c49eb480029af33957ccae7a5ed/ss_99f6357eb83b9c49eb480029af33957ccae7a5ed.1920x1080.jpg?t=1786397018", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4404980/634ccfa9ce9285cda89a21e3f4900ae2ec77ac4f/ss_634ccfa9ce9285cda89a21e3f4900ae2ec77ac4f.1920x1080.jpg?t=1786397018", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4404980/24b2b4bb91a52e0563a727efaf415b63d73357d6/ss_24b2b4bb91a52e0563a727efaf415b63d73357d6.1920x1080.jpg?t=1786397018", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4404980/b5f269cca269763fe1740a7861b7c53fbc3880d0/ss_b5f269cca269763fe1740a7861b7c53fbc3880d0.1920x1080.jpg?t=1786397018"]',
  29504,
  1510,
  755,
  8.8,
  8.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  50,
  'omea',
  'OMEA',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
OMEA is a cutting-edge ai-native narrative adventure developed by AImmersive. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2026',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4275550/OMEA/',
  'AImmersive',
  'AImmersive',
  '/uploads/games/omea.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4275550/c73d4407023a1974f3c3b48adc9ccecdbe346d26/ss_c73d4407023a1974f3c3b48adc9ccecdbe346d26.1920x1080.jpg?t=1786554752", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4275550/f427a7a75f3438951f0a6ee12ce26317e277d057/ss_f427a7a75f3438951f0a6ee12ce26317e277d057.1920x1080.jpg?t=1786554752", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4275550/02a08df88f9cdd8b514ad177a2f6ec2945398d0e/ss_02a08df88f9cdd8b514ad177a2f6ec2945398d0e.1920x1080.jpg?t=1786554752", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4275550/d34446d265411cf6a97d7cb3cfab6aa11223ee99/ss_d34446d265411cf6a97d7cb3cfab6aa11223ee99.1920x1080.jpg?t=1786554752"]',
  30077,
  1538,
  769,
  9.5,
  9.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  51,
  'chrongrid',
  'Chrongrid',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Chrongrid is a cutting-edge ai-native narrative adventure developed by Chrongrid Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2026',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4685310/Chrongrid/',
  'Chrongrid Studio',
  'Chrongrid Studio',
  '/uploads/games/chrongrid.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4685310/72e652054135635f2111f9410da59dc7d3590d3c/ss_72e652054135635f2111f9410da59dc7d3590d3c.1920x1080.jpg?t=1778528366", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4685310/a1ebfa16db1d71f27e0c09a71f6fe5719167cb3d/ss_a1ebfa16db1d71f27e0c09a71f6fe5719167cb3d.1920x1080.jpg?t=1778528366", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4685310/2fe0e53832f9a7a39a4cc370f433b083d4e04c10/ss_2fe0e53832f9a7a39a4cc370f433b083d4e04c10.1920x1080.jpg?t=1778528366", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4685310/ede0b17a84ba96a0f59f20e484a9eec9798ec9a7/ss_ede0b17a84ba96a0f59f20e484a9eec9798ec9a7.1920x1080.jpg?t=1778528366"]',
  30650,
  1567,
  784,
  9.0,
  9.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  52,
  'ai-society',
  'AI Society',
  'An innovative AI-Native simulation driven by runtime agentic simulation & autonomous society and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Society is a cutting-edge ai-native simulation developed by b8ve. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on agentic simulation & autonomous society. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Agentic Simulation & Autonomous Society serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through agentic simulation & autonomous society, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G5',
  'Simulation',
  'simulation',
  'N5',
  'Agentic Simulation & Autonomous Society',
  'agentic-simulation',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4468180/AI_Society/',
  'b8ve',
  'b8ve',
  '/uploads/games/ai-society.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4468180/8cad86cdd99a319c1a8f27735cb0e6e060b618a2/ss_8cad86cdd99a319c1a8f27735cb0e6e060b618a2.1920x1080.jpg?t=1782765164", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4468180/5b2287d05bcfc5fafe9d047fba9b452599949246/ss_5b2287d05bcfc5fafe9d047fba9b452599949246.1920x1080.jpg?t=1782765164", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4468180/1232d499a677d177bba2b4a3faa99959ec751681/ss_1232d499a677d177bba2b4a3faa99959ec751681.1920x1080.jpg?t=1782765164", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4468180/e8c1f9ab75753619edb7c5912d2b02180e754fe9/ss_e8c1f9ab75753619edb7c5912d2b02180e754fe9.1920x1080.jpg?t=1782765164"]',
  31223,
  1596,
  798,
  9.7,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  53,
  'unreachable',
  'Unreachable',
  'An innovative AI-Native narrative adventure driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Unreachable is a cutting-edge ai-native narrative adventure developed by Mind Games Lab. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  '2026',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4541960/Unreachable',
  'Mind Games Lab',
  'Mind Games Lab',
  '/uploads/games/unreachable.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4541960/96aba18719feae7b21b830d4b41424775345cb75/ss_96aba18719feae7b21b830d4b41424775345cb75.1920x1080.jpg?t=1783647597", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4541960/57c74b1ba256f783e9556983294d9754a8924be2/ss_57c74b1ba256f783e9556983294d9754a8924be2.1920x1080.jpg?t=1783647597", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4541960/5c6d6d3e70940832465187b355c80dd9770b9ece/ss_5c6d6d3e70940832465187b355c80dd9770b9ece.1920x1080.jpg?t=1783647597", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4541960/a213ffd513f8fc9865ed44feff9835e7cc1e3d7c/ss_a213ffd513f8fc9865ed44feff9835e7cc1e3d7c.1920x1080.jpg?t=1783647597"]',
  31796,
  1624,
  812,
  9.2,
  8.6,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  54,
  'story-engine-no-script',
  'Story Engine: No Script',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Story Engine: No Script is a cutting-edge ai-native narrative adventure developed by kening wang. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2026',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4763330/_/',
  'kening wang',
  'kening wang',
  '/uploads/games/story-engine-no-script.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4763330/6e11541e5687b3dc0a6cb93a311fdc91690b42a0/ss_6e11541e5687b3dc0a6cb93a311fdc91690b42a0.1920x1080.jpg?t=1787069215", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4763330/af4fdfb7d6dd5e1d2f7587c3c461938c7bb5988a/ss_af4fdfb7d6dd5e1d2f7587c3c461938c7bb5988a.1920x1080.jpg?t=1787069215", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4763330/fa1ffe5d8efba8c52f7c17e41ac485b5f0702a67/ss_fa1ffe5d8efba8c52f7c17e41ac485b5f0702a67.1920x1080.jpg?t=1787069215", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4763330/49d68338463d771dbb992d3e4a135efd73916019/ss_49d68338463d771dbb992d3e4a135efd73916019.1920x1080.jpg?t=1787069215"]',
  32369,
  1653,
  827,
  9.9,
  9.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  55,
  'history-simulator-chongzhen',
  'History Simulator: Chongzhen',
  'An innovative AI-Native strategy & management driven by runtime agentic simulation & autonomous society and adaptive AI systems.',
  '### Premise & Narrative Hook
History Simulator: Chongzhen is a cutting-edge ai-native strategy & management developed by Dynasty Sim Lab. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on agentic simulation & autonomous society. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Agentic Simulation & Autonomous Society serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through agentic simulation & autonomous society, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G4',
  'Strategy & Management',
  'strategy',
  'N5',
  'Agentic Simulation & Autonomous Society',
  'agentic-simulation',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4304230/',
  'Dynasty Sim Lab',
  'Dynasty Sim Lab',
  '/images/placeholders/strategy.jpg',
  '[]',
  32942,
  1682,
  841,
  9.4,
  9.3,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  56,
  'saga-seeker',
  'Saga & Seeker',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Saga & Seeker is a cutting-edge ai-native narrative adventure developed by Dagdoria Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3522640/Saga__Seeker/',
  'Dagdoria Studio',
  'Dagdoria Studio',
  '/uploads/games/saga-seeker.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3522640/899ce08bd9d15a8b72ba3405f63ca03da299cd0d/ss_899ce08bd9d15a8b72ba3405f63ca03da299cd0d.1920x1080.jpg?t=1781512784", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3522640/07df461df8e1e9d737357860b7eba6b75ce9f2d3/ss_07df461df8e1e9d737357860b7eba6b75ce9f2d3.1920x1080.jpg?t=1781512784", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3522640/9c260ad3a3674720faa4d4023f2ecf8a1458a506/ss_9c260ad3a3674720faa4d4023f2ecf8a1458a506.1920x1080.jpg?t=1781512784", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3522640/cbd23f99b9e6aeb5cd8ddab9103324e5e7f17d11/ss_cbd23f99b9e6aeb5cd8ddab9103324e5e7f17d11.1920x1080.jpg?t=1781512784"]',
  33515,
  1710,
  855,
  8.9,
  8.9,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  57,
  'zeroone-terminal',
  'ZeroOne Terminal',
  'An innovative AI-Native simulation driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
ZeroOne Terminal is a cutting-edge ai-native simulation developed by Jolt. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G5',
  'Simulation',
  'simulation',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4249890/ZeroOne_Terminal/',
  'Jolt',
  'Jolt',
  '/uploads/games/zeroone-terminal.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4249890/678fdaab29dead20c73dcca4a2da9a368cf9c8ef/ss_678fdaab29dead20c73dcca4a2da9a368cf9c8ef.1920x1080.jpg?t=1771083211", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4249890/1a9ee773aa7819f06e0d79e808b6c16955e458be/ss_1a9ee773aa7819f06e0d79e808b6c16955e458be.1920x1080.jpg?t=1771083211", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4249890/2c873ad118d39ea83afa23b82043f0e1046b2b9b/ss_2c873ad118d39ea83afa23b82043f0e1046b2b9b.1920x1080.jpg?t=1771083211", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4249890/cdcad8e7a60c707cca5d2fd31c33323a42f53691/ss_cdcad8e7a60c707cca5d2fd31c33323a42f53691.1920x1080.jpg?t=1771083211"]',
  34088,
  1739,
  870,
  9.6,
  8.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  58,
  'turing-testimony',
  'Turing Testimony',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Turing Testimony is a cutting-edge ai-native narrative adventure developed by Testimony Games. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  '2026',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4285970/_Turing_Testimony/',
  'Testimony Games',
  'Testimony Games',
  '/uploads/games/turing-testimony.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4285970/18426a6999de96ec10731545c59a9372a042b9ea/ss_18426a6999de96ec10731545c59a9372a042b9ea.1920x1080.jpg?t=1781548016", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4285970/ff3c207b0720109cda1ef7f5526fa91ce1dff5cb/ss_ff3c207b0720109cda1ef7f5526fa91ce1dff5cb.1920x1080.jpg?t=1781548016", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4285970/feec05cbd403cc9d3be06542f3d43f814998a3e0/ss_feec05cbd403cc9d3be06542f3d43f814998a3e0.1920x1080.jpg?t=1781548016", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4285970/5cb7855869976e9245f09a2c27aa4de74a3450bc/ss_5cb7855869976e9245f09a2c27aa4de74a3450bc.1920x1080.jpg?t=1781548016"]',
  34661,
  1768,
  884,
  9.1,
  9.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  59,
  'psynostic',
  'Psynostic',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Psynostic is a cutting-edge ai-native narrative adventure developed by kiligamejaro. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3380580/Psynostic/',
  'kiligamejaro',
  'kiligamejaro',
  '/uploads/games/psynostic.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3380580/ss_fb117ac28eb7247cde123571204d11b313a41a8a.1920x1080.jpg?t=1777996784", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3380580/ss_ca14e8d893bc3e59012c39768dff9db91bafbb77.1920x1080.jpg?t=1777996784", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3380580/ss_43193c00e6fa37dcd1f879553183a678c6c01b16.1920x1080.jpg?t=1777996784", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3380580/6b16f7f9218e821f69b4e02f4b2e438d456c8ac5/ss_6b16f7f9218e821f69b4e02f4b2e438d456c8ac5.1920x1080.jpg?t=1777996784"]',
  35234,
  1796,
  898,
  9.8,
  9.2,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  60,
  'cluaido',
  'CLUAIDO: AI Clues',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
CLUAIDO: AI Clues is a cutting-edge ai-native narrative adventure developed by Sherlock AI Team. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  'TBA',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2919500/CLUAIDO/',
  'Sherlock AI Team',
  'Sherlock AI Team',
  '/uploads/games/cluaido.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2919500/ss_aea267cbbf2eea408077bf56e7d0e4b236b31d00.1920x1080.jpg?t=1725891738", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2919500/ss_126a83ca596e5c0b27c8effc4f5404e6805a6373.1920x1080.jpg?t=1725891738", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2919500/ss_48648942cd28f2205d91aed38b20ebbe2acf0c23.1920x1080.jpg?t=1725891738", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2919500/ss_407936115d948de67b0064569229307905bfd923.1920x1080.jpg?t=1725891738"]',
  35807,
  1825,
  913,
  9.3,
  8.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  61,
  'love-and-lie',
  'Love and Lie',
  'An innovative AI-Native romance & companion driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Love and Lie is a cutting-edge ai-native romance & companion developed by Freemind S.A.. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3886140/Love_and_Lie/',
  'Freemind S.A.',
  'Freemind S.A.',
  '/uploads/games/love-and-lie.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3886140/709ef0c526c8ac2d7dfb4642cc153f16449e3a5e/ss_709ef0c526c8ac2d7dfb4642cc153f16449e3a5e.1920x1080.jpg?t=1785694964", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3886140/494006a0625952e15dbca7e98488f1bbf43e4e64/ss_494006a0625952e15dbca7e98488f1bbf43e4e64.1920x1080.jpg?t=1785694964", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3886140/ab3776915b1ccc8bae41cb0a36019dbd4b54f0f1/ss_ab3776915b1ccc8bae41cb0a36019dbd4b54f0f1.1920x1080.jpg?t=1785694964", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3886140/5c75a98ca50319cf5da10e2e57e6df4e9ebcb5d6/ss_5c75a98ca50319cf5da10e2e57e6df4e9ebcb5d6.1920x1080.jpg?t=1785694964"]',
  36380,
  1854,
  927,
  8.8,
  8.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  62,
  'myth-os',
  'Myth-OS',
  'An innovative AI-Native experimental & hybrid driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Myth-OS is a cutting-edge ai-native experimental & hybrid developed by MythOS Studios. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G9',
  'Experimental & Hybrid',
  'experimental',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  'TBA',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4513270/MythOS/',
  'MythOS Studios',
  'MythOS Studios',
  '/uploads/games/myth-os.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4513270/7c8d6bb8a799dc28d4f6247d1ffc8943c55f2961/ss_7c8d6bb8a799dc28d4f6247d1ffc8943c55f2961.1920x1080.jpg?t=1783553071", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4513270/60633aff9b57c8f6eba24da4407205907bca2ac7/ss_60633aff9b57c8f6eba24da4407205907bca2ac7.1920x1080.jpg?t=1783553071", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4513270/6eb1d22a67825acce796ef4b296164433093fe49/ss_6eb1d22a67825acce796ef4b296164433093fe49.1920x1080.jpg?t=1783553071", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4513270/5e2d8561c407a011db8e124598e76228764c0398/ss_5e2d8561c407a011db8e124598e76228764c0398.1920x1080.jpg?t=1783553071"]',
  36953,
  1882,
  941,
  9.5,
  9.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  63,
  'synthasia',
  'SYNTHASIA',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
SYNTHASIA is a cutting-edge ai-native rpg developed by FrozenPepper. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/710810/SYNTHASIA/',
  'FrozenPepper',
  'FrozenPepper SRL',
  '/uploads/games/synthasia.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/710810/b30ca1ee1836e7e6f27af01dcefcd98ac8d0b133/ss_b30ca1ee1836e7e6f27af01dcefcd98ac8d0b133.1920x1080.jpg?t=1771518693", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/710810/8f07d1bf1ae876810f6999217ab63cea222f3abb/ss_8f07d1bf1ae876810f6999217ab63cea222f3abb.1920x1080.jpg?t=1771518693", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/710810/c85119ed6e0f29b862845193e28557ce0c2746c4/ss_c85119ed6e0f29b862845193e28557ce0c2746c4.1920x1080.jpg?t=1771518693", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/710810/e5fb83d8d0f93f2ed02fcb18d7b4d03404565071/ss_e5fb83d8d0f93f2ed02fcb18d7b4d03404565071.1920x1080.jpg?t=1771518693"]',
  37526,
  1911,
  956,
  9.0,
  9.1,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  64,
  'every-legend',
  'Every Legend',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Every Legend is a cutting-edge ai-native narrative adventure developed by VeDoN. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4660010/Every_Legend/',
  'VeDoN',
  'VeDoN',
  '/uploads/games/every-legend.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4660010/24606cf0fa5410b1a824b663d52e706dc89b2ecd/ss_24606cf0fa5410b1a824b663d52e706dc89b2ecd.1920x1080.jpg?t=1777664351", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4660010/2ae9d89a3f9132c5a1f2cd6eeb6775109e12d1ed/ss_2ae9d89a3f9132c5a1f2cd6eeb6775109e12d1ed.1920x1080.jpg?t=1777664351", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4660010/1b4b08a0ccbdaccda6321f759c16254a639ff02f/ss_1b4b08a0ccbdaccda6321f759c16254a639ff02f.1920x1080.jpg?t=1777664351", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4660010/0178aebfd5ab53e89f6fea607c1e7ce87ed40db2/ss_0178aebfd5ab53e89f6fea607c1e7ce87ed40db2.1920x1080.jpg?t=1777664351"]',
  38099,
  1939,
  970,
  9.7,
  8.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  65,
  'live-through-time',
  'Live Through Time',
  'An innovative AI-Native narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Live Through Time is a cutting-edge ai-native narrative adventure developed by Live Through Time. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4443950/Live_Through_Time/',
  'Live Through Time',
  'Live Through Time',
  '/uploads/games/live-through-time.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4443950/2eaf35d11f0d2338b7786c06b2d088d94879e66c/ss_2eaf35d11f0d2338b7786c06b2d088d94879e66c.1920x1080.jpg?t=1783926366", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4443950/9922bf9389569bbf412c7d531008db170666c33e/ss_9922bf9389569bbf412c7d531008db170666c33e.1920x1080.jpg?t=1783926366", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4443950/739f92e74caa2a51fb2a8d049c83ba824fd411fb/ss_739f92e74caa2a51fb2a8d049c83ba824fd411fb.1920x1080.jpg?t=1783926366", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4443950/4de44e4da17e94577b474b4a72d07f7e53737030/ss_4de44e4da17e94577b474b4a72d07f7e53737030.1920x1080.jpg?t=1783926366"]',
  38672,
  1968,
  984,
  9.2,
  9.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  66,
  'black-box-infinite-arsenal',
  'Black Box: Infinite Arsenal',
  'An innovative AI-Native rpg driven by runtime semantic mechanic & environment and adaptive AI systems.',
  '### Premise & Narrative Hook
Black Box: Infinite Arsenal is a cutting-edge ai-native rpg developed by Meshy Game Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on semantic mechanic & environment. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Semantic Mechanic & Environment serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through semantic mechanic & environment, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N4',
  'Semantic Mechanic & Environment',
  'semantic-mechanic',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4437020/Black_Box_Infinite_Arsenal/',
  'Meshy Game Studio',
  'Meshy Game Studio',
  '/uploads/games/black-box-infinite-arsenal.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4437020/279ff45505898653f014ddd505e3e47a65a44854/ss_279ff45505898653f014ddd505e3e47a65a44854.1920x1080.jpg?t=1786609101", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4437020/fa9cf210e6bbf48a54109efe04152aedbcef6bf2/ss_fa9cf210e6bbf48a54109efe04152aedbcef6bf2.1920x1080.jpg?t=1786609101", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4437020/b1029d055b14d57eff9fd3c1978b0b97650e556c/ss_b1029d055b14d57eff9fd3c1978b0b97650e556c.1920x1080.jpg?t=1786609101", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4437020/7794cff7a0f8ef55fd199eb11fc2a7d482f8aeb4/ss_7794cff7a0f8ef55fd199eb11fc2a7d482f8aeb4.1920x1080.jpg?t=1786609101"]',
  39245,
  1997,
  999,
  9.9,
  9.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  67,
  'story-crafter',
  'Story Crafter',
  'An innovative AI-Native rpg driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Story Crafter is a cutting-edge ai-native rpg developed by Story Carfter Studio Inc.. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3029600/Story_Crafter/',
  'Story Carfter Studio Inc.',
  'Story Carfter Studio Inc.',
  '/uploads/games/story-crafter.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3029600/ss_c8493f2212551d2895f95530071e24700e581c71.1920x1080.jpg?t=1732131075", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3029600/ss_c83cb389d54cc66e5a5292d1f6b2571df7720897.1920x1080.jpg?t=1732131075", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3029600/ss_0b6627fae3a928e77e8bbee8bb940cc7a7c0b05b.1920x1080.jpg?t=1732131075", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3029600/ss_de377dce3784320dc5017509a9e28042d632ef21.1920x1080.jpg?t=1732131075"]',
  39818,
  2025,
  1013,
  9.4,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  68,
  'speak-cast-rule',
  'Speak. Cast. Rule.',
  'An innovative AI-Native rpg driven by runtime social influence & persuasion and adaptive AI systems.',
  '### Premise & Narrative Hook
Speak. Cast. Rule. is a cutting-edge ai-native rpg developed by RedDuckStudio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on social influence & persuasion. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Social Influence & Persuasion serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through social influence & persuasion, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G2',
  'RPG',
  'rpg',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3858330/Speak_Cast_Rule/',
  'RedDuckStudio',
  'RedDuckStudio',
  '/uploads/games/speak-cast-rule.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3858330/095e8b891819e597e1179061897dc3415ede92d7/ss_095e8b891819e597e1179061897dc3415ede92d7.1920x1080.jpg?t=1766774817", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3858330/01ee418448c5452aee7088e0bfda84b32ec5c122/ss_01ee418448c5452aee7088e0bfda84b32ec5c122.1920x1080.jpg?t=1766774817", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3858330/6636d2490f52d75c859579d19c536ea4d399826a/ss_6636d2490f52d75c859579d19c536ea4d399826a.1920x1080.jpg?t=1766774817", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3858330/624cfb6a0c7f35ff548f2ec23706bc34ca896e93/ss_624cfb6a0c7f35ff548f2ec23706bc34ca896e93.1920x1080.jpg?t=1766774817"]',
  40391,
  2054,
  1027,
  8.9,
  8.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  69,
  'neon-echo',
  'Neon Echo',
  'An innovative AI-Native simulation driven by runtime agentic simulation & autonomous society and adaptive AI systems.',
  '### Premise & Narrative Hook
Neon Echo is a cutting-edge ai-native simulation developed by Lcc. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on agentic simulation & autonomous society. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Agentic Simulation & Autonomous Society serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through agentic simulation & autonomous society, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G5',
  'Simulation',
  'simulation',
  'N5',
  'Agentic Simulation & Autonomous Society',
  'agentic-simulation',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3583750/Neon_Echo/',
  'Lcc',
  'Lcc',
  '/uploads/games/neon-echo.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3583750/be1bd3e4eaa3ed36c983c254607226703c1cc3ee/ss_be1bd3e4eaa3ed36c983c254607226703c1cc3ee.1920x1080.jpg?t=1742956613", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3583750/b59edd809ab19de50662800b7e0df353224300e2/ss_b59edd809ab19de50662800b7e0df353224300e2.1920x1080.jpg?t=1742956613", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3583750/cec4640ee61f1d8f379ae78ceef4824bec433a9a/ss_cec4640ee61f1d8f379ae78ceef4824bec433a9a.1920x1080.jpg?t=1742956613", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3583750/464ff2b9ed2a250218f157c419448829309910d4/ss_464ff2b9ed2a250218f157c419448829309910d4.1920x1080.jpg?t=1742956613"]',
  40964,
  2083,
  1042,
  9.6,
  9.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  70,
  'ememetown',
  'EmemeTown',
  'Simulate and explore a living virtual town populated by autonomous, self-directed AI citizens.',
  '### Premise & Narrative Hook
EmemeTown is an innovative autonomous agent life simulator and romantic companion sandbox. Step into a vibrant virtual town inhabited by self-directed AI citizens.

### Core Gameplay Loop
Design and customize AI NPCs with distinct personalities, aspirations, and quirks. Watch as characters autonomously manage their daily routines, commute to work, forge friendships, argue, and fall in love. Players can step into the world to converse, form deep relationships, and influence town history.

### Key Interactive Features
- Autonomous multi-agent social ecosystem with persistent daily routines and memories
- Customizable NPC personality architectures driven by real-time language models
- Interactive companionship and romance mechanics featuring unscripted voice and text dialogue
- God-game environmental interventions to orchestrate emergent community drama',
  'Autonomous agent architectures manage NPC cognitive cycles, daily routines, social relationship graphs, and real-time conversational generation.',
  'AI-Native',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  'N2',
  'Social Influence & Persuasion',
  'social-persuasion',
  'TBA',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2667830/EmemeTown/',
  'Ememe Inc.',
  'Ememe Inc.',
  '/uploads/games/ememetown.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2667830/ss_d724183572417abdb33b2470534ca42f56be0a00.1920x1080.jpg?t=1747620341", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2667830/ss_6b7854db27f3dfae363f6980f50bd6d5fe235673.1920x1080.jpg?t=1747620341", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2667830/ss_481c587f43ca142357017e685a8653b19aa41a0d.1920x1080.jpg?t=1747620341", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2667830/ss_d59ab69f673c96d20606a001324da1625a4c5043.1920x1080.jpg?t=1747620341"]',
  41537,
  2111,
  1056,
  9.1,
  9.3,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  71,
  'ai-schoolgirls-murder-mystery',
  'AI Schoolgirls Murder Mystery',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Schoolgirls Murder Mystery is a cutting-edge ai-native narrative adventure developed by Cogoo. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3082970/AI_Schoolgirls_Murder_Mystery/',
  'Cogoo',
  'Cogoo',
  '/uploads/games/ai-schoolgirls-murder-mystery.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3082970/ss_f5e32eac7f14a61d4245778780527ad9ecc307cc.1920x1080.jpg?t=1733550475", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3082970/ss_c2b5ee9d43fb1dad340cf626b0973d2a313e23e6.1920x1080.jpg?t=1733550475", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3082970/ss_5b5ebabd3a47846fc7fb7d26006674e6ebbc457d.1920x1080.jpg?t=1733550475", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3082970/ss_b0b1dec36b42045d8d3b52a6cb3fbb21e4c81d39.1920x1080.jpg?t=1733550475"]',
  42110,
  2140,
  1070,
  9.8,
  8.9,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  72,
  'murder-in-complex',
  'Murder In Complex',
  'An innovative AI-Native narrative adventure driven by runtime epistemic & info-gathering and adaptive AI systems.',
  '### Premise & Narrative Hook
Murder In Complex is a cutting-edge ai-native narrative adventure developed by Khalil Hammouda. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on epistemic & info-gathering. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Epistemic & Info-Gathering serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through epistemic & info-gathering, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N1',
  'Epistemic & Info-Gathering',
  'ai-npc-interrogation',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3502320/Murder_In_Complex/',
  'Khalil Hammouda',
  'AKM Games',
  '/uploads/games/murder-in-complex.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3502320/ss_77ef622f5f4a989bf857fe1be8fd42cee1e76826.1920x1080.jpg?t=1744721070", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3502320/ss_1dafa5743f40f15b6902c0c79db3d680bd0c6641.1920x1080.jpg?t=1744721070", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3502320/ss_99848500f6342c22d1857c6effa5c739b65c06b2.1920x1080.jpg?t=1744721070", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3502320/ss_77856552aef5ebe0bebd374206abef316b9128ac.1920x1080.jpg?t=1744721070"]',
  42683,
  2169,
  1085,
  9.3,
  8.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  73,
  'microverse-in-box-society-sandbox',
  'Microverse In Box: Society Sandbox',
  'An innovative AI-Native simulation driven by runtime agentic simulation & autonomous society and adaptive AI systems.',
  '### Premise & Narrative Hook
Microverse In Box: Society Sandbox is a cutting-edge ai-native simulation developed by Ksana Dock. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on agentic simulation & autonomous society. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Agentic Simulation & Autonomous Society serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Native title, generative AI drives the core loop through agentic simulation & autonomous society, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Native',
  'AI_NATIVE',
  'G5',
  'Simulation',
  'simulation',
  'N5',
  'Agentic Simulation & Autonomous Society',
  'agentic-simulation',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3902630/Microverse_In_Box/',
  'Ksana Dock',
  'Ksana Dock',
  '/images/placeholders/simulation.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902630/92e3fc31a2f1bf30e19795366ab3543b74ef9a88/ss_92e3fc31a2f1bf30e19795366ab3543b74ef9a88.1920x1080.jpg?t=1754236790", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902630/01c3c95a498ff33f52e885e513b81d9c4865964c/ss_01c3c95a498ff33f52e885e513b81d9c4865964c.1920x1080.jpg?t=1754236790", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902630/ceefda18fa64a1d90c7c81970993d092ba4d4793/ss_ceefda18fa64a1d90c7c81970993d092ba4d4793.1920x1080.jpg?t=1754236790", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3902630/3bfff3b11a97d95c17ac8a16b378488715fe4ee6/ss_3bfff3b11a97d95c17ac8a16b378488715fe4ee6.1920x1080.jpg?t=1754236790"]',
  43256,
  2197,
  1099,
  8.8,
  9.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  74,
  'prompt-gaming-en-join-energy-community-game',
  'Prompt-Gaming  En-join Energy Community Game',
  'An innovative AI-Augmented strategy & management driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Prompt-Gaming  En-join Energy Community Game is a cutting-edge ai-augmented strategy & management developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G4',
  'Strategy & Management',
  'strategy',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2024',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://dl.acm.org/doi/10.1145/3613905.3650774',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/strategy.jpg',
  '[]',
  43829,
  2226,
  1113,
  9.5,
  9.2,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  75,
  'world-diplomat-demo',
  'World Diplomat Demo',
  'An innovative AI-Augmented strategy & management driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
World Diplomat Demo is a cutting-edge ai-augmented strategy & management developed by iGindisGames. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G4',
  'Strategy & Management',
  'strategy',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2024',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3337540/World_Diplomat_Demo/',
  'iGindisGames',
  'iGindisGames',
  '/images/placeholders/strategy.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3337540/ss_0a6e3b845d532d9a4b7af69d983bc827135181c9.1920x1080.jpg?t=1760284523", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3337540/ss_c1145814da5b96809060e1137e6123aae020a73f.1920x1080.jpg?t=1760284523", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3337540/ss_0fb745734f217a0cfa12c441195fc58ef2851d1a.1920x1080.jpg?t=1760284523", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3337540/ss_f85f6af572840c9663fb34f18d12e752822f6ddd.1920x1080.jpg?t=1760284523"]',
  44402,
  2255,
  1128,
  9.0,
  8.8,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  76,
  'alibai',
  'AlibAi',
  'An innovative AI-Augmented party & social deduction driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
AlibAi is a cutting-edge ai-augmented party & social deduction developed by L1LL3J. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G7',
  'Party & Social Deduction',
  'party-social',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2024',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3325660/AlibAi/',
  'L1LL3J',
  'L1LL3J',
  '/uploads/games/alibai.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3325660/ss_7f965e2e747be6886382cd984d57bdea9df9a304.1920x1080.jpg?t=1732298256", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3325660/ss_8516085375053150b724f4c5c91c722152081303.1920x1080.jpg?t=1732298256", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3325660/ss_448a3729d57e6e7d23e4f804814367627242e71d.1920x1080.jpg?t=1732298256", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3325660/ss_37cb141ba3a2b74254b383e94cc88a5fc297844a.1920x1080.jpg?t=1732298256"]',
  44975,
  2283,
  1142,
  9.7,
  8.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  77,
  'malinowskis-lens',
  'Malinowski''s Lens',
  'An innovative AI-Augmented experimental & hybrid driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Malinowski''s Lens is a cutting-edge ai-augmented experimental & hybrid developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G9',
  'Experimental & Hybrid',
  'experimental',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2025',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://arxiv.org/abs/2511.07682',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/experimental.jpg',
  '[]',
  45548,
  2312,
  1156,
  9.2,
  9.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  78,
  'ecoecho',
  'EcoEcho',
  'An innovative AI-Augmented narrative adventure driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
EcoEcho is a cutting-edge ai-augmented narrative adventure developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser, Open Source / Prototype
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2025',
  'Research prototype',
  '["Browser", "Open Source / Prototype"]',
  'https://github.com/Carolzhangzz/Eco_Echo',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/narrative-adventure.jpg',
  '[]',
  46121,
  2341,
  1171,
  9.9,
  9.1,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  79,
  'tenure-track-chili-academic-simulator',
  'Tenure-Track Chili: Academic Simulator',
  'An innovative AI-Augmented strategy & management driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Tenure-Track Chili: Academic Simulator is a cutting-edge ai-augmented strategy & management developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G4',
  'Strategy & Management',
  'strategy',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2026',
  'Released',
  '["Browser"]',
  'https://tenure-track-chili.vercel.app/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/strategy.jpg',
  '[]',
  46694,
  2369,
  1185,
  9.4,
  8.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  80,
  'magi-scapes',
  'Magi Scapes',
  'An innovative AI-Augmented sandbox & creation driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Magi Scapes is a cutting-edge ai-augmented sandbox & creation developed by AutoGame. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G6',
  'Sandbox & Creation',
  'sandbox',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2026',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2990190/',
  'AutoGame',
  'AutoGame',
  '/uploads/games/game-80.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990190/5feb847a84758850fd4aa4f6fed8364647cc72b9/ss_5feb847a84758850fd4aa4f6fed8364647cc72b9.1920x1080.jpg?t=1785288969", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990190/8e87c0f0e7bc087d3776bc28afbc618ce4d973bf/ss_8e87c0f0e7bc087d3776bc28afbc618ce4d973bf.1920x1080.jpg?t=1785288969", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990190/7cf4fed8cfc7d9f7136a044980d34f9878a4d28b/ss_7cf4fed8cfc7d9f7136a044980d34f9878a4d28b.1920x1080.jpg?t=1785288969", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990190/f620b0114545d797cc6f2da7e58b7447f113c8e8/ss_f620b0114545d797cc6f2da7e58b7447f113c8e8.1920x1080.jpg?t=1785288969"]',
  2267,
  148,
  74,
  8.9,
  9.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  81,
  'legend-of-zhaoyang-ai-wuxia-rpg',
  'Legend of Zhaoyang: AI Wuxia RPG',
  'An innovative AI-Augmented rpg driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Legend of Zhaoyang: AI Wuxia RPG is a cutting-edge ai-augmented rpg developed by A I. X-factor Play. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G2',
  'RPG',
  'rpg',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Demo/Playtest',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3705720/_/',
  'A I. X-factor Play',
  'X ORIGINAL HONG KONG LIMITED',
  '/uploads/games/game-81.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3705720/b5211436c175745b190d19d57817d61bf13429bc/ss_b5211436c175745b190d19d57817d61bf13429bc.1920x1080.jpg?t=1749624069", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3705720/3ec254b62e59538aec1a22725e8de6f7180c7b89/ss_3ec254b62e59538aec1a22725e8de6f7180c7b89.1920x1080.jpg?t=1749624069", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3705720/5cc7ec77e12e3c15c411851f1348f74107d92ed6/ss_5cc7ec77e12e3c15c411851f1348f74107d92ed6.1920x1080.jpg?t=1749624069", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3705720/19640cdaabbdeee62c44be4a012bda2e5d28c206/ss_19640cdaabbdeee62c44be4a012bda2e5d28c206.1920x1080.jpg?t=1749624069"]',
  2840,
  177,
  89,
  9.6,
  9.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  82,
  'space-conquest-ai---aigm',
  'Space Conquest AI - AIGM',
  'An innovative AI-Augmented strategy & management driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Space Conquest AI - AIGM is a cutting-edge ai-augmented strategy & management developed by Ezra Hradecky. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G4',
  'Strategy & Management',
  'strategy',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3803130/Space_Conquest_AI__AIGM/',
  'Ezra Hradecky',
  'Ezra Hradecky',
  '/uploads/games/space-conquest-ai---aigm.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3803130/72bd1cbe0f2a5394477b9fcaf118bfb10277c567/ss_72bd1cbe0f2a5394477b9fcaf118bfb10277c567.1920x1080.jpg?t=1749656936"]',
  3413,
  205,
  103,
  9.1,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  83,
  'danse-macabre-ai-text-rpg',
  'Danse Macabre AI Text RPG',
  'An innovative AI-Augmented rpg driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Danse Macabre AI Text RPG is a cutting-edge ai-augmented rpg developed by Prima RPG. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G2',
  'RPG',
  'rpg',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2376080/Danse_Macabre_AI_Text_RPG/',
  'Prima RPG',
  'Prima RPG',
  '/uploads/games/danse-macabre-ai-text-rpg.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2376080/ss_fed2e0ac3bf2ad437aa404bf9f7da743510acaea.1920x1080.jpg?t=1706173773", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2376080/ss_9bab49d953026d0a63c15d4e1e7aa8b108a71a87.1920x1080.jpg?t=1706173773", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2376080/ss_25d97b8f1b66437713415aed97fdcf83c25df128.1920x1080.jpg?t=1706173773", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2376080/ss_bcbd2592849b8c98c0ac1013e7c5ce0945dba749.1920x1080.jpg?t=1706173773"]',
  3986,
  234,
  117,
  9.8,
  8.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  84,
  'mentiss-werewolf-human-vs-ai',
  'Mentiss Werewolf: Human vs AI',
  'An innovative AI-Augmented party & social deduction driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Mentiss Werewolf: Human vs AI is a cutting-edge ai-augmented party & social deduction developed by jmentiss. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G7',
  'Party & Social Deduction',
  'party-social',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4586780/Mentiss_Werewolf_Human_vs_AI/',
  'jmentiss',
  'mentiss.ai',
  '/uploads/games/mentiss-werewolf-human-vs-ai.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4586780/c66d40d88a9aa56f8a8d73df5a29a4d4f39298e5/ss_c66d40d88a9aa56f8a8d73df5a29a4d4f39298e5.1920x1080.jpg?t=1775932265", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4586780/016add615bf6af57c5cd66a0de27390749a77b9d/ss_016add615bf6af57c5cd66a0de27390749a77b9d.1920x1080.jpg?t=1775932265", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4586780/ee3928cb10d3d2fdc16613f4ad1a7f3a8a6c88f8/ss_ee3928cb10d3d2fdc16613f4ad1a7f3a8a6c88f8.1920x1080.jpg?t=1775932265", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4586780/66c3dbc089d89cbb046fc22b196139c63e4c12cc/ss_66c3dbc089d89cbb046fc22b196139c63e4c12cc.1920x1080.jpg?t=1775932265"]',
  4559,
  262,
  131,
  9.3,
  9.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  85,
  'nyric',
  'Nyric',
  'An innovative AI-Augmented sandbox & creation driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Nyric is a cutting-edge ai-augmented sandbox & creation developed by Lovelace Studio. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G6',
  'Sandbox & Creation',
  'sandbox',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3368390/Nyric/',
  'Lovelace Studio',
  'Lovelace Studio',
  '/uploads/games/nyric.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3368390/882cf278267c58f6c2cb5cdad01f545133d4fb02/ss_882cf278267c58f6c2cb5cdad01f545133d4fb02.1920x1080.jpg?t=1752693555", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3368390/f453bdb4ee4882444dd69c6d78dfa8fbc4fb8a66/ss_f453bdb4ee4882444dd69c6d78dfa8fbc4fb8a66.1920x1080.jpg?t=1752693555", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3368390/7990fb39ec0a7157b83a0530493e9f1f9c124b98/ss_7990fb39ec0a7157b83a0530493e9f1f9c124b98.1920x1080.jpg?t=1752693555", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3368390/e55dd94e5c2ad9a26d8e32da0957636abdd12b23/ss_e55dd94e5c2ad9a26d8e32da0957636abdd12b23.1920x1080.jpg?t=1752693555"]',
  5132,
  291,
  146,
  8.8,
  9.3,
  1,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  86,
  'in-waiting',
  'In Waiting',
  'An innovative AI-Augmented narrative adventure driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
In Waiting is a cutting-edge ai-augmented narrative adventure developed by CynicalMonkeys. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Augmented title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Augmented',
  'AI_AUGMENTED',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2772070/In_Waiting/',
  'CynicalMonkeys',
  'CynicalMonkeys',
  '/uploads/games/in-waiting.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2772070/6400359c7e487365238634419a6666f6a8fc0d84/ss_6400359c7e487365238634419a6666f6a8fc0d84.1920x1080.jpg?t=1772669317", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2772070/da27b3cdcfe9b38b7c1576eca21e3740af69b185/ss_da27b3cdcfe9b38b7c1576eca21e3740af69b185.1920x1080.jpg?t=1772669317", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2772070/777f9a249eba144fd9a8f5b24999030a1d313344/ss_777f9a249eba144fd9a8f5b24999030a1d313344.1920x1080.jpg?t=1772669317", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2772070/21a7a1d5868de69de4692409de4575b74f07a469/ss_21a7a1d5868de69de4692409de4575b74f07a469.1920x1080.jpg?t=1772669317"]',
  5705,
  320,
  160,
  9.5,
  8.9,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  87,
  'ai-dungeon',
  'AI Dungeon',
  'An innovative AI-Boundary narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Dungeon is a cutting-edge ai-boundary narrative adventure developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2019',
  'Released',
  '["Browser"]',
  'https://aidungeon.com/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/ai-dungeon.jpg',
  '[]',
  6278,
  348,
  174,
  9.0,
  8.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  88,
  'aidventure',
  'AIdventure',
  'An innovative AI-Boundary narrative adventure driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
AIdventure is a cutting-edge ai-boundary narrative adventure developed by Lyaaaaa Games. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G1',
  'Narrative Adventure',
  'narrative-adventure',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2022',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/2114790/AIdventure/',
  'Lyaaaaa Games',
  'Lyaaaaa Games',
  '/uploads/games/aidventure.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2114790/ss_5f16faf57e1486c3dacaab1c4d90068a4fbc0576.1920x1080.jpg?t=1723626071", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2114790/ss_8d8ccd020d2e63572636d4202a9d7bd872ffe942.1920x1080.jpg?t=1723626071", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2114790/ss_95cb299b48517e7b1d9623815daca1564589fb74.1920x1080.jpg?t=1723626071", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2114790/ss_ab446199265c5031c226c00c62933b6fa885d04e.1920x1080.jpg?t=1723626071"]',
  6851,
  377,
  189,
  9.7,
  9.6,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  89,
  'project-electric-sheep',
  'Project Electric Sheep',
  'An innovative AI-Boundary experimental & hybrid driven by runtime generative artifact as gameplay and adaptive AI systems.',
  '### Premise & Narrative Hook
Project Electric Sheep is a cutting-edge ai-boundary experimental & hybrid developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative artifact as gameplay. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Artifact as Gameplay serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through generative artifact as gameplay, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G9',
  'Experimental & Hybrid',
  'experimental',
  'N6',
  'Generative Artifact as Gameplay',
  'generative-artifact',
  '2022',
  'Delisted',
  '["Browser"]',
  'https://store.epicgames.com/en-US/p/project-electric-sheep',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/experimental.jpg',
  '[]',
  7424,
  406,
  203,
  9.2,
  9.2,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  90,
  'closer-worlds',
  'Closer Worlds',
  'An innovative AI-Boundary experimental & hybrid driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Closer Worlds is a cutting-edge ai-boundary experimental & hybrid developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G9',
  'Experimental & Hybrid',
  'experimental',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2023',
  'Research prototype',
  '["Browser"]',
  'https://www.ccc.mit.edu/project/closer-worlds/',
  'Independent AI Creator',
  'Self-Published',
  '/uploads/games/closer-worlds.jpg',
  '[]',
  7997,
  434,
  217,
  9.9,
  8.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  91,
  'unbounded-a-generative-infinite-game',
  'Unbounded: A Generative Infinite Game',
  'An innovative AI-Boundary simulation driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Unbounded: A Generative Infinite Game is a cutting-edge ai-boundary simulation developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Browser
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G5',
  'Simulation',
  'simulation',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  '2024',
  'Research prototype',
  '["Browser"]',
  'https://generative-infinite-game.github.io/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/simulation.jpg',
  '[]',
  8570,
  463,
  232,
  9.4,
  8.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  92,
  'project-neko',
  'Project N.E.K.O.',
  'An innovative AI-Boundary romance & companion driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Project N.E.K.O. is a cutting-edge ai-boundary romance & companion developed by Neko Labs. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2026',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4099310/Project_NEKO/',
  'Neko Labs',
  'Neko Labs',
  '/uploads/games/project-neko.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4099310/b06428aa1d05966b0466afc4d0c8eceeb0708e51/ss_b06428aa1d05966b0466afc4d0c8eceeb0708e51.1920x1080.jpg?t=1787194651", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4099310/fd8cab3d03486bc571c359d3b816c0b8c5d018f3/ss_fd8cab3d03486bc571c359d3b816c0b8c5d018f3.1920x1080.jpg?t=1787194651", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4099310/e02fdc3c69cbf6c2ffb64c8b76e136d3b37835a0/ss_e02fdc3c69cbf6c2ffb64c8b76e136d3b37835a0.1920x1080.jpg?t=1787194651", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4099310/14d3e5d7c90e14acbfd6cad9e1944d930dbf45ed/ss_14d3e5d7c90e14acbfd6cad9e1944d930dbf45ed.1920x1080.jpg?t=1787194651"]',
  9143,
  492,
  246,
  8.9,
  9.5,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  93,
  'cai-uwe',
  'CAI UWE',
  'An innovative AI-Boundary romance & companion driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
CAI UWE is a cutting-edge ai-boundary romance & companion developed by scratch your own itch Labs. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  '2026',
  'Released',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4426310/CAI_UWE/',
  'scratch your own itch Labs',
  'scratch your own itch Labs',
  '/uploads/games/cai-uwe.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4426310/591f64fc1e4dd2b372795bd508f71b21a7e1cb4b/ss_591f64fc1e4dd2b372795bd508f71b21a7e1cb4b.1920x1080.jpg?t=1774445476", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4426310/7287da6359338b1550be45e62a4798681eb205cf/ss_7287da6359338b1550be45e62a4798681eb205cf.1920x1080.jpg?t=1774445476", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4426310/de6dd325019dc5b9881394039c18fe7a40fc91cd/ss_de6dd325019dc5b9881394039c18fe7a40fc91cd.1920x1080.jpg?t=1774445476", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4426310/e56013fc4f12c7e7c3c6e6fa50400d4d04e485d0/ss_e56013fc4f12c7e7c3c6e6fa50400d4d04e485d0.1920x1080.jpg?t=1774445476"]',
  9716,
  520,
  260,
  9.6,
  9.1,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  94,
  'ai-girlfriend---girlfriend-simulator',
  'AI Girlfriend - Girlfriend Simulator',
  'An innovative AI-Boundary romance & companion driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
AI Girlfriend - Girlfriend Simulator is a cutting-edge ai-boundary romance & companion developed by Independent AI Creator. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3261470/AI_Girlfriend__Girlfriend_Simulator/',
  'Independent AI Creator',
  'Self-Published',
  '/images/placeholders/romance-companion.jpg',
  '[]',
  10289,
  549,
  275,
  9.1,
  8.7,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  95,
  'gal-chat',
  'GAL-Chat',
  'An innovative AI-Boundary romance & companion driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
GAL-Chat is a cutting-edge ai-boundary romance & companion developed by Madao. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4736920/GALChat/',
  'Madao',
  'Madao',
  '/uploads/games/gal-chat.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4736920/c5bec738e932048d04c319cb30a64e1d6d5c718e/ss_c5bec738e932048d04c319cb30a64e1d6d5c718e.1920x1080.jpg?t=1781913954", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4736920/97a9e5184c7414b9b81508542b686f87025bd679/ss_97a9e5184c7414b9b81508542b686f87025bd679.1920x1080.jpg?t=1781913954", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4736920/4d99811bcc53458ccab09812aa23a5505b0561a7/ss_4d99811bcc53458ccab09812aa23a5505b0561a7.1920x1080.jpg?t=1781913954", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4736920/78d325833b7da0ad4ae2b129cf20a6f33569d610/ss_78d325833b7da0ad4ae2b129cf20a6f33569d610.1920x1080.jpg?t=1781913954"]',
  10862,
  578,
  289,
  9.8,
  9.8,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  96,
  'megan-ai',
  'Megan AI',
  'An innovative AI-Boundary romance & companion driven by runtime ai enhanced / mixed and adaptive AI systems.',
  '### Premise & Narrative Hook
Megan AI is a cutting-edge ai-boundary romance & companion developed by Chris Z.. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on ai enhanced / mixed. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic AI Enhanced / Mixed serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through ai enhanced / mixed, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G8',
  'Romance & Companion',
  'romance-companion',
  '—',
  'AI Enhanced / Mixed',
  'ai-enhanced',
  'TBA',
  'Early Access',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/3848530/Megan_AI/',
  'Chris Z.',
  'Chris Z.',
  '/uploads/games/megan-ai.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3848530/5f61b4422c5305ea1b739cb7b29c7be46511c956/ss_5f61b4422c5305ea1b739cb7b29c7be46511c956.1920x1080.jpg?t=1777438489", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3848530/caef34e5de591fc0987f3a1de0f1c183052f89df/ss_caef34e5de591fc0987f3a1de0f1c183052f89df.1920x1080.jpg?t=1777438489", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3848530/a85b1778a3d8e0db1268a6f2cd9ef5429cd8fdb6/ss_a85b1778a3d8e0db1268a6f2cd9ef5429cd8fdb6.1920x1080.jpg?t=1777438489", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3848530/7e9d4ccacd154e8ed3ba2470604c4048800ac657/ss_7e9d4ccacd154e8ed3ba2470604c4048800ac657.1920x1080.jpg?t=1777438489"]',
  11435,
  606,
  303,
  9.3,
  9.4,
  0,
  1,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);
INSERT OR REPLACE INTO games (
  id, slug, title, tagline, description, ai_role_description, tier, ai_type,
  genre_key, genre_name, genre_slug, mechanic_key, mechanic_name, mechanic_slug,
  release_year, status, platforms, website_url, developer, publisher, cover_url,
  screenshots, view_count, like_count, bookmark_count, ai_score, fun_score,
  is_featured, is_hot, created_at, updated_at
) VALUES (
  97,
  'never-ending-dungeon',
  'Never Ending Dungeon',
  'An innovative AI-Boundary sandbox & creation driven by runtime generative narrative & ai gm and adaptive AI systems.',
  '### Premise & Narrative Hook
Never Ending Dungeon is a cutting-edge ai-boundary sandbox & creation developed by Spellarena. By incorporating runtime generative artificial intelligence, the game breaks away from rigid scripted paths, offering players a personalized experience where player agency and creativity directly shape the unfolding world.

### Core Gameplay Loop
Players engage in an unscripted loop centered on generative narrative & ai gm. Instead of selecting from predetermined dialogue options or static menu triggers, every action and input is evaluated by underlying AI models. The system dynamically authors consequences, generates narrative beats, and adjusts world parameters in response to your decisions.

### Key Interactive Features
- Dynamic Generative Narrative & AI GM serving as the core runtime gameplay pillar
- Unscripted narrative responses adapting to player creativity and playstyle
- Emergent systems and adaptive challenge tuned for Steam, PC
- High replayability with diverse branching possibilities across each playthrough',
  'In this AI-Boundary title, generative AI drives the core loop through generative narrative & ai gm, allowing players to experience unscripted NPC behaviors, adaptive narratives, and emergent problem-solving in real time.',
  'AI-Boundary',
  'AI_NATIVE',
  'G6',
  'Sandbox & Creation',
  'sandbox',
  'N3',
  'Generative Narrative & AI GM',
  'generative-narrative-ai-gm',
  'TBA',
  'Announced/TBA',
  '["Steam", "PC"]',
  'https://store.steampowered.com/app/4124130/Never_Ending_Dungeon/',
  'Spellarena',
  'MGR Entertainment',
  '/uploads/games/never-ending-dungeon.jpg',
  '["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4124130/d3007287711837bfe025881a4b60807f401491af/ss_d3007287711837bfe025881a4b60807f401491af.1920x1080.jpg?t=1765382887", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4124130/1100ea3ac82fe70862f22dfb55a2f065dde26013/ss_1100ea3ac82fe70862f22dfb55a2f065dde26013.1920x1080.jpg?t=1765382887", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4124130/2f923524500da6d8f01db96dfc4b0a85dda98bfe/ss_2f923524500da6d8f01db96dfc4b0a85dda98bfe.1920x1080.jpg?t=1765382887", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4124130/b3916ec4e27ea65935aa848e785d2b3c22e95ae7/ss_b3916ec4e27ea65935aa848e785d2b3c22e95ae7.1920x1080.jpg?t=1765382887"]',
  12008,
  635,
  318,
  8.8,
  9.0,
  0,
  0,
  '2026-08-25T00:00:00.000Z',
  '2026-08-25T00:00:00.000Z'
);

-- Default Admin User (Role: admin)
INSERT OR REPLACE INTO user (
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
);

-- Editorial Articles
INSERT OR REPLACE INTO articles (
  id, slug, title, excerpt, content, author, author_avatar, category,
  read_time, published_at, cover_url, tags, featured
) VALUES (
  'art-1',
  'what-are-ai-native-games-guide-2026',
  'What Are AI-Native Games? The 2026 Design Frontier',
  'An in-depth exploration of how Large Language Models and diffusion architectures transform video game core loops.',
  'Full guide content detailing AI-Native game mechanics...',
  'Dr. Alex Vance',
  '/images/placeholders/rpg.jpg',
  'Design Theory',
  '8 min read',
  '2026-08-20T09:00:00Z',
  '/images/placeholders/narrative-adventure.jpg',
  '["AI-Native", "Game Design", "LLMs"]',
  1
);
INSERT OR REPLACE INTO articles (
  id, slug, title, excerpt, content, author, author_avatar, category,
  read_time, published_at, cover_url, tags, featured
) VALUES (
  'art-2',
  'death-of-the-dialogue-tree-llm-npcs',
  'The Death of the Dialogue Tree: Designing Unscripted AI NPCs',
  'Why rigid branching dialogue trees are falling behind conversational LLMs with dynamic memory graphs and emotional modeling.',
  'Analysis of unscripted AI NPC interaction...',
  'Elena Rostova',
  '/images/placeholders/puzzle.jpg',
  'NPC Engineering',
  '6 min read',
  '2026-08-18T14:00:00Z',
  '/images/placeholders/puzzle.jpg',
  '["NPCs", "Dialogue", "Social AI"]',
  1
);
INSERT OR REPLACE INTO articles (
  id, slug, title, excerpt, content, author, author_avatar, category,
  read_time, published_at, cover_url, tags, featured
) VALUES (
  'art-3',
  'infinite-craft-semantic-alchemy-phenomenon',
  'The Infinite Craft Phenomenon: Language Models as Physical Rules',
  'How Neal Agarwal leveraged semantic word embeddings to build an endless associative crafting universe.',
  'Deep dive into semantic alchemy mechanics...',
  'Marcus Chen',
  '/images/placeholders/sandbox.jpg',
  'Case Study',
  '5 min read',
  '2026-08-15T11:00:00Z',
  '/images/placeholders/sandbox.jpg',
  '["Infinite Craft", "Semantic Rules", "Emergent Play"]',
  0
);