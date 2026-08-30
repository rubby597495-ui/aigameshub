'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ShieldCheck, 
  ShieldAlert, 
  UserCheck, 
  Search, 
  Filter, 
  Trash2, 
  CheckCircle2, 
  Mail, 
  Calendar,
  Sparkles,
  KeyRound,
  AlertCircle,
  RefreshCw,
  Ban,
  UserX,
  Star,
  Gamepad2
} from 'lucide-react';
import { formatDate, cn } from '@/lib/utils';
import { Pagination } from '@/components/ui/Pagination';
import { SystemUser } from '@/lib/user-store';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<SystemUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('ALL');
  const [selectedProvider, setSelectedProvider] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 12;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search.trim()) params.set('search', search.trim());
      if (selectedRole !== 'ALL') params.set('role', selectedRole);
      if (selectedProvider !== 'ALL') params.set('provider', selectedProvider);
      if (selectedStatus !== 'ALL') params.set('status', selectedStatus);

      const res = await fetch(`/api/admin/users?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        setUsers(json.data || []);
      }
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'Error fetching users' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchUsers();
  }, [selectedRole, selectedProvider, selectedStatus, search]);

  const showToast = (type: 'success' | 'error', text: string) => {
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 3500);
  };

  const handleRoleChange = async (userId: string, newRole: SystemUser['role']) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
        );
        showToast('success', `Role updated to ${newRole.toUpperCase()}`);
      } else {
        showToast('error', 'Failed to update role');
      }
    } catch (err: any) {
      showToast('error', err.message || 'Network error');
    }
  };

  const handleStatusToggle = async (userId: string, currentStatus: 'ACTIVE' | 'BANNED') => {
    const nextStatus = currentStatus === 'ACTIVE' ? 'BANNED' : 'ACTIVE';
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, status: nextStatus } : u))
        );
        showToast('success', `User account status marked as ${nextStatus}`);
      } else {
        showToast('error', 'Failed to update user status');
      }
    } catch (err: any) {
      showToast('error', err.message || 'Network error');
    }
  };

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete user "${userName}"?`)) return;

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        showToast('success', `User "${userName}" deleted successfully`);
      } else {
        showToast('error', 'Failed to delete user');
      }
    } catch (err: any) {
      showToast('error', err.message || 'Network error');
    }
  };

  const totalUsers = users.length;
  const oauthCount = users.filter((u) => u.provider === 'google' || u.provider === 'github').length;
  const creatorCount = users.filter((u) => u.role === 'creator' || u.role === 'editor').length;
  const bannedCount = users.filter((u) => u.status === 'BANNED').length;

  const totalPages = Math.max(1, Math.ceil(users.length / PAGE_SIZE));
  const paginatedUsers = users.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
          )}
          <span>{feedback.text}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <Users className="h-7 w-7 text-emerald-400" />
            <span>User & Identity Administration</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-stone-400">
            Monitor registered players, Google/GitHub OAuth accounts, manage permissions, and enforce account bans.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchUsers}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/10 transition self-start sm:self-auto"
        >
          <RefreshCw className={cn("h-3.5 w-3.5", loading && "animate-spin")} />
          <span>Refresh Users</span>
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-4 space-y-1">
          <span className="text-[11px] text-stone-400">Total Registered</span>
          <p className="text-2xl font-bold text-stone-100 font-mono">{totalUsers}</p>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 p-4 space-y-1">
          <span className="text-[11px] text-blue-400 font-medium">Google / GitHub OAuth</span>
          <p className="text-2xl font-bold text-blue-300 font-mono">{oauthCount}</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4 space-y-1">
          <span className="text-[11px] text-emerald-400 font-medium">Creators & Editors</span>
          <p className="text-2xl font-bold text-emerald-300 font-mono">{creatorCount}</p>
        </div>

        <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4 space-y-1">
          <span className="text-[11px] text-rose-400 font-medium">Banned Accounts</span>
          <p className="text-2xl font-bold text-rose-300 font-mono">{bannedCount}</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {/* Search */}
          <div className="relative sm:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
            <input
              type="text"
              placeholder="Search user by name, email, or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full rounded-xl border border-white/10 bg-[#121619] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
            />
          </div>

          {/* Provider Filter */}
          <div>
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="h-9 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            >
              <option value="ALL">All Auth Providers</option>
              <option value="google">Google OAuth</option>
              <option value="github">GitHub OAuth</option>
              <option value="email">Direct Email</option>
            </select>
          </div>

          {/* Role Filter */}
          <div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="h-9 w-full rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            >
              <option value="ALL">All User Roles</option>
              <option value="user">User / Player</option>
              <option value="creator">Verified Creator</option>
              <option value="editor">Content Editor</option>
              <option value="admin">Super Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161B1E] shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/10 bg-[#121619] font-bold text-stone-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">Player / Identity</th>
                <th className="p-3.5">Provider</th>
                <th className="p-3.5">Email & Verification</th>
                <th className="p-3.5">Role Permission</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Joined Date</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-stone-300">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-stone-500">
                    Loading users directory...
                  </td>
                </tr>
              ) : paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-stone-500">
                    No users match the search and filter criteria.
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => {
                  const isBanned = user.status === 'BANNED';
                  return (
                    <tr key={user.id} className="hover:bg-white/[0.02] transition">
                      {/* Name & Avatar */}
                      <td className="p-3.5">
                        <div className="flex items-center gap-3">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={`${user.name} Avatar`}
                              className="h-8 w-8 rounded-full border border-white/10 object-cover"
                            />
                          ) : (
                            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 font-bold uppercase text-xs">
                              {user.name.charAt(0)}
                            </span>
                          )}
                          <div className="min-w-0">
                            <p className="font-bold text-stone-100 flex items-center gap-1.5">
                              <span>{user.name}</span>
                              {user.role === 'admin' && (
                                <span className="rounded bg-amber-500/20 border border-amber-500/30 px-1 py-0.2 text-[9px] font-bold text-amber-300">
                                  ADMIN
                                </span>
                              )}
                            </p>
                            <p className="text-[10px] text-stone-500 font-mono truncate">
                              {user.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Auth Provider */}
                      <td className="p-3.5">
                        {user.provider === 'google' ? (
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-950/40 px-2 py-1 text-[11px] font-semibold text-blue-300">
                            <svg className="h-3 w-3" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                            </svg>
                            <span>Google</span>
                          </span>
                        ) : user.provider === 'github' ? (
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-2 py-1 text-[11px] font-semibold text-stone-200">
                            <svg className="h-3 w-3 fill-white" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            <span>GitHub</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-stone-400 font-medium">
                            <Mail className="h-3 w-3" />
                            <span>Email</span>
                          </span>
                        )}
                      </td>

                      {/* Email */}
                      <td className="p-3.5">
                        <p className="font-mono text-stone-200">{user.email}</p>
                        <div className="mt-0.5">
                          {user.emailVerified ? (
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                              <CheckCircle2 className="h-2.5 w-2.5" />
                              <span>Verified</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-amber-400">Unverified</span>
                          )}
                        </div>
                      </td>

                      {/* Role Dropdown */}
                      <td className="p-3.5">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.id, e.target.value as any)}
                          className="h-8 rounded-lg border border-white/10 bg-[#121619] px-2 text-xs font-semibold text-stone-200 focus:border-emerald-400/50 focus:outline-none"
                        >
                          <option value="user">User</option>
                          <option value="creator">Creator</option>
                          <option value="editor">Editor</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>

                      {/* Status */}
                      <td className="p-3.5">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase border",
                            user.status === 'ACTIVE'
                              ? "border-emerald-500/30 bg-emerald-950/60 text-emerald-300"
                              : "border-rose-500/30 bg-rose-950/60 text-rose-300"
                          )}
                        >
                          {user.status}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="p-3.5 text-stone-400 font-mono text-[11px]">
                        {formatDate(user.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="p-3.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleStatusToggle(user.id, user.status)}
                            className={cn(
                              "grid h-7 w-7 place-items-center rounded-lg border transition",
                              isBanned
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                                : "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20"
                            )}
                            title={isBanned ? 'Unban user' : 'Ban/Suspend user'}
                          >
                            {isBanned ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Ban className="h-3.5 w-3.5" />}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteUser(user.id, user.name)}
                            className="grid h-7 w-7 place-items-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                            title="Delete user"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {users.length > PAGE_SIZE && (
          <div className="p-4 bg-[#14181B] border-t border-white/10">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              totalItems={users.length}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
