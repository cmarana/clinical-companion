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
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Choque Misto\\n• Sinais de alerta"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Choque Misto:\\n• Causas primárias e secundárias\\n• Mecanismos fisiopatológicos envolvidos\\n• Fatores genéticos e ambientais\\n• Fatores predisponentes e precipitantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"ramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"
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
            "content": "Avaliação diagnóstica:\n• Ecocardiograma à beira-leito (POCUS/FOCUS): FEVE, função VD, derrame pericárdico, VCI\n• Lactato arterial seriado (a cada 2-4h)\n• Gasometria a"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Choque Misto:\\n• Condições que mimetizam a apresentação clí"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Choque Misto:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais de suporte\\n• Tratamento de urgência/emergência\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"(componente séptico)\n• Ecocardiograma formal quando possível\n\nMonitorização avançada:\n• Cateter arterial (PAM contínua)\n• Cateter venoso central (PVC, ScvO2)\n• Monitor de débito cardíaco minimamente invasivo (PiCCO, FloTrac)\n• Swan-Ganz em casos refratários\n• Variação de pressão de pulso (VPP) para avaliar responsividade a volume"
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
            "content": "Abordagem terapêutica por etapas:\n\n1. RESSUSCITAÇÃO VOLÊMICA:\n• Cristaloide 30mL/kg nas primeiras 3h (se componente distributivo)\n• LIMITAR volume se FEVE <30% ou PCP >18 — bolus de 250mL com reavaliação\n• Avaliar responsividade: elevação de pernas passiva, VPP, ou mini-bolus\n\n2. VASOPRESSORES:\n• Noradrenalina 0,1-2 mcg/kg/min — 1ª linha (PAM ≥65mmHg)\n• Se componente cardiogênico: associar Dobutamina 2,5-20 mcg/kg/min\n• Se choque refratário: Vasopressina 0,03-0,04 UI/min\n• Adrenalina como alternativa em bradicardia ou anafilaxia associada\n\n3. INOTRÓPICOS:\n• Dobutamina 2,5-20 mcg/kg/min — se FEVE <40% ou ScvO2 <70%\n• Milrinona 0,375-0,75 mcg/kg/min — se uso crônico de betabloqueador\n• Levosimendana 0,1-0,2 mcg/kg/min — opção em cardiomiopatia séptica refratária\n\n4. SUPORTE MECÂNICO:\n• Balão intra-aórtico: componente cardiogênico predominante\n• ECMO VA: choque refratário a drogas vasoativas\n\n5. TRATAR"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Choque Misto:\\n• Frequência de consultas e exames de co"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Choque Misto:\\n• Complicações agudas e crônicas\\n• Fatores de risco para complicações\\n• Diagnóstico precoce de complicações\\n• Manejo específico de cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"o paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"  {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Choque misto (séptico + cardiogênico):\n\n1. UTI — monitorização invasiva\n2. Jejum\n3. SF 0,9% — bolus de 250mL com reavaliação clínica (responsividade a volume)\n4. Noradrenalina 16mg/250mL SG5% — iniciar 5mL/h (0,05 mcg/kg/min), titular para PAM ≥65mmHg\n5. Dobutamina 250mg/250mL SG5% — iniciar 5mL/h (2,5 mcg/kg/min), titular conforme DC e ScvO2\n6. Meropenem 1g IV 8/8h (se sepse de foco abdominal/nosocomial) OU conforme foco\n7. Hidrocortisona 50mg IV 6/6h (se choque refratário após 6h de vasopressor)\n8. Omeprazol 40mg IV 1x/dia\n9. Insulina conforme protocolo se glicemia >180mg/dL\n10. Gasometria arterial + lactato a cada 4h\n11. Controle de diurese horária — meta ≥0,5mL/kg/h\n12. Ecocardiograma de controle em 24-48h"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Choque Neurogenico:\\n• Frequência de consultas e exames"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Choque Neurogenico:\\n• Complicações agudas e crônicas\\n• Fatores de risco para complicações\\n• Diagnóstico precoce de complicações\\n• Manejo específico de cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"ções ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Choque Misto e seu manejo."
      },
      {
            "id": "criteria",
         "id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Choque Misto. Inclui critérios diag"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Choque Misto\\n• Sinais de alerta (red "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Choque Misto:\\n• Causas primárias e secundárias\\n• Mecanismo"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Choque Misto:\\n• Sintomas cardinais e manifestações iniciais\\n• "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Choque Misto:\\n• Exames laboratoriais (hemograma, bioquímica, marcadores"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Choque Misto:\\n• Condições que mimetizam a apresentação clínica\\"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Choque Misto:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Choque Misto:\\n• Tratamento farmacológico de primeira e segunda linha\\n"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Choque Misto:\\n• Esquema completo com doses, vias, inte"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Choque Misto:\\n• Frequência de consultas e exames de controle"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Choque Misto:\\n• Complicações agudas e crônicas\\n• Fatores de risco para"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Choque Misto:\\n\\nInternação: sinais de gravidade"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Choque Misto:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"nsuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."\\n• Vacinação e "id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Choque Misto. Inclui critérios diagnósti"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Choque Misto\\n• Sinais de alerta (red flags"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Choque Misto:\\n• Causas primárias e secundárias\\n• Mecanismos fis"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Choque Misto:\\n• Sintomas cardinais e manifestações iniciais\\n• Sinai"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Choque Misto:\\n• Exames laboratoriais (hemograma, bioquímica, marcadores espe"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Choque Misto:\\n• Condições que mimetizam a apresentação clínica\\n• Ca"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Choque Misto:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas inici"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Choque Misto:\\n• Tratamento farmacológico de primeira e segunda linha\\n• Pos"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Choque Misto:\\n• Esquema completo com doses, vias, intervalo"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Choque Misto:\\n• Frequência de consultas e exames de controle\\n• "id": "complications",
            "title": "Complicações",
            "content": "Complicações de Choque Misto:\\n• Complicações agudas e crônicas\\n• Fatores de risco para complicações\\n• Diagnóstico precoce de complicações\\n• Manejo específico de cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"s\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"os e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"rúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"xames prioritários"rmadilhas diagnósticas comuns\\n• Síndromes de sobreposição"s\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"es\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"uando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"pida (escalas, questionários)\\n• Indicações de investigação complementar"icações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"rias\\n• Exames prioritários"ação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"omarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"iologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"• PAM >65mmHg sem vasopressores por ≥24h\n• Lactato em queda e <2mmol/L\n• Diurese >0,5mL/kg/h\n• ScvO2 >70%\n• Estabilidade hemodinâmica\n• Resolução do fator desencadeante\n\nAlta hospitalar:\n• Tolerando dieta oral\n• Sem necessidade de drogas vasoativas\n• Completou antibioticoterapia (se séptico)\n• Função cardíaca estável (se cardiogênico)\n• Ecocardiograma de controle antes da alta"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. Surviving Sepsis Campaign Guidelines 2021\n2. ESC 2021 Guidelines on Heart Failure\n3. Levy B et al. Septic cardiomyopathy. Intensive Care Med 2021\n4. AMIB — Recomendações para manejo do choque 2023\n5. De Backer D et al. Comparison of dopamine and norepinephrine. NEJM 2010"
      }
],
  },
  {
    id: "fp-choque-neur"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Choque Neurogenico. Inclui critério"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Choque Neurogenico\\n• Sinais de alerta"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Choque Neurogenico:\\n• Causas primárias e secundárias\\n• Mec"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Choque Neurogenico:\\n• Sintomas cardinais e manifestações iniciai"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Choque Neurogenico:\\n• Exames laboratoriais (hemograma, bioquímica, marc"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Choque Neurogenico:\\n• Condições que mimetizam a apresentação clí"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Choque Neurogenico:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Me"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Choque Neurogenico:\\n• Tratamento farmacológico de primeira e segunda li"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Choque Neurogenico:\\n• Esquema completo com doses, vias"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Choque Neurogenico:\\n• Frequência de consultas e exames de co"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Choque Neurogenico:\\n• Complicações agudas e crônicas\\n• Fatores de risc"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Choque Neurogenico:\\n\\nInternação: sinais de gra"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Choque Neurogenico:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"ica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."e fam"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Choque Neurogenico. Inclui critérios dia"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Choque Neurogenico\\n• Sinais de alerta (red"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Choque Neurogenico:\\n• Causas primárias e secundárias\\n• Mecanism"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Choque Neurogenico:\\n• Sintomas cardinais e manifestações iniciais\\n•"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Choque Neurogenico:\\n• Exames laboratoriais (hemograma, bioquímica, marcadore"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Choque Neurogenico:\\n• Condições que mimetizam a apresentação clínica\"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Choque Neurogenico:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais de suporte\\n• Tratamento de urgência/emergência\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"rbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"gia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"gem rápida (escalas, questionários)\\n• Indicações de investigação complementar"ção laboratorial durante tratamento"n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"ecessárias\\n• Exames prioritários"erenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"ria e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"as de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar", "TRM", "bradicardia", "vasopressor"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Definição clínica, classificação e epidemiologia de Sepse de Foco Abdominal. Inclui critérios diagnósticos padronizados conforme diretrizes nacionais e internaciona"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Sepse de Foco Abdominal. Inclui cri"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Sepse de Foco Abdominal\\n• Sinais de a"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Sepse de Foco Abdominal:\\n• Causas primárias e secundárias\\n"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Sepse de Foco Abdominal:\\n• Sintomas cardinais e manifestações in"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Sepse de Foco Abdominal:\\n• Exames laboratoriais (hemograma, bioquímica,"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Sepse de Foco Abdominal:\\n• Condições que mimetizam a apresentaçã"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Sepse de Foco Abdominal:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais de suporte\\n• Tratamento de urgência/emergência\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"a diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"mais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"a etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"amentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar" "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Colangite Aguda e Sepse Biliar. Inc"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Colangite Aguda e Sepse Biliar\\n• Sina"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Colangite Aguda e Sepse Biliar:\\n• Causas primárias e secundá"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Colangite Aguda e Sepse Biliar:\\n• Sintomas cardinais e manifesta"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Colangite Aguda e Sepse Biliar:\\n• Exames laboratoriais (hemograma, bioq"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Colangite Aguda e Sepse Biliar:\\n• Condições que mimetizam a apre"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Colangite Aguda e Sepse Biliar:\\n• Estabilização (ABCDE)\\n• Monitorização ind"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Colangite Aguda e Sepse Biliar:\\n• Tratamento farmacológico de primeira "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Colangite Aguda e Sepse Biliar:\\n• Esquema completo com"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Colangite Aguda e Sepse Biliar:\\n• Frequência de consultas e "id": "complications",
            "title": "Complicações",
            "content": "Complicações de Colangite Aguda e Sepse Biliar:\\n• Complicações agudas e crônicas\\n• Fat"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Colangite Aguda e Sepse Biliar:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme." prazo"ções ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"pática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento" invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"rconsultas necessárias\\n• Exames prioritários"iliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"or faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"     },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Fasciite Necrosante com Sepse\\n• Sinai"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Fasciite Necrosante com Sepse:\\n• Causas primárias e secundár"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Fasciite Necrosante com Sepse:\\n• Sintomas cardinais e manifestaç"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Fasciite Necrosante com Sepse:\\n• Exames laboratoriais (hemograma, bioqu"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Fasciite Necrosante com Sepse:\\n• Condições que mimetizam a apres"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Fasciite Necrosante com Sepse:\\n• Estabilização (ABCDE)\\n• Monitorização indi"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Fasciite Necrosante com Sepse:\\n• Tratamento farmacológico de primeira e"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Fasciite Necrosante com Sepse:\\n• Esquema completo com doses, vias, intervalos e duração\\n• Prescrição de internação\\n• Prescrição ambulatorial\\n• Ajustes para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"consultas necessárias\\n• Exames prioritários"liam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"os formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"r faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"lógica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"
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
