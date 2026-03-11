import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle,
  AlertTriangle, Zap, Moon, Sun, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const modules = [
  { label: "Modo Plantão", icon: AlertTriangle, path: "/duty", accent: true },
  { label: "Emergência", icon: Zap, path: "/emergency", accent: true },
  { label: "Medicações", icon: Pill, path: "/medications" },
  { label: "Prescrições", icon: ClipboardList, path: "/prescriptions" },
  { label: "Protocolos", icon: FileText, path: "/protocols" },
  { label: "Calculadoras", icon: Calculator, path: "/calculators" },
  { label: "Pediatria", icon: Baby, path: "/pediatrics" },
  { label: "Obstetrícia", icon: Heart, path: "/obstetrics" },
  { label: "Clínica", icon: Stethoscope, path: "/diagnosis" },
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
    <div className="px-3 pt-2 pb-20 max-w-lg mx-auto">
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
      <div className="grid grid-cols-2 gap-2">
        {modules.map((m) => (
          <button
            key={m.path}
            onClick={() => navigate(m.path)}
            className={`flex items-center gap-3 px-3 py-3.5 rounded-xl border transition-all active:scale-[0.97] text-left ${
              m.accent
                ? "border-destructive/30 bg-destructive/5 hover:bg-destructive/10"
                : "border-border bg-card hover:bg-accent/50"
            }`}
          >
            <div className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${
              m.accent ? "bg-destructive/15 text-destructive" : "bg-primary/10 text-primary"
            }`}>
              <m.icon size={18} />
            </div>
            <span className="font-heading font-semibold text-[13px] leading-tight">{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
