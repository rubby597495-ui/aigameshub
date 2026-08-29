'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { signIn, signUp } from '@/lib/auth-client';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleOAuth = async (provider: 'google' | 'github') => {
    try {
      setIsLoading(true);
      setErrorMsg('');
      await signIn.social({
        provider,
        callbackURL: window.location.href,
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'OAuth sign in failed');
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      if (isLogin) {
        const res = await signIn.email({
          email,
          password,
        });
        if (res.error) {
          setErrorMsg(res.error.message || 'Invalid credentials');
          setIsLoading(false);
          return;
        }
      } else {
        const res = await signUp.email({
          email,
          password,
          name: name || email.split('@')[0],
        });
        if (res.error) {
          setErrorMsg(res.error.message || 'Account creation failed');
          setIsLoading(false);
          return;
        }
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        window.location.reload();
      }, 1000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#121619] p-6 shadow-2xl shadow-black/80">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 font-bold text-base mb-2">
            AI
          </span>
          <h3 className="text-xl font-bold text-stone-100">
            {isLogin ? 'Welcome to AiGamesHub' : 'Join AiGamesHub'}
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            {isLogin
              ? 'Sign in to save bookmarks, vote on AI mechanics, and submit games.'
              : 'Create an account to join the international AI gaming community.'}
          </p>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 animate-bounce" />
            <p className="text-sm font-semibold text-emerald-300">
              {isLogin ? 'Signed in successfully!' : 'Account created successfully!'}
            </p>
          </div>
        ) : (
          <>
            {/* Error Message */}
            {errorMsg && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
                {errorMsg}
              </div>
            )}

            {/* OAuth Buttons */}
            <div className="space-y-2 mb-4">
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleOAuth('github')}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/10 transition disabled:opacity-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                  />
                </svg>
                <span>Continue with GitHub</span>
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleOAuth('google')}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/10 transition disabled:opacity-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative bg-[#121619] px-2 text-[10px] uppercase text-stone-500">
                Or with Email
              </span>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {!isLogin && (
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md mt-2 disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Switch Mode */}
            <p className="mt-4 text-center text-xs text-stone-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-400 hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
