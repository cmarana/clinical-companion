import type { FullProtocol } from "./types";

export const metabolicFullProtocols6: FullProtocol[] = [
  {
    id: "fp-hipocalcemia-aguda",
    title: "Hipocalcemia Aguda",
    categoryId: "metabolic",
    category: "metabolic",
    tags: ["hipocalcemia", "cálcio", "tetania", "Chvostek", "Trousseau"],
    sections: [
      { id: "intro", title: "Introdução", content: `Hipocalcemia aguda pode causar tetania, convulsões e arritmias — requer correção IV imediata.` },
      { id: "def", title: "Definição", content: `Cálcio total <8.5mg/dL (ou iônico <4.5mg/dL), ajustado para albumina. Sintomática quando iônico <4.0mg/dL.` },
      { id: "etiology", title: "Etiologia", content: `**Pós-tireoidectomia/paratireoidectomia** (mais comum em emergência), hipoparatireoidismo, deficiência de vitamina D, hipomagnesemia, pancreatite, sepse, transfusão maciça (citrato), síndrome do osso faminto.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- **Tetania:** espasmo carpopedal, Trousseau (insuflação do manguito → espasmo da mão), Chvostek (percussão facial → contração)
- Parestesias perioais e extremidades
- Cãibras
- Laringoespasmo
- Convulsões
- Prolongamento QT → arritmias` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Cálcio iônico** (padrão-ouro) ou total corrigido: Ca + 0.8 × (4 - albumina)
**ECG:** QT prolongado
**PTH, fósforo, magnésio, vitamina D, função renal**
**Fósforo elevado + PTH baixo:** hipoparatireoidismo
**Fósforo baixo + PTH alto:** deficiência de vitamina D` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Sintomática/grave:**
- Gluconato de cálcio 10% 10-20mL (1-2g) IV em 10-20min
- Seguido de infusão contínua: 50-100mL de gluconato de cálcio 10% em 1L SF 0.9% em 24h
- **Corrigir hipomagnesemia** antes (Mg <1.5 impede correção do Ca)
- MgSO₄ 50% 2g IV em 15min se Mg baixo

**Manutenção:**
- Carbonato de cálcio 500-1000mg 8/8h VO
- Calcitriol 0.25-0.5mcg 12/12h VO
- Colecalciferol se deficiência de vitamina D` }
    ]
  },\n  {
    id: "fp-hipercalcemia",
    title: "Hipercalcemia",
    categoryId: "metabolic",
    category: "metabolic",
    tags: ["hipercalcemia", "cálcio", "hidratação", "bifosfonato", "PTH"],
    sections: [
      { id: "intro", title: "Introdução", content: `Hipercalcemia pode ser emergência quando Ca >14mg/dL ou sintomática — principais causas: HPT primário e neoplasia.` },
      { id: "def", title: "Definição", content: `Cálcio total >10.5mg/dL (ou iônico >5.2mg/dL). Leve: 10.5-12. Moderada: 12-14. Grave/crise: >14mg/dL.` },
      { id: "etiology", title: "Etiologia", content: `**Ambulatorial:** Hiperparatireoidismo primário (adenoma) — mais comum
**Hospitalar:** Neoplasia (mais comum) — metástases ósseas, PTHrP, mieloma
**Outras:** sarcoidose, imobilização, intoxicação por vitamina D, tiazídicos` },
      { id: "clinical", title: "Apresentação Clínica", content: `- **Mnemônico "stones, bones, groans, moans":**
- Nefrolitíase, nefrocalcinose
- Dor óssea, fraturas
- Dor abdominal, constipação, náusea
- Fraqueza, fadiga, confusão, coma
- Poliúria, polidipsia
- QT curto, arritmias` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Ca total + albumina (corrigir) ou Ca iônico**
**PTH:**
- PTH elevado: HPT primário, lítio, HPT terciário
- PTH suprimido: neoplasia, sarcoidose, vitamina D
**PTHrP:** se suspeita de neoplasia
**Vitamina D, função renal, fósforo, fosfatase alcalina**
**Eletroforese de proteínas:** excluir mieloma` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Crise hipercalcêmica (Ca >14 ou sintomática):**
1. **Hidratação agressiva:** SF 0.9% 200-300mL/h (3-6L/dia) — alvo diurese 200mL/h
2. **Ácido zoledrônico 4mg IV em 15min** ou **Pamidronato 60-90mg IV em 2-4h** (efeito em 2-4 dias)
3. **Calcitonina 4UI/kg SC/IM 12/12h** (efeito rápido mas transitório — taquifilaxia em 48h)
4. **Denosumabe 120mg SC** se refratário ou IR
5. **Hemodiálise** se Ca >18 ou IC/IR que impede hidratação

**Furosemida:** SOMENTE se hipervolemia — NÃO usar rotineiramente` }
    ]
  },\n  {
    id: "fp-hipofosfatemia",
    title: "Hipofosfatemia Grave",
    categoryId: "metabolic",
    category: "metabolic",
    tags: ["hipofosfatemia", "fósforo", "realimentação", "fraqueza", "rabdomiólise"],
    sections: [
      { id: "intro", title: "Introdução", content: `Hipofosfatemia grave pode causar insuficiência respiratória, rabdomiólise e arritmias.` },
      { id: "def", title: "Definição", content: `Fósforo sérico <2.5mg/dL (leve), <2.0mg/dL (moderada), <1.0mg/dL (grave). Grave é potencialmente fatal.` },
      { id: "etiology", title: "Etiologia", content: `**Síndrome de realimentação** (mais importante em UTI), alcoolismo crônico, cetoacidose diabética em tratamento, uso de antiácidos, hiperparatireoidismo, deficiência de vitamina D.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Fraqueza muscular (pode causar falha de desmame do ventilador)
- Rabdomiólise
- Insuficiência respiratória (fraqueza diafragmática)
- Confusão, convulsões
- IC, arritmias
- Anemia hemolítica` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Fósforo sérico** (coletar antes de iniciar realimentação)
**CPK:** rabdomiólise
**Ca, Mg, K:** frequentemente associados
**Gasometria:** acidose se rabdomiólise
**Contexto:** pós-jejum prolongado, alcoolismo, CAD em tratamento` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Grave (<1.0mg/dL) ou sintomática:**
- Fosfato de potássio ou sódio IV: 0.08-0.16mmol/kg em 6h
- Monitorar Ca (pode precipitar hipocalcemia)
- Repetir até fósforo >2.0mg/dL

**Moderada assintomática:** reposição VO
- Fosfato neutro 250-500mg VO 6/6h

**Prevenção de síndrome de realimentação:**
- Iniciar dieta lentamente (10-20kcal/kg/dia)
- Repor fósforo, K, Mg antes
- Tiamina 200mg IV antes da glicose` }
    ]
  },\n  {
    id: "fp-hipermagnesemia",
    title: "Hipermagnesemia",
    categoryId: "metabolic",
    category: "metabolic",
    tags: ["hipermagnesemia", "magnésio", "hiporreflexia", "gluconato", "diálise"],
    sections: [
      { id: "intro", title: "Introdução", content: `Hipermagnesemia é rara mas potencialmente fatal — quase sempre iatrogênica.` },
      { id: "def", title: "Definição", content: `Magnésio sérico >2.5mg/dL. Significativa quando >4.0mg/dL. Grave/letal quando >12mg/dL.` },
      { id: "etiology", title: "Etiologia", content: `**Quase sempre iatrogênica:** sulfato de magnésio IV (eclâmpsia, tocolítico), antiácidos/laxantes com magnésio em pacientes com IR, suplementação excessiva.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- >4mg/dL: hiporreflexia, náusea
- >6mg/dL: hipotensão, bradicardia
- >8mg/dL: paralisia muscular, arreflexia
- >10mg/dL: paralisia respiratória
- >12mg/dL: PCR (assistolia)` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Magnésio sérico**
**Reflexos patelares:** 1ª manifestação de toxicidade — MONITORAR REFLEXOS em uso de MgSO₄
**ECG:** aumento de PR, QRS alargado, BAV, assistolia` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Suspender magnésio imediatamente**
**2. Gluconato de cálcio 10% 10-20mL IV lento** (antagonista direto do Mg na membrana celular)
**3. Hidratação + furosemida** (aumentar excreção renal)
**4. Hemodiálise** se IRA ou Mg muito alto (>8mg/dL)
**5. Suporte ventilatório** se paralisia respiratória` }
    ]
  },\n  {
    id: "fp-sindrome-lise-tumoral",
    title: "Síndrome de Lise Tumoral",
    categoryId: "metabolic",
    category: "metabolic",
    tags: ["lise tumoral", "hipercalemia", "hiperuricemia", "rasburicase", "quimioterapia"],
    sections: [
      { id: "intro", title: "Introdução", content: `SLT é emergência oncológica com distúrbios metabólicos graves 12-72h após início de quimioterapia.` },
      { id: "def", title: "Definição", content: `Liberação maciça de conteúdo intracelular após destruição tumoral, causando hipercalemia, hiperuricemia, hiperfosfatemia e hipocalcemia.` },
      { id: "etiology", title: "Etiologia", content: `Tumores de alto turnover celular: leucemias agudas (principal), linfomas agressivos (Burkitt), tumores com grande volume. Pode ocorrer espontaneamente.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Arritmias (hipercalemia)
- IRA oligúrica (cristais de ácido úrico/fosfato de cálcio)
- Convulsões (hipocalcemia)
- Náusea, vômito, diarreia
- Câimbras, tetania` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios de Cairo-Bishop:**
- **Laboratorial (≥2):** ácido úrico >8mg/dL, K >6mEq/L, fósforo >4.5mg/dL (adulto), Ca <7mg/dL
- **Clínica:** SLT laboratorial + IRA (Cr ≥1.5x), arritmia, convulsão, morte súbita
**Laboratório a cada 6-8h nas primeiras 72h**` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Prevenção:**
- Hiper-hidratação: SF 0.9% 3L/m²/dia (diurese >2mL/kg/h)
- Alopurinol 600-800mg/dia VO (risco baixo-intermediário)
- **Rasburicase 0.2mg/kg IV** (alto risco — converte ácido úrico em alantoína)

**Tratamento:**
- Hipercalemia: gluconato de cálcio + insulina + glicose + bicarbonato + diálise
- Hiperfosfatemia: hidratação + quelante de fósforo (sevelâmer) + diálise
- Hiperuricemia: rasburicase
- **Hemodiálise** se IRA, K refratário, sobrecarga hídrica` }
    ]
  }
];
