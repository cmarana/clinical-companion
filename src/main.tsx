import { createRoot } from "react-dom/client";
import "./index.css";

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

// Always clean up in preview/iframe — run BEFORE anything else
if (isPreviewHost || isInIframe) {
  cleanupServiceWorkers().catch(() => {});
}

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
          setInterval(() => reg.update(), 60 * 60 * 1000);
        })
        .catch((err) => console.log("SW registration failed:", err));
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

  try {
    const { default: App } = await import("./App.tsx");
    createRoot(rootEl).render(<App />);
  } catch (e) {
    rootEl.innerHTML = '<div style="color:red;padding:20px">Erro ao carregar: ' + String(e) + '</div>';
  }
};

void bootstrap();
