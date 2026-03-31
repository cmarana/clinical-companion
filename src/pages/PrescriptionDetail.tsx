import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import { prescriptionCategories } from "@/data/prescriptions/index";
import { Button } from "@/components/ui/button";
import { Copy, Check, Star, Printer } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function PrescriptionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addEntry } = useRecentHistory();
  const [showPrintDialog, setShowPrintDialog] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientBed, setPatientBed] = useState("");
  const [patientRecord, setPatientRecord] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [patientWeight, setPatientWeight] = useState("");

  const prescription = prescriptionCategories
    .flatMap(c => c.items)
    .find(p => p.id === id);

  useEffect(() => {
    if (prescription) {
      addEntry({ path: `/prescriptions/${id}`, title: prescription.title, type: "prescription" });
    }
  }, [id]);

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

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      toast({ title: "Erro", description: "Não foi possível abrir a janela de impressão. Verifique o bloqueador de pop-ups.", variant: "destructive" });
      return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("pt-BR");
    const timeStr = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    const escapeHtml = (str: string) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const patientInfo = [patientName, patientBed, patientRecord, patientDob, patientWeight].filter(Boolean);
    const patientBlock = patientInfo.length
      ? `<div class="patient-info">
          ${patientName ? `<div><strong>Paciente:</strong> ${escapeHtml(patientName)}</div>` : ""}
          ${patientDob ? `<div><strong>Data de nascimento:</strong> ${escapeHtml(patientDob)}</div>` : ""}
          ${patientWeight ? `<div><strong>Peso:</strong> ${escapeHtml(patientWeight)} kg</div>` : ""}
          ${patientBed ? `<div><strong>Leito:</strong> ${escapeHtml(patientBed)}</div>` : ""}
          ${patientRecord ? `<div><strong>Prontuário:</strong> ${escapeHtml(patientRecord)}</div>` : ""}
        </div>`
      : "";

    printWindow.document.write(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${escapeHtml(prescription.title)}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Arial', sans-serif; padding: 28px 32px; font-size: 12pt; line-height: 1.65; color: #000; }
  .header { border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 18px; }
  .header h1 { font-size: 16pt; font-weight: 700; }
  .header .type { font-size: 10pt; color: #555; margin-top: 2px; }
  .patient-info { background: #f5f5f5; border: 1px solid #ddd; padding: 10px 14px; border-radius: 4px; margin-bottom: 16px; font-size: 11pt; line-height: 1.8; }
  .patient-info strong { font-weight: 600; }
  .guideline { font-size: 9pt; background: #f0f0f0; padding: 4px 10px; border-radius: 4px; display: inline-block; margin-bottom: 14px; }
  .section { margin-bottom: 14px; }
  .section h2 { font-size: 13pt; font-weight: 600; margin-bottom: 6px; border-bottom: 1px solid #ddd; padding-bottom: 3px; }
  .section pre { white-space: pre-wrap; font-family: 'Arial', sans-serif; font-size: 11pt; line-height: 1.6; }
  .warning { border: 1.5px solid #c00; padding: 10px; border-radius: 4px; margin-top: 10px; }
  .warning h2 { color: #c00; border-bottom-color: #c00; }
  .footer { margin-top: 40px; padding-top: 10px; border-top: 1px solid #999; font-size: 8pt; color: #888; display: flex; justify-content: space-between; }
  .signature { margin-top: 60px; text-align: center; }
  .signature .line { border-top: 1px solid #000; width: 250px; margin: 0 auto 4px; }
  .signature p { font-size: 10pt; color: #333; }
  @media print { body { padding: 20px; } }
</style></head><body>
<div class="header">
  <h1>${escapeHtml(prescription.title)}</h1>
  <div class="type">${escapeHtml(prescription.type)}</div>
</div>
${patientBlock}
${prescription.guideline ? `<div class="guideline">Diretriz: ${escapeHtml(prescription.guideline)}</div>` : ""}
<div class="section"><h2>Prescrição</h2><pre>${escapeHtml(prescription.prescription)}</pre></div>
${prescription.alternatives ? `<div class="section"><h2>Alternativas</h2><pre>${escapeHtml(prescription.alternatives)}</pre></div>` : ""}
${prescription.notes ? `<div class="section"><h2>Observações</h2><pre>${escapeHtml(prescription.notes)}</pre></div>` : ""}
${prescription.warnings ? `<div class="warning"><h2>⚠ Atenção</h2><pre>${escapeHtml(prescription.warnings)}</pre></div>` : ""}
<div class="signature"><div class="line"></div><p>Assinatura / CRM</p></div>
<div class="footer"><span>Gerado em ${dateStr} às ${timeStr}</span><span>Pronto Socorro Guide</span></div>
</body></html>`);

    printWindow.document.close();
    setTimeout(() => { printWindow.print(); }, 300);
    setShowPrintDialog(false);
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
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                toggleFavorite({ id: prescription.id, type: "prescription", title: prescription.title });
                toast({
                  title: isFavorite(prescription.id) ? "Removido dos favoritos" : "Adicionado aos favoritos",
                  description: prescription.title,
                });
              }}
              className="gap-1.5"
            >
              <Star size={14} className={isFavorite(prescription.id) ? "fill-warning text-warning" : ""} />
            </Button>
            <Button size="sm" variant="outline" onClick={() => setShowPrintDialog(true)} className="gap-1.5">
              <Printer size={14} />
              PDF
            </Button>
            <Button size="sm" variant="outline" onClick={handleCopy} className="gap-1.5">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copiado" : "Copiar"}
            </Button>
          </div>
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

      {/* Dialog para dados do paciente antes de imprimir */}
      <Dialog open={showPrintDialog} onOpenChange={setShowPrintDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-heading text-base">Dados do Paciente</DialogTitle>
            <p className="text-xs text-muted-foreground">Campos opcionais — preencha para incluir no PDF</p>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs font-heading">Nome do paciente</Label>
              <Input value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="João da Silva" className="h-9 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-heading">Data de nascimento</Label>
                <Input value={patientDob} onChange={e => setPatientDob(e.target.value)} placeholder="01/01/1970" className="h-9 text-sm" />
              </div>
              <div>
                <Label className="text-xs font-heading">Peso (kg)</Label>
                <Input value={patientWeight} onChange={e => setPatientWeight(e.target.value)} placeholder="70" className="h-9 text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-heading">Leito</Label>
                <Input value={patientBed} onChange={e => setPatientBed(e.target.value)} placeholder="12-A" className="h-9 text-sm" />
              </div>
              <div>
                <Label className="text-xs font-heading">Prontuário</Label>
                <Input value={patientRecord} onChange={e => setPatientRecord(e.target.value)} placeholder="123456" className="h-9 text-sm" />
              </div>
            </div>
          </div>
          <DialogFooter className="flex-row gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} className="flex-1 text-xs">
              Pular e imprimir
            </Button>
            <Button size="sm" onClick={handlePrint} className="flex-1 text-xs">
              <Printer size={14} className="mr-1" />
              Gerar PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
