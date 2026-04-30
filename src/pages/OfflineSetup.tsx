import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Download, CheckCircle, WifiOff, Wifi, HardDrive, RefreshCw,
  Trash2, Shield, Pill, Calculator, AlertTriangle, Loader2,
  BookOpen, Clock, Zap, ClipboardList, Heart, Brain, Baby,
  Bug, Wind, Utensils, Thermometer, Siren, Crown, CheckSquare, Square, Infinity as InfinityIcon
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import {
  OFFLINE_MODULES, ONLINE_ONLY_FEATURES,
  getDownloadedModules, downloadModule, downloadAllModules, clearAllModules,
  type OfflineModule,
} from "@/lib/offlineModules";
import { clearContentCache, listCachedContent } from "@/lib/offlineCache";

const ICON_MAP: Record<string, typeof Shield> = {
  Shield, Heart, Brain, Wind, Utensils, Baby, Bug, Pill,
  ClipboardList, Calculator, AlertTriangle, Thermometer, Siren, BookOpen,
};

function getIcon(name: string) {
  return ICON_MAP[name] || BookOpen;
}

export default function OfflineSetup() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const isPremium = subscription.subscribed;

  const [downloaded, setDownloaded] = useState<string[]>(getDownloadedModules());
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadingAll, setDownloadingAll] = useState(false);
  const [allProgress, setAllProgress] = useState({ completed: 0, total: 0, label: "" });
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [savedCount, setSavedCount] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    listCachedContent().then(items => setSavedCount(items.length));
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  const handleDownload = async (mod: OfflineModule) => {
    if (!isOnline) { toast.error("Conecte-se à internet para baixar."); return; }
    setDownloading(mod.id);
    try {
      await downloadModule(mod);
      setDownloaded(prev => [...prev, mod.id]);
      toast.success(`${mod.label} salvo para offline!`);
    } catch {
      toast.error(`Erro ao baixar ${mod.label}`);
    }
    setDownloading(null);
  };

  const handleDownloadAll = async () => {
    if (!isOnline) { toast.error("Conecte-se à internet para baixar."); return; }
    setDownloadingAll(true);
    await downloadAllModules((completed, total, label) => {
      setAllProgress({ completed, total, label });
      if (completed < total) {
        const mod = OFFLINE_MODULES[completed];
        if (mod) setDownloaded(prev => prev.includes(mod.id) ? prev : [...prev, mod.id]);
      }
    });
    setDownloaded(getDownloadedModules());
    setDownloadingAll(false);
    toast.success("Todos os módulos salvos para offline!");
  };

  const handleClearAll = async () => {
    clearAllModules();
    await clearContentCache();
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    }
    setDownloaded([]);
    setSavedCount(0);
    setSelected(new Set());
    toast.success("Cache offline limpo.");
  };

  const toggleSelect = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    const pending = OFFLINE_MODULES.filter(m => !downloaded.includes(m.id)).map(m => m.id);
    setSelected(new Set(pending));
  };

  const clearSelection = () => setSelected(new Set());

  const handleDownloadSelected = async () => {
    if (!isOnline) { toast.error("Conecte-se à internet para baixar."); return; }
    const list = OFFLINE_MODULES.filter(m => selected.has(m.id) && !downloaded.includes(m.id));
    if (list.length === 0) { toast.info("Nenhum módulo selecionado."); return; }
    setDownloadingAll(true);
    setAllProgress({ completed: 0, total: list.length, label: list[0].label });
    for (let i = 0; i < list.length; i++) {
      const mod = list[i];
      setAllProgress({ completed: i, total: list.length, label: mod.label });
      try {
        await downloadModule(mod);
        setDownloaded(prev => prev.includes(mod.id) ? prev : [...prev, mod.id]);
      } catch { /* segue */ }
    }
    setAllProgress({ completed: list.length, total: list.length, label: "Completo" });
    setDownloadingAll(false);
    setSelected(new Set());
    toast.success(`${list.length} módulo(s) salvo(s) para offline!`);
  };

  const totalSize = OFFLINE_MODULES.reduce((s, m) => s + m.sizeMb, 0);
  const downloadedSize = OFFLINE_MODULES.filter(m => downloaded.includes(m.id)).reduce((s, m) => s + m.sizeMb, 0);

  const isInPreview = typeof window !== "undefined" &&
    (window.location.hostname.includes("id-preview--") || window.location.hostname.includes("lovableproject.com"));

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <TopBar title="Modo Offline" showBack />
        <div className="px-4 pt-8 max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Crown size={32} className="text-primary" />
          </div>
          <h2 className="text-lg font-heading font-bold mb-2">Recurso Premium</h2>
          <p className="text-sm text-muted-foreground mb-6">
            O modo offline seletivo é exclusivo para assinantes Pro. Baixe módulos específicos por especialidade para usar sem internet.
          </p>
          <Button onClick={() => navigate("/pricing")} className="rounded-2xl gap-2">
            <Crown size={16} /> Assinar Pro
          </Button>
        </div>
      </div>
    );
  }

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
                {downloaded.length} de {OFFLINE_MODULES.length} módulos baixados ({downloadedSize.toFixed(1)} MB)
              </p>
            </div>
          </div>

          {/* Storage info */}
          <div className="px-4 py-2.5 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HardDrive size={14} />
              <span className="text-[11px]">{downloadedSize.toFixed(1)} / ~{totalSize.toFixed(0)} MB usado</span>
            </div>
            {downloaded.length > 0 && (
              <button onClick={handleClearAll} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
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
              <p className="text-[11px] text-muted-foreground mt-0.5">Modo offline funciona apenas no app publicado.</p>
            </div>
          </div>
        )}

        {/* Download All */}
        <Button
          onClick={handleDownloadAll}
          disabled={downloadingAll || !isOnline || downloaded.length === OFFLINE_MODULES.length}
          className="w-full h-12 rounded-2xl gap-2 text-sm font-heading"
          size="lg"
        >
          {downloadingAll ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Baixando {allProgress.label}... ({allProgress.completed}/{allProgress.total})
            </>
          ) : downloaded.length === OFFLINE_MODULES.length ? (
            <><CheckCircle size={18} /> Todos os módulos baixados</>
          ) : (
            <><Download size={18} /> Baixar Todos (~{totalSize.toFixed(0)} MB)</>
          )}
        </Button>

        {downloadingAll && (
          <Progress value={(allProgress.completed / Math.max(allProgress.total, 1)) * 100} className="h-2" />
        )}

        {/* Module Grid */}
        <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-border/50">
            <h3 className="font-heading font-bold text-sm flex items-center gap-2">
              <BookOpen size={14} className="text-primary" />
              Módulos por Especialidade
            </h3>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Selecione os módulos que deseja baixar para uso offline
            </p>
          </div>

          <div className="divide-y divide-border/30">
            {OFFLINE_MODULES.map(mod => {
              const Icon = getIcon(mod.icon);
              const isDownloaded = downloaded.includes(mod.id);
              const isLoading = downloading === mod.id;

              return (
                <div key={mod.id} className="flex items-center gap-3 px-4 py-3">
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                    isDownloaded ? "bg-emerald-500/10" : "bg-muted/50"
                  )}>
                    <Icon size={16} className={isDownloaded ? "text-emerald-500" : mod.color} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-heading font-semibold truncate">{mod.label}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{mod.desc}</p>
                    <p className="text-[9px] text-muted-foreground/60">~{mod.sizeMb} MB</p>
                  </div>

                  {isDownloaded ? (
                    <Badge variant="outline" className="text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 shrink-0">
                      <CheckCircle size={10} className="mr-1" /> Salvo
                    </Badge>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={isLoading || !isOnline || downloadingAll}
                      onClick={() => handleDownload(mod)}
                      className="h-8 text-[10px] rounded-xl shrink-0 gap-1"
                    >
                      {isLoading ? <Loader2 size={12} className="animate-spin" /> : <Download size={12} />}
                      Baixar
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Online-only features */}
        <div className="bg-card rounded-2xl shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Wifi size={14} className="text-muted-foreground" />
            Requer Internet
          </h3>
          <div className="space-y-1.5">
            {ONLINE_ONLY_FEATURES.map(feat => (
              <div key={feat.id} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-muted/30">
                <WifiOff size={14} className="text-muted-foreground/50" />
                <p className="text-[11px] font-heading font-semibold text-muted-foreground">{feat.label}</p>
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
            <p>• <strong>Antes do plantão:</strong> baixe os módulos das especialidades que precisará</p>
            <p>• <strong>Instale o app</strong> na tela inicial para acesso rápido</p>
            <p>• <strong>Atualize periodicamente</strong> para receber novos protocolos</p>
            <p>• <strong>Funcionalidades de IA</strong> mostrarão aviso quando offline</p>
          </div>
        </div>
      </div>
    </div>
  );
}
