import type { FullProtocol } from "./types";

export const intoxicationFullProtocols2: FullProtocol[] = [
  {
    id: "fp-intoxicacao-alcoolica", title: "Intoxicação Alcoólica Grave", categoryId: "intoxication", category: "Intoxicações",
    tags: ["álcool", "etanol", "Wernicke", "tiamina", "hipoglicemia"],
    sections: [
      { id: "intro", title: "Introdução", content: "Alcoolemia > 300 mg/dL pode ser fatal. Causa depressão do SNC, hipoglicemia, hipotermia, aspiração. Sempre excluir TCE e hipoglicemia. Tiamina ANTES da glicose (prevenir Wernicke)." },
      { id: "def", title: "Definição", content: "Intoxicação aguda pelo etanol com risco de vida. > 300 mg/dL: estupor; > 400 mg/dL: coma/óbito. Etilistas crônicos toleram mais." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Hálito etílico, ataxia, disartria, nistagmo, rebaixamento. SEMPRE excluir TCE, hipoglicemia, intoxicação mista. Glicemia capilar obrigatória." },
      { id: "etiology", title: "Etiologia", content: "Ingestão excessiva aguda, binge drinking, tentativa de suicídio. Investigar metanol/etilenoglicol." },
      { id: "clinical", title: "Apresentação Clínica", content: "Ataxia, disartria, vômitos → aspiração, hipotermia, hipoglicemia, convulsões, depressão respiratória, arritmias." },
      { id: "diagnosis", title: "Diagnóstico", content: "Glicemia (obrigatório), alcoolemia, gasometria + lactato, eletrólitos, gap osmolar, TC crânio SN, ECG." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "TCE, hipoglicemia, metanol/etilenoglicol, Wernicke, AVC, estado pós-ictal, meningite, intoxicação mista." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ABCDE + posição lateral de segurança\n2. Tiamina 300 mg IV ANTES da glicose\n3. Glicose 50% 50-100 mL IV SN\n4. Aquecimento se hipotermia\n5. SF + KCl + MgSO4\n6. IOT se GCS ≤ 8\n7. TC crânio se não melhora em 4-6h" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tiamina 300 mg IV. Glicose 50% SN. SF + KCl + MgSO4 2g IV. Aquecimento. BZD se abstinência (diazepam)." },
      { id: "prescriptions", title: "Prescrições", content: "1. Tiamina 300 mg IV\n2. Glicose 50% 100 mL IV SN\n3. SF + KCl + MgSO4\n4. Glicemia 2/2h\n5. Monitorização\n6. TC crânio SN\n7. Observação até GCS 15\n8. Avaliação social" },
      { id: "followup", title: "Acompanhamento", content: "Observação até GCS 15 e deambulação segura. Glicemia seriada. Vigiar abstinência (CIWA-Ar). Referência para alcoolismo." },
      { id: "complications", title: "Complicações", content: "Aspiração, hipoglicemia, encefalopatia de Wernicke-Korsakoff, rabdomiólise, hipotermia, PCR." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: coma, IOT, hipotermia grave. Observação: todos. Alta: GCS 15, deambulação, sem TCE." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Vonghia L. Eur J Int Med 2008.\n2. Goldfrank's 11th ed. 2019.\n3. NICE Guidelines 2017." }
    ]
  },
  {
    id: "fp-overdose-multipla", title: "Overdose Múltiplas Substâncias", categoryId: "intoxication", category: "Intoxicações",
    tags: ["polintoxicação", "overdose", "toxíndrome", "antídoto"],
    sections: [
      { id: "intro", title: "Introdução", content: "Polintoxicação ocorre em 30-50% das intoxicações e é mais letal que isoladas. Manejo baseado em toxíndromes e suporte. Identificar antídotos específicos." },
      { id: "def", title: "Definição", content: "Intoxicação simultânea por ≥ 2 substâncias. Combinações letais: opioide+BZD+álcool, cocaína+álcool (cocaetileno), ISRS+tramadol (síndrome serotoninérgica)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Toxíndromes sobrepostas: sedativa, simpatomimética, anticolinérgica, colinérgica, serotoninérgica." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio, uso recreativo combinado, interação acidental, body packing." },
      { id: "clinical", title: "Apresentação Clínica", content: "Apresentação mista e confusa. Toxíndromes contraditórias. Evolução bifásica. Maior risco de IR, arritmias, rabdomiólise." },
      { id: "diagnosis", title: "Diagnóstico", content: "Screening amplo, ECG, gasometria, eletrólitos, CPK, alcoolemia, paracetamol sérico (coingestão frequente), nível de ADT/salicilato SN." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Intoxicação única com efeitos complexos, sepse, meningite, AVC, estado pós-ictal." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ABCDE + IOT se GCS ≤ 8\n2. Antídotos específicos: naloxona (opioide), NAC (paracetamol), NaHCO3 (ADT), atropina (OF)\n3. Carvão ativado < 1-2h\n4. Tratar complicações\n5. UTI\n6. CEATOX" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Cada substância com seu antídoto. Suporte: via aérea, ventilação, hemodinâmica. CEATOX: 0800-722-6001." },
      { id: "prescriptions", title: "Prescrições", content: "1. IOT SN\n2. UTI\n3. Antídotos específicos\n4. Carvão 50g SN\n5. ECG seriado\n6. Screening amplo\n7. Paracetamol sérico\n8. CPK\n9. Avaliação psiquiátrica" },
      { id: "followup", title: "Acompanhamento", content: "UTI ≥ 24h. Monitorização prolongada. ECG seriado. Avaliação psiquiátrica obrigatória." },
      { id: "complications", title: "Complicações", content: "PCR, insuficiência respiratória, arritmias, rabdomiólise, IRA, encefalopatia anóxica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos os sintomáticos. Alta: estabilidade > 24h + avaliação psiquiátrica." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Goldfrank's 11th ed. 2019.\n2. Bateman DN. Medicine 2016.\n3. AACT/ACMT 2021." }
    ]
  },
  {
    id: "fp-intoxicacao-monoxido", title: "Intoxicação por Monóxido de Carbono", categoryId: "intoxication", category: "Intoxicações",
    tags: ["CO", "monóxido", "carboxi-hemoglobina", "hiperbárica", "incêndio"],
    sections: [
      { id: "intro", title: "Introdução", content: "CO é gás incolor/inodoro, afinidade 240x maior que O2 pela Hb. SpO2 de pulso é FALSAMENTE normal. Tratamento: O2 100%. Câmara hiperbárica em graves." },
      { id: "def", title: "Definição", content: "COHb normal < 3%. 10-20%: cefaleia. 20-40%: confusão. 40-60%: coma. > 60%: letal. SpO2 de pulso NÃO diferencia COHb." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Incêndio em ambiente fechado, aquecedor mal ventilado, múltiplas vítimas com sintomas semelhantes, cefaleia + confusão sem causa." },
      { id: "etiology", title: "Etiologia", content: "Incêndio, aquecedores/caldeiras, escapamento em garagem, churrasqueira fechada, tentativa de suicídio." },
      { id: "clinical", title: "Apresentação Clínica", content: "Leve: cefaleia, tontura. Moderada: confusão, taquicardia, dor torácica. Grave: coma, convulsões, arritmias, isquemia. Pele cor de cereja: raro. Síndrome neurológica tardia (2-40 dias)." },
      { id: "diagnosis", title: "Diagnóstico", content: "COHb por co-oximetria (PaO2 pode ser normal!). Gasometria. ECG + troponina. Lactato. TC crânio (globo pálido). NÃO confiar SpO2." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Cianeto (associado em incêndios), AVC, intoxicação alcoólica, enxaqueca, gastroenterite viral." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Remover do ambiente\n2. O2 100% máscara não reinalante (meia-vida 60-90 min vs 4-6h ar ambiente)\n3. IOT + FiO2 100% se coma\n4. Câmara hiperbárica: COHb > 25%, perda de consciência, gestante, sintomas neurológicos, isquemia\n5. Incêndio: considerar hidroxocobalamina (cianeto)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "O2 100% ≥ 6h. Câmara hiperbárica (O2 2,5-3 ATM). Hidroxocobalamina 5g IV (cianeto). BZD (convulsão)." },
      { id: "prescriptions", title: "Prescrições", content: "1. O2 100% 15 L/min\n2. COHb seriada\n3. Gasometria\n4. ECG + troponina\n5. Lactato\n6. Câmara hiperbárica SN\n7. Hidroxocobalamina SN\n8. TC crânio SN" },
      { id: "followup", title: "Acompanhamento", content: "COHb até < 5%. O2 por mínimo 6h. Acompanhamento neurológico 6-12 meses (síndrome tardia). Avaliação neuropsicológica. Gestantes: USG." },
      { id: "complications", title: "Complicações", content: "Síndrome neurológica tardia (parkinsonismo, amnésia), isquemia miocárdica, edema cerebral, morte." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: coma, IOT, arritmia, isquemia. Observação ≥ 6h. Alta: COHb < 5%, assintomático, acompanhamento neurológico." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Weaver LK. NEJM 2009.\n2. Wolf SJ. Ann Emerg Med 2017.\n3. Goldfrank's 11th ed. 2019." }
    ]
  }
];
