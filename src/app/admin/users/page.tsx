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
  AlertCircle
} from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  role: 'user' | 'editor' | 'admin';
  createdAt: string | number;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<'ALL' | 'admin' | 'editor' | 'user'>('ALL');
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (selectedRole !== 'ALL') params.set('role', selectedRole);

      const res = await fetch(`/api/admin/users?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        setUsers(json.data || []);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedRole]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleRoleChange = async (userId: string, newRole: 'user' | 'editor' | 'admin') => {
    try {
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
        );
        setActionSuccess(`Role updated to ${newRole.toUpperCase()}`);
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (err) {
      console.error('Error updating role:', err);
    }
  };

  const totalUsers = users.length;
  const adminCount = users.filter((u) => u.role === 'admin').length;
  const editorCount = users.filter((u) => u.role === 'editor').length;
  const standardCount = users.filter((u) => u.role === 'user').length;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <Users className="h-6 w-6 text-emerald-400" />
            User & Permission Management
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Manage registered community players, editorial contributors, and administrative access via Better-Auth.
          </p>
        </div>

        {actionSuccess && (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 animate-fadeIn">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>{actionSuccess}</span>
          </div>
        )}
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-4">
          <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Total Users</p>
          <p className="text-2xl font-bold text-stone-100 mt-1">{totalUsers}</p>
          <span className="text-[10px] text-emerald-400 mt-1 block">Active Profiles</span>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">
          <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider">Super Admins</p>
          <p className="text-2xl font-bold text-purple-200 mt-1">{adminCount}</p>
          <span className="text-[10px] text-purple-400 mt-1 block">Full Control</span>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
          <p className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider">Editors</p>
          <p className="text-2xl font-bold text-blue-200 mt-1">{editorCount}</p>
          <span className="text-[10px] text-blue-400 mt-1 block">Article & Game Curation</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-4">
          <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Community Users</p>
          <p className="text-2xl font-bold text-stone-200 mt-1">{standardCount}</p>
          <span className="text-[10px] text-stone-400 mt-1 block">Voters & Players</span>
        </div>
      </div>

      {/* Search and Role Filter Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-[#161B1E] p-3">
        <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search by name, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full rounded-xl border border-white/10 bg-[#121619] pl-9 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-9 rounded-xl bg-white/[0.06] border border-white/10 px-3 text-xs font-semibold text-stone-300 hover:bg-white/10 transition"
          >
            Search
          </button>
        </form>

        {/* Role Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {(['ALL', 'admin', 'editor', 'user'] as const).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                selectedRole === role
                  ? 'bg-[#2A3442] text-emerald-300 border border-emerald-500/30'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.04]'
              }`}
            >
              {role === 'ALL' ? 'All Roles' : role.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161B1E]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/10 bg-[#121619] text-[11px] font-bold uppercase tracking-wider text-stone-400">
              <tr>
                <th className="px-4 py-3.5">User</th>
                <th className="px-4 py-3.5">Email</th>
                <th className="px-4 py-3.5">Role & Permission</th>
                <th className="px-4 py-3.5">Joined Date</th>
                <th className="px-4 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-stone-500">
                    Loading users database...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-stone-500">
                    No users found matching your search.
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="hover:bg-white/[0.02] transition">
                    {/* User Identity */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase shrink-0">
                          {u.name ? u.name[0] : 'U'}
                        </div>
                        <div>
                          <p className="font-semibold text-stone-100">{u.name}</p>
                          <p className="text-[10px] text-stone-500 font-mono">ID: {u.id.slice(0, 12)}...</p>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-4 py-3.5 text-stone-300">
                      <div className="flex items-center gap-2">
                        <span>{u.email}</span>
                        {u.emailVerified ? (
                          <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.2 text-[9px] font-bold text-emerald-400">
                            Verified
                          </span>
                        ) : (
                          <span className="rounded bg-amber-500/10 border border-amber-500/20 px-1 py-0.2 text-[9px] font-bold text-amber-400">
                            Unverified
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Role Selector */}
                    <td className="px-4 py-3.5">
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleChange(u.id, e.target.value as any)}
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold focus:outline-none transition cursor-pointer ${
                          u.role === 'admin'
                            ? 'bg-purple-950/40 border-purple-500/40 text-purple-300'
                            : u.role === 'editor'
                            ? 'bg-blue-950/40 border-blue-500/40 text-blue-300'
                            : 'bg-stone-800/60 border-white/10 text-stone-300'
                        }`}
                      >
                        <option value="user" className="bg-[#161B1E] text-stone-300">USER (Player)</option>
                        <option value="editor" className="bg-[#161B1E] text-blue-300">EDITOR (Curator)</option>
                        <option value="admin" className="bg-[#161B1E] text-purple-300">ADMIN (Super Admin)</option>
                      </select>
                    </td>

                    {/* Created Date */}
                    <td className="px-4 py-3.5 text-stone-400 text-[11px]">
                      {formatDate(typeof u.createdAt === 'number' ? new Date(u.createdAt).toISOString() : u.createdAt)}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleRoleChange(u.id, u.role === 'admin' ? 'user' : 'admin')}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-stone-300 hover:bg-white/10 transition"
                          title="Toggle Admin Privilege"
                        >
                          {u.role === 'admin' ? 'Demote' : 'Make Admin'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
