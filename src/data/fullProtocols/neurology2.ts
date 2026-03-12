import type { FullProtocol } from "./types";

export const neuroFullProtocols2: FullProtocol[] = [
  {
    id: "fp-eme",
    title: "Estado de Mal Epiléptico",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["status epilepticus", "convulsão", "epilepsia", "benzodiazepínico", "fenitoína"],
    sections: [
      { id: "intro", title: "Introdução", content: "O estado de mal epiléptico (EME) é uma emergência neurológica definida como crise contínua ≥ 5 min ou crises recorrentes sem recuperação entre elas. Mortalidade de 10-30%. O tratamento escalonado com benzodiazepínicos, seguido de antiepilépticos de 2ª linha e anestésicos em caso de refratariedade, é o padrão.\n\nDiretrizes: AES 2016, NCS 2012, ILAE 2015." },
      { id: "def", title: "Definição", content: "EME convulsivo: crise tônico-clônica contínua ≥ 5 min\nEME não convulsivo: alteração prolongada de consciência com atividade epiléptica ao EEG sem manifestações motoras\nEME refratário: não responde a 2 medicações de 1ª e 2ª linha\nEME super-refratário: persiste ≥ 24h após início de anestésicos IV" },
      { id: "screening", title: "Rastreamento e Identificação", content: "⚠️ CRONOMETRAR a crise!\n• > 5 min = tratar como EME\n• Crises em cluster sem recuperação = EME\n• Rebaixamento prolongado pós-ictal (> 30 min) = considerar EME não convulsivo" },
      { id: "etiology", title: "Etiologia", content: "Adultos: não adesão a antiepilépticos (40%), AVC, infecção SNC, distúrbio metabólico, intoxicação, abstinência, tumor\nCrianças: crise febril prolongada, infecção SNC, distúrbio metabólico\nCausas agudas sintomáticas: pior prognóstico" },
      { id: "clinical", title: "Apresentação Clínica", content: "EME convulsivo: atividade tônico-clônica contínua, cianose, sialorreia, instabilidade autonômica\nEME sutil: movimentos mínimos (mioclonias faciais, nistagmo) após EME prolongado — parece pós-ictal mas é atividade epiléptica\nComplicações: rabdomiólise, IRA, edema cerebral, aspiração, arritmia, lesão neuronal" },
      { id: "diagnosis", title: "Diagnóstico", content: "1. Glicemia capilar (IMEDIATA)\n2. Eletrólitos, gasometria + lactato\n3. Nível sérico de antiepilépticos\n4. CPK, função renal\n5. Toxicológico\n6. TC crânio (após estabilização)\n7. EEG contínuo (essencial para EME não convulsivo e monitorização de tratamento)\n8. PL se suspeita de neuroinfecção" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Crise não epiléptica psicogênica (olhos fechados, sem acidose)\n• Rigidez de descerebração\n• Síndrome neuroléptica maligna\n• Síndrome serotoninérgica\n• Tétano\n• Mioclonias não epilépticas" },
      { id: "conduct", title: "Conduta Inicial", content: "PROTOCOLO ESCALONADO:\n\n0-5 min: ABCDE, O2, glicemia, acesso venoso\n5-20 min (1ª linha): Diazepam 10 mg IV OU Midazolam 10 mg IM OU Lorazepam 4 mg IV\n20-40 min (2ª linha): Fenitoína 20 mg/kg IV (máx 50 mg/min) OU Valproato 40 mg/kg IV OU Levetiracetam 60 mg/kg IV\n> 40 min (3ª linha): IOT + Midazolam BIC 0,1-2 mg/kg/h OU Propofol BIC 2-10 mg/kg/h\n\nEEG contínuo para guiar titulação (meta: surto-supressão)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Manutenção: Fenitoína 100 mg IV 8/8h, Valproato 500 mg 12/12h, ou Levetiracetam 500-1500 mg 12/12h\nEME super-refratário: Cetamina, hipotermia terapêutica, dieta cetogênica, imunossupressão (se autoimune)\nTratar causa de base: infecção, AVC, distúrbio metabólico, intoxicação" },
      { id: "prescriptions", title: "Prescrições", content: "PRESCRIÇÃO — EME:\n\n1. Dieta zero\n2. IOT + VM se refratário\n3. Diazepam 10 mg IV (repetir 1x SN em 5 min)\n4. Fenitoína 20 mg/kg + SF 250 mL IV em 20-30 min (máx 50 mg/min)\n5. Se refratário: Midazolam 0,2 mg/kg bolus → 0,1-2 mg/kg/h BIC\n6. Monitorização: ECG, SpO2, PA, EEG contínuo\n7. Glicemia capilar 4/4h\n8. Eletrólitos, gasometria, CPK seriados\n9. TC crânio\n10. Antiepiléptico de manutenção" },
      { id: "followup", title: "Acompanhamento", content: "• UTI com EEG contínuo 24-48h\n• Desmame gradual de anestésicos (24-48h de controle)\n• RM encéfalo após estabilização\n• Acompanhamento neurológico\n• Ajuste de antiepilépticos" },
      { id: "complications", title: "Complicações", content: "• Lesão neuronal irreversível (após 30 min)\n• Rabdomiólise e IRA\n• Edema cerebral\n• Aspiração pulmonar\n• Arritmias\n• CIVD\n• Morte (10-30%)" },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todo EME (especialmente refratário)\nAlta: controle de crises, causa tratada, antiepiléptico ajustado, EEG sem atividade epiléptica" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus. Epilepsy Curr 2016.\n2. Brophy GM et al. NCS Guidelines for SE. Neurocrit Care 2012.\n3. Trinka E et al. Definition and Classification of SE. Epilepsia 2015.\n4. Kapur J et al. RAMPART Trial. NEJM 2012." }
    ]
  }
];
