import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Submit AI Games: Get Indexed on Global AI Games Hub',
  description:
    'Submit your AI-native video game, generative RPG, or LLM prototype to AiGamesHub. Reach international players, creators, and industry reviewers.',
  keywords: [
    'submit AI game',
    'publish AI game',
    'AI game directory submission',
    'indie AI game developer',
    'list generative game'
  ]
});

export default function SubmitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
