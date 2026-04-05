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
            "content": "Infecção do endocárdio, geralmente valvar, causada por bactérias (mais comum) ou fungos. Classificação:\n• Aguda: evolução rápida (dias a semanas), geralmente S. aureus\n• Subaguda: evolução insidiosa (semanas a meses), geralmente Streptococcus viridans\n• Prótese precoce: <60 dias da cirurgia (S. aureus, S. epidermidis)\n• Prótese tardia: >60 dias (flora semelhante à valva nativa)\n• Associada a dispositivos: marcapasso, CDI"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Suspeitar em todo paciente com:\n• Febre persistente + sopro cardíaco novo\n• Febre + fator de risco (uso de drogas IV, prótese valvar, cardiopatia prévia)\n• Bacteremia por S. aureus sem foco identificado\n• Fenômenos embólicos inexplicados (AVC, embolia pulmonar séptica)\n• Hemoculturas positivas persistentes\n\nCritérios de Duke Modificados:\nMAIORES: (1) Hemoculturas típicas (2 positivas para germe típico); (2) Evidência de envolvimento endocárdico ao ecocardiograma (vegetação, abscesso, deiscência de prótese) ou nova regurgitação valvar\nMENORES: Predisposição, febre ≥38°C, fenômenos vasculares (Janeway, embolia arterial), fenômenos imunológicos (Osler, Roth, FR+, GN), evidência microbiológica não critério maior\nDEFINITIVO: 2 maiores, ou 1 maior + 3 menores, ou 5 menores"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Agentes etiológicos por frequência:\n• Streptococcus viridans: 30-40% (valva nativa, subaguda)\n• Staphylococcus aureus: 25-30% (mais comum em aguda e UDIV)\n• Enterococcus: 10-15%\n• Grupo HACEK: 5-10% (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)\n• Staphylococcus coagulase-negativo: 5-8% (próteses)\n• Fungos (Candida, Aspergillus): 1-2% (imunossuprimidos, próteses)\n\nFatores de risco:\n• Doença valvar prévia (reumática, degenerativa, bicúspide)\n• Prótese valvar\n• Uso de drogas intravenosas\n• Dispositivos intracardíacos\n• Procedimentos dentários ou invasivos recentes\n• Hemodiálise crônica"
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sintomas:\n• Febre (90%): pode ser baixa na subaguda\n• Calafrios, sudorese noturna\n• Astenia, perda ponderal, anorexia\n• Dispneia (insuficiência cardíaca)\n• Dor torácica pleurítica (embolia pulmonar séptica)\n\nSinais ao exame físico:\n• Sopro cardíaco novo ou mudança de sopro prévio (85%)\n• Esplenomegalia (30%)\n• Petéquias conjuntivais e cutâneas\n• Nódulos de Osler (dolorosos, polpas digitais - imunológico)\n• Lesões de Janeway (indolores, palmas/plantas - embólico)\n• Manchas de Roth (hemorragias retinianas)\n• Hemorragias subungueais (splinter hemorrhages)\n• Baqueteamento digital (subaguda crônica)"
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames laboratoriais:\n• Hemoculturas: 3 pares (aeróbio + anaeróbio), de sítios diferentes, antes do ATB\n  - Intervalo mínimo de 1h entre coletas (idealmente)\n  - Na urgência: 3 pares em 30 min antes de iniciar ATB\n• Hemograma: anemia normocítica, leucocitose\n• PCR e VHS elevados\n• Fator reumatoide positivo (50%)\n• Complemento reduzido\n• EAS: hematúria microscópica (GN por imunocomplexos)\n• Função renal\n\nImagem:\n• Ecocardiograma transtorácico (ETT): sensibilidade 60-75%\n• Ecocardiograma transesofágico (ETE): sensibilidade 90-95% — indicado se ETT negativo com alta suspeita, prótese valvar, ou complicações\n• PET-CT com 18F-FDG: útil em próteses e dispositivos\n• TC de corpo inteiro: avaliar embolias sépticas\n• RM de crânio: se suspeita de embolia cerebral"
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Valvopatia Mitral Reumatica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta - SCA sem supra ST (AI/IAMSSST):\n1. Dupla antiagregação:\n• AAS 200 mg mastigar + Ticagrelor 180 mg ataque (ou Clopidogrel 300-600 mg)\n2. Anticoagulação:\n• Enoxaparina 1 mg/kg SC 12/12h ou HNF 60 UI/kg bolus + 12 UI/kg/h\n3. Anti-isquêmicos:\n• Metoprolol 25-50 mg VO (se FC > 70 e sem contraindicação)\n• Dinitrato de isossorbida 5 mg SL ou NTG EV se dor persistente\n4. Estatina: Atorvastatina 80 mg (alta potência)\n5. Estratificação invasiva pelo escore GRACE:\n• GRACE > 140: cateterismo em < 24h\n• GRACE 109-140: cateterismo em < 72h\n• GRACE < 109: estratégia conservadora ou invasiva seletiva\n6. Morfina 2-4 mg EV apenas se dor refratária (uso criterioso - ↓ absorção de antiagregantes)\n7. NÃO usar IECA/BRA na fase aguda se instável hemodinamicamente"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Antibioticoterapia dirigida (após resultado de cultura):\n\n• S. viridans sensível a penicilina (CIM ≤0,12):\n  - Penicilina G 12-18 milhões UI/dia IV contínuo ou 4/4h, 4 semanas\n  - OU Ceftriaxona 2g IV 1x/dia, 4 semanas\n  - Esquema curto: + Gentamicina 3mg/kg/dia IV, 2 semanas (apenas valva nativa)\n\n• S. aureus sensível a oxacilina (MSSA):\n  - Oxacilina 2g IV 4/4h, 6 semanas\n  - Em prótese: + Rifampicina 300mg VO 8/8h + Gentamicina 3mg/kg/dia (2 sem)\n\n• S. aureus resistente (MRSA):\n  - Vancomicina 15-20mg/kg IV 8-12h (manter vale 15-20 mcg/mL), 6 semanas\n  - OU Daptomicina 8-10mg/kg/dia IV\n\n• Enterococcus:\n  - Ampicilina 2g IV 4/4h + Ceftriaxona 2g IV 12/12h, 6 semanas\n  - OU Ampicilina + Gentamicina (se sensível a aminoglicosídeo)\n\nIndicações cirúrgicas (classe I):\n• ICC refratária por disfunção valvar\n• Infecção não controlada (abscesso, fístula, pseudoaneurisma)\n• Vegetação >10mm + evento embólico\n• Endocardite fúngica\n• Deiscência de prótese instável"
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "PRESCRIÇÃO — Endocardite empírica (valva nativa aguda):\n\n1. Dieta livre (se estável hemodinamicamente)\n2. SF 0,9% 500mL IV — conforme necessidade\n3. Oxacilina 2g IV diluída em 100mL SF 0,9%, infundir em 30-60min, 4/4h\n4. Gentamicina 240mg (3mg/kg) IV diluída em 100mL SF 0,9%, infundir em 30-60min, 1x/dia\n5. Dipirona 1g IV 6/6h se febre ≥37,8°C ou dor\n6. Omeprazol 40mg IV 1x/dia (gastroproteção)\n7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — avaliar contraindicações)\n8. Hemoculturas de controle: repetir 48-72h após início ATB\n9. Monitorizar função renal e níveis de gentamicina\n10. Ecocardiograma de controle semanal\n\nPRESCRIÇÃO — Endocardite MRSA:\n1. Vancomicina 1g IV 12/12h (ajustar por vale sérico)\n2. Meta vancocinemia vale: 15-20 mcg/mL\n3. Dosar vale antes da 4ª dose\n4. Ajustar dose conforme ClCr"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento:\n• Hemoculturas de controle 48-72h após início ATB (esperar negativação)\n• Monitorar temperatura diária — febre persistente >7 dias: reavaliar terapia e buscar complicações\n• Ecocardiograma: repetir em 7-10 dias e ao final do tratamento\n• Função renal e níveis séricos de aminoglicosídeos/vancomicina 2x/semana\n• Hemograma e PCR semanais\n• Avaliação odontológica durante internação\n• Após alta:\n  - Retorno em 1, 3 e 6 meses\n  - Ecocardiograma de controle em 1-3 meses\n  - Orientar profilaxia de endocardite em procedimentos de risco\n  - Cartão de profilaxia para portadores de prótese valvar"
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicações:\n• Insuficiência cardíaca (30-40%): principal causa de óbito\n• Embolias sistêmicas (20-50%): AVC, embolia esplênica, renal, mesentérica\n• Embolia pulmonar séptica (endocardite direita)\n• Abscesso perianular/paravalvar\n• Bloqueio AV (extensão para septo — abscesso aórtico)\n• Aneurisma micótico (cerebral, aórtico)\n• Glomerulonefrite por imunocomplexos\n• Infarto esplênico / abscesso esplênico\n• Insuficiência renal aguda (multifatorial)\n• Recidiva (5-10%)\n\nManejo de complicações:\n• ICC: diuréticos + vasodilatadores + cirurgia precoce\n• AVC: TC de crânio urgente — cirurgia cardíaca após 4 semanas se AVC hemorrágico\n• Abscesso: indicação cirúrgica absoluta"
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Internação: TODO paciente com endocardite confirmada ou provável\n\nUTI:\n• Choque séptico\n• ICC aguda / edema agudo de pulmão\n• AVC ou evento embólico major\n• Necessidade de suporte vasoativo\n• Pós-operatório de cirurgia valvar\n\nAlta hospitalar:\n• Completou ciclo de ATB IV com boa resposta\n• Hemoculturas negativas\n• Estável hemodinamicamente\n• Sem complicações ativas\n• Opção de OPAT (Outpatient Parenteral Antibiotic Therapy) em casos selecionados\n  - Critérios: >2 sem de ATB IV, sem complicações, adesão garantida\n\nAlta ambulatorial:\n• Profilaxia de endocardite mantida indefinidamente para pacientes de alto risco\n• Amoxicilina 2g VO 1h antes de procedimentos dentários invasivos"
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "1. AHA/ACC 2023 Guidelines for Management of Infective Endocarditis\n2. ESC 2023 Guidelines on Endocarditis\n3. SBC — Diretriz Brasileira de Valvopatias 2022\n4. Baddour LM et al. Infective Endocarditis in Adults. Circulation 2015;132:1435-86\n5. Habib G et al. 2015 ESC Guidelines for the management of infective endocarditis. Eur Heart J 2015\n6. ANVISA — Protocolo de uso de antimicrobianos 2023\n7. UpToDate — Infective endocarditis in adults (2024)"
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
