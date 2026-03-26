import type { FullProtocol } from "./types";

export const painPalliativeFullProtocols4: FullProtocol[] = [
  {
    id: "fp-febre-manejo-emergencia",
    title: "Febre — Manejo Sintomático na Emergência",
    categoryId: "pain_palliative",
    category: "Dor Aguda / Cuidados Paliativos",
    tags: ["febre", "antitérmico", "dipirona", "paracetamol", "sintomático"],
    sections: [
      { id: "intro", title: "Introdução", content: "A febre é o sintoma mais frequente na emergência. O manejo sintomático adequado alivia o desconforto enquanto se investiga a causa. Dipirona é o antitérmico mais utilizado no Brasil. Importante: febre é um sinal, não uma doença — sempre investigar a etiologia." },
      { id: "def", title: "Definição", content: "Temperatura axilar ≥37,8°C ou retal ≥38°C. Febre de origem indeterminada (FOI): >38,3°C em múltiplas ocasiões, duração >3 semanas, sem diagnóstico após avaliação hospitalar de 1 semana. Hiperpirexia: >41°C (emergência)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Avaliar: duração, padrão (contínua, intermitente, remitente), sinais de gravidade (toxemia, petéquias, meningismo, instabilidade hemodinâmica). Grupos de risco: neutropênicos, imunossuprimidos, esplenectomizados, extremos de idade." },
      { id: "etiology", title: "Etiologia", content: "Infecciosa (maioria): viral (IVAS, gastroenterite), bacteriana (pneumonia, ITU, meningite, pielonefrite). Não infecciosa: neoplasias, doenças autoimunes (LES, vasculites), medicamentosa, TEP, tireoidite." },
      { id: "clinical", title: "Apresentação Clínica", content: "Mal-estar, calafrios, sudorese, cefaleia, mialgia, taquicardia, taquipneia. Sinais de gravidade: rigidez de nuca, petéquias/púrpura, hipotensão, confusão mental, toxemia. No idoso: febre pode estar ausente mesmo com infecção grave." },
      { id: "diagnosis", title: "Diagnóstico", content: "Direcionado pela suspeita clínica. Mínimo: hemograma, PCR, EAS + urocultura, hemocultura (se internação/sepse). Complementar conforme foco: Rx tórax, TC, punção lombar. Lembrar: dengue (NS1, sorologia), malária (gota espessa) em áreas endêmicas." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hipertermia (diferente de febre — falha da termorregulação): insolação, síndrome neuroléptica maligna, hipertermia maligna, síndrome serotoninérgica, intoxicação por drogas simpaticomiméticas." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Antitérmico se febre com desconforto; 2. Hidratação adequada; 3. Investigação etiológica conforme contexto; 4. Medidas físicas (compressas mornas — NÃO frias/álcool); 5. Antibiótico empírico se sepse ou neutropenia febril (não esperar exames)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Adulto: Dipirona 1g EV/VO 6/6h (primeira escolha no Brasil) ou Paracetamol 750mg VO 6/6h (se CI dipirona). Ibuprofeno 400-600mg VO 8/8h (anti-inflamatório + antitérmico). Hiperpirexia (>41°C): resfriamento ativo + dipirona EV + investigar causa (sepse, SHM, intoxicação). Criança: Dipirona 15mg/kg ou Paracetamol 15mg/kg ou Ibuprofeno 10mg/kg (>6 meses)." },
      { id: "prescriptions", title: "Prescrições", content: "Adulto: 1. Dipirona 1g EV 6/6h; 2. Paracetamol 750mg VO 6/6h (alternativa); 3. Hidratação VO abundante ou SF 0,9% 500-1000mL EV. Criança: 1. Dipirona 15mg/kg VO/EV 6/6h; 2. Paracetamol 15mg/kg VO 6/6h; 3. Ibuprofeno 10mg/kg VO 8/8h (>6 meses). Hiperpirexia: Dipirona 2g EV + medidas de resfriamento + investigação." },
      { id: "followup", title: "Acompanhamento", content: "Orientar sinais de alarme para retorno: febre persistente >48h, petéquias, vômitos incoercíveis, prostração intensa, oligúria. Agendar retorno se FOI. Notificação compulsória se doença de notificação (dengue, meningite, etc.)." },
      { id: "complications", title: "Complicações", content: "Convulsão febril (crianças 6m-5a), desidratação, hiperpirexia com lesão orgânica, agranulocitose por dipirona (raro no Brasil), hepatotoxicidade por paracetamol (dose excessiva)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: febre com foco identificado e benigno, estável, tolera VO. Internação: febre + toxemia, neutropenia febril, febre no imunossuprimido, FOI, suspeita de infecção grave. UTI: sepse, hiperpirexia com disfunção orgânica." },
      { id: "references", title: "Referências Bibliográficas", content: "MS — Protocolo de Manejo Clínico da Dengue. SBP — Febre na Criança. Petersdorf RG, Beeson PB. Medicine 1961 (FOI). NICE — Fever in under 5s." }
    ]
  },
  {
    id: "fp-controle-dor-pos-operatorio",
    title: "Controle de Dor Pós-Operatória",
    categoryId: "pain_palliative",
    category: "Dor Aguda / Cuidados Paliativos",
    tags: ["dor", "pós-operatório", "analgesia", "multimodal", "opioide"],
    sections: [
      { id: "intro", title: "Introdução", content: "A dor pós-operatória inadequadamente tratada aumenta complicações, tempo de internação e risco de cronificação. A analgesia multimodal é o padrão-ouro: combinação de analgésicos com mecanismos diferentes para melhor controle com menos efeitos adversos. Diretriz SBA e IASP." },
      { id: "def", title: "Definição", content: "Dor aguda decorrente de lesão tecidual cirúrgica. Classificação de intensidade pela EVA: leve (1-3), moderada (4-6), intensa (7-10). Analgesia multimodal: uso simultâneo de ≥2 classes de analgésicos (AINEs + opioides + adjuvantes) para efeito sinérgico." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Avaliar dor sistematicamente: EVA (Escala Visual Analógica), EN (Escala Numérica 0-10), escala de faces (crianças/demência). Avaliar em repouso e em movimento. Reavaliar após cada intervenção analgésica (30min se EV, 60min se VO)." },
      { id: "etiology", title: "Etiologia", content: "Nociceptiva somática (pele, músculo, osso), nociceptiva visceral (órgãos internos), neuropática (lesão nervosa intraoperatória). Fatores que influenciam: tipo/extensão da cirurgia, técnica anestésica, catastrofização, ansiedade, uso prévio de opioides." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor no sítio cirúrgico, irradiação variável. Sinais autonômicos: taquicardia, hipertensão, sudorese, agitação. Consequências: atelectasia (por imobilidade torácica), íleo paralítico, retenção urinária, insônia, ansiedade." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico — baseado no relato do paciente e escalas de dor. Investigar causas de dor desproporcional: complicações cirúrgicas (sangramento, isquemia, síndrome compartimental), infecção de sítio, dor neuropática." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Complicação cirúrgica (sangramento, deiscência, isquemia), síndrome compartimental, infecção de sítio, TEP, IAM (dor torácica pós-op), retenção urinária aguda." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Avaliar intensidade (EVA); 2. Prescrever analgesia escalonada conforme dor esperada; 3. Dor leve: Dipirona + Paracetamol; 4. Dor moderada: + AINE + Tramadol; 5. Dor intensa: + Morfina; 6. Adjuvantes conforme necessidade (Cetamina, Gabapentina)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Piso analgésico (todos): Dipirona 1g EV 6/6h + Paracetamol 1g VO 6/6h (intercalar). AINEs: Cetoprofeno 100mg EV 12/12h ou Cetorolaco 30mg EV 8/8h (máx 5 dias). Opioide fraco: Tramadol 100mg EV 6/6h. Opioide forte: Morfina 2-5mg EV 4/4h ou PCA (analgesia controlada pelo paciente). Adjuvantes: Cetamina 0,1-0,3 mg/kg/h EV (poupador de opioide), Dexametasona 8mg EV (dose única — anti-inflamatório + antiemético), Gabapentina 300mg VO pré-op (prevenção de cronificação)." },
      { id: "prescriptions", title: "Prescrições", content: "Dor leve (cirurgia pequena): 1. Dipirona 1g EV 6/6h; 2. Paracetamol 1g VO 6/6h (intercalar). Dor moderada: 1. Dipirona 1g EV 6/6h; 2. Cetoprofeno 100mg EV 12/12h; 3. Tramadol 100mg EV 8/8h SN. Dor intensa: 1. Dipirona 1g EV 6/6h; 2. Cetoprofeno 100mg EV 12/12h; 3. Morfina 3mg EV 4/4h (+ Ondansetrona 4mg EV 8/8h); 4. Cetamina 10mg EV SN (resgate). Todos: Ondansetrona 4mg EV 8/8h SN (náusea)." },
      { id: "followup", title: "Acompanhamento", content: "Reavaliar EVA a cada 4h. Transição EV → VO assim que possível. Desmame de opioide gradual (não suspender abruptamente se >3 dias). Encaminhar clínica de dor se dor persistente >3 meses (dor crônica pós-operatória)." },
      { id: "complications", title: "Complicações", content: "Subdosagem: dor, complicações pulmonares, cronificação. Opioides: náusea, vômitos, constipação, depressão respiratória, retenção urinária, tolerância. AINEs: sangramento GI, lesão renal. Dipirona: agranulocitose (rara)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: dor controlada com analgesia VO (EVA ≤3), sem efeitos adversos. Internação prolongada: dor refratária, necessidade de opioide parenteral, complicação cirúrgica. UTI: depressão respiratória por opioide (Naloxona 0,4mg EV)." },
      { id: "references", title: "Referências Bibliográficas", content: "SBA — Diretrizes de Dor Pós-Operatória. IASP — Acute Pain Management Guidelines. Chou R et al. J Pain 2016 (APS/ASA Guidelines). ERAS Society — Enhanced Recovery Protocols." }
    ]
  }
];
