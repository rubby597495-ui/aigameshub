/**
 * AiGamesHub Content Moderation & Anti-Abuse Engine
 * Safeguards public comments from spam, promotional external URLs, and sensitive content.
 */

// 1. Common Top-Level Domains (TLDs) for naked URL detection
const COMMON_TLDS = [
  'com', 'net', 'org', 'xyz', 'top', 'vip', 'cc', 'ru', 'cn', 'io', 'me', 
  'info', 'biz', 'online', 'site', 'fun', 'tg', 'link', 'app', 'dev', 'live',
  'club', 'shop', 'store', 'tech', 'space', 'pro', 'icu', 'click', 'tokyo', 'work'
];

// 2. High-Risk Spam & Scam Keywords (English & Multilingual)
const SPAM_KEYWORDS = [
  // Crypto scams & Airdrops
  'free airdrop', 'presale', 'free btc', 'free usdt', 'pump and dump', 'crypto bonus',
  'doubler', 'wallet drainer', 'seed phrase', 'meta mask private', 'guaranteed profit',
  'earn $', 'make $1000', 'passive income daily', 'earn fast cash', 'work from home profit',
  // Casino & Gambling
  'online casino', 'slot machine free', 'poker bonus', 'free spins', 'betting tips fixed',
  'roulette hack', 'baccarat strategy', 'satta matka',
  // Adult & Malicious
  'free adult', 'porn', 'xxx sex', 'onlyfans free', 'nude leak', 'viagra discount',
  'cialis online', 'warez crack', 'download free crack key', 'keygen exe',
  // Chinese Spam / Contact harvesting
  '加微信', '加v', '兼职刷单', '博彩平台', '免费领皮肤', '私聊微信', '微信号', '扣扣群'
];

// 3. Social / Chat invite patterns
const SOCIAL_INVITE_PATTERNS = [
  /t\.me\/[a-zA-Z0-9_+]+/i,
  /telegram(\s*:\s*|\s*@\s*)[a-zA-Z0-9_]+/i,
  /discord\.(gg|io|me)\/[a-zA-Z0-9]+/i,
  /discordapp\.com\/invite\/[a-zA-Z0-9]+/i,
  /wa\.me\/[0-9]+/i,
  /whatsapp(\s*:\s*|\s*\+\s*)[0-9\s-]{7,}/i,
  /bit\.ly\/[a-zA-Z0-9]+/i,
  /tinyurl\.com\/[a-zA-Z0-9]+/i,
  /cutt\.ly\/[a-zA-Z0-9]+/i,
  /is\.gd\/[a-zA-Z0-9]+/i,
];

export interface ModerationResult {
  safe: boolean;
  flagged: boolean;
  reason?: string;
  sanitizedContent: string;
}

/**
 * Strips HTML tags and malicious injection vectors from user input
 */
export function sanitizeText(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .trim();
}

/**
 * Checks comment text against URL patterns, sensitive keywords, and flood spam.
 */
export function checkCommentSafety(content: string, authorName?: string): ModerationResult {
  const cleanText = sanitizeText(content);
  const lowerText = cleanText.toLowerCase();

  // 1. Length validation
  if (cleanText.length < 2) {
    return {
      safe: false,
      flagged: true,
      reason: 'Comment is too short. Please provide meaningful feedback.',
      sanitizedContent: cleanText,
    };
  }

  if (cleanText.length > 1000) {
    return {
      safe: false,
      flagged: true,
      reason: 'Comment exceeds the maximum length of 1000 characters.',
      sanitizedContent: cleanText.slice(0, 1000),
    };
  }

  // 2. Explicit Protocol & WWW URL Check
  const urlRegex = /(https?:\/\/|ftp:\/\/|www\.)[^\s/$.?#].[^\s]*/i;
  if (urlRegex.test(cleanText)) {
    return {
      safe: false,
      flagged: true,
      reason: 'External links and web URLs are strictly prohibited to prevent spam.',
      sanitizedContent: cleanText,
    };
  }

  // 3. Social / Chat invite link check
  for (const pattern of SOCIAL_INVITE_PATTERNS) {
    if (pattern.test(cleanText)) {
      return {
        safe: false,
        flagged: true,
        reason: 'Third-party chat/messenger links (Telegram, Discord, WhatsApp) are not permitted.',
        sanitizedContent: cleanText,
      };
    }
  }

  // 4. Naked domain & Disguised URL Detection (e.g. "visit site.com" or "site dot com" or "site[dot]com")
  const disguisedDotPattern = /\b([a-zA-Z0-9-]{2,20})\s*(\.|\[dot\]|\(dot\)|\s+dot\s+)\s*([a-zA-Z]{2,10})\b/i;
  const disguisedMatch = lowerText.match(disguisedDotPattern);
  if (disguisedMatch) {
    const ext = disguisedMatch[3].toLowerCase();
    if (COMMON_TLDS.includes(ext)) {
      return {
        safe: false,
        flagged: true,
        reason: 'Disguised domain or external link pattern detected.',
        sanitizedContent: cleanText,
      };
    }
  }

  // 5. Spam / Scam Keyword Filter
  for (const keyword of SPAM_KEYWORDS) {
    if (lowerText.includes(keyword.toLowerCase())) {
      return {
        safe: false,
        flagged: true,
        reason: `Flagged for suspicious promotional or restricted phrase: "${keyword}".`,
        sanitizedContent: cleanText,
      };
    }
  }

  // 6. Excessive character repetition check (e.g. "aaaaaaaaaaa", "!!!!!!!!!!!!!!")
  if (/(.)\1{7,}/.test(cleanText)) {
    return {
      safe: false,
      flagged: true,
      reason: 'Excessive repetitive characters detected.',
      sanitizedContent: cleanText,
    };
  }

  // 7. Author name sanity check if provided
  if (authorName) {
    const cleanAuthor = sanitizeText(authorName);
    if (urlRegex.test(cleanAuthor) || /(https?|www|\.com|\.xyz)/i.test(cleanAuthor)) {
      return {
        safe: false,
        flagged: true,
        reason: 'User nickname contains promotional web addresses.',
        sanitizedContent: cleanText,
      };
    }
  }

  return {
    safe: true,
    flagged: false,
    sanitizedContent: cleanText,
  };
}
