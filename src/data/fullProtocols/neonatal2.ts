import type { FullProtocol } from "./types";

export const neonatalFullProtocols2: FullProtocol[] = [
  {
    id: "fp-asfixia-perinatal",
    title: "Asfixia Perinatal / Encefalopatia Hipóxico-Isquêmica",
    categoryId: "neonatal",
    category: "Neonatal",
    tags: ["asfixia", "ehi", "hipotermia terapêutica", "apgar", "perinatal"],
    sections: [
      { id: "intro", title: "Introdução", content: "A encefalopatia hipóxico-isquêmica (EHI) é a principal causa de lesão cerebral neonatal evitável. Acomete 1-6/1000 nascidos vivos a termo. A hipotermia terapêutica é o único tratamento neuroprotetor comprovado. Diretriz SBP e ILCOR 2020." },
      { id: "def", title: "Definição", content: "Síndrome neurológica do RN a termo resultante de hipóxia-isquemia periparto. Classificação de Sarnat: Grau I (leve — hiperexcitabilidade), Grau II (moderada — letargia, convulsões), Grau III (grave — coma, ausência de reflexos)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Critérios: Apgar ≤5 no 10º minuto, pH cordão <7,0 ou BE <-16, necessidade de ventilação >10min ao nascer, evento sentinela (DPP, prolapso de cordão, rotura uterina). Exame neurológico nas primeiras 6h de vida." },
      { id: "etiology", title: "Etiologia", content: "Eventos perinatais: DPP, prolapso de cordão, rotura uterina, nó verdadeiro, distocia de ombro prolongada, parada cardiorrespiratória materna, corioamnionite grave." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sarnat I: irritabilidade, tremores, hiper-reflexia, midríase, taquicardia. Sarnat II: letargia, hipotonia, convulsões, miose, bradicardia. Sarnat III: coma, flacidez, ausência de reflexos, pupilas fixas, apneia." },
      { id: "diagnosis", title: "Diagnóstico", content: "Gasometria de cordão/primeira hora (pH, lactato, BE). EEG contínuo ou aEEG (amplitude-integrated). USG transfontanelar. RM de crânio (72h-7 dias — padrão-ouro para prognóstico). Hemograma, coagulograma, função renal e hepática, glicemia." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Sepse neonatal, meningite, erros inatos do metabolismo, malformações cerebrais, hemorragia intracraniana, intoxicação materna, hipoglicemia grave." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Reanimação neonatal conforme protocolo; 2. Avaliar critérios para hipotermia terapêutica (iniciar em <6h de vida); 3. Evitar hipertermia (>37,5°C é deletério); 4. Monitorização cardiorrespiratória contínua; 5. Correção de distúrbios metabólicos." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hipotermia terapêutica (Sarnat II-III, <6h de vida): resfriamento corporal total a 33,5°C por 72h, seguido de reaquecimento lento (0,5°C/h). Anticonvulsivantes: Fenobarbital 20mg/kg EV (ataque), manutenção 5mg/kg/dia. Suporte ventilatório, hemodinâmico e metabólico." },
      { id: "prescriptions", title: "Prescrições", content: "1. Hipotermia terapêutica: temperatura alvo 33,5°C ± 0,5°C por 72h; 2. Fenobarbital 20mg/kg EV em 20min (se convulsão); 3. Manutenção: Fenobarbital 5mg/kg/dia EV; 4. Glicemia: manter 50-150 mg/dL; 5. Restrição hídrica: 50-60 mL/kg/dia; 6. Monitorização contínua: ECG, SpO2, temperatura central." },
      { id: "followup", title: "Acompanhamento", content: "RM de crânio entre 3-7 dias. aEEG contínuo durante hipotermia. Seguimento neuropediátrico a longo prazo. Avaliação auditiva e visual. Fisioterapia/estimulação precoce." },
      { id: "complications", title: "Complicações", content: "Paralisia cerebral, epilepsia, deficiência intelectual, surdez, cegueira cortical, falência múltipla de órgãos (renal, hepática, cardíaca), CIVD, óbito." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Todo RN com EHI deve ser admitido em UTI neonatal. Hipotermia terapêutica requer centro de referência. Alta após estabilização, com seguimento ambulatorial especializado." },
      { id: "references", title: "Referências Bibliográficas", content: "SBP — Encefalopatia Hipóxico-Isquêmica. ILCOR 2020 — Neonatal Resuscitation. Shankaran S et al. NEJM 2005. Jacobs SE et al. Cochrane 2013." }
    ]
  },
  {
    id: "fp-prematuridade-extrema",
    title: "Prematuridade Extrema — Cuidados Iniciais",
    categoryId: "neonatal",
    category: "Neonatal",
    tags: ["prematuro", "extremo", "rnpt", "surfactante", "cpap"],
    sections: [
      { id: "intro", title: "Introdução", content: "O RN prematuro extremo (<28 semanas ou <1000g) representa o maior desafio da neonatologia. Requer cuidados especializados imediatos para reduzir morbimortalidade. Golden hour neonatal: primeiros 60 minutos são críticos. Diretriz SBP e OMS." },
      { id: "def", title: "Definição", content: "Prematuridade extrema: IG <28 semanas. Muito baixo peso: <1500g. Extremo baixo peso: <1000g. Limite de viabilidade no Brasil: 23-24 semanas (depende do centro). Microprematuro: <26 semanas." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Pré-natal: identificar gestações de risco. Corticoide antenatal (Betametasona 12mg IM 24/24h — 2 doses) entre 24-34 semanas. Sulfato de magnésio para neuroproteção se <32 semanas. Encaminhar para centro de referência neonatal." },
      { id: "etiology", title: "Etiologia", content: "Causas de prematuridade: TPP espontâneo, RPM, pré-eclâmpsia, DPP, insuficiência placentária, infecção (corioamnionite), malformações, gestação múltipla, incompetência cervical." },
      { id: "clinical", title: "Apresentação Clínica", content: "RN com imaturidade global: pele fina e gelatinosa, ausência de tecido subcutâneo, hipotonia, reflexos ausentes ou fracos, apneia, SDR, instabilidade térmica, suscetibilidade a infecções." },
      { id: "diagnosis", title: "Diagnóstico", content: "IG confirmada (USG 1º trimestre é o mais preciso). Capurro ou New Ballard ao nascimento. Avaliação imediata: FC, respiração, tônus. Exames: gasometria, glicemia, hemograma, hemocultura, Rx tórax." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "RCIU (pode parecer mais maduro pela IG), malformações congênitas, hidropsia fetal, infecção congênita (TORCH)." },
      { id: "conduct", title: "Conduta Inicial", content: "Golden hour: 1. Sala aquecida (26°C), saco plástico transparente (sem secar); 2. CPAP nasal precoce (PEEP 5-6 cmH2O); 3. Clampear cordão em 30-60s se estável; 4. SpO2 pré-ductal + FC; 5. Surfactante se SDR (técnica INSURE ou LISA); 6. Acesso umbilical; 7. Antibiótico empírico se risco infeccioso." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Surfactante: Poractant alfa 200mg/kg intratraqueal (primeira dose), pode repetir 100mg/kg em 6-12h. Técnica LISA (Less Invasive Surfactant Administration) preferível. CPAP nasal: PEEP 5-7 cmH2O, FiO2 para SpO2 alvo (90-95%). Cafeína: citrato de cafeína 20mg/kg EV (ataque) → 5-10mg/kg/dia (prevenção de apneia). Nutrição parenteral total precoce (primeiras 24h)." },
      { id: "prescriptions", title: "Prescrições", content: "1. CPAP nasal: PEEP 6 cmH2O, FiO2 para SpO2 90-95%; 2. Surfactante (Poractant alfa) 200mg/kg IT; 3. Cafeína citrato 20mg/kg EV (ataque) → 5mg/kg/dia; 4. NPT: glicose 6-8 mg/kg/min, aminoácidos 2-3 g/kg/dia, lipídios 1 g/kg/dia (iniciar D1); 5. Ampicilina 50mg/kg EV 12/12h + Gentamicina 5mg/kg EV 48/48h (se risco infeccioso); 6. Vitamina K 0,5mg IM." },
      { id: "followup", title: "Acompanhamento", content: "Triagem neonatal expandida. Fundo de olho (ROP) a partir de 4 semanas. USG transfontanelar seriada (hemorragia peri-intraventricular). Audiometria. Seguimento multidisciplinar no ambulatório de prematuros." },
      { id: "complications", title: "Complicações", content: "SDR, hemorragia peri-intraventricular, leucomalácia periventricular, enterocolite necrosante, displasia broncopulmonar, retinopatia da prematuridade, sepse tardia, persistência do canal arterial, hipotermia." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Todo prematuro extremo deve ser admitido em UTI neonatal nível III. Alta: peso >1800g, alimentação oral plena, estável sem suporte respiratório, termorregulação adequada, sem apneias há >5 dias." },
      { id: "references", title: "Referências Bibliográficas", content: "SBP — Reanimação Neonatal. OMS — Cuidados ao RN Prematuro. Sweet DG et al. Neonatology 2019 (European Consensus on RDS). Programa de Reanimação Neonatal — SBP 2022." }
    ]
  },
  {
    id: "fp-enterocolite-necrosante",
    title: "Enterocolite Necrosante (ECN)",
    categoryId: "neonatal",
    category: "Neonatal",
    tags: ["enterocolite", "necrosante", "ecn", "nec", "prematuro", "abdome"],
    sections: [
      { id: "intro", title: "Introdução", content: "A enterocolite necrosante (ECN) é a emergência gastrointestinal mais comum e mais grave do período neonatal. Acomete principalmente prematuros <32 semanas e <1500g. Mortalidade de 20-30%. Diretriz SBP." },
      { id: "def", title: "Definição", content: "Necrose isquêmica e inflamatória do intestino neonatal. Classificação de Bell: Estágio I (suspeita — distensão, resíduo gástrico), Estágio II (confirmada — pneumatose intestinal), Estágio III (avançada — pneumoperitônio, choque)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Fatores de risco: prematuridade (principal), fórmula láctea (leite materno é protetor), asfixia perinatal, PCA com repercussão hemodinâmica, policitemia, cateter umbilical. Sinais precoces: intolerância alimentar, distensão abdominal, resíduo gástrico bilioso." },
      { id: "etiology", title: "Etiologia", content: "Multifatorial: imaturidade intestinal (barreira mucosa, imunidade local), colonização bacteriana anômala, isquemia mesentérica, alimentação com fórmula. Agentes: E. coli, Klebsiella, Clostridium, Staphylococcus coagulase-negativo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Tríade clássica: distensão abdominal + resíduo gástrico bilioso + sangue nas fezes. Sinais sistêmicos: apneia, bradicardia, letargia, instabilidade térmica, hipotensão. Parede abdominal: eritema, edema, crepitação (pneumatose palpável). Evolução rápida para choque séptico." },
      { id: "diagnosis", title: "Diagnóstico", content: "Rx abdome: pneumatose intestinal (gás na parede — patognomônico), gás no sistema porta, pneumoperitônio (perfuração). Laboratório: leucocitose ou leucopenia, plaquetopenia (sinal de gravidade), PCR elevada, acidose metabólica, hiponatremia. Hemocultura." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Sepse neonatal sem foco abdominal, volvo intestinal, íleo meconial, perfuração intestinal espontânea, intolerância alimentar, alergia à proteína do leite de vaca." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Suspender dieta (jejum — repouso intestinal); 2. SOG aberta para descompressão; 3. Antibioticoterapia de amplo espectro; 4. Expansão volêmica se choque; 5. Rx abdome seriado (6-8h); 6. Avaliação cirúrgica se Bell III." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Jejum: Bell I — 3 dias; Bell II — 7-14 dias; Bell III — 14+ dias. NPT durante jejum. ATB: Ampicilina 50mg/kg EV 12/12h + Gentamicina 5mg/kg EV 24-48h + Metronidazol 7,5mg/kg EV 12/12h. Suporte: inotrópicos se choque, correção de plaquetopenia e coagulopatia. Cirurgia: perfuração (pneumoperitônio) — laparotomia exploradora ou drenagem peritoneal primária." },
      { id: "prescriptions", title: "Prescrições", content: "1. Jejum + SOG aberta; 2. NPT: glicose + aminoácidos + lipídios conforme peso; 3. Ampicilina 50mg/kg EV 12/12h; 4. Gentamicina 5mg/kg EV (intervalo conforme IG); 5. Metronidazol 7,5mg/kg EV 12/12h; 6. Concentrado de plaquetas se <50.000; 7. Rx abdome a cada 6-8h; 8. Morfina 10-20 mcg/kg/h EV se dor." },
      { id: "followup", title: "Acompanhamento", content: "Rx abdome seriado até resolução. Reintrodução alimentar gradual com leite materno (preferencial). Monitorar complicações tardias: estenose intestinal (4-6 semanas após), síndrome do intestino curto (se ressecção extensa)." },
      { id: "complications", title: "Complicações", content: "Perfuração intestinal, peritonite, choque séptico, CIVD, síndrome do intestino curto, estenose intestinal, colestase associada à NPT, óbito (20-30%)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Todo RN com suspeita de ECN deve estar em UTI neonatal. Cirurgia: pneumoperitônio, deterioração clínica apesar do tratamento, massa abdominal fixa. Alta: tolerando dieta plena, sem sinais infecciosos, crescendo adequadamente." },
      { id: "references", title: "Referências Bibliográficas", content: "SBP — Enterocolite Necrosante. Bell MJ et al. Ann Surg 1978 (classificação). Neu J, Walker WA. NEJM 2011. Patel RM et al. Semin Perinatol 2017." }
    ]
  }
];
