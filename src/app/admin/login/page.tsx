'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin');
      } else {
        setError(data.error || 'Invalid password.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0d1012] soft-grid">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121619] p-8 shadow-2xl space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <span className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10 font-bold text-emerald-300 text-lg shadow-md mb-2">
            AI
          </span>
          <h1 className="text-xl font-bold text-stone-100">
            AiGamesHub Control Center
          </h1>
          <p className="text-xs text-stone-400">
            Enter administrative credentials to manage games, submissions, and catalog taxonomy.
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-stone-300 mb-1.5 font-medium">Admin Master Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-10 pr-4 text-xs text-stone-100 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              Default password: <code className="text-emerald-400 bg-black/40 px-1 py-0.5 rounded">aigameshub2026</code>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8FAFA3] py-3 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-lg disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Access Dashboard'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="border-t border-white/5 pt-4 text-center">
          <Link href="/" className="text-xs text-stone-500 hover:text-stone-300 transition">
            ← Return to public website
          </Link>
        </div>
      </div>
    </div>
  );
}
