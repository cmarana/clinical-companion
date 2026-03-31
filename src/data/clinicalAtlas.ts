export interface AtlasEntry {
  id: string;
  title: string;
  category: AtlasCategory;
  subcategory: string;
  image_description: string;
  findings: string[];
  clinical_significance: string;
  pearls: string[];
  differentials?: string[];
  tags: string[];
}

export type AtlasCategory = "ecg" | "dermatology" | "radiology" | "ophthalmology" | "lab";

export interface AtlasCategoryInfo {
  id: AtlasCategory;
  title: string;
  icon: string;
  color: string;
}

export const atlasCategories: AtlasCategoryInfo[] = [
  { id: "ecg", title: "ECG", icon: "Activity", color: "text-red-500" },
  { id: "dermatology", title: "Dermatologia", icon: "Scan", color: "text-pink-500" },
  { id: "radiology", title: "Radiologia", icon: "ScanLine", color: "text-blue-500" },
  { id: "ophthalmology", title: "Oftalmologia", icon: "Eye", color: "text-green-500" },
  { id: "lab", title: "Hematologia / Lâminas", icon: "Microscope", color: "text-purple-500" },
];

export const atlasEntries: AtlasEntry[] = [
  // ========== ECG ==========
  {
    id: "ecg-iam-supra",
    title: "IAM com Supradesnivelamento de ST",
    category: "ecg",
    subcategory: "Síndromes Coronarianas",
    image_description: "Elevação convexa do segmento ST ≥ 1mm em pelo menos 2 derivações contíguas. Imagem especular (infra de ST em parede oposta). Pode haver ondas Q patológicas se evolução > 6h.",
    findings: [
      "Supra de ST ≥ 1mm em V1-V4 (anterior) ou DII, DIII, aVF (inferior)",
      "Infra de ST recíproco nas derivações opostas",
      "Ondas T hiperagudas (fase precoce)",
      "Ondas Q patológicas (> 40ms, > 25% da amplitude do QRS)",
      "Perda progressiva da onda R"
    ],
    clinical_significance: "Emergência médica. Indica oclusão coronariana aguda. Tempo porta-balão < 90 min ou porta-agulha < 30 min. Mortalidade sem reperfusão: 30%.",
    pearls: [
      "Supra em aVR + infra difuso = lesão de tronco ou 3 vasos",
      "Supra em V3-V4 com infra em DII/DIII/aVF = DA proximal (Wellens invertido)",
      "Sempre solicitar V3R/V4R se IAM inferior (excluir VD)",
      "Supra de ST novo + BRE = critérios de Sgarbossa"
    ],
    differentials: ["Pericardite aguda (supra côncavo difuso)", "Repolarização precoce benigna", "Aneurisma de VE", "Síndrome de Takotsubo"],
    tags: ["iam", "supra", "infarto", "coronária", "emergência"]
  },
  {
    id: "ecg-fa",
    title: "Fibrilação Atrial",
    category: "ecg",
    subcategory: "Arritmias Supraventriculares",
    image_description: "Ausência de ondas P organizadas, substituídas por ondulações irregulares da linha de base (ondas f). Intervalos R-R irregularmente irregulares. QRS geralmente estreito.",
    findings: [
      "Ausência de ondas P definidas",
      "Linha de base com ondulação irregular (ondas f)",
      "Intervalos R-R irregularmente irregulares",
      "FC variável (pode ser alta, normal ou baixa)",
      "QRS estreito (salvo aberrância ou WPW)"
    ],
    clinical_significance: "Arritmia sustentada mais comum. Risco de AVC (calcular CHA₂DS₂-VASc). Controle de FC vs ritmo. Anticoagulação se indicada.",
    pearls: [
      "FA + RVR com QRS largo: excluir WPW (irregular polimórfico)",
      "FA + FC controlada sem fármacos: pesquisar doença do nó sinusal",
      "FA de início recente (<48h): cardioversão segura sem eco TE",
      "RR regular em FA = bloqueio AV completo com ritmo de escape"
    ],
    tags: ["fa", "fibrilação", "atrial", "arritmia", "anticoagulação"]
  },
  {
    id: "ecg-brd",
    title: "Bloqueio de Ramo Direito (BRD)",
    category: "ecg",
    subcategory: "Distúrbios de Condução",
    image_description: "QRS alargado ≥ 120ms. Padrão rSR' em V1-V2 ('orelhas de coelho'). Onda S empastada e larga em DI e V5-V6.",
    findings: [
      "QRS ≥ 120ms",
      "Padrão rsR' ou rSR' em V1-V2",
      "Onda S larga e empastada em DI, V5, V6",
      "Alteração secundária da repolarização em V1-V3"
    ],
    clinical_significance: "Pode ser variante normal. Quando novo, investigar: TEP, sobrecarga de VD, isquemia, Brugada. Comum pós-cateterismo direito.",
    pearls: [
      "BRD + desvio do eixo para esquerda = bloqueio bifascicular",
      "BRD novo + dispneia = pensar em TEP",
      "BRD com supra em V1-V2 tipo coved = Brugada",
      "BRD isolado em jovem assintomático = geralmente benigno"
    ],
    tags: ["brd", "bloqueio", "ramo", "direito", "condução"]
  },
  {
    id: "ecg-bre",
    title: "Bloqueio de Ramo Esquerdo (BRE)",
    category: "ecg",
    subcategory: "Distúrbios de Condução",
    image_description: "QRS alargado ≥ 120ms. Onda R larga e monofásica (ou com entalhe) em DI, aVL, V5-V6. Padrão rS ou QS em V1-V3.",
    findings: [
      "QRS ≥ 120ms",
      "Onda R larga monofásica ou entalhada em DI, aVL, V5-V6",
      "Ausência de onda Q em V5-V6 e DI",
      "rS ou QS em V1-V3",
      "Alteração secundária da repolarização (discordância ST/T)"
    ],
    clinical_significance: "Geralmente patológico. Associado a cardiopatia estrutural (HAS, IC, Chagas). BRE novo em dor torácica = tratar como IAMCSST (Sgarbossa).",
    pearls: [
      "Critérios de Sgarbossa ≥ 3 = IAM em contexto de BRE",
      "Critério de Smith modificado (ST/S > 0,25) mais sensível",
      "BRE + IC = considerar TRC se QRS > 150ms",
      "BRE intermitente = doença do sistema de condução"
    ],
    tags: ["bre", "bloqueio", "ramo", "esquerdo", "sgarbossa"]
  },
  {
    id: "ecg-taquicardia-ventricular",
    title: "Taquicardia Ventricular (TV)",
    category: "ecg",
    subcategory: "Arritmias Ventriculares",
    image_description: "Taquicardia de QRS largo (≥ 120ms) com FC geralmente 150-250 bpm. Pode ser monomórfica (QRS uniforme) ou polimórfica (QRS variável). Dissociação AV presente.",
    findings: [
      "QRS largo ≥ 120ms em taquicardia regular",
      "FC 150-250 bpm",
      "Dissociação AV (ondas P independentes do QRS)",
      "Batimentos de fusão e captura",
      "Concordância positiva ou negativa do QRS nas precordiais"
    ],
    clinical_significance: "Emergência. TV sem pulso = desfibrilação imediata. TV com pulso estável = amiodarona IV. TV com instabilidade = cardioversão sincronizada.",
    pearls: [
      "Taquicardia de QRS largo: TV até prova em contrário (80% dos casos)",
      "Critérios de Brugada: ausência de padrão RS nas precordiais = TV",
      "NUNCA usar verapamil em taquicardia de QRS largo (pode colapsar)",
      "TV polimórfica + QT longo = Torsades → magnésio IV"
    ],
    tags: ["tv", "taquicardia", "ventricular", "qrs largo", "emergência"]
  },
  {
    id: "ecg-wellens",
    title: "Síndrome de Wellens",
    category: "ecg",
    subcategory: "Síndromes Coronarianas",
    image_description: "Ondas T profundamente invertidas e simétricas (tipo B, 75%) ou bifásicas (tipo A, 25%) em V2-V3, em paciente com dor torácica que resolve. QRS e ST normais.",
    findings: [
      "Ondas T invertidas profundas simétricas em V2-V3 (tipo B — 75%)",
      "Ondas T bifásicas em V2-V3 (tipo A — 25%)",
      "Paciente assintomático no momento do ECG",
      "Sem elevação significativa do segmento ST",
      "Troponina pode ser normal ou discretamente elevada"
    ],
    clinical_significance: "Indica estenose crítica (>90%) da DA proximal. Alto risco de IAM anterior extenso se não tratado. Cateterismo precoce obrigatório. NÃO fazer teste de esforço.",
    pearls: [
      "As alterações aparecem no intervalo livre de dor",
      "Teste ergométrico contraindicado (pode precipitar IAM)",
      "Wellens tipo A pode evoluir para tipo B",
      "Mortalidade sem intervenção: até 75% em semanas"
    ],
    tags: ["wellens", "da", "coronária", "ondas t", "síndrome"]
  },
  {
    id: "ecg-brugada",
    title: "Padrão de Brugada",
    category: "ecg",
    subcategory: "Canalopatias",
    image_description: "Supra de ST tipo 'coved' (côncavo para baixo, ≥ 2mm) em V1-V2, seguido de onda T invertida. Pode haver padrão em sela (tipo 2/3) que é menos específico.",
    findings: [
      "Tipo 1 (diagnóstico): ST coved ≥ 2mm + T invertida em V1-V2",
      "Tipo 2: ST em sela ≥ 2mm em V1-V2",
      "Tipo 3: ST em sela < 2mm",
      "Pode ser intermitente ou provocado por febre, drogas"
    ],
    clinical_significance: "Risco de morte súbita por FV. Tipo 1 espontâneo + síncope = CDI. Febre pode desmascarar o padrão. Prevalência maior no sudeste asiático.",
    pearls: [
      "Febre > 38°C pode desmascarar Brugada → ECG febril",
      "Posicionar V1-V2 no 2º EIC aumenta sensibilidade",
      "Evitar: antiarrítmicos classe I, tricíclicos, lítio, cocaína",
      "Brugada tipo 1 + morte súbita familiar = CDI"
    ],
    tags: ["brugada", "morte súbita", "canalopatia", "coved"]
  },
  {
    id: "ecg-hipercalemia",
    title: "Hipercalemia no ECG",
    category: "ecg",
    subcategory: "Distúrbios Eletrolíticos",
    image_description: "Progressão de achados conforme K+ sobe: ondas T apiculadas (5,5-6,5) → achatamento de P e alargamento de QRS (6,5-7,5) → padrão sinusoidal e FV (>7,5).",
    findings: [
      "K+ 5,5-6,5: Ondas T apiculadas e simétricas ('em tenda')",
      "K+ 6,5-7,0: Achatamento da onda P, prolongamento do PR",
      "K+ 7,0-7,5: Alargamento do QRS",
      "K+ > 7,5: Padrão sinusoidal (pré-parada)",
      "K+ > 8,0: FV ou assistolia"
    ],
    clinical_significance: "Emergência metabólica. K+ > 6,5 com alteração de ECG = gluconato de cálcio IV imediato (estabilização de membrana). Salbutamol, insulina+glicose, diálise.",
    pearls: [
      "Ondas T apiculadas podem parecer normais em jovens (repolarização precoce)",
      "Gluconato de cálcio NÃO reduz o K+, apenas estabiliza membrana",
      "Paciente renal crônico pode tolerar K+ alto sem alteração de ECG",
      "Pseudo-hipercalemia: hemólise da amostra é causa comum"
    ],
    tags: ["hipercalemia", "potássio", "eletrólito", "ondas t"]
  },

  // ========== DERMATOLOGIA ==========
  {
    id: "derm-ssj",
    title: "Síndrome de Stevens-Johnson / NET",
    category: "dermatology",
    subcategory: "Reações Adversas a Drogas",
    image_description: "Lesões eritematosas e bolhosas disseminadas com destacamento epidérmico. Sinal de Nikolsky positivo. Acometimento mucoso (oral, ocular, genital). SSJ <10% SCT; NET >30% SCT.",
    findings: [
      "Máculas purpúricas/eritematosas com centro necrótico",
      "Bolhas flácidas com destacamento epidérmico",
      "Sinal de Nikolsky positivo",
      "Erosões mucosas dolorosas (boca, olhos, genitália)",
      "Distribuição centrípeta (tronco > extremidades)"
    ],
    clinical_significance: "Emergência dermatológica. Mortalidade SSJ 1-5%, NET 25-35%. Usar SCORTEN para prognóstico. Suspender droga causadora imediatamente. UTI queimados se >10% SCT.",
    pearls: [
      "Drogas mais comuns: alopurinol, anticonvulsivantes (carbamazepina, fenitoína, lamotrigina), sulfonamidas, AINEs oxicam",
      "Latência típica: 1-3 semanas após início da droga",
      "HLA-B*5801 associado a SSJ por alopurinol (rastrear antes)",
      "NÃO usar corticoide sistêmico (controverso, pode piorar)"
    ],
    differentials: ["Pênfigo vulgar", "Eritema multiforme major", "DRESS", "SSSS (estafilococia esfoliativa)"],
    tags: ["ssj", "net", "stevens-johnson", "lyell", "droga", "bolha"]
  },
  {
    id: "derm-meningococcemia",
    title: "Púrpura Meningocócica",
    category: "dermatology",
    subcategory: "Infecções Cutâneas Graves",
    image_description: "Petéquias e púrpuras palpáveis de rápida progressão, que não desaparecem à vitropressão. Evolução para equimoses extensas e necrose. Distribuição nos membros inferiores e tronco.",
    findings: [
      "Petéquias que NÃO somem à vitropressão",
      "Progressão rápida para púrpura palpável",
      "Equimoses irregulares (purpura fulminans)",
      "Necrose cutânea hemorrágica extensa",
      "Lesões em tronco e extremidades"
    ],
    clinical_significance: "Sepse meningocócica fulminante. Mortalidade 40-50% se purpura fulminans. Ceftriaxona IV imediata. Notificação compulsória. Quimioprofilaxia dos contatos.",
    pearls: [
      "Petéquias + febre + meningismo = meningococcemia até prova contrária",
      "ATB NA PRIMEIRA HORA — não esperar exames",
      "Purpura fulminans = CIVD + necrose = indicação de UTI",
      "Teste do copo (vitropressão): petéquias persistem = alerta"
    ],
    tags: ["meningococo", "púrpura", "petéquias", "sepse", "notificação"]
  },
  {
    id: "derm-herpes-zoster",
    title: "Herpes-Zóster",
    category: "dermatology",
    subcategory: "Infecções Virais",
    image_description: "Vesículas agrupadas sobre base eritematosa, distribuição em dermátomo (unilateral, não cruza a linha média). Mais comum em tronco (intercostais) e face (V1 do trigêmeo).",
    findings: [
      "Vesículas agrupadas em base eritematosa",
      "Distribuição em dermátomo (banda unilateral)",
      "Dor neuropática intensa (pode preceder lesões em 2-3 dias)",
      "Não cruza a linha média",
      "Crostas formam em 7-10 dias"
    ],
    clinical_significance: "Reativação do VZV. Aciclovir/Valaciclovir em < 72h do início. Zóster oftálmico (V1) = urgência oftalmológica. Neuralgia pós-herpética em 10-20%.",
    pearls: [
      "Dor sem lesões = zóster sine herpete (diagnóstico difícil)",
      "Sinal de Hutchinson (ponta do nariz) = ramo nasociliar = risco ocular",
      "Zóster disseminado (>20 vesículas fora do dermátomo) = imunossupressão",
      "Vacina Shingrix recomendada ≥ 50 anos (mesmo com história prévia)"
    ],
    tags: ["herpes", "zóster", "varicela", "dermátomo", "neuralgia"]
  },
  {
    id: "derm-celulite",
    title: "Celulite vs Erisipela",
    category: "dermatology",
    subcategory: "Infecções Bacterianas",
    image_description: "Erisipela: placa eritematosa elevada, bem delimitada, bordas nítidas, pele em casca de laranja. Celulite: eritema difuso, mal delimitado, edema profundo, sem bordas nítidas.",
    findings: [
      "Erisipela: bordas elevadas e bem delimitadas",
      "Erisipela: pele em 'casca de laranja' (edema dérmico)",
      "Celulite: eritema difuso sem bordas nítidas",
      "Celulite: acometimento mais profundo (subcutâneo)",
      "Ambas: calor, dor, edema local, ± febre"
    ],
    clinical_significance: "Erisipela: Streptococcus (penicilina/cefalosporina). Celulite: S. aureus + Strepto (oxacilina/cefalosporina 1ª). Fasciíte necrotizante = emergência cirúrgica.",
    pearls: [
      "Dor desproporcional + crepitação + toxemia = fasciíte necrotizante",
      "Porta de entrada: intertrigo, úlcera, micose interdigital",
      "Celulite orbital (pós-septal) ≠ pré-septal — TC de órbita",
      "Recorrência >3 episódios: profilaxia com penicilina benzatina"
    ],
    tags: ["celulite", "erisipela", "infecção", "pele", "streptococcus"]
  },
  {
    id: "derm-melanoma",
    title: "Melanoma — Regra ABCDE",
    category: "dermatology",
    subcategory: "Lesões Pigmentadas",
    image_description: "Lesão pigmentada assimétrica, bordas irregulares, coloração heterogênea (marrom, preto, vermelho, branco, azul), diâmetro >6mm e evolução recente (mudança de tamanho, forma ou cor).",
    findings: [
      "A — Assimetria: metades diferentes",
      "B — Bordas irregulares, entalhadas",
      "C — Cor heterogênea (≥ 2 tons)",
      "D — Diâmetro > 6mm",
      "E — Evolução recente (mudança)"
    ],
    clinical_significance: "Neoplasia cutânea mais letal. Encaminhamento urgente para biópsia excisional. Breslow (espessura) define estadiamento e prognóstico. Pesquisa de linfonodo sentinela se Breslow > 0,8mm.",
    pearls: [
      "'Patinho feio': lesão que se destaca das demais nevos do paciente",
      "Melanoma amelanótico pode simular granuloma piogênico",
      "Dermatoscopia aumenta acurácia diagnóstica em 30%",
      "NUNCA fazer biópsia incisional (shave) em lesão suspeita"
    ],
    tags: ["melanoma", "abcde", "pigmentada", "nevo", "biópsia"]
  },

  // ========== RADIOLOGIA ==========
  {
    id: "rad-pneumotorax",
    title: "Pneumotórax no Raio-X",
    category: "radiology",
    subcategory: "Tórax — Emergências",
    image_description: "Linha de pleura visceral visível com hipotransparência entre ela e a parede torácica. Ausência de trama vascular além da linha pleural. Se hipertensivo: desvio contralateral do mediastino.",
    findings: [
      "Linha pleural visceral visível (hipertransparência periférica)",
      "Ausência de trama vascular além da linha pleural",
      "Hiperinsuflação do hemitórax acometido",
      "Se hipertensivo: desvio do mediastino para lado oposto",
      "Achatamento ou inversão da cúpula diafragmática"
    ],
    clinical_significance: "Pneumotórax pequeno (<2cm no ápice): observação. Grande ou sintomático: drenagem. Hipertensivo: punção de alívio (2º EIC, linha hemiclavicular) ANTES do RX.",
    pearls: [
      "RX em expiração NÃO é mais sensível — pode confundir",
      "TC é padrão-ouro para pneumotórax oculto (trauma)",
      "USG de tórax: ausência de deslizamento pleural (sliding sign) e ausência de cauda de cometa",
      "Pneumotórax hipertensivo é diagnóstico CLÍNICO, não radiológico"
    ],
    tags: ["pneumotórax", "rx", "tórax", "drenagem", "emergência"]
  },
  {
    id: "rad-derrame-pleural",
    title: "Derrame Pleural no Raio-X",
    category: "radiology",
    subcategory: "Tórax — Efusões",
    image_description: "Opacidade homogênea com concavidade superior (sinal do menisco) obliterando o seio costofrênico. Em AP (decúbito): velamento difuso do hemitórax. Em perfil: 200mL já são visíveis.",
    findings: [
      "Obliteração do seio costofrênico (>200mL em PA)",
      "Sinal do menisco (concavidade superior)",
      "Opacidade homogênea na base",
      "Desvio contralateral do mediastino (se grande volume)",
      "Em decúbito lateral: derrame livre escorre"
    ],
    clinical_significance: "Toracocentese diagnóstica se causa incerta. Critérios de Light para exsudato vs transudato. Empiema = drenagem. Hemotórax > 1500mL = toracotomia.",
    pearls: [
      "Seio costofrênico posterior obliterado no perfil antes do PA",
      "USG point-of-care: sensibilidade > RX para derrames pequenos",
      "Derrame loculado não escorre em decúbito lateral",
      "Derrame maciço com mediastino centralizado = atelectasia ou tumor"
    ],
    tags: ["derrame", "pleural", "rx", "toracocentese", "light"]
  },
  {
    id: "rad-eap",
    title: "Edema Agudo de Pulmão no Raio-X",
    category: "radiology",
    subcategory: "Tórax — Insuficiência Cardíaca",
    image_description: "Opacidades bilaterais peri-hilares (padrão em 'asa de borboleta/morcego'). Cefalização da trama vascular. Linhas B de Kerley. Derrame pleural bilateral. Cardiomegalia.",
    findings: [
      "Opacidades alveolares bilaterais peri-hilares ('asa de borboleta')",
      "Cefalização da trama vascular (redistribuição)",
      "Linhas B de Kerley (edema intersticial)",
      "Espessamento de septos interlobulares",
      "Derrame pleural bilateral (mais à direita)",
      "Cardiomegalia (ICT > 0,5)"
    ],
    clinical_significance: "IC descompensada com congestão pulmonar. VNI (CPAP/BiPAP) + furosemida IV + nitroglicerina. Diferenciar de SDRA (sem cardiomegalia, sem cefalização).",
    pearls: [
      "Sequência radiológica: redistribuição → edema intersticial → edema alveolar",
      "EAP pode ter RX normal nas primeiras horas (edema intersticial)",
      "Flash pulmonary edema: EAP sem cardiomegalia (crise hipertensiva)",
      "USG pulmonar: linhas B bilaterais (perfil B) mais precoce que RX"
    ],
    tags: ["eap", "edema", "pulmonar", "ic", "congestão"]
  },
  {
    id: "rad-pneumonia",
    title: "Consolidação Pneumônica no Raio-X",
    category: "radiology",
    subcategory: "Tórax — Infecções",
    image_description: "Opacidade alveolar com broncograma aéreo em distribuição lobar ou segmentar. Pode haver derrame parapneumônico associado. Limites definidos pelas cissuras.",
    findings: [
      "Opacidade alveolar homogênea",
      "Broncograma aéreo (brônquios visíveis dentro da opacidade)",
      "Distribuição lobar ou segmentar",
      "Sinal da silhueta (borda cardíaca ou diafragma apagada)",
      "± Derrame pleural parapneumônico"
    ],
    clinical_significance: "Pneumonia comunitária: ATB empírico baseado em gravidade (CURB-65 ou PSI). Derrame > 10mm em decúbito lateral = toracocentese. Abscesso = ATB prolongado ± drenagem.",
    pearls: [
      "Sinal da silhueta: consolidação em LM apaga borda cardíaca direita",
      "Pneumonia redonda em criança pode simular massa",
      "TC indicada se evolução desfavorável, suspeita de complicação",
      "Pneumatoceles = S. aureus em crianças"
    ],
    tags: ["pneumonia", "consolidação", "broncograma", "rx", "infecção"]
  },
  {
    id: "rad-fratura-colles",
    title: "Fratura de Colles (Rádio Distal)",
    category: "radiology",
    subcategory: "Ortopedia — Extremidades",
    image_description: "Fratura do rádio distal com desvio dorsal do fragmento (aspecto em 'dorso de garfo' no perfil). Impactação cortical dorsal. Pode associar fratura do processo estiloide ulnar.",
    findings: [
      "Traço de fratura na metáfise distal do rádio",
      "Desvio dorsal do fragmento distal (perfil)",
      "Angulação dorsal ('dorso de garfo')",
      "Encurtamento radial",
      "± Fratura do processo estiloide da ulna"
    ],
    clinical_significance: "Fratura mais comum do punho. Mecanismo: queda com mão estendida (FOOSH). Redução fechada + imobilização se estável. Cirurgia se intra-articular ou instável.",
    pearls: [
      "Colles = desvio dorsal; Smith = desvio volar ('Colles invertida')",
      "Inclinação radial normal: 22° (AP) e 11° volar (perfil)",
      "Fratura de Barton = fratura-luxação marginal do rádio",
      "Complicações: síndrome do túnel do carpo, SDRC, consolidação viciosa"
    ],
    tags: ["colles", "rádio", "punho", "fratura", "ortopedia"]
  },
  {
    id: "rad-abdome-agudo",
    title: "Abdome Agudo Obstrutivo no Raio-X",
    category: "radiology",
    subcategory: "Abdome — Emergências",
    image_description: "Distensão de alças de delgado (>3cm) com níveis hidroaéreos em degraus (ortostática). Ausência de gás no reto. Delgado centralizado, haustrações incompletas (pregas coniventes).",
    findings: [
      "Distensão de alças de delgado > 3cm",
      "Níveis hidroaéreos escalonados (em degraus)",
      "Pregas coniventes (válvulas conniventes) do delgado",
      "Ausência de gás distal à obstrução",
      "Sinal do empilhamento de moedas"
    ],
    clinical_significance: "Obstrução intestinal: causa mais comum = aderências (pós-cirúrgica). Estrangulamento = emergência cirúrgica. TC com contraste IV para avaliar complicações.",
    pearls: [
      "Delgado: central, pregas coniventes cruzam toda a luz",
      "Cólon: periférico, haustrações NÃO cruzam toda a luz",
      "Íleo paralítico = distensão difusa SEM ponto de transição",
      "Pneumoperitônio: ar livre subdiafragmático = perfuração"
    ],
    tags: ["obstrução", "abdome", "agudo", "rx", "níveis"]
  },
  {
    id: "rad-tce",
    title: "Hematomas Intracranianos na TC",
    category: "radiology",
    subcategory: "Neuroimagem — Emergências",
    image_description: "Epidural: lente biconvexa hiperdensa ('limão'), não cruza suturas. Subdural: coleção em crescente ('banana'), cruza suturas. Intraparenquimatoso: hiperdensidade no parênquima.",
    findings: [
      "Hematoma epidural: biconvexo, hiperdensidade, não cruza sutura",
      "Hematoma subdural agudo: crescente, hiperdensidade, cruza suturas",
      "Hematoma subdural crônico: hipodensidade em crescente",
      "Hemorragia subaracnoidea: hiperdensidade nas cisternas e sulcos",
      "Hematoma intraparenquimatoso: lesão hiperdensa arredondada"
    ],
    clinical_significance: "TC sem contraste é exame de escolha no TCE agudo. Epidural = artéria meníngea média = cirurgia de emergência se > 15mm ou shift > 5mm. Subdural = veias ponte.",
    pearls: [
      "Epidural: 'intervalo lúcido' clássico (piora após melhora)",
      "Subdural crônico em idosos: pode ser iso/hipodenso — fácil de perder",
      "HSA na TC: sensibilidade 98% nas primeiras 6h, cai após 24h",
      "Shift de linha média > 5mm = indicação cirúrgica"
    ],
    tags: ["tce", "hematoma", "epidural", "subdural", "tc", "crânio"]
  },

  // ========== OFTALMOLOGIA ==========
  {
    id: "oftalmo-glaucoma-agudo",
    title: "Glaucoma Agudo de Ângulo Fechado",
    category: "ophthalmology",
    subcategory: "Emergências Oculares",
    image_description: "Olho vermelho com injeção ciliar (hiperemia periquerática). Pupila em midríase média fixa. Edema de córnea (aspecto turvo). Câmara anterior rasa.",
    findings: [
      "Olho vermelho com injeção ciliar (periquerática)",
      "Pupila em midríase média fixa (oval)",
      "Edema de córnea (aspecto turvo/embaçado)",
      "Câmara anterior rasa",
      "PIO muito elevada (40-80 mmHg) ao toque digital (olho pétreo)"
    ],
    clinical_significance: "Emergência oftalmológica. Sem tratamento: perda visual irreversível em horas. Tratamento: timolol + pilocarpina + acetazolamida + manitol → iridotomia a laser.",
    pearls: [
      "Dor periocular intensa + náuseas/vômitos pode simular abdome agudo",
      "Midriáticos (atropina, fenilefrina) CONTRAINDICADOS",
      "Olho contralateral também tem risco — profilaxia com iridotomia",
      "Diferencial: uveíte anterior (pupila em miose, PIO normal/baixa)"
    ],
    tags: ["glaucoma", "ângulo fechado", "pio", "emergência", "olho"]
  },

  // ========== LAB / HEMATOLOGIA ==========
  {
    id: "lab-anemia-falciforme",
    title: "Esfregaço — Anemia Falciforme",
    category: "lab",
    subcategory: "Hemoglobinopatias",
    image_description: "Hemácias em foice (drepanócitos) no esfregaço periférico. Presença de hemácias em alvo (target cells). Corpúsculos de Howell-Jolly (asplenia funcional). Policromasia.",
    findings: [
      "Drepanócitos (hemácias em foice/crescente)",
      "Hemácias em alvo (target cells)",
      "Corpúsculos de Howell-Jolly (inclusões nucleares)",
      "Policromasia (reticulocitose)",
      "Eritroblastos circulantes"
    ],
    clinical_significance: "Doença falciforme (HbSS). Crises vaso-oclusivas, síndrome torácica aguda, sequestro esplênico. Transfusão simples ou exsanguineotransfusão. Hidroxiureia como profilaxia.",
    pearls: [
      "Howell-Jolly = asplenia funcional → vacinação (pneumococo, meningococo, Hib)",
      "Crise aplástica: queda de reticulócitos = parvovírus B19",
      "Hemoglobina alvo na troca: HbS < 30%",
      "Priapismo > 4h = emergência urológica"
    ],
    tags: ["falciforme", "drepanócito", "hbss", "esfregaço", "foice"]
  },
  {
    id: "lab-civd",
    title: "Esfregaço — CIVD (Esquistócitos)",
    category: "lab",
    subcategory: "Coagulopatias",
    image_description: "Presença de esquistócitos (fragmentos de hemácias: capacetes, triângulos, crescentes) no esfregaço periférico. Trombocitopenia. Policromasia.",
    findings: [
      "Esquistócitos (fragmentos de hemácias) > 1%",
      "Hemácias fragmentadas: capacetes, triângulos, crescentes",
      "Trombocitopenia",
      "Policromasia (resposta medular)",
      "Esferócitos ocasionais"
    ],
    clinical_significance: "CIVD: consumo de fatores + fibrinólise. Fibrinogênio baixo, D-dímero alto, TP/TTPa alargados, plaquetopenia. Tratar causa base. Repor fatores se sangramento ativo.",
    pearls: [
      "Esquistócitos + plaquetopenia + LDH alto + Coombs negativo = microangiopatia",
      "Diferenciar CIVD de PTT: PTT tem ADAMTS13 < 10%",
      "Score ISTH para CIVD: ≥ 5 pontos = CIVD manifesta",
      "Fibrinogênio < 100 mg/dL na CIVD = repor crioprecipitado"
    ],
    tags: ["civd", "esquistócito", "coagulação", "microangiopatia", "esfregaço"]
  }
];
