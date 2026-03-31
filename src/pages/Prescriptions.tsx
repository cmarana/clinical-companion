import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, ClipboardList, Stethoscope, Zap, Building, Baby, HeartPulse, Thermometer, Pill, Target, LogOut, FlaskConical, FileText, Brain, Eye, Droplets, Scissors, Syringe, Monitor, Shield, Flame, Ribbon, Activity, Bone, Skull, Wind, UtensilsCrossed, Bug, Ear, Palette, Cross, UserRound } from "lucide-react";
import { prescriptionCategories } from "@/data/prescriptions/index";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope size={16} className="text-primary" />,
  zap: <Zap size={16} className="text-red-500" />,
  building: <Building size={16} className="text-blue-500" />,
  baby: <Baby size={16} className="text-pink-500" />,
  "heart-pulse": <HeartPulse size={16} className="text-rose-500" />,
  thermometer: <Thermometer size={16} className="text-orange-500" />,
  pill: <Pill size={16} className="text-violet-500" />,
  target: <Target size={16} className="text-green-500" />,
  "log-out": <LogOut size={16} className="text-teal-500" />,
  "flask-conical": <FlaskConical size={16} className="text-amber-500" />,
  "file-text": <FileText size={16} className="text-indigo-500" />,
  brain: <Brain size={16} className="text-purple-500" />,
  eye: <Eye size={16} className="text-cyan-500" />,
  droplets: <Droplets size={16} className="text-red-400" />,
  scissors: <Scissors size={16} className="text-slate-500" />,
  syringe: <Syringe size={16} className="text-emerald-500" />,
  monitor: <Monitor size={16} className="text-blue-400" />,
  shield: <Shield size={16} className="text-gray-500" />,
  flame: <Flame size={16} className="text-orange-600" />,
  ribbon: <Ribbon size={16} className="text-pink-400" />,
  activity: <Activity size={16} className="text-yellow-500" />,
  bone: <Bone size={16} className="text-stone-500" />,
  skull: <Skull size={16} className="text-red-600" />,
  kidney: <Activity size={16} className="text-amber-600" />,
  wind: <Wind size={16} className="text-sky-500" />,
  utensils: <UtensilsCrossed size={16} className="text-amber-700" />,
  bug: <Bug size={16} className="text-lime-600" />,
  ear: <Ear size={16} className="text-pink-600" />,
  palette: <Palette size={16} className="text-fuchsia-500" />,
  cross: <Cross size={16} className="text-blue-600" />,
  "user-round": <UserRound size={16} className="text-slate-400" />,
};

export default function Prescriptions() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [query, setQuery] = useState("");
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Prescrições" />
        <PremiumGate />
      </>
    );
  }

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
          <div key={cat.id} className="space-y-2.5">
            <button
              onClick={() => setExpandedCat(expandedCat === cat.id ? null : cat.id)}
              className="w-full flex items-center justify-between p-4 rounded-[20px] bg-card shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  {cat.icon && iconMap[cat.icon] ? iconMap[cat.icon] : <ClipboardList size={16} className="text-primary" />}
                </div>
                <span className="font-heading font-semibold text-sm">{cat.title}</span>
                <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{cat.items.length}</span>
              </div>
              <ChevronRight size={16} className={`text-muted-foreground transition-transform ${expandedCat === cat.id ? "rotate-90" : ""}`} />
            </button>

            {(expandedCat === cat.id || query.length >= 2) && (
              <div className="space-y-2 pl-1">
                {cat.items.map(item => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/prescriptions/${item.id}`)}
                    className="cursor-pointer bg-card rounded-2xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border-0"
                  >
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-heading font-semibold text-[13px]">{item.title}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{item.type}</p>
                      </div>
                      <ChevronRight size={14} className="text-muted-foreground" />
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
