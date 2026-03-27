import { useState, useEffect } from "react";
import { Download, X, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem("pwa-dismissed") === "1");

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!deferredPrompt || dismissed) return null;

  const install = async () => {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setDeferredPrompt(null);
  };

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("pwa-dismissed", "1");
  };

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md rounded-xl border border-border bg-card p-4 shadow-lg animate-in slide-in-from-bottom-4">
      <button onClick={dismiss} className="absolute right-2 top-2 text-muted-foreground"><X className="h-4 w-4" /></button>
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2"><Download className="h-5 w-5 text-primary" /></div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Instalar Manual de Plantão</p>
          <p className="text-xs text-muted-foreground">Use offline, direto da tela inicial</p>
        </div>
        <Button size="sm" onClick={install}>Instalar</Button>
      </div>
    </div>
  );
}

export function OfflineIndicator() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);

  if (online) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-2 bg-destructive py-1.5 text-destructive-foreground text-xs font-medium">
      <WifiOff className="h-3.5 w-3.5" />
      Modo Offline — dados em cache
    </div>
  );
}
