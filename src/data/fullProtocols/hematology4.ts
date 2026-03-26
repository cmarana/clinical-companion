import type { FullProtocol } from "./types";

export const hematologyFullProtocols4: FullProtocol[] = [
  {
    id: "fp-hemofilia-emergencia",
    title: "Hemofilia — Sangramento Agudo na Emergência",
    categoryId: "hematology",
    category: "Hematologia de Emergência",
    tags: ["hemofilia", "fator VIII", "fator IX", "sangramento", "coagulopatia"],
    sections: [
      { id: "intro", title: "Introdução", content: "A hemofilia é uma coagulopatia hereditária ligada ao X, com deficiência de fator VIII (hemofilia A — 80%) ou fator IX (hemofilia B — 20%). Pacientes podem apresentar sangramentos graves que requerem reposição imediata de fator. O Brasil distribui fatores de coagulação pelo SUS. Diretriz MS/Hemofilia 2021." },
      { id: "def", title: "Definição", content: "Hemofilia grave: fator <1% (sangramentos espontâneos). Moderada: 1-5%. Leve: 5-40%. Sangramentos de risco: articular (hemartrose — mais comum), muscular (síndrome compartimental), SNC (risco de vida), retroperitoneal, orofaríngeo." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Paciente com diagnóstico prévio de hemofilia que se apresenta com sangramento ou trauma. TTPa prolongado com TP normal é o achado laboratorial clássico. Dosagem de fatores VIII e IX confirma tipo e gravidade." },
      { id: "etiology", title: "Etiologia", content: "Herança ligada ao X recessiva. Hemofilia A: deficiência de fator VIII. Hemofilia B (Christmas): deficiência de fator IX. 30% dos casos são mutações de novo (sem história familiar)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hemartrose (70-80%): dor articular aguda, edema, calor, limitação funcional (joelhos, tornozelos, cotovelos). Hematoma muscular: dor, aumento de volume, risco de síndrome compartimental (iliopsoas!). Sangramento de SNC: cefaleia súbita, vômitos, alteração de consciência — TRATAR ANTES DE CONFIRMAR." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemograma (normal ou anemia se sangramento crônico), TTPa prolongado, TP normal, dosagem de fatores VIII e IX, pesquisa de inibidores (Bethesda). Imagem conforme localização: USG articular, TC crânio (SNC), TC abdome (retroperitoneal)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Doença de von Willebrand, outras deficiências de fatores, hemofilia adquirida (autoimune — idosos), trombocitopenia, CIVD." },
      { id: "conduct", title: "Conduta Inicial", content: "PRINCÍPIO: TRATAR PRIMEIRO, INVESTIGAR DEPOIS. 1. Repor fator imediatamente se sangramento significativo (não esperar exames); 2. Em sangramento de SNC: repor fator para 100% ANTES de TC; 3. Não puncionar articulações; 4. Não usar AAS ou AINEs; 5. Contatar hematologista/Centro de Hemofilia." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hemofilia A: Fator VIII — dose (UI) = peso (kg) × nível desejado (%) × 0,5. Hemofilia B: Fator IX — dose (UI) = peso (kg) × nível desejado (%). Alvos: hemartrose 40-60%, muscular 40-60%, SNC 80-100%, cirurgia 80-100%. Se inibidor: Fator VII ativado recombinante (rFVIIa) 90mcg/kg EV a cada 2h ou CCPA (FEIBA) 50-100 UI/kg. Ácido tranexâmico 1g EV 8/8h (adjuvante — CI se hematúria)." },
      { id: "prescriptions", title: "Prescrições", content: "Hemartrose (Hemofilia A, 70kg): Fator VIII 1750 UI EV (70 × 50% × 0,5), repetir 12/12h por 3-5 dias. SNC (Hemofilia A, 70kg): Fator VIII 3500 UI EV (70 × 100% × 0,5), repetir 8-12h, manter 14+ dias. Adjuvante: Ácido tranexâmico 1g EV 8/8h. Analgesia: Paracetamol 1g VO 6/6h ou Dipirona 1g EV 6/6h (NUNCA AAS/AINEs). Gelo local em hemartrose." },
      { id: "followup", title: "Acompanhamento", content: "Centro de Tratamento de Hemofilia (CTH) do SUS. Fisioterapia para artropatia hemofílica. Profilaxia primária com fator regular em hemofilia grave. Pesquisa de inibidores periódica. Vacinação para hepatites (SUS)." },
      { id: "complications", title: "Complicações", content: "Artropatia hemofílica crônica (destruição articular), síndrome compartimental, hemorragia intracraniana, desenvolvimento de inibidores (anticorpos antifator — 20-30% na hemofilia A grave), infecções transfusionais (históricas)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: hemartrose simples após reposição, analgesia adequada, fator disponível para doses subsequentes. Internação: sangramento muscular profundo, pós-trauma, cirurgia, sangramento com inibidor. UTI: sangramento de SNC, choque hemorrágico." },
      { id: "references", title: "Referências Bibliográficas", content: "Ministério da Saúde — Manual de Hemofilia 2021. WFH — Guidelines for the Management of Hemophilia 2020. Srivastava A et al. Haemophilia 2020. Programa Nacional de Coagulopatias Hereditárias — MS." }
    ]
  },
  {
    id: "fp-anticoagulacao-emergencia",
    title: "Reversão de Anticoagulação na Emergência",
    categoryId: "hematology",
    category: "Hematologia de Emergência",
    tags: ["anticoagulação", "varfarina", "doac", "sangramento", "reversão", "vitamina k"],
    sections: [
      { id: "intro", title: "Introdução", content: "Sangramento associado a anticoagulantes é uma emergência frequente. A abordagem varia conforme o anticoagulante (varfarina vs DOACs), o sítio e a gravidade do sangramento. Diretrizes SBC, ISTH e ACC 2020." },
      { id: "def", title: "Definição", content: "Sangramento maior: Hb queda >2g/dL, necessidade ≥2 CH, sangramento em sítio crítico (intracraniano, retroperitoneal, intraocular, articular, pericárdico), ou sangramento com instabilidade hemodinâmica. INR supraterapêutico: >3 para varfarina." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Paciente em uso de anticoagulante com sangramento ativo ou necessidade de cirurgia urgente. Identificar: qual anticoagulante, dose, última tomada, função renal (DOACs são renais). Exames: TP/INR, TTPa, hemograma, função renal, fibrinogênio." },
      { id: "etiology", title: "Etiologia", content: "Varfarina: interações medicamentosas (ATB, antifúngicos, amiodarona), dieta (vitamina K), insuficiência hepática, erro de dose. DOACs (Rivaroxaban, Apixaban, Dabigatran, Edoxaban): insuficiência renal, interações (inibidores de P-gp/CYP3A4), erro de dose." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sangramento visível (epistaxe, hematúria, melena, hematêmese, gengivorragia) ou oculto (queda de Hb, retroperitoneal, intracraniano). HIC: cefaleia, rebaixamento, déficit focal — TC crânio urgente." },
      { id: "diagnosis", title: "Diagnóstico", content: "Varfarina: INR (reflete atividade). DOACs: TP (sensível para rivaroxaban), TTPa (sensível para dabigatran), anti-Xa calibrado (para rivaroxaban/apixaban), tempo de trombina diluído (para dabigatran). Hemograma seriado, tipagem, prova cruzada." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Sangramento por causa cirúrgica (não relacionado ao anticoagulante), CIVD, trombocitopenia (induzida por heparina), déficit de fator adquirido, doença hepática." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ABC + estabilização hemodinâmica; 2. Identificar anticoagulante e última dose; 3. Colher TP/INR, TTPa, hemograma, função renal; 4. Transfusão se indicada; 5. Reversor específico conforme droga; 6. Suspender anticoagulante." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "VARFARINA: INR >10 sem sangramento: Vitamina K 2,5-5mg VO. Sangramento maior: CCP (Complexo Protrombínico) 25-50 UI/kg EV + Vitamina K 10mg EV lento. NÃO usar PFC isolado (volume excessivo, correção lenta). DABIGATRAN: Idarucizumab 5g EV (reversor específico). Se indisponível: CCP 50 UI/kg. Considerar hemodiálise. RIVAROXABAN/APIXABAN: Andexanet alfa (se disponível) ou CCP 50 UI/kg EV. HEPARINA: Protamina 1mg para cada 100UI de HNF (nas últimas 2h). ENOXAPARINA: Protamina 1mg para cada 1mg de enoxaparina (reverte ~60%)." },
      { id: "prescriptions", title: "Prescrições", content: "Varfarina (sangramento maior): 1. CCP 25-50 UI/kg EV; 2. Vitamina K 10mg EV em 30min; 3. Checar INR em 30min (meta <1,5). Dabigatran: 1. Idarucizumab 5g (2 frascos 2,5g) EV em 5-10min. Rivaroxaban/Apixaban: 1. CCP 50 UI/kg EV em 15min. Heparina: 1. Protamina 50mg EV lento (máx 5mg/min). Todos: ± Ácido tranexâmico 1g EV; transfusão conforme necessidade." },
      { id: "followup", title: "Acompanhamento", content: "Reavaliar necessidade de anticoagulação após resolução do sangramento. Ajustar dose ou trocar anticoagulante. Discutir risco-benefício com cardiologia/hematologia. Se HIC: reiniciar anticoagulação geralmente após 4-8 semanas (individualizar)." },
      { id: "complications", title: "Complicações", content: "Trombose por reversão excessiva (CCP é pró-trombótico), HIC com expansão do hematoma, choque hemorrágico, reação alérgica a reversores, óbito." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: todo sangramento maior. UTI: HIC, choque hemorrágico, sangramento ativo com instabilidade. Alta: sangramento menor controlado, INR em faixa, causa identificada e corrigida." },
      { id: "references", title: "Referências Bibliográficas", content: "SBC — Anticoagulação e Manejo de Sangramento 2019. ISTH Guidance on Reversal of DOACs 2020. Tomaselli GF et al. JACC 2020. Pollack CV et al. NEJM 2015 (REVERSE-AD — Idarucizumab)." }
    ]
  }
];
