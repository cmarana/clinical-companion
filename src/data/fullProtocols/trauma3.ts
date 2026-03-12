import type { FullProtocol } from "./types";

export const traumaFullProtocols3: FullProtocol[] = [
  {
    id: "fp-trauma-pelvico", title: "Trauma Pélvico", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["pelve", "fratura", "lençol", "angioembolização", "retroperitônio"],
    sections: [
      { id: "intro", title: "Introdução", content: "Fraturas pélvicas são responsáveis por alta mortalidade (até 50% em fraturas instáveis) pela hemorragia retroperitoneal. Classificação de Young-Burgess orienta o manejo. Lençol pélvico é medida imediata." },
      { id: "def", title: "Definição", content: "Fratura do anel pélvico por mecanismo de alta energia.\n\nClassificação de Young-Burgess:\n• APC (compressão anteroposterior): I, II, III\n• LC (compressão lateral): I, II, III — mais comum\n• VS (cisalhamento vertical): mais instável\n• CM (mecanismo combinado)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Instabilidade pélvica à compressão (fazer UMA vez), encurtamento de membro, sangue no meato uretral, hematoma perineal. Rx pelve AP no survey primário." },
      { id: "etiology", title: "Etiologia", content: "Alta energia: acidente de trânsito, atropelamento, queda de altura. Baixa energia em idosos com osteoporose." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor pélvica intensa, instabilidade hemodinâmica (hemorragia retroperitoneal pode acumular > 2L), incapacidade de deambular, assimetria de membros, sangue no meato uretral, lesões associadas (bexiga 10-20%, uretra 5-10%)." },
      { id: "diagnosis", title: "Diagnóstico", content: "1. Rx pelve AP\n2. FAST/eFAST\n3. TC pelve com contraste (se estável)\n4. Uretrocistografia retrógrada (lesão uretral)\n5. Hemograma seriado, tipagem, coagulograma\n6. Lactato + gasometria" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Fratura acetabular isolada, fratura de fêmur proximal, lesão de quadril sem fratura, hemorragia intra-abdominal." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Lençol pélvico ou cinta (ao nível dos trocanteres)\n2. Ressuscitação com cristaloide + hemoderivados\n3. TXA 1g IV\n4. NÃO passar SVD se sangue no meato\n5. Estável → TC → fixação eletiva\n6. Instável + FAST− → angioembolização\n7. Instável + FAST+ → laparotomia → packing" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Protocolo de transfusão maciça CH:PFC:PLQ 1:1:1. TXA 1g IV < 3h. Hipotensão permissiva (PAS 80-90). Aquecimento ativo. Fixação externa de emergência se instabilidade mecânica + hemodinâmica." },
      { id: "prescriptions", title: "Prescrições", content: "1. Lençol/cinta pélvica\n2. SF/RL IV\n3. TXA 1g IV\n4. Fentanil 50-100 mcg IV SN\n5. Dipirona 1g IV 6/6h\n6. Hemograma seriado 6/6h\n7. Tipagem + reserva 6 CH\n8. Enoxaparina 40 mg SC (após hemostasia)\n9. Monitorização contínua" },
      { id: "followup", title: "Acompanhamento", content: "Hemograma seriado, Rx controle pós-fixação, fisioterapia precoce, tromboprofilaxia (alto risco TVP), acompanhamento urológico se lesão associada." },
      { id: "complications", title: "Complicações", content: "Choque hemorrágico, TVP/TEP, lesão uretral/vesical, infecção pélvica, disfunção sexual, claudicação, dor crônica." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: instabilidade hemodinâmica, transfusão maciça, pós-angioembolização. Enfermaria: fratura estável, hemodinamicamente compensado. Alta: deambulação, controle de dor, seguimento ortopédico." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. ACS, 2018.\n2. Tile M. Fractures of the Pelvis and Acetabulum. AO, 2015.\n3. WSES Guidelines Pelvic Trauma, 2017." }
    ]
  },
  {
    id: "fp-fratura-exposta", title: "Fratura Exposta", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["fratura", "exposta", "gustilo", "desbridamento", "antibiótico"],
    sections: [
      { id: "intro", title: "Introdução", content: "Fratura com comunicação entre foco de fratura e meio externo. Emergência ortopédica pela necessidade de desbridamento e ATB precoces. Classificação de Gustilo-Anderson guia o tratamento." },
      { id: "def", title: "Definição", content: "Gustilo-Anderson:\n• Tipo I: ferida < 1 cm, contaminação mínima\n• Tipo II: ferida 1-10 cm, contaminação moderada\n• Tipo IIIA: ferida > 10 cm, cobertura de partes moles adequada\n• Tipo IIIB: perda de partes moles, requer retalho\n• Tipo IIIC: lesão vascular associada" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Ferida com osso visível, sangramento ativo, deformidade + ferida. Investigar pulsos distais, sensibilidade e motricidade." },
      { id: "etiology", title: "Etiologia", content: "Acidentes de trânsito (principal), queda de altura, PAF/FAB, acidente de trabalho, esmagamento." },
      { id: "clinical", title: "Apresentação Clínica", content: "Ferida com exposição óssea, deformidade, crepitação, sangramento ativo, dor intensa, déficit neurovascular distal (Gustilo IIIC), contaminação." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico + Rx do segmento (2 incidências). AngioTC se suspeita de lesão vascular. Hemograma, tipagem." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Fratura fechada com laceração adjacente, luxação exposta, lesão vascular sem fratura." },
      { id: "conduct", title: "Conduta Inicial", content: "Golden period (< 6h):\n1. Curativo estéril úmido com SF\n2. Imobilização provisória com tala\n3. ATB precoce (< 1h): Tipo I-II Cefazolina 2g IV; Tipo III + Gentamicina; Contaminação rural + Penicilina\n4. Profilaxia antitetânica\n5. Desbridamento cirúrgico em até 6h\n6. NÃO fechar primariamente (tipos II-III)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Cefazolina 2g IV 8/8h (todas). Gentamicina 5 mg/kg/dia IV (tipo III). Penicilina cristalina 4MUI IV 4/4h (contaminação rural). Fixação externa (tipo III) ou interna (selecionados I-II)." },
      { id: "prescriptions", title: "Prescrições", content: "1. Dieta zero\n2. Cefazolina 2g IV 8/8h\n3. Gentamicina 5 mg/kg/dia (tipo III)\n4. Profilaxia antitetânica\n5. Dipirona 1g IV 6/6h\n6. Tramadol 100 mg IV 8/8h SN\n7. Enoxaparina 40 mg SC\n8. Rx controle pós-op" },
      { id: "followup", title: "Acompanhamento", content: "ATB 24-72h (I-II) ou 72h (III). Curativo 48-72h. Second look em 48h (tipo III). Cobertura de partes moles < 7 dias (IIIB)." },
      { id: "complications", title: "Complicações", content: "Infecção (osteomielite), pseudoartrose, síndrome compartimental, perda de membro, TEV." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: todas as fraturas expostas. UTI: politrauma, lesão vascular. Alta: após desbridamento definitivo, ATB concluído, seguimento ortopédico." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Gustilo RB, Anderson JT. JBJS 1976.\n2. BOAST Open Fractures 2020.\n3. ATLS 10th ed. 2018." }
    ]
  },
  {
    id: "fp-fratura-femur", title: "Fratura de Fêmur", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["fêmur", "fratura", "colo", "diáfise", "haste", "artroplastia"],
    sections: [
      { id: "intro", title: "Introdução", content: "Alta energia em jovens, baixa energia em idosos. Cada fratura de diáfise pode causar perda de 1-2L de sangue. Fratura proximal em idosos tem mortalidade de 20-30% em 1 ano." },
      { id: "def", title: "Definição", content: "Proximal: colo femoral (Garden I-IV), transtrocanteriana, subtrocanteriana. Diáfise: terço proximal, médio, distal. Distal: supracondiliana, intercondiliana." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Dor no quadril/coxa após trauma, encurtamento + rotação externa (colo), deformidade (diáfise), checar pulsos distais." },
      { id: "etiology", title: "Etiologia", content: "Jovens: alta energia (trânsito, queda de altura). Idosos: queda da própria altura + osteoporose. Patológica: metástase." },
      { id: "clinical", title: "Apresentação Clínica", content: "Colo: membro encurtado em rotação externa. Diáfise: deformidade angulada, edema volumoso, instabilidade hemodinâmica possível. Distal: edema do joelho, hemartrose." },
      { id: "diagnosis", title: "Diagnóstico", content: "Rx bacia AP + quadril perfil (colo). Rx fêmur AP + perfil incluindo quadril e joelho. TC se dúvida. AngioTC se lesão vascular. ECG + RPA em idosos." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Fratura acetabular, luxação de quadril, fratura patológica, fratura de estresse." },
      { id: "conduct", title: "Conduta Inicial", content: "Imobilização com tração (Thomas), analgesia agressiva (bloqueio fascia ilíaca), reposição volêmica. Colo jovem: fixação < 6h. Colo idoso Garden III-IV: artroplastia. Diáfise: haste intramedular." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Bloqueio do nervo femoral/fascia ilíaca. Dipirona + Tramadol/Morfina IV. Enoxaparina 40 mg SC 1x/dia. Meia elástica + compressor pneumático." },
      { id: "prescriptions", title: "Prescrições", content: "1. Tração provisória\n2. Bloqueio fascia ilíaca\n3. Dipirona 1g IV 6/6h\n4. Tramadol 100 mg IV 8/8h SN\n5. Enoxaparina 40 mg SC\n6. Tipagem + reserva 2-4 CH\n7. RPA + ECG (idosos)" },
      { id: "followup", title: "Acompanhamento", content: "Tromboprofilaxia, fisioterapia precoce, carga conforme fixação, Rx seriado. Idosos: avaliação geriátrica, prevenção de quedas, tratamento osteoporose." },
      { id: "complications", title: "Complicações", content: "Necrose avascular (colo Garden III-IV), pseudoartrose, TEV, embolia gordurosa, infecção, síndrome compartimental." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: todas. UTI: politrauma, instabilidade hemodinâmica. Alta: pós-op estável, fisioterapia orientada." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. AO Principles 2019.\n3. NICE Hip Fracture Guidelines 2023." }
    ]
  },
  {
    id: "fp-hemorragia-traumatica", title: "Hemorragia Traumática", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["hemorragia", "transfusão", "maciça", "TXA", "damage control"],
    sections: [
      { id: "intro", title: "Introdução", content: "Principal causa de morte evitável no trauma. Abordagem atual: hipotensão permissiva, TXA, ressuscitação com hemoderivados 1:1:1 (damage control resuscitation)." },
      { id: "def", title: "Definição", content: "Classificação ATLS:\n• Classe I: < 750 mL (< 15%)\n• Classe II: 750-1500 mL (15-30%)\n• Classe III: 1500-2000 mL (30-40%)\n• Classe IV: > 2000 mL (> 40%)\n\nTransfusão maciça: ≥ 10 CH em 24h ou ≥ 4 CH em 1h." },
      { id: "screening", title: "Rastreamento e Identificação", content: "5 cavidades: tórax, abdome, retroperitônio, ossos longos, externo. Shock Index (FC/PAS) > 1.0 = significativo." },
      { id: "etiology", title: "Etiologia", content: "Trauma contuso (lesão esplênica, hepática, pélvica), penetrante (lesão vascular), fraturas (fêmur 1-2L, pelve > 2L), sangramento externo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Taquicardia → hipotensão → confusão → PCR. Tríade letal: hipotermia < 35°C + acidose pH < 7.2 + coagulopatia INR > 1.5." },
      { id: "diagnosis", title: "Diagnóstico", content: "FAST/eFAST, hemograma seriado, gasometria + lactato, coagulograma + fibrinogênio, TEG/ROTEM, tipagem." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Choque cardiogênico (tamponamento), obstrutivo (pneumotórax), neurogênico (TRM), distributivo (anafilaxia)." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Compressão direta / torniquete\n2. TXA 1g IV < 3h\n3. Protocolo transfusão maciça CH:PFC:PLQ 1:1:1\n4. Hipotensão permissiva PAS 80-90\n5. Aquecimento ativo\n6. CaCl2 1g IV a cada 4 CH\n7. Crioprecipitado se fibrinogênio < 150\n8. Damage control surgery" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "TXA 1g IV em 10 min → 1g em 8h. CH O-negativo até tipagem. PFC 15-20 mL/kg. PLQ > 50.000 (> 100.000 se TCE). Fluidos aquecidos 39°C." },
      { id: "prescriptions", title: "Prescrições", content: "1. Ativar protocolo transfusão maciça\n2. TXA 1g IV\n3. CH O-neg 4 UI\n4. PFC 4 UI\n5. PLQ 1 aférese\n6. CaCl2 1g IV\n7. Hemograma + coagulograma seriado\n8. Gasometria + lactato seriado\n9. Aquecimento ativo\n10. SVD + balanço hídrico" },
      { id: "followup", title: "Acompanhamento", content: "Hemograma, coagulograma, fibrinogênio, Ca²⁺ seriados. Clearance de lactato. Reoperação em 24-48h (damage control). UTI." },
      { id: "complications", title: "Complicações", content: "CIVD, hipotermia, acidose, hipocalcemia (transfusão), TRALI, SDRA, falência de múltiplos órgãos." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos com transfusão maciça ou damage control surgery. Alta: hemoglobina estável, coagulação normalizada." },
      { id: "references", title: "Referências Bibliográficas", content: "1. CRASH-2 Trial. Lancet 2010.\n2. PROPPR Trial. JAMA 2015.\n3. STOP the Bleeding Campaign 2019.\n4. ATLS 10th ed. 2018." }
    ]
  },
  {
    id: "fp-queimaduras", title: "Queimaduras", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["queimadura", "SCQ", "parkland", "inalação", "escarotomia"],
    sections: [
      { id: "intro", title: "Introdução", content: "Lesões por agentes térmicos, químicos, elétricos ou radioativos. Extensão (SCQ) e profundidade determinam gravidade. > 20% SCQ requer ressuscitação volêmica pela fórmula de Parkland." },
      { id: "def", title: "Definição", content: "Profundidade: 1º grau (epiderme), 2º superficial (bolhas), 2º profundo (base pálida), 3º grau (escara indolor), 4º grau (músculo/osso). SCQ Regra dos 9: cabeça 9%, MS 9%, tronco anterior/posterior 18%, MI 18%, períneo 1%." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Queimadura grave (ABA): > 20% SCQ adulto, 3º grau > 5%, face/mãos/pés/genitais, circunferencial, elétrica/química, lesão inalatória." },
      { id: "etiology", title: "Etiologia", content: "Térmica (escaldamento em crianças, chama em adultos), elétrica (alta/baixa voltagem), química (ácidos, álcalis), radiação, inalação." },
      { id: "clinical", title: "Apresentação Clínica", content: "Lesão inalatória: rouquidão, estridor, vibrissas chamuscadas, escarro carbonáceo. Queimadura elétrica: lesão entrada/saída, arritmias, rabdomiólise, lesão interna >> externa." },
      { id: "diagnosis", title: "Diagnóstico", content: "Avaliação clínica (SCQ + profundidade), broncoscopia (inalação), COHb, CPK + mioglobina (elétrica), hemograma, eletrólitos, ECG." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Necrólise epidérmica tóxica, síndrome da pele escaldada, dermatite de contato grave, maus-tratos." },
      { id: "conduct", title: "Conduta Inicial", content: "A: IOT precoce se inalação. B: O2 100% (CO). C: Parkland: 4 mL × kg × %SCQ em 24h (50% em 8h, 50% em 16h). RL preferido. Meta DU 0,5-1 mL/kg/h. Escarotomia se circunferencial. Morfina IV. Profilaxia antitetânica." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Volemia: RL 4 mL × kg × %SCQ. Analgesia: Morfina 0,1 mg/kg IV. Curativo: Sulfadiazina de prata 1%. ATB NÃO profilático. Nutrição hipercalórica hiperproteica precoce. Elétrica: DU > 1 mL/kg/h + alcalinização." },
      { id: "prescriptions", title: "Prescrições", content: "1. IOT se inalação\n2. O2 100%\n3. RL: 4 mL × kg × %SCQ\n4. SVD + diurese horária\n5. Morfina 2-4 mg IV SN\n6. Profilaxia antitetânica\n7. Sulfadiazina de prata 1%\n8. COHb + gasometria\n9. Monitorização contínua" },
      { id: "followup", title: "Acompanhamento", content: "Ajuste volemia pela diurese. Curativo diário. Suporte nutricional. Desbridamento + enxertia precoce. Reabilitação + fisioterapia. Suporte psicológico." },
      { id: "complications", title: "Complicações", content: "Infecção/sepse, SDRA, IRA, úlceras de Curling, cicatrizes hipertróficas/queloides, contraturas, amputação." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "CTQ: > 20% SCQ, face/mãos/genitais, inalação, elétrica, criança < 5 anos. UTI: > 40% SCQ, inalação com VM, instabilidade. Alta: reepitelização, suporte ambulatorial." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. ABA Guidelines 2018.\n3. ISBI Practice Guidelines. Burns 2016." }
    ]
  },
  {
    id: "fp-fast-efast", title: "FAST / eFAST", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["FAST", "eFAST", "ultrassom", "trauma", "POCUS", "hemoperitônio"],
    sections: [
      { id: "intro", title: "Introdução", content: "O FAST (Focused Assessment with Sonography for Trauma) detecta líquido livre intraperitoneal e pericárdico. O eFAST adiciona avaliação de pneumotórax e hemotórax." },
      { id: "def", title: "Definição", content: "FAST: 4 janelas (subxifoide, Morrison, esplenorrenal, suprapúbico). eFAST: + 2 janelas torácicas. Positivo: líquido livre anecóico." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Todo trauma contuso com instabilidade, trauma penetrante toracoabdominal, mecanismo de alta energia. Repetir em 30-60 min se inicialmente negativo." },
      { id: "etiology", title: "Etiologia", content: "FAST positivo: lesão de órgão sólido, víscera oca, vascular, tamponamento, hemotórax, ascite prévia (falso-positivo)." },
      { id: "clinical", title: "Apresentação Clínica", content: "FAST+ instável → laparotomia. FAST− instável → buscar outras fontes. FAST+ estável → TC. FAST− estável → observação ± repetir." },
      { id: "diagnosis", title: "Diagnóstico", content: "Morrison: líquido entre fígado e rim (> 200-500 mL). Esplenorrenal. Pelve. Pericárdio. Pneumotórax (eFAST): ausência de deslizamento pleural. Limitações: operador-dependente, falso-negativo em retroperitoneal." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Falso-positivo: ascite prévia, líquido fisiológico, cisto roto, gordura peri-renal." },
      { id: "conduct", title: "Conduta Inicial", content: "FAST+ INSTÁVEL → laparotomia imediata. FAST+ ESTÁVEL → TC abdome. FAST− INSTÁVEL → outra fonte. FAST− ESTÁVEL → observar, repetir. eFAST pneumotórax → drenagem. eFAST hemotórax → drenagem." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "FAST é diagnóstico. Tratamento depende do achado: hemoperitônio → laparotomia/NOM. Hemopericárdio → pericardiocentese/toracotomia. Pneumo/hemotórax → drenagem." },
      { id: "prescriptions", title: "Prescrições", content: "N/A — procedimento diagnóstico. Prescrições dependem do achado e da conduta subsequente." },
      { id: "followup", title: "Acompanhamento", content: "FAST seriado em pacientes de risco. TC se evolução desfavorável. Hemograma seriado. Reavaliação clínica contínua." },
      { id: "complications", title: "Complicações", content: "Nenhuma (procedimento não invasivo). Risco: falso-negativo levando a atraso diagnóstico." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Depende do achado do FAST, não do exame em si." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. Scalea TM et al. FAST. J Trauma 1999.\n3. Kirkpatrick AW et al. eFAST. J Trauma 2004." }
    ]
  },
  {
    id: "fp-imobilizacao-trauma", title: "Imobilização no Trauma", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["imobilização", "colar cervical", "prancha", "tala", "tração"],
    sections: [
      { id: "intro", title: "Introdução", content: "Imobilização previne lesão secundária em fraturas e lesões medulares. Conceito atual: restrição de movimento da coluna (não imobilização rígida). Prancha rígida apenas para transporte (< 30 min)." },
      { id: "def", title: "Definição", content: "Colar cervical, prancha rígida (transporte), tala (fraturas de extremidades), tração (fêmur), lençol pélvico (pelve), head blocks." },
      { id: "screening", title: "Rastreamento e Identificação", content: "NEXUS: dor na linha média, déficit neurológico, alteração de consciência, intoxicação, lesão distrativa. Regra Canadiana C-Spine." },
      { id: "etiology", title: "Etiologia", content: "Politrauma, queda > 3 m, acidente > 100 km/h, mergulho em águas rasas, trauma penetrante em coluna." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor cervical/dorsal, deformidade de extremidade, déficit motor/sensitivo, priapismo, respiração diafragmática, hipotensão + bradicardia (neurogênico)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Decisão clínica e pré-hospitalar. Depois: Rx coluna, TC coluna (padrão-ouro), RM (lesão medular)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "N/A — procedimento de segurança." },
      { id: "conduct", title: "Conduta Inicial", content: "Coluna: colar + prancha (transporte) + head blocks + log-roll. Extremidades: tala (imobilizar articulação acima e abaixo), checar pulso pré/pós. Fêmur: tala de tração. Pelve: lençol pélvico." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Imobilização é tratamento provisório. Analgesia conforme protocolo. Tratamento definitivo depende da lesão." },
      { id: "prescriptions", title: "Prescrições", content: "1. Colar cervical\n2. Analgesia SN\n3. Exames de imagem SN\n4. Reavaliar pulso/sensibilidade" },
      { id: "followup", title: "Acompanhamento", content: "Retirar prancha < 30 min. Manter colar até clearance radiológico. Reavaliar pulso/sensibilidade após imobilização. Prevenir úlceras de pressão." },
      { id: "complications", title: "Complicações", content: "Úlcera de pressão (prancha prolongada), lesão de plexo braquial (colar mal posicionado), síndrome compartimental." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Depende da lesão subjacente, não da imobilização em si." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. PHTLS 9th ed. 2019.\n3. NAEMSP Position Statement 2018." }
    ]
  },
  {
    id: "fp-trauma-raquimedular", title: "Trauma Raquimedular", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["TRM", "medular", "ASIA", "choque neurogênico", "imobilização"],
    sections: [
      { id: "intro", title: "Introdução", content: "TRM afeta principalmente jovens (15-40 anos). Coluna cervical é o segmento mais acometido. Prioridade: prevenir lesão secundária (hipotensão, hipóxia) e imobilização." },
      { id: "def", title: "Definição", content: "ASIA: A (completa), B (sensibilidade preservada), C (motor < grau 3), D (motor ≥ grau 3), E (normal). Choque neurogênico: hipotensão + bradicardia. Choque medular: arreflexia transitória." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Mecanismos de risco: trânsito, mergulho, queda de altura. Sinais: dor na linha média, déficit motor/sensitivo, priapismo, respiração diafragmática, hipotensão + bradicardia." },
      { id: "etiology", title: "Etiologia", content: "Trânsito (48%), queda (21%), violência (15%), esportes/mergulho (14%)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Cervical alta (C1-C4): tetraplegia + insuficiência respiratória. Cervical baixa (C5-C8): tetraplegia parcial. Torácica: paraplegia. Síndromes: central, anterior, Brown-Séquard, cauda equina." },
      { id: "diagnosis", title: "Diagnóstico", content: "Exame neurológico completo, TC coluna (padrão-ouro), RM (lesão medular/ligamentar), Escala ASIA." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Choque hemorrágico vs neurogênico, mielopatia crônica, Guillain-Barré, mielite transversa, compressão tumoral." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Imobilização completa\n2. ABCDE (IOT se cervical alta)\n3. PAM ≥ 85 mmHg por 7 dias (cristaloide → noradrenalina)\n4. SpO2 > 94%\n5. SVD, SNG se íleo\n6. Descompressão cirúrgica < 24h se déficit progressivo\n7. Metilprednisolona NÃO recomendada" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "PAM ≥ 85: cristaloide → noradrenalina. Tromboprofilaxia: enoxaparina 24-72h. Dor neuropática: gabapentina/pregabalina. Bexiga: cateterismo intermitente. Mudança de decúbito 2/2h." },
      { id: "prescriptions", title: "Prescrições", content: "1. Imobilização\n2. O2 SpO2 > 94%\n3. SF IV para PAM ≥ 85\n4. Noradrenalina SN\n5. SVD\n6. Enoxaparina 40 mg SC\n7. Omeprazol 40 mg IV\n8. TC/RM coluna\n9. Avaliação neurocirúrgica" },
      { id: "followup", title: "Acompanhamento", content: "Reabilitação precoce, tromboprofilaxia, prevenção de úlceras de pressão, manejo vesical/intestinal, suporte psicológico, prevenção de disreflexia autonômica." },
      { id: "complications", title: "Complicações", content: "TVP/TEP, úlceras de pressão, infecção urinária, pneumonia, disreflexia autonômica, dor neuropática crônica, espasticidade." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: lesão cervical alta, choque neurogênico, insuficiência respiratória. Reabilitação: centro especializado. Alta: estabilidade clínica + programa de reabilitação." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. AANS/CNS Guidelines 2013.\n3. Fehlings MG et al. Neurosurgery 2017." }
    ]
  },
  {
    id: "fp-amputacao-traumatica", title: "Amputação Traumática", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["amputação", "reimplante", "torniquete", "isquemia"],
    sections: [
      { id: "intro", title: "Introdução", content: "Emergência com controle rápido da hemorragia e preservação do membro para reimplante. Torniquete é a medida inicial mais eficaz. Isquemia quente < 6h (membro com músculo) é crítico." },
      { id: "def", title: "Definição", content: "Separação traumática completa ou incompleta de segmento corporal. Completa, incompleta (subtotal), avulsão (pior prognóstico), guilhotina (melhor). Isquemia tolerável: dedo até 12-24h (resfriado), membro < 6h quente / < 12h resfriado." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Amputação visível, sangramento profuso, choque hemorrágico. Avaliar viabilidade do membro amputado e mecanismo." },
      { id: "etiology", title: "Etiologia", content: "Acidente de trabalho, trânsito, PAF/explosão, acidente agrícola." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sangramento ativo, choque hemorrágico, dor intensa. Membro amputado presente ou ausente." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico. Rx do coto e membro amputado. Avaliar viabilidade: tempo de isquemia, mecanismo, nível, condições clínicas." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Amputação completa vs subtotal. Viabilidade para reimplante vs definitiva." },
      { id: "conduct", title: "Conduta Inicial", content: "Coto: torniquete proximal, curativo estéril. Membro: lavar com SF, gaze úmida, saco plástico sobre gelo (não direto). Reimplante: polegar, múltiplos dedos, mão, criança. Contraindicações: esmagamento grave, comorbidades." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Torniquete → controle cirúrgico. CH + PFC. Cefazolina 2g + Gentamicina. Profilaxia antitetânica. Fentanil/Morfina IV." },
      { id: "prescriptions", title: "Prescrições", content: "1. Torniquete (hora)\n2. SF/RL IV\n3. TXA 1g IV\n4. Cefazolina 2g IV 8/8h\n5. Profilaxia antitetânica\n6. Fentanil 50-100 mcg IV\n7. Preservar membro\n8. Contato centro de reimplante" },
      { id: "followup", title: "Acompanhamento", content: "Reimplante: monitorização vascular 1/1h por 72h, anticoagulação, fisioterapia. Amputação definitiva: prótese, suporte psicológico." },
      { id: "complications", title: "Complicações", content: "Choque hemorrágico, infecção, falha de reimplante, dor fantasma, síndrome compartimental." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: choque, transfusão maciça. Enfermaria: pós-reimplante estável. Alta: cicatrização, reabilitação." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. TCCC Guidelines 2023.\n3. Sabapathy SR. Clin Plast Surg 2019." }
    ]
  }
];
