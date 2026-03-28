import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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

// Always clean up in preview/iframe — run BEFORE anything else
if (isPreviewHost || isInIframe) {
  cleanupServiceWorkers().catch(() => {});
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

createRoot(document.getElementById("root")!).render(<App />);
