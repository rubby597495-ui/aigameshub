'use client';

import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CATEGORIES, AI_MECHANICS, AI_TYPES, PLATFORMS } from '@/data/categories';
import { PlusCircle, Sparkles, CheckCircle2, Link as LinkIcon, Gamepad2, ImageIcon, User, Lock, ArrowRight } from 'lucide-react';
import { ImageUploadManager } from '@/components/ui/ImageUploadManager';
import { useUserAuth } from '@/contexts/UserAuthContext';

export default function SubmitGamePage() {
  const { user, openAuthModal } = useUserAuth();

  const [formData, setFormData] = useState({
    title: '',
    websiteUrl: '',
    tier: 'AI-Native',
    genre: 'narrative-adventure',
    mechanic: 'ai-npc-interrogation',
    platforms: ['Browser'],
    developer: '',
    releaseYear: '2026',
    coverUrl: '',
    screenshots: [] as string[],
    tagline: '',
    description: '',
    aiRoleDescription: '',
    contactEmail: ''
  });

  // Pre-fill user data when logged in
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        developer: prev.developer || user.name,
        contactEmail: prev.contactEmail || user.email,
      }));
    }
  }, [user]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!user) {
      openAuthModal('login');
      return;
    }

    if (!formData.coverUrl) {
      setSubmitError('请上传游戏主封面图后再提交。');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userId: user.id,
        })
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.error || '提交失败，请检查输入后重试。');
      }
    } catch (err: any) {
      setSubmitError(err.message || '网络连接异常，请重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlatformChange = (plat: string) => {
    if (formData.platforms.includes(plat)) {
      if (formData.platforms.length > 1) {
        setFormData({
          ...formData,
          platforms: formData.platforms.filter((p) => p !== plat)
        });
      }
    } else {
      setFormData({
        ...formData,
        platforms: [...formData.platforms, plat]
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ name: '提交 AI 游戏 (Submit Game)', url: '/submit' }]} />

      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <PlusCircle className="h-7 w-7 text-emerald-400" />
          <span>提交你的 AI 游戏 (Submit AI Game)</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
          你是独立开发者或游戏工作室？欢迎将使用生成式 AI、大模型 NPC 或前沿机制的游戏提交至 AiGamesHub 全球索引库。
        </p>
      </div>

      {!user ? (
        <div className="archive-surface rounded-3xl p-10 sm:p-12 text-center border border-white/10 bg-white/[0.02] space-y-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 mx-auto">
            <Lock className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-stone-100">
            提交游戏前需要先登录账号
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            为了确保游戏归属与审核反馈通道，提交游戏必须先绑定玩家/开发者账号。审核通过后将自动与你的创作者主页关联。
          </p>
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-8 py-3 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-lg shadow-emerald-950/40"
          >
            <User className="h-4 w-4" />
            <span>立即登录 / 免费注册后提交</span>
          </button>
        </div>
      ) : isSubmitted ? (
        <div className="archive-surface rounded-3xl p-10 text-center border border-emerald-400/30 bg-emerald-950/20 space-y-4">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400 animate-bounce" />
          <h2 className="text-xl font-bold text-stone-100">
            游戏已成功提交审核！
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            感谢提交 <strong>{formData.title}</strong>。我们的编辑团队将在 24-48 小时内完成 AI 玩法机制与外链的核验并予以发布。
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                title: '',
                websiteUrl: '',
                tier: 'AI-Native',
                genre: 'narrative-adventure',
                mechanic: 'ai-npc-interrogation',
                platforms: ['Browser'],
                developer: user.name,
                releaseYear: '2026',
                coverUrl: '',
                screenshots: [],
                tagline: '',
                description: '',
                aiRoleDescription: '',
                contactEmail: user.email
              });
            }}
            className="rounded-xl bg-[#8FAFA3] px-6 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition"
          >
            继续提交下一款游戏
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          {/* Submitter info banner */}
          <div className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-950/30 p-3.5 text-xs text-emerald-200">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-400/20 text-emerald-300 font-bold uppercase text-xs">
                {user.name.charAt(0)}
              </span>
              <span>提交人: <strong>{user.name}</strong> ({user.email})</span>
            </div>
            <span className="text-[10px] text-emerald-400/70 font-mono">已通过账号认证</span>
          </div>

          {submitError && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
              {submitError}
            </div>
          )}

          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              <span>1. 基础游戏信息 (Basic Info)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">游戏名称 (Title) *</label>
                <input
                  type="text"
                  required
                  placeholder="例如: Suck Up! 或 Infinite Craft"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">游戏官网 / Steam 商店链接 *</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
                  <input
                    type="url"
                    required
                    placeholder="https://store.steampowered.com/app/..."
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">开发团队 / 创作者名称 *</label>
                <input
                  type="text"
                  required
                  placeholder="例如: Proxima Studio"
                  value={formData.developer}
                  onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">联系邮箱 (用于接收审核通知) *</label>
                <input
                  type="email"
                  required
                  placeholder="developer@studio.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* AI Taxonomy Classification */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>2. AI 机制与分类体系 (AI Taxonomy)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">AI 融合等级 (Tier) *</label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  <option value="AI-Native">AI-Native (核心机制由 AI 驱动)</option>
                  <option value="AI-Augmented">AI-Augmented (传统玩法 + AI 增强)</option>
                  <option value="AI-Boundary">AI-Boundary (实验性前沿探索)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">主要游戏类型 (Genre) *</label>
                <select
                  value={formData.genre}
                  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-300 mb-1 font-medium">核心 AI 交互机制 (Mechanic) *</label>
                <select
                  value={formData.mechanic}
                  onChange={(e) => setFormData({ ...formData, mechanic: e.target.value })}
                  className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                >
                  {AI_MECHANICS.map((m) => (
                    <option key={m.slug} value={m.slug}>{m.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-xs text-stone-300 mb-1.5 font-medium">支持平台 (Platforms) *</label>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.filter((p) => p.slug !== 'all').map((p) => {
                  const selected = formData.platforms.includes(p.name);
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => handlePlatformChange(p.name)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition ${
                        selected
                          ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                          : 'border-white/10 bg-white/[0.02] text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. 图片与截图管理 (最多5张，第1张为封面，支持拖拽排序) */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <ImageUploadManager
              images={[
                formData.coverUrl,
                ...(formData.screenshots || []).filter((s) => s !== formData.coverUrl)
              ].filter(Boolean)}
              onImagesChange={(newImgs) =>
                setFormData((prev) => ({
                  ...prev,
                  coverUrl: newImgs[0] || '',
                  screenshots: newImgs
                }))
              }
              maxImages={5}
              maxFileSizeMB={3}
            />
          </div>

          {/* Descriptions */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              4. 玩法简介与 AI 实现说明 (Description)
            </h2>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">一句话玩法亮点 (Tagline) *</label>
              <input
                type="text"
                required
                placeholder="例如: 与具有长期记忆的 AI 邻居对话并发现小镇阴谋"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="h-10 w-full rounded-xl border border-white/10 bg-[#161B1E] px-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">
                AI 在游戏中具体负责什么？(AI Mechanism Breakdown) *
              </label>
              <textarea
                required
                rows={3}
                placeholder="详细说明 AI 在游戏中的具体角色：例如实时生成 NPC 对话分支、充当动态地下城主 (Game Master)、自然语言解析合成等..."
                value={formData.aiRoleDescription}
                onChange={(e) => setFormData({ ...formData, aiRoleDescription: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-300 mb-1 font-medium">详细游戏介绍 (Overview)</label>
              <textarea
                rows={4}
                placeholder="介绍游戏的背景故事、核心循环、操作方式与独特特色..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-[#8FAFA3] px-8 py-3 text-xs font-bold text-[#101715] shadow-lg shadow-black/30 hover:bg-[#A2BDB3] transition disabled:opacity-50"
            >
              {isSubmitting ? '正在提交中...' : '提交游戏至全球索引库'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
