import type { EmergencyProtocol } from "./types";

export const infectiousProtocols2: EmergencyProtocol[] = [
  {
    id: "dengue-grave-emergencia",
    title: "Dengue Grave",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "A dengue grave é uma emergência endêmica no Brasil com mortalidade de 1-5% quando tratada e até 20% sem tratamento. Sinais de alarme identificam pacientes com risco de evolução para choque. A reposição volêmica precoce é o pilar do tratamento." },
      { id: "def", title: "Definição", content: "Dengue com sinais de alarme (grupo C) ou dengue grave (grupo D).\nSinais de alarme: dor abdominal intensa, vômitos persistentes, acúmulo de líquidos (ascite, derrame pleural), hepatomegalia > 2 cm, letargia/irritabilidade, hipotensão postural, sangramento de mucosas, aumento progressivo do Ht.\nDengue grave: choque, hemorragia grave, disfunção orgânica grave." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Febre + 2 ou mais: cefaleia, dor retro-orbital, mialgia, artralgia, exantema, petéquias (prova do laço +). Período crítico: defervescência (3º-7º dia). VIGIAR SINAIS DE ALARME neste período!" },
      { id: "etiology", title: "Etiologia", content: "Flavivírus (DENV 1-4). Transmissão: Aedes aegypti. Infecção sequencial por sorotipo diferente → maior risco de forma grave (teoria da imunoamplificação)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Fase febril (2-7 dias): febre, mialgia, cefaleia.\nFase crítica (defervescência): extravasamento plasmático → hemoconcentração → choque. Sangramento: petéquias, epistaxe, gengivorragia, HDA. Choque: hipotensão, pulsos finos, TEC > 2s, extremidades frias." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemograma seriado (Ht é o principal parâmetro!), plaquetas, albumina, AST/ALT, coagulograma. NS1 (primeiros 5 dias), IgM (após 6º dia). USG: ascite, derrame pleural, espessamento de vesícula." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Chikungunya, Zika, leptospirose, malária, febre tifoide, meningococcemia, hepatite viral, PTI." },
      { id: "conduct", title: "Conduta", content: "GRUPO C (sinais de alarme):\n• SF 0,9% 10 mL/kg/h IV por 2h → reavaliar\n• Se melhora: 25 mL/kg em 6h → manutenção\n• Monitorizar Ht 2/2h\n\nGRUPO D (choque):\n• SF 0,9% 20 mL/kg em 20 min (repetir até 3x)\n• Se refratário: coloide (albumina 0,5-1 g/kg)\n• Noradrenalina se choque persistente\n• Transfusão: CH se Ht em queda com choque, plaquetas apenas se sangramento ativo + < 50.000\n\n⚠️ NÃO usar AAS/AINE. Evitar acessos centrais/punções desnecessárias." },
      { id: "followup", title: "Acompanhamento", content: "Internação grupo C e D. Ht seriado (principal guia). Plaquetas diárias. Fase de recuperação (reabsorção): vigiar hipervolemia/EAP. Alta: 48h afebril, Ht estável, plaquetas > 50.000, sem sinais de alarme." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hidratação é o TRATAMENTO. NÃO usar corticoide de rotina. Paracetamol/dipirona (febre). Antieméticos. Transfusão apenas se sangramento ativo com instabilidade." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "GRUPO C:\n1. SF 0,9% 10 mL/kg/h IV por 2h\n2. Ht 2/2h\n3. Se melhora: 25 mL/kg em 6h\n\nGRUPO D:\n1. SF 0,9% 20 mL/kg em 20 min (repetir até 3x)\n2. Se refratário: Albumina 20% 0,5-1 g/kg\n3. Noradrenalina se choque\n4. UTI" },
      { id: "references", title: "Referências Bibliográficas", content: "1. MS Brasil — Dengue: Diagnóstico e Manejo Clínico 2024.\n2. WHO Dengue Guidelines 2009.\n3. OPAS Dengue 2023." }
    ]
  },
  {
    id: "leptospirose-grave",
    title: "Leptospirose Grave",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "A leptospirose grave (doença de Weil) apresenta tríade clássica: icterícia rubínica + insuficiência renal + hemorragia. Mortalidade de 10-50%. A forma pulmonar hemorrágica é a mais letal. Penicilina G ou Ceftriaxona IV são o tratamento." },
      { id: "def", title: "Definição", content: "Doença de Weil: icterícia + IRA + hemorragias. Forma pulmonar grave: hemorragia alveolar difusa (mortalidade > 50%). Agente: Leptospira interrogans." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Exposição a água de enchente/esgoto + febre + icterícia + IRA. Período de incubação: 2-30 dias. Epidemiologia: enchentes, contato com ratos, trabalhadores de esgoto/limpeza urbana." },
      { id: "etiology", title: "Etiologia", content: "Leptospira interrogans (espiroqueta). Reservatório: ratos. Transmissão: contato com água/solo contaminado por urina de rato (pele íntegra ou mucosa)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Fase precoce (3-7 dias): febre, mialgia (panturrilhas!), cefaleia, sufusão conjuntival (olho vermelho sem secreção — sinal clássico).\nFase tardia (doença de Weil): icterícia rubínica (alaranjada), IRA não oligúrica (hipocalêmica!), hemorragias (pulmonar, GI, petéquias), miocardite." },
      { id: "diagnosis", title: "Diagnóstico", content: "ELISA IgM (após 7º dia). MAT (confirmatório). Hemograma (leucocitose, plaquetopenia), bilirrubinas (direta elevada), CK, função renal (IRA com K+ BAIXO — diferente de outras causas de IRA!), coagulograma, RX tórax." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Dengue grave, malária, hepatite viral, febre amarela, sepse, hantavirose, síndrome hemolítico-urêmica." },
      { id: "conduct", title: "Conduta", content: "ATB: Penicilina G Cristalina 1,5 milhão UI IV 6/6h (7 dias) OU Ceftriaxona 1-2g IV 1x/dia.\nIRA: diálise se oligúria/anúria, hipercalemia, hipervolemia, uremia. A IRA é geralmente não oligúrica e reversível.\nHemorragia pulmonar: VM protetora, PEEP alta, corticoide (Metilprednisolona pulsoterapia — controverso).\nSuporte hemodinâmico: volume, vasopressores SN." },
      { id: "followup", title: "Acompanhamento", content: "IRA geralmente recupera em 2-4 semanas. Função renal seriada. Notificação compulsória. Quimioprofilaxia em áreas de risco: Doxiciclina 200 mg VO semanal." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Penicilina G 1,5M UI IV 6/6h por 7 dias. Ceftriaxona 1-2g IV 1x/dia (alternativa). Diálise se necessário. VM protetora se hemorragia pulmonar. Desmopressina e plaquetas se sangramento grave." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Ceftriaxona 1g IV 1x/dia por 7 dias\n2. SF 0,9% IV (hidratação)\n3. Monitorizar função renal diária\n4. Diálise se necessário\n5. RX tórax se dispneia\n6. Hemograma + coagulograma diário\n7. Notificar" },
      { id: "references", title: "Referências Bibliográficas", content: "1. MS Brasil — Leptospirose: Guia Clínico 2023.\n2. Haake DA et al. Leptospirosis. Curr Top Microbiol Immunol 2015.\n3. Bharti AR et al. Lancet Infect Dis 2003." }
    ]
  },
  {
    id: "malaria-grave-emergencia",
    title: "Malária Grave",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "Malária grave é causada quase exclusivamente por P. falciparum (raramente P. vivax ou P. knowlesi). Mortalidade de 10-20% com tratamento. Artesunato IV é superior à quinina e é o tratamento de primeira linha." },
      { id: "def", title: "Definição", content: "Malária com sinais de gravidade OMS: parasitemia > 5%, anemia grave (Hb < 5), hipoglicemia (< 40), acidose (pH < 7,25), IRA, edema pulmonar, malária cerebral (coma), choque, CIVD, icterícia + disfunção orgânica." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Febre + viagem para área endêmica (Amazônia Legal no Brasil). Gota espessa (padrão-ouro). Teste rápido (HRP2). Periodicidade da febre: terçã (48h — falciparum/vivax) ou quartã (72h — malariae)." },
      { id: "etiology", title: "Etiologia", content: "P. falciparum (mais grave — sequestro eritrocitário), P. vivax (pode ser grave), P. malariae, P. ovale, P. knowlesi. Vetor: Anopheles." },
      { id: "clinical", title: "Apresentação Clínica", content: "Malária cerebral: coma, convulsões, déficit focal. Anemia grave. Hipoglicemia (quinina causa!). Acidose + insuficiência respiratória. IRA. Icterícia. Choque (algid malaria). Hemoglobinúria (blackwater fever). CIVD." },
      { id: "diagnosis", title: "Diagnóstico", content: "Gota espessa + esfregaço (parasitemia quantitativa). Teste rápido. Hemograma (anemia, trombocitopenia), bilirrubinas, LDH, função renal, glicemia, gasometria, lactato." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Dengue grave, leptospirose, febre tifoide, sepse, meningite, hepatite, febre amarela." },
      { id: "conduct", title: "Conduta", content: "ARTESUNATO IV (1ª linha OMS):\n• 2,4 mg/kg IV nos tempos 0, 12h e 24h → depois 1x/dia por 7 dias\n• Completar com Clindamicina VO 20 mg/kg/dia por 7 dias\n\nSe sem Artesunato: Quinina IV 20 mg/kg ataque em 4h → 10 mg/kg 8/8h + Clindamicina\n\nSuporte: glicemia seriada (hipoglicemia por quinina), diálise se IRA, transfusão se Hb < 5, VM se SDRA, anticonvulsivantes.\nExsanguineotransfusão: se parasitemia > 10% com disfunção orgânica (controverso)." },
      { id: "followup", title: "Acompanhamento", content: "Parasitemia seriada (12-24h). Glicemia seriada. Hemograma diário. Se P. vivax/ovale: Primaquina 14 dias (testar G6PD antes). Notificação compulsória." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Artesunato 2,4 mg/kg IV (0, 12h, 24h → 1x/dia). Quinina IV (alternativa). Clindamicina 20 mg/kg/dia. Transfusão (Hb < 5). Diálise (IRA). VM (SDRA)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Artesunato ____ mg IV (2,4 mg/kg) nos tempos 0, 12h, 24h\n2. Depois: Artesunato 1x/dia até completar 7 dias\n3. Clindamicina ____ mg VO 8/8h por 7 dias\n4. Glicemia capilar 4/4h\n5. Parasitemia 12/12h\n6. UTI + monitorização\n7. Notificar" },
      { id: "references", title: "Referências Bibliográficas", content: "1. OMS — Guidelines for Malaria Treatment 2022.\n2. MS Brasil — Guia de Tratamento da Malária 2020.\n3. Dondorp AM et al. AQUAMAT Trial. Lancet 2010." }
    ]
  },
  {
    id: "covid-grave-srag",
    title: "COVID Grave / SRAG",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "COVID-19 grave/SRAG se manifesta com hipoxemia (SpO2 < 94%), insuficiência respiratória e necessidade de suporte ventilatório. Ventilação protetora, pronação e dexametasona são as intervenções com maior evidência de redução de mortalidade." },
      { id: "def", title: "Definição", content: "COVID grave: SpO2 < 94% em ar ambiente ou PaO2/FiO2 < 300. COVID crítica: SDRA, choque séptico, falência multiorgânica. SRAG: febre + tosse ou dispneia + SpO2 < 95% ou desconforto respiratório." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Dispneia, SpO2 < 94%, taquipneia > 30, TC com > 50% de comprometimento. Fatores de risco: idade > 60, obesidade, DM, HAS, DRC, imunossupressão, cardiopatia, pneumopatia." },
      { id: "etiology", title: "Etiologia", content: "SARS-CoV-2 (coronavírus). Lesão pulmonar por: dano alveolar difuso, microtrombose, resposta inflamatória exacerbada (tempestade de citocinas)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre, tosse, dispneia progressiva, hipoxemia silenciosa (SpO2 baixa sem dispneia proporcional), SDRA, tromboembolismo (TEP, TVP), miocardite, AVC, IRA." },
      { id: "diagnosis", title: "Diagnóstico", content: "RT-PCR SARS-CoV-2 (nasofaringe). TC tórax: vidro fosco bilateral, periférico. Hemograma (linfopenia), PCR, D-dímero, ferritina, DHL, troponina, IL-6. Gasometria + P/F." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Influenza grave, pneumonia bacteriana, TEP, ICC descompensada, pneumonite por hipersensibilidade, hemorragia alveolar." },
      { id: "conduct", title: "Conduta", content: "1. O2: cateter nasal → máscara → CNAF → VNI → VM protetiva\n2. Dexametasona 6 mg IV/VO 1x/dia por 10 dias (RECOVERY trial — se em O2)\n3. VM protetiva: VC 6 mL/kg, Pplatô ≤ 30, PEEP tabela, FiO2 titulada\n4. Pronação: ≥ 12-16h/dia se P/F < 150 (em VM) ou acordado se CNAF\n5. Anticoagulação: Enoxaparina profilática (dose plena se trombose confirmada)\n6. Tocilizumabe/Baricitinibe: se progressão apesar de corticoide (SSC 2021)\n7. NÃO usar: HCQ, ivermectina, azitromicina sem indicação bacteriana" },
      { id: "followup", title: "Acompanhamento", content: "Desmame ventilatório gradual. Profilaxia de TEV. Reabilitação pulmonar pós-COVID. Monitorizar COVID longa (fadiga, dispneia, cognitivo)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Dexametasona 6 mg/dia (10 dias). Enoxaparina 40-60 mg SC 1x/dia. Tocilizumabe 8 mg/kg IV (dose única). Baricitinibe 4 mg VO 1x/dia por 14 dias. VM protetiva + pronação." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. O2 para SpO2 92-96%\n2. Dexametasona 6 mg IV 1x/dia por 10 dias\n3. Enoxaparina 40 mg SC 1x/dia\n4. VM protetiva se IOT (VC 6 mL/kg, PEEP, Pplatô ≤ 30)\n5. Pronação ≥ 12h/dia se P/F < 150\n6. Monitorização contínua\n7. UTI" },
      { id: "references", title: "Referências Bibliográficas", content: "1. RECOVERY Trial. NEJM 2021.\n2. SSC COVID-19 Guidelines 2021.\n3. MS Brasil — Protocolo de Manejo Clínico da COVID-19, 2022." }
    ]
  },
  {
    id: "febre-neutropenica",
    title: "Febre Neutropênica",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "Febre neutropênica é emergência oncológica: neutrófilos < 500/mm³ + temperatura ≥ 38,3°C (única) ou ≥ 38°C por > 1h. ATB empírico de amplo espectro em < 60 minutos é obrigatório — cada hora de atraso aumenta mortalidade." },
      { id: "def", title: "Definição", content: "Neutropenia: neutrófilos < 500/mm³ (ou < 1000 com previsão de queda).\nFebre: T ≥ 38,3°C (única) ou ≥ 38°C sustentada por > 1h.\nAlto risco: neutropenia prevista > 7 dias, instabilidade, comorbidades, MASCC < 21.\nBaixo risco: neutropenia < 7 dias, estável, sem comorbidade, MASCC ≥ 21." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Pós-quimioterapia (nadir 7-14 dias). Culturas antes do ATB. Investigar focos: pele, cateter, pulmão, cavidade oral, períneo." },
      { id: "etiology", title: "Etiologia", content: "Gram-negativos: E. coli, Pseudomonas, Klebsiella. Gram-positivos: S. aureus, S. epidermidis (cateter), Streptococcus viridans. Fungos: Candida, Aspergillus (neutropenia prolongada > 7 dias)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre pode ser O ÚNICO sinal (sem pus, sem infiltrado, sem sinais localizatórios — a resposta inflamatória está suprimida!). Instabilidade hemodinâmica, mucosa, celulite perianal." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemoculturas (2 pares: periférica + cateter central), hemograma, PCR, procalcitonina, função renal/hepática, RX tórax, urocultura, TC seios da face se sinusite. Galactomanana/beta-D-glucana se neutropenia prolongada." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Febre medicamentosa, febre tumoral, reação transfusional, TEP, infecção fúngica invasiva." },
      { id: "conduct", title: "Conduta", content: "ATB EMPÍRICO EM < 60 MINUTOS:\n\nAlto risco:\n• Piperacilina/Tazobactam 4,5g IV 6/6h (1ª linha)\n• OU Meropenem 1g IV 8/8h (se instável ou resistência)\n• + Vancomicina se: mucosite grave, infecção de cateter, celulite, instabilidade, MRSA\n\nBaixo risco (MASCC ≥ 21):\n• Amoxicilina/Clavulanato 500 mg VO 8/8h + Ciprofloxacino 500 mg VO 12/12h (ambulatorial)\n\nAntifúngico empírico: Caspofungina ou Voriconazol se febre persistente > 4-7 dias apesar de ATB." },
      { id: "followup", title: "Acompanhamento", content: "Reavaliar em 48-72h com culturas. Se afebril + culturas negativas + recuperação de neutrófilos: descalonar. G-CSF: considerar se alto risco de complicações. Profilaxia antifúngica em transplantados." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Pipe/Tazo 4,5g IV 6/6h OU Meropenem 1g IV 8/8h. Vancomicina 15-20 mg/kg IV 8/8h (se indicado). Caspofungina 70 mg IV D1 → 50 mg/dia (antifúngico). G-CSF 5 mcg/kg/dia SC (se alto risco)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Hemoculturas 2 pares (periférica + cateter)\n2. Pipe/Tazo 4,5g IV 6/6h (ou Meropenem 1g IV 8/8h)\n3. Se indicação: Vancomicina 1g IV 8/8h\n4. Monitorização contínua\n5. Se febre > 4 dias: antifúngico empírico\n6. G-CSF se alto risco\n7. Reavaliar ATB em 48-72h" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Freifeld AG et al. IDSA Febrile Neutropenia Guidelines. Clin Infect Dis 2011.\n2. Taplitz RA et al. ASCO/IDSA Update 2018.\n3. NCCN Guidelines Infection Prevention 2024." }
    ]
  }
];
