import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator, Baby, Droplets, Pill, FlaskConical, Microscope, Stethoscope,
  ShieldAlert, BookOpen, Activity, Syringe, ClipboardList, FileText, AlertTriangle,
  Search, Brain, ScanLine, Wrench, ChevronRight, ListChecks, Hash, Heart, WifiOff,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import { hapticLight } from "@/lib/haptics";

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

const toneStyles: Record<Tool["tone"], string> = {
  primary: "bg-primary/10 text-primary",
  danger: "bg-destructive/10 text-destructive",
  slate: "bg-primary/10 text-primary",
  emerald: "bg-primary/10 text-primary",
  amber: "bg-primary/10 text-primary",
  violet: "bg-primary/10 text-primary",
  sky: "bg-primary/10 text-primary",
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
          className="w-full flex items-center gap-3 h-12 px-4 rounded-2xl bg-card border border-border/70 shadow-sm hover:border-primary/30 transition-all text-left mb-5"
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
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {g.items.map((t) => {
                  const isDanger = t.tone === "danger";
                  const bg = isDanger
                    ? "linear-gradient(135deg, hsl(0 72% 26%) 0%, hsl(0 68% 36%) 60%, hsl(0 64% 44%) 100%)"
                    : "linear-gradient(135deg, hsl(212 64% 16%) 0%, hsl(212 72% 28%) 100%)";
                  const iconBg = isDanger
                    ? "bg-white/15 ring-1 ring-white/25 backdrop-blur-sm"
                    : "bg-white/18 ring-1 ring-white/30";
                  return (
                    <motion.button
                      key={t.path + t.label}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => go(t.path)}
                      className="group relative overflow-hidden p-4 min-h-[110px] rounded-2xl text-left shadow-md ring-1 ring-white/15 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      style={{ background: bg }}
                    >
                      {/* ECG pulsante de fundo — padronizado como na Home */}
                      <svg
                        className="absolute inset-x-0 bottom-0 w-full h-14 opacity-[0.18] pointer-events-none text-white"
                        viewBox="0 0 200 60"
                        preserveAspectRatio="none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M0 35 L40 35 L48 35 L56 18 L64 52 L72 35 L110 35 L118 35 L126 12 L134 58 L142 35 L200 35"
                          initial={{ pathLength: 0, opacity: 0.2 }}
                          animate={{ pathLength: 1, opacity: [0.2, 1, 0.4] }}
                          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                        />
                      </svg>
                      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                      <div className="relative">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${iconBg}`}>
                          <t.icon size={20} strokeWidth={2.3} className="text-white" />
                        </div>
                        <div className="font-heading font-bold text-[14.5px] leading-tight tracking-tight text-white">
                          {t.label}
                        </div>
                        <div className="text-[12px] mt-1 leading-snug font-medium text-white/85">
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
