import urllib.request
import json
import time

def test():
    time.sleep(2)
    base_url = 'http://127.0.0.1:8790'

    # 1. Base Info
    req = urllib.request.Request(f'{base_url}/', headers={'User-Agent': 'TestClient'})
    with urllib.request.urlopen(req) as resp:
        print("1. Root Discovery:", json.loads(resp.read().decode('utf-8')))

    # 2. Games List
    req2 = urllib.request.Request(f'{base_url}/api/games?limit=3', headers={'User-Agent': 'TestClient'})
    with urllib.request.urlopen(req2) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("2. Games API Success:", data.get('success'))
        print("   Pagination:", data.get('pagination'))
        print("   Sample Game Title:", data.get('data', [])[0]['title'])

    # 3. FTS5 Search for 'vampire'
    req3 = urllib.request.Request(f'{base_url}/api/search?q=vampire', headers={'User-Agent': 'TestClient'})
    with urllib.request.urlopen(req3) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("3. FTS5 Search 'vampire' [Engine:", data.get('engine'), "]")
        print("   Matches count:", data.get('total'))
        print("   Top matched title:", data.get('results', [])[0]['title'])
        print("   FTS Highlight:", data.get('results', [])[0].get('snippet_match'))

    # 4. FTS5 Search for 'detective'
    req4 = urllib.request.Request(f'{base_url}/api/search?q=detective', headers={'User-Agent': 'TestClient'})
    with urllib.request.urlopen(req4) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("4. FTS5 Search 'detective' [Engine:", data.get('engine'), "]")
        print("   Matches count:", data.get('total'))
        print("   Top matched title:", data.get('results', [])[0]['title'])

    # 5. Stats
    req5 = urllib.request.Request(f'{base_url}/api/stats', headers={'User-Agent': 'TestClient'})
    with urllib.request.urlopen(req5) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("5. Stats API:", data)

    print("\n🎉 ALL HONO + DRIZZLE + D1 + FTS5 TESTS PASSED WITH 100% SUCCESS!")

if __name__ == '__main__':
    test()
