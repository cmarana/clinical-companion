import type { EmergencyProtocol } from "./types";
import { SAMU_REFERENCE, SAMU_REFERENCE_TEXT } from "./samuReference";

export const samuP1MissingBatch3Protocols: EmergencyProtocol[] = [
  {
    id: "samu-isquemia-mesenterica-aguda",
    title: "Isquemia Mesentérica Aguda",
    categoryId: "gastroenterology-emergency",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "isquemia mesentérica",
      "abdome agudo",
      "dor abdominal desproporcional",
      "lactato",
      "angioTC",
      "vascular",
      "cirurgia",
      "fibrilação atrial",
      "embolia",
      "trombose"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Isquemia mesentérica aguda é uma emergência vascular abdominal com alta mortalidade quando o diagnóstico e a reperfusão atrasam. Deve ser suspeitada diante de dor abdominal intensa, especialmente desproporcional ao exame físico inicial, em pacientes com fatores de risco tromboembólicos, vasculares ou estados de baixo fluxo."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Redução abrupta do fluxo sanguíneo intestinal por embolia arterial, trombose arterial, trombose venosa mesentérica ou isquemia não oclusiva. A evolução pode levar a necrose intestinal, perfuração, sepse, choque e óbito."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em dor abdominal súbita e intensa, dor desproporcional ao exame, náuseas, vômitos, diarreia, sangramento gastrointestinal, distensão, acidose, lactato elevado, leucocitose, choque ou deterioração. Fatores de risco: fibrilação atrial, IAM recente, insuficiência cardíaca, aterosclerose, doença vascular periférica, trombofilias, vasopressores, sepse, diálise, cirurgia vascular recente e estados de hipoperfusão."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, sinais de choque, perfusão, dor, vômitos e sinais peritoneais.\n\n2. Monitorizar, obter dois acessos venosos calibrosos, coletar hemograma, eletrólitos, função renal, gasometria, lactato, coagulograma, tipagem/prova cruzada e ECG.\n\n3. Manter jejum, analgesia adequada e reposição volêmica guiada por perfusão.\n\n4. Iniciar antibiótico de amplo espectro se suspeita moderada/alta, sinais de isquemia avançada, peritonite, sepse ou necrose.\n\n5. Solicitar angiotomografia de abdome e pelve com contraste o mais rápido possível, se não houver instabilidade que exija laparotomia imediata.\n\n6. Acionar cirurgia geral/vascular precocemente. Não aguardar piora ou confirmação tardia quando a suspeita for alta.\n\n7. Considerar anticoagulação sistêmica, especialmente em trombose/embolia sem contraindicação, após discussão com cirurgia/vascular e avaliação de sangramento.\n\n8. Se peritonite, perfuração, choque refratário ou necrose provável: abordagem cirúrgica imediata."
      },
      {
        id: "diagnostico",
        title: "Diagnóstico",
        content:
          "A angiotomografia é o exame de escolha na maioria dos pacientes estáveis o suficiente para imagem. Lactato normal não exclui isquemia inicial. Radiografia simples tem baixa sensibilidade e não deve atrasar angioTC. A ausência de achados exuberantes no exame físico precoce é típica e não deve tranquilizar."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Dor abdominal desproporcional ao exame em paciente com fibrilação atrial deve ser tratada como isquemia mesentérica até prova em contrário. Atraso diagnóstico aumenta necrose intestinal. Evitar subtratamento da dor. Contraste pode ser necessário mesmo com disfunção renal quando o risco de morte por isquemia é alto."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Bala M, et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World Journal of Emergency Surgery. 2022. Disponível em: https://wjes.biomedcentral.com/articles/10.1186/s13017-022-00443-x\n\nEuropean Society for Trauma and Emergency Surgery / WSES. Acute mesenteric ischemia updated guidelines. Disponível em: https://pubmed.ncbi.nlm.nih.gov/36261857/"
      }
    ]
  },
  {
    id: "samu-leptospirose-grave-weil",
    title: "Leptospirose Grave — Síndrome de Weil",
    categoryId: "infectious",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "leptospirose",
      "síndrome de weil",
      "icterícia",
      "insuficiência renal",
      "hemorragia pulmonar",
      "enchente",
      "doxiciclina",
      "ceftriaxona",
      "penicilina cristalina",
      "zoonose",
      "ms brasil"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Leptospirose é zoonose de importância no Brasil, especialmente após enchentes, exposição a água/lama contaminada e contato com urina de roedores. A forma grave pode cursar com icterícia, insuficiência renal, hemorragia pulmonar, miocardite, meningite asséptica, choque e óbito."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Infecção causada por bactérias do gênero Leptospira. A Síndrome de Weil corresponde à apresentação grave, classicamente com icterícia, lesão renal aguda e sangramentos, podendo evoluir com hemorragia pulmonar e insuficiência respiratória."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em febre aguda com mialgia intensa, especialmente em panturrilhas, cefaleia, conjuntival suffusion, náuseas, vômitos, diarreia, icterícia, oligúria, sangramentos, dispneia ou exposição recente a enchentes, esgoto, lama, roedores, limpeza de áreas alagadas, atividades rurais ou animais."
      },
      {
        id: "gravidade",
        title: "Sinais de Gravidade",
        content:
          "Icterícia, oligúria/anúria, creatinina elevada, dispneia, hemoptise, sangramento, hipotensão, arritmia, alteração do nível de consciência, meningismo, plaquetopenia importante, acidose, hipercalemia, choque, insuficiência respiratória ou suspeita de hemorragia pulmonar indicam alto risco."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, sinais vitais, perfusão, diurese, padrão respiratório e sangramentos.\n\n2. Coletar hemograma, plaquetas, creatinina, ureia, eletrólitos, bilirrubinas, transaminases, CPK se mialgia intensa, coagulograma, gasometria/lactato, urina e exames microbiológicos conforme fase/protocolo local.\n\n3. Iniciar antibiótico precocemente quando suspeita clínica for relevante, sem aguardar confirmação laboratorial.\n\n4. Em casos leves, considerar doxiciclina ou amoxicilina conforme protocolo local e contraindicações.\n\n5. Em casos graves, usar antibiótico parenteral conforme protocolo: penicilina cristalina, ceftriaxona ou cefotaxima são opções descritas pelo Ministério da Saúde.\n\n6. Repor volume com cautela, monitorando risco de insuficiência respiratória e lesão renal.\n\n7. Tratar choque, hipercalemia, acidose, hemorragia pulmonar e insuficiência respiratória conforme protocolos específicos.\n\n8. Encaminhar para hospital/UTI quando houver sinais de gravidade."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não esperar sorologia para tratar paciente grave. Icterícia na leptospirose pode ser intensa com transaminases apenas moderadamente elevadas. Hemorragia pulmonar pode surgir de forma rápida e grave. Considerar diagnósticos diferenciais como dengue grave, malária, hepatites, febre amarela, hantavirose, sepse e riquetsioses."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Ministério da Saúde. Leptospirose: diagnóstico e manejo clínico. Disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leptospirose/publicacoes/leptospirose-diagnostico-e-manejo-clinico-2014.pdf/view\n\nMinistério da Saúde. Nota Técnica nº 16/2024 — recomendações de conduta clínica e terapêutica para leptospirose. Disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2024/nota-tecnica-no-16-2024-cgzv-dedt-svsa-ms"
      }
    ]
  },
  {
    id: "samu-malaria-grave-artesunato",
    title: "Malária Grave — Artesunato EV",
    categoryId: "infectious",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "malária grave",
      "artesunato",
      "plasmodium falciparum",
      "malária cerebral",
      "hipoglicemia",
      "anemia grave",
      "amazônia",
      "febre",
      "gota espessa",
      "who",
      "ms brasil"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Malária grave é emergência infecciosa potencialmente fatal. Deve ser suspeitada em paciente febril com exposição em área endêmica, especialmente Amazônia Legal ou viagem recente, associado a alteração neurológica, choque, anemia grave, icterícia, insuficiência renal, hipoglicemia, acidose ou desconforto respiratório."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Infecção por Plasmodium com critérios de gravidade clínica ou laboratorial. Plasmodium falciparum é a principal espécie associada à forma grave, mas outras espécies também podem causar complicações em situações específicas."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Perguntar residência/viagem para área endêmica, data de retorno, episódios prévios, uso de profilaxia, gestação, imunossupressão e tratamento antimalárico recente. Investigar febre, calafrios, cefaleia, vômitos, diarreia, icterícia, prostração, convulsão, confusão, dispneia, oligúria ou sangramentos."
      },
      {
        id: "gravidade",
        title: "Critérios de Gravidade",
        content:
          "Sinais de gravidade incluem alteração do nível de consciência, convulsões repetidas, choque, acidose, insuficiência respiratória, hipoglicemia, anemia grave, insuficiência renal, icterícia com disfunção orgânica, sangramento, hemoglobinúria, hiperparasitemia ou incapacidade de ingerir medicação oral."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, glicemia capilar, temperatura, perfusão, nível de consciência, diurese e sinais respiratórios.\n\n2. Coletar gota espessa/teste rápido conforme disponibilidade, hemograma, plaquetas, bilirrubinas, transaminases, creatinina, ureia, eletrólitos, gasometria/lactato, glicose e parasitemia quando possível.\n\n3. Não atrasar tratamento em paciente com alta suspeita e gravidade.\n\n4. Tratar hipoglicemia, convulsões, choque, anemia grave, insuficiência renal e insuficiência respiratória conforme protocolos.\n\n5. Iniciar artesunato parenteral para malária grave conforme diretriz nacional/OMS e disponibilidade.\n\n6. Após melhora clínica e possibilidade de via oral, completar tratamento com esquema oral apropriado para espécie, sensibilidade e protocolo local.\n\n7. Notificar e acionar serviço de referência/regulação em áreas não endêmicas."
      },
      {
        id: "tratamento",
        title: "Abordagem Terapêutica",
        content:
          "A OMS recomenda artesunato parenteral como tratamento de escolha para malária grave. A dose deve seguir protocolo por peso e faixa etária. Monitorar glicemia, parasitemia, hemólise tardia pós-artesunato, anemia, função renal e complicações neurológicas. Quinina parenteral é alternativa apenas quando artesunato não estiver disponível, conforme orientação local."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Febre em paciente vindo de área endêmica deve levantar hipótese de malária mesmo com sintomas inespecíficos. Gota espessa negativa inicial não exclui completamente se suspeita forte; repetir conforme protocolo. Gestantes, crianças, idosos e não imunes têm maior risco de gravidade."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "World Health Organization. WHO Guidelines for malaria. Updated 13 August 2025. Disponível em: https://www.who.int/publications/i/item/guidelines-for-malaria\n\nMinistério da Saúde. Guia de tratamento da malária no Brasil. Disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria"
      }
    ]
  },
  {
    id: "samu-sepse-neonatal-precoce-tardia",
    title: "Sepse Neonatal Precoce e Tardia",
    categoryId: "neonatal",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "sepse neonatal",
      "sepse precoce",
      "sepse tardia",
      "recém-nascido",
      "neonato",
      "ampicilina",
      "gentamicina",
      "meningite neonatal",
      "choque neonatal",
      "uti neonatal"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Sepse neonatal é emergência de alta morbimortalidade, especialmente em recém-nascidos prematuros, baixo peso, com fatores de risco perinatais ou sinais clínicos inespecíficos. O reconhecimento precoce e antibiótico oportuno são determinantes."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Sepse neonatal precoce geralmente ocorre nas primeiras 72 horas de vida e está relacionada a transmissão vertical/periparto. Sepse neonatal tardia ocorre após esse período e pode estar associada a ambiente hospitalar, dispositivos invasivos, prematuridade, infecção comunitária ou assistência neonatal prolongada."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Sinais são frequentemente inespecíficos: hipoatividade, irritabilidade, instabilidade térmica, recusa alimentar, vômitos, distensão abdominal, apneia, gemência, tiragens, cianose, taquicardia/bradicardia, má perfusão, hipotensão, letargia, convulsão, icterícia precoce/intensa ou hipoglicemia."
      },
      {
        id: "fatores-risco",
        title: "Fatores de Risco",
        content:
          "Sepse precoce: prematuridade, bolsa rota prolongada, febre materna, corioamnionite, colonização por Streptococcus do grupo B sem profilaxia adequada, infecção urinária materna, parto prematuro espontâneo e sofrimento fetal.\n\nSepse tardia: prematuridade, cateteres, ventilação mecânica, nutrição parenteral, internação prolongada, procedimentos invasivos, baixo peso e exposição hospitalar."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE neonatal, temperatura, glicemia, perfusão, padrão respiratório, apneia e sinais de choque.\n\n2. Monitorizar, oferecer suporte térmico, oxigenação/ventilação conforme necessidade e corrigir hipoglicemia.\n\n3. Coletar hemocultura antes de antibiótico quando isso não atrasar tratamento.\n\n4. Solicitar hemograma, PCR/procalcitonina conforme protocolo local, gasometria/lactato, glicemia, eletrólitos, função renal e líquor se suspeita de meningite e estabilidade permitir.\n\n5. Iniciar antibiótico empírico imediatamente em neonato sintomático ou com alto risco conforme protocolo institucional.\n\n6. Esquemas comuns para sepse precoce incluem ampicilina associada a gentamicina, ajustados ao perfil local. Em sepse tardia, considerar cobertura para patógenos hospitalares conforme unidade e risco.\n\n7. Tratar choque neonatal com suporte ventilatório, volume cauteloso, vasopressores/inotrópicos e UTI neonatal.\n\n8. Reavaliar diariamente necessidade e duração de antibiótico com base em culturas, evolução e biomarcadores."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Neonato grave pode não fazer febre. Hipotermia pode ser sinal de sepse. Não atrasar antibiótico em neonato sintomático. Doses devem ser calculadas por peso, idade gestacional, idade pós-natal e função renal. Ceftriaxona é evitada em muitos neonatos por risco de kernicterus e precipitação com cálcio; seguir protocolo neonatal local."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Sociedade Brasileira de Pediatria. Sepse neonatal precoce e abordagem do recém-nascido de risco. Disponível em: https://www.sbp.com.br/fileadmin/user_upload/23488c-DC_Sepse_neonatal_precoce_e_abordagem_RN_de_risco.pdf\n\nStocker M, et al. Management of neonates at risk of early onset sepsis: probability-based approach and recent literature appraisal. European Journal of Pediatrics. 2024. Disponível em: https://link.springer.com/article/10.1007/s00431-024-05811-0"
      }
    ]
  },
  {
    id: "samu-sepse-pediatrica-phoenix",
    title: "Sepse Pediátrica — Phoenix Criteria 2024",
    categoryId: "pediatric-emergency",
    samuCodes: [],
    samuLevel: [],
    samuSource: SAMU_REFERENCE,
    tags: [
      "sepse pediátrica",
      "choque séptico pediátrico",
      "phoenix criteria",
      "phoenix sepsis score",
      "pediatria",
      "lactato",
      "vasoativo",
      "antibiótico",
      "surviving sepsis campaign",
      "sccm"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Sepse pediátrica é disfunção orgânica potencialmente fatal causada por resposta desregulada à infecção. A atualização internacional de 2024 propôs os critérios Phoenix para identificar sepse em crianças com suspeita de infecção, usando disfunções respiratória, cardiovascular, coagulação e neurológica."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Pelos critérios Phoenix 2024, sepse pediátrica é identificada por Phoenix Sepsis Score ≥ 2 em criança com suspeita de infecção, refletindo disfunção orgânica potencialmente ameaçadora à vida. Choque séptico pediátrico envolve sepse com disfunção cardiovascular significativa, incluindo necessidade de vasoativo, lactato elevado ou hipotensão conforme o escore."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em criança com infecção possível/provável e alteração de perfusão, taquicardia persistente, extremidades frias ou quentes com pulsos amplos, enchimento capilar alterado, hipotensão, alteração do nível de consciência, desconforto respiratório, hipoxemia, oligúria, petéquias/púrpura, febre ou hipotermia."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, peso estimado, glicemia, perfusão, consciência, trabalho respiratório e sinais de choque.\n\n2. Monitorizar SpO2, ECG, pressão arterial, temperatura e diurese quando possível.\n\n3. Obter acesso venoso ou intraósseo rapidamente se choque ou dificuldade de acesso.\n\n4. Coletar culturas e exames sem atrasar antibiótico em paciente grave.\n\n5. Administrar antibiótico de amplo espectro precocemente em sepse/choque séptico, conforme foco provável, idade, imunização, epidemiologia e protocolo local.\n\n6. Em choque, administrar fluidos em bolus menores e reavaliados frequentemente, observando hepatomegalia, crepitações, piora respiratória e sinais de sobrecarga.\n\n7. Se choque persistente após fluidos iniciais ou se houver risco de sobrecarga, iniciar vasoativo precocemente conforme protocolo e disponibilidade.\n\n8. Tratar hipoglicemia, hipocalcemia, febre, convulsões e insuficiência respiratória.\n\n9. Acionar UTI pediátrica/regulação em choque, disfunção orgânica, necessidade de vasoativo, ventilação ou lactato elevado."
      },
      {
        id: "phoenix",
        title: "Phoenix Criteria 2024 — Uso Prático",
        content:
          "O Phoenix Sepsis Score avalia quatro domínios: respiratório, cardiovascular, coagulação e neurológico. Na prática da emergência, ele ajuda a padronizar reconhecimento de disfunção orgânica, mas não deve atrasar tratamento. Criança com suspeita de infecção e sinais de choque ou deterioração deve receber pacote inicial imediatamente, mesmo antes do escore completo."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Hipotensão é sinal tardio em crianças. Taquicardia persistente, alteração de perfusão e mudança de comportamento podem ser os primeiros sinais. Excesso de fluidos aumenta risco de piora respiratória; reavaliar após cada bolus. Imunossuprimidos, lactentes jovens, crianças com doença crônica e meningococcemia suspeita são alto risco."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Schlapbach LJ, et al. International Consensus Criteria for Pediatric Sepsis and Septic Shock. JAMA. 2024. Disponível em: https://jamanetwork.com/journals/jama/fullarticle/2814297\n\nSanchez-Pinto LN, et al. Development and Validation of the Phoenix Criteria for Pediatric Sepsis and Septic Shock. JAMA. 2024. Disponível em: https://jamanetwork.com/journals/jama/fullarticle/2814296\n\nWeiss SL, et al. Surviving Sepsis Campaign International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children. Pediatric Critical Care Medicine. 2020. Disponível em: https://journals.lww.com/pccmjournal/fulltext/2020/02000/surviving_sepsis_campaign_international_guidelines.20.aspx"
      }
    ]
  }
];
