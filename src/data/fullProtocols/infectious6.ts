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
            "content": "Infecção do endocárdio, geralmente valvar, causada por bactérias (mais comum) ou fungos. Classificação:\n• Aguda: evolução rápida (dias a semanas), geralmente S. aureus\n• Subaguda: evolução insidiosa (semanas a meses), geralmente Streptococcus viridans\n• Prótese precoce: <60 dias da cirurgia (S. aureus, S. epidermidis)\n• Prótese tardia: >60 dias (flora semelhante à valva nativa)\n• Associada a dispositivos: marcapasso, CDI"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Suspeitar em todo paciente com:\n• Febre persistente + sopro cardíaco novo\n• Febre + fator de risco (uso de drogas IV, prótese valvar, cardiopatia prévia)\n• Bacteremia por S. aureus sem foco identificado\n• Fenômenos embólicos inexplicados (AVC, embolia pulmonar séptica)\n• Hemoculturas positivas persistentes\n\nCritérios de Duke Modificados:\nMAIORES: (1) Hemoculturas típicas (2 positivas para germe típico); (2) Evidência de envolvimento endocárdico ao ecocardiograma (vegetação, abscesso, deiscência de prótese) ou nova regurgitação valvar\nMENORES: Predisposição, febre ≥38°C, fenômenos vasculares (Janeway, embolia arterial), fenômenos imunológicos (Osler, Roth, FR+, GN), evidência microbiológica não critério maior\nDEFINITIVO: 2 maiores, ou 1 maior + 3 menores, ou 5 menores"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Agentes etiológicos por frequência:\n• Streptococcus viridans: 30-40% (valva nativa, subaguda)\n• Staphylococcus aureus: 25-30% (mais comum em aguda e UDIV)\n• Enterococcus: 10-15%\n• Grupo HACEK: 5-10% (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)\n• Staphylococcus coagulase-negativo: 5-8% (próteses)\n• Fungos (Candida, Aspergillus): 1-2% (imunossuprimidos, próteses)\n\nFatores de risco:\n• Doença valvar prévia (reumática, degenerativa, bicúspide)\n• Prótese valvar\n• Uso de drogas intravenosas\n• Dispositivos intracardíacos\n• Procedimentos dentários ou invasivos recentes\n• Hemodiálise crônica"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sintomas:\n• Febre (90%): pode ser baixa na subaguda\n• Calafrios, sudorese noturna\n• Astenia, perda ponderal, anorexia\n• Dispneia (insuficiência cardíaca)\n• Dor torácica pleurítica (embolia pulmonar séptica)\n\nSinais ao exame físico:\n• Sopro cardíaco novo ou mudança de sopro prévio (85%)\n• Esplenomegalia (30%)\n• Petéquias conjuntivais e cutâneas\n• Nódulos de Osler (dolorosos, polpas digitais - imunológico)\n• Lesões de Janeway (indolores, palmas/plantas - embólico)\n• Manchas de Roth (hemorragias retinianas)\n• Hemorragias subungueais (splinter hemorrhages)\n• Baqueteamento digital (subaguda crônica)"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais:\n• Hemoculturas: 3 pares (aeróbio + anaeróbio), de sítios diferentes, antes do ATB\n  - Intervalo mínimo de 1h entre coletas (idealmente)\n  - Na urgência: 3 pares em 30 min antes de iniciar ATB\n• Hemograma: anemia normocítica, leucocitose\n• PCR e VHS elevados\n• Fator reumatoide positivo (50%)\n• Complemento reduzido\n• EAS: hematúria microscópica (GN por imunocomplexos)\n• Função renal\n\nImagem:\n• Ecocardiograma transtorácico (ETT): sensibilidade 60-75%\n• Ecocardiograma transesofágico (ETE): sensibilidade 90-95% — indicado se ETT negativo com alta suspeita, prótese valvar, ou complicações\n• PET-CT com 18F-FDG: útil em próteses e dispositivos\n• TC de corpo inteiro: avaliar embolias sépticas\n• RM de crânio: se suspeita de embolia cerebral"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Endocardite - Abordagem de Emergencia:\\n• Condições que mimetizam a apresentação clínica\\n• Características que distinguem cada diagnóstico diferencial\\n• Red flags para diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial:\n1. Coletar 3 pares de hemoculturas ANTES de iniciar antibiótico\n2. Solicitar ETT de urgência (ETE se prótese ou alta suspeita)\n3. Iniciar antibioticoterapia empírica após hemoculturas:\n\n• Valva nativa, aguda: Oxacilina 2g IV 4/4h + Gentamicina 3mg/kg/dia IV\n• Valva nativa, subaguda: Ampicilina 2g IV 4/4h + Gentamicina 3mg/kg/dia\n• Prótese valvar: Vancomicina 15-20mg/kg IV 12/12h + Gentamicina 3mg/kg/dia + Rifampicina 300mg VO 8/8h\n• Alérgico a penicilina: Vancomicina 15-20mg/kg IV 12/12h\n\n4. Avaliar necessidade de cirurgia precoce\n5. Avaliação odontológica\n6. Ecocardiograma seriado"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Antibioticoterapia dirigida (após resultado de cultura):\n\n• S. viridans sensível a penicilina (CIM ≤0,12):\n  - Penicilina G 12-18 milhões UI/dia IV contínuo ou 4/4h, 4 semanas\n  - OU Ceftriaxona 2g IV 1x/dia, 4 semanas\n  - Esquema curto: + Gentamicina 3mg/kg/dia IV, 2 semanas (apenas valva nativa)\n\n• S. aureus sensível a oxacilina (MSSA):\n  - Oxacilina 2g IV 4/4h, 6 semanas\n  - Em prótese: + Rifampicina 300mg VO 8/8h + Gentamicina 3mg/kg/dia (2 sem)\n\n• S. aureus resistente (MRSA):\n  - Vancomicina 15-20mg/kg IV 8-12h (manter vale 15-20 mcg/mL), 6 semanas\n  - OU Daptomicina 8-10mg/kg/dia IV\n\n• Enterococcus:\n  - Ampicilina 2g IV 4/4h + Ceftriaxona 2g IV 12/12h, 6 semanas\n  - OU Ampicilina + Gentamicina (se sensível a aminoglicosídeo)\n\nIndicações cirúrgicas (classe I):\n• ICC refratária por disfunção valvar\n• Infecção não controlada (abscesso, fístula, pseudoaneurisma)\n• Vegetação >10mm + evento embólico\n• Endocardite fúngica\n• Deiscência de prótese instável"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Endocardite empírica (valva nativa aguda):\n\n1. Dieta livre (se estável hemodinamicamente)\n2. SF 0,9% 500mL IV — conforme necessidade\n3. Oxacilina 2g IV diluída em 100mL SF 0,9%, infundir em 30-60min, 4/4h\n4. Gentamicina 240mg (3mg/kg) IV diluída em 100mL SF 0,9%, infundir em 30-60min, 1x/dia\n5. Dipirona 1g IV 6/6h se febre ≥37,8°C ou dor\n6. Omeprazol 40mg IV 1x/dia (gastroproteção)\n7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — avaliar contraindicações)\n8. Hemoculturas de controle: repetir 48-72h após início ATB\n9. Monitorizar função renal e níveis de gentamicina\n10. Ecocardiograma de controle semanal\n\nPRESCRIÇÃO — Endocardite MRSA:\n1. Vancomicina 1g IV 12/12h (ajustar por vale sérico)\n2. Meta vancocinemia vale: 15-20 mcg/mL\n3. Dosar vale antes da 4ª dose\n4. Ajustar dose conforme ClCr"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento:\n• Hemoculturas de controle 48-72h após início ATB (esperar negativação)\n• Monitorar temperatura diária — febre persistente >7 dias: reavaliar terapia e buscar complicações\n• Ecocardiograma: repetir em 7-10 dias e ao final do tratamento\n• Função renal e níveis séricos de aminoglicosídeos/vancomicina 2x/semana\n• Hemograma e PCR semanais\n• Avaliação odontológica durante internação\n• Após alta:\n  - Retorno em 1, 3 e 6 meses\n  - Ecocardiograma de controle em 1-3 meses\n  - Orientar profilaxia de endocardite em procedimentos de risco\n  - Cartão de profilaxia para portadores de prótese valvar"
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Complicações:\n• Insuficiência cardíaca (30-40%): principal causa de óbito\n• Embolias sistêmicas (20-50%): AVC, embolia esplênica, renal, mesentérica\n• Embolia pulmonar séptica (endocardite direita)\n• Abscesso perianular/paravalvar\n• Bloqueio AV (extensão para septo — abscesso aórtico)\n• Aneurisma micótico (cerebral, aórtico)\n• Glomerulonefrite por imunocomplexos\n• Infarto esplênico / abscesso esplênico\n• Insuficiência renal aguda (multifatorial)\n• Recidiva (5-10%)\n\nManejo de complicações:\n• ICC: diuréticos + vasodilatadores + cirurgia precoce\n• AVC: TC de crânio urgente — cirurgia cardíaca após 4 semanas se AVC hemorrágico\n• Abscesso: indicação cirúrgica absoluta"
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Internação: TODO paciente com endocardite confirmada ou provável\n\nUTI:\n• Choque séptico\n• ICC aguda / edema agudo de pulmão\n• AVC ou evento embólico major\n• Necessidade de suporte vasoativo\n• Pós-operatório de cirurgia valvar\n\nAlta hospitalar:\n• Completou ciclo de ATB IV com boa resposta\n• Hemoculturas negativas\n• Estável hemodinamicamente\n• Sem complicações ativas\n• Opção de OPAT (Outpatient Parenteral Antibiotic Therapy) em casos selecionados\n  - Critérios: >2 sem de ATB IV, sem complicações, adesão garantida\n\nAlta ambulatorial:\n• Profilaxia de endocardite mantida indefinidamente para pacientes de alto risco\n• Amoxicilina 2g VO 1h antes de procedimentos dentários invasivos"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. AHA/ACC 2023 Guidelines for Management of Infective Endocarditis\n2. ESC 2023 Guidelines on Endocarditis\n3. SBC — Diretriz Brasileira de Valvopatias 2022\n4. Baddour LM et al. Infective Endocarditis in Adults. Circulation 2015;132:1435-86\n5. Habib G et al. 2015 ESC Guidelines for the management of infective endocarditis. Eur Heart J 2015\n6. ANVISA — Protocolo de uso de antimicrobianos 2023\n7. UpToDate — Infective endocarditis in adults (2024)"
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
   "id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Endocardite - Abordagem de Emergencia"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Endocardite - Abordagem de Emergencia\\n•"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Endocardite - Abordagem de Emergencia:\\n• Causas primárias e se"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Endocardite - Abordagem de Emergencia:\\n• Sintomas cardinais e mani"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Endocardite - Abordagem de Emergencia:\\n• Exames laboratoriais (hemograma,"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Endocardite - Abordagem de Emergencia:\\n• Condições que mimetizam a"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Endocardite - Abordagem de Emergencia:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais de suporte\\n• Tratamento de urgência/emergência\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"sticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"s por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"o\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar""berculose Pulmonar na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Tuberculose Pulmonar. Inclui critério"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Tuberculose Pulmonar\\n• Sinais de alerta"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Tuberculose Pulmonar:\\n• Causas primárias e secundárias\\n• Mec"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Tuberculose Pulmonar:\\n• Sintomas cardinais e manifestações iniciai"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Tuberculose Pulmonar:\\n• Exames laboratoriais (hemograma, bioquímica, marc"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Tuberculose Pulmonar:\\n• Condições que mimetizam a apresentação clí"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Tuberculose Pulmonar:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Me"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Tuberculose Pulmonar:\\n• Tratamento farmacológico de primeira e segunda li"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Tuberculose Pulmonar:\\n• Esquema completo com doses, vias"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Tuberculose Pulmonar:\\n• Frequência de consultas e exames de co"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Tuberculose Pulmonar:\\n• Complicações agudas e crônicas\\n• Fatores de risc"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Tuberculose Pulmonar:\\n\\nInternação: sinais de gra"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Tuberculose Pulmonar:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"ica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."miliares\\n• Vacinação e p"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Tuberculose Pulmonar. Inclui critérios diagnósticos"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Tuberculose Pulmonar\\n• Sinais de alerta (red flags)\\"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Tuberculose Pulmonar:\\n• Causas primárias e secundárias\\n• Mecanismos fisiop"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Tuberculose Pulmonar:\\n• Sintomas cardinais e manifestações iniciais\\n• Sinais a"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Tuberculose Pulmonar:\\n• Exames laboratoriais (hemograma, bioquímica, marcadores específ"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Tuberculose Pulmonar:\\n• Condições que mimetizam a apresentação clínica\\n• Carac"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Tuberculose Pulmonar:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Tuberculose Pulmonar:\\n• Tratamento farmacológico de primeira e segunda linha\\n• Posolo"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Tuberculose Pulmonar:\\n• Esquema completo com doses, vias, intervalos e"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Tuberculose Pulmonar:\\n• Frequência de consultas e exames de controle\\n• Par"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Tuberculose Pulmonar:\\n• Complicações agudas e crônicas\\n• Fatores de risco para complic"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Tuberculose Pulmonar:\\n\\nInternação: sinais de gravidade, instab"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Tuberculose Pulmonar:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"ncia respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme." especializados"\\n• Interações medicamentosas releva"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Tuberculose Pulmonar. Inclui critérios diagnóstic"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Tuberculose Pulmonar\\n• Sinais de alerta (red flags)"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Tuberculose Pulmonar:\\n• Causas primárias e secundárias\\n• Mecanismos fisi"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Tuberculose Pulmonar:\\n• Sintomas cardinais e manifestações iniciais\\n• Sinais"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Tuberculose Pulmonar:\\n• Exames laboratoriais (hemograma, bioquímica, marcadores espec"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Tuberculose Pulmonar:\\n• Condições que mimetizam a apresentação clínica\\n• Car"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Tuberculose Pulmonar:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas inicia"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Tuberculose Pulmonar:\\n• Tratamento farmacológico de primeira e segunda linha\\n• Poso"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Tuberculose Pulmonar:\\n• Esquema completo com doses, vias, intervalos"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Tuberculose Pulmonar:\\n• Frequência de consultas e exames de controle\\n• P"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Tuberculose Pulmonar:\\n• Complicações agudas e crônicas\\n• Fatores de risco para compl"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Tuberculose Pulmonar:\\n\\nInternação: sinais de gravidade, inst"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Tuberculose Pulmonar:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"iência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."hamentos especializados"ntes\\n• Interações medicamentosas releva"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Tuberculose Pulmonar. Inclui critérios diagnósticos pad"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Tuberculose Pulmonar\\n• Sinais de alerta (red flags)\\n• C"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Tuberculose Pulmonar:\\n• Causas primárias e secundárias\\n• Mecanismos fisiopatológicos envolvidos\\n• Fatores genéticos e ambientais\\n• Fatores predisponentes e precipitantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"nários)\\n• Indicações de investigação complementar"ção"nóstico diferencial laboratorial\\n• Algoritmo diagnóstico"ifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"cável)\\n• Fatores de risco modificáveis e não modificáveis"las, questionários)\\n• Indicações de investigação complementar"reposição"ico diferencial laboratorial\\n• Algoritmo diagnóstico"tações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"l)\\n• Fatores de risco modificáveis e não modificáveis" questionários)\\n• Indicações de investigação complementar"\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"essárias\\n• Exames prioritários"enciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"a e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"crobiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis" de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"{
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Etiologia e fisiopatologia de HIV - Diagnostico e Manejo Inicial:\\n• Causas primárias e secundárias\\n• "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de HIV - Diagnostico e Manejo Inicial:\\n• Causas primárias e secun"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de HIV - Diagnostico e Manejo Inicial:\\n• Sintomas cardinais e manifes"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para HIV - Diagnostico e Manejo Inicial:\\n• Exames laboratoriais (hemograma, bi"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de HIV - Diagnostico e Manejo Inicial:\\n• Condições que mimetizam a ap"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para HIV - Diagnostico e Manejo Inicial:\\n• Estabilização (ABCDE)\\n• Monitorização i"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de HIV - Diagnostico e Manejo Inicial:\\n• Tratamento farmacológico de primeira e segunda linha\\n• Posologia detalhada com doses por peso e ajustes\\n• Tratamento não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"rconsultas necessárias\\n• Exames prioritários"iliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"or faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"ógica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Infeccoes de Pele e Partes Moles:\\n• Causas primárias e secundá"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Infeccoes de Pele e Partes Moles:\\n• Sintomas cardinais e manifesta"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Infeccoes de Pele e Partes Moles:\\n• Exames laboratoriais (hemograma, bioq"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Infeccoes de Pele e Partes Moles:\\n• Condições que mimetizam a apre"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Infeccoes de Pele e Partes Moles:\\n• Estabilização (ABCDE)\\n• Monitorização ind"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Infeccoes de Pele e Partes Moles:\\n• Tratamento farmacológico de primeira "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Infeccoes de Pele e Partes Moles:\\n• Esquema completo com"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Infeccoes de Pele e Partes Moles:\\n• Frequência de consultas e "id": "complications",
            "title": "Complicações",
            "content": "Complicações de Infeccoes de Pele e Partes Moles:\\n• Complicações agudas e crônicas\\n• Fat"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Infeccoes de Pele e Partes Moles:\\n\\nInternação: s"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Infeccoes de Pele e Partes Moles:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"de hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."razo"es ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"tica\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"nvasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"onsultas necessárias\\n• Exames prioritários"iam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"s formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico" faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ógica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Infeccao Urinaria - Protocolo Completo:\\n• Sintomas cardinais e man"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Infeccao Urinaria - Protocolo Completo:\\n• Exames laboratoriais (hemograma"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Infeccao Urinaria - Protocolo Completo:\\n• Condições que mimetizam "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Infeccao Urinaria - Protocolo Completo:\\n• Estabilização (ABCDE)\\n• Monitorizaç"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Infeccao Urinaria - Protocolo Completo:\\n• Tratamento farmacológico de pri"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Infeccao Urinaria - Protocolo Completo:\\n• Esquema comple"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Infeccao Urinaria - Protocolo Completo:\\n• Frequência de consul"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Infeccao Urinaria - Protocolo Completo:\\n• Complicações agudas e crônicas\\"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Infeccao Urinaria - Protocolo Completo:\\n\\nInterna"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Infeccao Urinaria - Protocolo Completo:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"bilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."ongo prazo"entações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"l/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"ntos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"Interconsultas necessárias\\n• Exames prioritários" auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"ósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"es por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"
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
