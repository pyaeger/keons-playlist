/* Keon's Playlist - service worker
   Gives the home-screen app genuine offline access after the first online load.
   Strategy: network-first for the page (so updates land), cache-first for everything
   else (fonts, etc.), with a cached fallback when there's no connection. */

const CACHE = 'keons-playlist-v3';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // The page itself: try network, fall back to the cached copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match('./')))
    );
    return;
  }

  // Everything else: serve from cache if we have it, otherwise fetch and cache it.
  e.respondWith(
    caches.match(req).then((m) =>
      m ||
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => m)
    )
  );
});
