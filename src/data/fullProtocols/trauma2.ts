import type { FullProtocol } from "./types";

export const traumaFullProtocols2: FullProtocol[] = [
  {
    id: "fp-trauma-toracico", title: "Trauma Torácico", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["trauma", "tórax", "pneumotórax", "hemotórax", "dreno", "tórax instável"],
    sections: [
      { id: "intro", title: "Introdução", content: "O trauma torácico é responsável por 25% dos óbitos traumáticos. A maioria (85%) é tratada com medidas simples: drenagem torácica e analgesia. ATLS 10ª edição e PHTLS 2020." },
      { id: "def", title: "Definição", content: "Lesões torácicas potencialmente fatais que requerem identificação e tratamento imediatos no exame primário (ABCDE). Letais imediatas: pneumotórax hipertensivo, tamponamento cardíaco, hemotórax maciço, lesão de via aérea, pneumotórax aberto." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Mecanismo: colisão veicular (impacto frontal/lateral), queda >6m, atropelamento, FAB/FAF em tórax, explosões. FAST/eFAST à beira-leito. Rx tórax AP no trauma room." },
      { id: "etiology", title: "Etiologia", content: "Contuso (80%): colisão, queda, agressão. Penetrante (20%): FAB, FAF. Lesões comuns: fraturas costais, pneumotórax, hemotórax, contusão pulmonar, lesão de grandes vasos, ruptura diafragmática." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dispneia, dor torácica, crepitação costal, enfisema subcutâneo, instabilidade hemodinâmica. Pneumotórax hipertensivo: desvio traqueal, MV abolido, turgência jugular, hipotensão. Tamponamento: tríade de Beck (hipotensão, jugular distendida, bulhas abafadas)." },
      { id: "diagnosis", title: "Diagnóstico", content: "eFAST: pneumotórax (ausência de deslizamento pleural), derrame pericárdico, hemotórax. Rx tórax AP. TC tórax se estável. Gasometria. ECG (contusão miocárdica). Hemograma, tipagem." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Pneumotórax hipertensivo vs. tamponamento (eFAST diferencia). Hemotórax vs. contusão pulmonar. Lesão de aorta (alargamento mediastinal no Rx). Ruptura diafragmática (vísceras no tórax)." },
      { id: "conduct", title: "Conduta Inicial", content: "1. ABCDE do ATLS; 2. Pneumotórax hipertensivo: descompressão imediata (punção 2° EIC LMC ou 5° EIC LAA) → drenagem; 3. Hemotórax: drenagem 32-36Fr 5° EIC LAA; 4. Tamponamento: pericardiocentese subxifóidea ou toracotomia de reanimação; 5. Pneumotórax aberto: curativo de 3 pontas → drenagem." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Drenagem torácica em selo d'água (dreno 28-36Fr): indicada para pneumotórax, hemotórax, hemopneumotórax. Toracotomia de reanimação: PCR traumática, hemotórax maciço >1500mL inicial ou >200mL/h por 2-4h. Analgesia multimodal (bloqueio intercostal, peridural torácica). Tórax instável (flail chest): analgesia agressiva + VM se insuficiência respiratória." },
      { id: "prescriptions", title: "Prescrições", content: "1. Drenagem torácica 32Fr em selo d'água; 2. Dipirona 1g IV 6/6h + Cetoprofeno 100mg IV 12/12h; 3. Tramadol 100mg IV 8/8h ou Morfina 2-4mg IV SN; 4. SF 0,9% + Ringer conforme perdas; 5. Concentrado hemácias se Hb <7 ou choque; 6. Cefazolina 2g IV (profilaxia se drenagem)." },
      { id: "followup", title: "Acompanhamento", content: "Rx tórax seriado (6h, 24h, diário). Débito do dreno (toracotomia se >1500mL inicial ou >200mL/h × 4h). Fisioterapia respiratória precoce. Analgesia adequada (fraturas costais: dor limita expansão → atelectasia → pneumonia)." },
      { id: "complications", title: "Complicações", content: "Pneumonia (10-20% dos traumas torácicos), empiema, atelectasia, SDRA, síndrome compartimental abdominal (ventilação com pressão elevada), hemotórax retido (VATS se não resolver com drenagem)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: tórax instável, contusão pulmonar bilateral, lesão de grandes vasos, toracotomia. Internação: drenagem torácica, fraturas múltiplas, contusão pulmonar. Alta: pneumotórax pequeno estável, fraturas costais simples com analgesia adequada." },
      { id: "references", title: "Referências Bibliográficas", content: "ATLS 10th Edition — ACS 2018. Eastern Association for the Surgery of Trauma (EAST) Guidelines. SBAIT — Trauma Torácico 2020." }
    ]
  },
  {
    id: "fp-trauma-abdominal", title: "Trauma Abdominal", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["trauma", "abdome", "fast", "laparotomia", "baço", "fígado"],
    sections: [
      { id: "intro", title: "Introdução", content: "O trauma abdominal é causa frequente de hemorragia oculta no politrauma. A avaliação rápida com eFAST e decisão cirúrgica precoce são fundamentais. ATLS 10ª edição." },
      { id: "def", title: "Definição", content: "Contuso (90%): lesão por desaceleração, compressão ou cisalhamento. Penetrante (10%): FAB (exploração se peritonite/evisceração/instabilidade), FAF (laparotomia na maioria). Órgãos mais lesados: baço (contuso), fígado, intestino delgado (penetrante)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Mecanismo de alto risco: impacto frontal >60km/h, ejeção, atropelamento, queda >3m, marca de cinto (sinal do cinto = lesão intestinal). eFAST na admissão. Repetir em 30min se negativo e suspeita alta." },
      { id: "etiology", title: "Etiologia", content: "Contuso: baço (mais comum), fígado, rim, pâncreas, mesentério. Penetrante FAB: fígado, intestino delgado, diafragma. Penetrante FAF: intestino delgado, cólon, fígado." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor abdominal difusa ou localizada, defesa, rigidez (peritonite), distensão, instabilidade hemodinâmica sem causa aparente. Marca de cinto (sinal de Chance = fratura lombar + lesão intestinal). Equimose em flancos (Grey-Turner) ou periumbilical (Cullen) = hemorragia retroperitoneal." },
      { id: "diagnosis", title: "Diagnóstico", content: "eFAST: líquido livre intra-abdominal. TC abdome com contraste: padrão-ouro se estável (classifica lesões — AAST). Lavado peritoneal diagnóstico (LPD): se eFAST inconclusivo e sem TC disponível. Hemograma seriado, amilase, lipase, urinálise (hematúria → lesão renal)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Fratura pélvica com hemorragia retroperitoneal, lesão torácica baixa (diafragma), lesão de coluna com dor referida, hematoma de parede abdominal." },
      { id: "conduct", title: "Conduta Inicial", content: "INSTÁVEL + eFAST positivo → LAPAROTOMIA imediata. Estável + eFAST positivo → TC abdome. Penetrante FAF: laparotomia na maioria. Penetrante FAB: exploração digital; se peritonite/evisceração/instabilidade → laparotomia; se estável → TC ou observação ativa 24h." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Cirúrgico (damage control): laparotomia para controle de hemorragia e contaminação, tamponamento (packing), ligaduras. Segunda cirurgia em 24-48h (relook). Manejo não operatório (MNO): lesão sólida (baço/fígado) estável, sem peritonite, hemodinamicamente normal. MNO do baço: grau I-III com estabilidade. Angioembolização se extravasamento (blush) na TC." },
      { id: "prescriptions", title: "Prescrições", content: "1. Cristaloide aquecido (37°C) — SF 0,9% ou Ringer Lactato; 2. Protocolo de transfusão maciça: CH:PFC:Plaquetas 1:1:1; 3. Ácido tranexâmico 1g IV em 10min (até 3h do trauma); 4. Cefoxitina 2g IV (profilaxia se laparotomia); 5. Tipagem + reserva de hemoderivados." },
      { id: "followup", title: "Acompanhamento", content: "MNO: repouso relativo, hematócrito seriado 6/6h nas primeiras 24h, TC controle se piora. Pós-laparotomia: relook em 24-48h se damage control. Vacina pneumocócica se esplenectomia. Acompanhamento ambulatorial com imagem." },
      { id: "complications", title: "Complicações", content: "Hemorragia tardia (falha MNO — 5-10%), lesão intestinal não diagnosticada (peritonite tardia), abscesso intra-abdominal, síndrome compartimental abdominal, trombose venosa." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: instabilidade, damage control, transfusão maciça. Internação: MNO (mínimo 48-72h), pós-operatório. Alta: estável, Hb estável, dieta tolerada, sem sinais de complicação." },
      { id: "references", title: "Referências Bibliográficas", content: "ATLS 10th Edition 2018. EAST Guidelines for NOM of Blunt Hepatic/Splenic Injury. Stengel D et al. Cochrane Review — FAST in Blunt Abdominal Trauma." }
    ]
  }
];
