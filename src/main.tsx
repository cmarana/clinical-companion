import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const cleanupServiceWorkers = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((registration) => registration.unregister()));

  if ("caches" in window) {
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys.map((cacheKey) => caches.delete(cacheKey)));
  }
};

// Register Service Worker only in production to avoid stale dev bundles/white screens.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
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
