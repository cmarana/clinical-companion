import type { FullProtocol } from "./types";

export const metabolicFullProtocols7: FullProtocol[] = [
  {
    id: "fp-m7-sindrome-realimentacao",
    title: "Sindrome de Realimentacao",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["realimentacao", "fosforo", "tiamina", "desnutricao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Sindrome de Realimentacao na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Hipercalemia: potássio sérico >5,5mEq/L. Emergência médica quando >6,5mEq/L ou com alterações eletrocardiográficas.\n\nClassificação:\n• Leve: 5,5-6,0mEq/L\n• Moderada: 6,1-6,5mEq/L\n• Grave: >6,5mEq/L ou com alterações ECG\n\nAlterações ECG progressivas:\n• Ondas T apiculadas (tent-shaped) — mais precoce\n• Achatamento de onda P\n• Alargamento de QRS\n• Padrão sinusoidal\n• FV / Assistolia"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Sindrome de Realimentacao."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Sindrome de Realimentacao."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Sindrome de Realimentacao."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Sindrome de Realimentacao."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Sindrome de Realimentacao."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta — tratamento escalonado:\n\n1. ECG IMEDIATO (avaliar alterações):\n\n2. ESTABILIZAR MEMBRANA (se alteração ECG ou K+ >6,5):\n• Gluconato de cálcio 10% 10mL IV em 2-5min\n  - Início: 1-3min, duração: 30-60min\n  - Repetir se persistência de alteração ECG\n  - Em uso de digoxina: infundir em 20-30min com cautela\n\n3. SHIFT (redistribuição — mover K+ para dentro da célula):\n• Insulina Regular 10UI IV + SG50% 50mL (ou SG10% 500mL)\n  - Início: 15-30min, duração: 4-6h\n  - Monitorizar glicemia 1/1h por 6h\n• Nebulização com Salbutamol 10-20 gotas em 4mL SF — 10-20min\n  - Início: 15-30min, reduz K+ 0,5-1,0mEq/L\n• NaHCO3 8,4% 50-100mL IV (se pH <7,2 — efeito marginal se pH normal)\n\n4. REMOÇÃO (eliminar K+ do corpo):\n• Furosemida 40-80mg IV (se função renal preservada)\n• Sorcal (poliestirenossulfonato de cálcio) 30-60g VO ou VR\n  - Início: 1-2h VO, 30min VR\n• Patiromer 8,4g VO ou SZC (ciclossilicato de zircônio) 10g VO\n• DIÁLISE: se refratária, anúrica ou K+ >7,0 com instabilidade"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Sindrome de Realimentacao."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "PRESCRIÇÃO — Hipercalemia grave (K+ 7,2 com onda T apiculada):\n\n1. Emergência — monitorização contínua com ECG\n2. Gluconato de Cálcio 10% 10mL IV em 3-5min AGORA (pode repetir em 5min)\n3. Insulina Regular 10UI + SG50% 100mL IV em 30min\n4. Nebulização: Salbutamol 20 gotas + SF 3mL (repetir em 20min SN)\n5. NaHCO3 8,4% 50mL IV em 15min (se pH <7,2)\n6. Furosemida 80mg IV (se diurese preservada)\n7. Sorcal 30g + Manitol 100mL VO (ou VR se não tolerar)\n8. Glicemia capilar 1/1h por 6h (risco de hipoglicemia pela insulina)\n9. K+ sérico a cada 1-2h até <6,0mEq/L\n10. ECG seriado a cada 30min até normalização\n11. Suspender: IECA/BRA, espironolactona, suplementos de K+, AINEs\n12. Se refratária: solicitar diálise de urgência\n13. Após estabilização: investigar causa (IRA, DRC, medicamentos, rabdomiólise)"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Sindrome de Realimentacao."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Sindrome de Realimentacao."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Sindrome de Realimentacao."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "1. AHA — Hyperkalemia Management Guidelines 2020\n2. SBN — Manejo da Hipercalemia 2022\n3. Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. JAMA 2021\n4. Lindner G et al. Acute hyperkalemia in the emergency department. Am J Emerg Med 2020\n5. NICE — Hyperkalaemia: assessment and management 2023"
      }
],
  },  {
    id: "fp-m7-porfiria-aguda",
    title: "Porfiria Aguda Intermitente",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["porfiria", "dor abdominal", "neuropatia", "hemina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Porfiria Aguda Intermitente na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Porfiria Aguda Intermitente."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Porfiria Aguda Intermitente."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Porfiria Aguda Intermitente."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Porfiria Aguda Intermitente."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Porfiria Aguda Intermitente."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Porfiria Aguda Intermitente."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Porfiria Aguda Intermitente."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Porfiria Aguda Intermitente."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Porfiria Aguda Intermitente."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Porfiria Aguda Intermitente."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Porfiria Aguda Intermitente."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Porfiria Aguda Intermitente."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-feocromocitoma",
    title: "Feocromocitoma - Crise",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["feocromocitoma", "catecolaminas", "hipertensao", "fenoxibenzamina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Feocromocitoma - Crise na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Feocromocitoma - Crise."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Feocromocitoma - Crise."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Feocromocitoma - Crise."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Feocromocitoma - Crise."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Feocromocitoma - Crise."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Feocromocitoma - Crise."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Feocromocitoma - Crise."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Feocromocitoma - Crise."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Feocromocitoma - Crise."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Feocromocitoma - Crise."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Feocromocitoma - Crise."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Feocromocitoma - Crise."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-insuficiencia-hepatica-metabolica",
    title: "Insuficiencia Hepatica - Disturbios Metabolicos",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hepatica", "metabolico", "hipoglicemia", "coagulopatia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Insuficiencia Hepatica - Disturbios Metabolicos na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Insuficiencia Hepatica - Disturbios Metabolicos."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-rabdomiolise-metabolica",
    title: "Rabdomiolise - Aspecto Metabolico",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["rabdomiolise", "CK", "hipercalemia", "IRA"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Rabdomiolise - Aspecto Metabolico na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Rabdomiolise - Aspecto Metabolico."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-hiperfosfatemia",
    title: "Hiperfosfatemia",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hiperfosfatemia", "fosforo", "calcio", "dialise"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Hiperfosfatemia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Hiperfosfatemia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Hiperfosfatemia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Hiperfosfatemia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Hiperfosfatemia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Hiperfosfatemia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Hiperfosfatemia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Hiperfosfatemia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Hiperfosfatemia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Hiperfosfatemia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Hiperfosfatemia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Hiperfosfatemia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Hiperfosfatemia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-hipomagnesiemia",
    title: "Hipomagnesemia",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["hipomagnesemia", "magnesio", "arritmia", "convulsao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Hipomagnesemia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Hipomagnesemia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Hipomagnesemia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Hipomagnesemia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Hipomagnesemia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Hipomagnesemia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Hipomagnesemia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Hipomagnesemia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Hipomagnesemia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Hipomagnesemia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Hipomagnesemia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Hipomagnesemia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Hipomagnesemia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-acidose-latica",
    title: "Acidose Latica",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["acidose", "latica", "lactato", "tipo A", "tipo B"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Acidose Latica na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Acidose Latica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Acidose Latica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Acidose Latica."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Acidose Latica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Acidose Latica."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Acidose Latica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Acidose Latica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Acidose Latica."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Acidose Latica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Acidose Latica."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Acidose Latica."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Acidose Latica."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-alcalose-respiratoria",
    title: "Alcalose Respiratoria",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["alcalose", "respiratoria", "hiperventilacao", "ansiedade"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Alcalose Respiratoria na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Alcalose Respiratoria."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Alcalose Respiratoria."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Alcalose Respiratoria."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Alcalose Respiratoria."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Alcalose Respiratoria."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Alcalose Respiratoria."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Alcalose Respiratoria."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Alcalose Respiratoria."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Alcalose Respiratoria."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Alcalose Respiratoria."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Alcalose Respiratoria."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Alcalose Respiratoria."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-disturbios-calcio",
    title: "Disturbios do Calcio - Visao Geral",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["calcio", "hipo", "hiper", "paratireoide"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Disturbios do Calcio - Visao Geral na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Disturbios do Calcio - Visao Geral."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-diabetes-tipo1-emergencia",
    title: "Diabetes Tipo 1 - Emergencias",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["diabetes", "tipo 1", "CAD", "insulina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Diabetes Tipo 1 - Emergencias na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Diabetes Tipo 1 - Emergencias."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-m7-diabetes-tipo2-emergencia",
    title: "Diabetes Tipo 2 - Emergencias",
    categoryId: "metabolic",
    category: "Metabolico e Endocrino",
    tags: ["diabetes", "tipo 2", "EHH", "metformina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Diabetes Tipo 2 - Emergencias na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Diabetes Tipo 2 - Emergencias."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },
];
