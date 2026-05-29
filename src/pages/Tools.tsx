import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator, Baby, Droplets, Pill, FlaskConical, Microscope, Stethoscope,
  ShieldAlert, BookOpen, Activity, Syringe, ClipboardList, FileText, AlertTriangle,
  Search, Brain, ScanLine, Wrench, ChevronRight, ListChecks, Hash, Heart, WifiOff,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import { hapticLight } from "@/lib/haptics";
// premium v2: gradientes removidos — cards claros com barra lateral

type Tool = {
  label: string;
  sub: string;
  icon: any;
  path: string;
  tone: "primary" | "emerald" | "amber" | "violet" | "slate" | "danger" | "sky";
};

type Group = {
  title: string;
  sub: string;
  items: Tool[];
};

const groups: Group[] = [
  {
    title: "Acesso rápido",
    sub: "Seus favoritos e conteúdo offline",
    items: [
      { label: "Favoritos", sub: "Protocolos e ferramentas salvos", icon: Heart, path: "/favorites", tone: "primary" },
      { label: "Modo Offline", sub: "Baixe conteúdo para uso sem internet", icon: WifiOff, path: "/offline", tone: "primary" },
    ],
  },
  {
    title: "Cálculos & Escores",
    sub: "Calculadoras e escores clínicos validados",
    items: [
      { label: "Calculadoras Clínicas", sub: "53+ escores e fórmulas", icon: Calculator, path: "/calculators", tone: "primary" },
      { label: "Timer de PCR / ACLS", sub: "Compressões, ciclos e drogas", icon: Activity, path: "/cpr-timer", tone: "danger" },
    ],
  },
  {
    title: "Doses & Diluições",
    sub: "Cálculo de dose seguro à beira-leito",
    items: [
      { label: "Doses Pediátricas", sub: "Por peso, com limite adulto", icon: Baby, path: "/pediatric-doses", tone: "violet" },
      { label: "Diluições EV", sub: "50+ drogas críticas", icon: Droplets, path: "/iv-dilutions", tone: "sky" },
      { label: "Compatibilidade Y-site", sub: "Matriz de incompatibilidades", icon: Syringe, path: "/drug-compatibility", tone: "amber" },
    ],
  },
  {
    title: "Bulário & Farmácia",
    sub: "Medicamentos, interações e antimicrobianos",
    items: [
      { label: "Bulário", sub: "Base completa de medicamentos", icon: Pill, path: "/bulario", tone: "emerald" },
      { label: "Interações Medicamentosas", sub: "1.000+ pares de alto risco", icon: AlertTriangle, path: "/drug-interactions", tone: "danger" },
      { label: "Guia de Antimicrobianos", sub: "Empírico por foco/germe", icon: ShieldAlert, path: "/antimicrobials", tone: "amber" },
      { label: "Checagem de Prescrição", sub: "IA: interação, alergia, Y-site", icon: ListChecks, path: "/prescription-checker", tone: "primary" },
    ],
  },
  {
    title: "Diagnóstico & Apoio",
    sub: "Ferramentas de raciocínio clínico",
    items: [
      { label: "Diagnóstico por Sintoma", sub: "Fluxos de raciocínio", icon: Brain, path: "/diagnosis", tone: "violet" },
      { label: "Atlas Clínico", sub: "Imagens diagnósticas + IA", icon: ScanLine, path: "/clinical-atlas", tone: "sky" },
      { label: "Referência Laboratorial", sub: "140 exames com alertas", icon: Microscope, path: "/lab-reference", tone: "emerald" },
      { label: "CID-10", sub: "300+ códigos categorizados", icon: Hash, path: "/cid", tone: "slate" },
      { label: "Toxicologia", sub: "Antídotos e intoxicações", icon: FlaskConical, path: "/toxicology", tone: "danger" },
    ],
  },
  {
    title: "Procedimentos & Guias",
    sub: "Passo a passo para a beira-leito",
    items: [
      { label: "Guia de Procedimentos", sub: "IOT, CVC, drenagem e mais", icon: Stethoscope, path: "/procedure-guides", tone: "primary" },
      { label: "Guia de Anamnese", sub: "Roteiros por queixa", icon: BookOpen, path: "/anamnesis-guide", tone: "amber" },
      { label: "Checklists Clínicos", sub: "Beira-leito e segurança", icon: ClipboardList, path: "/checklists", tone: "emerald" },
    ],
  },
  {
    title: "Documentos & Evolução",
    sub: "Geração rápida de documentos clínicos",
    items: [
      { label: "Prescrições", sub: "1.265+ protocolos prontos", icon: FileText, path: "/prescriptions", tone: "primary" },
      { label: "Templates de Evolução", sub: "SOAP, I-PASS e mais", icon: FileText, path: "/evolution-templates", tone: "violet" },
      { label: "Resumo de Alta", sub: "IA estruturado com CID-10", icon: FileText, path: "/discharge-summary", tone: "sky" },
      { label: "Comparador de Condutas", sub: "SUS vs internacional", icon: FileText, path: "/conduct-comparator", tone: "amber" },
    ],
  },
];

// Cor semântica por tone — usada apenas no ícone + barra lateral (premium v2)
const toneColors: Record<Tool["tone"], string> = {
  primary: "hsl(var(--primary))",
  danger:  "hsl(var(--destructive))",
  slate:   "#374151",
  emerald: "#065F46",
  amber:   "#92400E",
  violet:  "#5B21B6",
  sky:     "#0E4D8A",
};

export default function Tools() {
  const navigate = useNavigate();
  const go = (path: string) => { hapticLight(); navigate(path); };

  return (
    <>
      <TopBar title="Ferramentas" />
      <div className="pb-28 max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto px-4 pt-4">
        {/* Intro */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
              <Wrench size={18} />
            </div>
            <h1 className="font-heading font-bold text-[20px] tracking-tight">Ferramentas Clínicas</h1>
          </div>
          <p className="text-[12.5px] text-muted-foreground leading-snug">
            Todas as calculadoras, doses, bulário, diagnóstico e documentos organizados por categoria.
          </p>
        </div>

        {/* Quick search */}
        <button
          onClick={() => navigate("/search")}
          className="w-full flex items-center gap-3 h-12 px-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all text-left mb-5"
        >
          <Search size={16} className="text-muted-foreground shrink-0" />
          <span className="text-[12.5px] text-muted-foreground truncate">
            Buscar ferramenta, cálculo ou medicamento
          </span>
        </button>

        {/* Groups */}
        <div className="space-y-6">
          {groups.map((g) => (
            <section key={g.title}>
              <div className="mb-3">
                <h3 className="font-heading font-bold text-[15px] tracking-tight text-foreground">
                  {g.title}
                </h3>
                <p className="text-[11.5px] text-muted-foreground mt-0.5">{g.sub}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                {g.items.map((t) => {
                  const color = toneColors[t.tone];
                  return (
                    <motion.button
                      key={t.path + t.label}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => go(t.path)}
                      className="group relative overflow-hidden p-3 rounded-xl text-left bg-card border border-border hover:border-border/70 hover:bg-muted/20 transition-all"
                    >
                      {/* Barra lateral semântica */}
                      <span
                        className="absolute left-0 top-0 bottom-0 w-0.5"
                        style={{ background: color }}
                      />

                      <div className="relative">
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-lg mb-2"
                          style={{ background: `${color}15` }}
                        >
                          <t.icon size={16} strokeWidth={2.2} style={{ color }} />
                        </div>
                        <div className="font-heading font-bold text-[12.5px] leading-tight tracking-tight text-foreground">
                          {t.label}
                        </div>
                        <div className="text-[10.5px] mt-0.5 leading-snug text-muted-foreground line-clamp-2">
                          {t.sub}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

