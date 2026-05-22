import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PlayCircle, Info } from "lucide-react";
import { APP_MODULES, type AppModule } from "@/config/appModules";
import { enterDemoMode } from "@/lib/demoMode";

interface Group {
  id: string;
  title: string;
  subtitle: string;
  filter: (m: AppModule) => boolean;
}

const GROUPS: Group[] = [
  {
    id: "destaques",
    title: "Destaques",
    subtitle: "Os pilares clínicos do PULSO",
    filter: (m) =>
      ["clinical-ai", "duty", "emergency", "full-protocols", "bulario", "prescriptions", "clinical-ai-image"].includes(m.id),
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    subtitle: "Assistente clínica, casos, voz e checagens com IA",
    filter: (m) =>
      ["case-simulator", "voice-evolution", "prescription-checker", "discharge-summary", "conduct-comparator"].includes(m.id),
  },
  {
    id: "especialidades",
    title: "Especialidades",
    subtitle: "Conteúdo focado por área",
    filter: (m) => m.homeSection === "specialties",
  },
  {
    id: "ferramentas",
    title: "Ferramentas clínicas",
    subtitle: "Calculadoras, checklists, referências e bulário",
    filter: (m) =>
      m.homeSection === "tools" &&
      !["conduct-comparator", "prescription-checker", "rounds"].includes(m.id),
  },
  {
    id: "leito",
    title: "Beira-leito & Plantão",
    subtitle: "Recursos para a rotina de plantão e enfermaria",
    filter: (m) => ["rounds", "documents", "evolution-templates", "favorites", "offline"].includes(m.id),
  },
  {
    id: "estudo",
    title: "Estudo & Residência",
    subtitle: "Questões, flashcards e desempenho",
    filter: (m) => ["quiz", "flashcards", "residency-quiz", "study-dashboard"].includes(m.id),
  },
];

export default function Demo() {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    enterDemoMode();
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Demo navegável · sem cadastro
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Conheça o PULSO por dentro
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
              Esta é uma versão de apresentação clicável. Você pode navegar por todas as áreas do app —
              protocolos, IA clínica, prescrições, ferramentas e estudo — sem login. Os dados exibidos
              são de exemplo e não são persistidos.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => goTo("/home")}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                <PlayCircle className="h-4 w-4" />
                Entrar no app demo
              </button>
              <a
                href="#modulos"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                Ver todos os módulos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-card/60 p-3 text-xs text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              <span>
                Algumas funcionalidades dependem de backend (sincronização, IA generativa, envio de
                e-mails) e podem ficar limitadas no modo demo. A interface, fluxos e conteúdos
                clínicos estáticos estão 100% navegáveis.
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Módulos */}
      <main id="modulos" className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        {GROUPS.map((group) => {
          const items = APP_MODULES.filter(group.filter);
          if (items.length === 0) return null;
          return (
            <section key={group.id}>
              <div className="mb-4">
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">
                  {group.title}
                </h2>
                <p className="text-sm text-muted-foreground">{group.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((m) => {
                  const Icon = m.landingIcon ?? m.homeIcon;
                  return (
                    <motion.button
                      key={m.id}
                      onClick={() => goTo(m.path)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-md"
                    >
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${m.landingColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-foreground">{m.landingTitle}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{m.landingDesc}</div>
                      </div>
                      <div className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                        Abrir <ArrowRight className="h-3 w-3" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </section>
          );
        })}

        <footer className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          PULSO · Demo de apresentação. Conteúdo clínico apenas para fins ilustrativos.
        </footer>
      </main>
    </div>
  );
}
