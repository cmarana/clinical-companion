import { toast } from "sonner";

interface ShareOptions {
  title: string;
  text: string;
  url?: string;
}

export async function shareViaWhatsApp(text: string) {
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/?text=${encoded}`, "_blank");
}

export async function shareContent({ title, text, url }: ShareOptions) {
  // Try native share API first (mobile)
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return;
    } catch (e) {
      // User cancelled or not supported, fall through
      if ((e as Error).name === "AbortError") return;
    }
  }
  // Fallback: copy to clipboard
  await copyToClipboard(text);
}

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copiado para a área de transferência!");
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast.success("Copiado!");
  }
}

export function exportToPDF(title: string) {
  // Use browser print dialog which allows "Save as PDF"
  const printWindow = window;
  const originalTitle = document.title;
  document.title = title;
  printWindow.print();
  document.title = originalTitle;
}

export function formatProtocolForShare(title: string, category: string, sections: { title: string; content: string }[]): string {
  let text = `📋 *${title}*\n`;
  text += `📁 ${category}\n`;
  text += `${"─".repeat(30)}\n\n`;
  
  for (const section of sections) {
    text += `*${section.title}*\n`;
    text += `${section.content}\n\n`;
  }
  
  text += `\n📱 _Compartilhado via PS Guide_`;
  return text;
}

export function formatNoteForShare(title: string, category: string, content: string, patient?: string): string {
  let text = `📝 *${title}*\n`;
  text += `📁 ${category}\n`;
  if (patient) text += `👤 ${patient}\n`;
  text += `${"─".repeat(30)}\n\n`;
  text += content;
  text += `\n\n📱 _Compartilhado via PS Guide_`;
  return text;
}
