import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, AlertTriangle, ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import { cn } from "@/lib/utils";
import {
  samuProtocols,
  type SamuProtocol,
  type SamuCoverageStatus,
  type SamuContentStatus,
} from "@/data/samuProtocols";

const COVERAGE_TONE: Record<SamuCoverageStatus, string> = {
  "Encontrado":            "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Parcial":               "bg-amber-500/10  text-amber-700  dark:text-amber-300  border-amber-500/20",
  "Não localizado":        "bg-red-500/10    text-red-700    dark:text-red-300    border-red-500/20",
  "Operacional SAMU":      "bg-sky-500/10    text-sky-700    dark:text-sky-300    border-sky-500/20",
  "Sem título no sumário": "bg-muted text-muted-foreground border-border",
};

const CONTENT_TONE: Record<SamuContentStatus, string> = {
  "Completo":        "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Precisa revisar": "bg-amber-500/10  text-amber-700  dark:text-amber-300  border-amber-500/20",
  "Precisa criar":   "bg-red-500/10    text-red-700    dark:text-red-300    border-red-500/20",
  "Não aplicável":   "bg-muted text-muted-foreground border-border",
};

// Tags/keywords que caracterizam protocolos críticos de sala vermelha
const RED_ROOM_KEYWORDS = [
  "pcr", "rcp", "acls", "iam", "sca", "iamcsst",
  "avc", "sepse", "choque", "anafilaxia", "eap",
  "arritmia", "cardioversão", "desfibrilação",
  "via aérea", "iot", "sri", "rsi",
  "pneumotórax", "hemorragia", "torniquete",
  "estado de mal", "irpa", "insuficiência respiratória",
];

function isRedRoom(p: SamuProtocol): boolean {
  const hay = (p.title + " " + p.tags.join(" ")).toLowerCase();
  return RED_ROOM_KEYWORDS.some(k => hay.includes(k));
}

// Ordem de prioridade por categoria (menor = mais alta prioridade)
const CATEGORY_PRIORITY: Record<string, number> = {
  "Emergências Clínicas": 2,
  "Trauma": 3,
  "Pediatria": 4,
  "Gineco-Obstetrícia": 5,
  "Procedimentos": 6,
  "Protocolos Especiais": 7,
  "Intoxicações / Produtos Perigosos": 7,
  "Incidentes com Múltiplas Vítimas": 7,
  "Motolância": 7,
  "Aeromédico": 7,
};

function priorityRank(p: SamuProtocol): number {
  // 1 = sala vermelha crítica
  if (isRedRoom(p)) return 1;
  return CATEGORY_PRIORITY[p.category] ?? 8;
}

const PRIORITY_LABELS: Record<number, { label: string; tone: string; desc: string }> = {
  1: { label: "1. Sala Vermelha", tone: "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20", desc: "Protocolos críticos de ressuscitação e emergência imediata" },
  2: { label: "2. Emergências Clínicas", tone: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20", desc: "Quadros clínicos frequentes no pré-hospitalar" },
  3: { label: "3. Trauma", tone: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20", desc: "Atendimento ao trauma e politrauma" },
  4: { label: "4. Pediatria", tone: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20", desc: "Emergências pediátricas e neonatais" },
  5: { label: "5. Gineco-Obstetrícia", tone: "bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/20", desc: "Emergências obstétricas e ginecológicas" },
  6: { label: "6. Procedimentos", tone: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20", desc: "Técnicas e procedimentos invasivos" },
  7: { label: "7. Operacionais e Especiais", tone: "bg-muted text-muted-foreground border-border", desc: "Protocolos administrativos, operacionais e situações especiais" },
  8: { label: "8. Outros", tone: "bg-muted text-muted-foreground border-border", desc: "Demais categorias" },
};

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={cn(
      "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wide border",
      className
    )}>
      {children}
    </span>
  );
}

function Counter({ label, value, tone }: { label: string; value: number; tone?: string }) {
  return (
    <div className={cn(
      "rounded-xl border p-2.5 bg-card",
      tone ?? "border-border"
    )}>
      <div className="text-[18px] font-heading font-bold leading-none">{value}</div>
      <div className="text-[10.5px] text-muted-foreground mt-1 leading-tight">{label}</div>
    </div>
  );
}

export default function SamuGaps() {
  const navigate = useNavigate();

  const stats = useMemo(() => {
    const s = {
      total: samuProtocols.length,
      encontrado: 0,
      parcial: 0,
      naoLocalizado: 0,
      operacional: 0,
      semTitulo: 0,
      completo: 0,
      precisaRevisar: 0,
      precisaCriar: 0,
    };
    for (const p of samuProtocols) {
      if (p.coverageStatus === "Encontrado") s.encontrado++;
      else if (p.coverageStatus === "Parcial") s.parcial++;
      else if (p.coverageStatus === "Não localizado") s.naoLocalizado++;
      else if (p.coverageStatus === "Sem título no sumário") s.semTitulo++;

      // Operacionais: coverageStatus "Operacional SAMU" OU flag isOperational
      if (p.coverageStatus === "Operacional SAMU" || p.isOperational) s.operacional++;

      if (p.contentStatus === "Completo") s.completo++;
      else if (p.contentStatus === "Precisa revisar") s.precisaRevisar++;
      else if (p.contentStatus === "Precisa criar") s.precisaCriar++;
    }
    return s;
  }, []);

  const gaps = useMemo(() => {
    return samuProtocols.filter(p =>
      p.coverageStatus === "Não localizado" ||
      p.coverageStatus === "Parcial" ||
      p.contentStatus === "Precisa criar" ||
      p.contentStatus === "Precisa revisar"
    );
  }, []);

  const grouped = useMemo(() => {
    const map = new Map<number, SamuProtocol[]>();
    for (const p of gaps) {
      const r = priorityRank(p);
      if (!map.has(r)) map.set(r, []);
      map.get(r)!.push(p);
    }
    // ordenar dentro de cada grupo: Precisa criar > Não localizado > Parcial > Precisa revisar
    const weight = (p: SamuProtocol) => {
      let w = 0;
      if (p.contentStatus === "Precisa criar") w += 4;
      if (p.coverageStatus === "Não localizado") w += 3;
      if (p.coverageStatus === "Parcial") w += 2;
      if (p.contentStatus === "Precisa revisar") w += 1;
      return -w;
    };
    return Array.from(map.entries())
      .sort(([a], [b]) => a - b)
      .map(([rank, items]) => ({
        rank,
        items: items.sort((a, b) => weight(a) - weight(b)),
      }));
  }, [gaps]);

  return (
    <>
      <TopBar title="Lacunas do Pulso" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">

        {/* Banner */}
        <div className="rounded-xl bg-gradient-to-br from-amber-500/10 to-red-500/5 border border-amber-500/20 p-3.5">
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-heading font-bold text-[13.5px] text-foreground leading-tight">
                Lacunas do Pulso — Priorização de Conteúdo
              </h1>
              <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                Painel interno: protocolos SAMU que ainda precisam ser criados, revisados ou estão parcialmente cobertos.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/samu-protocols")}
          className="inline-flex items-center gap-1.5 text-[11.5px] font-heading text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft size={13} /> Voltar para a Matriz SAMU
        </button>

        {/* Contadores cobertura */}
        <div>
          <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
            Cobertura no Pulso
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            <Counter label="Total SAMU" value={stats.total} tone="border-primary/30" />
            <Counter label="Encontrados" value={stats.encontrado} tone="border-emerald-500/20" />
            <Counter label="Parciais" value={stats.parcial} tone="border-amber-500/20" />
            <Counter label="Não localizados" value={stats.naoLocalizado} tone="border-red-500/20" />
            <Counter label="Operacionais" value={stats.operacional} tone="border-sky-500/20" />
            <Counter label="Sem título" value={stats.semTitulo} />
          </div>
        </div>

        {/* Contadores conteúdo */}
        <div>
          <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
            Status do conteúdo
          </p>
          <div className="grid grid-cols-3 gap-2">
            <Counter label="Completos" value={stats.completo} tone="border-emerald-500/20" />
            <Counter label="Precisam revisar" value={stats.precisaRevisar} tone="border-amber-500/20" />
            <Counter label="Precisam criar" value={stats.precisaCriar} tone="border-red-500/20" />
          </div>
        </div>

        <div className="flex items-center justify-between px-1 pt-2">
          <h2 className="font-heading font-bold text-[13px] text-foreground">
            Backlog priorizado
          </h2>
          <span className="text-[11px] text-muted-foreground">
            {gaps.length} item{gaps.length === 1 ? "" : "s"}
          </span>
        </div>

        {grouped.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            Nenhuma lacuna identificada. Tudo em dia!
          </div>
        )}

        {grouped.map(({ rank, items }) => {
          const meta = PRIORITY_LABELS[rank] ?? PRIORITY_LABELS[8];
          return (
            <section key={rank} className="space-y-2">
              <div className="flex items-start justify-between gap-2 px-1">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className={meta.tone}>{meta.label}</Badge>
                    <span className="text-[10.5px] text-muted-foreground">{items.length}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug mt-1">{meta.desc}</p>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {items.map(p => (
                  <motion.div
                    key={p.id}
                    whileTap={{ scale: 0.995 }}
                    className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <div className="p-3.5 space-y-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                          {p.code}
                        </span>
                        <Badge className={p.level === "SAV"
                          ? "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20"
                          : "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20"}>
                          {p.level}
                        </Badge>
                        <Badge className={COVERAGE_TONE[p.coverageStatus]}>
                          {p.coverageStatus}
                        </Badge>
                        <Badge className={CONTENT_TONE[p.contentStatus]}>
                          {p.contentStatus}
                        </Badge>
                      </div>

                      <h3 className="font-heading font-semibold text-[13.5px] text-foreground leading-snug">
                        {p.title}
                      </h3>

                      <p className="text-[11px] text-muted-foreground">
                        {p.category}
                      </p>

                      {p.notes && (
                        <p className="text-[11px] text-muted-foreground italic leading-snug">
                          {p.notes}
                        </p>
                      )}

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => navigate(`/samu-protocols/${encodeURIComponent(p.code)}`)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-primary text-primary-foreground text-[12px] font-heading font-semibold hover:bg-primary/90 transition"
                        >
                          Ver na matriz
                          <ChevronRight size={13} />
                        </button>
                        {p.relatedPulsoProtocolSlug && (
                          <button
                            onClick={() => navigate(p.relatedPulsoProtocolSlug!)}
                            className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-card border border-border text-foreground text-[12px] font-heading font-semibold hover:border-primary/40 transition"
                            title="Abrir protocolo relacionado no Pulso"
                          >
                            <ExternalLink size={13} />
                            <span className="hidden sm:inline">Relacionado</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
