import type { FullProtocol } from "./types";

export const respiratoryFullProtocols8: FullProtocol[] = [
  {
    id: "fp-r8-tuberculose-pulmonar-resp",
    title: "Tuberculose Pulmonar - Manejo Respiratorio",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["tuberculose", "pulmonar", "BAAR", "isolamento"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "A tuberculose pulmonar (TB) é a doença infecciosa que mais mata no mundo. No Brasil, são 70.000 casos novos/ano. Baciloscopia de escarro (BAAR) e teste rápido molecular (TRM-TB/GeneXpert) são fundamentais para diagnóstico rápido. Esquema RIPE por 6 meses. MS/PNCT 2021."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Infecção pelo Mycobacterium tuberculosis com acometimento pulmonar. TB pulmonar bacilífera: BAAR positivo no escarro (principal forma de transmissão). Classificação: caso novo, recidiva, retratamento após abandono. TB resistente: monorresistência, polirresistência, MDR (R+H), XDR."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Tuberculose Pulmonar - Manejo Respiratorio."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Mycobacterium tuberculosis (bacilo de Koch). Transmissão por aerossóis. Fatores de risco: HIV (principal), diabetes, imunossupressão, silicose, tabagismo, alcoolismo, uso de drogas, privação de liberdade, situação de rua, contato domiciliar."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Tosse produtiva ≥3 semanas (principal — investigar sempre!), hemoptise, febre vespertina, sudorese noturna, emagrecimento. RX: infiltrado em lobos superiores, cavitações. TB miliar: disseminação hematogênica (micronódulos difusos). HIV+: apresentação atípica (sem cavitação, infiltrados em bases)."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Baciloscopia de escarro (BAAR) — 2 amostras. TRM-TB (GeneXpert): resultado em 2h, detecta resistência a rifampicina. Cultura em meio líquido (MGIT) e sólido (Löwenstein-Jensen) — 2-8 semanas. RX tórax. TST/PPD (ILTB). IGRA (quando disponível). HIV obrigatório para todos os casos de TB."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Tuberculose Pulmonar - Manejo Respiratorio."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Tuberculose Pulmonar - Manejo Respiratorio."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Esquema RIPE (2RHZE/4RH): Fase intensiva (2 meses): Rifampicina 600mg + Isoniazida 300mg + Pirazinamida 1600mg + Etambutol 1100mg (doses para >50kg), 1x/dia. Fase de manutenção (4 meses): Rifampicina 600mg + Isoniazida 300mg, 1x/dia. Comprimido de dose fixa combinada (4 em 1). TB meníngea: 12 meses + corticoide. TB MDR: esquema especial com fluoroquinolona, aminoglicosídeo, etc."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "1. RIPE dose fixa combinada (>50kg): 4 comprimidos/dia em jejum (Fase I: 2 meses); 2. RH dose fixa combinada: 2 comprimidos/dia (Fase II: 4 meses); 3. Piridoxina (Vit B6) 50mg/dia (prevenção de neuropatia por isoniazida); 4. Solicitar: HIV, hepatograma basal, creatinina, ácido úrico, hemograma; 5. Notificação compulsória; 6. Isolamento respiratório (precaução por aerossóis — máscara N95)."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "BAAR mensal (2°, 4° e 6° meses). Cultura no 2° mês (se BAAR+ → suspeitar resistência). Hepatograma se sintomas ou risco (hepatopatia, HIV, >60 anos). Alta por cura: tratamento completo + 2 BAAR negativos. Controle de contatos: TST + RX tórax. DOTS (tratamento diretamente observado): indicado para todos."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Hepatotoxicidade (RIPE — suspender se TGO/TGP >5x), neuropatia periférica (isoniazida — prevenir com piridoxina), artralgia/hiperuricemia (pirazinamida), neurite óptica (etambutol), nefrite intersticial (rifampicina). TB resistente: principal complicação do abandono."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Isolamento: todos os casos bacilíferos até negativação do BAAR (geralmente 2-3 semanas de RIPE). Internação: TB grave (miliar, meníngea), falência respiratória, comorbidade grave, efeitos adversos graves. Alta: tratamento ambulatorial é a regra."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Manual de Recomendações para o Controle da TB — MS/PNCT 2021. WHO — Global Tuberculosis Report 2023. SBPT — III Diretrizes para TB 2009."
      }
],
  },  {
    id: "fp-r8-bronquiectasia-exacerbada",
    title: "Bronquiectasia Exacerbada",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["bronquiectasia", "exacerbacao", "antibiotico", "hemoptise"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Bronquiectasia é a dilatação anormal e permanente dos brônquios. As exacerbações são causa frequente de internação e declínio da função pulmonar. Pseudomonas aeruginosa é o patógeno mais relevante. Antibioticoterapia guiada por cultura de escarro é essencial. BTS/ERS 2021."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Exacerbação de bronquiectasia: piora dos sintomas respiratórios (volume/purulência de escarro, dispneia, tosse, hemoptise) requerendo mudança no tratamento. Diagnóstico de bronquiectasia: TC tórax com dilatação brônquica irreversível (razão brônquio/artéria >1, falta de afilamento, brônquios visíveis na periferia)."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Bronquiectasia Exacerbada."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Bronquiectasia Exacerbada."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Bronquiectasia Exacerbada."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Bronquiectasia Exacerbada."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Bronquiectasia Exacerbada."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Bronquiectasia Exacerbada."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "ATB empírico guiado por cultura prévia: Sem Pseudomonas anterior: Amoxicilina-Clavulanato 875/125mg VO 12/12h × 14 dias OU Azitromicina 500mg/dia × 3 dias. Com Pseudomonas: Ciprofloxacino 500mg VO 12/12h × 14 dias OU Ceftazidima 2g IV 8/8h (se grave). Colonização crônica por Pseudomonas: tobramicina inalatória. Fisioterapia respiratória: drenagem postural, flutter, exercícios respiratórios (FUNDAMENTAL). Hemoptise: ácido tranexâmico, embolização se maciça."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "1. Amoxicilina-Clavulanato 875/125mg VO 12/12h × 14 dias (sem Pseudomonas); 2. OU Ciprofloxacino 500mg VO 12/12h × 14 dias (com Pseudomonas); 3. Salbutamol nebulização 5mg 6/6h; 4. SF 0,9% nebulização (umidificação); 5. Fisioterapia respiratória 2-3x/dia; 6. Colher cultura de escarro ANTES de iniciar ATB; 7. Se grave: Ceftazidima 2g IV 8/8h + Amicacina 15mg/kg/dia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Bronquiectasia Exacerbada."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Bronquiectasia Exacerbada."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Bronquiectasia Exacerbada."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "ERS Guidelines for Bronchiectasis 2017. BTS Guideline for Bronchiectasis 2019. Chalmers JD et al. Lancet Respir Med 2018."
      }
],
  },  {
    id: "fp-r8-fibrose-pulmonar",
    title: "Fibrose Pulmonar - Exacerbacao Aguda",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["fibrose", "pulmonar", "idiopatica", "exacerbacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Fibrose Pulmonar - Exacerbacao Aguda na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Fibrose Pulmonar - Exacerbacao Aguda."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-pneumonia-aspirativa",
    title: "Pneumonia Aspirativa",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["aspiracao", "pneumonia", "disfagia", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "A pneumonia aspirativa resulta da aspiração de conteúdo orofaríngeo colonizado para as vias aéreas inferiores. É responsável por 5-15% das pneumonias comunitárias. Fatores de risco: disfagia, rebaixamento de consciência, DRGE, idade avançada. Cobertura para anaeróbios é classicamente recomendada, embora evidência recente questione."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Pneumonite aspirativa: aspiração química (conteúdo gástrico ácido) — resposta inflamatória sem infecção (síndrome de Mendelson). Pneumonia aspirativa: aspiração de material colonizado da orofaringe → infecção bacteriana. Distinção importante para decisão terapêutica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Pneumonia Aspirativa."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Pneumonia Aspirativa."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Pneumonia Aspirativa."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Pneumonia Aspirativa."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Pneumonia Aspirativa."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Pneumonia Aspirativa."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Pneumonia aspirativa: Amoxicilina-Clavulanato 875/125mg VO 12/12h OU Ampicilina-Sulbactam 3g IV 6/6h OU Clindamicina 600mg IV 8/8h (se alergia a penicilina). Se suspeita de Gram-negativos (nosocomial, aspiração hospitalar): Piperacilina-Tazobactam 4,5g IV 6/6h OU Ceftriaxona + Metronidazol. Pneumonite aspirativa: suporte (O2, VM SN), sem ATB nas primeiras 48h (iniciar se não melhorar). Prevenção: cabeceira elevada 30°, dieta adequada (fonoaudiologia), suspender VO se disfagia grave."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "1. Ampicilina-Sulbactam 3g IV 6/6h (1ª escolha hospitalar); 2. OU Amoxicilina-Clavulanato 875/125mg VO 12/12h × 7-10 dias; 3. OU Clindamicina 600mg IV 8/8h (se alergia penicilina); 4. O2 cateter/máscara para SpO2 >92%; 5. Cabeceira elevada 30-45°; 6. Avaliação fonoaudiológica (disfagia); 7. Dieta suspensa até avaliação de deglutição."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Pneumonia Aspirativa."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Pneumonia Aspirativa."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Pneumonia Aspirativa."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Mandell LA, Niederman MS. NEJM 2019. Marik PE. Aspiration Pneumonitis and Pneumonia. NEJM 2001. IDSA/ATS Guidelines for CAP 2019."
      }
],
  },  {
    id: "fp-r8-edema-pulmonar-nao-cardiogenico",
    title: "Edema Pulmonar Nao Cardiogenico",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["edema", "pulmonar", "SDRA", "nao cardiogenico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Edema Pulmonar Nao Cardiogenico na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Edema Pulmonar Nao Cardiogenico."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-traqueomalacia",
    title: "Traqueomalacia",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["traqueomalacia", "colapso", "traqueia", "CPAP"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Traqueomalacia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Traqueomalacia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Traqueomalacia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Traqueomalacia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Traqueomalacia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Traqueomalacia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Traqueomalacia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Traqueomalacia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Traqueomalacia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Traqueomalacia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Traqueomalacia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Traqueomalacia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Traqueomalacia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-pneumomediastino",
    title: "Pneumomediastino",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["pneumomediastino", "mediastino", "enfisema", "espontaneo"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Pneumomediastino na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Pneumomediastino."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Pneumomediastino."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Pneumomediastino."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Pneumomediastino."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Pneumomediastino."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Pneumomediastino."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Pneumomediastino."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Pneumomediastino."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Pneumomediastino."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Pneumomediastino."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Pneumomediastino."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Pneumomediastino."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-quilotorax",
    title: "Quilotorax",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["quilotorax", "quilo", "ducto toracico", "drenagem"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Quilotorax na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Quilotorax."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Quilotorax."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Quilotorax."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Quilotorax."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Quilotorax."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Quilotorax."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Quilotorax."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Quilotorax."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Quilotorax."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Quilotorax."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Quilotorax."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Quilotorax."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-sarcoidose-pulmonar",
    title: "Sarcoidose Pulmonar",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["sarcoidose", "granuloma", "hilar", "corticoide"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Sarcoidose Pulmonar na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Sarcoidose Pulmonar."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Sarcoidose Pulmonar."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Sarcoidose Pulmonar."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Sarcoidose Pulmonar."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Sarcoidose Pulmonar."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Sarcoidose Pulmonar."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Sarcoidose Pulmonar."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Sarcoidose Pulmonar."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Sarcoidose Pulmonar."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Sarcoidose Pulmonar."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Sarcoidose Pulmonar."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Sarcoidose Pulmonar."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-hipertensao-pulmonar-aguda",
    title: "Hipertensao Pulmonar Aguda",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["hipertensao", "pulmonar", "VD", "prostanoide"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Hipertensao Pulmonar Aguda na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Hipertensao Pulmonar Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Hipertensao Pulmonar Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Hipertensao Pulmonar Aguda."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Hipertensao Pulmonar Aguda."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-atelectasia",
    title: "Atelectasia",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["atelectasia", "colapso", "fisioterapia", "broncoscopia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Atelectasia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Atelectasia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Atelectasia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Atelectasia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Atelectasia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Atelectasia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Atelectasia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Atelectasia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Atelectasia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Atelectasia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Atelectasia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Atelectasia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Atelectasia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-r8-edema-subglotico",
    title: "Edema Subglotico Pos-Extubacao",
    categoryId: "respiratory",
    category: "Respiratorio",
    tags: ["subglotico", "extubacao", "estridor", "corticoide"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Edema Subglotico Pos-Extubacao na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Edema Subglotico Pos-Extubacao."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },
];
