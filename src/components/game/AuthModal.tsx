'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, Sparkles, CheckCircle2, User, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { useUserAuth } from '@/contexts/UserAuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login, register, loginWithOAuth, authModalMode } = useUserAuth();
  const [isLogin, setIsLogin] = useState(authModalMode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<'google' | 'github' | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successUser, setSuccessUser] = useState<string>('');

  // Sync mode with context
  React.useEffect(() => {
    setIsLogin(authModalMode === 'login');
    setErrorMsg('');
  }, [authModalMode, isOpen]);

  if (!isOpen) return null;

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    setErrorMsg('');
    setOauthLoading(provider);

    try {
      const res = await loginWithOAuth(provider);
      if (res.success) {
        setSuccessUser(provider === 'google' ? 'Google' : 'GitHub');
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 1200);
      } else {
        setErrorMsg(res.error || `Failed to authenticate with ${provider}.`);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'OAuth authentication failed.');
    } finally {
      setOauthLoading(null);
    }
  };

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

      setSuccessUser(name || email.split('@')[0]);
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
              : 'Join the global community of verified AI-Native & LLM gaming pioneers.'}
          </p>
        </div>

        {/* Error / Success feedback */}
        {errorMsg && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 animate-fadeIn">
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {isSuccess && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/40 p-3 text-xs text-emerald-300 animate-fadeIn">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>Success! Welcome aboard, {successUser}.</span>
          </div>
        )}

        {/* 1-Click Social OAuth Logins */}
        <div className="space-y-2.5 mb-5">
          <button
            type="button"
            onClick={() => handleOAuthLogin('google')}
            disabled={oauthLoading !== null || isLoading || isSuccess}
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/10 px-4 py-3 text-xs font-bold text-stone-100 transition shadow hover:border-white/30 disabled:opacity-50"
          >
            {oauthLoading === 'google' ? (
              <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            )}
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleOAuthLogin('github')}
            disabled={oauthLoading !== null || isLoading || isSuccess}
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#161B1E] hover:bg-[#1C2226] px-4 py-3 text-xs font-bold text-stone-200 transition shadow hover:border-white/25 disabled:opacity-50"
          >
            {oauthLoading === 'github' ? (
              <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
            ) : (
              <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            )}
            <span>Continue with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="border-t border-white/10 w-full" />
          <span className="bg-[#121619] px-3 text-[10px] uppercase font-bold text-stone-500 tracking-wider">
            OR WITH EMAIL
          </span>
          <div className="border-t border-white/10 w-full" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {!isLogin && (
            <div>
              <label className="block text-[11px] font-medium text-stone-300 mb-1">
                Display Name (Nickname)
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. CyberExplorer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-9 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-8 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-medium text-stone-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-8 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-stone-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-9 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-8 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] shadow-lg hover:bg-[#A2BDB3] transition disabled:opacity-50 mt-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>{isLogin ? 'Sign In with Email' : 'Create Account'}</span>
            )}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-4 text-center text-xs text-stone-400">
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
