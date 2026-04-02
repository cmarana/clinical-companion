import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
import { BookOpen, Copy, Check, FileText } from "lucide-react";
import { useState, useCallback } from "react";
import { toast } from "sonner";

interface Props {
  content: string;
}

/**
 * Splits markdown by ## headings and renders each section as a visual card.
 * Detects [PROTOCOL:id|title] links and ```prescription blocks.
 */
export default function ClinicalResponseCards({ content }: Props) {
  const sections = splitBySections(content);

  return (
    <div className="clinical-cards space-y-3">
      {sections.map((section, i) => (
        <div key={i} className={section.isIntro ? "clinical-intro" : "clinical-card"}>
          <SectionContent markdown={section.markdown} />
        </div>
      ))}
    </div>
  );
}

function SectionContent({ markdown }: { markdown: string }) {
  const navigate = useNavigate();

  // Extract protocol links
  const protocolPattern = /\[PROTOCOL:([^\]|]+)\|([^\]]+)\]/g;
  const protocols: { id: string; title: string }[] = [];
  let match;
  while ((match = protocolPattern.exec(markdown)) !== null) {
    protocols.push({ id: match[1], title: match[2] });
  }

  // Extract prescription blocks
  const prescriptionMatch = markdown.match(/```prescription\n([\s\S]*?)```/);
  const prescriptionText = prescriptionMatch?.[1]?.trim();

  // Clean markdown: remove protocol links and prescription code blocks for rendering
  let cleanMd = markdown.replace(protocolPattern, "").replace(/```prescription\n[\s\S]*?```/g, "").trim();

  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleanMd}</ReactMarkdown>

      {/* Protocol suggestion chips */}
      {protocols.length > 0 && (
        <div className="mt-3 space-y-1.5">
          <p className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-wider">Protocolos Relacionados</p>
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

      {/* Prescription block */}
      {prescriptionText && (
        <PrescriptionBlock text={prescriptionText} />
      )}
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
