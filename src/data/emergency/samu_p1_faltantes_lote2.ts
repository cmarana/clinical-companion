import type { EmergencyProtocol } from "./types";
import { SAMU_REFERENCE, SAMU_REFERENCE_TEXT } from "./samuReference";

export const samuP1MissingBatch1Protocols: EmergencyProtocol[] = [
  {
    id: "samu-acidente-ofidico",
    title: "Acidente Ofídico — Bothrops, Crotalus, Lachesis e Micrurus",
    categoryId: "intoxication",
    samuCodes: ["BTox1", "ATox1"],
    samuLevel: ["SBV", "SAV"],
    samuSource: SAMU_REFERENCE,
    tags: [
      "samu",
      "samu192",
      "btox1",
      "atox1",
      "acidente ofídico",
      "serpente",
      "cobra",
      "bothrops",
      "crotalus",
      "lachesis",
      "micrurus",
      "soro antiofídico",
      "animais peçonhentos",
      "ciatox"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Acidente ofídico é emergência tempo-dependente causada por mordedura de serpente peçonhenta. A prioridade inicial é reconhecer gravidade, evitar medidas prejudiciais, controlar dor e sangramento, monitorizar complicações e encaminhar rapidamente para serviço com soro antiveneno apropriado."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Quadro clínico decorrente da inoculação de veneno por serpentes. No Brasil, os principais grupos de importância médica são Bothrops, Crotalus, Lachesis e Micrurus. A identificação sindrômica deve considerar manifestações locais, neurológicas, hemorrágicas, miotóxicas, vagais e sistêmicas."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em paciente com história de mordedura, dor local, edema progressivo, equimose, sangramento, bolhas, parestesias, ptose palpebral, diplopia, mialgia, urina escura, náuseas, vômitos, sudorese, hipotensão ou choque.\n\nNão é necessário capturar ou transportar a serpente. Se houver foto segura, pode ajudar a identificação, mas a conduta não deve atrasar por esse motivo."
      },
      {
        id: "gravidade",
        title: "Sinais de Gravidade",
        content:
          "Sinais de gravidade incluem edema extenso ou rapidamente progressivo, sangramento sistêmico, alteração de coagulação, hipotensão, choque, manifestações neurológicas, insuficiência respiratória, rabdomiólise, urina escura, oligúria, dor intensa desproporcional, sinais de síndrome compartimental ou deterioração clínica."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE e sinais vitais.\n\n2. Remover anéis, pulseiras, calçados apertados ou objetos constritivos do membro acometido.\n\n3. Manter o paciente em repouso e o membro em posição funcional, sem compressão.\n\n4. Lavar local apenas com água e sabão quando possível.\n\n5. Não realizar torniquete, garrote, corte, sucção, aplicação de substâncias, gelo direto ou cauterização.\n\n6. Controlar dor com analgesia adequada.\n\n7. Obter acesso venoso, monitorizar e tratar choque conforme protocolo.\n\n8. Avaliar necessidade de exames: hemograma, coagulograma, fibrinogênio se disponível, função renal, eletrólitos, CK, urina, gasometria/lactato conforme gravidade.\n\n9. Acionar CIATox/regulação e encaminhar para unidade com soro antiveneno específico.\n\n10. Soroterapia deve seguir protocolo oficial/local conforme gênero provável e gravidade. Não atrasar transferência quando o serviço atual não possuir soro."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "O tratamento definitivo é a administração de soro antiveneno específico, em ambiente capaz de monitorar e tratar reações infusionais. A escolha do soro e a quantidade de ampolas dependem do tipo de acidente e da gravidade. Em caso de dúvida, discutir com CIATox, centro de referência ou regulação médica.\n\nMedidas de suporte incluem analgesia, hidratação quando indicada, manejo de sangramento, tratamento de choque, vigilância de rabdomiólise/lesão renal aguda e atualização vacinal antitetânica conforme situação."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Antibiótico profilático não é rotina em todo acidente ofídico; considerar conforme sinais de infecção, necrose, manipulação inadequada da ferida ou orientação especializada. Fasciotomia não deve ser indicada apenas por edema; suspeita de síndrome compartimental exige avaliação especializada. Reação ao soro deve ser tratada prontamente sem abandonar o objetivo de neutralização do veneno."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          `${SAMU_REFERENCE_TEXT}\n\nMinistério da Saúde. Acidentes ofídicos e animais peçonhentos. Disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos/acidentes-ofidicos\n\nMinistério da Saúde. Guia de Vigilância em Saúde — Volume 3. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6ed_v3.pdf`
      }
    ]
  },
  {
    id: "samu-afogamento",
    title: "Afogamento — Suporte Inicial e Emergência Aquática",
    categoryId: "resuscitation",
    samuCodes: ["BC24", "AC34"],
    samuLevel: ["SBV", "SAV"],
    samuSource: SAMU_REFERENCE,
    tags: [
      "samu",
      "samu192",
      "bc24",
      "ac34",
      "afogamento",
      "sobrasa",
      "hipóxia",
      "resgate aquático",
      "ventilação",
      "rcp"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Afogamento é processo de insuficiência respiratória causado por submersão ou imersão em líquido. A hipóxia é o principal mecanismo de deterioração. A prioridade é segurança da equipe, retirada segura da vítima, ventilação efetiva e reconhecimento precoce de parada respiratória ou cardiorrespiratória."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Afogamento ocorre quando há comprometimento respiratório por imersão/submersão. Pode evoluir com tosse, hipoxemia, alteração neurológica, edema pulmonar, parada respiratória e PCR. Termos como quase-afogamento não devem guiar a gravidade; a avaliação clínica atual é decisiva."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em todo paciente retirado da água ou encontrado após imersão/submersão com tosse, dispneia, cianose, rebaixamento de consciência, vômitos, fadiga, hipotermia, espuma em vias aéreas, saturação baixa ou parada cardiorrespiratória."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Garantir segurança da cena e não transformar o socorrista em nova vítima.\n\n2. Acionar resgate/SAMU e retirar a vítima da água com técnica segura.\n\n3. Avaliar responsividade, respiração e pulso.\n\n4. Se respiração inadequada, iniciar ventilações de resgate e suporte ventilatório com oxigênio.\n\n5. Se ausência de pulso ou sinais de vida, iniciar RCP conforme protocolo.\n\n6. Aspirar secreções apenas se impedirem ventilação efetiva; não atrasar ventilações por aspiração prolongada.\n\n7. Remover roupas molhadas, prevenir hipotermia e monitorizar temperatura.\n\n8. Avaliar trauma associado, especialmente em mergulho, queda, colisão ou mecanismo desconhecido.\n\n9. Transportar para avaliação hospitalar se houver sintomas respiratórios, alteração neurológica, hipóxia, necessidade de RCP, comorbidades, hipotermia ou exposição prolongada."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "A ventilação e oxigenação são centrais. Ofertar oxigênio suplementar conforme necessidade, considerar ventilação com bolsa-válvula-máscara se ventilação inadequada e via aérea avançada em casos de coma, falha ventilatória ou PCR. Tratar broncoespasmo, hipotermia e choque conforme achados clínicos. Antibiótico profilático e corticoide não são rotina apenas por aspiração de água."
      },
      {
        id: "acompanhamento",
        title: "Acompanhamento",
        content:
          "Reavaliar frequentemente padrão respiratório, SpO2, ausculta pulmonar, nível de consciência, temperatura e sinais de fadiga. Pacientes inicialmente bem podem piorar; manter observação conforme gravidade, protocolo local e disponibilidade de recursos."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          `${SAMU_REFERENCE_TEXT}\n\nSOBRASA. Recomendações em Prevenção, Resgate e Mitigação em Afogamento. Disponível em: https://sobrasa.org/recomendacoes/\n\nSOBRASA. Afogamento — atualização AHA e ILCOR 2025. Disponível em: https://sobrasa.org/afogamento-atualizacao-aha-e-ilcor-2025/\n\nAmerican Heart Association. 2025 CPR & ECC Guidelines — Algorithms. Disponível em: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/algorithms`
      }
    ]
  },
  {
    id: "samu-asma-pediatrica-grave",
    title: "Asma Pediátrica Grave / Quase Fatal",
    categoryId: "pediatric-emergency",
    samuCodes: ["BPed16", "APed23"],
    samuLevel: ["SBV", "SAV"],
    samuSource: SAMU_REFERENCE,
    tags: [
      "samu",
      "samu192",
      "bped16",
      "aped23",
      "asma pediátrica",
      "broncoespasmo",
      "crise asmática",
      "sibilância",
      "pediatria",
      "ginA"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "A crise asmática grave em crianças é emergência respiratória com risco de fadiga, insuficiência respiratória e parada cardiorrespiratória. A abordagem deve ser rápida, combinando avaliação de gravidade, oxigênio, broncodilatadores repetidos, corticoide sistêmico precoce e escalonamento quando não há resposta."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Exacerbação aguda de asma com aumento de obstrução brônquica, trabalho respiratório e sintomas como dispneia, sibilância, tosse ou aperto torácico. Crise quase fatal inclui rebaixamento de consciência, exaustão, hipoxemia persistente, silêncio auscultatório, hipercapnia ou necessidade de suporte ventilatório."
      },
      {
        id: "gravidade",
        title: "Sinais de Gravidade",
        content:
          "Alertas: fala ou choro prejudicados, tiragens importantes, uso de musculatura acessória, agitação ou sonolência, cianose, SpO2 baixa, dificuldade para alimentar, silêncio auscultatório, exaustão, bradicardia, hipotensão, alteração do nível de consciência ou piora apesar de broncodilatador inicial."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, idade/peso, saturação, esforço respiratório e nível de consciência.\n\n2. Ofertar oxigênio se hipoxemia ou desconforto moderado/grave.\n\n3. Administrar salbutamol inalatório em doses repetidas por aerossol dosimetrado com espaçador ou nebulização conforme disponibilidade e protocolo local.\n\n4. Associar ipratrópio nas crises moderadas a graves.\n\n5. Iniciar corticoide sistêmico precocemente, preferencialmente por via oral se tolerada; usar via parenteral se vômitos, gravidade ou impossibilidade de via oral.\n\n6. Reavaliar em ciclos curtos: frequência respiratória, tiragens, ausculta, SpO2, fala/choro, consciência e resposta ao broncodilatador.\n\n7. Considerar sulfato de magnésio IV em crise grave ou refratária, conforme peso e protocolo institucional.\n\n8. Acionar suporte avançado/UTI pediátrica diante de exaustão, rebaixamento, hipoxemia persistente, silêncio auscultatório, acidose/hipercapnia ou falha terapêutica."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "O tratamento deve seguir protocolo pediátrico por peso. Evitar sedação desnecessária. Hidratação deve ser cautelosa; excesso de volume pode piorar condição respiratória. Antibiótico não é rotina em exacerbação asmática isolada. Ventilação não invasiva ou invasiva pode ser necessária em falência respiratória, idealmente com equipe experiente."
      },
      {
        id: "alta",
        title: "Critérios de Observação e Alta",
        content:
          "Manter observação quando houver necessidade de broncodilatadores repetidos, hipoxemia, crise grave, comorbidades, história de UTI/intubação, má resposta inicial ou vulnerabilidade social. Alta exige melhora sustentada, SpO2 adequada em ar ambiente, baixo esforço respiratório, orientação de plano de ação e prescrição de controle conforme diretriz."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          `${SAMU_REFERENCE_TEXT}\n\nGlobal Initiative for Asthma. Global Strategy for Asthma Management and Prevention — 2025 Update. Disponível em: https://ginasthma.org/2025-gina-strategy-report/\n\nGlobal Initiative for Asthma. Summary Guide for Asthma Management and Prevention 2025. Disponível em: https://ginasthma.org/`
      }
    ]
  },
  {
    id: "samu-risco-suicidio-columbia",
    title: "Avaliação de Risco de Suicídio — C-SSRS / Columbia",
    categoryId: "other-emergencies",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "risco de suicídio",
      "ideação suicida",
      "tentativa de suicídio",
      "c-ssrs",
      "columbia",
      "psiquiatria",
      "segurança",
      "emergência"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "A avaliação de risco de suicídio na emergência deve identificar risco imediato, necessidade de proteção, fatores precipitantes, acesso a meios letais, suporte disponível e necessidade de avaliação especializada. A prioridade é segurança do paciente, da equipe e de terceiros."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Processo estruturado de triagem e estratificação de risco em pacientes com ideação suicida, comportamento autolesivo, tentativa de suicídio, intoxicação intencional, agitação, depressão grave, psicose, intoxicação por substâncias ou relatos de desesperança."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Investigar ideação suicida atual, plano, intenção, preparo, acesso a meios, tentativa recente, tentativas prévias, uso de álcool/drogas, psicose, agitação, impulsividade, dor crônica, perdas recentes, violência, isolamento, fatores protetores e rede de apoio. A C-SSRS pode ser usada como instrumento estruturado de apoio."
      },
      {
        id: "alto-risco",
        title: "Sinais de Alto Risco",
        content:
          "Alto risco: tentativa recente, plano específico, intenção clara, acesso a meios letais, despedidas ou preparação, psicose com comando, intoxicação/agitação importante, falta de rede de apoio, incapacidade de pactuar segurança, história de tentativas graves ou persistência de ideação com intenção."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Garantir ambiente seguro e remover meios potencialmente letais.\n\n2. Não deixar paciente de alto risco desacompanhado.\n\n3. Avaliar ABCDE e tratar lesões, intoxicações ou condições clínicas associadas.\n\n4. Realizar abordagem acolhedora, direta e sem julgamento.\n\n5. Estratificar risco com entrevista clínica e instrumento estruturado quando disponível.\n\n6. Acionar psiquiatria/equipe de saúde mental quando houver risco moderado/alto, tentativa recente, psicose, intoxicação, agitação, incapacidade de garantir segurança ou dúvida clínica.\n\n7. Considerar observação, internação, contenção terapêutica conforme legislação/protocolo institucional e risco iminente.\n\n8. Planejar alta apenas se risco baixo, suporte confiável, plano de segurança, restrição de meios e seguimento definido."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Evitar alta baseada apenas em melhora aparente após tentativa. Intoxicação prejudica avaliação de risco e pode exigir reavaliação após sobriedade clínica. Contratos verbais de 'não suicídio' não substituem plano de segurança, restrição de meios e seguimento."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Columbia Lighthouse Project. The Columbia Protocol / Columbia-Suicide Severity Rating Scale (C-SSRS). Disponível em: https://cssrs.columbia.edu/the-columbia-scale-c-ssrs/cssrs-for-communities-and-healthcare/\n\nColumbia Psychiatry. Columbia-Suicide Severity Rating Scale (C-SSRS). Disponível em: https://www.columbiapsychiatry.org/research-labs/columbia-suicide-severity-rating-scale-c-ssrs"
      }
    ]
  },
  {
    id: "samu-bradiarritmias-bav",
    title: "Bradiarritmias e Bloqueio AV Avançado",
    categoryId: "cardiovascular",
    samuCodes: ["AC20", "AP40"],
    samuLevel: ["SAV"],
    samuSource: SAMU_REFERENCE,
    tags: [
      "samu",
      "samu192",
      "ac20",
      "ap40",
      "bradicardia",
      "bradiarritmia",
      "bloqueio av",
      "bav",
      "marcapasso transcutâneo",
      "atropina",
      "acls"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Bradiarritmias podem ser assintomáticas ou causar instabilidade por baixo débito. A conduta depende da presença de sintomas, sinais de choque, isquemia, insuficiência cardíaca, síncope, alteração do nível de consciência e risco de assistolia."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Bradicardia clinicamente relevante é frequência cardíaca baixa associada a sinais ou sintomas. Bloqueios AV de alto grau, Mobitz II, BAV total, pausas prolongadas e bradicardia com QRS largo exigem atenção especial pelo risco de deterioração."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Avaliar sintomas, perfusão, pressão arterial, dor torácica, dispneia, síncope, confusão, sinais de choque e insuficiência cardíaca. Realizar monitorização cardíaca, ECG de 12 derivações, acesso venoso e investigação de causas reversíveis: hipóxia, IAM, hipercalemia, hipotermia, intoxicação por betabloqueador, bloqueador de canal de cálcio, digoxina ou outros fármacos."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Avaliar ABCDE, monitorizar ECG, pressão arterial e SpO2.\n\n2. Se bradicardia sem instabilidade: observação, ECG, investigação etiológica e consulta especializada conforme contexto.\n\n3. Se bradicardia sintomática ou instável: preparar tratamento imediato.\n\n4. Atropina IV é opção inicial em muitos casos de bradicardia sintomática, conforme algoritmo ACLS e protocolo local.\n\n5. Se atropina ineficaz ou alto risco: não atrasar marcapasso transcutâneo quando disponível.\n\n6. Considerar infusão de adrenalina ou dopamina como ponte para marcapasso ou tratamento definitivo conforme protocolo institucional.\n\n7. Em suspeita de intoxicação específica, tratar causa: cálcio/glucagon/insulina em altas doses para bloqueadores, anticorpos Fab em intoxicação digitálica quando indicado, correção de hipercalemia, reperfusão em IAM."
      },
      {
        id: "doses",
        title: "Doses / Parâmetros de Referência",
        content:
          "Conforme algoritmo AHA ACLS 2025 para bradicardia com pulso: atropina 1 mg IV em bolus, repetir a cada 3–5 minutos até dose total máxima de 3 mg; dopamina 5–20 mcg/kg/min; adrenalina 2–10 mcg/min. Ajustar à resposta clínica e ao protocolo institucional."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Atropina pode ter resposta limitada em BAV infranodal, Mobitz II, BAV total com QRS largo ou transplante cardíaco. Em instabilidade grave, não aguardar múltiplas doses antes de preparar marcapasso transcutâneo e suporte avançado."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          `${SAMU_REFERENCE_TEXT}\n\nAmerican Heart Association. Adult Bradycardia With a Pulse Algorithm — 2025. Disponível em: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/algorithms\n\nKusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on Bradycardia and Cardiac Conduction Delay. Circulation/JACC. Disponível em: https://www.ahajournals.org/doi/10.1161/CIR.0000000000000628`
      }
    ]
  },
  {
    id: "samu-coma-aeiou-tips",
    title: "Coma e Rebaixamento do Nível de Consciência — AEIOU-TIPS",
    categoryId: "neurological",
    samuCodes: ["BC15", "AC25", "BP14", "AP27"],
    samuLevel: ["SBV", "SAV"],
    samuSource: SAMU_REFERENCE,
    tags: [
      "samu",
      "samu192",
      "bc15",
      "ac25",
      "bp14",
      "ap27",
      "coma",
      "rebaixamento",
      "nível de consciência",
      "glasgow",
      "aeiou tips",
      "hipoglicemia",
      "intoxicação"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Coma e rebaixamento do nível de consciência são apresentações sindrômicas de alto risco. A abordagem deve priorizar via aérea, ventilação, circulação, glicemia capilar, causas reversíveis e identificação de sinais neurológicos focais ou trauma."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Alteração aguda do nível de consciência com redução da responsividade, variando de sonolência e confusão até coma. Pode decorrer de causas metabólicas, tóxicas, infecciosas, neurológicas, traumáticas, respiratórias, hemodinâmicas ou endócrinas."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Avaliar responsividade, escala AVPU ou Glasgow, pupilas, sinais focais, padrão respiratório, sinais de trauma, temperatura, PA, SpO2, ECG, glicemia capilar e medicamentos/substâncias disponíveis. Investigar início súbito, última vez visto bem, convulsão, febre, cefaleia, queda, intoxicação, diabetes, anticoagulação e doença renal/hepática."
      },
      {
        id: "diferencial",
        title: "Diagnóstico Diferencial — AEIOU-TIPS",
        content:
          "AEIOU-TIPS é um mnemônico útil para causas reversíveis: A — álcool, acidose, anóxia; E — epilepsia, eletrólitos, encefalopatia; I — insulina/hipoglicemia; O — opioides/overdose; U — uremia; T — trauma, temperatura; I — infecção; P — psicogênico/porfiria; S — stroke, sepse, choque."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Avaliar ABCDE e proteger via aérea se Glasgow baixo, vômitos, secreções, aspiração ou ventilação inadequada.\n\n2. Oxigênio e ventilação assistida se hipoxemia ou hipoventilação.\n\n3. Checar glicemia capilar imediatamente e tratar hipoglicemia conforme protocolo.\n\n4. Monitorizar ECG, PA, SpO2 e temperatura.\n\n5. Obter acesso venoso e colher exames conforme cenário: eletrólitos, função renal/hepática, gasometria, hemograma, lactato, toxicológico quando disponível, cetonas, osmolaridade e culturas se sepse suspeita.\n\n6. Considerar naloxona se suspeita de opioide com depressão respiratória.\n\n7. Tratar convulsão/estado de mal se atividade convulsiva ou suspeita clínica.\n\n8. Acionar protocolo de AVC se déficit focal ou início súbito compatível.\n\n9. Considerar antibiótico precoce se meningite/sepse suspeita após condutas críticas.\n\n10. Encaminhar para neuroimagem e avaliação especializada conforme estabilidade e suspeita."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não atribuir rebaixamento a intoxicação alcoólica sem excluir hipoglicemia, trauma, sepse, AVC, distúrbios hidroeletrolíticos e hipóxia. Pupilas puntiformes não confirmam opioide isoladamente. Naloxona não substitui ventilação. Em paciente anticoagulado ou com trauma, suspeitar sangramento intracraniano."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          `${SAMU_REFERENCE_TEXT}\n\nSanello A, et al. Altered Mental Status: Current Evidence-based Recommendations for Prehospital Care. Western Journal of Emergency Medicine. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC5942021/\n\nSAEM. Approach to Altered Mental Status. Disponível em: https://www.saem.org/about-saem/academies-interest-groups-affiliates2/cdem/for-students/online-education/m4-curriculum/group-m4-approach-to/approach-to-altered-mental-status`
      }
    ]
  }
];
