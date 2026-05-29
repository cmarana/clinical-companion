import type { EmergencyProtocol } from "./types";

export const samuP2MissingBatch1Protocols: EmergencyProtocol[] = [
  {
    id: "samu-angioedema-histaminergico-bradicininergico",
    title: "Angioedema — Histaminérgico vs. Bradicininérgico",
    categoryId: "other-emergencies",
    tags: [
      "angioedema",
      "anafilaxia",
      "bradicinina",
      "histamina",
      "edema de glote",
      "via aérea",
      "icatibanto",
      "c1-inibidor",
      "ieca",
      "alergia"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Angioedema é edema súbito de pele, mucosas ou submucosas, podendo acometer face, lábios, língua, orofaringe, laringe, trato gastrointestinal e vias aéreas. Na emergência, a prioridade é reconhecer ameaça de via aérea e diferenciar quadros histaminérgicos, geralmente associados a urticária/anafilaxia, dos bradicininérgicos, como angioedema hereditário ou induzido por inibidor da ECA."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Angioedema histaminérgico costuma ter instalação rápida, prurido, urticária, broncoespasmo, hipotensão ou relação com alérgeno. Angioedema bradicininérgico costuma não ter urticária/prurido, pode evoluir por horas, acometer trato gastrointestinal e responder pouco a adrenalina, anti-histamínicos e corticoides."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Perguntar início e progressão, presença de urticária, prurido, dispneia, rouquidão, disfagia, sialorreia, dor abdominal, hipotensão, exposição a alimentos/medicamentos/picadas, uso de IECA ou sacubitril/valsartana, história familiar, episódios prévios e diagnóstico de angioedema hereditário."
      },
      {
        id: "gravidade",
        title: "Sinais de Gravidade",
        content:
          "Alto risco: estridor, voz abafada, rouquidão progressiva, edema de língua ou assoalho de boca, disfagia, sialorreia, dispneia, hipoxemia, edema cervical, progressão rápida, hipotensão, broncoespasmo, síncope, alteração do nível de consciência ou necessidade de múltiplas doses de adrenalina."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE e chamar ajuda precoce se houver risco de via aérea.\n\n2. Não esperar deterioração para acionar anestesia, emergência avançada, otorrino ou equipe de via aérea difícil.\n\n3. Se suspeita de anafilaxia ou angioedema histaminérgico com instabilidade: adrenalina IM imediata conforme protocolo de anafilaxia, oxigênio, acesso venoso, cristaloide se choque, anti-histamínicos e corticoide como adjuvantes.\n\n4. Se quadro bradicininérgico provável: suspender IECA/sacubitril quando aplicável, priorizar vigilância de via aérea e terapia específica quando disponível: concentrado de C1-inibidor, icatibanto, ecallantide ou plasma fresco congelado conforme protocolo local.\n\n5. Observar de perto todo paciente com edema de língua, orofaringe ou sintomas respiratórios, mesmo que inicialmente estável.\n\n6. Evitar manipulação excessiva da via aérea sem plano; preparar estratégia de intubação acordada ou via aérea cirúrgica se progressão importante."
      },
      {
        id: "diferencial",
        title: "Diferenciação Prática",
        content:
          "Histaminérgico: urticária/prurido frequente, início rápido, gatilho alérgico, pode ter broncoespasmo/hipotensão, costuma responder a adrenalina.\n\nBradicininérgico: sem urticária, edema mais profundo, dor abdominal, história familiar ou IECA, progressão por horas, resposta pobre a adrenalina/anti-histamínico/corticoide."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Angioedema por IECA pode ocorrer mesmo após anos de uso. Ausência de urticária não exclui risco de via aérea. Corticoide e anti-histamínico não substituem terapia específica em angioedema bradicininérgico. Alta só deve ocorrer com regressão sustentada, orientação de retorno e suspensão do gatilho quando identificado."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Maurer M, et al. The international WAO/EAACI guideline for the management of hereditary angioedema — the 2021 revision and update. World Allergy Organization Journal. 2022. Disponível em: https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/\n\nReshef A, et al. DANCE consensus recommendations for diagnosis, assessment, and management of angioedema. Journal of Allergy and Clinical Immunology. 2024. Disponível em: https://www.jacionline.org/article/S0091-6749(24)00407-X/fulltext"
      }
    ]
  },
  {
    id: "samu-avc-pediatrico",
    title: "AVC Pediátrico — Reconhecimento e Manejo Inicial",
    categoryId: "pediatric-emergency",
    tags: [
      "avc pediátrico",
      "avc infantil",
      "stroke",
      "pediatria",
      "déficit focal",
      "convulsão",
      "hemiparesia",
      "pedniHSS",
      "trombólise",
      "trombectomia"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "AVC pediátrico é uma emergência neurológica rara e frequentemente subdiagnosticada. Crianças podem apresentar sintomas atípicos, convulsões ou alteração do comportamento. O objetivo na emergência é reconhecer rapidamente déficit neurológico focal, excluir mimetizadores críticos e acionar centro com neurologia pediátrica e neuroimagem."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Déficit neurológico agudo por isquemia ou hemorragia cerebral em lactentes, crianças e adolescentes. A apresentação pode incluir AVC isquêmico arterial, trombose venosa cerebral, hemorragia intracraniana ou eventos secundários a cardiopatias, arteriopatias, anemia falciforme, infecção, trauma ou trombofilias."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em início súbito de hemiparesia, assimetria facial, alteração da fala, ataxia, perda visual, cefaleia intensa, crise convulsiva focal, rebaixamento, vômitos, alteração de comportamento ou déficit persistente após convulsão. Registrar horário em que foi visto bem pela última vez."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar ABCDE, glicemia capilar, temperatura, pressão arterial, SpO2 e Glasgow pediátrico.\n\n2. Tratar hipoglicemia, hipóxia, convulsão e hipertermia.\n\n3. Acionar neurologia pediátrica, neuroimagem e centro de AVC pediátrico quando disponível.\n\n4. Realizar neuroimagem urgente: TC sem contraste para excluir hemorragia quando MRI não estiver imediatamente disponível; MRI/MRA/MRV podem ser preferíveis quando acessíveis e não atrasarem decisões críticas.\n\n5. Colher hemograma, plaquetas, coagulograma, eletrólitos, função renal, glicemia, marcadores inflamatórios conforme contexto, tipagem/prova cruzada se hemorragia ou anemia falciforme, e investigar cardiopatia/infecção conforme suspeita.\n\n6. Manter normóxia, normoglicemia, normotermia e perfusão adequada.\n\n7. Não administrar antiagregante ou anticoagulação antes de excluir hemorragia e discutir com especialista.\n\n8. Terapia de reperfusão, quando considerada, deve ocorrer em centro experiente, com seleção por idade, tempo, imagem, gravidade e contraindicações."
      },
      {
        id: "mimetizadores",
        title: "Mimetizadores Importantes",
        content:
          "Hipoglicemia, crise epiléptica com paralisia de Todd, enxaqueca hemiplégica, infecção de SNC, intoxicações, tumor, trauma, distúrbios metabólicos, doença desmielinizante e síncope podem simular AVC. A presença de mimetizadores não deve atrasar avaliação de AVC quando déficit focal persiste."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Convulsão no início não exclui AVC em criança. Anemia falciforme com déficit neurológico é emergência e pode exigir transfusão/exsanguíneotransfusão conforme protocolo especializado. Cefaleia súbita intensa com vômitos ou rebaixamento exige excluir hemorragia."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Ferriero DM, et al. Management of Stroke in Neonates and Children: A Scientific Statement From the American Heart Association/American Stroke Association. Stroke. 2019. Disponível em: https://www.ahajournals.org/doi/10.1161/STR.0000000000000183\n\nAmerican Heart Association. 2026 guideline expands stroke treatment and offers pediatric stroke guidance. Disponível em: https://newsroom.heart.org/news/new-guideline-expands-stroke-treatment-for-adults-offers-first-pediatric-stroke-guidance"
      }
    ]
  },
  {
    id: "samu-bronquiolite-viral-aguda",
    title: "Bronquiolite Viral Aguda — Pediatria",
    categoryId: "pediatric-emergency",
    tags: [
      "bronquiolite",
      "bronquiolite viral",
      "lactente",
      "pediatria",
      "vrs",
      "sibilância",
      "hipoxemia",
      "hidratação",
      "suporte",
      "oxigênio"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Bronquiolite viral aguda é causa comum de atendimento em lactentes e crianças pequenas, especialmente por vírus sincicial respiratório. A maioria dos casos é autolimitada e o tratamento é predominantemente de suporte, com atenção a hipoxemia, apneia, exaustão respiratória e desidratação."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Infecção viral do trato respiratório inferior, geralmente em menores de 2 anos, caracterizada por rinorreia, tosse, taquipneia, sibilos, crepitações, aumento do trabalho respiratório e dificuldade alimentar."
      },
      {
        id: "avaliacao",
        title: "Avaliação de Gravidade",
        content:
          "Avaliar idade, prematuridade, cardiopatia, pneumopatia, imunodeficiência, saturação, frequência respiratória, tiragens, gemência, apneia, cianose, hidratação, aceitação oral e exaustão. Menores de 3 meses e prematuros têm maior risco de apneia e pior evolução."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Avaliar ABCDE, SpO2, esforço respiratório e hidratação.\n\n2. Higienizar vias aéreas superiores com solução salina e aspiração suave quando secreção prejudicar alimentação ou respiração.\n\n3. Ofertar oxigênio se hipoxemia persistente conforme protocolo local.\n\n4. Garantir hidratação oral, enteral ou venosa conforme aceitação e esforço respiratório.\n\n5. Observar necessidade de suporte ventilatório, como cânula nasal de alto fluxo ou ventilação não invasiva, em desconforto moderado/grave ou falha do oxigênio convencional.\n\n6. Exames laboratoriais, radiografia e testes virais não são rotina em quadros típicos leves; reservar para dúvida diagnóstica, gravidade, complicação ou necessidade epidemiológica.\n\n7. Internar se hipoxemia, apneia, exaustão, esforço importante, incapacidade alimentar, desidratação, comorbidade relevante, idade de alto risco ou dificuldade de retorno seguro."
      },
      {
        id: "nao-rotina",
        title: "O que Não é Rotina",
        content:
          "Broncodilatadores, corticoides, antibióticos, adrenalina nebulizada, fisioterapia respiratória e radiografia de tórax não são indicados rotineiramente em bronquiolite típica. Antibiótico deve ser reservado para suspeita de infecção bacteriana associada."
      },
      {
        id: "alta",
        title: "Critérios de Alta e Orientações",
        content:
          "Alta quando há estabilidade respiratória, hidratação adequada, cuidador orientado, oxigenação segura e possibilidade de retorno. Orientar retorno imediato se apneia, cianose, piora do esforço, recusa alimentar, sonolência, febre persistente em lactente jovem ou redução de diurese."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "American Academy of Pediatrics. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics. 2014. Disponível em: https://www.stanfordchildrens.org/content/dam/sch/content-public/pdf/aap-bronchiolitis-practice-guidelines.pdf\n\nNICE. Bronchiolitis in children: diagnosis and management. NG9. Disponível em: https://www.nice.org.uk/guidance/ng9\n\nCanadian Paediatric Society. Bronchiolitis: Recommendations for diagnosis, monitoring and management. Disponível em: https://cps.ca/en/documents/position/bronchiolitis"
      }
    ]
  },
  {
    id: "samu-chikungunya-manejo-agudo-subagudo",
    title: "Chikungunya — Manejo Agudo e Subagudo",
    categoryId: "infectious",
    tags: [
      "chikungunya",
      "arbovirose",
      "artralgia",
      "febre",
      "dengue",
      "zika",
      "analgesia",
      "anti-inflamatório",
      "sinais de gravidade",
      "ms brasil"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Chikungunya é arbovirose caracterizada por febre aguda e artralgia intensa, frequentemente incapacitante, podendo evoluir para fase subaguda ou crônica com dor articular persistente. Na emergência, é essencial diferenciar de dengue, reconhecer sinais de gravidade e evitar anti-inflamatórios antes de afastar dengue."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Infecção viral transmitida por mosquitos Aedes spp. A fase aguda geralmente ocorre nos primeiros dias a semanas, com febre, poliartralgia, edema articular, mialgia, cefaleia e exantema. A fase subaguda pode manter dor articular, tenossinovite, rigidez e limitação funcional."
      },
      {
        id: "identificacao",
        title: "Rastreamento e Identificação",
        content:
          "Suspeitar em paciente com febre de início súbito e artralgia intensa, simétrica ou poliarticular, especialmente em contexto epidemiológico. Investigar sinais de dengue grave, sangramentos, hipotensão, dor abdominal intensa, vômitos persistentes, gestação, idosos, neonatos, doença renal, cardiopatia, imunossupressão e uso de anticoagulantes."
      },
      {
        id: "conduta",
        title: "Conduta Inicial",
        content:
          "1. Avaliar sinais vitais, hidratação, dor, sangramentos, sinais de alarme de dengue e comorbidades.\n\n2. Enquanto dengue não for descartada, evitar AAS e anti-inflamatórios não esteroidais.\n\n3. Usar analgesia/antitérmico seguro, como paracetamol ou dipirona conforme contraindicações e protocolo local.\n\n4. Orientar hidratação, repouso relativo e retorno se sinais de alarme.\n\n5. Solicitar exames conforme gravidade e diagnóstico diferencial: hemograma, plaquetas, função renal/hepática, marcadores inflamatórios e testes específicos conforme fase/epidemiologia.\n\n6. Em dor persistente subaguda, considerar escalonamento analgésico e avaliação para anti-inflamatório apenas após exclusão de dengue e contraindicações.\n\n7. Encaminhar casos graves, gestantes, neonatos, idosos frágeis, imunossuprimidos, comorbidades descompensadas, sinais neurológicos, cardíacos, renais ou sangramentos."
      },
      {
        id: "gravidade",
        title: "Sinais de Gravidade e Complicações",
        content:
          "Complicações podem incluir encefalite, miocardite, hepatite, insuficiência renal, descompensação de comorbidades, manifestações hemorrágicas e dor articular incapacitante persistente. Neonatos expostos no periparto e idosos com comorbidades são grupos de maior risco."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Chikungunya, dengue e zika podem coexistir na mesma região e ter sintomas sobrepostos. Anti-inflamatório antes de afastar dengue aumenta risco de sangramento. Dor intensa não significa gravidade isoladamente, mas incapacidade funcional importante exige plano analgésico e seguimento."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Ministério da Saúde. Chikungunya: manejo clínico — 2ª edição. 2024. Disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/guia-chikungunya-manejo-clinico-2o-edicao.pdf\n\nOPAS/OMS. Chikungunya. Disponível em: https://www.paho.org/pt/topicos/chikungunya"
      }
    ]
  },
  {
    id: "samu-crise-vaso-oclusiva-falciforme",
    title: "Crise Vaso-Oclusiva em Doença Falciforme",
    categoryId: "other-emergencies",
    tags: [
      "doença falciforme",
      "crise vaso-oclusiva",
      "anemia falciforme",
      "dor",
      "opioide",
      "síndrome torácica aguda",
      "febre",
      "hidratação",
      "transfusão",
      "hematologia"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Crise vaso-oclusiva é causa frequente de dor aguda em pessoas com doença falciforme e exige analgesia rápida, individualizada e sem julgamento. A emergência também deve procurar complicações graves, como síndrome torácica aguda, sepse, AVC, sequestro esplênico, priapismo e anemia aguda."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Episódio doloroso causado por vaso-oclusão microvascular, inflamação e isquemia tecidual. Pode ocorrer em ossos, tórax, abdome, dorso e extremidades, frequentemente precipitado por infecção, desidratação, frio, hipóxia, estresse ou sem gatilho evidente."
      },
      {
        id: "avaliacao",
        title: "Avaliação Inicial",
        content:
          "Avaliar intensidade da dor, padrão usual do paciente, plano analgésico prévio, febre, tosse, dor torácica, dispneia, SpO2, déficit neurológico, cefaleia, dor abdominal, esplenomegalia, priapismo, gestação e sinais de choque. Verificar hemograma/reticulócitos, função renal, bilirrubina, LDH, tipagem/prova cruzada e imagem conforme sintomas."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Triar como dor aguda potencialmente grave e administrar analgesia rapidamente.\n\n2. Usar analgesia escalonada conforme intensidade e plano individual. Opioides podem ser necessários em dor moderada/grave.\n\n3. Reavaliar dor e sedação em intervalos curtos, titulando analgesia até controle adequado.\n\n4. Manter hidratação adequada, evitando hiper-hidratação.\n\n5. Ofertar oxigênio apenas se hipoxemia ou indicação clínica; oxigênio não é analgésico de rotina.\n\n6. Investigar e tratar gatilhos, especialmente infecção.\n\n7. Se febre, coletar culturas conforme protocolo e iniciar antibiótico empírico oportuno, pelo risco de infecção grave.\n\n8. Se dor torácica, febre, hipoxemia, tosse ou infiltrado novo: tratar como síndrome torácica aguda e acionar hematologia/UTI.\n\n9. Considerar transfusão/exsanguíneotransfusão em síndrome torácica grave, AVC, anemia sintomática importante, falência orgânica ou orientação hematológica."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não subestimar dor por ausência de sinais externos. Atrasos analgésicos pioram sofrimento e desfechos. NSAIDs podem ser úteis por curto período, mas avaliar função renal, sangramento, gastrite, gestação e outras contraindicações. Priapismo prolongado é emergência urológica."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "American Society of Hematology. 2020 Guidelines for Sickle Cell Disease: Management of Acute and Chronic Pain. Disponível em: https://ashpublications.org/bloodadvances/article/4/12/2656/460974/American-Society-of-Hematology-2020-guidelines-for\n\nAmerican Society of Hematology. Sickle Cell Disease Guidelines and Quality Care. Disponível em: https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/sickle-cell-disease-guidelines\n\nMinistério da Saúde. Doença Falciforme: diretrizes básicas da linha de cuidado. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/doenca_falciforme_diretrizes_basicas_linha_cuidado.pdf"
      }
    ]
  },
  {
    id: "samu-tetano-acidental-profilaxia-tratamento",
    title: "Tétano Acidental — Profilaxia e Tratamento",
    categoryId: "infectious",
    tags: [
      "tétano",
      "tétano acidental",
      "ferimento",
      "imunoglobulina antitetânica",
      "vacina antitetânica",
      "espasmo",
      "trismo",
      "clostridium tetani",
      "profilaxia",
      "uti"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Tétano acidental é doença grave, potencialmente fatal, causada por neurotoxina do Clostridium tetani. Na emergência, é fundamental avaliar ferimentos quanto ao risco, atualizar profilaxia vacinal/imunoglobulina quando indicada e reconhecer precocemente quadro clínico com trismo, rigidez e espasmos."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Infecção não contagiosa por esporos de C. tetani, introduzidos por ferimentos contaminados, queimaduras, mordeduras, lesões por esmagamento, necrose, abscessos, feridas crônicas ou procedimentos sem assepsia. A toxina tetânica causa hiperatividade neuromuscular e disautonomia."
      },
      {
        id: "profilaxia",
        title: "Profilaxia Pós-Exposição",
        content:
          "Avaliar tipo de ferimento e situação vacinal. Ferimentos limpos e superficiais têm menor risco; ferimentos profundos, contaminados, com tecido desvitalizado, terra, fezes, saliva, mordedura, esmagamento, queimadura, congelamento ou necrose são de maior risco.\n\nConduta envolve limpeza/debridamento, vacinação antitetânica quando esquema incompleto/desconhecido ou reforço indicado, e imunoglobulina humana antitetânica em situações de alto risco conforme esquema vacinal e protocolo do Ministério da Saúde."
      },
      {
        id: "clinica",
        title: "Apresentação Clínica",
        content:
          "Trismo, disfagia, rigidez cervical, contratura abdominal, opistótono, espasmos dolorosos desencadeados por estímulos, sudorese, febre, taquicardia, hipertensão lábil, arritmias e instabilidade autonômica. O paciente geralmente mantém consciência preservada, com dor intensa durante espasmos."
      },
      {
        id: "conduta",
        title: "Tratamento do Caso Suspeito",
        content:
          "1. Internar em ambiente silencioso, com redução de estímulos e monitorização.\n\n2. Avaliar via aérea, risco de laringoespasmo, aspiração e insuficiência respiratória.\n\n3. Realizar limpeza cirúrgica/debridamento do foco quando aplicável.\n\n4. Administrar imunoglobulina humana antitetânica conforme protocolo para neutralizar toxina não ligada.\n\n5. Iniciar antibiótico, geralmente metronidazol, conforme protocolo local.\n\n6. Controlar espasmos com benzodiazepínicos e suporte intensivo; casos graves podem exigir sedação profunda, bloqueio neuromuscular e ventilação mecânica.\n\n7. Tratar disautonomia em UTI.\n\n8. Atualizar vacinação, pois a doença não confere imunidade adequada."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Não esperar confirmação laboratorial para tratar suspeita clínica. Pequenos ferimentos podem causar tétano se a vacinação estiver inadequada. Antibiótico e debridamento não substituem imunoglobulina quando indicada. Estímulos luminosos, sonoros e manipulação podem precipitar espasmos."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Ministério da Saúde. Guia de Vigilância em Saúde — Tétano Acidental. 6ª edição revisada, 2024. Disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tetano-acidental/publicacoes/guia-de-vigilancia-em-saude-6a-edicao.pdf/view\n\nMinistério da Saúde. Calendário Nacional de Vacinação. Disponível em: https://www.gov.br/saude/pt-br/vacinacao/calendario"
      }
    ]
  }
];
