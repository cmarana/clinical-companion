import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Radio } from "lucide-react";
import TopBar from "@/components/TopBar";
import {
  getSamuProtocol,
  SAMU_CATEGORIES,
  SAMU_COVERAGE_META,
  SAMU_CONTENT_META,
} from "@/data/samuProtocols";

export default function SamuProtocolDetail() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const protocol = code ? getSamuProtocol(decodeURIComponent(code)) : undefined;

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

  const cat = SAMU_CATEGORIES.find(c => c.id === protocol.category);

  return (
    <>
      <TopBar title={`SAMU · ${protocol.code}`} />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl mx-auto space-y-4 pb-24">

        {/* Header */}
        <div className="rounded-xl bg-card border border-border p-4 space-y-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11.5px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              {protocol.code}
            </span>
            <span className="text-[10px] font-heading font-bold uppercase tracking-wide px-1.5 py-0.5 rounded border bg-muted text-muted-foreground border-border">
              {protocol.level}
            </span>
            {cat && (
              <span className="text-[10.5px] text-muted-foreground">{cat.title}</span>
            )}
          </div>
          <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
            {protocol.title}
          </h1>
          {protocol.summary && (
            <p className="text-[13px] text-muted-foreground leading-snug">{protocol.summary}</p>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
              Cobertura: {SAMU_COVERAGE_META[protocol.coverage].label}
            </span>
            <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
              Conteúdo: {SAMU_CONTENT_META[protocol.content].label}
            </span>
          </div>
        </div>

        {/* Relacionado */}
        {protocol.related && (
          <button
            onClick={() => navigate(protocol.related!.route)}
            className="w-full flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/20 p-3.5 hover:bg-primary/10 transition text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
              <ExternalLink size={16} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-primary">
                Protocolo relacionado no Pulso
              </p>
              <p className="text-[13px] font-heading font-semibold text-foreground truncate">
                {protocol.related.label}
              </p>
            </div>
          </button>
        )}

        {/* Tags */}
        {protocol.tags && protocol.tags.length > 0 && (
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

        {/* Conteúdo */}
        <div className="rounded-xl bg-card border border-border p-4">
          <div className="flex items-center gap-2 mb-2">
            <Radio size={14} className="text-primary" />
            <h2 className="font-heading font-bold text-[13px] text-foreground">Conteúdo do protocolo</h2>
          </div>
          {protocol.body ? (
            <div className="text-[13px] text-foreground leading-relaxed whitespace-pre-wrap">
              {protocol.body}
            </div>
          ) : (
            <p className="text-[12.5px] text-muted-foreground leading-snug">
              O conteúdo completo deste protocolo está sendo organizado a partir do
              manual nacional do SAMU 192 / Ministério da Saúde. Em breve estará
              disponível aqui com fluxograma, condutas SBV/SAV e checklists operacionais.
            </p>
          )}
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
