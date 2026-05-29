import type { EmergencyProtocol } from "./types";

export const samuMissingBatch4Protocols: EmergencyProtocol[] = [
  {
    id: "uti-delirium-cam-icu-icdsc",
    title: "Delirium em UTI — CAM-ICU / ICDSC",
    categoryId: "other-emergencies",
    tags: [
      "delirium",
      "uti",
      "cam-icu",
      "icdsc",
      "padis",
      "abcDEF",
      "sedação",
      "agitação",
      "dexmedetomidina",
      "mobilização precoce"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Delirium é uma disfunção cerebral aguda frequente em pacientes críticos, associada a pior evolução clínica, maior tempo de ventilação mecânica, maior tempo de internação e risco de declínio cognitivo após alta. Na UTI, a conduta deve combinar rastreio sistemático, correção de causas precipitantes, otimização da sedação, sono, analgesia, mobilização e medidas ambientais."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Delirium é alteração aguda e flutuante da atenção, consciência e cognição, não explicada apenas por demência prévia. Pode ser hiperativo, hipoativo ou misto. A forma hipoativa é comum e frequentemente subdiagnosticada se não houver rastreio estruturado."
      },
      {
        id: "rastreio",
        title: "Rastreamento",
        content:
          "Rastrear pelo menos uma vez por turno e sempre que houver mudança neurológica. Usar CAM-ICU ou ICDSC conforme treinamento da equipe. Antes do CAM-ICU, avaliar nível de sedação com RASS: em sedação profunda, o teste pode não ser interpretável. Documentar RASS, dor, uso de sedativos, sono, contenções, ventilação, infecção, hipoxemia, distúrbios metabólicos e abstinência."
      },
      {
        id: "fatores-risco",
        title: "Fatores de Risco e Causas Reversíveis",
        content:
          "Fatores comuns: idade avançada, fragilidade, demência, sepse, hipóxia, choque, dor, privação de sono, imobilidade, benzodiazepínicos, anticolinérgicos, abstinência alcoólica/sedativos, distúrbios de sódio, cálcio, glicose, uremia, insuficiência hepática, retenção urinária, constipação, contenção física e ambiente sem orientação temporal."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Confirmar segurança do paciente e equipe.\n\n2. Avaliar dor, hipóxia, hipoglicemia, sepse, choque, distúrbios metabólicos, abstinência, retenção urinária, fecaloma, privação de sono e efeitos de medicamentos.\n\n3. Reduzir sedação ao menor nível compatível com segurança; preferir estratégias analgosedativas e evitar benzodiazepínicos quando possível, exceto indicações específicas como abstinência.\n\n4. Implementar bundle ABCDEF: analgesia adequada, despertar diário quando apropriado, teste de respiração espontânea quando elegível, escolha racional de sedativos, rastreio/tratamento de delirium, mobilização precoce e participação da família.\n\n5. Reorientar frequentemente, permitir óculos/aparelhos auditivos, regular ciclo sono-vigília, reduzir ruído noturno, evitar contenções desnecessárias e estimular mobilização.\n\n6. Antipsicóticos não devem ser usados rotineiramente para prevenir delirium; podem ser considerados por curto período se agitação grave ameaçar segurança ou tratamento essencial, após corrigir causas reversíveis.\n\n7. Se agitação impede extubação ou segurança, considerar estratégia sedativa individualizada e discussão com intensivista."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Delirium hipoativo pode parecer 'paciente tranquilo'. Novo déficit focal, cefaleia súbita, convulsão, trauma ou anticoagulação exigem investigação neurológica específica. Corrigir causa é mais importante que sedar sintomas. Contenção física pode piorar delirium e deve ser medida excepcional, documentada e reavaliada."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Society of Critical Care Medicine. 2018 PADIS Guidelines: Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility and Sleep Disruption in Adult ICU Patients. Disponível em: https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-prevention-and-management-of-pa\n\nSociety of Critical Care Medicine. 2025 Focused Update to the PADIS Guideline. Disponível em: https://www.sccm.org/clinical-resources/guidelines/guidelines/focused-update-padis-guideline\n\nVanderbilt University Medical Center. CAM-ICU. Disponível em: https://www.icudelirium.org/medical-professionals/delirium/monitoring-delirium-in-the-icu"
      }
    ]
  },
  {
    id: "uti-desmame-ventilacao-mecanica-sat-sbt-tre",
    title: "Desmame da Ventilação Mecânica — SAT / SBT / TRE",
    categoryId: "procedures",
    tags: [
      "desmame ventilatório",
      "ventilação mecânica",
      "sbt",
      "tre",
      "sat",
      "teste de respiração espontânea",
      "extubação",
      "cuff leak",
      "vni pós-extubação",
      "uti"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "A liberação da ventilação mecânica deve ser avaliada diariamente. Protocolos de despertar, redução de sedação e teste de respiração espontânea reduzem atrasos de extubação e ajudam a identificar pacientes aptos para respirar sem suporte invasivo."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Desmame é o processo de retirada progressiva ou protocolizada do suporte ventilatório. SAT é o teste de despertar espontâneo, SBT/TRE é o teste de respiração espontânea, e extubação é a retirada do tubo após critérios clínicos e teste favorável."
      },
      {
        id: "elegibilidade",
        title: "Critérios para Avaliar SBT/TRE",
        content:
          "Considerar teste diário se: causa da intubação está melhorando, oxigenação aceitável com FiO2/PEEP baixos ou moderados, estabilidade hemodinâmica sem choque não controlado, ausência de arritmia instável, drive respiratório presente, sedação leve ou desperta, temperatura controlada, pH aceitável e capacidade de proteção de via aérea avaliada."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Fazer triagem diária de prontidão para desmame.\n\n2. Reduzir sedação e realizar SAT quando seguro.\n\n3. Se SAT favorável e critérios preenchidos, iniciar SBT/TRE com T-piece, pressão de suporte baixa ou CPAP conforme protocolo da unidade.\n\n4. Monitorar por 30–120 minutos: frequência respiratória, volume corrente, SpO2, pressão arterial, frequência cardíaca, esforço respiratório, sudorese, agitação, padrão ventilatório e gasometria quando necessário.\n\n5. Falha no teste: retornar suporte confortável, tratar causa da falha e reavaliar no dia seguinte.\n\n6. Sucesso no teste: avaliar proteção de via aérea, tosse, secreções, nível de consciência, risco de estridor e plano de suporte pós-extubação.\n\n7. Considerar teste de vazamento do cuff em pacientes com risco de edema laríngeo.\n\n8. Considerar VNI ou cânula nasal de alto fluxo pós-extubação em alto risco de falha, conforme perfil clínico e protocolo."
      },
      {
        id: "falha",
        title: "Critérios de Falha no SBT/TRE",
        content:
          "Interromper se houver dessaturação persistente, taquipneia importante, esforço respiratório crescente, uso intenso de musculatura acessória, instabilidade hemodinâmica, arritmia, alteração do nível de consciência, agitação intensa, sudorese, acidose progressiva ou sinais de exaustão."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Sucesso no SBT não garante extubação segura se houver tosse ineficaz, secreção abundante, rebaixamento, edema de via aérea ou alto risco de aspiração. Falhas repetidas exigem busca ativa de causas: congestão/IC, fraqueza, delirium, excesso de sedação, infecção, broncoespasmo, dor, distúrbios eletrolíticos e desnutrição."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "American Thoracic Society / American College of Chest Physicians. Liberation from Mechanical Ventilation in Critically Ill Adults: Official Clinical Practice Guideline. 2017. Disponível em: https://www.thoracic.org/statements/resources/cc/weaning-exec-summary.pdf\n\nAmerican Association for Respiratory Care. Spontaneous Breathing Trials for Liberation From Adult Mechanical Ventilation: Clinical Practice Guideline. 2024. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC11285503/"
      }
    ]
  },
  {
    id: "emergencia-fibrilacao-atrial-aguda",
    title: "Fibrilação Atrial Aguda — FC, Ritmo e Anticoagulação",
    categoryId: "cardiovascular",
    tags: [
      "fibrilação atrial",
      "fa aguda",
      "taquiarritmia",
      "controle de frequência",
      "controle de ritmo",
      "cardioversão",
      "anticoagulação",
      "cha2ds2-vasc",
      "doac",
      "acls"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Fibrilação atrial é arritmia supraventricular comum na emergência. A abordagem inicial deve definir se há instabilidade hemodinâmica, controlar frequência ou ritmo conforme contexto, investigar gatilhos e avaliar risco tromboembólico e necessidade de anticoagulação."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Ritmo irregularmente irregular, sem ondas P organizadas, com atividade atrial desordenada. Pode ser primeira detecção, paroxística, persistente ou permanente. Na emergência, a prioridade é distinguir FA instável, FA com resposta ventricular rápida e FA secundária a doença aguda."
      },
      {
        id: "instabilidade",
        title: "Instabilidade Hemodinâmica",
        content:
          "Sinais de instabilidade: hipotensão, choque, edema agudo de pulmão, isquemia miocárdica, síncope, alteração do nível de consciência, dor torácica persistente ou hipoperfusão atribuível à arritmia. Nesses casos, considerar cardioversão elétrica sincronizada imediata, com sedação quando possível sem atrasar tratamento."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Avaliar ABCDE, sinais vitais, perfusão, dor torácica, congestão, hipóxia e tempo de início.\n\n2. Realizar ECG de 12 derivações, monitorização, acesso venoso e exames conforme cenário: eletrólitos, função renal, magnésio, troponina se SCA suspeita, TSH em contexto apropriado, gasometria se grave.\n\n3. Tratar gatilhos: sepse, hipóxia, TEP, IAM, IC, tireotoxicose, álcool, dor, anemia, hipovolemia, distúrbios de potássio/magnésio.\n\n4. Se instável: cardioversão elétrica sincronizada.\n\n5. Se estável com resposta ventricular rápida: controle de frequência com betabloqueador ou bloqueador de canal de cálcio não diidropiridínico, se não houver contraindicação. Em IC com fração reduzida/descompensada, hipotensão ou choque, individualizar; amiodarona ou digoxina podem ser consideradas conforme contexto.\n\n6. Controle de ritmo/cardioversão farmacológica ou elétrica em estáveis deve considerar duração da FA, anticoagulação prévia, risco tromboembólico, ecocardiograma transesofágico quando aplicável e contraindicações.\n\n7. Avaliar anticoagulação pelo risco tromboembólico e sangramento, preferindo DOACs na maioria dos pacientes elegíveis."
      },
      {
        id: "anticoagulacao",
        title: "Anticoagulação",
        content:
          "Usar CHA2DS2-VASc para risco tromboembólico e avaliar sangramento, função renal, interações, valvopatia, gestação e contraindicações. Para FA com duração ≥48 horas ou duração desconhecida, cardioversão eletiva geralmente exige anticoagulação adequada antes/depois ou estratégia guiada por imagem, exceto instabilidade com necessidade de cardioversão imediata."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não usar verapamil/diltiazem em choque, hipotensão importante ou IC sistólica descompensada. Sempre procurar WPW/preexcitação; nesses casos, evitar bloqueadores nodais isolados. FA em sepse ou doença crítica pode ser marcador de gravidade e exige tratar a causa de base."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "ACC/AHA/ACCP/HRS. 2023 Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. Disponível em: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193\n\nEuropean Society of Cardiology. 2024 ESC Guidelines for the management of atrial fibrillation. Disponível em: https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/atrial-fibrillation/"
      }
    ]
  },
  {
    id: "emergencia-hipernatremia-grave-correcao-segura",
    title: "Hipernatremia Grave — Correção Segura",
    categoryId: "metabolic",
    tags: [
      "hipernatremia",
      "sódio",
      "Na",
      "água livre",
      "diabetes insipidus",
      "desidratação",
      "osmolaridade",
      "correção segura",
      "hipernatremia grave",
      "eletrólitos"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Hipernatremia reflete déficit de água em relação ao sódio corporal e pode causar letargia, fraqueza, irritabilidade, convulsões, coma e morte. A emergência deve reconhecer gravidade, corrigir choque inicialmente, estimar cronicidade e repor água de forma controlada."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Sódio sérico acima de 145 mmol/L. É considerada grave em valores muito elevados, sintomas neurológicos ou contexto de desidratação importante, diabetes insipidus, perdas gastrointestinais, febre, queimaduras, diurese osmótica, incapacidade de acesso à água ou iatrogenia."
      },
      {
        id: "avaliacao",
        title: "Avaliação Inicial",
        content:
          "Avaliar ABCDE, estado volêmico, pressão arterial, perfusão, nível de consciência, diurese, glicemia, temperatura, medicações, perdas, acesso à água, doença renal e dados laboratoriais. Solicitar sódio seriado, osmolaridade sérica, glicose, ureia/creatinina, potássio, urina, osmolaridade urinária e sódio urinário conforme disponibilidade."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Se choque ou hipoperfusão: restaurar perfusão inicialmente com cristaloide isotônico, independentemente do sódio, e depois planejar correção da água livre.\n\n2. Estimar se hipernatremia é aguda (<48h) ou crônica/desconhecida.\n\n3. Calcular déficit de água e somar perdas contínuas/insensíveis.\n\n4. Escolher fluido conforme volume e causa: água enteral, SG5%, solução hipotônica ou isotônica inicialmente se hipovolemia.\n\n5. Monitorar sódio a cada 2–4 horas em casos graves/agudos ou durante correção inicial, ajustando taxa conforme resposta.\n\n6. Tratar causa: perdas digestivas, febre, hiperglicemia, diuréticos, diabetes insipidus central/nefrógeno, restrição de acesso à água ou excesso de sódio.\n\n7. Considerar desmopressina em diabetes insipidus central, após avaliação clínica/laboratorial."
      },
      {
        id: "metas",
        title: "Metas de Correção",
        content:
          "Em hipernatremia crônica ou de duração desconhecida, usar correção gradual, frequentemente com alvo máximo aproximado de 10–12 mmol/L em 24 horas, individualizando por risco e resposta. Hipernatremia aguda pode permitir correção mais rápida em contexto monitorizado. Evitar tanto correção insuficiente persistente quanto correção excessiva sem vigilância."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Hipernatremia em idosos, acamados, lactentes ou pacientes com alteração de consciência costuma indicar vulnerabilidade e alto risco. Glicemia elevada altera interpretação do sódio. Déficit calculado é estimativa; a prescrição deve ser ajustada por sódio seriado e balanço hídrico."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Yun G, Baek SH. Evaluation and management of hypernatremia in adults: clinical perspectives. 2023. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC10175862/\n\nFeigin E, et al. Rate of Correction and All-Cause Mortality in Patients With Severe Hypernatremia. JAMA Network Open. 2023. Disponível em: https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2809955"
      }
    ]
  },
  {
    id: "emergencia-hipocalemia-sintomatica-reposicao-ev",
    title: "Hipocalemia Sintomática — Reposição EV",
    categoryId: "metabolic",
    tags: [
      "hipocalemia",
      "potássio",
      "K",
      "reposição de potássio",
      "KCl",
      "arritmia",
      "fraqueza",
      "paralisia",
      "hipomagnesemia",
      "eletrólitos"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Hipocalemia pode causar fraqueza, rabdomiólise, íleo, arritmias, alteração de ECG, paralisia e parada cardíaca. A reposição deve considerar gravidade, sintomas, ECG, função renal, magnésio e via disponível."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Potássio sérico abaixo de 3,5 mmol/L. Hipocalemia grave geralmente é <2,5 mmol/L ou qualquer valor associado a arritmia, fraqueza importante, paralisia, alteração de ECG, rabdomiólise ou uso de digitálico."
      },
      {
        id: "avaliacao",
        title: "Avaliação Inicial",
        content:
          "Avaliar sintomas, força muscular, reflexos, ECG, uso de diuréticos/laxantes, vômitos/diarreia, alcalose, insulina, beta-agonistas, anfotericina, corticoides, hiperaldosteronismo, distúrbios tubulares e ingesta. Solicitar magnésio, função renal, gasometria quando indicado, glicose e potássio urinário conforme investigação."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Monitorizar ECG em hipocalemia grave, sintomas, alteração de ECG, cardiopatia, uso de digoxina ou reposição EV rápida.\n\n2. Preferir reposição oral quando paciente estável, assintomático ou leve/moderado sem alterações graves.\n\n3. Usar reposição EV quando hipocalemia grave, sintomas importantes, arritmia, ECG alterado, incapacidade de via oral ou urgência clínica.\n\n4. Corrigir hipomagnesemia concomitante, pois ela dificulta correção do potássio e aumenta risco de arritmia.\n\n5. Evitar soluções glicosadas quando possível, pois estímulo de insulina pode piorar hipocalemia.\n\n6. Ajustar dose à função renal e monitorar potássio seriado.\n\n7. Tratar causa de base e suspender perdas/medicações quando possível."
      },
      {
        id: "reposicao",
        title: "Reposição EV — Segurança",
        content:
          "Usar KCl diluído, com concentração e velocidade conforme protocolo institucional e tipo de acesso. Reposições mais rápidas exigem monitorização cardíaca e acesso adequado. Nunca administrar KCl em bolus direto. Em insuficiência renal ou oligúria, repor com extrema cautela e reavaliar frequentemente."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Alterações de ECG podem incluir achatamento de onda T, depressão de ST, onda U, prolongamento aparente de QT, extrassístoles e taquiarritmias. Hipocalemia com digoxina aumenta risco de toxicidade. Paralisia periódica hipocalêmica e tireotoxicose exigem estratégia específica."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Kardalas E, et al. Hypokalemia: a clinical update. Endocrine Connections. 2018. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC5881435/\n\nPalmer BF, Clegg DJ. Physiology and pathophysiology of potassium homeostasis. Advances in Physiology Education. Disponível em: https://journals.physiology.org/doi/full/10.1152/advan.00121.2016"
      }
    ]
  },
  {
    id: "emergencia-hipotermia-acidental-reaquecimento",
    title: "Hipotermia Acidental — Reaquecimento e Ressuscitação",
    categoryId: "resuscitation",
    tags: [
      "hipotermia",
      "hipotermia acidental",
      "reaquecimento",
      "wilderness",
      "afterdrop",
      "parada cardíaca hipotérmica",
      "ecmo",
      "temperatura",
      "ressuscitação",
      "exposição ao frio"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Hipotermia acidental é queda não intencional da temperatura corporal central, podendo causar arritmias, alteração neurológica, coagulopatia, acidose e parada cardíaca. O manejo envolve manuseio cuidadoso, prevenção de perda adicional de calor, reaquecimento apropriado e ressuscitação prolongada quando indicada."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Temperatura central abaixo de 35 °C. Pode ser leve, moderada ou grave, com classificação prática baseada em consciência, tremores, sinais vitais, instabilidade e presença de parada cardíaca."
      },
      {
        id: "avaliacao",
        title: "Avaliação Inicial",
        content:
          "Avaliar segurança da cena, exposição ao frio, tempo de imersão, trauma, intoxicação, hipoglicemia, sepse, endocrinopatias e comorbidades. Medir temperatura central com método apropriado quando disponível. Verificar pulso e respiração por tempo suficiente, pois podem estar muito lentos."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Remover do ambiente frio e proteger contra perda adicional de calor.\n\n2. Manusear suavemente para reduzir risco de arritmias.\n\n3. Retirar roupas molhadas, secar e isolar termicamente.\n\n4. Avaliar ABCDE, glicemia, ECG, eletrólitos, gasometria, lactato, trauma e causas associadas.\n\n5. Hipotermia leve com tremores e consciência preservada: reaquecimento passivo, ambiente aquecido, roupas/cobertores e bebidas quentes se seguro.\n\n6. Hipotermia moderada/grave ou alteração de consciência: reaquecimento ativo externo, fluidos aquecidos, oxigênio aquecido/umidificado quando disponível e monitorização.\n\n7. Instabilidade, arritmias graves ou parada cardíaca: acionar centro com ECMO/circulação extracorpórea quando disponível.\n\n8. Em PCR hipotérmica, iniciar RCP, desfibrilar conforme protocolo e considerar que a ressuscitação pode ser prolongada até reaquecimento adequado."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Evitar movimentos bruscos, reaquecimento agressivo periférico isolado em casos graves e declarar óbito precocemente sem considerar hipotermia. Hipoglicemia, intoxicação e trauma são comuns e devem ser investigados. Paciente frio pode parecer morto; avaliar cuidadosamente."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Wilderness Medical Society. Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia: 2019 Update. Disponível em: https://pubmed.ncbi.nlm.nih.gov/31740369/\n\nWilderness Medical Society. Hypothermia Clinical Practice Guideline summary. Disponível em: https://wms.org/magazine/magazine/1260/2020hypothermia-CPG/default.aspx"
      }
    ]
  }
];
