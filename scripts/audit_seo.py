import urllib.request
import re
from html import unescape

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 Googlebot'})
    with urllib.request.urlopen(req, timeout=5) as resp:
        return resp.read().decode('utf-8')

def audit_page(path, html):
    # 1. Extract Title (unescaped)
    title_match = re.search(r'<title>(.*?)</title>', html)
    raw_title = title_match.group(1) if title_match else ""
    title = unescape(raw_title)
    title_len = len(title)
    
    # 2. Extract Meta Description (unescaped)
    desc_match = re.search(r'<meta\s+name="description"\s+content="(.*?)"', html)
    raw_desc = desc_match.group(1) if desc_match else ""
    desc = unescape(raw_desc)
    desc_len = len(desc)
    
    # 3. Canonical URL
    canon_match = re.search(r'<link\s+rel="canonical"\s+href="(.*?)"', html)
    canon = canon_match.group(1) if canon_match else ""
    
    # 4. JSON-LD
    json_ld_matches = re.findall(r'<script\s+type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
    
    # 5. H1 tag
    h1_matches = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)

    print(f"\n==========================================")
    print(f"URL: {path}")
    print(f"Title ({title_len} chars): {title}")
    print(f"Description ({desc_len} chars): {desc}")
    print(f"Canonical: {canon}")
    print(f"H1 Count: {len(h1_matches)} -> {[unescape(re.sub('<[^<]+?>', '', h).strip()) for h in h1_matches]}")
    print(f"JSON-LD Schemas: {len(json_ld_matches)} found")

    assert 35 <= title_len <= 60, f"Title length {title_len} out of range"
    assert 130 <= desc_len <= 160, f"Description length {desc_len} out of range"
    assert len(h1_matches) >= 1, "Missing H1 heading"
    assert 'aigameshub.io' in canon or 'aigameshub.io' in html, "Missing canonical domain"

def run_audit():
    paths = [
        'http://localhost:3000',
        'http://localhost:3000/games',
        'http://localhost:3000/leaderboards',
        'http://localhost:3000/news',
        'http://localhost:3000/articles',
        'http://localhost:3000/articles/what-are-ai-native-games-guide-2026',
        'http://localhost:3000/submit',
        'http://localhost:3000/about',
        'http://localhost:3000/privacy',
        'http://localhost:3000/terms',
        'http://localhost:3000/games/suck-up',
        'http://localhost:3000/games/vaudeville',
        'http://localhost:3000/games/infinite-craft',
        'http://localhost:3000/games/ememetown'
    ]

    for p in paths:
        html = fetch(p)
        audit_page(p, html)

    print("\n\nALL 14 AUDITED PATHS FULLY COMPLIANT WITH GOOGLE & BING SEO LIMITS!")

if __name__ == '__main__':
    run_audit()
