import { useParams, useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { protocols } from "@/data/protocols";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { Star, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PremiumGate, { PremiumBadge } from "@/components/PremiumGate";
import { FREE_PROTOCOL_SECTIONS, FREE_PROTOCOL_IDS } from "@/lib/plans";
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
        <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
          <p className="text-xs text-muted-foreground font-heading mb-4">{protocol.category}</p>
          <PremiumGate />
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
