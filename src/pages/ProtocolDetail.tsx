import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cacheContent } from "@/lib/offlineCache";
import TopBar from "@/components/TopBar";
import { protocols } from "@/data/protocols";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { Star, GitBranch, Lock, Sparkles, ShieldCheck, Zap, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PremiumGate, { PremiumBadge } from "@/components/PremiumGate";
import { FREE_PROTOCOL_SECTIONS, FREE_PROTOCOL_IDS } from "@/lib/plans";
import { Button } from "@/components/ui/button";
import DecisionTree from "@/components/DecisionTree";
import { decisionTrees } from "@/data/decisionTrees";
import ShareMenu from "@/components/ShareMenu";
import { formatProtocolForShare } from "@/lib/shareUtils";

export default function ProtocolDetail() {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { subscription } = useAuth();
  const navigate = useNavigate();
  const protocol = protocols.find((p) => p.id === id);

  useEffect(() => {
    if (protocol) {
      cacheContent(`protocol:${id}`, { id: protocol.id, title: protocol.title, category: protocol.category, sections: protocol.sections, tags: protocol.tags });
    }
  }, [id, protocol]);

  if (!protocol) {
    return (
      <>
        <TopBar title="Protocolo" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">Protocolo não encontrado.</div>
      </>
    );
  }

  const fav = isFavorite(protocol.id);
  const isPremium = subscription.subscribed;
  const isFreeProtocol = FREE_PROTOCOL_IDS.includes(protocol.id);

  // If not premium and not a free protocol, show full lock
  if (!isPremium && !isFreeProtocol) {
    return (
      <>
        <TopBar title={protocol.title} />
        <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-5">
          {/* Protocol preview header */}
          <div>
            <p className="text-xs text-muted-foreground font-heading mb-1">{protocol.category}</p>
            <h1 className="font-heading font-bold text-lg">{protocol.title}</h1>
            {protocol.tags && (
              <div className="flex flex-wrap gap-1 mt-2">
                {protocol.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Blurred content teaser */}
          <div className="relative overflow-hidden rounded-xl border border-border">
            <div className="p-4 space-y-2 blur-[6px] select-none pointer-events-none" aria-hidden>
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-2/3" />
              <div className="h-4 bg-muted rounded w-1/2 mt-4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-4/5" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background flex items-center justify-center">
              <Lock size={32} className="text-muted-foreground/40" />
            </div>
          </div>

          {/* Contextual upgrade banner */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/10 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Desbloqueie este protocolo</p>
                <p className="text-[11px] text-muted-foreground">e mais 1.000+ protocolos completos</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-background/60">
                <BookOpen size={14} className="text-primary" />
                <span className="text-[10px] text-muted-foreground text-center leading-tight">1.000+ protocolos</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-background/60">
                <Zap size={14} className="text-primary" />
                <span className="text-[10px] text-muted-foreground text-center leading-tight">IA Clínica</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-background/60">
                <ShieldCheck size={14} className="text-primary" />
                <span className="text-[10px] text-muted-foreground text-center leading-tight">Baseado em evidências</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/pricing")}
              className="w-full gap-2 font-heading font-bold"
              size="sm"
            >
              <Sparkles size={14} />
              Teste grátis por 7 dias
            </Button>
            <p className="text-[10px] text-center text-muted-foreground">
              Cancele quando quiser · Sem compromisso
            </p>
          </div>
        </div>
      </>
    );
  }

  // Free users on free protocols: only def and diag sections
  const visibleSections = isPremium
    ? protocol.sections
    : protocol.sections.filter((s) => FREE_PROTOCOL_SECTIONS.includes(s.id));

  const lockedSections = isPremium
    ? []
    : protocol.sections.filter((s) => !FREE_PROTOCOL_SECTIONS.includes(s.id));

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
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground font-heading">{protocol.category}</p>
            {!isPremium && <PremiumBadge />}
          </div>
          <ShareMenu
            title={protocol.title}
            showPDF
            shareUrl={`${window.location.origin}/protocols/${protocol.id}`}
            getText={() => formatProtocolForShare(protocol.title, protocol.category, visibleSections.map(s => ({ title: s.title, content: s.content })))}
          />
        </div>

        <Tabs defaultValue={visibleSections[0]?.id || ""} className="w-full">
          <TabsList className="w-full flex overflow-x-auto no-scrollbar h-auto gap-1 bg-transparent p-0 mb-4">
            {visibleSections.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="shrink-0 text-xs px-3 py-1.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-secondary"
              >
                {s.title}
              </TabsTrigger>
            ))}
            {lockedSections.map((s) => (
              <span
                key={s.id}
                className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
              >
                🔒 {s.title}
              </span>
            ))}
          </TabsList>
          {visibleSections.map((s) => (
            <TabsContent key={s.id} value={s.id} className="protocol-content">
              <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2 font-heading">{s.title}</h2>
              {s.content.split("\n").map((line, i) => (
                <p key={i} className="mb-2 text-sm leading-relaxed whitespace-pre-wrap">
                  {line}
                </p>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* Decision Tree */}
        {isPremium && protocol.id && decisionTrees[protocol.id] && (
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <GitBranch size={16} className="text-primary" />
              <h3 className="font-heading font-semibold text-sm">Fluxograma Interativo</h3>
            </div>
            <DecisionTree
              title={decisionTrees[protocol.id].title}
              root={decisionTrees[protocol.id].tree}
              guideline={decisionTrees[protocol.id].guideline}
            />
          </div>
        )}

        {!isPremium && lockedSections.length > 0 && (
          <PremiumGate>
            <></>
          </PremiumGate>
        )}
      </div>
    </>
  );
}
