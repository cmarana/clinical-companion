import { supabase } from "@/integrations/supabase/client";
import type { MedicationImportItem } from "@/data/medicationsData";

const BATCH_SIZE = 500;

/** Convert camelCase import item to snake_case DB row */
function toDbRow(item: MedicationImportItem) {
  return {
    id: item.id,
    nome: item.nome,
    principio_ativo: item.principioAtivo,
    nomes_comerciais: item.nomesComerciais ?? [],
    classe: item.classe ?? "",
    subclasse: item.subclasse ?? "",
    categoria: item.categoria ?? "",
    forma_farmaceutica: item.formaFarmaceutica ?? "",
    via: item.via ?? "",
    controlado: item.controlado ?? false,
    receituario: item.receituario ?? "",
    gestacao: item.gestacao ?? "",
    lactacao: item.lactacao ?? "",
    pediatria: item.pediatria ?? false,
    idoso: item.idoso ?? "",
    mecanismo: item.mecanismo ?? "",
    indicacoes: item.indicacoes ?? "",
    posologia_adulto: item.posologiaAdulto ?? "",
    posologia_pediatrica: item.posologiaPediatrica ?? "",
    ajuste_renal: item.ajusteRenal ?? "",
    ajuste_hepatico: item.ajusteHepatico ?? "",
    contraindicacoes: item.contraindicacoes ?? "",
    efeitos_adversos: item.efeitosAdversos ?? "",
    interacoes: item.interacoes ?? "",
    monitorizacao: item.monitorizacao ?? "",
    diluicao_ev: item.diluicaoEV ?? "",
    compatibilidade_ev: item.compatibilidadeEV ?? "",
    apresentacoes: item.apresentacoes ?? "",
    observacoes: item.observacoes ?? "",
    referencias: item.referencias ?? "",
    gestacao_seguro: item.gestacaoSeguro ?? false,
    tags: item.tags ?? [],
    categoria_anvisa: item.categoriaAnvisa ?? "",
  };
}

export interface ImportResult {
  total: number;
  imported: number;
  errors: string[];
}

/**
 * Import medications from internal array into Supabase.
 * Uses upsert to avoid duplicates (based on id).
 * Auto-chunks into batches for large datasets.
 */
export async function importFromArray(items: MedicationImportItem[]): Promise<ImportResult> {
  // Deduplicate by id (last occurrence wins)
  const uniqueMap = new Map<string, MedicationImportItem>();
  for (const item of items) {
    uniqueMap.set(item.id, item);
  }
  const dedupedItems = Array.from(uniqueMap.values());
  
  const result: ImportResult = { total: dedupedItems.length, imported: 0, errors: [] };

  for (let i = 0; i < dedupedItems.length; i += BATCH_SIZE) {
    const batch = dedupedItems.slice(i, i + BATCH_SIZE).map(toDbRow);
    const { error } = await supabase
      .from("bulario_medications")
      .upsert(batch, { onConflict: "id" });

    if (error) {
      result.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${error.message}`);
    } else {
      result.imported += batch.length;
    }
  }

  return result;
}

/**
 * Import medications from a JSON string.
 * Expects an array of MedicationImportItem objects.
 */
export async function importFromJSON(jsonString: string): Promise<ImportResult> {
  try {
    const parsed = JSON.parse(jsonString);
    if (!Array.isArray(parsed)) {
      return { total: 0, imported: 0, errors: ["JSON deve ser um array de medicamentos."] };
    }
    return importFromArray(parsed as MedicationImportItem[]);
  } catch {
    return { total: 0, imported: 0, errors: ["JSON inválido."] };
  }
}

/**
 * Import medications from a CSV string.
 * First row = headers (must match MedicationImportItem field names).
 * Supports both camelCase and snake_case headers.
 */
export async function importFromCSV(csvString: string): Promise<ImportResult> {
  try {
    const lines = csvString.trim().split("\n");
    if (lines.length < 2) {
      return { total: 0, imported: 0, errors: ["CSV deve ter cabeçalho + pelo menos 1 linha."] };
    }

    const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));

    const headerMap: Record<string, string> = {
      id: "id", nome: "nome", principioativo: "principioAtivo", principio_ativo: "principioAtivo",
      nomescomerciais: "nomesComerciais", nomes_comerciais: "nomesComerciais",
      classe: "classe", subclasse: "subclasse", categoria: "categoria",
      formafarmaceutica: "formaFarmaceutica", forma_farmaceutica: "formaFarmaceutica",
      via: "via", controlado: "controlado", receituario: "receituario",
      indicacoes: "indicacoes", posologiaadulto: "posologiaAdulto", posologia_adulto: "posologiaAdulto",
      posologiapediatrica: "posologiaPediatrica", posologia_pediatrica: "posologiaPediatrica",
      contraindicacoes: "contraindicacoes", efeitosadversos: "efeitosAdversos", efeitos_adversos: "efeitosAdversos",
      interacoes: "interacoes", gestacao: "gestacao", lactacao: "lactacao",
      pediatria: "pediatria", idoso: "idoso", mecanismo: "mecanismo",
      ajusterenal: "ajusteRenal", ajuste_renal: "ajusteRenal",
      ajustehepatico: "ajusteHepatico", ajuste_hepatico: "ajusteHepatico",
      monitorizacao: "monitorizacao", diluicaoev: "diluicaoEV", diluicao_ev: "diluicaoEV",
      compatibilidadeev: "compatibilidadeEV", compatibilidade_ev: "compatibilidadeEV",
      apresentacoes: "apresentacoes", observacoes: "observacoes", referencias: "referencias",
      gestacaoseguro: "gestacaoSeguro", gestacao_seguro: "gestacaoSeguro",
      tags: "tags", categoriaanvisa: "categoriaAnvisa", categoria_anvisa: "categoriaAnvisa",
    };

    const normalizedHeaders = headers.map((h) => headerMap[h.toLowerCase()] ?? h);

    const items: MedicationImportItem[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      const obj: Record<string, unknown> = {};

      normalizedHeaders.forEach((header, idx) => {
        const val = values[idx]?.trim() ?? "";
        if (header === "controlado" || header === "pediatria" || header === "gestacaoSeguro") {
          obj[header] = val === "true" || val === "1" || val === "sim";
        } else if (header === "nomesComerciais" || header === "tags") {
          obj[header] = val ? val.split(";").map((s: string) => s.trim()) : [];
        } else {
          obj[header] = val;
        }
      });

      if (obj.id && obj.nome) {
        items.push(obj as unknown as MedicationImportItem);
      }
    }

    return importFromArray(items);
  } catch {
    return { total: 0, imported: 0, errors: ["Erro ao processar CSV."] };
  }
}

/** Simple CSV line parser that handles quoted fields */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}
