import { createRoot } from "react-dom/client";
import "./index.css";
import { startVersionWatcher } from "./lib/version-check";
import { configureNativeStatusBar } from "./lib/native-statusbar";

// Shim storage ASAP — before ANY other module touches localStorage
const createMemStore = (): Storage => {
  const m = new Map<string, string>();
  return {
    get length() { return m.size; },
    clear() { m.clear(); },
    getItem(k: string) { return m.get(k) ?? null; },
    key(i: number) { return [...m.keys()][i] ?? null; },
    removeItem(k: string) { m.delete(k); },
    setItem(k: string, v: string) { m.set(k, v); },
  };
};

const shimStorage = (kind: "localStorage" | "sessionStorage") => {
  try {
    const s = window[kind];
    const p = "__probe__";
    s.setItem(p, "1");
    s.removeItem(p);
  } catch {
    try {
      Object.defineProperty(window, kind, {
        configurable: true, enumerable: true, value: createMemStore(),
      });
    } catch { /* best effort */ }
  }
};
shimStorage("localStorage");
shimStorage("sessionStorage");

const isInIframe = (() => {
  try { return window.self !== window.top; } catch { return true; }
})();

const isPreviewHost =
  window.location.hostname.includes("id-preview--") ||
  window.location.hostname.includes("lovableproject.com");

const cleanupServiceWorkers = async () => {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((r) => r.unregister()));
  }
  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
  }
};

const previewCleanupPromise = (isPreviewHost || isInIframe)
  ? cleanupServiceWorkers().catch(() => {})
  : Promise.resolve();

const recoverFromModuleLoadFailure = async (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  const isModuleLoadFailure = /Importing a module script failed|Failed to fetch dynamically imported module|error loading dynamically imported module/i.test(message);
  if (!isModuleLoadFailure) return false;

  const marker = "pulso-module-reload-attempted";
  if (sessionStorage.getItem(marker) === "1") return false;
  sessionStorage.setItem(marker, "1");

  await cleanupServiceWorkers().catch(() => {});
  const url = new URL(window.location.href);
  url.searchParams.set("v", Date.now().toString());
  window.location.replace(url.toString());
  return true;
};

if (typeof window !== "undefined" && window.location.pathname === "/index") {
  window.history.replaceState({}, "", `/${window.location.search}${window.location.hash}`);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    if (isPreviewHost || isInIframe) return;

    if (import.meta.env.PROD) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("SW registered:", reg.scope);
          // Hourly SW update probe
          setInterval(() => reg.update(), 60 * 60 * 1000);

          // When a new SW is installed and waiting, activate it immediately
          reg.addEventListener("updatefound", () => {
            const sw = reg.installing;
            if (!sw) return;
            sw.addEventListener("statechange", () => {
              if (sw.state === "installed" && navigator.serviceWorker.controller) {
                reg.waiting?.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
        })
        .catch((err) => console.log("SW registration failed:", err));

      // Reload exactly once when a new SW takes control
      let reloadedForSW = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (reloadedForSW) return;
        reloadedForSW = true;
        window.location.reload();
      });

      // Start polling /version.json so stale clients self-heal
      startVersionWatcher();
      return;
    }

    cleanupServiceWorkers().catch((err) => {
      console.warn("SW cleanup failed:", err);
    });
  });
}

const bootstrap = async () => {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;

  // Configure native status bar (no-op on web/PWA)
  void configureNativeStatusBar();

  try {
    await previewCleanupPromise;
    const { default: App } = await import("./App.tsx");
    createRoot(rootEl).render(<App />);
    sessionStorage.removeItem("pulso-module-reload-attempted");
    // Signal to the inline pre-React version probe that React is alive,
    // so it defers stale-build handling to the in-app confirmation modal.
    (window as unknown as { __pulsoReactMounted?: boolean }).__pulsoReactMounted = true;
  } catch (e) {
    if (await recoverFromModuleLoadFailure(e)) return;
    rootEl.innerHTML = '<div style="color:red;padding:20px">Erro ao carregar: ' + String(e) + '</div>';
  }
};

void bootstrap();
