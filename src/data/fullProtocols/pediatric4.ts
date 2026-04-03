import type { FullProtocol } from "./types";

export const pediatricFullProtocols4: FullProtocol[] = [
  {
    id: "fp-laringite-viral-ped",
    title: "Laringite Viral / Crupe - Completo",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["laringite", "crupe", "estridor", "dexametasona", "adrenalina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Laringite Viral / Crupe - Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Hipercalemia: potássio sérico >5,5mEq/L. Emergência médica quando >6,5mEq/L ou com alterações eletrocardiográficas.\n\nClassificação:\n• Leve: 5,5-6,0mEq/L\n• Moderada: 6,1-6,5mEq/L\n• Grave: >6,5mEq/L ou com alterações ECG\n\nAlterações ECG progressivas:\n• Ondas T apiculadas (tent-shaped) — mais precoce\n• Achatamento de onda P\n• Alargamento de QRS\n• Padrão sinusoidal\n• FV / Assistolia"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Laringite Viral / Crupe - Completo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia:\n• Parainfluenza tipo 1 (75%): mais comum\n• Parainfluenza tipos 2 e 3\n• VSR (Vírus Sincicial Respiratório)\n• Influenza A e B\n• Adenovírus\n• Metapneumovírus humano\n• SARS-CoV-2 (raramente)\n• Mycoplasma pneumoniae (raro)\n\nSazonalidade: outono e inverno\n\nDiagnóstico diferencial:\n• Epiglotite aguda (Haemophilus influenzae tipo b — raro pós-vacina)\n• Traqueíte bacteriana (S. aureus — crupe que não melhora)\n• Corpo estranho\n• Abscesso retrofaríngeo/periamigdaliano\n• Angioedema/anafilaxia\n• Estenose subglótica congênita"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Tríade clássica (presente em apenas 20-30%):\n1. Dor abdominal em cólica intermitente (paroxística) — choro intenso com flexão de MMII\n2. Vômitos (inicialmente alimentares, depois biliosos)\n3. Fezes em geleia de morango/groselha (sangue + muco — sinal tardio)\n\nApresentação típica:\n• Lactente previamente hígido com episódios paroxísticos de dor\n• Intervalos livres de dor com criança aparentemente bem\n• Massa palpável em forma de salsicha no QSD ou epigástrio\n• Sinal da 'fossa ilíaca direita vazia' (sinal de Dance)\n• Letargia paradoxal entre crises de dor (sinal de alarme)\n• Toque retal: dedo em luva com sangue\n\nSinais de alarme:\n• Letargia/prostração\n• Distensão abdominal importante\n• Fezes com sangue vivo\n• Sinais de peritonite\n• Choque"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames:\n• USG abdominal (padrão-ouro): sinal do alvo/donut (corte transversal) e sinal do pseudo-rim (corte longitudinal)\n  - Sensibilidade >95%, especificidade >98%\n• Radiografia de abdome: pode ser normal no início; sinais tardios: ausência de gás no QID, massa de partes moles, sinais de obstrução\n• Enema (diagnóstico + terapêutico): imagem em cálice/taça/mola de relógio\n\nCritérios para redução NÃO operatória (enema):\n• Sintomas <48h\n• Sem sinais de peritonite ou perfuração\n• Sem pneumoperitônio\n• Sem choque refratário\n• Idade 3 meses - 5 anos\n\nContraindicações ao enema:\n• Peritonite\n• Pneumoperitônio\n• Choque refratário\n• Perfuração intestinal suspeita"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Laringite Viral / Crupe - Completo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta — tratamento escalonado:\n\n1. ECG IMEDIATO (avaliar alterações):\n\n2. ESTABILIZAR MEMBRANA (se alteração ECG ou K+ >6,5):\n• Gluconato de cálcio 10% 10mL IV em 2-5min\n  - Início: 1-3min, duração: 30-60min\n  - Repetir se persistência de alteração ECG\n  - Em uso de digoxina: infundir em 20-30min com cautela\n\n3. SHIFT (redistribuição — mover K+ para dentro da célula):\n• Insulina Regular 10UI IV + SG50% 50mL (ou SG10% 500mL)\n  - Início: 15-30min, duração: 4-6h\n  - Monitorizar glicemia 1/1h por 6h\n• Nebulização com Salbutamol 10-20 gotas em 4mL SF — 10-20min\n  - Início: 15-30min, reduz K+ 0,5-1,0mEq/L\n• NaHCO3 8,4% 50-100mL IV (se pH <7,2 — efeito marginal se pH normal)\n\n4. REMOÇÃO (eliminar K+ do corpo):\n• Furosemida 40-80mg IV (se função renal preservada)\n• Sorcal (poliestirenossulfonato de cálcio) 30-60g VO ou VR\n  - Início: 1-2h VO, 30min VR\n• Patiromer 8,4g VO ou SZC (ciclossilicato de zircônio) 10g VO\n• DIÁLISE: se refratária, anúrica ou K+ >7,0 com instabilidade"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento — Pilares: Hidratação + Insulina + Potássio\n\n1. HIDRATAÇÃO (prioridade!):\n• 1ª hora: SF 0,9% 1.000-1.500mL IV (15-20mL/kg)\n• Após 1ª hora: SF 0,9% 250-500mL/h (avaliar Na+ corrigido)\n  - Na+ corrigido >135: mudar para NaCl 0,45%\n  - Na+ corrigido <135: manter SF 0,9%\n• Quando glicemia ≤200-250: iniciar SG 5% concomitante (evitar hipoglicemia)\n• Total em 24h: 4-6 litros\n\n2. INSULINOTERAPIA:\n• Regular IV contínua: 0,1 UI/kg/h (OU bolus 0,1 UI/kg + 0,1 UI/kg/h)\n• Meta: queda de glicemia 50-70mg/dL/h\n• Se glicemia não cair 10% na 1ª hora: bolus 0,14 UI/kg IV\n• Quando glicemia ≤200-250: reduzir para 0,02-0,05 UI/kg/h + SG 5%\n• Manter insulina IV até: pH >7,3 + HCO3 >18 + AG <12 + paciente alimentando\n• Transição para SC: aplicar insulina SC 1-2h ANTES de desligar a bomba\n\n3. POTÁSSIO (ANTES da insulina se K+ <3,3!):\n• K+ <3,3: NÃO iniciar insulina! Repor KCl 40mEq/h IV até K+ >3,3\n• K+ 3,3-5,3: KCl 20-30mEq em cada litro de soro\n• K+ >5,3: não repor, monitorar 2/2h\n\n4. BICARBONATO (APENAS se pH <6,9):\n• NaHCO3 8,4% 100mEq (100mL) diluído em 400mL AD — infundir em 2h\n• Repetir até pH >7,0\n\n5. FOSFATO: repor se <1,0mg/dL (fosfato de potássio 20-30mmol em 1L de soro)"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Hipercalemia grave (K+ 7,2 com onda T apiculada):\n\n1. Emergência — monitorização contínua com ECG\n2. Gluconato de Cálcio 10% 10mL IV em 3-5min AGORA (pode repetir em 5min)\n3. Insulina Regular 10UI + SG50% 100mL IV em 30min\n4. Nebulização: Salbutamol 20 gotas + SF 3mL (repetir em 20min SN)\n5. NaHCO3 8,4% 50mL IV em 15min (se pH <7,2)\n6. Furosemida 80mg IV (se diurese preservada)\n7. Sorcal 30g + Manitol 100mL VO (ou VR se não tolerar)\n8. Glicemia capilar 1/1h por 6h (risco de hipoglicemia pela insulina)\n9. K+ sérico a cada 1-2h até <6,0mEq/L\n10. ECG seriado a cada 30min até normalização\n11. Suspender: IECA/BRA, espironolactona, suplementos de K+, AINEs\n12. Se refratária: solicitar diálise de urgência\n13. Após estabilização: investigar causa (IRA, DRC, medicamentos, rabdomiólise)"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Laringite Viral / Crupe - Completo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Laringite Viral / Crupe - Completo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Laringite Viral / Crupe - Completo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. AHA — Hyperkalemia Management Guidelines 2020\n2. SBN — Manejo da Hipercalemia 2022\n3. Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. JAMA 2021\n4. Lindner G et al. Acute hyperkalemia in the emergency department. Am J Emerg Med 2020\n5. NICE — Hyperkalaemia: assessment and management 2023"
      }
],
  },
  {
    id: "fp-pneumonia-pediatrica",
    title: "Pneumonia Pediatrica",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["pneumonia", "pediatria", "antibiotico", "amoxicilina", "crianca"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Pneumonia Pediatrica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Pneumonia Pediatrica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Pneumonia Pediatrica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Pneumonia Pediatrica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Pneumonia Pediatrica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Pneumonia Pediatrica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Pneumonia Pediatrica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Pneumonia Pediatrica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Pneumonia Pediatrica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Pneumonia Pediatrica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Pneumonia Pediatrica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Pneumonia Pediatrica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Pneumonia Pediatrica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-invaginacao-intestinal",
    title: "Invaginacao Intestinal (Intussuscepcao)",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["invaginacao", "intussuscepcao", "pediatria", "enema", "abdome agudo"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Invaginacao Intestinal (Intussuscepcao) na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Invaginacao Intestinal (Intussuscepcao) e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-cetoacidose-pediatrica-comp",
    title: "Cetoacidose Diabetica Pediatrica - Completo",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["CAD", "diabetes", "pediatria", "insulina", "acidose"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Cetoacidose Diabetica Pediatrica - Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Cetoacidose Diabetica Pediatrica - Completo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
