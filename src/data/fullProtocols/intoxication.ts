import type { FullProtocol } from "./types";

export const intoxicationFullProtocols: FullProtocol[] = [
  {
    id: "fp-intoxicacao-opioide", title: "Intoxicação por Opioide", categoryId: "intoxication", category: "Intoxicações",
    tags: ["opioide", "naloxona", "fentanil", "morfina", "overdose"],
    sections: [
      { id: "intro", title: "Introdução", content: "A intoxicação por opioides é emergência com risco de depressão respiratória fatal. O antídoto específico é a naloxona (Narcan). A epidemia de opioides sintéticos (fentanil ilícito) aumentou dramaticamente a mortalidade. Mortalidade >50% sem tratamento." },
      { id: "def", title: "Definição", content: "Intoxicação aguda por opioides (morfina, heroína, fentanil, metadona, tramadol, codeína, oxicodona). Tríade clássica: miose puntiforme + depressão respiratória + rebaixamento de consciência. Fentanil: doses ultrapequeñas são letais (2mg)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Avaliar: uso de substâncias (heroína, fentanil, metadona, prescritos), tentativa de suicídio, acesso a medicamentos, body packing. Exame de pupilas: miose puntiforme bilateral é altamente sugestiva." },
      { id: "etiology", title: "Etiologia", content: "Uso recreativo, iatrogenia, tentativa de suicídio, acidentes, body packing." },
      { id: "clinical", title: "Apresentação Clínica", content: "Depressão respiratória → apneia → PCR. Miose puntiforme (exceto meperidina). Edema pulmonar não cardiogênico. Rigidez torácica (fentanil IV — wooden chest). Convulsões (tramadol, meperidina)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico + resposta à naloxona. Screening toxicológico. Gasometria (hipercapnia). ECG (QT longo — metadona). Rx tórax." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "BZD, clonidina, barbitúricos, AVC, hipoglicemia, hipotermia, estado pós-ictal." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ABCDE + ventilar com BVM\n2. Naloxona 0,4-2 mg IV/IM/IN (iniciar 0,04 mg em crônico)\n3. Repetir cada 2-3 min até FR > 12 (máx 10 mg)\n4. Infusão: 2/3 da dose de reversão por hora\n5. IOT se refratário\n6. Observação ≥ 4h (curta duração) ou ≥ 24h (metadona)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "NALOXONA (ANTÍDOTO): 0,4-2mg IV/IM/IN, repetir a cada 2-3min até resposta (máx 10mg). Se não responder a 10mg: questionar diagnóstico. Meia-vida da naloxona (30-90min) < opioides (metadona até 36h) → risco de renarcotização → manter observação prolongada. IOT se não responder ou apneia refratária. Metadona/fentanil: pode necessitar infusão contínua de naloxona 0,4-0,8mg/h." },
      { id: "prescriptions", title: "Prescrições", content: "1. Naloxona 0,4mg IV a cada 2min (titular até FR >12 e Glasgow >13); 2. Se boa resposta: observação 4-6h (12-24h se metadona/fentanil patch); 3. Se recidiva: Naloxona 0,4-0,8mg/h EV contínuo (diluir 4mg em 500mL SF); 4. O2 100% + BVM se apneia; 5. IOT se sem resposta; 6. Monitorização contínua (SpO2, FR, ECG)." },
      { id: "followup", title: "Acompanhamento", content: "Monitorização 4-24h conforme opioide. Gasometria controle. Referência para tratamento de dependência. Prescrever naloxona nasal na alta." },
      { id: "complications", title: "Complicações", content: "PCR, edema pulmonar, pneumonia aspirativa, rabdomiólise posicional, encefalopatia anóxica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: IOT, PCR revertida. Observação: todos por ≥ 4h. Alta: assintomático > 4h (curta duração), orientações." },
      { id: "references", title: "Referências Bibliográficas", content: "Toxicology Handbook (Murray, Daly & Little). Nelson's Textbook of Toxicology. ACMT — Guidelines for Opioid Overdose 2023." }
    ]
  },
  {
    id: "fp-intoxicacao-triciclico", title: "Intoxicação por Antidepressivo Tricíclico", categoryId: "intoxication", category: "Intoxicações",
    tags: ["ADT", "tricíclico", "amitriptilina", "bicarbonato", "QRS"],
    sections: [
      { id: "intro", title: "Introdução", content: "A intoxicação por antidepressivos tricíclicos (amitriptilina, imipramina, nortriptilina) é uma das mais graves por medicamentos, com letalidade alta. Efeitos anticolinérgicos + cardiotoxicidade (bloqueio de canais de sódio). Bicarbonato de sódio é o tratamento-chave." },
      { id: "def", title: "Definição", content: "Dose tóxica: >5mg/kg (toxicidade moderada), >10mg/kg (grave). Mecanismos: bloqueio de canais de Na+ (alargamento QRS), anticolinérgico, bloqueio alfa-1 (hipotensão), anti-histamínico (sedação). O QRS >100ms é marcador de gravidade." },
      { id: "screening", title: "Rastreamento e Identificação", content: "ECG mandatório: QRS > 100 ms, R terminal em aVR > 3 mm, QTc prolongado. Síndrome anticolinérgica: taquicardia, midríase, pele seca." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio (principal), ingestão acidental, interação medicamentosa." },
      { id: "clinical", title: "Apresentação Clínica", content: "Fase anticolinérgica: taquicardia, midríase, boca seca. Cardiovascular: hipotensão, QRS largo, TV/Torsades, assistolia. Neurológica: convulsões (20%), coma." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG seriado (QRS, QTc, R em aVR). Gasometria. Screening toxicológico. Eletrólitos. Glicemia." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Antipsicóticos, anti-histamínicos, síndrome anticolinérgica por outras drogas, bloqueio de ramo prévio." },
      { id: "conduct", title: "Conduta Inicial", content: "1. IOT se GCS ≤ 8\n2. NaHCO3 8,4% 1-2 mEq/kg IV (QRS > 100, hipotensão, arritmia). Meta pH 7,45-7,55\n3. Convulsão: diazepam 10 mg IV (NÃO fenitoína)\n4. Hipotensão: NaHCO3 → cristaloide → noradrenalina\n5. Arritmia: NaHCO3 → lidocaína (NÃO amiodarona/procainamida)\n6. Carvão ativado 1 g/kg se < 2h\n7. Monitorização 12-24h+" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "BICARBONATO DE SÓDIO 8,4% (antídoto para cardiotoxicidade): 1-2 mEq/kg IV bolus se QRS >100ms ou hipotensão. Repetir até QRS <100ms. Manter pH arterial 7,45-7,55. Convulsões: Diazepam 10mg IV (evitar fenitoína — piora bloqueio Na+). Hipotensão: SF 0,9% 1-2L → Noradrenalina se refratária. NÃO usar flumazenil (risco de convulsão). Carvão ativado 1g/kg se <2h da ingestão e via aérea protegida." },
      { id: "prescriptions", title: "Prescrições", content: "1. Bicarbonato de sódio 8,4% — 150mL (150mEq) IV bolus; 2. Manter infusão: NaHCO3 150mL + SG5% 850mL a 250mL/h (alvo pH 7,45-7,55); 3. Diazepam 10mg IV SN para convulsões; 4. SF 0,9% 1-2L se hipotensão; 5. Noradrenalina 0,1-1 mcg/kg/min se choque; 6. Carvão ativado 50g VO/SNG se <2h; 7. ECG contínuo + QRS seriado." },
      { id: "followup", title: "Acompanhamento", content: "ECG seriado até QRS normalizar. UTI se sintomático. Gasometria seriada. Avaliação psiquiátrica obrigatória." },
      { id: "complications", title: "Complicações", content: "PCR (FV/assistolia), convulsões refratárias, rabdomiólise, pneumonia aspirativa, encefalopatia anóxica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: QRS > 100, convulsão, hipotensão, arritmia. Observação 12h se assintomático. Alta: ECG normalizado > 12h + avaliação psiquiátrica." },
      { id: "references", title: "Referências Bibliográficas", content: "AHA/ACS Statement on Tricyclic Antidepressant Poisoning. Body R et al. Emerg Med J 2011. Liebelt EL. Clinical Toxicology 2022." }
    ]
  },
  {
    id: "fp-intoxicacao-betabloqueador", title: "Intoxicação por Betabloqueador", categoryId: "intoxication", category: "Intoxicações",
    tags: ["betabloqueador", "glucagon", "insulina", "bradicardia", "propranolol"],
    sections: [
      { id: "intro", title: "Introdução", content: "A intoxicação por betabloqueadores (propranolol, atenolol, metoprolol, carvedilol) causa bradicardia, hipotensão e pode ser fatal. Propranolol é o mais perigoso (efeito estabilizador de membrana + lipofílico). Glucagon é o antídoto de primeira linha." },
      { id: "def", title: "Definição", content: "Bloqueio beta-adrenérgico excessivo: bradicardia, hipotensão, baixo débito. Propranolol: adiciona bloqueio de canais de Na+ (alargamento QRS) e lipofilia (convulsões, coma). Sotalol: prolonga QT (torsades de pointes)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Bradicardia + hipotensão + hipoglicemia. ECG: bradicardia sinusal, BAV, QRS largo (propranolol), QT longo (sotalol)." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio, erro de dose (idosos), ingestão acidental (crianças)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Bradicardia, hipotensão, choque cardiogênico, broncoespasmo, hipoglicemia, convulsões (propranolol), Torsades (sotalol)." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG seriado, glicemia seriada, gasometria + lactato, ecocardiograma, eletrólitos, screening toxicológico." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "BCC, digoxina, clonidina, BAV de outra etiologia, hipotireoidismo grave." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Glucagon 5-10 mg IV → 2-5 mg/h\n2. Atropina 0,5-1 mg IV (pouco eficaz)\n3. Insulina alta dose: 1 UI/kg → 1-10 UI/kg/h + glicose\n4. Vasopressores: noradrenalina ± adrenalina\n5. NaHCO3 se QRS largo (propranolol)\n6. Emulsão lipídica 20% (refratário)\n7. Marcapasso transcutâneo\n8. Carvão ativado < 1-2h" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "GLUCAGON (antídoto de 1ª linha): 3-5mg IV bolus (pode repetir até 10mg) → infusão 2-5mg/h. Atropina 0,5-1mg IV (geralmente insuficiente isolada). Vasopressores: Noradrenalina ou Adrenalina em altas doses. Insulina em altas doses (HIE): Insulina regular 1 UI/kg bolus + 1-10 UI/kg/h + Glicose 50% para manter glicemia >150. Intralipid 20% (emulsão lipídica): 1,5mL/kg bolus + 0,25mL/kg/min se refratário. Marcapasso transcutâneo se bradicardia refratária." },
      { id: "prescriptions", title: "Prescrições", content: "1. Glucagon 5mg IV bolus → infusão 2-5mg/h; 2. Atropina 1mg IV (pode repetir até 3mg); 3. Noradrenalina 0,1-2 mcg/kg/min; 4. Insulina regular 1 UI/kg IV bolus → 1-10 UI/kg/h; 5. Glicose 50% 50mL IV + dextrose 10% para glicemia >150; 6. Intralipid 20% 1,5mL/kg bolus se refratário; 7. Carvão ativado 50g se <2h." },
      { id: "followup", title: "Acompanhamento", content: "UTI ≥ 24h. ECG seriado. Glicemia seriada. Desmame gradual de vasopressores e insulina." },
      { id: "complications", title: "Complicações", content: "PCR, choque cardiogênico refratário, broncoespasmo grave, hipoglicemia grave, convulsões." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: sintomático, bradicardia, hipotensão. Alta: assintomático > 24h, ECG normalizado." },
      { id: "references", title: "Referências Bibliográficas", content: "AACT/ACMT — Beta-Blocker Poisoning Guidelines. DeWitt CR, Waksman JC. Pharmacology and toxicology of beta-blockers. J Emerg Med 2004." }
    ]
  },
  {
    id: "fp-intoxicacao-bcc", title: "Intoxicação por Bloqueador de Canal de Cálcio", categoryId: "intoxication", category: "Intoxicações",
    tags: ["BCC", "verapamil", "diltiazem", "insulina", "cálcio"],
    sections: [
      { id: "intro", title: "Introdução", content: "A intoxicação por bloqueadores de canais de cálcio (BCC — anlodipino, verapamil, diltiazem, nifedipino) é potencialmente fatal, com vasodilatação, bradicardia (verapamil/diltiazem) e choque cardiogênico. Insulina em altas doses é o tratamento de primeira linha." },
      { id: "def", title: "Definição", content: "BCC dihidropiridínicos (anlodipino, nifedipino): predomínio de vasodilatação e hipotensão, taquicardia reflexa. Não-dihidropiridínicos (verapamil, diltiazem): bradicardia, bloqueio AV, depressão miocárdica. Hiperglicemia é sinal de gravidade (inibição da liberação de insulina)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Hipotensão severa, bradicardia (verapamil/diltiazem), hiperglicemia (marcador de gravidade), ECG: BAV, ritmo juncional." },
      { id: "etiology", title: "Etiologia", content: "Tentativa de suicídio, erro de dose, interação com betabloqueador." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hipotensão refratária, bradicardia, choque cardiogênico, hiperglicemia, edema pulmonar, isquemia mesentérica, acidose com lactato elevado." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG seriado, glicemia (hiperglicemia = gravidade), gasometria + lactato, ecocardiograma, Ca²⁺ ionizado." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Betabloqueador, digoxina, IAM com choque, BAV de outra etiologia." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Insulina alta dose 1 UI/kg → 1-10 UI/kg/h + glicose (1ª LINHA)\n2. CaCl2 10% 20 mL IV em 10 min → repetir\n3. Vasopressores: noradrenalina ± adrenalina\n4. Atropina 1 mg IV\n5. Glucagon 5 mg IV\n6. Emulsão lipídica 20% (refratário)\n7. Marcapasso, ECMO em centro terciário\n8. Carvão + irrigação intestinal (lib. prolongada)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "INSULINA EM ALTAS DOSES (HIE) — tratamento de 1ª linha: Insulina regular 1 UI/kg IV bolus + 1-10 UI/kg/h (titular por PA). Manter glicemia >150 com Glicose 50%. Cálcio: CaCl₂ 10% 20mL IV em 10min (pode repetir 3x) OU Gluconato Ca 30mL. Vasopressores: Noradrenalina 0,1-2 mcg/kg/min. Glucagon: menos eficaz que para BB, mas tentar. Intralipid 20% se refratário. Atropina para bradicardia (geralmente ineficaz). Marcapasso se BAV completo." },
      { id: "prescriptions", title: "Prescrições", content: "1. Insulina regular 1 UI/kg IV bolus → 1-10 UI/kg/h; 2. Glicose 50% 50mL IV + SG10% manutenção (glicemia >150); 3. Cloreto de cálcio 10% 20mL IV em 10min (repetir SN); 4. Noradrenalina 0,1-2 mcg/kg/min; 5. SF 0,9% 1-2L; 6. Glucagon 5mg IV bolus; 7. Intralipid 20% 1,5mL/kg se refratário; 8. Carvão ativado 50g se <2h." },
      { id: "followup", title: "Acompanhamento", content: "UTI ≥ 24-48h. ECG e glicemia seriados. Desmame gradual. Monitorizar Ca²⁺ e K+." },
      { id: "complications", title: "Complicações", content: "PCR, choque refratário, isquemia mesentérica, falência multiorgânica, hipoglicemia iatrogênica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos os sintomáticos. Alta: assintomático > 24h (lib. imediata), > 48h (lib. prolongada)." },
      { id: "references", title: "Referências Bibliográficas", content: "AACT Position Statement — Calcium Channel Blocker Poisoning. St-Onge M et al. Expert Consensus on HIE. J Med Toxicol 2017." }
    ]
  },
  {
    id: "fp-intoxicacao-cocaina", title: "Intoxicação por Cocaína", categoryId: "intoxication", category: "Intoxicações",
    tags: ["cocaína", "crack", "simpatomimético", "BZD", "SCA"],
    sections: [
      { id: "intro", title: "Introdução", content: "A intoxicação por cocaína é emergência frequente com manifestações cardiovasculares (SCA, arritmias), neurológicas (convulsão, AVC) e psiquiátricas (agitação). Benzodiazepínicos são a base do tratamento. NUNCA usar betabloqueadores puros." },
      { id: "def", title: "Definição", content: "Cocaína: bloqueio de recaptação de noradrenalina, dopamina e serotonina + bloqueio de canais de Na+. Efeitos simpaticomiméticos: taquicardia, hipertensão, vasoconstrição coronariana, hipertermia. Crack: forma fumada, início de ação em segundos, pico e crash rápidos." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Agitação, midríase, taquicardia, HAS, hipertermia, dor torácica, déficit neurológico, convulsões." },
      { id: "etiology", title: "Etiologia", content: "Uso recreativo, body packing, adulteração com levamisol." },
      { id: "clinical", title: "Apresentação Clínica", content: "SNC: agitação, psicose, convulsões, AVC. CV: SCA, dissecção, arritmias. Metabólico: hipertermia, rabdomiólise, IRA. Pulmonar: crack lung." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG, troponina, CPK + mioglobina, função renal, TC crânio SN, Rx tórax, screening toxicológico." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Anfetaminas, MDMA, feocromocitoma, crise tireotóxica, síndrome serotoninérgica, SNM." },
      { id: "conduct", title: "Conduta Inicial", content: "1. BZD (1ª linha para tudo): diazepam 10-20 mg IV\n2. NÃO betabloqueador puro\n3. SCA: nitroglicerina + BZD + AAS + heparina (labetalol pode)\n4. Hipertermia: resfriamento + BZD\n5. Rabdomiólise: hidratação (DU > 2 mL/kg/h)\n6. QRS largo: NaHCO3\n7. Body packing: irrigação intestinal" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "BENZODIAZEPÍNICOS (base do tratamento): Diazepam 10-20mg IV ou Midazolam 5-10mg IM para agitação e convulsão. SCA por cocaína: Diazepam + Nitroglicerina sublingual 0,4mg + AAS 300mg. NUNCA usar betabloqueador puro (propranolol, metoprolol) → vasoconstrição coronariana paradoxal. Se precisar: Labetalol (alfa+beta) é aceitável. Hipertermia: resfriamento ativo (compressas, soro gelado). Convulsão: Diazepam 10mg IV. Arritmias com QRS largo: NaHCO3 1-2mEq/kg. Rabdomiólise: hidratação vigorosa (200-300mL/h SF)." },
      { id: "prescriptions", title: "Prescrições", content: "1. Diazepam 10mg IV (repetir até sedação adequada); 2. Nitroglicerina 0,4mg SL se dor torácica; 3. AAS 300mg VO se suspeita de SCA; 4. SF 0,9% 200-300mL/h (hidratação vigorosa); 5. NaHCO3 8,4% 150mL IV se QRS >120ms; 6. Resfriamento ativo se T >39°C; 7. Solicitar: troponina, ECG, CPK, Cr, eletrólitos, urina I." },
      { id: "followup", title: "Acompanhamento", content: "Monitorização 6-12h. ECG seriado se dor torácica. CPK seriada se rabdomiólise. Referência para tratamento de dependência." },
      { id: "complications", title: "Complicações", content: "IAM, AVC, dissecção aórtica, rabdomiólise com IRA, convulsões, hipertermia maligna, PCR." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: SCA, AVC, arritmia, hipertermia. Observação: todos por ≥ 6h. Alta: assintomático, ECG normal." },
      { id: "references", title: "Referências Bibliográficas", content: "AHA Scientific Statement — Cocaine and the Heart 2010. Richards JR et al. Treatment of Cocaine Cardiovascular Toxicity. Clin Toxicol 2016." }
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
