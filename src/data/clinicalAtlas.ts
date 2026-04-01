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
  imageUrl?: string;
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
  },

  // ========== ECG — Arritmias ==========
  {
    id: "ecg-fa",
    title: "Fibrilação Atrial",
    category: "ecg",
    subcategory: "Arritmias Supraventriculares",
    image_description: "Ausência de ondas P organizadas, substituídas por oscilações irregulares da linha de base (ondas f). Intervalos R-R irregulares. Frequência ventricular variável.",
    findings: [
      "Ritmo irregularmente irregular",
      "Ausência de ondas P definidas",
      "Ondas f (fibrilatórias) — melhor vistas em V1",
      "QRS estreito (exceto se bloqueio prévio ou condução aberrante)",
      "Frequência ventricular variável (60-170 bpm)"
    ],
    clinical_significance: "Arritmia sustentada mais comum. Risco de AVC cardioembólico: calcular CHA₂DS₂-VASc. Controlar FC < 110 bpm (leniente) ou < 80 bpm (estrito). Anticoagulação se score ≥ 2 (homens) ou ≥ 3 (mulheres).",
    pearls: [
      "FA + resposta ventricular rápida + QRS largo = pensar em pré-excitação (WPW)",
      "FA + FC regular = pensar em BAV total com escape juncional",
      "Cardioversão elétrica se instabilidade hemodinâmica",
      "FA < 48h pode ser cardiovertida sem anticoagulação prévia prolongada"
    ],
    differentials: ["Flutter atrial", "Taquicardia atrial multifocal", "Extrassístoles atriais frequentes"],
    tags: ["fa", "fibrilação", "atrial", "arritmia", "irregular"]
  },
  {
    id: "ecg-flutter",
    title: "Flutter Atrial",
    category: "ecg",
    subcategory: "Arritmias Supraventriculares",
    image_description: "Ondas F em dente de serra, regulares, mais evidentes em DII, DIII, aVF e V1. Frequência atrial ~300 bpm. Condução AV tipicamente 2:1 (FC ~150 bpm).",
    findings: [
      "Ondas F em 'dente de serra' — negativas em DII/DIII/aVF",
      "Frequência atrial ~300 bpm",
      "Condução AV fixa (2:1, 3:1, 4:1) ou variável",
      "FC ~150 bpm na condução 2:1 típica",
      "QRS estreito"
    ],
    clinical_significance: "Circuito de macro-reentrada no átrio direito (flutter típico). FC ~150 bpm deve sempre levantar suspeita. Tratável por ablação com alta taxa de sucesso.",
    pearls: [
      "FC 150 bpm com QRS estreito = flutter 2:1 até que se prove o contrário",
      "Manobra vagal ou adenosina desmascarar as ondas F sem converter",
      "Flutter típico: ablação do istmo cavotricuspídeo tem sucesso > 95%",
      "Risco tromboembólico similar à FA — anticoagular igual"
    ],
    differentials: ["Fibrilação atrial", "Taquicardia atrial", "Taquicardia sinusal"],
    tags: ["flutter", "atrial", "dente de serra", "arritmia", "150bpm"]
  },
  {
    id: "ecg-tpsv",
    title: "Taquicardia Paroxística Supraventricular (TPSV)",
    category: "ecg",
    subcategory: "Arritmias Supraventriculares",
    image_description: "Taquicardia regular de QRS estreito, FC 150-250 bpm. Início e término abruptos. Ondas P retrógradas podem estar ocultas no QRS ou logo após.",
    findings: [
      "Taquicardia regular, QRS estreito (< 120ms)",
      "FC 150-250 bpm",
      "Ondas P ausentes ou retrógradas (pseudo-S em DII ou pseudo-r' em V1)",
      "Intervalo R-R regular",
      "Sem alteração isquêmica primária"
    ],
    clinical_significance: "Mecanismo: reentrada nodal AV (TRNAV 60%) ou via acessória (TRAV 30%). Benigna na maioria. Tratamento agudo: manobra vagal → adenosina 6-12mg IV.",
    pearls: [
      "Manobra de Valsalva modificada (soprar + elevar MMII) aumenta sucesso para 43%",
      "Adenosina: push rápido seguido de flush — usar veia antecubital",
      "TPSV que não reverte com adenosina = pensar em taquicardia atrial",
      "Ablação curativa para TRNAV/TRAV com sucesso > 95%"
    ],
    differentials: ["Flutter atrial 2:1", "Taquicardia atrial", "Taquicardia sinusal"],
    tags: ["tpsv", "taquicardia", "supraventricular", "reentrada", "adenosina"]
  },
  {
    id: "ecg-tv",
    title: "Taquicardia Ventricular Monomórfica",
    category: "ecg",
    subcategory: "Arritmias Ventriculares",
    image_description: "Taquicardia regular de QRS largo (> 120ms), FC 120-250 bpm. Morfologia do QRS uniforme. Dissociação AV pode estar presente.",
    findings: [
      "QRS largo > 120ms com morfologia uniforme",
      "FC 120-250 bpm, regular",
      "Dissociação AV (ondas P marchando independentes)",
      "Batimentos de captura e fusão (patognomônicos)",
      "Eixo elétrico desviado (frequente no man's land)"
    ],
    clinical_significance: "Emergência. Causa mais comum: reentrada em cicatriz de IAM prévio. Instável: cardioversão elétrica sincronizada. Estável: amiodarona IV 150mg em 10min.",
    pearls: [
      "Critérios de Brugada para diferenciar TV de TSV com aberrância",
      "Ausência de complexo RS em precordiais = TV",
      "Concordância (todos QRS positivos ou negativos em V1-V6) = TV",
      "Taquicardia de QRS largo + instabilidade = cardioverter imediatamente"
    ],
    differentials: ["TSV com aberrância", "TSV com pré-excitação", "Ritmo de marca-passo"],
    tags: ["tv", "taquicardia ventricular", "qrs largo", "arritmia", "amiodarona"]
  },
  {
    id: "ecg-torsades",
    title: "Torsades de Pointes",
    category: "ecg",
    subcategory: "Arritmias Ventriculares",
    image_description: "Taquicardia ventricular polimórfica com QRS 'rodando' ao redor da linha de base, padrão sinusoidal. QT longo no ECG basal. Amplitude dos QRS varia progressivamente.",
    findings: [
      "QRS polimórficos com rotação progressiva do eixo",
      "Padrão fusiforme (crescendo-decrescendo)",
      "FC 150-300 bpm",
      "QTc prolongado no ECG basal (> 500ms alto risco)",
      "Frequentemente autolimitada mas pode degenerar em FV"
    ],
    clinical_significance: "TV polimórfica associada a QT longo. Tratamento: sulfato de magnésio 2g IV. Isoproterenol ou marca-passo temporário para aumentar FC. EVITAR amiodarona (prolonga QT).",
    pearls: [
      "Magnésio IV é o tratamento de escolha — mesmo com Mg sérico normal",
      "Amiodarona é CONTRAINDICADA (prolonga QT e piora torsades)",
      "Causas comuns de QT longo: haloperidol, ondansetrona, metadona, hipocalemia",
      "Sequência T-U proeminente pode preceder o episódio"
    ],
    differentials: ["TV polimórfica sem QT longo (isquêmica)", "Fibrilação ventricular"],
    tags: ["torsades", "qt longo", "polimórfica", "magnésio", "arritmia"]
  },
  {
    id: "ecg-wpw",
    title: "Síndrome de Wolff-Parkinson-White (WPW)",
    category: "ecg",
    subcategory: "Pré-excitação",
    image_description: "PR curto (< 120ms), onda delta (empastamento inicial do QRS), QRS alargado. Alterações de repolarização secundárias.",
    findings: [
      "Intervalo PR curto (< 120ms)",
      "Onda delta (rampa ascendente lenta no início do QRS)",
      "QRS alargado (> 110ms)",
      "Alterações de ST-T secundárias (discordantes)",
      "Pseudo-Q em derivações inferiores (via acessória posterosseptal)"
    ],
    clinical_significance: "Via acessória conduz impulso precocemente ao ventrículo. Risco de FA pré-excitada com condução rápida → FV. Ablação indicada se sintomático ou profissão de risco.",
    pearls: [
      "FA em WPW: QRS largo irregular → procainamida ou cardioversão. NUNCA usar verapamil/digoxina/adenosina",
      "Onda delta positiva em V1 = via acessória esquerda",
      "Onda delta negativa em V1 = via acessória direita",
      "Padrão intermitente de WPW = menor risco de morte súbita"
    ],
    differentials: ["Bloqueio de ramo", "IAM (pseudo-Q da delta)", "Hipertrofia ventricular"],
    tags: ["wpw", "pré-excitação", "delta", "via acessória", "pr curto"]
  },
  {
    id: "ecg-bav-3",
    title: "Bloqueio Atrioventricular Total (BAV 3º grau)",
    category: "ecg",
    subcategory: "Distúrbios de Condução",
    image_description: "Dissociação AV completa: ondas P e complexos QRS marchando independentemente. Frequência atrial maior que ventricular. Escape juncional ou ventricular.",
    findings: [
      "Ondas P regulares sem relação com QRS",
      "Intervalo P-P regular, intervalo R-R regular (mas independentes)",
      "Frequência atrial > frequência ventricular",
      "Escape juncional (QRS estreito, FC 40-60) ou ventricular (QRS largo, FC 20-40)",
      "Possíveis batimentos de captura intermitentes"
    ],
    clinical_significance: "Nenhum impulso atrial conduz ao ventrículo. Marca-passo transcutâneo de emergência se sintomático. Atropina pode ser ineficaz se bloqueio infra-Hissiano.",
    pearls: [
      "BAV 3º + escape QRS largo = bloqueio infra-His = marca-passo urgente",
      "BAV 3º + IAM inferior = geralmente transitório (nodal) — aguardar 5-7 dias",
      "BAV 3º + IAM anterior = mau prognóstico — marca-passo definitivo",
      "Atropina funciona melhor no bloqueio nodal (QRS estreito)"
    ],
    tags: ["bav", "bloqueio", "atrioventricular", "total", "marca-passo"]
  },
  {
    id: "ecg-brugada",
    title: "Padrão de Brugada Tipo 1",
    category: "ecg",
    subcategory: "Canalopatias",
    image_description: "Supradesnivelamento de ST tipo 'coved' (≥ 2mm) em V1-V2 seguido de onda T invertida. Padrão em sela de cavalo no tipo 2.",
    findings: [
      "Supra de ST ≥ 2mm em V1-V2 com morfologia 'coved' (convexa descendente)",
      "Onda T invertida após o supra de ST",
      "QRS com padrão de BRD (pode ser incompleto)",
      "Tipo 1 é o único diagnóstico — tipos 2/3 são sugestivos",
      "Pode ser desmascarado por febre, drogas (ajmalina, procainamida)"
    ],
    clinical_significance: "Canalopatia de sódio com risco de morte súbita por FV. CDI indicado se síncope ou PCR prévia. Evitar febre (tratar agressivamente), drogas classe I, cocaína.",
    pearls: [
      "Febre pode desmascarar ou agravar o padrão — tratar febre agressivamente",
      "Teste com ajmalina/procainamida se padrão tipo 2/3 + história suspeita",
      "Brugada-like: BRD + supra em V1-V2 após antidepressivos tricíclicos",
      "Prevalência maior em homens asiáticos — 8x mais que mulheres"
    ],
    differentials: ["Repolarização precoce", "IAM anterior", "Pericardite", "BRD"],
    tags: ["brugada", "coved", "morte súbita", "canalopatia", "v1v2"]
  },

  // ========== Dermatologia — Lesões de Pele ==========
  {
    id: "derm-herpes-zoster-torax",
    title: "Herpes Zoster Torácico",
    category: "dermatology",
    subcategory: "Infecções Virais",
    image_description: "Vesículas agrupadas sobre base eritematosa em faixa dermatomal unilateral (T3-T6). Não ultrapassa a linha média. Crostas em lesões mais antigas. Edema e eritema perilesional.",
    findings: [
      "Vesículas agrupadas em base eritematosa",
      "Distribuição dermatomal unilateral (faixa)",
      "Não cruza a linha média",
      "Lesões em diferentes estágios (vesículas + crostas)",
      "Dor neuropática intensa precedendo o rash (2-3 dias)"
    ],
    clinical_significance: "Reativação do VZV latente em gânglios dorsais. Tratar com valaciclovir 1g 8/8h por 7 dias. Iniciar em < 72h do rash. Neuralgia pós-herpética em 10-20% > 50 anos.",
    pearls: [
      "Dor sem rash (zoster sine herpete) é subdiagnosticada",
      "Envolvimento do ramo oftálmico (V1): sinal de Hutchinson (ponta do nariz) = risco ocular",
      "Zoster em < 40 anos: investigar imunossupressão/HIV",
      "Vacina Shingrix (recombinante): eficácia > 90% em > 50 anos"
    ],
    differentials: ["Dermatite de contato", "Herpes simplex", "Celulite", "Impetigo bolhoso"],
    tags: ["herpes", "zoster", "vesícula", "dermátomo", "valaciclovir"]
  },
  {
    id: "derm-celulite",
    title: "Celulite e Erisipela",
    category: "dermatology",
    subcategory: "Infecções Bacterianas",
    image_description: "Eritema difuso, calor, edema e dor em membro inferior. Erisipela: bordas bem demarcadas e elevadas. Celulite: bordas imprecisas com acometimento mais profundo.",
    findings: [
      "Eritema quente, edematoso e doloroso",
      "Erisipela: bordas elevadas e bem definidas (acometimento superficial)",
      "Celulite: bordas difusas (acometimento dérmico-hipodérmico)",
      "Linfangite (estrias vermelhas ascendentes)",
      "Porta de entrada: intertrigo, úlcera, trauma"
    ],
    clinical_significance: "Erisipela: Streptococcus (penicilina). Celulite: Staphylococcus/Streptococcus (cefalosporina 1ª geração). Fasciíte necrosante: dor desproporcional + toxemia = cirurgia urgente.",
    pearls: [
      "Dor desproporcional ao achado cutâneo = suspeitar de fasciíte necrosante",
      "Celulite bilateral é extremamente rara — pensar em dermatite de estase",
      "Marcar as bordas com caneta para monitorar progressão",
      "Celulite periorbitária vs orbital: proptose e dor à movimentação = orbital = TC"
    ],
    differentials: ["Dermatite de estase", "TVP", "Gota", "Dermatite de contato"],
    tags: ["celulite", "erisipela", "infecção", "pele", "estreptococo"]
  },
  {
    id: "derm-melanoma",
    title: "Melanoma — Regra ABCDE",
    category: "dermatology",
    subcategory: "Neoplasias Cutâneas",
    image_description: "Lesão pigmentada assimétrica com bordas irregulares, múltiplas cores (marrom, preto, azul, vermelho, branco), diâmetro > 6mm e evolução recente (mudança de tamanho, cor ou sintomas).",
    findings: [
      "A — Assimetria: metades desiguais",
      "B — Bordas irregulares, denteadas, mal definidas",
      "C — Cor heterogênea (≥ 3 cores: preto, marrom, azul, vermelho, branco)",
      "D — Diâmetro > 6mm (maior que borracha de lápis)",
      "E — Evolução: mudança recente de tamanho/cor/sintomas"
    ],
    clinical_significance: "Neoplasia cutânea mais letal. Breslow (espessura) é o principal fator prognóstico. < 1mm: sobrevida > 95%. > 4mm: sobrevida ~50%. Biópsia excisional completa — nunca shaving.",
    pearls: [
      "Sinal do 'patinho feio': nevo que difere de todos os outros do paciente",
      "Melanoma amelanótico: lesão rosada/vermelha — facilmente confundido",
      "Dermatoscopia: rede pigmentar atípica, véu azul-esbranquiçado, estrias",
      "Linfonodo sentinela indicado se Breslow > 0.8mm"
    ],
    differentials: ["Nevo displásico", "Ceratose seborreica", "Carcinoma basocelular pigmentado", "Hemangioma trombosado"],
    tags: ["melanoma", "abcde", "nevo", "pigmentada", "breslow"]
  },
  {
    id: "derm-cbc",
    title: "Carcinoma Basocelular (CBC)",
    category: "dermatology",
    subcategory: "Neoplasias Cutâneas",
    image_description: "Pápula ou nódulo perolado, translúcido, com telangiectasias arboriformes na superfície. Pode ter ulceração central (CBC nódulo-ulcerativo). Localização predominante em face.",
    findings: [
      "Nódulo perolado/translúcido",
      "Telangiectasias arboriformes",
      "Borda perolada e elevada",
      "Ulceração central com crosta (nódulo-ulcerativo)",
      "Crescimento lento em área fotoexposta (face > 80%)"
    ],
    clinical_significance: "Câncer de pele mais comum (70-80%). Raramente metastatiza, mas causa destruição local. Exérese com margens é o tratamento padrão. Cirurgia de Mohs para áreas nobres da face.",
    pearls: [
      "CBC esclerodermiforme: placa endurecida amarelada — margens difíceis de definir",
      "CBC superficial: placa eritematosa com borda perolada — tronco — pode confundir com eczema",
      "Nunca biopsia incisional se suspeita de melanoma, mas CBC pode ser biopsiado parcialmente",
      "Síndrome de Gorlin: múltiplos CBCs + cistos mandibulares + calcificação da foice cerebral"
    ],
    differentials: ["Melanoma amelanótico", "CEC", "Tricoepitelioma", "Queratoacantoma"],
    tags: ["basocelular", "cbc", "perolado", "telangiectasia", "face"]
  },
  {
    id: "derm-psoríase",
    title: "Psoríase em Placas",
    category: "dermatology",
    subcategory: "Doenças Inflamatórias",
    image_description: "Placas eritematosas bem delimitadas com escamas prateadas espessas em áreas extensoras (cotovelos, joelhos, couro cabeludo, região sacral). Sinal de Auspitz ao remover escamas.",
    findings: [
      "Placas eritematosas com escamas prateadas aderentes",
      "Distribuição simétrica em extensoras",
      "Sinal de Auspitz (pontilhado hemorrágico ao remover escamas)",
      "Fenômeno de Koebner (lesões em áreas de trauma)",
      "Envolvimento ungueal: pitting, onicólise, mancha em óleo"
    ],
    clinical_significance: "Doença inflamatória crônica. Formas graves: eritrodérmica e pustulosa generalizada. Artrite psoriásica em 30%. PASI score para gravidade. Biológicos para casos moderados-graves.",
    pearls: [
      "Psoríase gutata: pós-estreptocócica em jovens — pode resolver espontaneamente",
      "Psoríase inversa: sem escamas, em dobras — confunde com intertrigo fúngico",
      "Psoríase ungueal isolada pode preceder artrite em anos",
      "Comorbidades metabólicas: síndrome metabólica, risco cardiovascular aumentado"
    ],
    differentials: ["Dermatite seborreica", "Tinha corporis", "Eczema numular", "Líquen plano"],
    tags: ["psoríase", "placa", "escama", "auspitz", "koebner"]
  },
  {
    id: "derm-urticaria",
    title: "Urticária Aguda e Angioedema",
    category: "dermatology",
    subcategory: "Reações de Hipersensibilidade",
    image_description: "Placas eritematosas edematosas (urticas) de formato e tamanho variáveis, pruriginosas, evanescentes (< 24h cada lesão). Angioedema: edema de lábios, pálpebras ou língua.",
    findings: [
      "Urticas: placas elevadas, eritematosas, pruriginosas",
      "Lesões individuais duram < 24h (migratórias)",
      "Dermografismo (urtica ao riscar a pele)",
      "Angioedema: edema assimétrico de face/lábios/língua/laringe",
      "Sem descamação ou vesículas"
    ],
    clinical_significance: "Degranulação mastocitária (histamina). Anti-histamínicos H1 de 2ª geração são 1ª linha. Angioedema de via aérea = adrenalina IM. Crônica (> 6 semanas): investigar.",
    pearls: [
      "Urticária + angioedema + hipotensão = anafilaxia — adrenalina IM imediata",
      "Angioedema por IECA: não responde a anti-histamínicos — usar icatibanto",
      "Urticária que dura > 24h no mesmo local = vasculite urticariforme (biopsiar)",
      "Crônica idiopática: dose até 4x do anti-H1 antes de imunossupressor"
    ],
    differentials: ["Vasculite urticariforme", "Eritema multiforme", "Mastocitose", "Dermatite de contato"],
    tags: ["urticária", "angioedema", "histamina", "anafilaxia", "prurido"]
  },
  {
    id: "derm-escabiose",
    title: "Escabiose (Sarna)",
    category: "dermatology",
    subcategory: "Infestações",
    image_description: "Pápulas eritematosas pruriginosas em espaços interdigitais, punhos, axilas, cintura, genitália. Sulcos (túneis lineares). Prurido intenso noturno.",
    findings: [
      "Pápulas eritematosas com prurido intenso (piora noturna)",
      "Sulcos/túneis lineares (patognomônicos) — interdigitais",
      "Distribuição: interdigital, punhos, axilas, periareolar, genitália",
      "Nódulos escabióticos (genitália masculina)",
      "Lesões secundárias: escoriações, impetiginização"
    ],
    clinical_significance: "Sarcoptes scabiei var. hominis. Tratamento: ivermectina 200 mcg/kg dose única (repetir em 7-14 dias) OU permetrina 5% tópica. Tratar TODOS os contactantes.",
    pearls: [
      "Sarna crostosa (norueguesa): imunodeprimidos — altamente contagiosa — isolamento",
      "Prurido pode persistir 2-4 semanas após tratamento eficaz (hipersensibilidade)",
      "Lactentes: acometimento palmoplantar e couro cabeludo é característico",
      "Dermatoscopia: sinal do delta-jet (ácaro = triângulo escuro)"
    ],
    differentials: ["Dermatite atópica", "Dermatite de contato", "Prurigo", "Pediculose"],
    tags: ["escabiose", "sarna", "prurido", "ivermectina", "interdigital"]
  },

  // ========== Radiologia — Fraturas ==========
  {
    id: "rad-fratura-colles",
    title: "Fratura de Colles (Rádio Distal)",
    category: "radiology",
    subcategory: "Fraturas de Membros Superiores",
    image_description: "Fratura metafisária distal do rádio com desvio dorsal e angulação volar do fragmento distal. Perfil: deformidade em 'garfo de jantar'. Pode ter fratura associada do estiloide ulnar.",
    findings: [
      "Fratura transversa ou cominutiva do rádio distal",
      "Desvio dorsal do fragmento distal",
      "Angulação dorsal (perda da inclinação volar normal de 11°)",
      "Impactação com encurtamento radial",
      "Fratura do estiloide ulnar associada (~60%)"
    ],
    clinical_significance: "Fratura mais comum do antebraço. Mecanismo: queda com mão espalmada (FOOSH). Tratamento: redução fechada + gesso se estável. Fixação cirúrgica se intra-articular, instável ou desvio > 2mm.",
    pearls: [
      "Smith = 'Colles inversa': desvio volar ('pá de jardineiro')",
      "Barton: fratura-luxação marginal do rádio distal (dorsal ou volar)",
      "Verificar sempre TC se suspeita de extensão intra-articular",
      "Complicações: síndrome do túnel do carpo, instabilidade ARUD"
    ],
    differentials: ["Fratura de Smith", "Fratura de Barton", "Fratura do escafoide"],
    tags: ["colles", "rádio", "punho", "fratura", "foosh"]
  },
  {
    id: "rad-fratura-tornozelo",
    title: "Fratura de Tornozelo (Weber)",
    category: "radiology",
    subcategory: "Fraturas de Membros Inferiores",
    image_description: "Fratura do maléolo lateral classificada por nível em relação à sindesmose (Weber A/B/C). Pode ter fratura do maléolo medial e/ou posterior associada (bi/trimaleolar).",
    findings: [
      "Fratura do maléolo lateral (fíbula distal)",
      "Weber A: abaixo da sindesmose (estável)",
      "Weber B: ao nível da sindesmose (potencialmente instável)",
      "Weber C: acima da sindesmose (instável — lesão sindesmótica)",
      "Alargamento do espaço claro medial > 4mm = lesão deltoidea"
    ],
    clinical_significance: "Weber A: tratamento conservador. Weber B: depende da estabilidade (stress test). Weber C: cirúrgico — fixação com placa + parafuso sindesmótico. Regras de Ottawa para indicar RX.",
    pearls: [
      "Regras de Ottawa: dor na ponta do maléolo + incapacidade de dar 4 passos = RX",
      "Fratura de Maisonneuve: fratura proximal da fíbula + lesão sindesmótica + deltoidea",
      "Bimaleolar equivalente: Weber B + alargamento medial (sem fratura medial visível)",
      "Sempre palpar fíbula proximal em fraturas de tornozelo"
    ],
    differentials: ["Entorse de tornozelo", "Fratura do tálus", "Fratura de Maisonneuve", "Fratura do 5º metatarso"],
    tags: ["tornozelo", "weber", "maléolo", "fíbula", "sindesmose"]
  },
  {
    id: "rad-fratura-femur-proximal",
    title: "Fratura de Fêmur Proximal (Colo e Transtrocantérica)",
    category: "radiology",
    subcategory: "Fraturas de Membros Inferiores",
    image_description: "Fratura do colo femoral: traço na junção colo-cabeça com encurtamento e rotação externa do membro. Transtrocantérica: traço entre trocanteres com fragmentação.",
    findings: [
      "Fratura do colo: linha trabecular interrompida, impactação ou desvio",
      "Triângulo de Ward apagado ou assimétrico",
      "Membro encurtado e em rotação externa",
      "Sinal de Shenton quebrado (arco femoroacetabular)",
      "Transtrocantérica: cominuição entre trocanteres"
    ],
    clinical_significance: "Emergência geriátrica. Colo femoral desviado (Garden III-IV): prótese em > 65 anos. Colo não desviado: fixação com parafusos. Transtrocantérica: haste cefalomedular. Operar em < 48h.",
    pearls: [
      "RX normal não exclui: se alta suspeita clínica → RM ou TC",
      "Garden I: impactada em valgo (pode deambular!) — facilmente perdida",
      "Fratura patológica: pesquisar metástases (mama, próstata, pulmão, rim, tireoide)",
      "Mortalidade em 1 ano: 20-30% em idosos — cirurgia precoce reduz mortalidade"
    ],
    differentials: ["Fratura patológica", "Fratura do acetábulo", "Fratura subtrocantérica"],
    tags: ["fêmur", "colo", "quadril", "idoso", "garden"]
  },
  {
    id: "rad-fratura-escafoide",
    title: "Fratura do Escafoide",
    category: "radiology",
    subcategory: "Fraturas de Membros Superiores",
    image_description: "Linha de fratura no polo proximal, cintura ou polo distal do escafoide. Pode ser invisível no RX inicial em até 20% dos casos. Dor na tabaqueira anatômica.",
    findings: [
      "Traço de fratura no escafoide (pode ser sutil ou invisível no RX inicial)",
      "Edema de partes moles no punho radial",
      "Sinal do anel do escafoide (projeção AP com desvio ulnar)",
      "Fratura desviada: diastase > 1mm ou angulação > 15°",
      "RX normal com dor na tabaqueira: repetir em 10-14 dias ou RM"
    ],
    clinical_significance: "Fratura carpal mais comum. Vascularização retrógrada do escafoide: fratura do polo proximal tem maior risco de necrose avascular (até 30%). Imobilização 8-12 semanas se não desviada.",
    pearls: [
      "RX inicial negativo em 15-20% — imobilizar e reavaliar se clínica compatível",
      "RM é padrão-ouro para fratura oculta — sensibilidade 100%",
      "Não-união: pseudoartrose → instabilidade carpal → artrose escafossemilunar",
      "Tabaqueira anatômica dolorosa + telescoping do polegar = alta suspeita"
    ],
    differentials: ["Fratura do rádio distal", "Luxação perilunar", "Tendinite de De Quervain"],
    tags: ["escafoide", "punho", "tabaqueira", "carpo", "necrose avascular"]
  },
  {
    id: "rad-fratura-platô-tibial",
    title: "Fratura de Platô Tibial",
    category: "radiology",
    subcategory: "Fraturas de Membros Inferiores",
    image_description: "Depressão ou clivagem do platô tibial (lateral mais comum). Lipohemartrose no RX de perfil com nível líquido. Classificação de Schatzker I-VI.",
    findings: [
      "Depressão articular do platô tibial (lateral 60%)",
      "Lipohemartrose: nível líquido-gordura no recesso suprapatelar (perfil)",
      "Alargamento da metáfise tibial proximal",
      "Schatzker I: clivagem lateral pura",
      "Schatzker II: clivagem + depressão lateral (mais comum)"
    ],
    clinical_significance: "TC imprescindível para planejamento cirúrgico. Depressão > 2mm ou instabilidade em valgo/varo > 10°: indicação cirúrgica. Avaliar lesão ligamentar e meniscal associada.",
    pearls: [
      "Lipohemartrose = fratura intra-articular até que se prove o contrário",
      "Sempre pedir TC: RX subestima a depressão articular em 50% dos casos",
      "Schatzker VI (bicondilar): alta energia — avaliar síndrome compartimental",
      "Lesão do nervo fibular em fraturas laterais de alta energia"
    ],
    differentials: ["Lesão meniscal", "Lesão ligamentar", "Fratura de patela"],
    tags: ["platô", "tibial", "schatzker", "joelho", "lipohemartrose"]
  },

  // ========== Radiologia — TC de Crânio ==========
  {
    id: "rad-tc-hematoma-epidural",
    title: "TC Crânio — Hematoma Epidural",
    category: "radiology",
    subcategory: "TC de Crânio — Trauma",
    image_description: "Coleção hiperdensa biconvexa (lenticular) entre a tábua interna do crânio e a dura-máter. Geralmente temporal. Não cruza suturas. Efeito de massa com desvio da linha média.",
    findings: [
      "Coleção hiperdensa biconvexa (lenticular)",
      "Localização epidural — não cruza suturas cranianas",
      "Região temporal mais comum (artéria meníngea média)",
      "Efeito de massa: desvio da linha média",
      "Fratura temporal associada em 85-95%"
    ],
    clinical_significance: "Emergência neurocirúrgica. Intervalo lúcido clássico: melhora transitória → deterioração rápida. Craniotomia de emergência se desvio > 5mm ou espessura > 15mm. Mortalidade sem cirurgia: muito alta.",
    pearls: [
      "Intervalo lúcido: presente em apenas 20-50% dos casos — não esperar para agir",
      "Herniação uncal ipsilateral: midríase + hemiparesia contralateral (Kernohan: ipsilateral)",
      "Hematoma epidural de fossa posterior: deterioração muito rápida — cirurgia imediata",
      "TC sem contraste é o exame de escolha no TCE agudo"
    ],
    differentials: ["Hematoma subdural agudo", "Contusão cerebral", "HSA traumática"],
    tags: ["epidural", "hematoma", "biconvexo", "temporal", "craniotomia"]
  },
  {
    id: "rad-tc-hematoma-subdural",
    title: "TC Crânio — Hematoma Subdural Agudo",
    category: "radiology",
    subcategory: "TC de Crânio — Trauma",
    image_description: "Coleção hiperdensa em crescente (côncavo-convexa) entre a dura-máter e a aracnoide. Cruza suturas mas não cruza a foice cerebral. Efeito de massa com desvio de linha média.",
    findings: [
      "Coleção hiperdensa em crescente (côncavo-convexa)",
      "Cruza suturas cranianas (diferente do epidural)",
      "Não cruza a foice cerebral nem o tentório",
      "Efeito de massa: apagamento de sulcos + desvio da linha média",
      "Pode ser bilateral em idosos (tração de veias em ponte)"
    ],
    clinical_significance: "Agudo (hiperdenso): trauma, ruptura de veias em ponte. Cirurgia se espessura > 10mm ou desvio > 5mm ou GCS caiu ≥ 2 pontos. Crônico (hipodenso): idosos, anticoagulados — trepanação.",
    pearls: [
      "Subdural crônico: hipodenso (3-4 semanas), pode ser bilateral e mascarar o desvio",
      "Subdural agudo sobre crônico: nível líquido-líquido na TC",
      "Idosos + anticoagulantes: alto risco — TCE leve pode gerar subdural significativo",
      "Subdural na convexidade + hematoma contralateral = contragolpe"
    ],
    differentials: ["Hematoma epidural", "Higroma subdural", "Empiema subdural"],
    tags: ["subdural", "hematoma", "crescente", "veias ponte", "idoso"]
  },
  {
    id: "rad-tc-hsa",
    title: "TC Crânio — Hemorragia Subaracnoidea (HSA)",
    category: "radiology",
    subcategory: "TC de Crânio — Vascular",
    image_description: "Hiperdensidade nas cisternas basais (suprasselar, perimesencefálica, silviana) e/ou nos sulcos corticais. Escala de Fisher para gradação. Pode haver hidrocefalia associada.",
    findings: [
      "Hiperdensidade nas cisternas basais (estrela subaracnoidea)",
      "Sangue nas fissuras silvianas e inter-hemisférica",
      "Hidrocefalia aguda (dilatação dos ventrículos laterais)",
      "Fisher modificado: grau 3-4 maior risco de vasoespasmo",
      "Pode ter hematoma intraparenquimatoso associado"
    ],
    clinical_significance: "80% por ruptura de aneurisma. 'Pior cefaleia da vida'. TC sem contraste: sensibilidade 95% nas primeiras 6h, cai com o tempo. Se TC negativa + alta suspeita → punção lombar.",
    pearls: [
      "TC < 6h da cefaleia: sensibilidade ~98% — se negativa, considerar PL",
      "Vasoespasmo: pico entre dia 4-14 — DTC (Doppler transcraniano) para monitorar",
      "Nimodipino 60mg 4/4h por 21 dias: reduz déficit isquêmico tardio",
      "HSA perimesencefálica não-aneurismática: prognóstico muito melhor"
    ],
    differentials: ["Meningite", "Trombose venosa cerebral", "Cefaleia thunderclap benigna"],
    tags: ["hsa", "subaracnoidea", "aneurisma", "cefaleia", "vasoespasmo"]
  },
  {
    id: "rad-tc-avc-isquemico",
    title: "TC Crânio — AVC Isquêmico Agudo",
    category: "radiology",
    subcategory: "TC de Crânio — Vascular",
    image_description: "TC inicial pode ser normal nas primeiras 6h. Sinais precoces: apagamento dos sulcos, perda da diferenciação corticossubcortical, sinal da artéria cerebral média hiperdensa.",
    findings: [
      "Sinal da ACM hiperdensa (trombo intraluminal)",
      "Apagamento dos sulcos corticais unilateral",
      "Perda da diferenciação entre substância cinzenta e branca (insular ribbon sign)",
      "Apagamento do núcleo lentiforme",
      "ASPECTS: < 7 = extenso (contraindicação relativa a trombólise)"
    ],
    clinical_significance: "TC serve primariamente para EXCLUIR hemorragia antes de trombólise. Alteplase IV até 4.5h. Trombectomia mecânica até 24h (seleção por perfusão). NIHSS para gravidade.",
    pearls: [
      "TC normal nas primeiras 4-6h é ESPERADO — não exclui AVC",
      "ASPECTS < 7 ou hipodensidade > 1/3 do território da ACM = risco hemorrágico alto",
      "ACM hiperdensa: sensibilidade 30-40% mas especificidade alta para oclusão proximal",
      "Perfusão por TC (CTP): mismatch penumbra/core seleciona para trombectomia tardia"
    ],
    differentials: ["AVC hemorrágico", "Crise epiléptica (Todd)", "Hipoglicemia", "Enxaqueca hemiplégica"],
    tags: ["avc", "isquêmico", "acm", "aspects", "trombólise"]
  },
  {
    id: "rad-tc-hic",
    title: "TC Crânio — Hemorragia Intraparenquimatosa (HIC)",
    category: "radiology",
    subcategory: "TC de Crânio — Vascular",
    image_description: "Lesão hiperdensa (60-80 UH) intraparenquimatosa arredondada ou irregular. Edema perilesional (halo hipodenso). Pode haver extensão intraventricular e hidrocefalia.",
    findings: [
      "Coleção hiperdensa intraparenquimatosa (60-80 UH)",
      "Edema perilesional (halo hipodenso)",
      "Efeito de massa: desvio da linha média",
      "Extensão intraventricular (mau prognóstico)",
      "Localização: gânglios da base (hipertensiva) > lobar > cerebelo > ponte"
    ],
    clinical_significance: "Hipertensão é causa em 60-70%. Controle de PA: alvo PAS < 140 mmHg nas primeiras 6h (INTERACT-2). Cirurgia: hematomas cerebelares > 3cm ou deterioração neurológica. Score ICH para prognóstico.",
    pearls: [
      "Spot sign na angioTC: extravasamento ativo de contraste = expansão do hematoma",
      "Jovem + HIC lobar sem HAS = investigar MAV, cavernoma, amiloide, droga",
      "Hematoma cerebelar > 3cm: compressão do tronco → cirurgia de emergência",
      "Reversão da anticoagulação: vitamina K + CCP (warfarina), idarucizumabe (dabigatrana)"
    ],
    differentials: ["Transformação hemorrágica de AVC", "Tumor cerebral com sangramento", "MAV rota"],
    tags: ["hic", "hemorragia", "intracerebral", "hipertensão", "gânglios base"]
  },
  {
    id: "rad-tc-hidrocefalia",
    title: "TC Crânio — Hidrocefalia",
    category: "radiology",
    subcategory: "TC de Crânio — Patologias Diversas",
    image_description: "Dilatação do sistema ventricular desproporcional à atrofia cortical. Índice de Evans > 0.3 (razão entre cornos frontais e diâmetro biparietal). Transudação periventricular (edema intersticial).",
    findings: [
      "Dilatação dos ventrículos laterais (cornos temporais > 2mm)",
      "Índice de Evans > 0.3",
      "Transudação periventricular (hipodensidade periventricular)",
      "III ventrículo dilatado e abaulado inferiormente",
      "Sulcos apagados (obstrutiva) vs preservados (comunicante)"
    ],
    clinical_significance: "Obstrutiva: identificar nível da obstrução (tumor, estenose aquedutal). Comunicante: HSA, meningite. Aguda: emergência — DVE. Crônica (NPH): tríade de Adams (marcha, demência, incontinência).",
    pearls: [
      "Cornos temporais dilatados: melhor indicador de hidrocefalia ativa vs atrofia",
      "Hidrocefalia de pressão normal (NPH): demência tratável — tap test positivo = responde a DVP",
      "IV ventrículo dilatado = comunicante; IV normal com laterais dilatados = obstrutiva ao nível do aqueduto",
      "Transudação periventricular indica hidrocefalia aguda ativa"
    ],
    differentials: ["Atrofia cerebral (ex-vacuo)", "Hidrocefalia de pressão normal", "Ventriculomegalia constitucional"],
    tags: ["hidrocefalia", "ventrículo", "evans", "dve", "dvp"]
  },

  // ========== Mais Fraturas ==========
  {
    id: "rad-fratura-vertebra-compressao",
    title: "Fratura Vertebral por Compressão",
    category: "radiology",
    subcategory: "Fraturas da Coluna",
    image_description: "Redução da altura do corpo vertebral anterior (cunha) ou central (bicôncava). Mais comum em transição toracolombar (T11-L2). RX de perfil mostra perda > 20% da altura.",
    findings: [
      "Redução da altura do corpo vertebral > 20%",
      "Deformidade em cunha (anterior), bicôncava ou crushing",
      "Localização: T11-L2 mais comum (osteoporótica)",
      "Retropulsão de fragmento no canal = burst (TC obrigatória)",
      "Cifose segmentar aumentada"
    ],
    clinical_significance: "Osteoporose é a causa mais comum em idosos. STIR na RM: edema medular indica fratura aguda. Vertebroplastia/cifoplastia se dor refratária > 6 semanas. Excluir neoplasia se < 50 anos.",
    pearls: [
      "RM com STIR/T2 fat-sat: edema = aguda; sem edema = antiga — fundamental para decisão",
      "Fraturas sem trauma significativo em < 50 anos: investigar mieloma/metástases",
      "Fratura em burst (fragmento retropulsado): TC para avaliar canal medular",
      "Cada fratura vertebral aumenta risco de nova fratura em 5x"
    ],
    differentials: ["Fratura patológica (metástase/mieloma)", "Fratura em burst", "Deformidade de Scheuermann"],
    tags: ["vertebra", "compressão", "osteoporose", "coluna", "cifoplastia"]
  },
  {
    id: "rad-fratura-costela",
    title: "Fraturas de Costelas e Tórax Instável",
    category: "radiology",
    subcategory: "Fraturas Torácicas",
    image_description: "Traço de fratura em um ou mais arcos costais. Tórax instável (flail chest): ≥ 3 costelas fraturadas em ≥ 2 pontos cada. Pode haver hemotórax, pneumotórax ou contusão pulmonar associada.",
    findings: [
      "Traço(s) de fratura em arcos costais",
      "Tórax instável: ≥ 3 costelas com ≥ 2 fraturas cada",
      "Hemotórax: opacidade em base + menisco",
      "Pneumotórax: hiperlucência sem trama vascular",
      "Contusão pulmonar: opacidade parenquimatosa não segmentar"
    ],
    clinical_significance: "1ª-2ª costela: alta energia — avaliar lesão vascular (aorta, subclávia). 9ª-12ª: avaliar lesão de vísceras abdominais (fígado, baço, rim). Tórax instável + contusão pulmonar = VM precoce se IR.",
    pearls: [
      "RX subestima fraturas costais em 50%: TC é muito mais sensível",
      "Fratura de 1ª costela = mecanismo de alta energia → avaliar lesão aórtica",
      "Fratura de costelas baixas (E): lesão esplênica. (D): lesão hepática",
      "Tórax instável: respiração paradoxal — o segmento fraturado retrai na inspiração"
    ],
    differentials: ["Contusão de parede torácica", "Fratura de esterno", "Lesão condrocostal"],
    tags: ["costela", "fratura", "tórax instável", "flail", "contusão pulmonar"]
  },
  {
    id: "rad-pneumotorax",
    title: "Pneumotórax no RX de Tórax",
    category: "radiology",
    subcategory: "Emergências Torácicas",
    image_description: "Hiperlucência periférica com ausência de trama vascular entre a linha pleural visceral e a parede torácica. Hipertensivo: desvio contralateral do mediastino + colapso venoso.",
    findings: [
      "Linha pleural visceral visível separada da parede torácica",
      "Ausência de trama vascular além da linha pleural",
      "Hiperlucência no espaço pleural",
      "Sinal do sulco profundo (pneumotórax em supino — UTI)",
      "Hipertensivo: desvio mediastinal contralateral + rebaixamento diafragmático"
    ],
    clinical_significance: "Pequeno (< 2cm): observação + O₂. Grande (> 2cm) ou sintomático: drenagem torácica. Hipertensivo: descompressão imediata com agulha 14G no 2º EIC + drenagem. Diagnóstico clínico no hipertensivo!",
    pearls: [
      "Pneumotórax hipertensivo é diagnóstico CLÍNICO — não esperar RX para descomprimir",
      "Em supino (UTI): sinal do sulco profundo pode ser o único achado",
      "USG à beira-leito: ausência de deslizamento pleural = pneumotórax (M-mode: estratosfera)",
      "Pneumotórax espontâneo primário: homem jovem, alto, longilíneo, tabagista"
    ],
    differentials: ["Bolha enfisematosa", "Prega cutânea no RX", "Pneumomediastino"],
    tags: ["pneumotórax", "pleural", "drenagem", "hipertensivo", "tórax"]
  },
  {
    id: "rad-fratura-umero-proximal",
    title: "Fratura do Úmero Proximal (Neer)",
    category: "radiology",
    subcategory: "Fraturas de Membros Superiores",
    image_description: "Fratura envolvendo a cabeça umeral, tuberosidade maior, tuberosidade menor e/ou diáfise proximal. Classificação de Neer baseada em partes desviadas (2, 3 ou 4 partes).",
    findings: [
      "Traço de fratura no colo cirúrgico ou anatômico do úmero",
      "Fratura da tuberosidade maior (mais comum isolada)",
      "Neer 2 partes: 1 segmento desviado > 1cm ou > 45°",
      "Neer 3-4 partes: múltiplos segmentos desviados",
      "Luxação gleno-umeral associada possível"
    ],
    clinical_significance: "80% são minimamente desviadas (Neer 1 parte) → tratamento conservador com tipoia. 3-4 partes em jovens: fixação. 3-4 partes em idosos: considerar prótese de ombro. Lesão do nervo axilar: avaliar deltóide.",
    pearls: [
      "Solicitar séries de trauma do ombro: AP verdadeiro + Y de escápula + axilar",
      "Tuberosidade maior isolada: se desvio > 5mm → reparo cirúrgico (manguito rotador)",
      "Fratura do colo anatômico: maior risco de necrose avascular da cabeça umeral",
      "Lesão do nervo axilar: hipoestesia no 'badge area' + fraqueza do deltóide"
    ],
    differentials: ["Luxação glenoumeral", "Fratura da clavícula", "Fratura de escápula"],
    tags: ["úmero", "ombro", "neer", "tuberosidade", "fratura proximal"]
  },
  {
    id: "rad-tc-contusao-cerebral",
    title: "TC Crânio — Contusão Cerebral",
    category: "radiology",
    subcategory: "TC de Crânio — Trauma",
    image_description: "Áreas mistas hiperdensas (sangue) e hipodensas (edema) no parênquima cerebral, geralmente em lobos frontal e temporal (golpe e contragolpe). Efeito de massa variável.",
    findings: [
      "Áreas de hiperdensidade (sangue) misturadas com hipodensidade (edema)",
      "Padrão 'sal e pimenta' — petéquias hemorrágicas",
      "Localização: pólos frontal e temporal (golpe/contragolpe)",
      "Efeito de massa crescente nas primeiras 24-72h",
      "Edema perilesional progressivo"
    ],
    clinical_significance: "Contusões 'florescem' — piora nas primeiras 24-72h. TC de controle em 6-8h. Cirurgia se efeito de massa significativo ou deterioração neurológica. Monitorizar PIC se GCS ≤ 8.",
    pearls: [
      "Contusões podem 'florescer' e expandir significativamente em 24-72h — TC seriada",
      "Contragolpe geralmente pior que o golpe direto",
      "Contusão frontal bilateral: alteração comportamental — cuidado com alta precoce",
      "Lesão axonal difusa: TC pode ser normal — RM com difusão é superior"
    ],
    differentials: ["Hematoma epidural/subdural", "AVC hemorrágico", "Lesão axonal difusa"],
    tags: ["contusão", "cerebral", "trauma", "contragolpe", "pic"]
  }
];
