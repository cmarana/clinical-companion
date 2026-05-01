import type { MedicationImportItem } from "./medicationsData";

/**
 * Lote 32B — 40 medicamentos complementares
 * Foco: classes essenciais (oncologia clássica adicional, antiarrítmicos, IBPs, opioides, antipsicóticos, broncodilatadores).
 */
export const medicationsLote32B: MedicationImportItem[] = [
  {
    "id": "onc-vincristina",
    "nome": "Vincristina",
    "principioAtivo": "Vincristina",
    "classe": "Alcaloide vinca",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "LLA, linfomas, neuroblastoma",
    "posologiaAdulto": "1.4 mg/m² (máx 2 mg) IV semanal",
    "contraindicacoes": "Charcot-Marie-Tooth",
    "efeitosAdversos": "Neuropatia, íleo, SIADH",
    "gestacao": "Cat. D",
    "mecanismo": "Despolimeriza microtúbulos",
    "tags": [
      "quimio",
      "vesicante"
    ]
  },
  {
    "id": "onc-vinblastina",
    "nome": "Vinblastina",
    "principioAtivo": "Vinblastina",
    "classe": "Alcaloide vinca",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Hodgkin, testículo",
    "posologiaAdulto": "6 mg/m² IV semanal",
    "contraindicacoes": "Mielossupressão grave",
    "efeitosAdversos": "Mielossupressão, neuropatia",
    "gestacao": "Cat. D",
    "mecanismo": "Despolimeriza microtúbulos",
    "tags": [
      "quimio",
      "vesicante"
    ]
  },
  {
    "id": "onc-vinorelbina",
    "nome": "Vinorelbina",
    "principioAtivo": "Vinorelbina",
    "classe": "Vinca semissintético",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Pulmão, mama",
    "posologiaAdulto": "25-30 mg/m² IV semanal",
    "contraindicacoes": "Mielossupressão",
    "efeitosAdversos": "Neutropenia, flebite",
    "gestacao": "Cat. D",
    "mecanismo": "Microtúbulos",
    "tags": [
      "quimio"
    ]
  },
  {
    "id": "onc-bleomicina",
    "nome": "Bleomicina",
    "principioAtivo": "Bleomicina",
    "classe": "Antitumoral peptídico",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV/IM",
    "via": "IV/IM/SC",
    "indicacoes": "Hodgkin (ABVD), testículo",
    "posologiaAdulto": "10-20 U/m² IV/IM",
    "contraindicacoes": "Pneumopatia prévia",
    "efeitosAdversos": "Pneumonite/fibrose pulmonar, febre, dermatite",
    "gestacao": "Cat. D",
    "mecanismo": "Quebra DNA por radicais livres",
    "tags": [
      "quimio",
      "pulmonar"
    ]
  },
  {
    "id": "onc-melfalano",
    "nome": "Melfalano",
    "principioAtivo": "Melfalano",
    "classe": "Alquilante",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Mieloma múltiplo, transplante TCTH",
    "posologiaAdulto": "Variável (alto-dose 200 mg/m² IV pré-TCTH)",
    "contraindicacoes": "Mielossupressão grave",
    "efeitosAdversos": "Mielossupressão, mucosite, leucemia secundária",
    "gestacao": "Cat. D",
    "mecanismo": "Alquilante",
    "tags": [
      "quimio"
    ]
  },
  {
    "id": "onc-bortezomibe",
    "nome": "Bortezomibe",
    "principioAtivo": "Bortezomib",
    "classe": "Inibidor proteassoma",
    "categoria": "Onco-hemato",
    "formaFarmaceutica": "Frasco SC/IV",
    "via": "SC/IV",
    "indicacoes": "Mieloma múltiplo, linfoma manto",
    "posologiaAdulto": "1.3 mg/m² SC/IV dias 1,4,8,11",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Neuropatia, trombocitopenia, herpes zoster",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe proteassoma 26S",
    "tags": [
      "onco-hemato"
    ]
  },
  {
    "id": "onc-lenalidomida",
    "nome": "Lenalidomida",
    "principioAtivo": "Lenalidomida",
    "classe": "Imunomodulador",
    "categoria": "Onco-hemato",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Mieloma, SMD",
    "posologiaAdulto": "10-25 mg/dia x 21 dias",
    "contraindicacoes": "Gestação (Cat X)",
    "efeitosAdversos": "TEV, mielossupressão, teratogenicidade",
    "gestacao": "Cat. X",
    "mecanismo": "IMID",
    "tags": [
      "teratogenico",
      "controlado"
    ]
  },
  {
    "id": "onc-daratumumab",
    "nome": "Daratumumabe",
    "principioAtivo": "Daratumumab",
    "classe": "Anti-CD38",
    "categoria": "Onco-hemato",
    "formaFarmaceutica": "SC/IV",
    "via": "SC/IV",
    "indicacoes": "Mieloma",
    "posologiaAdulto": "1800 mg SC semanal",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação infusional, infecções, citopenias",
    "gestacao": "Cat. NA",
    "mecanismo": "Anti-CD38",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "onc-blinatumomab",
    "nome": "Blinatumomabe",
    "principioAtivo": "Blinatumomab",
    "classe": "BiTE CD19xCD3",
    "categoria": "Onco-hemato",
    "formaFarmaceutica": "Infusão IV contínua",
    "via": "IV",
    "indicacoes": "LLA Ph- recidivada",
    "posologiaAdulto": "9-28 mcg/dia IV contínuo",
    "contraindicacoes": "Doença SNC ativa",
    "efeitosAdversos": "SLC, neurotoxicidade",
    "gestacao": "Cat. C",
    "mecanismo": "BiTE",
    "tags": [
      "bite"
    ]
  },
  {
    "id": "onc-tisagenle",
    "nome": "Tisagenlecleucel (CAR-T)",
    "principioAtivo": "Tisagenlecleucel",
    "classe": "Terapia celular CAR-T anti-CD19",
    "categoria": "Onco-hemato",
    "formaFarmaceutica": "IV",
    "via": "IV",
    "indicacoes": "LLA pediátrica, LDGCB",
    "posologiaAdulto": "Dose única ponderal",
    "contraindicacoes": "Infecção ativa, GVHD",
    "efeitosAdversos": "SLC grave, neurotoxicidade ICANS",
    "gestacao": "Cat. NA",
    "mecanismo": "CAR-T",
    "tags": [
      "celular"
    ]
  },
  {
    "id": "onc-axicabtag",
    "nome": "Axicabtagene Ciloleucel",
    "principioAtivo": "Axicabtagene",
    "classe": "CAR-T anti-CD19",
    "categoria": "Onco-hemato",
    "formaFarmaceutica": "IV",
    "via": "IV",
    "indicacoes": "LDGCB",
    "posologiaAdulto": "Dose única",
    "contraindicacoes": "Infecção ativa",
    "efeitosAdversos": "SLC, ICANS",
    "gestacao": "Cat. NA",
    "mecanismo": "CAR-T",
    "tags": [
      "celular"
    ]
  },
  {
    "id": "card-digoxina",
    "nome": "Digoxina",
    "principioAtivo": "Digoxina",
    "classe": "Glicosídeo cardíaco",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido / Ampola",
    "via": "VO/IV",
    "indicacoes": "FA com RVR, IC sistólica",
    "posologiaAdulto": "0.125-0.25 mg/dia VO",
    "contraindicacoes": "BAV 2-3°, TV, hipocalemia",
    "efeitosAdversos": "Toxicidade (visão, arritmia), náuseas",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe Na/K-ATPase",
    "tags": [
      "cardio",
      "vigilancia"
    ]
  },
  {
    "id": "card-amiodarona",
    "nome": "Amiodarona",
    "principioAtivo": "Amiodarona",
    "classe": "Antiarrítmico classe III",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido / Ampola",
    "via": "VO/IV",
    "indicacoes": "FA, TV, FV, manutenção pós-PCR",
    "posologiaAdulto": "Ataque 150 mg IV em 10 min, depois 1 mg/min",
    "contraindicacoes": "BAV 2-3°, gestação, tireoidopatia",
    "efeitosAdversos": "Tireoidopatia, fibrose pulmonar, hepatotoxicidade, depósito corneano",
    "gestacao": "Cat. D",
    "mecanismo": "Bloqueia K, Na, Ca",
    "tags": [
      "antiarritmico",
      "toxico"
    ]
  },
  {
    "id": "card-ivabradina",
    "nome": "Ivabradina",
    "principioAtivo": "Ivabradina",
    "classe": "Inibidor If nó sinusal",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "ICFEr com FC>70 sinusal",
    "posologiaAdulto": "5-7.5 mg 12/12h",
    "contraindicacoes": "FA, BAV 2-3°",
    "efeitosAdversos": "Bradicardia, fosfenos, FA",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe corrente If",
    "tags": [
      "ic"
    ]
  },
  {
    "id": "card-sacubitril-val",
    "nome": "Sacubitril/Valsartana",
    "principioAtivo": "Sacubitril+Valsartana",
    "classe": "ARNI",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "ICFEr (substitui IECA/BRA)",
    "posologiaAdulto": "49/51 a 97/103 mg 12/12h",
    "contraindicacoes": "Angioedema prévio, gestação",
    "efeitosAdversos": "Hipotensão, hipercalemia, IRA",
    "gestacao": "Cat. D",
    "mecanismo": "NEP-i + ARB",
    "tags": [
      "ic",
      "arni"
    ]
  },
  {
    "id": "resp-tiotropio",
    "nome": "Tiotrópio",
    "principioAtivo": "Tiotrópio",
    "classe": "Anticolinérgico LAMA",
    "categoria": "Pneumologia",
    "formaFarmaceutica": "Inalador",
    "via": "Inalatório",
    "indicacoes": "DPOC, asma",
    "posologiaAdulto": "18 mcg/dia inalatório",
    "contraindicacoes": "Glaucoma fechado, retenção urinária",
    "efeitosAdversos": "Boca seca, retenção urinária",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-M3",
    "tags": [
      "dpoc"
    ]
  },
  {
    "id": "resp-formoterol",
    "nome": "Formoterol",
    "principioAtivo": "Formoterol",
    "classe": "β2-agonista LABA",
    "categoria": "Pneumologia",
    "formaFarmaceutica": "Inalador",
    "via": "Inalatório",
    "indicacoes": "Asma, DPOC (com CI)",
    "posologiaAdulto": "12 mcg 12/12h",
    "contraindicacoes": "Não usar isolado em asma",
    "efeitosAdversos": "Tremor, taquicardia",
    "gestacao": "Cat. C",
    "mecanismo": "β2 longo",
    "tags": [
      "dpoc",
      "asma"
    ]
  },
  {
    "id": "resp-salmeterol",
    "nome": "Salmeterol",
    "principioAtivo": "Salmeterol",
    "classe": "LABA",
    "categoria": "Pneumologia",
    "formaFarmaceutica": "Inalador",
    "via": "Inalatório",
    "indicacoes": "Asma (com CI), DPOC",
    "posologiaAdulto": "50 mcg 12/12h",
    "contraindicacoes": "Asma sem CI",
    "efeitosAdversos": "Tremor, taquicardia",
    "gestacao": "Cat. C",
    "mecanismo": "β2 longo",
    "tags": [
      "asma",
      "dpoc"
    ]
  },
  {
    "id": "resp-fluticasona",
    "nome": "Fluticasona",
    "principioAtivo": "Fluticasona propionato",
    "classe": "Corticoide inalatório",
    "categoria": "Pneumologia",
    "formaFarmaceutica": "Inalador / Spray nasal",
    "via": "Inalatório/nasal",
    "indicacoes": "Asma, rinite alérgica",
    "posologiaAdulto": "100-500 mcg 12/12h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Candidíase oral, disfonia",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-inflamatório esteroide",
    "tags": [
      "asma"
    ]
  },
  {
    "id": "resp-budesonida",
    "nome": "Budesonida",
    "principioAtivo": "Budesonida",
    "classe": "Corticoide inalatório",
    "categoria": "Pneumologia",
    "formaFarmaceutica": "Inalador / Nebulização",
    "via": "Inalatório",
    "indicacoes": "Asma, DPOC, crupe",
    "posologiaAdulto": "200-800 mcg 12/12h | nebulização 0.5-1 mg",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Candidíase oral, disfonia",
    "gestacao": "Cat. B",
    "mecanismo": "Esteroide",
    "tags": [
      "asma",
      "crupe"
    ]
  },
  {
    "id": "gas-omeprazol",
    "nome": "Omeprazol",
    "principioAtivo": "Omeprazol",
    "classe": "IBP",
    "categoria": "Gastroenterologia",
    "formaFarmaceutica": "Cápsula / IV",
    "via": "VO/IV",
    "indicacoes": "DRGE, úlcera, profilaxia, HDA",
    "posologiaAdulto": "20-40 mg/dia VO ou 80 mg ataque IV + 8 mg/h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Hipomagnesemia, fratura, C. difficile, B12",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe H+/K+-ATPase",
    "tags": [
      "ibp",
      "hda"
    ]
  },
  {
    "id": "gas-esomeprazol",
    "nome": "Esomeprazol",
    "principioAtivo": "Esomeprazol",
    "classe": "IBP",
    "categoria": "Gastro",
    "formaFarmaceutica": "Cápsula / IV",
    "via": "VO/IV",
    "indicacoes": "DRGE, úlcera",
    "posologiaAdulto": "20-40 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Idem omeprazol",
    "gestacao": "Cat. B",
    "mecanismo": "IBP",
    "tags": [
      "ibp"
    ]
  },
  {
    "id": "gas-pantoprazol",
    "nome": "Pantoprazol",
    "principioAtivo": "Pantoprazol",
    "classe": "IBP",
    "categoria": "Gastro",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "DRGE, HDA",
    "posologiaAdulto": "40-80 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Hipomag, fratura",
    "gestacao": "Cat. B",
    "mecanismo": "IBP",
    "tags": [
      "ibp"
    ]
  },
  {
    "id": "gas-metoclopramida",
    "nome": "Metoclopramida",
    "principioAtivo": "Metoclopramida",
    "classe": "Procinético/antiemético",
    "categoria": "Gastro",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Náuseas, gastroparesia, refluxo",
    "posologiaAdulto": "10 mg 8/8h (máx 5 dias)",
    "contraindicacoes": "Feocromocitoma, obstrução GI",
    "efeitosAdversos": "Distonia, parkinsonismo (idoso), discinesia tardia",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-D2 + 5HT4 agonista",
    "tags": [
      "antiemetico"
    ]
  },
  {
    "id": "gas-ondansetrona",
    "nome": "Ondansetrona",
    "principioAtivo": "Ondansetrona",
    "classe": "Antiemético 5-HT3",
    "categoria": "Gastro/Onco",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Náuseas (quimio, gestação, pós-op)",
    "posologiaAdulto": "4-8 mg 8/8h IV",
    "contraindicacoes": "QT longo grave",
    "efeitosAdversos": "Cefaleia, constipação, QT longo",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-5HT3",
    "tags": [
      "antiemetico"
    ]
  },
  {
    "id": "gas-bromoprida",
    "nome": "Bromoprida",
    "principioAtivo": "Bromoprida",
    "classe": "Procinético",
    "categoria": "Gastro",
    "formaFarmaceutica": "Comprimido / Ampola",
    "via": "VO/IV",
    "indicacoes": "Náuseas, refluxo",
    "posologiaAdulto": "10 mg 8/8h",
    "contraindicacoes": "Obstrução GI",
    "efeitosAdversos": "Distonia",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-D2",
    "tags": [
      "antiemetico"
    ]
  },
  {
    "id": "dor-tramadol",
    "nome": "Tramadol",
    "principioAtivo": "Tramadol",
    "classe": "Opioide fraco + IRSN",
    "categoria": "Dor",
    "formaFarmaceutica": "Cápsula / Ampola",
    "via": "VO/IV",
    "indicacoes": "Dor moderada",
    "posologiaAdulto": "50-100 mg 6/6h (máx 400 mg)",
    "contraindicacoes": "Convulsão, IMAO",
    "efeitosAdversos": "Náuseas, sedação, convulsão, sd serotoninérgica",
    "gestacao": "Cat. C",
    "mecanismo": "μ-opioide + recapt mono",
    "tags": [
      "opioide"
    ]
  },
  {
    "id": "dor-codeina",
    "nome": "Codeína",
    "principioAtivo": "Codeína",
    "classe": "Opioide fraco",
    "categoria": "Dor",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Dor leve-moderada, antitussígeno",
    "posologiaAdulto": "30-60 mg 6/6h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Constipação, sedação",
    "gestacao": "Cat. C",
    "mecanismo": "Pró-droga morfina",
    "tags": [
      "opioide"
    ]
  },
  {
    "id": "dor-morfina",
    "nome": "Morfina",
    "principioAtivo": "Morfina",
    "classe": "Opioide forte",
    "categoria": "Dor/UTI",
    "formaFarmaceutica": "Comprimido / Ampola",
    "via": "VO/IV/SC",
    "indicacoes": "Dor intensa, EAP, sedação",
    "posologiaAdulto": "2-10 mg IV / 10-30 mg VO 4/4h",
    "contraindicacoes": "Depressão respiratória",
    "efeitosAdversos": "Depressão respiratória, constipação, prurido",
    "gestacao": "Cat. C",
    "mecanismo": "μ-opioide",
    "tags": [
      "opioide",
      "controlado"
    ]
  },
  {
    "id": "dor-fentanil",
    "nome": "Fentanil",
    "principioAtivo": "Fentanil",
    "classe": "Opioide forte sintético",
    "categoria": "Dor/Anestesia",
    "formaFarmaceutica": "Ampola / Adesivo",
    "via": "IV/transdérmico",
    "indicacoes": "Dor intensa, sedação UTI",
    "posologiaAdulto": "25-100 mcg IV bolus",
    "contraindicacoes": "Depressão respiratória",
    "efeitosAdversos": "Rigidez torácica (bolus rápido), depressão respiratória",
    "gestacao": "Cat. C",
    "mecanismo": "μ-opioide",
    "tags": [
      "opioide",
      "controlado"
    ]
  },
  {
    "id": "dor-metadona",
    "nome": "Metadona",
    "principioAtivo": "Metadona",
    "classe": "Opioide longa duração + NMDA",
    "categoria": "Dor/Dependência",
    "formaFarmaceutica": "Comprimido / Ampola",
    "via": "VO/IV/SC",
    "indicacoes": "Dor crônica, manutenção em dependência",
    "posologiaAdulto": "Variável",
    "contraindicacoes": "QT longo grave",
    "efeitosAdversos": "QT longo, depressão respiratória",
    "gestacao": "Cat. C",
    "mecanismo": "μ-opioide + anti-NMDA",
    "tags": [
      "opioide",
      "controlado",
      "qt"
    ]
  },
  {
    "id": "dor-oxicodona",
    "nome": "Oxicodona",
    "principioAtivo": "Oxicodona",
    "classe": "Opioide forte",
    "categoria": "Dor",
    "formaFarmaceutica": "Comprimido LP",
    "via": "VO",
    "indicacoes": "Dor moderada-intensa crônica",
    "posologiaAdulto": "10-80 mg 12/12h LP",
    "contraindicacoes": "Depressão respiratória",
    "efeitosAdversos": "Constipação, sedação",
    "gestacao": "Cat. B",
    "mecanismo": "μ-opioide",
    "tags": [
      "opioide",
      "controlado"
    ]
  },
  {
    "id": "psi-clozapina",
    "nome": "Clozapina",
    "principioAtivo": "Clozapina",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Esquizofrenia refratária",
    "posologiaAdulto": "Iniciar 12.5 mg/dia, escalonar até 300-600 mg",
    "contraindicacoes": "Agranulocitose prévia",
    "efeitosAdversos": "Agranulocitose (monitorar), miocardite, sialorreia, convulsão",
    "gestacao": "Cat. B",
    "mecanismo": "D4/5HT2A",
    "tags": [
      "antipsicotico",
      "agranulocitose"
    ]
  },
  {
    "id": "psi-haloperidol",
    "nome": "Haloperidol",
    "principioAtivo": "Haloperidol",
    "classe": "Antipsicótico típico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido / Ampola",
    "via": "VO/IM/IV",
    "indicacoes": "Psicose, delirium, agitação",
    "posologiaAdulto": "2-10 mg IM/VO",
    "contraindicacoes": "Parkinson, QT longo",
    "efeitosAdversos": "SEP, SNM, QT longo",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-D2",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-olanzapina",
    "nome": "Olanzapina",
    "principioAtivo": "Olanzapina",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido / IM",
    "via": "VO/IM",
    "indicacoes": "Esquizofrenia, mania, agitação",
    "posologiaAdulto": "5-20 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Ganho peso, sd metabólica, sedação",
    "gestacao": "Cat. C",
    "mecanismo": "D2/5HT2A",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-quetiapina",
    "nome": "Quetiapina",
    "principioAtivo": "Quetiapina",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Esquizofrenia, bipolar, depressão (adjuvante)",
    "posologiaAdulto": "25-800 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Sedação, ganho peso, hipotensão",
    "gestacao": "Cat. C",
    "mecanismo": "D2/5HT2A",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-risperidona",
    "nome": "Risperidona",
    "principioAtivo": "Risperidona",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido / Solução / IM LAR",
    "via": "VO/IM",
    "indicacoes": "Esquizofrenia, mania, agressão",
    "posologiaAdulto": "1-6 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "SEP, hiperprolactinemia, ganho peso",
    "gestacao": "Cat. C",
    "mecanismo": "D2/5HT2A",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-aripiprazol",
    "nome": "Aripiprazol",
    "principioAtivo": "Aripiprazol",
    "classe": "Antipsicótico atípico (D2 parcial)",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido / IM",
    "via": "VO/IM",
    "indicacoes": "Esquizofrenia, bipolar",
    "posologiaAdulto": "10-30 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Acatisia, insônia",
    "gestacao": "Cat. C",
    "mecanismo": "D2 parcial",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-litio",
    "nome": "Carbonato de Lítio",
    "principioAtivo": "Lítio",
    "classe": "Estabilizador humor",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Bipolar",
    "posologiaAdulto": "600-1200 mg/dia (níveis 0.6-1.2)",
    "contraindicacoes": "IRC, gestação relativa",
    "efeitosAdversos": "Tremor, hipotireoidismo, IRA, intoxicação",
    "gestacao": "Cat. D",
    "mecanismo": "Modula segundo mensageiro",
    "tags": [
      "estabilizador"
    ]
  },
  {
    "id": "psi-valproato",
    "nome": "Ácido Valproico",
    "principioAtivo": "Valproato sódio",
    "classe": "Antiepiléptico/estabilizador",
    "categoria": "Neuro/Psi",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Epilepsia, bipolar, enxaqueca",
    "posologiaAdulto": "500-2000 mg/dia",
    "contraindicacoes": "Hepatopatia, gestação (teratogênico)",
    "efeitosAdversos": "Hepatotoxicidade, pancreatite, teratogenicidade, hiperamonemia",
    "gestacao": "Cat. X",
    "mecanismo": "GABA + bloqueio Na",
    "tags": [
      "antiepileptico",
      "teratogenico"
    ]
  }
];
