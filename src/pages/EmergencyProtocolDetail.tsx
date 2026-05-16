import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { cacheContent } from "@/lib/offlineCache";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getEmergencyProtocol, SECTION_ORDER, extractProtocolMeta, UPDATED_EMERGENCY_PROTOCOL_IDS, NEW_EMERGENCY_CATEGORY_IDS } from "@/data/emergency";
import { Calendar, Tag } from "lucide-react";
import ProtocolActionBar from "@/components/ProtocolActionBar";
import { useRecentHistory } from "@/hooks/useRecentHistory";

export default function EmergencyProtocolDetail() {
  const { id } = useParams<{ id: string }>();
  const { subscription } = useAuth();
  const { addEntry } = useRecentHistory();
  const protocol = getEmergencyProtocol(id || "");

  useEffect(() => {
    if (protocol) {
      addEntry({ path: `/emergency/${id}`, title: protocol.title, type: "emergency" });
      cacheContent(`emergency:${id}`, { id: protocol.id, title: protocol.title, categoryId: protocol.categoryId, sections: protocol.sections });
    }
  }, [id]);

  if (!protocol) {
    return (
      <>
        <TopBar title="Protocolo" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Protocolo não encontrado.
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

  // Order sections according to SECTION_ORDER
  const orderedSections = SECTION_ORDER
    .map(so => protocol.sections.find(s => s.id === so.id))
    .filter(Boolean) as typeof protocol.sections;

  const defaultTab = orderedSections[0]?.id || "";

  const meta = extractProtocolMeta(protocol);
  const isUpdated =
    UPDATED_EMERGENCY_PROTOCOL_IDS.has(protocol.id) ||
    NEW_EMERGENCY_CATEGORY_IDS.has(protocol.categoryId);

  return (
    <>
      <TopBar title={protocol.title} />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        {(meta.version || meta.lastReviewed || isUpdated) && (
          <div className="flex items-center gap-2 flex-wrap mb-3 text-[10px] font-heading font-medium text-muted-foreground">
            {isUpdated && (
              <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold">
                Atualizado
              </span>
            )}
            {meta.version && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted">
                <Tag size={10} /> {meta.version}
              </span>
            )}
            {meta.lastReviewed && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted">
                <Calendar size={10} /> Última revisão: {meta.lastReviewed}
              </span>
            )}
          </div>
        )}
        <ProtocolActionBar
          protocolId={protocol.id}
          protocolTitle={protocol.title}
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
