export interface LabValue {
  name: string;
  unit: string;
  ranges: LabRange[];
}

export interface LabRange {
  group: string; // e.g. "Adulto Masculino", "Adulto Feminino", "Pediátrico (1-12a)", "RN"
  min: number | string;
  max: number | string;
  note?: string;
}

export interface LabCategory {
  id: string;
  title: string;
  values: LabValue[];
}

export const labCategories: LabCategory[] = [
  {
    id: "hemograma",
    title: "Hemograma",
    values: [
      {
        name: "Hemoglobina",
        unit: "g/dL",
        ranges: [
          { group: "Homem adulto", min: 13.5, max: 17.5 },
          { group: "Mulher adulta", min: 12.0, max: 16.0 },
          { group: "Gestante", min: 11.0, max: 14.0 },
          { group: "Criança (1-12a)", min: 11.5, max: 14.5 },
          { group: "Lactente (6m-1a)", min: 11.0, max: 13.0 },
          { group: "RN (termo)", min: 14.0, max: 24.0 },
        ],
      },
      {
        name: "Hematócrito",
        unit: "%",
        ranges: [
          { group: "Homem adulto", min: 40, max: 54 },
          { group: "Mulher adulta", min: 36, max: 48 },
          { group: "Gestante", min: 33, max: 44 },
          { group: "Criança (1-12a)", min: 35, max: 45 },
          { group: "RN (termo)", min: 44, max: 64 },
        ],
      },
      {
        name: "Leucócitos",
        unit: "/mm³",
        ranges: [
          { group: "Adulto", min: 4000, max: 11000 },
          { group: "Criança (2-12a)", min: 5000, max: 13000 },
          { group: "Lactente (1m-2a)", min: 6000, max: 17500 },
          { group: "RN (termo)", min: 9000, max: 30000 },
        ],
      },
      {
        name: "Neutrófilos",
        unit: "/mm³",
        ranges: [
          { group: "Adulto", min: 1800, max: 7700 },
          { group: "Criança", min: 1500, max: 8500 },
          { group: "RN", min: 6000, max: 26000 },
        ],
      },
      {
        name: "Linfócitos",
        unit: "/mm³",
        ranges: [
          { group: "Adulto", min: 1000, max: 4800 },
          { group: "Criança", min: 2000, max: 8000 },
          { group: "RN", min: 2000, max: 11000 },
        ],
      },
      {
        name: "Plaquetas",
        unit: "×10³/mm³",
        ranges: [
          { group: "Adulto", min: 150, max: 400 },
          { group: "Criança", min: 150, max: 450 },
          { group: "RN", min: 150, max: 450 },
        ],
      },
      {
        name: "VCM",
        unit: "fL",
        ranges: [
          { group: "Adulto", min: 80, max: 100 },
          { group: "Criança (2-6a)", min: 75, max: 87 },
          { group: "RN", min: 95, max: 121 },
        ],
      },
      {
        name: "HCM",
        unit: "pg",
        ranges: [
          { group: "Adulto", min: 27, max: 33 },
          { group: "Criança", min: 24, max: 30 },
          { group: "RN", min: 31, max: 37 },
        ],
      },
      {
        name: "CHCM",
        unit: "g/dL",
        ranges: [
          { group: "Adulto", min: 32, max: 36 },
        ],
      },
      {
        name: "RDW",
        unit: "%",
        ranges: [
          { group: "Adulto", min: 11.5, max: 14.5 },
        ],
      },
      {
        name: "Reticulócitos",
        unit: "%",
        ranges: [
          { group: "Adulto", min: 0.5, max: 2.0 },
          { group: "RN", min: 2.0, max: 6.0 },
        ],
      },
      {
        name: "VHS",
        unit: "mm/h",
        ranges: [
          { group: "Homem < 50a", min: 0, max: 15 },
          { group: "Homem > 50a", min: 0, max: 20 },
          { group: "Mulher < 50a", min: 0, max: 20 },
          { group: "Mulher > 50a", min: 0, max: 30 },
        ],
      },
    ],
  },
  {
    id: "bioquimica",
    title: "Bioquímica",
    values: [
      {
        name: "Glicemia de Jejum",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto (normal)", min: 70, max: 99 },
          { group: "Pré-diabetes", min: 100, max: 125 },
          { group: "Diabetes", min: "≥126", max: "-", note: "Confirmar com 2ª dosagem" },
          { group: "RN", min: 40, max: 60 },
          { group: "Criança", min: 60, max: 100 },
        ],
      },
      {
        name: "HbA1c",
        unit: "%",
        ranges: [
          { group: "Normal", min: "<5.7", max: "-" },
          { group: "Pré-diabetes", min: 5.7, max: 6.4 },
          { group: "Diabetes", min: "≥6.5", max: "-" },
        ],
      },
      {
        name: "Ureia",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 15, max: 40 },
          { group: "Criança", min: 10, max: 38 },
          { group: "Idoso (>60a)", min: 17, max: 45 },
          { group: "RN", min: 3, max: 12 },
        ],
      },
      {
        name: "Creatinina",
        unit: "mg/dL",
        ranges: [
          { group: "Homem adulto", min: 0.7, max: 1.3 },
          { group: "Mulher adulta", min: 0.6, max: 1.1 },
          { group: "Criança (1-12a)", min: 0.3, max: 0.7 },
          { group: "RN", min: 0.3, max: 1.0, note: "Reflete creatinina materna nos primeiros dias" },
        ],
      },
      {
        name: "Sódio (Na⁺)",
        unit: "mEq/L",
        ranges: [
          { group: "Adulto", min: 136, max: 145 },
          { group: "Criança", min: 136, max: 145 },
          { group: "RN", min: 133, max: 146 },
        ],
      },
      {
        name: "Potássio (K⁺)",
        unit: "mEq/L",
        ranges: [
          { group: "Adulto", min: 3.5, max: 5.0 },
          { group: "Criança", min: 3.5, max: 5.0 },
          { group: "RN", min: 3.7, max: 5.9 },
          { group: "Prematuro", min: 4.5, max: 7.0, note: "Valores mais altos são normais" },
        ],
      },
      {
        name: "Cálcio Total",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 8.5, max: 10.5 },
          { group: "Criança", min: 8.8, max: 10.8 },
          { group: "RN", min: 7.6, max: 10.4 },
        ],
      },
      {
        name: "Cálcio Iônico",
        unit: "mmol/L",
        ranges: [
          { group: "Adulto", min: 1.12, max: 1.32 },
          { group: "RN", min: 1.0, max: 1.3 },
        ],
      },
      {
        name: "Magnésio",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 1.7, max: 2.2 },
          { group: "Criança", min: 1.7, max: 2.1 },
          { group: "RN", min: 1.5, max: 2.2 },
        ],
      },
      {
        name: "Fósforo",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 2.5, max: 4.5 },
          { group: "Criança", min: 4.0, max: 7.0 },
          { group: "RN", min: 4.2, max: 9.0 },
        ],
      },
      {
        name: "Ácido Úrico",
        unit: "mg/dL",
        ranges: [
          { group: "Homem adulto", min: 3.4, max: 7.0 },
          { group: "Mulher adulta", min: 2.4, max: 5.7 },
          { group: "Criança", min: 2.0, max: 5.5 },
        ],
      },
      {
        name: "TGO (AST)",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 10, max: 40 },
          { group: "Criança", min: 15, max: 60 },
          { group: "RN", min: 25, max: 75 },
        ],
      },
      {
        name: "TGP (ALT)",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 7, max: 56 },
          { group: "Criança", min: 10, max: 40 },
          { group: "RN", min: 6, max: 50 },
        ],
      },
      {
        name: "Fosfatase Alcalina",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 44, max: 147 },
          { group: "Criança (1-10a)", min: 150, max: 350, note: "Elevada fisiologicamente na infância" },
          { group: "Adolescente", min: 100, max: 390 },
        ],
      },
      {
        name: "GGT",
        unit: "U/L",
        ranges: [
          { group: "Homem adulto", min: 8, max: 61 },
          { group: "Mulher adulta", min: 5, max: 36 },
          { group: "RN", min: 13, max: 147 },
        ],
      },
      {
        name: "Bilirrubina Total",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 0.1, max: 1.2 },
          { group: "RN (1-2 dias)", min: 1.0, max: 6.0, note: "Icterícia fisiológica até ~12 mg/dL" },
        ],
      },
      {
        name: "Bilirrubina Direta",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 0.0, max: 0.3 },
        ],
      },
      {
        name: "Albumina",
        unit: "g/dL",
        ranges: [
          { group: "Adulto", min: 3.5, max: 5.0 },
          { group: "Criança", min: 3.8, max: 5.4 },
          { group: "RN", min: 2.8, max: 4.4 },
        ],
      },
      {
        name: "Proteínas Totais",
        unit: "g/dL",
        ranges: [
          { group: "Adulto", min: 6.0, max: 8.0 },
          { group: "RN", min: 4.6, max: 7.0 },
        ],
      },
      {
        name: "LDH",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 140, max: 280 },
          { group: "RN", min: 160, max: 450 },
        ],
      },
      {
        name: "Amilase",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 28, max: 100 },
        ],
      },
      {
        name: "Lipase",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 0, max: 160 },
        ],
      },
      {
        name: "CPK (CK Total)",
        unit: "U/L",
        ranges: [
          { group: "Homem adulto", min: 39, max: 308 },
          { group: "Mulher adulta", min: 26, max: 192 },
        ],
      },
      {
        name: "CK-MB",
        unit: "U/L",
        ranges: [
          { group: "Adulto", min: 0, max: 25, note: ">6% do CK total sugere origem cardíaca" },
        ],
      },
      {
        name: "Troponina I",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto (normal)", min: 0, max: 0.04, note: ">0.04 sugere lesão miocárdica" },
        ],
      },
      {
        name: "BNP",
        unit: "pg/mL",
        ranges: [
          { group: "Adulto (normal)", min: 0, max: 100, note: ">400 sugere IC descompensada" },
        ],
      },
      {
        name: "PCR",
        unit: "mg/L",
        ranges: [
          { group: "Adulto (normal)", min: 0, max: 5 },
          { group: "Alto risco CV", min: ">3", max: "-", note: "PCR ultrassensível" },
        ],
      },
      {
        name: "Lactato",
        unit: "mmol/L",
        ranges: [
          { group: "Adulto (arterial)", min: 0.5, max: 1.6 },
          { group: "Adulto (venoso)", min: 0.5, max: 2.2 },
          { group: "Crítico", min: ">4", max: "-", note: "Associado a hipoperfusão tecidual grave" },
        ],
      },
      {
        name: "Procalcitonina",
        unit: "ng/mL",
        ranges: [
          { group: "Normal", min: 0, max: 0.05 },
          { group: "Infecção bacteriana provável", min: ">0.5", max: "-" },
          { group: "Sepse provável", min: ">2.0", max: "-" },
        ],
      },
      {
        name: "Ferritina",
        unit: "ng/mL",
        ranges: [
          { group: "Homem adulto", min: 20, max: 250 },
          { group: "Mulher adulta", min: 10, max: 120 },
          { group: "Criança", min: 7, max: 140 },
        ],
      },
      {
        name: "Ferro Sérico",
        unit: "µg/dL",
        ranges: [
          { group: "Homem adulto", min: 65, max: 175 },
          { group: "Mulher adulta", min: 50, max: 170 },
          { group: "Criança", min: 50, max: 120 },
        ],
      },
      {
        name: "Transferrina",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 200, max: 360 },
        ],
      },
      {
        name: "TSH",
        unit: "µUI/mL",
        ranges: [
          { group: "Adulto", min: 0.4, max: 4.0 },
          { group: "Gestante (1º tri)", min: 0.1, max: 2.5 },
          { group: "RN", min: 1.0, max: 39.0, note: "Normaliza em 2-4 semanas" },
        ],
      },
      {
        name: "T4 Livre",
        unit: "ng/dL",
        ranges: [
          { group: "Adulto", min: 0.9, max: 1.7 },
          { group: "RN", min: 0.9, max: 2.2 },
        ],
      },
      {
        name: "Colesterol Total",
        unit: "mg/dL",
        ranges: [
          { group: "Desejável", min: "<200", max: "-" },
          { group: "Limítrofe", min: 200, max: 239 },
          { group: "Alto", min: "≥240", max: "-" },
        ],
      },
      {
        name: "LDL",
        unit: "mg/dL",
        ranges: [
          { group: "Ótimo", min: "<100", max: "-" },
          { group: "Desejável", min: 100, max: 129 },
          { group: "Limítrofe", min: 130, max: 159 },
          { group: "Alto", min: "≥160", max: "-" },
        ],
      },
      {
        name: "HDL",
        unit: "mg/dL",
        ranges: [
          { group: "Homem (desejável)", min: ">40", max: "-" },
          { group: "Mulher (desejável)", min: ">50", max: "-" },
        ],
      },
      {
        name: "Triglicerídeos",
        unit: "mg/dL",
        ranges: [
          { group: "Normal", min: "<150", max: "-" },
          { group: "Limítrofe", min: 150, max: 199 },
          { group: "Alto", min: 200, max: 499 },
          { group: "Muito alto", min: "≥500", max: "-", note: "Risco de pancreatite" },
        ],
      },
    ],
  },
  {
    id: "coagulacao",
    title: "Coagulação",
    values: [
      {
        name: "TP (Tempo de Protrombina)",
        unit: "segundos",
        ranges: [
          { group: "Adulto", min: 11, max: 14.5 },
          { group: "RN", min: 12, max: 18, note: "Prolongado fisiologicamente" },
        ],
      },
      {
        name: "INR",
        unit: "",
        ranges: [
          { group: "Normal", min: 0.8, max: 1.2 },
          { group: "Anticoagulação (FA)", min: 2.0, max: 3.0 },
          { group: "Prótese mecânica", min: 2.5, max: 3.5 },
        ],
      },
      {
        name: "TTPa",
        unit: "segundos",
        ranges: [
          { group: "Adulto", min: 25, max: 35 },
          { group: "Heparinização", min: 46, max: 70, note: "1.5-2.5x o controle" },
          { group: "RN", min: 31, max: 55 },
        ],
      },
      {
        name: "Fibrinogênio",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 200, max: 400 },
          { group: "Gestante (3º tri)", min: 300, max: 700, note: "Elevação fisiológica" },
          { group: "RN", min: 167, max: 399 },
        ],
      },
      {
        name: "D-Dímero",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto (<50a)", min: 0, max: 500 },
          { group: "Adulto (>50a)", min: 0, max: "-", note: "Ajustar: idade × 10 (ex: 70a → 700)" },
          { group: "Gestante", min: 0, max: "-", note: "Elevado fisiologicamente; interpretar com cautela" },
        ],
      },
      {
        name: "Tempo de Sangramento",
        unit: "minutos",
        ranges: [
          { group: "Adulto", min: 1, max: 7 },
        ],
      },
    ],
  },
  {
    id: "gasometria",
    title: "Gasometria Arterial",
    values: [
      {
        name: "pH",
        unit: "",
        ranges: [
          { group: "Adulto (arterial)", min: 7.35, max: 7.45 },
          { group: "Adulto (venoso)", min: 7.31, max: 7.41 },
          { group: "RN", min: 7.30, max: 7.40 },
        ],
      },
      {
        name: "pCO₂",
        unit: "mmHg",
        ranges: [
          { group: "Adulto (arterial)", min: 35, max: 45 },
          { group: "Adulto (venoso)", min: 41, max: 51 },
          { group: "RN", min: 30, max: 40 },
        ],
      },
      {
        name: "pO₂",
        unit: "mmHg",
        ranges: [
          { group: "Adulto (arterial)", min: 80, max: 100 },
          { group: "Idoso (>60a)", min: 60, max: 80, note: "Declínio fisiológico com a idade" },
          { group: "RN", min: 60, max: 80 },
        ],
      },
      {
        name: "HCO₃⁻",
        unit: "mEq/L",
        ranges: [
          { group: "Adulto", min: 22, max: 26 },
          { group: "RN", min: 18, max: 22 },
        ],
      },
      {
        name: "BE (Base Excess)",
        unit: "mEq/L",
        ranges: [
          { group: "Adulto", min: -2, max: 2 },
          { group: "RN", min: -4, max: 4 },
        ],
      },
      {
        name: "SaO₂",
        unit: "%",
        ranges: [
          { group: "Adulto", min: 95, max: 100 },
          { group: "RN (pré-ductal)", min: 95, max: 100 },
          { group: "DPOC (aceitável)", min: 88, max: 92, note: "Alvo de SpO2 em O2 suplementar" },
        ],
      },
      {
        name: "Relação PaO₂/FiO₂",
        unit: "",
        ranges: [
          { group: "Normal", min: ">400", max: "-" },
          { group: "SDRA Leve", min: 200, max: 300 },
          { group: "SDRA Moderada", min: 100, max: 200 },
          { group: "SDRA Grave", min: "<100", max: "-" },
        ],
      },
      {
        name: "Ânion Gap",
        unit: "mEq/L",
        ranges: [
          { group: "Normal (com albumina)", min: 8, max: 12 },
          { group: "Corrigido", min: "-", max: "-", note: "AG + 2.5 × (4 - albumina)" },
        ],
      },
      {
        name: "Delta/Delta (ΔΔ)",
        unit: "",
        ranges: [
          { group: "<1", min: "-", max: "-", note: "Acidose mista (AG + hiperclorêmica)" },
          { group: "1-2", min: "-", max: "-", note: "Acidose AG pura" },
          { group: ">2", min: "-", max: "-", note: "Alcalose metabólica concomitante" },
        ],
      },
    ],
  },
  {
    id: "renal",
    title: "Função Renal e Urina",
    values: [
      {
        name: "TFG estimada (CKD-EPI)",
        unit: "mL/min/1.73m²",
        ranges: [
          { group: "Normal (G1)", min: ">90", max: "-" },
          { group: "Leve (G2)", min: 60, max: 89 },
          { group: "Moderada (G3a)", min: 45, max: 59 },
          { group: "Moderada (G3b)", min: 30, max: 44 },
          { group: "Grave (G4)", min: 15, max: 29 },
          { group: "Falência (G5)", min: "<15", max: "-" },
        ],
      },
      {
        name: "Proteinúria 24h",
        unit: "mg/24h",
        ranges: [
          { group: "Normal", min: 0, max: 150 },
          { group: "Microalbuminúria", min: 30, max: 300, note: "Relação albumina/creatinina" },
          { group: "Macroalbuminúria", min: ">300", max: "-" },
          { group: "Nefrótica", min: ">3500", max: "-" },
        ],
      },
      {
        name: "Osmolalidade Sérica",
        unit: "mOsm/kg",
        ranges: [
          { group: "Adulto", min: 275, max: 295 },
        ],
      },
      {
        name: "Osmolalidade Urinária",
        unit: "mOsm/kg",
        ranges: [
          { group: "Variável", min: 50, max: 1200, note: "Depende da hidratação" },
        ],
      },
      {
        name: "FeNa",
        unit: "%",
        ranges: [
          { group: "Pré-renal", min: "<1", max: "-" },
          { group: "Renal (NTA)", min: ">2", max: "-" },
        ],
      },
      {
        name: "Sódio Urinário",
        unit: "mEq/L",
        ranges: [
          { group: "Pré-renal", min: "<20", max: "-" },
          { group: "Renal", min: ">40", max: "-" },
        ],
      },
      {
        name: "Densidade Urinária",
        unit: "",
        ranges: [
          { group: "Normal", min: 1.005, max: 1.030 },
        ],
      },
      {
        name: "pH Urinário",
        unit: "",
        ranges: [
          { group: "Normal", min: 4.5, max: 8.0 },
        ],
      },
    ],
  },
  {
    id: "liquor",
    title: "Líquor (LCR)",
    values: [
      {
        name: "Pressão de Abertura",
        unit: "cmH₂O",
        ranges: [
          { group: "Adulto (DL)", min: 6, max: 20 },
          { group: "Criança", min: 6, max: 20 },
          { group: "Obeso", min: 6, max: 25 },
        ],
      },
      {
        name: "Celularidade",
        unit: "células/mm³",
        ranges: [
          { group: "Adulto (normal)", min: 0, max: 5, note: "Predomínio de linfócitos" },
          { group: "RN", min: 0, max: 30 },
        ],
      },
      {
        name: "Proteínas (LCR)",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 15, max: 45 },
          { group: "RN", min: 20, max: 170 },
        ],
      },
      {
        name: "Glicose (LCR)",
        unit: "mg/dL",
        ranges: [
          { group: "Adulto", min: 40, max: 70, note: "Relação LCR/soro: 0.6-0.8" },
          { group: "RN", min: 30, max: 80 },
        ],
      },
      {
        name: "Lactato (LCR)",
        unit: "mmol/L",
        ranges: [
          { group: "Normal", min: 1.1, max: 2.4 },
          { group: "Meningite bacteriana", min: ">3.5", max: "-" },
        ],
      },
    ],
  },
  {
    id: "hormonios",
    title: "Hormônios",
    values: [
      {
        name: "Cortisol (manhã)",
        unit: "µg/dL",
        ranges: [
          { group: "Adulto (8h)", min: 6.2, max: 19.4 },
          { group: "Adulto (16h)", min: 2.3, max: 11.9 },
          { group: "Gestante (3º tri)", min: 10, max: 45, note: "Elevação fisiológica pela CBG" },
        ],
      },
      {
        name: "ACTH",
        unit: "pg/mL",
        ranges: [
          { group: "Adulto (manhã)", min: 7.2, max: 63.3 },
        ],
      },
      {
        name: "GH (basal)",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto", min: 0, max: 5 },
          { group: "Criança", min: 0, max: 10, note: "Picos durante o sono" },
        ],
      },
      {
        name: "IGF-1",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto (20-40a)", min: 101, max: 267 },
          { group: "Adulto (>60a)", min: 69, max: 200 },
          { group: "Adolescente", min: 182, max: 780 },
        ],
      },
      {
        name: "Prolactina",
        unit: "ng/mL",
        ranges: [
          { group: "Homem adulto", min: 2, max: 18 },
          { group: "Mulher adulta", min: 2, max: 29 },
          { group: "Gestante (3º tri)", min: 95, max: 473, note: "Elevação progressiva" },
        ],
      },
      {
        name: "FSH",
        unit: "mUI/mL",
        ranges: [
          { group: "Homem adulto", min: 1.5, max: 12.4 },
          { group: "Mulher (folicular)", min: 3.5, max: 12.5 },
          { group: "Mulher (pico ovulatório)", min: 4.7, max: 21.5 },
          { group: "Mulher (pós-menopausa)", min: 25.8, max: 134.8 },
        ],
      },
      {
        name: "LH",
        unit: "mUI/mL",
        ranges: [
          { group: "Homem adulto", min: 1.7, max: 8.6 },
          { group: "Mulher (folicular)", min: 2.4, max: 12.6 },
          { group: "Mulher (pico ovulatório)", min: 14.0, max: 95.6 },
          { group: "Mulher (pós-menopausa)", min: 7.7, max: 58.5 },
        ],
      },
      {
        name: "Estradiol",
        unit: "pg/mL",
        ranges: [
          { group: "Homem adulto", min: 10, max: 40 },
          { group: "Mulher (folicular)", min: 12.5, max: 166 },
          { group: "Mulher (pico ovulatório)", min: 85.8, max: 498 },
          { group: "Mulher (pós-menopausa)", min: 0, max: 54.7 },
          { group: "Gestante (1º tri)", min: 215, max: 4300 },
        ],
      },
      {
        name: "Progesterona",
        unit: "ng/mL",
        ranges: [
          { group: "Mulher (folicular)", min: 0.2, max: 1.5 },
          { group: "Mulher (lútea)", min: 1.7, max: 27 },
          { group: "Gestante (1º tri)", min: 9.0, max: 47.0 },
          { group: "Gestante (3º tri)", min: 55, max: 200 },
        ],
      },
      {
        name: "Testosterona Total",
        unit: "ng/dL",
        ranges: [
          { group: "Homem adulto", min: 270, max: 1070 },
          { group: "Mulher adulta", min: 15, max: 70 },
          { group: "Criança pré-púbere", min: 0, max: 20 },
        ],
      },
      {
        name: "DHEA-S",
        unit: "µg/dL",
        ranges: [
          { group: "Homem (20-40a)", min: 120, max: 520 },
          { group: "Mulher (20-40a)", min: 65, max: 380 },
        ],
      },
      {
        name: "Insulina (jejum)",
        unit: "µUI/mL",
        ranges: [
          { group: "Adulto", min: 2.6, max: 24.9 },
          { group: "Gestante", min: 3, max: 30, note: "Resistência fisiológica no 3º tri" },
        ],
      },
      {
        name: "Peptídeo C (jejum)",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto", min: 0.8, max: 3.1 },
        ],
      },
      {
        name: "PTH (Paratormônio)",
        unit: "pg/mL",
        ranges: [
          { group: "Adulto", min: 15, max: 65 },
        ],
      },
      {
        name: "25-OH Vitamina D",
        unit: "ng/mL",
        ranges: [
          { group: "Suficiente", min: 30, max: 100 },
          { group: "Insuficiente", min: 20, max: 29 },
          { group: "Deficiente", min: "<20", max: "-" },
          { group: "Gestante (desejável)", min: ">30", max: "-", note: "Suplementação recomendada se <30" },
        ],
      },
      {
        name: "Vitamina B12",
        unit: "pg/mL",
        ranges: [
          { group: "Adulto", min: 200, max: 900 },
          { group: "Gestante", min: 200, max: 900, note: "Níveis podem cair fisiologicamente" },
        ],
      },
      {
        name: "Ácido Fólico",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto", min: 3.1, max: 17.5 },
          { group: "Gestante (desejável)", min: ">5", max: "-", note: "Suplementar 400µg/dia pré-concepção" },
        ],
      },
      {
        name: "Renina (ativa)",
        unit: "µUI/mL",
        ranges: [
          { group: "Adulto (em pé)", min: 4.4, max: 46.1 },
          { group: "Adulto (deitado)", min: 2.8, max: 39.9 },
        ],
      },
      {
        name: "Aldosterona",
        unit: "ng/dL",
        ranges: [
          { group: "Adulto (em pé)", min: 4, max: 31 },
          { group: "Adulto (deitado)", min: 1, max: 16 },
        ],
      },
      {
        name: "β-hCG",
        unit: "mUI/mL",
        ranges: [
          { group: "Não gestante", min: 0, max: 5 },
          { group: "Gestante (4 sem)", min: 5, max: 426 },
          { group: "Gestante (8 sem)", min: 7650, max: 229000 },
          { group: "Gestante (12 sem)", min: 13300, max: 254000 },
          { group: "Gestante (2º tri)", min: 4060, max: 165400 },
        ],
      },
    ],
  },
  {
    id: "urina",
    title: "Urina Tipo I (EAS)",
    values: [
      {
        name: "Leucócitos",
        unit: "/campo",
        ranges: [
          { group: "Normal", min: 0, max: 5 },
          { group: "Gestante", min: 0, max: 10, note: "Considerar cultura se >10" },
        ],
      },
      {
        name: "Hemácias",
        unit: "/campo",
        ranges: [
          { group: "Normal", min: 0, max: 3 },
        ],
      },
      {
        name: "Cilindros",
        unit: "/campo",
        ranges: [
          { group: "Hialinos (normal)", min: 0, max: 2, note: "Cilindros granulosos, céreos ou hemáticos são patológicos" },
        ],
      },
      {
        name: "Células Epiteliais",
        unit: "/campo",
        ranges: [
          { group: "Normal", min: "<5", max: "-", note: ">15 sugere contaminação" },
        ],
      },
      {
        name: "Proteínas (fita)",
        unit: "",
        ranges: [
          { group: "Normal", min: "Negativo", max: "-" },
          { group: "Gestante", min: "Negativo", max: "-", note: "Traços podem ocorrer; >1+ investigar pré-eclâmpsia" },
        ],
      },
      {
        name: "Glicose (fita)",
        unit: "",
        ranges: [
          { group: "Normal", min: "Negativo", max: "-" },
          { group: "Gestante", min: "Negativo", max: "-", note: "Pode positivar por ↓ limiar renal; não confirma DM" },
        ],
      },
      {
        name: "Nitrito",
        unit: "",
        ranges: [
          { group: "Normal", min: "Negativo", max: "-", note: "Positivo sugere ITU por Gram-negativos" },
        ],
      },
      {
        name: "Esterase Leucocitária",
        unit: "",
        ranges: [
          { group: "Normal", min: "Negativo", max: "-", note: "Sensibilidade ~75-95% para piúria" },
        ],
      },
      {
        name: "Bilirrubina (urina)",
        unit: "",
        ranges: [
          { group: "Normal", min: "Negativo", max: "-", note: "Positivo sugere icterícia obstrutiva" },
        ],
      },
      {
        name: "Urobilinogênio",
        unit: "mg/dL",
        ranges: [
          { group: "Normal", min: 0.2, max: 1.0 },
        ],
      },
      {
        name: "Relação Albumina/Creatinina",
        unit: "mg/g",
        ranges: [
          { group: "Normal", min: 0, max: 30 },
          { group: "Microalbuminúria", min: 30, max: 300 },
          { group: "Macroalbuminúria", min: ">300", max: "-" },
        ],
      },
      {
        name: "Relação Proteína/Creatinina",
        unit: "mg/mg",
        ranges: [
          { group: "Normal", min: 0, max: 0.2 },
          { group: "Gestante (pré-eclâmpsia)", min: ">0.3", max: "-", note: "Equivale a ~300mg/24h" },
        ],
      },
    ],
  },
  {
    id: "marcadores",
    title: "Marcadores Tumorais",
    values: [
      {
        name: "PSA Total",
        unit: "ng/mL",
        ranges: [
          { group: "Homem <50a", min: 0, max: 2.5 },
          { group: "Homem 50-59a", min: 0, max: 3.5 },
          { group: "Homem 60-69a", min: 0, max: 4.5 },
          { group: "Homem >70a", min: 0, max: 6.5 },
        ],
      },
      {
        name: "CEA",
        unit: "ng/mL",
        ranges: [
          { group: "Não fumante", min: 0, max: 3.0 },
          { group: "Fumante", min: 0, max: 5.0 },
        ],
      },
      {
        name: "AFP (Alfafetoproteína)",
        unit: "ng/mL",
        ranges: [
          { group: "Adulto", min: 0, max: 10 },
          { group: "Gestante (2º tri)", min: 10, max: 150, note: "Rastreio de DTN e trissomias" },
          { group: "RN", min: 0, max: 40000, note: "Normaliza em ~1 ano" },
        ],
      },
      {
        name: "CA 125",
        unit: "U/mL",
        ranges: [
          { group: "Adulto", min: 0, max: 35, note: "Elevado em endometriose, DIP, gravidez" },
        ],
      },
      {
        name: "CA 19-9",
        unit: "U/mL",
        ranges: [
          { group: "Adulto", min: 0, max: 37 },
        ],
      },
      {
        name: "CA 15-3",
        unit: "U/mL",
        ranges: [
          { group: "Adulto", min: 0, max: 31.3 },
        ],
      },
    ],
  },
  {
    id: "perfil_lipidico",
    title: "Perfil Lipídico Pediátrico",
    values: [
      {
        name: "Colesterol Total (pediátrico)",
        unit: "mg/dL",
        ranges: [
          { group: "Aceitável (2-19a)", min: 0, max: 170 },
          { group: "Limítrofe (2-19a)", min: 170, max: 199 },
          { group: "Alto (2-19a)", min: "≥200", max: "-" },
        ],
      },
      {
        name: "LDL (pediátrico)",
        unit: "mg/dL",
        ranges: [
          { group: "Aceitável (2-19a)", min: 0, max: 110 },
          { group: "Limítrofe (2-19a)", min: 110, max: 129 },
          { group: "Alto (2-19a)", min: "≥130", max: "-" },
        ],
      },
      {
        name: "HDL (pediátrico)",
        unit: "mg/dL",
        ranges: [
          { group: "Aceitável (2-19a)", min: ">45", max: "-" },
          { group: "Baixo (2-19a)", min: "<40", max: "-" },
        ],
      },
      {
        name: "Triglicerídeos (pediátrico)",
        unit: "mg/dL",
        ranges: [
          { group: "Aceitável (0-9a)", min: 0, max: 75 },
          { group: "Aceitável (10-19a)", min: 0, max: 90 },
          { group: "Alto (0-9a)", min: "≥100", max: "-" },
          { group: "Alto (10-19a)", min: "≥130", max: "-" },
        ],
      },
    ],
  },
  {
    id: "gestante",
    title: "Painel Gestacional",
    values: [
      {
        name: "Hemoglobina (gestante)",
        unit: "g/dL",
        ranges: [
          { group: "1º trimestre", min: 11.0, max: 14.0 },
          { group: "2º trimestre", min: 10.5, max: 14.0, note: "Hemodiluição fisiológica" },
          { group: "3º trimestre", min: 11.0, max: 14.0 },
        ],
      },
      {
        name: "Plaquetas (gestante)",
        unit: "×10³/mm³",
        ranges: [
          { group: "Normal", min: 150, max: 400 },
          { group: "Trombocitopenia gestacional", min: 100, max: 150, note: "Benigna se >100k; investigar se <100k" },
        ],
      },
      {
        name: "Creatinina (gestante)",
        unit: "mg/dL",
        ranges: [
          { group: "1º trimestre", min: 0.4, max: 0.7 },
          { group: "2º/3º trimestre", min: 0.4, max: 0.8, note: "Valores >0.9 podem indicar lesão renal" },
        ],
      },
      {
        name: "Ácido Úrico (gestante)",
        unit: "mg/dL",
        ranges: [
          { group: "1º trimestre", min: 2.0, max: 4.2 },
          { group: "2º trimestre", min: 2.4, max: 4.9 },
          { group: "3º trimestre", min: 3.1, max: 6.3, note: ">6.0 pode associar-se a pré-eclâmpsia" },
        ],
      },
      {
        name: "TGO/TGP (gestante)",
        unit: "U/L",
        ranges: [
          { group: "TGO (gestante)", min: 4, max: 32 },
          { group: "TGP (gestante)", min: 2, max: 25, note: "Elevação pode indicar HELLP ou fígado gorduroso" },
        ],
      },
      {
        name: "Fibrinogênio (gestante)",
        unit: "mg/dL",
        ranges: [
          { group: "1º trimestre", min: 200, max: 450 },
          { group: "3º trimestre", min: 300, max: 700, note: "Elevação fisiológica; <200 suspeitar CIVD" },
        ],
      },
      {
        name: "TSH (gestante)",
        unit: "µUI/mL",
        ranges: [
          { group: "1º trimestre", min: 0.1, max: 2.5 },
          { group: "2º trimestre", min: 0.2, max: 3.0 },
          { group: "3º trimestre", min: 0.3, max: 3.0 },
        ],
      },
      {
        name: "Glicemia Jejum (gestante)",
        unit: "mg/dL",
        ranges: [
          { group: "Normal", min: 0, max: 91 },
          { group: "DMG (IADPSG)", min: 92, max: 125, note: "≥92 no 1º tri = DMG" },
          { group: "DM prévio", min: "≥126", max: "-" },
        ],
      },
      {
        name: "TOTG 75g (gestante)",
        unit: "mg/dL",
        ranges: [
          { group: "Jejum (normal)", min: 0, max: 91 },
          { group: "1h (normal)", min: 0, max: 179 },
          { group: "2h (normal)", min: 0, max: 152, note: "1 valor alterado = DMG (IADPSG)" },
        ],
      },
      {
        name: "Proteína/Creatinina (gestante)",
        unit: "mg/mg",
        ranges: [
          { group: "Normal", min: 0, max: 0.3 },
          { group: "Pré-eclâmpsia", min: ">0.3", max: "-", note: "Equivale a proteinúria >300mg/24h" },
        ],
      },
    ],
  },
];
