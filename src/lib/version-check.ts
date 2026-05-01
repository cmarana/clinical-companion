// Runtime build-version checker.
// Compares the BUILD_ID baked into the current bundle against the live
// /version.json on the server. When they differ, the user is on a stale
// build — we purge caches, unregister the SW, and reload to the new one.

export const CURRENT_BUILD_ID = (import.meta.env.VITE_BUILD_ID as string | undefined) || "dev";
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 min
const MIN_RECHECK_MS = 30 * 1000;        // never thrash faster than 30s

let lastCheck = 0;
let lastCheckResult: "ok" | "update" | "error" | "idle" = "idle";
let lastRemoteBuild: string | null = null;
let reloading = false;

export interface VersionStatus {
  currentBuild: string;
  lastCheckAt: number | null;
  lastResult: "ok" | "update" | "error" | "idle";
  lastRemoteBuild: string | null;
  isDev: boolean;
}

export function getVersionStatus(): VersionStatus {
  return {
    currentBuild: CURRENT_BUILD_ID,
    lastCheckAt: lastCheck || null,
    lastResult: lastCheckResult,
    lastRemoteBuild,
    isDev: CURRENT_BUILD_ID === "dev",
  };
}

export async function fetchRemoteVersion(): Promise<{ buildId: string; builtAt?: string } | null> {
  try {
    const res = await fetch(`/version.json?_=${Date.now()}`, {
      cache: "no-store",
      credentials: "omit",
    });
    if (!res.ok) return null;
    return (await res.json()) as { buildId: string; builtAt?: string };
  } catch {
    return null;
  }
}

// ── Telemetry ────────────────────────────────────────────────────────────
// Emits structured events to Google Analytics (gtag, already loaded in
// index.html) and mirrors them to console so they're visible in production
// devtools and remote debugging sessions.
type VersionEvent =
  | "version_check_started"
  | "version_check_failed"
  | "version_check_ok"
  | "build_update_detected"
  | "update_prompt_shown"
  | "update_prompt_accepted"
  | "update_prompt_dismissed"
  | "cache_purge_started"
  | "cache_purge_completed"
  | "cache_purge_failed"
  | "sw_unregistered"
  | "version_reload_triggered";

function track(event: VersionEvent, params: Record<string, unknown> = {}) {
  const payload = {
    current_build: CURRENT_BUILD_ID,
    ts: new Date().toISOString(),
    ...params,
  };
  try {
    // eslint-disable-next-line no-console
    console.info(`[pulso:version] ${event}`, payload);
  } catch { /* noop */ }
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", event, { event_category: "build_version", ...payload });
  } catch { /* gtag may be blocked */ }
}

async function fetchRemoteBuildId(): Promise<string | null> {
  try {
    const res = await fetch(`/version.json?_=${Date.now()}`, {
      cache: "no-store",
      credentials: "omit",
    });
    if (!res.ok) {
      track("version_check_failed", { reason: "http", status: res.status });
      return null;
    }
    const data = (await res.json()) as { buildId?: string };
    return data.buildId ?? null;
  } catch (err) {
    track("version_check_failed", {
      reason: "network",
      message: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}

// Event dispatched on the window when a new build is detected. The UI layer
// (UpdatePromptDialog) listens for this and renders a confirmation modal.
// detail.confirm() runs the purge + reload only after user accepts.
export const BUILD_UPDATE_EVENT = "pulso:build-update-available";

export interface BuildUpdateEventDetail {
  currentBuild: string;
  remoteBuild: string;
  confirm: () => Promise<void>;
  dismiss: () => void;
}

let pendingRemoteBuild: string | null = null;

async function purgeAndReload(remoteBuildId: string) {
  if (reloading) return;
  reloading = true;

  track("cache_purge_started", { remote_build: remoteBuildId });
  let cachesCleared = 0;
  let swsUnregistered = 0;

  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      const results = await Promise.all(keys.map((k) => caches.delete(k).catch(() => false)));
      cachesCleared = results.filter(Boolean).length;
    }
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      const results = await Promise.all(
        regs.map(async (r) => {
          try {
            r.waiting?.postMessage({ type: "SKIP_WAITING" });
            const ok = await r.unregister();
            if (ok) track("sw_unregistered", { scope: r.scope });
            return ok;
          } catch {
            return false;
          }
        })
      );
      swsUnregistered = results.filter(Boolean).length;
    }
    track("cache_purge_completed", {
      remote_build: remoteBuildId,
      caches_cleared: cachesCleared,
      sws_unregistered: swsUnregistered,
    });
  } catch (err) {
    track("cache_purge_failed", {
      remote_build: remoteBuildId,
      message: err instanceof Error ? err.message : String(err),
    });
  }

  const url = new URL(window.location.href);
  url.searchParams.set("v", Date.now().toString());
  track("version_reload_triggered", { remote_build: remoteBuildId, url: url.pathname });
  window.location.replace(url.toString());
}

function promptUserForUpdate(remoteBuildId: string, trigger: string) {
  // De-dup: if we already prompted for this exact build, don't spam.
  if (pendingRemoteBuild === remoteBuildId) return;
  pendingRemoteBuild = remoteBuildId;

  let settled = false;
  const detail: BuildUpdateEventDetail = {
    currentBuild: CURRENT_BUILD_ID,
    remoteBuild: remoteBuildId,
    confirm: async () => {
      if (settled) return;
      settled = true;
      track("update_prompt_accepted", { remote_build: remoteBuildId, trigger });
      await purgeAndReload(remoteBuildId);
    },
    dismiss: () => {
      if (settled) return;
      settled = true;
      track("update_prompt_dismissed", { remote_build: remoteBuildId, trigger });
      // Allow the prompt to reappear later (e.g. on next interval check)
      pendingRemoteBuild = null;
    },
  };

  track("update_prompt_shown", { remote_build: remoteBuildId, trigger });
  window.dispatchEvent(new CustomEvent<BuildUpdateEventDetail>(BUILD_UPDATE_EVENT, { detail }));
}

export async function checkBuildVersion(trigger: string = "manual", force = false): Promise<VersionStatus> {
  const now = Date.now();
  if (!force && now - lastCheck < MIN_RECHECK_MS) return getVersionStatus();
  lastCheck = now;

  track("version_check_started", { trigger });
  const remote = await fetchRemoteBuildId();
  if (!remote) {
    lastCheckResult = "error";
    return getVersionStatus();
  }
  lastRemoteBuild = remote;
  if (CURRENT_BUILD_ID === "dev") {
    lastCheckResult = "ok";
    return getVersionStatus();
  }

  if (remote !== CURRENT_BUILD_ID) {
    lastCheckResult = "update";
    track("build_update_detected", { remote_build: remote, trigger });
    promptUserForUpdate(remote, trigger);
  } else {
    lastCheckResult = "ok";
    track("version_check_ok", { remote_build: remote });
  }
  return getVersionStatus();
}

export function startVersionWatcher() {
  if (typeof window === "undefined") return;
  if (!import.meta.env.PROD) return;

  setTimeout(() => void checkBuildVersion("initial"), 4000);
  setInterval(() => void checkBuildVersion("interval"), CHECK_INTERVAL_MS);

  window.addEventListener("focus", () => void checkBuildVersion("focus"));
  window.addEventListener("online", () => void checkBuildVersion("online"));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") void checkBuildVersion("visibilitychange");
  });
}
