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
  guestLikes: number[];
  guestRatings: Record<number, number>;
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'register';
  openAuthModal: (mode?: 'login' | 'register') => void;
  closeAuthModal: () => void;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password?: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  toggleBookmark: (gameId: number) => boolean;
  isBookmarked: (gameId: number) => boolean;
  toggleLike: (gameId: number) => boolean;
  hasLiked: (gameId: number) => boolean;
  rateGame: (gameId: number, rating: number) => { currentScore: number; ratingCount: number };
  getUserRating: (gameId: number) => number | undefined;
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
  const [guestLikes, setGuestLikes] = useState<number[]>([]);
  const [guestRatings, setGuestRatings] = useState<Record<number, number>>({});
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

  // Load session, bookmarks, guest votes & ratings
  useEffect(() => {
    try {
      // 1. Guest Likes & Ratings
      const savedGuestLikes = localStorage.getItem('aigames_guest_likes');
      if (savedGuestLikes) {
        setGuestLikes(JSON.parse(savedGuestLikes));
      }
      const savedGuestRatings = localStorage.getItem('aigames_guest_ratings');
      if (savedGuestRatings) {
        setGuestRatings(JSON.parse(savedGuestRatings));
      }

      // 2. User Session
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
      console.error('Failed to load user state from localStorage', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

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
      return { success: false, error: 'Please enter a valid email address.' };
    }

    try {
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
        // Fallback to local session
      }

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
      return { success: false, error: err.message || 'Login failed, please try again.' };
    }
  };

  // Register handler
  const register = async (email: string, password?: string, name?: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    try {
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
      return { success: false, error: err.message || 'Registration failed, please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    setBookmarks([]);
    setPlayActivities({});
    localStorage.removeItem('aigames_user_session');
    document.cookie = 'better-auth.session_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

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

  // Bookmark (Requires User Account for Cross-device sync, opens modal if guest)
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

  // Like / Upvote (Open for ALL users and Guests without requiring login!)
  const toggleLike = (gameId: number): boolean => {
    const alreadyLiked = guestLikes.includes(gameId);
    const updated = alreadyLiked
      ? guestLikes.filter((id) => id !== gameId)
      : [...guestLikes, gameId];

    setGuestLikes(updated);
    localStorage.setItem('aigames_guest_likes', JSON.stringify(updated));

    try {
      fetch(`${API_BASE}/api/votes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId,
          userId: user?.id || null,
          isUpvote: !alreadyLiked,
        }),
      }).catch(() => {});
    } catch {}

    return !alreadyLiked;
  };

  const hasLiked = (gameId: number): boolean => {
    return guestLikes.includes(gameId);
  };

  // Rating (Open for ALL users and Guests without requiring login!)
  const rateGame = (gameId: number, rating: number) => {
    // 1. Store in guest ratings
    const updatedGuestRatings = {
      ...guestRatings,
      [gameId]: rating,
    };
    setGuestRatings(updatedGuestRatings);
    localStorage.setItem('aigames_guest_ratings', JSON.stringify(updatedGuestRatings));

    // 2. If logged in, also update playActivities
    if (user) {
      const existing = playActivities[gameId];
      const updatedActivity: Record<number, PlayActivity> = {
        ...playActivities,
        [gameId]: {
          status: existing?.status || 'played',
          rating,
          updatedAt: new Date().toISOString(),
        },
      };
      setPlayActivities(updatedActivity);
      localStorage.setItem(`aigames_activity_${user.id}`, JSON.stringify(updatedActivity));
    }

    // 3. Post to backend
    try {
      fetch(`${API_BASE}/api/votes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId,
          userId: user?.id || null,
          aiScore: rating,
        }),
      }).catch(() => {});
    } catch {}

    return { currentScore: rating, ratingCount: 1 };
  };

  const getUserRating = (gameId: number): number | undefined => {
    if (user && playActivities[gameId]?.rating) {
      return playActivities[gameId].rating;
    }
    return guestRatings[gameId];
  };

  // Play Status
  const setPlayStatus = (
    gameId: number,
    status: 'want_to_play' | 'playing' | 'played',
    rating?: number
  ): boolean => {
    if (!user) {
      // For guests, still save rating and status locally
      if (rating !== undefined) {
        rateGame(gameId, rating);
      }
      return true;
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
    if (user && playActivities[gameId]) {
      return playActivities[gameId];
    }
    if (guestRatings[gameId]) {
      return {
        status: 'played',
        rating: guestRatings[gameId],
        updatedAt: new Date().toISOString(),
      };
    }
    return undefined;
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        isLoading,
        bookmarks,
        playActivities,
        guestLikes,
        guestRatings,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout,
        toggleBookmark,
        isBookmarked,
        toggleLike,
        hasLiked,
        rateGame,
        getUserRating,
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
