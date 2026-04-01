import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

// Dynamically import all lote files via bun
const { allMedicationsData } = await import("./src/data/medicationsData.ts");

const { data: existing } = await supabase.from("bulario_medications").select("id");
const existingIds = new Set((existing ?? []).map(r => r.id));
const newMeds = allMedicationsData.filter(m => !existingIds.has(m.id));

console.log(`Local: ${allMedicationsData.length}, DB: ${existingIds.size}, New: ${newMeds.length}`);

if (!newMeds.length) { console.log("Nothing to import."); process.exit(0); }

function toDbRow(item) {
  return {
    id: item.id, nome: item.nome, principio_ativo: item.principioAtivo,
    nomes_comerciais: item.nomesComerciais ?? [], classe: item.classe ?? "",
    subclasse: item.subclasse ?? "", categoria: item.categoria ?? "",
    forma_farmaceutica: item.formaFarmaceutica ?? "", via: item.via ?? "",
    controlado: item.controlado ?? false, receituario: item.receituario ?? "",
    gestacao: item.gestacao ?? "", lactacao: item.lactacao ?? "",
    pediatria: item.pediatria ?? false, idoso: item.idoso ?? "",
    mecanismo: item.mecanismo ?? "", indicacoes: item.indicacoes ?? "",
    posologia_adulto: item.posologiaAdulto ?? "",
    posologia_pediatrica: item.posologiaPediatrica ?? "",
    ajuste_renal: item.ajusteRenal ?? "", ajuste_hepatico: item.ajusteHepatico ?? "",
    contraindicacoes: item.contraindicacoes ?? "",
    efeitos_adversos: item.efeitosAdversos ?? "", interacoes: item.interacoes ?? "",
    monitorizacao: item.monitorizacao ?? "", diluicao_ev: item.diluicaoEV ?? "",
    compatibilidade_ev: item.compatibilidadeEV ?? "",
    apresentacoes: item.apresentacoes ?? "", observacoes: item.observacoes ?? "",
    referencias: item.referencias ?? "", gestacao_seguro: item.gestacaoSeguro ?? false,
    tags: item.tags ?? [], categoria_anvisa: item.categoriaAnvisa ?? "",
    descricao: item.descricao ?? "", mecanismo_acao: item.mecanismoAcao ?? "",
    indicacoes_detalhadas: item.indicacoesDetalhadas ?? "",
    dose_adulto: item.doseAdulto ?? "", dose_pediatrica: item.dosePediatrica ?? "",
    dose_por_peso: item.dosePorPeso ?? "", dose_maxima: item.doseMaxima ?? "",
    efeitos_adversos_comuns: item.efeitosAdversosComuns ?? "",
    efeitos_adversos_graves: item.efeitosAdversosGraves ?? "",
    interacoes_medicamentosas: item.interacoesMedicamentosas ?? "",
    diluicao: item.diluicao ?? "", tempo_infusao: item.tempoInfusao ?? "",
    categoria_farmacologica: item.categoriaFarmacologica ?? "",
    grupo_terapeutico: item.grupoTerapeutico ?? "", tarja: item.tarja ?? "",
    receita_tipo: item.receitaTipo ?? "",
  };
}

let imported = 0;
for (let i = 0; i < newMeds.length; i += 200) {
  const batch = newMeds.slice(i, i + 200).map(toDbRow);
  const { error } = await supabase.from("bulario_medications").upsert(batch, { onConflict: "id" });
  if (error) console.error("Batch error:", error.message);
  else { imported += batch.length; console.log(`Imported: ${imported}/${newMeds.length}`); }
}
console.log("Done!", imported, "new medications inserted.");
