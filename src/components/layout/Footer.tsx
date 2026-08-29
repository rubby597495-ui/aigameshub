import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES, AI_MECHANICS, AI_TYPES } from '@/data/categories';
import { Sparkles, Gamepad2, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0c0e0f] text-stone-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Col 1: Brand & Mission */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="AiGamesHub - AI Gaming Directory & Global Database Logo"
                width={36}
                height={36}
                className="h-8 w-8 rounded-xl shadow-sm"
              />
              <span className="text-base font-bold text-stone-100 tracking-tight">
                AiGamesHub
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              The premier international directory and discovery platform for AI-native games and AI-augmented interactive experiences. Exploring unscripted LLM NPCs, AI Game Masters, and generative gameplay loops.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-2">
              <span>Indexed 90+ Hand-Verified AI Titles</span>
              <span>•</span>
              <span>Updated 2026</span>
            </div>
          </div>

          {/* Col 2: Top AI Game Types */}
          <div>
            <p className="font-semibold text-stone-200 uppercase tracking-wider text-[11px] mb-3">
              Game Genres
            </p>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/games?genre=${cat.slug}`} 
                    className="hover:text-emerald-300 transition"
                  >
                    AI {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: AI Mechanics */}
          <div>
            <p className="font-semibold text-stone-200 uppercase tracking-wider text-[11px] mb-3">
              AI Mechanics
            </p>
            <ul className="space-y-2">
              {AI_MECHANICS.slice(0, 5).map((mech) => (
                <li key={mech.slug}>
                  <Link 
                    href={`/games?mechanic=${mech.slug}`} 
                    className="hover:text-emerald-300 transition"
                  >
                    {mech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Platform & Community */}
          <div>
            <p className="font-semibold text-stone-200 uppercase tracking-wider text-[11px] mb-3">
              Platform & Legal
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/leaderboards" className="hover:text-emerald-300 transition">
                  Top Leaderboards
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-emerald-300 transition">
                  AI Game Design Articles
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-emerald-300 transition text-emerald-400">
                  Submit Your AI Game
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition">
                  About Us & Methodology
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-300 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-300 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} AiGamesHub. Built for global AI game creators and players.</p>
          <p className="flex items-center gap-1">
            Tracking the next frontier of generative play
          </p>
        </div>
      </div>
    </footer>
  );
}
