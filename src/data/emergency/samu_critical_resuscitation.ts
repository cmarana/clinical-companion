import type { EmergencyProtocol } from "./types";

import { SAMU_REFERENCE, SAMU_REFERENCE_TEXT } from "./samuReference";

export const samuCriticalResuscitationProtocols: EmergencyProtocol[] = [

  {

    id: "samu-avaliacao-primaria-clinica",

    title: "Avaliação Primária do Paciente Clínico",

    categoryId: "resuscitation",

    badge: "new",

    lastReviewed: "Mai/2026",

    version: "1.0",

    samuCodes: ["BC1", "AC1"],

    samuLevel: ["SBV", "SAV"],

    samuSource: SAMU_REFERENCE,

    tags: [

      "samu",

      "samu192",

      "bc1",

      "ac1",

      "avaliação primária",

      "ABCDE",

      "emergência clínica",

      "sala vermelha",

      "risco imediato",

    ],

    sections: [

      {

        id: "intro",

        title: "Introdução",

        content:

          "A avaliação primária é a primeira abordagem estruturada do paciente com agravo clínico agudo. O objetivo é identificar e tratar, de forma imediata, ameaças à vida antes de avançar para investigação detalhada. Este protocolo é voltado ao atendimento inicial em ambiente pré-hospitalar, pronto atendimento, pronto-socorro e sala vermelha.",

      },

      {

        id: "def",

        title: "Definição",

        content:

          "Avaliação sistematizada inicial baseada na sequência ABCDE: A — via aérea; B — respiração; C — circulação; D — disfunção neurológica; E — exposição e controle ambiental. Deve ser realizada rapidamente, com reavaliações frequentes após cada intervenção.",

      },

      {

        id: "screening",

        title: "Rastreamento e Identificação",

        content:

          "Usar este protocolo em todo paciente com queixa clínica aguda, alteração do estado geral, sinais de instabilidade, dispneia, dor torácica, rebaixamento do nível de consciência, síncope, choque, convulsão, sepse suspeita, anafilaxia, intoxicação ou deterioração clínica súbita.",

      },

      {

        id: "clinical",

        title: "Apresentação Clínica",

        content:

          "Sinais de gravidade incluem: rebaixamento do nível de consciência, cianose, estridor, esforço respiratório importante, saturação baixa, hipotensão, extremidades frias, pele moteada, dor torácica persistente, déficit neurológico focal, convulsão, sangramento ativo, sinais de choque ou instabilidade hemodinâmica.",

      },

      {

        id: "conduct",

        title: "Conduta",

        content:

          "1. Garantir segurança da cena/equipe e acionar apoio conforme necessidade.\n\n2. Avaliar responsividade e impressão geral do paciente.\n\n3. A — Via aérea: verificar patência, presença de obstrução, vômitos, secreções, estridor ou risco de broncoaspiração. Realizar manobras básicas, aspiração e dispositivos conforme indicação.\n\n4. B — Respiração: avaliar frequência respiratória, padrão ventilatório, expansibilidade, ausculta, SpO2 e sinais de fadiga. Ofertar oxigênio conforme necessidade clínica e considerar ventilação assistida se ventilação inadequada.\n\n5. C — Circulação: avaliar pulso, perfusão, pele, pressão arterial, sangramentos, ritmo cardíaco e sinais de choque. Obter acesso venoso/intraósseo quando indicado.\n\n6. D — Neurológico: avaliar escala AVPU ou Glasgow, pupilas, glicemia capilar e déficit focal.\n\n7. E — Exposição: procurar lesões, rash, sangramentos, sinais de infecção, temperatura e fatores ambientais, preservando privacidade e prevenindo hipotermia.\n\n8. Tratar imediatamente as alterações encontradas antes de seguir para avaliação secundária.",

      },

      {

        id: "treatment",

        title: "Abordagem Terapêutica",

        content:

          "A intervenção deve ser dirigida ao problema crítico identificado: abertura de via aérea, oxigenação, ventilação assistida, controle de sangramento, acesso vascular, reposição volêmica quando indicada, monitorização, glicose em hipoglicemia, adrenalina em anafilaxia, protocolo de sepse quando suspeito, protocolo de dor torácica/IAM quando indicado e acionamento de suporte avançado ou equipe de sala vermelha.",

      },

      {

        id: "followup",

        title: "Acompanhamento",

        content:

          "Reavaliar ABCDE após toda intervenção, após mudança clínica e durante transporte ou transferência. Registrar sinais vitais seriados, escala neurológica, glicemia, intervenções realizadas, resposta clínica e necessidade de escalonamento.",

      },

      {

        id: "references",

        title: "Referências Bibliográficas",

        content:

          `${SAMU_REFERENCE_TEXT}\n\nAmerican Heart Association. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Disponível em: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines`,

      },

    ],

  },

  {

    id: "samu-avaliacao-secundaria-clinica",

    title: "Avaliação Secundária do Paciente Clínico",

    categoryId: "resuscitation",

    badge: "new",

    lastReviewed: "Mai/2026",

    version: "1.0",

    samuCodes: ["BC2", "AC2"],

    samuLevel: ["SBV", "SAV"],

    samuSource: SAMU_REFERENCE,

    tags: [

      "samu",

      "samu192",

      "bc2",

      "ac2",

      "avaliação secundária",

      "SAMPLE",

      "exame físico",

      "emergência clínica",

    ],

    sections: [

      {

        id: "intro",

        title: "Introdução",

        content:

          "A avaliação secundária é realizada após a estabilização inicial das ameaças imediatas à vida identificadas na avaliação primária. Ela aprofunda história, exame físico, hipóteses diagnósticas e planejamento da conduta.",

      },

      {

        id: "def",

        title: "Definição",

        content:

          "Avaliação clínica detalhada, orientada por história dirigida, exame físico completo e investigação de causas prováveis do quadro agudo. Não deve atrasar intervenções críticas já identificadas no ABCDE.",

      },

      {

        id: "screening",

        title: "Rastreamento e Identificação",

        content:

          "Aplicar em pacientes clinicamente estáveis ou após estabilização inicial. Em pacientes instáveis, manter ciclos de avaliação primária e intervenção imediata até melhora ou chegada de suporte adequado.",

      },

      {

        id: "conduct",

        title: "Conduta",

        content:

          "1. Confirmar que ameaças imediatas do ABCDE foram abordadas.\n\n2. Colher história dirigida usando SAMPLE: Sinais/sintomas, Alergias, Medicamentos em uso, Passado médico, Líquidos/alimentos recentes e Eventos relacionados ao quadro.\n\n3. Caracterizar a queixa principal: início, duração, fatores desencadeantes, intensidade, irradiação, sintomas associados e evolução.\n\n4. Revisar comorbidades relevantes: cardiopatias, pneumopatias, diabetes, doença renal, epilepsia, gestação, imunossupressão, uso de anticoagulantes e alergias graves.\n\n5. Realizar exame físico orientado: sinais vitais, avaliação cardiorrespiratória, neurológica, abdominal, pele/mucosas, extremidades e sinais de infecção, choque ou sangramento.\n\n6. Definir prioridade, hipótese diagnóstica inicial, necessidade de exames, medicações, observação, transferência ou regulação.",

      },

      {

        id: "diagnosis",

        title: "Diagnóstico",

        content:

          "A avaliação secundária não fecha diagnóstico isoladamente; ela organiza dados para diferenciar síndromes tempo-dependentes, como SCA/IAM, AVC, sepse, anafilaxia, intoxicações, distúrbios metabólicos, insuficiência respiratória e choque.",

      },

      {

        id: "followup",

        title: "Acompanhamento",

        content:

          "Registrar achados positivos e negativos relevantes, horário de início dos sintomas, medicações administradas, evolução dos sinais vitais, resposta às intervenções e critérios de transferência ou observação.",

      },

      {

        id: "references",

        title: "Referências Bibliográficas",

        content: SAMU_REFERENCE_TEXT,

      },

    ],

  },

  {

    id: "samu-ovace-adulto",

    title: "OVACE — Obstrução de Via Aérea por Corpo Estranho no Adulto",

    categoryId: "resuscitation",

    badge: "new",

    lastReviewed: "Mai/2026",

    version: "1.0",

    samuCodes: ["BC3"],

    samuLevel: ["SBV"],

    samuSource: SAMU_REFERENCE,

    tags: [

      "samu",

      "samu192",

      "bc3",

      "ovace",

      "engasgo",

      "obstrução de via aérea",

      "corpo estranho",

      "heimlich",

      "via aérea",

    ],

    sections: [

      {

        id: "intro",

        title: "Introdução",

        content:

          "A obstrução de via aérea por corpo estranho é uma emergência tempo-dependente. O reconhecimento rápido da gravidade define a conduta: estimular tosse quando há obstrução parcial efetiva e intervir imediatamente quando há obstrução grave.",

      },

      {

        id: "def",

        title: "Definição",

        content:

          "OVACE é a obstrução parcial ou total da via aérea causada por corpo estranho, alimento, prótese, secreção ou outro material, levando a dificuldade ventilatória aguda e risco de hipóxia, parada respiratória e parada cardiorrespiratória.",

      },

      {

        id: "screening",

        title: "Rastreamento e Identificação",

        content:

          "Suspeitar em início súbito de tosse, engasgo, incapacidade de falar, cianose, estridor, esforço respiratório, sinal universal de engasgo ou perda de consciência durante alimentação ou manipulação oral.",

      },

      {

        id: "clinical",

        title: "Apresentação Clínica",

        content:

          "Obstrução leve: tosse efetiva, fala preservada ou parcialmente preservada, respiração ainda presente.\n\nObstrução grave: incapacidade de falar ou tossir efetivamente, cianose, ausência de fluxo de ar, piora rápida, exaustão ou inconsciência.",

      },

      {

        id: "conduct",

        title: "Conduta",

        content:

          "1. Avaliar rapidamente se a tosse é efetiva.\n\n2. Se obstrução leve: estimular tosse, manter observação e evitar manobras agressivas enquanto houver ventilação efetiva.\n\n3. Se obstrução grave em adulto consciente: realizar compressões abdominais até desobstrução ou perda de consciência. Em gestantes ou obesidade importante, considerar compressões torácicas.\n\n4. Se o paciente ficar inconsciente: posicionar em superfície rígida, acionar ajuda, iniciar RCP e avaliar cavidade oral apenas se o corpo estranho for visível. Não realizar varredura digital às cegas.\n\n5. Se equipe habilitada e material disponível: considerar visualização direta e retirada com pinça apropriada quando corpo estranho visível.\n\n6. Após desobstrução: avaliar ventilação, oxigenação, risco de broncoaspiração, lesão de via aérea e necessidade de observação.",

      },

      {

        id: "followup",

        title: "Acompanhamento",

        content:

          "Encaminhar para avaliação se houve inconsciência, hipóxia, manobras prolongadas, dor torácica, vômitos, suspeita de aspiração, trauma associado ou persistência de sintomas respiratórios.",

      },

      {

        id: "references",

        title: "Referências Bibliográficas",

        content:

          `${SAMU_REFERENCE_TEXT}\n\nAmerican Heart Association. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care — Adult Basic Life Support. Disponível em: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines`,

      },

    ],

  },

  {

    id: "samu-parada-respiratoria-adulto",

    title: "Parada Respiratória no Adulto",

    categoryId: "resuscitation",

    badge: "new",

    lastReviewed: "Mai/2026",

    version: "1.0",

    samuCodes: ["BC4", "AC4"],

    samuLevel: ["SBV", "SAV"],

    samuSource: SAMU_REFERENCE,

    tags: [

      "samu",

      "samu192",

      "bc4",

      "ac4",

      "parada respiratória",

      "ventilação",

      "BVM",

      "via aérea",

      "hipóxia",

    ],

    sections: [

      {

        id: "intro",

        title: "Introdução",

        content:

          "Parada respiratória é emergência crítica caracterizada por ausência ou inadequação grave da ventilação, com pulso ainda presente ou em deterioração para parada cardiorrespiratória. A prioridade é reconhecer rapidamente, ventilar adequadamente e tratar a causa.",

      },

      {

        id: "def",

        title: "Definição",

        content:

          "Ausência de respiração efetiva ou ventilação insuficiente para manter oxigenação e eliminação de CO2. Pode ocorrer por depressão do sistema nervoso central, obstrução de via aérea, intoxicação, trauma, doença neuromuscular, broncoespasmo grave, edema pulmonar, afogamento ou fadiga respiratória.",

      },

      {

        id: "screening",

        title: "Rastreamento e Identificação",

        content:

          "Avaliar responsividade, respiração e pulso. Suspeitar quando houver apneia, gasping, respiração agônica, bradipneia extrema, exaustão respiratória, cianose, queda de saturação, rebaixamento de consciência ou ventilação ineficaz.",

      },

      {

        id: "conduct",

        title: "Conduta",

        content:

          "1. Acionar ajuda e preparar equipamento de via aérea.\n\n2. Confirmar presença de pulso. Se não houver pulso, iniciar protocolo de PCR.\n\n3. Abrir via aérea com manobra apropriada e remover secreções/corpos estranhos visíveis.\n\n4. Ventilar com bolsa-válvula-máscara conectada a oxigênio, garantindo boa vedação e expansão torácica.\n\n5. Monitorizar SpO2, frequência cardíaca, pressão arterial e nível de consciência.\n\n6. Considerar cânula orofaríngea/nasofaríngea se indicada e não contraindicada.\n\n7. Acionar suporte avançado para via aérea definitiva quando houver falha de ventilação, risco de broncoaspiração, rebaixamento persistente, trauma grave ou deterioração.\n\n8. Investigar e tratar causa provável: opioides, hipoglicemia, anafilaxia, broncoespasmo, edema agudo de pulmão, trauma, AVC, intoxicação ou sepse.",

      },

      {

        id: "treatment",

        title: "Abordagem Terapêutica",

        content:

          "A ventilação deve ser suficiente para produzir elevação torácica visível, evitando hiperventilação. Em suspeita de intoxicação por opioides, considerar naloxona conforme protocolo local e disponibilidade. Em broncoespasmo grave, associar tratamento específico. Em anafilaxia, priorizar adrenalina intramuscular e suporte de via aérea.",

      },

      {

        id: "followup",

        title: "Acompanhamento",

        content:

          "Reavaliar pulso e respiração continuamente. A perda de pulso muda imediatamente a conduta para protocolo de PCR. Após reversão, manter monitorização, oxigenação adequada, investigação etiológica e transferência para unidade com suporte compatível.",

      },

      {

        id: "references",

        title: "Referências Bibliográficas",

        content:

          `${SAMU_REFERENCE_TEXT}\n\nAmerican Heart Association. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Disponível em: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines`,

      },

    ],

  },

  {

    id: "samu-cuidados-pos-pcr-adulto",

    title: "Cuidados Pós-PCR no Adulto",

    categoryId: "resuscitation",

    badge: "new",

    lastReviewed: "Mai/2026",

    version: "1.0",

    samuCodes: ["BC6", "AC10", "AC11", "AC12"],

    samuLevel: ["SBV", "SAV"],

    samuSource: SAMU_REFERENCE,

    tags: [

      "samu",

      "samu192",

      "bc6",

      "ac10",

      "ac11",

      "ac12",

      "pós-PCR",

      "ROSC",

      "retorno da circulação espontânea",

      "cuidados pós-parada",

      "ressuscitação",

    ],

    sections: [

      {

        id: "intro",

        title: "Introdução",

        content:

          "Após retorno da circulação espontânea, o paciente permanece em alto risco de nova parada, choque, hipóxia, arritmias, lesão neurológica e disfunção orgânica. Os cuidados pós-PCR devem ser iniciados imediatamente e mantidos durante transporte, sala vermelha e UTI.",

      },

      {

        id: "def",

        title: "Definição",

        content:

          "Conjunto de medidas após retorno da circulação espontânea destinadas a otimizar oxigenação, ventilação, perfusão, controle de causa reversível, proteção neurológica e encaminhamento para cuidado definitivo.",

      },

      {

        id: "screening",

        title: "Rastreamento e Identificação",

        content:

          "Aplicar a todo paciente que recuperou pulso palpável ou pressão arterial após PCR. Confirmar retorno circulatório, avaliar nível de consciência, respiração, pressão arterial, saturação, ritmo cardíaco e sinais de choque.",

      },

      {

        id: "conduct",

        title: "Conduta",

        content:

          "1. Confirmar pulso, pressão arterial e ritmo monitorizado.\n\n2. Reavaliar ABCDE imediatamente.\n\n3. Garantir via aérea e ventilação adequadas. Evitar hipóxia e hiperventilação.\n\n4. Titular oxigênio para manter oxigenação adequada conforme protocolo institucional.\n\n5. Monitorizar ECG, SpO2, pressão arterial, glicemia e temperatura.\n\n6. Tratar hipotensão e choque com volume, vasopressores e suporte avançado conforme avaliação clínica e protocolo local.\n\n7. Procurar e tratar causas reversíveis: hipóxia, hipovolemia, acidose, distúrbios de potássio, hipotermia, pneumotórax hipertensivo, tamponamento, trombose coronária/pulmonar e toxinas.\n\n8. Realizar ECG de 12 derivações o quanto antes quando disponível e considerar via de IAM quando indicado.\n\n9. Evitar hipertermia e organizar transferência para unidade com suporte intensivo quando necessário.",

      },

      {

        id: "diagnosis",

        title: "Diagnóstico",

        content:

          "A avaliação pós-PCR deve identificar causa provável da parada, presença de instabilidade, necessidade de via aérea definitiva, choque persistente, arritmia, síndrome coronariana aguda, sepse, TEP, intoxicação ou distúrbio metabólico.",

      },

      {

        id: "followup",

        title: "Acompanhamento",

        content:

          "Documentar horário da PCR, ritmo inicial, tempo até RCP, desfibrilações, medicações, tempo até retorno da circulação, condição neurológica, sinais vitais, ECG pós-ROSC e condutas realizadas.",

      },

      {

        id: "references",

        title: "Referências Bibliográficas",

        content:

          `${SAMU_REFERENCE_TEXT}\n\nAmerican Heart Association. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care — Post–Cardiac Arrest Care. Disponível em: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines`,

      },

    ],

  },

];
