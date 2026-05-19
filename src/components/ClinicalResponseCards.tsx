import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
import { BookOpen, Copy, Check, FileText, Database, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useCallback } from "react";
import { toast } from "sonner";

export interface RagSourceChunk {
  title: string;
  source_type: string;
  source_id: string;
  score?: number;
}

interface Props {
  content: string;
  ragSource?: "cache" | "llm" | "deterministic" | null;
  ragIntent?: string;
  ragModel?: string;
  ragChunks?: RagSourceChunk[];
}

const SOURCE_TYPE_LABELS: Record<string, string> = {
  full_protocol: "Protocolo",
  medication: "Medicamento",
  emergency: "Emergência",
  prescription: "Prescrição",
  antimicrobial: "Antimicrobiano",
  dilution: "Diluição",
  calculator: "Calculadora",
  interaction: "Interação",
  score: "Score",
};

const ROUTE_FOR_TYPE: Record<string, string> = {
  full_protocol: "/full-protocols",
  emergency: "/emergency",
  prescription: "/prescriptions",
  medication: "/bulario",
};

export default function ClinicalResponseCards({
  content,
  ragSource,
  ragIntent,
  ragModel,
  ragChunks,
}: Props) {
  const sections = splitBySections(content);
  const hasRagMeta = ragSource || (ragChunks && ragChunks.length > 0);

  return (
    <div className="clinical-cards space-y-3">
      {hasRagMeta && (
        <RagSourceBadge
          source={ragSource}
          intent={ragIntent}
          model={ragModel}
          chunks={ragChunks}
        />
      )}
      {sections.map((section, i) => (
        <div key={i} className={section.isIntro ? "clinical-intro" : "clinical-card"}>
          <SectionContent markdown={section.markdown} />
        </div>
      ))}
    </div>
  );
}

function RagSourceBadge({
  source,
  intent,
  model,
  chunks,
}: {
  source?: "cache" | "llm" | "deterministic" | null;
  intent?: string;
  model?: string;
  chunks?: RagSourceChunk[];
}) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const sourceLabel =
    source === "cache"
      ? "Cache PULSO"
      : source === "deterministic"
      ? "Base PULSO"
      : source === "llm"
      ? "IA + Base PULSO"
      : "Base PULSO";

  const sourceColor =
    source === "cache"
      ? "bg-primary0/10 text-primary dark:text-primary border-primary0/20"
      : source === "deterministic"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-primary0/10 text-primary dark:text-primary border-primary0/20";

  return (
    <div className="rounded-lg border border-border bg-muted/30 overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-muted/50 transition-colors"
      >
        <Database size={12} className="text-muted-foreground shrink-0" />
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-heading font-bold ${sourceColor}`}>
          {sourceLabel}
        </span>
        {intent && (
          <span className="text-[10px] text-muted-foreground font-heading">
            intent: {intent}
          </span>
        )}
        {model && (
          <span className="text-[10px] text-muted-foreground font-heading ml-auto mr-1">
            {model}
          </span>
        )}
        {chunks && chunks.length > 0 && (
          <span className="text-[10px] text-muted-foreground ml-auto">
            {chunks.length} fonte{chunks.length > 1 ? "s" : ""}
          </span>
        )}
        {expanded ? (
          <ChevronUp size={12} className="text-muted-foreground ml-1 shrink-0" />
        ) : (
          <ChevronDown size={12} className="text-muted-foreground ml-1 shrink-0" />
        )}
      </button>

      {expanded && chunks && chunks.length > 0 && (
        <div className="px-3 pb-2 pt-1 border-t border-border space-y-1">
          <p className="text-[9px] uppercase tracking-wider font-heading font-semibold text-muted-foreground mb-1.5">
            Fontes internas consultadas
          </p>
          {chunks.map((c, i) => {
            const typeLabel = SOURCE_TYPE_LABELS[c.source_type] ?? c.source_type;
            const route = ROUTE_FOR_TYPE[c.source_type];
            const isClickable = !!route && !!c.source_id;
            const baseId = c.source_id?.split("__")[0];
            return (
              <div key={i} className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 px-1.5 py-0.5 rounded bg-muted text-[9px] font-heading font-semibold text-muted-foreground">
                  {typeLabel}
                </span>
                {isClickable ? (
                  <button
                    onClick={() => navigate(`${route}/${baseId}`)}
                    className="text-[11px] text-primary hover:underline text-left leading-snug"
                  >
                    {c.title}
                    {c.score !== undefined && (
                      <span className="ml-1 text-[9px] text-muted-foreground font-mono">
                        ({(c.score * 100).toFixed(0)}%)
                      </span>
                    )}
                  </button>
                ) : (
                  <span className="text-[11px] text-muted-foreground leading-snug">
                    {c.title}
                    {c.score !== undefined && (
                      <span className="ml-1 text-[9px] font-mono">
                        ({(c.score * 100).toFixed(0)}%)
                      </span>
                    )}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SectionContent({ markdown }: { markdown: string }) {
  const navigate = useNavigate();

  const protocolPattern = /\[PROTOCOL:([^\]|]+)\|([^\]]+)\]/g;
  const protocols: { id: string; title: string }[] = [];
  let match;
  while ((match = protocolPattern.exec(markdown)) !== null) {
    protocols.push({ id: match[1], title: match[2] });
  }

  const prescriptionMatch = markdown.match(/```prescription\n([\s\S]*?)```/);
  const prescriptionText = prescriptionMatch?.[1]?.trim();

  let cleanMd = markdown
    .replace(protocolPattern, "")
    .replace(/```prescription\n[\s\S]*?```/g, "")
    .trim();

  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleanMd}</ReactMarkdown>

      {protocols.length > 0 && (
        <div className="mt-3 space-y-1.5">
          <p className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-wider">
            Protocolos Relacionados
          </p>
          <div className="flex flex-wrap gap-1.5">
            {protocols.map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(`/full-protocols/${p.id}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-[11px] font-medium transition-colors"
              >
                <BookOpen size={12} />
                {p.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {prescriptionText && <PrescriptionBlock text={prescriptionText} />}
    </>
  );
}

function PrescriptionBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast.success("Prescrição copiada!");
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 bg-primary/10 border-b border-primary/20">
        <span className="flex items-center gap-1.5 text-[10px] font-heading font-bold text-primary uppercase tracking-wider">
          <FileText size={12} />
          Prescrição Sugerida
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-primary hover:bg-primary/15 transition-colors"
        >
          {copied ? <Check size={10} /> : <Copy size={10} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="px-3 py-2 text-[11px] leading-relaxed whitespace-pre-wrap font-mono text-foreground">
        {text}
      </pre>
    </div>
  );
}

interface Section {
  markdown: string;
  isIntro: boolean;
}

function splitBySections(md: string): Section[] {
  const lines = md.split("\n");
  const sections: Section[] = [];
  let current: string[] = [];
  let isFirst = true;

  for (const line of lines) {
    if (/^##\s/.test(line)) {
      if (current.length > 0) {
        const text = current.join("\n").trim();
        if (text) sections.push({ markdown: text, isIntro: isFirst });
      }
      current = [line];
      isFirst = false;
    } else {
      current.push(line);
    }
  }

  if (current.length > 0) {
    const text = current.join("\n").trim();
    if (text) sections.push({ markdown: text, isIntro: isFirst });
  }

  return sections;
}
