// Runtime build-version checker.
// Compares the BUILD_ID baked into the current bundle against the live
// /version.json on the server. When they differ, the user is on a stale
// build — we purge caches, unregister the SW, and reload to the new one.

const CURRENT_BUILD_ID = (import.meta.env.VITE_BUILD_ID as string | undefined) || "dev";
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 min
const MIN_RECHECK_MS = 30 * 1000;        // never thrash faster than 30s

let lastCheck = 0;
let reloading = false;

async function fetchRemoteBuildId(): Promise<string | null> {
  try {
    const res = await fetch(`/version.json?_=${Date.now()}`, {
      cache: "no-store",
      credentials: "omit",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { buildId?: string };
    return data.buildId ?? null;
  } catch {
    return null;
  }
}

async function purgeAndReload() {
  if (reloading) return;
  reloading = true;
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        regs.map(async (r) => {
          // Tell waiting SW (if any) to activate, then drop the registration
          r.waiting?.postMessage({ type: "SKIP_WAITING" });
          await r.unregister();
        })
      );
    }
  } catch {
    /* best effort */
  }
  // Cache-bust the navigation so the browser fetches fresh HTML
  const url = new URL(window.location.href);
  url.searchParams.set("v", Date.now().toString());
  window.location.replace(url.toString());
}

export async function checkBuildVersion(): Promise<void> {
  const now = Date.now();
  if (now - lastCheck < MIN_RECHECK_MS) return;
  lastCheck = now;

  const remote = await fetchRemoteBuildId();
  if (!remote) return;
  if (CURRENT_BUILD_ID === "dev") return; // never reload in dev
  if (remote !== CURRENT_BUILD_ID) {
    await purgeAndReload();
  }
}

export function startVersionWatcher() {
  if (typeof window === "undefined") return;
  if (!import.meta.env.PROD) return;

  // Initial check shortly after load
  setTimeout(() => void checkBuildVersion(), 4000);

  // Periodic check
  setInterval(() => void checkBuildVersion(), CHECK_INTERVAL_MS);

  // Recheck when the tab regains focus / connectivity
  window.addEventListener("focus", () => void checkBuildVersion());
  window.addEventListener("online", () => void checkBuildVersion());
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") void checkBuildVersion();
  });
}
