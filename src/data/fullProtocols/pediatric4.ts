import type { FullProtocol } from "./types";

export const pediatricFullProtocols4: FullProtocol[] = [
  {
    id: "fp-laringite-viral-ped",
    title: "Laringite Viral / Crupe - Completo",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["laringite", "crupe", "estridor", "dexametasona", "adrenalina"],
    sections: [
      { id: "intro", title: "Introdução", content: "Protocolo completo para abordagem de Laringite Viral / Crupe - Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas." },
      { id: "def", title: "Definição", content: "Hipercalemia: potássio sérico >5,5mEq/L. Emergência médica quando >6,5mEq/L ou com alterações eletrocardiográficas.\\n\\nClassificação:\\n• Leve: 5,5-6,0mEq/L\\n• Moderada: 6,1-6,5mEq/L\\n• Grave: >6,5mEq/L ou com alterações ECG\\n\\nAlterações ECG progressivas:\\n• Ondas T apiculadas (tent-shaped) — mais precoce\\n• Achatamento de onda P\\n• Alargamento de QRS\\n• Padrão sinusoidal\\n• FV / Assistolia" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Rastreamento e identificação precoce:\\\\n• Fatores de risco para Laringite Viral / Crupe - Completo\\\\n• Sinais de alerta (red flags)\\\\n• Critérios de suspeita clínica\\\\n• Escores de risco validados\\\\n• População de risco para rastreamento ativo\\\\n• Ferramentas de triagem rápida (escalas, questionários)\\\\n• Indicações de investigação complementar" },
      { id: "etiology", title: "Etiologia", content: "Etiologia:\\n• Parainfluenza tipo 1 (75%): mais comum\\n• Parainfluenza tipos 2 e 3\\n• VSR (Vírus Sincicial Respiratório)\\n• Influenza A e B\\n• Adenovírus\\n• Metapneumovírus humano\\n• SARS-CoV-2 (raramente)\\n• Mycoplasma pneumoniae (raro)\\n\\nSazonalidade: outono e inverno\\n\\nDiagnóstico diferencial:\\n• Epiglotite aguda (Haemophilus influenzae tipo b — raro pós-vacina)\\n• Traqueíte bacteriana (S. aureus — crupe que não melhora)\\n• Corpo estranho\\n• Abscesso retrofaríngeo/periamigdaliano\\n• Angioedema/anafilaxia\\n• Estenose subglótica congênita" },
      { id: "clinical", title: "Apresentação Clínica", content: "Tríade clássica (presente em apenas 20-30%):\\n1. Dor abdominal em cólica intermitente (paroxística) — choro intenso com flexão de MMII\\n2. Vômitos (inicialmente alimentares, depois biliosos)\\n3. Fezes em geleia de morango/groselha (sangue + muco — sinal tardio)\\n\\nApresentação típica:\\n• Lactente previamente hígido com episódios paroxísticos de dor\\n• Intervalos livres de dor com criança aparentemente bem\\n• Massa palpável em forma de salsicha no QSD ou epigástrio\\n• Sinal da 'fossa ilíaca direita vazia' (sinal de Dance)\\n• Letargia paradoxal entre crises de dor (sinal de alarme)\\n• Toque retal: dedo em luva com sangue\\n\\nSinais de alarme:\\n• Letargia/prostração\\n• Distensão abdominal importante\\n• Fezes com sangue vivo\\n• Sinais de peritonite\\n• Choque" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diagnósticos diferenciais importantes para Laringite Viral / Crupe - Completo." },
      { id: "conduct", title: "Conduta Inicial", content: "Conduta — tratamento escalonado:\\n\\n1. ECG IMEDIATO (avaliar alterações):\\n\\n2. ESTABILIZAR MEMBRANA (se alteração ECG ou K+ >6,5):\\n• Gluconato de cálcio 10% 10mL IV em 2-5min\\n  - Início: 1-3min, duração: 30-60min\\n  - Repetir se persistência de alteração ECG\\n  - Em uso de digoxina: infundir em 20-30min com cautela\\n\\n3. SHIFT (redistribuição — mover K+ para dentro da célula):\\n• Insulina Regular 10UI IV + SG50% 50mL (ou SG10% 500mL)\\n  - Início: 15-30min, duração: 4-6h\\n  - Monitorizar glicemia 1/1h por 6h\\n• Nebulização com Salbutamol 10-20 gotas em 4mL SF — 10-20min\\n  - Início: 15-30min, reduz K+ 0,5-1,0mEq/L\\n• NaHCO3 8,4% 50-100mL IV (se pH <7,2 — efeito marginal se pH normal)\\n\\n4. REMOÇÃO (eliminar K+ do corpo):\\n• Furosemida 40-80mg IV (se função renal preservada)\\n• Sorcal (po" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratamento — Pilares: Hidratação + Insulina + Potássio\\n\\n1. HIDRATAÇÃO (prioridade!):\\n• 1ª hora: SF 0,9% 1.000-1.500mL IV (15-20mL/kg)\\n• Após 1ª hora: SF 0,9% 250-500mL/h (avaliar Na+ corrigido)\\n  - Na+ corrigido >135: mudar para NaCl 0,45%\\n  - Na+ corrigido <135: manter SF 0,9%\\n• Quando glicemia ≤200-250: iniciar SG 5% concomitante (evitar hipoglicemia)\\n• Total em 24h: 4-6 litros\\n\\n2. INSULINOTERAPIA:\\n• Regular IV contínua: 0,1 UI/kg/h (OU bolus 0,1 UI/kg + 0,1 UI/kg/h)\\n• Meta: queda de glicemia 50-70mg/dL/h\\n• Se glicemia não cair 10% na 1ª hora: bolus 0,14 UI/kg IV\\n• Quando glicemia ≤200-250: reduzir para 0,02-0,05 UI/kg/h + SG 5%\\n• Manter insulina IV até: pH >7,3 + HCO3 >18 + AG <12 + paciente alimentando\\n• Transição para SC: aplicar insulina SC 1-2h ANTES de desligar a bo" },
      { id: "diagnosis", title: "Diagnóstico", content: "Exames laboratoriais e de imagem para diagnóstico de Pneumonia Pediatrica." },
      { id: "prescriptions", title: "Prescrições", content: "1. Amoxicilina 50 mg/kg/dia VO 8/8h por 7 dias (ambulatorial); 2. Ampicilina 50 mg/kg/dose EV 6/6h (internacao); 3. Oxacilina 50 mg/kg/dose EV 6/6h + Ceftriaxona 50 mg/kg/dose EV 12/12h (complicada); 4. Azitromicina 10 mg/kg/dia VO por 5 dias (atipico); 5. O2 se SpO2 <92%; 6. Dipirona 15 mg/kg EV 6/6h (febre); 7. Hidratacao EV se recusa alimentar." },
      { id: "followup", title: "Acompanhamento", content: "Monitorização e seguimento de Pneumonia Pediatrica." },
      { id: "complications", title: "Complicações", content: "Principais complicações de Pneumonia Pediatrica e seu manejo." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Critérios de internação, UTI e alta para Pneumonia Pediatrica." },
      { id: "references", title: "Referências Bibliográficas", content: "Diretrizes nacionais e internacionais atualizadas." }
    ],
  },
  {
    id: "fp-invaginacao-intestinal",
    title: "Invaginacao Intestinal (Intussuscepcao)",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["invaginacao", "intussuscepcao", "pediatria", "enema", "abdome agudo"],
    sections: [
      { id: "intro", title: "Introdução", content: "Protocolo completo para abordagem de Invaginacao Intestinal (Intussuscepcao) na emergência, com base em diretrizes nacionais e internacionais atualizadas." },
      { id: "def", title: "Definição", content: "Definição clínica e classificação de Invaginacao Intestinal (Intussuscepcao)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Critérios de rastreamento e identificação precoce de Invaginacao Intestinal (Intussuscepcao)." },
      { id: "etiology", title: "Etiologia", content: "Principais causas e fatores de risco para Invaginacao Intestinal (Intussuscepcao)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sinais e sintomas típicos e atípicos de Invaginacao Intestinal (Intussuscepcao)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Exames laboratoriais e de imagem para diagnóstico de Invaginacao Intestinal (Intussuscepcao)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diagnósticos diferenciais importantes para Invaginacao Intestinal (Intussuscepcao)." },
      { id: "conduct", title: "Conduta Inicial", content: "Abordagem inicial e estabilização do paciente com Invaginacao Intestinal (Intussuscepcao)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratamento farmacológico e não farmacológico de Invaginacao Intestinal (Intussuscepcao)." },
      { id: "prescriptions", title: "Prescrições", content: "Prescrições padronizadas para Invaginacao Intestinal (Intussuscepcao)." },
      { id: "followup", title: "Acompanhamento", content: "Monitorização e seguimento de Invaginacao Intestinal (Intussuscepcao)." },
      { id: "complications", title: "Complicações", content: "Principais complicações de Invaginacao Intestinal (Intussuscepcao) e seu manejo." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Critérios de internação, UTI e alta para Invaginacao Intestinal (Intussuscepcao)." },
      { id: "references", title: "Referências Bibliográficas", content: "Diretrizes nacionais e internacionais atualizadas." }
    ],
  },
  {
    id: "fp-cetoacidose-pediatrica-comp",
    title: "Cetoacidose Diabetica Pediatrica - Completo",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["CAD", "diabetes", "pediatria", "insulina", "acidose"],
    sections: [
      { id: "intro", title: "Introdução", content: "Protocolo completo para abordagem de Cetoacidose Diabetica Pediatrica - Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas." },
      { id: "def", title: "Definição", content: "Definição clínica e classificação de Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Critérios de rastreamento e identificação precoce de Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "etiology", title: "Etiologia", content: "Principais causas e fatores de risco para Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sinais e sintomas típicos e atípicos de Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "diagnosis", title: "Diagnóstico", content: "Exames laboratoriais e de imagem para diagnóstico de Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diagnósticos diferenciais importantes para Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "conduct", title: "Conduta Inicial", content: "Abordagem inicial e estabilização do paciente com Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratamento farmacológico e não farmacológico de Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "prescriptions", title: "Prescrições", content: "Prescrições padronizadas para Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "followup", title: "Acompanhamento", content: "Monitorização e seguimento de Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "complications", title: "Complicações", content: "Principais complicações de Cetoacidose Diabetica Pediatrica - Completo e seu manejo." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Critérios de internação, UTI e alta para Cetoacidose Diabetica Pediatrica - Completo." },
      { id: "references", title: "Referências Bibliográficas", content: "Diretrizes nacionais e internacionais atualizadas." }
    ],
  }
];
