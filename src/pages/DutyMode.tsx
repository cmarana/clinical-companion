import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import PremiumGate from "@/components/PremiumGate";
import {
  Zap, Pill, ClipboardList, Calculator, FileText, Baby, Heart,
  Search, Brain, Star, Stethoscope, Activity, Syringe,
  ChevronRight, Sparkles, Clock, Play, Square
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";
import { protocols } from "@/data/protocols";
import { medications } from "@/data/medications";

/* ─── Data ─── */

const quickAccess = [
  { label: "Emergência / UTI / SAMU", icon: Zap, path: "/emergency" },
  { label: "Medicações", icon: Pill, path: "/medications" },
  { label: "Prescrições", icon: ClipboardList, path: "/prescriptions" },
  { label: "Calculadoras", icon: Calculator, path: "/calculators" },
  { label: "IA Clínica", icon: Sparkles, path: "/clinical-ai" },
  { label: "Protocolos", icon: FileText, path: "/protocols" },
  { label: "Pediatria", icon: Baby, path: "/pediatrics" },
  { label: "Obstetrícia", icon: Heart, path: "/obstetrics" },
];

const emergencyShortcuts = [
  { label: "PCR / RCP", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "Choque Hipovolêmico", path: "/protocols/choque-hipovolemico" },
  { label: "Intubação (IOT)", path: "/protocols/iot" },
  { label: "Dor Torácica", path: "/protocols/dor-toracica" },
  { label: "Dispneia", path: "/protocols/dispneia" },
  { label: "Convulsão", path: "/protocols/convulsao" },
  { label: "Hipoglicemia", path: "/protocols/hipoglicemia" },
  { label: "Hipercalemia", path: "/protocols/hipercalemia" },
  { label: "Bradicardia", path: "/protocols/bradicardia" },
  { label: "Taquiarritmia", path: "/protocols/taquiarritmia" },
  { label: "EAP", path: "/protocols/eap" },
  { label: "Crise Hipertensiva", path: "/protocols/crise-hipertensiva" },
];

const specialties = [
  { label: "Clínica Médica", path: "/protocols" },
  { label: "Cirurgia", path: "/protocols" },
  { label: "Pediatria", path: "/pediatrics" },
  { label: "Ginecologia", path: "/obstetrics" },
  { label: "Obstetrícia", path: "/obstetrics" },
  { label: "Cardiologia", path: "/protocols" },
  { label: "Endocrinologia", path: "/protocols" },
  { label: "Nefrologia", path: "/protocols" },
  { label: "Gastroenterologia", path: "/protocols" },
  { label: "Neurologia", path: "/protocols" },
  { label: "Psiquiatria", path: "/protocols" },
  { label: "Infectologia", path: "/protocols" },
  { label: "Reumatologia", path: "/protocols" },
  { label: "Dermatologia", path: "/protocols" },
  { label: "Urologia", path: "/protocols" },
  { label: "Ortopedia", path: "/protocols" },
];

const calculatorShortcuts = [
  { label: "Glasgow", path: "/calculators" },
  { label: "SOFA", path: "/calculators" },
  { label: "qSOFA", path: "/calculators" },
  { label: "CHA₂DS₂-VASc", path: "/calculators" },
  { label: "Wells (TEP)", path: "/calculators" },
  { label: "CURB-65", path: "/calculators" },
  { label: "Child-Pugh", path: "/calculators" },
  { label: "Cockcroft-Gault", path: "/calculators" },
];

/* ─── Component ─── */

export default function DutyMode() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const { favorites } = useFavorites();
  const [search, setSearch] = useState("");

  // Global search across protocols, medications, shortcuts
  const searchResults = useMemo(() => {
    if (search.length < 2) return null;
    const q = search.toLowerCase();
    const matchedProtocols = protocols
      .filter(p => p.title.toLowerCase().includes(q) || p.tags?.some(t => t.includes(q)))
      .slice(0, 8)
      .map(p => ({ label: p.title, path: `/protocols/${p.id}`, type: "Protocolo" as const }));
    const matchedMeds = medications
      .filter(m => m.name.toLowerCase().includes(q) || m.tags?.some(t => t.includes(q)))
      .slice(0, 8)
      .map(m => ({ label: m.name, path: `/medications/${m.id}`, type: "Medicação" as const }));
    return [...matchedProtocols, ...matchedMeds];
  }, [search]);

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Modo Plantão" />
        <PremiumGate />
      </>
    );
  }

  return (
    <>
      <TopBar title="Modo Plantão" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-5 pb-24">

        {/* ── Search ── */}
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar protocolo, medicação, dose, doença..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 h-12 text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {/* ── Search Results ── */}
        {searchResults && searchResults.length > 0 && (
          <DutySection title="Resultados">
            <div className="space-y-1">
              {searchResults.map(r => (
                <button
                  key={r.path + r.label}
                  onClick={() => { navigate(r.path); setSearch(""); }}
                  className="duty-list-item"
                >
                  <span className="flex-1 text-left">{r.label}</span>
                  <span className="duty-badge">{r.type}</span>
                  <ChevronRight size={14} className="text-muted-foreground" />
                </button>
              ))}
            </div>
          </DutySection>
        )}

        {searchResults && searchResults.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-4">Nenhum resultado encontrado.</p>
        )}

        {/* Only show sections when not searching */}
        {!searchResults && (
          <>
            {/* ── Quick Access Grid ── */}
            <DutySection title="Acesso Rápido">
              <div className="grid grid-cols-4 gap-2">
                {quickAccess.map(m => (
                  <button
                    key={m.path}
                    onClick={() => navigate(m.path)}
                    className="duty-grid-btn"
                  >
                    <m.icon size={18} strokeWidth={1.8} />
                    <span className="text-[10px] leading-tight font-medium text-center">{m.label}</span>
                  </button>
                ))}
              </div>
            </DutySection>

            {/* ── IA Clínica ── */}
            <button
              onClick={() => navigate("/clinical-ai")}
              className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-[20px] shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="text-left flex-1">
                <p className="font-heading font-semibold text-sm text-white">IA Clínica</p>
                <p className="text-xs text-white/70">Diagnóstico, conduta e prescrição assistidos por IA</p>
              </div>
              <ChevronRight size={16} className="text-white/60" />
            </button>

            {/* ── Emergency Protocols ── */}
            <DutySection title="Protocolos de Emergência" icon={<Zap size={14} />}>
              <div className="grid grid-cols-2 gap-1.5">
                {emergencyShortcuts.map(s => (
                  <button
                    key={s.path}
                    onClick={() => navigate(s.path)}
                    className="duty-list-item"
                  >
                    <span className="flex-1 text-left text-xs">{s.label}</span>
                    <ChevronRight size={13} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </DutySection>

            {/* ── Calculators ── */}
            <DutySection title="Calculadoras" icon={<Calculator size={14} />}>
              <div className="grid grid-cols-2 gap-1.5">
                {calculatorShortcuts.map(s => (
                  <button
                    key={s.label}
                    onClick={() => navigate(s.path)}
                    className="duty-list-item"
                  >
                    <span className="flex-1 text-left text-xs">{s.label}</span>
                    <ChevronRight size={13} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </DutySection>

            {/* ── Specialties ── */}
            <DutySection title="Especialidades" icon={<Stethoscope size={14} />}>
              <div className="grid grid-cols-2 gap-1.5">
                {specialties.map(s => (
                  <button
                    key={s.label}
                    onClick={() => navigate(s.path)}
                    className="duty-list-item"
                  >
                    <span className="flex-1 text-left text-xs">{s.label}</span>
                    <ChevronRight size={13} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </DutySection>

            {/* ── Favorites ── */}
            {favorites.length > 0 && (
              <DutySection title="Favoritos" icon={<Star size={14} />}>
                <div className="space-y-1">
                  {favorites.slice(0, 8).map(f => (
                    <button
                      key={f.id}
                      onClick={() => navigate(`/${f.type === "protocol" ? "protocols" : "medications"}/${f.id}`)}
                      className="duty-list-item"
                    >
                      <span className="flex-1 text-left text-xs">{f.title}</span>
                      <span className="duty-badge">{f.type === "protocol" ? "Protocolo" : "Medicação"}</span>
                      <ChevronRight size={13} className="text-muted-foreground" />
                    </button>
                  ))}
                </div>
                {favorites.length > 8 && (
                  <button onClick={() => navigate("/favorites")} className="text-xs text-primary mt-2 font-heading font-medium">
                    Ver todos ({favorites.length})
                  </button>
                )}
              </DutySection>
            )}
          </>
        )}
      </div>
    </>
  );
}

/* ─── Reusable section wrapper ─── */
function DutySection({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="duty-card p-5 space-y-3">
      <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}
