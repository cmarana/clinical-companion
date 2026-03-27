import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle,
  AlertTriangle, Zap, Moon, Sun, ChevronRight, Bot, FlaskConical,
  Timer, CheckSquare, Hash, GitBranch, FileEdit
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const modules = [
  { label: "IA Clínica", icon: Bot, path: "/clinical-ai", highlight: true },
  { label: "Modo Plantão", icon: AlertTriangle, path: "/duty", accent: true },
  { label: "Emergência / UTI / SAMU", icon: Zap, path: "/emergency", accent: true },
  { label: "Bulário", icon: Pill, path: "/bulario" },
  { label: "Prescrições", icon: ClipboardList, path: "/prescriptions" },
  { label: "Protocolos Completos", icon: BookOpen, path: "/full-protocols" },
  { label: "Calculadoras", icon: Calculator, path: "/calculators" },
  { label: "Interações", icon: FlaskConical, path: "/drug-interactions" },
  { label: "Pediatria", icon: Baby, path: "/pediatrics" },
  { label: "Obstetrícia", icon: Heart, path: "/obstetrics" },
  { label: "Clínica", icon: Stethoscope, path: "/diagnosis" },
  { label: "Timer PCR", icon: Timer, path: "/cpr-timer", accent: true },
  { label: "Checklists", icon: CheckSquare, path: "/checklists" },
  { label: "CID-10", icon: Hash, path: "/cid" },
  { label: "Compat. Drogas", icon: GitBranch, path: "/drug-compatibility" },
  { label: "Evoluções", icon: FileEdit, path: "/evolution-templates" },
  { label: "Questões", icon: HelpCircle, path: "/quiz" },
];

const emergencyShortcuts = [
  { label: "PCR", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "Choque", path: "/protocols/choque-hipovolemico" },
  { label: "IOT", path: "/protocols/iot" },
  { label: "Convulsão", path: "/protocols/convulsao" },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleSearch = () => {
    if (searchQuery.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="px-3 pt-2 pb-20 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between h-10 mb-2">
        <span className="font-heading font-bold text-sm tracking-tight">PS Guide</span>
        <button onClick={toggleTheme} className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      {/* Search */}
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="relative mb-3">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar droga, doença, protocolo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 h-12 text-sm rounded-xl bg-muted/50 border-border"
        />
      </form>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {modules.map((m) => (
          <button
            key={m.path}
            onClick={() => navigate(m.path)}
            className={`flex items-center gap-3 px-3 py-3.5 rounded-xl border transition-all active:scale-[0.97] text-left ${
              (m as any).highlight
                ? "border-primary/40 bg-primary/5 hover:bg-primary/10 col-span-2"
                : m.accent
                  ? "border-destructive/30 bg-destructive/5 hover:bg-destructive/10"
                  : "border-border bg-card hover:bg-accent/50"
            }`}
          >
            <div className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${
              (m as any).highlight ? "bg-primary/15 text-primary" : m.accent ? "bg-destructive/15 text-destructive" : "bg-primary/10 text-primary"
            }`}>
              <m.icon size={18} />
            </div>
            <span className="font-heading font-semibold text-[13px] leading-tight">{m.label}</span>
          </button>
        ))}
      </div>

      {/* Emergency shortcuts */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-heading font-semibold text-xs flex items-center gap-1.5 text-destructive">
            <Zap size={12} /> Acesso Rápido
          </h2>
          <button onClick={() => navigate("/emergency")} className="text-[10px] text-muted-foreground flex items-center gap-0.5 hover:text-foreground">
            Ver todos <ChevronRight size={10} />
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {emergencyShortcuts.map((s) => (
            <button
              key={s.path}
              onClick={() => navigate(s.path)}
              className="px-3 py-1.5 rounded-lg border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all font-heading font-semibold text-xs"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
