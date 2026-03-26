import { useParams, useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { prescriptionCategories } from "@/data/prescriptions/index";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function PrescriptionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const prescription = prescriptionCategories
    .flatMap(c => c.items)
    .find(p => p.id === id);

  if (!prescription) {
    return (
      <>
        <TopBar title="Prescrição" />
        <div className="px-4 py-8 text-center text-muted-foreground text-sm">Prescrição não encontrada.</div>
      </>
    );
  }

  const handleCopy = async () => {
    const text = `${prescription.title}\n\n${prescription.prescription}\n\n${prescription.notes ? `Observações: ${prescription.notes}` : ""}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({ title: "Copiado!", description: "Prescrição copiada para a área de transferência." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <TopBar title={prescription.title} />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-lg">{prescription.title}</h1>
            <p className="text-xs text-muted-foreground">{prescription.type}</p>
          </div>
          <Button size="sm" variant="outline" onClick={handleCopy} className="gap-1.5">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copiado" : "Copiar"}
          </Button>
        </div>

        {prescription.guideline && (
          <div className="text-xs text-primary font-heading font-medium bg-accent/50 px-3 py-1.5 rounded-lg inline-block">
            Diretriz: {prescription.guideline}
          </div>
        )}

        <div className="bg-card border rounded-xl p-4 space-y-2">
          <h2 className="font-heading font-semibold text-sm">Prescrição</h2>
          <div className="text-sm leading-relaxed whitespace-pre-line">{prescription.prescription}</div>
        </div>

        {prescription.alternatives && (
          <div className="bg-card border rounded-xl p-4 space-y-2">
            <h2 className="font-heading font-semibold text-sm">Alternativas</h2>
            <div className="text-sm leading-relaxed whitespace-pre-line">{prescription.alternatives}</div>
          </div>
        )}

        {prescription.notes && (
          <div className="bg-accent/30 border rounded-xl p-4 space-y-2">
            <h2 className="font-heading font-semibold text-sm">Observações</h2>
            <div className="text-sm leading-relaxed whitespace-pre-line">{prescription.notes}</div>
          </div>
        )}

        {prescription.warnings && (
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 space-y-2">
            <h2 className="font-heading font-semibold text-sm text-destructive">⚠️ Atenção</h2>
            <div className="text-sm leading-relaxed whitespace-pre-line">{prescription.warnings}</div>
          </div>
        )}
      </div>
    </>
  );
}
