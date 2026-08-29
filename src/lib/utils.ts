import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

export function getTierBadgeStyle(tier: string) {
  switch (tier) {
    case 'AI-Native':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    case 'AI-Augmented':
      return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
    case 'AI-Boundary':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    default:
      return 'bg-stone-500/15 text-stone-300 border-stone-500/30';
  }
}
