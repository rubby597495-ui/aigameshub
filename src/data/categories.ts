import { Category, AiMechanic } from '@/types/game';

export const AI_TYPES = [
  {
    key: 'ALL',
    name: 'All AI Types',
    slug: 'all',
    description: 'Explore the full universe of generative AI games.'
  },
  {
    key: 'AI_NATIVE',
    name: 'AI-Native Games',
    slug: 'ai-native',
    description: 'Games where Generative AI forms the irreducible core loop; without AI, the game collapses.'
  },
  {
    key: 'AI_AUGMENTED',
    name: 'AI-Augmented Games',
    slug: 'ai-augmented',
    description: 'Solid traditional game foundations enriched with generative AI for dialogue, events, and dynamic content.'
  }
];

export const CATEGORIES: Category[] = [
  {
    key: 'G1',
    name: 'Narrative Adventure',
    slug: 'narrative-adventure',
    description: 'Text-heavy interactive fiction and branching adventures with unlimited conversational freedom.'
  },
  {
    key: 'G2',
    name: 'RPG',
    slug: 'rpg',
    description: 'Role-playing journeys driven by unscripted AI NPCs, dynamic quests, and responsive fantasy worlds.'
  },
  {
    key: 'G3',
    name: 'Puzzle & Mystery',
    slug: 'puzzle',
    description: 'Solve murders, interrogate uncooperative AI suspects, and discover hidden passwords via prompt engineering.'
  },
  {
    key: 'G4',
    name: 'Strategy & Management',
    slug: 'strategy',
    description: 'Govern empires, manage chaotic businesses, and negotiate treaties with cognitive AI advisors.'
  },
  {
    key: 'G5',
    name: 'Simulation',
    slug: 'simulation',
    description: 'Living digital ecosystems, multi-agent AI villages, and emergent social dynamics.'
  },
  {
    key: 'G6',
    name: 'Sandbox & Creation',
    slug: 'sandbox',
    description: 'Infinite element crafting, semantic item combining, and procedural world-building.'
  },
  {
    key: 'G7',
    name: 'Party & Social Deduction',
    slug: 'party-social',
    description: 'AI art prompt battles, AI-judged survival scenarios, and deceptive multiplayer bluffing.'
  },
  {
    key: 'G8',
    name: 'Romance & Companion',
    slug: 'romance-companion',
    description: 'Deep emotional connections, virtual AI companions, and personalized romantic storylines.'
  },
  {
    key: 'G9',
    name: 'Experimental & Hybrid',
    slug: 'experimental',
    description: 'Radical game mechanics, semantic combat, and pioneering AI-first design experiments.'
  }
];

export const AI_MECHANICS: AiMechanic[] = [
  {
    key: 'N1',
    name: 'AI NPC Interrogation',
    slug: 'ai-npc-interrogation',
    description: 'Interrogate unscripted AI NPCs to discover clues, extract secrets, and solve mysteries.'
  },
  {
    key: 'N2',
    name: 'Social Persuasion & Influence',
    slug: 'social-persuasion',
    description: 'Persuade, deceive, seduce, or negotiate with AI agents using natural speech or text.'
  },
  {
    key: 'N3',
    name: 'Generative Narrative & AI GM',
    slug: 'generative-narrative-ai-gm',
    description: 'AI acts as the Dungeon Master / Storyteller, authoring dynamic worlds, quests, and roll outcomes.'
  },
  {
    key: 'N4',
    name: 'Semantic Mechanic & Language Rules',
    slug: 'semantic-mechanic',
    description: 'Language semantics directly power crafting rules, physical forces, or combat magic.'
  },
  {
    key: 'N5',
    name: 'Agentic Simulation & Autonomous Society',
    slug: 'agentic-simulation',
    description: 'Large populations of AI agents converse, work, form factions, and evolve self-sustaining societies.'
  },
  {
    key: 'N6',
    name: 'Generative Artifact as Gameplay',
    slug: 'generative-artifact',
    description: 'AI-generated images, 3D models, audio, or cards form the central competitive loop.'
  },
  {
    key: '—',
    name: 'AI Enhanced / Hybrid',
    slug: 'ai-enhanced',
    description: 'Generative AI enhances specific sub-systems such as companion chatter or procedural events.'
  }
];

export const PLATFORMS = [
  { name: 'All Platforms', slug: 'all' },
  { name: 'Browser', slug: 'browser' },
  { name: 'Steam', slug: 'steam' },
  { name: 'itch.io', slug: 'itch-io' },
  { name: 'PC / Windows', slug: 'pc' },
  { name: 'Mobile', slug: 'mobile' },
  { name: 'Discord', slug: 'discord' },
  { name: 'Roblox', slug: 'roblox' }
];

export const SORT_OPTIONS = [
  { value: 'hot', label: 'Trending & Hot' },
  { value: 'latest', label: 'Latest Added' },
  { value: 'top_rated', label: 'Top AI Score' },
  { value: 'most_liked', label: 'Most Liked' },
  { value: 'most_bookmarked', label: 'Most Saved' },
  { value: 'random', label: 'Random Shuffle 🎲' }
];
