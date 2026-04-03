import type { FullProtocol } from "./types";

export const cardioFullProtocols10: FullProtocol[] = [
  {
    id: "fp-c10-valvopatia-mitral-reumática",
    title: "Valvopatia Mitral Reumatica",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["mitral", "reumatica", "estenose", "sopro"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Valvopatia Mitral Reumatica na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Infecção do endocárdio, geralmente valvar, causada por bactérias (mais comum) ou fungos. Classificação:
• Aguda: evolução rápida (dias a semanas), geralmente S. aureus
• Subaguda: evolução insidiosa (semanas a meses), geralmente Streptococcus viridans
• Prótese precoce: <60 dias da cirurgia (S. aureus, S. epidermidis)
• Prótese tardia: >60 dias (flora semelhante à valva nativa)
• Associada a dispositivos: marcapasso, CDI"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
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
            "title": "Apresentacao Clinica",
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
            "title": "Diagnostico",
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
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Valvopatia Mitral Reumatica."
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
            "title": "Abordagem Terapeutica",
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
            "title": "Prescricoes",
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
            "title": "Complicacoes",
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
            "title": "Criterios de Internacao / UTI / Alta",
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
            "title": "Referencias Bibliograficas",
            "content": "1. AHA/ACC 2023 Guidelines for Management of Infective Endocarditis
2. ESC 2023 Guidelines on Endocarditis
3. SBC — Diretriz Brasileira de Valvopatias 2022
4. Baddour LM et al. Infective Endocarditis in Adults. Circulation 2015;132:1435-86
5. Habib G et al. 2015 ESC Guidelines for the management of infective endocarditis. Eur Heart J 2015
6. ANVISA — Protocolo de uso de antimicrobianos 2023
7. UpToDate — Infective endocarditis in adults (2024)"
      }
],
  },  {
    id: "fp-c10-cardiomiopatia-dilatada",
    title: "Cardiomiopatia Dilatada",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["cardiomiopatia", "dilatada", "IC", "FE"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Cardiomiopatia Dilatada na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Cardiomiopatia Dilatada."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Cardiomiopatia Dilatada."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Cardiomiopatia Dilatada."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Cardiomiopatia Dilatada."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Cardiomiopatia Dilatada."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Cardiomiopatia Dilatada."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Cardiomiopatia Dilatada."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Cardiomiopatia Dilatada."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Cardiomiopatia Dilatada."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Cardiomiopatia Dilatada."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Cardiomiopatia Dilatada."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Cardiomiopatia Dilatada."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-cardiomiopatia-hipertrofica",
    title: "Cardiomiopatia Hipertrofica",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["hipertrofica", "obstrucao", "morte subita", "betabloqueador"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Cardiomiopatia Hipertrofica na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Cardiomiopatia Hipertrofica."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Cardiomiopatia Hipertrofica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Cardiomiopatia Hipertrofica."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Cardiomiopatia Hipertrofica."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-cardiomiopatia-restritiva",
    title: "Cardiomiopatia Restritiva",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["restritiva", "amiloidose", "infiltrativa", "diastolica"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Cardiomiopatia Restritiva na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Cardiomiopatia Restritiva."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Cardiomiopatia Restritiva."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Cardiomiopatia Restritiva."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Cardiomiopatia Restritiva."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Cardiomiopatia Restritiva."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Cardiomiopatia Restritiva."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Cardiomiopatia Restritiva."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Cardiomiopatia Restritiva."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Cardiomiopatia Restritiva."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Cardiomiopatia Restritiva."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Cardiomiopatia Restritiva."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Cardiomiopatia Restritiva."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-angina-instavel",
    title: "Angina Instavel",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["angina", "instavel", "SCA", "troponina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Angina Instavel na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Angina Instavel."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Angina Instavel."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Angina Instavel."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Angina Instavel."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Angina Instavel."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Angina Instavel."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Angina Instavel."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Angina Instavel."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Angina Instavel."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Angina Instavel."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Angina Instavel."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Angina Instavel."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-arritmia-supraventricular",
    title: "Arritmias Supraventriculares",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["arritmia", "supraventricular", "TSV", "flutter"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Arritmias Supraventriculares na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Arritmias Supraventriculares."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Arritmias Supraventriculares."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Arritmias Supraventriculares."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Arritmias Supraventriculares."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Arritmias Supraventriculares."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Arritmias Supraventriculares."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Arritmias Supraventriculares."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Arritmias Supraventriculares."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Arritmias Supraventriculares."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Arritmias Supraventriculares."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Arritmias Supraventriculares."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Arritmias Supraventriculares."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-bloqueio-ramo",
    title: "Bloqueio de Ramo",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["BRE", "BRD", "bloqueio", "conducao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Bloqueio de Ramo na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Bloqueio de Ramo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Bloqueio de Ramo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Bloqueio de Ramo."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Bloqueio de Ramo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Bloqueio de Ramo."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Bloqueio de Ramo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Bloqueio de Ramo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Bloqueio de Ramo."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Bloqueio de Ramo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Bloqueio de Ramo."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Bloqueio de Ramo."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Bloqueio de Ramo."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-marca-passo-disfuncao",
    title: "Disfuncao de Marca-Passo",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["marca-passo", "disfuncao", "falha", "captura"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Disfuncao de Marca-Passo na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Disfuncao de Marca-Passo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Disfuncao de Marca-Passo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Disfuncao de Marca-Passo."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Disfuncao de Marca-Passo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Disfuncao de Marca-Passo."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Disfuncao de Marca-Passo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Disfuncao de Marca-Passo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Disfuncao de Marca-Passo."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Disfuncao de Marca-Passo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Disfuncao de Marca-Passo."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Disfuncao de Marca-Passo."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Disfuncao de Marca-Passo."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-trombo-intracardiaco",
    title: "Trombo Intracardiaco",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["trombo", "intracardiaco", "anticoagulacao", "eco"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Trombo Intracardiaco na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Trombo Intracardiaco."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Trombo Intracardiaco."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Trombo Intracardiaco."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Trombo Intracardiaco."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Trombo Intracardiaco."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Trombo Intracardiaco."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Trombo Intracardiaco."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Trombo Intracardiaco."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Trombo Intracardiaco."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Trombo Intracardiaco."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Trombo Intracardiaco."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Trombo Intracardiaco."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-doenca-arterial-periferica",
    title: "Doenca Arterial Periferica Aguda",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["DAP", "isquemia", "claudicacao", "embolectomia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Doenca Arterial Periferica Aguda na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Doenca Arterial Periferica Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Doenca Arterial Periferica Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Doenca Arterial Periferica Aguda."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Doenca Arterial Periferica Aguda."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-aneurisma-aorta-abd",
    title: "Aneurisma de Aorta Abdominal Roto",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["aneurisma", "aorta", "abdominal", "ruptura", "cirurgia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Aneurisma de Aorta Abdominal Roto na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Aneurisma de Aorta Abdominal Roto."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-c10-regurgitacao-tricuspide",
    title: "Regurgitacao Tricuspide",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["tricuspide", "regurgitacao", "VD", "endocardite"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Regurgitacao Tricuspide na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Regurgitacao Tricuspide."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Regurgitacao Tricuspide."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Regurgitacao Tricuspide."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Regurgitacao Tricuspide."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Regurgitacao Tricuspide."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Regurgitacao Tricuspide."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Regurgitacao Tricuspide."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Regurgitacao Tricuspide."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Regurgitacao Tricuspide."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Regurgitacao Tricuspide."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Regurgitacao Tricuspide."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Regurgitacao Tricuspide."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },
];
