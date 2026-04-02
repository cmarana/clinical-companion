import { useState, useEffect, useCallback } from "react";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Download, CheckCircle, WifiOff, Wifi, HardDrive, RefreshCw,
  Trash2, Shield, Stethoscope, Pill, FileText, Calculator,
  AlertTriangle, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

type CacheStatus = "idle" | "downloading" | "complete" | "error";

const OFFLINE_FEATURES = [
  { icon: Shield, label: "Protocolos de Emergência", desc: "PCR, Sepse, IAM, AVC e 200+ protocolos", color: "text-destructive" },
  { icon: Stethoscope, label: "Protocolos Completos", desc: "Cardiologia, Neurologia, Pediatria e mais", color: "text-primary" },
  { icon: Pill, label: "Guia de Medicamentos", desc: "1500+ medicamentos com posologia e interações", color: "text-emerald-500" },
  { icon: FileText, label: "Gerador de Documentos", desc: "Receituários, atestados e evoluções", color: "text-amber-500" },
  { icon: Calculator, label: "Calculadoras Médicas", desc: "Glasgow, CURB-65, Wells e 30+ scores", color: "text-blue-500" },
  { icon: AlertTriangle, label: "Interações Medicamentosas", desc: "700+ pares de alto risco", color: "text-orange-500" },
];

export default function OfflineSetup() {
  const [status, setStatus] = useState<CacheStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [cachedFiles, setCachedFiles] = useState(0);
  const [cacheCount, setCacheCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swReady, setSwReady] = useState(false);

  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  // Check SW status
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setSwReady(true);
        // Ask for cache size
        navigator.serviceWorker.controller?.postMessage({ type: "GET_CACHE_SIZE" });
      });

      const handler = (event: MessageEvent) => {
        if (event.data?.type === "PRECACHE_PROGRESS") {
          setCachedFiles(event.data.cached);
          setTotalFiles(event.data.total);
          setProgress(Math.round((event.data.cached / event.data.total) * 100));
        }
        if (event.data?.type === "PRECACHE_COMPLETE") {
          setStatus("complete");
          setProgress(100);
          setCachedFiles(event.data.cached);
          toast.success("Modo offline preparado com sucesso!");
        }
        if (event.data?.type === "CACHE_SIZE") {
          setCacheCount(event.data.count);
        }
      };

      navigator.serviceWorker.addEventListener("message", handler);
      return () => navigator.serviceWorker.removeEventListener("message", handler);
    }
  }, []);

  const collectAppUrls = useCallback(async (): Promise<string[]> => {
    const urls: string[] = ["/"];

    // Get all script/link tags from the document
    document.querySelectorAll('script[src]').forEach((el) => {
      const src = (el as HTMLScriptElement).src;
      if (src && new URL(src).origin === window.location.origin) {
        urls.push(src);
      }
    });
    document.querySelectorAll('link[rel="stylesheet"][href]').forEach((el) => {
      const href = (el as HTMLLinkElement).href;
      if (href && new URL(href).origin === window.location.origin) {
        urls.push(href);
      }
    });

    // Pre-navigate critical routes to trigger lazy chunk loading, then cache
    const criticalRoutes = [
      "/protocolos", "/emergencia", "/medicamentos", "/prescricoes",
      "/calculadoras", "/interacoes", "/documentos", "/bulario",
      "/protocolos-completos", "/pediatria", "/obstetricia",
      "/compatibilidade-ev", "/diluicoes-ev", "/lab-reference",
      "/atlas-clinico", "/flashcards", "/guia-antimicrobianos",
      "/procedimentos", "/cid", "/checklists", "/evolucoes",
    ];

    for (const route of criticalRoutes) {
      urls.push(route);
    }

    // Get all performance entries for JS/CSS already loaded
    if ("performance" in window) {
      const entries = performance.getEntriesByType("resource");
      for (const entry of entries) {
        const url = (entry as PerformanceResourceTiming).name;
        if (
          url.startsWith(window.location.origin) &&
          (url.endsWith(".js") || url.endsWith(".css") || url.endsWith(".woff2"))
        ) {
          urls.push(url);
        }
      }
    }

    // Deduplicate
    return [...new Set(urls)];
  }, []);

  const startDownload = async () => {
    if (!swReady || !navigator.serviceWorker.controller) {
      toast.error("Service Worker não está ativo. Instale o app primeiro.");
      return;
    }

    if (!isOnline) {
      toast.error("Conecte-se à internet para baixar os dados offline.");
      return;
    }

    setStatus("downloading");
    setProgress(0);

    try {
      const urls = await collectAppUrls();
      setTotalFiles(urls.length);

      navigator.serviceWorker.controller.postMessage({
        type: "PRECACHE_ASSETS",
        urls,
      });
    } catch (e) {
      setStatus("error");
      toast.error("Erro ao preparar download offline.");
    }
  };

  const clearCache = async () => {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      setCacheCount(0);
      setStatus("idle");
      setProgress(0);
      toast.success("Cache limpo com sucesso.");
    }
  };

  const isInPreview =
    typeof window !== "undefined" &&
    (window.location.hostname.includes("id-preview--") ||
      window.location.hostname.includes("lovableproject.com"));

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar title="Modo Offline" showBack />

      <div className="px-4 pt-3 max-w-lg mx-auto space-y-3">
        {/* Status Card */}
        <div className="bg-card rounded-[20px] shadow-sm overflow-hidden">
          <div className={cn(
            "px-4 py-4 flex items-center gap-3",
            isOnline ? "bg-emerald-500/10" : "bg-amber-500/10"
          )}>
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center",
              isOnline ? "bg-emerald-500/20" : "bg-amber-500/20"
            )}>
              {isOnline ? (
                <Wifi size={20} className="text-emerald-500" />
              ) : (
                <WifiOff size={20} className="text-amber-500" />
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-bold text-sm">
                {isOnline ? "Conectado" : "Modo Offline Ativo"}
              </h2>
              <p className="text-[11px] text-muted-foreground">
                {isOnline
                  ? "Prepare o app para uso offline em plantões"
                  : "Usando dados salvos localmente"}
              </p>
            </div>
            <Badge
              variant={status === "complete" ? "default" : "outline"}
              className={cn("text-[10px]", status === "complete" && "bg-emerald-500 text-white")}
            >
              {status === "complete" ? "Pronto" : status === "downloading" ? "Baixando..." : "Pendente"}
            </Badge>
          </div>

          {/* Progress */}
          {status === "downloading" && (
            <div className="px-4 py-3 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Loader2 size={12} className="animate-spin" />
                  Baixando recursos...
                </span>
                <span className="font-heading font-semibold">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-[10px] text-muted-foreground">
                {cachedFiles} de {totalFiles} arquivos salvos
              </p>
            </div>
          )}

          {status === "complete" && (
            <div className="px-4 py-3 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle size={16} />
              <p className="text-[12px] font-heading font-semibold">
                App pronto para uso offline!
              </p>
            </div>
          )}

          {/* Cache info */}
          <div className="px-4 py-3 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HardDrive size={14} />
              <span className="text-[11px]">{cacheCount} recursos em cache</span>
            </div>
            <div className="flex gap-2">
              {cacheCount > 0 && (
                <button
                  onClick={clearCache}
                  className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Preview warning */}
        {isInPreview && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-[20px] p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] font-heading font-semibold text-amber-600 dark:text-amber-400">
                  Ambiente de Preview
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  O modo offline funciona apenas no app publicado ou instalado. No preview, o Service Worker é desativado.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Download button */}
        <Button
          onClick={startDownload}
          disabled={status === "downloading" || isInPreview || !swReady}
          className="w-full h-12 rounded-[20px] gap-2 text-sm font-heading"
          size="lg"
        >
          {status === "downloading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Baixando...
            </>
          ) : status === "complete" ? (
            <>
              <RefreshCw size={18} />
              Atualizar Cache Offline
            </>
          ) : (
            <>
              <Download size={18} />
              Preparar Modo Offline
            </>
          )}
        </Button>

        {/* Features list */}
        <div className="bg-card rounded-[20px] shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <WifiOff size={14} className="text-muted-foreground" />
            Disponível Offline
          </h3>
          <div className="space-y-2">
            {OFFLINE_FEATURES.map((feat) => (
              <div
                key={feat.label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-muted/40"
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center bg-muted/60",
                  feat.color
                )}>
                  <feat.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-heading font-semibold">{feat.label}</p>
                  <p className="text-[10px] text-muted-foreground">{feat.desc}</p>
                </div>
                <CheckCircle size={14} className="text-emerald-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-card rounded-[20px] shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-3">💡 Dicas para Plantão</h3>
          <div className="space-y-2 text-[11px] text-muted-foreground">
            <p>• <strong>Instale o app</strong> na tela inicial para acesso rápido</p>
            <p>• <strong>Prepare offline</strong> antes do plantão com Wi-Fi</p>
            <p>• <strong>Protocolos e medicamentos</strong> ficam 100% acessíveis sem internet</p>
            <p>• <strong>IA Clínica e Bulário online</strong> precisam de conexão</p>
            <p>• <strong>Atualize periodicamente</strong> para receber novos protocolos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
