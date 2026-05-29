import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import DutyShiftTimer from "@/components/duty/DutyShiftTimer";
import DutyHandoffChecklist from "@/components/duty/DutyHandoffChecklist";
import DutyBedNotes from "@/components/duty/DutyBedNotes";
import DutySection from "@/components/duty/DutySection";
import {
  Zap, Pill, ClipboardList, Calculator, FileText, Baby, Heart,
  Search, Star, Stethoscope, Sparkles, Timer, Mic, Users, Bot,
  ChevronRight, Activity, Beaker
} from "lucide-react";
import { useState, useMemo } from "react";
import { protocols } from "@/data/protocols";
import { medications } from "@/data/medications";
import { GRADIENT_DANGER, GRADIENT_DEEP_BLUE_SOFT } from "@/lib/design-tokens";

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

const emergencyOneTap = [
  { label: "PCR / RCP", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "IOT", path: "/protocols/iot" },
  { label: "Choque", path: "/protocols/choque-hipovolemico" },
  { label: "EAP", path: "/protocols/eap" },
];

const emergencyMore = [
  { label: "Dor Torácica", path: "/protocols/dor-toracica" },
  { label: "Dispneia", path: "/protocols/dispneia" },
  { label: "Convulsão", path: "/protocols/convulsao" },
  { label: "Hipoglicemia", path: "/protocols/hipoglicemia" },
  { label: "Hipercalemia", path: "/protocols/hipercalemia" },
  { label: "Bradicardia", path: "/protocols/bradicardia" },
  { label: "Taquiarritmia", path: "/protocols/taquiarritmia" },
  { label: "Crise Hipertensiva", path: "/protocols/crise-hipertensiva" },
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

function DutyModeContent() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const { favorites } = useFavorites();
  const [search, setSearch] = useState("");

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




  return (
    <>
      <TopBar title="Modo Plantão" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">

        {/* ── Shift Timer ── */}
        <DutyShiftTimer />

        {/* ── Critical Tools (Bedside) — Premium v2 ── */}
        <DutySection title="Ferramentas de Plantão" icon={<Activity size={14} className="text-destructive" />}>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "PCR Timer",       icon: Timer,  path: "/cpr-timer",            color: "#C0392B" },
              { label: "Round / Leitos",  icon: Users,  path: "/rounds",               color: "#0E4D8A" },
              { label: "Evolução por Voz", icon: Mic,   path: "/voice-evolution",      color: "#5B21B6" },
              { label: "Checagem Rx",     icon: Beaker, path: "/prescription-checker", color: "#065F46" },
            ].map(({ label, icon: Icon, path, color }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className="relative flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-border hover:border-border/70 hover:bg-muted/30 active:scale-[0.97] transition-all overflow-hidden"
              >
                <span
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: color }}
                />
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={16} strokeWidth={2.2} style={{ color }} />
                </div>
                <span className="text-[10px] font-heading font-semibold leading-tight text-center text-foreground">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </DutySection>


        {/* ── Search ── */}
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar protocolo, medicação, dose..."
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
                <button key={r.path + r.label} onClick={() => { navigate(r.path); setSearch(""); }} className="duty-list-item">
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

        {!searchResults && (
          <>
            {/* ── One-Tap Emergency — Premium v2 ── */}
            <DutySection title="Emergência One-Tap" icon={<Zap size={14} className="text-destructive" />}>
              <div className="grid grid-cols-4 gap-2">
                {emergencyOneTap.map(s => (
                  <button
                    key={s.path}
                    onClick={() => navigate(s.path)}
                    className="relative flex items-center justify-center px-2 py-3 rounded-xl bg-card border border-border hover:bg-muted/30 active:scale-[0.97] transition-all overflow-hidden text-[11px] font-heading font-semibold text-foreground"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-destructive" />
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5 mt-2">
                {emergencyMore.map(s => (
                  <button key={s.path} onClick={() => navigate(s.path)} className="duty-list-item">
                    <span className="flex-1 text-left text-xs">{s.label}</span>
                    <ChevronRight size={13} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </DutySection>


            {/* ── Quick Access Grid ── */}
            <DutySection title="Acesso Rápido">
              <div className="grid grid-cols-4 gap-2">
                {quickAccess.map(m => (
                  <button key={m.path} onClick={() => navigate(m.path)} className="duty-grid-btn">
                    <m.icon size={18} strokeWidth={1.8} />
                    <span className="text-[10px] leading-tight font-medium text-center">{m.label}</span>
                  </button>
                ))}
              </div>
            </DutySection>

            {/* ── IA Clínica — card claro com sotaque PULSO ── */}
            <button
              onClick={() => navigate("/clinical-ai")}
              className="relative w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-border/70 hover:bg-muted/20 active:scale-[0.99] transition-all overflow-hidden text-left"
            >
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles size={18} className="text-primary" strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-semibold text-sm text-foreground">IA Clínica</p>
                <p className="text-xs text-muted-foreground">Diagnóstico, conduta e prescrição assistidos por IA</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground shrink-0" />
            </button>


            {/* ── Handoff Checklist ── */}
            <DutyHandoffChecklist />

            {/* ── Bed Notes ── */}
            <DutyBedNotes />

            {/* ── Calculators ── */}
            <DutySection title="Calculadoras" icon={<Calculator size={14} />}>
              <div className="grid grid-cols-2 gap-1.5">
                {calculatorShortcuts.map(s => (
                  <button key={s.label} onClick={() => navigate(s.path)} className="duty-list-item">
                    <span className="flex-1 text-left text-xs">{s.label}</span>
                    <ChevronRight size={13} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </DutySection>

            {/* ── Favorites ── */}
            {favorites.length > 0 ? (
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
            ) : (
              <DutySection title="Favoritos" icon={<Star size={14} />}>
                <div className="text-center py-4 space-y-2">
                  <Star size={24} className="mx-auto text-muted-foreground/40" />
                  <p className="text-xs text-muted-foreground">Salve protocolos e medicações como favoritos para acesso rápido durante o plantão.</p>
                  <button onClick={() => navigate("/protocols")} className="text-xs text-primary font-heading font-medium">
                    Explorar protocolos →
                  </button>
                </div>
              </DutySection>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default function DutyMode() {
  return (
    <PremiumPageGuard feature="Modo Plantão" title="Modo Plantão">
      <DutyModeContent />
    </PremiumPageGuard>
  );
}
