import type { FullProtocol } from "./types";

export const infectiousFullProtocols6: FullProtocol[] = [
  {
    id: "fp-endocardite-infect",
    title: "Endocardite - Abordagem de Emergencia",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["endocardite", "febre", "hemocultura", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Endocardite - Abordagem de Emergencia na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Infecção do endocárdio, geralmente valvar, causada por bactérias (mais comum) ou fungos. Classificação:
• Aguda: evolução rápida (dias a semanas), geralmente S. aureus
• Subaguda: evolução insidiosa (semanas a meses), geralmente Streptococcus viridans
• Prótese precoce: <60 dias da cirurgia (S. aureus, S. epidermidis)
• Prótese tardia: >60 dias (flora semelhante à valva nativa)
• Associada a dispositivos: marcapasso, CDI"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Suspeitar em todo paciente com:
• Febre persistente + sopro cardíaco novo
• Febre + fator de risco (uso de drogas IV, prótese valvar, cardiopatia prévia)
• Bacteremia por S. aureus sem foco identificado
• Fenômenos embólicos inexplicados (AVC, embolia pulmonar séptica)
• Hemoculturas positivas persistentes

Critérios de Duke Modificados:
MAIORES: (1) Hemoculturas típicas (2 positivas para germe típico); (2) Evidência de envolvimento endocárdico ao ecocardiograma (vegetação, abscesso, deiscência de prótese) ou nova regurgitação valvar
MENORES: Predisposição, febre ≥38°C, fenômenos vasculares (Janeway, embolia arterial), fenômenos imunológicos (Osler, Roth, FR+, GN), evidência microbiológica não critério maior
DEFINITIVO: 2 maiores, ou 1 maior + 3 menores, ou 5 menores"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Agentes etiológicos por frequência:
• Streptococcus viridans: 30-40% (valva nativa, subaguda)
• Staphylococcus aureus: 25-30% (mais comum em aguda e UDIV)
• Enterococcus: 10-15%
• Grupo HACEK: 5-10% (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)
• Staphylococcus coagulase-negativo: 5-8% (próteses)
• Fungos (Candida, Aspergillus): 1-2% (imunossuprimidos, próteses)

Fatores de risco:
• Doença valvar prévia (reumática, degenerativa, bicúspide)
• Prótese valvar
• Uso de drogas intravenosas
• Dispositivos intracardíacos
• Procedimentos dentários ou invasivos recentes
• Hemodiálise crônica"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sintomas:
• Febre (90%): pode ser baixa na subaguda
• Calafrios, sudorese noturna
• Astenia, perda ponderal, anorexia
• Dispneia (insuficiência cardíaca)
• Dor torácica pleurítica (embolia pulmonar séptica)

Sinais ao exame físico:
• Sopro cardíaco novo ou mudança de sopro prévio (85%)
• Esplenomegalia (30%)
• Petéquias conjuntivais e cutâneas
• Nódulos de Osler (dolorosos, polpas digitais - imunológico)
• Lesões de Janeway (indolores, palmas/plantas - embólico)
• Manchas de Roth (hemorragias retinianas)
• Hemorragias subungueais (splinter hemorrhages)
• Baqueteamento digital (subaguda crônica)"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais:
• Hemoculturas: 3 pares (aeróbio + anaeróbio), de sítios diferentes, antes do ATB
  - Intervalo mínimo de 1h entre coletas (idealmente)
  - Na urgência: 3 pares em 30 min antes de iniciar ATB
• Hemograma: anemia normocítica, leucocitose
• PCR e VHS elevados
• Fator reumatoide positivo (50%)
• Complemento reduzido
• EAS: hematúria microscópica (GN por imunocomplexos)
• Função renal

Imagem:
• Ecocardiograma transtorácico (ETT): sensibilidade 60-75%
• Ecocardiograma transesofágico (ETE): sensibilidade 90-95% — indicado se ETT negativo com alta suspeita, prótese valvar, ou complicações
• PET-CT com 18F-FDG: útil em próteses e dispositivos
• TC de corpo inteiro: avaliar embolias sépticas
• RM de crânio: se suspeita de embolia cerebral"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Endocardite - Abordagem de Emergencia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial:
1. Coletar 3 pares de hemoculturas ANTES de iniciar antibiótico
2. Solicitar ETT de urgência (ETE se prótese ou alta suspeita)
3. Iniciar antibioticoterapia empírica após hemoculturas:

• Valva nativa, aguda: Oxacilina 2g IV 4/4h + Gentamicina 3mg/kg/dia IV
• Valva nativa, subaguda: Ampicilina 2g IV 4/4h + Gentamicina 3mg/kg/dia
• Prótese valvar: Vancomicina 15-20mg/kg IV 12/12h + Gentamicina 3mg/kg/dia + Rifampicina 300mg VO 8/8h
• Alérgico a penicilina: Vancomicina 15-20mg/kg IV 12/12h

4. Avaliar necessidade de cirurgia precoce
5. Avaliação odontológica
6. Ecocardiograma seriado"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Antibioticoterapia dirigida (após resultado de cultura):

• S. viridans sensível a penicilina (CIM ≤0,12):
  - Penicilina G 12-18 milhões UI/dia IV contínuo ou 4/4h, 4 semanas
  - OU Ceftriaxona 2g IV 1x/dia, 4 semanas
  - Esquema curto: + Gentamicina 3mg/kg/dia IV, 2 semanas (apenas valva nativa)

• S. aureus sensível a oxacilina (MSSA):
  - Oxacilina 2g IV 4/4h, 6 semanas
  - Em prótese: + Rifampicina 300mg VO 8/8h + Gentamicina 3mg/kg/dia (2 sem)

• S. aureus resistente (MRSA):
  - Vancomicina 15-20mg/kg IV 8-12h (manter vale 15-20 mcg/mL), 6 semanas
  - OU Daptomicina 8-10mg/kg/dia IV

• Enterococcus:
  - Ampicilina 2g IV 4/4h + Ceftriaxona 2g IV 12/12h, 6 semanas
  - OU Ampicilina + Gentamicina (se sensível a aminoglicosídeo)

Indicações cirúrgicas (classe I):
• ICC refratária por disfunção valvar
• Infecção não controlada (abscesso, fístula, pseudoaneurisma)
• Vegetação >10mm + evento embólico
• Endocardite fúngica
• Deiscência de prótese instável"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Endocardite empírica (valva nativa aguda):

1. Dieta livre (se estável hemodinamicamente)
2. SF 0,9% 500mL IV — conforme necessidade
3. Oxacilina 2g IV diluída em 100mL SF 0,9%, infundir em 30-60min, 4/4h
4. Gentamicina 240mg (3mg/kg) IV diluída em 100mL SF 0,9%, infundir em 30-60min, 1x/dia
5. Dipirona 1g IV 6/6h se febre ≥37,8°C ou dor
6. Omeprazol 40mg IV 1x/dia (gastroproteção)
7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — avaliar contraindicações)
8. Hemoculturas de controle: repetir 48-72h após início ATB
9. Monitorizar função renal e níveis de gentamicina
10. Ecocardiograma de controle semanal

PRESCRIÇÃO — Endocardite MRSA:
1. Vancomicina 1g IV 12/12h (ajustar por vale sérico)
2. Meta vancocinemia vale: 15-20 mcg/mL
3. Dosar vale antes da 4ª dose
4. Ajustar dose conforme ClCr"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento:
• Hemoculturas de controle 48-72h após início ATB (esperar negativação)
• Monitorar temperatura diária — febre persistente >7 dias: reavaliar terapia e buscar complicações
• Ecocardiograma: repetir em 7-10 dias e ao final do tratamento
• Função renal e níveis séricos de aminoglicosídeos/vancomicina 2x/semana
• Hemograma e PCR semanais
• Avaliação odontológica durante internação
• Após alta:
  - Retorno em 1, 3 e 6 meses
  - Ecocardiograma de controle em 1-3 meses
  - Orientar profilaxia de endocardite em procedimentos de risco
  - Cartão de profilaxia para portadores de prótese valvar"
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Complicações:
• Insuficiência cardíaca (30-40%): principal causa de óbito
• Embolias sistêmicas (20-50%): AVC, embolia esplênica, renal, mesentérica
• Embolia pulmonar séptica (endocardite direita)
• Abscesso perianular/paravalvar
• Bloqueio AV (extensão para septo — abscesso aórtico)
• Aneurisma micótico (cerebral, aórtico)
• Glomerulonefrite por imunocomplexos
• Infarto esplênico / abscesso esplênico
• Insuficiência renal aguda (multifatorial)
• Recidiva (5-10%)

Manejo de complicações:
• ICC: diuréticos + vasodilatadores + cirurgia precoce
• AVC: TC de crânio urgente — cirurgia cardíaca após 4 semanas se AVC hemorrágico
• Abscesso: indicação cirúrgica absoluta"
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Internação: TODO paciente com endocardite confirmada ou provável

UTI:
• Choque séptico
• ICC aguda / edema agudo de pulmão
• AVC ou evento embólico major
• Necessidade de suporte vasoativo
• Pós-operatório de cirurgia valvar

Alta hospitalar:
• Completou ciclo de ATB IV com boa resposta
• Hemoculturas negativas
• Estável hemodinamicamente
• Sem complicações ativas
• Opção de OPAT (Outpatient Parenteral Antibiotic Therapy) em casos selecionados
  - Critérios: >2 sem de ATB IV, sem complicações, adesão garantida

Alta ambulatorial:
• Profilaxia de endocardite mantida indefinidamente para pacientes de alto risco
• Amoxicilina 2g VO 1h antes de procedimentos dentários invasivos"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. AHA/ACC 2023 Guidelines for Management of Infective Endocarditis
2. ESC 2023 Guidelines on Endocarditis
3. SBC — Diretriz Brasileira de Valvopatias 2022
4. Baddour LM et al. Infective Endocarditis in Adults. Circulation 2015;132:1435-86
5. Habib G et al. 2015 ESC Guidelines for the management of infective endocarditis. Eur Heart J 2015
6. ANVISA — Protocolo de uso de antimicrobianos 2023
7. UpToDate — Infective endocarditis in adults (2024)"
      }
],
  },
  {
    id: "fp-tuberculose-pulmonar",
    title: "Tuberculose Pulmonar",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["tuberculose", "TB", "BAAR", "RIPE", "tratamento"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Tuberculose Pulmonar na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Tuberculose Pulmonar."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Tuberculose Pulmonar."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Tuberculose Pulmonar."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Tuberculose Pulmonar."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Tuberculose Pulmonar."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Tuberculose Pulmonar."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Tuberculose Pulmonar."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Tuberculose Pulmonar."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Tuberculose Pulmonar."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Tuberculose Pulmonar."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Tuberculose Pulmonar e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Tuberculose Pulmonar."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-hiv-diagnostico-manejo",
    title: "HIV - Diagnostico e Manejo Inicial",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["HIV", "AIDS", "TARV", "teste rapido", "CD4"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de HIV - Diagnostico e Manejo Inicial na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de HIV - Diagnostico e Manejo Inicial e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para HIV - Diagnostico e Manejo Inicial."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-infeccao-pele-partes-moles",
    title: "Infeccoes de Pele e Partes Moles",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["celulite", "abscesso", "fasciite", "MRSA", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Infeccoes de Pele e Partes Moles na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Infeccoes de Pele e Partes Moles e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Infeccoes de Pele e Partes Moles."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-infeccao-urinaria-infect",
    title: "Infeccao Urinaria - Protocolo Completo",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["ITU", "cistite", "pielonefrite", "urocultura", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Infeccao Urinaria - Protocolo Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Infeccao Urinaria - Protocolo Completo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Infeccao Urinaria - Protocolo Completo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
