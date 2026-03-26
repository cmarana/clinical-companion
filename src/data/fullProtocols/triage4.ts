import type { FullProtocol } from "./types";

export const triageFullProtocols4: FullProtocol[] = [
  {
    id: "fp-fluxo-rebaixamento",
    title: "Fluxograma de Rebaixamento de Consciência na Triagem",
    categoryId: "triage",
    category: "Triagem / Classificação de Risco",
    tags: ["rebaixamento", "consciência", "coma", "triagem", "glasgow", "fluxograma"],
    sections: [
      { id: "intro", title: "Introdução", content: "O rebaixamento de consciência é uma das apresentações mais graves na emergência. A triagem rápida com classificação de gravidade e encaminhamento imediato à sala de emergência é fundamental. Glasgow ≤12 = vermelho no Manchester. Diretriz GBCR e ATLS." },
      { id: "def", title: "Definição", content: "Alteração aguda do nível de consciência: Glasgow 13-14 (confusão), 9-12 (sonolência/obnubilação), ≤8 (coma — indicação de IOT para proteção de via aérea). Diferenciar de: delirium (flutuante), demência (crônico), psicogênico." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Avaliação ABCDE imediata. Glasgow na triagem. Glicemia capilar (hipoglicemia é causa reversível imediata). Pupilas (anisocoria = herniação, miose = opioide/organofosforado, midríase = anticolinérgico). SpO2, PA, FC, FR, temperatura." },
      { id: "etiology", title: "Etiologia", content: "Mnemônico AEIOU-TIPS: Álcool/acidose, Epilepsia/eletrolítico, Insulina (hipo/hiperglicemia), Opioides/overdose, Uremia. Trauma, Infecção (meningite, encefalite), Psiquiátrico/Poisoning (intoxicação), Stroke (AVC)/Subaracnóidea." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sonolência progressiva, desorientação, fala incompreensível, resposta apenas a estímulos dolorosos ou arreatividade. Sinais focais: hemiparesia, anisocoria (AVC, lesão expansiva). Sinais meníngeos: meningite, HSA. Mioclonias: encefalopatia metabólica." },
      { id: "diagnosis", title: "Diagnóstico", content: "Imediato: glicemia capilar, gasometria. Urgente: TC crânio sem contraste (AVC, hemorragia, lesão expansiva). Laboratório: hemograma, eletrólitos, função renal e hepática, toxicológico, amônia, TSH, cortisol. Punção lombar se suspeita de meningite/encefalite (após TC se sinais focais)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hipoglicemia, AVC, meningite/encefalite, intoxicação exógena, pós-ictal, encefalopatia hepática/urêmica, trauma craniano, estado de mal não convulsivo, causas psicogênicas." },
      { id: "conduct", title: "Conduta Inicial", content: "Fluxo: 1. ABCDE (via aérea se Glasgow ≤8); 2. Glicemia capilar → Glicose 50% se <60mg/dL; 3. Naloxona 0,4mg EV se suspeita de opioide; 4. Tiamina 100mg EV (antes de glicose se etilista); 5. TC crânio; 6. Tratar causa identificada; 7. Monitorização contínua." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratamento direcionado à causa. Hipoglicemia: Glicose 50% 40-60mL EV. Opioide: Naloxona 0,4-2mg EV. Herniação: Manitol 20% 1g/kg EV em 20min + cabeceira 30° + IOT. Status epiléptico: Diazepam 10mg EV. Meningite: ATB empírico imediato. Intoxicação: antídoto específico + suporte." },
      { id: "prescriptions", title: "Prescrições", content: "1. Glicose 50% 40mL EV (se glicemia <60); 2. Tiamina 100mg EV (se etilismo); 3. Naloxona 0,4mg EV (se suspeita opioide — repetir até 2mg); 4. SF 0,9% 500mL EV (acesso venoso); 5. IOT se Glasgow ≤8; 6. Manitol 20% 250mL EV em 20min (se sinais de herniação); 7. TC crânio urgente." },
      { id: "followup", title: "Acompanhamento", content: "Glasgow seriado (mínimo 1/1h). Monitorização contínua. Reavaliação pupilar frequente. Repetir TC se piora neurológica. EEG se suspeita de crises subclínicas." },
      { id: "complications", title: "Complicações", content: "Aspiração pulmonar, perda de via aérea, herniação cerebral, lesão cerebral irreversível, óbito." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Classificação: VERMELHO (prioridade 1). Glasgow ≤12: sala de emergência/UTI. Glasgow 13-14: observação em emergência. Alta: causa reversível tratada (ex: hipoglicemia), Glasgow 15 mantido, observação mínima de 6h." },
      { id: "references", title: "Referências Bibliográficas", content: "GBCR — Grupo Brasileiro de Classificação de Risco. ATLS 10ª Ed — Escala de Glasgow. Teasdale G, Jennett B. Lancet 1974. Edlow JA et al. NEJM 2014." }
    ]
  },
  {
    id: "fp-criterios-admissao-uti",
    title: "Critérios de Admissão em UTI",
    categoryId: "triage",
    category: "Triagem / Classificação de Risco",
    tags: ["uti", "admissão", "critérios", "gravidade", "prioridade"],
    sections: [
      { id: "intro", title: "Introdução", content: "A decisão de admissão em UTI é uma das mais importantes na medicina de emergência. Deve equilibrar gravidade, reversibilidade e benefício esperado. Diretrizes AMIB, SCCM e Resolução CFM 2.156/2016." },
      { id: "def", title: "Definição", content: "UTI: unidade para pacientes que necessitam de monitorização contínua e/ou suporte orgânico avançado (ventilação mecânica, drogas vasoativas, diálise). Prioridades (SCCM): P1 — instável, necessita tratamento intensivo (maior benefício); P2 — monitorização intensiva (potencial deterioração); P3 — instável com baixa probabilidade de recuperação; P4 — sem benefício (cuidados paliativos ou condição limitada)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Critérios objetivos: necessidade de VM, uso de vasopressores, Glasgow ≤8, instabilidade hemodinâmica refratária a volume, arritmias graves, IRA com necessidade dialítica, politrauma grave, pós-PCR. Scores: APACHE II, SOFA, NEWS ≥7." },
      { id: "etiology", title: "Etiologia", content: "Condições que mais demandam UTI no Brasil: sepse/choque séptico (principal), IRpA/SDRA, pós-operatório de grande porte, IAM complicado, AVC grave, politrauma, PCR recuperada, cetoacidose/EHH grave, eclâmpsia, intoxicações graves." },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente com uma ou mais disfunções orgânicas agudas: respiratória (SpO2 <90% com O2, necessidade de VNI/VM), cardiovascular (PAS <90 ou vasopressores), neurológica (Glasgow ≤12), renal (anúria, K >6,5), hepática (encefalopatia), hematológica (CIVD)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Avaliação clínica + scores de gravidade. SOFA ≥2 (sugere disfunção orgânica). qSOFA ≥2 (triagem de sepse). NEWS ≥7 (deterioração clínica). APACHE II na admissão (prognóstico). Gasometria, lactato, função orgânica." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diferenciar necessidade de UTI vs semi-intensiva (intermediária) vs enfermaria com monitorização. Avaliar se o paciente se beneficia de tratamento intensivo vs cuidados paliativos exclusivos." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Estabilizar no PS (golden hour); 2. Avaliar critérios de admissão (objetivos + clínicos); 3. Contatar UTI/regulação de leitos; 4. Documentar gravidade (SOFA, APACHE); 5. Se sem vaga: manter cuidados intensivos no PS (não retardar tratamento); 6. Resolução CFM: prioridade por critérios clínicos, não administrativos." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Iniciar tratamento intensivo no PS se necessário (não esperar vaga): VM, drogas vasoativas, antibióticos, bundle de sepse. Transferência para UTI assim que disponível. Comunicação estruturada (SBAR) na passagem de caso." },
      { id: "prescriptions", title: "Prescrições", content: "Checklist de admissão UTI: 1. Profilaxia TVP (Enoxaparina 40mg SC 1x/dia); 2. Profilaxia úlcera de estresse (Omeprazol 40mg EV se risco); 3. Cabeceira 30-45°; 4. Glicemia capilar 4/4h (meta 140-180); 5. Dieta enteral precoce (24-48h se possível); 6. Balanço hídrico rigoroso; 7. Reavaliação de sedação diária (protocolo de despertar)." },
      { id: "followup", title: "Acompanhamento", content: "Rounds multidisciplinares diários. SOFA diário. Checklist de bundles (sepse, PAV, cateter). Avaliação diária de prontidão para desmame de VM. Critérios de alta da UTI: sem vasopressor, VM desmamada ou em desmame, estável hemodinamicamente." },
      { id: "complications", title: "Complicações", content: "Infecções nosocomiais (PAV, ITU associada a cateter, infecção de corrente sanguínea), delirium de UTI, fraqueza muscular adquirida (ICUAW), úlceras de pressão, TEPT pós-UTI." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Admissão P1 (prioridade máxima): VM, vasopressores, Glasgow ≤8, pós-PCR. Admissão P2: monitorização intensiva (IAM, arritmia instável). Critérios de alta UTI: sem suporte orgânico, estável >24h, causa resolvida ou em resolução. Resolução CFM 2.156/2016: critérios éticos e técnicos para admissão/alta." },
      { id: "references", title: "Referências Bibliográficas", content: "AMIB — Critérios de Admissão e Alta em UTI. Resolução CFM 2.156/2016. SCCM — Guidelines for ICU Admission, Triage, and Discharge. Nates JL et al. Crit Care Med 2016." }
    ]
  }
];
