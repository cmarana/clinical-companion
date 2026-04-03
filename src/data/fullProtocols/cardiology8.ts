import type { FullProtocol } from "./types";

export const cardioFullProtocols8: FullProtocol[] = [
  {
    id: "fp-endocardite-infecciosa",
    title: "Endocardite Infecciosa",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["endocardite", "valva", "vegetação", "hemocultura", "Duke"],
    sections: [
      { id: "intro", title: "Introdução", content: `Endocardite infecciosa (EI) é infecção do endocárdio, geralmente valvar, com alta morbidade.` },
      { id: "def", title: "Definição", content: `Infecção microbiana do endotélio cardíaco, predominantemente valvar, classificada por critérios de Duke modificados.` },
      { id: "etiology", title: "Etiologia", content: `**Agentes:** S. aureus (mais comum em válvula nativa aguda), Streptococcus viridans (subaguda), Enterococcus. Prótese precoce: S. aureus, S. epidermidis. HACEK em cultura-negativa.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Febre persistente + sopro novo
- Fenômenos vasculares: embolias sépticas, hemorragias conjuntivais, Janeway
- Fenômenos imunológicos: nódulos de Osler, manchas de Roth, glomerulonefrite
- Esplenomegalia` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios de Duke Modificados:**
- **Maiores:** hemocultura positiva típica (2+), evidência ecocardiográfica (vegetação, abscesso, deiscência)
- **Menores:** predisposição, febre >38°C, fenômenos vasculares/imunológicos, hemocultura atípica
- **Definitivo:** 2 maiores, ou 1 maior + 3 menores, ou 5 menores

**Exames:** 3 pares de hemoculturas antes do ATB, ETT (sensibilidade 75%) / ETE (>90%), hemograma, PCR, VHS, função renal, EAS` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Válvula nativa — empírico:**
- Oxacilina 2g IV 4/4h + Gentamicina 3mg/kg/dia IV por 4-6 semanas
- Se MRSA: Vancomicina 15-20mg/kg IV 12/12h

**Válvula protética — empírico:**
- Vancomicina + Gentamicina + Rifampicina

**Indicações cirúrgicas:** IC refratária, abscesso perivalvar, vegetação >10mm com embolia, infecção não controlada após 7-10 dias de ATB adequado` },
      { id: "prescriptions", title: "Prescrições", content: `- Oxacilina 2g IV 4/4h (MSSA)
- Vancomicina 15-20mg/kg 12/12h (MRSA)
- Gentamicina 3mg/kg/dia IV
- Ceftriaxona 2g IV 12/12h (Streptococcus)` },
      { id: "complications", title: "Complicações", content: `Embolia séptica (cerebral, pulmonar, renal, esplênica), IC, abscesso perivalvar, micótico, glomerulonefrite, AVC` },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: `**Internação:** todos os casos
**UTI:** choque séptico, IC grave, pós-operatório
**Alta:** término do ATB IV, estável, sem complicações` }
    ]
  },\n  {
    id: "fp-pericardite-aguda",
    title: "Pericardite Aguda",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["pericardite", "dor torácica", "ECG", "atrito", "AINE"],
    sections: [
      { id: "intro", title: "Introdução", content: `Pericardite aguda é inflamação do pericárdio, causa comum de dor torácica na emergência.` },
      { id: "def", title: "Definição", content: `Inflamação aguda do pericárdio (<4-6 semanas), podendo ser seca ou associada a derrame pericárdico.` },
      { id: "etiology", title: "Etiologia", content: `**Causas:** Idiopática/viral (80-90%) — Coxsackie, EBV, CMV. Pós-IAM (Dressler), urêmica, neoplásica, tuberculosa, autoimune (LES), medicamentosa.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor torácica pleurítica, piora com decúbito e inspiração, alivia sentado inclinado para frente
- Atrito pericárdico (patognomônico)
- Febre baixa, mal-estar
- Dispneia se derrame significativo` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Diagnóstico (2 de 4):**
1. Dor torácica típica
2. Atrito pericárdico
3. Alterações ECG difusas (supradesnível ST côncavo difuso, infradesnível PR)
4. Derrame pericárdico novo/piora

**ECG:** 4 fases clássicas
**Ecocardiograma:** avaliar derrame
**Troponina:** pode elevar se miopericardite
**PCR/VHS:** marcadores inflamatórios` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Primeira linha:**
- AAS 750-1000mg 8/8h por 1-2 semanas + desmame
- OU Ibuprofeno 600mg 8/8h por 1-2 semanas + desmame
- **Colchicina 0.5mg 12/12h por 3 meses** (reduz recorrência em 50%)

**Segunda linha:** Corticoide (prednisona 0.25-0.5mg/kg/dia) — SOMENTE se refratário ou contraindicação a AINEs

**Restrição de atividade física** por pelo menos 3 meses se atleta` },
      { id: "prescriptions", title: "Prescrições", content: `- AAS 750mg 8/8h VO
- Colchicina 0.5mg 12/12h VO
- Omeprazol 20mg 1x/dia (gastroproteção)` },
      { id: "complications", title: "Complicações", content: `Tamponamento cardíaco, pericardite constritiva, miopericardite, recorrência (30%)` },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: `**Internação:** febre >38°C, início subagudo, imunossupressão, trauma, falha de AINEs, troponina elevada, derrame grande
**Alta:** casos idiopáticos/virais sem critérios de risco` }
    ]
  },\n  {
    id: "fp-miocardite-aguda",
    title: "Miocardite Aguda",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["miocardite", "IC", "troponina", "biópsia", "viral"],
    sections: [
      { id: "intro", title: "Introdução", content: `Miocardite é inflamação do miocárdio, causa importante de IC aguda em jovens.` },
      { id: "def", title: "Definição", content: `Processo inflamatório do miocárdio com necrose de cardiomiócitos de causa não isquêmica.` },
      { id: "etiology", title: "Etiologia", content: `**Viral (mais comum):** Coxsackie B, Parvovírus B19, HHV-6, SARS-CoV-2. Autoimune, drogas, tóxica, eosinofílica, de células gigantes.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Quadro viral recente (1-3 semanas antes)
- Dor torácica, dispneia, palpitações
- IC aguda (ortopneia, edema)
- Arritmias (TV, BAV)
- Choque cardiogênico em formas fulminantes` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Suspeita:** clínica + troponina elevada + ECG + ecocardiograma
**RMC:** padrão-ouro não invasivo (edema miocárdico, realce tardio não isquêmico — critérios de Lake Louise)
**Biópsia endomiocárdica:** padrão-ouro histológico (critérios de Dallas) — indicada em IC fulminante, arritmias refratárias` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Suporte:** tratamento da IC (diuréticos, IECA, betabloqueadores se estável)
**Restrição de exercício:** 3-6 meses
**Choque cardiogênico:** inotrópicos, dispositivos de assistência (ECMO)
**Imunossupressão:** apenas em formas específicas (células gigantes, eosinofílica, autoimune comprovada)
**NÃO usar AINEs** (aumenta necrose em modelos animais)` }
    ]
  },\n  {
    id: "fp-sindrome-brugada",
    title: "Síndrome de Brugada",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["Brugada", "ECG", "morte súbita", "CDI", "arritmia"],
    sections: [
      { id: "intro", title: "Introdução", content: `Síndrome de Brugada é canalopatia genética com risco de morte súbita por FV.` },
      { id: "def", title: "Definição", content: `Canalopatia autossômica dominante (gene SCN5A) com padrão ECG típico e risco de arritmias ventriculares malignas.` },
      { id: "etiology", title: "Etiologia", content: `Mutação no canal de sódio Nav1.5 (SCN5A em 20-30%). Precipitantes: febre, drogas (antiarrítmicos classe I, tricíclicos, cocaína), vagotonia.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Maioria assintomática com achado incidental no ECG
- Síncope, respiração agônica noturna
- Morte súbita (tipicamente durante sono)
- FV documentada` },
      { id: "diagnosis", title: "Diagnóstico", content: `**ECG Tipo 1 (coved):** supradesnível ST ≥2mm em V1-V3 com morfologia convexa e onda T negativa — DIAGNÓSTICO
**Tipos 2 e 3:** padrão sela, não diagnósticos — necessitam teste com ajmalina/procainamida
**Teste provocativo:** ajmalina 1mg/kg IV ou procainamida — converte tipo 2/3 em tipo 1` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**CDI (cardiodesfibrilador implantável):** indicado em PCR recuperada, síncope com padrão tipo 1 espontâneo
**Quinidina:** alternativa/adjuvante ao CDI
**Evitar:** febre (tratar agressivamente com antitérmicos), drogas bloqueadoras de sódio (www.brugadadrugs.org)
**Isoproterenol:** tempestade elétrica na emergência` }
    ]
  },\n  {
    id: "fp-sindrome-coronariana-cronica",
    title: "Síndrome Coronariana Crônica",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["angina", "DAC", "isquemia", "coronária", "ergometria"],
    sections: [
      { id: "intro", title: "Introdução", content: `Síndrome coronariana crônica (SCC) engloba as manifestações estáveis da doença arterial coronariana.` },
      { id: "def", title: "Definição", content: `Espectro clínico da DAC estável: angina de esforço típica, equivalentes isquêmicos, IAM prévio, IC isquêmica, achado incidental.` },
      { id: "etiology", title: "Etiologia", content: `Aterosclerose coronariana. Fatores de risco: HAS, DM, dislipidemia, tabagismo, HF positiva, obesidade, sedentarismo.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Angina típica: dor retroesternal em aperto/queimação, desencadeada por esforço/estresse, alivia com repouso/nitrato em <5min
- Equivalentes: dispneia de esforço, cansaço
- Classificação CCS I-IV` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Probabilidade pré-teste:** idade, sexo, tipo de dor
**Exames não invasivos:**
- Teste ergométrico (se ECG normal e capacidade de exercício)
- Cintilografia / PET miocárdica
- Angiotomografia coronariana (CCTA) — preferido como 1ª linha (ESC 2024)
- Eco de estresse
**Cateterismo:** se alto risco ou inconclusivo` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Estilo de vida:** cessação tabágica, exercício, dieta
**Farmacológico:**
- AAS 100mg/dia
- Estatina de alta potência (rosuvastatina 20-40mg ou atorvastatina 40-80mg)
- Betabloqueador (metoprolol, bisoprolol) — 1ª linha anti-anginoso
- Nitrato SL para crises
- IECA se HAS/DM/disfunção VE

**Revascularização:** ICP ou CRVM conforme anatomia e SYNTAX score` }
    ]
  },\n  {
    id: "fp-insuficiencia-cardiaca-cronica",
    title: "Insuficiência Cardíaca Crônica",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["IC", "FEVE", "IECA", "betabloqueador", "espironolactona"],
    sections: [
      { id: "intro", title: "Introdução", content: `IC crônica afeta >26 milhões de pessoas mundialmente. Tratamento otimizado reduz mortalidade em até 60%.` },
      { id: "def", title: "Definição", content: `Síndrome clínica com sintomas e sinais de congestão/baixo débito decorrentes de anormalidade cardíaca estrutural/funcional. Classificação: FEVE reduzida (<40%), levemente reduzida (40-49%), preservada (≥50%).` },
      { id: "etiology", title: "Etiologia", content: `**Isquêmica (60-70%):** DAC, IAM prévio. **Não-isquêmica:** HAS, valvopatia, cardiomiopatia dilatada, alcoólica, Chagas, miocardite, quimioterapia.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dispneia aos esforços (NYHA I-IV)
- Ortopneia, DPN
- Edema periférico, ascite
- Fadiga, intolerância ao exercício
- Terceira bulha (B3)
- Turgência jugular, hepatomegalia` },
      { id: "diagnosis", title: "Diagnóstico", content: `**BNP >35 pg/mL ou NT-proBNP >125 pg/mL** + ecocardiograma (FEVE, volumes, disfunção diastólica, valvopatias)
**ECG:** sobrecarga, arritmias, BRE
**RX tórax:** cardiomegalia, congestão
**Laboratório:** função renal, eletrólitos, hemograma, TSH, ferritina, perfil lipídico
**RMC:** etiologia, viabilidade` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Pilar quádruplo (ICFEr):**
1. IECA/BRA/ARNI (sacubitril-valsartana preferido)
2. Betabloqueador (carvedilol, bisoprolol, metoprolol succinato)
3. Antagonista mineralocorticoide (espironolactona 25-50mg)
4. iSGLT2 (dapagliflozina 10mg ou empagliflozina 10mg)

**Diuréticos:** furosemida para congestão (sintomático)
**Ferro IV:** se ferritina <100 ou <300 com IST <20%
**CDI:** prevenção primária se FEVE ≤35% após 3 meses de terapia otimizada
**TRC:** se FEVE ≤35% + BRE + QRS ≥150ms` }
    ]
  },\n  {
    id: "fp-valvopatia-aortica",
    title: "Estenose Aórtica",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["estenose aórtica", "sopro", "valva", "TAVI", "cirurgia"],
    sections: [
      { id: "intro", title: "Introdução", content: `Estenose aórtica é a valvopatia mais comum em países desenvolvidos, crescendo com envelhecimento populacional.` },
      { id: "def", title: "Definição", content: `Obstrução à ejeção do VE por calcificação/degeneração da valva aórtica. Classificação: leve (AVA >1.5cm²), moderada (1.0-1.5), grave (<1.0 ou gradiente médio >40mmHg).` },
      { id: "etiology", title: "Etiologia", content: `**Degenerativa/calcificada (>65 anos):** mais comum. **Bicúspide congênita (30-50 anos).** **Reumática:** associada à insuficiência aórtica.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Assintomática por anos (fase compensatória)
- Tríade clássica: **angina, síncope de esforço, dispneia** (IC)
- Sopro sistólico ejetivo em foco aórtico, irradiando para carótidas, crescendo-decrescendo
- Pulso parvus et tardus
- B4 (hipertrofia VE)` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Ecocardiograma TT:** padrão-ouro
- AVA <1.0 cm² = grave
- Gradiente médio >40 mmHg = grave
- Velocidade jato >4 m/s = grave
**ECG:** SVE, BRE
**TC com escore de cálcio:** confirma gravidade em casos duvidosos` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Conservador:** sem tratamento farmacológico eficaz para progressão
**Cirúrgico (troca valvar):** indicado quando grave + sintomática, ou grave + FEVE <50%
**TAVI:** alternativa em risco cirúrgico intermediário/alto ou inoperáveis
**NÃO retardar:** sobrevida mediana após início dos sintomas = 2-3 anos sem intervenção` }
    ]
  },\n  {
    id: "fp-fibrilacao-atrial-cronica",
    title: "Fibrilação Atrial — Manejo Crônico",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["FA", "anticoagulação", "CHA2DS2-VASc", "ablação", "controle de frequência"],
    sections: [
      { id: "intro", title: "Introdução", content: `FA é a arritmia sustentada mais prevalente, afetando 2-4% da população adulta.` },
      { id: "def", title: "Definição", content: `Taquiarritmia supraventricular com ativação atrial descoordenada, resultando em contração ineficaz e ritmo ventricular irregularmente irregular.` },
      { id: "etiology", title: "Etiologia", content: `**Fatores de risco:** HAS (mais comum), valvopatias, IC, obesidade, apneia do sono, hipertireoidismo, álcool, pós-operatório, genética.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Palpitações irregulares
- Dispneia, fadiga
- Tontura, pré-síncope
- Muitos assintomáticos (achado incidental)
- AVC como primeira manifestação (20-30%)` },
      { id: "diagnosis", title: "Diagnóstico", content: `**ECG:** ausência de onda P, intervalos RR irregulares, linha de base fibrilatória
**Classificação:** primeiro episódio, paroxística (<7d), persistente (>7d), permanente
**Avaliação:** ecocardiograma, TSH, função renal, hemograma, eletrólitos` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Anticoagulação (CHA2DS2-VASc):**
- ≥2 (homem) ou ≥3 (mulher): anticoagulação indicada
- DOACs preferidos: Rivaroxabana 20mg/dia, Apixabana 5mg 12/12h, Edoxabana 60mg/dia
- Warfarina: se valva mecânica ou estenose mitral moderada/grave

**2. Controle de frequência (FC <110 em repouso):**
- Betabloqueadores: metoprolol, bisoprolol
- BCC: diltiazem, verapamil (se sem IC)
- Digoxina: adjuvante

**3. Controle de ritmo:**
- Amiodarona, propafenona, flecainida
- Ablação por cateter: cada vez mais indicada precocemente` }
    ]
  },\n  {
    id: "fp-trombose-venosa-profunda",
    title: "Trombose Venosa Profunda (TVP)",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["TVP", "trombose", "anticoagulação", "Wells", "doppler"],
    sections: [
      { id: "intro", title: "Introdução", content: `TVP é a manifestação mais comum do tromboembolismo venoso, com risco de TEP potencialmente fatal.` },
      { id: "def", title: "Definição", content: `Formação de trombo no sistema venoso profundo, predominantemente em MMII. Proximal (ilíaca, femoral, poplítea) vs distal (infrapoplítea).` },
      { id: "etiology", title: "Etiologia", content: `**Tríade de Virchow:** estase venosa, lesão endotelial, hipercoagulabilidade. FR: imobilização, cirurgia, neoplasia, ACO, trombofilia, obesidade, gravidez.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor unilateral em panturrilha/coxa
- Edema assimétrico (diferença >3cm)
- Empastamento de panturrilha
- Sinal de Homans (baixa sensibilidade)
- Eritema, calor local
- Dilatação de veias superficiais` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Escore de Wells para TVP:**
- ≤1: improvável → D-dímero → se negativo, exclui
- ≥2: provável → Doppler venoso
**USG com Doppler:** sensibilidade >95% para proximal
**D-dímero:** alto VPN, ajustar por idade (>50 anos: corte = idade × 10)
**Angiotomografia/RM:** casos complexos` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Anticoagulação:**
- DOACs (1ª linha): Rivaroxabana 15mg 12/12h por 21d → 20mg/dia, ou Apixabana 10mg 12/12h por 7d → 5mg 12/12h
- HBPM → Warfarina (INR 2-3) se DOAC contraindicado
- **Duração:** 3 meses (provocada), indefinida (não provocada ou FR persistente)

**Trombólise/trombectomia:** TVP ilíaco-femoral extensa com phlegmasia
**Filtro de veia cava:** contraindicação absoluta à anticoagulação + TEP agudo` }
    ]
  },\n  {
    id: "fp-tep-submacico",
    title: "Tromboembolismo Pulmonar — Risco Intermediário e Baixo",
    categoryId: "cardiology",
    category: "cardiology",
    tags: ["TEP", "embolia pulmonar", "Wells", "PESI", "angiotomografia"],
    sections: [
      { id: "intro", title: "Introdução", content: `TEP é a terceira causa de morte cardiovascular. Estratificação de risco define conduta.` },
      { id: "def", title: "Definição", content: `Obstrução de artérias pulmonares por êmbolos, geralmente de TVP de MMII. Classificação: alto risco (maciço), intermediário-alto, intermediário-baixo, baixo risco.` },
      { id: "etiology", title: "Etiologia", content: `Mesma da TVP (tríade de Virchow). 90% dos êmbolos originam-se de veias profundas dos MMII.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dispneia súbita (mais comum)
- Dor torácica pleurítica
- Taquicardia, taquipneia
- Hemoptise
- Síncope (sugere maciço)
- Sinais de TVP associada` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Escore de Wells para TEP:** <4 improvável, ≥4 provável
**PERC:** se Wells <2, PERC negativo → exclui sem D-dímero
**D-dímero:** se improvável e PERC positivo
**AngioTC de tórax:** padrão-ouro se Wells ≥4 ou D-dímero positivo
**PESI/sPESI:** estratificação prognóstica
**Ecocardiograma:** disfunção de VD (risco intermediário-alto)
**Troponina/BNP:** marcadores de gravidade` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Baixo risco (sPESI 0):** anticoagulação ambulatorial com DOAC
**Intermediário-baixo:** anticoagulação, internação breve
**Intermediário-alto (disfunção VD + troponina elevada):** anticoagulação, UTI, monitorização — trombólise se deterioração
**Alto risco (maciço):** trombólise sistêmica (alteplase 100mg IV em 2h) ou embolectomia` }
    ]
  }
];
