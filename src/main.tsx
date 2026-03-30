import { createRoot } from "react-dom/client";
import "./index.css";
import { installStorageFallbacks } from "@/lib/safeStorage";

const isInIframe = (() => {
  try { return window.self !== window.top; } catch { return true; }
})();

const isPreviewHost =
  window.location.hostname.includes("id-preview--") ||
  window.location.hostname.includes("lovableproject.com");

installStorageFallbacks();

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
