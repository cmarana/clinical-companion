import type { FullProtocol } from "./types";

export const emergencyFullProtocols2: FullProtocol[] = [
  {
    id: "fp-pneumotorax-hipertensivo", title: "Pneumotórax Hipertensivo", categoryId: "emergency", category: "Emergência e Ressuscitação",
    tags: ["pneumotórax", "hipertensivo", "descompressão", "dreno", "tórax"],
    sections: [
      { id: "intro", title: "Introdução", content: "O pneumotórax hipertensivo é uma emergência com risco imediato de morte. Ar acumula no espaço pleural sob pressão positiva, colapsando o pulmão ipsilateral e desviando o mediastino. O diagnóstico é CLÍNICO e o tratamento é IMEDIATO (descompressão com agulha). NÃO aguardar Rx." },
      { id: "def", title: "Definição", content: "Acúmulo de ar sob pressão no espaço pleural por mecanismo valvular (ar entra e não sai). Resulta em colapso pulmonar + desvio de mediastino + compressão de grandes vasos + redução do retorno venoso → choque obstrutivo." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Contextos: trauma torácico, VM com pressão positiva, pneumotórax espontâneo complicado, pós-procedimento (acesso venoso central, biópsia). Diagnóstico CLÍNICO: NÃO pedir Rx — tratar imediatamente." },
      { id: "etiology", title: "Etiologia", content: "Traumático: contuso ou penetrante. Iatrogênico: VM, acesso central, biópsia. Espontâneo complicado: pneumotórax espontâneo primário ou secundário com mecanismo valvular." },
      { id: "clinical", title: "Apresentação Clínica", content: "• Dispneia intensa, taquipneia\n• Hipotensão grave\n• Timpanismo à percussão ipsilateral\n• MV abolido ipsilateral\n• Desvio da traqueia contralateral (sinal tardio)\n• Turgência jugular bilateral\n• Cianose\n• Enfisema subcutâneo\n• AESP na PCR" },
      { id: "diagnosis", title: "Diagnóstico", content: "CLÍNICO — tratar ANTES de confirmar com imagem. eFAST: ausência de deslizamento pleural. Rx tórax: pneumotórax grande + desvio de mediastino (se feito pós-descompressão)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Tamponamento cardíaco (bulhas abafadas, FAST +). Hemotórax maciço (macicez). TEP maciço. Choque hipovolêmico." },
      { id: "conduct", title: "Conduta Inicial", content: "1. DESCOMPRESSÃO COM AGULHA:\n• 2º EIC na LHC OU 5º EIC na LAA (preferido no ATLS atual)\n• Agulha 14G longa (≥ 5 cm em adultos)\n• Saída de ar sob pressão confirma diagnóstico\n\n2. TORACOSTOMIA com dreno (28-32 Fr) no 5º EIC LAA — DEFINITIVO\n\n3. Manter dreno em selo d'água\n4. Rx tórax pós-drenagem" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Descompressão imediata → toracostomia definitiva. Manter dreno até resolução (sem borbulhamento + pulmão expandido). Se recorrente: pleurodese ou cirurgia (VATS)." },
      { id: "prescriptions", title: "Prescrições", content: "1. Descompressão com agulha 14G\n2. Drenagem torácica 28-32 Fr em selo d'água\n3. O2 alto fluxo\n4. Rx tórax controle\n5. Analgesia\n6. Monitorização contínua" },
      { id: "followup", title: "Acompanhamento", content: "Rx tórax seriado. Dreno retirado quando pulmão expandido + sem borbulhamento + débito < 150 mL/24h." },
      { id: "complications", title: "Complicações", content: "PCR se não tratado, pneumotórax recorrente, hemotórax iatrogênico, empiema." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: instabilidade, VM. Alta: dreno removido, pulmão expandido." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. ACS 2018.\n2. Roberts DJ et al. Ann Surg 2015.\n3. BTS Pleural Disease Guideline 2010." }
    ]
  },
  {
    id: "fp-irpa", title: "Insuficiência Respiratória Aguda", categoryId: "emergency", category: "Emergência e Ressuscitação",
    tags: ["insuficiência respiratória", "hipoxemia", "ventilação", "vni", "iot"],
    sections: [
      { id: "intro", title: "Introdução", content: "A IRpA é a incapacidade aguda do sistema respiratório em manter as trocas gasosas. Tipo I (hipoxêmica): PaO2 < 60 mmHg. Tipo II (hipercápnica): PaCO2 > 50 mmHg. O manejo escalonado vai de O2 suplementar a VNI e IOT conforme gravidade." },
      { id: "def", title: "Definição", content: "Tipo I: falha na oxigenação (pneumonia, EAP, SDRA, TEP)\nTipo II: falha na ventilação (DPOC, asma grave, doenças neuromusculares, overdose)\nTipo III: perioperatória (atelectasia)\nTipo IV: associada a choque" },
      { id: "screening", title: "Rastreamento e Identificação", content: "FR > 30, SpO2 < 90%, uso de musculatura acessória, cianose, confusão, impossibilidade de falar frases completas." },
      { id: "etiology", title: "Etiologia", content: "Tipo I: pneumonia, EAP, SDRA, TEP, pneumotórax. Tipo II: DPOC, asma, Guillain-Barré, miastenia, overdose de opioides/BZD." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dispneia, taquipneia, uso de acessória, tiragem, batimento de asa nasal, cianose, confusão (hipoxemia/hipercapnia), sudorese, taquicardia." },
      { id: "diagnosis", title: "Diagnóstico", content: "Gasometria arterial (obrigatória), Rx tórax, SpO2, ECG, hemograma, BNP, D-dímero, TC tórax conforme suspeita clínica." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Pneumonia vs EAP vs TEP vs pneumotórax vs DPOC exacerbado vs asma vs SDRA vs doenças neuromusculares." },
      { id: "conduct", title: "Conduta Inicial", content: "1. O2 suplementar: CN, máscara, máscara com reservatório\n2. VNI (CPAP/BiPAP): EAP, DPOC exacerbado — reduz IOT e mortalidade\n3. Cânula nasal de alto fluxo (CNAF): hipoxemia moderada\n4. IOT: falha de VNI, Glasgow ≤ 8, apneia, choque\n5. Tratar causa de base" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Escalonamento: O2 → CNAF → VNI → IOT + VM. EAP: VNI + diurético + nitrato. DPOC: VNI + broncodilatador + corticoide. SDRA: VM protetora (VC 6 mL/kg, PEEP alta, posição prona). Neuromuscular: IOT precoce." },
      { id: "prescriptions", title: "Prescrições", content: "1. O2 conforme SpO2 alvo (92-96% ou 88-92% DPOC)\n2. VNI: CPAP 10 cmH2O ou BiPAP 10/5 (ajustar)\n3. Gasometria 30 min após intervenção\n4. Rx tórax\n5. Tratamento da causa\n6. Monitorização contínua\n7. IOT se falha de VNI" },
      { id: "followup", title: "Acompanhamento", content: "Gasometria seriada, desmame de O2/VNI, tratamento da causa, fisioterapia respiratória, protocolo de desmame de VM." },
      { id: "complications", title: "Complicações", content: "IOT desnecessária, barotrauma (VM), PAVM, atelectasia, falência de desmame." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: IOT, VNI > 24h, instabilidade. Alta: causa tratada, sem O2 suplementar ou O2 domiciliar prescrito." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Rochwerg B et al. Official ERS/ATS Guidelines: NIV for Acute Respiratory Failure. ERJ 2017.\n2. Fan E et al. ARDS: ARDS Definition, Berlin. JAMA 2012.\n3. AMIB — Diretrizes de VM 2023." }
    ]
  }
];
