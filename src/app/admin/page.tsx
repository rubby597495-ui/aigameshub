'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Gamepad2, 
  Flame, 
  ThumbsUp, 
  Inbox, 
  PlusCircle, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { CATEGORIES, AI_MECHANICS, AI_TYPES } from '@/data/categories';
import { formatNumber } from '@/lib/utils';

export default function AdminDashboardPage() {
  const [games, setGames] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [gamesRes, subsRes] = await Promise.all([
          fetch('/api/admin/games'),
          fetch('/api/admin/submissions')
        ]);
        const gamesData = await gamesRes.json();
        const subsData = await subsRes.json();
        if (gamesData.success) setGames(gamesData.games);
        if (subsData.success) setSubmissions(subsData.submissions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleApprove = async (subId: string) => {
    const res = await fetch(`/api/admin/submissions/${subId}/approve`, { method: 'POST' });
    const data = await res.json();
    if (data.success) {
      setSubmissions(submissions.filter((s) => s.id !== subId));
      setGames([data.game, ...games]);
    }
  };

  const handleReject = async (subId: string) => {
    const res = await fetch(`/api/admin/submissions/${subId}/reject`, { method: 'POST' });
    const data = await res.json();
    if (data.success) {
      setSubmissions(submissions.filter((s) => s.id !== subId));
    }
  };

  const totalViews = games.reduce((acc, g) => acc + (g.viewCount || 0), 0);
  const totalLikes = games.reduce((acc, g) => acc + (g.likeCount || 0), 0);
  const totalNative = games.filter((g) => g.tier === 'AI-Native').length;
  const totalAugmented = games.filter((g) => g.tier === 'AI-Augmented').length;

  if (loading) {
    return (
      <div className="py-20 text-center text-xs text-stone-400">
        Loading AiGamesHub Control Center...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <Layers className="h-7 w-7 text-emerald-400" />
            <span>Admin Control Center</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-stone-400">
            Real-time catalog monitoring, submissions queue, and content administration.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/games/new"
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-4 py-2.5 text-xs font-bold text-[#101715] shadow-lg hover:bg-[#A2BDB3] transition"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add New AI Game</span>
          </Link>
        </div>
      </div>

      {/* KPI Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium">Total AI Games</span>
            <Gamepad2 className="h-4 w-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-stone-100">{games.length}</p>
          <div className="text-[11px] text-stone-400 flex items-center gap-2">
            <span className="text-emerald-400 font-semibold">{totalNative} Native</span>
            <span>•</span>
            <span className="text-blue-400 font-semibold">{totalAugmented} Augmented</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium">Total Impressions</span>
            <Flame className="h-4 w-4 text-amber-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-stone-100">{formatNumber(totalViews)}</p>
          <p className="text-[11px] text-stone-400">Across 109 indexed routes</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium">Community Upvotes</span>
            <ThumbsUp className="h-4 w-4 text-blue-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-stone-100">{formatNumber(totalLikes)}</p>
          <p className="text-[11px] text-stone-400">Verified player evaluations</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium">Pending Submissions</span>
            <Inbox className="h-4 w-4 text-rose-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-rose-300">{submissions.length}</p>
          <Link href="/admin/submissions" className="text-[11px] text-emerald-400 hover:underline">
            Review submissions queue →
          </Link>
        </div>
      </div>

      {/* Submissions Review Queue (Actionable) */}
      <section className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Inbox className="h-5 w-5 text-emerald-400" />
            <h2 className="text-base font-bold text-stone-100">
              Community Submissions Waiting for Review ({submissions.length})
            </h2>
          </div>
          <Link href="/admin/submissions" className="text-xs text-emerald-400 hover:underline">
            View all ({submissions.length})
          </Link>
        </div>

        {submissions.length > 0 ? (
          <div className="space-y-3">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-white/10 transition"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-100 text-sm">{sub.title}</span>
                    <span className="rounded bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.2 text-[10px] font-bold text-emerald-300">
                      {sub.tier}
                    </span>
                    <span className="text-xs text-stone-400">• {sub.developer}</span>
                  </div>
                  <p className="text-xs text-stone-300 line-clamp-1">{sub.tagline}</p>
                  <p className="text-[11px] text-stone-500 line-clamp-1">AI Role: {sub.aiRoleDescription}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleApprove(sub.id)}
                    className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition shadow"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Approve & Publish</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReject(sub.id)}
                    className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-stone-400 hover:bg-rose-500/20 hover:text-rose-300 transition"
                  >
                    <XCircle className="h-3.5 w-3.5" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="py-6 text-center text-xs text-stone-500">
            No pending submissions. All incoming titles are up to date!
          </p>
        )}
      </section>

      {/* Distribution Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Mechanic Distribution */}
        <section className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 space-y-4">
          <h2 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span>AI Play Mechanic Breakdown</span>
          </h2>

          <div className="space-y-2.5">
            {AI_MECHANICS.map((mech) => {
              const count = games.filter((g) => g.mechanicKey === mech.key).length;
              const pct = games.length > 0 ? (count / games.length) * 100 : 0;
              return (
                <div key={mech.slug} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300 font-medium">{mech.name}</span>
                    <span className="text-stone-400 font-mono">{count} titles ({pct.toFixed(0)}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-stone-800">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Traditional Genre Distribution */}
        <section className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 space-y-4">
          <h2 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-400" />
            <span>Game Genre Distribution</span>
          </h2>

          <div className="space-y-2.5">
            {CATEGORIES.map((cat) => {
              const count = games.filter((g) => g.genreKey === cat.key).length;
              const pct = games.length > 0 ? (count / games.length) * 100 : 0;
              return (
                <div key={cat.slug} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300 font-medium">{cat.name}</span>
                    <span className="text-stone-400 font-mono">{count} titles ({pct.toFixed(0)}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-stone-800">
                    <div
                      className="h-full bg-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
