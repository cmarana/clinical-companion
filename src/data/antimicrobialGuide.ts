export interface AntimicrobialRegimen {
  drug: string;
  dose: string;
  route: string;
  duration: string;
  notes?: string;
}

export interface InfectionScenario {
  id: string;
  name: string;
  severity?: string;
  context?: string;
  firstLine: AntimicrobialRegimen[];
  secondLine: AntimicrobialRegimen[];
  allergicAlternative?: AntimicrobialRegimen[];
  keyPoints?: string[];
}

export interface InfectiousFocus {
  id: string;
  category: string;
  icon: string;
  color: string;
  scenarios: InfectionScenario[];
}

export const antimicrobialGuide: InfectiousFocus[] = [
  // ==================== PNEUMONIA ====================
  {
    id: "pneumonia",
    category: "Pneumonia",
    icon: "🫁",
    color: "text-blue-600 dark:text-blue-400",
    scenarios: [
      {
        id: "pac-leve",
        name: "PAC leve (ambulatorial)",
        severity: "CURB-65 0-1",
        context: "Sem comorbidades, idade < 65 anos",
        firstLine: [
          { drug: "Amoxicilina", dose: "500mg 8/8h", route: "VO", duration: "5-7 dias" },
        ],
        secondLine: [
          { drug: "Azitromicina", dose: "500mg/dia", route: "VO", duration: "3-5 dias" },
          { drug: "Claritromicina", dose: "500mg 12/12h", route: "VO", duration: "7 dias" },
        ],
        allergicAlternative: [
          { drug: "Levofloxacino", dose: "500mg/dia", route: "VO", duration: "5 dias", notes: "Reservar se alergia a betalactâmicos" },
        ],
        keyPoints: [
          "CURB-65 ≤ 1: tratamento ambulatorial",
          "Reavaliação em 48-72h obrigatória",
          "Principal agente: S. pneumoniae",
        ],
      },
      {
        id: "pac-leve-comorbido",
        name: "PAC leve com comorbidades",
        severity: "CURB-65 0-1",
        context: "DM, DPOC, IC, hepatopatia, etilismo, neoplasia",
        firstLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "7 dias" },
          { drug: "Azitromicina", dose: "500mg/dia", route: "VO", duration: "3 dias", notes: "Associar ao betalactâmico" },
        ],
        secondLine: [
          { drug: "Levofloxacino", dose: "750mg/dia", route: "VO", duration: "5 dias" },
          { drug: "Moxifloxacino", dose: "400mg/dia", route: "VO", duration: "5 dias" },
        ],
        keyPoints: [
          "Cobrir atípicos + patógenos resistentes",
          "Se uso recente de ATB: trocar a classe",
        ],
      },
      {
        id: "pac-moderada",
        name: "PAC moderada (enfermaria)",
        severity: "CURB-65 2",
        context: "Internação em enfermaria",
        firstLine: [
          { drug: "Ceftriaxona", dose: "1-2g/dia", route: "EV", duration: "7-10 dias" },
          { drug: "Azitromicina", dose: "500mg/dia", route: "EV/VO", duration: "3-5 dias", notes: "Associar ao betalactâmico" },
        ],
        secondLine: [
          { drug: "Levofloxacino", dose: "750mg/dia", route: "EV", duration: "7 dias" },
          { drug: "Ampicilina-Sulbactam", dose: "1,5-3g 6/6h", route: "EV", duration: "7-10 dias", notes: "+ Azitromicina" },
        ],
        keyPoints: [
          "Colher hemoculturas ANTES do ATB",
          "Escalonamento para VO quando estável por 48-72h",
          "Considerar pesquisa de Legionella (antígeno urinário)",
        ],
      },
      {
        id: "pac-grave",
        name: "PAC grave (UTI)",
        severity: "CURB-65 ≥ 3",
        context: "Choque séptico ou VM",
        firstLine: [
          { drug: "Ceftriaxona", dose: "2g/dia", route: "EV", duration: "10-14 dias" },
          { drug: "Azitromicina", dose: "500mg/dia", route: "EV", duration: "5 dias", notes: "Obrigatório associar" },
        ],
        secondLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "10-14 dias" },
          { drug: "Levofloxacino", dose: "750mg/dia", route: "EV", duration: "7-10 dias", notes: "Associar ao betalactâmico" },
        ],
        keyPoints: [
          "Se risco de Pseudomonas: Pipe-Tazo ou Cefepime + Levo",
          "Se MRSA suspeito: adicionar Vancomicina",
          "ATB na 1ª hora do diagnóstico (meta sepse)",
        ],
      },
      {
        id: "pn-aspirativa",
        name: "Pneumonia aspirativa",
        context: "Rebaixamento, disfagia, vômito",
        firstLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "1,2g 8/8h", route: "EV", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Clindamicina", dose: "600mg 8/8h", route: "EV", duration: "10-14 dias" },
          { drug: "Metronidazol", dose: "500mg 8/8h", route: "EV", duration: "10-14 dias", notes: "+ Ceftriaxona" },
        ],
        keyPoints: [
          "Cobrir anaeróbios obrigatoriamente",
          "Atenção a abscesso pulmonar se evolução arrastada",
        ],
      },
      {
        id: "pn-nosocomial",
        name: "Pneumonia nosocomial / PAV",
        context: "≥ 48h de internação ou VM",
        firstLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "7-8 dias" },
        ],
        secondLine: [
          { drug: "Meropenem", dose: "1g 8/8h", route: "EV", duration: "7-8 dias" },
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "7-8 dias", notes: "Se risco de MRSA" },
        ],
        keyPoints: [
          "Seguir CCIH local para antibiograma institucional",
          "Desescalonar conforme cultura em 48-72h",
          "PAV precoce (< 5d) vs tardia (≥ 5d): perfil microbiológico diferente",
        ],
      },
    ],
  },

  // ==================== ITU ====================
  {
    id: "itu",
    category: "Infecção do Trato Urinário",
    icon: "🔬",
    color: "text-amber-600 dark:text-amber-400",
    scenarios: [
      {
        id: "cistite-simples",
        name: "Cistite não complicada",
        context: "Mulher jovem, sem comorbidades",
        firstLine: [
          { drug: "Fosfomicina", dose: "3g dose única", route: "VO", duration: "Dose única" },
          { drug: "Nitrofurantoína", dose: "100mg 6/6h", route: "VO", duration: "5 dias" },
        ],
        secondLine: [
          { drug: "Cefalexina", dose: "500mg 6/6h", route: "VO", duration: "7 dias" },
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "7 dias" },
        ],
        keyPoints: [
          "Evitar quinolonas para cistite não complicada (reservar)",
          "Nitrofurantoína: não usar se ClCr < 30ml/min",
          "Se cistite recorrente (≥3/ano): profilaxia com nitrofurantoína 100mg/noite",
        ],
      },
      {
        id: "cistite-complicada",
        name: "Cistite complicada",
        context: "Homem, gestante, DM, cateter, anomalia urológica",
        firstLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Ciprofloxacino", dose: "500mg 12/12h", route: "VO", duration: "7 dias" },
          { drug: "Ceftriaxona", dose: "1g/dia", route: "EV/IM", duration: "7-10 dias" },
        ],
        keyPoints: [
          "Sempre colher urocultura antes do ATB",
          "Em gestante: Cefalexina 500mg 6/6h 7d ou Nitrofurantoína (evitar 3º tri)",
        ],
      },
      {
        id: "pielonefrite-leve",
        name: "Pielonefrite leve (ambulatorial)",
        context: "Sem sepse, tolera VO",
        firstLine: [
          { drug: "Ciprofloxacino", dose: "500mg 12/12h", route: "VO", duration: "7 dias" },
        ],
        secondLine: [
          { drug: "Levofloxacino", dose: "750mg/dia", route: "VO", duration: "5 dias" },
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "10-14 dias" },
        ],
        keyPoints: [
          "Urocultura obrigatória",
          "Reavaliar em 48-72h — se não melhora: internar",
          "Imagem (USG) se má resposta ou suspeita de obstrução",
        ],
      },
      {
        id: "pielonefrite-grave",
        name: "Pielonefrite grave / Urosepse",
        context: "Sepse, vômitos, gravidez, obstrução",
        firstLine: [
          { drug: "Ceftriaxona", dose: "1-2g/dia", route: "EV", duration: "10-14 dias" },
        ],
        secondLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "10-14 dias" },
          { drug: "Meropenem", dose: "1g 8/8h", route: "EV", duration: "10-14 dias", notes: "Se ESBL ou falha terapêutica" },
        ],
        keyPoints: [
          "Desobstrução urológica urgente se hidronefrose",
          "Se choque séptico: ATB na 1ª hora",
          "Ajustar por urocultura em 48-72h",
        ],
      },
      {
        id: "itu-cateter",
        name: "ITU associada a cateter",
        context: "SVD > 48h com sintomas",
        firstLine: [
          { drug: "Ceftriaxona", dose: "1g/dia", route: "EV", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Ciprofloxacino", dose: "400mg 12/12h", route: "EV", duration: "7-10 dias" },
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "7-10 dias" },
        ],
        keyPoints: [
          "Trocar ou remover cateter ANTES de iniciar ATB",
          "Bacteriúria assintomática com cateter NÃO tratar",
          "Tratar apenas se sintomas sistêmicos",
        ],
      },
    ],
  },

  // ==================== PELE E PARTES MOLES ====================
  {
    id: "pele",
    category: "Pele e Partes Moles",
    icon: "🩹",
    color: "text-rose-600 dark:text-rose-400",
    scenarios: [
      {
        id: "celulite-leve",
        name: "Celulite não complicada",
        context: "Sem sinais sistêmicos, sem abscesso",
        firstLine: [
          { drug: "Cefalexina", dose: "500mg 6/6h", route: "VO", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "7-10 dias" },
          { drug: "Clindamicina", dose: "300mg 8/8h", route: "VO", duration: "7-10 dias" },
        ],
        keyPoints: [
          "Demarcar borda do eritema para monitorar progressão",
          "Elevar membro afetado",
          "Agentes: S. pyogenes (principal) e S. aureus",
        ],
      },
      {
        id: "celulite-grave",
        name: "Celulite grave / Erisipela complicada",
        context: "Sinais sistêmicos, comorbidades, falha VO",
        firstLine: [
          { drug: "Oxacilina", dose: "2g 4/4h", route: "EV", duration: "10-14 dias" },
        ],
        secondLine: [
          { drug: "Cefazolina", dose: "1-2g 8/8h", route: "EV", duration: "10-14 dias" },
          { drug: "Clindamicina", dose: "600mg 8/8h", route: "EV", duration: "10-14 dias", notes: "Se alergia a betalactâmicos" },
        ],
        keyPoints: [
          "Se suspeita de MRSA: Vancomicina 15-20mg/kg 12/12h",
          "TC se suspeita de fasciíte necrotizante",
          "Descartar trombose venosa profunda (DVT)",
        ],
      },
      {
        id: "abscesso",
        name: "Abscesso cutâneo",
        context: "Coleção flutuante",
        firstLine: [
          { drug: "Drenagem cirúrgica", dose: "Incisão e drenagem", route: "—", duration: "—", notes: "Tratamento principal" },
        ],
        secondLine: [
          { drug: "Sulfametoxazol-Trimetoprima", dose: "800/160mg 12/12h", route: "VO", duration: "7-10 dias", notes: "Se celulite perilesional extensa" },
          { drug: "Clindamicina", dose: "300mg 8/8h", route: "VO", duration: "7-10 dias" },
        ],
        keyPoints: [
          "ATB sistêmico apenas se: celulite > 5cm, imunossupressão, sinais sistêmicos",
          "Abscesso < 5cm sem celulite: drenagem isolada é suficiente",
          "Cultura do material drenado se recorrente ou MRSA suspeito",
        ],
      },
      {
        id: "fasciite",
        name: "Fasciíte necrotizante",
        severity: "EMERGÊNCIA CIRÚRGICA",
        context: "Dor desproporcional, crepitação, necrose",
        firstLine: [
          { drug: "Meropenem", dose: "1g 8/8h", route: "EV", duration: "14-21 dias" },
          { drug: "Clindamicina", dose: "900mg 8/8h", route: "EV", duration: "14-21 dias", notes: "Anti-toxina — associar obrigatoriamente" },
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "14-21 dias", notes: "Cobrir MRSA" },
        ],
        secondLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "14-21 dias", notes: "+ Clindamicina + Vancomicina" },
        ],
        keyPoints: [
          "⚠️ DESBRIDAMENTO CIRÚRGICO URGENTE — não atrasar por ATB",
          "Mortalidade > 30% — UTI obrigatória",
          "Re-exploração em 24-48h",
          "Classificação: Tipo I (polimicrobiana) vs Tipo II (estrepto/estafilo)",
        ],
      },
      {
        id: "pe-diabetico",
        name: "Pé diabético infectado",
        context: "Úlcera com sinais de infecção",
        firstLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "7-14 dias", notes: "Infecção leve" },
        ],
        secondLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "14-21 dias", notes: "Infecção moderada-grave" },
          { drug: "Ertapenem", dose: "1g/dia", route: "EV", duration: "14-21 dias", notes: "Se ESBL" },
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "14-21 dias", notes: "Adicionar se MRSA" },
        ],
        keyPoints: [
          "RX do pé para descartar osteomielite",
          "Cultura de tecido profundo (não swab superficial)",
          "Avaliação vascular obrigatória (ITB)",
          "Classificação PEDIS ou Wagner",
        ],
      },
    ],
  },

  // ==================== SNC ====================
  {
    id: "snc",
    category: "Infecções do SNC",
    icon: "🧠",
    color: "text-purple-600 dark:text-purple-400",
    scenarios: [
      {
        id: "meningite-comunitaria-adulto",
        name: "Meningite bacteriana (adulto)",
        severity: "EMERGÊNCIA",
        context: "18-50 anos, comunitária",
        firstLine: [
          { drug: "Ceftriaxona", dose: "2g 12/12h", route: "EV", duration: "10-14 dias" },
          { drug: "Dexametasona", dose: "0,15mg/kg 6/6h", route: "EV", duration: "4 dias", notes: "Iniciar 15-20min ANTES do ATB" },
        ],
        secondLine: [
          { drug: "Meropenem", dose: "2g 8/8h", route: "EV", duration: "14-21 dias" },
        ],
        allergicAlternative: [
          { drug: "Meropenem", dose: "2g 8/8h", route: "EV", duration: "14-21 dias" },
          { drug: "Cloranfenicol", dose: "1g 6/6h", route: "EV", duration: "10-14 dias", notes: "Se alergia grave a betalactâmicos" },
        ],
        keyPoints: [
          "⚠️ ATB na 1ª HORA — não atrasar para punção lombar",
          "Dexametasona ANTES ou junto ao ATB (reduz mortalidade por pneumococo)",
          "Principais agentes: S. pneumoniae, N. meningitidis",
          "Quimioprofilaxia de contatos se meningococo: Rifampicina 600mg 12/12h 2 dias",
        ],
      },
      {
        id: "meningite-idoso",
        name: "Meningite bacteriana (> 50 anos / imunossuprimido)",
        severity: "EMERGÊNCIA",
        context: "Idoso, DM, etilismo, imunossupressão",
        firstLine: [
          { drug: "Ceftriaxona", dose: "2g 12/12h", route: "EV", duration: "14-21 dias" },
          { drug: "Ampicilina", dose: "2g 4/4h", route: "EV", duration: "21 dias", notes: "Cobrir Listeria" },
          { drug: "Dexametasona", dose: "0,15mg/kg 6/6h", route: "EV", duration: "4 dias" },
        ],
        secondLine: [
          { drug: "Meropenem", dose: "2g 8/8h", route: "EV", duration: "21 dias", notes: "Se alergia a penicilinas" },
          { drug: "SMX-TMP", dose: "5mg/kg (TMP) 6/6h", route: "EV", duration: "21 dias", notes: "Alternativa para Listeria" },
        ],
        keyPoints: [
          "Listeria monocytogenes: risco em > 50 anos, gestantes, imunossuprimidos",
          "Ampicilina obrigatória para cobertura de Listeria",
        ],
      },
      {
        id: "meningite-neonatal",
        name: "Meningite neonatal",
        severity: "EMERGÊNCIA",
        context: "RN até 28 dias de vida",
        firstLine: [
          { drug: "Ampicilina", dose: "75-100mg/kg/dose 6/6h", route: "EV", duration: "14-21 dias" },
          { drug: "Cefotaxima", dose: "50mg/kg/dose 6/6h", route: "EV", duration: "14-21 dias", notes: "Preferir sobre ceftriaxona no RN" },
        ],
        secondLine: [
          { drug: "Ampicilina", dose: "75-100mg/kg/dose 6/6h", route: "EV", duration: "14-21 dias" },
          { drug: "Gentamicina", dose: "4-5mg/kg/dia", route: "EV", duration: "14-21 dias" },
        ],
        keyPoints: [
          "Agentes: E. coli K1, Streptococcus grupo B, Listeria",
          "NÃO usar ceftriaxona em neonatos (desloca bilirrubina)",
          "Punção lombar de controle em 48-72h",
        ],
      },
      {
        id: "encefalite",
        name: "Encefalite viral (HSV)",
        severity: "EMERGÊNCIA",
        context: "Febre + confusão + convulsões + sinais focais",
        firstLine: [
          { drug: "Aciclovir", dose: "10mg/kg 8/8h", route: "EV", duration: "14-21 dias" },
        ],
        secondLine: [
          { drug: "Aciclovir", dose: "10mg/kg 8/8h", route: "EV", duration: "21 dias", notes: "Em imunossuprimidos: 21 dias" },
        ],
        keyPoints: [
          "Iniciar Aciclovir empiricamente se suspeita — não aguardar PCR",
          "RNM > TC para diagnóstico (lesão temporal)",
          "PCR do LCR para HSV-1 e HSV-2",
          "Mortalidade sem tratamento: 70%",
        ],
      },
      {
        id: "abscesso-cerebral",
        name: "Abscesso cerebral",
        context: "Foco infeccioso + sinais neurológicos focais",
        firstLine: [
          { drug: "Ceftriaxona", dose: "2g 12/12h", route: "EV", duration: "4-8 semanas" },
          { drug: "Metronidazol", dose: "500mg 8/8h", route: "EV", duration: "4-8 semanas", notes: "Cobrir anaeróbios" },
        ],
        secondLine: [
          { drug: "Meropenem", dose: "2g 8/8h", route: "EV", duration: "4-8 semanas" },
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "4-8 semanas", notes: "Se pós-neurocirúrgico" },
        ],
        keyPoints: [
          "Neurocirurgia: drenagem se > 2,5cm ou efeito de massa",
          "Foco odontogênico frequente — avaliação bucomaxilo",
          "TC com contraste para seguimento (cada 2 semanas)",
        ],
      },
    ],
  },

  // ==================== ABDOMINAL ====================
  {
    id: "abdominal",
    category: "Infecções Abdominais",
    icon: "🫄",
    color: "text-orange-600 dark:text-orange-400",
    scenarios: [
      {
        id: "pbe",
        name: "Peritonite bacteriana espontânea (PBE)",
        context: "Cirrótico com ascite",
        firstLine: [
          { drug: "Ceftriaxona", dose: "2g/dia", route: "EV", duration: "5-7 dias" },
        ],
        secondLine: [
          { drug: "Ciprofloxacino", dose: "400mg 12/12h", route: "EV", duration: "7 dias" },
          { drug: "Amoxicilina-Clavulanato", dose: "1,2g 8/8h", route: "EV", duration: "7 dias" },
        ],
        keyPoints: [
          "Diagnóstico: PMN > 250/mm³ no líquido ascítico",
          "Albumina 1,5g/kg no D1 + 1g/kg no D3 (previne SHR)",
          "Profilaxia 2ária: Norfloxacino 400mg/dia contínuo",
        ],
      },
      {
        id: "peritonite-secundaria",
        name: "Peritonite secundária (perfuração)",
        severity: "EMERGÊNCIA CIRÚRGICA",
        context: "Perfuração visceral, apendicite complicada",
        firstLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "5-7 dias pós-controle" },
        ],
        secondLine: [
          { drug: "Meropenem", dose: "1g 8/8h", route: "EV", duration: "5-7 dias", notes: "Se falha ou ESBL" },
          { drug: "Ceftriaxona", dose: "2g/dia", route: "EV", duration: "7 dias", notes: "+ Metronidazol 500mg 8/8h" },
        ],
        keyPoints: [
          "⚠️ Controle cirúrgico do foco é MANDATÓRIO",
          "Duração: contar a partir do controle do foco cirúrgico",
          "Cobrir gram-negativos + anaeróbios",
        ],
      },
      {
        id: "colangite",
        name: "Colangite aguda",
        context: "Tríade de Charcot: febre + icterícia + dor em HCD",
        firstLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Meropenem", dose: "1g 8/8h", route: "EV", duration: "7-10 dias" },
          { drug: "Ciprofloxacino", dose: "400mg 12/12h", route: "EV", duration: "7-10 dias", notes: "+ Metronidazol" },
        ],
        keyPoints: [
          "CPRE de urgência se Grau III (choque / falência orgânica)",
          "CPRE eletiva (24-48h) se Grau II",
          "Classificação: Tokyo Guidelines (TG18/TG13)",
        ],
      },
      {
        id: "diverticulite",
        name: "Diverticulite aguda complicada",
        context: "Hinchey ≥ II",
        firstLine: [
          { drug: "Ceftriaxona", dose: "1g/dia", route: "EV", duration: "7-10 dias" },
          { drug: "Metronidazol", dose: "500mg 8/8h", route: "EV", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "7-10 dias" },
          { drug: "Ertapenem", dose: "1g/dia", route: "EV", duration: "7-10 dias" },
        ],
        keyPoints: [
          "Hinchey I (flegmão): ATB VO ambulatorial em casos selecionados",
          "Hinchey III-IV: cirurgia + ATB",
          "Drenagem percutânea se abscesso > 4cm",
        ],
      },
      {
        id: "diarreia-c-diff",
        name: "Diarreia por Clostridioides difficile",
        context: "Diarreia nosocomial pós-ATB",
        firstLine: [
          { drug: "Vancomicina", dose: "125mg 6/6h", route: "VO", duration: "10 dias" },
        ],
        secondLine: [
          { drug: "Fidaxomicina", dose: "200mg 12/12h", route: "VO", duration: "10 dias" },
          { drug: "Metronidazol", dose: "500mg 8/8h", route: "VO", duration: "10 dias", notes: "Apenas se Vanco VO indisponível" },
        ],
        keyPoints: [
          "Suspender ATB causador quando possível",
          "NÃO usar antidiarreicos (loperamida)",
          "Caso fulminante: Vanco VO 500mg 6/6h + Metronidazol EV 500mg 8/8h",
          "Recorrência: considerar transplante de microbiota fecal",
        ],
      },
      {
        id: "apendicite",
        name: "Apendicite aguda",
        context: "Profilaxia/tratamento perioperatório",
        firstLine: [
          { drug: "Cefoxitina", dose: "2g dose única", route: "EV", duration: "Dose única (não complicada)", notes: "Profilaxia" },
        ],
        secondLine: [
          { drug: "Ceftriaxona", dose: "1g/dia", route: "EV", duration: "3-5 dias", notes: "+ Metronidazol 500mg 8/8h (se complicada)" },
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "5-7 dias", notes: "Se perfurada" },
        ],
        keyPoints: [
          "Não complicada: ATB profilático apenas (dose única)",
          "Complicada (perfurada/abscesso): ATB terapêutico 3-7 dias",
        ],
      },
    ],
  },

  // ==================== SEPSE / INFECÇÃO DE CORRENTE SANGUÍNEA ====================
  {
    id: "sepse",
    category: "Sepse e Corrente Sanguínea",
    icon: "🩸",
    color: "text-red-600 dark:text-red-400",
    scenarios: [
      {
        id: "sepse-comunitaria",
        name: "Sepse comunitária (foco desconhecido)",
        severity: "EMERGÊNCIA",
        context: "Foco não identificado inicialmente",
        firstLine: [
          { drug: "Ceftriaxona", dose: "2g/dia", route: "EV", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Piperacilina-Tazobactam", dose: "4,5g 6/6h", route: "EV", duration: "7-10 dias" },
          { drug: "Meropenem", dose: "1g 8/8h", route: "EV", duration: "7-10 dias", notes: "Se falha ou risco ESBL" },
        ],
        keyPoints: [
          "⚠️ ATB na 1ª HORA do reconhecimento",
          "Colher 2 pares de hemoculturas ANTES do ATB",
          "Hora 1 Bundle: ATB + lactato + hemoculturas + fluidos + vasopressor se necessário",
          "Reavaliar e desescalonar em 48-72h conforme culturas",
        ],
      },
      {
        id: "sepse-cateter",
        name: "Infecção de cateter venoso central",
        context: "CVC > 48h com febre sem outro foco",
        firstLine: [
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "7-14 dias" },
        ],
        secondLine: [
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "14 dias" },
          { drug: "Cefepime", dose: "2g 8/8h", route: "EV", duration: "14 dias", notes: "Adicionar se gram-negativo suspeito" },
        ],
        keyPoints: [
          "Remover cateter se: S. aureus, Candida, tunelite, sepse grave",
          "Hemoculturas pareadas: central e periférica",
          "Diferencial de tempo de positividade > 2h → sugere infecção de cateter",
          "Se S. aureus: ecocardiograma para descartar endocardite",
        ],
      },
      {
        id: "endocardite",
        name: "Endocardite infecciosa (válvula nativa)",
        context: "Critérios de Duke modificados",
        firstLine: [
          { drug: "Oxacilina", dose: "2g 4/4h", route: "EV", duration: "4-6 semanas" },
          { drug: "Gentamicina", dose: "3mg/kg/dia", route: "EV", duration: "2 semanas", notes: "Sinergismo (opcional)" },
        ],
        secondLine: [
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "6 semanas", notes: "Se MRSA" },
          { drug: "Daptomicina", dose: "8-10mg/kg/dia", route: "EV", duration: "6 semanas", notes: "Alternativa a vanco" },
        ],
        keyPoints: [
          "3 pares de hemoculturas em sítios diferentes",
          "ETE > ETT para diagnóstico",
          "Indicações cirúrgicas: IC, vegetação > 10mm, embolia recorrente",
        ],
      },
      {
        id: "candidemia",
        name: "Candidemia / Candidíase invasiva",
        context: "Hemocultura + para Candida",
        firstLine: [
          { drug: "Anidulafungina", dose: "200mg D1, depois 100mg/dia", route: "EV", duration: "14 dias após negativação" },
        ],
        secondLine: [
          { drug: "Micafungina", dose: "100mg/dia", route: "EV", duration: "14 dias após negativação" },
          { drug: "Fluconazol", dose: "800mg D1, depois 400mg/dia", route: "EV", duration: "14 dias após negativação", notes: "Se C. albicans sensível" },
        ],
        keyPoints: [
          "Remover TODOS os cateteres venosos centrais",
          "Fundoscopia para descartar endoftalmite",
          "Hemoculturas diárias até negativação",
          "Ecocardiograma para descartar endocardite fúngica",
        ],
      },
    ],
  },

  // ==================== INFECÇÕES OSTEOARTICULARES ====================
  {
    id: "osteoarticular",
    category: "Infecções Osteoarticulares",
    icon: "🦴",
    color: "text-emerald-600 dark:text-emerald-400",
    scenarios: [
      {
        id: "artrite-septica",
        name: "Artrite séptica",
        severity: "URGÊNCIA",
        context: "Monoartrite aguda com febre",
        firstLine: [
          { drug: "Oxacilina", dose: "2g 4/4h", route: "EV", duration: "3-4 semanas" },
        ],
        secondLine: [
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "3-4 semanas", notes: "Se MRSA" },
          { drug: "Ceftriaxona", dose: "2g/dia", route: "EV", duration: "2-4 semanas", notes: "Se gonococo suspeito" },
        ],
        keyPoints: [
          "Artrocentese diagnóstica ANTES do ATB",
          "Líquido sinovial > 50.000 leucócitos com PMN > 75%",
          "Drenagem articular (artroscópica ou aberta) se joelho/quadril",
          "Principal agente: S. aureus",
        ],
      },
      {
        id: "osteomielite",
        name: "Osteomielite aguda hematogênica",
        context: "Dor óssea + febre + elevação de VHS/PCR",
        firstLine: [
          { drug: "Oxacilina", dose: "2g 4/4h", route: "EV", duration: "4-6 semanas" },
        ],
        secondLine: [
          { drug: "Vancomicina", dose: "15-20mg/kg 12/12h", route: "EV", duration: "4-6 semanas", notes: "Se MRSA" },
          { drug: "Ceftriaxona", dose: "2g/dia", route: "EV", duration: "4-6 semanas", notes: "Se gram-negativo" },
        ],
        keyPoints: [
          "RNM é o exame de escolha",
          "Biópsia óssea para cultura — padrão-ouro",
          "Switch para VO após 2 semanas se boa resposta clínica e laboratorial",
          "VO: Ciprofloxacino + Rifampicina (se MSSA após switch)",
        ],
      },
    ],
  },

  // ==================== INFECÇÕES RESPIRATÓRIAS ALTAS ====================
  {
    id: "vias-aereas",
    category: "Infecções de Vias Aéreas Superiores",
    icon: "👃",
    color: "text-teal-600 dark:text-teal-400",
    scenarios: [
      {
        id: "faringoamigdalite",
        name: "Faringoamigdalite estreptocócica",
        context: "Critérios de Centor ≥ 3 ou teste rápido +",
        firstLine: [
          { drug: "Penicilina Benzatina", dose: "1.200.000 UI", route: "IM", duration: "Dose única" },
          { drug: "Amoxicilina", dose: "500mg 8/8h", route: "VO", duration: "10 dias" },
        ],
        secondLine: [
          { drug: "Azitromicina", dose: "500mg/dia", route: "VO", duration: "5 dias", notes: "Se alergia a penicilina" },
          { drug: "Cefalexina", dose: "500mg 12/12h", route: "VO", duration: "10 dias" },
        ],
        keyPoints: [
          "Tratar para prevenir febre reumática",
          "Centor: febre, exsudato, adenomegalia, ausência de tosse",
          "Se abscesso periamigdaliano: drenagem + ATB EV",
        ],
      },
      {
        id: "sinusite",
        name: "Rinossinusite bacteriana aguda",
        context: "Sintomas > 10 dias ou piora após melhora",
        firstLine: [
          { drug: "Amoxicilina", dose: "500mg 8/8h", route: "VO", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "875/125mg 12/12h", route: "VO", duration: "7-10 dias" },
          { drug: "Levofloxacino", dose: "500mg/dia", route: "VO", duration: "5 dias", notes: "Se alergia ou falha" },
        ],
        keyPoints: [
          "Maioria é viral — ATB apenas se critérios bacterianos",
          "Complicação grave: celulite orbitária, trombose de seio cavernoso",
        ],
      },
      {
        id: "otite-media",
        name: "Otite média aguda",
        context: "Otalgia + abaulamento timpânico",
        firstLine: [
          { drug: "Amoxicilina", dose: "50mg/kg/dia (ped) ou 500mg 8/8h (adulto)", route: "VO", duration: "7-10 dias" },
        ],
        secondLine: [
          { drug: "Amoxicilina-Clavulanato", dose: "90mg/kg/dia (ped) ou 875mg 12/12h", route: "VO", duration: "10 dias" },
          { drug: "Ceftriaxona", dose: "50mg/kg IM", route: "IM", duration: "1-3 doses", notes: "Se vômitos ou falha VO" },
        ],
        keyPoints: [
          "< 6 meses: sempre tratar",
          "6m-2 anos: tratar se grave ou bilateral",
          "> 2 anos unilateral leve: observação 48-72h é opção",
        ],
      },
    ],
  },
];

// Helper to get all categories
export function getAntimicrobialCategories() {
  return antimicrobialGuide.map(f => ({ id: f.id, category: f.category, icon: f.icon, count: f.scenarios.length }));
}

// Search across all scenarios
export function searchAntimicrobials(query: string): { focus: InfectiousFocus; scenario: InfectionScenario }[] {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const results: { focus: InfectiousFocus; scenario: InfectionScenario }[] = [];
  
  for (const focus of antimicrobialGuide) {
    for (const scenario of focus.scenarios) {
      const searchable = [
        scenario.name,
        scenario.context || "",
        scenario.severity || "",
        ...scenario.firstLine.map(r => r.drug),
        ...scenario.secondLine.map(r => r.drug),
        ...(scenario.keyPoints || []),
      ].join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
      if (searchable.includes(q)) {
        results.push({ focus, scenario });
      }
    }
  }
  
  return results;
}
