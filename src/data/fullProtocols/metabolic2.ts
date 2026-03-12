import type { FullProtocol } from "./types";

export const metabolicFullProtocols2: FullProtocol[] = [
  {
    id: "fp-hipoglicemia", title: "Hipoglicemia Grave", categoryId: "metabolic", category: "Metabólico e Endócrino",
    tags: ["hipoglicemia", "glicose", "insulina", "glucagon", "diabetes"],
    sections: [
      { id: "intro", title: "Introdução", content: "Hipoglicemia grave: glicemia < 54 mg/dL com sintomas neuroglicolipênicos. Principal complicação aguda do tratamento com insulina. Glicose IV é o tratamento imediato. Diretrizes: ADA 2024, SBD 2023." },
      { id: "def", title: "Definição", content: "Nível 1: < 70 mg/dL. Nível 2: < 54 mg/dL. Nível 3: necessita assistência. Tríade de Whipple: sintomas + glicemia baixa + resolução com correção." },
      { id: "screening", title: "Rastreamento e Identificação", content: "MEDIR GLICEMIA EM: rebaixamento, convulsão, confusão, sudorese inexplicada, síncope. Alto risco: insulina, sulfonilureias, etilismo, insuficiência hepática/renal/adrenal." },
      { id: "etiology", title: "Etiologia", content: "Diabéticos: excesso de insulina, sulfonilureias, refeição omitida, exercício, IRA. Não diabéticos: etilismo, insuficiência hepática/adrenal, insulinoma, sepse." },
      { id: "clinical", title: "Apresentação Clínica", content: "Adrenérgicos (< 70): tremor, sudorese, palpitação. Neuroglicolipênicos (< 54): confusão, convulsão, coma, déficit focal (simula AVC!)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Glicemia capilar (imediata). Após tratamento: insulina sérica, peptídeo C, cortisol, função hepática/renal." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "AVC, convulsão, intoxicação, síncope, encefalopatia hepática, crise de pânico." },
      { id: "conduct", title: "Conduta Inicial", content: "Consciente: 15-20g carboidrato oral. Inconsciente: G50% 40-60 mL IV OU Glucagon 1 mg IM. Sulfonilureia: SG 10% BIC + Octreotide 50 mcg SC 8/8h + observação 24-72h." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "G50% IV padrão. Glucagon IM se sem acesso. Manutenção: SG 10% BIC. Sulfonilureia: Octreotide + monitorização prolongada." },
      { id: "prescriptions", title: "Prescrições", content: "1. G50% 40-60 mL IV\n2. SG 10% 500 mL BIC\n3. Glicemia capilar 1/1h por 6h\n4. Se sulfonilureia: Octreotide 50 mcg SC 8/8h\n5. Dieta rica em carboidratos quando consciente\n6. Revisar medicações" },
      { id: "followup", title: "Acompanhamento", content: "Identificar causa, ajustar insulina/hipoglicemiantes, educação, glucagon para familiares, investigar insulinoma se recorrente." },
      { id: "complications", title: "Complicações", content: "Lesão neuronal irreversível, arritmia, morte súbita, aspiração, trauma por convulsão/queda." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: sulfonilureia, recorrência, causa não identificada. Alta: causa corrigida, glicemia estável, orientações." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ADA Standards 2024.\n2. SBD Diretrizes 2023.\n3. Cryer PE. Diabetes Care 2023." }
    ]
  },
  {
    id: "fp-hiponatremia", title: "Hiponatremia Grave", categoryId: "metabolic", category: "Metabólico e Endócrino",
    tags: ["hiponatremia", "sódio", "siadh", "salina hipertônica", "desmielinização"],
    sections: [
      { id: "intro", title: "Introdução", content: "Hiponatremia grave (Na+ < 120) com sintomas neurológicos é emergência com risco de herniação. Corrigir com NaCl 3%, mas máximo 8-10 mEq/L em 24h para evitar síndrome de desmielinização osmótica (SDO). Diretrizes: ERBP 2014, Sterns 2015." },
      { id: "def", title: "Definição", content: "Na+ < 135 mEq/L. Leve: 130-134. Moderada: 125-129. Grave: < 125. Aguda (< 48h): risco de edema cerebral. Crônica (> 48h): risco de SDO se corrigida rápido. Classificação por volemia: hipo, eu ou hipervolêmica." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Sintomas neurológicos: cefaleia, náusea, confusão, convulsão, coma, herniação. Causas comuns: tiazídicos, SIADH, polidipsia." },
      { id: "etiology", title: "Etiologia", content: "SIADH (euvolêmica): pós-op, doenças pulmonares/SNC, ISRS. Hipovolêmica: diuréticos, vômitos, insuficiência adrenal. Hipervolêmica: ICC, cirrose, nefrótica." },
      { id: "clinical", title: "Apresentação Clínica", content: "Leve: assintomática. Moderada: náusea, cefaleia. Grave: convulsão, coma. Gravidade depende mais da velocidade de queda que do valor absoluto." },
      { id: "diagnosis", title: "Diagnóstico", content: "Na+ sérico, osmolalidade sérica/urinária, Na+ urinário, avaliação de volemia, TSH, cortisol. SIADH: Osm urinária > 100 + Na urinário > 30 + euvolêmica." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Pseudo-hiponatremia (hiperproteinemia). Hiponatremia hipertônica (hiperglicemia). SIADH vs cerebral salt wasting." },
      { id: "conduct", title: "Conduta Inicial", content: "GRAVE SINTOMÁTICA: NaCl 3% 150 mL IV em 20 min (repetir 1-2x). Meta: elevar 4-6 mEq/L em 6h, máx 8-10 em 24h. Se correção excessiva: DDAVP 1-2 mcg IV + SG 5%. Crônica: restrição hídrica + tratar causa." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "NaCl 3%: 150 mL bolus em emergência. SIADH crônica: restrição hídrica, furosemida + NaCl, tolvaptan (cautela), ureia. Alto risco de SDO: alcoolismo, desnutrição, hipocalemia." },
      { id: "prescriptions", title: "Prescrições", content: "1. NaCl 3% 150 mL IV em 20 min\n2. Na+ sérico a cada 2h\n3. Meta: 4-6 mEq/L em 6h, máx 8-10/24h\n4. DDAVP se correção > 10/24h\n5. Restrição hídrica 800 mL/dia\n6. Corrigir hipocalemia\n7. Investigar causa" },
      { id: "followup", title: "Acompanhamento", content: "Na+ seriado 2-4h nas primeiras 24h. Vigiar SDO (2-6 dias após correção). RM encéfalo se suspeita de SDO. Tratar causa de base." },
      { id: "complications", title: "Complicações", content: "Edema cerebral, herniação, SDO (mielinólise pontina), convulsão, coma, morte." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: sintomática grave. Alta: Na+ estável > 130, assintomática, causa tratada." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Spasovski G. Eur J Endocrinol 2014.\n2. Sterns RH. NEJM 2015.\n3. Verbalis JG. Am J Med 2013." }
    ]
  }
];
