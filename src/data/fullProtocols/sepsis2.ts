import type { FullProtocol } from "./types";

export const sepsisFullProtocols2: FullProtocol[] = [
  {
    id: "fp-choque-hemorragico", title: "Choque Hemorrágico", categoryId: "sepsis", category: "Sepse e Choque",
    tags: ["choque", "hemorrágico", "transfusão", "atls", "hemorragia"],
    sections: [
      { id: "intro", title: "Introdução", content: "O choque hemorrágico é a causa mais comum de morte evitável no trauma. O manejo atual prioriza transfusão precoce 1:1:1, hipotensão permissiva e ácido tranexâmico nas primeiras 3h. Diretrizes: ATLS 10th ed, EAST, AMIB." },
      { id: "def", title: "Definição", content: "Hipoperfusão tecidual por perda aguda de sangue. Classes ATLS: I (<15%), II (15-30%), III (30-40%), IV (>40%). Índice de Choque (FC/PAS) > 0,9 = choque." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Sinais precoces: taquicardia, ansiedade, palidez, TEC > 2s. Tardios: hipotensão (perda > 30%), confusão, anúria." },
      { id: "etiology", title: "Etiologia", content: "Traumáticas: hemotórax, hemorragia abdominal, fratura de pelve/fêmur. Não traumáticas: HDA, ruptura de aneurisma, HPP, pós-operatório." },
      { id: "clinical", title: "Apresentação Clínica", content: "Classe I: assintomático. II: taquicardia. III: taquicardia + hipotensão + confusão. IV: bradicardia pré-terminal, coma, anúria." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico + Índice de Choque + lactato + hemograma seriado + gasometria + coagulograma + FAST/eFAST + tipagem sanguínea." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Outros choques: séptico, cardiogênico, obstrutivo (TEP, tamponamento, pneumotórax hipertensivo), neurogênico, anafilático." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Compressão direta de sangramento\n2. 2 acessos calibrosos\n3. Cristaloide aquecido 1-2L\n4. Ácido tranexâmico 1g IV em 10 min (< 3h)\n5. Protocolo de transfusão maciça se classe III-IV (1:1:1)\n6. Hipotensão permissiva (PAS 80-90 exceto TCE)\n7. Cinta pélvica se fratura de pelve\n8. Cirurgia / embolização se sangramento incontrolável" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Transfusão: CH:PFC:PLQ 1:1:1. TXA 1g IV em 10 min + 1g em 8h. Cálcio: Gluconato 10% 10 mL a cada 4 CH. Manter Hb > 7, fibrinogênio > 150, PLQ > 50.000. Damage control surgery se tríade letal." },
      { id: "prescriptions", title: "Prescrições", content: "1. RL 1000 mL IV aquecido\n2. TXA 1g IV\n3. Tipagem + 6 CH + PFC + PLQ\n4. Noradrenalina SN\n5. Monitorização contínua\n6. Gasometria + lactato seriados\n7. Coagulograma seriado" },
      { id: "followup", title: "Acompanhamento", content: "UTI, hemograma seriado, lactato clearance, coagulograma, vigiar coagulopatia de consumo." },
      { id: "complications", title: "Complicações", content: "CIVD, hipotermia, acidose, SDRA, IRA, falência de múltiplos órgãos, morte." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: classe III-IV, transfusão maciça, pós-operatório. Alta: estável, Hb estável, sem sangramento ativo." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. ACS 2018.\n2. CRASH-2 Trial. Lancet 2010.\n3. Holcomb JB et al. PROPPR Trial. JAMA 2015." }
    ]
  },
  {
    id: "fp-choque-anafilatico", title: "Choque Anafilático", categoryId: "sepsis", category: "Sepse e Choque",
    tags: ["anafilaxia", "adrenalina", "alergia", "choque", "angioedema"],
    sections: [
      { id: "intro", title: "Introdução", content: "A anafilaxia é uma reação sistêmica grave, potencialmente fatal. ADRENALINA IM é o tratamento de primeira linha — atraso na administração é o principal fator de óbito. Diretrizes: WAO 2020, EAACI 2021, ASBAI 2022." },
      { id: "def", title: "Definição", content: "Reação de hipersensibilidade sistêmica grave com envolvimento de ≥ 2 sistemas (pele, respiratório, cardiovascular, gastrointestinal) após exposição a alérgeno." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Alérgenos comuns: medicamentos, alimentos, insetos, látex. Sinais de gravidade: estridor, sibilância, hipotensão, síncope, edema de glote." },
      { id: "etiology", title: "Etiologia", content: "IgE-mediada: degranulação de mastócitos → histamina, leucotrienos → vasodilatação, broncoespasmo. Anafilactoide: ativação direta (contraste, opioides)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Pele (90%): urticária, angioedema. Respiratório (70%): dispneia, sibilância, estridor. Cardiovascular (45%): hipotensão, choque, PCR. GI: náusea, vômito, dor abdominal. Reação bifásica em até 20% (4-12h)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico. Triptase sérica (colher em 1-2h). ECG, gasometria após estabilização." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Angioedema hereditário, asma grave, síncope vasovagal, crise de pânico, choque séptico, mastocitose." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ADRENALINA 0,3-0,5 mg IM (coxa) — repetir 5-15 min\n2. Decúbito + MMII elevados\n3. O2 alto fluxo\n4. SF 1-2L IV rápido\n5. Salbutamol nebulização 5 mg\n6. Difenidramina 50 mg IV + Ranitidina 50 mg IV\n7. Metilprednisolona 125 mg IV\n8. Se refratário: Adrenalina IV BIC" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Adrenalina IM: ÚNICO tratamento de 1ª linha. Anti-histamínicos e corticoides são adjuvantes. Glucagon se em uso de BB. IOT precoce se edema de via aérea." },
      { id: "prescriptions", title: "Prescrições", content: "1. Adrenalina 0,5 mL IM (1:1000)\n2. SF 1000 mL IV rápido\n3. O2 15 L/min\n4. Difenidramina 50 mg IV\n5. Ranitidina 50 mg IV\n6. Metilprednisolona 125 mg IV\n7. Salbutamol 5 mg nebulização\n8. Observação 6-12h\n9. Alta com auto-injetor de adrenalina" },
      { id: "followup", title: "Acompanhamento", content: "Observação 6-12h. Auto-injetor de adrenalina. Encaminhar alergista. Pulseira de alerta." },
      { id: "complications", title: "Complicações", content: "Reação bifásica, PCR, edema de glote com asfixia, broncoespasmo refratário." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: choque refratário, IOT. Observação 6-12h: todos. Alta: estável após observação + auto-injetor." },
      { id: "references", title: "Referências Bibliográficas", content: "1. WAO Anaphylaxis Guidance 2020.\n2. Simons FER. JACI 2015.\n3. ASBAI — Rev Bras Alergia 2022.\n4. EAACI Anaphylaxis Guidelines 2021." }
    ]
  },
  {
    id: "fp-hda", title: "Hemorragia Digestiva Alta", categoryId: "sepsis", category: "Sepse e Choque",
    tags: ["hda", "hemorragia", "digestiva", "endoscopia", "varizes", "úlcera"],
    sections: [
      { id: "intro", title: "Introdução", content: "HDA: sangramento acima do ângulo de Treitz. Mortalidade: 5-10% (não varicosa) e até 20-30% (varicosa). Ressuscitação + EDA precoce são os pilares. Diretrizes: ACG 2021, Baveno VII 2022." },
      { id: "def", title: "Definição", content: "Hematêmese (sangue vivo ou borra de café), melena (fezes escuras fétidas), ou hematoquezia (HDA maciça). Varicosa vs não varicosa." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Glasgow-Blatchford Score estratifica risco. Sinais de gravidade: instabilidade, hematêmese volumosa, Hb < 8, uso de anticoagulantes." },
      { id: "etiology", title: "Etiologia", content: "Não varicosa (80%): úlcera péptica, erosões, Mallory-Weiss, neoplasia, Dieulafoy. Varicosa (20%): varizes esofágicas, gástricas, gastropatia hipertensiva." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hematêmese, melena, sinais de choque. Sinais de hepatopatia (icterícia, ascite, circulação colateral) sugerem causa varicosa." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemograma seriado, coagulograma, tipagem, função renal, EDA em 12-24h. Classificação de Forrest para úlceras." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "HDA vs HDB, epistaxe deglutida, hemoptise, falsa melena (bismuto, ferro)." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Ressuscitação: 2 acessos + SF + transfusão (Hb alvo 7-8)\n2. IBP: Omeprazol 80 mg IV bolus → 8 mg/h BIC\n3. Se cirrose: Terlipressina 2 mg IV + Ceftriaxona 1g/dia\n4. EDA em 12-24h\n5. Eritromicina 250 mg IV pré-EDA" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Endoscópico: injeção + clipe (úlcera), ligadura elástica (varizes). Se incontrolável: balão de Sengstaken, TIPS, embolização, cirurgia. Transfusão restritiva em varicosa." },
      { id: "prescriptions", title: "Prescrições", content: "1. Dieta zero\n2. SF IV rápido\n3. Omeprazol 80 mg IV → 8 mg/h BIC\n4. Tipagem + 4 CH\n5. Se cirrose: Terlipressina + Ceftriaxona\n6. EDA em 12-24h\n7. Monitorização contínua" },
      { id: "followup", title: "Acompanhamento", content: "IBP 8 semanas, erradicar H. pylori, suspender AINE, BB + ligadura se varizes, EDA controle." },
      { id: "complications", title: "Complicações", content: "Ressangramento, aspiração, perfuração (EDA), falência hepática (cirrose), morte." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: instabilidade, HDA varicosa. Alta precoce: GBS 0, estável, tolerando dieta." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Laine L. ACG Guideline UGI Bleeding 2021.\n2. de Franchis R. Baveno VII. J Hepatol 2022.\n3. SOBED/FBG 2022." }
    ]
  }
];
