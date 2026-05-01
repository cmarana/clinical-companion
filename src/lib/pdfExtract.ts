// Extração de texto de PDFs no client usando pdfjs-dist
// Configurado para PWA — worker via CDN compatível com a versão instalada
import * as pdfjsLib from "pdfjs-dist";

// Worker URL versionado — evita mismatch ao atualizar a lib
const PDFJS_VERSION: string = pdfjsLib.version;
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;

export interface ExtractedPdf {
  fileName: string;
  pages: number;
  pagesAnalyzed: number;
  text: string;
  truncated: boolean;
  /** Bytes originais do PDF, mantidos em memória para permitir re-download local. */
  originalBlob?: Blob;
}

const MAX_PAGES = 20;
const MAX_CHARS = 60_000;

export async function extractPdfText(file: File): Promise<ExtractedPdf> {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const total = pdf.numPages;
  const toRead = Math.min(total, MAX_PAGES);

  const chunks: string[] = [];
  let charCount = 0;

  for (let i = 1; i <= toRead; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((it: unknown) => {
        const item = it as { str?: string };
        return typeof item.str === "string" ? item.str : "";
      })
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    if (pageText) {
      chunks.push(`--- Página ${i} ---\n${pageText}`);
      charCount += pageText.length;
    }
    page.cleanup();
    if (charCount >= MAX_CHARS) break;
  }

  await pdf.destroy();

  let text = chunks.join("\n\n");
  let truncated = total > toRead;
  if (text.length > MAX_CHARS) {
    text = text.slice(0, MAX_CHARS) + "\n\n[…texto truncado…]";
    truncated = true;
  }

  return {
    fileName: file.name,
    pages: total,
    pagesAnalyzed: Math.min(toRead, chunks.length),
    text,
    truncated,
    originalBlob: new Blob([buffer], { type: file.type || "application/pdf" }),
  };
}
