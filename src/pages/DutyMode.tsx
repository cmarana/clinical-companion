import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import {
  Zap, Pill, ClipboardList, Calculator, FileText, Baby, Heart,
  AlertTriangle, Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const quickModules = [
  { label: "Emergência", icon: Zap, path: "/emergency", color: "bg-destructive text-destructive-foreground" },
  { label: "Medicações", icon: Pill, path: "/medications", color: "bg-primary text-primary-foreground" },
  { label: "Prescrições", icon: ClipboardList, path: "/prescriptions", color: "bg-primary text-primary-foreground" },
  { label: "Calculadoras", icon: Calculator, path: "/calculators", color: "bg-accent text-accent-foreground" },
  { label: "Protocolos", icon: FileText, path: "/protocols", color: "bg-accent text-accent-foreground" },
  { label: "Pediatria", icon: Baby, path: "/pediatrics", color: "bg-accent text-accent-foreground" },
  { label: "Obstetrícia", icon: Heart, path: "/obstetrics", color: "bg-accent text-accent-foreground" },
];

const emergencyShortcuts = [
  { label: "PCR", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "Choque", path: "/protocols/choque-hipovolemico" },
  { label: "Intubação", path: "/protocols/iot" },
  { label: "Dor torácica", path: "/protocols/dor-toracica" },
  { label: "Dispneia", path: "/protocols/dispneia" },
  { label: "Convulsão", path: "/protocols/convulsao" },
  { label: "Hipoglicemia", path: "/protocols/hipoglicemia" },
  { label: "Hipercalemia", path: "/protocols/hipercalemia" },
  { label: "Bradicardia", path: "/protocols/bradicardia" },
  { label: "Taquiarritmia", path: "/protocols/taquiarritmia" },
  { label: "EAP", path: "/protocols/eap" },
  { label: "Crise HAS", path: "/protocols/crise-hipertensiva" },
];

export default function DutyMode() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [search, setSearch] = useState("");

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Modo Plantão" className="border-destructive bg-destructive/5" />
        <PremiumGate />
      </>
    );
  }

  const filteredShortcuts = emergencyShortcuts.filter(s =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TopBar title="Modo Plantão" className="border-destructive bg-destructive/5" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        {/* Alert banner */}
        <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-xl p-3">
          <AlertTriangle size={18} className="text-destructive shrink-0" />
          <p className="font-heading font-semibold text-xs text-destructive">Acesso rápido — Menos cliques, condutas diretas</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Filtrar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 h-9 text-xs rounded-lg"
          />
        </div>

        {/* Quick modules */}
        <div className="grid grid-cols-4 gap-2">
          {quickModules.map(m => (
            <button
              key={m.path}
              onClick={() => navigate(m.path)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all active:scale-[0.96] ${m.color}`}
            >
              <m.icon size={20} />
              <span className="font-heading font-semibold text-[10px] leading-tight text-center">{m.label}</span>
            </button>
          ))}
        </div>

        {/* Emergency grid */}
        <div className="space-y-2">
          <h2 className="font-heading font-semibold text-sm flex items-center gap-2">
            <Zap size={14} className="text-destructive" />
            Protocolos de Emergência
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {filteredShortcuts.map(s => (
              <button
                key={s.path}
                onClick={() => navigate(s.path)}
                className="p-3.5 rounded-xl border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all text-left"
              >
                <p className="font-heading font-semibold text-xs">{s.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
