'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Inbox, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Sparkles, 
  Gamepad2,
  Calendar,
  Mail
} from 'lucide-react';
import { formatNumber } from '@/lib/utils';

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState<string | null>(null);

  useEffect(() => {
    async function loadSubs() {
      try {
        const res = await fetch('/api/admin/submissions');
        const data = await res.json();
        if (data.success) {
          setSubmissions(data.submissions);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadSubs();
  }, []);

  const handleApprove = async (subId: string) => {
    setActionId(subId);
    try {
      const res = await fetch(`/api/admin/submissions/${subId}/approve`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setSubmissions(submissions.filter((s) => s.id !== subId));
        alert('Game successfully published to public catalog!');
      } else {
        alert(data.error || 'Failed to approve submission.');
      }
    } finally {
      setActionId(null);
    }
  };

  const handleReject = async (subId: string) => {
    if (!confirm('Are you sure you want to reject this submission?')) return;
    setActionId(subId);
    try {
      const res = await fetch(`/api/admin/submissions/${subId}/reject`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setSubmissions(submissions.filter((s) => s.id !== subId));
      }
    } finally {
      setActionId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <Inbox className="h-7 w-7 text-emerald-400" />
          <span>User Game Submissions Queue ({submissions.length})</span>
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-stone-400">
          Review community submissions from independent creators. Approving an entry automatically indexes it into the live database.
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center text-xs text-stone-400">Loading submissions...</div>
      ) : submissions.length > 0 ? (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="rounded-2xl border border-white/10 bg-[#161B1E] p-6 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-stone-100">{sub.title}</span>
                    <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      {sub.tier}
                    </span>
                    <span className="rounded bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[10px] text-stone-300">
                      {sub.genreName}
                    </span>
                  </div>

                  <p className="text-xs text-stone-400 mt-1 flex items-center gap-3">
                    <span>Developer: <strong className="text-stone-200">{sub.developer}</strong></span>
                    {sub.contactEmail && (
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {sub.contactEmail}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={actionId === sub.id}
                    onClick={() => handleApprove(sub.id)}
                    className="flex items-center gap-1.5 rounded-xl bg-[#8FAFA3] px-4 py-2 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow disabled:opacity-50"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Approve & Publish</span>
                  </button>

                  <button
                    type="button"
                    disabled={actionId === sub.id}
                    onClick={() => handleReject(sub.id)}
                    className="flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-500/20 transition disabled:opacity-50"
                  >
                    <XCircle className="h-4 w-4" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2 rounded-xl border border-white/5 bg-white/[0.015] p-3.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Hook / Tagline
                  </p>
                  <p className="text-stone-200">{sub.tagline}</p>
                </div>

                <div className="space-y-2 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    AI in Action (Mechanism Breakdown)
                  </p>
                  <p className="text-emerald-100">{sub.aiRoleDescription}</p>
                </div>
              </div>

              {sub.websiteUrl && (
                <div className="flex items-center justify-between text-xs pt-1">
                  <a
                    href={sub.websiteUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Check Submitted Store / Project URL</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span className="text-stone-500 text-[11px]">
                    Supported: {sub.platforms.join(', ')}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-12 text-center space-y-2">
          <p className="text-sm font-semibold text-stone-300">No submissions in queue.</p>
          <p className="text-xs text-stone-500">
            When users submit games through <Link href="/submit" target="_blank" className="text-emerald-400 hover:underline">/submit</Link>, they will appear here for editorial approval.
          </p>
        </div>
      )}
    </div>
  );
}
