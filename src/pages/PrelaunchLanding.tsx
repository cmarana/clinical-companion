import { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity, ArrowRight, Bot, Brain, Building2, Calculator, CheckSquare, ClipboardList,
  Eye, FileText, FlaskConical, GitBranch, GraduationCap, Hash, HeartPulse,
  HelpCircle, Layers, Lock, Mail, MapPin, Mic, Phone, Pill, ScanLine, Scissors,
  ScrollText, Search, ShieldCheck, Siren, Sparkles, Stethoscope, Syringe, Timer,
  Users, BedDouble, ArrowRightLeft, Zap, BarChart3, AlertTriangle, Bookmark, WifiOff, Baby,
  Heart, Beaker, BookOpen, Droplets, ListChecks, FileEdit, Globe,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import pulsoLogoDark from "@/assets/pulso-logo-dark.png";

type Tool = { name: string; desc: string; icon: LucideIcon; path: string };
type Group = { id: string; title: string; subtitle: string; accent: string; icon: LucideIcon; tools: Tool[] };

const GROUPS: Group[] = [
  {
    id: "condutas",
    title: "Condutas & Protocolos",
    subtitle: "Decisões clínicas com referência e velocidade.",
    accent: "from-blue-500/20 to-blue-500/5 ring-blue-500/30 text-blue-300",
    icon: BookOpen,
    tools: [
      { name: "Modo Emergência", desc: "PCR, sepse, IAM, AVC com fluxogramas", icon: Siren, path: "/emergency" },
      { name: "Sala Vermelha", desc: "Atendimento de emergência imediata", icon: HeartPulse, path: "/emergency" },
      { name: "Modo Plantão", desc: "Timer de turno, leitos e passagem", icon: AlertTriangle, path: "/duty" },
      { name: "1.600+ Protocolos", desc: "Bibliotecas baseadas em evidência", icon: BookOpen, path: "/full-protocols" },
      { name: "Prot. Institucionais", desc: "Diretrizes do seu hospital", icon: Building2, path: "/institutional-protocols" },
      { name: "Comparar Condutas", desc: "SUS × Sociedades × Internacional", icon: ArrowRightLeft, path: "/conduct-comparator" },
      { name: "Diagnóstico por Sintoma", desc: "Diferenciais guiados", icon: Stethoscope, path: "/diagnosis" },
      { name: "Anamnese Guiada", desc: "Roteiros estruturados por queixa", icon: ClipboardList, path: "/anamnesis-guide" },
    ],
  },
  {
    id: "ia",
    title: "IA Clínica & Dra. Clara",
    subtitle: "Apoio inteligente para raciocínio e documentação.",
    accent: "from-blue-500/20 to-blue-500/5 ring-blue-500/30 text-blue-300",
    icon: Bot,
    tools: [
      { name: "IA Clínica", desc: "Chat, Caso, Exames, Plantão e Texto", icon: Bot, path: "/clinical-ai" },
      { name: "Exames por Imagem", desc: "RX, TC, RM, US, ECG por IA", icon: ScanLine, path: "/clinical-ai" },
      { name: "Simulador de Casos", desc: "Casos clínicos com IA", icon: Brain, path: "/case-simulator" },
      { name: "Checar Prescrição", desc: "IA verifica interações e doses", icon: ShieldCheck, path: "/prescription-checker" },
      { name: "Evolução por Voz", desc: "Voz → SOAP / I-PASS", icon: Mic, path: "/voice-evolution" },
      { name: "Resumo de Alta", desc: "IA gera alta hospitalar completa", icon: FileText, path: "/discharge-summary" },
    ],
  },
  {
    id: "medicamentos",
    title: "Medicamentos & Doses",
    subtitle: "Bulário, interações e diluições à mão.",
    accent: "from-emerald-500/20 to-emerald-500/5 ring-emerald-500/30 text-emerald-300",
    icon: Pill,
    tools: [
      { name: "Bulário", desc: "2.000+ fármacos com posologia", icon: Pill, path: "/bulario" },
      { name: "Prescrições Prontas", desc: "Modelos por diagnóstico", icon: FileText, path: "/prescriptions" },
      { name: "Interações", desc: "Checagem cruzada de fármacos", icon: FlaskConical, path: "/drug-interactions" },
      { name: "Compat. Drogas", desc: "Y-site para infusões simultâneas", icon: GitBranch, path: "/drug-compatibility" },
      { name: "Diluições IV", desc: "Reconstituição e infusão", icon: Droplets, path: "/iv-dilutions" },
      { name: "Antimicrobianos", desc: "ATB por foco e patógeno", icon: Layers, path: "/antimicrobials" },
    ],
  },
  {
    id: "calculadoras",
    title: "Calculadoras & Referência",
    subtitle: "Scores, valores críticos e cronômetros.",
    accent: "from-indigo-500/20 to-indigo-500/5 ring-indigo-500/30 text-indigo-300",
    icon: Calculator,
    tools: [
      { name: "53 Calculadoras", desc: "Glasgow, SOFA, Wells, HEART, MELD…", icon: Calculator, path: "/calculators" },
      { name: "Timer de PCR", desc: "Cronômetro ACLS com ciclos", icon: Timer, path: "/cpr-timer" },
      { name: "CID-10", desc: "Busca de códigos por nome ou número", icon: Hash, path: "/cid" },
      { name: "Valores Laboratoriais", desc: "Referências com alertas críticos", icon: Beaker, path: "/lab-reference" },
      { name: "Doses Pediátricas", desc: "Cálculo por peso e idade", icon: Baby, path: "/pediatric-doses" },
    ],
  },
  {
    id: "especialidades",
    title: "Especialidades",
    subtitle: "Conteúdo dedicado por área de atuação.",
    accent: "from-teal-500/20 to-teal-500/5 ring-teal-500/30 text-teal-300",
    icon: Stethoscope,
    tools: [
      { name: "Pediatria", desc: "Protocolos pediátricos completos", icon: Baby, path: "/pediatrics" },
      { name: "Obstetrícia", desc: "Emergências obstétricas e ginecologia", icon: Heart, path: "/obstetrics" },
      { name: "Atlas Clínico", desc: "ECG, Dermato, Radiologia", icon: Eye, path: "/clinical-atlas" },
      { name: "Guias de Procedimentos", desc: "IOT, CVC, drenagem, sutura", icon: Scissors, path: "/procedure-guides" },
    ],
  },
  {
    id: "estudo",
    title: "Estudo",
    subtitle: "Revisão espaçada, residência e desempenho.",
    accent: "from-amber-500/20 to-amber-500/5 ring-amber-500/30 text-amber-300",
    icon: GraduationCap,
    tools: [
      { name: "Questões Comentadas", desc: "Banco com gabarito comentado", icon: HelpCircle, path: "/quiz" },
      { name: "Flashcards SM-2", desc: "Revisão espaçada por especialidade", icon: Brain, path: "/flashcards" },
      { name: "Residência Médica", desc: "Questões por banca", icon: GraduationCap, path: "/residency-quiz" },
      { name: "Dashboard de Estudo", desc: "Streak, metas e desempenho", icon: BarChart3, path: "/study-dashboard" },
      { name: "Evoluções (templates)", desc: "SOAP, I-PASS, UTI, Pediatria", icon: ScrollText, path: "/evolution-templates" },
    ],
  },
  {
    id: "produtividade",
    title: "Produtividade no Plantão",
    subtitle: "Rotina organizada, mesmo nas piores noites.",
    accent: "from-rose-500/20 to-rose-500/5 ring-rose-500/30 text-rose-300",
    icon: BedDouble,
    tools: [
      { name: "Modo Rounds", desc: "Visita de leito com checklist", icon: BedDouble, path: "/rounds" },
      { name: "Checklists", desc: "IOT, ATLS, Sepse — passo a passo", icon: ListChecks, path: "/checklists" },
      { name: "Documentos", desc: "Receitas, atestados, relatórios", icon: FileEdit, path: "/documents" },
      { name: "Favoritos & Notas", desc: "Salve protocolos e anotações", icon: Bookmark, path: "/favorites" },
      { name: "Modo Offline", desc: "100% offline no plantão", icon: WifiOff, path: "/offline" },
    ],
  },
];

const TOTAL_TOOLS = GROUPS.reduce((acc, g) => acc + g.tools.length, 0);

const PERFIS = ["Médico", "Residente", "Acadêmico de medicina", "Enfermeiro", "Outro profissional da saúde"];

export default function PrelaunchLanding() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    nome: "", email: "", whatsapp: "", perfil_profissional: "",
    especialidade: "", cidade_estado: "", aceitou_comunicacao: true,
  });
  const [activeGroup, setActiveGroup] = useState<string>(GROUPS[0].id);
  const logo = pulsoLogoDark;

  const visibleTools = useMemo(
    () => GROUPS.find((g) => g.id === activeGroup)?.tools ?? [],
    [activeGroup]
  );

  useEffect(() => {
    document.title = "PULSO — O novo padrão da emergência está chegando";
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.perfil_profissional) {
      toast.error("Preencha nome, e-mail e perfil profissional.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Informe um e-mail válido.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("launch_signups").insert({
      nome: form.nome.trim().slice(0, 120),
      email: form.email.trim().toLowerCase().slice(0, 200),
      whatsapp: form.whatsapp.trim().slice(0, 40),
      perfil_profissional: form.perfil_profissional.slice(0, 60),
      especialidade: form.especialidade.trim().slice(0, 120),
      cidade_estado: form.cidade_estado.trim().slice(0, 80),
      aceitou_comunicacao: !!form.aceitou_comunicacao,
      origem: "landing_provisoria",
    });
    setSubmitting(false);
    if (error) {
      toast.error("Não foi possível concluir o cadastro. Tente novamente.");
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById("cadastro")?.offsetTop ?? 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0A0F1F] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* Background ambiente */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-blue-700/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-emerald-400/5 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0A0F1F]/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5">
            <img src={logo} alt="PULSO" className="h-7 w-auto" />
            <span className="hidden sm:inline text-sm font-semibold tracking-tight text-slate-100">
              PULSO <span className="text-slate-500 font-normal mx-1">|</span>
              <span className="text-blue-300/90 font-medium">Emergência Médica</span>
            </span>
          </button>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <button onClick={() => scrollTo("clara")} className="hover:text-white transition">Dra. Clara</button>
            <button onClick={() => scrollTo("ferramentas")} className="hover:text-white transition">Ferramentas</button>
            <button onClick={() => scrollTo("beneficios")} className="hover:text-white transition">Benefícios</button>
            <button onClick={() => scrollTo("cadastro")} className="hover:text-white transition">Cadastro</button>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 transition px-3 py-2"
            >
              <Lock className="h-3.5 w-3.5" /> Acesso restrito
            </Link>
            <Button
              onClick={() => scrollTo("cadastro")}
              className="bg-blue-500 hover:bg-blue-400 text-[#0A0F1F] font-semibold rounded-full px-4 sm:px-5"
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                <Sparkles className="h-3.5 w-3.5" /> Pré-lançamento · 2026
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-tight">
                O novo padrão da{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                  emergência
                </span>{" "}
                está chegando.
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
                O PULSO foi criado para transformar a forma como médicos acessam condutas, doses, calculadoras,
                protocolos e apoio clínico durante o plantão.
              </p>
              <p className="mt-3 text-sm text-slate-400 max-w-2xl">
                Uma plataforma médica desenvolvida para oferecer clareza, velocidade e segurança nos
                momentos em que cada segundo importa.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  onClick={() => scrollTo("cadastro")}
                  className="bg-blue-500 hover:bg-blue-400 text-[#0A0F1F] font-semibold rounded-full px-6"
                >
                  Quero me cadastrar para o lançamento
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg" variant="outline"
                  onClick={() => scrollTo("ferramentas")}
                  className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  Conhecer os recursos
                </Button>
              </div>

              <p className="mt-4 text-xs text-slate-500 max-w-md">
                Os primeiros cadastrados poderão receber acesso antecipado, condições especiais e benefícios
                exclusivos no lançamento.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
                {[
                  { n: TOTAL_TOOLS.toString(), l: "ferramentas clínicas" },
                  { n: "1", l: "IA — Dra. Clara" },
                  { n: "24/7", l: "pronto para o plantão" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-2xl font-semibold text-blue-300">{s.n}</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[360px] aspect-[9/19] rounded-[44px] border border-white/10 bg-gradient-to-b from-slate-900 to-[#06101F] shadow-[0_40px_120px_-30px_rgba(6,182,212,0.45)] p-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl bg-black/80" />
                <div className="h-full w-full rounded-[34px] bg-gradient-to-b from-[#0E1A2E] to-[#0A1322] p-5 overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>9:41</span>
                    <span className="flex items-center gap-1"><HeartPulse className="h-3 w-3 text-blue-300" /> PULSO</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-[11px] uppercase tracking-widest text-blue-300/70">Sala Vermelha</div>
                    <div className="mt-1 text-base font-semibold">Choque séptico</div>
                  </div>
                  {/* ECG line */}
                  <svg viewBox="0 0 300 80" className="mt-3 w-full h-14">
                    <motion.path
                      d="M0 40 L60 40 L70 20 L80 60 L90 10 L100 70 L110 40 L300 40"
                      stroke="hsl(180 100% 60%)" strokeWidth="2" fill="none"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                    />
                  </svg>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[
                      { l: "Conduta", v: "Bundle 1h" },
                      { l: "Lactato", v: "4.2 ↑" },
                      { l: "PAM alvo", v: "≥ 65" },
                      { l: "ATB empírico", v: "Pip-Tazo" },
                    ].map((c) => (
                      <div key={c.l} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">{c.l}</div>
                        <div className="text-sm font-medium text-slate-100">{c.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl bg-blue-500/10 border border-blue-400/20 p-3 flex items-start gap-2">
                    <Bot className="h-4 w-4 text-blue-300 mt-0.5" />
                    <div className="text-[11px] leading-snug">
                      <span className="text-blue-200 font-medium">Dra. Clara: </span>
                      Reavaliar volume após 30 mL/kg. Considerar noradrenalina precoce.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                className="absolute -left-4 top-12 hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2 shadow-xl"
              >
                <Calculator className="h-4 w-4 text-indigo-300" />
                <div className="text-xs">
                  <div className="font-medium">53 calculadoras</div>
                  <div className="text-slate-400">Glasgow · SOFA · Wells</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-16 hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2 shadow-xl"
              >
                <Pill className="h-4 w-4 text-emerald-300" />
                <div className="text-xs">
                  <div className="font-medium">2.000+ fármacos</div>
                  <div className="text-slate-400">Doses · Diluições</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              No plantão, segundos importam.
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Entre uma dúvida e uma decisão, existe um intervalo que pode mudar tudo. O PULSO foi pensado
              para reduzir esse intervalo com ferramentas rápidas, linguagem objetiva e acesso organizado
              ao que o médico realmente precisa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Menos improviso. Mais clareza.",
              "Menos abas abertas. Mais decisão.",
              "Menos tempo procurando. Mais tempo cuidando.",
              "Seu apoio clínico no bolso.",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRA. CLARA */}
      <section id="clara" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                <Bot className="h-3.5 w-3.5" /> IA Clínica
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                Conheça a <span className="text-blue-300">Dra. Clara</span>, a IA clínica do PULSO.
              </h2>
              <p className="mt-5 text-slate-300 leading-relaxed">
                A Dra. Clara foi criada para apoiar o médico na busca por informações clínicas, organização
                de raciocínio e consulta rápida durante a rotina de plantão.
              </p>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Ela funciona como uma assistente clínica inteligente dentro do PULSO, ajudando a encontrar
                caminhos, revisar condutas, consultar informações e tornar a experiência mais rápida e objetiva.
              </p>
              <p className="mt-6 text-[11px] text-slate-500 italic max-w-md">
                A Dra. Clara é uma ferramenta de apoio clínico e não substitui o julgamento médico,
                protocolos institucionais ou responsabilidade profissional.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mic, t: "Perguntas em linguagem natural", d: "Converse com a Dra. Clara como se buscasse apoio em tempo real." },
                { icon: Brain, t: "Apoio ao raciocínio médico", d: "Organize hipóteses e próximos passos com mais clareza." },
                { icon: Layers, t: "Integração com o PULSO", d: "Conectada às ferramentas do app, ela guia sua navegação." },
                { icon: Activity, t: "Clareza em momentos críticos", d: "Respostas objetivas, com linguagem médica e foco na prática." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5">
                  <div className="h-9 w-9 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 font-medium">{c.t}</div>
                  <div className="mt-1 text-sm text-slate-400 leading-relaxed">{c.d}</div>
                </div>
              ))}

              {/* Chat preview */}
              <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-[#0B1426] p-5 mt-2">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">DC</div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400">Você · agora</div>
                    <div className="mt-1 rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5 text-sm">
                      Dra. Clara, qual o próximo passo no choque séptico refratário?
                    </div>
                    <div className="mt-3 rounded-2xl rounded-tl-sm bg-blue-500/10 border border-blue-400/20 px-4 py-3 text-sm text-blue-50">
                      Considerar adicionar vasopressina à noradrenalina (até 0,03 U/min), reavaliar
                      perfusão tecidual e investigar foco infeccioso não controlado.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 39 FERRAMENTAS */}
      <section id="ferramentas" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-300/80">Ferramentas reais do PULSO</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {TOTAL_TOOLS} ferramentas para transformar sua rotina no plantão.
            </h2>
            <p className="mt-4 text-slate-300">
              Do cálculo rápido à conduta crítica, o PULSO reúne recursos essenciais para quem precisa
              decidir com segurança.
            </p>
          </div>

          {/* Tabs de categoria */}
          <div className="mt-10 flex flex-wrap gap-2">
            {GROUPS.map((g) => {
              const active = g.id === activeGroup;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveGroup(g.id)}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-blue-500 text-[#0A0F1F] shadow-lg shadow-blue-500/20"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <g.icon className="h-3.5 w-3.5" />
                  {g.title}
                  <span className={`text-[10px] rounded-full px-1.5 py-0.5 ${active ? "bg-[#0A0F1F]/20" : "bg-white/10"}`}>
                    {g.tools.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards das ferramentas do grupo ativo */}
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {visibleTools.map((t) => (
              <div
                key={t.name}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-4 hover:border-blue-400/30 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center shrink-0">
                    <t.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-slate-100 text-sm leading-tight truncate">{t.name}</div>
                    <div className="mt-1 text-[12px] text-slate-400 leading-snug">{t.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Counters */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {[
              { n: `${TOTAL_TOOLS}`, l: "ferramentas clínicas" },
              { n: "1", l: "IA clínica integrada" },
              { n: "Acesso", l: "rápido · objetivo" },
              { n: "Plantão", l: "feito para médicos" },
            ].map((c) => (
              <div key={c.l} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-xl font-semibold text-blue-300">{c.n}</div>
                <div className="text-[12px] text-slate-400 leading-tight mt-1">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Por que o PULSO chama atenção logo no primeiro uso?
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Activity, t: "Interface feita para o plantão", d: "Sem telas confusas. Acesso rápido, direto e intuitivo." },
            { icon: Layers, t: "Informação organizada", d: "Ferramentas clínicas reunidas em uma experiência limpa." },
            { icon: ShieldCheck, t: "Apoio na tomada de decisão", d: "Recursos pensados para momentos de pressão e urgência." },
            { icon: Bot, t: "IA clínica integrada", d: "A Dra. Clara amplia a experiência com apoio inteligente." },
            { icon: Lock, t: "Acesso restrito durante os testes", d: "O app é preparado com cuidado antes da liberação pública." },
            { icon: Sparkles, t: "Benefícios no lançamento", d: "Cadastrados poderão receber novidades e condições especiais." },
          ].map((b) => (
            <Card key={b.t} className="bg-white/[0.04] border-white/10 text-slate-100">
              <CardContent className="p-5">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center">
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-medium">{b.t}</div>
                <div className="mt-1.5 text-sm text-slate-400 leading-relaxed">{b.d}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-3xl">
            Feito para quem vive a medicina na prática.
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl">
            O PULSO nasce para quem precisa decidir com segurança em ambientes onde o tempo é curto e
            a responsabilidade é alta.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Médicos plantonistas", "Residentes", "Acadêmicos de medicina",
              "Médicos recém-formados", "Profissionais de urgência e emergência",
              "Equipes que precisam decidir rápido",
            ].map((p) => (
              <div key={p} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-3 text-sm">
                <Stethoscope className="h-4 w-4 text-blue-300 shrink-0" />
                <span className="text-slate-200">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CADASTRO */}
      <section id="cadastro" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              <Sparkles className="h-3.5 w-3.5" /> Benefícios de lançamento
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Cadastre-se para receber benefícios no lançamento.
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              O PULSO ainda está em fase de preparação para o lançamento oficial. Cadastre-se para
              acompanhar as novidades e receber possíveis benefícios exclusivos, acesso antecipado ou
              condições especiais quando o app for liberado.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {[
                "Acesso antecipado aos primeiros cadastrados.",
                "Condições especiais no lançamento oficial.",
                "Novidades e atualizações em primeira mão.",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckSquare className="h-4 w-4 text-emerald-300 mt-0.5 shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                    <CheckSquare className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">Cadastro realizado com sucesso.</h3>
                  <p className="mt-3 text-slate-300 max-w-md mx-auto">
                    Você receberá novidades e benefícios do PULSO assim que o lançamento estiver próximo.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome completo *">
                    <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" maxLength={120} className="bg-white/5 border-white/10 text-slate-100" />
                  </Field>
                  <Field label="E-mail *">
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="voce@email.com" maxLength={200} className="bg-white/5 border-white/10 text-slate-100" />
                  </Field>
                  <Field label="WhatsApp">
                    <Input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="(00) 00000-0000" maxLength={40} className="bg-white/5 border-white/10 text-slate-100" />
                  </Field>
                  <Field label="Cidade / Estado">
                    <Input value={form.cidade_estado} onChange={(e) => setForm({ ...form, cidade_estado: e.target.value })} placeholder="São Paulo / SP" maxLength={80} className="bg-white/5 border-white/10 text-slate-100" />
                  </Field>
                  <Field label="Perfil profissional *" className="sm:col-span-1">
                    <select
                      value={form.perfil_profissional}
                      onChange={(e) => setForm({ ...form, perfil_profissional: e.target.value })}
                      className="h-10 w-full rounded-md bg-white/5 border border-white/10 text-slate-100 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                    >
                      <option value="" className="bg-[#0A0F1F]">Selecione…</option>
                      {PERFIS.map((p) => (
                        <option key={p} value={p} className="bg-[#0A0F1F]">{p}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Especialidade ou área de interesse">
                    <Input value={form.especialidade} onChange={(e) => setForm({ ...form, especialidade: e.target.value })} placeholder="Emergência, UTI, Pediatria…" maxLength={120} className="bg-white/5 border-white/10 text-slate-100" />
                  </Field>

                  <div className="sm:col-span-2 flex items-start gap-3 mt-1">
                    <Checkbox
                      id="comm" checked={form.aceitou_comunicacao}
                      onCheckedChange={(v) => setForm({ ...form, aceitou_comunicacao: !!v })}
                      className="mt-0.5 border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <label htmlFor="comm" className="text-xs text-slate-300 leading-relaxed cursor-pointer">
                      Quero receber novidades e benefícios sobre o lançamento do PULSO.
                    </label>
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <Button
                      type="submit" disabled={submitting}
                      className="w-full bg-blue-500 hover:bg-blue-400 text-[#0A0F1F] font-semibold rounded-full h-11"
                    >
                      {submitting ? "Enviando…" : "Quero receber benefícios no lançamento"}
                    </Button>
                    <p className="mt-3 text-[11px] text-slate-500 text-center">
                      Ao enviar, você concorda com nossa{" "}
                      <Link to="/privacy" className="underline hover:text-blue-300">Política de Privacidade</Link>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-blue-700/10 to-emerald-500/5 p-10 sm:p-14 text-center">
            <img src={logo} alt="PULSO" className="h-9 w-auto mx-auto opacity-80" />
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight">
              O plantão vai mudar. Esteja entre os primeiros a saber.
            </h2>
            <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
              O PULSO está sendo preparado para entregar uma nova experiência de apoio clínico na
              emergência. Cadastre-se e receba novidades, benefícios e informações sobre o lançamento.
            </p>
            <Button
              size="lg" onClick={() => scrollTo("cadastro")}
              className="mt-8 bg-blue-500 hover:bg-blue-400 text-[#0A0F1F] font-semibold rounded-full px-7"
            >
              Quero receber benefícios no lançamento
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-6 items-start">
          <div>
            <img src={logo} alt="PULSO" className="h-7 w-auto" />
            <p className="mt-3 text-xs text-slate-400 max-w-xs">
              Clareza, velocidade e segurança para a rotina médica.
            </p>
          </div>
          <div className="text-sm text-slate-300 space-y-2">
            <Link to="/privacy" className="block hover:text-blue-300">Política de Privacidade</Link>
            <Link to="/terms" className="block hover:text-blue-300">Termos de Uso</Link>
            <Link to="/auth" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-300">
              <Lock className="h-3.5 w-3.5" /> Acesso restrito
            </Link>
          </div>
          <div className="text-xs text-slate-500 sm:text-right">
            PULSO Emergência Médica © {new Date().getFullYear()}.<br />Todos os direitos reservados.
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 text-[11px] text-slate-500 leading-relaxed">
            O conteúdo do PULSO é uma ferramenta de apoio clínico e não substitui o julgamento médico,
            protocolos institucionais ou a responsabilidade profissional do usuário.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label, children, className = "",
}: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <Label className="text-xs text-slate-300">{label}</Label>
      {children}
    </div>
  );
}
