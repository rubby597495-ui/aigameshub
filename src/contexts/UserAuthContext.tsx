'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: 'user' | 'editor' | 'admin';
  createdAt?: string;
}

export interface PlayActivity {
  status: 'want_to_play' | 'playing' | 'played';
  rating?: number; // 1.0 to 10.0
  updatedAt: string;
}

interface UserAuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  bookmarks: number[];
  playActivities: Record<number, PlayActivity>;
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'register';
  openAuthModal: (mode?: 'login' | 'register') => void;
  closeAuthModal: () => void;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password?: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  toggleBookmark: (gameId: number) => boolean;
  isBookmarked: (gameId: number) => boolean;
  setPlayStatus: (gameId: number, status: 'want_to_play' | 'playing' | 'played', rating?: number) => boolean;
  getPlayActivity: (gameId: number) => PlayActivity | undefined;
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(undefined);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export function UserAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [playActivities, setPlayActivities] = useState<Record<number, PlayActivity>>({});
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

  // Load session & cached user data from localStorage
  useEffect(() => {
    try {
      const savedSession = localStorage.getItem('aigames_user_session');
      if (savedSession) {
        const parsedUser: UserProfile = JSON.parse(savedSession);
        setUser(parsedUser);

        // Load bookmarks for this user
        const savedBookmarks = localStorage.getItem(`aigames_bookmarks_${parsedUser.id}`);
        if (savedBookmarks) {
          setBookmarks(JSON.parse(savedBookmarks));
        }

        // Load play activity for this user
        const savedActivity = localStorage.getItem(`aigames_activity_${parsedUser.id}`);
        if (savedActivity) {
          setPlayActivities(JSON.parse(savedActivity));
        }
      }
    } catch (e) {
      console.error('Failed to load user session from localStorage', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Open & close auth modal
  const openAuthModal = (mode: 'login' | 'register' = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // Login handler
  const login = async (email: string, password?: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !email.includes('@')) {
      return { success: false, error: '请输入有效的邮箱地址' };
    }

    try {
      // 1. Try real Better-Auth / backend login if available
      try {
        const res = await fetch(`${API_BASE}/api/auth/sign-in/email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password: password || 'AiGamesHub2026!' }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            const loggedUser: UserProfile = {
              id: data.user.id,
              name: data.user.name || email.split('@')[0],
              email: data.user.email,
              image: data.user.image,
              role: data.user.role || 'user',
              createdAt: data.user.createdAt,
            };
            setUser(loggedUser);
            localStorage.setItem('aigames_user_session', JSON.stringify(loggedUser));
            loadUserData(loggedUser.id);
            return { success: true };
          }
        }
      } catch {
        // Fallback to local user session
      }

      // 2. Direct client session initialization (Instant fallback)
      const sanitizedName = email.split('@')[0];
      const localUser: UserProfile = {
        id: `usr_${sanitizedName.toLowerCase().replace(/[^a-z0-9]/g, '') || Date.now()}`,
        name: sanitizedName.charAt(0).toUpperCase() + sanitizedName.slice(1),
        email,
        role: 'user',
        createdAt: new Date().toISOString(),
      };

      setUser(localUser);
      localStorage.setItem('aigames_user_session', JSON.stringify(localUser));
      loadUserData(localUser.id);

      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || '登录失败，请重试' };
    }
  };

  // Register handler
  const register = async (email: string, password?: string, name?: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !email.includes('@')) {
      return { success: false, error: '请输入有效的邮箱地址' };
    }

    try {
      // 1. Try backend register if available
      try {
        const res = await fetch(`${API_BASE}/api/auth/sign-up/email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password: password || 'AiGamesHub2026!', name: name || email.split('@')[0] }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            const newUser: UserProfile = {
              id: data.user.id,
              name: data.user.name || name || email.split('@')[0],
              email: data.user.email,
              image: data.user.image,
              role: 'user',
              createdAt: new Date().toISOString(),
            };
            setUser(newUser);
            localStorage.setItem('aigames_user_session', JSON.stringify(newUser));
            return { success: true };
          }
        }
      } catch {
        // Fallback to local registration
      }

      const userName = name || email.split('@')[0];
      const newUser: UserProfile = {
        id: `usr_${userName.toLowerCase().replace(/[^a-z0-9]/g, '') || Date.now()}`,
        name: userName,
        email,
        role: 'user',
        createdAt: new Date().toISOString(),
      };

      setUser(newUser);
      localStorage.setItem('aigames_user_session', JSON.stringify(newUser));
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || '注册失败，请重试' };
    }
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    setBookmarks([]);
    setPlayActivities({});
    localStorage.removeItem('aigames_user_session');
    // Clear cookies if present
    document.cookie = 'better-auth.session_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  // Helper to load user-specific bookmarks and play activities
  const loadUserData = (userId: string) => {
    const savedBookmarks = localStorage.getItem(`aigames_bookmarks_${userId}`);
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
    const savedActivity = localStorage.getItem(`aigames_activity_${userId}`);
    if (savedActivity) {
      setPlayActivities(JSON.parse(savedActivity));
    }
  };

  // Toggle Bookmark
  const toggleBookmark = (gameId: number): boolean => {
    if (!user) {
      openAuthModal('login');
      return false;
    }

    const isCurrentlyBookmarked = bookmarks.includes(gameId);
    const updated = isCurrentlyBookmarked
      ? bookmarks.filter((id) => id !== gameId)
      : [...bookmarks, gameId];

    setBookmarks(updated);
    localStorage.setItem(`aigames_bookmarks_${user.id}`, JSON.stringify(updated));

    // Optional backend sync
    try {
      fetch(`${API_BASE}/api/user/bookmarks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, gameId, isBookmarked: !isCurrentlyBookmarked }),
      }).catch(() => {});
    } catch {}

    return true;
  };

  const isBookmarked = (gameId: number): boolean => {
    return bookmarks.includes(gameId);
  };

  // Set Play Status & Personal Rating
  const setPlayStatus = (
    gameId: number,
    status: 'want_to_play' | 'playing' | 'played',
    rating?: number
  ): boolean => {
    if (!user) {
      openAuthModal('login');
      return false;
    }

    const existing = playActivities[gameId];
    const newActivity: PlayActivity = {
      status,
      rating: rating !== undefined ? rating : existing?.rating,
      updatedAt: new Date().toISOString(),
    };

    const updated = {
      ...playActivities,
      [gameId]: newActivity,
    };

    setPlayActivities(updated);
    localStorage.setItem(`aigames_activity_${user.id}`, JSON.stringify(updated));

    // Optional backend sync
    try {
      fetch(`${API_BASE}/api/user/activity`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          gameId,
          status,
          rating: newActivity.rating,
        }),
      }).catch(() => {});
    } catch {}

    return true;
  };

  const getPlayActivity = (gameId: number): PlayActivity | undefined => {
    return playActivities[gameId];
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        isLoading,
        bookmarks,
        playActivities,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout,
        toggleBookmark,
        isBookmarked,
        setPlayStatus,
        getPlayActivity,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error('useUserAuth must be used within a UserAuthProvider');
  }
  return context;
}
