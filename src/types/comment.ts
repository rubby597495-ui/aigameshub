export type CommentStatus = 'APPROVED' | 'PENDING' | 'FLAGGED' | 'SPAM';

export interface GameComment {
  id: string;
  gameId: number;
  gameTitle?: string;
  gameSlug?: string;
  userId?: string;
  authorName: string;
  avatar?: string;
  rating?: number; // 1 to 10
  content: string;
  createdAt: string;
  status: CommentStatus;
  flagReason?: string;
  likes: number;
}
