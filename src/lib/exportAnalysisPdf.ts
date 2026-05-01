// Util para exportar uma análise de imagem/exame como PDF.
// Estratégia: abre uma janela nova com HTML formatado e dispara window.print().
// O usuário escolhe "Salvar como PDF" no diálogo de impressão (nativo de qualquer browser/SO).

export interface PatientHeader {
  name?: string;
  age?: string;
  sex?: string;
  record?: string; // prontuário / atendimento
  professional?: string; // médico responsável
}

export interface ExportAnalysisOptions {
  modality: string;
  timestamp: number;
  context?: string;
  classifications?: Array<{ i: number; modality: string; region: string }>;
  analysisMarkdown: string;
  patient?: PatientHeader;
  thumbnail?: string; // data URL opcional
  docNames?: string[];
  imagesCount?: number;
  docsCount?: number;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Conversão markdown → HTML mínima (suporte a headings, bold, italic, listas, blockquote, parágrafos). */
function markdownToHtml(md: string): string {
  const lines = md.split(/\r?\n/);
  const out: string[] = [];
  let inUl = false;
  let inOl = false;
  const closeLists = () => {
    if (inUl) { out.push("</ul>"); inUl = false; }
    if (inOl) { out.push("</ol>"); inOl = false; }
  };
  const inline = (txt: string) =>
    escapeHtml(txt)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/__([^_]+)__/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  for (const raw of lines) {
    const line = raw.replace(/\s+$/g, "");
    if (!line.trim()) { closeLists(); out.push(""); continue; }
    let m;
    if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      closeLists();
      const lvl = m[1].length;
      out.push(`<h${lvl}>${inline(m[2])}</h${lvl}>`);
      continue;
    }
    if ((m = line.match(/^>\s?(.*)$/))) {
      closeLists();
      out.push(`<blockquote>${inline(m[1])}</blockquote>`);
      continue;
    }
    if ((m = line.match(/^[-*]\s+(.*)$/))) {
      if (!inUl) { closeLists(); out.push("<ul>"); inUl = true; }
      out.push(`<li>${inline(m[1])}</li>`);
      continue;
    }
    if ((m = line.match(/^(\d+)\.\s+(.*)$/))) {
      if (!inOl) { closeLists(); out.push("<ol>"); inOl = true; }
      out.push(`<li>${inline(m[2])}</li>`);
      continue;
    }
    closeLists();
    out.push(`<p>${inline(line)}</p>`);
  }
  closeLists();
  return out.join("\n");
}

export function exportAnalysisAsPdf(opts: ExportAnalysisOptions) {
  const dt = new Date(opts.timestamp);
  const dateLabel = dt.toLocaleString("pt-BR");
  const safeTitle = `Analise-${opts.modality}-${dt.toISOString().slice(0, 16).replace(/[:T-]/g, "")}`;

  const p = opts.patient ?? {};
  const patientRows: Array<[string, string]> = [
    ["Paciente", p.name?.trim() || "—"],
    ["Idade", p.age?.trim() || "—"],
    ["Sexo", p.sex?.trim() || "—"],
    ["Prontuário/Atend.", p.record?.trim() || "—"],
    ["Médico responsável", p.professional?.trim() || "—"],
    ["Data da análise", dateLabel],
  ];

  const matsParts: string[] = [];
  if (opts.imagesCount) matsParts.push(`${opts.imagesCount} imagem(ns)`);
  if (opts.docsCount) matsParts.push(`${opts.docsCount} PDF(s)`);
  if (opts.docNames?.length) matsParts.push(opts.docNames.map((n) => `📄 ${n}`).join(" · "));

  const clsBlock = opts.classifications?.length
    ? `<div class="cls"><strong>Classificação automática:</strong> ${opts.classifications
        .map((c) => `Imagem ${c.i} — ${escapeHtml(c.modality)} (${escapeHtml(c.region)})`)
        .join(" · ")}</div>`
    : "";

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(safeTitle)}</title>
<style>
  @page { size: A4; margin: 16mm 14mm 18mm 14mm; }
  * { box-sizing: border-box; }
  html, body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #111; font-size: 11pt; line-height: 1.45; }
  body { margin: 0; }
  .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #0a6dd9; padding-bottom: 8px; margin-bottom: 12px; }
  .brand { font-weight: 700; color: #0a6dd9; font-size: 14pt; letter-spacing: 0.5px; }
  .brand small { display:block; font-weight: 400; color: #555; font-size: 8.5pt; letter-spacing: 0; }
  .doc-title { text-align: right; font-size: 9pt; color: #555; }
  table.patient { width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 10pt; }
  table.patient td { border: 1px solid #d4d8dd; padding: 5px 8px; }
  table.patient td.label { background: #f4f6f9; font-weight: 600; width: 32%; color: #333; }
  .ctx { background: #fef9e7; border-left: 3px solid #d4a843; padding: 6px 10px; margin: 0 0 12px 0; font-size: 10pt; }
  .cls { background: #eaf3fc; border-left: 3px solid #0a6dd9; padding: 6px 10px; margin: 0 0 12px 0; font-size: 10pt; }
  .mats { font-size: 9.5pt; color: #555; margin-bottom: 10px; }
  .thumb { float: right; width: 90px; height: 90px; object-fit: cover; border: 1px solid #ccc; border-radius: 4px; margin: 0 0 8px 12px; }
  h1, h2, h3 { color: #0a3d72; margin: 14px 0 6px; }
  h1 { font-size: 14pt; }
  h2 { font-size: 12pt; border-bottom: 1px solid #e3e6ea; padding-bottom: 3px; }
  h3 { font-size: 11pt; }
  p { margin: 4px 0 6px; }
  ul, ol { margin: 4px 0 8px 22px; padding: 0; }
  li { margin: 2px 0; }
  blockquote { margin: 4px 0 8px; padding: 4px 10px; border-left: 3px solid #0a6dd9; background: #f4f8fc; color: #333; font-style: italic; }
  code { background: #f1f3f5; padding: 1px 4px; border-radius: 3px; font-family: 'Courier New', monospace; font-size: 9.5pt; }
  .disclaimer { margin-top: 18px; padding: 10px 12px; border: 1px solid #e0a800; background: #fffbe6; font-size: 9pt; color: #664d03; border-radius: 4px; }
  .footer { position: fixed; bottom: 6mm; left: 14mm; right: 14mm; font-size: 8pt; color: #888; text-align: center; border-top: 1px solid #e3e6ea; padding-top: 4px; }
  @media print {
    .no-print { display: none !important; }
    .footer { position: fixed; bottom: 0; }
  }
  .actions { position: fixed; top: 12px; right: 12px; display: flex; gap: 8px; }
  .actions button { background: #0a6dd9; color: #fff; border: 0; padding: 8px 14px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 11pt; }
  .actions button.secondary { background: #6c757d; }
</style>
</head>
<body>
  <div class="actions no-print">
    <button onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
    <button class="secondary" onclick="window.close()">Fechar</button>
  </div>

  <div class="header">
    <div class="brand">PULSO Emergência<small>Relatório de análise de exame por IA — apoio à decisão clínica</small></div>
    <div class="doc-title">
      <div><strong>${escapeHtml(opts.modality)}</strong></div>
      <div>${escapeHtml(dateLabel)}</div>
    </div>
  </div>

  <table class="patient">
    <tbody>
      ${patientRows
        .reduce<string[][]>((rows, item, idx) => {
          if (idx % 2 === 0) rows.push([]);
          rows[rows.length - 1].push(`<td class="label">${escapeHtml(item[0])}</td><td>${escapeHtml(item[1])}</td>`);
          return rows;
        }, [])
        .map((cells) => `<tr>${cells.join("")}</tr>`)
        .join("")}
    </tbody>
  </table>

  ${opts.thumbnail ? `<img class="thumb" src="${opts.thumbnail}" alt="" />` : ""}

  ${matsParts.length ? `<div class="mats"><strong>Materiais analisados:</strong> ${escapeHtml(matsParts.join(" · "))}</div>` : ""}

  ${opts.context ? `<div class="ctx"><strong>Indicação clínica:</strong> ${escapeHtml(opts.context)}</div>` : ""}

  ${clsBlock}

  <div class="content">
    ${markdownToHtml(opts.analysisMarkdown)}
  </div>

  <div class="disclaimer">
    ⚠️ <strong>Disclaimer médico:</strong> Este relatório é gerado por inteligência artificial como ferramenta auxiliar à decisão clínica.
    NÃO substitui a avaliação médica presencial, o laudo formal de radiologista ou outro especialista, nem a correlação clínica
    obrigatória com a história, exame físico e demais exames complementares. A responsabilidade pela conduta é exclusiva do
    médico assistente. Confira sempre os valores e achados no documento original. Em conformidade com as resoluções do CFM
    sobre uso de IA em saúde e com a LGPD (Lei 13.709/2018) — dados de paciente devem ser tratados com sigilo profissional.
  </div>

  <div class="footer">
    PULSO Emergência · Relatório gerado em ${escapeHtml(dateLabel)} · Documento sem validade legal sem assinatura do médico responsável.
  </div>

  <script>
    // Auto-abre o diálogo de impressão após carregar (usuário pode salvar como PDF)
    window.addEventListener('load', function () {
      setTimeout(function () { try { window.print(); } catch (e) {} }, 350);
    });
  </script>
</body>
</html>`;

  const w = window.open("", "_blank", "width=900,height=1000");
  if (!w) {
    alert("Permita pop-ups para exportar como PDF.");
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
}
