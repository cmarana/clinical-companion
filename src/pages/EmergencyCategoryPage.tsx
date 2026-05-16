import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft, Calendar, Tag } from "lucide-react";
import TopBar from "@/components/TopBar";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import {
  getEmergencyCategory,
  SECTION_ORDER,
  extractProtocolMeta,
  NEW_EMERGENCY_CATEGORY_IDS,
  UPDATED_EMERGENCY_PROTOCOL_IDS,
} from "@/data/emergency";

function Badge({ kind }: { kind: "new" | "updated" }) {
  const label = kind === "new" ? "Novo" : "Atualizado";
  const cls =
    kind === "new"
      ? "bg-primary/15 text-primary border border-primary/30"
      : "bg-accent/20 text-accent-foreground border border-accent/40";
  return (
    <span className={`text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full ${cls}`}>
      {label}
    </span>
  );
}

function EmergencyCategoryContent() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = getEmergencyCategory(categoryId || "");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [openSection, setOpenSection] = useState<Record<string, string>>({});

  if (!category) return <Navigate to="/emergency" replace />;

  const isNewCategory = NEW_EMERGENCY_CATEGORY_IDS.has(category.id);
  const toggle = (id: string) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  return (
    <>
      <TopBar title={category.title} />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24 space-y-4">
        <button
          onClick={() => navigate("/emergency")}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Todas as categorias
        </button>

        <header className="duty-card p-5 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="font-heading font-bold text-base tracking-tight">
              {category.title}
            </h1>
            {isNewCategory && <Badge kind="new" />}
          </div>
          <p className="text-xs text-muted-foreground">
            {category.protocols.length} protocolo{category.protocols.length === 1 ? "" : "s"} · toque em um protocolo para expandir suas seções ou abrir em tela cheia.
          </p>
        </header>

        <div className="space-y-2">
          {category.protocols.map(p => {
            const meta = extractProtocolMeta(p);
            const isUpdated = UPDATED_EMERGENCY_PROTOCOL_IDS.has(p.id);
            const ordered = SECTION_ORDER
              .map(so => p.sections.find(s => s.id === so.id))
              .filter(Boolean) as typeof p.sections;
            const sections = ordered.length ? ordered : p.sections;
            const open = expanded[p.id];

            return (
              <article key={p.id} className="duty-card overflow-hidden">
                <button
                  onClick={() => toggle(p.id)}
                  className="w-full flex items-center gap-3 p-4 text-left active:scale-[0.99] transition"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-heading font-semibold text-sm">{p.title}</h2>
                      {(isUpdated || isNewCategory) && (
                        <Badge kind={isUpdated ? "updated" : "new"} />
                      )}
                    </div>
                    {(meta.version || meta.lastReviewed) && (
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-medium">
                        {meta.version && (
                          <span className="inline-flex items-center gap-1">
                            <Tag size={10} /> {meta.version}
                          </span>
                        )}
                        {meta.lastReviewed && (
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={10} /> Rev. {meta.lastReviewed}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {open ? (
                    <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight size={16} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {open && (
                  <div className="px-4 pb-4 space-y-1.5 border-t border-border/50 pt-3">
                    {sections.map(s => {
                      const isOpen = openSection[p.id] === s.id;
                      return (
                        <div key={s.id} className="rounded-lg bg-muted/40">
                          <button
                            onClick={() =>
                              setOpenSection(prev => ({
                                ...prev,
                                [p.id]: isOpen ? "" : s.id,
                              }))
                            }
                            className="w-full flex items-center justify-between px-3 py-2 text-left"
                          >
                            <span className="text-xs font-heading font-medium">
                              {s.title}
                            </span>
                            <ChevronDown
                              size={13}
                              className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-3 pb-3 text-xs leading-relaxed whitespace-pre-wrap text-foreground/90">
                              {s.content}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    <button
                      onClick={() => navigate(`/emergency/${p.id}`)}
                      className="w-full mt-2 text-[11px] font-heading font-semibold py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/15 transition"
                    >
                      Abrir protocolo em tela cheia →
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function EmergencyCategoryPage() {
  return (
    <PremiumPageGuard feature="Categoria de Emergência" title="Emergência">
      <EmergencyCategoryContent />
    </PremiumPageGuard>
  );
}
