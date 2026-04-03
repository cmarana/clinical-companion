import type { FullProtocol } from "./types";

export const sepsisFullProtocols6: FullProtocol[] = [
  {
    id: "fp-choque-misto",
    title: "Choque Misto",
    categoryId: "sepsis",
    category: "Sepse e Choque",
    tags: ["choque", "misto", "cardiogenico", "septico", "vasopressor"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Choque Misto na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Choque misto: coexistência de dois ou mais tipos de choque no mesmo paciente (distributivo + cardiogênico; hipovolêmico + obstrutivo, etc). Exemplo clássico: sepse com disfunção miocárdica (cardiomiopatia séptica) — choque distributivo + cardiogênico.\n\nClassificação:\n• Distributivo + Cardiogênico: sepse com cardiomiopatia séptica (mais comum)\n• Hipovolêmico + Distributivo: trauma com infecção secundária\n• Obstrutivo + Cardiogênico: TEP maciço com disfunção de VD\n• Hipovolêmico + Cardiogênico: IAM + sangramento"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Choque Misto."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Choque Misto."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica do choque misto:\n• Hipotensão refratária a volume E vasopressores\n• Sinais de hipoperfusão: lactato elevado, oligúria, alteração do sensório\n• Extremidades quentes (componente distributivo) OU frias (cardiogênico predominante)\n• Pressão de pulso variável\n• Turgência jugular (se componente cardiogênico/obstrutivo)\n• Débito urinário <0,5 mL/kg/h\n\nParâmetros hemodinâmicos típicos (Swan-Ganz):\n• Cardiomiopatia séptica: DC baixo + RVS baixa + PCP normal/baixa\n• TEP + choque: DC baixo + RVS alta + PCP normal + PSVD elevada\n• IAM + sepse: DC muito baixo + RVS variável + PCP alta"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Avaliação diagnóstica:\n• Ecocardiograma à beira-leito (POCUS/FOCUS): FEVE, função VD, derrame pericárdico, VCI\n• Lactato arterial seriado (a cada 2-4h)\n• Gasometria arterial + SvO2 (cateter venoso central)\n• BNP/NT-proBNP (componente cardiogênico)\n• Troponina (isquemia associada)\n• Hemograma, PCR, procalcitonina (componente séptico)\n• Ecocardiograma formal quando possível\n\nMonitorização avançada:\n• Cateter arterial (PAM contínua)\n• Cateter venoso central (PVC, ScvO2)\n• Monitor de débito cardíaco minimamente invasivo (PiCCO, FloTrac)\n• Swan-Ganz em casos refratários\n• Variação de pressão de pulso (VPP) para avaliar responsividade a volume"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Choque Misto."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Choque Misto."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica por etapas:\n\n1. RESSUSCITAÇÃO VOLÊMICA:\n• Cristaloide 30mL/kg nas primeiras 3h (se componente distributivo)\n• LIMITAR volume se FEVE <30% ou PCP >18 — bolus de 250mL com reavaliação\n• Avaliar responsividade: elevação de pernas passiva, VPP, ou mini-bolus\n\n2. VASOPRESSORES:\n• Noradrenalina 0,1-2 mcg/kg/min — 1ª linha (PAM ≥65mmHg)\n• Se componente cardiogênico: associar Dobutamina 2,5-20 mcg/kg/min\n• Se choque refratário: Vasopressina 0,03-0,04 UI/min\n• Adrenalina como alternativa em bradicardia ou anafilaxia associada\n\n3. INOTRÓPICOS:\n• Dobutamina 2,5-20 mcg/kg/min — se FEVE <40% ou ScvO2 <70%\n• Milrinona 0,375-0,75 mcg/kg/min — se uso crônico de betabloqueador\n• Levosimendana 0,1-0,2 mcg/kg/min — opção em cardiomiopatia séptica refratária\n\n4. SUPORTE MECÂNICO:\n• Balão intra-aórtico: componente cardiogênico predominante\n• ECMO VA: choque refratário a drogas vasoativas\n\n5. TRATAR A CAUSA:\n• Sepse: antibióticos em 1h, controle de foco\n• IAM: reperfusão\n• TEP: trombólise ou trombectomia"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Choque misto (séptico + cardiogênico):\n\n1. UTI — monitorização invasiva\n2. Jejum\n3. SF 0,9% — bolus de 250mL com reavaliação clínica (responsividade a volume)\n4. Noradrenalina 16mg/250mL SG5% — iniciar 5mL/h (0,05 mcg/kg/min), titular para PAM ≥65mmHg\n5. Dobutamina 250mg/250mL SG5% — iniciar 5mL/h (2,5 mcg/kg/min), titular conforme DC e ScvO2\n6. Meropenem 1g IV 8/8h (se sepse de foco abdominal/nosocomial) OU conforme foco\n7. Hidrocortisona 50mg IV 6/6h (se choque refratário após 6h de vasopressor)\n8. Omeprazol 40mg IV 1x/dia\n9. Insulina conforme protocolo se glicemia >180mg/dL\n10. Gasometria arterial + lactato a cada 4h\n11. Controle de diurese horária — meta ≥0,5mL/kg/h\n12. Ecocardiograma de controle em 24-48h"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Choque Misto."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Choque Misto e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Internação em UTI: TODOS os pacientes com choque misto\n\nAlta da UTI:\n• PAM >65mmHg sem vasopressores por ≥24h\n• Lactato em queda e <2mmol/L\n• Diurese >0,5mL/kg/h\n• ScvO2 >70%\n• Estabilidade hemodinâmica\n• Resolução do fator desencadeante\n\nAlta hospitalar:\n• Tolerando dieta oral\n• Sem necessidade de drogas vasoativas\n• Completou antibioticoterapia (se séptico)\n• Função cardíaca estável (se cardiogênico)\n• Ecocardiograma de controle antes da alta"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. Surviving Sepsis Campaign Guidelines 2021\n2. ESC 2021 Guidelines on Heart Failure\n3. Levy B et al. Septic cardiomyopathy. Intensive Care Med 2021\n4. AMIB — Recomendações para manejo do choque 2023\n5. De Backer D et al. Comparison of dopamine and norepinephrine. NEJM 2010"
      }
],
  },
  {
    id: "fp-choque-neurogenico-sepsis",
    title: "Choque Neurogenico",
    categoryId: "sepsis",
    category: "Sepse e Choque",
    tags: ["choque", "neurogenico", "TRM", "bradicardia", "vasopressor"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Choque Neurogenico na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Choque Neurogenico."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Choque Neurogenico."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Choque Neurogenico."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Choque Neurogenico."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Choque Neurogenico."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Choque Neurogenico."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Choque Neurogenico."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Choque Neurogenico."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Choque Neurogenico."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Choque Neurogenico."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Choque Neurogenico e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Choque Neurogenico."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-sepse-foco-abdominal",
    title: "Sepse de Foco Abdominal",
    categoryId: "sepsis",
    category: "Sepse e Choque",
    tags: ["sepse", "abdominal", "peritonite", "cirurgia", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Sepse de Foco Abdominal na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Sepse de Foco Abdominal."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Sepse de Foco Abdominal."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Sepse de Foco Abdominal."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Sepse de Foco Abdominal."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Sepse de Foco Abdominal."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Sepse de Foco Abdominal."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Sepse de Foco Abdominal."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Sepse de Foco Abdominal."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Sepse de Foco Abdominal."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Sepse de Foco Abdominal."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Sepse de Foco Abdominal e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sepse de Foco Abdominal."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-colangite-sepse",
    title: "Colangite Aguda e Sepse Biliar",
    categoryId: "sepsis",
    category: "Sepse e Choque",
    tags: ["colangite", "sepse biliar", "CPRE", "Charcot", "Reynolds"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Colangite Aguda e Sepse Biliar na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Colangite Aguda e Sepse Biliar e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Colangite Aguda e Sepse Biliar."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-fasciite-necro-sepse",
    title: "Fasciite Necrosante com Sepse",
    categoryId: "sepsis",
    category: "Sepse e Choque",
    tags: ["fasciite", "necrosante", "sepse", "desbridamento", "gangrena"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Fasciite Necrosante com Sepse na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Fasciite Necrosante com Sepse."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Fasciite Necrosante com Sepse."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Fasciite Necrosante com Sepse."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Fasciite Necrosante com Sepse."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Fasciite Necrosante com Sepse."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Fasciite Necrosante com Sepse."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Fasciite Necrosante com Sepse."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Fasciite Necrosante com Sepse."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Fasciite Necrosante com Sepse."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Fasciite Necrosante com Sepse."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Fasciite Necrosante com Sepse e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Fasciite Necrosante com Sepse."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
