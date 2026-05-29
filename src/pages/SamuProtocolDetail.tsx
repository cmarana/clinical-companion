import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Radio, AlertTriangle, Info } from "lucide-react";
import TopBar from "@/components/TopBar";
import { cn } from "@/lib/utils";
import {
  getSamuProtocolByCode,
  type SamuCoverageStatus,
  type SamuContentStatus,
} from "@/data/samuProtocols";
import { resolvePulsoProtocolLink } from "@/data/samuPulsoLinks";

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

function Field({ label, value }: { label: string; value?: React.ReactNode }) {
  if (!value) return null;
  return (
    <div className="flex items-start justify-between gap-3 py-1.5">
      <span className="text-[11px] text-muted-foreground shrink-0">{label}</span>
      <span className="text-[12px] font-heading font-semibold text-foreground text-right">{value}</span>
    </div>
  );
}

export default function SamuProtocolDetail() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const protocol = code ? getSamuProtocolByCode(decodeURIComponent(code)) : undefined;

  if (!protocol) {
    return (
      <>
        <TopBar title="Protocolo SAMU" />
        <div className="px-4 py-8 max-w-lg mx-auto text-center space-y-3">
          <p className="text-sm text-muted-foreground">Protocolo SAMU não encontrado.</p>
          <Link to="/samu-protocols" className="inline-flex items-center gap-1.5 text-sm text-primary font-heading font-semibold">
            <ArrowLeft size={14} /> Voltar à matriz
          </Link>
        </div>
      </>
    );
  }

  const needsAttention =
    protocol.contentStatus === "Precisa criar" ||
    protocol.contentStatus === "Precisa revisar";

  return (
    <>
      <TopBar title={`SAMU · ${protocol.code}`} />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl mx-auto space-y-4 pb-24">

        {/* Cabeçalho */}
        <div className="rounded-xl bg-card border border-border p-4 space-y-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11.5px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              {protocol.code}
            </span>
            <span className={cn(
              "text-[10px] font-heading font-bold uppercase tracking-wide px-1.5 py-0.5 rounded border",
              protocol.level === "SAV"
                ? "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20"
                : "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20"
            )}>
              {protocol.level}
            </span>
            <span className="text-[10.5px] text-muted-foreground">{protocol.category}</span>
          </div>
          <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
            {protocol.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className={cn(
              "text-[10.5px] px-2 py-0.5 rounded-full border font-heading font-semibold",
              COVERAGE_TONE[protocol.coverageStatus]
            )}>
              Cobertura: {protocol.coverageStatus}
            </span>
            <span className={cn(
              "text-[10.5px] px-2 py-0.5 rounded-full border font-heading font-semibold",
              CONTENT_TONE[protocol.contentStatus]
            )}>
              Conteúdo: {protocol.contentStatus}
            </span>
            {protocol.priority && (
              <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-heading font-semibold">
                {protocol.priority}
              </span>
            )}
          </div>
        </div>

        {/* Botão principal — abre protocolo clínico real do Pulso quando existir */}
        {protocol.relatedPulsoProtocolSlug ? (
          <button
            onClick={() => navigate(protocol.relatedPulsoProtocolSlug!)}
            className="w-full flex items-center gap-3 rounded-xl bg-primary text-primary-foreground p-3.5 hover:bg-primary/90 transition text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-foreground/15 flex items-center justify-center">
              <ExternalLink size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider opacity-90">
                Abrir protocolo clínico no Pulso
              </p>
              <p className="text-[13px] font-heading font-semibold truncate">
                {protocol.relatedPulsoProtocolTitle ?? "Abrir"}
              </p>
            </div>
          </button>
        ) : (
          <div className="w-full flex items-start gap-3 rounded-xl bg-muted/40 border border-border p-3.5">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Info size={16} className="text-muted-foreground" />
            </div>
            <p className="text-[11.5px] text-muted-foreground leading-snug">
              Este item da matriz SAMU ainda não está vinculado a um protocolo clínico do Pulso.
            </p>
          </div>
        )}

        {/* Aviso se o conteúdo precisa ser criado/revisado */}
        {needsAttention && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3.5 flex items-start gap-2.5">
            <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[12px] text-foreground leading-snug">
              Este item faz parte da matriz de referência SAMU 192. O conteúdo
              clínico completo ainda precisa ser{" "}
              {protocol.contentStatus === "Precisa criar" ? "criado" : "revisado"}{" "}
              antes de ser exibido como protocolo assistencial no Pulso.
            </p>
          </div>
        )}

        {/* Metadados estruturados */}
        <div className="rounded-xl bg-card border border-border p-4 divide-y divide-border">
          <Field label="Código SAMU" value={protocol.code} />
          <Field label="Nível" value={protocol.level} />
          <Field label="Categoria" value={protocol.category} />
          <Field label="Prioridade" value={protocol.priority} />
          <Field label="Área clínica" value={protocol.clinicalArea} />
          <Field label="Operacional?" value={protocol.isOperational ? "Sim" : undefined} />
        </div>

        {protocol.tags.length > 0 && (
          <div className="rounded-xl bg-card border border-border p-3.5">
            <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Tags clínicas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {protocol.tags.map(t => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-muted text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {protocol.notes && (
          <div className="rounded-xl bg-card border border-border p-3.5">
            <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Observações
            </p>
            <p className="text-[12px] text-foreground leading-snug">{protocol.notes}</p>
          </div>
        )}

        <div className="rounded-xl bg-card border border-border p-3.5">
          <div className="flex items-center gap-2 mb-1.5">
            <Radio size={13} className="text-primary" />
            <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground">
              Fonte
            </p>
          </div>
          <p className="text-[11.5px] text-muted-foreground leading-snug">{protocol.source}</p>
        </div>

        {/* Disclaimer clínico */}
        <div className="rounded-xl border border-border bg-muted/30 p-3">
          <p className="text-[10.5px] text-muted-foreground leading-snug">
            <strong className="text-foreground">Aviso:</strong> A Matriz SAMU é uma ferramenta de organização e auditoria de conteúdo. Protocolos marcados como "Precisa criar" ou "Precisa revisar" não devem ser interpretados como conduta assistencial completa.
          </p>
        </div>

        <Link
          to="/samu-protocols"
          className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={13} /> Voltar à matriz SAMU
        </Link>
      </div>
    </>
  );
}
