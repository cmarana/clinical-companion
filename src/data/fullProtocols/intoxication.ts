import type { FullProtocol } from "./types";

export const intoxicationFullProtocols: FullProtocol[] = [
  {
    id: "fp-intoxicacao-opioide", title: "Intoxicação por Opioide", categoryId: "intoxication", category: "Intoxicações",
    tags: ["opioide", "naloxona", "fentanil", "morfina", "overdose"],
    sections: [
      { id: "intro", title: "Introdução", content: "Opioides são a principal causa de morte por overdose no mundo. Tríade: miose + depressão respiratória + rebaixamento. Antídoto: naloxona." },
      { id: "def", title: "Definição", content: "Intoxicação por agonistas mu opioides. Naturais: morfina, codeína. Semissintéticos: heroína, oxicodona. Sintéticos: fentanil (100x mais potente), tramadol, metadona." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Tríade: miose puntiforme, FR < 12, rebaixamento. Hipotensão, bradicardia, hipotermia." },
      { id: "etiology", title: "Etiologia", content: "Uso recreativo, iatrogenia, tentativa de suicídio, acidentes, body packing." },
      { id: "clinical", title: "Apresentação Clínica", content: "Depressão respiratória → apneia → PCR. Miose puntiforme (exceto meperidina). Edema pulmonar não cardiogênico. Rigidez torácica (fentanil IV — wooden chest). Convulsões (tramadol, meperidina)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico + resposta à naloxona. Screening toxicológico. Gasometria (hipercapnia). ECG (QT longo — metadona). Rx tórax." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "BZD, clonidina, barbitúricos, AVC, hipoglicemia, hipotermia, estado pós-ictal." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ABCDE + ventilar com BVM\n2. Naloxona 0,4-2 mg IV/IM/IN (iniciar 0,04 mg em crônico)\n3. Repetir cada 2-3 min até FR > 12 (máx 10 mg)\n4. Infusão: 2/3 da dose de reversão por hora\n5. IOT se refratário\n6. Observação ≥ 4h (curta duração) ou ≥ 24h (metadona)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Naloxona IV/IM/IN: 0,4-2 mg, repetir a cada 2-3 min. Intranasal 4 mg. Infusão 0,4-0,8 mg/h. VM SN. Vasopressores se hipotensão refratária." },
      { id: "prescriptions", title: "Prescrições", content: "1. O2/BVM\n2. Naloxona 0,4 mg IV (titular)\n3. Naloxona infusão SN\n4. Monitorização contínua\n5. Gasometria\n6. ECG\n7. Screening toxicológico\n8. Observação mínima 4h\n9. Avaliação psiquiátrica SN" },
      { id: "followup", title: "Acompanhamento", content: "Monitorização 4-24h conforme opioide. Gasometria controle. Referência para tratamento de dependência. Prescrever naloxona nasal na alta." },
      { id: "complications", title: "Complicações", content: "PCR, edema pulmonar, pneumonia aspirativa, rabdomiólise posicional, encefalopatia anóxica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: IOT, PCR revertida. Observação: todos por ≥ 4h. Alta: assintomático > 4h (curta duração), orientações." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Boyer EW. NEJM 2012.\n2. WHO Opioid Overdose Guidelines 2023.\n3. ACMT Guidelines 2020." }
    ]
  },
  {
    id: "fp-intoxicacao-triciclico", title: "Intoxicação por Antidepressivo Tricíclico", categoryId: "intoxication", category: "Intoxicações",
    tags: ["ADT", "tricíclico", "amitriptilina", "bicarbonato", "QRS"],
    sections: [
      { id: "intro", title: "Introdução", content: "ADTs são uma das intoxicações mais letais. Bloqueiam canais de Na (cardiotoxicidade), receptores muscarínicos, alfa-1 e recaptação de NE/5-HT. QRS > 100 ms = risco de convulsão; QRS > 160 ms = arritmia ventricular." },
      { id: "def", title: "Definição", content: "Agentes: amitriptilina, nortriptilina, imipramina, clomipramina. Dose tóxica > 10 mg/kg. Potencialmente letal > 20-30 mg/kg." },
      { id: "screening", title: "Rastreamento e Identificação", content: "ECG mandatório: QRS > 100 ms, R terminal em aVR > 3 mm, QTc prolongado. Síndrome anticolinérgica: taquicardia, midríase, pele seca." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio (principal), ingestão acidental, interação medicamentosa." },
      { id: "clinical", title: "Apresentação Clínica", content: "Fase anticolinérgica: taquicardia, midríase, boca seca. Cardiovascular: hipotensão, QRS largo, TV/Torsades, assistolia. Neurológica: convulsões (20%), coma." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG seriado (QRS, QTc, R em aVR). Gasometria. Screening toxicológico. Eletrólitos. Glicemia." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Antipsicóticos, anti-histamínicos, síndrome anticolinérgica por outras drogas, bloqueio de ramo prévio." },
      { id: "conduct", title: "Conduta Inicial", content: "1. IOT se GCS ≤ 8\n2. NaHCO3 8,4% 1-2 mEq/kg IV (QRS > 100, hipotensão, arritmia). Meta pH 7,45-7,55\n3. Convulsão: diazepam 10 mg IV (NÃO fenitoína)\n4. Hipotensão: NaHCO3 → cristaloide → noradrenalina\n5. Arritmia: NaHCO3 → lidocaína (NÃO amiodarona/procainamida)\n6. Carvão ativado 1 g/kg se < 2h\n7. Monitorização 12-24h+" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "NaHCO3 8,4% (alcalinização). Diazepam (convulsão). Noradrenalina (hipotensão). Lidocaína (arritmia). Emulsão lipídica 20% 1,5 mL/kg (refratário)." },
      { id: "prescriptions", title: "Prescrições", content: "1. NaHCO3 100 mL IV bolus\n2. NaHCO3 150 mEq + SG5% 1L a 150 mL/h\n3. Carvão ativado 50g VO\n4. Diazepam 10 mg IV SN\n5. Gasometria seriada\n6. ECG seriado 2/2h\n7. SVD\n8. Avaliação psiquiátrica" },
      { id: "followup", title: "Acompanhamento", content: "ECG seriado até QRS normalizar. UTI se sintomático. Gasometria seriada. Avaliação psiquiátrica obrigatória." },
      { id: "complications", title: "Complicações", content: "PCR (FV/assistolia), convulsões refratárias, rabdomiólise, pneumonia aspirativa, encefalopatia anóxica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: QRS > 100, convulsão, hipotensão, arritmia. Observação 12h se assintomático. Alta: ECG normalizado > 12h + avaliação psiquiátrica." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Liebelt EL. Emerg Med Clin North Am 2017.\n2. Bradberry SM. Toxicol Rev 2005.\n3. Goldfrank's 11th ed. 2019." }
    ]
  },
  {
    id: "fp-intoxicacao-betabloqueador", title: "Intoxicação por Betabloqueador", categoryId: "intoxication", category: "Intoxicações",
    tags: ["betabloqueador", "glucagon", "insulina", "bradicardia", "propranolol"],
    sections: [
      { id: "intro", title: "Introdução", content: "Potencialmente letal: bradicardia, hipotensão e choque cardiogênico. Propranolol é o mais perigoso (bloqueio de Na adicional). Antídotos: glucagon (1ª linha), insulina em alta dose." },
      { id: "def", title: "Definição", content: "Propranolol: QRS largo, convulsões. Sotalol: QT longo → Torsades. Atenolol, metoprolol, bisoprolol, carvedilol." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Bradicardia + hipotensão + hipoglicemia. ECG: bradicardia sinusal, BAV, QRS largo (propranolol), QT longo (sotalol)." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio, erro de dose (idosos), ingestão acidental (crianças)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Bradicardia, hipotensão, choque cardiogênico, broncoespasmo, hipoglicemia, convulsões (propranolol), Torsades (sotalol)." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG seriado, glicemia seriada, gasometria + lactato, ecocardiograma, eletrólitos, screening toxicológico." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "BCC, digoxina, clonidina, BAV de outra etiologia, hipotireoidismo grave." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Glucagon 5-10 mg IV → 2-5 mg/h\n2. Atropina 0,5-1 mg IV (pouco eficaz)\n3. Insulina alta dose: 1 UI/kg → 1-10 UI/kg/h + glicose\n4. Vasopressores: noradrenalina ± adrenalina\n5. NaHCO3 se QRS largo (propranolol)\n6. Emulsão lipídica 20% (refratário)\n7. Marcapasso transcutâneo\n8. Carvão ativado < 1-2h" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Glucagon: 5-10 mg IV → infusão 2-5 mg/h. Insulina: 1 UI/kg → 1-10 UI/kg/h + glicose. NaHCO3 (QRS largo). Emulsão lipídica 20%. Marcapasso SN." },
      { id: "prescriptions", title: "Prescrições", content: "1. Glucagon 5 mg IV → infusão\n2. Atropina 1 mg IV SN\n3. Carvão ativado 50g\n4. Glicemia 1/1h\n5. SG 50% SN\n6. Noradrenalina SN\n7. ECG seriado\n8. Gasometria seriada" },
      { id: "followup", title: "Acompanhamento", content: "UTI ≥ 24h. ECG seriado. Glicemia seriada. Desmame gradual de vasopressores e insulina." },
      { id: "complications", title: "Complicações", content: "PCR, choque cardiogênico refratário, broncoespasmo grave, hipoglicemia grave, convulsões." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: sintomático, bradicardia, hipotensão. Alta: assintomático > 24h, ECG normalizado." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Graudins A. Crit Care Med 2016.\n2. Engebretsen KM. Clin Toxicol 2011.\n3. Goldfrank's 11th ed. 2019." }
    ]
  },
  {
    id: "fp-intoxicacao-bcc", title: "Intoxicação por Bloqueador de Canal de Cálcio", categoryId: "intoxication", category: "Intoxicações",
    tags: ["BCC", "verapamil", "diltiazem", "insulina", "cálcio"],
    sections: [
      { id: "intro", title: "Introdução", content: "BCC é a principal causa de morte por intoxicação cardiovascular. Verapamil/diltiazem: bradicardia + hipotensão. Nifedipino/anlodipino: hipotensão + taquicardia reflexa. Antídoto: insulina em alta dose." },
      { id: "def", title: "Definição", content: "Dihidropiridínicos (vasodilatadores): nifedipino, anlodipino. Não dihidropiridínicos (cardiodepressores): verapamil, diltiazem. Liberação prolongada: efeito retardado, monitorizar ≥ 24h." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Hipotensão severa, bradicardia (verapamil/diltiazem), hiperglicemia (marcador de gravidade), ECG: BAV, ritmo juncional." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio, erro de dose, interação com betabloqueador." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hipotensão refratária, bradicardia, choque cardiogênico, hiperglicemia, edema pulmonar, isquemia mesentérica, acidose com lactato elevado." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG seriado, glicemia (hiperglicemia = gravidade), gasometria + lactato, ecocardiograma, Ca²⁺ ionizado." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Betabloqueador, digoxina, IAM com choque, BAV de outra etiologia." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Insulina alta dose 1 UI/kg → 1-10 UI/kg/h + glicose (1ª LINHA)\n2. CaCl2 10% 20 mL IV em 10 min → repetir\n3. Vasopressores: noradrenalina ± adrenalina\n4. Atropina 1 mg IV\n5. Glucagon 5 mg IV\n6. Emulsão lipídica 20% (refratário)\n7. Marcapasso, ECMO em centro terciário\n8. Carvão + irrigação intestinal (lib. prolongada)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Insulina: 1 UI/kg → 1-10 UI/kg/h + glicose (manter 150-250). CaCl2 10% 20 mL IV. Vasopressores. Glucagon. Emulsão lipídica. Marcapasso." },
      { id: "prescriptions", title: "Prescrições", content: "1. Insulina regular 1 UI/kg IV bolus → infusão\n2. SG 50% SN (glicemia 150-250)\n3. CaCl2 10% 20 mL IV\n4. Noradrenalina\n5. Glicemia 30/30 min\n6. K+ 2/2h\n7. ECG seriado\n8. Gasometria seriada" },
      { id: "followup", title: "Acompanhamento", content: "UTI ≥ 24-48h. ECG e glicemia seriados. Desmame gradual. Monitorizar Ca²⁺ e K+." },
      { id: "complications", title: "Complicações", content: "PCR, choque refratário, isquemia mesentérica, falência multiorgânica, hipoglicemia iatrogênica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos os sintomáticos. Alta: assintomático > 24h (lib. imediata), > 48h (lib. prolongada)." },
      { id: "references", title: "Referências Bibliográficas", content: "1. St-Onge M. Crit Care Med 2017.\n2. Levine M. Ann Emerg Med 2013.\n3. Goldfrank's 11th ed. 2019." }
    ]
  },
  {
    id: "fp-intoxicacao-cocaina", title: "Intoxicação por Cocaína", categoryId: "intoxication", category: "Intoxicações",
    tags: ["cocaína", "crack", "simpatomimético", "BZD", "SCA"],
    sections: [
      { id: "intro", title: "Introdução", content: "Cocaína bloqueia recaptação de catecolaminas → hiperatividade simpática. Complicações: SCA, AVC, arritmias, hipertermia, rabdomiólise. NÃO usar betabloqueador puro." },
      { id: "def", title: "Definição", content: "Cloridrato (inalada/IV), crack (fumado). Bloqueio da recaptação de NE/DA/5-HT + bloqueio de Na (cardiotoxicidade) + vasoespasmo coronariano." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Agitação, midríase, taquicardia, HAS, hipertermia, dor torácica, déficit neurológico, convulsões." },
      { id: "etiology", title: "Etiologia", content: "Uso recreativo, body packing, adulteração com levamisol." },
      { id: "clinical", title: "Apresentação Clínica", content: "SNC: agitação, psicose, convulsões, AVC. CV: SCA, dissecção, arritmias. Metabólico: hipertermia, rabdomiólise, IRA. Pulmonar: crack lung." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG, troponina, CPK + mioglobina, função renal, TC crânio SN, Rx tórax, screening toxicológico." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Anfetaminas, MDMA, feocromocitoma, crise tireotóxica, síndrome serotoninérgica, SNM." },
      { id: "conduct", title: "Conduta Inicial", content: "1. BZD (1ª linha para tudo): diazepam 10-20 mg IV\n2. NÃO betabloqueador puro\n3. SCA: nitroglicerina + BZD + AAS + heparina (labetalol pode)\n4. Hipertermia: resfriamento + BZD\n5. Rabdomiólise: hidratação (DU > 2 mL/kg/h)\n6. QRS largo: NaHCO3\n7. Body packing: irrigação intestinal" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "BZD: pilar do tratamento. SCA: nitroglicerina + AAS + heparina. HAS refratária: fentolamina/nitroprussiato. Rabdomiólise: SF 1-2 L/h." },
      { id: "prescriptions", title: "Prescrições", content: "1. Diazepam 10 mg IV SN\n2. Nitroglicerina SN\n3. SF 1000 mL IV\n4. ECG + troponina\n5. CPK, função renal\n6. Resfriamento se T > 39°C\n7. NÃO BB puro\n8. Avaliação psiquiátrica" },
      { id: "followup", title: "Acompanhamento", content: "Monitorização 6-12h. ECG seriado se dor torácica. CPK seriada se rabdomiólise. Referência para tratamento de dependência." },
      { id: "complications", title: "Complicações", content: "IAM, AVC, dissecção aórtica, rabdomiólise com IRA, convulsões, hipertermia maligna, PCR." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: SCA, AVC, arritmia, hipertermia. Observação: todos por ≥ 6h. Alta: assintomático, ECG normal." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Zimmerman JL. Crit Care Clin 2012.\n2. AHA Circulation 2008.\n3. Goldfrank's 11th ed. 2019." }
    ]
  },
  {
    id: "fp-intoxicacao-organofosforado", title: "Intoxicação por Organofosforado", categoryId: "intoxication", category: "Intoxicações",
    tags: ["organofosforado", "atropina", "pralidoxima", "colinérgica", "pesticida"],
    sections: [
      { id: "intro", title: "Introdução", content: "OF inibem irreversivelmente a acetilcolinesterase. Principal causa de morte por pesticida. Antídotos: atropina (muscarínico) + pralidoxima (reativa enzima)." },
      { id: "def", title: "Definição", content: "Agentes: malathion, parathion, chlorpyrifos. Gases nervosos: sarin, soman. Inibição irreversível da AChE → acúmulo de ACh. Aging: após 24-48h ligação irreversível." },
      { id: "screening", title: "Rastreamento e Identificação", content: "DUMBELS: Diarreia, Urination, Miose, Broncoespasmo/Broncorreia, Emesis, Lacrimejamento, Salivação/Sudorese. + Bradicardia, fasciculações, fraqueza." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio (principal no Brasil rural), exposição ocupacional, acidental, terrorismo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Muscarínico: miose, broncorreia, broncoespasmo, bradicardia, salivação. Nicotínico: fasciculações, fraqueza, paralisia. SNC: confusão, convulsões, coma. IR por broncorreia + paralisia = principal causa de óbito. Síndrome intermediária (24-96h)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico + história de exposição. Colinesterase sérica < 50%. Gasometria. ECG. Rx tórax." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Carbamato (reversível), cogumelos muscarínicos, miastenia gravis." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Descontaminação (roupas + lavagem) + EPIs\n2. Atropina 2-4 mg IV cada 5-10 min até secar secreções (pode > 100 mg/dia)\n3. Pralidoxima 1-2g IV → 500 mg/h (< 24-48h)\n4. BZD convulsões\n5. IOT + VM SN\n6. NÃO succinilcolina\n7. Carvão ativado < 1h" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Atropina: titular até secar secreções (NÃO FC ou midríase como parâmetro). Pralidoxima: 1-2g IV → 500 mg/h. BZD. VM." },
      { id: "prescriptions", title: "Prescrições", content: "1. Descontaminação\n2. Atropina 2 mg IV cada 5 min\n3. Pralidoxima 1g IV → 500 mg/h\n4. Diazepam 10 mg IV SN\n5. O2/IOT SN\n6. Colinesterase\n7. Gasometria seriada\n8. UTI ≥ 48-72h" },
      { id: "followup", title: "Acompanhamento", content: "UTI ≥ 48-72h (síndrome intermediária). Colinesterase seriada. Suporte ventilatório prolongado SN. Neuropatia tardia (OPIDN)." },
      { id: "complications", title: "Complicações", content: "Insuficiência respiratória, PCR, síndrome intermediária, neuropatia tardia, pneumonia aspirativa." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos os sintomáticos. Observação mínima 48-72h. Alta: colinesterase em recuperação, assintomático." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Eddleston M. Lancet 2008.\n2. WHO/IPCS Guidelines 2020.\n3. Goldfrank's 11th ed. 2019." }
    ]
  }
];
