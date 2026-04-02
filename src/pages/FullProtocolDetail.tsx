import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { cacheContent } from "@/lib/offlineCache";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import PremiumGate from "@/components/PremiumGate";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, ShieldCheck, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";
import { FULL_SECTION_ORDER, getEvidence } from "@/data/fullProtocols";
import { getFullProtocolAsync } from "@/data/fullProtocols/lazyLoader";
import type { FullProtocol } from "@/data/fullProtocols/types";
import ProtocolActionBar from "@/components/ProtocolActionBar";
import { useRecentHistory } from "@/hooks/useRecentHistory";
import { ProtocolDetailSkeleton } from "@/components/PageSkeleton";
import DecisionTree from "@/components/DecisionTree";
import { decisionTrees } from "@/data/decisionTrees";

export default function FullProtocolDetail() {
  const { id } = useParams<{ id: string }>();
  const { subscription } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addEntry } = useRecentHistory();
  const [protocol, setProtocol] = useState<FullProtocol | null | undefined>(undefined);
  const evidence = protocol ? getEvidence(protocol.id) : undefined;

  // Find matching decision tree for this protocol
  const matchedTree = useMemo(() => {
    if (!protocol) return null;
    const pid = protocol.id.toLowerCase();
    // Direct match
    if (decisionTrees[pid]) return decisionTrees[pid];
    // Partial match: check if protocol ID contains a tree key
    for (const key of Object.keys(decisionTrees)) {
      if (pid.includes(key) || key.includes(pid)) return decisionTrees[key];
    }
    // Match by tags
    if (protocol.tags) {
      for (const tag of protocol.tags) {
        const t = tag.toLowerCase();
        if (decisionTrees[t]) return decisionTrees[t];
      }
    }
    return null;
  }, [protocol]);

  useEffect(() => {
    let cancelled = false;
    setProtocol(undefined);
    getFullProtocolAsync(id || "").then(p => {
      if (!cancelled) setProtocol(p ?? null);
    });
    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => {
    if (protocol) {
      addEntry({ path: `/full-protocols/${id}`, title: protocol.title, type: "fullProtocol" });
      cacheContent(`fullProtocol:${id}`, { id: protocol.id, title: protocol.title, category: protocol.category, sections: protocol.sections, tags: protocol.tags });
    }
  }, [protocol, id]);

  // Loading
  if (protocol === undefined) {
    return (
      <>
        <TopBar title="Carregando..." />
        <ProtocolDetailSkeleton />
      </>
    );
  }

  if (!protocol) {
    return (
      <>
        <TopBar title="Protocolo" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Protocolo nao encontrado.
        </div>
      </>
    );
  }

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title={protocol.title} />
        <PremiumGate />
      </>
    );
  }

  const fav = isFavorite(protocol.id);

  const orderedSections = FULL_SECTION_ORDER
    .map(so => protocol.sections.find(s => s.id === so.id))
    .filter(Boolean) as typeof protocol.sections;

  const defaultTab = orderedSections[0]?.id || "";

  return (
    <>
      <TopBar
        title={protocol.title}
        rightContent={
          <button
            onClick={() => toggleFavorite({ id: protocol.id, type: "protocol", title: protocol.title })}
            className="p-1.5 rounded-md hover:bg-accent transition-colors"
          >
            <Star size={18} className={cn(fav ? "fill-warning text-warning" : "text-muted-foreground")} />
          </button>
        }
      />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        <div className="flex items-center gap-2 mb-3">
          <p className="text-xs text-muted-foreground font-heading">{protocol.category}</p>
          {evidence && (
            <span className={cn(
              "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full",
              evidence.class === "I" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
              evidence.class === "IIa" && "bg-sky-500/15 text-sky-600 dark:text-sky-400",
              evidence.class === "IIb" && "bg-amber-500/15 text-amber-600 dark:text-amber-400",
              evidence.class === "III" && "bg-red-500/15 text-red-600 dark:text-red-400",
            )}>
              <ShieldCheck size={12} />
              Classe {evidence.class} · Nível {evidence.level}
            </span>
          )}
        </div>

        <ProtocolActionBar
          protocolId={protocol.id}
          protocolTitle={protocol.title}
          protocolCategory={protocol.category}
          protocolSections={orderedSections.map(s => ({ title: s.title, content: s.content }))}
        />

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="w-full flex overflow-x-auto no-scrollbar h-auto gap-1 bg-transparent p-0 mb-4">
            {orderedSections.map(s => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="shrink-0 text-[11px] px-2.5 py-1.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-secondary"
              >
                {s.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {orderedSections.map(s => (
            <TabsContent key={s.id} value={s.id} className="protocol-content">
              <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2 font-heading">
                {s.title}
              </h2>
              {s.content.split("\n").map((line, i) => (
                <p key={i} className="mb-2 text-sm leading-relaxed whitespace-pre-wrap">
                  {line}
                </p>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
