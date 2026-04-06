import type { FullProtocol } from "./types";

export const infectiousFullProtocols7: FullProtocol[] = [
  {
    id: "fp-i7-tetano-infect",
    title: "Tetano",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["tetano", "trismo", "toxina", "imunoglobulina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Tetano na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Síndrome de Guillain-Barré (SGB): polirradiculoneuropatia inflamatória aguda, autoimune, desmielinizante (mais comum) ou axonal, caracterizada por fraqueza muscular ascendente simétrica e arreflexia.\n\nSubtipos:\n• AIDP (Polirradiculoneuropatia Inflamatória Desmielinizante Aguda): 85-90% no Ocidente\n• AMAN (Neuropatia Axonal Motora Aguda): mais comum na Ásia\n• AMSAN (Neuropatia Axonal Sensitivo-Motora Aguda): mais grave\n• Síndrome de Miller Fisher: oftalmoplegia + ataxia + arreflexia (anti-GQ1b+)\n• Variantes: faringo-cervico-braquial, paraparética, sensitiva pura"
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
            "content": "Quadro clínico típico (evolução em 2-4 semanas):\n• Fraqueza ascendente simétrica: inicia em MMII → MMSS → face → respiratório\n• Arreflexia ou hiporreflexia generalizada\n• Dor neuropática (65%): lombalgia, dor em membros\n• Parestesias distais (início frequente)\n• Paralisia facial bilateral (50%)\n• Disfagia e disartria (bulbar)\n• Disfunção autonômica (70%): taquicardia, bradicardia, hipotensão postural, retenção urinária, íleo paralítico\n• Insuficiência respiratória (30%): necessidade de VM\n\nHistória: 60-70% com infecção prévia (1-4 semanas antes):\n• Campylobacter jejuni (mais comum)\n• CMV, EBV, influenza, Zika, COVID-19\n• Vacinação (raro)\n\nEscala de Hughes (incapacidade funcional):\n0 = normal; 1 = sinais menores; 2 = anda sem apoio; 3 = anda com apoio; 4 = acamado; 5 = VM; 6 = óbito"
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Diagnóstico:\n• CLÍNICO: fraqueza progressiva + arreflexia (critérios de Brighton)\n\nLíquor (punção lombar):\n• Dissociação albumino-citológica: proteína elevada (>45mg/dL) com celularidade normal (<10 céls/mm³)\n• Pode ser normal na 1ª semana — repetir se necessário\n• Celularidade >50: pensar em HIV, CMV, linfoma, sarcoidose\n\nEletroneuromiografia (ENMG):\n• Realizar após 2 semanas do início\n• Desmielinizante (AIDP): redução da velocidade de condução, bloqueio de condução, aumento da latência distal\n• Axonal (AMAN/AMSAN): amplitude reduzida com velocidade preservada\n\nExames complementares:\n• Anti-gangliosídeo: anti-GM1 (AMAN), anti-GQ1b (Miller Fisher), anti-GD1a\n• Sorologia: Campylobacter, CMV, HIV, Zika\n• RM de coluna: realce de raízes (gadolínio) — diferencial com compressão medular\n• CVF (Capacidade Vital Forçada): monitorizar 4-6x/dia — IOT se <20mL/kg ou queda >30%"
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Tetano:\\n• Condições que mimetizam a apresentação clínica\\n• Características que distinguem cada diagnóstico diferencial\\n• Red flags para diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial:\n1. Coletar 3 pares de hemoculturas ANTES de iniciar antibiótico\n2. Solicitar ETT de urgência (ETE se prótese ou alta suspeita)\n3. Iniciar antibioticoterapia empírica após hemoculturas:\n\n• Valva nativa, aguda: Oxacilina 2g IV 4/4h + Gentamicina 3mg/kg/dia IV\n• Valva nativa, subaguda: Ampicilina 2g IV 4/4h + Gentamicina 3mg/kg/dia\n• Prótese valvar: Vancomicina 15-20mg/kg IV 12/12h + Gentamicina 3mg/kg/dia + Rifampicina 300mg VO 8/8h\n• Alérgico a penicilina: Vancomicina 15-20mg/kg IV 12/12h\n\n4. Avaliar necessidade de cirurgia precoce\n5. Avaliação odontológica\n6. Ecocardiograma seriado"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento específico:\n• Imunoglobulina IV (IVIG): 0,4g/kg/dia por 5 dias (total 2g/kg)\n  - Iniciar se Hughes ≥3 ou progressão rápida\n  - Preferida em instabilidade autonômica\n• Plasmaférese: 5 sessões em dias alternados (200-250mL/kg volume total)\n  - Eficácia equivalente à IVIG\n  - Preferida se disponível precocemente\n• NÃO usar corticoides (sem benefício, podem piorar)\n• NÃO combinar IVIG + plasmaférese (sem benefício adicional)\n\nSuporte ventilatório:\n• Monitorizar CVF a cada 4-6h\n• IOT se: CVF <20mL/kg, PImax <-30cmH2O, PEmax <40cmH2O, queda >30% da CVF, hipoxemia ou hipercapnia\n• Regra 20-30-40: CVF <20, PImax <-30, PEmax <40 → intubar\n\nManejo da dor:\n• Gabapentina 300-1200mg/dia VO\n• Pregabalina 75-300mg/dia VO\n• Carbamazepina se dor neuropática intensa\n• Opioides: tramadol como resgate\n\nDisfunção autonômica:\n• Monitorizar em UTI\n• Evitar manobras vagais bruscas\n• Tratar bradicardia sintomática com atropina\n• Hipotensão: volume + vasopressor se necessário"
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "PRESCRIÇÃO — SGB (Hughes ≥3):\n\n1. Internação em UTI (se envolvimento bulbar ou respiratório)\n2. Jejum OU dieta por SNG (se disfagia)\n3. Imunoglobulina Humana IV 0,4g/kg/dia, diluída em SF 0,9%, infundir em 6-8h, por 5 dias consecutivos\n4. Omeprazol 40mg IV 1x/dia\n5. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)\n6. Gabapentina 300mg VO 8/8h (titular até 1200mg/dia conforme dor)\n7. Metoclopramida 10mg IV 8/8h se náusea\n8. Monitorizar CVF a cada 4-6h — protocolo de IOT se CVF <20mL/kg\n9. Fisioterapia motora e respiratória 2x/dia\n10. Controle de PA e FC contínuo\n11. Balanço hídrico rigoroso\n12. Avaliação fonoaudiológica (deglutição)\n\n* Após IVIG sem melhora em 4 semanas: considerar 2º ciclo de IVIG ou plasmaférese"
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
            "content": "1. Van den Berg B et al. Guillain-Barré syndrome: pathogenesis, diagnosis, treatment and prognosis. Nat Rev Neurol 2014\n2. Willison HJ et al. Guillain-Barré syndrome. Lancet 2016\n3. Fokke C et al. Diagnosis of Guillain-Barré syndrome. Brain 2014\n4. ABN — Academia Brasileira de Neurologia — Consenso GBS 2022\n5. Hughes RA, Swan AV. Randomised trial of plasma exchange, intravenous immunoglobulin, and combined treatments in GBS. Lancet 1997"
      }
],
  },  {
    id: "fp-i7-botulismo-infect",
    title: "Botulismo",
    categoryId: "infectious",
    category: "Infectolo"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Tetano. Inclui critérios d"id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Tetano"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Tetano:\\n• Causas primárias e secundárias"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Tetano:\\n• Sintomas cardinais e manif"id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Tetano:\\n• Exames laboratoriais (hemo"id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Tetano:\\n• Condições que mime"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Tetano:\\n• Estabilização (ABCDE)\\n• Mon"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Tetano:\\n• Tratamento farmacológico de primeira e segunda linha\\n• Posologia detalhada com doses por peso e ajustes\\n• Tratamento não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"de e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"iagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"is e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"uda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"es\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"sco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar" populacionais."id": "intro",
            "title": "Introducao",
            "content": "Definição clínica, classificação e epidemiologia de Botulismo. Inclui critérios diagnósticos"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Botulismo. Inclui critério"id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Botuli"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Botulismo:\\n• Causas primárias e secundár"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Botulismo:\\n• Sintomas cardinais e ma"id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Botulismo:\\n• Exames laboratoriais (h"id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Botulismo:\\n• Condições que m"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Botulismo:\\n• Estabilização (ABCDE)\\n• "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Botulismo:\\n• Tratamento farm"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Botulismo:\\n• Esquema completo co"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Botulismo:\\n• Frequência de consulta"id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Botulismo:\\n• Complicações agudas e crôn"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Botulismo:\\n\\"id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Botulismo:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"mento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilizaç"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Botulismo. Inclui critéri"id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Botul"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Botulismo:\\n• Causas primárias e secundá"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Botulismo:\\n• Sintomas cardinais e m"id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Botulismo:\\n• Exames laboratoriais ("id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Botulismo:\\n• Condições que "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Botulismo:\\n• Estabilização (ABCDE)\\n•"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Botulismo:\\n• Tratamento far"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Botulismo:\\n• Esquema completo c"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Botulismo:\\n• Frequência de consult"id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Botulismo:\\n• Complicações agudas e crô"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Botulismo:\\n\"id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Botulismo:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"amento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabiliza"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Botulismo. Inclui critérios"id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Botulis"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Botulismo:\\n• Causas primárias e secundári"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Botulismo:\\n• Sintomas cardinais e man"id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Botulismo:\\n• Exames laboratoriais (he"id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Botulismo:\\n• Condições que mi"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Botulismo:\\n• Estabilização (ABCDE)\\n• M"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Botulismo:\\n• Tratamento farma"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Botulismo:\\n• Esquema completo com"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Botulismo:\\n• Frequência de consultas"id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Botulismo:\\n• Complicações agudas e crôni"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Botulismo:\\n\\n"id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Botulismo:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"ento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Botulismo. Inclui critérios "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Botulism"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Botulismo:\\n• Causas primárias e secundária"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Botulismo:\\n• Sintomas cardinais e mani"id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Botulismo:\\n• Exames laboratoriais (hem"id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Botulismo:\\n• Condições que mim"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Botulismo:\\n• Estabilização (ABCDE)\\n• Mo"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Botulismo:\\n• Tratamento farmac"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Botulismo:\\n• Esquema completo com "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Botulismo:\\n• Frequência de consultas "id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Botulismo:\\n• Complicações agudas e crônic"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Botulismo:\\n\\nI"id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Botulismo:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"nto ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."gnóstico e mortalidade\\n• Sequelas a longo prazo"eguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"cológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"e e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"agnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"s e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"da, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"s\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"co para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"populacionais."o, orientação de sinais de alarme."rognóstico e mortalidade\\n• Sequelas a longo prazo" seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"a insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"macológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"ade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"ais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"guda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"tes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"isco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"o populacionais."ndado, orientação de sinais de alarme."n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"o de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados" para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento" farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"avidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"ara diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"o (aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"itantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"de risco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"risco populacionais."endado, orientação de sinais de alarme." Prognóstico e mortalidade\\n• Sequelas a longo prazo"de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"ara insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"armacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"idade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"a diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"onais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"(aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"antes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis" risco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"sco populacionais." risco populacionais."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Hantavirose. Inclui critér"id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Hantav"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Hantavirose:\\n• Causas primárias e secund"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Hantavirose:\\n• Sintomas cardinais e "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Hantavirose:\\n• Exames laboratoriais "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Hantavirose:\\n• Condições que"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Hantavirose:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais de suporte\\n• Tratamento de urgência/emergência\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"ara diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"o (aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"itantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"de risco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"risco populacionais."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Febre "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Febre Amarela:\\n• Causas primárias e secu"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Febre Amarela:\\n• Sintomas cardinais "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Febre Amarela:\\n• Exames laboratoriai"id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Febre Amarela:\\n• Condições q"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Febre Amarela:\\n• Estabilização (ABCDE)\"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Febre Amarela:\\n• Tratamento "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Febre Amarela:\\n• Esquema complet"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Febre Amarela:\\n• Frequência de consultas e exames de controle\\n• Parâmetros de monitorização\\n• Critérios de resposta e falha terapêutica\\n• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"es para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"ão farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários" para diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"uncionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"ção (aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ipitantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"o de risco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Chikungunya:\\n• Causas primárias e secund"id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Chikungunya:\\n• Sintomas cardinais e "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Chikungunya:\\n• Exames laboratoriais "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Chikungunya:\\n• Condições que"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Chikungunya:\\n• Estabilização (ABCDE)\\n"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Chikungunya:\\n• Tratamento farmacológico de primeira e segunda linha\\n• Posologia detalhada com doses por peso e ajustes\\n• Tratamento não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"avidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"ara diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"o (aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"itantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Apresentação clínica de Zika Virus:\\n• Sintomas cardinais e m"id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Zika Virus:\\n• Exames laboratoriais ("id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Zika Virus:\\n• Condições que "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Zika Virus:\\n• Estabilização (ABCDE)\\n•"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Zika Virus:\\n• Tratamento far"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Zika Virus:\\n• Esquema completo c"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Zika Virus:\\n• Frequência de consult"id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Zika Virus:\\n• Complicações agudas e crô"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Zika Virus:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."• Prognóstico e mortalidade\\n• Sequelas a longo prazo" de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"vidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"ra diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"ionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico" (aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Investigação diagnóstica para Doenca Meningococica:\\n• Exames labor"id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Doenca Meningococica:\\n• Cond"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Doenca Meningococica:\\n• Estabilização ("id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Doenca Meningococica:\\n• Trat"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Doenca Meningococica:\\n• Esquema completo com doses, vias, intervalos e duração\\n• Prescrição de internação\\n• Prescrição ambulatorial\\n• Ajustes para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"mento não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"ios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"d flags para diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"xames funcionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diagnóstico diferencial de Endocardite de Protese Valvar:"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Endocardite de Protese Valvar:\\n• Estabi"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Endocardite de Protese Valvar:"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Endocardite de Protese Valvar:\\n•"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Endocardite de Protese Valvar:\\n• Fr"id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Endocardite de Protese Valvar:\\n• Compli"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Endocardite de "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Endocardite de Protese Valvar:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"a IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"rapêutica\\n• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"torial\\n• Ajustes para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"\n• Tratamento não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"al\\n• Red flags para diagnósticos alternativos graves\\n• Exames que auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Peritonite Bacteriana Espontanea:\\n• Est"id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Peritonite Bacteriana Espontan"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Peritonite Bacteriana Espontanea:\"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Peritonite Bacteriana Espontanea:\\n•"id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Peritonite Bacteriana Espontanea:\\n• Com"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Peritonite Bact"id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Peritonite Bacteriana Espontanea:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"tica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de sup"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Peritonite Bacteriana Espontanea. Inclui critérios diagnósticos padronizados conforme diretrizes nacionais e internacionais vigentes (2022-2024). Prevalência, incidência e fatores de risco populacionais." oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."de cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo" terapêutica\\n• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"ulatorial\\n• Ajustes para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"es\\n• Tratamento não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"a\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Abordagem terapêutica de Abscesso Hepatico:\\n• Tratame"id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescrições-modelo para Abscesso Hepatico:\\n• Esquema com"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Abscesso Hepatico:\\n• Frequência de "id": "complications",
            "title": "Complicacoes",
            "content": "Complicações de Abscesso Hepatico:\\n• Complicações aguda"id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Abscesso Hepati"id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Referências para Abscesso Hepatico:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nA"id": "def",
            "title": "Definicao",
            "content": "Definição clínica, classificação e epidemiologia de Abscesso Hepatico. Inclui"id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Abscesso Hepatico\\n• Sinais de alerta (red flags)\\n• Critérios de suspeita clínica\\n• Escores de risco validados\\n• População de risco para rastreamento ativo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"ores de risco populacionais." ambulatorial agendado, orientação de sinais de alarme."ação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"justes para insuficiência renal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"to não farmacológico\\n• Indicações de procedimentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Botulismo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Botulismo."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Botulismo."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Botulismo."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-difteria",
    title: "Difteria",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["difteria", "pseudomembrana", "antitoxina", "penicilina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Difteria na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Difteria."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Difteria."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Difteria."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Difteria."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Difteria."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Difteria."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Difteria."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Difteria."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Difteria."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Difteria."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Difteria."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Difteria."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-coqueluche",
    title: "Coqueluche",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["coqueluche", "pertussis", "tosse", "azitromicina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Coqueluche na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Coqueluche."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Coqueluche."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Coqueluche."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Coqueluche."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Coqueluche."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Coqueluche."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Coqueluche."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Coqueluche."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Coqueluche."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Coqueluche."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Coqueluche."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Coqueluche."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-hantavirose",
    title: "Hantavirose",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["hantavirus", "SCPH", "edema pulmonar", "roedor"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Hantavirose na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Hantavirose."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Hantavirose."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Hantavirose."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Hantavirose."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Hantavirose."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Hantavirose."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Hantavirose."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Hantavirose."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Hantavirose."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Hantavirose."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Hantavirose."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Hantavirose."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-febre-amarela",
    title: "Febre Amarela",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["febre amarela", "flavivirus", "ictericia", "hemorragia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Febre Amarela na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Febre Amarela."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Febre Amarela."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Febre Amarela."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Febre Amarela."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Febre Amarela."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Febre Amarela."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Febre Amarela."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Febre Amarela."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Febre Amarela."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Febre Amarela."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Febre Amarela."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Febre Amarela."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-chikungunya",
    title: "Chikungunya",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["chikungunya", "artralgia", "arbovirus", "cronicidade"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Chikungunya na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Chikungunya."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Chikungunya."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Chikungunya."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Chikungunya."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Chikungunya."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Chikungunya."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Chikungunya."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Chikungunya."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Chikungunya."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Chikungunya."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Chikungunya."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Chikungunya."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-zika",
    title: "Zika Virus",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["zika", "microcefalia", "arbovirus", "Guillain-Barre"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Zika Virus na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Zika Virus."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Zika Virus."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Zika Virus."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Zika Virus."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Zika Virus."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Zika Virus."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Zika Virus."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Zika Virus."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Zika Virus."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Zika Virus."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Zika Virus."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Zika Virus."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-doenca-meningococica",
    title: "Doenca Meningococica",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["meningococo", "purpura", "choque", "meningite"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Doenca Meningococica na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Doenca Meningococica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Doenca Meningococica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Doenca Meningococica."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Doenca Meningococica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Doenca Meningococica."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Doenca Meningococica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Doenca Meningococica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Doenca Meningococica."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Doenca Meningococica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Doenca Meningococica."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Doenca Meningococica."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Doenca Meningococica."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-endocardite-protese",
    title: "Endocardite de Protese Valvar",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["endocardite", "protese", "febre", "hemocultura"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Endocardite de Protese Valvar na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Endocardite de Protese Valvar."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Endocardite de Protese Valvar."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Endocardite de Protese Valvar."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Endocardite de Protese Valvar."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Endocardite de Protese Valvar."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Endocardite de Protese Valvar."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Endocardite de Protese Valvar."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Endocardite de Protese Valvar."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Endocardite de Protese Valvar."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Endocardite de Protese Valvar."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Endocardite de Protese Valvar."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Endocardite de Protese Valvar."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-peritonite-bacteriana",
    title: "Peritonite Bacteriana Espontanea",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["PBE", "ascite", "peritonite", "albumina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Peritonite Bacteriana Espontanea na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Peritonite Bacteriana Espontanea."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Peritonite Bacteriana Espontanea."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Peritonite Bacteriana Espontanea."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Peritonite Bacteriana Espontanea."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-i7-abscesso-hepatico",
    title: "Abscesso Hepatico",
    categoryId: "infectious",
    category: "Infectologia de Emergencia",
    tags: ["abscesso", "hepatico", "amebiano", "piogenico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Abscesso Hepatico na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Abscesso Hepatico."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Abscesso Hepatico."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Abscesso Hepatico."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Abscesso Hepatico."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Abscesso Hepatico."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Abscesso Hepatico."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Abscesso Hepatico."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Abscesso Hepatico."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Abscesso Hepatico."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Abscesso Hepatico."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Abscesso Hepatico."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Abscesso Hepatico."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },
];
