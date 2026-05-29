import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Brain, Activity, Wind, Bone, Baby, Stethoscope, Bug, Pill, Droplets,
  ShieldAlert, ScanLine, Sparkles, Eye, Ear, Hand, FlaskConical,
  ClipboardList, Users, Flame, FileText, Layers, Search, ChevronRight, Beaker,
  Soup, MessagesSquare,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { fullProtocolCategories } from "@/data/fullProtocols/categories";
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
  gastroenterology: Soup,
  nephrology: Droplets,
  psychiatry: MessagesSquare,
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
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary dark:text-primary">
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
            className="pl-9 rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus-visible:ring-2 focus-visible:ring-primary/30 h-12 text-[13px]"
          />
        </div>

        {/* Atalho — todos */}
        <motion.button
          whileTap={{ scale: 0.99 }}
          onClick={() => { hapticLight(); navigate("/full-protocols"); }}
          className="relative overflow-hidden w-full flex items-center gap-3 p-3.5 pl-4 rounded-2xl bg-card ring-1 ring-border hover:ring-primary/30 shadow-sm transition-all text-left mb-4"
        >
          <span aria-hidden className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary shrink-0">
            <Layers size={16} />
          </div>
          <div className="relative flex-1 min-w-0">
            <div className="font-heading font-semibold text-[13px] text-foreground">Ver todos os protocolos</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              {fullProtocolMetas.length} protocolos em todas as especialidades
            </div>
          </div>
          <ChevronRight size={15} className="relative text-primary shrink-0" />
        </motion.button>

        {/* Grade de especialidades */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filtered.map((c) => {
            const Icon = iconByCat[c.id] ?? Stethoscope;
            const count = countByCat[c.id] ?? 0;
            return (
              <motion.button
                key={c.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => go(c.id)}
                className="relative overflow-hidden p-3 pl-3.5 rounded-2xl text-left bg-card ring-1 ring-border hover:ring-primary/30 shadow-sm transition-all"
              >
                <span aria-hidden className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
                <div className="relative">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg mb-2 bg-primary/10 text-primary">
                    <Icon size={16} strokeWidth={2.3} />
                  </div>
                  <div className="font-heading font-semibold text-[12px] text-foreground leading-tight">
                    {c.title}
                  </div>
                  <div className="text-[10.5px] text-muted-foreground mt-0.5">
                    {count} {count === 1 ? "protocolo" : "protocolos"}
                  </div>
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
