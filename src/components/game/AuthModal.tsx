'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, Sparkles, CheckCircle2, User, Loader2, AlertCircle } from 'lucide-react';
import { useUserAuth } from '@/contexts/UserAuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login, register, authModalMode, openAuthModal } = useUserAuth();
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
          setErrorMsg(res.error || '登录失败，请检查账号密码');
          setIsLoading(false);
          return;
        }
      } else {
        const res = await register(email, password, name);
        if (!res.success) {
          setErrorMsg(res.error || '注册失败，请检查填写内容');
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
      setErrorMsg(err.message || '认证服务异常，请稍后重试');
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
            {isLogin ? '欢迎登录 AiGamesHub' : '创建你的 AI 玩家账号'}
          </h3>
          <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
            {isLogin
              ? '登录后即可跨设备同步收藏夹、记录游戏进度、评分与提交专属 AI 游戏。'
              : '加入全球 AI 原生与智能 NPC 游戏先锋玩家社区。'}
          </p>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 animate-bounce" />
            <p className="text-sm font-bold text-emerald-300">
              {isLogin ? '登录成功！欢迎回来！' : '账号创建成功！正在进入平台...'}
            </p>
          </div>
        ) : (
          <>
            {/* Error Message */}
            {errorMsg && (
              <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 mb-4">
                <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    玩家昵称 (Nickname)
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
                    <input
                      type="text"
                      required
                      placeholder="例如: NeonGamer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  邮箱地址 (Email Address)
                </label>
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
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  登录密码 (Password)
                </label>
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
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md shadow-emerald-950/30 mt-3 disabled:opacity-50"
              >
                {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                <span>{isLoading ? '正在处理中...' : isLogin ? '立即登录' : '立即注册账号'}</span>
              </button>
            </form>

            {/* Quick Demo Fill (for ease of use) */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
              <span>快速体验账号:</span>
              <button
                type="button"
                onClick={() => handleQuickDemo('player@aigameshub.io', 'AI Explorer')}
                className="text-emerald-400 hover:underline"
              >
                填入测试玩家账号
              </button>
            </div>

            {/* Switch Mode */}
            <p className="mt-4 text-center text-xs text-stone-400">
              {isLogin ? "还没有账号？" : "已有账号？"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-emerald-400 hover:underline font-semibold"
              >
                {isLogin ? '免费注册' : '直接登录'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
