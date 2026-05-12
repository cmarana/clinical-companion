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
  {
    id: "liquidos",
    title: "Líquidos e Derrames",
    values: [
      { name: "Proteína — Transudato", unit: "g/dL", ranges: [{ group: "Transudato", min: "-", max: "<3,0", note: "Exsudato: >3,0 g/dL (critérios de Light)" }] },
      { name: "DHL Pleural/Sérico", unit: "ratio", ranges: [{ group: "Referência", min: "-", max: "<0,6", note: "Exsudato se ratio >0,6 (critério de Light)" }] },
      { name: "Proteína Pleural/Sérica", unit: "ratio", ranges: [{ group: "Referência", min: "-", max: "<0,5", note: "Exsudato se ratio >0,5 (critério de Light)" }] },
      { name: "Glicose — Líquido Pleural", unit: "mg/dL", ranges: [{ group: "Referência", min: 60, max: 100, note: "Baixa (<60): empiema, artrite reumatoide, neoplasia, TB" }] },
      { name: "pH — Líquido Pleural", unit: "-", ranges: [{ group: "Referência", min: "7,40", max: "7,60", note: "pH <7,20: drenagem indicada (parapneumônico complicado, empiema)" }] },
      { name: "Células — Pleural (neutrófilos)", unit: "/mm³", ranges: [{ group: "Referência", min: "-", max: "<1000", note: ">1000 neutrófilos: processo inflamatório agudo/infeccioso" }] },
      { name: "Albumina Sérica-Ascítica (GASA)", unit: "g/dL", ranges: [{ group: "Referência", min: "-", max: "-", note: "GASA ≥1,1: hipertensão portal (cirrose, ICC). GASA <1,1: outras causas (carcinomatose, TB)" }] },
      { name: "Proteína — Líquido Ascítico", unit: "g/dL", ranges: [{ group: "Referência", min: "-", max: "-", note: ">2,5 g/dL + GASA <1,1: PBE improvável mas ponderar" }] },
      { name: "Leucócitos — Ascite", unit: "/mm³", ranges: [{ group: "Referência", min: "-", max: "<250", note: "PMN >250/mm³: peritonite bacteriana espontânea (PBE)" }] },
      { name: "Glicose — Líquido Sinovial", unit: "mg/dL", ranges: [{ group: "Referência", min: 70, max: 110, note: "Baixa (<60): artrite séptica, artrite reumatoide, gota" }] },
      { name: "Leucócitos — Sinovial (normal)", unit: "/mm³", ranges: [{ group: "Normal", min: 0, max: 200, note: "Inflamatório: 2.000-75.000 / Séptico: >50.000 (até >100.000)" }] },
      { name: "PMN — Sinovial", unit: "%", ranges: [{ group: "Referência", min: "-", max: "<25", note: ">75% PMN: fortemente sugestivo de artrite séptica" }] },
      { name: "Proteína — Líquido Pericárdico", unit: "g/dL", ranges: [{ group: "Referência", min: "-", max: "<3,0", note: "Exsudato se >3,0. Hemorrágico: trauma, neoplasia, anticoagulação" }] },
    ],
  },
  {
    id: "imunologia",
    title: "Imunologia / Autoimunidade",
    values: [
      { name: "FAN (ANA)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Título ≥1:80 considerado positivo. Baixa especificidade isolado." }] },
      { name: "Anti-DNA dupla fita (anti-dsDNA)", unit: "UI/mL", ranges: [{ group: "Referência", min: "-", max: "<10", note: "Elevado no LES — correlaciona com atividade da doença e nefrite lúpica" }] },
      { name: "Anti-Sm", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Alta especificidade para LES (30-40% dos casos)" }] },
      { name: "Anti-SSA (Ro)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Síndrome de Sjögren, LES. Lúpus neonatal, bloqueio cardíaco fetal" }] },
      { name: "Anti-SSB (La)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Síndrome de Sjögren (alta especificidade)" }] },
      { name: "Anti-Scl70 (Topoisomerase I)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Esclerodermia difusa — associado a doença pulmonar intersticial" }] },
      { name: "Anticentrômero", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Esclerodermia limitada (CREST)" }] },
      { name: "Anti-Jo1", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Polimiosite/dermatomiosite — síndrome antissintetase" }] },
      { name: "FR (Fator Reumatoide)", unit: "UI/mL", ranges: [{ group: "Referência", min: "-", max: "<20", note: ">20 UI/mL: positivo. Presente em 70-80% da AR, mas não específico" }] },
      { name: "Anti-CCP", unit: "U/mL", ranges: [{ group: "Referência", min: "-", max: "<20", note: "Alta especificidade para Artrite Reumatoide (>95%). Precoce." }] },
      { name: "ANCA-c (anti-PR3)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Granulomatose com poliangiite (Wegener)" }] },
      { name: "ANCA-p (anti-MPO)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Poliangiite microscópica, Churg-Strauss" }] },
      { name: "Complemento C3", unit: "mg/dL", ranges: [{ group: "Referência", min: 90, max: 180, note: "Baixo: LES ativo, glomerulonefrite, endocardite" }] },
      { name: "Complemento C4", unit: "mg/dL", ranges: [{ group: "Referência", min: 16, max: 47, note: "Baixo: LES, deficiência congênita (angioedema hereditário)" }] },
      { name: "IgG", unit: "mg/dL", ranges: [{ group: "Referência", min: 700, max: 1600, note: "Baixo: imunodeficiência. Alto: infecção crônica, mieloma, autoimunidade" }] },
      { name: "IgA", unit: "mg/dL", ranges: [{ group: "Referência", min: 70, max: 400, note: "Deficiência de IgA: causa mais comum de imunodeficiência primária" }] },
      { name: "IgM", unit: "mg/dL", ranges: [{ group: "Referência", min: 40, max: 230, note: "Alto: infecção aguda, macroglobulinemia de Waldenström" }] },
      { name: "IgE Total", unit: "UI/mL", ranges: [{ group: "Referência", min: 0, max: 100, note: ">1000: atopia grave, aspergilose, parasitose, síndrome de Job" }] },
      { name: "Anticardiolipina IgG", unit: "GPL/mL", ranges: [{ group: "Referência", min: "-", max: "<15", note: "Síndrome antifosfolípide: >40 GPL ou título moderado-alto persistente" }] },
      { name: "Anti-beta2-glicoproteína I", unit: "U/mL", ranges: [{ group: "Referência", min: "-", max: "<20", note: "Critério diagnóstico de SAF — mais específico que anticardiolipina" }] },
    ],
  },
  {
    id: "pediatria_lab",
    title: "Pediatria — Referências Específicas",
    values: [
      { name: "Hemoglobina — RN", unit: "g/dL", ranges: [{ group: "RN", min: "13,5", max: "21,5", note: "Queda fisiológica até 10-11 g/dL entre 6-12 semanas (anemia fisiológica do lactente)" }] },
      { name: "Hemoglobina — 6 meses a 2 anos", unit: "g/dL", ranges: [{ group: "6m-2a", min: "10,5", max: "14,0", note: "Limite inferior: 10,5 g/dL. Investigar ferropriva se <11 g/dL" }] },
      { name: "Hemoglobina — 2 a 12 anos", unit: "g/dL", ranges: [{ group: "2-12a", min: "11,5", max: "15,5" }] },
      { name: "Leucócitos — RN", unit: "/mm³", ranges: [{ group: "RN", min: "9.000", max: "30.000", note: "Pico nas primeiras 24h. Desvio para esquerda fisiológico." }] },
      { name: "Leucócitos — 1 a 12 meses", unit: "/mm³", ranges: [{ group: "1-12m", min: "6.000", max: "17.500", note: "Linfocitose fisiológica domina até 4-6 anos" }] },
      { name: "Leucócitos — 1 a 6 anos", unit: "/mm³", ranges: [{ group: "1-6a", min: "5.000", max: "15.000" }] },
      { name: "Glicemia — RN termo", unit: "mg/dL", ranges: [{ group: "RN termo", min: 45, max: 125, note: "Hipoglicemia neonatal: <47 mg/dL nas primeiras 48h" }] },
      { name: "Creatinina — RN", unit: "mg/dL", ranges: [{ group: "RN", min: "0,3", max: "1,0", note: "Reflete creatinina materna na 1ª semana. Adulto após 2 semanas." }] },
      { name: "Creatinina — 1 a 5 anos", unit: "mg/dL", ranges: [{ group: "1-5a", min: "0,2", max: "0,5" }] },
      { name: "Creatinina — 6 a 12 anos", unit: "mg/dL", ranges: [{ group: "6-12a", min: "0,3", max: "0,7" }] },
      { name: "Bilirrubina Total — RN (risco kernicterus)", unit: "mg/dL", ranges: [{ group: "RN", min: "-", max: "Varia", note: "Usar nomograma de Bhutani. >25 mg/dL em RN termo: exsanguinotransfusão." }] },
      { name: "PCR — Neonatal (sepse)", unit: "mg/L", ranges: [{ group: "RN", min: "-", max: "<10", note: "Seriado: PCR <10 com queda nas primeiras 24-48h sugere ausência de infecção" }] },
      { name: "TSH — RN (triagem)", unit: "mU/L", ranges: [{ group: "RN", min: "-", max: "<20", note: ">20 mU/L na triagem neonatal: confirmar hipotireoidismo congênito" }] },
      { name: "Cálcio Total — RN", unit: "mg/dL", ranges: [{ group: "RN", min: "7,5", max: "10,5", note: "Hipocalcemia neonatal precoce: <8 mg/dL nas 72h de vida" }] },
      { name: "Sódio — Pediátrico", unit: "mEq/L", ranges: [{ group: "Pediátrico", min: 135, max: 145, note: "Hiponatremia sintomática (<125): correção lenta (NaCl 3%)" }] },
      { name: "Potássio — RN", unit: "mEq/L", ranges: [{ group: "RN", min: "3,7", max: "5,9", note: "Pseudo-hipercalemia frequente por hemólise. Confirmar gasometria." }] },
      { name: "Fosfatase Alcalina — Pediátrica", unit: "U/L", ranges: [{ group: "Pediátrico", min: 100, max: 400, note: "Fisiologicamente elevada em crescimento. Pico na puberdade." }] },
      { name: "Ferritina — 6 meses a 5 anos", unit: "ng/mL", ranges: [{ group: "6m-5a", min: 6, max: 24, note: "<12 ng/mL: depleção de ferro. Ferropriva se <12 + anemia + VCM baixo" }] },
    ],
  },
  {
    id: "infeccioso",
    title: "Painel Infeccioso",
    values: [
      { name: "Procalcitonina — Sepse bacteriana", unit: "ng/mL", ranges: [{ group: "Referência", min: "-", max: "<0,5", note: "<0,5: bacteremia improvável / 0,5-2: possível / >2: provável / >10: sepse grave" }] },
      { name: "Procalcitonina — Alta precoce (pneumonia)", unit: "ng/mL", ranges: [{ group: "Referência", min: "-", max: "<0,25", note: "PCT <0,25 em 72h: considerar suspensão do ATB (protocolo guiado por PCT)" }] },
      { name: "PCR — Infecção bacteriana", unit: "mg/L", ranges: [{ group: "Referência", min: "-", max: "<10", note: ">100 mg/L: infecção bacteriana grave. >200: sepse/abscesso. Inespecífico." }] },
      { name: "Hemoculturas — Volume adequado", unit: "mL/frasco", ranges: [{ group: "Referência", min: 8, max: 10, note: "2 pares (4 frascos) aumentam sensibilidade para >90%. Colher antes do ATB." }] },
      { name: "Sorologia HIV (Ag/Ac 4ª geração)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Não reagente", note: "Janela imunológica: 18-45 dias. Confirmar reagente com teste suplementar." }] },
      { name: "CD4 — HIV", unit: "céls/mm³", ranges: [{ group: "Referência", min: 500, max: 1500, note: "<200: AIDS / risco de infecções oportunistas. <100: profilaxia ampliada." }] },
      { name: "Carga Viral HIV", unit: "cópias/mL", ranges: [{ group: "Referência", min: "-", max: "<50", note: "<50 (indetectável): supressão viral adequada. >1000: investigar falha terapêutica." }] },
      { name: "Anti-HBs (vacinação)", unit: "mUI/mL", ranges: [{ group: "Imunidade", min: "≥10", max: "-", note: "≥10 mUI/mL: imunidade protetora pós-vacinal ou pós-infecção" }] },
      { name: "HBsAg", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Positivo: hepatite B ativa ou portador. Confirmar com HBeAg e Anti-HBc." }] },
      { name: "Anti-HCV", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Positivo: confirmar com PCR HCV-RNA. Anti-HCV persiste mesmo após cura." }] },
      { name: "VDRL/RPR — Sífilis", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Não reagente", note: "Reagente: titular 1:1, 1:2... Tratado com sucesso: queda 4× em 6-12 meses" }] },
      { name: "FTA-Abs / TPHA", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Teste treponêmico confirmatório. Permanece positivo após tratamento." }] },
      { name: "Dengue NS1", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Positivo nos primeiros 5 dias. Após 5 dias: IgM/IgG" }] },
      { name: "Dengue IgM", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Positivo a partir do 5º dia. Persiste 3 meses." }] },
      { name: "Urina — Leucocitúria (ITU)", unit: "léucos/campo", ranges: [{ group: "Referência", min: "-", max: "<5", note: ">10 leucócitos/campo: piúria — sugestivo de ITU. Urocultura para confirmar." }] },
      { name: "Urocultura", unit: "UFC/mL", ranges: [{ group: "Referência", min: "-", max: "<100.000", note: "≥100.000 UFC/mL: ITU / ≥1.000 se cateter / ≥100 se punção suprapúbica" }] },
      { name: "Aspirado Gástrico — BAAR (TB)", unit: "-", ranges: [{ group: "Referência", min: "-", max: "Negativo", note: "Sensibilidade 40-80%. Baciloscopia e cultura. GeneXpert: sensibilidade >85%." }] },
      { name: "LDH — Pneumocystis (PCP)", unit: "U/L", ranges: [{ group: "Referência", min: "-", max: "<220", note: "LDH elevado (>500) em HIV com dispneia + hipóxia: PCP até prova em contrário" }] },
      { name: "Beta-D-Glucano", unit: "pg/mL", ranges: [{ group: "Referência", min: "-", max: "<80", note: ">80: suspeita de infecção fúngica invasiva (Candida, Aspergillus, PCP). Não detecta Mucor/Cryptococcus." }] },
      { name: "Galactomanano", unit: "índice", ranges: [{ group: "Referência", min: "-", max: "<0,5", note: "≥0,5: aspergilose invasiva. Alta sensibilidade em neutropênicos." }] },
    ],
  },
  {
    id: "toxicologia_lab",
    title: "Toxicologia / Drogas",
    values: [
      { name: "Etanol — Intoxicação leve", unit: "mg/dL", ranges: [{ group: "Leve", min: 80, max: 150, note: "Euforia, desinibição, comprometimento leve da coordenação" }] },
      { name: "Etanol — Intoxicação moderada", unit: "mg/dL", ranges: [{ group: "Moderada", min: 150, max: 300, note: "Ataxia, disartria, julgamento comprometido" }] },
      { name: "Etanol — Intoxicação grave", unit: "mg/dL", ranges: [{ group: "Grave", min: ">300", max: "-", note: ">300: estupor/coma. >400: risco de morte. Limite legal BR: 60 mg/dL" }] },
      { name: "Paracetamol — Nível tóxico (4h pós-ingestão)", unit: "mcg/mL", ranges: [{ group: "Referência", min: "-", max: "<150", note: ">150 mcg/mL às 4h pós-ingestão: indicar N-acetilcisteína (nomograma Rumack-Matthew)" }] },
      { name: "Salicilato — Nível terapêutico", unit: "mg/dL", ranges: [{ group: "Terapêutico", min: 15, max: 30, note: ">40: intoxicação / >60: grave / >100: crítico com hemodiálise indicada" }] },
      { name: "Digoxina — Nível terapêutico", unit: "ng/mL", ranges: [{ group: "Terapêutico", min: "0,5", max: "2,0", note: ">2,0 ng/mL com sintomas: toxicidade provável. Dosar 8h após última dose." }] },
      { name: "Lítio — Nível terapêutico", unit: "mEq/L", ranges: [{ group: "Terapêutico", min: "0,6", max: "1,2", note: ">1,5: toxicidade / >2,0: grave / >2,5: diálise indicada" }] },
      { name: "Fenitoína — Nível terapêutico", unit: "mcg/mL", ranges: [{ group: "Terapêutico", min: 10, max: 20, note: "Livre (não ligada): 1-2 mcg/mL. Ajustar pela albumina se baixa." }] },
      { name: "Fenobarbital — Nível terapêutico", unit: "mcg/mL", ranges: [{ group: "Terapêutico", min: 15, max: 40, note: ">40: sedação excessiva. >60: coma." }] },
      { name: "Valproato — Nível terapêutico", unit: "mcg/mL", ranges: [{ group: "Terapêutico", min: 50, max: 100, note: ">150: toxicidade hepática e SNC" }] },
      { name: "Vancomicina — AUC/MIC", unit: "mg·h/L", ranges: [{ group: "Alvo", min: 400, max: 600, note: "Monitorar AUC/MIC 400-600 (não apenas vale). Vale recomendado: 15-20 mcg/mL (método alternativo)" }] },
      { name: "Gentamicina — Nível pico", unit: "mcg/mL", ranges: [{ group: "Pico", min: 5, max: 10, note: "Vale <2 mcg/mL. Pico 5-10 (dose estendida): pico >15-20 desejável" }] },
      { name: "Aminofilina/Teofilina — Nível", unit: "mcg/mL", ranges: [{ group: "Terapêutico", min: 10, max: 20, note: ">20: toxicidade (náuseas, arritmias). >40: convulsões, FV" }] },
      { name: "Metotrexato — Nível D2 (alta dose)", unit: "micromol/L", ranges: [{ group: "Referência", min: "-", max: "<1,0", note: "<1,0 no D2 (48h): excreção adequada. >10: leucovorina em altas doses" }] },
      { name: "Carbamazepina — Nível terapêutico", unit: "mcg/mL", ranges: [{ group: "Terapêutico", min: 4, max: 12, note: ">12: toxicidade (diplopia, ataxia, boca seca)" }] },
      { name: "Gap Osmolar — Intoxicação por álcoois", unit: "mOsm/kg", ranges: [{ group: "Referência", min: "-", max: "<10", note: ">10: suspeitar de metanol, etilenoglicol ou etanol não dosado. Calcular: Osm medida - (2×Na + glicemia/18 + ureia/2,8)" }] },
    ],
  },
];
