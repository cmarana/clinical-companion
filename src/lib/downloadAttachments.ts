/**
 * Download local de anexos anonimizados em formato ZIP.
 *
 * - Imagens: usa as versões já anonimizadas (faixas pretas no topo/rodapé) que foram enviadas para a IA.
 * - PDFs: o arquivo original do usuário (a anonimização visual de PDFs não é aplicada — os PDFs são
 *   enviados como vieram para extração de texto).
 *
 * Implementação ZIP minimalista (método STORE, sem compressão) — adequada para conteúdo já comprimido
 * como JPEG e PDF, sem adicionar dependências.
 */

interface ZipEntry {
  name: string;
  data: Uint8Array;
}

// CRC32 — implementação leve, tabela pré-computada
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function dosTime(date: Date) {
  const time =
    ((date.getHours() & 0x1f) << 11) |
    ((date.getMinutes() & 0x3f) << 5) |
    ((date.getSeconds() / 2) & 0x1f);
  const dt =
    (((date.getFullYear() - 1980) & 0x7f) << 9) |
    (((date.getMonth() + 1) & 0x0f) << 5) |
    (date.getDate() & 0x1f);
  return { time, date: dt };
}

function buildZip(entries: ZipEntry[]): Blob {
  const enc = new TextEncoder();
  const localParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;
  const now = new Date();
  const { time, date } = dosTime(now);

  for (const entry of entries) {
    const nameBytes = enc.encode(entry.name);
    const crc = crc32(entry.data);
    const size = entry.data.length;

    // Local file header
    const local = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true); // signature
    lv.setUint16(4, 20, true); // version
    lv.setUint16(6, 0, true); // flags
    lv.setUint16(8, 0, true); // method = STORE
    lv.setUint16(10, time, true);
    lv.setUint16(12, date, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, size, true);
    lv.setUint32(22, size, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true); // extra
    local.set(nameBytes, 30);
    localParts.push(local, entry.data);

    // Central directory entry
    const central = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(central.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true); // version made by
    cv.setUint16(6, 20, true); // version needed
    cv.setUint16(8, 0, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, time, true);
    cv.setUint16(14, date, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, size, true);
    cv.setUint32(24, size, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    central.set(nameBytes, 46);
    centralParts.push(central);

    offset += local.length + entry.data.length;
  }

  const centralSize = centralParts.reduce((s, p) => s + p.length, 0);
  const centralOffset = offset;

  // End of central directory
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, centralOffset, true);
  ev.setUint16(20, 0, true);

  return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
}

/** Converte um data URL (base64 ou plain) em Uint8Array. */
function dataUrlToBytes(dataUrl: string): Uint8Array {
  const comma = dataUrl.indexOf(",");
  if (comma === -1) return new Uint8Array();
  const meta = dataUrl.slice(0, comma);
  const payload = dataUrl.slice(comma + 1);
  if (meta.includes(";base64")) {
    const bin = atob(payload);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  return new TextEncoder().encode(decodeURIComponent(payload));
}

/** Detecta a extensão a partir do mime type embarcado no data URL. */
function extFromDataUrl(dataUrl: string, fallback = "bin"): string {
  const m = dataUrl.match(/^data:([^;,]+)/);
  if (!m) return fallback;
  const mime = m[1].toLowerCase();
  if (mime === "image/jpeg" || mime === "image/jpg") return "jpg";
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  if (mime === "image/heic") return "heic";
  if (mime === "application/pdf") return "pdf";
  return fallback;
}

/** Sanitiza nome para uso dentro do ZIP. */
function safeName(name: string, fallback: string): string {
  const cleaned = (name || fallback).replace(/[\\/:*?"<>|]+/g, "_").trim();
  return cleaned || fallback;
}

export interface AttachmentInput {
  /** Imagens já anonimizadas (data URLs). */
  images: string[];
  /** PDFs originais. */
  pdfs: Array<{ fileName: string; blob?: Blob }>;
}

/**
 * Gera um ZIP local com os anexos anonimizados e dispara o download.
 * Retorna o número de arquivos efetivamente incluídos.
 */
export async function downloadAnonymizedAttachments(
  input: AttachmentInput,
  zipName = "exames-anonimizados.zip",
): Promise<number> {
  const entries: ZipEntry[] = [];

  input.images.forEach((dataUrl, i) => {
    if (!dataUrl) return;
    const ext = extFromDataUrl(dataUrl, "jpg");
    entries.push({
      name: `imagens/exame-anonimizado-${String(i + 1).padStart(2, "0")}.${ext}`,
      data: dataUrlToBytes(dataUrl),
    });
  });

  for (let i = 0; i < input.pdfs.length; i++) {
    const pdf = input.pdfs[i];
    if (!pdf?.blob) continue;
    const baseName = safeName(pdf.fileName, `documento-${i + 1}.pdf`);
    const finalName = baseName.toLowerCase().endsWith(".pdf") ? baseName : `${baseName}.pdf`;
    const buf = new Uint8Array(await pdf.blob.arrayBuffer());
    entries.push({ name: `pdfs/${finalName}`, data: buf });
  }

  // README explicando o conteúdo
  const readme = [
    "Anexos anonimizados — PULSO Emergência",
    "=====================================",
    "",
    `Gerado em: ${new Date().toLocaleString("pt-BR")}`,
    `Imagens: ${input.images.length}`,
    `PDFs: ${input.pdfs.length}`,
    "",
    "• As imagens foram anonimizadas com faixas pretas no topo e/ou rodapé",
    "  para ocultar dados identificáveis (nome, prontuário, data).",
    "• Os PDFs estão no formato original — confirme manualmente que não",
    "  contêm dados sensíveis antes de compartilhar.",
    "",
    "Disclaimer: ferramenta de apoio. A responsabilidade pela conferência",
    "dos dados removidos antes do compartilhamento é do profissional.",
  ].join("\n");
  entries.push({ name: "LEIA-ME.txt", data: new TextEncoder().encode(readme) });

  if (entries.length === 1) {
    // só o README
    return 0;
  }

  const blob = buildZip(entries);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = zipName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);

  return entries.length - 1; // exclui o README
}
