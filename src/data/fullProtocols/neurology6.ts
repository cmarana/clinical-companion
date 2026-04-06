import type { FullProtocol } from "./types";

export const neuroFullProtocols6: FullProtocol[] = [
  {
    id: "fp-guillain-barre",
    title: "Sindrome de Guillain-Barre",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["guillain-barre", "polirradiculoneuropatia", "imunoglobulina", "plasmaferese"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Sindrome de Guillain-Barre na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Síndrome de Guillain-Barré (SGB): polirradiculoneuropatia inflamatória aguda, autoimune, desmielinizante (mais comum) ou axonal, caracterizada por fraqueza muscular ascendente simétrica e arreflexia.\n\nSubtipos:\n• AIDP (Polirradiculoneuropatia Inflamatória Desmielinizante Aguda): 85-90% no Ocidente\n• AMAN (Neuropatia Axonal Motora Aguda): mais comum na Ásia\n• AMSAN (Neuropatia Axonal Sensitivo-Motora Aguda): mais grave\n• Síndrome de Miller Fisher: oftalmoplegia + ataxia + arreflexia (anti-GQ1b+)\n• Variantes: faringo-cervico-braquial, paraparética, sensitiva pura"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Sindrome de Guillain-Barre\\n• Sinais de alerta"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Sindrome de Guillain-Barre:\\n• Causas primárias e secundárias\\n• Mecanismos fisiopatológicos envolvidos\\n• Fatores genéticos e ambientais\\n• Fatores predisponentes e precipitantes\\n• Classificação etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"iagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Sindrome de Guillain-Barre."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Quadro clínico típico (evolução em 2-4 semanas):\n• Fraqueza ascendente simétrica: inicia em MMII → MMSS → face → respiratório\n• Arreflexia ou hiporreflexia generalizada\n• Dor neuropática (65%): lombalgia, dor em membros\n• Parestesias distais (início frequente)\n• Paralisia facial bilateral (50%)\n• Disfagia e disartria (bulbar)\n• Disfunção autonômica (70%): taquicardia, bradicardia, hipotensão postural, retenção urinária, íleo paralítico\n• Insuficiência respiratória (30%): necessidade de VM\n\nHistória: 60-70% com infecção prévia (1-4 semanas antes):\n• Campylobacter jejuni (mais comum)\n• CMV, EBV, influenza, Zika, COVID-19\n• Vacinação (raro)\n\nEscala de Hughes (incapacidade funcional):\n0 = normal; 1 = sinais menores; 2 = anda sem apoio; 3 = anda com apoio; 4 = acamado; 5 = VM; 6 = óbito"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Diagnóstico:\n• CLÍNICO: fraqueza progressiva + arreflexia (critérios de Brighton)\n\nLíquor (punção lombar):\n• Dissociação albumino-citológica: proteína elevada (>45mg/dL) com celularidade normal (<10 céls/mm³)\n• Pode ser normal na 1ª semana — repetir se necessário\n• Celularidade >50: pensar em HIV, CMV, linfoma, sarcoidose\n\nEletroneuromiografia (ENMG):\n• Realizar após 2 semanas do início\n• Des"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Sindrome de Guillain-Barre:\\n• Condições que mimetizam a apresentação clí"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Sindrome de Guillain-Barre:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Medidas iniciais de suporte\\n• Tratamento de urgência/emergência\\n• Critérios de gravidade e escalação\\n• Fluxograma de decisão clínica\\n• Interconsultas necessárias\\n• Exames prioritários"ão\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"eservada\n\nExames complementares:\n• Anti-gangliosídeo: anti-GM1 (AMAN), anti-GQ1b (Miller Fisher), anti-GD1a\n• Sorologia: Campylobacter, CMV, HIV, Zika\n• RM de coluna: realce de raízes (gadolínio) — diferencial com compressão medular\n• CVF (Capacidade Vital Forçada): monitorizar 4-6x/dia — IOT se <20mL/kg ou queda >30%"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Sindrome de Guillain-Barre."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Sindrome de Guillain-Barre."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento específico:\n• Imunoglobulina IV (IVIG): 0,4g/kg/dia por 5 dias (total 2g/kg)\n  - Iniciar se Hughes ≥3 ou progressão rápida\n  - Preferida em instabilidade autonômica\n• Plasmaférese: 5 sessões em dias alternados (200-250mL/kg volume total)\n  - Eficácia equivalente à IVIG\n  - Preferida se disponível precocemente\n• NÃO usar corticoides (sem benefício, podem piorar)\n• NÃO combinar IVIG + plasmaférese (sem benefício adicional)\n\nSuporte ventilatório:\n• Monitorizar CVF a cada 4-6h\n• IOT se: CVF <20mL/kg, PImax <-30cmH2O, PEmax <40cmH2O, queda >30% da CVF, hipoxemia ou hipercapnia\n• Regra 20-30-40: CVF <20, PImax <-30, PEmax <40 → intubar\n\nManejo da dor:\n• Gabapentina 300-1200mg/dia VO\n• Pregabalina 75-300mg/dia VO\n• Carbamazepina se dor neuropática intensa\n• Opioides: tramadol como resgate\n\nDisfunção autonômica:\n• Monitorizar em UTI\n• Evit"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Sindrome de Guillain-Barre:\\n• Frequência de consultas e exames de co"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Sindrome de Guillain-Barre:\\n• Complicações agudas e crônicas\\n• Fatores de risc"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sindrome de Guillain-Barre:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme." Vacinação e profilaxias\\n• Encaminhamentos especializados" {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — SGB (Hughes ≥3):\n\n1. Internação em UTI (se envolvimento bulbar ou respiratório)\n2. Jejum OU dieta por SNG (se disfagia)\n3. Imunoglobulina Humana IV 0,4g/kg/dia, diluída em SF 0,9%, infundir em 6-8h, por 5 dias consecutivos\n4. Omeprazol 40mg IV 1x/dia\n5. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)\n6. Gabapentina 300mg VO 8/8h (titular até 1200mg/dia conforme dor)\n7. Metoclopramida 10mg IV 8/8h se náusea\n8. Monitorizar CVF a cada 4-6h "id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Sindrome de Guillain-Barre. Inclu"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Sindrome de Guillain-Barre\\n• Sinais"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Sindrome de Guillain-Barre:\\n• Causas primárias e secundári"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Sindrome de Guillain-Barre:\\n• Sintomas cardinais e manifestaçõ"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Sindrome de Guillain-Barre:\\n• Exames laboratoriais (hemograma, bioquí"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Sindrome de Guillain-Barre:\\n• Condições que mimetizam a aprese"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Sindrome de Guillain-Barre:\\n• Estabilização (ABCDE)\\n• Monitorização indic"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Sindrome de Guillain-Barre:\\n• Tratamento farmacológico de primeira e "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Sindrome de Guillain-Barre:\\n• Esquema completo com d"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Sindrome de Guillain-Barre:\\n• Frequência de consultas e ex"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Sindrome de Guillain-Barre:\\n• Complicações agudas e crônicas\\n• Fator"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sindrome de Guillain-Barre:\\n\\nInternação: sin"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Sindrome de Guillain-Barre:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)" hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orienta"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Sindrome de Guillain-Barre. Inclui cr"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Sindrome de Guillain-Barre\\n• Sinais de "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Sindrome de Guillain-Barre:\\n• Causas primárias e secundárias\\"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Sindrome de Guillain-Barre:\\n• Sintomas cardinais e manifestações i"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Sindrome de Guillain-Barre:\\n• Exames laboratoriais (hemograma, bioquímica"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Sindrome de Guillain-Barre:\\n• Condições que mimetizam a apresentaç"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Sindrome de Guillain-Barre:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Sindrome de Guillain-Barre:\\n• Tratamento farmacológico de primeira e segu"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Sindrome de Guillain-Barre:\\n• Esquema completo com doses"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Sindrome de Guillain-Barre:\\n• Frequência de consultas e exames de controle\\n• Parâmetros de monitorização\\n• Critérios de resposta e falha terapêutica\\n• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"os\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"as necessárias\\n• Exames prioritários" diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"ais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico" etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"mentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"tes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento" invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"rconsultas necessárias\\n• Exames prioritários"iliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"cos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"or faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"hídrico rigoroso\n12. Avaliação fonoaudiológica (deglutição)\n\n* Após IVIG sem melhora em 4 semanas: considerar 2º ciclo de IVIG ou plasmaférese"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Crise Miastenica:\\n• Frequência de consultas e exames de controle\\n•"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Crise Miastenica:\\n• Complicações agudas e crônicas\\n• Fatores de risco para com"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Crise Miastenica:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."xias\\n• Encaminhamentos especializados"
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Complicações de Encefalite Autoimune:\\n• Complicações agudas e crônicas\\n• Fatores de risco para"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Encefalite Autoimune:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."           "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Complicações de Esclerose Multipla - Surto Agudo:\\n• Complicações agudas e crônicas\\n• Fatores de risco para complicações\\n• Diagnóstico precoce de complicações\\n• Manejo específico de cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. Van den Berg B et al. Guillain-Barré syndrome: pathogenesis, diagnosis, tre"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Crise Miastenica. Inclui critério"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Crise Miastenica\\n• Sinais de alerta"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Crise Miastenica:\\n• Causas primárias e secundárias\\n• Mec"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Crise Miastenica:\\n• Sintomas cardinais e manifestações iniciai"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Crise Miastenica:\\n• Exames laboratoriais (hemograma, bioquímica, marc"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Crise Miastenica:\\n• Condições que mimetizam a apresentação clí"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Crise Miastenica:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Me"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Crise Miastenica:\\n• Tratamento farmacológico de primeira e segunda li"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Crise Miastenica:\\n• Esquema completo com doses, vias"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Crise Miastenica:\\n• Frequência de consultas e exames de co"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Crise Miastenica:\\n• Complicações agudas e crônicas\\n• Fatores de risc"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Crise Miastenica:\\n\\nInternação: sinais de gra"id": "references",
            "title": "Referências Bibliográficas",
            "content": "Referências para Crise Miastenica:\\n1. Diretrizes brasileiras vigentes (SBC/SBP/SBPT/ABN — 2022-2024)\\n2. Guidelines internacionais (ESC/AHA/ACC/WHO — 2022-2024)\\n3. UpToDate 2024\\n4. Artigos de referência em periódicos de alto impacto (NEJM, Lancet, JAMA, BMJ)"ica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de ala"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Crise Miastenica. Inclui critérios di"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Crise Miastenica\\n• Sinais de alerta (re"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Crise Miastenica:\\n• Causas primárias e secundárias\\n• Mecanis"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Crise Miastenica:\\n• Sintomas cardinais e manifestações iniciais\\n• Sinais ao exame físico (inspeção, palpação, ausculta, percussão)\\n• Formas de apresentação (aguda, subaguda, crônica)\\n• Variações por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"iologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"levantes\\n• Monitorização laboratorial durante tratamento"\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica" necessárias\\n• Exames prioritários"iferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"s\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"tária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"ntas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"lain-Barré syndrome. Brain 2014\n4. ABN — Academia Brasileira de Neurologia — Consenso GBS 2022\n5."id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Encefalite Autoimune. Inclui crit"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Encefalite Autoimune\\n• Sinais de al"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Encefalite Autoimune:\\n• Causas primárias e secundárias\\n•"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Encefalite Autoimune:\\n• Sintomas cardinais e manifestações ini"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Encefalite Autoimune:\\n• Exames laboratoriais (hemograma, bioquímica, marcadores específicos)\\n• Exames de imagem (USG, TC, RNM — indicações e achados)\\n• Exames funcionais e eletrofisiológicos\\n• Critérios diagnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"xa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"a\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"ramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"   }
],
  },
  {
    id: "fp-miastenia-gravis-crise",
    title: "Crise Miastenica",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["miastenia gravis", "crise", "insuficiencia respiratoria", "piridostigmina"],
    sections: [
      {
            "id": "intro",
            "title": "Intro"id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Esclerose Multipla - Surto Agudo."id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Esclerose Multipla - Surto Agudo\\n• "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Esclerose Multipla - Surto Agudo:\\n• Causas primárias e sec"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Esclerose Multipla - Surto Agudo:\\n• Sintomas cardinais e manif"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Esclerose Multipla - Surto Agudo:\\n• Exames laboratoriais (hemograma, "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Esclerose Multipla - Surto Agudo:\\n• Condições que mimetizam a "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Esclerose Multipla - Surto Agudo:\\n• Estabilização (ABCDE)\\n• Monitorização"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Esclerose Multipla - Surto Agudo:\\n• Tratamento farmacológico de prime"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Esclerose Multipla - Surto Agudo:\\n• Esquema completo"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Esclerose Multipla - Surto Agudo:\\n• Frequência de consultas e exames de controle\\n• Parâmetros de monitorização\\n• Critérios de resposta e falha terapêutica\\n• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"nal/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"mentos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"• Interconsultas necessárias\\n• Exames prioritários"ue auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"gnósticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"ções por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ão etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"tivo\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"is."cionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica, classificação e epidemiologia de Neuralgia do Trigemeo. Inclui cri"id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Neuralgia do Trigemeo\\n• Sinais de a"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Neuralgia do Trigemeo:\\n• Causas primárias e secundárias\\n"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Neuralgia do Trigemeo:\\n• Sintomas cardinais e manifestações in"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Neuralgia do Trigemeo:\\n• Exames laboratoriais (hemograma, bioquímica,"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Neuralgia do Trigemeo:\\n• Condições que mimetizam a apresentaçã"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Neuralgia do Trigemeo:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Neuralgia do Trigemeo:\\n• Tratamento farmacológico de primeira e segun"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Neuralgia do Trigemeo:\\n• Esquema completo com doses,"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Neuralgia do Trigemeo:\\n• Frequência de consultas e exames de controle\\n• Parâmetros de monitorização\\n• Critérios de resposta e falha terapêutica\\n• Tempo de seguimento recomendado\\n• Orientações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"a\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"sivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"ultas necessárias\\n• Exames prioritários" na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"ormais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"ixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"ca\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"rramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"},
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Rastreamento e identificação precoce:\\n• Fatores de risco para Cefaleia em Salvas (Cluster)\\n• Sina"id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Cefaleia em Salvas (Cluster):\\n• Causas primárias e secundá"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Cefaleia em Salvas (Cluster):\\n• Sintomas cardinais e manifesta"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Cefaleia em Salvas (Cluster):\\n• Exames laboratoriais (hemograma, bioq"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Cefaleia em Salvas (Cluster):\\n• Condições que mimetizam a apre"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Cefaleia em Salvas (Cluster):\\n• Estabilização (ABCDE)\\n• Monitorização ind"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Cefaleia em Salvas (Cluster):\\n• Tratamento farmacológico de primeira "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Cefaleia em Salvas (Cluster):\\n• Esquema completo com"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Cefaleia em Salvas (Cluster):\\n• Frequência de consultas e "id": "complications",
            "title": "Complicações",
            "content": "Complicações de Cefaleia em Salvas (Cluster):\\n• Complicações agudas e crônicas\\n• Fatores de risco para complicações\\n• Diagnóstico precoce de complicações\\n• Manejo específico de cada complicação\\n• Prognóstico e mortalidade\\n• Sequelas a longo prazo"tações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"os invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"terconsultas necessárias\\n• Exames prioritários"uxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"ticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico" por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"tiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"\\n• Ferramentas de triagem rápida (escalas, questionários)\\n• Indicações de investigação complementar"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia e fisiopatologia de Status Epilepticus Refratario:\\n• Causas primárias e secund"id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Status Epilepticus Refratario:\\n• Sintomas cardinais e manifest"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Status Epilepticus Refratario:\\n• Exames laboratoriais (hemograma, bio"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Status Epilepticus Refratario:\\n• Condições que mimetizam a apr"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Status Epilepticus Refratario:\\n• Estabilização (ABCDE)\\n• Monitorização in"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Status Epilepticus Refratario:\\n• Tratamento farmacológico de primeira"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Status Epilepticus Refratario:\\n• Esquema completo co"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Status Epilepticus Refratario:\\n• Frequência de consultas e"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Status Epilepticus Refratario:\\n• Complicações agudas e crônicas\\n• Fa"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Status Epilepticus Refratario:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."ngo prazo"ntações ao paciente e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados"/hepática\\n• Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"tos invasivos\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica"nterconsultas necessárias\\n• Exames prioritários"auxiliam na diferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"sticos formais\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"s por faixa etária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"etiológica\\n• Microbiologia (quando aplicável)\\n• Fatores de risco modificáveis e não modificáveis"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Apresentação clínica de Mielopatia Aguda:\\n• Sintomas cardinais e manifestações iniciai"id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Investigação diagnóstica para Mielopatia Aguda:\\n• Exames laboratoriais (hemograma, bioquímica, marc"id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnóstico diferencial de Mielopatia Aguda:\\n• Condições que mimetizam a apresentação clí"id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial para Mielopatia Aguda:\\n• Estabilização (ABCDE)\\n• Monitorização indicada\\n• Me"id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Abordagem terapêutica de Mielopatia Aguda:\\n• Tratamento farmacológico de primeira e segunda li"id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições-modelo para Mielopatia Aguda:\\n• Esquema completo com doses, vias"id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento de Mielopatia Aguda:\\n• Frequência de consultas e exames de co"id": "complications",
            "title": "Complicações",
            "content": "Complicações de Mielopatia Aguda:\\n• Complicações agudas e crônicas\\n• Fatores de risc"id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Mielopatia Aguda:\\n\\nInternação: sinais de gravidade, instabilidade clínica, necessidade de monitorização ou terapêutica IV, falha do tratamento ambulatorial.\\n\\nUTI: instabilidade hemodinâmica, insuficiência respiratória, rebaixamento de consciência, necessidade de suporte orgânico avançado.\\n\\nAlta: estabilização clínica, tolerância à VO, ausência de complicações ativas, tratamento oral estabelecido, seguimento ambulatorial agendado, orientação de sinais de alarme."nte e familiares\\n• Vacinação e profilaxias\\n• Encaminhamentos especializados" Ajustes para idosos e gestantes\\n• Interações medicamentosas relevantes\\n• Monitorização laboratorial durante tratamento"\\n• Indicações cirúrgicas\\n• Manejo de complicações\\n• Duração do tratamento\\n• Critérios de resposta terapêutica" necessárias\\n• Exames prioritários"iferenciação\\n• Armadilhas diagnósticas comuns\\n• Síndromes de sobreposição"s\\n• Biomarcadores\\n• Diagnóstico diferencial laboratorial\\n• Algoritmo diagnóstico"tária e comorbidades\\n• Manifestações atípicas\\n• Sinais de gravidade e instabilidade\\n• Escala de gravidade quando aplicável"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Crise Miastenica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Crise Miastenica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Crise Miastenica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Crise Miastenica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Crise Miastenica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Crise Miastenica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Crise Miastenica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Crise Miastenica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-encefalite-autoimune",
    title: "Encefalite Autoimune",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["encefalite", "autoimune", "anti-NMDA", "imunoglobulina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Encefalite Autoimune na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Encefalite Autoimune."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Encefalite Autoimune."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Encefalite Autoimune."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Encefalite Autoimune."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Encefalite Autoimune."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Encefalite Autoimune."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Encefalite Autoimune."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Encefalite Autoimune."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Encefalite Autoimune."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Encefalite Autoimune."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Encefalite Autoimune e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Encefalite Autoimune."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-esclerose-multipla-surto",
    title: "Esclerose Multipla - Surto Agudo",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["esclerose multipla", "surto", "metilprednisolona", "desmielinizacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Esclerose Multipla - Surto Agudo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Esclerose Multipla - Surto Agudo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-neuralgia-trigeminal",
    title: "Neuralgia do Trigemeo",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["neuralgia", "trigemeo", "dor facial", "carbamazepina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Neuralgia do Trigemeo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Neuralgia do Trigemeo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Neuralgia do Trigemeo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Neuralgia do Trigemeo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Neuralgia do Trigemeo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Neuralgia do Trigemeo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Neuralgia do Trigemeo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Neuralgia do Trigemeo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Neuralgia do Trigemeo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Neuralgia do Trigemeo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Neuralgia do Trigemeo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Neuralgia do Trigemeo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Neuralgia do Trigemeo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-cefaleia-cluster",
    title: "Cefaleia em Salvas (Cluster)",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["cefaleia", "salvas", "cluster", "oxigenio", "sumatriptano"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Cefaleia em Salvas (Cluster) na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Cefaleia em Salvas (Cluster) e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-status-epilepticus-refratario",
    title: "Status Epilepticus Refratario",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["status epilepticus", "refratario", "anestesico", "EEG", "UTI"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Status Epilepticus Refratario na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Status Epilepticus Refratario."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Status Epilepticus Refratario."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Status Epilepticus Refratario."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Status Epilepticus Refratario."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Status Epilepticus Refratario."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Status Epilepticus Refratario."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Status Epilepticus Refratario."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Status Epilepticus Refratario."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Status Epilepticus Refratario."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Status Epilepticus Refratario."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Status Epilepticus Refratario e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Status Epilepticus Refratario."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-mielopatia-aguda",
    title: "Mielopatia Aguda",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["mielopatia", "medula", "paraplegia", "RNM", "corticoide"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Mielopatia Aguda na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Mielopatia Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Mielopatia Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Mielopatia Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Mielopatia Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Mielopatia Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Mielopatia Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Mielopatia Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Mielopatia Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Mielopatia Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Mielopatia Aguda."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Mielopatia Aguda e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Mielopatia Aguda."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
