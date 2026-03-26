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
  {
    id: "rx-fratura-exposta-diag",
    title: "Fratura Exposta",
    type: "Prescrição PS / Ortopedia",
    prescription: `1. ABCDE (politrauma?)
2. Analgesia: Morfina 4-6mg EV + Dipirona 1g EV
3. SF 0,9% 1000mL EV — acesso venoso
4. Limpeza grosseira da ferida com SF abundante
5. Curativo estéril úmido + imobilização provisória
6. NÃO reduzir no PS (risco vascular)
7. ATB:
   Gustilo I-II: Cefalotina 2g EV → 1g 6/6h
   Gustilo III: Cefalotina + Gentamicina 5mg/kg/dia
   Contaminação fecal/solo: + Penicilina Cristalina 4M UI 4/4h
8. Profilaxia antitetânica (dT + SAT/IGHAT se indicado)
9. RX (2 incidências + articulação acima e abaixo)
10. Avaliação vascular (pulsos distais, perfusão)
11. Centro cirúrgico em até 6h (desbridamento + fixação)`,
    warnings: "Fratura exposta = emergência cirúrgica. ATB dentro de 1h. Limpeza + desbridamento precoce.",
    guideline: "SBOT / ATLS",
  },
  {
    id: "rx-luxacao-ombro-diag",
    title: "Luxação de Ombro",
    type: "Prescrição PS",
    prescription: `1. RX ombro (AP + axilar lateral) ANTES da redução
2. Avaliar lesão neurovascular (n. axilar → sensibilidade deltoidea)
3. Sedação para redução:
   Midazolam 2-5mg EV + Fentanil 50-100mcg EV
   OU Propofol 0,5-1mg/kg EV (com monitorização)
4. Redução (técnicas):
   Kocher, Cunningham, tração-contratração, Stimson
5. RX pós-redução (confirmar)
6. Imobilização com tipoia (Velpeau) por 3-4 semanas (<30 anos) ou 1-2 semanas (>40 anos)
7. Gelo local 20min 4/4h por 48h
8. Dipirona 1g VO 6/6h + Cetoprofeno 100mg VO 12/12h
9. Encaminhar ortopedia (risco de recidiva em jovens — considerar artroscopia)`,
    notes: "Luxação anterior (95%). Recidiva: <20 anos = 80-90%, >40 anos = 10-15%.",
    guideline: "SBOT",
  },
  {
    id: "rx-sindrome-compartimental-diag",
    title: "Síndrome Compartimental",
    type: "Prescrição de Emergência Ortopédica",
    prescription: `1. EMERGÊNCIA CIRÚRGICA — fasciotomia
2. Remover TODA imobilização (gesso, tala, curativo)
3. Membro ao nível do coração (NÃO elevar)
4. Analgesia: Morfina 4-6mg EV (dor desproporcional)
5. SF 0,9% 1000mL EV — hidratação (prevenir mioglobinúria)
6. Medida de pressão compartimental se disponível (>30mmHg ou delta <30 da PAD)
7. Fasciotomia de URGÊNCIA (até 6h — após: lesão irreversível)
8. Monitorar: CPK, mioglobina, função renal (rabdomiólise)
9. Alcalinização urinária: Bicarbonato 8,4% 150mL + SG 5% 850mL (pH urinário >6,5)
10. Manter diurese >200mL/h com SF agressivo`,
    warnings: "6Ps: Pain (desproporcional), Pressure, Paresthesia, Paralysis, Pulselessness, Pallor. Fasciotomia NÃO esperar.",
    guideline: "SBOT / ATLS",
  },
  {
    id: "rx-fascite-necrosante-diag",
    title: "Fascite Necrosante",
    type: "Prescrição de Emergência / Cirúrgica",
    prescription: `1. Internação UTI
2. Ressuscitação volêmica: SF 0,9% 30mL/kg EV
3. ATB de amplo espectro IMEDIATO:
   Meropenem 1g EV 8/8h + Vancomicina 15-20mg/kg EV 12/12h + Clindamicina 900mg EV 8/8h
   (Clindamicina = antitoxina — reduz produção de toxinas)
4. Cirurgia de EMERGÊNCIA: desbridamento extenso
   Reavaliação cirúrgica a cada 24-48h (redesbridamento)
5. Hemoculturas, lactato, gasometria, CPK
6. Noradrenalina se choque
7. Analgesia: Fentanil EV contínuo (dor intensa)
8. Hemoderivados se necessário
9. LRINEC score ≥6: alto risco`,
    warnings: "Mortalidade 25-40%. Cirurgia em HORAS salva vida. ATB sozinho NÃO resolve.",
    guideline: "IDSA / SBOT",
  },
  {
    id: "rx-rabdomiolise-diag",
    title: "Rabdomiólise",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. SF 0,9% agressivo: 200-300mL/h EV (alvo diurese >200-300mL/h)
2. Bicarbonato 8,4% 150mL + SG 5% 850mL (manter pH urinário >6,5)
3. Furosemida 40-80mg EV se oligúria (após expandir)
4. Monitorar: CPK seriada, creatinina, K+, Ca2+, fósforo, gasometria
5. Tratar hipercalemia agressivamente (ver protocolo)
6. NÃO repor cálcio (exceto se sintomático ou ECG alterado — deposita no músculo)
7. Suspender droga causadora (estatina, drogas ilícitas)
8. Se IRA oligúrica refratária: diálise
9. Manitol 20% 0,5g/kg EV (controverso — apenas se diurese presente)
10. Acompanhar CPK até queda sustentada`,
    warnings: "Hipercalemia + IRA = principal causa de morte. Hidratar MUITO (10-15L/dia pode ser necessário).",
    guideline: "KDIGO / AMIB",
  },
  {
    id: "rx-epistaxe-diag",
    title: "Epistaxe (Sangramento Nasal)",
    type: "Prescrição PS",
    prescription: `ANTERIOR (90% — ponto de Kiesselbach):
1. Posição sentada, inclinado para frente
2. Compressão digital binasal por 15 min contínuos
3. Se não parar: Algodão + Adrenalina 1:10.000 ou Oximetazolina nasal
4. Cauterização com Nitrato de Prata (se ponto visível)
5. Tamponamento anterior com Merocel ou gaze rayon

POSTERIOR (grave — nasofaringe):
6. Sonda Foley 14Fr: inserir pela narina, insuflar balão com 7-10mL H2O, tracionar
7. OU tamponamento com balão duplo (Epistat)
8. Internar + monitorizar SpO2
9. ATB: Amoxicilina-Clavulanato se tamponamento >48h

Todos:
10. PA (epistaxe pode ser sintoma de crise hipertensiva)
11. Coagulograma, hemograma, tipagem se sangramento intenso`,
    notes: "Anticoagulados: avaliar reverter se sangramento grave. NÃO suspender sem avaliar risco.",
    guideline: "ABORL-CCF",
  },
  {
    id: "rx-glaucoma-agudo-diag",
    title: "Glaucoma Agudo de Ângulo Fechado",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Timolol 0,5% — 1 gota no olho afetado (repetir 1x após 30 min)
2. Brimonidina 0,2% — 1 gota 12/12h
3. Pilocarpina 2% — 1 gota 15/15 min por 1h → 6/6h
   (iniciar APÓS 1h dos outros — pupila pode estar parética)
4. Acetazolamida 500mg VO (ataque) → 250mg VO 6/6h
5. Manitol 20% 1-2g/kg EV em 30-45 min (se PIO muito elevada)
6. Prednisolona 1% colírio — 1 gota 6/6h (reduzir inflamação)
7. Analgesia: Dipirona 1g EV + Ondansetrona 4mg EV (náusea frequente)
8. Encaminhar URGENTE para oftalmologista (iridotomia a laser)
9. Tratar olho contralateral profilaticamente (pilocarpina)`,
    warnings: "EMERGÊNCIA oftalmológica. PIO >60 mmHg pode causar perda visual irreversível em horas.",
    guideline: "CBO / AAO",
  },
  {
    id: "rx-ssj-net-diag",
    title: "Síndrome de Stevens-Johnson / NET",
    type: "Prescrição UTI / Queimados",
    prescription: `1. SUSPENDER droga causadora IMEDIAMENTE (principal medida)
   Comuns: Alopurinol, Carbamazepina, Fenitoína, Sulfas, AINEs oxicam
2. Internação em UTI ou unidade de queimados se >10% SCQ
3. Acesso venoso + SF 0,9% (reposição volêmica como queimado)
4. Analgesia: Morfina EV contínua se dor intensa
5. Cuidados de pele: NÃO desbridar. Curativos não aderentes (tule)
6. Olhos: avaliação oftalmológica URGENTE (sinéquias)
   Colírio lubrificante sem conservante 1/1h
   Dexametasona colírio 4/4h
7. Boca: Nistatina suspensão 6/6h, higiene oral delicada
8. SVD (monitorar diurese — desidratação)
9. Nutrição precoce (SNG se necessário)
10. NÃO usar corticoide sistêmico (controverso — pode piorar)
11. SCORTEN para prognóstico
12. Imunoglobulina EV 2g/kg em 3-5 dias (se NET grave — controverso)`,
    warnings: "Mortalidade NET: 30-50%. Suspender a droga = medida mais importante. Tratar como queimado.",
    guideline: "SBD / EADV",
  },
  {
    id: "rx-pericardite-diag",
    title: "Pericardite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. AAS 750-1000mg VO 8/8h por 1-2 semanas (reduzir gradual)
2. OU Ibuprofeno 600mg VO 8/8h por 1-2 semanas
3. + Colchicina 0,5mg VO 12/12h por 3 meses (previne recorrência)
4. Omeprazol 20mg VO 1x/dia (proteção gástrica)
5. Repouso (evitar exercício até resolução dos sintomas + PCR normal)
6. NÃO usar corticoide em 1ª linha (aumenta recorrência)
7. ECG seriado (supra ST difuso côncavo = pericardite; depressão PR)
8. Ecocardiograma (derrame? tamponamento?)
9. Troponina (miopericardite se elevada)
10. Hemograma, PCR/VHS (marcadores inflamatórios)
11. Se derrame grande ou tamponamento: pericardiocentese`,
    notes: "Tríade de Beck (tamponamento): hipotensão + turgência jugular + bulhas hipofonéticas → pericardiocentese.",
    guideline: "SBC / ESC",
  },
  {
    id: "rx-crise-adrenal-diag",
    title: "Crise Adrenal / Insuficiência Adrenal Aguda",
    type: "Prescrição de Emergência / UTI",
    prescription: `1. Hidrocortisona 100mg EV em bolus IMEDIATO
2. Manutenção: Hidrocortisona 50mg EV 6/6h (ou 200mg/24h em BIC)
3. SF 0,9% 1000mL EV rápido (expansão volêmica — desidratação grave)
4. SG 5% se hipoglicemia
5. Monitorar: PA, FC, glicemia, Na+, K+
6. NÃO esperar resultado de cortisol para tratar (se suspeita clínica forte)
7. Colher cortisol e ACTH ANTES da hidrocortisona (se possível)
8. Tratar fator desencadeante (infecção, cirurgia, suspensão de corticoide)
9. Reduzir dose gradualmente após 48-72h de estabilidade
10. Na alta: Prednisona 5mg/dia + Fludrocortisona 0,1mg/dia + cartão de alerta`,
    warnings: "Paciente em uso crônico de corticoide: NUNCA suspender abruptamente. Estresse = dobrar dose.",
    guideline: "SBEM / Endocrine Society",
  },
  {
    id: "rx-coma-mixedematoso-diag",
    title: "Coma Mixedematoso",
    type: "Prescrição UTI / Emergência",
    prescription: `1. IOT se rebaixamento grave ou hipoventilação
2. Levotiroxina 200-500mcg EV lento (ataque) → 50-100mcg EV/dia
   Se indisponível EV: Levotiroxina 500mcg via SNG
3. Hidrocortisona 100mg EV 8/8h (tratar insuficiência adrenal concomitante)
   Dar ANTES da levotiroxina (prevenir crise adrenal)
4. Aquecimento PASSIVO gradual (cobertores — NÃO ativo externo)
5. SF 0,9% com cautela (risco de hiponatremia dilucional)
6. Glicemia capilar (hipoglicemia frequente)
7. NÃO sedar (sensibilidade extrema a sedativos/opioides)
8. Monitorização contínua (bradicardia, hipotensão)
9. TSH, T4L, T3, cortisol, Na+, gasometria
10. Tratar fator precipitante (infecção é o mais comum)`,
    warnings: "Mortalidade 30-60%. Dar HIDROCORTISONA antes da LEVOTIROXINA. Aquecimento ativo pode causar colapso vascular.",
    guideline: "SBEM / ATA",
  },
  {
    id: "rx-ehh-diag",
    title: "Estado Hiperglicêmico Hiperosmolar (EHH)",
    type: "Prescrição UTI / Emergência",
    prescription: `1. SF 0,9% 1000mL EV em 1h → 250-500mL/h (déficit 6-9L)
   Se Na corrigido >145: trocar para SF 0,45%
2. Insulina Regular: 0,1UI/kg bolus → 0,1UI/kg/h EV contínua
   OU 0,14UI/kg/h sem bolus
3. K+ ANTES da insulina:
   K <3,3: NÃO iniciar insulina (repor K primeiro)
   K 3,3-5,3: KCl 20-40mEq/L de cada SF
   K >5,3: não repor, controlar 2/2h
4. Quando glicemia <300: SG 5% + insulina 0,02-0,05UI/kg/h
5. Glicemia capilar 1/1h
6. Eletrólitos, gasometria, osmolaridade 2-4h
7. Enoxaparina 40mg SC 1x/dia (alto risco trombótico)
8. Investigar precipitante: infecção, IAM, AVC, má adesão`,
    notes: "EHH: Osmolaridade >320, glicemia >600, pH >7,3. Diferente da CAD: sem cetoacidose significativa.",
    warnings: "Déficit hídrico é ENORME (6-9L). Hidratação é a medida mais importante. Risco de TEP.",
    guideline: "SBD / ADA 2024",
  },
  {
    id: "rx-hiponatremia-diag",
    title: "Hiponatremia Grave",
    type: "Prescrição Hospitalar / UTI",
    prescription: `SINTOMÁTICA (Na <120 + convulsão/rebaixamento):
1. NaCl 3% 150mL EV em 20 min → repetir até 2x se persistir sintoma
2. Alvo: elevar Na em 4-6 mEq/L nas primeiras 6h
3. Máximo: 8-10 mEq/L em 24h (risco mielinólise)
4. Na sérico a cada 2-4h

ASSINTOMÁTICA (Na 120-130):
5. Restrição hídrica 800-1000mL/dia (SIADH)
6. Furosemida 20mg VO 1x/dia + aumento de sal na dieta
7. Se SIADH refratária: Ureia 15-30g/dia VO (eficaz e barata)

HIPOVOLÊMICA (desidratação):
8. SF 0,9% — o sódio corrige com a reposição volêmica

INVESTIGAÇÃO:
9. Na sérico, osmolaridade sérica e urinária, Na urinário
10. TSH, cortisol (excluir hipotireoidismo e insuficiência adrenal)`,
    warnings: "Correção rápida >10-12mEq/24h causa MIELINÓLISE PONTINA (irreversível). Corrigir DEVAGAR.",
    guideline: "KDIGO / SBN",
  },
  {
    id: "rx-les-agudo-diag",
    title: "Lúpus Eritematoso Sistêmico — Flare Agudo",
    type: "Prescrição Hospitalar",
    prescription: `Leve (articular/cutâneo):
1. Hidroxicloroquina 400mg VO 1x/dia (manter — NUNCA suspender)
2. Prednisona 0,5mg/kg/dia VO → reduzir gradual
3. AINEs por curto período se artralgia

Moderado (serosite, citopenias):
4. Prednisona 1mg/kg/dia VO
5. Azatioprina 2mg/kg/dia VO (poupador de corticoide)

Grave (nefrite lúpica, cerebrite, hemorragia alveolar):
6. Pulsoterapia: Metilprednisolona 1g EV/dia por 3 dias
7. Ciclofosfamida EV (protocolo NIH ou Euro-Lupus)
8. OU Micofenolato 2-3g/dia VO (nefrite classe III-V)
9. Exames: anti-dsDNA, C3, C4, hemograma, função renal, proteinúria 24h, EAS
10. Biópsia renal se proteinúria >500mg/dia ou sedimento ativo`,
    notes: "Hidroxicloroquina reduz mortalidade — manter em TODOS os pacientes com LES.",
    guideline: "SBR / EULAR / ACR",
  },
  {
    id: "rx-artrite-reumatoide-aguda-diag",
    title: "Artrite Reumatoide — Crise Articular",
    type: "Prescrição PS / Hospitalar",
    prescription: `Crise articular aguda:
1. Prednisona 10-20mg VO 1x/dia (curto período)
2. OU Metilprednisolona 40-80mg IM dose única
3. Cetoprofeno 100mg VO 12/12h (curto prazo)
4. Dipirona 1g VO 6/6h
5. Compressas frias nas articulações inflamadas
6. Manter DMARD em uso (Metotrexato, Leflunomida)

Se monoartrite aguda:
7. Artrocentese (excluir artrite séptica — SEMPRE)
8. Cultura + gram + cristais do líquido sinovial

Encaminhamento:
9. Reumatologista para ajuste de DMARD
10. Hemograma, PCR/VHS, função renal/hepática (monitorar Metotrexato)`,
    notes: "NÃO suspender Metotrexato por conta própria. Encaminhar reumatologista para ajustes.",
    guideline: "SBR / EULAR / ACR",
  },
  {
    id: "rx-trombocitopenia-diag",
    title: "Trombocitopenia Grave / PTI",
    type: "Prescrição Hospitalar",
    prescription: `Plaquetas <20.000 ou sangramento ativo:
1. Prednisona 1mg/kg/dia VO (máx 80mg) por 2-4 semanas
2. OU Dexametasona 40mg VO/EV 1x/dia por 4 dias (pulso)
3. Se sangramento grave: Imunoglobulina EV 1g/kg/dia por 2 dias
4. Transfusão de plaquetas APENAS se sangramento ativo grave
   (na PTI: plaquetas são destruídas rapidamente — transfusão é ineficaz sem terapia)
5. Ácido Tranexâmico 1g VO/EV 8/8h (se sangramento mucoso)
6. Omeprazol 40mg VO 1x/dia (proteção gástrica)
7. EVITAR: AAS, AINEs, IM, procedimentos invasivos
8. Hemograma seriado
9. Esfregaço de sangue periférico (excluir PTT, SHU)
10. Hematologista URGENTE
11. Se refratária: Eltrombopag, Romiplostim, esplenectomia`,
    warnings: "PTT (pentade): trombocitopenia + anemia hemolítica + febre + alteração neurológica + IRA. Plasmaférese URGENTE.",
    guideline: "ABHH / ASH",
  },
  {
    id: "rx-colecistite-diag",
    title: "Colecistite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero (jejum para cirurgia)
2. SF 0,9% 1000mL EV — manter hidratação
3. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h
4. Dipirona 1g EV 6/6h
5. Cetoprofeno 100mg EV 12/12h (evitar se IRA)
6. Tramadol 50-100mg EV 8/8h se dor intensa
7. Ondansetrona 4mg EV 8/8h se náusea
8. Omeprazol 40mg EV 1x/dia
9. Enoxaparina 40mg SC 1x/dia
10. USG abdome (parede espessada, Murphy sonográfico, cálculo)
11. Hemograma, PCR, TGO/TGP, FA, GGT, bilirrubinas, amilase/lipase
12. Colecistectomia laparoscópica precoce (idealmente <72h)`,
    notes: "Critérios de Tóquio: Murphy + febre/leucocitose + imagem. Grau I-III define conduta.",
    guideline: "CBCD / Tokyo Guidelines 2018",
  },
  {
    id: "rx-diverticulite-diag",
    title: "Diverticulite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `NÃO complicada (Hinchey I):
1. Dieta líquida → progredir conforme tolerância
2. Ciprofloxacino 400mg EV 12/12h + Metronidazol 500mg EV 8/8h
3. OU Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h
4. Dipirona 1g EV 6/6h
5. Buscopan composto EV 6/6h
6. Ondansetrona 4mg EV 8/8h SN

Complicada (Hinchey II-IV):
7. Dieta zero
8. Piperacilina-Tazobactam 4,5g EV 6/6h OU Meropenem 1g EV 8/8h
9. Drenagem percutânea guiada por TC (abscesso >4cm)
10. Cirurgia de emergência se: peritonite difusa, perfuração livre
11. TC abdome com contraste (estadiamento Hinchey)
12. Hemograma, PCR, função renal`,
    guideline: "CBCD / WSES 2020",
  },
  {
    id: "rx-obstrucao-intestinal-diag",
    title: "Obstrução Intestinal",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero
2. SNG aberta (descompressão gástrica — medir débito)
3. SF 0,9% 1000-2000mL EV (reposição vigorosa — 3° espaço)
4. KCl 19,1% conforme K+ (hipocalemia é comum)
5. Dipirona 1g EV 6/6h
6. Buscopan simples 20mg EV 6/6h (controverso)
7. Ondansetrona 4mg EV 8/8h
8. Omeprazol 40mg EV 1x/dia
9. SVD (balanço hídrico rigoroso)
10. RX abdome em pé + deitado (níveis hidroaéreos, distensão)
11. TC abdome se dúvida (ponto de transição, sinais de isquemia)
12. Hemograma, eletrólitos, gasometria, lactato, amilase
13. Cirurgia: se sinais de estrangulamento, peritonite, ou sem melhora em 48-72h`,
    warnings: "Sinais de alarme: dor contínua, taquicardia, febre, leucocitose, lactato elevado = possível isquemia/estrangulamento.",
    guideline: "CBCD / WSES",
  },
  {
    id: "rx-colangite-diag",
    title: "Colangite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero
2. SF 0,9% — ressuscitação volêmica
3. Piperacilina-Tazobactam 4,5g EV 6/6h OU Meropenem 1g EV 8/8h
4. Dipirona 1g EV 6/6h
5. Ondansetrona 4mg EV 8/8h
6. Enoxaparina 40mg SC 1x/dia
7. Vitamina K 10mg EV se coagulopatia
8. Hemograma, PCR, TGO/TGP, FA, GGT, bilirrubinas, amilase, coagulograma
9. USG abdome (dilatação de vias biliares)
10. CPRE de urgência (descompressão biliar) — idealmente <24h
11. Se instável: noradrenalina + ressuscitação (sepse biliar)
12. Tríade de Charcot: dor HD + febre + icterícia
13. Pêntade de Reynolds: + hipotensão + confusão mental = GRAVÍSSIMO`,
    guideline: "Tokyo Guidelines 2018 / CBCD",
  },
  {
    id: "rx-cirrose-descomp-diag",
    title: "Cirrose Descompensada — Ascite",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta hipossódica (2g Na/dia)
2. Espironolactona 100mg VO 1x/dia (até 400mg)
3. Furosemida 40mg VO 1x/dia (até 160mg) — proporção 100:40
4. Restrição hídrica se Na <125
5. Paracentese de alívio se ascite tensa (>5L: repor Albumina 8g/L retirado)
6. Albumina 20% EV se paracentese >5L
7. Profilaxia PBE: Norfloxacino 400mg/dia se proteína líquido <1,5
8. MELD score (priorizar transplante)
9. USG abdome (ascite, hepatocarcinoma, trombose portal)
10. Exames: Na, K, creatinina, função hepática, coagulograma, hemograma
11. Análise líquido ascítico: citologia, proteína, albumina (GASA)
12. NÃO usar AINEs (risco IRA). Evitar aminoglicosídeos.`,
    warnings: "GASA ≥1,1 = hipertensão portal. PMN >250 = PBE → tratar com Ceftriaxona + Albumina.",
    guideline: "AASLD / SBH",
  },
  {
    id: "rx-hepatite-alcoolica-diag",
    title: "Hepatite Alcoólica Grave",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta hiperprotéica (1,5g/kg/dia) — suporte nutricional agressivo
2. Tiamina 300mg EV 1x/dia (3 dias) → 100mg VO
3. Ácido fólico 5mg VO 1x/dia
4. Complexo B VO 1x/dia
5. Se Maddrey ≥32: Prednisolona 40mg VO 1x/dia por 28 dias
6. Reavaliar com Score de Lille no D7 (se >0,45 = não respondedor → suspender)
7. Omeprazol 20mg VO 1x/dia
8. Lactulose 20mL VO 8/8h se encefalopatia
9. Hemograma, bilirrubinas, TP/INR, creatinina, AST/ALT
10. Calcular Maddrey: 4,6 × (TP paciente - TP controle) + bilirrubina total
11. NÃO usar corticoide se: infecção ativa, HDA, IRA, hepatite B
12. Pentoxifilina 400mg VO 8/8h (alternativa controversa)`,
    guideline: "EASL / AASLD / SBH",
  },
  {
    id: "rx-miastenia-crise-diag",
    title: "Crise Miastênica",
    type: "Prescrição Hospitalar",
    prescription: `1. IOT se: CVF <15mL/kg, PImáx >-20cmH2O, disfagia grave
2. VNI como ponte se leve (BiPAP IPAP 12 / EPAP 5)
3. SUSPENDER anticolinesterásico (piridostigmina) na crise — risco de crise colinérgica
4. Imunoglobulina EV 0,4g/kg/dia por 5 dias (1ª escolha)
5. OU Plasmaférese 5 sessões em dias alternados
6. Metilprednisolona 1g EV/dia por 3-5 dias (cuidado: pode piorar inicialmente)
7. SF 0,9% — acesso venoso
8. Monitorização contínua (CVF seriada, gasometria)
9. EVITAR: aminoglicosídeos, quinolonas, betabloqueadores, magnésio, fenitoína
10. Após estabilização: reintroduzir piridostigmina 30mg VO 6/6h gradual`,
    warnings: "CVF <1L ou queda rápida = IOT urgente. Não esperar gasometria alterar.",
    guideline: "ABN / AAN / Myasthenia Gravis Foundation",
  },
  {
    id: "rx-guillain-barre-diag",
    title: "Síndrome de Guillain-Barré",
    type: "Prescrição Hospitalar",
    prescription: `1. Monitorização contínua: CVF a cada 4-6h (IOT se <20mL/kg ou queda >30%)
2. Imunoglobulina EV 0,4g/kg/dia por 5 dias (1ª escolha)
3. OU Plasmaférese 5 sessões em dias alternados
4. NÃO usar corticoide (NÃO é eficaz na GBS)
5. Profilaxia TVP: Enoxaparina 40mg SC 1x/dia
6. Analgesia: Gabapentina 300mg 8/8h (dor neuropática é frequente)
7. Cuidados com disautonomia: monitorar PA, FC, arritmias
8. SVD se retenção urinária
9. Fisioterapia motora + respiratória precoce
10. LCR: dissociação albumino-citológica (proteína alta, células normais)
11. ENMG: padrão desmielinizante ou axonal
12. Recuperação: semanas a meses. 80% recuperam marcha independente.`,
    guideline: "ABN / AAN / GBS-CIDP Foundation",
  },
  {
    id: "rx-abscesso-hepatico-diag",
    title: "Abscesso Hepático",
    type: "Prescrição Hospitalar",
    prescription: `Piogênico:
1. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h
2. OU Piperacilina-Tazobactam 4,5g EV 6/6h
3. Drenagem percutânea guiada por USG/TC (se >5cm ou sem melhora)
4. Hemoculturas (2 pares) + cultura do aspirado

Amebiano:
5. Metronidazol 750mg EV 8/8h por 7-10 dias
6. Seguido de Teclozan 500mg VO 8/8h por 3 dias (erradicação luminal)
7. Drenagem se: >5cm, lobo esquerdo, sem resposta em 5-7 dias

Ambos:
8. Dipirona 1g EV 6/6h
9. Omeprazol 40mg EV 1x/dia
10. TC abdome com contraste (diagnóstico + guia drenagem)
11. Hemograma, PCR, TGO/TGP, FA, GGT, bilirrubinas
12. ATB EV por 2-3 semanas → VO até 4-6 semanas total`,
    guideline: "SBI / CBCD",
  },
  {
    id: "rx-sindrome-nefrotica-diag",
    title: "Síndrome Nefrótica",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta hipossódica (2g Na/dia) + normoproteica
2. Furosemida 40-80mg EV 12/12h (edema refratário)
3. OU Furosemida + Albumina 20% 100mL EV antes do diurético
4. Espironolactona 25-50mg VO 1x/dia (adjuvante)
5. IECA ou BRA: Enalapril 10-20mg VO 12/12h (reduzir proteinúria)
6. Estatina: Atorvastatina 40mg VO (dislipidemia nefrótica)
7. Anticoagulação profilática se albumina <2g/dL (risco de trombose venosa renal)
8. Exames: proteinúria 24h, albumina, colesterol, triglicérides, função renal
9. USG renal + biópsia renal (definir etiologia)
10. Hemograma, complemento (C3/C4), FAN, anti-DNA, sorologias (hepatite B/C, HIV)
11. NÃO usar AINEs. Cuidado com nefrotóxicos.`,
    guideline: "SBN / KDIGO",
  },
  {
    id: "rx-apendicite-diag",
    title: "Apendicite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero (jejum para cirurgia)
2. SF 0,9% 1000mL EV
3. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h (profilaxia/tratamento)
4. Dipirona 1g EV 6/6h
5. Tramadol 50-100mg EV 8/8h se dor intensa
6. Ondansetrona 4mg EV 8/8h SN
7. Omeprazol 40mg EV 1x/dia
8. Enoxaparina 40mg SC 1x/dia
9. Apendicectomia laparoscópica (idealmente <12h do diagnóstico)
10. TC abdome se dúvida diagnóstica (sensibilidade >95%)
11. Hemograma, PCR, EAS, beta-HCG (mulheres em idade fértil)
12. Escore de Alvarado: ≥7 = alta probabilidade`,
    notes: "Não retardar analgesia para não 'mascarar' exame físico — mito ultrapassado.",
    guideline: "CBCD / WSES 2020 / EAES",
  },
  {
    id: "rx-insuf-hepatica-aguda-diag",
    title: "Insuficiência Hepática Aguda (Hepatite Fulminante)",
    type: "Prescrição Hospitalar",
    prescription: `1. UTI — monitorização contínua
2. N-Acetilcisteína 150mg/kg em 1h → 50mg/kg em 4h → 100mg/kg em 16h (mesmo se não por paracetamol)
3. Lactulose 20-30mL VO/SNG 6/6h (encefalopatia)
4. NÃO usar proteínas na dieta inicialmente se encefalopatia grave
5. Omeprazol 40mg EV 1x/dia
6. Vitamina K 10mg EV 1x/dia
7. Glicose 50% se hipoglicemia (frequente)
8. Reposição eletrolítica conforme necessidade
9. ATB profilático: Ceftriaxona 1g EV se sinais de infecção
10. INR, bilirrubinas, amônia, lactato, gasometria, hemograma
11. Sorologias: hepatites A/B/C/E, autoimunes (FAN, AML), paracetamol nível
12. Critérios de King's College para transplante hepático
13. Contatar transplante PRECOCEMENTE (mortalidade >80% sem transplante)`,
    warnings: "INR >6,5 + creatinina >3,4 + encefalopatia grau III-IV = transplante urgente (King's College).",
    guideline: "AASLD / EASL / SBH",
  },
  {
    id: "rx-embolia-gordurosa-diag",
    title: "Embolia Gordurosa",
    type: "Prescrição Hospitalar",
    prescription: `1. O2 suplementar → IOT + VM se insuficiência respiratória
2. SF 0,9% — manter hidratação (evitar hipovolemia)
3. Metilprednisolona 1,5mg/kg EV 8/8h (controverso, mas usado na prática)
4. Analgesia adequada do foco fraturário
5. Fixação precoce da fratura de ossos longos (<24h reduz risco)
6. NÃO há tratamento específico — suporte
7. Monitorização contínua (SpO2, gasometria seriada)
8. Tríade clássica: hipóxia + confusão mental + petéquias (axilar, conjuntival, cervical)
9. TC tórax: vidro fosco difuso bilateral
10. RNM crânio: restrição de difusão (padrão "céu estrelado")
11. Hemograma, gasometria, lipase (pode elevar), EAS (gotículas de gordura)
12. Prevenir: fixação precoce de fraturas + ressuscitação volêmica adequada`,
    guideline: "ATLS / Ortopedia Trauma",
  },
  {
    id: "rx-cetoacidose-diag",
    title: "Cetoacidose Diabética",
    type: "Prescrição Hospitalar",
    prescription: `1. SF 0,9% 1000mL EV na 1ª hora
2. Após: SF 0,9% 500mL/h (ajustar conforme hidratação e Na)
3. Insulina Regular 0,1 UI/kg EV bolus → 0,1 UI/kg/h em BIC
4. NÃO iniciar insulina se K <3,3 (corrigir K antes)
5. KCl 19,1%: K <3,3 → 40mEq/h; K 3,3-5,3 → 20-30mEq/L de SF; K >5,3 → aguardar
6. Quando glicemia <250: trocar para SG 5% + SF + manter insulina
7. Bicarbonato: APENAS se pH <6,9 (100mEq em 400mL em 2h)
8. Gasometria + glicemia a cada 1-2h
9. Eletrólitos (K, Na, Mg, P) a cada 2-4h
10. Meta: queda glicemia 50-75mg/dL/h
11. Critérios de resolução: pH >7,3 + AG <12 + HCO3 >15 + glicemia <200
12. Transição: iniciar insulina SC 2h ANTES de desligar BIC`,
    guideline: "SBD / ADA 2024",
  },
  {
    id: "rx-tev-diag",
    title: "Tromboembolismo Venoso (TVP + TEP) — Anticoagulação",
    type: "Prescrição Hospitalar",
    prescription: `TVP proximal / TEP sem instabilidade:
1. Enoxaparina 1mg/kg SC 12/12h (padrão-ouro)
2. OU Heparina não-fracionada 80 UI/kg bolus → 18 UI/kg/h BIC (se ClCr <30)
3. DOAC: Rivaroxabana 15mg VO 12/12h por 21 dias → 20mg 1x/dia
4. OU Apixabana 10mg VO 12/12h por 7 dias → 5mg 12/12h

TEP maciço (instabilidade hemodinâmica):
5. Alteplase 100mg EV em 2h (trombólise)
6. OU Tenecteplase peso-ajustada EV bolus
7. Heparina NF após trombólise

Suporte:
8. O2 para SpO2 >94%
9. SF 0,9% 250-500mL (cuidadoso — não sobrecarregar VD)
10. Noradrenalina se hipotensão
11. D-dímero, troponina, BNP, gasometria
12. AngioTC tórax (TEP) / USG Doppler MMII (TVP)
13. Duração anticoagulação: 3-6 meses (provocado) ou indefinido (não provocado/recorrente)`,
    guideline: "SBC / ESC 2019 / CHEST",
  },
  {
    id: "rx-tuberculose-diag",
    title: "Tuberculose Pulmonar — Tratamento",
    type: "Prescrição Hospitalar",
    prescription: `Esquema básico (RIPE) — 6 meses:
Fase intensiva (2 meses):
1. Rifampicina 600mg + Isoniazida 300mg + Pirazinamida 1600mg + Etambutol 1100mg
   (Comprimido 4 em 1: RHZE — 4cp/dia se >50kg)

Fase de manutenção (4 meses):
2. Rifampicina 600mg + Isoniazida 300mg (RH — 2cp/dia)

3. Piridoxina (B6) 50mg VO 1x/dia (prevenção de neuropatia por isoniazida)
4. Jejum — tomar em jejum pela manhã (melhor absorção)
5. TGO/TGP basal + mensal nos primeiros 3 meses
6. BAAR mensal (controle de tratamento)
7. RX tórax: início, 2° mês, 6° mês
8. TDO (Tratamento Diretamente Observado) na UBS
9. Notificação compulsória SINAN
10. Investigar contactantes (PPD/IGRA + RX tórax)
11. HIV obrigatório em todo paciente com TB`,
    warnings: "NÃO usar corticoide sem ATB na TB ativa. Hepatotoxicidade: suspender se TGO >5x LSN ou icterícia.",
    guideline: "MS / OMS / PNCT 2024",
  },
  {
    id: "rx-hiv-pep-diag",
    title: "PEP — Profilaxia Pós-Exposição HIV",
    type: "Prescrição Hospitalar",
    prescription: `INDICAÇÃO: exposição de risco ao HIV em até 72h

Esquema preferencial (28 dias):
1. Tenofovir 300mg + Lamivudina 300mg (TDF/3TC) — 1cp VO 1x/dia
2. Dolutegravir 50mg — 1cp VO 1x/dia

INICIAR O MAIS RÁPIDO POSSÍVEL (ideal <2h, máx 72h)

Exames basais:
3. HIV teste rápido (se positivo: NÃO é PEP, é tratamento)
4. Hepatite B (HBsAg, anti-HBs), Hepatite C (anti-HCV)
5. VDRL, creatinina, hemograma, TGO/TGP
6. beta-HCG (mulheres)

Seguimento:
7. Retorno em 30 dias: repetir HIV, função renal
8. Retorno em 90 dias: HIV, VDRL, hepatites
9. Orientar: uso de preservativo até resultado final
10. Se exposição sexual: avaliar ISTs (Ceftriaxona + Azitromicina profilático se violência)
11. Encaminhar para SAE se HIV+`,
    guideline: "MS / PCDT PEP 2024 / OMS",
  },
  {
    id: "rx-leptospirose-diag",
    title: "Leptospirose",
    type: "Prescrição Hospitalar",
    prescription: `Forma leve (anictérica):
1. Doxiciclina 100mg VO 12/12h por 7 dias
2. OU Amoxicilina 500mg VO 8/8h por 7 dias
3. Hidratação oral abundante
4. Dipirona 1g VO 6/6h SN (NÃO usar AINEs)

Forma grave (síndrome de Weil: icterícia + IRA + hemorragia):
5. Penicilina G cristalina 1,5 milhão UI EV 6/6h
6. OU Ceftriaxona 1g EV 12/12h (alternativa)
7. SF 0,9% — ressuscitação volêmica
8. Hemodiálise precoce se IRA oligúrica (LRA não oligúrica é mais comum)
9. Transfusão se hemorragia / plaquetopenia grave
10. NÃO usar AINEs (risco de sangramento)
11. Hemograma, bilirrubinas, creatinina, CPK, coagulograma
12. Notificação compulsória
13. Sorologia: ELISA IgM (a partir do 7° dia)`,
    warnings: "Icterícia rubínica (alaranjada) + IRA + hemorragias = leptospirose até prova em contrário em área endêmica.",
    guideline: "MS / SVS / SBI",
  },
  {
    id: "rx-acidente-ofidico-diag",
    title: "Acidente Ofídico (Envenenamento por Serpente)",
    type: "Prescrição Hospitalar",
    prescription: `Identificar o tipo de acidente:

BOTRÓPICO (jararaca — mais comum 90%): dor, edema, equimose, coagulopatia
1. Soro antibotrópico (SAB) EV: leve 4 amp, moderado 8 amp, grave 12 amp
2. Hidratação agressiva (prevenir IRA por rabdomiólise/CIVD)
3. Analgesia (NÃO usar AINEs — piora coagulopatia)

CROTÁLICO (cascavel): facies miastênica, urina escura, pouca dor local
4. Soro anticrotálico (SAC) EV: leve 5 amp, moderado 10 amp, grave 20 amp
5. Manitol 20% 100mL EV se mioglobinúria

ELAPÍDICO (coral verdadeira): neurotoxicidade, paralisia respiratória
6. Soro antielapídico (SAE) 10 amp EV
7. IOT se insuficiência respiratória (pode ser rápida)
8. Neostigmina 0,05mg/kg EV (reversão parcial do bloqueio)

TODOS:
9. Pré-medicar soro: Prometazina 25mg IM + Hidrocortisona 500mg EV
10. Notificação compulsória`,
    warnings: "NUNCA fazer torniquete, sucção ou corte no local da picada. Soro antiofídico é o ÚNICO tratamento eficaz.",
    guideline: "MS / Instituto Butantan / Fundação Ezequiel Dias",
  },
  {
    id: "rx-fournier-diag",
    title: "Gangrena de Fournier",
    type: "Prescrição Hospitalar",
    prescription: `EMERGÊNCIA CIRÚRGICA

1. ATB de amplo espectro IMEDIATO:
   Meropenem 1g EV 8/8h + Vancomicina 15mg/kg EV 12/12h + Clindamicina 900mg EV 8/8h
2. OU Piperacilina-Tazobactam 4,5g EV 6/6h + Vancomicina + Clindamicina
3. SF 0,9% — ressuscitação agressiva
4. Noradrenalina se choque séptico
5. Desbridamento cirúrgico URGENTE (vida > tecido)
   Reoperação planejada em 24-48h (second look)
6. Dipirona 1g EV 6/6h + Morfina 4mg EV 4/4h SN (dor intensa)
7. SVD (se períneo comprometido)
8. Hemograma, PCR, lactato, gasometria, coagulograma, hemoculturas
9. TC pélvica (extensão, gás subcutâneo)
10. Curativos com VAC (pressão negativa) após desbridamento
11. Avaliar câmara hiperbárica (se disponível)
12. Controle glicêmico rigoroso (maioria são diabéticos)`,
    warnings: "Mortalidade 20-40%. Desbridamento precoce e agressivo é o principal fator prognóstico.",
    guideline: "CBCD / WSES / SBU",
  },
  {
    id: "rx-angioedema-diag",
    title: "Angioedema",
    type: "Prescrição Hospitalar",
    prescription: `Angioedema alérgico (histaminérgico):
1. Adrenalina 0,3-0,5mg IM se via aérea ameaçada
2. Dexclorfeniramina 5mg EV
3. Hidrocortisona 200mg EV
4. Ranitidina 50mg EV
5. Monitorar via aérea — IOT se estridor/disfonia progressiva
6. Nebulização com Adrenalina 5mL se edema de VA

Angioedema por IECA (bradicinicinérgico):
7. SUSPENDER IECA permanentemente
8. Anti-histamínicos podem NÃO funcionar (mediado por bradicinina)
9. Icatibanto 30mg SC (se disponível — inibidor de bradicinina)
10. OU concentrado de inibidor de C1 esterase 20UI/kg EV
11. Adrenalina IM se via aérea comprometida
12. Observação 24-48h (recorrência é possível)

Angioedema hereditário:
13. Concentrado de C1 inibidor ou Icatibanto
14. NÃO responde a anti-histamínicos/corticoides
15. Encaminhar imunologista`,
    guideline: "ASBAI / WAO / EAACI",
  },
  {
    id: "rx-trombose-cerebral-diag",
    title: "Trombose Venosa Cerebral",
    type: "Prescrição Hospitalar",
    prescription: `1. Heparina não-fracionada 80UI/kg bolus → 18UI/kg/h BIC (TTPA 2-2,5x)
2. OU Enoxaparina 1mg/kg SC 12/12h
3. Anticoagular MESMO SE hemorragia associada (recomendação forte)
4. Anticonvulsivante se crise: Levetiracetam 500mg EV 12/12h
5. Analgesia: Dipirona 1g EV 6/6h + Morfina se cefaleia intensa
6. Manitol 20% 1g/kg EV se HIC (hipertensão intracraniana)
7. Cabeceira a 30°
8. RNM + AngioRM venosa (padrão-ouro diagnóstico)
9. AngioTC venosa (alternativa se RM indisponível)
10. Investigar trombofilias: proteína C/S, antitrombina, FV Leiden, mutação protrombina, anticorpo antifosfolípide
11. Hemograma, coagulograma, D-dímero, beta-HCG
12. Transição para Varfarina (INR 2-3) por 6-12 meses`,
    notes: "Cefaleia progressiva + sinais focais + papiledema em mulher jovem/puérpera/uso ACO = pensar em TVC.",
    guideline: "AHA/ASA 2024 / ESO / ABN",
  },
  {
    id: "rx-derrame-pleural-diag",
    title: "Derrame Pleural — Investigação e Tratamento",
    type: "Prescrição Hospitalar",
    prescription: `1. RX tórax PA + perfil + Laurell (decúbito lateral)
2. USG torácica (localizar, estimar volume, guiar punção)
3. Toracocentese diagnóstica (sempre que >10mm no Laurell):

Análise do líquido:
4. Proteínas, LDH, glicose, pH, celularidade, ADA
5. Citologia oncótica + BAAR + cultura
6. Critérios de Light (exsudato vs transudato):
   Proteína LP/sérica >0,5 OU LDH LP/sérica >0,6 OU LDH LP >2/3 LSN = EXSUDATO

Transudato: tratar causa (IC, cirrose, síndrome nefrótica)
7. Furosemida 40-80mg EV + restrição hídrica

Exsudato: investigar causa
8. Empiema (pH <7,2, glicose <60, pus): drenagem torácica fechada
9. TB pleural (ADA >40, linfocítico): RIPE esquema básico
10. Neoplásico: citologia + biópsia pleural
11. Paracentese de alívio se dispneia (máx 1500mL por vez)
12. Drenagem torácica se: empiema, hemotórax, quilotórax, pneumotórax associado`,
    guideline: "SBPT / BTS / ATS",
  },
  {
    id: "rx-malaria-diag",
    title: "Malária",
    type: "Prescrição Hospitalar",
    prescription: `P. vivax / P. ovale (forma mais comum no Brasil):
1. Cloroquina 600mg D1 → 450mg D2 → 450mg D3
2. Primaquina 15mg/dia por 14 dias (cura radical — eliminar hipnozoítos)
3. Dosar G6PD antes da primaquina (risco de hemólise)

P. falciparum não grave:
4. Arteméter-Lumefantrina (Coartem): 4cp 12/12h por 3 dias
5. + Primaquina 45mg dose única no D1 (gametocidose)

P. falciparum grave (parasitemia >2%, alteração consciência, IRA, acidose):
6. Artesunato 2,4mg/kg EV 0h, 12h, 24h → 1x/dia até VO possível
7. Após melhora: completar com Coartem VO
8. SF 0,9% — cuidado com edema pulmonar
9. Transfusão se Hb <7 ou anemia grave sintomática
10. Hemodiálise se IRA grave
11. Gota espessa + teste rápido (diagnóstico)
12. Notificação compulsória + SIVEP-Malária`,
    warnings: "Malária grave por P. falciparum: mortalidade alta. Artesunato EV é superior à quinina.",
    guideline: "MS / OMS / PNCM 2024",
  },
  {
    id: "rx-tetano-diag",
    title: "Tétano Acidental",
    type: "Prescrição Hospitalar",
    prescription: `1. UTI — ambiente escuro e silencioso (evitar estímulos)
2. Imunoglobulina antitetânica (SAT humano) 3000-6000 UI IM
3. OU Soro antitetânico (SAT equino) 20.000 UI EV (teste alérgico antes)
4. Metronidazol 500mg EV 8/8h por 7-10 dias (eliminar C. tetani)
5. Benzodiazepínico: Diazepam 5-10mg EV a cada 5 min até controle dos espasmos
   → BIC: Midazolam 0,1-0,3mg/kg/h
6. IOT se: espasmos laríngeos, insuficiência respiratória
7. BNM: Rocurônio/Pancurônio se espasmos refratários (em VM)
8. Sulfato de Magnésio 5g EV → 2-3g/h BIC (controle autonômico)
9. Desbridamento do foco (ferida)
10. Vacinação: dT (o tétano NÃO confere imunidade natural)
11. Analgesia: Morfina 2-4mg EV SN
12. Nutrição precoce por SNG se não tolera VO`,
    warnings: "Tétano NÃO confere imunidade. Vacinar DURANTE a internação. Mortalidade 30-50% mesmo com tratamento.",
    guideline: "MS / SVS / OMS",
  },
  {
    id: "rx-crise-panico-diag",
    title: "Crise de Pânico / Transtorno de Ansiedade Agudo",
    type: "Prescrição Hospitalar",
    prescription: `1. Excluir causas orgânicas PRIMEIRO:
   ECG (arritmia, IAM), glicemia, gasometria, TSH
2. Ambiente calmo, acolhedor, privacidade
3. Técnica de respiração: inspirar 4s → segurar 4s → expirar 6s
4. Reassurar: "Não é infarto, não vai morrer, isso vai passar"

Farmacológico (se necessário):
5. Clonazepam 0,5mg SL (dissolve rápido)
6. OU Alprazolam 0,5mg SL
7. OU Diazepam 5-10mg VO

8. Alta com orientações + encaminhamento psiquiatria
9. Se recorrente: iniciar ISRS (Sertralina 50mg ou Escitalopram 10mg)
10. TCC (terapia cognitivo-comportamental) é 1ª linha junto com ISRS
11. Evitar uso crônico de benzodiazepínicos (dependência)`,
    notes: "Diagnóstico de exclusão. Sempre excluir: IAM, TEP, arritmia, tireotoxicose, hipoglicemia, feocromocitoma.",
    guideline: "ABP / APA / DSM-5",
  },
  {
    id: "rx-tentativa-suicidio-diag",
    title: "Tentativa de Suicídio — Manejo na Emergência",
    type: "Prescrição Hospitalar",
    prescription: `1. Estabilização clínica PRIMEIRO (ABCDE se intoxicação/trauma)
2. Lavagem gástrica + Carvão ativado se intoxicação <1h
3. Antídotos específicos conforme substância
4. NÃO deixar paciente sozinho em nenhum momento
5. Retirar objetos perigosos (cintos, cadarços, objetos cortantes)
6. Avaliação psiquiátrica OBRIGATÓRIA antes da alta
7. Escalas: Columbia Suicide Severity Rating Scale (C-SSRS)
8. Internação psiquiátrica se risco iminente persistente
9. Contato familiar/pessoa de referência
10. Plano de segurança: restringir acesso a meios letais
11. Encaminhamento CAPS (Centro de Atenção Psicossocial)
12. Follow-up em 48-72h (período de maior risco de nova tentativa)
13. Notificação compulsória (violência autoprovocada)`,
    warnings: "TODA tentativa de suicídio é grave. Não minimizar. Avaliação psiquiátrica é obrigatória. Notificação compulsória.",
    guideline: "ABP / MS / OMS / CFM",
  },
  {
    id: "rx-insuf-resp-aguda-diag",
    title: "Insuficiência Respiratória Aguda",
    type: "Prescrição Hospitalar",
    prescription: `Tipo I (hipoxêmica — PaO2 <60):
1. O2 suplementar: cateter nasal → máscara com reservatório → CNAF
2. VNI: CPAP 5-10 ou BiPAP IPAP 12-20 / EPAP 5-8 (se não responde)
3. IOT se: SpO2 <88% refratária, fadiga, rebaixamento

Tipo II (hipercápnica — PaCO2 >50):
4. VNI é 1ª linha (especialmente DPOC): BiPAP IPAP 15-20 / EPAP 5-8
5. NÃO dar O2 em excesso no DPOC (alvo SpO2 88-92%)
6. IOT se: pH <7,25 refratário, fadiga, Glasgow ↓

Ventilação Mecânica:
7. Modo: VCV ou PCV → volume corrente 6-8mL/kg peso predito
8. PEEP: iniciar 5 → titular conforme oxigenação
9. FiO2: menor possível para SpO2 >94% (88-92% se DPOC)
10. Pplateau <30cmH2O (ventilação protetora)
11. Gasometria 30 min após ajustes
12. Investigar causa: RX tórax, ECG, BNP, D-dímero, troponina`,
    guideline: "AMIB / SBPT / ARDS Network",
  },
  {
    id: "rx-sca-sem-supra-diag",
    title: "SCA Sem Supra (IAM sem Supra / Angina Instável)",
    type: "Prescrição Hospitalar",
    prescription: `1. AAS 300mg mastigar (ataque) → 100mg/dia
2. Clopidogrel 300mg (ataque) → 75mg/dia OU Ticagrelor 180mg → 90mg 12/12h
3. Enoxaparina 1mg/kg SC 12/12h (ou HNF bolus + BIC se CATE previsto)
4. Atorvastatina 80mg VO (iniciar nas primeiras 24h)
5. Metoprolol 25mg VO 12/12h (se FC >60, PA >100, sem IC)
6. Nitroglicerina SL 5mg a cada 5 min (até 3 doses) → EV se dor refratária
7. Morfina 2-4mg EV se dor refratária a nitrato
8. O2 APENAS se SpO2 <90%
9. Troponina seriada (0h, 3h, 6h)
10. ECG seriado (0h, 3h, 6h e se dor recorrente)
11. GRACE score (estratificar risco)
12. CATE: <2h se muito alto risco, <24h se alto risco, <72h se risco intermediário
13. Ecocardiograma (função ventricular, alteração segmentar)`,
    warnings: "NÃO usar nitrato se: PAS <90, uso de sildenafil <24h, IAM de VD (hipotensão).",
    guideline: "SBC / ESC 2023 / AHA",
  },
  {
    id: "rx-choque-cardiogenico-diag",
    title: "Choque Cardiogênico",
    type: "Prescrição Hospitalar",
    prescription: `1. UTI — monitorização invasiva (PAI, PVC, Swan-Ganz se disponível)
2. Noradrenalina 0,1-1mcg/kg/min (manter PAM ≥65)
3. Dobutamina 2,5-20mcg/kg/min (inotrópico — aumentar débito)
4. NÃO fazer volume agressivo (piora congestão)
5. SF 0,9% 250mL em bolus APENAS se não congestivo (teste de volume cauteloso)
6. Furosemida 40-80mg EV se congestão (mesmo hipotenso — com vasopressor)
7. IOT + VM se edema pulmonar / fadiga respiratória
8. ECG, troponina, BNP, lactato, gasometria
9. Ecocardiograma URGENTE (FE, complicações mecânicas)
10. CATE de emergência se IAM (causa mais comum)
11. BIA (balão intra-aórtico) ou Impella se refratário
12. Corrigir causas reversíveis: arritmia, tamponamento, TEP, valvulopatia aguda`,
    warnings: "Mortalidade 40-50%. CATE + revascularização precoce reduz mortalidade no IAM.",
    guideline: "SBC / ESC / SCAI",
  },
  {
    id: "rx-clostridium-diag",
    title: "Infecção por Clostridioides difficile (C. difficile)",
    type: "Prescrição Hospitalar",
    prescription: `Episódio inicial não grave:
1. Vancomicina 125mg VO 6/6h por 10 dias (1ª escolha)
2. OU Fidaxomicina 200mg VO 12/12h por 10 dias (menor recorrência)
3. NÃO usar metronidazol como 1ª linha (inferior)

Grave (leucócitos >15.000, creatinina >1,5):
4. Vancomicina 125mg VO 6/6h por 10 dias

Fulminante (hipotensão, íleo, megacólon):
5. Vancomicina 500mg VO/SNG 6/6h + Vancomicina retal 500mg em 500mL SF 6/6h
6. + Metronidazol 500mg EV 8/8h
7. Avaliar colectomia de emergência

TODOS:
8. SUSPENDER ATB desencadeante se possível
9. Precaução de contato (luvas + avental + quarto privativo)
10. Higiene das mãos com ÁGUA E SABÃO (álcool não mata esporos)
11. Pesquisa de toxina A/B (PCR ou EIA)
12. NÃO usar antidiarreicos (loperamida) — risco de megacólon tóxico`,
    guideline: "IDSA / SHEA 2021 / SBI",
  },
  {
    id: "rx-intox-cocaina-diag",
    title: "Intoxicação por Cocaína / Crack",
    type: "Prescrição Hospitalar",
    prescription: `Agitação / Simpaticomimético:
1. Diazepam 10-20mg EV (1ª linha para TUDO — sedação, convulsão, HAS, taquicardia)
2. Repetir a cada 5-10 min se necessário (doses altas podem ser necessárias)
3. Resfriamento ativo se hipertermia >39°C

Dor torácica / SCA por cocaína:
4. AAS 300mg VO + Nitroglicerina SL (vasoespasmo coronariano)
5. Diazepam 10mg EV
6. NÃO usar betabloqueador puro (risco de vasoespasmo paradoxal)
7. Fentolamina 5mg EV se HAS refratária
8. CATE se critérios de IAM

Convulsão:
9. Diazepam 10mg EV → repetir 5 min → Midazolam BIC se refratária

Suporte:
10. SF 0,9% — hidratação
11. Monitorização contínua (arritmias, SCA)
12. CPK, troponina, ECG, função renal (rabdomiólise)
13. Toxicológico urinário`,
    warnings: "NUNCA usar betabloqueador puro na intoxicação por cocaína. Benzodiazepínico é a 1ª droga para TUDO.",
    guideline: "ABCF / AHA / Toxicologia Clínica",
  },
  {
    id: "rx-intox-monoxido-co-diag",
    title: "Intoxicação por Monóxido de Carbono (CO)",
    type: "Prescrição Hospitalar",
    prescription: `1. O2 100% por máscara com reservatório (por pelo menos 6h)
   Meia-vida do CO: 4-6h em ar ambiente → 60-90 min com O2 100%
2. IOT + VM com FiO2 100% se rebaixamento / instabilidade
3. Câmara hiperbárica se disponível (indicações):
   COHb >25%, gestante com COHb >15%, alteração neurológica, isquemia miocárdica
4. Monitorização contínua (arritmias)
5. ECG (isquemia miocárdica por hipóxia)
6. Troponina (elevação é comum)
7. Gasometria arterial: COHb (carboxihemoglobina)
   ATENÇÃO: SpO2 pode estar FALSAMENTE NORMAL (pulsooxímetro não distingue COHb)
8. Gasometria venosa: lactato
9. Neuroimagem se sintomas neurológicos (RNM — lesão de globo pálido)
10. Observação 24h (síndrome neurológica tardia em até 40 dias)
11. Investigar fonte de CO (incêndio, aquecedor, churrasqueira em ambiente fechado)`,
    warnings: "SpO2 NÃO é confiável na intoxicação por CO — SEMPRE dosar COHb na gasometria.",
    guideline: "ABCF / CIT / Undersea & Hyperbaric Medical Society",
  },
  {
    id: "rx-hepatite-aguda-viral-diag",
    title: "Hepatite Aguda Viral",
    type: "Prescrição Hospitalar",
    prescription: `1. Repouso relativo (não é obrigatório repouso absoluto)
2. Dieta leve, evitar álcool e hepatotóxicos
3. NÃO usar paracetamol em dose alta (preferir dipirona)
4. Dipirona 1g EV/VO 6/6h se dor ou febre
5. Ondansetrona 4mg EV 8/8h se náusea intensa
6. Hidratação VO abundante → EV se não tolera
7. Evitar: paracetamol >2g/dia, AINEs, álcool, ervas hepatotóxicas
8. Sorologias: anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV, anti-HEV IgM
9. TGO/TGP, bilirrubinas, GGT, FA, albumina, INR, hemograma
10. Monitorar INR (coagulopatia = sinal de gravidade)
11. Se INR >1,5 ou encefalopatia: pensar hepatite fulminante → NAC + contatar transplante
12. Notificação compulsória (todas as hepatites virais)
13. Hepatite A: suporte. Hepatite B aguda: suporte (>95% resolve). Hepatite C: encaminhar tratamento.`,
    guideline: "MS / SBH / EASL / AASLD",
  },
  {
    id: "rx-acidente-aranha-diag",
    title: "Acidente por Aranha (Loxosceles / Phoneutria)",
    type: "Prescrição Hospitalar",
    prescription: `LOXOSCELES (aranha-marrom) — necrose cutânea:
1. Soro antiloxoscélico (SALox) se <72h:
   Leve: 5 ampolas EV. Moderado: 10 amp. Grave: 10 amp + corticoide
2. Prednisona 1mg/kg/dia VO por 5-7 dias (reduz hemólise)
3. Analgesia: Dipirona + Tramadol
4. Cuidados locais: NÃO desbridar precocemente (esperar 7-14 dias)
5. Monitorar: hemólise (Hb, LDH, bilirrubinas), função renal (IRA)
6. SVD se hemoglobinúria (manter diurese >1mL/kg/h)

PHONEUTRIA (armadeira) — dor intensa, neurotoxicidade:
7. Analgesia: infiltração local com Lidocaína 2% sem vaso
8. Dipirona 1g EV + Tramadol 100mg EV
9. Soro antiaracnídeo se moderado/grave: 2-4 ampolas EV (criança: SEMPRE)
10. Monitorar: bradicardia, hipotensão, EAP (grave em crianças <7 anos)

TODOS:
11. Pré-medicar soro: Prometazina + Hidrocortisona
12. Notificação compulsória`,
    guideline: "MS / Instituto Butantan / CEVAP",
  },
  {
    id: "rx-colite-pseudomembranosa-diag",
    title: "Colite Pseudomembranosa / Megacólon Tóxico",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero se íleo / megacólon
2. SF 0,9% — ressuscitação agressiva
3. Vancomicina 500mg VO/SNG 6/6h
4. + Vancomicina 500mg retal em 500mL SF 6/6h (se íleo paralítico)
5. + Metronidazol 500mg EV 8/8h
6. SUSPENDER ATB causador
7. SNG aberta se distensão
8. Precaução de contato
9. RX abdome seriado (dilatação cólon >6cm = megacólon)
10. TC abdome se suspeita de perfuração
11. Hemograma, PCR, lactato, albumina, função renal
12. Colectomia subtotal de emergência se:
    Perfuração, megacólon refratário, piora clínica apesar de tratamento
13. Mortalidade do megacólon tóxico: 30-50%`,
    warnings: "Megacólon tóxico: NÃO usar antidiarreicos, NÃO fazer colonoscopia (perfuração). Cirurgia precoce salva vidas.",
    guideline: "IDSA / SHEA / CBCD",
  },
  {
    id: "rx-urticaria-aguda-diag",
    title: "Urticária Aguda / Angioedema Alérgico",
    type: "Prescrição Hospitalar",
    prescription: `Sem comprometimento de via aérea:
1. Dexclorfeniramina 5mg EV lento (anti-H1)
2. Ranitidina 50mg EV (anti-H2 — adjuvante)
3. Hidrocortisona 200mg EV (prevenção de reação tardia)
4. Prednisolona 40-60mg VO se alta (por 3-5 dias)
5. Loratadina 10mg VO ou Desloratadina 5mg VO (manutenção)
6. Observação 4-6h (risco de evolução para anafilaxia)

Com comprometimento de via aérea (disfonia, estridor, dispneia):
7. Adrenalina 0,3-0,5mg IM IMEDIATO
8. Protocolo de anafilaxia completo

Investigação:
9. Identificar e EVITAR desencadeante
10. Diário alimentar + medicamentoso
11. IgE específicas / prick test (ambulatorial)
12. Se recorrente (>6 semanas): investigar urticária crônica (anti-FcεRI, anti-IgE, autoimune)`,
    guideline: "ASBAI / WAO / EAACI",
  },
  {
    id: "rx-hernia-inguinal-encarc-diag",
    title: "Hérnia Inguinal Encarcerada",
    type: "Prescrição Hospitalar",
    prescription: `Tentativa de redução manual (Taxis):
1. Sedação: Midazolam 2-5mg EV + Fentanil 50mcg EV
2. Trendelenburg (pernas elevadas)
3. Compressas geladas no tumor herniário (reduzir edema)
4. Compressão suave e contínua por 10-15 min
5. Se reduzir: internar + cirurgia eletiva precoce (24-48h)

Se NÃO reduzir ou sinais de estrangulamento:
6. Cirurgia de EMERGÊNCIA (hernioplastia + avaliar viabilidade intestinal)
7. Dieta zero
8. SF 0,9% — hidratação agressiva
9. SNG aberta se sinais de obstrução
10. Ceftriaxona 1g EV + Metronidazol 500mg EV (profilaxia/tratamento)
11. Dipirona 1g EV 6/6h + Tramadol 50mg EV 6/6h
12. Hemograma, gasometria, lactato (estrangulamento → isquemia)`,
    warnings: "Sinais de estrangulamento: dor contínua, febre, leucocitose, peritonismo, lactato alto. CIRURGIA IMEDIATA.",
    guideline: "CBCD / EHS / WSES",
  },
  {
    id: "rx-endoftalmite-diag",
    title: "Endoftalmite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `EMERGÊNCIA OFTALMOLÓGICA — risco de perda visual permanente

1. Coleta de humor vítreo + aquoso (ANTES do ATB intravítreo)
2. Injeção intravítrea IMEDIATA:
   Vancomicina 1mg/0,1mL + Ceftazidima 2,25mg/0,1mL
3. OU Vancomicina + Amicacina 0,4mg/0,1mL (alternativa)
4. Dexametasona intravítrea 0,4mg/0,1mL (controverso, pode associar)
5. Colírios fortificados:
   Vancomicina 25mg/mL 1 gota de hora em hora
   Ceftazidima 50mg/mL 1 gota de hora em hora (alternar)
6. Atropina 1% 1 gota 8/8h (cicloplégico — alívio dor + prevenir sinéquias)
7. ATB sistêmico: Vancomicina EV + Ceftazidima EV (penetração vítrea limitada)
8. Vitrectomia PARS PLANA se: acuidade visual ≤conta dedos
9. Avaliar causa: pós-cirúrgica, endógena (candidemia), trauma
10. Endoftalmite endógena: tratar foco primário (hemoculturas)`,
    warnings: "Cada HORA de atraso piora prognóstico visual. Injeção intravítrea é o tratamento PRINCIPAL.",
    guideline: "CBO / AAO / EVS (Endophthalmitis Vitrectomy Study)",
  },
  {
    id: "rx-sindrome-nefritica-diag",
    title: "Síndrome Nefrítica Aguda (GNDA)",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta hipossódica (2g Na/dia) + restrição hídrica
2. Furosemida 40-80mg EV 12/12h (edema, hipertensão, hipervolemia)
3. Anti-hipertensivo: Nifedipino 10mg VO SN se PA elevada
4. OU Nitroprussiato EV se encefalopatia hipertensiva
5. Restrição de K+ se hipercalemia
6. Penicilina Benzatina 1.200.000 UI IM (se GNPE — erradicar estreptococo)
7. NÃO usar corticoide (GNPE é autolimitada em 90%)
8. Exames: EAS (hematúria dismórfica, cilindros hemáticos), proteinúria 24h
9. Complemento C3 (baixo na GNPE — normaliza em 8 semanas)
10. ASLO, anti-DNAse B, hemograma, creatinina, eletrólitos
11. USG renal (rins aumentados, sem obstrução)
12. Biópsia renal SE: C3 não normaliza em 8 sem, proteinúria nefrótica, IRA progressiva
13. Diálise se: hipercalemia refratária, EAP, uremia sintomática`,
    guideline: "SBN / KDIGO / SBP",
  },
  {
    id: "rx-osteomielite-diag",
    title: "Osteomielite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Oxacilina 2g EV 4/4h (S. aureus provável)
2. OU Cefazolina 2g EV 8/8h
3. Se MRSA: Vancomicina 15-20mg/kg EV 12/12h
4. Dipirona 1g EV 6/6h se dor/febre
5. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
6. Imobilização do membro afetado
7. Hemograma, PCR, VHS, hemocultura 2 pares
8. RX local + RNM (padrão-ouro)
9. Cultura óssea (biópsia se possível)
10. Avaliar desbridamento cirúrgico se abscesso
11. Tempo total ATB: 4-6 semanas (guiado por cultura)`,
    guideline: "IDSA / SBI",
  },
  {
    id: "rx-artrite-septica-diag",
    title: "Artrite Séptica",
    type: "Prescrição Hospitalar",
    prescription: `1. Oxacilina 2g EV 4/4h (empírico — S. aureus)
2. OU Vancomicina 15-20mg/kg EV 12/12h se risco MRSA
3. Artrocentese diagnóstica e terapêutica URGENTE
4. Análise líquido sinovial: celularidade, Gram, cultura
5. Hemocultura 2 pares
6. Hemograma, PCR, VHS, ácido úrico
7. Dipirona 1g EV 6/6h
8. Imobilização articular
9. Avaliação Ortopedia para drenagem/lavagem cirúrgica
10. ATB guiado por cultura — duração 2-4 semanas`,
    warnings: "Artrite séptica é emergência ortopédica — drenagem precoce reduz sequelas. Gonococo: considerar Ceftriaxona 1g EV/dia.",
    guideline: "IDSA / SBR",
  },
  {
    id: "rx-abscesso-periamigdaliano-diag",
    title: "Abscesso Periamigdaliano",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Amoxicilina-Clavulanato 1g EV 8/8h OU Clindamicina 600mg EV 8/8h
2. Dipirona 1g EV 6/6h
3. Dexametasona 8mg EV dose única
4. Punção aspirativa ou drenagem pelo ORL
5. Hidratação EV se disfagia intensa
6. Ondansetrona 4mg EV se náusea
7. Dieta líquida/pastosa conforme tolerância
8. Hemograma, PCR
9. Se abscesso >3cm ou recorrente: amigdalectomia a quente ou diferida`,
    guideline: "ABORL / AAO-HNS",
  },
  {
    id: "rx-empiema-pleural-diag",
    title: "Empiema Pleural",
    type: "Prescrição Hospitalar",
    prescription: `1. Drenagem torácica em selo d'água (OBRIGATÓRIA)
2. Ceftriaxona 2g EV 1x/dia + Clindamicina 600mg EV 8/8h (empírico)
3. OU Piperacilina-Tazobactam 4,5g EV 6/6h (se nosocomial)
4. Análise líquido pleural: pH, DHL, proteínas, Gram, cultura, celularidade
5. Dipirona 1g EV 6/6h
6. Enoxaparina 40mg SC 1x/dia
7. Fisioterapia respiratória precoce
8. TC tórax com contraste
9. Se loculado: considerar fibrinolítico intrapleural (Alteplase + DNAse)
10. Avaliação Cirurgia Torácica se não resolve em 48-72h`,
    guideline: "BTS / SBPT / IDSA",
  },
  {
    id: "rx-civd-diag",
    title: "CIVD — Coagulação Intravascular Disseminada",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Tratar CAUSA BASE (sepse, trauma, obstetrícia, neoplasia)
2. Se sangramento ativo:
   - Plasma fresco congelado 10-15mL/kg EV
   - Crioprecipitado 1U/5kg se Fibrinogênio <100
   - Concentrado de plaquetas se <50.000 com sangramento
3. Se trombose predominante:
   - Heparina não fracionada 10-15UI/kg/h (sem bolus)
4. Hemograma, TP/INR, TTPa, Fibrinogênio, D-dímero, Esfregaço (esquizócitos)
5. Monitorar coagulograma a cada 6-12h
6. Ácido tranexâmico 1g EV (se hiperfibrinólise)
7. Vitamina K 10mg EV lento (se INR prolongado)`,
    warnings: "CIVD NÃO é diagnóstico — é complicação. Sempre buscar e tratar causa base. Escore ISTH >5 = CIVD manifesta.",
    guideline: "ISTH / ABHH",
  },
  {
    id: "rx-chikungunya-diag",
    title: "Chikungunya",
    type: "Prescrição Ambulatorial / Hospitalar",
    prescription: `Fase aguda (febre + poliartralgia):
1. Paracetamol 750mg VO 6/6h (1ª escolha)
2. Dipirona 500mg VO 6/6h (alternativa)
3. Hidratação oral abundante 60mL/kg/dia
4. Repouso
5. NÃO usar AAS nem AINEs na fase aguda (risco de sangramento)

Fase subaguda/crônica (artralgia persistente >14 dias):
6. Prednisona 0,5mg/kg/dia VO por 5 dias (desmame)
7. OU Hidroxicloroquina 400mg/dia VO (se >3 meses)
8. AINEs podem ser usados NA FASE CRÔNICA
9. Fisioterapia`,
    notes: "Diferente da Dengue: artralgia intensa bilateral é a marca. Não tem risco de choque hemorrágico.",
    guideline: "MS / OPAS / SVS",
  },
  {
    id: "rx-febre-reumatica-diag",
    title: "Febre Reumática Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Penicilina Benzatina 1.200.000 UI IM dose única (erradicação do estreptococo)
2. AAS 80-100mg/kg/dia VO dividido em 4 doses (artrite)
3. OU Naproxeno 15mg/kg/dia (alternativa ao AAS)
4. Se cardite moderada/grave: Prednisona 1-2mg/kg/dia VO (máx 80mg/dia)
5. Se coreia: Haloperidol 1mg VO 12/12h OU Ácido valproico
6. Repouso relativo até normalização de VHS/PCR
7. Ecocardiograma (avaliar valvopatia)
8. Hemograma, VHS, PCR, ASLO, cultura orofaringe
9. ECG (avaliar bloqueio PR)
10. Profilaxia secundária: Penicilina Benzatina 1.200.000 UI IM a cada 21 dias`,
    notes: "Profilaxia por 5 anos ou até 21 anos (sem cardite) / 10 anos ou até 25 anos (com cardite sem sequela) / Toda vida (com sequela valvar).",
    guideline: "SBC / AHA / Jones 2015",
  },
  {
    id: "rx-ptt-shu-diag",
    title: "PTT / SHU — Microangiopatia Trombótica",
    type: "Prescrição UTI",
    prescription: `PTT (Púrpura Trombocitopênica Trombótica):
1. Plasmaférese URGENTE (1-1,5 volemias/dia) — mortalidade sem tto >90%
2. Metilprednisolona 1g EV por 3 dias → Prednisona 1mg/kg/dia
3. NÃO transfundir plaquetas (piora trombose microvascular)
4. Rituximabe 375mg/m² semanal (se refratária)
5. ADAMTS13 + anticorpo anti-ADAMTS13

SHU típica (pós-diarréica / E. coli O157:H7):
6. Suporte: hidratação EV, controle de PA
7. NÃO usar antibióticos (aumenta liberação de toxina Shiga)
8. Diálise se IRA oligúrica
9. Transfusão de hemácias se Hb <7
10. Monitorar: esquizócitos, DHL, bilirrubina indireta, haptoglobina`,
    warnings: "NUNCA transfundir plaquetas na PTT — 'joga gasolina no incêndio'. Plasmaférese é tratamento de emergência.",
    guideline: "ABHH / ISTH / ASH",
  },
  {
    id: "rx-mediastinite-diag",
    title: "Mediastinite",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Piperacilina-Tazobactam 4,5g EV 6/6h + Vancomicina 15-20mg/kg EV 12/12h
2. OU Meropenem 1g EV 8/8h + Vancomicina (se pós-esternotomia)
3. Drenagem cirúrgica URGENTE (cervicotomia/toracotomia)
4. TC tórax/pescoço com contraste
5. Hemocultura + cultura de secreção
6. Hemograma, PCR, procalcitonina, lactato
7. SF 0,9% — ressuscitação volêmica agressiva
8. Noradrenalina se choque
9. Dipirona 1g EV 6/6h
10. IOT precoce se comprometimento de via aérea`,
    warnings: "Mortalidade 20-40%. Causa mais comum: perfuração esofágica (Boerhaave) ou pós-cirurgia cardíaca. Cirurgia NÃO pode esperar.",
    guideline: "SBC / ESTS / IDSA",
  },
  {
    id: "rx-sindrome-anticol-diag",
    title: "Síndrome Anticolinérgica",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. ABC — proteção de via aérea se rebaixamento
2. Fisostigmina 1-2mg EV lento em 5 min (antídoto — se disponível)
   - Repetir 1mg a cada 15-30 min se necessário
3. Diazepam 5-10mg EV se agitação/convulsão
4. SF 0,9% 1000mL EV — hidratação
5. Controle de temperatura: resfriamento externo se hipertermia
6. SVD se retenção urinária
7. Monitorização contínua (ECG — risco de arritmia)
8. Carvão ativado 1g/kg se ingestão <2h
9. NÃO usar Haloperidol (efeito anticolinérgico sinérgico)`,
    notes: "Mnemônico: 'quente como lebre, seco como osso, vermelho como beterraba, cego como morcego, louco como chapeleiro'. Causas: anti-histamínicos, tricíclicos, atropina, Atropa belladonna.",
    guideline: "AACT / ABRACIT",
  },
  {
    id: "rx-espondilodiscite-diag",
    title: "Espondilodiscite",
    type: "Prescrição Hospitalar",
    prescription: `1. Oxacilina 2g EV 4/4h (empírico — S. aureus)
2. OU Vancomicina 15-20mg/kg EV 12/12h se risco MRSA
3. Imobilização (colete/órtese)
4. Dipirona 1g EV 6/6h + Tramadol 100mg EV 8/8h
5. RNM de coluna (padrão-ouro)
6. Hemocultura 2 pares (positiva em 50-70%)
7. PCR, VHS (seguimento)
8. Biópsia guiada por TC se hemocultura negativa
9. ATB por 6-8 semanas (mínimo)
10. Avaliação Neurocirurgia se abscesso epidural / déficit neurológico`,
    guideline: "IDSA / SBCM",
  },
  {
    id: "rx-chagas-agudo-diag",
    title: "Doença de Chagas Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Benznidazol 5mg/kg/dia VO dividido em 2-3 doses por 60 dias
2. Hemograma semanal (risco de leucopenia)
3. Função hepática basal e quinzenal
4. Dipirona 500mg VO 6/6h se febre
5. Se miocardite: repouso absoluto, monitorização cardíaca
6. Furosemida 40mg VO se IC
7. Amiodarona se arritmia
8. Pesquisa direta (gota espessa, Strout) + sorologia
9. Ecocardiograma
10. Notificação compulsória IMEDIATA`,
    notes: "Forma aguda: febre, hepatoesplenomegalia, sinal de Romaña (edema palpebral). Transmissão: vetorial, oral (açaí contaminado), transfusional.",
    guideline: "MS / Consenso Brasileiro de Chagas 2015",
  },
  {
    id: "rx-zika-diag",
    title: "Zika Vírus",
    type: "Prescrição Ambulatorial",
    prescription: `1. Paracetamol 750mg VO 6/6h se febre/dor
2. Dipirona 500mg VO 6/6h (alternativa)
3. Loratadina 10mg VO 1x/dia (se prurido)
4. Hidratação oral abundante
5. Repouso
6. NÃO usar AAS nem AINEs (diagnóstico diferencial com Dengue)
7. Pesquisa Dengue/Chikungunya (diagnóstico diferencial)
8. Orientar sobre proteção contra mosquitos
9. Se gestante: acompanhamento USG mensal (microcefalia)
10. Notificação compulsória (gestantes e síndrome neurológica)`,
    warnings: "Gestantes: risco de microcefalia fetal. Orientar evitar gravidez por 6 meses após infecção (homem — Zika no sêmen).",
    guideline: "MS / OMS / SVS",
  },
  {
    id: "rx-pneumonia-aspirativa-diag",
    title: "Pneumonia Aspirativa",
    type: "Prescrição Hospitalar",
    prescription: `1. Clindamicina 600mg EV 8/8h + Ceftriaxona 2g EV 1x/dia
2. OU Amoxicilina-Clavulanato 1g EV 8/8h (monoterapia)
3. OU Piperacilina-Tazobactam 4,5g EV 6/6h (grave/nosocomial)
4. Dieta zero até avaliação fonoaudiológica
5. Cabeceira 30-45°
6. SF 0,9% 1000mL EV
7. Dipirona 1g EV 6/6h se febre
8. Enoxaparina 40mg SC 1x/dia
9. Aspiração de secreções se necessário
10. RX tórax (infiltrado em segmentos dependentes)
11. Hemograma, PCR, gasometria`,
    notes: "Segmentos mais acometidos: posterior do lobo superior D (deitado), segmento basal posterior do lobo inferior D (de pé). Sempre avaliar disfagia.",
    guideline: "SBP / IDSA / ATS",
  },
  {
    id: "rx-penfigo",
    title: "Pênfigo Vulgar / Bolhoso",
    type: "Prescrição Hospitalar",
    prescription: `1. Prednisona 1-2mg/kg/dia VO (ataque)
2. Azatioprina 2-3mg/kg/dia VO (poupador de corticoide)
3. OU Micofenolato mofetil 1g VO 12/12h (alternativa)
4. Cuidados com bolhas: curativo não aderente, SF 0,9% para limpeza
5. Sulfadiazina de prata 1% tópica em áreas erosadas extensas
6. Analgesia: Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h se dor intensa
7. Omeprazol 40mg VO 1x/dia (proteção gástrica pelo corticoide)
8. Dieta hiperproteica (perda proteica pelas lesões)
9. Hemograma, albumina, eletrólitos, glicemia (monitorar corticoide)
10. Biópsia de pele + IFD para confirmação diagnóstica`,
    notes: "Pênfigo vulgar: bolhas flácidas em mucosa oral → pele. Penfigoide bolhoso: bolhas tensas em pele (mais benigno). Nikolsky positivo no pênfigo vulgar.",
    warnings: "Imunossupressão prolongada: rastrear TB latente antes de iniciar. Monitorar glicemia e PA pelo corticoide.",
    guideline: "SBD / EADV",
  },
  {
    id: "rx-grande-queimado",
    title: "Grande Queimado — Manejo Completo",
    type: "Prescrição em CTQ / UTI",
    prescription: `1. ABCDE do trauma — avaliar via aérea (queimadura facial/inalação)
2. IOT precoce se: rouquidão, estridor, queimadura de face/pescoço, inalação
3. Reposição volêmica (Parkland): RL 4mL × peso × %SCQ
   - 50% nas primeiras 8h (contar a partir da queimadura), 50% nas 16h seguintes
4. Alvo diurese: 0,5-1 mL/kg/h (adulto), 1-2 mL/kg/h (criança)
5. SVD — débito urinário horário
6. Analgesia multimodal: Morfina 2-4mg EV titulada + Dipirona 1g EV 6/6h + Cetamina 0,2mg/kg EV (subdissociativa)
7. Profilaxia antitetânica (dT + SAT se necessário)
8. Curativo: Sulfadiazina de prata 1% tópico ou curativo biológico
9. Omeprazol 40mg EV 1x/dia (profilaxia úlcera de Curling se >20% SCQ)
10. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
11. Nutrição enteral precoce: dieta hiperproteica hipercalórica (Curreri: 25kcal/kg + 40kcal/%SCQ)
12. Ceftriaxona 1g EV 12/12h se sinais de infecção (NÃO usar ATB profilático)
13. Escarotomia se queimadura circunferencial com comprometimento vascular`,
    notes: "Classificação: Grande queimado = >20% SCQ adulto, >10% criança, >5% idoso, ou qualquer queimadura de via aérea, face, mãos, pés, períneo, articulações.",
    warnings: "NÃO usar gelo. NÃO estourar bolhas. NÃO usar ATB tópico com prata em face. Queimadura elétrica: ECG + CPK + monitorização 24h.",
    guideline: "SBQ / ABA / ISBI",
  },
  {
    id: "rx-dermatite-contato",
    title: "Dermatite de Contato Grave",
    type: "Prescrição no PS",
    prescription: `1. Prednisona 0,5-1mg/kg/dia VO por 7-14 dias (desmame gradual)
2. Hidroxizine 25mg VO 8/8h (prurido)
3. OU Dexclorfeniramina 2mg VO 8/8h
4. Compressas de permanganato de potássio 1:40.000 (se exsudato)
5. Corticoide tópico potente: Clobetasol 0,05% creme 2x/dia (corpo) por 7 dias
6. Hidratante emoliente após corticoide tópico
7. Se infecção secundária: Cefalexina 500mg VO 6/6h por 7 dias
8. Afastar agente causal`,
    notes: "Causa mais comum: níquel, cosméticos, látex, plantas. Patch test para identificação do alérgeno.",
    guideline: "SBD / EADV",
  },
  {
    id: "rx-priapismo",
    title: "Priapismo Isquêmico",
    type: "Prescrição de Emergência",
    prescription: `1. Analgesia: Morfina 2-4mg EV + Dipirona 1g EV
2. Aspiração de sangue do corpo cavernoso com agulha 16-18G (butterfly)
3. Injeção intracavernosa de Fenilefrina:
   - Diluir 1mg em 9mL SF (100mcg/mL)
   - Injetar 200-500mcg a cada 5-10 min (máx 1mg total)
4. Monitorar PA e FC durante injeção (risco de HAS/bradicardia)
5. Se falha após 1h: shunt cirúrgico (Winter/Al-Ghorab)
6. Gasometria do aspirado cavernoso: pO2 <30, pCO2 >60 = isquêmico
7. Hemograma + reticulócitos (afastar anemia falciforme)
8. Se falciforme: hidratação EV + O2 + transfusão simples/exsanguíneo`,
    notes: "Emergência urológica: >4h de ereção dolorosa → isquemia → fibrose → impotência. Priapismo de alto fluxo (pós-trauma): não é emergência, conduta expectante.",
    warnings: "NÃO usar adrenalina intracavernosa (necrose). Fenilefrina é o alfa-agonista de escolha. Monitorar PA.",
    guideline: "SBU / AUA / EAU",
  },
  {
    id: "rx-torcao-testicular",
    title: "Torção Testicular",
    type: "Prescrição de Emergência",
    prescription: `1. Analgesia: Cetoprofeno 100mg EV + Dipirona 1g EV
2. Tentativa de detorção manual: "abrir o livro" (rotação lateral-medial)
   - Se alívio da dor → sucesso, mas AINDA precisa de cirurgia
3. USG Doppler testicular (se disponível e sem atrasar cirurgia)
4. ENCAMINHAR PARA CIRURGIA DE EMERGÊNCIA
   - Exploração escrotal + orquidopexia bilateral
   - Janela: <6h = 90-100% salvamento; >12h = risco alto de perda
5. Jejum
6. Acesso venoso + SF 0,9% 500mL EV
7. Ondansetrona 4mg EV se náusea
8. Hemograma, coagulograma (pré-operatório)`,
    notes: "Pico bimodal: neonatos e adolescentes 12-18 anos. Sinal de Prehn negativo (elevação do testículo NÃO alivia dor). Reflexo cremastérico geralmente ausente.",
    warnings: "NÃO atrasar cirurgia por exames de imagem. Cada hora conta. Janela ideal <6h.",
    guideline: "SBU / AUA / EAU",
  },
  {
    id: "rx-retencao-urinaria",
    title: "Retenção Urinária Aguda",
    type: "Prescrição no PS",
    prescription: `1. Cateterismo vesical de alívio (sonda Foley 14-18Fr)
2. Esvaziar lentamente (máx 500mL por vez — risco de hematúria ex vacuo)
3. Se não conseguir sondar: sonda de Coudé ou cistostomia suprapúbica
4. Tamsulosina 0,4mg VO 1x/dia (relaxa colo vesical)
5. Finasterida 5mg VO 1x/dia (se HPB — efeito em semanas)
6. Dipirona 1g EV 6/6h se dor
7. USG de vias urinárias (avaliar volume residual, HPB, cálculos)
8. PSA, creatinina, EAS
9. Encaminhar para urologia se recorrente`,
    notes: "Causas comuns: HPB, medicamentos (anticolinérgicos, opioides, descongestionantes), cálculo, coágulo, estenose uretral.",
    warnings: "Esvaziar >500mL de uma vez pode causar hematúria ex vacuo e hipotensão vasovagal. Esvaziar de forma fracionada.",
    guideline: "SBU / EAU",
  },
  {
    id: "rx-celulite-orbitaria",
    title: "Celulite Orbitária",
    type: "Prescrição Hospitalar",
    prescription: `1. TC de órbitas e seios da face com contraste
2. Ceftriaxona 2g EV 12/12h + Metronidazol 500mg EV 8/8h
3. OU Ampicilina-Sulbactam 3g EV 6/6h
4. Dexametasona 0,15mg/kg EV 6/6h (reduzir edema)
5. Avaliação oftalmológica URGENTE (acuidade visual, motilidade, pupila)
6. Avaliação ORL (drenagem de sinusite se foco)
7. Dipirona 1g EV 6/6h
8. Hemograma, PCR, hemocultura
9. Internação obrigatória
10. Cirurgia se: abscesso subperiosteal, piora visual, não responde a ATB 48h`,
    notes: "Diferenciar de celulite pré-septal (pálpebra apenas, sem proptose). Celulite orbitária: proptose, dor à movimentação, déficit visual = EMERGÊNCIA.",
    warnings: "Risco de trombose de seio cavernoso, meningite, abscesso cerebral. NÃO atrasar TC e ATB EV.",
    guideline: "CBO / AAO / IDSA",
  },
  {
    id: "rx-migranca-com-aura-diag",
    title: "Migrânea com Aura",
    type: "Por Diagnóstico",
    prescription: `1. Sumatriptano 6mg SC dose única (se VO não tolerada)
  - Alternativa: Sumatriptano 50-100mg VO dose única
2. Metoclopramida 10mg EV (pré-tratamento antiemético)
3. Dipirona 1g EV se dor refratária
4. Dexametasona 10mg EV (prevenção recorrência 24-72h)
5. Diazepam 5mg VO se componente tensional
6. Manter em ambiente escuro e silencioso
7. Hidratação: SF 0,9% 500mL EV
8. NÃO usar triptanos se: aura prolongada >60min, aura hemiplégica, aura de tronco`,
    alternatives: "Naratriptano 2,5mg VO (ação mais longa), Ergotamina + Cafeína VO (não usar junto com triptanos), Cetorolaco 30mg EV",
    notes: "Aura típica: visual (escotomas, zigzag) 5-60min seguida de cefaleia. Se aura isolada sem cefaleia: investigar AIT.",
    warnings: "CONTRAINDICAÇÃO ABSOLUTA de triptanos: doença coronariana, AVC prévio, HAS não controlada, uso de IMAO.",
    guideline: "SBCe / IHS / AAN",
  },
  {
    id: "rx-corpo-estranho-esofago-diag",
    title: "Corpo Estranho em Esôfago",
    type: "Por Diagnóstico",
    prescription: `1. RX cervical + tórax AP e perfil (localizar CE)
2. Jejum absoluto
3. Acesso venoso periférico
4. Omeprazol 40mg EV
5. Metoclopramida 10mg EV
6. EDA de urgência se:
   - Bateria/pilha (EMERGÊNCIA <2h)
   - Objeto pontiagudo
   - Impactação >24h
   - Obstrução total (sialorreia)
7. Glucagon 1mg EV (pode relaxar esfíncter — impactação alimentar)
8. Monitorizar via aérea
9. TC cervicotorácica se suspeita de perfuração`,
    notes: "Moedas em esôfago proximal <24h em criança assintomática: pode aguardar 12-24h (progressão espontânea). Bateria tipo botão: EMERGÊNCIA — necrose em 2h.",
    warnings: "Perfuração esofágica: enfisema subcutâneo, febre, dor torácica. Mortalidade alta se não tratada.",
    guideline: "ASGE / SBG / ESGE",
  },
  {
    id: "rx-trombose-mesenterica-diag",
    title: "Trombose Mesentérica / Isquemia Mesentérica Aguda",
    type: "Por Diagnóstico",
    prescription: `1. Jejum absoluto + SNG aberta
2. Ressuscitação volêmica agressiva: SF 0,9% / RL
3. Analgesia: Morfina 2-4mg EV (não mascarar)
4. ATB de amplo espectro:
   - Piperacilina-Tazobactam 4,5g EV 8/8h OU
   - Meropenem 1g EV 8/8h + Metronidazol 500mg EV 8/8h
5. Heparina não fracionada: bolus 80UI/kg + 18UI/kg/h (se trombose venosa)
6. Angio-TC abdome URGENTE
7. Lactato seriado (marcador de isquemia)
8. Avaliação cirúrgica IMEDIATA
9. Cirurgia: exploração + ressecção de alças necróticas + second-look em 24-48h
10. SVD + débito urinário horário`,
    notes: "Dor abdominal desproporcional ao exame físico = sinal clássico. Alto risco: FA, aterosclerose, estados hipercoaguláveis.",
    warnings: "Mortalidade >60% se diagnóstico tardio. Lactato normal NÃO exclui. Acidose metabólica + dor abdominal intensa = pensar isquemia.",
    guideline: "ACS / SBC / ESVS",
  },
  {
    id: "rx-abscesso-perianal-diag",
    title: "Abscesso Perianal / Perirretal",
    type: "Por Diagnóstico",
    prescription: `1. Analgesia: Dipirona 1g EV + Tramadol 100mg EV se dor intensa
2. Incisão e drenagem IMEDIATA (não aguardar flutuação)
   - Anestesia local: Lidocaína 2% s/ vaso
   - Incisão cruciforme ou elíptica sobre ponto de maior flutuação
   - Curetagem da loja + lavagem com SF
3. Packing com gaze iodoformada
4. ATB se celulite extensa, imunossupressão ou sinais sistêmicos:
   - Amoxicilina-Clavulanato 875/125mg VO 12/12h 7-10 dias OU
   - Ciprofloxacino 500mg 12/12h + Metronidazol 400mg 8/8h
5. Banho de assento com água morna 3x/dia
6. Retorno em 48h para troca de curativo
7. Encaminhar ao Proctologista (risco de fístula: 30-50%)`,
    notes: "Abscesso isquiorretal/supraelevador: drenagem em CC sob anestesia. Pacientes com Crohn: abordagem conservadora possível.",
    warnings: "Imunossuprimido (DM, HIV, QT): risco de gangrena de Fournier. Vigilância rigorosa.",
    guideline: "SBCP / ASCRS",
  },
  {
    id: "rx-edema-agudo-angioedema-diag",
    title: "Angioedema / Edema de Quincke",
    type: "Por Diagnóstico",
    prescription: `1. AVALIAR VIA AÉREA — preparar material de IOT/cricotireoidostomia
2. Adrenalina 0,3-0,5mg IM (se estridor ou angioedema de via aérea)
3. Dexametasona 10mg EV
4. Difenidramina 50mg EV OU Prometazina 25mg IM
5. Ranitidina 50mg EV (bloqueio H2)
6. Se angioedema por IECA:
   - SUSPENDER IECA definitivamente
   - Icatibanto 30mg SC (se disponível)
   - Ácido tranexâmico 1g EV (alternativa)
7. Nebulização com Adrenalina 3-5mL se edema de laringe
8. Observação mínima 6-12h (risco de rebound)
9. Monitorização contínua
10. Se refratário: considerar IOT precoce`,
    alternatives: "Angioedema hereditário: Concentrado de C1-inibidor, Icatibanto, Plasma fresco congelado",
    notes: "Angioedema por IECA: pode ocorrer meses/anos após início. Trocar para BRA (risco cruzado <2%).",
    warnings: "Edema de língua/assoalho da boca progredindo: IOT IMEDIATA — intubação pode ser impossível em minutos.",
    guideline: "WAO / ASBAI / ACAAI",
  },
  {
    id: "rx-parada-atrioventricular-diag",
    title: "Bloqueio Atrioventricular (BAV) Avançado",
    type: "Por Diagnóstico",
    prescription: `1. Monitor cardíaco contínuo
2. Atropina 0,5mg EV a cada 3-5min (máx 3mg) — para BAV 2° Mobitz I ou BAV nodal
3. Se não responde a atropina:
   - Adrenalina 2-10mcg/min EV em BIC OU
   - Dopamina 5-20mcg/kg/min EV em BIC
4. Marcapasso transcutâneo (pads já posicionados)
   - Frequência: 60-80bpm
   - Saída: iniciar 20mA, aumentar até captura
5. Isoproterenol 2-10mcg/min (se disponível)
6. ECG de 12 derivações seriado
7. Eletrólitos (K+, Ca++, Mg++)
8. Ecocardiograma
9. Marcapasso transvenoso se:
   - BAV 2° Mobitz II
   - BAVT
   - Instabilidade hemodinâmica
10. Avaliação Cardiologia/Eletrofisiologia URGENTE`,
    notes: "BAV 1°: geralmente benigno. BAV 2° Mobitz I: QRS estreito, geralmente nodal. BAV 2° Mobitz II: QRS largo, infranodal = risco de BAVT.",
    warnings: "Atropina NÃO funciona em bloqueio infranodal (Mobitz II, BAVT com QRS largo). Ir direto para marcapasso.",
    guideline: "AHA / SBC / ESC",
  },
  {
    id: "rx-hemorragia-subaracnoidea-diag",
    title: "Hemorragia Subaracnóidea (HSA)",
    type: "Por Diagnóstico",
    prescription: `1. ABC — proteger via aérea se rebaixamento
2. PA sistólica <160mmHg (Nitroprussiato ou Labetalol EV)
3. Nimodipino 60mg VO 4/4h por 21 dias (prevenção vasoespasmo)
4. Analgesia: Paracetamol 1g EV 6/6h (evitar AINEs)
   - Morfina 2-4mg EV se dor intensa
5. Antiemético: Ondansetrona 4mg EV 8/8h
6. Fenitoína 20mg/kg EV (ataque) se convulsão OU
   Levetiracetam 1000mg EV 12/12h
7. Cabeceira elevada 30°
8. Repouso absoluto, ambiente escuro e silencioso
9. Laxante: Lactulose 15mL VO 12/12h (evitar Valsalva)
10. TC crânio sem contraste URGENTE
11. Se TC normal + alta suspeita: punção lombar (xantocromia)
12. Angio-TC ou arteriografia cerebral
13. Avaliação Neurocirurgia IMEDIATA
14. Escala de Hunt-Hess e Fisher`,
    notes: "Cefaleia 'a pior da vida', início súbito, thunderclap headache. TC sensibilidade >95% nas primeiras 6h.",
    warnings: "NÃO usar AAS, Heparina ou anticoagulantes. Vasoespasmo pico: dias 4-14. Ressangramento precoce: mortalidade >70%.",
    guideline: "AHA / SBC / ABN / Neurocritical Care Society",
  },
  {
    id: "rx-herpes-simples-encefalite-diag",
    title: "Encefalite Herpética",
    type: "Por Diagnóstico",
    prescription: `1. Aciclovir 10mg/kg EV 8/8h por 14-21 dias
   - Diluir em 100mL SF, infundir em 1h
   - Hidratação vigorosa (nefrotoxicidade)
2. Anticonvulsivante profilático:
   - Fenitoína 20mg/kg EV (ataque) + 100mg 8/8h OU
   - Levetiracetam 500mg EV 12/12h
3. Dexametasona 0,15mg/kg EV 6/6h (controverso — considerar)
4. Controle de temperatura: Dipirona 1g EV 6/6h
5. Punção lombar (PCR para HSV no líquor)
6. RNM crânio (lesões temporais mediais = patognomônico)
7. EEG (PLEDs — descargas lateralizadas)
8. Monitorização em UTI
9. Balanço hídrico rigoroso
10. Ajuste renal do Aciclovir (ClCr)`,
    notes: "Iniciar Aciclovir EMPÍRICO — não aguardar resultado do PCR. Atraso >48h piora prognóstico drasticamente.",
    warnings: "Mortalidade sem tratamento: 70%. Com tratamento precoce: <20%. Sequelas cognitivas frequentes.",
    guideline: "IDSA / SBI / ABN",
  },
  {
    id: "rx-crise-miastenia-diag",
    title: "Crise Miastênica",
    type: "Por Diagnóstico",
    prescription: `1. IOT se capacidade vital <15-20mL/kg ou FR >30
2. SUSPENDER anticolinesterásicos (Piridostigmina) durante crise
3. Imunoglobulina EV 0,4g/kg/dia por 5 dias (2g/kg total) OU
4. Plasmaférese 5 sessões em dias alternados
5. Metilprednisolona 1g EV/dia por 3-5 dias (após estabilização)
6. ATB se infecção desencadeante (evitar aminoglicosídeos, macrolídeos, fluoroquinolonas)
7. VNI se fadiga respiratória sem indicação imediata de IOT
8. Gasometria arterial seriada
9. Capacidade vital forçada 4/4h
10. Monitorização em UTI
11. Após estabilização: reintroduzir Piridostigmina em doses baixas`,
    notes: "Triggers: infecção, cirurgia, estresse, medicamentos (aminoglicosídeos, beta-bloqueadores, magnésio).",
    warnings: "Crise colinérgica vs miastênica: dose de Edrofônio 2mg EV (teste). Se piora = colinérgica. NÃO confundir.",
    guideline: "ABN / AAN / Myasthenia Gravis Foundation",
  },
  {
    id: "rx-cetoacidose-euglicemica-diag",
    title: "Cetoacidose Euglicêmica (por iSGLT2)",
    type: "Por Diagnóstico",
    prescription: `1. SUSPENDER iSGLT2 (Dapagliflozina, Empagliflozina, Canagliflozina)
2. Insulina Regular EV em BIC: 0,1UI/kg/h
3. SG 5% + SF 0,9% concomitante (glicemia pode ser <250)
4. Reposição de K+:
   - K+ >5,2: não repor, checar 2/2h
   - K+ 3,3-5,2: 20-40mEq/L no soro
   - K+ <3,3: repor antes da insulina
5. Bicarbonato de sódio se pH <6,9:
   - NaHCO3 8,4% 100mL em 400mL AD EV em 2h
6. Gasometria arterial 2/2h
7. Eletrólitos 2/2h (K+, Na+, Cl-)
8. Beta-hidroxibutirato sérico (se disponível)
9. Resolução: pH >7,3, HCO3 >18, AG <12
10. Hidratação vigorosa: SF 0,9% 1L na 1ª hora`,
    notes: "Glicemia pode ser normal (<250). Chave: cetose + acidose metabólica AG elevado em uso de iSGLT2. Comum em pós-operatório, jejum, desidratação.",
    warnings: "NÃO descartar CAD por glicemia normal. Usar cetonemia (beta-OHB) para diagnóstico e monitorização.",
    guideline: "ADA / SBD / Endocrine Society",
  },
];

