import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle, Star,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const modules = [
  { label: "Medicações", icon: Pill, path: "/medications" },
  { label: "Prescrições", icon: ClipboardList, path: "/prescriptions" },
  { label: "Protocolos", icon: FileText, path: "/protocols" },
  { label: "Calculadoras", icon: Calculator, path: "/calculators" },
  { label: "Pediatria", icon: Baby, path: "/pediatrics" },
  { label: "Obstetrícia", icon: Heart, path: "/obstetrics" },
  { label: "Clínica Médica", icon: Stethoscope, path: "/diagnosis" },
  { label: "Internato", icon: BookOpen, path: "/internship" },
  { label: "Questões", icon: HelpCircle, path: "/quiz" },
  { label: "Favoritos", icon: Star, path: "/favorites" },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="px-4 pt-3 pb-24 max-w-lg mx-auto space-y-4">
      {/* Compact header */}
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-lg font-bold tracking-tight">PS Guide</h1>
        <span className="text-[10px] text-muted-foreground">Ed. 2026</span>
      </div>

      {/* Search */}
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar protocolo, medicação, doença..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 h-11 text-sm rounded-xl"
        />
      </form>

      {/* Duty Mode CTA */}
      <button
        onClick={() => navigate("/duty")}
        className="w-full flex items-center justify-center gap-3 p-5 rounded-2xl bg-destructive text-destructive-foreground font-heading font-bold text-lg active:scale-[0.98] transition-transform shadow-lg"
      >
        <AlertTriangle size={24} />
        MODO PLANTÃO
      </button>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-3">
        {modules.map((m) => (
          <button
            key={m.path}
            onClick={() => navigate(m.path)}
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card transition-all active:scale-[0.97] hover:shadow-md text-left"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
              <m.icon size={20} />
            </div>
            <span className="font-heading font-semibold text-sm leading-tight">{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
