import type { FullProtocol } from "./types";

export const traumaFullProtocols2: FullProtocol[] = [
  {
    id: "fp-trauma-toracico", title: "Trauma Torácico", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["trauma", "tórax", "pneumotórax", "hemotórax", "dreno", "tórax instável"],
    sections: [
      { id: "intro", title: "Introdução", content: "Trauma torácico: 25% das mortes no trauma. 85% manejado com dreno e analgesia. Lesões letais do survey primário: pneumotórax hipertensivo, pneumotórax aberto, hemotórax maciço, tamponamento, tórax instável. Diretrizes: ATLS 10th ed." },
      { id: "def", title: "Definição", content: "Lesões imediatas: pneumotórax hipertensivo, aberto, hemotórax maciço, tamponamento, flail chest. Potencialmente letais: contusão pulmonar, ruptura de aorta, lesão traqueobrônquica, ruptura diafragmática." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Avaliação: inspeção, palpação (enfisema, instabilidade), percussão, ausculta, distensão jugular. eFAST + Rx tórax AP." },
      { id: "etiology", title: "Etiologia", content: "Contuso: acidentes de trânsito, quedas. Penetrante: arma branca, FAF. Blast: lesão pulmonar por onda de pressão." },
      { id: "clinical", title: "Apresentação Clínica", content: "Pneumotórax hipertensivo: timpanismo + MV abolido + desvio traqueia + hipotensão. Hemotórax: macicez + MV abolido. Tórax instável: movimento paradoxal + insuficiência respiratória." },
      { id: "diagnosis", title: "Diagnóstico", content: "eFAST, Rx tórax, TC tórax (estável), gasometria, ECG (contusão cardíaca), troponina." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hemotórax vs pneumotórax vs tamponamento vs contusão miocárdica vs ruptura de aorta." },
      { id: "conduct", title: "Conduta Inicial", content: "Pneumotórax hipertensivo: descompressão com agulha → dreno. Aberto: curativo 3 pontas → dreno. Hemotórax: dreno 28-32 Fr. Toracotomia se > 1500 mL ou > 200 mL/h. Tórax instável: analgesia + VNI/VM." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Analgesia: dipirona + tramadol + bloqueio intercostal + peridural torácica. Contusão pulmonar: restrição hídrica, PEEP, fisioterapia. Profilaxia TVP quando possível." },
      { id: "prescriptions", title: "Prescrições", content: "1. O2 conforme SpO2\n2. Drenagem torácica em selo d'água\n3. Dipirona 1g IV 6/6h + Tramadol 100mg IV 8/8h\n4. Rx tórax controle\n5. Gasometria\n6. Monitorização contínua\n7. Fisioterapia respiratória" },
      { id: "followup", title: "Acompanhamento", content: "Rx seriado, dreno retirado quando débito < 150 mL/24h, fisioterapia, vigiar SDRA." },
      { id: "complications", title: "Complicações", content: "SDRA, empiema, hemotórax retido, pneumonia, fístula broncopleural." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: VM, instabilidade. Alta: dreno removido, dor controlada, expansão pulmonar." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. ACS 2018.\n2. EAST Guidelines.\n3. CBC Manual de Trauma 2023." }
    ]
  },
  {
    id: "fp-trauma-abdominal", title: "Trauma Abdominal", categoryId: "trauma", category: "Trauma e Cirurgia",
    tags: ["trauma", "abdome", "fast", "laparotomia", "baço", "fígado"],
    sections: [
      { id: "intro", title: "Introdução", content: "Trauma abdominal: potencialmente letal, diagnóstico difícil (exame físico sensibilidade 50-65%). Órgãos mais lesados: baço (contuso), fígado (penetrante). Decisão entre tratamento conservador e laparotomia depende da estabilidade hemodinâmica. Diretrizes: ATLS 10th ed, WSES 2017." },
      { id: "def", title: "Definição", content: "Lesão de estruturas intra-abdominais por mecanismo contuso ou penetrante. Sólidos (sangram): fígado, baço, rim. Ocos (perfuram): intestino, bexiga. Retroperitoneal: difícil diagnóstico." },
      { id: "screening", title: "Rastreamento e Identificação", content: "FAST em todo trauma contuso instável. Laparotomia imediata: FAST + instável, evisceração, peritonite, FAF transfixante." },
      { id: "etiology", title: "Etiologia", content: "Contuso: acidente de trânsito (lesão esplênica mais comum). Penetrante: FAF (múltiplas lesões), FAB (trajeto previsível)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Peritonismo: defesa, Blumberg +, RHA ausentes. Sangramento: distensão, hipotensão, FAST +. Kehr: dor no ombro E (lesão esplênica). Grey-Turner/Cullen: equimose flancos/periumbilical." },
      { id: "diagnosis", title: "Diagnóstico", content: "FAST/eFAST, TC abdome com contraste (padrão-ouro se estável), hemograma seriado, lactato, amilase/lipase, urina tipo I." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hemorragia abdominal vs retroperitoneal vs torácica vs pélvica. Abdome agudo não traumático." },
      { id: "conduct", title: "Conduta Inicial", content: "Instável + FAST + → laparotomia. Estável → TC. NOM: lesão esplênica/hepática estável graus I-III. Damage control: tríade letal → controle rápido + packing → UTI → reoperação." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Ressuscitação: cristaloide + transfusão maciça 1:1:1 + TXA. Embolização angiográfica: alternativa em sangramento arterial ativo com paciente estável. Vacinas pós-esplenectomia." },
      { id: "prescriptions", title: "Prescrições", content: "NOM: 1. Zero → líquida. 2. Hemograma 6/6h. 3. Repouso. 4. Analgesia. 5. Tipagem + reserva CH. 6. TC controle 48-72h." },
      { id: "followup", title: "Acompanhamento", content: "NOM: hemograma seriado, repouso, restrição atividade 3-6 meses (lesão esplênica). Vacinação se esplenectomia." },
      { id: "complications", title: "Complicações", content: "Ressangramento, abscesso, fístula, lesão não diagnosticada, SDOF." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: laparotomia, instabilidade. Alta: Hb estável 48h, sem dor, tolerando dieta." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. ACS 2018.\n2. Coccolini F. WSES Splenic Trauma 2017.\n3. CBC Manual de Trauma 2023." }
    ]
  }
];
