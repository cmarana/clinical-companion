import {
  Bot, AlertTriangle, Zap, Pill, ClipboardList, BookOpen, Baby, Calculator,
  Heart, FileText, FlaskConical, GitBranch, Droplets, Timer, Hash, TestTubes,
  CheckSquare, Building2, Stethoscope, ScanLine, Syringe, Brain, HelpCircle,
  GraduationCap, BarChart3, Mic, FileEdit, WifiOff, Wrench, Library,
  ArrowRightLeft, ShieldCheck, BedDouble, Shield, Activity, Clock, Share2,
  Trophy, Newspaper
} from "lucide-react";
import pulsoLogoDark from "@/assets/pulso-logo-dark.png";

const primaryModules = [
  { label: "IA Clínica", sub: "Análise de conduta em tempo real com inteligência artificial", icon: Bot, color: "from-blue-600 to-indigo-600 text-white" },
  { label: "Modo Plantão", sub: "Timer, passagem de plantão, leitos e checklist completo", icon: AlertTriangle, color: "from-orange-500 to-red-500 text-white" },
  { label: "Emergência", sub: "PCR, Sepse, IAM, AVC, Anafilaxia — algoritmos de urgência", icon: Zap, color: "from-red-500 to-rose-600 text-white" },
  { label: "Bulário 2.000+ Fármacos", sub: "Doses, diluição, ajuste renal/hepático, interações, gestação", icon: Pill, color: "from-emerald-500 to-green-600 text-white" },
  { label: "Prescrições Prontas", sub: "Modelos de prescrição por diagnóstico, sintoma e classe", icon: ClipboardList, color: "from-amber-500 to-yellow-600 text-white" },
  { label: "1.000+ Protocolos", sub: "Fluxogramas interativos de todas as especialidades", icon: BookOpen, color: "from-cyan-500 to-blue-500 text-white" },
];

const toolsModules = [
  { label: "Comparar Condutas", sub: "SUS × Sociedades × Internacional", icon: ArrowRightLeft },
  { label: "Checar Prescrição", sub: "IA verifica interações, doses e alergias", icon: ShieldCheck },
  { label: "Modo Rounds", sub: "Visita de leito com checklist e voz", icon: BedDouble },
  { label: "53 Calculadoras Médicas", sub: "Glasgow, SOFA, Wells, CHA2DS2, clearance e mais", icon: Calculator },
  { label: "Interações Medicamentosas", sub: "Checagem cruzada de mais de 2.000 fármacos", icon: FlaskConical },
  { label: "Compatibilidade Drogas EV", sub: "Y-site, seringa e infusão simultânea", icon: GitBranch },
  { label: "Diluições IV", sub: "Reconstituição, volume e velocidade de infusão", icon: Droplets },
  { label: "Timer PCR / ACLS", sub: "Cronômetro com ciclos, drogas e choques", icon: Timer },
  { label: "Busca CID-10", sub: "Pesquisa rápida de códigos CID", icon: Hash },
  { label: "Valores de Referência", sub: "Hemograma, bioquímica, gasometria e mais", icon: TestTubes },
  { label: "Checklists de Segurança", sub: "Cirurgia segura, IOT, CVC, drenagem", icon: CheckSquare },
  { label: "Protocolos Institucionais", sub: "Protocolos do seu hospital com equipe", icon: Building2 },
];

const specialtyModules = [
  { label: "Pediatria", sub: "Protocolos pediátricos completos", icon: Baby },
  { label: "Doses Pediátricas", sub: "Calculadora por peso e idade", icon: Calculator },
  { label: "Obstetrícia", sub: "Emergências obstétricas e parto", icon: Heart },
  { label: "Antimicrobianos", sub: "ATB por foco infeccioso e perfil", icon: FileText },
  { label: "Clínica Médica", sub: "Diagnóstico diferencial por sintoma", icon: Stethoscope },
  { label: "Atlas Clínico", sub: "ECG, Dermatologia, Radiologia", icon: ScanLine },
  { label: "Procedimentos", sub: "IOT, CVC, drenagem, sutura, paracentese", icon: Syringe },
  { label: "Anamnese Guiada", sub: "Roteiro completo e estruturado", icon: ClipboardList },
];

const studyModules = [
  { label: "Simulador de Casos Clínicos", sub: "Casos interativos com IA e feedback", icon: Brain },
  { label: "Banco de Questões", sub: "Estudo por questões comentadas", icon: HelpCircle },
  { label: "Flashcards (Anki)", sub: "Revisão espaçada inteligente", icon: Brain },
  { label: "Questões de Residência", sub: "Questões por banca e especialidade", icon: GraduationCap },
  { label: "Dashboard de Estudo", sub: "Streak, progresso e conquistas", icon: BarChart3 },
  { label: "Evolução por Voz", sub: "Fale e a IA estrutura em SOAP / I-PASS", icon: Mic },
  { label: "Templates de Evolução", sub: "Modelos de evolução médica prontos", icon: FileEdit },
  { label: "Resumo de Alta", sub: "IA gera documento de alta completo", icon: FileText },
  { label: "Gerador de Documentos", sub: "Receitas, atestados e laudos", icon: FileText },
  { label: "Modo Offline", sub: "Conteúdo salvo para plantão sem internet", icon: WifiOff },
];

const highlights = [
  { icon: Activity, label: "Timer PCR com ACLS integrado" },
  { icon: Clock, label: "Modo Plantão com passagem e leitos" },
  { icon: Shield, label: "1.000+ protocolos com fluxogramas" },
  { icon: Share2, label: "QR Code e link direto para compartilhar" },
  { icon: Trophy, label: "Conquistas, badges e streaks" },
  { icon: Newspaper, label: "Atualizações e changelog médico" },
  { icon: WifiOff, label: "Funciona 100% offline no plantão" },
  { icon: Mic, label: "Busca e IA por comando de voz" },
];

function SectionTitle({ children, icon: Icon }: { children: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-xl bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-xl font-bold text-white">{children}</h2>
    </div>
  );
}

export default function Demo() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Hero */}
      <header className="text-center py-16 px-6 bg-gradient-to-b from-[#101830] to-[#0a0f1a]">
        <img src={pulsoLogoDark} alt="PULSO Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">PULSO</h1>
        <p className="text-lg text-blue-300 font-medium mb-1">Emergência Médica</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          O app médico mais completo do Brasil. Protocolos, medicamentos, calculadoras, IA clínica e ferramentas para o plantão — tudo em um só lugar.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <span className="text-3xl font-bold text-emerald-400">2.000+</span>
            <p className="text-xs text-muted-foreground mt-1">Medicamentos</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-cyan-400">1.000+</span>
            <p className="text-xs text-muted-foreground mt-1">Protocolos</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-amber-400">53</span>
            <p className="text-xs text-muted-foreground mt-1">Calculadoras</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-20 space-y-12">
        {/* Primary modules */}
        <section>
          <SectionTitle icon={Zap}>Módulos Principais</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {primaryModules.map((m) => (
              <div key={m.label} className={`rounded-2xl p-5 bg-gradient-to-br ${m.color} shadow-lg`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/20">
                    <m.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{m.label}</h3>
                </div>
                <p className="text-sm opacity-90">{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <SectionTitle icon={Wrench}>Ferramentas Clínicas</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toolsModules.map((m) => (
              <div key={m.label} className="rounded-xl p-4 bg-[#141c2e] ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-1">
                  <m.icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">{m.label}</span>
                </div>
                <p className="text-xs text-muted-foreground ml-8">{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialties */}
        <section>
          <SectionTitle icon={Stethoscope}>Especialidades</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {specialtyModules.map((m) => (
              <div key={m.label} className="rounded-xl p-4 bg-[#141c2e] ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-1">
                  <m.icon className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-sm">{m.label}</span>
                </div>
                <p className="text-xs text-muted-foreground ml-8">{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Study */}
        <section>
          <SectionTitle icon={Library}>Estudo & Produtividade</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {studyModules.map((m) => (
              <div key={m.label} className="rounded-xl p-4 bg-[#141c2e] ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-1">
                  <m.icon className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold text-sm">{m.label}</span>
                </div>
                <p className="text-xs text-muted-foreground ml-8">{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section>
          <SectionTitle icon={Shield}>Diferenciais</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-xl p-4 bg-[#141c2e] ring-1 ring-white/10 text-center">
                <h.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold mb-3">Pronto para o plantão?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Teste grátis por 7 dias. Sem cartão de crédito. Cancele quando quiser.
          </p>
          <a
            href="/auth"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
          >
            Começar 7 dias grátis
          </a>
        </section>
      </main>

      <footer className="text-center py-8 text-xs text-muted-foreground border-t border-white/5">
        PULSO — Emergência Médica © {new Date().getFullYear()}. Todos os direitos reservados.
      </footer>
    </div>
  );
}
