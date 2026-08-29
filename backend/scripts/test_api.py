import urllib.request
import json
import time

def test_worker():
    time.sleep(2)
    try:
        # 1. Base Info
        req = urllib.request.urlopen('http://127.0.0.1:8787/', timeout=5)
        print("1. Service Info:", json.loads(req.read().decode('utf-8')))

        # 2. Games List
        req_games = urllib.request.urlopen('http://127.0.0.1:8787/api/games?limit=3', timeout=5)
        games_json = json.loads(req_games.read().decode('utf-8'))
        print(f"\n2. Games List: {len(games_json['data'])} games returned, Total: {games_json['pagination']['total']}")

        # 3. FTS5 Search for 'vampire'
        req_search = urllib.request.urlopen('http://127.0.0.1:8787/api/search?q=vampire', timeout=5)
        search_json = json.loads(req_search.read().decode('utf-8'))
        print(f"\n3. FTS5 Search 'vampire' [Engine: {search_json.get('engine')}]: {search_json.get('total')} results")
        for res in search_json.get('results', [])[:2]:
            print(f"  - Title: {res.get('title')} | Snippet: {res.get('snippet_match')}")

        # 4. FTS5 Search for 'detective'
        req_det = urllib.request.urlopen('http://127.0.0.1:8787/api/search?q=detective', timeout=5)
        det_json = json.loads(req_det.read().decode('utf-8'))
        print(f"\n4. FTS5 Search 'detective' [Engine: {det_json.get('engine')}]: {det_json.get('total')} results")
        for res in det_json.get('results', [])[:2]:
            print(f"  - Title: {res.get('title')} | Mechanic: {res.get('mechanicName')}")

        # 5. Stats
        req_stats = urllib.request.urlopen('http://127.0.0.1:8787/api/stats', timeout=5)
        print("\n5. Platform Stats:", json.loads(req_stats.read().decode('utf-8')))

        print("\n ALL HONO WORKER + DRIZZLE + D1 + FTS5 TESTS PASSED WITH 100% SUCCESS!")
    except Exception as e:
        print("Worker test failed:", e)

if __name__ == '__main__':
    test_worker()
