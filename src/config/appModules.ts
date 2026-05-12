/**
 * Fonte única de verdade dos módulos do app.
 *
 * Tanto a Home quanto a Landing consomem este arquivo. Adicionar/remover
 * uma entrada aqui propaga automaticamente para:
 *   - contagem exibida na Landing ("{N} ferramentas em um só app")
 *   - grade de módulos da Landing
 *   - seções da Home (Ferramentas / Especialidades / Estudo & Mais)
 *
 * Para evitar divergências futuras, qualquer módulo novo do app DEVE ser
 * registrado aqui antes de aparecer em qualquer uma das páginas.
 */
import {
  Activity, ArrowRightLeft, BarChart3, Baby, Beaker, Bookmark, BookOpen, Bot,
  Brain, Building2, Calculator, CheckSquare, ClipboardList, FileEdit, FileText,
  FlaskConical, GitBranch, GraduationCap, Hash, Heart, HeartPulse, HelpCircle,
  ListChecks, Mic, Pill, ScanLine, Scissors, ScrollText, Search, ShieldCheck,
  Siren, Stethoscope, Syringe, TestTubes, Timer, Users, WifiOff, Zap, Eye,
  Droplets, Bell, BedDouble, AlertTriangle, Layers, Globe,
  type LucideIcon,
} from "lucide-react";
import { DATASET_COUNTS, QUIZ_TOTAL, fmt } from "@/data/datasetCounts";

export type HomeVariant = "ai" | "emergency" | "cyan" | "default";
export type HomeSection = "tools" | "specialties" | "study";

export interface AppModule {
  /** ID único e estável */
  id: string;
  /** Rota interna */
  path: string;

  /** Rótulo curto exibido na Home */
  homeLabel: string;
  /** Subtítulo curto da Home */
  homeSub: string;
  /** Ícone usado na Home */
  homeIcon: LucideIcon;

  /** Título mais descritivo usado na Landing */
  landingTitle: string;
  /** Descrição mais longa usada na Landing */
  landingDesc: string;
  /** Ícone usado na Landing (pode diferir da Home) */
  landingIcon: LucideIcon;
  /** Classes de cor da Landing (text-* bg-*) */
  landingColor: string;

  /** Se aparece na grade primária da Home */
  homePrimary?: {
    variant: HomeVariant;
    /** Tags para filtragem por especialidade ("all" = sempre) */
    tags: string[];
  };
  /** Em qual seção secundária da Home aparece (se alguma) */
  homeSection?: HomeSection;

  /** Não mostrar este módulo na Landing */
  hiddenOnLanding?: boolean;
  /** Não mostrar este módulo na Home */
  hiddenOnHome?: boolean;
}

export const APP_MODULES: AppModule[] = [
  // ── DESTAQUES / PRIMARY ─────────────────────────────────────
  {
    id: "clinical-ai",
    path: "/clinical-ai",
    homeLabel: "Dra. Clara — IA Clínica", homeSub: "Assistente clínica · Chat, Caso, Exames e Plantão", homeIcon: Bot,
    landingTitle: "Dra. Clara — IA Clínica multimodal",
    landingDesc: "Sua assistente clínica · Chat · Caso · Exames (imagem) · Plantão · Texto",
    landingIcon: Bot, landingColor: "text-blue-500 bg-blue-500/10",
    homePrimary: { variant: "ai", tags: ["all"] },
  },
  {
    id: "clinical-ai-image",
    path: "/clinical-ai?tab=image",
    homeLabel: "Exames (imagem)", homeSub: "RX, TC, RM, US, ECG por IA", homeIcon: ScanLine,
    landingTitle: "Exames por imagem",
    landingDesc: "RX, TC, RM, US, ECG analisados por IA multimodal",
    landingIcon: ScanLine, landingColor: "text-sky-500 bg-sky-500/10",
    homePrimary: { variant: "ai", tags: ["all"] },
  },
  {
    id: "duty",
    path: "/duty",
    homeLabel: "Modo Plantão", homeSub: "Guia completo para o plantão", homeIcon: AlertTriangle,
    landingTitle: "Modo Plantão",
    landingDesc: "Timer de turno, leitos e passagem de plantão",
    landingIcon: Globe, landingColor: "text-indigo-400 bg-indigo-400/10",
    homePrimary: { variant: "emergency", tags: ["emergencia", "clinica-medica", "cirurgia", "generalista"] },
  },
  {
    id: "emergency",
    path: "/emergency",
    homeLabel: "Emergência", homeSub: "Algoritmos de urgência / UTI", homeIcon: Zap,
    landingTitle: "Modo Emergência",
    landingDesc: "PCR, Sepse, IAM, AVC com fluxogramas interativos",
    landingIcon: Siren, landingColor: "text-red-500 bg-red-500/10",
    homePrimary: { variant: "emergency", tags: ["emergencia", "cirurgia", "generalista"] },
  },
  {
    id: "bulario",
    path: "/bulario",
    homeLabel: "Bulário", homeSub: "2.000+ fármacos", homeIcon: Pill,
    landingTitle: "2.000+ Medicamentos",
    landingDesc: "Doses, diluições, interações, ajuste renal/hepático",
    landingIcon: Pill, landingColor: "text-emerald-500 bg-emerald-500/10",
    homePrimary: { variant: "default", tags: ["all"] },
  },
  {
    id: "full-protocols",
    path: "/full-protocols",
    homeLabel: "Protocolos", homeSub: "1.600+ protocolos clínicos", homeIcon: BookOpen,
    landingTitle: "1.600+ Protocolos",
    landingDesc: "26 categorias com referências e níveis de evidência",
    landingIcon: BookOpen, landingColor: "text-cyan-500 bg-cyan-500/10",
    homePrimary: { variant: "default", tags: ["all"] },
  },
  {
    id: "prescriptions",
    path: "/prescriptions",
    homeLabel: "Prescrições", homeSub: "Modelos prontos por diagnóstico", homeIcon: FileText,
    landingTitle: "Prescrições Prontas",
    landingDesc: "Modelos por diagnóstico + checagem de interações",
    landingIcon: FileText, landingColor: "text-amber-500 bg-amber-500/10",
    homePrimary: { variant: "default", tags: ["all"] },
  },

  // ── ESPECIALIDADES (também elegíveis para primary) ─────────
  {
    id: "pediatrics",
    path: "/pediatrics",
    homeLabel: "Pediatria", homeSub: "Protocolos pediátricos", homeIcon: Baby,
    landingTitle: "Pediatria",
    landingDesc: "Protocolos pediátricos completos",
    landingIcon: Baby, landingColor: "text-teal-500 bg-teal-500/10",
    homePrimary: { variant: "cyan", tags: ["pediatria"] },
    homeSection: "specialties",
  },
  {
    id: "pediatric-doses",
    path: "/pediatric-doses",
    homeLabel: "Doses Pediátricas", homeSub: "Calculadora por peso", homeIcon: Calculator,
    landingTitle: "Doses Pediátricas",
    landingDesc: "Cálculo automático por peso e idade",
    landingIcon: Baby, landingColor: "text-pink-500 bg-pink-500/10",
    homePrimary: { variant: "cyan", tags: ["pediatria"] },
    homeSection: "specialties",
  },
  {
    id: "obstetrics",
    path: "/obstetrics",
    homeLabel: "Obstetrícia", homeSub: "Emergências obstétricas", homeIcon: Heart,
    landingTitle: "Obstetrícia",
    landingDesc: "Emergências obstétricas e ginecologia",
    landingIcon: Heart, landingColor: "text-pink-600 bg-pink-600/10",
    homePrimary: { variant: "default", tags: ["ginecologia-obstetricia"] },
    homeSection: "specialties",
  },
  {
    id: "antimicrobials",
    path: "/antimicrobials",
    homeLabel: "Antimicrobianos", homeSub: "ATB por foco infeccioso", homeIcon: FileText,
    landingTitle: "Guia Antimicrobiano",
    landingDesc: "ATB por foco infeccioso e patógeno",
    landingIcon: Layers, landingColor: "text-green-500 bg-green-500/10",
    homePrimary: { variant: "default", tags: ["infectologia", "emergencia"] },
    homeSection: "specialties",
  },
  {
    id: "diagnosis",
    path: "/diagnosis",
    homeLabel: "Clínica", homeSub: "Diagnóstico por sintoma", homeIcon: Stethoscope,
    landingTitle: "Diagnóstico por Sintoma",
    landingDesc: "Guias de diagnóstico diferencial",
    landingIcon: Stethoscope, landingColor: "text-sky-500 bg-sky-500/10",
    homeSection: "specialties",
  },
  {
    id: "clinical-atlas",
    path: "/clinical-atlas",
    homeLabel: "Atlas Clínico", homeSub: "ECG, Dermato, Radiologia", homeIcon: ScanLine,
    landingTitle: "Atlas Clínico",
    landingDesc: "Imagens de referência por especialidade",
    landingIcon: Eye, landingColor: "text-cyan-400 bg-cyan-400/10",
    homeSection: "specialties",
  },
  {
    id: "procedure-guides",
    path: "/procedure-guides",
    homeLabel: "Procedimentos", homeSub: "IOT, CVC, drenagem, sutura", homeIcon: Syringe,
    landingTitle: "Guias de Procedimentos",
    landingDesc: "CVC, IOT, drenagem, punção lombar",
    landingIcon: Scissors, landingColor: "text-gray-500 bg-gray-500/10",
    homeSection: "specialties",
  },
  {
    id: "anamnesis-guide",
    path: "/anamnesis-guide",
    homeLabel: "Anamnese", homeSub: "Roteiro completo estruturado", homeIcon: ClipboardList,
    landingTitle: "Anamnese Guiada",
    landingDesc: "Roteiros estruturados por queixa",
    landingIcon: ClipboardList, landingColor: "text-blue-400 bg-blue-400/10",
    homeSection: "specialties",
  },

  // ── FERRAMENTAS ─────────────────────────────────────────────
  {
    id: "conduct-comparator",
    path: "/conduct-comparator",
    homeLabel: "Comparar Condutas", homeSub: "SUS × Sociedades × Internacional", homeIcon: ArrowRightLeft,
    landingTitle: "Comparar Condutas",
    landingDesc: "SUS × Sociedades × Internacional lado a lado",
    landingIcon: ArrowRightLeft, landingColor: "text-blue-600 bg-blue-600/10",
    homeSection: "tools",
  },
  {
    id: "prescription-checker",
    path: "/prescription-checker",
    homeLabel: "Checar Prescrição", homeSub: "IA verifica interações e doses", homeIcon: ShieldCheck,
    landingTitle: "Checar Prescrição",
    landingDesc: "IA verifica interações, doses e alergias",
    landingIcon: ShieldCheck, landingColor: "text-emerald-600 bg-emerald-600/10",
    homeSection: "tools",
  },
  {
    id: "rounds",
    path: "/rounds",
    homeLabel: "Modo Rounds", homeSub: "Visita de leito com checklist", homeIcon: BedDouble,
    landingTitle: "Visita / Rounds",
    landingDesc: "Gestão de pacientes e pendências",
    landingIcon: Users, landingColor: "text-teal-400 bg-teal-400/10",
    homeSection: "tools",
  },
  {
    id: "calculators",
    path: "/calculators",
    homeLabel: "Calculadoras", homeSub: "Scores e doses", homeIcon: Calculator,
    landingTitle: "53 Calculadoras",
    landingDesc: "Glasgow, SOFA, Wells, HEART, MELD, NEWS, APACHE II",
    landingIcon: Calculator, landingColor: "text-indigo-500 bg-indigo-500/10",
    homeSection: "tools",
  },
  {
    id: "drug-interactions",
    path: "/drug-interactions",
    homeLabel: "Interações", homeSub: "Checagem medicamentosa", homeIcon: FlaskConical,
    landingTitle: "Interações Medicamentosas",
    landingDesc: "Verificação cruzada entre fármacos",
    landingIcon: Activity, landingColor: "text-red-300 bg-red-300/10",
    homeSection: "tools",
  },
  {
    id: "drug-compatibility",
    path: "/drug-compatibility",
    homeLabel: "Compat. Drogas", homeSub: "Compatibilidade EV", homeIcon: GitBranch,
    landingTitle: "Compatibilidade EV",
    landingDesc: "Matriz Y-site para infusões simultâneas",
    landingIcon: GitBranch, landingColor: "text-violet-600 bg-violet-600/10",
    homeSection: "tools",
  },
  {
    id: "iv-dilutions",
    path: "/iv-dilutions",
    homeLabel: "Diluições IV", homeSub: "Reconstituição e infusão", homeIcon: Droplets,
    landingTitle: "Diluições IV",
    landingDesc: "Matriz de compatibilidade em Y",
    landingIcon: FlaskConical, landingColor: "text-violet-500 bg-violet-500/10",
    homeSection: "tools",
  },
  {
    id: "cpr-timer",
    path: "/cpr-timer",
    homeLabel: "Timer PCR", homeSub: "Cronômetro ACLS", homeIcon: Timer,
    landingTitle: "Timer de PCR (ACLS)",
    landingDesc: "Ciclos de 2 min com alertas sonoros",
    landingIcon: Timer, landingColor: "text-red-400 bg-red-400/10",
    homeSection: "tools",
  },
  {
    id: "cid",
    path: "/cid",
    homeLabel: "CID-10", homeSub: "Busca de códigos", homeIcon: Hash,
    landingTitle: "Busca CID-10",
    landingDesc: "Pesquise códigos por nome ou número",
    landingIcon: Search, landingColor: "text-slate-500 bg-slate-500/10",
    homeSection: "tools",
  },
  {
    id: "lab-reference",
    path: "/lab-reference",
    homeLabel: "Valores de Ref.", homeSub: "Exames laboratoriais", homeIcon: TestTubes,
    landingTitle: "Valores Laboratoriais",
    landingDesc: "Referências com alertas de valores críticos",
    landingIcon: Beaker, landingColor: "text-lime-500 bg-lime-500/10",
    homeSection: "tools",
  },
  {
    id: "checklists",
    path: "/checklists",
    homeLabel: "Checklists", homeSub: "Verificações de segurança", homeIcon: CheckSquare,
    landingTitle: "Checklists",
    landingDesc: "IOT, ATLS, Sepse — passo a passo",
    landingIcon: ListChecks, landingColor: "text-teal-500 bg-teal-500/10",
    homeSection: "tools",
  },
  {
    id: "institutional-protocols",
    path: "/institutional-protocols",
    homeLabel: "Prot. Institucionais", homeSub: "Protocolos do seu hospital", homeIcon: Building2,
    landingTitle: "Protocolos Institucionais",
    landingDesc: "Diretrizes do seu hospital sempre à mão",
    landingIcon: Building2, landingColor: "text-amber-600 bg-amber-600/10",
    homeSection: "tools",
  },

  // ── ESTUDO & MAIS ───────────────────────────────────────────
  {
    id: "case-simulator",
    path: "/case-simulator",
    homeLabel: "Simulador de Casos", homeSub: "Casos clínicos com IA", homeIcon: Brain,
    landingTitle: "Simulador de Casos",
    landingDesc: "Casos clínicos interativos com IA",
    landingIcon: Brain, landingColor: "text-purple-400 bg-purple-400/10",
    homeSection: "study",
  },
  {
    id: "quiz",
    path: "/quiz",
    homeLabel: "Questões", homeSub: `${fmt(QUIZ_TOTAL)} questões comentadas`, homeIcon: HelpCircle,
    landingTitle: `${fmt(QUIZ_TOTAL)} Questões comentadas`,
    landingDesc: "Banco de questões com gabarito comentado",
    landingIcon: HelpCircle, landingColor: "text-yellow-600 bg-yellow-600/10",
    homeSection: "study",
  },
  {
    id: "flashcards",
    path: "/flashcards",
    homeLabel: "Flashcards", homeSub: `${fmt(DATASET_COUNTS.flashcards)} cards · revisão espaçada`, homeIcon: Brain,
    landingTitle: `${fmt(DATASET_COUNTS.flashcards)} Flashcards`,
    landingDesc: "Revisão espaçada (SM-2) para residência",
    landingIcon: GraduationCap, landingColor: "text-yellow-500 bg-yellow-500/10",
    homeSection: "study",
  },
  {
    id: "residency-quiz",
    path: "/residency-quiz",
    homeLabel: "Residência", homeSub: "Questões por banca", homeIcon: GraduationCap,
    landingTitle: "Residência médica",
    landingDesc: "Questões por banca para preparação",
    landingIcon: GraduationCap, landingColor: "text-amber-600 bg-amber-600/10",
    homeSection: "study",
  },
  {
    id: "study-dashboard",
    path: "/study-dashboard",
    homeLabel: "Dashboard", homeSub: "Streak e progresso", homeIcon: BarChart3,
    landingTitle: "Dashboard de Estudo",
    landingDesc: "Streak, metas e desempenho por especialidade",
    landingIcon: BarChart3, landingColor: "text-rose-400 bg-rose-400/10",
    homeSection: "study",
  },
  {
    id: "voice-evolution",
    path: "/voice-evolution",
    homeLabel: "Evolução por Voz", homeSub: "Voz → SOAP / I-PASS com IA", homeIcon: Mic,
    landingTitle: "Evolução por Voz",
    landingDesc: "Dite evoluções e gere documentos clínicos",
    landingIcon: Mic, landingColor: "text-fuchsia-500 bg-fuchsia-500/10",
    homeSection: "study",
  },
  {
    id: "evolution-templates",
    path: "/evolution-templates",
    homeLabel: "Evoluções", homeSub: "Templates de evolução", homeIcon: FileEdit,
    landingTitle: "Evoluções Médicas",
    landingDesc: "SOAP, I-PASS, UTI, Pediatria, Psiquiatria",
    landingIcon: ScrollText, landingColor: "text-orange-500 bg-orange-500/10",
    homeSection: "study",
  },
  {
    id: "discharge-summary",
    path: "/discharge-summary",
    homeLabel: "Resumo de Alta", homeSub: "IA gera alta completa", homeIcon: FileText,
    landingTitle: "Resumo de Alta",
    landingDesc: "IA gera alta hospitalar completa em segundos",
    landingIcon: FileText, landingColor: "text-cyan-600 bg-cyan-600/10",
    homeSection: "study",
  },
  {
    id: "documents",
    path: "/documents",
    homeLabel: "Documentos", homeSub: "Receitas e atestados", homeIcon: FileText,
    landingTitle: "Gerador de Documentos",
    landingDesc: "Atestados, relatórios, resumos de alta",
    landingIcon: FileText, landingColor: "text-emerald-400 bg-emerald-400/10",
    homeSection: "study",
  },
  {
    id: "favorites",
    path: "/favorites",
    homeLabel: "Favoritos & Notas", homeSub: "Salve protocolos e anotações", homeIcon: Bookmark,
    landingTitle: "Favoritos & Notas",
    landingDesc: "Salve protocolos e anotações pessoais",
    landingIcon: Bookmark, landingColor: "text-amber-400 bg-amber-400/10",
    homeSection: "study",
  },
  {
    id: "offline",
    path: "/offline",
    homeLabel: "Modo Offline", homeSub: "Plantão sem internet", homeIcon: WifiOff,
    landingTitle: "100% Offline",
    landingDesc: "Todo o conteúdo sem internet",
    landingIcon: WifiOff, landingColor: "text-purple-500 bg-purple-500/10",
    homeSection: "study",
  },
  {
    id: "sala-vermelha",
    path: "/emergency",
    homeLabel: "Sala Vermelha", homeSub: "Atendimento de emergência imediata", homeIcon: HeartPulse,
    landingTitle: "Sala Vermelha",
    landingDesc: "Atendimento de emergência imediata",
    landingIcon: HeartPulse, landingColor: "text-rose-500 bg-rose-500/10",
    hiddenOnHome: true, // já há "Emergência" no Home
  },
];

/** Lista exibida na Landing (mesmos itens, na mesma ordem da config) */
export const LANDING_MODULES = APP_MODULES.filter((m) => !m.hiddenOnLanding);

/** Contagem oficial exibida na headline da Landing */
export const APP_MODULES_COUNT = LANDING_MODULES.length;

/** Todos os módulos elegíveis para a grade primária da Home */
export const HOME_PRIMARY_MODULES = APP_MODULES.filter(
  (m) => m.homePrimary && !m.hiddenOnHome
);

/** Módulos de uma seção secundária da Home */
export function getHomeSection(section: HomeSection): AppModule[] {
  return APP_MODULES.filter((m) => m.homeSection === section && !m.hiddenOnHome);
}
