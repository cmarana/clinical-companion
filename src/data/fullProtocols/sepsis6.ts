import type { FullProtocol } from "./types";

export const sepsisFullProtocols6: FullProtocol[] = [
  {
    id: "fp-choque-misto",
    title: "Choque Misto (Séptico + Cardiogênico)",
    categoryId: "sepsis",
    category: "sepsis",
    tags: ["choque misto", "séptico", "cardiogênico", "ecocardiograma", "dobutamina"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Coexistência de choque séptico e cardiogênico é frequente e desafiadora.` }
      { id: "def", title: "Definição", content: `Choque com componentes distributivo (vasoplegia) e cardiogênico (disfunção miocárdica) simultâneos.` }
      { id: "etiology", title: "Etiologia", content: `Cardiomiopatia séptica (20-60% dos pacientes com sepse grave). Sepse em paciente com cardiopatia prévia.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Hipotensão refratária a volume
- Sinais de baixo débito + vasoplegia
- Lactato persistentemente elevado
- Extremidades quentes (distributivo) ou frias (cardiogênico) — pode alternar` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Ecocardiograma à beira-leito:** essencial — avalia FEVE, enchimento, responsividade a volume
**Swan-Ganz ou PiCCO:** DC, RVS, POAP
**Lactato seriado:** marcador de perfusão
**ScvO₂:** <70% sugere componente cardiogênico predominante` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Volume:** cauteloso (avaliar responsividade por elevação passiva de pernas/variação de PP)
**Noradrenalina:** 1ª linha vasopressor
**Dobutamina 2.5-20mcg/kg/min:** se disfunção miocárdica com baixo DC
**Milrinona:** alternativa se taquicardia com dobutamina
**ATB precoce** (1ª hora)
**Hidrocortisona 50mg IV 6/6h:** se choque refratário a vasopressor` }
    ]
  },
  {
    id: "fp-choque-neurogênico",
    title: "Choque Neurogênico",
    categoryId: "sepsis",
    category: "sepsis",
    tags: ["choque neurogênico", "medular", "bradicardia", "vasopressor", "TRM"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Choque neurogênico ocorre por perda do tônus simpático após lesão medular alta (acima de T6).` }
      { id: "def", title: "Definição", content: `Choque distributivo por denervação simpática após lesão medular, caracterizado por hipotensão + bradicardia (diferente de hipovolêmico).` }
      { id: "etiology", title: "Etiologia", content: `Lesão medular cervical ou torácica alta (acima de T6). Causa mais comum: trauma raquimedular.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Hipotensão (vasodilatação abaixo da lesão)
- **Bradicardia** (perda do simpático cardíaco — cardinal vs choque hipovolêmico)
- Pele quente e seca abaixo da lesão
- Priapismo
- Déficit motor/sensitivo
- **Excluir choque hemorrágico** antes de atribuir a neurogênico` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Clínico:** hipotensão + bradicardia + déficit neurológico + ausência de taquicardia
**EXCLUIR SANGRAMENTO** (FAST, RX pelve)
**RMC de coluna:** confirmar lesão medular
**PAM-alvo:** ≥85mmHg nos primeiros 7 dias (neuroproteção)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Volume inicial:** SF 0.9% 1-2L (sem exagerar)
**2. Vasopressor:** Noradrenalina (PAM ≥85mmHg)
**3. Bradicardia sintomática:** Atropina 0.5mg IV
**4. Fenilefrina:** se bradicardia limitante
**5. Prevenção de TVP:** HBPM em 72h (alto risco)
**6. Imobilização adequada**` }
    ]
  },
  {
    id: "fp-sepse-foco-abdominal",
    title: "Sepse de Foco Abdominal",
    categoryId: "sepsis",
    category: "sepsis",
    tags: ["sepse abdominal", "peritonite", "cirurgia", "ATB", "controle de foco"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Sepse abdominal requer ATB + controle de foco cirúrgico precoce — atraso aumenta mortalidade.` }
      { id: "def", title: "Definição", content: `Sepse cuja fonte infecciosa é intra-abdominal: peritonite, abscesso, perfuração vísceral, colangite.` }
      { id: "etiology", title: "Etiologia", content: `Perfuração de víscera oca (úlcera, diverticulite, apendicite), obstrução intestinal complicada, colecistite/colangite, pancreatite infectada, pós-operatório abdominal.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor abdominal intensa
- Defesa/rigidez abdominal
- Distensão
- Sinais de SIRS/SEPSE
- Íleo paralítico
- Peritonite difusa ou localizada` }
      { id: "diagnosis", title: "Diagnóstico", content: `**TC de abdome com contraste:** padrão-ouro (líquido livre, abscesso, ar livre, coleção)
**Hemoculturas antes do ATB**
**Lactato, procalcitonina**
**SOFA score**` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. ATB amplo espectro em 1h:**
- Piperacilina-tazobactam 4.5g IV 6/6h + Metronidazol
- Ou Meropenem 1g IV 8/8h (se risco MDR)

**2. Controle de foco (crucial):**
- Drenagem percutânea de abscesso (se acessível)
- Laparotomia exploradora (peritonite difusa, perfuração)
- Colecistectomia (colecistite)
- CPRE (colangite)
- Ideal em <12h do diagnóstico

**3. Suporte:** ressuscitação volêmica, vasopressores se necessário` }
    ]
  },
  {
    id: "fp-colangite-aguda",
    title: "Colangite Aguda",
    categoryId: "sepsis",
    category: "sepsis",
    tags: ["colangite", "tríade de Charcot", "CPRE", "biliar", "sepse"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Colangite aguda é emergência que requer descompressão biliar — mortalidade de 50% se não tratada.` }
      { id: "def", title: "Definição", content: `Infecção aguda do trato biliar por obstrução, com potencial de sepse grave. Classificada em graus I (leve), II (moderada) e III (grave/com disfunção orgânica).` }
      { id: "etiology", title: "Etiologia", content: `**Coledocolitíase (mais comum)**, estenose benigna/maligna, stent biliar obstruído. Agentes: E. coli, Klebsiella, Enterococcus, anaeróbios.` }
      { id: "clinical", title: "Apresentação Clínica", content: `**Tríade de Charcot (50-70%):** febre + icterícia + dor em HCD
**Pêntade de Reynolds (sepse):** + hipotensão + confusão mental
- Calafrios, colúria
- Sepse grave/choque` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios de Tóquio 2018 (TG18):**
- Inflamação: febre, leucocitose, PCR elevado
- Colestase: icterícia, BT/BD elevadas, FA/GGT elevadas
- Imagem: dilatação de via biliar ou causa da obstrução

**USG abdominal:** dilatação de colédoco >8mm
**TC/ColangioRM:** se USG inconclusiva
**Hemoculturas**` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Grau III (grave):**
- CPRE de URGÊNCIA (<12h) + esfincterotomia + extração de cálculo ou drenagem
- ATB IV: Piperacilina-tazobactam ou Meropenem
- Suporte hemodinâmico

**Grau II (moderada):**
- CPRE em <24-48h
- ATB IV

**Grau I (leve):**
- ATB + CPRE eletiva precoce

**ATB:** Ceftriaxona 2g/dia + Metronidazol 500mg 8/8h (alternativa)` }
    ]
  },
  {
    id: "fp-fasciite-necro-sepse",
    title: "Fasciíte Necrosante e Sepse",
    categoryId: "sepsis",
    category: "sepsis",
    tags: ["fasciíte necrosante", "necrose", "cirurgia", "infecção de partes moles", "LRINEC"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Fasciíte necrosante é emergência cirúrgica com mortalidade de 30-70% — o tempo até a cirurgia determina o prognóstico.` }
      { id: "def", title: "Definição", content: `Infecção necrosante profunda de partes moles que se espalha ao longo das fáscias. Tipo I: polimicrobiana (mais comum). Tipo II: monomicrobiana (S. pyogenes, S. aureus).` }
      { id: "etiology", title: "Etiologia", content: `**Tipo I:** polimicrobiana (anaeróbios + aeróbios). FR: DM, obesidade, imunossupressão, pós-operatório, trauma.
**Tipo II:** S. pyogenes (gangrena estreptocócica), S. aureus. Pode ocorrer em jovens saudáveis.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor **desproporcional** ao exame físico (principal sinal de alerta)
- Eritema com expansão rápida
- Bolhas hemorrágicas, crepitação (gás subcutâneo)
- Necrose cutânea
- SIRS/sepse de progressão fulminante
- Edema tenso, anestesia local (destruição nervosa)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**LRINEC score:** ≥6 sugere necrotizante
**TC com contraste:** gás nos tecidos moles, espessamento fascial, coleções
**NÃO ATRASAR CIRURGIA por exames de imagem** se alta suspeita clínica
**Diagnóstico definitivo:** intraoperatório — fáscia cinzenta/necrótica, ausência de sangramento, dissecção digital fácil (finger test)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Desbridamento cirúrgico URGENTE** — remoção de TODA fáscia necrótica
- Reoperação a cada 24-48h até tecido viável
**2. ATB amplo espectro:**
- Meropenem 1g 8/8h + Vancomicina 15-20mg/kg 12/12h + Clindamicina 900mg 8/8h (efeito anti-toxina)
**3. Ressuscitação agressiva**
**4. IVIG 1g/kg** em síndrome do choque tóxico estreptocócico
**5. Câmara hiperbárica:** controvérsia, pode ser adjuvante` }
    ]
  }
];
