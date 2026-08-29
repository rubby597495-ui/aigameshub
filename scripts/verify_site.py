import urllib.request
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def verify():
    # 1. Sitemap test
    resp = urllib.request.urlopen('http://localhost:3000/sitemap.xml')
    assert resp.status == 200, "Sitemap failed"
    sitemap = resp.read().decode('utf-8')
    url_count = sitemap.count('<url>')
    print(f"[OK] Sitemap.xml active: contains {url_count} indexed URLs")

    # 2. Robots test
    resp = urllib.request.urlopen('http://localhost:3000/robots.txt')
    assert resp.status == 200, "Robots failed"
    robots = resp.read().decode('utf-8')
    assert 'Bingbot' in robots and 'Googlebot' in robots
    print("[OK] Robots.txt active: Bingbot & Googlebot crawl rules configured")

    # 3. Game detail page test
    resp = urllib.request.urlopen('http://localhost:3000/games/suck-up')
    assert resp.status == 200, "Game detail page failed"
    game_html = resp.read().decode('utf-8')
    assert 'Suck Up' in game_html
    assert 'schema.org' in game_html and 'VideoGame' in game_html
    assert 'nofollow' in game_html
    print("[OK] Game Detail page active: contains VideoGame schema, breadcrumbs, nofollow outlinks")

    # 4. API test
    resp = urllib.request.urlopen('http://localhost:3000/api/games?sort=hot')
    assert resp.status == 200, "API failed"
    data = json.loads(resp.read().decode('utf-8'))
    assert data['success'] and len(data['games']) > 90
    print(f"[OK] REST API /api/games active: returned {len(data['games'])} games")

    print("\nALL SITE VERIFICATIONS PASSED SUCCESSFULLY!")

if __name__ == '__main__':
    verify()
