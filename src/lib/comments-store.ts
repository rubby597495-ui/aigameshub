import { GameComment } from '@/types/comment';

// Global In-memory comments store for Edge / Fallback persistence
let globalComments: GameComment[] = [
  {
    id: 'cmt_seed_1',
    gameId: 1,
    gameTitle: 'AI: Art Impostor',
    gameSlug: 'ai-art-impostor',
    authorName: 'NeuralArtist',
    avatar: '',
    rating: 9,
    content: 'The generative diffusion prompts create completely unhinged masterpieces during party rounds. Bluffing as the impostor is pure psychological thrill!',
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    status: 'APPROVED',
    likes: 8
  },
  {
    id: 'cmt_seed_2',
    gameId: 2,
    gameTitle: 'Suck Up!',
    gameSlug: 'suck-up',
    authorName: 'VampireHunter99',
    avatar: '',
    rating: 10,
    content: 'The unscripted LLM dialogue with neighborhood NPCs is terrifyingly good. You have to craft genuinely convincing excuses or they slam the door right in your face.',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    status: 'APPROVED',
    likes: 12
  }
];

export function getCommentsStore(): GameComment[] {
  return globalComments;
}

export function addCommentToStore(comment: GameComment) {
  globalComments.unshift(comment);
}

export function updateCommentsStore(newStore: GameComment[]) {
  globalComments = newStore;
}
