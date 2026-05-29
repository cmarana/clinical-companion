import type { EmergencyProtocol } from "./types";
import { SAMU_REFERENCE, SAMU_REFERENCE_TEXT } from "./samuReference";

export const samuP1MissingBatch2Protocols: EmergencyProtocol[] = [
  {
    id: "samu-coma-mixedematoso",
    title: "Coma Mixedematoso",
    categoryId: "metabolic",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "coma mixedematoso",
      "hipotireoidismo grave",
      "mixedema",
      "hipotermia",
      "hiponatremia",
      "bradicardia",
      "insuficiência adrenal",
      "levotiroxina",
      "hidrocortisona",
      "uti"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Coma mixedematoso é uma emergência endócrina rara e potencialmente fatal, associada a hipotireoidismo grave descompensado. O quadro costuma ocorrer em pacientes idosos, mulheres, pessoas com hipotireoidismo não tratado ou interrompido, e pode ser precipitado por infecção, exposição ao frio, sedativos, trauma, cirurgia, AVC, IAM ou outras doenças agudas."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Síndrome de descompensação grave do hipotireoidismo, caracterizada por alteração do nível de consciência, hipotermia, hipoventilação, bradicardia, hipotensão, hiponatremia e disfunção multissistêmica. O termo “coma” é tradicional, mas muitos pacientes apresentam torpor, confusão ou sonolência profunda em vez de coma franco."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em paciente com rebaixamento do nível de consciência associado a hipotermia, bradicardia, hipotensão, hiponatremia, hipoglicemia, hipoventilação, pele seca/fria, edema, voz rouca, macroglossia, constipação, reflexos lentificados, história de hipotireoidismo, tireoidectomia, radioiodoterapia ou uso irregular de levotiroxina."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, monitorizar ECG, pressão arterial, SpO2, temperatura e glicemia.\n\n2. Proteger via aérea se rebaixamento importante, hipoventilação, broncoaspiração ou falência ventilatória.\n\n3. Tratar hipoglicemia imediatamente se presente.\n\n4. Corrigir hipotermia com reaquecimento passivo e cauteloso; evitar reaquecimento agressivo que possa precipitar vasodilatação e colapso hemodinâmico.\n\n5. Coletar TSH, T4 livre, cortisol, eletrólitos, gasometria, função renal/hepática, hemograma, culturas se infecção suspeita, ECG e imagem conforme contexto. Não atrasar tratamento se suspeita clínica forte.\n\n6. Administrar corticoide de estresse antes ou junto da reposição hormonal tireoidiana quando houver suspeita de insuficiência adrenal ou enquanto cortisol não estiver disponível.\n\n7. Iniciar levotiroxina preferencialmente IV conforme protocolo institucional e perfil de risco cardiovascular.\n\n8. Identificar e tratar precipitante: infecção, sepse, IAM, AVC, sedativos, exposição ao frio, trauma, sangramento ou distúrbios metabólicos.\n\n9. Encaminhar para UTI."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "A diretriz da American Thyroid Association descreve reposição inicial com levotiroxina IV em dose de ataque de 200–400 mcg, usando doses menores em idosos, baixo peso, coronariopatas ou arritmias, seguida de dose diária de reposição ajustada. Hidrocortisona em dose de estresse é frequentemente usada até exclusão de insuficiência adrenal. Liotironina pode ser considerada em casos selecionados, mas aumenta risco de arritmias e isquemia, devendo ser reservada a protocolo especializado."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não aguardar confirmação laboratorial quando a suspeita clínica for alta. TSH pode estar inadequadamente normal/baixo em hipotireoidismo central. Hiponatremia, hipercapnia e hipotermia são marcadores de gravidade. Evitar sedativos sempre que possível. Reposição hormonal excessiva pode precipitar isquemia ou arritmia em pacientes vulneráveis."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Jonklaas J, et al. Guidelines for the Treatment of Hypothyroidism: Prepared by the American Thyroid Association Task Force. Thyroid. 2014. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/\n\nStatPearls. Myxedema Coma. Disponível em: https://www.ncbi.nlm.nih.gov/books/NBK545193/"
      }
    ]
  },
  {
    id: "samu-dengue-estratificacao-hidratacao",
    title: "Dengue — Estratificação A/B/C/D e Hidratação",
    categoryId: "infectious",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "dengue",
      "arbovirose",
      "grupo a",
      "grupo b",
      "grupo c",
      "grupo d",
      "sinais de alarme",
      "choque",
      "hidratação",
      "plaquetopenia",
      "hematócrito",
      "ms brasil"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Dengue é doença febril aguda com risco de evolução para extravasamento plasmático, sangramento grave, choque e disfunção orgânica. Na emergência, a conduta deve ser guiada por estratificação de risco, sinais de alarme, estado hemodinâmico, hidratação e reavaliação seriada."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Doença viral transmitida por Aedes spp., com apresentação variável: dengue sem sinais de alarme, dengue com sinais de alarme e dengue grave. A classificação operacional em grupos A, B, C e D organiza local de cuidado, necessidade de exames, hidratação e internação."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em febre aguda associada a cefaleia, dor retro-orbitária, mialgia, artralgia, exantema, náuseas, vômitos, prostração, prova do laço positiva, leucopenia, plaquetopenia ou contexto epidemiológico. Perguntar dia de doença, comorbidades, gestação, extremos de idade, anticoagulantes/antiagregantes e sinais de alarme."
      },
      {
        id: "alarme",
        title: "Sinais de Alarme e Dengue Grave",
        content:
          "Sinais de alarme: dor abdominal intensa/contínua, vômitos persistentes, acúmulo de líquidos, hipotensão postural/lipotimia, letargia/irritabilidade, hepatomegalia, sangramento de mucosa e aumento progressivo do hematócrito.\n\nDengue grave: choque, desconforto respiratório por extravasamento, sangramento grave ou comprometimento grave de órgãos, como fígado, sistema nervoso central, coração ou outros."
      },
      {
        id: "conduta",
        title: "Conduta por Estratificação",
        content:
          "1. Avaliar sinais vitais, perfusão, hidratação, sangramentos, dor abdominal, diurese, nível de consciência e sinais respiratórios.\n\n2. Grupo A: sem sinais de alarme, sem condições especiais e sem risco social relevante. Hidratação oral, antitérmico/analgesia segura, orientação de retorno e sinais de alarme.\n\n3. Grupo B: sem sinais de alarme, mas com sangramento espontâneo de pele, comorbidade, gestação, extremos de idade, risco social ou condição especial. Solicitar exames conforme protocolo local, hidratação e reavaliação.\n\n4. Grupo C: sinais de alarme. Necessita observação/internação, hidratação venosa e monitorização clínica/laboratorial seriada.\n\n5. Grupo D: choque, sangramento grave ou disfunção orgânica. Sala vermelha/UTI, reposição volêmica imediata, monitorização intensiva, avaliação de hemoconcentração, sangramento e complicações."
      },
      {
        id: "tratamento",
        title: "Hidratação e Suporte",
        content:
          "A hidratação é a principal intervenção. Usar o esquema do Ministério da Saúde conforme grupo, peso, idade, comorbidades e resposta clínica. Evitar AAS e anti-inflamatórios não esteroidais. Preferir paracetamol ou dipirona conforme contexto local e contraindicações. Em choque, iniciar expansão com cristaloide isotônico e reavaliar perfusão, PA, pulso, enchimento capilar, diurese, hematócrito e sinais de sobrecarga."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "A fase crítica costuma ocorrer na defervescência. Plaquetas isoladas não definem gravidade; a tendência do hematócrito e a perfusão são fundamentais. Não usar corticoide de rotina. Evitar excesso de fluidos, especialmente em idosos, cardiopatas, nefropatas e gestantes. Todo paciente deve sair com orientação clara de retorno imediato se sinais de alarme."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança. 6ª ed. 2024. Disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/dengue/dengue-diagnostico-e-manejo-clinico-adulto-e-crianca\n\nOPAS/OMS. Dengue: guias e documentos técnicos. Disponível em: https://www.paho.org/pt/topicos/dengue"
      }
    ]
  },
  {
    id: "samu-desidratacao-pediatrica-planos-abc",
    title: "Desidratação Pediátrica — Planos A, B e C",
    categoryId: "pediatric-emergency",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "desidratação pediátrica",
      "diarreia aguda",
      "plano a",
      "plano b",
      "plano c",
      "soro de reidratação oral",
      "sro",
      "pediatria",
      "hidratação",
      "choque"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Desidratação em crianças é causa frequente de atendimento de urgência, geralmente associada a diarreia aguda, vômitos, febre ou baixa ingesta. A abordagem deve classificar o grau de desidratação, corrigir perdas, prevenir choque e orientar manutenção domiciliar quando seguro."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Perda de água e eletrólitos suficiente para causar alterações clínicas. A classificação prática divide em: sem desidratação, alguma desidratação e desidratação grave, orientando Planos A, B e C."
      },
      {
        id: "avaliacao",
        title: "Avaliação Clínica",
        content:
          "Avaliar estado geral, sede, capacidade de beber, olhos, lágrimas, mucosas, turgor, enchimento capilar, pulsos, frequência cardíaca, frequência respiratória, diurese, peso quando disponível e sinais de choque. Procurar sangue nas fezes, vômitos persistentes, febre alta, letargia, desnutrição, lactente jovem e comorbidades."
      },
      {
        id: "conduta",
        title: "Conduta por Planos A/B/C",
        content:
          "Plano A — sem desidratação: manter alimentação, aumentar oferta de líquidos, usar solução de reidratação oral após perdas, orientar sinais de alarme e retorno.\n\nPlano B — alguma desidratação: reidratação oral supervisionada, com solução de reidratação oral em volume calculado por peso e reavaliação clínica frequente. Se vômitos, oferecer pequenos volumes repetidos. Se piora ou falha, migrar para Plano C.\n\nPlano C — desidratação grave/choque: hidratação venosa com cristaloide isotônico, reavaliação rápida da perfusão e sinais vitais, correção de hipoglicemia se presente e transferência/observação em ambiente com monitorização."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "Solução de reidratação oral é a base do tratamento em crianças sem choque e capazes de ingerir. Zinco pode ser indicado em diarreia aguda conforme protocolos locais. Antiemético pode ser considerado em vômitos que impedem reidratação oral, respeitando idade, dose e contraindicações. Antibiótico não é rotina na maioria das diarreias agudas; reservar para indicações específicas."
      },
      {
        id: "alarme",
        title: "Sinais de Alarme",
        content:
          "Retorno imediato se piora do estado geral, sonolência, incapacidade de beber, vômitos persistentes, sangue nas fezes, redução importante da diurese, febre persistente, sinais de choque, piora da sede, extremidades frias, respiração anormal ou falha da reidratação oral."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Ministério da Saúde. Manejo do paciente com diarreia — avaliação do estado de hidratação e planos de tratamento. Disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/doencas-diarreicas-agudas/manejo-do-paciente-com-diarreia-avaliacao-do-estado-do-paciente\n\nSociedade Brasileira de Pediatria. Diarreia Aguda Infecciosa — Guia Prático de Atualização. Disponível em: https://www.sbp.com.br/fileadmin/user_upload/sbp/2023/junho/14/24048aPRESS-GPA-Diarreia_Aguda_Infecciosa-pSITE.pdf"
      }
    ]
  },
  {
    id: "samu-hemoptise-macica",
    title: "Hemoptise Maciça — Proteção de Via Aérea e Controle do Sangramento",
    categoryId: "respiratory",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "hemoptise",
      "hemoptise maciça",
      "via aérea",
      "broncoscopia",
      "embolização",
      "artéria brônquica",
      "sangramento pulmonar",
      "insuficiência respiratória"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Hemoptise maciça é emergência respiratória em que o risco imediato costuma ser asfixia por inundação de vias aéreas, mais do que exsanguinação. A prioridade é proteger a via aérea, posicionar o paciente de forma segura, manter oxigenação e acionar broncoscopia, radiologia intervencionista e cirurgia torácica conforme disponibilidade."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Não há consenso único de volume. Na prática, considera-se maciça ou ameaçadora à vida quando há grande volume, sangramento persistente, instabilidade, insuficiência respiratória, queda de saturação, necessidade de transfusão ou incapacidade de proteger a via aérea."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Confirmar que o sangramento é de origem respiratória e diferenciar de hematêmese ou epistaxe posterior. Investigar tuberculose, bronquiectasias, neoplasia, pneumonia, aspergiloma, TEP, vasculites, anticoagulação, procedimentos recentes e trauma."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Acionar ajuda, sala vermelha/UTI, broncoscopia e radiologia intervencionista quando disponíveis.\n\n2. Avaliar ABCDE, SpO2, pressão arterial, frequência respiratória, nível de consciência e volume/velocidade do sangramento.\n\n3. Posicionar com pulmão sangrante para baixo quando o lado for conhecido, reduzindo contaminação do pulmão contralateral.\n\n4. Oxigênio em alto fluxo e aspiração pronta.\n\n5. Obter dois acessos venosos calibrosos, hemograma, coagulograma, fibrinogênio se disponível, função renal, tipagem/prova cruzada e gasometria conforme gravidade.\n\n6. Suspender/reverter anticoagulação quando indicado.\n\n7. Se via aérea ameaçada: intubação por profissional experiente, preferindo tubo de maior calibre possível para permitir broncoscopia/aspiração.\n\n8. Considerar isolamento pulmonar, bloqueador brônquico ou intubação seletiva em contexto especializado.\n\n9. Após estabilização, localizar sangramento com broncoscopia e/ou angiotomografia conforme estabilidade e disponibilidade."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "O controle definitivo frequentemente envolve embolização de artéria brônquica quando disponível, especialmente em sangramento arterial brônquico. Broncoscopia pode auxiliar na localização, aspiração, tamponamento e medidas locais. Cirurgia é reservada para casos selecionados ou falha de controle, conforme etiologia e condição clínica."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não deitar o paciente em decúbito dorsal se sangramento ativo volumoso. Evitar intubação com tubo pequeno quando se prevê necessidade de broncoscopia. A estabilidade hemodinâmica não exclui risco de asfixia. Antitussígeno/sedativo deve ser usado com extrema cautela em paciente com via aérea ameaçada."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Radchenko C, et al. A systematic approach to the management of massive hemoptysis. Journal of Thoracic Disease. 2017. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC5696556/\n\nBritish Thoracic Society. Guideline for bronchiectasis in adults — seção de major haemoptysis. Thorax. 2019. Disponível em: https://thorax.bmj.com/content/74/Suppl_1/1"
      }
    ]
  },
  {
    id: "samu-hiponatremia-grave-sintomatica",
    title: "Hiponatremia Grave / Sintomática — NaCl 3%",
    categoryId: "metabolic",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "hiponatremia",
      "sódio",
      "NaCl 3%",
      "salina hipertônica",
      "convulsão",
      "coma",
      "osmótica",
      "desmielinização osmótica",
      "metabólico"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Hiponatremia grave ou sintomática pode causar edema cerebral, convulsões, coma e morte. Na emergência, o foco é reconhecer sintomas neurológicos, estimar cronicidade, tratar risco imediato com salina hipertônica quando indicada e evitar correção excessiva."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Hiponatremia é sódio sérico abaixo de 135 mmol/L. É considerada grave em valores muito baixos ou quando há sintomas neurológicos importantes. Sintomas graves incluem convulsão, coma, rebaixamento importante, vômitos incoercíveis, instabilidade respiratória ou sinais de hipertensão intracraniana."
      },
      {
        id: "avaliacao",
        title: "Avaliação Inicial",
        content:
          "Avaliar ABCDE, glicemia, convulsão, nível de consciência, sinais de hipovolemia/hipervolemia, uso de diuréticos, antidepressivos, anticonvulsivantes, polidipsia, pós-operatório, dor/náusea, doença renal/hepática/cardiaca e endocrinopatias. Confirmar sódio, glicose, osmolaridade, potássio, função renal, urina quando possível e corrigir sódio pela hiperglicemia."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Se sintomas graves, tratar imediatamente em ambiente monitorizado.\n\n2. Controlar convulsões e proteger via aérea se necessário.\n\n3. Administrar salina hipertônica 3% conforme protocolo institucional; diretrizes europeias descrevem bolus de 150 mL de NaCl 3% em 20 minutos, com reavaliação clínica e do sódio, podendo repetir conforme sintomas e meta inicial.\n\n4. Meta inicial: pequena elevação do sódio suficiente para controlar sintomas graves, não normalização rápida.\n\n5. Monitorizar sódio sérico seriado, diurese e estado neurológico.\n\n6. Investigar e tratar causa: hipovolemia, SIADH, insuficiência adrenal, hipotireoidismo, diuréticos, polidipsia, insuficiência renal, cirrose, IC, pós-operatório.\n\n7. Se risco de correção excessiva, considerar medidas para frear/reverter correção conforme especialista/protocolo local."
      },
      {
        id: "seguranca",
        title: "Limites de Correção e Segurança",
        content:
          "Evitar correção excessiva pelo risco de síndrome de desmielinização osmótica, especialmente em alcoolismo, desnutrição, doença hepática, hipocalemia e hiponatremia crônica. Diretrizes recomendam limites diários de correção e monitorização frequente; usar meta conservadora em pacientes de alto risco."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não corrigir hiponatremia crônica assintomática como emergência. Não usar soro fisiológico indiscriminadamente em SIADH grave sem avaliar risco de piora. Hiperglicemia causa hiponatremia translocacional e exige correção interpretativa. Convulsão em hiponatremia sintomática é indicação de terapia imediata."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. European Journal of Endocrinology. 2014. Disponível em: https://pubmed.ncbi.nlm.nih.gov/24569125/\n\nRondon-Berrios H, Sterns RH. Hypertonic Saline for Hyponatremia: Meeting Goals and Avoiding Harm. 2023. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC10332848/"
      }
    ]
  },
  {
    id: "samu-intoxicacao-digitalica-fab",
    title: "Intoxicação Digitálica — Anticorpos Fab",
    categoryId: "intoxication",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "intoxicação digitálica",
      "digoxina",
      "digital",
      "cardioglicosídeo",
      "fab",
      "digoxin immune fab",
      "hipercalemia",
      "bradiarritmia",
      "taquiarritmia ventricular",
      "toxicologia"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Intoxicação digitálica pode causar arritmias potencialmente fatais, instabilidade hemodinâmica, sintomas gastrointestinais, neurológicos e distúrbios eletrolíticos. O tratamento específico de casos graves é o anticorpo antidigoxina/Digoxin immune Fab, quando disponível."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Toxicidade por digoxina ou outros cardioglicosídeos, aguda ou crônica, associada à inibição da bomba Na+/K+-ATPase. Pode ser precipitada por dose excessiva, função renal reduzida, idade avançada, interação medicamentosa, hipocalemia, hipomagnesemia, hipercalcemia ou ingestão de plantas cardiotóxicas."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em paciente em uso de digoxina com náuseas, vômitos, dor abdominal, confusão, fraqueza, alterações visuais, bradicardia, bloqueios AV, extrassístoles, taquiarritmias, arritmia ventricular, instabilidade ou hipercalemia, especialmente se houver doença renal ou interação medicamentosa."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, monitorizar ECG contínuo, PA, SpO2 e nível de consciência.\n\n2. Obter acesso venoso e coletar eletrólitos, função renal, magnésio, cálcio, gasometria conforme gravidade e nível sérico de digoxina quando disponível.\n\n3. Suspender digoxina e fármacos associados a piora.\n\n4. Corrigir hipocalemia/hipomagnesemia com cautela nos casos crônicos, conforme protocolo.\n\n5. Em toxicidade aguda com hipercalemia, instabilidade ou arritmia ameaçadora, acionar toxicologia/CIATox e indicar Digoxin immune Fab se disponível.\n\n6. Tratar bradiarritmias sintomáticas com suporte ACLS; atropina pode ser usada, mas bloqueios graves frequentemente exigem Fab e suporte avançado.\n\n7. Evitar cardioversão elétrica salvo instabilidade ameaçadora, usando menor energia eficaz, pois pode precipitar arritmias em toxicidade digitálica.\n\n8. Carvão ativado pode ser considerado em ingestão aguda recente, se via aérea protegida e sem contraindicações."
      },
      {
        id: "fab",
        title: "Indicações Práticas de Anticorpos Fab",
        content:
          "Considerar Fab em toxicidade potencialmente fatal: parada cardíaca, arritmias ventriculares, bradicardia/bloqueio avançado com instabilidade, hipercalemia significativa em intoxicação aguda, choque, ingestão maciça ou nível muito elevado com quadro compatível. A dose depende do contexto, quantidade ingerida, concentração sérica e gravidade; seguir protocolo local e orientação do CIATox."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Após Fab, o nível sérico total de digoxina pode ficar artificialmente elevado e não deve guiar resposta clínica. Em pacientes dependentes de digoxina para controle de IC/FA, pode haver piora após reversão. Diálise não remove digoxina de forma eficaz. Em intoxicação por plantas cardioglicosídicas, Fab pode ser necessário, mas a resposta varia."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Andrews P, et al. Diagnosis and practical management of digoxin toxicity: a narrative review and consensus. European Journal of Emergency Medicine. 2023. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC10599802/\n\nAmerican Heart Association. Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning. 2023. Disponível em: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001161"
      }
    ]
  }
];
