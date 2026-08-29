import { NewsItem } from '@/types/game';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n-1',
    slug: 'steam-clarifies-generative-ai-game-disclosure-guidelines-2026',
    title: 'Steam Expands Live Generative AI Support for Games with On-Device Models',
    summary: 'Valve announces streamlined verification processes for indie developers shipping titles with local LLMs and dynamic conversational agents.',
    publishedAt: '2026-08-22T08:00:00Z',
    category: 'Industry Policy',
    source: 'Steamworks Updates',
    sourceUrl: 'https://store.steampowered.com/news',
    image: '/images/placeholders/strategy.jpg',
    content: `
Valve has issued an updated set of developer documentation for games deploying live generative AI models. The platform has formalized a pathway for games using runtime LLM inference, automated moderation wrappers, and local on-device small language models (SLMs).

The updated policies recognize that unscripted NPC dialogues and generative dynamic storylines are emerging as standard creative tools for modern game design.
    `
  },
  {
    id: 'n-2',
    slug: 'hundredth-ai-native-game-indexed-aigameshub',
    title: 'Over 90 AI-Native Games Hand-Verified & Cataloged on AiGamesHub',
    summary: 'Our research team has classified and verified over 90 titles across 9 core genres and 6 AI mechanics, establishing the industry’s standard taxonomy.',
    publishedAt: '2026-08-20T14:00:00Z',
    category: 'Platform Update',
    source: 'AiGamesHub Editorial',
    image: '/images/placeholders/simulation.jpg',
    content: `
AiGamesHub has reached a major milestone with over 90 verified titles cataloged. From landmark social deception games like Suck Up! to semantic crafting sensations like Infinite Craft, our taxonomy provides players and developers with an organized overview of the AI gaming landscape.
    `
  },
  {
    id: 'n-3',
    slug: 'real-time-voice-llm-latency-drops-sub-200ms',
    title: 'Breakthrough in Voice LLM Latency Enables Fluid AI NPC Conversations',
    summary: 'New streaming text-to-speech architectures and edge quantizations bring voice interaction response times down to conversational human speeds.',
    publishedAt: '2026-08-16T11:30:00Z',
    category: 'Tech & Hardware',
    source: 'AI Game Tech Labs',
    image: '/images/placeholders/rpg.jpg',
    content: `
One of the key friction points in voice-driven AI games has been the response delay. Recent innovations in token-streaming audio synthesis have reduced the end-to-end turnaround to under 200ms, making conversations with virtual characters feel truly spontaneous.
    `
  }
];
