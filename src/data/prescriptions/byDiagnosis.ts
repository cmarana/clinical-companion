import { PrescriptionItem } from "./types";

export const byDiagnosisItems: PrescriptionItem[] = [
  {
    id: "rx-pneumonia",
    title: "Pneumonia Comunitária",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta livre (se tolerar VO)
2. SF 0,9% 1000mL EV — manter acesso
3. Ceftriaxona 1g EV 12/12h
4. Azitromicina 500mg EV ou VO 1x/dia
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
    id: "rx-itu",
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
    alternatives: "Ciprofloxacino 400mg EV 12/12h se alergia.\nGestação: Cefalexina 500mg VO 6/6h por 7 dias.",
    guideline: "SBI / IDSA",
  },
  {
    id: "rx-pielonefrite",
    title: "Pielonefrite",
    type: "Prescrição Hospitalar",
    prescription: `1. Internação — repouso no leito
2. SF 0,9% 1000-2000mL EV nas primeiras 6h
3. Ceftriaxona 1g EV 12/12h (1ª escolha)
4. Dipirona 1g EV 6/6h se febre/dor
5. Ondansetrona 4mg EV 8/8h se náusea
6. Omeprazol 40mg EV 1x/dia
7. Urocultura + antibiograma (coletar ANTES do ATB)
8. Hemograma, PCR, creatinina, ureia, lactato
9. USG de vias urinárias (descartar obstrução)
10. SVD se retenção ou controle rigoroso de diurese`,
    alternatives: "Se alergia grave a cefalosporinas: Ciprofloxacino 400mg EV 12/12h.\nSe sepse urinária: associar Amicacina 15mg/kg/dia EV.",
    warnings: "Pielonefrite com obstrução = emergência urológica. Solicitar USG/TC urgente.",
    guideline: "SBI / EAU",
  },
  {
    id: "rx-asma-diag",
    title: "Asma — Crise",
    type: "Prescrição no Pronto Socorro",
    prescription: `Leve/Moderada:
1. Salbutamol spray 4-8 jatos com espaçador a cada 20 min (3x na 1ª hora)
2. Ipratrópio 40mcg (2 jatos) a cada 20 min (3x)
3. Prednisona 40-60mg VO OU Hidrocortisona 200mg EV

Grave:
1. Salbutamol nebulização contínua: 10 gotas + SF 3mL a cada 20 min
2. Ipratrópio 20-40 gotas + Salbutamol na mesma nebulização
3. Hidrocortisona 200mg EV → 100mg EV 6/6h
4. Sulfato de magnésio 2g EV em 20 min (se refratária)
5. O2 suplementar para SpO2 >94%
6. VNI se necessário
7. IOT se falência respiratória`,
    guideline: "GINA 2023 / SBPT",
  },
  {
    id: "rx-dpoc-diag",
    title: "DPOC Exacerbada",
    type: "Prescrição Hospitalar",
    prescription: `1. O2 suplementar (alvo SpO2 88-92%)
2. Salbutamol 10 gotas + Ipratrópio 20 gotas + SF 3mL — nebulização 6/6h
3. Prednisona 40mg VO 1x/dia por 5 dias
4. Amoxicilina-Clavulanato 875mg VO 12/12h (se escarro purulento)
5. OU Levofloxacino 750mg VO 1x/dia
6. VNI (BiPAP) se acidose respiratória (pH <7,35)
7. Gasometria arterial seriada
8. RX tórax
9. Hemograma, PCR`,
    warnings: "NÃO usar O2 em alto fluxo — risco de hipercapnia.",
    guideline: "GOLD 2024 / SBPT",
  },
  {
    id: "rx-sepse-diag",
    title: "Sepse / Choque Séptico",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. SF 0,9% 30mL/kg EV em 3 horas
2. Ceftriaxona 2g EV 1x/dia (foco pulmonar/urinário) OU Piperacilina-Tazobactam 4,5g EV 6/6h
3. Noradrenalina 0,1 mcg/kg/min se PAM <65 após volume
4. Hidrocortisona 50mg EV 6/6h (choque refratário)
5. Coletar 2 pares de hemocultura ANTES do ATB
6. Lactato arterial (repetir em 2-4h)
7. Hemograma, PCR, função renal, gasometria, coagulograma
8. SVD — alvo diurese ≥0,5 mL/kg/h`,
    notes: "ATB na PRIMEIRA HORA. Cada hora de atraso aumenta mortalidade em ~7%.",
    warnings: "NÃO atrasar ATB para resultado de cultura.",
    guideline: "Surviving Sepsis 2021",
  },
  {
    id: "rx-iam-diag",
    title: "IAM com Supra de ST",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. AAS 200mg VO (mastigar)
2. Clopidogrel 300mg VO
3. Heparina não fracionada 60UI/kg EV bolus → 12UI/kg/h em BIC
4. Morfina 2-4mg EV se dor refratária
5. Nitroglicerina SL 5mg (se PA >100 e FC >50)
6. Atenolol 25-50mg VO
7. Atorvastatina 80mg VO
8. O2 se SpO2 <94%
9. ECG 12 derivações seriado
10. Troponina, CK-MB
11. Encaminhar angioplastia primária OU Tenecteplase se porta-balão >120 min`,
    warnings: "NÃO usar nitrato se sildenafil <24h. Porta-agulha <30min, porta-balão <90min.",
    guideline: "SBC / AHA 2023",
  },
  {
    id: "rx-avc-diag",
    title: "AVC Isquêmico",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. TC de crânio sem contraste URGENTE
2. Glicemia capilar (corrigir se <70 ou >180)
3. PA: se trombólise, <185x110
4. Alteplase 0,9 mg/kg EV (máx 90mg) — 10% bolus, 90% em 1h (se elegível)
5. Janela: até 4,5h (trombólise) ou 24h (trombectomia)
6. Monitorar PA a cada 15 min por 2h
7. Dieta zero até avaliação de disfagia
8. Cabeceira 30°
9. Enoxaparina 40mg SC 1x/dia (após 24h da trombólise)
10. SF 0,9% 1000mL EV`,
    warnings: "NÃO usar antiagregante/anticoagulante nas primeiras 24h se trombólise.",
    guideline: "AHA/ASA 2019",
  },
  {
    id: "rx-crise-has-diag",
    title: "Crise Hipertensiva",
    type: "Prescrição no Pronto Socorro",
    prescription: `Emergência hipertensiva (com LOA):
1. Nitroprussiato 0,25-10 mcg/kg/min EV em BIC
2. OU Nitroglicerina EV 5-200 mcg/min (se SCA/EAP)
3. Reduzir PAM em 25% na 1ª hora

Urgência hipertensiva (sem LOA):
1. Captopril 25mg VO (repetir em 30 min)
2. Clonidina 0,1-0,2mg VO (repetir em 1h)
3. NÃO usar Nifedipino SL`,
    warnings: "Nifedipino SL é CONTRAINDICADO. NÃO reduzir PA abruptamente.",
    guideline: "SBC 2020",
  },
  {
    id: "rx-cefaleia-diag",
    title: "Cefaleia / Enxaqueca",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Dipirona 1g EV
2. Cetoprofeno 100mg EV
3. Metoclopramida 10mg EV
4. Dexametasona 10mg EV (status migranoso)
5. SF 0,9% 500mL EV
6. Clorpromazina 0,1mg/kg EV lento (se refratária)
7. Sumatriptano 6mg SC (se migranosa, sem CI cardiovascular)`,
    notes: "Red flags: cefaleia em trovão, febre + rigidez, déficit focal → TC + líquor.",
    guideline: "SBCe / IHS",
  },
  {
    id: "rx-dor-abdominal-diag",
    title: "Dor Abdominal Aguda",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Dipirona 1g EV 6/6h
2. Buscopan Composto 1 amp EV 8/8h
3. Tramadol 50-100mg EV se dor intensa
4. Ondansetrona 4mg EV se náusea/vômito
5. SF 0,9% 1000mL EV
6. Dieta zero até definição diagnóstica
7. Hemograma, amilase, lipase, TGO, TGP, bilirrubinas, PCR
8. USG abdome ou TC conforme suspeita
9. EAS, βHCG (mulheres em idade fértil)
10. Avaliação cirúrgica se abdome agudo`,
    notes: "Analgesia NÃO mascara abdome agudo — tratar dor precocemente.",
    guideline: "SBC / WSES",
  },
  {
    id: "rx-gastroenterite-diag",
    title: "Gastroenterite Aguda",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. SRO livre
2. SF 0,9% 1000mL EV (se desidratação)
3. Ondansetrona 4mg EV 8/8h
4. Buscopan Composto 1 amp EV 6/6h se cólica
5. Dieta leve, sem lactose por 3-5 dias
6. Probiótico (S. boulardii) 200mg VO 12/12h
7. Racecadotrila 100mg VO 8/8h se diarreia intensa`,
    warnings: "NÃO usar Loperamida se febre ou disenteria.",
    guideline: "SBG / OMS",
  },
  {
    id: "rx-anafilaxia-diag",
    title: "Anafilaxia",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Adrenalina 1:1000 — 0,3-0,5mg IM na coxa (repetir a cada 5-15 min)
2. SF 0,9% 1000-2000mL EV bolus
3. Difenidramina 50mg EV
4. Ranitidina 50mg EV
5. Hidrocortisona 200mg EV
6. Salbutamol spray 4-8 jatos (se broncoespasmo)
7. O2 se SpO2 <94%
8. Monitorização 6-8h (reação bifásica)`,
    warnings: "NÃO atrasar adrenalina. Corticóide NÃO substitui adrenalina.",
    guideline: "WAO / ASBAI",
  },
  {
    id: "rx-convulsao-diag",
    title: "Crise Convulsiva / Status Epiléptico",
    type: "Prescrição no Pronto Socorro",
    prescription: `Fase 1 (0-5 min):
1. Diazepam 10mg EV lento (ou Midazolam 10mg IM)
2. O2 + proteção de via aérea
3. Glicemia capilar

Fase 2 (5-20 min):
4. Fenitoína 20mg/kg EV (máx 50mg/min, em SF!)
5. OU Valproato 40mg/kg EV em 10 min

Fase 3 (>20 min — refratário):
6. Midazolam BIC 0,2mg/kg bolus → 0,1-0,4mg/kg/h
7. IOT + ventilação mecânica`,
    warnings: "Fenitoína NÃO diluir em SG (cristaliza).",
    guideline: "ABN / AES",
  },
  {
    id: "rx-ic-aguda-diag",
    title: "Insuficiência Cardíaca Aguda",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Furosemida 40-80mg EV bolus (repetir conforme resposta)
2. Nitroglicerina EV 5-200 mcg/min (se PA >100)
3. VNI: CPAP ou BiPAP
4. O2 para SpO2 >94%
5. Cabeceira 90°
6. Captopril 25mg SL se PAS >160
7. Morfina 2-4mg EV (se ansiedade intensa — uso criterioso)
8. Dobutamina 2,5-20 mcg/kg/min se baixo débito (PAS <90)
9. Monitorização contínua
10. BNP/NT-proBNP, troponina, ECG, RX tórax
11. Restrição hídrica 800-1000mL/dia
12. Balanço hídrico rigoroso`,
    guideline: "SBC / ESC 2023",
  },
  {
    id: "rx-dengue-diag",
    title: "Dengue",
    type: "Prescrição no Pronto Socorro",
    prescription: `Grupo A (sem alarme):
1. Hidratação oral 60-80mL/kg/dia (1/3 SRO + 2/3 líquidos)
2. Paracetamol 750mg VO 6/6h se febre
3. Dipirona 500mg VO 6/6h (alternativa)
4. Repouso + retorno se sinais de alarme

Grupo C (sinais de alarme):
5. SF 0,9% 20mL/kg EV em 2h (até 3x)
6. Hemograma + Ht seriado 6/6h
7. Internação

Grupo D (choque):
8. SF 0,9% 20mL/kg em 20min — repetir até estabilizar`,
    warnings: "NÃO usar AAS ou AINEs. Usar APENAS Paracetamol ou Dipirona.",
    guideline: "MS 2024",
  },
  {
    id: "rx-celulite-diag",
    title: "Celulite / Erisipela",
    type: "Prescrição Hospitalar",
    prescription: `Leve (ambulatorial):
1. Cefalexina 500mg VO 6/6h por 7-10 dias

Moderada/Grave:
2. Oxacilina 2g EV 4/4h OU Cefazolina 1g EV 8/8h
3. SF 0,9% 1000mL EV
4. Dipirona 1g EV 6/6h
5. Elevação do membro
6. Se MRSA: Vancomicina 15-20mg/kg EV 12/12h`,
    guideline: "IDSA / SBI",
  },
  {
    id: "rx-colica-renal-diag",
    title: "Cólica Renal",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Cetoprofeno 100mg EV (1ª escolha)
2. Dipirona 1g EV 6/6h
3. Tramadol 50-100mg EV se refratária
4. Buscopan Composto 1 amp EV 8/8h
5. Ondansetrona 4mg EV se náusea
6. SF 0,9% 500mL EV (NÃO hiper-hidratar)
7. Tamsulosina 0,4mg VO 1x/dia (cálculos 5-10mm)
8. TC sem contraste de abdome
9. EAS + creatinina`,
    warnings: "NÃO hiper-hidratar na cólica aguda. Internar se febre, rim único ou IRA.",
    guideline: "SBU / EAU",
  },
  {
    id: "rx-pancreatite-diag",
    title: "Pancreatite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero nas primeiras 24-48h (ou dieta precoce se tolerada)
2. SF 0,9% ou RL 250-500mL/h (ressuscitação agressiva nas primeiras 24h)
3. Dipirona 1g EV 6/6h
4. Tramadol 50-100mg EV 8/8h OU Morfina 2-4mg EV se dor intensa
5. Ondansetrona 4mg EV 8/8h
6. Omeprazol 40mg EV 1x/dia
7. Enoxaparina 40mg SC 1x/dia
8. Amilase, lipase, TGO, TGP, bilirrubinas, cálcio, triglicerídeos
9. TC abdome com contraste (após 72h se grave — Balthazar)
10. ATB apenas se necrose infectada (Meropenem 1g EV 8/8h)`,
    notes: "Critérios de gravidade: Ranson, APACHE II, BISAP. Necrose >30% = grave.",
    guideline: "SBG / AGA",
  },
  {
    id: "rx-tep-diag",
    title: "Tromboembolismo Pulmonar (TEP)",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. O2 suplementar se SpO2 <94%
2. Heparina não fracionada 80UI/kg bolus → 18UI/kg/h EV em BIC
3. OU Enoxaparina 1mg/kg SC 12/12h (se estável)
4. AngioTC de tórax (confirmação diagnóstica)
5. D-dímero (se baixa probabilidade)
6. ECG, troponina, BNP
7. Ecocardiograma à beira do leito (disfunção de VD)
8. Se TEP maciço com instabilidade: Alteplase 100mg EV em 2h
9. Após alta: anticoagulação por 3-6 meses (Rivaroxabana 15mg 12/12h por 21 dias → 20mg 1x/dia)`,
    warnings: "TEP maciço com choque = trombólise imediata. NÃO atrasar anticoagulação.",
    guideline: "SBC / ESC 2019",
  },
  {
    id: "rx-fa-diag",
    title: "Fibrilação Atrial",
    type: "Prescrição no Pronto Socorro",
    prescription: `Controle de frequência (FC alvo <110):
1. Metoprolol 5mg EV lento (até 15mg)
2. OU Diltiazem 0,25mg/kg EV em 2 min
3. Amiodarona 150mg EV em 10 min (se IC)

Cardioversão (se <48h):
4. Cardioversão elétrica sincronizada 120-200J
5. Amiodarona EV (cardioversão química)

Anticoagulação:
6. CHA2DS2-VASc ≥2 (H) ou ≥3 (M): Rivaroxabana 20mg 1x/dia OU Apixabana 5mg 12/12h`,
    guideline: "SBC / ESC 2020",
  },
  {
    id: "rx-queimadura-diag",
    title: "Queimaduras",
    type: "Prescrição Hospitalar",
    prescription: `1. Avaliar SCQ (regra dos 9)
2. Parkland: RL 4mL × peso × %SCQ (50% em 8h, 50% em 16h)
3. Morfina 2-4mg EV + Dipirona 1g EV 6/6h
4. Profilaxia antitetânica
5. Sulfadiazina de prata 1% tópico (2º grau)
6. Omeprazol 40mg EV (se >20% SCQ — úlcera de Curling)
7. SVD se SCQ >20%
8. Dieta hiperproteica precoce`,
    warnings: "NÃO estourar bolhas. NÃO usar gelo.",
    guideline: "SBQ / ABA",
  },
  {
    id: "rx-hda-diag",
    title: "Hemorragia Digestiva Alta",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. 2 acessos calibrosos + cristalóide em bolus
2. Omeprazol 80mg EV bolus → 8mg/h BIC por 72h
3. Reserva de concentrado de hemácias
4. Hemograma, coagulograma, função hepática, lactato
5. SNG (avaliar)
6. Se varizes: Terlipressina 2mg EV → 1mg 4/4h OU Octreotida 50mcg bolus → 50mcg/h
7. Ceftriaxona 1g EV 1x/dia (profilaxia em cirróticos)
8. EDA em 12-24h
9. Transfusão se Hb <7 (ou <9 se cardiopata)`,
    guideline: "SBG / ESGE",
  },
  {
    id: "rx-ira-diag",
    title: "Insuficiência Renal Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Identificar e tratar causa (pré-renal, renal, pós-renal)
2. SF 0,9% — ressuscitação volêmica se pré-renal (250-500mL/h)
3. Suspender nefrotóxicos (AINEs, aminoglicosídeos, contraste)
4. Furosemida 40-80mg EV (se hipervolemia — NÃO para "estimular" rim)
5. Monitorar: creatinina, ureia, K+, Na+, gasometria 12/12h
6. Se hipercalemia: Gluconato de Cálcio + Insulina + Glicose + Sorcal
7. Se acidose grave (pH <7,1): Bicarbonato 8,4%
8. SVD — controle de diurese
9. USG renal (excluir obstrução)
10. Indicações de diálise: K+ refratário, acidose refratária, EAP, uremia sintomática`,
    guideline: "KDIGO / SBN",
  },
  {
    id: "rx-hipercalemia-diag",
    title: "Hipercalemia",
    type: "Prescrição no Pronto Socorro",
    prescription: `K+ 5,5-6,0 (leve):
1. Sorcal (poliestirenossulfonato) 30g + Manitol VO

K+ 6,0-6,5 (moderada):
2. Insulina Regular 10UI + Glicose 50% 50mL EV
3. Nebulização com Salbutamol 10 gotas
4. Sorcal 30g VO ou retal

K+ >6,5 ou alteração ECG (grave):
5. Gluconato de Cálcio 10% 10mL EV em 2-3 min (estabilizar membrana)
6. Insulina 10UI + G50% 50mL EV
7. Bicarbonato 8,4% 50mEq EV (se acidose)
8. Salbutamol NBZ
9. Furosemida 40-80mg EV
10. Sorcal 30g
11. Considerar diálise se refratário`,
    warnings: "ECG obrigatório: onda T apiculada, alargamento QRS, bradicardia = URGÊNCIA.",
    guideline: "KDIGO / SBN",
  },
  {
    id: "rx-cad-diag",
    title: "Cetoacidose Diabética",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. SF 0,9% 1000mL EV em 1h → 250-500mL/h nas horas seguintes
2. Insulina Regular 0,1UI/kg/h EV contínua (OU bolus 0,1UI/kg + 0,1UI/kg/h)
3. K+ sérico: se <3,3 repor ANTES da insulina. Se 3,3-5,3: 40mEq/L no soro
4. Glicemia capilar 1/1h
5. Gasometria + eletrólitos 2/2h
6. Quando glicemia <250: trocar para SG 5% + SF 0,45% e reduzir insulina para 0,05UI/kg/h
7. Bicarbonato 8,4%: apenas se pH <6,9 (100mEq em 400mL em 2h)
8. Transição para SC: quando pH >7,3, HCO3 >18, AG <12 e paciente comendo
9. Manter insulina EV por 1-2h após 1ª dose SC`,
    warnings: "Hipocalemia é a principal causa de morte na CAD. Repor K+ ANTES da insulina se <3,3.",
    guideline: "SBD / ADA",
  },
  {
    id: "rx-meningite-diag",
    title: "Meningite Bacteriana",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. ATB IMEDIATO (não atrasar para exames):
   Adulto: Ceftriaxona 2g EV 12/12h
   Se >50 anos: + Ampicilina 2g EV 4/4h (cobertura Listeria)
2. Dexametasona 0,15mg/kg EV 6/6h por 4 dias (ANTES ou junto com ATB)
3. SF 0,9% — manter acesso (cuidado com hipervolemia)
4. Punção lombar (se não houver contraindicação)
5. Hemograma, PCR, hemocultura, glicemia, lactato
6. Dipirona 1g EV 6/6h se febre
7. Diazepam 10mg EV se convulsão
8. Monitorar nível de consciência (Glasgow)
9. Notificação compulsória IMEDIATA
10. Isolamento respiratório se meningocócica`,
    warnings: "ATB NA SUSPEITA — NÃO esperar resultado do líquor. Dexametasona reduz mortalidade.",
    guideline: "IDSA / MS",
  },
  {
    id: "rx-pneumotorax-diag",
    title: "Pneumotórax",
    type: "Prescrição no Pronto Socorro",
    prescription: `Pequeno (<2cm, estável, primário):
1. Observação + O2 suplementar alto fluxo (acelera reabsorção)
2. RX tórax controle em 6h
3. Alta se estável, retorno em 24-48h

Grande ou sintomático:
4. Drenagem torácica em selo d'água (5º EIC, linha axilar média)
5. Dreno tubular 28-32Fr (adulto)
6. Confirmar com RX tórax pós-drenagem
7. Analgesia: Dipirona 1g EV + Tramadol 100mg EV
8. Monitorização contínua

Hipertensivo (EMERGÊNCIA):
9. Punção descompressiva IMEDIATA (2º EIC, linha hemiclavicular)
10. Depois: drenagem torácica definitiva`,
    warnings: "Pneumotórax hipertensivo = diagnóstico CLÍNICO. NÃO esperar RX. Desvio de traqueia, turgência jugular, hipotensão.",
    guideline: "ATLS / SBCT",
  },
  {
    id: "rx-disseccao-diag",
    title: "Dissecção Aórtica",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Controle IMEDIATO de PA e FC:
   Esmolol 500mcg/kg bolus → 50-200mcg/kg/min EV (1ª escolha)
   OU Metoprolol 5mg EV a cada 5 min (até 15mg)
   Alvo: FC <60 e PAS 100-120
2. Se PA ainda alta após betabloqueador: Nitroprussiato 0,25-10mcg/kg/min
3. Morfina 2-4mg EV (dor intensa)
4. AngioTC de tórax/abdome URGENTE
5. Hemograma, coagulograma, função renal, troponina, D-dímero
6. Tipagem sanguínea + reserva de sangue
7. Ecocardiograma transesofágico (se instabilidade)
8. Tipo A (asc): cirurgia de emergência
9. Tipo B (desc): tratamento clínico ± endovascular`,
    warnings: "BETABLOQUEADOR PRIMEIRO. NÃO usar nitroprussiato isolado (taquicardia reflexa piora dissecção).",
    guideline: "SBC / AHA / ESC",
  },
  {
    id: "rx-encefalopatia-hepatica-diag",
    title: "Encefalopatia Hepática",
    type: "Prescrição Hospitalar",
    prescription: `1. Lactulose 20-30mL VO 8/8h (ajustar para 2-3 evacuações pastosas/dia)
2. OU Lactulose enema: 300mL + 700mL de água — retal (se VO impossível)
3. Rifaximina 550mg VO 12/12h (associar se recorrência)
4. Dieta normoproteica (1,2-1,5g/kg/dia) — NÃO restringir proteína
5. Investigar fator precipitante: infecção, sangramento GI, constipação, diuréticos, desidratação
6. Hemograma, função renal, eletrólitos, amônia, gasometria
7. Paracentese se ascite (PBE?)
8. SF 0,9% — hidratação cautelosa
9. Flumazenil 0,5mg EV (se uso de BZD — diagnóstico/terapêutico)
10. Classificar grau de West Haven (I-IV)`,
    notes: "Principal precipitante: infecção (PBE). Sempre investigar e tratar causa.",
    guideline: "EASL / SBG",
  },
  {
    id: "rx-abstinencia-alcool-diag",
    title: "Abstinência Alcoólica / Delirium Tremens",
    type: "Prescrição no Pronto Socorro",
    prescription: `Abstinência leve-moderada (CIWA <20):
1. Diazepam 10mg VO 6/6h → reduzir gradualmente em 5-7 dias
2. Tiamina (Vit B1) 300mg EV 1x/dia por 3-5 dias (ANTES da glicose!)
3. Ácido fólico 5mg VO 1x/dia
4. Complexo B VO 12/12h
5. Hidratação: SF 0,9% 1000mL + SG 5% 500mL

Delirium Tremens (CIWA >20 ou convulsão):
6. Diazepam 10-20mg EV a cada 5-10 min até sedação leve
7. OU Midazolam 5mg IM se sem acesso
8. Tiamina 500mg EV diluída em SF 100mL por 3 dias
9. MgSO4 2g EV em 20 min (hipomagnesemia frequente)
10. Monitorização contínua, contenção se necessário
11. Glicemia, eletrólitos, função hepática, amilase`,
    warnings: "TIAMINA ANTES DA GLICOSE — risco de Wernicke. Delirium Tremens tem mortalidade de 5-15% sem tratamento.",
    guideline: "ASAM / ABP",
  },
  {
    id: "rx-hdb-diag",
    title: "Hemorragia Digestiva Baixa",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. 2 acessos calibrosos + SF 0,9% em bolus se instabilidade
2. Tipagem sanguínea + reserva de concentrado de hemácias
3. Hemograma seriado, coagulograma, função renal, lactato
4. Toque retal (excluir hemorroida, fissura, massa)
5. SNG (excluir HDA como causa)
6. Transfusão se Hb <7 (ou <9 se cardiopata)
7. Suspender anticoagulantes/antiagregantes
8. Colonoscopia em 24h (após preparo) ou AngioTC se sangramento ativo
9. Se instabilidade: considerar arteriografia com embolização
10. Omeprazol 40mg EV 1x/dia
11. Dieta zero até avaliação`,
    notes: "90% dos HDB param espontaneamente. Divertículos e angiodisplasia são as causas mais comuns.",
    guideline: "SBG / ACG",
  },
  {
    id: "rx-retencao-urinaria-diag",
    title: "Retenção Urinária Aguda",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. SVD (sonda vesical de demora) — Foley 16-18Fr
2. Se falha: Sonda de Coudé ou chamar urologia
3. Esvaziar GRADUALMENTE (máx 500mL por vez — risco hematúria ex-vacuo)
4. SF 0,9% 500mL EV (se desidratação pós-obstrutiva)
5. Monitorar diurese (pode haver poliúria pós-obstrutiva)
6. Tamsulosina 0,4mg VO 1x/dia
7. Finasterida 5mg VO 1x/dia (se HPB)
8. EAS + urocultura
9. Creatinina, ureia, K+ (IRA pós-renal?)
10. USG de vias urinárias
11. Encaminhar urologia`,
    notes: "Poliúria pós-obstrutiva: pode perder litros de urina. Monitorar e repor volume.",
    guideline: "SBU / EAU",
  },
  {
    id: "rx-tvp-diag",
    title: "Trombose Venosa Profunda (TVP)",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta livre
2. SF 0,9% 500mL EV — manter acesso
3. Enoxaparina 1mg/kg SC 12/12h (dose plena)
4. OU Heparina não fracionada 80UI/kg bolus → 18UI/kg/h (se DRC grave)
5. Rivaroxabana 15mg VO 12/12h (se estável, pode iniciar direto)
6. Membro elevado
7. Meia elástica de compressão (após fase aguda)
8. Dipirona 1g EV 6/6h se dor
9. Cetoprofeno 100mg EV 12/12h (anti-inflamatório)
10. D-dímero, hemograma, coagulograma, função renal
11. USG Doppler venoso de MMII
12. Investigar TEP se dispneia/taquicardia`,
    warnings: "TVP proximal (iliofemoral) tem alto risco de TEP. Considerar internação.",
    guideline: "SBC / ISTH",
  },
  {
    id: "rx-gota-diag",
    title: "Crise Gotosa / Artrite Gotosa",
    type: "Prescrição PS / Hospitalar",
    prescription: `1. Colchicina 0,5mg VO 8/8h (iniciar nas primeiras 12h)
   OU Colchicina 1mg + 0,5mg após 1h (esquema curto)
2. Cetoprofeno 100mg EV 12/12h OU Naproxeno 500mg VO 12/12h
3. Prednisona 30-40mg VO 1x/dia por 5-7 dias (se CI a AINE)
4. Dipirona 1g EV 6/6h (adjuvante)
5. Compressas frias na articulação
6. Repouso articular
7. NÃO iniciar/alterar Alopurinol na crise
8. Ácido úrico sérico (pode estar normal na crise)
9. Hemograma, PCR, função renal
10. Artrocentese se dúvida diagnóstica (cristais de urato)`,
    notes: "Alopurinol não deve ser iniciado na crise — pode piorar. Iniciar após 2-4 semanas.",
    guideline: "SBR / EULAR",
  },
  {
    id: "rx-endocardite-diag",
    title: "Endocardite Infecciosa",
    type: "Prescrição Hospitalar / UTI",
    prescription: `Empírico (valva nativa):
1. Oxacilina 2g EV 4/4h + Gentamicina 3mg/kg/dia EV 1x/dia
2. Se alergia: Vancomicina 15-20mg/kg EV 12/12h + Gentamicina

Empírico (valva protética):
3. Vancomicina 15-20mg/kg EV 12/12h + Gentamicina 3mg/kg/dia + Rifampicina 300mg VO 8/8h

4. Hemocultura 3 amostras (punções diferentes, antes do ATB)
5. Ecocardiograma transesofágico (ETE)
6. SF 0,9% — hidratação
7. Hemograma, PCR, VHS, função renal seriados
8. ECG diário (bloqueio = abscesso perivalvar)
9. Fundo de olho (manchas de Roth)
10. Avaliação cirurgia cardíaca precoce se: IC, abscesso, vegetação >10mm`,
    warnings: "Mortalidade 20-30%. Indicação cirúrgica precoce melhora prognóstico.",
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-erisipela-diag",
    title: "Erisipela / Celulite Grave",
    type: "Prescrição Hospitalar",
    prescription: `Erisipela (Streptococcus):
1. Penicilina Cristalina 2 milhões UI EV 4/4h
2. OU Ceftriaxona 1g EV 1x/dia (alternativa)
3. Elevação do membro afetado
4. Compressas frias
5. Dipirona 1g EV 6/6h
6. Cetoprofeno 100mg EV 12/12h

Celulite grave (Staphylococcus + Streptococcus):
7. Oxacilina 2g EV 4/4h OU Cefalotina 1g EV 6/6h
8. Se MRSA: Vancomicina 15mg/kg EV 12/12h
9. Cuidados locais: limpeza com SF, curativo oclusivo
10. Hemograma, PCR, hemocultura se febre alta
11. USG partes moles se suspeita de abscesso (drenar)`,
    notes: "Porta de entrada: micose interdigital é a mais comum. Tratar tinha pedis.",
    guideline: "SBD / IDSA",
  },
  {
    id: "rx-herpes-zoster-diag",
    title: "Herpes Zoster",
    type: "Prescrição PS / Ambulatorial",
    prescription: `1. Aciclovir 800mg VO 5x/dia por 7 dias (iniciar <72h do início)
2. OU Valaciclovir 1g VO 8/8h por 7 dias (melhor posologia)
3. Se grave/imunossuprimido: Aciclovir 10mg/kg EV 8/8h
4. Dipirona 1g VO/EV 6/6h
5. Gabapentina 300mg VO à noite → titular até 300mg 8/8h
6. Amitriptilina 25mg VO à noite (prevenção neuralgia pós-herpética)
7. Cetoprofeno 100mg VO 12/12h
8. Tramadol 50mg VO 8/8h se dor intensa
9. Cuidados locais: manter lesões limpas e secas
10. Vacina Herpes Zoster para prevenção (>50 anos)`,
    warnings: "Zoster oftálmico (V1): URGÊNCIA oftalmológica. Zoster disseminado: internar e tratar EV.",
    guideline: "SBD / CDC",
  },
  {
    id: "rx-avch-diag",
    title: "AVC Hemorrágico (AVCH)",
    type: "Prescrição UTI / Sala Vermelha",
    prescription: `1. Dieta zero (risco de rebaixamento)
2. SF 0,9% 1000mL EV — manter 2 acessos
3. PA alvo <140/90 mmHg:
   Nitroprussiato 0,25-10mcg/kg/min OU Labetalol
4. IOT se Glasgow ≤8
5. Cabeceira a 30°
6. Manitol 20% 0,5-1g/kg EV em 20 min (se herniação)
7. Ácido Tranexâmico 1g EV em 10 min (se <4,5h do início — controversial)
8. Se uso de anticoagulante: reverter (Protamina, CCP, Vitamina K)
9. Profilaxia convulsão: Fenitoína 15-20mg/kg EV (controverso)
10. TC crânio urgente + angioTC
11. Neurocirurgia se: hematoma cerebelar >3cm, hidrocefalia, deterioração`,
    warnings: "NÃO trombolisar. Controlar PA agressivamente. Neurocirurgia precoce se indicada.",
    guideline: "SBN / AHA-ASA",
  },
  {
    id: "rx-flutter-diag",
    title: "Flutter Atrial",
    type: "Prescrição PS / Hospitalar",
    prescription: `Instável (hipotensão, EAP, isquemia):
1. Cardioversão elétrica sincronizada 50-100J

Estável — controle de frequência:
2. Diltiazem 0,25mg/kg EV em 2 min → infusão 5-15mg/h
3. OU Metoprolol 5mg EV lento (repetir até 15mg)
4. OU Amiodarona 150mg EV em 10 min (se IC)

Anticoagulação (CHA2DS2-VASc ≥2):
5. Enoxaparina 1mg/kg SC 12/12h → transição para DOAC
6. Rivaroxabana 20mg 1x/dia OU Apixabana 5mg 12/12h

7. ECG 12 derivações (flutter típico: ondas F em dente de serra)
8. Ecocardiograma
9. TSH, eletrólitos
10. Encaminhar para ablação (alta taxa de sucesso no flutter típico)`,
    notes: "Flutter típico tem excelente resposta à ablação por cateter. Considerar precocemente.",
    guideline: "SBC / ESC",
  },
  {
    id: "rx-peritonite-diag",
    title: "Peritonite / Abdome Agudo Infeccioso",
    type: "Prescrição Hospitalar / Cirúrgica",
    prescription: `1. Dieta zero
2. SF 0,9% 1000-2000mL EV (ressuscitação volêmica)
3. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h
4. OU Piperacilina-Tazobactam 4,5g EV 6/6h (se disponível)
5. OU Meropenem 1g EV 8/8h (se grave/nosocomial)
6. Dipirona 1g EV 6/6h
7. Morfina 2-4mg EV se dor intensa (NÃO retardar por medo de mascarar exame)
8. SVD (controle de diurese)
9. SNG aberta se vômitos/distensão
10. Hemograma, PCR, lactato, amilase, função renal
11. RX abdome (pneumoperitônio) + TC abdome
12. Avaliação cirúrgica URGENTE`,
    warnings: "Abdome agudo cirúrgico: NÃO retardar cirurgia. Peritonite generalizada = laparotomia.",
    guideline: "SBCD / SBC",
  },
  {
    id: "rx-miocardite-diag",
    title: "Miocardite Aguda",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Repouso absoluto (risco de arritmia letal)
2. Monitorização contínua (ECG, SpO2, PA)
3. SF 0,9% — manter acesso (evitar sobrecarga)
4. IC aguda: Furosemida 20-40mg EV + Dobutamina 2,5-10mcg/kg/min se baixo débito
5. Arritmias: Amiodarona 150mg EV se TV/FV
6. NÃO usar AINE/AAS (piora inflamação miocárdica)
7. IECA: Enalapril 2,5mg VO 12/12h (se tolerar PA)
8. Betabloqueador: Carvedilol 3,125mg VO 12/12h (após estabilização)
9. Troponina, BNP/NT-proBNP seriados
10. ECG seriado
11. Ecocardiograma (FE, derrame pericárdico)
12. RMN cardíaca (padrão-ouro)
13. Biópsia endomiocárdica se refratária`,
    warnings: "Repouso absoluto — exercício na fase aguda pode causar morte súbita. Evitar AINEs.",
    guideline: "SBC / ESC",
  },
];
