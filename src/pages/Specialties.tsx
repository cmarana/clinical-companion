import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Brain, Activity, Wind, Bone, Baby, Stethoscope, Bug, Pill, Droplets,
  ShieldAlert, ScanLine, AlertTriangle, Sparkles, Eye, Ear, Hand, FlaskConical,
  ClipboardList, Users, Flame, FileText, Layers, Search, ChevronRight, Beaker,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { fullProtocolCategories } from "@/data/fullProtocols";
import { fullProtocolMetas } from "@/data/fullProtocols/metadata";
import { hapticLight } from "@/lib/haptics";

const iconByCat: Record<string, any> = {
  emergency: Flame,
  cardiology: Heart,
  neurology: Brain,
  sepsis: ShieldAlert,
  metabolic: FlaskConical,
  respiratory: Wind,
  trauma: Bone,
  obstetrics: Baby,
  gynecology: Sparkles,
  intoxication: Beaker,
  procedures: Hand,
  pediatrics: Baby,
  neonatal: Baby,
  infectious: Bug,
  gastroenterology: Pill,
  nephrology: Droplets,
  psychiatry: Brain,
  dermatology: ScanLine,
  ophthalmology: Eye,
  otorhinolaryngology: Ear,
  hematology: Droplets,
  geriatrics: Users,
  pain_palliative: Activity,
  triage: ClipboardList,
  sus_protocols: FileText,
  other_emergencies: Layers,
};

const tones = ["primary", "danger", "violet", "emerald", "amber", "sky", "slate"] as const;
const toneStyles: Record<(typeof tones)[number], string> = {
  primary: "bg-primary/10 text-primary",
  danger: "bg-destructive/10 text-destructive",
  slate: "bg-slate-500/10 text-slate-600 dark:text-slate-300",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  sky: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
};

export default function Specialties() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const countByCat = useMemo(() => {
    const map: Record<string, number> = {};
    fullProtocolMetas.forEach((p) => { map[p.categoryId] = (map[p.categoryId] ?? 0) + 1; });
    return map;
  }, []);

  const sorted = useMemo(
    () => [...fullProtocolCategories].sort((a, b) => a.order - b.order),
    []
  );

  const filtered = useMemo(() => {
    if (!q.trim()) return sorted;
    const s = q.toLowerCase();
    return sorted.filter((c) => c.title.toLowerCase().includes(s));
  }, [sorted, q]);

  const go = (catId: string) => {
    hapticLight();
    navigate(`/full-protocols?cat=${catId}`);
  };

  return (
    <>
      <TopBar title="Especialidades" />
      <div className="pb-28 max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto px-4 pt-4">
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Stethoscope size={18} />
            </div>
            <h1 className="font-heading font-bold text-[20px] tracking-tight">Especialidades</h1>
          </div>
          <p className="text-[12.5px] text-muted-foreground leading-snug">
            Mais de {fullProtocolMetas.length} protocolos organizados por área clínica.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            placeholder="Buscar especialidade..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9 rounded-2xl bg-card border-border/70 h-12 text-[13px]"
          />
        </div>

        {/* Atalho — todos */}
        <motion.button
          whileTap={{ scale: 0.99 }}
          onClick={() => { hapticLight(); navigate("/full-protocols"); }}
          className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all text-left mb-4"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
            <Layers size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-heading font-semibold text-[13.5px]">Ver todos os protocolos</div>
            <div className="text-[11.5px] text-muted-foreground mt-0.5">
              {fullProtocolMetas.length} protocolos em todas as especialidades
            </div>
          </div>
          <ChevronRight size={16} className="text-muted-foreground shrink-0" />
        </motion.button>

        {/* Grade de especialidades */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filtered.map((c, i) => {
            const Icon = iconByCat[c.id] ?? Stethoscope;
            const tone = tones[i % tones.length];
            const count = countByCat[c.id] ?? 0;
            return (
              <motion.button
                key={c.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => go(c.id)}
                className="p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all text-left"
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-xl mb-2.5 ${toneStyles[tone]}`}>
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="font-heading font-semibold text-[12.5px] text-foreground leading-tight">
                  {c.title}
                </div>
                <div className="text-[10.5px] text-muted-foreground mt-1">
                  {count} {count === 1 ? "protocolo" : "protocolos"}
                </div>
              </motion.button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            Nenhuma especialidade encontrada.
          </div>
        )}
      </div>
    </>
  );
}
