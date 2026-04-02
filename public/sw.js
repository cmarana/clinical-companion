const CACHE_NAME = 'medcore-v6';
const CONTENT_CACHE = 'medcore-content-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

const isSameOrigin = (url) => url.origin === self.location.origin;
const isDevAsset = (url) =>
  url.pathname.startsWith('/src/') ||
  url.pathname.startsWith('/node_modules/') ||
  url.pathname.startsWith('/@vite') ||
  url.pathname.startsWith('/@react-refresh') ||
  url.pathname.includes('__x00__');

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches (preserve content cache)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== CONTENT_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Message handler
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRECACHE_ASSETS') {
    const urls = event.data.urls || [];
    event.waitUntil(
      caches.open(CACHE_NAME).then(async (cache) => {
        let cached = 0;
        for (const url of urls) {
          try {
            const existing = await cache.match(url);
            if (!existing) await cache.add(url);
            cached++;
            const clients = await self.clients.matchAll();
            clients.forEach(client => {
              client.postMessage({ type: 'PRECACHE_PROGRESS', cached, total: urls.length });
            });
          } catch (e) {
            cached++;
          }
        }
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({ type: 'PRECACHE_COMPLETE', cached, total: urls.length });
        });
      })
    );
  }

  // Cache specific content for offline access (protocols, medications)
  if (event.data && event.data.type === 'CACHE_CONTENT') {
    const { key, data } = event.data;
    event.waitUntil(
      caches.open(CONTENT_CACHE).then((cache) => {
        const response = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json', 'X-Cached-At': new Date().toISOString() }
        });
        return cache.put(`/offline-content/${key}`, response);
      })
    );
  }

  // Retrieve cached content
  if (event.data && event.data.type === 'GET_CACHED_CONTENT') {
    const { key } = event.data;
    event.waitUntil(
      caches.open(CONTENT_CACHE).then(async (cache) => {
        const response = await cache.match(`/offline-content/${key}`);
        const data = response ? await response.json() : null;
        const cachedAt = response ? response.headers.get('X-Cached-At') : null;
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({ type: 'CACHED_CONTENT', key, data, cachedAt });
        });
      })
    );
  }

  // Get content cache stats
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    event.waitUntil(
      Promise.all([
        caches.open(CACHE_NAME).then(c => c.keys()),
        caches.open(CONTENT_CACHE).then(c => c.keys()),
      ]).then(async ([staticKeys, contentKeys]) => {
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'CACHE_SIZE',
            count: staticKeys.length,
            contentCount: contentKeys.length,
          });
        });
      })
    );
  }

  // List all cached content keys
  if (event.data && event.data.type === 'LIST_CACHED_CONTENT') {
    event.waitUntil(
      caches.open(CONTENT_CACHE).then(async (cache) => {
        const keys = await cache.keys();
        const items = [];
        for (const req of keys) {
          const url = new URL(req.url);
          const key = url.pathname.replace('/offline-content/', '');
          const res = await cache.match(req);
          const cachedAt = res ? res.headers.get('X-Cached-At') : null;
          items.push({ key, cachedAt });
        }
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({ type: 'CACHED_CONTENT_LIST', items });
        });
      })
    );
  }

  // Clear content cache
  if (event.data && event.data.type === 'CLEAR_CONTENT_CACHE') {
    event.waitUntil(
      caches.delete(CONTENT_CACHE).then(async () => {
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({ type: 'CONTENT_CACHE_CLEARED' });
        });
      })
    );
  }
});

// Fetch: Network first for API/auth, Cache first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (isDevAsset(url)) return;
  if (url.pathname.startsWith('/~oauth')) return;
  if (url.hostname.includes('supabase') || url.pathname.startsWith('/auth')) return;
  if (!url.protocol.startsWith('http')) return;

  // Navigation requests: Network first, fallback to cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok && isSameOrigin(url)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put('/index.html', clone);
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // JS/CSS bundles: Network first with caching
  if (
    isSameOrigin(url) &&
    (event.request.destination === 'script' || event.request.destination === 'style' ||
     url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Fonts/images: stale-while-revalidate
  if (
    event.request.destination === 'font' ||
    event.request.destination === 'image' ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request)
          .then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Default: network first, cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && isSameOrigin(url)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// ── Push Notification Handler ──
self.addEventListener('push', (event) => {
  let data = { title: 'PULSO', body: '', url: '/', icon: '/icons/icon-192.png' };
  
  try {
    if (event.data) {
      const parsed = event.data.json();
      data = { ...data, ...parsed };
    }
  } catch (e) {
    if (event.data) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    tag: data.tag || 'pulso-notification',
    requireInteraction: true,
    data: { url: data.url || '/' },
    vibrate: [300, 100, 300],
    actions: [
      { action: 'open', title: 'Abrir' },
      { action: 'dismiss', title: 'Dispensar' },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// ── Notification Click Handler ──
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const url = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      // Focus existing window if available
      for (const client of clients) {
        if (client.url.includes(self.location.origin)) {
          client.focus();
          client.navigate(url);
          return;
        }
      }
      // Open new window
      return self.clients.openWindow(url);
    })
  );
});
