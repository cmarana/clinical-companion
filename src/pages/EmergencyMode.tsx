import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ChevronRight, ChevronDown, Siren } from "lucide-react";
import TopBar from "@/components/TopBar";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import SalaVermelha from "@/components/SalaVermelha";
import { emergencyCategories, allEmergencyProtocols, NEW_EMERGENCY_CATEGORY_IDS } from "@/data/emergency";
import { DANGER_BG } from "@/lib/design-tokens";

function EcgPulse({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-x-0 bottom-0 w-full h-14 opacity-[0.18] pointer-events-none text-white ${className}`}
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M0 35 L40 35 L48 35 L56 18 L64 52 L72 35 L110 35 L118 35 L126 12 L134 58 L142 35 L200 35"
        initial={{ pathLength: 0, opacity: 0.2 }}
        animate={{ pathLength: 1, opacity: [0.2, 1, 0.4] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      />
    </svg>
  );
}

function EmergencyModeContent() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openCats, setOpenCats] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(emergencyCategories.map(c => [c.id, true]))
  );

  const searchResults = useMemo(() => {
    if (search.length < 2) return null;
    const q = search.toLowerCase();
    return allEmergencyProtocols.filter(p =>
      p.title.toLowerCase().includes(q)
    );
  }, [search]);

  const toggleCat = (id: string) =>
    setOpenCats(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <TopBar title="Emergência / UTI / SAMU" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-5 pb-24">
        {/* Header — padronizado como cards da Home (gradiente vermelho profundo + ECG) */}
        <div
          className="relative overflow-hidden rounded-2xl p-5 text-white shadow-md ring-1 ring-white/15"
          style={{ background: DANGER_BG }}
        >
          <EcgPulse />
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                <Siren size={20} strokeWidth={2.3} className="text-white" />
              </div>
              <h1 className="font-heading font-bold text-[16px] tracking-tight">
                Protocolos de Emergência
              </h1>
            </div>
            <p className="text-[12px] leading-relaxed text-white/85">
              Manejo imediato de condições potencialmente fatais — algoritmos,
              fluxogramas, doses e prescrições padronizadas para o plantão.
            </p>
            <p className="text-[11.5px] leading-relaxed text-white/75">
              Baseado em AHA, ACLS, ATLS, Surviving Sepsis Campaign, SBC, AMIB,
              Ministério da Saúde, SBP e referências internacionais.
            </p>
            <p className="font-heading text-[11px] font-semibold text-white/90 pt-0.5">
              Acesso rápido a condutas críticas no plantão
            </p>
          </div>
        </div>

        {/* Sala Vermelha Quick Mode */}
        <SalaVermelha />

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar protocolo de emergência..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 h-12 text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-destructive/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {/* Search Results */}
        {searchResults && searchResults.length > 0 && (
          <div className="space-y-2">
            {searchResults.map(p => (
              <motion.button
                key={p.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/emergency/${p.id}`)}
                className="relative overflow-hidden w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-white shadow-md ring-1 ring-white/15 hover:shadow-lg transition-all"
                style={{ background: DANGER_BG }}
              >
                <EcgPulse />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <span className="relative flex-1 text-left text-[13px] font-heading font-semibold">{p.title}</span>
                <ChevronRight size={14} className="relative text-white/80 shrink-0" />
              </motion.button>
            ))}
          </div>
        )}
        {searchResults && searchResults.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-4">
            Nenhum protocolo encontrado.
          </p>
        )}

        {/* Categories */}
        {!searchResults && emergencyCategories.map(cat => {
          const isNew = NEW_EMERGENCY_CATEGORY_IDS.has(cat.id);
          const isOpen = openCats[cat.id];
          return (
            <div
              key={cat.id}
              className="relative overflow-hidden rounded-2xl text-white shadow-md ring-1 ring-white/15"
              style={{ background: DANGER_BG }}
            >
              <EcgPulse />
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <button
                onClick={() => toggleCat(cat.id)}
                className="relative w-full flex items-center justify-between p-4 active:scale-[0.99] transition-all"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <h2 className="font-heading font-bold text-[12px] uppercase tracking-wider text-white truncate">
                    {cat.title}
                  </h2>
                  {isNew && (
                    <span className="text-[9px] font-heading font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/20 text-white ring-1 ring-white/30">
                      Novo
                    </span>
                  )}
                  <span className="text-[10px] text-white/70">
                    · {cat.protocols.length}
                  </span>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-white/85 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="relative px-4 pb-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {cat.protocols.map(p => (
                      <button
                        key={p.id}
                        onClick={() => navigate(`/emergency/${p.id}`)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/12 hover:bg-white/20 ring-1 ring-white/20 backdrop-blur-sm active:scale-[0.97] transition-all text-left"
                      >
                        <span className="flex-1 text-left text-[12px] font-heading font-semibold text-white leading-tight">
                          {p.title}
                        </span>
                        <ChevronRight size={12} className="text-white/80 shrink-0" />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(`/emergency/category/${cat.id}`)}
                    className="w-full text-[11px] font-heading font-semibold py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white ring-1 ring-white/25 transition"
                  >
                    Ver categoria com seções expandíveis →
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
