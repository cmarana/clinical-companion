import { WifiOff } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Shows a discrete "requires internet" badge when the user is offline.
 * Use on pages/features that need server connectivity.
 */
export default function OfflineBadge({ message }: { message?: string }) {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const on = () => setOffline(false);
    const off = () => setOffline(true);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="mx-4 mt-3 mb-2 flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-2.5 animate-in fade-in">
      <WifiOff size={14} className="text-amber-500 shrink-0" />
      <p className="text-[11px] text-amber-600 dark:text-amber-400 font-heading font-medium">
        {message || "Este recurso requer conexão com a internet"}
      </p>
    </div>
  );
}
