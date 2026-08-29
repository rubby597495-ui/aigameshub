'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, Sparkles, CheckCircle2, User, Loader2, AlertCircle } from 'lucide-react';
import { useUserAuth } from '@/contexts/UserAuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login, register, authModalMode } = useUserAuth();
  const [isLogin, setIsLogin] = useState(authModalMode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync mode with context
  React.useEffect(() => {
    setIsLogin(authModalMode === 'login');
    setErrorMsg('');
  }, [authModalMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      if (isLogin) {
        const res = await login(email, password);
        if (!res.success) {
          setErrorMsg(res.error || 'Login failed. Please verify your email and password.');
          setIsLoading(false);
          return;
        }
      } else {
        const res = await register(email, password, name);
        if (!res.success) {
          setErrorMsg(res.error || 'Registration failed. Please check the provided information.');
          setIsLoading(false);
          return;
        }
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemo = (demoEmail: string, demoName: string) => {
    setEmail(demoEmail);
    setName(demoName);
    setPassword('AiGames2026!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#121619] p-6 sm:p-8 shadow-2xl shadow-black/90 animate-fadeIn">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-400 hover:text-white transition"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <span className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 font-bold text-lg mb-2 shadow-inner">
            AI
          </span>
          <h3 className="text-xl font-bold text-stone-100">
            {isLogin ? 'Welcome to AiGamesHub' : 'Create Your Player Account'}
          </h3>
          <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
            {isLogin
              ? 'Sign in to sync your bookmarks, log play progress, rate games, and manage submissions.'
              : 'Join the global community of AI-Native & LLM gaming pioneers.'}
          </p>
        </div>

        {/* Quick Demo Pre-fill helper */}
        <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs">
          <span className="text-[11px] font-semibold text-stone-300 block mb-1.5">
            ⚡ Quick 1-Click Demo Fill:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('alex.gamer@gmail.com', 'Alex Rivera')}
              className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-stone-300 hover:bg-white/10 transition"
            >
              Demo Player: Alex
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('creator@proximagames.io', 'Proxima Dev')}
              className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-300 hover:bg-emerald-400/20 transition"
            >
              Demo Creator: Proxima
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {isSuccess && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/40 p-3 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>Success! Welcome aboard, {email.split('@')[0]}.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Display Name (Nickname)
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. CyberExplorer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8FAFA3] py-3 text-xs font-bold text-[#101715] shadow-lg shadow-emerald-950/30 hover:bg-[#A2BDB3] transition disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            )}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-5 text-center text-xs text-stone-400">
          {isLogin ? (
            <p>
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setErrorMsg('');
                }}
                className="font-bold text-emerald-400 hover:underline"
              >
                Register free
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setErrorMsg('');
                }}
                className="font-bold text-emerald-400 hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
