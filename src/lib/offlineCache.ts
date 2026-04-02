/**
 * Hook to cache and retrieve content for offline access.
 * Uses the Service Worker content cache to store protocol/medication data.
 */

const isSwAvailable = () =>
  "serviceWorker" in navigator && navigator.serviceWorker.controller;

/** Save content to the offline cache */
export function cacheContent(key: string, data: unknown): void {
  if (!isSwAvailable()) return;
  navigator.serviceWorker.controller!.postMessage({
    type: "CACHE_CONTENT",
    key,
    data,
  });
}

/** Retrieve cached content (returns via message event) */
export function getCachedContent(key: string): Promise<{ data: unknown; cachedAt: string | null } | null> {
  if (!isSwAvailable()) return Promise.resolve(null);

  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(null), 2000);

    const handler = (event: MessageEvent) => {
      if (event.data?.type === "CACHED_CONTENT" && event.data.key === key) {
        clearTimeout(timeout);
        navigator.serviceWorker.removeEventListener("message", handler);
        resolve(event.data.data ? { data: event.data.data, cachedAt: event.data.cachedAt } : null);
      }
    };

    navigator.serviceWorker.addEventListener("message", handler);
    navigator.serviceWorker.controller!.postMessage({ type: "GET_CACHED_CONTENT", key });
  });
}

/** List all cached content items */
export function listCachedContent(): Promise<Array<{ key: string; cachedAt: string | null }>> {
  if (!isSwAvailable()) return Promise.resolve([]);

  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve([]), 2000);

    const handler = (event: MessageEvent) => {
      if (event.data?.type === "CACHED_CONTENT_LIST") {
        clearTimeout(timeout);
        navigator.serviceWorker.removeEventListener("message", handler);
        resolve(event.data.items || []);
      }
    };

    navigator.serviceWorker.addEventListener("message", handler);
    navigator.serviceWorker.controller!.postMessage({ type: "LIST_CACHED_CONTENT" });
  });
}

/** Clear all cached content */
export function clearContentCache(): Promise<void> {
  if (!isSwAvailable()) return Promise.resolve();

  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(), 2000);

    const handler = (event: MessageEvent) => {
      if (event.data?.type === "CONTENT_CACHE_CLEARED") {
        clearTimeout(timeout);
        navigator.serviceWorker.removeEventListener("message", handler);
        resolve();
      }
    };

    navigator.serviceWorker.addEventListener("message", handler);
    navigator.serviceWorker.controller!.postMessage({ type: "CLEAR_CONTENT_CACHE" });
  });
}
