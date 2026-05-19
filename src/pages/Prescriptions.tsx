import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, ClipboardList, Stethoscope, Zap, Building, Baby, HeartPulse, Thermometer, Pill, Target, LogOut, FlaskConical, FileText, Brain, Eye, Droplets, Scissors, Syringe, Monitor, Shield, Flame, Ribbon, Activity, Bone, Skull, Wind, UtensilsCrossed, Bug, Ear, Palette, Cross, UserRound } from "lucide-react";
import { prescriptionCategories } from "@/data/prescriptions/index";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope size={16} className="text-primary" />,
  zap: <Zap size={16} className="text-primary" />,
  building: <Building size={16} className="text-primary" />,
  baby: <Baby size={16} className="text-primary" />,
  "heart-pulse": <HeartPulse size={16} className="text-primary" />,
  thermometer: <Thermometer size={16} className="text-primary" />,
  pill: <Pill size={16} className="text-primary" />,
  target: <Target size={16} className="text-primary" />,
  "log-out": <LogOut size={16} className="text-primary" />,
  "flask-conical": <FlaskConical size={16} className="text-primary" />,
  "file-text": <FileText size={16} className="text-primary" />,
  brain: <Brain size={16} className="text-primary" />,
  eye: <Eye size={16} className="text-primary" />,
  droplets: <Droplets size={16} className="text-primary" />,
  scissors: <Scissors size={16} className="text-primary" />,
  syringe: <Syringe size={16} className="text-primary" />,
  monitor: <Monitor size={16} className="text-primary" />,
  shield: <Shield size={16} className="text-primary" />,
  flame: <Flame size={16} className="text-primary" />,
  ribbon: <Ribbon size={16} className="text-primary" />,
  activity: <Activity size={16} className="text-primary" />,
  bone: <Bone size={16} className="text-primary" />,
  skull: <Skull size={16} className="text-primary" />,
  kidney: <Activity size={16} className="text-primary" />,
  wind: <Wind size={16} className="text-primary" />,
  utensils: <UtensilsCrossed size={16} className="text-primary" />,
  bug: <Bug size={16} className="text-primary" />,
  ear: <Ear size={16} className="text-primary" />,
  palette: <Palette size={16} className="text-primary" />,
  cross: <Cross size={16} className="text-primary" />,
  "user-round": <UserRound size={16} className="text-primary" />,
};

function PrescriptionsContent() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [query, setQuery] = useState("");
  const [expandedCat, setExpandedCat] = useState<string | null>(null);


  const filtered = prescriptionCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      cat.title.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0);

  return (
    <>
      <TopBar title="Prescrições" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        <p className="text-[11px] text-muted-foreground">Prescrições prontas para pronto socorro, internação, ambulatório e SUS</p>

        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar prescrição..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 h-12 text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {filtered.map(cat => (
          <div key={cat.id} className="space-y-2">
            <button
              onClick={() => setExpandedCat(expandedCat === cat.id ? null : cat.id)}
              className="relative overflow-hidden w-full flex items-center justify-between p-3.5 rounded-2xl text-white shadow-md ring-1 ring-white/15 active:scale-[0.98] transition-all"
              style={{ background: "linear-gradient(135deg, hsl(212 64% 16%) 0%, hsl(212 72% 28%) 100%)" }}
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="relative flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-white/18 ring-1 ring-white/30 flex items-center justify-center text-white shrink-0">
                  {cat.icon && iconMap[cat.icon]
                    ? <span className="[&_svg]:text-white [&_svg]:!stroke-white">{iconMap[cat.icon]}</span>
                    : <ClipboardList size={16} className="text-white" />}
                </div>
                <span className="font-heading font-semibold text-[13px] text-white text-left truncate">{cat.title}</span>
                <span className="text-[10px] text-white/80 bg-white/15 ring-1 ring-white/25 px-1.5 py-0.5 rounded-full shrink-0">{cat.items.length}</span>
              </div>
              <ChevronRight size={16} className={`relative text-white/85 shrink-0 transition-transform ${expandedCat === cat.id ? "rotate-90" : ""}`} />
            </button>

            {(expandedCat === cat.id || query.length >= 2) && (
              <div className="space-y-1.5 pl-1">
                {cat.items.map(item => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/prescriptions/${item.id}`)}
                    className="cursor-pointer rounded-xl bg-card border border-primary/15 hover:border-primary/40 shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
                  >
                    <div className="px-3.5 py-2.5 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-heading font-semibold text-[12.5px] text-foreground truncate">{item.title}</p>
                        <p className="text-[10.5px] text-muted-foreground mt-0.5 truncate">{item.type}</p>
                      </div>
                      <ChevronRight size={13} className="text-primary shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Prescriptions() {
  return (
    <PremiumPageGuard feature="Prescrições" title="Prescrições">
      <PrescriptionsContent />
    </PremiumPageGuard>
  );
}