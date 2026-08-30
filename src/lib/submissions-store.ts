export interface GameSubmission {
  id: string;
  title: string;
  tagline: string;
  description: string;
  developer: string;
  websiteUrl: string;
  genreSlug: string;
  genreName: string;
  mechanicSlug: string;
  mechanicName: string;
  aiRoleDescription: string;
  tier: 'AI-Native' | 'AI-Augmented' | 'AI-Assisted';
  aiType: string;
  platforms: string[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  coverUrl?: string;
  screenshots: string[];
  createdAt: string;
  userId?: string;
  submitterEmail?: string;
}

// Global in-memory submissions store for Edge
let globalSubmissions: GameSubmission[] = [
  {
    id: 'sub-demo-01',
    title: 'Project Singularity AI RPG',
    tagline: 'Dynamic open-world RPG where every NPC has an autonomous LLM personality.',
    description: 'Project Singularity introduces dynamic emergent questing where NPCs form alliances, remember previous interactions with player, and generate unscripted storyline branches.',
    developer: 'NeuralForge Studios',
    websiteUrl: 'https://project-singularity-rpg.io',
    genreSlug: 'rpg',
    genreName: 'RPG',
    mechanicSlug: 'llm-npc-dialogue',
    mechanicName: 'LLM NPC Dialogue',
    aiRoleDescription: 'Autonomous background agents generate character motivations and real-time dialogue based on player reputation and world state.',
    tier: 'AI-Native',
    aiType: 'LLM Autonomous Agents',
    platforms: ['Web', 'PC (Steam)'],
    status: 'PENDING',
    coverUrl: '/images/placeholders/rpg.jpg',
    screenshots: ['/images/placeholders/rpg.jpg'],
    createdAt: '2026-08-29T14:30:00.000Z',
    submitterEmail: 'creator@neuralforge.io',
  }
];

export function getSubmissionsStore(): GameSubmission[] {
  return globalSubmissions;
}

export function addSubmissionToStore(submission: Partial<GameSubmission>): GameSubmission {
  const newSub: GameSubmission = {
    id: submission.id || `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title: submission.title || 'Untitled Game',
    tagline: submission.tagline || '',
    description: submission.description || '',
    developer: submission.developer || 'Indie Creator',
    websiteUrl: submission.websiteUrl || '',
    genreSlug: submission.genreSlug || 'rpg',
    genreName: submission.genreName || 'RPG',
    mechanicSlug: submission.mechanicSlug || 'llm-npc-dialogue',
    mechanicName: submission.mechanicName || 'LLM Dialogue',
    aiRoleDescription: submission.aiRoleDescription || '',
    tier: submission.tier || 'AI-Native',
    aiType: submission.aiType || 'Generative AI',
    platforms: submission.platforms || ['Web'],
    status: 'PENDING',
    coverUrl: submission.coverUrl || submission.screenshots?.[0] || '',
    screenshots: submission.screenshots || [],
    createdAt: new Date().toISOString(),
    userId: submission.userId,
    submitterEmail: submission.submitterEmail,
  };

  globalSubmissions.unshift(newSub);
  return newSub;
}

export function updateSubmissionStatus(id: string, status: 'APPROVED' | 'REJECTED'): boolean {
  const item = globalSubmissions.find((s) => s.id === id);
  if (!item) return false;
  item.status = status;
  return true;
}

export function removeSubmissionFromStore(id: string): boolean {
  const prevLen = globalSubmissions.length;
  globalSubmissions = globalSubmissions.filter((s) => s.id !== id);
  return globalSubmissions.length < prevLen;
}
