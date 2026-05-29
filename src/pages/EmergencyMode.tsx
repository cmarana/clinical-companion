import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import TopBar from "@/components/TopBar";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import SalaVermelha from "@/components/SalaVermelha";
import { emergencyCategories, allEmergencyProtocols, NEW_EMERGENCY_CATEGORY_IDS } from "@/data/emergency";

/**
 * Mapa de cores semânticas por categoria clínica.
 * Usadas APENAS como barra lateral de 3px — nunca como fundo de card.
 * Isso mantém o visual sóbrio e profissional enquanto permite categorização
 * visual instantânea para o médico no plantão.
 */
const CATEGORY_COLOR: Record<string, string> = {
  resuscitation:             "#C0392B",
  cardiovascular:            "#C0392B",
  respiratory:               "#0E4D8A",
  neurological:              "#5B21B6",
  sepsis:                    "#065F46",
  metabolic:                 "#92400E",
  trauma:                    "#92400E",
  obstetrics:                "#831843",
  intoxication:              "#3D1A5C",
  procedures:                "#1E4D8A",
  infectious:                "#065F46",
  "hematology-emergency":    "#7C3D12",
  "gastroenterology-emergency": "#374151",
  "pediatric-emergency":     "#0E4D8A",
  neonatal:                  "#0E4D8A",
  "psychiatry-emergency":    "#3D1A5C",
  "ophthalmology-emergency": "#374151",
  "otorhino-emergency":      "#374151",
  "vascular-emergency":      "#C0392B",
  "dermatology-emergency":   "#374151",
  "orthopedic-emergency":    "#92400E",
  "other-emergencies":       "#374151",
};

const DEFAULT_COLOR = "#374151";

function getCategoryColor(id: string): string {
  return CATEGORY_COLOR[id] ?? DEFAULT_COLOR;
}

function EmergencyModeContent() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openCats, setOpenCats] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(emergencyCategories.map(c => [c.id, false]))
  );

  const searchResults = useMemo(() => {
    if (search.length < 2) return null;
    const q = search.toLowerCase().trim();
    return allEmergencyProtocols.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.tags ?? []).some(t => t.toLowerCase().includes(q)) ||
      (p.samuCodes ?? []).some(c => c.toLowerCase().includes(q)) ||
      (q === "samu" && (p.samuCodes?.length ?? 0) > 0)
    );
  }, [search]);

  const toggleCat = (id: string) =>
    setOpenCats(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <TopBar title="Emergência / UTI / SAMU" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">

        {/* Sala Vermelha */}
        <SalaVermelha />

        {/* Search */}
        <div className="relative">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar protocolo de emergência..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 h-11 text-sm rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {/* Search Results — lista limpa, sem cor de fundo */}
        {searchResults && searchResults.length > 0 && (
          <div className="space-y-1.5">
            {searchResults.map(p => (
              <motion.button
                key={p.id}
                whileTap={{ scale: 0.99 }}
                onClick={() => navigate(`/emergency/${p.id}`)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-border/80 hover:bg-muted/30 transition-all text-left"
              >
                <div
                  className="w-0.5 h-7 rounded-full flex-shrink-0"
                  style={{ background: "#C0392B" }}
                />
                <span className="flex-1 text-[13px] font-heading font-semibold text-foreground leading-tight">
                  {p.title}
                </span>
                <ChevronRight size={14} className="text-muted-foreground shrink-0" />
              </motion.button>
            ))}
          </div>
        )}
        {searchResults && searchResults.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-6">
            Nenhum protocolo encontrado.
          </p>
        )}

        {/* Categorias — cards claros com barra lateral colorida */}
        {!searchResults && emergencyCategories.map(cat => {
          const isNew = NEW_EMERGENCY_CATEGORY_IDS.has(cat.id);
          const isOpen = openCats[cat.id];
          const color = getCategoryColor(cat.id);

          return (
            <div
              key={cat.id}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Cabeçalho da categoria */}
              <button
                onClick={() => toggleCat(cat.id)}
                className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-muted/30 active:bg-muted/50 transition-colors text-left"
              >
                {/* Barra lateral semântica */}
                <div
                  className="w-0.5 h-6 rounded-full flex-shrink-0"
                  style={{ background: color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading font-semibold text-[13px] text-foreground truncate">
                      {cat.title}
                    </h2>
                    {isNew && (
                      <span className="text-[9px] font-heading font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary flex-shrink-0">
                        Novo
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    {cat.protocols.length} protocolos
                  </span>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Protocolos expandidos — lista vertical limpa */}
              {isOpen && (
                <div className="border-t border-border">
                  {cat.protocols.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => navigate(`/emergency/${p.id}`)}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/30 active:bg-muted/50 transition-colors text-left ${
                        idx < cat.protocols.length - 1 ? "border-b border-border/60" : ""
                      }`}
                    >
                      <div
                        className="w-0.5 h-5 rounded-full flex-shrink-0 opacity-50"
                        style={{ background: color }}
                      />
                      <span className="flex-1 text-[12.5px] font-heading font-medium text-foreground leading-snug">
                        {p.title}
                      </span>
                      <ChevronRight size={13} className="text-muted-foreground/60 shrink-0" />
                    </button>
                  ))}
                  {/* Link para a categoria completa */}
                  <button
                    onClick={() => navigate(`/emergency/category/${cat.id}`)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-heading font-semibold text-primary hover:bg-primary/5 transition-colors border-t border-border/60"
                  >
                    Ver categoria completa
                    <ChevronRight size={11} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const EmergencyMode = () => (
  <PremiumPageGuard feature="Modo Emergência" title="Emergência">
    <EmergencyModeContent />
  </PremiumPageGuard>
);

export default EmergencyMode;
