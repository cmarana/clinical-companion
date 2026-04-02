import { useState } from "react";
import { X, Link2, QrCode, Copy, Check, MessageCircle, FileDown } from "lucide-react";
import QRCodeDisplay from "./QRCodeDisplay";
import { toast } from "sonner";

interface ShareProtocolDialogProps {
  open: boolean;
  onClose: () => void;
  protocolTitle: string;
  shareUrl: string;
  shareText: string;
}

export default function ShareProtocolDialog({ open, onClose, protocolTitle, shareUrl, shareText }: ShareProtocolDialogProps) {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<"link" | "qr">("link");

  if (!open) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast.success("Texto copiado!");
    } catch {
      toast.error("Erro ao copiar");
    }
  };

  const handleWhatsApp = () => {
    const msg = `📋 *${protocolTitle}*\n\n🔗 ${shareUrl}\n\n📱 _Compartilhado via PULSO_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: protocolTitle, text: `${protocolTitle} - PULSO`, url: shareUrl });
      } catch { /* cancelled */ }
    }
  };

  const handleSavePDF = () => {
    const originalTitle = document.title;
    document.title = protocolTitle;
    window.print();
    document.title = originalTitle;
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-sm mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h3 className="font-heading font-bold text-sm">Compartilhar Protocolo</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-accent transition-colors">
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>

        {/* Protocol title */}
        <div className="px-4 pt-3 pb-2">
          <p className="text-xs text-muted-foreground line-clamp-2">{protocolTitle}</p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-1 px-4 mb-3">
          <button
            onClick={() => setTab("link")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              tab === "link" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}
          >
            <Link2 size={12} /> Link
          </button>
          <button
            onClick={() => setTab("qr")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              tab === "qr" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}
          >
            <QrCode size={12} /> QR Code
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-3">
          {tab === "link" ? (
            <div className="space-y-2">
              {/* Link display + copy */}
              <div className="flex items-center gap-2 p-2.5 bg-muted/50 rounded-xl border border-border">
                <p className="flex-1 text-xs text-foreground truncate font-mono">{shareUrl}</p>
                <button
                  onClick={handleCopyLink}
                  className="shrink-0 p-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-primary" />}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-2">
              <QRCodeDisplay value={shareUrl} size={180} />
              <p className="text-[10px] text-muted-foreground text-center">
                Aponte a câmera do celular para abrir o protocolo
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors text-emerald-600 dark:text-emerald-400 text-xs font-medium"
          >
            <MessageCircle size={14} /> WhatsApp
          </button>
          <button
            onClick={handleCopyText}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-xs font-medium"
          >
            <Copy size={14} /> Copiar texto
          </button>
          {navigator.share && (
            <button
              onClick={handleNativeShare}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-secondary hover:bg-accent/50 transition-colors text-xs font-medium"
            >
              <Link2 size={14} /> Mais opções
            </button>
          )}
          <button
            onClick={handleSavePDF}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 transition-colors text-orange-600 dark:text-orange-400 text-xs font-medium"
          >
            <FileDown size={14} /> Salvar PDF
          </button>
        </div>
      </div>
    </>
  );
}
