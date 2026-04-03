import type { FullProtocol } from "./types";

export const infectiousFullProtocols6: FullProtocol[] = [
  {
    id: "fp-endocardite-emergencia",
    title: "Endocardite Infecciosa na Emergência",
    categoryId: "infectious",
    category: "infectious",
    tags: ["endocardite", "febre", "sopro", "vegetação", "hemocultura"],
    sections: [
,      { id: "intro", title: "Introdução", content: `EI deve ser suspeitada em todo paciente com febre + sopro novo, especialmente usuários de drogas IV.` }
      { id: "def", title: "Definição", content: `Infecção do endocárdio valvar com formação de vegetações, potencialmente fatal se não tratada.` }
      { id: "etiology", title: "Etiologia", content: `S. aureus (principal, especialmente em UDIV), Streptococcus viridans (subaguda), Enterococcus, HACEK. Prótese: S. epidermidis.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Febre >38°C persistente
- Sopro novo ou mudança de sopro prévio
- Fenômenos embólicos: AVC, embolia pulmonar séptica (UDIV → tricúspide)
- Manchas de Janeway (indolores), nódulos de Osler (dolorosos)
- Petéquias conjuntivais
- Esplenomegalia
- Insuficiência cardíaca` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios de Duke modificados (2023)**
**3 pares de hemoculturas** antes do ATB
**Ecocardiograma:** ETT (triagem) → ETE (se ETT negativo mas alta suspeita)
**PET-CT com FDG:** útil em prótese
**Hemograma, PCR, VHS, função renal, EAS**` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Empírico (válvula nativa):** Oxacilina 2g IV 4/4h + Ceftriaxona 2g IV 12/12h
**Se MRSA:** Vancomicina 15-20mg/kg IV 12/12h
**Válvula protética:** Vancomicina + Gentamicina + Rifampicina
**Cirurgia urgente:** IC refratária, vegetação >10mm + embolia, abscesso, infecção não controlada
**Duração:** 4-6 semanas IV` }
    ]
  },
  {
    id: "fp-tuberculose-pulmonar",
    title: "Tuberculose Pulmonar",
    categoryId: "infectious",
    category: "infectious",
    tags: ["tuberculose", "TB", "BAAR", "RIPE", "Mantoux"],
    sections: [
,      { id: "intro", title: "Introdução", content: `TB é a doença infecciosa que mais mata no mundo — o Brasil está entre os 30 países de alta carga.` }
      { id: "def", title: "Definição", content: `Infecção por Mycobacterium tuberculosis, predominantemente pulmonar, transmitida por aerossóis. Doença de notificação compulsória.` }
      { id: "etiology", title: "Etiologia", content: `Mycobacterium tuberculosis (bacilo de Koch). Transmissão: aerossóis (tosse, espirro, fala). FR: HIV, imunossupressão, diabetes, desnutrição, confinamento, contato domiciliar.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Tosse ≥3 semanas (sintomático respiratório)
- Febre vespertina
- Sudorese noturna
- Perda ponderal
- Hemoptise (formas cavitárias)
- Astenia, inapetência` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Baciloscopia de escarro (BAAR):** 2 amostras (sensibilidade ~60%)
**Teste Rápido Molecular (TRM-TB/GeneXpert):** detecta M. tuberculosis E resistência à rifampicina — resultado em 2h — padrão-ouro inicial
**Cultura + TSA (teste de sensibilidade):** padrão-ouro para confirmação e MDR
**RX tórax:** infiltrado em ápices, cavitações, derrame pleural
**Prova tuberculínica (PPD):** para ILTB (infecção latente)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Esquema RIPE (6 meses):**
- **Fase intensiva (2 meses):** Rifampicina + Isoniazida + Pirazinamida + Etambutol (RIPE)
- **Fase de manutenção (4 meses):** Rifampicina + Isoniazida (RI)

**Doses (adulto):**
- R: 10mg/kg/dia (máx 600mg)
- I: 5mg/kg/dia (máx 300mg) + Piridoxina 50mg/dia
- P: 25mg/kg/dia (máx 2g)
- E: 15mg/kg/dia (máx 1200mg)

**TDO (Tratamento Diretamente Observado):** recomendado
**Efeitos adversos:** hepatotoxicidade (RIP), neuropatia (I), hiperuricemia (P), neurite óptica (E)
**TB-MDR:** esquema individualizado com fluoroquinolona, aminoglicosídeo, linezolida` }
    ]
  },
  {
    id: "fp-hiv-diagnostico-manejo",
    title: "HIV/AIDS — Diagnóstico e Manejo Inicial",
    categoryId: "infectious",
    category: "infectious",
    tags: ["HIV", "AIDS", "TARV", "CD4", "carga viral"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Diagnóstico precoce e TARV imediata transformaram HIV em doença crônica controlável.` }
      { id: "def", title: "Definição", content: `Infecção pelo vírus da imunodeficiência humana. AIDS: CD4 <200 células/mm³ ou doença definidora de AIDS.` }
      { id: "etiology", title: "Etiologia", content: `HIV-1 (predominante). Transmissão: sexual (principal), vertical, percutânea (agulhas), transfusional. Não se transmite por contato casual.` }
      { id: "clinical", title: "Apresentação Clínica", content: `**Síndrome retroviral aguda (2-4 semanas):** febre, faringite, linfadenopatia, rash, úlceras orais (semelhante a mononucleose)
**Fase latente:** assintomático por anos
**AIDS:** infecções oportunistas — pneumocistose (CD4 <200), toxoplasmose (CD4 <100), TB, candidíase, CMV, criptococose` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Teste rápido (TR):** resultado em 30min — 2 TRs de fabricantes diferentes
**ELISA 4ª geração:** detecta antígeno p24 + anticorpos (janela ~15 dias)
**Confirmatório:** Western Blot ou 2º teste rápido
**Carga viral (CV):** quantifica RNA viral
**CD4:** estadiamento imunológico
**Genotipagem:** antes de iniciar TARV (resistência primária)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**TARV para TODOS** (independente de CD4) — iniciar o mais precoce possível
**Esquema preferencial (Brasil 2024):**
- **Dolutegravir 50mg** + Tenofovir 300mg + Lamivudina 300mg (TDF/3TC/DTG)
- Dose única diária

**Profilaxias:**
- CD4 <200: Cotrimoxazol (pneumocistose + toxoplasmose)
- CD4 <100 + IgG toxo+: Cotrimoxazol
- CD4 <50: Azitromicina (MAC)
- ILTB: Isoniazida 270 doses

**PrEP (Profilaxia pré-exposição):** TDF/FTC para populações de risco
**PEP (pós-exposição):** TDF/3TC/DTG por 28 dias (iniciar em <72h)` }
    ]
  },
  {
    id: "fp-infeccao-pele-partes-moles",
    title: "Infecções de Pele e Partes Moles",
    categoryId: "infectious",
    category: "infectious",
    tags: ["celulite", "erisipela", "abscesso", "MSSA", "MRSA"],
    sections: [
,      { id: "intro", title: "Introdução", content: `IPPMs são motivo frequente de atendimento — variam de celulite simples a fasciíte necrosante.` }
      { id: "def", title: "Definição", content: `Espectro: impetigo → celulite/erisipela → abscesso → fasciíte necrosante → mionecrose (gangrena gasosa). Classificação: purulenta (MRSA-CA) vs não purulenta.` }
      { id: "etiology", title: "Etiologia", content: `**Não purulenta:** Streptococcus pyogenes (erisipela), S. aureus
**Purulenta/abscesso:** S. aureus (MRSA-CA em aumento)
**Necrosante:** polimicrobiana (tipo I), S. pyogenes (tipo II), Clostridium (gangrena gasosa)` }
      { id: "clinical", title: "Apresentação Clínica", content: `**Erisipela:** eritema bem delimitado, bordas elevadas, superficial (derme superior), febre
**Celulite:** eritema mal delimitado, profundo (derme + subcutâneo), dor, calor
**Abscesso:** flutuação, drenagem purulenta
**Sinais de alarme:** crepitação, necrose, dor desproporcional, SIRS → fasciíte necrosante` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Clínico** na maioria dos casos
**Hemoculturas:** se SIRS, imunossupressão, falha terapêutica
**USG de partes moles:** abscesso não evidente, guiar drenagem
**TC/RMC:** se suspeita de fasciíte necrosante
**LRINEC score ≥6:** sugere necrosante` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Erisipela/celulite não purulenta:**
- Leve: Cefalexina 500mg VO 6/6h por 7-10 dias
- Moderada: Ceftriaxona 1g IV/dia
- Alergia a penicilina: Clindamicina 300mg VO 8/8h

**Celulite purulenta/abscesso:**
- Drenagem (tratamento principal do abscesso)
- ATB se: SIRS, imunossupressão, múltiplos abscessos
- Cobertura MRSA: Cotrimoxazol 800/160 12/12h ou Clindamicina 300mg 8/8h

**Fasciíte necrosante:** desbridamento cirúrgico + Meropenem + Vancomicina + Clindamicina` }
    ]
  },
  {
    id: "fp-infeccao-urinaria",
    title: "Infecção do Trato Urinário",
    categoryId: "infectious",
    category: "infectious",
    tags: ["ITU", "cistite", "pielonefrite", "urossepse", "E. coli"],
    sections: [
,      { id: "intro", title: "Introdução", content: `ITU é uma das infecções mais comuns — importante distinguir cistite simples de pielonefrite/urossepse.` }
      { id: "def", title: "Definição", content: `Infecção do trato urinário inferior (cistite) ou superior (pielonefrite). Complicada: associada a alteração anatômica/funcional, homens, gestantes, imunossuprimidos, cateter.` }
      { id: "etiology", title: "Etiologia", content: `**E. coli** (75-90%), Klebsiella, Proteus, Enterococcus, Staphylococcus saprophyticus (mulheres jovens). MDR em ambiente hospitalar.` }
      { id: "clinical", title: "Apresentação Clínica", content: `**Cistite:** disúria, polaciúria, urgência, dor suprapúbica, sem febre
**Pielonefrite:** febre >38°C, dor lombar (sinal de Giordano), náusea, vômito, calafrios
**Urossepse:** sinais de sepse (taquicardia, hipotensão, lactato elevado)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**EAS + cultura de urina:** >100.000 UFC/mL (sintomático: >1.000 por cateter)
**Cistite não complicada em mulher:** diagnóstico clínico pode dispensar exames
**Hemograma, PCR, hemoculturas:** se pielonefrite/sepse
**USG/TC:** obstrução, abscesso, cálculo — indicado se: febre persistente >72h, sepse, suspeita de complicação` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Cistite não complicada (mulher):**
- Fosfomicina 3g dose única VO (1ª linha)
- Nitrofurantoína 100mg 6/6h por 5 dias
- Cotrimoxazol 800/160 12/12h por 3 dias

**Pielonefrite não complicada:**
- Ambulatorial: Ciprofloxacino 500mg 12/12h VO por 7 dias
- Hospitalar: Ceftriaxona 1g IV/dia ou Ciprofloxacino IV

**Pielonefrite complicada/urossepse:**
- Piperacilina-tazobactam 4.5g IV 6/6h ou Meropenem 1g IV 8/8h
- Drenagem urgente se obstrução (nefrostomia/cateter duplo J)
- Duração: 10-14 dias` }
    ]
  }
];
