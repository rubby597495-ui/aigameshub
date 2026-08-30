'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  ShieldCheck, 
  ShieldAlert, 
  Trash2, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Filter, 
  ExternalLink, 
  Star, 
  AlertTriangle,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import { GameComment, CommentStatus } from '@/types/comment';
import { formatDate, cn } from '@/lib/utils';
import { Pagination } from '@/components/ui/Pagination';

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<GameComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  const fetchComments = async () => {
    try {
      setLoading(true);
      const query = new URLSearchParams();
      if (statusFilter !== 'ALL') query.set('status', statusFilter);
      if (searchTerm.trim()) query.set('search', searchTerm.trim());

      const res = await fetch(`/api/admin/comments?${query.toString()}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.comments)) {
        setComments(data.comments);
      }
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'Failed to fetch comments' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchComments();
  }, [statusFilter, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(comments.length / PAGE_SIZE));
  const paginatedComments = comments.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const showToast = (type: 'success' | 'error', text: string) => {
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 3500);
  };

  const handleUpdateStatus = async (id: string, newStatus: CommentStatus) => {
    try {
      const res = await fetch(`/api/admin/comments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setComments((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
        showToast('success', `Comment status updated to ${newStatus}`);
      } else {
        showToast('error', data.error || 'Update failed');
      }
    } catch (err: any) {
      showToast('error', err.message || 'Network error');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this comment?')) return;

    try {
      const res = await fetch(`/api/admin/comments/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setComments((prev) => prev.filter((c) => c.id !== id));
        showToast('success', 'Comment deleted successfully');
      } else {
        showToast('error', data.error || 'Delete failed');
      }
    } catch (err: any) {
      showToast('error', err.message || 'Network error');
    }
  };

  const totalApproved = comments.filter((c) => c.status === 'APPROVED').length;
  const totalFlagged = comments.filter((c) => c.status === 'FLAGGED' || c.status === 'SPAM').length;

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {feedback && (
        <div
          className={cn(
            'flex items-center gap-2 rounded-xl p-3.5 text-xs animate-fadeIn fixed bottom-6 right-6 z-50 shadow-2xl border backdrop-blur-xl',
            feedback.type === 'success'
              ? 'border-emerald-400/40 bg-emerald-950/90 text-emerald-300'
              : 'border-rose-500/40 bg-rose-950/90 text-rose-300'
          )}
        >
          {feedback.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          ) : (
            <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
          )}
          <span>{feedback.text}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <ShieldCheck className="h-7 w-7 text-emerald-400" />
            <span>Comments & Content Moderation</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-stone-400">
            Audit user reviews, monitor anti-spam triggers, remove prohibited external links and manage community safety.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchComments}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/10 transition self-start sm:self-auto"
        >
          <RefreshCw className={cn("h-3.5 w-3.5", loading && "animate-spin")} />
          <span>Refresh</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-4 space-y-1">
          <span className="text-[11px] text-stone-400">Total Comments</span>
          <p className="text-2xl font-bold text-stone-100 font-mono">{comments.length}</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4 space-y-1">
          <span className="text-[11px] text-emerald-400 font-medium">Approved / Active</span>
          <p className="text-2xl font-bold text-emerald-300 font-mono">{totalApproved}</p>
        </div>

        <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4 space-y-1">
          <span className="text-[11px] text-rose-400 font-medium">Flagged / Hidden</span>
          <p className="text-2xl font-bold text-rose-300 font-mono">{totalFlagged}</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#161B1E] p-3 text-xs">
        <div className="flex items-center gap-2 w-full sm:max-w-md">
          <Search className="h-4 w-4 text-stone-500 shrink-0" />
          <input
            type="text"
            placeholder="Search by keyword, author, or game title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {['ALL', 'APPROVED', 'FLAGGED', 'SPAM'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setStatusFilter(tab)}
              className={cn(
                "rounded-xl px-3 py-1.5 font-semibold transition whitespace-nowrap",
                statusFilter === tab
                  ? "bg-[#2A3442] text-[#D8E1EA] shadow"
                  : "text-stone-400 hover:text-stone-200 hover:bg-white/[0.03]"
              )}
            >
              {tab === 'ALL' ? 'All Comments' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Comments List / Table */}
      <div className="space-y-3">
        {loading ? (
          <div className="py-16 text-center text-xs text-stone-500">
            Loading comment moderation queue...
          </div>
        ) : comments.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#161B1E] p-12 text-center space-y-2">
            <MessageSquare className="mx-auto h-8 w-8 text-stone-600" />
            <p className="text-sm font-semibold text-stone-300">No comments found</p>
            <p className="text-xs text-stone-500">
              No comments match the selected filter criteria.
            </p>
          </div>
        ) : (
          paginatedComments.map((comment) => {
            const isApproved = comment.status === 'APPROVED';
            const isFlagged = comment.status === 'FLAGGED' || comment.status === 'SPAM';

            return (
              <div
                key={comment.id}
                className={cn(
                  "rounded-2xl border p-5 space-y-3 transition duration-150 shadow-md",
                  isFlagged
                    ? "border-rose-500/30 bg-rose-950/10"
                    : "border-white/10 bg-[#161B1E] hover:border-white/20"
                )}
              >
                {/* Comment Header Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.05] border border-white/10 text-stone-200 font-bold text-xs uppercase">
                      {comment.authorName.charAt(0)}
                    </span>
                    <span className="text-xs font-bold text-stone-100">
                      {comment.authorName}
                    </span>
                    {comment.userId && (
                      <span className="rounded-full bg-emerald-400/10 border border-emerald-400/30 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                        Registered User
                      </span>
                    )}
                    {comment.rating && (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.2 text-[10px] font-bold text-amber-300 font-mono">
                        <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                        <span>Score: {comment.rating}.0</span>
                      </span>
                    )}
                    <span className="text-stone-500 text-xs">on</span>
                    {comment.gameSlug ? (
                      <Link
                        href={`/games/${comment.gameSlug}`}
                        target="_blank"
                        className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{comment.gameTitle || `Game #${comment.gameId}`}</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span className="text-xs font-semibold text-stone-300">
                        Game #{comment.gameId}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase border",
                        isApproved
                          ? "border-emerald-500/30 bg-emerald-950/60 text-emerald-300"
                          : "border-rose-500/30 bg-rose-950/60 text-rose-300"
                      )}
                    >
                      {comment.status}
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="text-xs leading-relaxed text-stone-200">
                  {comment.content}
                </div>

                {/* Flag Reason if any */}
                {comment.flagReason && (
                  <div className="flex items-center gap-1.5 text-[11px] text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-2">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                    <span>Auto-Flag Reason: {comment.flagReason}</span>
                  </div>
                )}

                {/* Moderation Actions */}
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                  <div className="text-[11px] text-stone-500 font-mono">
                    ID: {comment.id}
                  </div>

                  <div className="flex items-center gap-2">
                    {!isApproved ? (
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(comment.id, 'APPROVED')}
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold text-white hover:bg-emerald-500 transition shadow"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Approve</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(comment.id, 'FLAGGED')}
                        className="inline-flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition"
                      >
                        <EyeOff className="h-3.5 w-3.5" />
                        <span>Hide / Flag</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDelete(comment.id)}
                      className="inline-flex items-center gap-1 rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-300 hover:bg-rose-500/20 transition"
                      title="Permanently delete comment"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* Pagination */}
        {comments.length > PAGE_SIZE && (
          <div className="pt-2">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              totalItems={comments.length}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
