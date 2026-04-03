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
            "content": "Choque misto: coexistência de dois ou mais tipos de choque no mesmo paciente (distributivo + cardiogênico; hipovolêmico + obstrutivo, etc). Exemplo clássico: sepse com disfunção miocárdica (cardiomiopatia séptica) — choque distributivo + cardiogênico.

Classificação:
• Distributivo + Cardiogênico: sepse com cardiomiopatia séptica (mais comum)
• Hipovolêmico + Distributivo: trauma com infecção secundária
• Obstrutivo + Cardiogênico: TEP maciço com disfunção de VD
• Hipovolêmico + Cardiogênico: IAM + sangramento"
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
            "content": "Apresentação clínica do choque misto:
• Hipotensão refratária a volume E vasopressores
• Sinais de hipoperfusão: lactato elevado, oligúria, alteração do sensório
• Extremidades quentes (componente distributivo) OU frias (cardiogênico predominante)
• Pressão de pulso variável
• Turgência jugular (se componente cardiogênico/obstrutivo)
• Débito urinário <0,5 mL/kg/h

Parâmetros hemodinâmicos típicos (Swan-Ganz):
• Cardiomiopatia séptica: DC baixo + RVS baixa + PCP normal/baixa
• TEP + choque: DC baixo + RVS alta + PCP normal + PSVD elevada
• IAM + sepse: DC muito baixo + RVS variável + PCP alta"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Avaliação diagnóstica:
• Ecocardiograma à beira-leito (POCUS/FOCUS): FEVE, função VD, derrame pericárdico, VCI
• Lactato arterial seriado (a cada 2-4h)
• Gasometria arterial + SvO2 (cateter venoso central)
• BNP/NT-proBNP (componente cardiogênico)
• Troponina (isquemia associada)
• Hemograma, PCR, procalcitonina (componente séptico)
• Ecocardiograma formal quando possível

Monitorização avançada:
• Cateter arterial (PAM contínua)
• Cateter venoso central (PVC, ScvO2)
• Monitor de débito cardíaco minimamente invasivo (PiCCO, FloTrac)
• Swan-Ganz em casos refratários
• Variação de pressão de pulso (VPP) para avaliar responsividade a volume"
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
            "content": "Abordagem terapêutica por etapas:

1. RESSUSCITAÇÃO VOLÊMICA:
• Cristaloide 30mL/kg nas primeiras 3h (se componente distributivo)
• LIMITAR volume se FEVE <30% ou PCP >18 — bolus de 250mL com reavaliação
• Avaliar responsividade: elevação de pernas passiva, VPP, ou mini-bolus

2. VASOPRESSORES:
• Noradrenalina 0,1-2 mcg/kg/min — 1ª linha (PAM ≥65mmHg)
• Se componente cardiogênico: associar Dobutamina 2,5-20 mcg/kg/min
• Se choque refratário: Vasopressina 0,03-0,04 UI/min
• Adrenalina como alternativa em bradicardia ou anafilaxia associada

3. INOTRÓPICOS:
• Dobutamina 2,5-20 mcg/kg/min — se FEVE <40% ou ScvO2 <70%
• Milrinona 0,375-0,75 mcg/kg/min — se uso crônico de betabloqueador
• Levosimendana 0,1-0,2 mcg/kg/min — opção em cardiomiopatia séptica refratária

4. SUPORTE MECÂNICO:
• Balão intra-aórtico: componente cardiogênico predominante
• ECMO VA: choque refratário a drogas vasoativas

5. TRATAR A CAUSA:
• Sepse: antibióticos em 1h, controle de foco
• IAM: reperfusão
• TEP: trombólise ou trombectomia"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Choque misto (séptico + cardiogênico):

1. UTI — monitorização invasiva
2. Jejum
3. SF 0,9% — bolus de 250mL com reavaliação clínica (responsividade a volume)
4. Noradrenalina 16mg/250mL SG5% — iniciar 5mL/h (0,05 mcg/kg/min), titular para PAM ≥65mmHg
5. Dobutamina 250mg/250mL SG5% — iniciar 5mL/h (2,5 mcg/kg/min), titular conforme DC e ScvO2
6. Meropenem 1g IV 8/8h (se sepse de foco abdominal/nosocomial) OU conforme foco
7. Hidrocortisona 50mg IV 6/6h (se choque refratário após 6h de vasopressor)
8. Omeprazol 40mg IV 1x/dia
9. Insulina conforme protocolo se glicemia >180mg/dL
10. Gasometria arterial + lactato a cada 4h
11. Controle de diurese horária — meta ≥0,5mL/kg/h
12. Ecocardiograma de controle em 24-48h"
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
            "content": "Internação em UTI: TODOS os pacientes com choque misto

Alta da UTI:
• PAM >65mmHg sem vasopressores por ≥24h
• Lactato em queda e <2mmol/L
• Diurese >0,5mL/kg/h
• ScvO2 >70%
• Estabilidade hemodinâmica
• Resolução do fator desencadeante

Alta hospitalar:
• Tolerando dieta oral
• Sem necessidade de drogas vasoativas
• Completou antibioticoterapia (se séptico)
• Função cardíaca estável (se cardiogênico)
• Ecocardiograma de controle antes da alta"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. Surviving Sepsis Campaign Guidelines 2021
2. ESC 2021 Guidelines on Heart Failure
3. Levy B et al. Septic cardiomyopathy. Intensive Care Med 2021
4. AMIB — Recomendações para manejo do choque 2023
5. De Backer D et al. Comparison of dopamine and norepinephrine. NEJM 2010"
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
