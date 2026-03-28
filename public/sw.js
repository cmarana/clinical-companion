const CACHE_NAME = 'medcore-v4';
const STATIC_ASSETS = [
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/favicon.ico',
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
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: Network first for API/auth, Cache first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Never intercept dev-server module requests
  if (isDevAsset(url)) return;
  
  // Skip Supabase API calls (auth, realtime, etc.) - these need to be online
  if (url.hostname.includes('supabase') || url.pathname.startsWith('/auth')) {
    return;
  }
  
  // Skip Chrome extensions, analytics, etc.
  if (!url.protocol.startsWith('http')) return;
  
  // For navigation requests: Network first, fallback to cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok && isSameOrigin(url)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put('/index.html', clone);
            });
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }
  
  // For scripts/styles: prefer network to avoid stale chunks after deploys.
  if (event.request.destination === 'script' || event.request.destination === 'style') {
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

  // For fonts/images: stale-while-revalidate remains OK.
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
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
