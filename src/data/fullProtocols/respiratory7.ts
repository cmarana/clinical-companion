import type { FullProtocol } from "./types";

export const respiratoryFullProtocols7: FullProtocol[] = [
  {
    id: "fp-tep-alto-risco",
    title: "TEP de Alto Risco (Maciço)",
    categoryId: "respiratory",
    category: "respiratory",
    tags: ["TEP", "maciço", "trombólise", "embolia", "choque"],
    sections: [
      { id: "intro", title: "Introdução", content: `TEP maciço é emergência com alta mortalidade (>50% se não tratado), requer decisão rápida.` },
      { id: "def", title: "Definição", content: `TEP com instabilidade hemodinâmica: PAS <90mmHg por >15min, necessidade de vasopressores, ou PCR.` },
      { id: "etiology", title: "Etiologia", content: `Trombos originados de veias profundas dos MMII que embolizam para artérias pulmonares, causando obstrução hemodinâmica significativa.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Hipotensão arterial sustentada / choque
- Dispneia súbita intensa
- Turgência jugular
- Sinais de cor pulmonale agudo
- PCR (AESP mais comum)` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Ecocardiograma à beira-leito:** dilatação de VD, hipocinesia de VD, sinal de McConnell, desvio septal para VE
**AngioTC:** quando estável o suficiente para transporte
**NÃO atrasar tratamento** para exames
**Critérios de Wells/Geneva** menos úteis em paciente instável` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Trombólise sistêmica:**
- Alteplase 100mg IV em 2h (ou 0.6mg/kg em 15min se PCR)
- Tenecteplase dose-ajustada por peso
- Anticoagulação com heparina NF concomitante

**Se contraindicação à trombólise:**
- Embolectomia cirúrgica
- Trombectomia percutânea por cateter
- ECMO como ponte

**Suporte:** Noradrenalina, volume cauteloso (250mL), O₂ alto fluxo` }
    ]
  },\n  {
    id: "fp-derrame-pleural",
    title: "Derrame Pleural",
    categoryId: "respiratory",
    category: "respiratory",
    tags: ["derrame pleural", "toracocentese", "Light", "empiema", "pleura"],
    sections: [
      { id: "intro", title: "Introdução", content: `Derrame pleural é achado comum com amplo diagnóstico diferencial — análise do líquido é chave.` },
      { id: "def", title: "Definição", content: `Acúmulo de líquido no espaço pleural. Classificado em transudato (sistêmico) ou exsudato (pleural/inflamatório) pelos critérios de Light.` },
      { id: "etiology", title: "Etiologia", content: `**Transudato:** IC (mais comum), cirrose, síndrome nefrótica, TEP
**Exsudato:** pneumonia/parapneumônico, neoplasia, TB, TEP, artrite reumatoide, LES, pancreatite` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dispneia (proporcional ao volume)
- Dor pleurítica (exsudato)
- Tosse seca
- MV abolido, macicez à percussão, FTV abolido
- Egofonia no limite superior` },
      { id: "diagnosis", title: "Diagnóstico", content: `**RX tórax:** obliteração de seio costofrênico (>200mL), opacidade com menisco
**USG pleural:** detecta >20mL, guia toracocentese
**TC tórax:** lesão pulmonar subjacente
**Toracocentese diagnóstica — Critérios de Light (exsudato se ≥1):**
1. Proteína líquido/soro >0.5
2. LDH líquido/soro >0.6
3. LDH líquido >2/3 do limite superior sérico
**Análise:** pH, glicose, celularidade, citologia, ADA (TB), cultura` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Transudato:** tratar causa base (diuréticos na IC)
**Exsudato — Parapneumônico:**
- Simples: ATB
- Complicado (pH <7.2, glicose <40, LDH >1000): drenagem + ATB
- Empiema: drenagem + ATB ± fibrinolíticos intrapleurais
**Neoplásico:** toracocentese de alívio, pleurodese se recorrente
**TB pleural:** RIPE por 6 meses` }
    ]
  },\n  {
    id: "fp-pneumonia-nosocomial",
    title: "Pneumonia Nosocomial / PAV",
    categoryId: "respiratory",
    category: "respiratory",
    tags: ["pneumonia nosocomial", "PAV", "hospitalar", "ventilador", "MDR"],
    sections: [
      { id: "intro", title: "Introdução", content: `Pneumonia nosocomial/PAV é principal infecção hospitalar, com alta mortalidade (20-50%).` },
      { id: "def", title: "Definição", content: `Pneumonia que se desenvolve ≥48h após admissão (nosocomial) ou ≥48h após IOT (associada à ventilação mecânica — PAV).` },
      { id: "etiology", title: "Etiologia", content: `**Agentes:** S. aureus (MSSA/MRSA), Pseudomonas, Acinetobacter, Klebsiella (KPC), Enterobacter. Flora varia por instituição.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Febre nova ou piora
- Secreção traqueal purulenta
- Piora da oxigenação (P/F)
- Leucocitose ou leucopenia
- Infiltrado novo/progressivo na imagem` },
      { id: "diagnosis", title: "Diagnóstico", content: `**CPIS (Clinical Pulmonary Infection Score):** auxilia, mas não substitui julgamento clínico
**Cultura quantitativa:** aspirado traqueal (≥10⁶), BAL (≥10⁴), escovado protegido (≥10³)
**Hemoculturas:** antes do ATB
**RX/TC tórax:** infiltrado novo
**Procalcitonina:** auxilia descalonamento` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**ATB empírico (iniciar em 1h):**
- **Sem risco para MDR:** Piperacilina-tazobactam 4.5g 6/6h (infusão estendida)
- **Com risco para MDR:** Meropenem 1-2g 8/8h (infusão estendida) + Vancomicina 15-20mg/kg 12/12h (ou Linezolida) + Polimixina B se risco KPC

**Descalonar em 48-72h** conforme cultura
**Duração:** 7 dias (maioria)
**Prevenção PAV:** cabeceira 30-45°, higiene oral com clorexidina, teste de respiração espontânea diário` }
    ]
  },\n  {
    id: "fp-embolia-gordurosa",
    title: "Síndrome de Embolia Gordurosa",
    categoryId: "respiratory",
    category: "respiratory",
    tags: ["embolia gordurosa", "fratura", "petéquias", "hipoxemia", "trauma"],
    sections: [
      { id: "intro", title: "Introdução", content: `Síndrome de embolia gordurosa ocorre 24-72h após fraturas de ossos longos, com tríade clássica.` },
      { id: "def", title: "Definição", content: `Síndrome clínica com insuficiência respiratória, alteração neurológica e petéquias, causada por embolia de gordura da medula óssea.` },
      { id: "etiology", title: "Etiologia", content: `Fraturas de ossos longos (fêmur, tíbia) e pelve. Mais comum em fraturas fechadas, múltiplas, e em jovens. Também em lipoaspiração, osteomielite, pancreatite, queimados.` },
      { id: "clinical", title: "Apresentação Clínica", content: `**Tríade clássica (12-72h após trauma):**
1. Insuficiência respiratória (95%): dispneia, taquipneia, hipoxemia
2. Alteração neurológica (60%): confusão, agitação, rebaixamento
3. Petéquias (33%): conjuntivas, axilas, tórax anterior — patognomônico mas tardio` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios de Gurd:** ≥1 maior + ≥4 menores
- Maiores: petéquias, IRpA, rebaixamento
- Menores: taquicardia >110, febre >38.5°, trombocitopenia, anemia, aumento VHS, gordura na urina
**TC tórax:** vidro fosco bilateral
**RMC crânio:** restrição à difusão em substância branca (padrão starfield)
**Diagnóstico é CLÍNICO** (exclusão)` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Suporte:**
- O₂, VNI ou VM protetora se SDRA
- Hidratação IV
- Estabilização precoce da fratura (fixação em <24h reduz incidência)

**NÃO há tratamento específico comprovado**
- Corticoide profilático: controverso (metilprednisolona 1.5mg/kg 8/8h)
- Heparina: sem benefício comprovado
- Albumina: pode reduzir ácidos graxos livres

**Prognóstico:** maioria recupera em 1-2 semanas com suporte` }
    ]
  },\n  {
    id: "fp-crise-asma-leve-mod",
    title: "Exacerbação de Asma Leve a Moderada",
    categoryId: "respiratory",
    category: "respiratory",
    tags: ["asma", "exacerbação", "broncodilatador", "salbutamol", "corticoide"],
    sections: [
      { id: "intro", title: "Introdução", content: `Exacerbações leves-moderadas de asma são atendidas frequentemente em pronto-socorro.` },
      { id: "def", title: "Definição", content: `Episódio agudo de piora dos sintomas de asma (dispneia, sibilância, tosse, aperto torácico) com redução do fluxo expiratório, sem critérios de gravidade.` },
      { id: "etiology", title: "Etiologia", content: `Infecção viral (principal gatilho), alérgenos, exercício, exposição ocupacional, poluição, medicamentos (AINEs, betabloqueadores), má adesão ao tratamento.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dispneia, sibilância, tosse
- PFE 50-79% do previsto (moderada) ou >80% (leve)
- Consegue falar frases completas
- FC <120, FR <30
- SpO₂ >92%
- Sem uso de musculatura acessória significativo` },
      { id: "diagnosis", title: "Diagnóstico", content: `**PFE (peak flow):** >80% = leve, 50-79% = moderada
**Oximetria:** SpO₂ >92%
**Gasometria:** não necessária se SpO₂ >92%
**RX tórax:** se suspeita de complicação` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Broncodilatador:**
- Salbutamol 400-800mcg (4-8 jatos) via espaçador a cada 20min por 1h
- Ou nebulização: salbutamol 2.5-5mg + ipratrópio 0.5mg

**2. Corticoide sistêmico:**
- Prednisona 40-50mg VO (ou prednisolona) por 5-7 dias
- Ou dexametasona 0.6mg/kg (max 16mg) dose única

**3. Reavaliação em 1h:**
- PFE >70% + melhora → alta com corticoide VO + CI em dose alta
- PFE 50-70% → continuar tratamento, reavaliar em 2h` }
    ]
  },\n  {
    id: "fp-hemoptise",
    title: "Hemoptise",
    categoryId: "respiratory",
    category: "respiratory",
    tags: ["hemoptise", "sangramento", "brônquica", "angiografia", "broncoscopia"],
    sections: [
      { id: "intro", title: "Introdução", content: `Hemoptise é expectoração de sangue proveniente das vias aéreas inferiores — pode ser emergência se maciça.` },
      { id: "def", title: "Definição", content: `Expectoração de sangue do trato respiratório inferior (traqueia, brônquios, pulmão). Maciça: >600mL/24h ou >100mL/h — risco de asfixia.` },
      { id: "etiology", title: "Etiologia", content: `**Infecciosa:** TB (mais comum no Brasil), bronquiectasias, pneumonia necrosante, abscesso
**Vascular:** TEP, MAV, vasculite
**Neoplásica:** ca broncogênico
**Outras:** coagulopatia, anticoagulação, IC, Goodpasture, GPA` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Tosse com sangue vivo/escuro
- Diferenciar de hematêmese (origem GI) e epistaxe posterior
- Hemoptise maciça: sangue em grande volume, dispneia, instabilidade` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Hemoptise não maciça:**
- RX tórax, hemograma, coagulograma
- TC tórax com contraste
- Pesquisa de BAAR
- Broncoscopia eletiva se TC inconclusiva

**Hemoptise maciça:**
- TC com angiografia de brônquicas
- Broncoscopia de urgência (localizar sangramento)` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Hemoptise maciça — ABC:**
1. Via aérea: IOT com tubo 8.0+ (aspiração de coágulos)
2. Posicionar paciente com **lado sangrante para baixo** (decúbito lateral)
3. Broncoscopia rígida se disponível
4. **Arteriografia brônquica com embolização** (eficácia >85%)
5. Cirurgia: lobectomia se embolização falha

**Hemoptise não maciça:**
- Tratar causa base
- Ácido tranexâmico 1g IV 8/8h (adjuvante)
- Antitussígeno (codeína) com cautela` }
    ]
  }
];
