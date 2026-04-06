import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Download, CheckCircle, WifiOff, Wifi, HardDrive, RefreshCw,
  Trash2, Shield, Stethoscope, Pill, FileText, Calculator,
  AlertTriangle, Loader2, BookOpen, ChevronRight, Clock,
  Zap, ClipboardList, Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { listCachedContent, clearContentCache } from "@/lib/offlineCache";

type CacheStatus = "idle" | "downloading" | "complete" | "error";

const OFFLINE_FEATURES = [
  { icon: Shield, label: "Protocolos de Emergência", desc: "PCR, Sepse, IAM, AVC e 200+ protocolos", color: "text-destructive", available: true },
  { icon: BookOpen, label: "Protocolos Completos", desc: "950+ protocolos em 26 especialidades", color: "text-primary", available: true },
  { icon: Pill, label: "Guia de Medicamentos", desc: "1500+ fármacos com posologia", color: "text-emerald-500", available: true },
  { icon: ClipboardList, label: "Prescrições", desc: "1200+ modelos prontos", color: "text-amber-500", available: true },
  { icon: Calculator, label: "Calculadoras Médicas", desc: "53 scores e calculadoras", color: "text-blue-500", available: true },
  { icon: AlertTriangle, label: "Interações", desc: "700+ pares de alto risco", color: "text-orange-500", available: true },
];

const ONLINE_ONLY = [
  { label: "IA Clínica", desc: "Requer conexão para análise" },
  { label: "Bulário Online", desc: "Busca no banco de dados" },
  { label: "Sincronização", desc: "Favoritos, notas e progresso" },
];

interface CachedItem {
  key: string;
  cachedAt: string | null;
  title?: string;
  type?: string;
}

function getItemMeta(item: CachedItem) {
  const [type, id] = item.key.split(":");
  const title = item.title || id || item.key;
  
  const typeMap: Record<string, { label: string; icon: typeof Shield; color: string; route: string }> = {
    fullProtocol: { label: "Protocolo Completo", icon: BookOpen, color: "text-primary", route: `/full-protocols/${id}` },
    protocol: { label: "Protocolo Rápido", icon: Stethoscope, color: "text-primary", route: `/protocols/${id}` },
    emergency: { label: "Emergência", icon: Shield, color: "text-destructive", route: `/emergency/${id}` },
    medication: { label: "Medicamento", icon: Pill, color: "text-emerald-500", route: `/bulario/${id}` },
    prescription: { label: "Prescrição", icon: ClipboardList, color: "text-amber-500", route: `/prescriptions/${id}` },
  };

  const meta = typeMap[type] || { label: "Conteúdo", icon: FileText, color: "text-muted-foreground", route: "/" };
  return { ...meta, title, type: type || "unknown", id: id || "" };
}

export default function OfflineSetup() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<CacheStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [cachedFiles, setCachedFiles] = useState(0);
  const [cacheCount, setCacheCount] = useState(0);
  const [contentItems, setContentItems] = useState<CachedItem[]>([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swReady, setSwReady] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedType, setExpandedType] = useState<string | null>(null);

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

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setSwReady(true);
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
          toast.success("Modo offline preparado!");
        }
        if (event.data?.type === "CACHE_SIZE") {
          setCacheCount(event.data.count);
        }
      };

      navigator.serviceWorker.addEventListener("message", handler);
      listCachedContent().then(setContentItems);

      return () => navigator.serviceWorker.removeEventListener("message", handler);
    }
  }, []);

  const collectAppUrls = useCallback(async (): Promise<string[]> => {
    const urls: string[] = ["/"];
    document.querySelectorAll('script[src]').forEach((el) => {
      const src = (el as HTMLScriptElement).src;
      if (src && new URL(src).origin === window.location.origin) urls.push(src);
    });
    document.querySelectorAll('link[rel="stylesheet"][href]').forEach((el) => {
      const href = (el as HTMLLinkElement).href;
      if (href && new URL(href).origin === window.location.origin) urls.push(href);
    });
    if ("performance" in window) {
      for (const entry of performance.getEntriesByType("resource")) {
        const url = (entry as PerformanceResourceTiming).name;
        if (url.startsWith(window.location.origin) && (url.endsWith(".js") || url.endsWith(".css") || url.endsWith(".woff2"))) {
          urls.push(url);
        }
      }
    }
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
      navigator.serviceWorker.controller.postMessage({ type: "PRECACHE_ASSETS", urls });
    } catch {
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
      toast.success("Cache limpo.");
    }
  };

  const isInPreview = typeof window !== "undefined" &&
    (window.location.hostname.includes("id-preview--") || window.location.hostname.includes("lovableproject.com"));

  // Group content items by type
  const grouped = contentItems.reduce<Record<string, CachedItem[]>>((acc, item) => {
    const meta = getItemMeta(item);
    if (!acc[meta.type]) acc[meta.type] = [];
    acc[meta.type].push(item);
    return acc;
  }, {});

  const filteredGrouped: Record<string, CachedItem[]> = searchTerm
    ? Object.fromEntries(
        Object.entries(grouped).map(([type, items]) => [
          type,
          items.filter(i => {
            const meta = getItemMeta(i);
            return meta.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
        ]).filter(([, items]) => items.length > 0)
      )
    : grouped;

  const totalSaved = contentItems.length;

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar title="Modo Offline" showBack />

      <div className="px-4 pt-3 max-w-lg mx-auto space-y-3">
        {/* Connection Status */}
        <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
          <div className={cn("px-4 py-4 flex items-center gap-3", isOnline ? "bg-emerald-500/10" : "bg-amber-500/10")}>
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", isOnline ? "bg-emerald-500/20" : "bg-amber-500/20")}>
              {isOnline ? <Wifi size={20} className="text-emerald-500" /> : <WifiOff size={20} className="text-amber-500" />}
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-bold text-sm">{isOnline ? "Conectado" : "Sem Internet"}</h2>
              <p className="text-[11px] text-muted-foreground">
                {isOnline
                  ? `${totalSaved} conteúdos salvos para uso offline`
                  : "Usando dados salvos localmente"}
              </p>
            </div>
            <Badge variant={totalSaved > 0 ? "default" : "outline"} className={cn("text-[10px]", totalSaved > 0 && "bg-emerald-500 text-white")}>
              {totalSaved > 0 ? `${totalSaved} salvos` : "Vazio"}
            </Badge>
          </div>

          {/* Download progress */}
          {status === "downloading" && (
            <div className="px-4 py-3 space-y-2 border-t border-border/50">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground flex items-center gap-1"><Loader2 size={12} className="animate-spin" /> Baixando recursos...</span>
                <span className="font-heading font-semibold">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-[10px] text-muted-foreground">{cachedFiles} de {totalFiles} arquivos</p>
            </div>
          )}

          {status === "complete" && (
            <div className="px-4 py-3 border-t border-border/50 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle size={16} />
              <p className="text-[12px] font-heading font-semibold">App pronto para uso offline!</p>
            </div>
          )}

          {/* Cache info bar */}
          <div className="px-4 py-2.5 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HardDrive size={14} />
              <span className="text-[11px]">{cacheCount} recursos em cache</span>
            </div>
            {cacheCount > 0 && (
              <button onClick={clearCache} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Preview warning */}
        {isInPreview && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start gap-2">
            <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-heading font-semibold text-amber-600 dark:text-amber-400">Ambiente de Preview</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Modo offline funciona apenas no app publicado ou instalado.</p>
            </div>
          </div>
        )}

        {/* Download button */}
        <Button onClick={startDownload} disabled={status === "downloading" || isInPreview || !swReady}
          className="w-full h-12 rounded-2xl gap-2 text-sm font-heading" size="lg">
          {status === "downloading" ? (
            <><Loader2 size={18} className="animate-spin" /> Baixando...</>
          ) : status === "complete" ? (
            <><RefreshCw size={18} /> Atualizar Cache</>
          ) : (
            <><Download size={18} /> Preparar Modo Offline</>
          )}
        </Button>

        {/* ── SAVED CONTENT INVENTORY ── */}
        <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-border/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-sm flex items-center gap-2">
                <BookOpen size={14} className="text-primary" />
                Conteúdo Salvo
              </h3>
              {contentItems.length > 0 && (
                <button onClick={async () => { await clearContentCache(); setContentItems([]); toast.success("Cache de conteúdo limpo"); }}
                  className="text-[10px] text-destructive font-heading font-medium">
                  Limpar tudo
                </button>
              )}
            </div>
            <p className="text-[10px] text-muted-foreground mb-2">
              Protocolos e medicamentos acessados ficam disponíveis sem internet automaticamente.
            </p>
            {contentItems.length > 5 && (
              <div className="relative">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar no conteúdo salvo..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full h-8 pl-8 pr-3 text-[11px] rounded-lg border border-border bg-background"
                />
              </div>
            )}
          </div>

          {contentItems.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-3">
                <WifiOff size={24} className="text-muted-foreground/50" />
              </div>
              <p className="text-sm font-heading font-semibold mb-1">Nenhum conteúdo salvo</p>
              <p className="text-[11px] text-muted-foreground mb-3">Acesse protocolos e medicamentos para salvá-los automaticamente.</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                <button onClick={() => navigate("/full-protocols")} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[10px] font-medium hover:bg-primary/20 transition-colors">
                  Ver Protocolos
                </button>
                <button onClick={() => navigate("/emergency")} className="px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive text-[10px] font-medium hover:bg-destructive/20 transition-colors">
                  Emergências
                </button>
                <button onClick={() => navigate("/bulario")} className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium hover:bg-emerald-500/20 transition-colors">
                  Medicamentos
                </button>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-border/30">
              {Object.entries(filteredGrouped).map(([type, items]) => {
                const sampleMeta = getItemMeta(items[0]);
                const Icon = sampleMeta.icon;
                const isExpanded = expandedType === type;
                const displayItems = isExpanded ? items : items.slice(0, 3);

                return (
                  <div key={type}>
                    <button
                      onClick={() => setExpandedType(isExpanded ? null : type)}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-accent/30 transition-colors"
                    >
                      <Icon size={14} className={sampleMeta.color} />
                      <span className="text-[11px] font-heading font-semibold flex-1 text-left">{sampleMeta.label}</span>
                      <Badge variant="outline" className="text-[9px] h-5">{items.length}</Badge>
                      <ChevronRight size={12} className={cn("text-muted-foreground transition-transform", isExpanded && "rotate-90")} />
                    </button>
                    <div className="px-4 pb-2 space-y-1">
                      {displayItems.map(item => {
                        const meta = getItemMeta(item);
                        return (
                          <button
                            key={item.key}
                            onClick={() => navigate(meta.route)}
                            className="w-full flex items-center gap-2 pl-6 pr-2 py-1.5 rounded-lg hover:bg-accent/30 transition-colors text-left"
                          >
                            <CheckCircle size={10} className="text-emerald-500 shrink-0" />
                            <span className="text-[11px] flex-1 truncate">{meta.title}</span>
                            <span className="text-[9px] text-muted-foreground flex items-center gap-0.5 shrink-0">
                              <Clock size={8} />
                              {item.cachedAt ? new Date(item.cachedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) : ""}
                            </span>
                          </button>
                        );
                      })}
                      {!isExpanded && items.length > 3 && (
                        <button
                          onClick={() => setExpandedType(type)}
                          className="text-[10px] text-primary font-medium pl-6 py-1"
                        >
                          + {items.length - 3} mais
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* What works offline */}
        <div className="bg-card rounded-2xl shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <CheckCircle size={14} className="text-emerald-500" />
            Funciona Sem Internet
          </h3>
          <div className="space-y-1.5">
            {OFFLINE_FEATURES.map((feat) => (
              <div key={feat.label} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-muted/30">
                <feat.icon size={14} className={feat.color} />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-heading font-semibold">{feat.label}</p>
                  <p className="text-[9px] text-muted-foreground">{feat.desc}</p>
                </div>
                <CheckCircle size={12} className="text-emerald-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* What needs internet */}
        <div className="bg-card rounded-2xl shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Wifi size={14} className="text-muted-foreground" />
            Requer Internet
          </h3>
          <div className="space-y-1.5">
            {ONLINE_ONLY.map((feat) => (
              <div key={feat.label} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-muted/30">
                <WifiOff size={14} className="text-muted-foreground/50" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-heading font-semibold text-muted-foreground">{feat.label}</p>
                  <p className="text-[9px] text-muted-foreground/70">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-card rounded-2xl shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Zap size={14} className="text-primary" />
            Dicas para o Plantão
          </h3>
          <div className="space-y-2 text-[11px] text-muted-foreground">
            <p>• <strong>Antes do plantão:</strong> acesse os protocolos principais com Wi-Fi — eles serão salvos automaticamente</p>
            <p>• <strong>Instale o app</strong> na tela inicial para acesso rápido (Compartilhar → Tela de Início)</p>
            <p>• <strong>Protocolos acessados</strong> ficam disponíveis mesmo sem sinal</p>
            <p>• <strong>Atualize periodicamente</strong> conectado para receber novos protocolos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
