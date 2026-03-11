export interface PrescriptionItem {
  id: string;
  title: string;
  type: string;
  prescription: string;
  alternatives?: string;
  notes?: string;
  warnings?: string;
  guideline?: string;
}

export interface PrescriptionCategory {
  id: string;
  title: string;
  items: PrescriptionItem[];
}

export const prescriptionCategories: PrescriptionCategory[] = [
  {
    id: "emergency",
    title: "Emergência / Sala Vermelha",
    items: [
      {
        id: "pcr-rx",
        title: "PCR — Parada Cardiorrespiratória",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Adrenalina 1mg (1:10.000) — 1 ampola EV a cada 3-5 minutos
2. Amiodarona 300mg EV em bolus (FV/TV refratária) → 150mg após
3. SF 0,9% 250mL — acesso venoso periférico calibroso
4. Intubação orotraqueal + ventilação mecânica
5. Monitorização contínua (ECG, SpO2, capnografia)
6. Desfibrilação 200J bifásico se FV/TV sem pulso
7. Bicarbonato de sódio 8,4% — 1mEq/kg se acidose grave ou hipercalemia`,
        notes: "Trocar compressor a cada 2 minutos. Minimizar interrupções das compressões (<10s). Capnografia: ETCO2 >10mmHg indica RCP eficaz.",
        warnings: "NÃO desfibrilar assistolia. NÃO atrasar compressões para procedimentos. NÃO hiperventilar.",
        guideline: "AHA 2020 / ACLS",
      },
      {
        id: "sepse-rx",
        title: "Sepse / Choque Séptico",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. SF 0,9% 30mL/kg EV em 3 horas (se hipotensão ou lactato ≥4)
2. Ceftriaxona 2g EV 1x/dia (foco pulmonar/urinário) OU
   Piperacilina-Tazobactam 4,5g EV 6/6h (foco abdominal/grave)
3. Noradrenalina — iniciar se PAM <65 após volume (0,1 mcg/kg/min, titular)
4. Hidrocortisona 50mg EV 6/6h (se choque refratário a vasopressores)
5. Coletar 2 pares de hemocultura ANTES do antibiótico
6. Lactato arterial (repetir em 2-4h se >2)
7. Hemograma, PCR, função renal, gasometria, coagulograma
8. SVD — controle de diurese (alvo ≥0,5 mL/kg/h)`,
        notes: "Antibiótico na PRIMEIRA HORA. Cada hora de atraso aumenta mortalidade em ~7%.",
        warnings: "NÃO iniciar vasopressor sem ressuscitação volêmica adequada. NÃO esquecer de coletar culturas.",
        guideline: "Surviving Sepsis Campaign 2021",
      },
      {
        id: "iam-supra-rx",
        title: "IAM com Supra de ST",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. AAS 200mg VO (mastigar)
2. Clopidogrel 300mg VO (se angioplastia) ou 300mg VO (se trombólise e ≤75 anos)
3. Heparina não fracionada 60UI/kg EV bolus (máx 4.000UI) → 12UI/kg/h em BIC
4. Morfina 2-4mg EV se dor refratária (lento, repetir se necessário)
5. Nitroglicerina SL 5mg (se PA >100 e FC >50)
6. Atenolol 25-50mg VO (se não contraindicado)
7. Atorvastatina 80mg VO
8. O2 suplementar se SpO2 <94%
9. ECG de 12 derivações (repetir em 15-30 min)
10. Enzimas: Troponina, CK-MB
11. Encaminhar para angioplastia primária OU
12. Tenecteplase (dose por peso) se porta-balão >120 min`,
        alternatives: "Se alergia a AAS: Ticagrelor 180mg VO.\nSe contraindicação a betabloqueador: evitar, não substituir.\nSe PA baixa: não usar nitrato nem morfina.",
        warnings: "NÃO usar nitrato se uso de sildenafil nas últimas 24h. NÃO atrasar reperfusão. Porta-agulha <30min (trombólise) ou porta-balão <90min (angioplastia).",
        guideline: "SBC / AHA 2023",
      },
      {
        id: "avc-rx",
        title: "AVC Isquêmico",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. TC de crânio sem contraste URGENTE
2. Glicemia capilar (corrigir se <70 ou >180)
3. PA: se candidato a trombólise, PA <185x110. Se não: tolerar até 220x120.
4. Controle de PA (se necessário): Nitroprussiato 50mg + SG5% 248mL — BIC 5-10 mL/h
5. Alteplase (se elegível): 0,9 mg/kg EV (máx 90mg) — 10% em bolus, 90% em 1h
6. Janela terapêutica: até 4,5h (trombólise) ou até 24h (trombectomia mecânica)
7. Monitorar: PA a cada 15 min por 2h, depois 30/30 min por 6h
8. Dieta zero até avaliação de disfagia
9. Cabeceira a 30°
10. Profilaxia de TVP: Enoxaparina 40mg SC 1x/dia (após 24h da trombólise)
11. SF 0,9% 1000mL EV — manter acesso`,
        notes: "Critérios de exclusão para trombólise: sangramento ativo, cirurgia major <14 dias, AVC <3 meses, plaquetas <100.000, INR >1,7.",
        warnings: "NÃO usar antiagregante ou anticoagulante nas primeiras 24h se trombólise. NÃO reduzir PA agressivamente se não houver indicação de trombólise.",
        guideline: "AHA/ASA 2019 / SBC",
      },
      {
        id: "anafilaxia-rx",
        title: "Anafilaxia",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Adrenalina 1:1000 (1mg/mL) — 0,3-0,5mg IM na face anterolateral da coxa
   Repetir a cada 5-15 min se necessário (até 3 doses)
2. SF 0,9% 1000-2000mL EV em bolus (se hipotensão)
3. Difenidramina 50mg EV (ou Prometazina 25mg IM)
4. Ranitidina 50mg EV
5. Hidrocortisona 200mg EV (ou Metilprednisolona 125mg EV)
6. Salbutamol spray 4-8 jatos (se broncoespasmo)
7. O2 suplementar se SpO2 <94%
8. Monitorização contínua por 6-8h (risco de reação bifásica)`,
        notes: "Adrenalina IM na COXA é a via de escolha — absorção mais rápida e previsível que SC ou deltóide.",
        warnings: "NÃO usar adrenalina EV em bolus fora da PCR. NÃO atrasar adrenalina para dar anti-histamínico. Corticóide NÃO substitui adrenalina.",
        guideline: "WAO / ASBAI",
      },
      {
        id: "eap-rx",
        title: "Edema Agudo de Pulmão",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Furosemida 40-80mg EV em bolus
2. Nitroglicerina 5mg SL ou Nitroglicerina EV 5-200 mcg/min em BIC (se PA >100)
3. Morfina 2-4mg EV lento (se ansiedade intensa e PA preservada)
4. VNI: CPAP 5-10 cmH2O ou BiPAP IPAP 10-15 / EPAP 5-8
5. O2 suplementar para SpO2 >94%
6. Cabeceira elevada a 90°
7. Monitorização contínua (PA, SpO2, ECG)
8. Captopril 25mg SL (se PAS >160)
9. IOT se não melhorar com VNI ou rebaixamento`,
        notes: "VNI reduz necessidade de intubação em ~60%. Iniciar VNI precocemente.",
        warnings: "NÃO usar morfina de rotina — pode causar depressão respiratória. NÃO usar nitrato se PA <100 ou uso de sildenafil.",
        guideline: "SBC / ESC",
      },
    ],
  },
  {
    id: "cardiology",
    title: "Cardiologia",
    items: [
      {
        id: "fa-rx",
        title: "Fibrilação Atrial",
        type: "Prescrição no Pronto Socorro",
        prescription: `Controle de frequência (FC alvo <110):
1. Metoprolol 5mg EV lento (pode repetir até 15mg)
2. Diltiazem 0,25mg/kg EV em 2 min (alternativa)
3. Amiodarona 150mg EV em 10 min → 1mg/min por 6h (se IC associada)

Cardioversão (se <48h ou anticoagulado):
1. Amiodarona 150mg EV → 1mg/min
2. Cardioversão elétrica sincronizada 120-200J

Anticoagulação:
1. Avaliar CHA2DS2-VASc
2. Se score ≥2 (homem) ou ≥3 (mulher): Rivaroxabana 20mg VO 1x/dia com refeição
   OU Apixabana 5mg VO 12/12h`,
        guideline: "SBC / ESC 2020",
      },
      {
        id: "crise-has-rx",
        title: "Crise Hipertensiva",
        type: "Prescrição no Pronto Socorro",
        prescription: `Emergência hipertensiva (LOA):
1. Nitroprussiato de sódio 0,25-10 mcg/kg/min EV em BIC (fotossensível)
2. OU Nitroglicerina EV 5-200 mcg/min (se SCA ou EAP)
3. Reduzir PAM em 25% na 1ª hora, depois gradualmente em 24-48h

Urgência hipertensiva (sem LOA):
1. Captopril 25mg VO (pode repetir em 30 min)
2. Clonidina 0,1-0,2mg VO (pode repetir em 1h)
3. Reduzir PA gradualmente em 24-48h
4. NÃO usar Nifedipino SL (queda abrupta perigosa)`,
        warnings: "NÃO reduzir PA abruptamente na emergência — risco de isquemia cerebral/coronária. Nifedipino SL é CONTRAINDICADO.",
        guideline: "SBC 2020",
      },
    ],
  },
  {
    id: "infectious",
    title: "Infectologia",
    items: [
      {
        id: "pneumonia-rx",
        title: "Pneumonia Comunitária",
        type: "Prescrição Hospitalar",
        prescription: `1. Dieta livre (se tolerar VO)
2. SF 0,9% 1000mL EV — manter acesso
3. Ceftriaxona 1g EV 12/12h
4. Azitromicina 500mg EV 1x/dia
5. Dipirona 1g EV 6/6h se dor ou febre ≥37,8°C
6. Ondansetrona 4mg EV 8/8h se náusea
7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
8. O2 suplementar se SpO2 <92%
9. Cabeceira a 30°
10. Hemograma, PCR, ureia, creatinina, gasometria
11. RX tórax PA e perfil
12. Hemocultura 2 amostras se grave`,
        alternatives: "Se alergia a cefalosporinas: Levofloxacino 750mg EV 1x/dia.\nSe suspeita de aspiração: Clindamicina 600mg EV 8/8h + Ceftriaxona.",
        guideline: "SBP / IDSA 2019",
      },
      {
        id: "itu-rx",
        title: "Infecção do Trato Urinário",
        type: "Prescrição Ambulatorial / Hospitalar",
        prescription: `Cistite não complicada:
1. Nitrofurantoína 100mg VO 6/6h por 5 dias
2. OU Fosfomicina 3g VO dose única
3. OU Cefalexina 500mg VO 6/6h por 7 dias

Pielonefrite:
1. Internação se sinais de gravidade
2. Ceftriaxona 1g EV 12/12h
3. SF 0,9% 1000mL EV
4. Dipirona 1g EV 6/6h se febre
5. Ondansetrona 4mg EV se náusea
6. Urocultura + antibiograma
7. Hemograma, PCR, função renal`,
        alternatives: "Se alergia a cefalosporinas: Ciprofloxacino 400mg EV 12/12h.\nITU na gestação: Cefalexina 500mg VO 6/6h por 7 dias (categoria B).",
        guideline: "SBI / IDSA",
      },
      {
        id: "celulite-rx",
        title: "Celulite / Erisipela",
        type: "Prescrição Hospitalar",
        prescription: `Leve (ambulatorial):
1. Cefalexina 500mg VO 6/6h por 7-10 dias
2. OU Amoxicilina-Clavulanato 875mg VO 12/12h

Moderada/Grave (hospitalar):
1. Oxacilina 2g EV 4/4h OU
2. Cefazolina 1g EV 8/8h
3. SF 0,9% 1000mL EV
4. Dipirona 1g EV 6/6h se febre/dor
5. Elevação do membro afetado
6. Se suspeita de MRSA: Vancomicina 15-20mg/kg EV 12/12h`,
        guideline: "IDSA / SBI",
      },
    ],
  },
  {
    id: "pain",
    title: "Analgesia",
    items: [
      {
        id: "analgesia-leve-rx",
        title: "Analgesia Leve/Moderada",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Dipirona 1g EV 6/6h
2. Paracetamol 750mg VO 6/6h (alternativa)
3. Cetoprofeno 100mg EV 12/12h (se não contraindicado)
4. Tramadol 50-100mg EV 8/8h (se dor moderada)
5. Metoclopramida 10mg EV se náusea
6. Ondansetrona 4mg EV se vômitos`,
        notes: "AINEs: evitar se DRC, idoso >65 anos, úlcera péptica, sangramento GI, desidratação.",
        guideline: "SBA",
      },
      {
        id: "analgesia-severa-rx",
        title: "Analgesia Severa / Opioides",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Morfina 2-4mg EV lento (repetir a cada 5-10 min se necessário)
2. OU Fentanil 50-100mcg EV lento
3. Dipirona 1g EV 6/6h (adjuvante)
4. Ondansetrona 4mg EV 8/8h (profilaxia de náusea por opioide)
5. Monitorização de SpO2 e FR
6. Naloxona disponível (antagonista): 0,4mg EV se depressão respiratória`,
        warnings: "Opióides: risco de depressão respiratória. Monitorar nível de consciência e FR. Ter Naloxona à mão.",
        guideline: "SBA",
      },
    ],
  },
  {
    id: "respiratory",
    title: "Pneumologia",
    items: [
      {
        id: "asma-rx",
        title: "Crise Asmática",
        type: "Prescrição no Pronto Socorro",
        prescription: `Leve/Moderada:
1. Salbutamol spray 4-8 jatos com espaçador a cada 20 min (3x na 1ª hora)
2. Ipratrópio 40mcg (2 jatos) a cada 20 min (3x)
3. Prednisona 40-60mg VO dose única OU Hidrocortisona 200mg EV

Grave:
1. Salbutamol nebulização contínua: 10 gotas + SF 3mL a cada 20 min
2. Ipratrópio 20-40 gotas + Salbutamol na mesma nebulização
3. Hidrocortisona 200mg EV (ataque) → 100mg EV 6/6h
4. Sulfato de magnésio 2g EV em 20 min (se refratária)
5. O2 suplementar para SpO2 >94%
6. Considerar VNI
7. IOT se falência respiratória`,
        guideline: "GINA 2023 / SBPT",
      },
      {
        id: "dpoc-rx",
        title: "DPOC Exacerbada",
        type: "Prescrição Hospitalar",
        prescription: `1. O2 suplementar (alvo SpO2 88-92%)
2. Salbutamol 10 gotas + Ipratrópio 20 gotas + SF 3mL — nebulização 6/6h
3. Prednisona 40mg VO 1x/dia por 5 dias
4. Antibiótico se escarro purulento: Amoxicilina-Clavulanato 875mg VO 12/12h OU Levofloxacino 750mg VO 1x/dia
5. VNI (BiPAP) se acidose respiratória (pH <7,35, pCO2 >45)
6. Gasometria arterial
7. RX tórax
8. Hemograma, PCR`,
        warnings: "NÃO usar O2 em alto fluxo — risco de hipercapnia e parada respiratória.",
        guideline: "GOLD 2024 / SBPT",
      },
    ],
  },
  {
    id: "gastro",
    title: "Gastroenterologia",
    items: [
      {
        id: "geca-rx",
        title: "Gastroenterite Aguda",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. SRO (Soro de Reidratação Oral) — VO livre
2. SF 0,9% 1000mL EV (se desidratação moderada/grave)
3. Ondansetrona 4mg EV 8/8h se vômitos
4. Buscopan Composto (Escopolamina + Dipirona) 1 amp EV 6/6h se cólica
5. Dieta leve, sem lactose por 3-5 dias
6. Probiótico (Saccharomyces boulardii) 200mg VO 12/12h
7. Racecadotrila 100mg VO 8/8h (adulto) — se diarreia intensa`,
        notes: "NÃO usar antidiarreicos (Loperamida) se febre alta ou disenteria. Investigar se diarreia >7 dias ou sinais de gravidade.",
        guideline: "SBG / OMS",
      },
      {
        id: "hda-rx",
        title: "Hemorragia Digestiva Alta",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Estabilização: 2 acessos calibrosos, cristalóide em bolus
2. Omeprazol 80mg EV em bolus → 8mg/h em BIC por 72h
3. Reserva de concentrado de hemácias (tipar e provar)
4. Hemograma, coagulograma, função hepática, lactato
5. SVD — controle de diurese
6. SNG (avaliar — controverso em varicosa)
7. Se suspeita de varizes: Terlipressina 2mg EV → 1mg 4/4h OU Octreotida 50mcg bolus → 50mcg/h
8. Ceftriaxona 1g EV 1x/dia (profilaxia em cirróticos)
9. EDA em até 12-24h
10. Transfusão se Hb <7 (ou <9 se cardiopata)`,
        guideline: "SBG / ESGE",
      },
    ],
  },
  {
    id: "neuro",
    title: "Neurologia",
    items: [
      {
        id: "cefaleia-rx",
        title: "Cefaleia / Enxaqueca no PS",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Dipirona 1g EV 6/6h
2. Cetoprofeno 100mg EV (dose única)
3. Metoclopramida 10mg EV (efeito antiemético + adjuvante para cefaleia)
4. Dexametasona 10mg EV (dose única — status migranoso)
5. SF 0,9% 500mL EV — hidratação
6. Clorpromazina 0,1mg/kg EV lento (se refratária, em ambiente monitorado)
7. Sumatriptano 6mg SC (se migranosa, sem contraindicações cardiovasculares)`,
        notes: "NÃO usar triptanos + ergotamínicos juntos. Investigar cefaleia secundária se: início abrupto (thunderclap), pior da vida, sinais focais, febre, rigidez de nuca.",
        warnings: "Red flags: cefaleia em trovão, papiledema, febre + meningismo, déficit focal, alteração de consciência → TC + líquor.",
        guideline: "SBCe / IHS",
      },
      {
        id: "convulsao-rx",
        title: "Crise Convulsiva / Status Epiléptico",
        type: "Prescrição no Pronto Socorro",
        prescription: `Fase 1 (0-5 min):
1. Diazepam 10mg EV lento (ou Midazolam 10mg IM se sem acesso)
2. O2 suplementar, proteção de via aérea
3. Glicemia capilar (Glicose 50% 40mL se hipoglicemia)
4. Monitorização contínua

Fase 2 (5-20 min) — Se não cessou:
5. Fenitoína 20mg/kg EV (máx 50mg/min, em SF — precipita em SG!)
6. OU Valproato de sódio 40mg/kg EV em 10 min (alternativa)

Fase 3 (>20 min) — Status epiléptico refratário:
7. Midazolam IV em BIC: bolus 0,2mg/kg → 0,1-0,4mg/kg/h
8. OU Propofol 2mg/kg bolus → 2-5mg/kg/h
9. IOT + ventilação mecânica
10. Monitorização EEG contínua`,
        warnings: "Fenitoína NÃO diluir em SG (cristaliza). Infundir com monitorização cardíaca (risco de arritmia e hipotensão).",
        guideline: "ABN / AES",
      },
    ],
  },
  {
    id: "renal",
    title: "Nefrologia / Urologia",
    items: [
      {
        id: "colica-renal-rx",
        title: "Cólica Renal",
        type: "Prescrição no Pronto Socorro",
        prescription: `1. Cetoprofeno 100mg EV (1ª escolha — AINE)
2. OU Tenoxicam 20mg EV
3. Dipirona 1g EV 6/6h (adjuvante)
4. Tramadol 50-100mg EV (se dor refratária)
5. Buscopan Composto (Escopolamina + Dipirona) 1 amp EV 8/8h
6. Ondansetrona 4mg EV se náusea
7. SF 0,9% 500mL EV — NÃO hiper-hidratar (pode piorar a dor)
8. Tamsulosina 0,4mg VO 1x/dia (terapia expulsiva para cálculos 5-10mm)
9. TC sem contraste de abdome (padrão-ouro)
10. EAS + Creatinina + Hemograma`,
        notes: "NÃO hiper-hidratar na fase aguda da cólica — aumenta pressão no trato urinário e piora dor. Hidratar apenas se sinais de desidratação.",
        warnings: "Internar se: febre + ITU (pionefrose), rim único, IRA, dor refratária, cálculo >10mm obstrutivo.",
        guideline: "SBU / EAU",
      },
    ],
  },
  {
    id: "trauma",
    title: "Trauma / Queimaduras",
    items: [
      {
        id: "queimadura-rx",
        title: "Queimaduras",
        type: "Prescrição Hospitalar",
        prescription: `1. Avaliar SCQ (regra dos 9 ou palma da mão = 1%)
2. Reposição volêmica (Parkland): RL 4mL × peso × %SCQ
   - 50% nas primeiras 8h, 50% nas 16h seguintes
3. Analgesia: Morfina 2-4mg EV (queimaduras extensas) + Dipirona 1g EV 6/6h
4. Profilaxia antitetânica (dT se necessário)
5. Curativo: Sulfadiazina de prata 1% tópico (2º grau)
6. Ceftriaxona 1g EV 12/12h se sinais de infecção
7. Omeprazol 40mg EV 1x/dia (profilaxia úlcera de Curling se >20% SCQ)
8. SVD se SCQ >20%
9. Cabeceira elevada 30° se queimadura facial
10. Dieta hiperproteica e hipercalórica precoce`,
        notes: "Grande queimado (>20% SCQ adulto, >10% criança, >5% idoso): internar em UTI/Centro de Queimados.",
        warnings: "NÃO estourar bolhas de 2º grau. NÃO usar gelo. NÃO usar soluções antissépticas irritantes.",
        guideline: "SBQ / ABA",
      },
    ],
  },
  {
    id: "tropical",
    title: "Doenças Tropicais",
    items: [
      {
        id: "dengue-rx",
        title: "Dengue",
        type: "Prescrição no Pronto Socorro",
        prescription: `Grupo A (sem sinais de alarme):
1. Hidratação oral: 60-80 mL/kg/dia (1/3 SRO + 2/3 líquidos)
2. Paracetamol 750mg VO 6/6h se febre/dor
3. Dipirona 500mg VO 6/6h (alternativa)
4. Repouso
5. Retorno se sinais de alarme

Grupo B (com petéquias ou comorbidades):
6. Hidratação oral supervisionada + hemograma
7. Reavaliar em 4h

Grupo C (sinais de alarme):
8. SF 0,9% 20mL/kg EV em 2h (até 3x)
9. Hemograma + Hematócrito seriado (6/6h)
10. Internação — Grupo D (choque): SF 0,9% 20mL/kg em 20min`,
        notes: "Sinais de alarme: dor abdominal intensa, vômitos persistentes, hipotensão postural, hepatomegalia, sangramento mucoso, letargia, lipotímia, ↑Ht com ↓plaquetas.",
        warnings: "NÃO usar AAS ou AINEs (risco de hemorragia). Usar APENAS Paracetamol ou Dipirona para febre/dor.",
        guideline: "Ministério da Saúde 2024",
      },
    ],
  },
  {
    id: "discharge",
    title: "Alta Hospitalar",
    items: [
      {
        id: "alta-simples-rx",
        title: "Alta Simples — PS",
        type: "Prescrição Ambulatorial",
        prescription: `1. Dipirona 500mg — Tomar 1 comprimido VO de 6/6h se dor ou febre
2. OU Paracetamol 750mg — Tomar 1 comprimido VO de 6/6h se dor
3. Retorno ao PS se piora dos sintomas ou febre persistente >48h
4. Repouso relativo
5. Hidratação oral adequada
6. Retorno ambulatorial conforme orientação`,
        notes: "Sempre orientar sinais de alarme para retorno ao PS.",
      },
    ],
  },
];
