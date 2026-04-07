import { useState, useEffect } from "react";
import { Download, X, Wifi, WifiOff, Share, MoreVertical, Monitor, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safeSessionStorage } from "@/lib/safeStorage";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const isIOS = () => {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream;
};

const isInStandaloneMode = () => {
  return ('standalone' in window.navigator && (window.navigator as any).standalone) ||
    window.matchMedia('(display-mode: standalone)').matches;
};

const isMobile = () => {
  return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent);
};

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(() => safeSessionStorage.getItem("pwa-dismissed-v2") === "1");

  useEffect(() => {
    if (isInStandaloneMode()) return;
    
    if (isIOS()) {
      // Show iOS prompt after a short delay
      const timer = setTimeout(() => setShowIOSPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
    
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (dismissed || isInStandaloneMode()) return null;
  if (!deferredPrompt && !showIOSPrompt) return null;

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setDeferredPrompt(null);
  };

  const dismiss = () => {
    setDismissed(true);
    safeSessionStorage.setItem("pwa-dismissed-v2", "1");
  };

  // iOS manual instructions
  if (showIOSPrompt && !deferredPrompt) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md rounded-xl border border-border bg-card p-4 shadow-lg animate-in slide-in-from-bottom-4 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
        <button onClick={dismiss} className="absolute right-2 top-2 text-muted-foreground"><X className="h-4 w-4" /></button>
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 shrink-0"><Download className="h-5 w-5 text-primary" /></div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Instale o PULSO no seu celular</p>
            <div className="mt-2 space-y-1.5">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">1</span>
                Toque em <Share className="h-3.5 w-3.5 text-primary inline" /> <span className="font-medium text-foreground">Compartilhar</span>
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">2</span>
                Role e toque em <span className="font-medium text-foreground">"Adicionar à Tela de Início"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop banner
  if (!isMobile()) {
    return (
      <div className="fixed bottom-6 right-6 z-50 w-[420px] rounded-2xl border border-border bg-card p-5 shadow-2xl animate-in slide-in-from-bottom-4 fade-in">
        <button onClick={dismiss} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"><X className="h-4 w-4" /></button>
        <div className="flex items-center gap-2 mb-3">
          <div className="rounded-xl bg-primary/10 p-2.5"><Monitor className="h-6 w-6 text-primary" /></div>
          <div>
            <p className="text-base font-semibold text-foreground">Instale o PULSO no seu computador</p>
            <p className="text-xs text-muted-foreground">Acesse como um app nativo, sem abrir o navegador</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="flex flex-col items-center gap-1.5 rounded-lg bg-muted/50 p-2.5">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-[10px] text-muted-foreground text-center">Acesso rápido</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-lg bg-muted/50 p-2.5">
            <Download className="h-4 w-4 text-primary" />
            <span className="text-[10px] text-muted-foreground text-center">Funciona offline</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-lg bg-muted/50 p-2.5">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-[10px] text-muted-foreground text-center">Sempre atualizado</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={dismiss}>Agora não</Button>
          <Button size="sm" className="flex-1" onClick={install}>
            <Download className="h-4 w-4 mr-1.5" />
            Instalar app
          </Button>
        </div>
      </div>
    );
  }

  // Mobile Android / Chrome native install prompt
  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md rounded-xl border border-border bg-card p-4 shadow-lg animate-in slide-in-from-bottom-4 md:bottom-6 md:left-auto md:right-6">
      <button onClick={dismiss} className="absolute right-2 top-2 text-muted-foreground"><X className="h-4 w-4" /></button>
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2"><Download className="h-5 w-5 text-primary" /></div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Instalar PULSO</p>
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
