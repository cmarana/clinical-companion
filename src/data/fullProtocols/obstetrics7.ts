import type { FullProtocol } from "./types";

export const obstetricsFullProtocols7: FullProtocol[] = [
  {
    id: "fp-o7-corioamnionite",
    title: "Corioamnionite",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["corioamnionite", "febre", "RPMO", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Corioamnionite na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Hipercalemia: potássio sérico >5,5mEq/L. Emergência médica quando >6,5mEq/L ou com alterações eletrocardiográficas.\n\nClassificação:\n• Leve: 5,5-6,0mEq/L\n• Moderada: 6,1-6,5mEq/L\n• Grave: >6,5mEq/L ou com alterações ECG\n\nAlterações ECG progressivas:\n• Ondas T apiculadas (tent-shaped) — mais precoce\n• Achatamento de onda P\n• Alargamento de QRS\n• Padrão sinusoidal\n• FV / Assistolia"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Corioamnionite."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Corioamnionite."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Corioamnionite."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Corioamnionite."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Corioamnionite."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta — tratamento escalonado:\n\n1. ECG IMEDIATO (avaliar alterações):\n\n2. ESTABILIZAR MEMBRANA (se alteração ECG ou K+ >6,5):\n• Gluconato de cálcio 10% 10mL IV em 2-5min\n  - Início: 1-3min, duração: 30-60min\n  - Repetir se persistência de alteração ECG\n  - Em uso de digoxina: infundir em 20-30min com cautela\n\n3. SHIFT (redistribuição — mover K+ para dentro da célula):\n• Insulina Regular 10UI IV + SG50% 50mL (ou SG10% 500mL)\n  - Início: 15-30min, duração: 4-6h\n  - Monitorizar glicemia 1/1h por 6h\n• Nebulização com Salbutamol 10-20 gotas em 4mL SF — 10-20min\n  - Início: 15-30min, reduz K+ 0,5-1,0mEq/L\n• NaHCO3 8,4% 50-100mL IV (se pH <7,2 — efeito marginal se pH normal)\n\n4. REMOÇÃO (eliminar K+ do corpo):\n• Furosemida 40-80mg IV (se função renal preservada)\n• Sorcal (poliestirenossulfonato de cálcio) 30-60g VO ou VR\n  - Início: 1-2h VO, 30min VR\n• Patiromer 8,4g VO ou SZC (ciclossilicato de zircônio) 10g VO\n• DIÁLISE: se refratária, anúrica ou K+ >7,0 com instabilidade"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento — Pilares: Hidratação + Insulina + Potássio\n\n1. HIDRATAÇÃO (prioridade!):\n• 1ª hora: SF 0,9% 1.000-1.500mL IV (15-20mL/kg)\n• Após 1ª hora: SF 0,9% 250-500mL/h (avaliar Na+ corrigido)\n  - Na+ corrigido >135: mudar para NaCl 0,45%\n  - Na+ corrigido <135: manter SF 0,9%\n• Quando glicemia ≤200-250: iniciar SG 5% concomitante (evitar hipoglicemia)\n• Total em 24h: 4-6 litros\n\n2. INSULINOTERAPIA:\n• Regular IV contínua: 0,1 UI/kg/h (OU bolus 0,1 UI/kg + 0,1 UI/kg/h)\n• Meta: queda de glicemia 50-70mg/dL/h\n• Se glicemia não cair 10% na 1ª hora: bolus 0,14 UI/kg IV\n• Quando glicemia ≤200-250: reduzir para 0,02-0,05 UI/kg/h + SG 5%\n• Manter insulina IV até: pH >7,3 + HCO3 >18 + AG <12 + paciente alimentando\n• Transição para SC: aplicar insulina SC 1-2h ANTES de desligar a bomba\n\n3. POTÁSSIO (ANTES da insulina se K+ <3,3!):\n• K+ <3,3: NÃO iniciar insulina! Repor KCl 40mEq/h IV até K+ >3,3\n• K+ 3,3-5,3: KCl 20-30mEq em cada litro de soro\n• K+ >5,3: não repor, monitorar 2/2h\n\n4. BICARBONATO (APENAS se pH <6,9):\n• NaHCO3 8,4% 100mEq (100mL) diluído em 400mL AD — infundir em 2h\n• Repetir até pH >7,0\n\n5. FOSFATO: repor se <1,0mg/dL (fosfato de potássio 20-30mmol em 1L de soro)"
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "PRESCRIÇÃO — Hipercalemia grave (K+ 7,2 com onda T apiculada):\n\n1. Emergência — monitorização contínua com ECG\n2. Gluconato de Cálcio 10% 10mL IV em 3-5min AGORA (pode repetir em 5min)\n3. Insulina Regular 10UI + SG50% 100mL IV em 30min\n4. Nebulização: Salbutamol 20 gotas + SF 3mL (repetir em 20min SN)\n5. NaHCO3 8,4% 50mL IV em 15min (se pH <7,2)\n6. Furosemida 80mg IV (se diurese preservada)\n7. Sorcal 30g + Manitol 100mL VO (ou VR se não tolerar)\n8. Glicemia capilar 1/1h por 6h (risco de hipoglicemia pela insulina)\n9. K+ sérico a cada 1-2h até <6,0mEq/L\n10. ECG seriado a cada 30min até normalização\n11. Suspender: IECA/BRA, espironolactona, suplementos de K+, AINEs\n12. Se refratária: solicitar diálise de urgência\n13. Após estabilização: investigar causa (IRA, DRC, medicamentos, rabdomiólise)"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Corioamnionite."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Corioamnionite."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Corioamnionite."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "1. AHA — Hyperkalemia Management Guidelines 2020\n2. SBN — Manejo da Hipercalemia 2022\n3. Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. JAMA 2021\n4. Lindner G et al. Acute hyperkalemia in the emergency department. Am J Emerg Med 2020\n5. NICE — Hyperkalaemia: assessment and management 2023"
      }
],
  },  {
    id: "fp-o7-sofrimento-fetal",
    title: "Sofrimento Fetal Agudo",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["sofrimento fetal", "CTG", "bradicardia", "cesariana"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Sofrimento Fetal Agudo na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Sofrimento Fetal Agudo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Sofrimento Fetal Agudo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Sofrimento Fetal Agudo."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Sofrimento Fetal Agudo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Sofrimento Fetal Agudo."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Sofrimento Fetal Agudo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Sofrimento Fetal Agudo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Sofrimento Fetal Agudo."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Sofrimento Fetal Agudo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Sofrimento Fetal Agudo."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Sofrimento Fetal Agudo."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Sofrimento Fetal Agudo."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-prolapso-cordao-obst",
    title: "Prolapso de Cordao - Obstetricia",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["prolapso", "cordao", "manobra", "cesariana"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Prolapso de Cordao - Obstetricia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-gestacao-gemelar-complicada",
    title: "Gestacao Gemelar Complicada",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["gemelar", "STFF", "prematuridade", "complicacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Gestacao Gemelar Complicada na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Gestacao Gemelar Complicada."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Gestacao Gemelar Complicada."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Gestacao Gemelar Complicada."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Gestacao Gemelar Complicada."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Gestacao Gemelar Complicada."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Gestacao Gemelar Complicada."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Gestacao Gemelar Complicada."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Gestacao Gemelar Complicada."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Gestacao Gemelar Complicada."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Gestacao Gemelar Complicada."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Gestacao Gemelar Complicada."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Gestacao Gemelar Complicada."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-hellp-syndrome",
    title: "Sindrome HELLP",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["HELLP", "hemolise", "plaquetopenia", "hepatico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Sindrome HELLP na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Sindrome HELLP."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Sindrome HELLP."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Sindrome HELLP."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Sindrome HELLP."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Sindrome HELLP."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Sindrome HELLP."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Sindrome HELLP."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Sindrome HELLP."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Sindrome HELLP."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Sindrome HELLP."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Sindrome HELLP."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Sindrome HELLP."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-inversao-uterina-obst",
    title: "Inversao Uterina - Obstetricia",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["inversao", "uterina", "hemorragia", "reducao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Inversao Uterina - Obstetricia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Inversao Uterina - Obstetricia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Inversao Uterina - Obstetricia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Inversao Uterina - Obstetricia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Inversao Uterina - Obstetricia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Inversao Uterina - Obstetricia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Inversao Uterina - Obstetricia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Inversao Uterina - Obstetricia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Inversao Uterina - Obstetricia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Inversao Uterina - Obstetricia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Inversao Uterina - Obstetricia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Inversao Uterina - Obstetricia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Inversao Uterina - Obstetricia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-retencao-placentaria",
    title: "Retencao Placentaria",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["retencao", "placenta", "extracacao manual", "curetagem"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Retencao Placentaria na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Retencao Placentaria."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Retencao Placentaria."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Retencao Placentaria."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Retencao Placentaria."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Retencao Placentaria."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Retencao Placentaria."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Retencao Placentaria."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Retencao Placentaria."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Retencao Placentaria."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Retencao Placentaria."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Retencao Placentaria."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Retencao Placentaria."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-trombose-puerperal",
    title: "Trombose Venosa no Puerperio",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["trombose", "puerperio", "TVP", "TEP", "anticoagulacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Trombose Venosa no Puerperio na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Trombose Venosa no Puerperio."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Trombose Venosa no Puerperio."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Trombose Venosa no Puerperio."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Trombose Venosa no Puerperio."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Trombose Venosa no Puerperio."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Trombose Venosa no Puerperio."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Trombose Venosa no Puerperio."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Trombose Venosa no Puerperio."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Trombose Venosa no Puerperio."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Trombose Venosa no Puerperio."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Trombose Venosa no Puerperio."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Trombose Venosa no Puerperio."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-infeccao-ferida-cesarea",
    title: "Infeccao de Ferida Operatoria Pos-Cesarea",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["infeccao", "ferida", "cesarea", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Infeccao de Ferida Operatoria Pos-Cesarea na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-acretismo-placentario",
    title: "Acretismo Placentario",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["acretismo", "placenta acreta", "hemorragia", "histerectomia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Acretismo Placentario na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Acretismo Placentario."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Acretismo Placentario."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Acretismo Placentario."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Acretismo Placentario."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Acretismo Placentario."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Acretismo Placentario."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Acretismo Placentario."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Acretismo Placentario."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Acretismo Placentario."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Acretismo Placentario."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Acretismo Placentario."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Acretismo Placentario."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-embolia-pulmonar-gestacao",
    title: "Embolia Pulmonar na Gestacao",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["TEP", "gestacao", "anticoagulacao", "heparina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Embolia Pulmonar na Gestacao na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Embolia Pulmonar na Gestacao."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Embolia Pulmonar na Gestacao."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Embolia Pulmonar na Gestacao."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-cetoacidose-gestacional",
    title: "Cetoacidose na Gestacao",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["CAD", "gestacao", "insulina", "diabetes"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Cetoacidose na Gestacao na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Cetoacidose na Gestacao."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Cetoacidose na Gestacao."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Cetoacidose na Gestacao."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Cetoacidose na Gestacao."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Cetoacidose na Gestacao."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Cetoacidose na Gestacao."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Cetoacidose na Gestacao."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Cetoacidose na Gestacao."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Cetoacidose na Gestacao."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Cetoacidose na Gestacao."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Cetoacidose na Gestacao."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Cetoacidose na Gestacao."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },
];
