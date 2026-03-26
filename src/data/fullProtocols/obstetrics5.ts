import type { FullProtocol } from "./types";

export const obstetricsFullProtocols5: FullProtocol[] = [
  {
    id: "fp-abortamento",
    title: "Abortamento — Manejo na Emergência",
    categoryId: "obstetrics",
    category: "Obstetrícia",
    tags: ["abortamento", "aborto", "sangramento", "primeiro trimestre", "misoprostol"],
    sections: [
      { id: "intro", title: "Introdução", content: "Abortamento é a interrupção da gestação antes de 20-22 semanas ou com peso fetal <500g. É a emergência gineco-obstétrica mais comum no primeiro trimestre. O manejo segue as normas do MS (Atenção Humanizada ao Abortamento — 2011) e FEBRASGO." },
      { id: "def", title: "Definição", content: "Classificação: ameaça de abortamento (colo fechado, sangramento, BCF+), inevitável (colo aberto, membranas íntegras), incompleto (colo aberto, restos), completo (colo fechado, útero vazio), retido (óbito embrionário, colo fechado), infectado (febre, secreção purulenta). Habitual: ≥3 consecutivos." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Sangramento vaginal no 1º trimestre + dor pélvica. Avaliar: quantidade do sangramento, sinais vitais, estabilidade hemodinâmica. USG TV: saco gestacional, embrião, BCF, restos ovulares. β-hCG seriado se dúvida diagnóstica." },
      { id: "etiology", title: "Etiologia", content: "Anomalias cromossômicas (50-60% dos abortamentos espontâneos do 1º trimestre), malformações uterinas, incompetência cervical, trombofilias, síndrome antifosfolipídeo, infecções, endocrinopatias (DM, tireoide), idade materna avançada." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sangramento vaginal de volume variável, cólicas em baixo ventre, eliminação de material. Sinais de gravidade: hipotensão, taquicardia, febre (abortamento infectado), peritonite. Toque vaginal: avaliar dilatação cervical e presença de restos no canal." },
      { id: "diagnosis", title: "Diagnóstico", content: "USG TV: saco gestacional ≥25mm sem embrião (ovo anembrionado), embrião ≥7mm sem BCF (óbito embrionário), restos ovulares (incompleto). β-hCG <1000 UI/L com útero vazio sugere gestação muito inicial ou ectópica. Hemograma, tipagem sanguínea (Rh), coagulograma." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Gravidez ectópica (principal DD — excluir sempre), doença trofoblástica gestacional (mola), sangramento de implantação, patologia cervical (pólipo, ectopia, neoplasia), sangramento uretral ou retal." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Avaliar estabilidade hemodinâmica (ABC); 2. Acesso venoso calibroso se sangramento ativo; 3. Tipagem sanguínea + Rh (imunoglobulina anti-D se Rh negativo); 4. USG TV; 5. Classificar tipo de abortamento; 6. Se infectado: ATB + esvaziamento urgente." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Ameaça: repouso relativo, analgesia, acompanhamento. Inevitável/Incompleto <12sem: AMIU (aspiração manual intrauterina — método preferencial MS) ou Misoprostol 800mcg vaginal. Incompleto >12sem: Misoprostol + curetagem se necessário. Retido: Misoprostol 800mcg vaginal (pode repetir em 24h) ou AMIU (<12sem). Infectado: Clindamicina 900mg EV 8/8h + Gentamicina 5mg/kg/dia EV + esvaziamento uterino urgente." },
      { id: "prescriptions", title: "Prescrições", content: "1. Misoprostol 800mcg via vaginal (dose única, pode repetir em 24h); 2. Analgesia: Dipirona 1g EV + Tramadol 100mg EV se dor intensa; 3. Imunoglobulina anti-D 300mcg IM (se Rh negativo); 4. ATB se infectado: Clindamicina 900mg EV 8/8h + Gentamicina 240mg EV 1x/dia; 5. Ocitocina 20UI em 500mL SF EV se sangramento pós-esvaziamento; 6. SF 0,9% para hidratação." },
      { id: "followup", title: "Acompanhamento", content: "β-hCG seriado até negativação. USG controle em 7-14 dias. Apoio psicológico. Contracepção pós-abortamento (pode iniciar imediatamente). Investigação de causas se abortamento habitual (≥3)." },
      { id: "complications", title: "Complicações", content: "Hemorragia grave com choque, abortamento infectado/séptico, perfuração uterina (durante esvaziamento), sinéquias intrauterinas (Síndrome de Asherman), CIVD, infertilidade." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: completo confirmado por USG, estável, sem sinais de infecção. Internação: incompleto para esvaziamento, infectado, sangramento volumoso. UTI: choque séptico, hemorragia maciça, CIVD." },
      { id: "references", title: "Referências Bibliográficas", content: "Ministério da Saúde — Atenção Humanizada ao Abortamento (2011). FEBRASGO — Abortamento Espontâneo. NICE Guideline — Ectopic Pregnancy and Miscarriage 2021. WHO — Medical Management of Pregnancy Loss 2018." }
    ]
  },
  {
    id: "fp-trabalho-parto-prematuro",
    title: "Trabalho de Parto Prematuro",
    categoryId: "obstetrics",
    category: "Obstetrícia",
    tags: ["tpp", "prematuro", "tocólise", "corticoide", "nifedipina"],
    sections: [
      { id: "intro", title: "Introdução", content: "O trabalho de parto prematuro (TPP) é definido como contrações uterinas regulares com modificação cervical entre 20-36+6 semanas. A prematuridade é a principal causa de morbimortalidade neonatal no Brasil. Diretriz FEBRASGO e MS." },
      { id: "def", title: "Definição", content: "Contrações uterinas regulares (≥4 em 20min ou ≥8 em 60min) + dilatação cervical ≥1cm ou esvaecimento ≥80% entre 20 e 36+6 semanas. Parto prematuro: <37 semanas. Classificação: extremo (<28sem), muito prematuro (28-31+6), moderado (32-33+6), tardio (34-36+6)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Fatores de risco: parto prematuro anterior (principal), gestação múltipla, colo curto (<25mm na USG TV), infecções (ITU, vaginose), polidrâmnio, incompetência cervical, tabagismo, baixo peso. Fibronectina fetal: valor preditivo negativo >95%." },
      { id: "etiology", title: "Etiologia", content: "Multifatorial: infecções ascendentes (vaginose, corioamnionite), isquemia uteroplacentária, sobredistensão uterina (gemelar, polidrâmnio), incompetência cervical, estresse, causas iatrogênicas." },
      { id: "clinical", title: "Apresentação Clínica", content: "Contrações regulares e dolorosas, pressão pélvica, dor lombar, sangramento vaginal discreto, perda de tampão mucoso. Toque vaginal: avaliar dilatação e esvaecimento. Descartar rotura prematura de membranas (RPM)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico: contrações + modificação cervical. Complementar: USG TV com medida do colo (<25mm = risco), fibronectina fetal (swab vaginal — se negativa, risco <1% em 7 dias). Descartar: RPM (teste de cristalização, pH vaginal), ITU (EAS + urocultura), infecção (hemograma, PCR)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Contrações de Braxton-Hicks (falso trabalho de parto), RPM, DPP, infecção urinária, gastroenterite, apendicite, cólica renal." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Confirmar IG e viabilidade fetal; 2. Monitorização fetal (CTG); 3. Toque vaginal (se não houver RPM); 4. Coletar EAS, urocultura, hemograma; 5. Se TPP confirmado 24-34sem: corticoide + tocólise; 6. Sulfato de magnésio se <32sem (neuroproteção)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Corticoterapia (24-34 semanas): Betametasona 12mg IM 24/24h — 2 doses (ou Dexametasona 6mg IM 12/12h — 4 doses). Tocólise (ganhar 48h para corticoide): Nifedipina 20mg VO (ataque) → 20mg VO 30min se mantém contrações → 20mg VO 8/8h (manutenção) — primeira escolha FEBRASGO. Alternativa: Atosiban EV. Neuroproteção (<32sem): MgSO4 4g EV em 20-30min → 1g/h EV por 24h." },
      { id: "prescriptions", title: "Prescrições", content: "1. Betametasona 12mg IM — 2 doses com intervalo de 24h; 2. Nifedipina 20mg VO (dose ataque), repetir 20mg em 30min se necessário; 3. Nifedipina 20mg VO 8/8h (manutenção 48h); 4. MgSO4 50% — 8mL (4g) + 92mL SF EV em 20-30min → 2mL/h (1g/h) manutenção (se <32sem); 5. Hidratação: SF 0,9% 500mL EV lento; 6. Profilaxia GBS se indicada: Penicilina G 5 milhões UI EV ataque → 2,5 milhões UI EV 4/4h." },
      { id: "followup", title: "Acompanhamento", content: "CTG diária, vigilância de sinais de corioamnionite (febre, taquicardia fetal, leucocitose). Repouso relativo. USG seriada (crescimento, líquido amniótico). Alta se contrações cessarem e colo estável. Pré-natal de alto risco." },
      { id: "complications", title: "Complicações", content: "Prematuridade neonatal (SDR, hemorragia intraventricular, enterocolite), corioamnionite, RPM, DPP, efeitos colaterais do MgSO4 (depressão respiratória — monitorar reflexo patelar e FR)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: TPP confirmado para tocólise e corticoide. UTI: corioamnionite com sepse, intoxicação por MgSO4. Alta: contrações cessaram, corticoide completo, colo estável, sem sinais de infecção." },
      { id: "references", title: "Referências Bibliográficas", content: "FEBRASGO — Protocolo de Trabalho de Parto Prematuro 2021. MS — Gestação de Alto Risco. ACOG Practice Bulletin — Preterm Labor 2016. Sociedade Brasileira de Pediatria — Prematuridade." }
    ]
  }
];
