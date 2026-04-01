import { Share2, MessageCircle, Copy, FileDown, QrCode } from "lucide-react";
import { useState } from "react";
import { shareViaWhatsApp, copyToClipboard, exportToPDF } from "@/lib/shareUtils";
import ShareProtocolDialog from "./ShareProtocolDialog";

interface ShareMenuProps {
  getText: () => string;
  title: string;
  showPDF?: boolean;
  shareUrl?: string;
}

export default function ShareMenu({ getText, title, showPDF = false, shareUrl }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  const handleWhatsApp = () => {
    shareViaWhatsApp(getText());
    setOpen(false);
  };

  const handleCopy = () => {
    copyToClipboard(getText());
    setOpen(false);
  };

  const handlePDF = () => {
    exportToPDF(title);
    setOpen(false);
  };

  const handleShareLink = () => {
    setOpen(false);
    setShowShareDialog(true);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card hover:bg-accent/50 active:scale-[0.97] transition-all text-xs font-heading font-semibold"
      >
        <Share2 size={14} /> Compartilhar
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-1 z-50 bg-card border border-border rounded-xl shadow-lg p-1 min-w-[180px]">
            {shareUrl && (
              <button
                onClick={handleShareLink}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors text-left"
              >
                <QrCode size={16} className="text-primary" />
                <span className="text-xs font-medium">Link / QR Code</span>
              </button>
            )}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors text-left"
            >
              <MessageCircle size={16} className="text-emerald-500" />
              <span className="text-xs font-medium">WhatsApp</span>
            </button>
            <button
              onClick={handleCopy}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors text-left"
            >
              <Copy size={16} className="text-primary" />
              <span className="text-xs font-medium">Copiar texto</span>
            </button>
            {showPDF && (
              <button
                onClick={handlePDF}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors text-left"
              >
                <FileDown size={16} className="text-orange-500" />
                <span className="text-xs font-medium">Salvar como PDF</span>
              </button>
            )}
          </div>
        </>
      )}

      {shareUrl && (
        <ShareProtocolDialog
          open={showShareDialog}
          onClose={() => setShowShareDialog(false)}
          protocolTitle={title}
          shareUrl={shareUrl}
          shareText={getText()}
        />
      )}
    </div>
  );
}
