import type { FullProtocol } from "./types";

export const metabolicFullProtocols6: FullProtocol[] = [
  {
    id: "fp-hipocalcemia-aguda",
    title: "Hipocalcemia Aguda",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hipocalcemia", "calcio", "tetania", "Chvostek", "Trousseau"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Hipocalcemia Aguda na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Hipercalemia: potássio sérico >5,5mEq/L. Emergência médica quando >6,5mEq/L ou com alterações eletrocardiográficas.\n\nClassificação:\n• Leve: 5,5-6,0mEq/L\n• Moderada: 6,1-6,5mEq/L\n• Grave: >6,5mEq/L ou com alterações ECG\n\nAlterações ECG progressivas:\n• Ondas T apiculadas (tent-shaped) — mais precoce\n• Achatamento de onda P\n• Alargamento de QRS\n• Padrão sinusoidal\n• FV / Assistolia"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Hipocalcemia Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Hipocalcemia Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Hipocalcemia Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Hipocalcemia Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Hipocalcemia Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta — tratamento escalonado:\n\n1. ECG IMEDIATO (avaliar alterações):\n\n2. ESTABILIZAR MEMBRANA (se alteração ECG ou K+ >6,5):\n• Gluconato de cálcio 10% 10mL IV em 2-5min\n  - Início: 1-3min, duração: 30-60min\n  - Repetir se persistência de alteração ECG\n  - Em uso de digoxina: infundir em 20-30min com cautela\n\n3. SHIFT (redistribuição — mover K+ para dentro da célula):\n• Insulina Regular 10UI IV + SG50% 50mL (ou SG10% 500mL)\n  - Início: 15-30min, duração: 4-6h\n  - Monitorizar glicemia 1/1h por 6h\n• Nebulização com Salbutamol 10-20 gotas em 4mL SF — 10-20min\n  - Início: 15-30min, reduz K+ 0,5-1,0mEq/L\n• NaHCO3 8,4% 50-100mL IV (se pH <7,2 — efeito marginal se pH normal)\n\n4. REMOÇÃO (eliminar K+ do corpo):\n• Furosemida 40-80mg IV (se função renal preservada)\n• Sorcal (poliestirenossulfonato de cálcio) 30-60g VO ou VR\n  - Início: 1-2h VO, 30min VR\n• Patiromer 8,4g VO ou SZC (ciclossilicato de zircônio) 10g VO\n• DIÁLISE: se refratária, anúrica ou K+ >7,0 com instabilidade"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Hipocalcemia Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Hipercalemia grave (K+ 7,2 com onda T apiculada):\n\n1. Emergência — monitorização contínua com ECG\n2. Gluconato de Cálcio 10% 10mL IV em 3-5min AGORA (pode repetir em 5min)\n3. Insulina Regular 10UI + SG50% 100mL IV em 30min\n4. Nebulização: Salbutamol 20 gotas + SF 3mL (repetir em 20min SN)\n5. NaHCO3 8,4% 50mL IV em 15min (se pH <7,2)\n6. Furosemida 80mg IV (se diurese preservada)\n7. Sorcal 30g + Manitol 100mL VO (ou VR se não tolerar)\n8. Glicemia capilar 1/1h por 6h (risco de hipoglicemia pela insulina)\n9. K+ sérico a cada 1-2h até <6,0mEq/L\n10. ECG seriado a cada 30min até normalização\n11. Suspender: IECA/BRA, espironolactona, suplementos de K+, AINEs\n12. Se refratária: solicitar diálise de urgência\n13. Após estabilização: investigar causa (IRA, DRC, medicamentos, rabdomiólise)"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Hipocalcemia Aguda."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Hipocalcemia Aguda e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Hipocalcemia Aguda."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. AHA — Hyperkalemia Management Guidelines 2020\n2. SBN — Manejo da Hipercalemia 2022\n3. Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. JAMA 2021\n4. Lindner G et al. Acute hyperkalemia in the emergency department. Am J Emerg Med 2020\n5. NICE — Hyperkalaemia: assessment and management 2023"
      }
],
  },
  {
    id: "fp-hipercalcemia",
    title: "Hipercalcemia",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hipercalcemia", "calcio", "neoplasia", "paratireoide", "hidratacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Hipercalcemia na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Hipercalcemia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Hipercalcemia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Hipercalcemia."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Hipercalcemia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Hipercalcemia."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Hipercalcemia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Hipercalcemia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Hipercalcemia."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Hipercalcemia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Hipercalcemia."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Hipercalcemia e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Hipercalcemia."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-hipofosfatemia",
    title: "Hipofosfatemia Grave",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hipofosfatemia", "fosforo", "realimentacao", "insuficiencia respiratoria"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Hipofosfatemia Grave na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Hipofosfatemia Grave."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Hipofosfatemia Grave."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Hipofosfatemia Grave."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Hipofosfatemia Grave."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Hipofosfatemia Grave."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Hipofosfatemia Grave."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Hipofosfatemia Grave."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Hipofosfatemia Grave."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Hipofosfatemia Grave."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Hipofosfatemia Grave."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Hipofosfatemia Grave e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Hipofosfatemia Grave."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-hipermagnesemia",
    title: "Hipermagnesemia",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hipermagnesemia", "magnesio", "insuficiencia renal", "gluconato de calcio"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Hipermagnesemia na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Hipermagnesemia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Hipermagnesemia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Hipermagnesemia."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Hipermagnesemia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Hipermagnesemia."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Hipermagnesemia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Hipermagnesemia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Hipermagnesemia."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Hipermagnesemia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Hipermagnesemia."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Hipermagnesemia e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Hipermagnesemia."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-sindrome-lise-tumoral",
    title: "Sindrome de Lise Tumoral",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["lise tumoral", "hiperuricemia", "hipercalemia", "rasburicase"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Sindrome de Lise Tumoral na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Sindrome de Lise Tumoral."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Sindrome de Lise Tumoral."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Sindrome de Lise Tumoral."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Sindrome de Lise Tumoral."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Sindrome de Lise Tumoral."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Sindrome de Lise Tumoral."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Sindrome de Lise Tumoral."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Sindrome de Lise Tumoral."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Sindrome de Lise Tumoral."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Sindrome de Lise Tumoral."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Sindrome de Lise Tumoral e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sindrome de Lise Tumoral."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
