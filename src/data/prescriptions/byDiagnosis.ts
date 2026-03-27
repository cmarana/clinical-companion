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
  {
    id: "rx-fratura-femur-proximal-diag",
    title: "Fratura de Fêmur Proximal (Quadril)",
    type: "Por Diagnóstico",
    prescription: `1. Imobilização: tração cutânea com 2-3kg (alívio de dor)
2. Analgesia multimodal:
   - Dipirona 1g EV 6/6h
   - Tramadol 100mg EV 8/8h OU Morfina 2-4mg EV titulada
   - Bloqueio do nervo femoral guiado por USG (se disponível)
3. Jejum (pré-operatório)
4. SF 0,9% 1500mL EV/24h
5. Profilaxia TVP: Enoxaparina 40mg SC 1x/dia (iniciar 12h pré-op ou pós-op)
6. RX pelve AP + quadril afetado (2 incidências)
7. Exames pré-operatórios: hemograma, coagulograma, função renal, ECG, RX tórax
8. Tipagem sanguínea + reserva de 2 CH
9. Avaliação Ortopedia URGENTE — cirurgia idealmente <48h
10. Avaliação clínica pré-operatória
11. Profilaxia de delirium: evitar BZD, orientação temporo-espacial`,
    notes: "Mortalidade em 1 ano: 20-30% em idosos. Cirurgia precoce (<48h) reduz mortalidade. Garden I-II: fixação. Garden III-IV: artroplastia.",
    warnings: "Idoso + fratura de fêmur: investigar causa da queda (síncope, AVC, hipotensão). Risco alto de TEP.",
    guideline: "SBOT / AAOS / NICE",
  },
  {
    id: "rx-fratura-exposta-manejo-diag",
    title: "Fratura Exposta — Manejo Completo (Gustilo-Anderson)",
    type: "Por Diagnóstico",
    prescription: `1. ABCDE do trauma (prioridade)
2. Irrigação copiosa com SF 0,9% (mínimo 3L para tipo I, 6L para tipo II, 9L+ para tipo III)
3. Curativo estéril úmido — NÃO reintroduzir osso exposto
4. Imobilização provisória (tala gessada)
5. Fotografia para documentação (evitar manipulações repetidas)
6. ATB PRECOCE (<3h):
   - Gustilo I: Cefazolina 2g EV + 1g 8/8h
   - Gustilo II: Cefazolina 2g EV + Gentamicina 5mg/kg/dia
   - Gustilo III: Cefazolina + Gentamicina + Metronidazol 500mg 8/8h (se solo/contaminação fecal)
7. Profilaxia antitetânica (dT + SAT se indicado)
8. Desbridamento cirúrgico em até 6h (ideal)
9. Fixador externo provisório (damage control ortho)
10. Analgesia: Morfina 4mg EV titulada`,
    notes: "Gustilo I: ferida <1cm, limpa. II: 1-10cm, sem lesão extensa. IIIA: cobertura adequada. IIIB: sem cobertura (retalho). IIIC: lesão vascular.",
    warnings: "Fratura exposta é EMERGÊNCIA cirúrgica. Cada hora de atraso aumenta risco de infecção. Compartimento: checar 5P's.",
    guideline: "SBOT / OTA / EAST",
  },
  {
    id: "rx-luxacao-quadril-diag",
    title: "Luxação de Quadril",
    type: "Por Diagnóstico",
    prescription: `1. Analgesia + sedação procedural:
   - Midazolam 3-5mg EV + Fentanil 50-100mcg EV OU
   - Propofol 1-2mg/kg EV (com anestesista)
2. Redução URGENTE (<6h — risco de necrose avascular da cabeça femoral):
   - Posterior (90%): manobra de Allis (flexão + tração axial)
   - Anterior: extensão + rotação interna + tração
3. RX pós-redução (congruência articular)
4. TC quadril pós-redução (fragmentos intra-articulares?)
5. Imobilização: repouso + descarga parcial por 4-6 semanas
6. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
7. Controle de dor: Paracetamol 1g 6/6h + Tramadol SN
8. RNM em 6-8 semanas (avaliação de necrose avascular)
9. Acompanhamento Ortopedia`,
    notes: "Mecanismo: dashboard injury (joelho no painel). Posterior: membro encurtado + aduzido + rodado internamente.",
    warnings: "Redução >6h: risco de necrose avascular sobe de 5% para >50%. EMERGÊNCIA ORTOPÉDICA.",
    guideline: "SBOT / AAOS",
  },
  {
    id: "rx-fratura-coluna-diag",
    title: "Fratura de Coluna Vertebral (Estável/Instável)",
    type: "Por Diagnóstico",
    prescription: `1. Imobilização em bloco (colar cervical + prancha rígida)
2. NÃO retirar colar até exclusão de lesão (TC coluna completa)
3. Exame neurológico detalhado (ASIA/Frankel)
4. Se déficit neurológico agudo:
   - Metilprednisolona 30mg/kg EV em 15min + 5,4mg/kg/h por 23h (controverso, se <8h)
   - PA sistólica >90mmHg (perfusão medular)
5. TC coluna (cervical/torácica/lombar conforme mecanismo)
6. RNM se déficit neurológico ou TC suspeita
7. Analgesia: Morfina 2-4mg EV titulada
8. SVD (bexiga neurogênica)
9. SNG se íleo paralítico
10. Profilaxia TVP: Enoxaparina 40mg SC (iniciar 24-72h)
11. Avaliação Neurocirurgia/Ortopedia URGENTE
12. Estável (TLICS <4): tratamento conservador (colete)
13. Instável (TLICS ≥5): tratamento cirúrgico`,
    notes: "Classificação TLICS (toraco-lombar) e SLIC (cervical subaxial). Fratura de Jefferson (C1): instável se ligamento transverso roto.",
    warnings: "Choque neurogênico: hipotensão + bradicardia (diferente de choque hipovolêmico). Tratar com vasopressor.",
    guideline: "SBOT / AO Spine / ATLS",
  },
  {
    id: "rx-sindrome-compartimental-manejo-diag",
    title: "Síndrome Compartimental Aguda — Manejo",
    type: "Por Diagnóstico",
    prescription: `1. DIAGNÓSTICO CLÍNICO (6 P's):
   - Pain (dor desproporcional), Pressure, Paresthesia, Paralysis, Pallor, Pulselessness
   - DOR À EXTENSÃO PASSIVA DOS DEDOS = sinal mais precoce
2. Remover TODA imobilização (gesso, talas, curativos compressivos)
3. Membro no nível do coração (NÃO elevar)
4. Medição de pressão compartimental (Stryker):
   - >30mmHg OU delta P <30mmHg (PAD - Pcompartimento) = fasciotomia
5. FASCIOTOMIA DE URGÊNCIA (<6h do início)
6. Analgesia: Morfina EV (não mascarar com bloqueio regional)
7. Hidratação vigorosa (prevenção de IRA por rabdomiólise)
8. Monitorizar: CPK, mioglobina, K+, creatinina, diurese
9. Alcalinização urinária: NaHCO3 se CPK >5000
10. Manter ferida aberta pós-fasciotomia (fechamento 48-72h ou enxerto)`,
    warnings: "Atraso >6-8h: dano irreversível (contratura de Volkmann). NÃO aguardar perda de pulso para indicar fasciotomia — é sinal TARDIO.",
    guideline: "SBOT / AAOS / EAST",
  },
  {
    id: "rx-les-agudo-grave-diag",
    title: "Lúpus Eritematoso Sistêmico — Flare Grave",
    type: "Por Diagnóstico",
    prescription: `1. Pulsoterapia: Metilprednisolona 1g EV/dia por 3 dias
2. Após pulso: Prednisona 1mg/kg/dia VO (máx 60mg)
3. Hidroxicloroquina 400mg/dia VO (NUNCA suspender)
4. Se nefrite lúpica (classe III-IV):
   - Micofenolato 2-3g/dia VO OU
   - Ciclofosfamida EV (Euro-Lupus: 500mg quinzenal x 6)
5. Se SAF associada: anticoagulação plena (Warfarina INR 2-3)
6. Proteção gástrica: Omeprazol 20mg/dia
7. Cálcio 1000mg + Vitamina D 1000UI/dia
8. Monitorização: anti-dsDNA, C3/C4, creatinina, proteinúria
9. Hemograma seriado (anemia hemolítica, plaquetopenia)
10. Profilaxia de Pneumocystis se imunossupressão intensa: SMX-TMP 400/80mg/dia`,
    notes: "SLEDAI e BILAG para atividade de doença. Nefrite lúpica: biópsia renal obrigatória para classificação e tratamento.",
    warnings: "Ciclofosfamida: preservação de fertilidade (criopreservação). Corticoide crônico: osteoporose, DM, infecções.",
    guideline: "SBR / ACR / EULAR / KDIGO",
  },
  {
    id: "rx-vasculite-aguda-diag",
    title: "Vasculite Sistêmica — Apresentação Aguda no PS",
    type: "Por Diagnóstico",
    prescription: `1. Suspeitar se: púrpura palpável + acometimento multissistêmico
2. Exames iniciais:
   - Hemograma, VHS, PCR, creatinina, EAS
   - ANCA (c-ANCA/PR3, p-ANCA/MPO)
   - Complemento (C3, C4)
   - Crioglobulinas, hepatite B e C
   - RX tórax
3. Se hemorragia alveolar (hemoptise + infiltrado):
   - Pulsoterapia Metilprednisolona 1g/dia EV por 3 dias
   - Ciclofosfamida 15mg/kg EV (máx 1,2g) OU Rituximab 375mg/m²
   - Plasmaférese (PEXIVAS: se creatinina >5,7 ou hemorragia alveolar grave)
4. Se glomerulonefrite rapidamente progressiva:
   - Biópsia renal urgente (se possível)
   - Iniciar tratamento empírico se alta suspeita
5. Prednisona 1mg/kg/dia VO após pulso
6. Profilaxia: SMX-TMP, Omeprazol, Ca + Vit D`,
    notes: "Granulomatose com Poliangiíte (Wegener): ANCA-PR3+, seios paranasais + pulmão + rim. Poliangiíte Microscópica: ANCA-MPO+, rim + pulmão.",
    warnings: "Hemorragia alveolar difusa: mortalidade >25%. Tratar ANTES do resultado de ANCA.",
    guideline: "SBR / ACR / EULAR / BSR",
  },
  {
    id: "rx-artrite-reat-aguda-diag",
    title: "Artrite Reativa / Síndrome de Reiter",
    type: "Por Diagnóstico",
    prescription: `1. AINE: Indometacina 50mg VO 8/8h OU Naproxeno 500mg VO 12/12h
2. Corticoide intra-articular se monoartrite: Triancinolona 40mg
3. Se refratária (>3 meses):
   - Sulfassalazina 500mg VO, titular até 2-3g/dia
4. Se uretrite/cervicite: Azitromicina 1g VO dose única + Ceftriaxona 500mg IM
5. Colírio de corticoide se uveíte (avaliação Oftalmo)
6. Fisioterapia precoce
7. HLA-B27 (prognóstico)
8. Descartar artrite séptica: artrocentese se monoartrite aguda
9. Cultura/PCR de secreção uretral e fezes
10. Proteção gástrica: Omeprazol 20mg/dia`,
    notes: "Tríade clássica: artrite + uretrite + conjuntivite. Pós-infecção: Chlamydia (genital) ou Salmonella/Shigella/Campylobacter (enteral).",
    guideline: "SBR / ACR / ASAS",
  },
  {
    id: "rx-fratura-costela-diag",
    title: "Fratura de Costela / Tórax Instável (Flail Chest)",
    type: "Por Diagnóstico",
    prescription: `FRATURA SIMPLES (1-2 costelas):
1. Analgesia efetiva (PRIORIDADE — evitar hipoventilação):
   - Dipirona 1g EV/VO 6/6h + Tramadol 50-100mg 8/8h
   - Paracetamol 1g VO 6/6h (alternância)
2. Orientar fisioterapia respiratória (espirometria de incentivo)
3. NÃO enfaixar tórax (restrição ventilatória)
4. RX tórax (hemotórax, pneumotórax associado?)

TÓRAX INSTÁVEL (≥3 costelas fraturadas em 2 pontos):
5. IOT + Ventilação mecânica se insuficiência respiratória
6. Analgesia peridural torácica (GOLD STANDARD)
7. Bloqueio intercostal OU Bloqueio do plano eretor (ESP block)
8. Morfina 2-4mg EV titulada
9. TC tórax (contusão pulmonar associada)
10. Fixação cirúrgica (SSRO): indicações crescentes
11. Fisioterapia intensiva + mobilização precoce
12. Monitorizar SpO2, gasometria`,
    notes: "Fratura de 1ª-2ª costela: trauma de alta energia — excluir lesão de grandes vasos (angio-TC). Idoso: mortalidade aumenta 19% por cada costela fraturada.",
    guideline: "SBOT / SBCT / EAST / ATLS",
  },
  {
    id: "rx-epicondilite-tendinopatia-diag",
    title: "Epicondilite / Tendinopatia Aguda",
    type: "Por Diagnóstico",
    prescription: `1. Repouso relativo + gelo local 20min 3-4x/dia (fase aguda)
2. AINE tópico: Diclofenaco gel 1% 3x/dia por 14 dias
3. AINE oral se dor moderada: Naproxeno 500mg VO 12/12h por 7-10 dias
4. Imobilização: cotoveleira com coxim ou tala (repouso funcional)
5. Infiltração local (se refratária >6 semanas):
   - Triancinolona 20mg + Lidocaína 2% 2mL peritendinosa
   - Máx 3 infiltrações com intervalo ≥6 semanas
6. Fisioterapia: exercícios excêntricos (protocolo Alfredson)
7. Orientar ergonomia no trabalho
8. Se refratária >6 meses: considerar PRP, ondas de choque, cirurgia
9. RX se suspeita de calcificação (tendinopatia calcárea)`,
    notes: "Epicondilite lateral (tennis elbow): extensores do punho. Medial (golfer elbow): flexores. Tratamento conservador resolve 85-90%.",
    guideline: "SBOT / AAOS / EULAR",
  },
  {
    id: "rx-fascite-plantar-diag",
    title: "Fascite Plantar",
    type: "Por Diagnóstico",
    prescription: `1. Gelo local: garrafa congelada sob o pé 15-20min 2-3x/dia
2. AINE: Ibuprofeno 600mg VO 8/8h por 7-10 dias
3. Palmilha com suporte de arco plantar
4. Calcanheira de silicone
5. Alongamento: fáscia plantar + panturrilha 3x/dia (30s x 5 repetições)
6. Fisioterapia: terapia manual + ondas de choque (se disponível)
7. Se refratária (>6 semanas):
   - Infiltração com corticoide: Triancinolona 20mg + Lidocaína 1% 2mL
   - USG-guiada (reduz risco de ruptura)
8. Órtese noturna (Night splint) — manter tornozelo em 90°
9. Perda de peso se obesidade
10. Evitar calçados planos e sem suporte`,
    notes: "Dor matinal no primeiro passo é patognomônica. RX: esporão de calcâneo é achado incidental (não é a causa da dor).",
    guideline: "SBOT / AOFAS / AAOS",
  },
  {
    id: "rx-vasculite-iga-purpura-diag",
    title: "Púrpura de Henoch-Schönlein / Vasculite por IgA",
    type: "Por Diagnóstico",
    prescription: `1. Repouso relativo (melhora edema e púrpura)
2. Analgesia: Paracetamol 10-15mg/kg/dose 6/6h (evitar AINEs se nefrite)
3. Hidratação oral adequada
4. Monitorização renal: EAS + creatinina semanal por 6 meses
5. Se artrite intensa: Naproxeno 10mg/kg/dia VO 12/12h
6. Se dor abdominal intensa / vasculite intestinal:
   - Prednisona 1-2mg/kg/dia VO (máx 60mg) por 1-2 semanas
7. Se nefrite (proteinúria nefrótica ou GN rapidamente progressiva):
   - Pulsoterapia com Metilprednisolona
   - Encaminhar Nefrologia pediátrica
8. PA diária (HAS por nefrite)
9. Alta se: sem dor abdominal, EAS normal, função renal preservada
10. Acompanhamento: EAS mensal por 6 meses`,
    notes: "Tétrade clássica: púrpura palpável em MMII, artralgia, dor abdominal, nefrite. Maioria é autolimitada (2-6 semanas). Pico: 3-10 anos.",
    warnings: "Nefrite em 30-50% dos casos. Proteinúria persistente >3 meses: biópsia renal. Risco de intussuscepção.",
    guideline: "SBP / SBR / ACR / EULAR",
  },
  {
    id: "rx-polimialgia-reumatica-diag",
    title: "Polimialgia Reumática / Arterite de Células Gigantes",
    type: "Por Diagnóstico",
    prescription: `POLIMIALGIA REUMÁTICA:
1. Prednisona 15-20mg/dia VO (resposta dramática em 24-72h)
2. Redução gradual: 10% a cada 2-4 semanas até 10mg
3. Abaixo de 10mg: reduzir 1mg/mês
4. Duração total: 12-24 meses
5. Ca 1000mg + Vit D 1000UI/dia
6. Densitometria óssea basal

ARTERITE DE CÉLULAS GIGANTES (urgência oftalmológica):
7. Prednisona 1mg/kg/dia (máx 60mg) OU
8. Metilprednisolona 1g/dia EV x 3 dias se perda visual
9. AAS 100mg/dia (proteção vascular)
10. USG de artérias temporais (sinal do halo)
11. Biópsia de artéria temporal (até 2 semanas do início do corticoide)
12. Tocilizumab 162mg SC semanal (poupador de corticoide)
13. VHS e PCR seriados para monitorar atividade`,
    notes: "VHS >40-50 + dor em cinturas + rigidez matinal >45min + idade >50 = fortemente sugestivo. Resposta dramática a corticoide confirma.",
    warnings: "Cefaleia temporal + claudicação mandibular + amaurose fugaz = EMERGÊNCIA (risco de cegueira irreversível). Iniciar corticoide ANTES da biópsia.",
    guideline: "SBR / ACR / EULAR / BSR",
  },
  {
    id: "rx-esclerodermia-crise-renal-diag",
    title: "Crise Renal Esclerodérmica",
    type: "Por Diagnóstico",
    prescription: `1. Captopril 6,25-12,5mg VO 8/8h (IECA é tratamento de PRIMEIRA LINHA)
   - Titular rapidamente: dobrar dose a cada 12-24h
   - Meta: PA normal em 72h
2. NÃO usar BRA (inferior ao IECA nesta condição)
3. Se HAS maligna: Nitroprussiato EV como ponte
4. Monitorizar: creatinina, K+, hemograma (anemia hemolítica microangiopática)
5. Pesquisar esquizócitos (AHMA) + plaquetopenia
6. Se anúria/IRA grave: hemodiálise (manter IECA mesmo em diálise)
7. Suspender corticoide se possível (fator precipitante)
8. Prognóstico renal: 50% recuperam função em 12-18 meses se IECA mantido`,
    notes: "Ocorre em esclerose sistêmica difusa, geralmente nos primeiros 4 anos. Corticoide em dose >15mg/dia é fator de risco.",
    warnings: "NÃO suspender IECA mesmo se creatinina subir. Recuperação renal tardia possível até 2 anos. Diálise NÃO contraindica IECA.",
    guideline: "SBR / ACR / EULAR / EUSTAR",
  },
  {
    id: "rx-espondilite-flare-diag",
    title: "Espondilite Anquilosante — Flare Agudo",
    type: "Por Diagnóstico",
    prescription: `1. AINE em dose plena (1ª linha):
   - Indometacina 50mg VO 8/8h OU
   - Naproxeno 500mg VO 12/12h OU
   - Etoricoxibe 90mg VO 1x/dia
2. Proteção gástrica: Omeprazol 20mg/dia
3. Fisioterapia: exercícios de extensão + natação
4. Se refratário a 2 AINEs por 4 semanas:
   - Anti-TNF: Adalimumab 40mg SC quinzenal OU
   - Secuquinumab 150mg SC (IL-17)
5. Corticoide intra-articular se artrite periférica (NÃO sistêmico)
6. Se uveíte anterior: Dexametasona colírio + midriático (Oftalmo)
7. HLA-B27 + RNM sacroilíacas (diagnóstico)
8. VHS/PCR para monitorar atividade (BASDAI)
9. Cessar tabagismo (acelera fusão vertebral)`,
    notes: "Dor lombar inflamatória: <40 anos, insidiosa, rigidez matinal >30min, melhora com exercício, piora com repouso.",
    guideline: "SBR / ASAS / ACR / EULAR",
  },
  {
    id: "rx-trombose-venosa-cerebral-diag",
    title: "Trombose Venosa Cerebral (TVC)",
    type: "Por Diagnóstico",
    prescription: `1. Anticoagulação plena IMEDIATA (mesmo com hemorragia associada):
   - Heparina não fracionada: bolus 80UI/kg + 18UI/kg/h (TTPa 2-2,5x) OU
   - Enoxaparina 1mg/kg SC 12/12h
2. Controle de cefaleia: Paracetamol 1g 6/6h + Metoclopramida 10mg 8/8h
   - Evitar opioides se possível (mascarar rebaixamento)
3. Anticonvulsivante se crise: Levetiracetam 500mg EV 12/12h
4. Se HIC: Acetazolamida 250mg VO 8/8h OU punção lombar evacuadora
5. TC com fase venosa OU AngioRM venosa (diagnóstico)
6. Investigar trombofilias após fase aguda
7. Transição para Warfarina (INR 2-3) por 6-12 meses
8. Se causa identificada e removível: 6 meses
9. Se idiopática ou trombofilia grave: considerar anticoagulação indefinida
10. Suspender ACO se em uso`,
    notes: "Cefaleia progressiva + papiledema + déficit focal + convulsão em mulher jovem + ACO = pensar TVC. RNM > TC para diagnóstico.",
    warnings: "Anticoagulação mesmo com hemorragia intracraniana associada — é o tratamento. NÃO é contraindicação.",
    guideline: "ABN / AHA / ESO / EANO",
  },
  {
    id: "rx-botulismo-diag",
    title: "Botulismo",
    type: "Por Diagnóstico",
    prescription: `1. Suporte ventilatório: IOT precoce se paralisia descendente progredindo
   - Capacidade vital forçada seriada (IOT se <15mL/kg)
2. Soro antibotulínico trivalente (SAB) — solicitar ao CIEVS/MS:
   - 1 ampola EV (teste de sensibilidade antes)
   - Administrar o mais precoce possível
3. NÃO usar aminoglicosídeos (agravam bloqueio neuromuscular)
4. SNG se disfagia
5. SVD se retenção urinária
6. Laxante: Manitol 20% VO ou enema (eliminar toxina do TGI)
7. Metronidazol 500mg EV 8/8h se botulismo de ferida
8. Notificação compulsória IMEDIATA
9. Investigar fonte alimentar (mel em lactentes, conservas caseiras)
10. Monitorização em UTI
11. ENMG: padrão incremental na estimulação repetitiva`,
    notes: "Paralisia descendente (diferente de Guillain-Barré que é ascendente). Pupilas fixas dilatadas, boca seca, constipação precedem paralisia.",
    warnings: "SAB disponível apenas via MS/SVS. Ligar CIEVS (0800-644-6645). Cada hora conta. Ventilação mecânica por semanas/meses.",
    guideline: "MS / SVS / CDC / IDSA",
  },
  {
    id: "rx-doenca-kawasaki-diag",
    title: "Doença de Kawasaki",
    type: "Por Diagnóstico",
    prescription: `1. Imunoglobulina EV (IVIG) 2g/kg dose única, infundir em 10-12h
   - Até o 10° dia de febre (idealmente dias 5-10)
2. AAS dose anti-inflamatória: 80-100mg/kg/dia VO 6/6h (até 48-72h afebril)
3. AAS dose antiplaquetária: 3-5mg/kg/dia VO (após afebril, por 6-8 semanas)
4. Se refratário (febre >36h após IVIG):
   - 2ª dose de IVIG 2g/kg OU
   - Metilprednisolona 30mg/kg/dia EV x 3 dias OU
   - Infliximab 5mg/kg EV dose única
5. Ecocardiograma na admissão + 2 semanas + 6-8 semanas
6. Hemograma, PCR, VHS, albumina, TGO/TGP
7. Se aneurisma coronariano gigante (>8mm): anticoagulação com Warfarina
8. Acompanhamento cardiológico prolongado`,
    notes: "Critérios: febre ≥5 dias + 4/5 (conjuntivite, alteração labial/oral, rash, linfadenopatia cervical, alteração de extremidades). Incompleta: febre + 2-3 critérios + laboratorial.",
    warnings: "Aneurisma coronariano: principal causa de cardiopatia adquirida na infância. IVIG antes do 10° dia reduz risco de 25% para <5%.",
    guideline: "SBP / AHA / JCS",
  },
  {
    id: "rx-sindrome-hemolitico-uremica-diag",
    title: "Síndrome Hemolítico-Urêmica (SHU) Típica",
    type: "Por Diagnóstico",
    prescription: `1. Hidratação EV cautelosa: SF 0,9% conforme volemia (evitar hiper-hidratação se oligúria)
2. Controle de PA: Amlodipino 0,1mg/kg/dose VO 12/12h (pediatria) OU Enalapril
3. Transfusão de hemácias se Hb <6-7g/dL (concentrado de hemácias lavadas)
4. NÃO transfundir plaquetas (exceto sangramento ativo ameaçador)
5. NÃO usar ATB (pode aumentar liberação de Shiga-toxina)
6. NÃO usar antimotílicos (Loperamida)
7. Diálise se: K+ >6,5 refratário, sobrecarga hídrica, uremia sintomática
8. Monitorização: hemograma + esquizócitos 12/12h, LDH, haptoglobina, creatinina, K+
9. Balanço hídrico rigoroso + peso diário
10. Investigar: coprocultura (E. coli O157:H7), toxina Shiga nas fezes
11. Se SHU atípica (sem diarreia): complemento, ADAMTS-13 → considerar Eculizumab`,
    notes: "Tríade: anemia hemolítica microangiopática + plaquetopenia + IRA. Precedida por diarreia sanguinolenta (E. coli produtora de Shiga-toxina).",
    warnings: "NÃO dar antibiótico na SHU típica. Plaquetas: apenas se sangramento ativo grave (piora microangiopatia). ADAMTS-13 <10% = PTT, não SHU.",
    guideline: "SBP / SBN / KDIGO / ASH",
  },
  {
    id: "rx-mordedura-ofidica-botrhrops-diag",
    title: "Acidente Botrópico (Jararaca) — Manejo Completo",
    type: "Por Diagnóstico",
    prescription: `CLASSIFICAÇÃO E SOROTERAPIA:
Leve: dor e edema local, sem coagulopatia → SAB 4 ampolas EV
Moderado: edema ascendente + coagulopatia leve → SAB 8 ampolas EV
Grave: edema extenso + hemorragia + choque + IRA → SAB 12 ampolas EV

SOROTERAPIA:
1. Soro antibotrópico (SAB) EV diluído em 250mL SF, infundir em 20-60min
2. Pré-medicar: Hidrocortisona 500mg EV + Prometazina 25mg IM (prevenção anafilaxia)
3. Adrenalina preparada beira-leito

TRATAMENTO DE SUPORTE:
4. Hidratação vigorosa: SF 0,9% 2L EV (proteção renal)
5. Analgesia: Dipirona 1g EV 6/6h (NÃO usar AINEs)
6. Elevação do membro afetado
7. Profilaxia antitetânica
8. Limpeza local + curativo
9. NÃO: torniquete, sucção, incisão, gelo
10. Monitorizar: TP, fibrinogênio, creatinina, diurese, hemograma
11. Fasciotomia se síndrome compartimental
12. ATB apenas se infecção secundária`,
    notes: "Botrópico (jararaca) é o acidente ofídico mais comum no Brasil (90%). Tempo de coagulação (TC) incoagulável = indicador de gravidade.",
    warnings: "Soro é eficaz apenas nas primeiras 6-12h. NÃO aplicar soro local no membro. Dose IGUAL para crianças e adultos.",
    guideline: "MS / SVS / Instituto Butantan / SBMT",
  },
  {
    id: "rx-fratura-pelve-diag",
    title: "Fratura de Pelve (Instável/Ring Disruption)",
    type: "Por Diagnóstico",
    prescription: `1. ABCDE do trauma — hemorragia retroperitoneal massiva
2. Cinta pélvica OU lençol amarrado (estabilização provisória)
3. Ressuscitação volêmica + protocolo de transfusão maciça (1:1:1)
4. Ácido tranexâmico 1g EV em 10min
5. RX pelve AP (Young-Burgess)
6. TC pelve + abdome com contraste
7. Se instável hemodinamicamente:
   - Fixação externa provisória OU
   - Tamponamento pré-peritoneal OU
   - Angioembolização (se blush arterial na TC)
8. SVD (se uretra íntegra — sangue no meato = uretrocistografia retrógrada ANTES)
9. Tipagem + reserva 6 CH
10. Avaliação Ortopedia + Cirurgia do Trauma`,
    warnings: "Fratura de pelve pode perder >2L de sangue no retroperitônio sem sinais externos. Mortalidade 15-30% se instável.",
    guideline: "ATLS / SBOT / ACS / EAST",
  },
  {
    id: "rx-fratura-tornozelo-diag",
    title: "Fratura de Tornozelo (Weber/AO)",
    type: "Por Diagnóstico",
    prescription: `1. Gelo + elevação + imobilização provisória (tala suropodálica)
2. RX tornozelo AP + perfil + mortise (incidência com 15° rotação interna)
3. Classificação Weber: A (infrasindesmótico), B (transsindesmótico), C (suprassindesmótico)
4. Analgesia: Dipirona 1g VO 6/6h + Ibuprofeno 600mg VO 8/8h
5. Enoxaparina 40mg SC 1x/dia (profilaxia TVP se imobilização)

CONSERVADOR (Weber A estável, sem desvio):
6. Bota gessada suropodálica 6 semanas (sem carga 3 sem + carga parcial 3 sem)

CIRÚRGICO (Weber B/C instável, desvio >2mm, incongruência articular):
7. RAFI (redução aberta e fixação interna)
8. RX de controle pós-operatório
9. Fisioterapia após retirada de imobilização
10. Retorno Ortopedia em 7 dias (revisão de ferida operatória)`,
    notes: "Critérios de Ottawa: dor + incapacidade de dar 4 passos + dor à palpação dos maléolos ou base do 5° meta = RX indicado.",
    guideline: "SBOT / AAOS / AO Foundation",
  },
  {
    id: "rx-lombalgia-aguda-diag",
    title: "Lombalgia Aguda Mecânica",
    type: "Por Diagnóstico",
    prescription: `1. Repouso relativo (NÃO repouso absoluto — piora prognóstico)
2. Analgesia escalonada:
   - Dipirona 1g VO 6/6h + Ibuprofeno 600mg VO 8/8h (7-10 dias)
   - Se refratário: Tramadol 50mg VO 8/8h (máx 5 dias)
3. Relaxante muscular: Ciclobenzaprina 5-10mg VO à noite (7-10 dias)
4. Compressas mornas locais
5. Red flags (investigar com imagem):
   - Febre, perda ponderal, trauma, déficit neurológico
   - Retenção urinária, anestesia em sela (síndrome de cauda equina)
   - Idade >50 com dor nova, história de câncer
6. Se red flags presentes: RNM lombar URGENTE
7. Se sem red flags: NÃO solicitar RX/RNM nas primeiras 4-6 semanas
8. Orientar atividade física progressiva
9. Encaminhar fisioterapia se >4 semanas
10. Retorno se piora ou novos sintomas neurológicos`,
    notes: "95% das lombalgias agudas são mecânicas/inespecíficas e resolvem em 4-6 semanas. Imagem precoce sem red flags = overdiagnosis.",
    guideline: "ACP / ACR / NICE / SBR",
  },
  {
    id: "rx-entorse-tornozelo-diag",
    title: "Entorse de Tornozelo (Graus I-III)",
    type: "Por Diagnóstico",
    prescription: `GRAU I (estiramento, sem instabilidade):
1. Protocolo PRICE: Proteção, Repouso relativo, Ice, Compressão, Elevação
2. Gelo 20min 4-6x/dia por 48-72h
3. Ibuprofeno 600mg VO 8/8h por 5 dias
4. Tornozeira elástica

GRAU II (ruptura parcial):
5. Tala suropodálica ou bota walker por 2-3 semanas
6. Carga parcial com muletas
7. Dipirona + Ibuprofeno (analgesia combinada)
8. Fisioterapia proprioceptiva após fase aguda

GRAU III (ruptura completa ligamentar):
9. Bota gessada ou walker 4-6 semanas
10. Sem carga por 2 semanas, depois carga progressiva
11. RX tornozelo (Critérios de Ottawa)
12. RNM se suspeita de lesão osteocondral
13. Avaliação Ortopedia (cirurgia se instabilidade crônica)

TODOS: Fisioterapia proprioceptiva é ESSENCIAL para prevenir recidiva`,
    notes: "Ligamento talofibular anterior é o mais acometido (inversão). Entorse de repetição sem reabilitação: instabilidade crônica.",
    guideline: "SBOT / AAOS / NICE",
  },
  {
    id: "rx-tendinite-ombro-diag",
    title: "Tendinite / Síndrome do Impacto do Ombro",
    type: "Por Diagnóstico",
    prescription: `1. Repouso relativo (evitar abdução acima de 90°)
2. Gelo local 20min 3-4x/dia
3. AINE: Naproxeno 500mg VO 12/12h por 7-14 dias + Omeprazol 20mg
4. AINE tópico: Diclofenaco gel 3x/dia
5. Fisioterapia: exercícios de Codman (pendulares) + fortalecimento do manguito rotador
6. Se refratário (>4-6 semanas):
   - Infiltração subacromial: Triancinolona 40mg + Lidocaína 2% 3mL
   - Máx 3 infiltrações (intervalo ≥6 semanas)
7. USG de ombro (tendinopatia, ruptura parcial/total, bursite)
8. RNM se suspeita de ruptura completa
9. Avaliação Ortopedia se ruptura ou falha terapêutica
10. Afastamento laboral se atividade de esforço repetitivo`,
    notes: "Teste de Neer e Hawkins positivos: sugestivo de impacto subacromial. Ruptura completa do supraespinhal: indicação cirúrgica relativa.",
    guideline: "SBOT / AAOS / EULAR",
  },
  {
    id: "rx-diag-endocardite-infecciosa",
    title: "Endocardite Infecciosa",
    type: "Diagnóstico",
    prescription: `1. Hemoculturas: 3 pares (sítios diferentes, antes do ATB)
2. Ecocardiograma transesofágico (ETE — superior ao ETT)
3. ATB empírico (válvula nativa):
   - Oxacilina 2g EV 4/4h + Gentamicina 3mg/kg/dia EV 1x/dia
4. ATB empírico (válvula protética):
   - Vancomicina 15-20mg/kg EV 12/12h + Gentamicina + Rifampicina 300mg VO 8/8h
5. Duração: 4-6 semanas (nativa), 6 semanas (protética)
6. Monitorizar: função renal, nível sérico de Vancomicina/Gentamicina
7. Avaliação Cirurgia Cardíaca se: IC refratária, vegetação >10mm, embolização recorrente
8. Hemoculturas de controle: 48-72h após início ATB`,
    notes: "Critérios de Duke modificados: 2 maiores OU 1 maior + 3 menores OU 5 menores. Staphylococcus aureus: forma aguda, destruição valvar rápida.",
    warnings: "Complicações: AVC embólico, abscesso esplênico, glomerulonefrite, aneurisma micótico. NÃO anticoagular na fase aguda (risco de AVC hemorrágico).",
    guideline: "SBC / AHA / ESC",
  },
  {
    id: "rx-diag-pancreatite-aguda",
    title: "Pancreatite Aguda",
    type: "Diagnóstico",
    prescription: `1. Jejum APENAS se náuseas/vômitos intensos (dieta precoce é superior)
2. Hidratação agressiva: Ringer Lactato 250-500mL/h nas primeiras 12-24h
3. Analgesia:
   - Dipirona 1g EV 6/6h + Tramadol 100mg EV 8/8h
   - Se refratário: Morfina 2-4mg EV 4/4h (NÃO piora pancreatite — mito)
4. Omeprazol 40mg EV 1x/dia
5. Ondansetrona 4mg EV 8/8h SN
6. Laboratório: Lipase/Amilase, PCR, Ca++, TG, Hb, Cr, gasometria, lactato
7. Critérios de gravidade: BISAP, Ranson, APACHE II, Marshall modificado
8. TC abdome com contraste: apenas após 72h (avaliar necrose)
9. Dieta oral precoce (VO hipogordurosa) em 24-48h se tolerado
10. ATB: APENAS se necrose infectada (Meropenem 1g EV 8/8h)`,
    notes: "Causa mais comum: biliar (solicitar USG). Segunda: alcoólica. Hipertrigliceridemia >1000 pode causar pancreatite (filtração/insulina).",
    warnings: "SIRS nas primeiras 48h: risco de falência orgânica precoce. Ressuscitação volêmica inadequada = principal causa de morte precoce.",
    guideline: "SBP / ACG / IAP/APA",
  },
  {
    id: "rx-diag-trombose-venosa-profunda",
    title: "Trombose Venosa Profunda (TVP)",
    type: "Diagnóstico",
    prescription: `1. Score de Wells para TVP (calcular antes de exame)
2. USG Doppler venoso de membros inferiores
3. D-dímero (se Wells baixo/intermediário — alto VPN)
4. Anticoagulação:
   OPÇÃO 1 (preferida): Rivaroxabana 15mg VO 12/12h por 21 dias → 20mg 1x/dia
   OPÇÃO 2: Enoxaparina 1mg/kg SC 12/12h + Warfarina (iniciar no D1, suspender HBPM quando INR 2-3)
   OPÇÃO 3: HNF EV (bolus 80UI/kg → 18UI/kg/h) se ClCr <30 ou instável
5. Duração: 3-6 meses (1° episódio provocado), indefinido (não provocado/recorrente)
6. Meias compressivas: 30-40mmHg (controverso, mas reduz síndrome pós-trombótica)
7. Deambulação precoce (repouso NÃO é necessário)
8. Rastrear trombofilia se: <50 anos, sítio incomum, recorrente, HF forte`,
    notes: "TVP proximal (ilíaco-femoral): maior risco de TEP. TVP distal isolada: pode observar com USG seriado vs anticoagular.",
    warnings: "Contraindicações absolutas à anticoagulação: hemorragia ativa, cirurgia craniana recente, AVCh. Considerar filtro de VCI nesses casos.",
    guideline: "SBC / CHEST / ESC / ISTH",
  },
  {
    id: "rx-diag-crise-hipertensiva-emergencia",
    title: "Emergência Hipertensiva (com LOA)",
    type: "Diagnóstico",
    prescription: `1. PA contínua (invasiva se disponível)
2. ECG + Troponina + BNP
3. TC crânio (se cefaleia, alteração neurológica)
4. Fundo de olho (papiledema = hipertensão maligna)
5. Função renal + urina rotina (proteinúria, hematúria)
6. Meta: reduzir 20-25% da PAM na 1ª hora
DROGAS EV:
   - Nitroprussiato 0,5-10mcg/kg/min (titular a cada 5min)
   - Nitroglicerina 5-200mcg/min (se SCA associada)
   - Labetalol 20mg EV bolus → 40-80mg a cada 10min (máx 300mg)
   - Esmolol: se dissecção de aorta (FC alvo <60)
   - Hidralazina 5-20mg EV (eclâmpsia — preferido)
7. NÃO usar Nifedipina sublingual (queda abrupta = AVC/IAM)
8. Transição para VO em 24-48h quando PA controlada`,
    notes: "Emergência = LOA (encefalopatia, EAP, dissecção, eclâmpsia, IRA). Urgência = PA elevada sem LOA (redução gradual VO).",
    warnings: "Redução rápida demais: AVC isquêmico, IAM, IRA. Na dissecção de aorta: PA alvo <120mmHg em 20min.",
    guideline: "SBC / AHA / ESC",
  },
  {
    id: "rx-diag-insuficiencia-hepatica-aguda",
    title: "Insuficiência Hepática Aguda (Hepatite Fulminante)",
    type: "Diagnóstico",
    prescription: `1. Transferir para UTI / Centro com Transplante Hepático
2. N-Acetilcisteína (NAC) EV — MESMO se não for paracetamol:
   - 150mg/kg em 1h → 50mg/kg em 4h → 100mg/kg em 16h
3. Lactulose 20-30mL VO/SNG 8/8h (encefalopatia)
4. Monitorizar: INR, fator V, amônia, glicemia (hipoglicemia!), lactato
5. Glicose 50% EV se hipoglicemia (infusão contínua G10%)
6. Vitamina K 10mg EV 1x/dia por 3 dias
7. Omeprazol 40mg EV 12/12h (profilaxia HDA)
8. PFC/Crioprecipitado: APENAS se sangramento ativo (NÃO corrigir INR profilaticamente)
9. Manitol 20% se HIC (edema cerebral)
10. Critérios de King's College para transplante
11. Sorologias: HAV IgM, HBsAg, Anti-HBc IgM, HCV, CMV, EBV, HSV
12. Paracetamol sérico, toxicológico completo`,
    notes: "Causa mais comum no BR: viral (hepatite A/B). No mundo: paracetamol. Fator V <20%: indicação de transplante.",
    warnings: "Edema cerebral é causa de morte. NÃO fazer PL. NÃO corrigir coagulopatia sem sangramento (mascara prognóstico).",
    guideline: "SBH / AASLD / EASL",
  },
  {
    id: "rx-diag-sindrome-nefrotica",
    title: "Síndrome Nefrótica",
    type: "Diagnóstico",
    prescription: `1. Proteinúria 24h (ou relação prot/creat urinária)
2. Albumina sérica (<2,5g/dL = grave)
3. Perfil lipídico (hipercolesterolemia)
4. Função renal + eletrólitos
5. Sorologias: HBV, HCV, HIV, VDRL
6. Complemento (C3, C4), FAN, Anti-DNA, Anti-PLA2R
7. USG renal
8. Biópsia renal (adultos — sempre, exceto DM clássica)
9. Tratamento geral:
   - Furosemida 40-80mg VO 1-2x/dia + Espironolactona 25mg
   - IECA/BRA (antiproteinúrico): Enalapril 10-20mg 12/12h
   - Restrição de sódio (<2g/dia)
   - Estatina (Atorvastatina 20-40mg)
10. Anticoagulação se albumina <2,0 ou evento trombótico
11. Vacinação anti-pneumocócica (risco de peritonite primária)`,
    notes: "Adulto: causa mais comum = nefropatia membranosa (Anti-PLA2R positivo em 70%). Criança: lesão mínima (responde a corticoide).",
    warnings: "Trombose de veia renal: dor lombar + hematúria + piora proteinúria. Doppler renal urgente.",
    guideline: "SBN / KDIGO / KDOQI",
  },
  {
    id: "rx-diag-guillain-barre",
    title: "Síndrome de Guillain-Barré",
    type: "Diagnóstico",
    prescription: `1. Monitorização em UTI (risco de insuficiência respiratória)
2. CVF (capacidade vital forçada) seriada a cada 4-6h
   - CVF <20mL/kg ou queda >30%: IOT eletiva
3. Imunoterapia (iniciar em <2 semanas do início):
   OPÇÃO 1: Imunoglobulina IV 0,4g/kg/dia por 5 dias (preferida)
   OPÇÃO 2: Plasmaférese 5 sessões em 7-14 dias
4. NÃO usar corticoide (ineficaz e pode piorar)
5. Profilaxia TVP: Enoxaparina 40mg SC 1x/dia
6. Líquor: dissociação albumino-citológica (proteína alta, células normais)
7. ENMG: padrão desmielinizante ou axonal
8. Dor neuropática: Gabapentina 300-600mg 8/8h
9. Fisioterapia motora e respiratória precoce
10. Monitorizar disautonomia: PA, FC, arritmias`,
    notes: "Fraqueza ascendente simétrica + arreflexia. Antecedente: Campylobacter, CMV, Zika, EBV. Variante Miller-Fisher: oftalmoplegia + ataxia + arreflexia.",
    warnings: "20-30% precisam de ventilação mecânica. Disautonomia pode causar arritmias fatais. NÃO dar Succinilcolina (hipercalemia).",
    guideline: "ABN / AAN / Cochrane / GBS-CIDP Foundation",
  },
  {
    id: "rx-diag-lupus-nefrite",
    title: "Nefrite Lúpica",
    type: "Diagnóstico",
    prescription: `1. Biópsia renal (classificação ISN/RPS — classes I a VI)
2. Laboratório: Cr, ureia, proteinúria 24h, complemento C3/C4, Anti-DNA, Anti-Sm
3. Urina rotina (hematúria dismórfica, cilindros celulares)
CLASSE III/IV (proliferativa):
4. Indução: Micofenolato mofetil 2-3g/dia VO OU Ciclofosfamida EV (Euro-Lupus: 500mg quinzenal x 6)
5. Prednisona 1mg/kg/dia (máx 60mg) → desmame progressivo
6. Pulsoterapia se grave: Metilprednisolona 1g EV x 3 dias
CLASSE V (membranosa):
7. Micofenolato mofetil 2-3g/dia + Prednisona
8. Manutenção: Micofenolato 1-2g/dia por ≥3 anos
9. Hidroxicloroquina 400mg/dia (TODOS os pacientes com LES)
10. IECA/BRA para controle de proteinúria
11. Controle PA rigoroso (<130/80)`,
    notes: "Classe IV é a mais comum e grave. Anti-DNA correlaciona com atividade renal. Complemento consumido (C3/C4 baixos) = atividade.",
    warnings: "Ciclofosfamida: preservação de fertilidade em mulheres jovens (análogos GnRH). Micofenolato é TERATOGÊNICO.",
    guideline: "SBR / EULAR/ERA-EDTA / ACR / KDIGO",
  },
  // === PSIQUIATRIA ===
  {
    id: "rx-surto-psicotico",
    title: "Surto Psicótico Agudo",
    type: "Prescrição de Emergência Psiquiátrica",
    prescription: `1. Haloperidol 5mg IM (pode repetir após 30 min, máx 15mg/dia)
2. OU Olanzapina 10mg IM (NÃO associar com benzodiazepínico IM)
3. Prometazina 50mg IM (associar ao Haloperidol — previne distonia)
4. Diazepam 10mg VO/IM se agitação intensa (se Olanzapina: NÃO usar benzo IM)
5. Monitorizar sinais vitais 30/30 min nas primeiras 2h
6. Contenção mecânica se risco iminente (última opção, documentar)
7. Ambiente calmo, baixa estimulação
8. Após estabilização: Risperidona 2mg VO 12/12h OU Olanzapina 10mg VO 1x/dia
9. Hemograma, função hepática, TSH, glicemia, toxicológico
10. Avaliação psiquiátrica formal`,
    notes: "Olanzapina IM + benzodiazepínico IM = risco de depressão respiratória grave. Haloperidol + Prometazina é a combinação clássica no PS brasileiro.",
    warnings: "NÃO usar Haloperidol EV (risco de QT longo/torsades). Monitorar distonia aguda (tratar com Biperideno 2mg IM).",
    guideline: "ABP / NICE / APA",
  },
  {
    id: "rx-snm",
    title: "Síndrome Neuroléptica Maligna (SNM)",
    type: "Prescrição de Emergência",
    prescription: `1. SUSPENDER IMEDIATAMENTE o antipsicótico causador
2. SF 0,9% 2000-3000mL EV nas primeiras 6h (hidratação vigorosa)
3. Resfriamento ativo: compressas geladas, colchão térmico, SF gelado EV
4. Dantrolene 1-2,5mg/kg EV a cada 6h (até 10mg/kg/dia) — relaxante muscular
5. OU Bromocriptina 2,5-5mg VO/SNG 8/8h (agonista dopaminérgico)
6. Diazepam 5-10mg EV se rigidez intensa
7. Monitorização em UTI: ECG contínuo, PA, temperatura, SpO2
8. CPK seriada (risco rabdomiólise)
9. Função renal + eletrólitos (risco IRA por mioglobinúria)
10. SVD — alvo diurese >1mL/kg/h (alcalinizar urina se CPK >5000)
11. Gasometria arterial
12. NÃO reiniciar antipsicótico por ≥2 semanas`,
    notes: "Tétrade clássica: hipertermia >40°C + rigidez muscular + alteração de consciência + disautonomia. CPK geralmente >1000 (pode chegar >100.000).",
    warnings: "Mortalidade de 10-20% se não tratada. NÃO confundir com síndrome serotoninérgica (clônus + hiperreflexia na SS vs. rigidez na SNM).",
    guideline: "ABP / APA / Lancet Neurology",
  },
  {
    id: "rx-delirium-tremens",
    title: "Delirium Tremens / Abstinência Alcoólica Grave",
    type: "Prescrição de Emergência",
    prescription: `1. Diazepam 10-20mg EV a cada 5-10 min até sedação leve (protocolo loading dose)
2. OU Diazepam 10mg EV 1/1h (protocolo baseado em sintomas — CIWA-Ar ≥20)
3. SF 0,9% 1000-2000mL EV (corrigir desidratação)
4. Tiamina 500mg EV 8/8h por 3 dias (ANTES de glicose — prevenir Wernicke)
5. Glicose 50% 40mL EV (se hipoglicemia — APÓS tiamina)
6. Sulfato de magnésio 2g EV em 30min (se hipomagnesemia)
7. Haloperidol 5mg IM se alucinações intensas (ASSOCIAR ao benzo, não substituir)
8. Monitorização contínua: PA, FC, temperatura, SpO2
9. Contenção mecânica se agitação extrema
10. Eletrólitos, função hepática, coagulograma, amilase`,
    notes: "CIWA-Ar ≥20 = abstinência grave. Delirium tremens aparece 48-96h após última ingesta. Mortalidade ~5% mesmo com tratamento.",
    warnings: "NÃO usar betabloqueador isolado. NÃO dar glicose sem tiamina (precipita Wernicke). Doses muito altas de benzo podem ser necessárias (>100mg diazepam/dia).",
    guideline: "ABP / ASAM / NICE",
  },
  {
    id: "rx-intoxicacao-benzo",
    title: "Intoxicação por Benzodiazepínicos",
    type: "Prescrição de Emergência",
    prescription: `1. ABCDE — proteção de via aérea (risco de rebaixamento)
2. Flumazenil 0,2mg EV em 15s → 0,3mg após 1 min → 0,5mg a cada 1 min (máx 3-5mg)
3. IOT se GCS ≤8 ou apneia
4. Monitorização: SpO2, PA, ECG, nível de consciência
5. Lavagem gástrica se <1h da ingestão (se via aérea protegida)
6. Carvão ativado 1g/kg (máx 50g) se <2h da ingestão
7. SF 0,9% 1000mL EV
8. Observação mínima 6-12h (meia-vida do benzo pode ser > flumazenil)`,
    notes: "Flumazenil tem meia-vida curta (~1h) — ressedação é comum. Pode ser necessário infusão contínua.",
    warnings: "Flumazenil CONTRAINDICADO em: uso crônico de benzodiazepínicos (risco de convulsão), coingestão com pró-convulsivantes, epilépticos.",
    guideline: "SBTox / AACT / EAPCCT",
  },
  {
    id: "rx-depressao-grave",
    title: "Depressão Grave com Risco Suicida",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Avaliação de risco suicida estruturada (SAD PERSONS / Columbia)
2. Internação psiquiátrica (voluntária ou involuntária conforme Lei 10.216)
3. Vigilância contínua 1:1 — retirar objetos de risco
4. Sertralina 50mg VO 1x/dia (iniciar — efeito em 2-4 semanas)
5. OU Escitalopram 10mg VO 1x/dia
6. Lorazepam 1-2mg VO 8/8h (ansiedade/insônia — curto prazo)
7. Quetiapina 25-50mg VO à noite (se insônia refratária)
8. Hemograma, TSH, eletrólitos, B12, ácido fólico
9. Notificação de tentativa de suicídio (obrigatória — portaria MS)
10. Contactar CAPS / rede de atenção psicossocial para seguimento`,
    notes: "ISRS podem aumentar ideação suicida nas primeiras 2-4 semanas (paradoxo). Monitorar de perto.",
    warnings: "NÃO dar alta sem plano de segurança e seguimento garantido. ISRS + IMAO = síndrome serotoninérgica.",
    guideline: "ABP / APA / MS / NICE",
  },
  {
    id: "rx-sindrome-serotoninergica",
    title: "Síndrome Serotoninérgica",
    type: "Prescrição de Emergência",
    prescription: `1. SUSPENDER TODOS os serotoninérgicos (ISRS, IMAO, tramadol, ondansetrona, triptanos)
2. SF 0,9% 1000-2000mL EV (hidratação)
3. Ciproeptadina 12mg VO/SNG (ataque) → 4mg VO 8/8h (antagonista 5-HT2A)
4. Diazepam 5-10mg EV se agitação/rigidez/convulsão
5. Resfriamento ativo se T >41°C
6. IOT + VM se rigidez intensa ou falência respiratória
7. Monitorização em UTI: PA, FC, temperatura, SpO2
8. CPK, função renal, eletrólitos, coagulograma
9. NÃO usar Dantrolene (diferente da SNM)`,
    notes: "Tríade: alteração mental + hiperatividade autonômica + hiperatividade neuromuscular (CLÔNUS + hiperreflexia — diferença da SNM).",
    warnings: "Hunter Criteria: clonus (espontâneo ou induzível) é o achado mais específico. Tremor + hiperreflexia + agitação em usuário de serotoninérgico = diagnóstico.",
    guideline: "ABP / UpToDate / Lancet",
  },
  // === ENDOCRINOLOGIA ===
  {
    id: "rx-insuf-adrenal",
    title: "Insuficiência Adrenal / Crise Adrenal Aguda",
    type: "Prescrição de Emergência Endócrina",
    prescription: `1. Hidrocortisona 100mg EV em bolus IMEDIATO
2. SF 0,9% 1000mL EV em bolus (hipotensão + desidratação)
3. SG 5% 500mL EV se hipoglicemia
4. Hidrocortisona 50mg EV 6/6h (manutenção nas primeiras 24h)
5. Fludrocortisona 0,1mg VO 1x/dia (se insuficiência primária — após tolerar VO)
6. Monitorização: PA, FC, glicemia capilar 4/4h, eletrólitos seriados
7. Na+ e K+ (esperar hiponatremia + hipercalemia na primária)
8. Cortisol sérico + ACTH (ANTES do tratamento se possível)
9. TSH, T4L (rastrear hipotireoidismo associado)
10. Investigar causa: hemorragia adrenal, suspensão de corticoide, infecção (Waterhouse-Friderichsen)`,
    notes: "Dose de estresse: duplicar a dose de corticoide em doença moderada, triplicar se grave. Cirurgia: Hidrocortisona 100mg EV no ato + 50mg 8/8h por 24-48h.",
    warnings: "NÃO usar vasopressor sem repor cortisol — choque refratário. Paciente em uso crônico de corticoide: NUNCA suspender abruptamente.",
    guideline: "SBEM / Endocrine Society / NICE",
  },
  {
    id: "rx-feocromocitoma",
    title: "Feocromocitoma — Crise Hipertensiva",
    type: "Prescrição de Emergência Endócrina",
    prescription: `1. Fentolamina 2-5mg EV em bolus (pode repetir a cada 5 min) — bloqueador alfa
2. OU Nitroprussiato 0,25-10mcg/kg/min EV em BIC (se fentolamina indisponível)
3. Propranolol 1mg EV lento (SOMENTE APÓS bloqueio alfa adequado)
4. Labetalol 20mg EV em 2 min (alternativa — alfa + beta bloqueio)
5. SF 0,9% 1000-2000mL EV (repor volemia — vasodilatação pós-alfa bloqueio)
6. Monitorização contínua: PA (idealmente invasiva), ECG, SpO2
7. Metanefrina e normetanefrina plasmáticas/urinárias
8. TC/RMN abdome (localização do tumor)
9. Pré-operatório: Doxazosina 2-8mg VO 12/12h por ≥14 dias
10. Dieta hipersódica + hidratação oral (expansão volêmica pré-cirúrgica)`,
    notes: "Regra dos 10: 10% bilateral, 10% maligno, 10% extra-adrenal, 10% pediátrico, 10% familiar. Investigar NEM 2, VHL, NF1.",
    warnings: "NUNCA dar betabloqueador ANTES do alfa-bloqueio (crise hipertensiva paradoxal por vasoconstrição sem oposição). Cuidado com metoclopramida, anestésicos, contraste — podem precipitar crise.",
    guideline: "SBEM / Endocrine Society / ESH",
  },
  {
    id: "rx-mixedema",
    title: "Coma Mixedematoso",
    type: "Prescrição de Emergência Endócrina",
    prescription: `1. Levotiroxina 200-500mcg EV (dose de ataque) → 50-100mcg EV 1x/dia
2. OU T3 (Liotironina) 10-20mcg EV 8/8h (se grave — ação mais rápida)
3. Hidrocortisona 100mg EV 8/8h (cobrir possível insuficiência adrenal associada)
4. Aquecimento passivo (cobertores) — NÃO usar aquecimento ativo externo (vasodilatação → choque)
5. SF 0,9% EV com cautela (risco de hiponatremia/ICC)
6. Glicose 50% se hipoglicemia
7. IOT + VM se rebaixamento de consciência
8. Monitorização em UTI
9. TSH, T4L, T3, cortisol, Na+, gasometria
10. Investigar fator precipitante: infecção, AVC, frio, sedativos`,
    notes: "Mortalidade 30-60% mesmo com tratamento. Hipotermia sem infecção é achado clássico. Hiponatremia dilucional é comum.",
    warnings: "NÃO aquecer ativamente (risco de vasodilatação periférica → colapso). Reposição de T4 em cardiopatas: iniciar com doses menores.",
    guideline: "SBEM / ATA / ETA",
  },
  {
    id: "rx-hipercalcemia",
    title: "Hipercalcemia Grave (Ca >14mg/dL)",
    type: "Prescrição de Emergência",
    prescription: `1. SF 0,9% 200-300mL/h EV (expansão volêmica — alvo 3-4L/dia)
2. Furosemida 20-40mg EV (SOMENTE após hidratação adequada — NÃO usar para "forçar calciúrese")
3. Ácido Zoledrônico 4mg EV em 15 min (efeito em 2-4 dias)
4. OU Pamidronato 60-90mg EV em 2-4h
5. Calcitonina 4UI/kg IM/SC 12/12h (efeito rápido em 4-6h, mas transitório)
6. Hidrocortisona 200mg EV 8/8h (se suspeita de granulomatose/linfoma/mieloma)
7. Denosumab 120mg SC (se refratária a bifosfonatos)
8. ECG (QT curto, ondas J de Osborn, BAV)
9. Ca, PTH, 25-OH vitamina D, fosfatase alcalina, PTHrP
10. Hemodiálise se Ca >18 ou refratária`,
    notes: "Principais causas: hiperparatireoidismo (ambulatorial) e malignidade (hospitalar). Ca corrigido = Ca total + 0,8 × (4 - albumina).",
    warnings: "Evitar tiazídicos (aumentam Ca). Imobilização piora hipercalcemia. Digitalicos: toxicidade potencializada pela hipercalcemia.",
    guideline: "SBEM / AACE / Endocrine Society",
  },
  {
    id: "rx-hipocalcemia",
    title: "Hipocalcemia Grave / Sintomática",
    type: "Prescrição de Emergência",
    prescription: `1. Gluconato de cálcio 10% — 10-20mL (1-2 ampolas) EV em 10-20 min (monitorização ECG)
2. Seguido de: Gluconato de cálcio 10% — 100mL (10 amp) em 1000mL SG5% a 50-100mL/h
3. Sulfato de magnésio 2g EV em 30 min (corrigir Mg — hipocalcemia não corrige sem Mg normal)
4. Calcitriol 0,5-1mcg VO 12/12h (início de ação em 1-3 dias)
5. Carbonato de cálcio 500mg VO 8/8h (manutenção oral)
6. ECG: monitorar QT longo → risco torsades de pointes
7. Ca iônico, Mg, fósforo, PTH, vitamina D, albumina
8. Se pós-tireoidectomia: manter Ca >8 e suplementar preventivamente`,
    notes: "Sinal de Chvostek (percussão facial → contração) e Trousseau (manguito → espasmo carpopedal) são clássicos. Ca iônico é mais fidedigno que Ca total.",
    warnings: "Cloreto de cálcio é mais irritante — preferir Gluconato (exceto em PCR). Infusão rápida de Ca → bradicardia/parada. Não misturar Ca com bicarbonato no mesmo acesso.",
    guideline: "SBEM / Endocrine Society / NICE",
  },
  {
    id: "rx-hipotireoidismo-subclinico",
    title: "Hipotireoidismo — Manejo Ambulatorial",
    type: "Prescrição Ambulatorial",
    prescription: `TSH >10 ou sintomático:
1. Levotiroxina 25-50mcg VO 1x/dia (jejum, 30min antes do café)
2. Idoso/cardiopata: iniciar com 12,5-25mcg
3. Meta TSH: 0,5-2,5 (jovens), 1-5 (idosos >70 anos)
4. Repetir TSH em 6-8 semanas e ajustar dose
5. Intervalo de 4h entre Levotiroxina e: Ca, Fe, IBP, antiácidos
6. Lipidograma, glicemia (rastrear associações)
7. Gestante: alvo TSH <2,5 no 1º trimestre`,
    notes: "Dose plena estimada: 1,6mcg/kg/dia. Hipotireoidismo subclínico (TSH 5-10, T4L normal): tratar se sintomático, anticorpo anti-TPO+, gestante, ou <65 anos.",
    guideline: "SBEM / ATA / ETA",
  },
  // === OFTALMOLOGIA ===
  {
    id: "rx-glaucoma-agudo",
    title: "Glaucoma Agudo de Ângulo Fechado",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Timolol 0,5% — 1 gota no olho afetado STAT + 12/12h
2. Brimonidina 0,2% — 1 gota 8/8h
3. Pilocarpina 2% — 1 gota a cada 15 min × 4 doses, depois 6/6h (APÓS 1h do início — pupila pode estar fixa inicialmente)
4. Acetazolamida 500mg VO STAT → 250mg VO 6/6h
5. Manitol 20% — 1-2g/kg EV em 45 min (se PIO refratária)
6. Prednisolona 1% colírio — 1 gota 1/1h (reduzir inflamação)
7. Ondansetrona 4mg EV se náusea/vômito
8. Analgesia: Dipirona 1g EV + Cetoprofeno 100mg EV
9. Decúbito dorsal (facilita fluxo do humor aquoso)
10. Encaminhar URGENTE para Oftalmologista — Iridotomia a laser`,
    notes: "PIO normal: 10-21 mmHg. Crise: PIO pode chegar a 60-80 mmHg. Clássico: dor ocular intensa + olho vermelho + pupila mediofixia + halos + visão borrada + náusea/vômito.",
    warnings: "NÃO dilatar pupila (piora o bloqueio). Pilocarpina imediata pode ser ineficaz (esfíncter isquêmico) — iniciar com hipotensores primeiro. Contra: atropina, anticolinérgicos, simpaticomiméticos midriáticos.",
    guideline: "CBO / AAO / EGS",
  },
  {
    id: "rx-descolamento-retina",
    title: "Descolamento de Retina",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Encaminhar URGENTE para Retinólogo/Oftalmologista de urgência
2. Repouso absoluto no leito
3. Oclusão bilateral (reduzir movimentação ocular)
4. Posicionamento: cabeceira elevada se descolamento superior / decúbito lateral se lateral
5. NÃO realizar esforço físico, Valsalva, tossir
6. Dipirona 1g EV 6/6h se dor
7. Ondansetrona 4mg EV se náusea
8. Mapeamento de retina + USG ocular (modo B)
9. Fundo de olho com oftalmoscópio indireto
10. Pré-operatório: hemograma, coagulograma, glicemia, ECG`,
    notes: "Clássico: fotopsias (flashes) → moscas volantes → cortina/sombra no campo visual. Sem dor geralmente. Fatores de risco: miopia alta, cirurgia de catarata prévia, trauma.",
    warnings: "É EMERGÊNCIA CIRÚRGICA se envolver mácula (descolamento regmatogênico com mácula on). Cada hora de atraso piora prognóstico visual. Cirurgia: vitrectomia ou introflexão escleral.",
    guideline: "CBO / AAO / EURETINA",
  },
  {
    id: "rx-queimadura-quimica-ocular",
    title: "Queimadura Química Ocular",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. IRRIGAÇÃO IMEDIATA com SF 0,9% ou água limpa — MÍNIMO 30 min (2-3L)
2. NÃO tentar neutralizar o agente
3. Everter pálpebras e remover partículas retidas
4. Verificar pH com fita (meta: pH 7,0-7,4) — repetir lavagem se pH alterado
5. Colírio anestésico (Proximetacaína 0,5%) para facilitar irrigação
6. Ciclopentolato 1% — 1 gota 8/8h (cicloplégico — alívio da dor)
7. Prednisolona 1% colírio — 1 gota 2/2h (primeiros 7 dias)
8. Moxifloxacino 0,5% colírio — 1 gota 6/6h (profilaxia infecção)
9. Vitamina C 500mg VO 6/6h (auxilia regeneração em álcalis)
10. Citrato de sódio 10% colírio — 1 gota 2/2h (quelante de Ca em álcalis)
11. Encaminhar Oftalmologista URGENTE — classificação de Roper-Hall`,
    notes: "Álcalis (NaOH, cal, amônia) são PIORES que ácidos — penetração profunda, liquefação. Ácido causa coagulação (barreira). Classificação Roper-Hall: I-II (bom prognóstico), III-IV (grave).",
    warnings: "NÃO atrasar irrigação para qualquer procedimento. Curativo oclusivo NÃO é recomendado. Corticoide tópico por >7-10 dias: risco de perfuração (inibição de colágeno).",
    guideline: "CBO / AAO / ISBI",
  },
  {
    id: "rx-celulite-orbitaria",
    title: "Celulite Orbitária",
    type: "Prescrição Hospitalar",
    prescription: `1. Internação hospitalar obrigatória
2. TC de órbitas e seios paranasais com contraste
3. Oxacilina 2g EV 4/4h + Ceftriaxona 2g EV 12/12h
4. OU Ampicilina-Sulbactam 3g EV 6/6h
5. Se alergia: Vancomicina 15-20mg/kg EV 12/12h + Metronidazol 500mg EV 8/8h
6. Dexametasona 0,3mg/kg EV 8/8h (se edema compressivo do nervo óptico)
7. Dipirona 1g EV 6/6h
8. Avaliação oftalmológica: acuidade visual, motilidade, pupila, FO, PIO
9. Avaliação ORL se sinusite associada
10. Se abscesso subperiosteal ou orbitário: drenagem cirúrgica de urgência`,
    notes: "Diferencial com celulite periorbitária (pré-septal): pré-septal NÃO tem proptose, dor à movimentação, limitação de MOE. TC é obrigatória para diferenciar.",
    warnings: "Complicações: abscesso cerebral, trombose de seio cavernoso, cegueira. Qualquer déficit visual = urgência cirúrgica.",
    guideline: "CBO / AAO / SBO",
  },
  // === ENDOCRINOLOGIA (adicionais) ===
  {
    id: "rx-cetoacidose-diabetica-completa",
    title: "Cetoacidose Diabética — Protocolo Completo",
    type: "Prescrição de Emergência Endócrina",
    prescription: `FASE 1 — Hidratação (1ª hora):
1. SF 0,9% 15-20mL/kg EV em 1h (~1000-1500mL)

FASE 2 — Insulina (após K+ ≥3,3):
2. Insulina Regular 0,1UI/kg EV bolus → 0,1UI/kg/h em BIC
3. OU Insulina Regular 0,14UI/kg/h em BIC (sem bolus)
4. Meta: reduzir glicemia 50-75mg/dL/h

FASE 3 — Potássio:
5. K+ <3,3: KCl 40mEq/h EV (NÃO iniciar insulina antes)
6. K+ 3,3-5,3: KCl 20-30mEq/L em cada litro de SF
7. K+ >5,3: NÃO repor, monitorar 2/2h

FASE 4 — Bicarbonato (controverso):
8. Somente se pH <6,9: NaHCO3 100mEq em 400mL em 2h

FASE 5 — Transição:
9. Quando glicemia <200: trocar SF por SG 5% + SF 0,45% + manter BIC
10. Quando gap fechado + pH >7,3 + BIC >15: iniciar insulina SC (sobrepor 2h com BIC)`,
    notes: "Critérios diagnósticos: glicemia >250 + pH <7,3 + BIC <18 + cetonemia/cetonúria + AG >12. Causa mais comum: má aderência à insulina > infecção.",
    warnings: "K+ <3,3 = NÃO dar insulina (risco de arritmia fatal). Edema cerebral: risco se correção muito rápida (especialmente em crianças).",
    guideline: "SBEM / ADA / ISPAD",
  },
  {
    id: "rx-crise-tireotoxica",
    title: "Crise Tireotóxica / Tempestade Tireoidiana",
    type: "Prescrição de Emergência Endócrina",
    prescription: `1. Propiltiouracil (PTU) 200mg VO/SNG 4/4h (bloqueia síntese + conversão T4→T3)
2. Solução de Lugol 10 gotas VO 8/8h (iniciar 1h APÓS PTU — bloqueia liberação)
3. Propranolol 40-80mg VO 6/6h (controle FC — alvo <100)
4. OU Esmolol 500mcg/kg EV bolus → 50-200mcg/kg/min (se grave/VO impossível)
5. Hidrocortisona 100mg EV 8/8h (bloqueia conversão T4→T3 + protege adrenal)
6. Paracetamol se febre (NÃO usar AAS — desloca T4 da TBG)
7. Resfriamento ativo se hipertermia
8. SF 0,9% + SG 5% EV (reposição hídrica — estado hipermetabólico)
9. Monitorização: ECG contínuo, PA, FC, temperatura, SpO2
10. TSH, T4L, T3, hemograma, função hepática, eletrólitos`,
    notes: "Score de Burch-Wartofsky ≥45 = altamente sugestivo. Precipitantes: infecção, cirurgia, contraste iodado, suspensão de antitireoidiano, pós-parto.",
    warnings: "Mortalidade 10-30% mesmo com tratamento. Iodo SEMPRE após antitireoidiano (senão fornece substrato para mais hormônio). AAS é CONTRAINDICADO.",
    guideline: "SBEM / ATA / ETA",
  },
  {
    id: "rx-hipoglicemia-grave",
    title: "Hipoglicemia Grave",
    type: "Prescrição de Emergência",
    prescription: `1. Glicose 50% — 40mL EV em bolus (20g de glicose)
2. Repetir glicemia em 15 min — se <70: repetir glicose 50% 20mL
3. Glucagon 1mg IM/SC (se sem acesso venoso)
4. Após recuperação: refeição com carboidrato complexo
5. SG 10% 500mL EV em BIC (se hipoglicemia recorrente — sulfonilureia, insulina de ação longa)
6. Glicemia capilar 1/1h por 4-6h após estabilização
7. Investigar causa: dose de insulina, sulfonilureia, jejum, insuficiência hepática, insuficiência adrenal, insulinoma
8. Se sulfonilureia: manter SG por ≥24-48h (meia-vida longa)
9. Octreotida 50mcg SC 8/8h (se hipoglicemia refratária por sulfonilureia)`,
    notes: "Tríade de Whipple: sintomas + glicemia <54 + melhora com glicose. Neuroglicopenia: confusão, convulsão, coma. Adrenérgicos: tremor, sudorese, taquicardia.",
    warnings: "NÃO usar SG 50% sem acesso venoso calibroso (necrose se extravasar). Glibenclamida em idoso/DRC: principal causa de hipoglicemia prolongada.",
    guideline: "SBEM / ADA / Endocrine Society",
  },
  // === ORTOPEDIA ===
  {
    id: "rx-sindrome-compartimental",
    title: "Síndrome Compartimental Aguda",
    type: "Ortopedia",
    prescription: `1. EMERGÊNCIA CIRÚRGICA — fasciotomia em até 6h
2. Analgesia: Morfina 5-10mg EV (não mascarar dor — guia diagnóstico)
3. Remover gesso/curativo circunferencial IMEDIATAMENTE
4. Membro em posição neutra (NÃO elevar — piora perfusão)
5. SF 0,9% 1000mL EV rápido (prevenção de rabdomiólise)
6. Manitol 20% — 1g/kg EV (se rabdomiólise associada)
7. Bicarbonato de sódio 8,4% — 100mL + SF 900mL EV (alcalinizar urina)
8. Monitorizar: CPK, K+, creatinina, mioglobina, diurese
9. Pressão compartimental >30mmHg ou delta <30mmHg da PAD → fasciotomia
10. Pós-fasciotomia: curativo a vácuo, revisão em 48-72h`,
    notes: "5 Ps: Pain (dor desproporcional), Pressure (tensão), Paresthesia, Paralysis, Pulselessness (tardio). Dor ao alongamento passivo é o sinal mais precoce e sensível.",
    warnings: "NÃO esperar pulso ausente para diagnosticar (sinal tardio = isquemia irreversível). Tempo-dependente: >6h de isquemia = dano irreversível. Fasciotomia de emergência.",
    guideline: "SBTO / AAOS / BOTS",
  },
  {
    id: "rx-luxacao-ombro-anterior",
    title: "Luxação Anterior de Ombro",
    type: "Ortopedia",
    prescription: `1. Analgesia + sedação procedural:
   - Midazolam 2-5mg EV + Fentanil 50-100mcg EV, OU
   - Propofol 0,5-1mg/kg EV (com monitorização)
2. Técnica de redução (escolher uma):
   a) Kocher: rotação externa → adução → rotação interna
   b) Milch: abdução gradual → rotação externa → tração
   c) Cunningham: massagem dos músculos periescapulares
   d) Estimson: decúbito ventral + peso 3-5kg no braço por 20-30min
3. Pós-redução: Rx controle (AP + perfil axilar)
4. Tipoia tipo Velpeau por 3-4 semanas (<25 anos) ou 1-2 semanas (>40 anos)
5. Crioterapia local 20min 4x/dia por 72h
6. Dipirona 1g VO 6/6h + Ibuprofeno 600mg VO 8/8h
7. Encaminhar para Ortopedia (avaliação de lesão de Bankart/Hill-Sachs)`,
    alternatives: "Técnica do Hennepin (rotação externa pura): menos dor, pode dispensar sedação. Bloqueio intra-articular com Lidocaína 1% 20mL como alternativa à sedação.",
    notes: "Luxação anterior = 95% dos casos. Avaliar nervo axilar (sensibilidade deltóide) e artéria axilar antes e após redução. Recorrência: 80-90% em <20 anos.",
    warnings: "NÃO forçar redução — risco de fratura. Se irredutível: avaliação de interposição tecidual → redução aberta. Rx pré-redução obrigatório para excluir fratura.",
    guideline: "SBTO / AAOS / EFORT",
  },
  {
    id: "rx-fratura-colles",
    title: "Fratura de Colles (Rádio Distal)",
    type: "Ortopedia",
    prescription: `1. Bloqueio do hematoma: Lidocaína 1% sem vaso 5-10mL no foco de fratura
2. Redução incruenta sob tração (se desviada)
3. Imobilização: tala gessada antebraquiopalmar
4. Verificação neurovascular pós-imobilização (pulso radial, sensibilidade)
5. Rx controle pós-redução (critérios de aceitabilidade)
6. Analgesia: Dipirona 1g VO 6/6h + Cetoprofeno 100mg VO 12/12h
7. Elevação do membro + crioterapia + exercícios de dedos
8. Retorno em 7 dias para Rx controle e avaliação de desvio secundário
9. Critérios cirúrgicos: encurtamento >3mm, inclinação dorsal >10°, degrau articular >2mm`,
    notes: "Fratura mais comum do PS. Mecanismo: queda com mão espalmada (FOOSH). Sempre avaliar fratura de escafóide associada (dor na tabaqueira anatômica).",
    warnings: "Síndrome do túnel do carpo aguda: parestesia mediano pós-fratura → URGÊNCIA (descompressão). Monitorar edema sob gesso.",
    guideline: "SBTO / AAOS / BSSH",
  },
  {
    id: "rx-luxacao-cotovelo",
    title: "Luxação de Cotovelo",
    type: "Ortopedia",
    prescription: `1. Sedação procedural: Midazolam 3-5mg + Fentanil 50-100mcg EV
2. Redução: tração no antebraço + contratração no braço
3. Teste de estabilidade pós-redução (flexão-extensão)
4. Rx controle AP e perfil
5. Tala gessada axilopalmar em 90° de flexão
6. Analgesia: Dipirona 1g 6/6h + Ibuprofeno 600mg 8/8h
7. Crioterapia + elevação do membro
8. Mobilização precoce em 7-10 dias (evitar rigidez)
9. Avaliar: nervo ulnar, artéria braquial, fraturas associadas (coronóide, cabeça do rádio)`,
    notes: "Segunda luxação mais comum. 'Tríade terrível': luxação + fratura coronóide + fratura cabeça do rádio → indicação cirúrgica. Avaliar nervo ulnar (parestesia 4° e 5° dedos).",
    guideline: "SBTO / AAOS",
  },
  {
    id: "rx-fratura-exposta-manejo",
    title: "Fratura Exposta — Manejo Inicial no PS",
    type: "Ortopedia",
    prescription: `1. ATLS: ABCDE + controle de hemorragia
2. Foto da ferida + curativo estéril úmido com SF
3. NÃO explorar a ferida no PS (fazer no centro cirúrgico)
4. Imobilização provisória com tala
5. ATB (iniciar em até 1h):
   - Gustilo I-II: Cefazolina 2g EV 8/8h
   - Gustilo III: Cefazolina 2g EV 8/8h + Gentamicina 5mg/kg/dia EV
   - Gustilo IIIB/C com contaminação: adicionar Metronidazol 500mg EV 8/8h
6. Profilaxia antitetânica (dT + SAT/IGHAT conforme história vacinal)
7. Analgesia: Morfina 5-10mg EV + Dipirona 1g EV
8. Centro cirúrgico: desbridamento + lavagem + fixação em até 6h`,
    notes: "Classificação de Gustilo-Anderson no centro cirúrgico (não no PS). Tempo porta-ATB <1h reduz infecção. Foto da ferida evita exposições repetidas.",
    warnings: "NÃO tentar reduzir osso exposto para dentro da ferida. NÃO usar torniquete >2h sem afrouxar.",
    guideline: "SBTO / ATLS / BOA-BAPRAS",
  },
  // === HEMATOLOGIA ===
  {
    id: "rx-civd",
    title: "Coagulação Intravascular Disseminada (CIVD)",
    type: "Hematologia",
    prescription: `1. TRATAR A CAUSA BASE (sepse, neoplasia, trauma, obstétrica)
2. Suporte hemoterápico (guiado por sangramento ativo):
   a) Plaquetas: manter >50.000 (se sangramento ativo) ou >20.000 (se sem sangramento)
   b) Crioprecipitado: 1U/5-10kg se fibrinogênio <150mg/dL (alvo >150)
   c) PFC: 10-15mL/kg se TP/TTPA >1,5x o controle
3. Ácido tranexâmico 1g EV 8/8h (se hiperfibrinólise predominante)
4. Heparina NÃO FRACIONADA 5-10U/kg/h EV (APENAS se trombose predominante — ex: purpura fulminans)
5. Monitorizar 6/6h: plaquetas, fibrinogênio, TP, TTPA, D-dímero, esquizócitos
6. Suporte: SF 0,9% para manter PAM >65mmHg
7. Concentrado de hemácias se Hb <7g/dL (ou <9 se instável)`,
    notes: "CIVD aguda: consumo > produção → sangramento. CIVD crônica: compensada → trombose. ISTH DIC Score ≥5 = CIVD. Fibrinogênio é o melhor marcador de gravidade.",
    warnings: "NÃO dar heparina em CIVD com sangramento ativo (exceto purpura fulminans). Tratar a causa é o principal tratamento. Ácido tranexâmico contraindicado se trombose predominante.",
    guideline: "ABHH / ISTH / BSH",
  },
  {
    id: "rx-ptt-shu",
    title: "Púrpura Trombocitopênica Trombótica (PTT) / SHU",
    type: "Hematologia",
    prescription: `1. PTT é EMERGÊNCIA — plasmaférese em até 4-8h
2. Enquanto aguarda plasmaférese:
   a) PFC 30mL/kg EV (repor ADAMTS13)
   b) Metilprednisolona 1g EV/dia por 3 dias (pulsoterapia)
3. Plasmaférese: 1-1,5 volemia plasmática/dia até normalização
4. Caplacizumab 11mg EV (dose de ataque) → 11mg SC/dia (se disponível)
5. Rituximab 375mg/m² EV semanal por 4 semanas (refratário/recorrente)
6. NÃO transfundir plaquetas (exceto se sangramento com risco de vida)
7. Monitorizar: LDH, esquizócitos, plaquetas, Hb, creatinina, ADAMTS13
8. Ácido fólico 5mg/dia VO (suporte à eritropoiese)
9. SHU típica (E.coli O157:H7): suporte — NÃO dar ATB (piora liberação de toxina Shiga)`,
    notes: "Pêntade da PTT: trombocitopenia, anemia hemolítica microangiopática, febre, alteração neurológica, insuficiência renal. Na prática, basta MAT + plaquetopenia. ADAMTS13 <10% = PTT.",
    warnings: "NUNCA transfundir plaquetas na PTT (piora trombose microvascular). Mortalidade sem tratamento >90%. SHU: ATB aumenta risco de SHU em infecção por E.coli O157.",
    guideline: "ABHH / ISTH / ASH / BSH",
  },
  {
    id: "rx-crise-falcemica-vaso-oclusiva",
    title: "Crise Vaso-Oclusiva Falcêmica",
    type: "Hematologia",
    prescription: `1. Analgesia agressiva (escalonada):
   a) Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h
   b) Morfina 0,1-0,15mg/kg EV a cada 15-20min até alívio (sem dose máxima fixa)
   c) PCA (bomba de analgesia controlada pelo paciente) se disponível
2. Hidratação: SF 0,9% 30mL/kg/dia EV (NÃO hiper-hidratar — risco STA)
3. O2 suplementar APENAS se SpO2 <95%
4. Ácido fólico 5mg/dia VO
5. Tromboprofilaxia: Enoxaparina 40mg SC/dia (se internado)
6. Se febre ≥38,3°C: hemoculturas + ATB (Ceftriaxona 2g EV/dia) — risco de sepse por encapsulados
7. Transfusão simples se Hb <5-6g/dL ou queda >2g do basal
8. Exsanguíneotransfusão: STA grave, AVC, priapismo refratário`,
    notes: "STA (Síndrome Torácica Aguda): infiltrado novo + sintoma respiratório + febre. Principal causa de morte na falciforme. Exsanguíneotransfusão parcial é o tratamento.",
    warnings: "NÃO hiper-hidratar (precipita STA e edema pulmonar). Alvo Hb pós-transfusão ≤10g/dL (hiper-viscosidade se >10). Meperidina CONTRAINDICADA (convulsões).",
    guideline: "ABHH / ASH / NHLBI / NICE",
  },
  {
    id: "rx-neutropenia-febril",
    title: "Neutropenia Febril",
    type: "Hematologia",
    prescription: `1. EMERGÊNCIA — ATB em até 60min da triagem
2. Colher antes do ATB: 2 pares de hemoculturas (periférica + cateter se presente)
3. ATB empírico:
   a) Baixo risco (MASCC ≥21): Amoxicilina-Clavulanato 500mg VO 8/8h + Ciprofloxacino 500mg VO 12/12h
   b) Alto risco: Cefepima 2g EV 8/8h OU Piperacilina-Tazobactam 4,5g EV 6/6h OU Meropenem 1g EV 8/8h
4. Adicionar Vancomicina 15-20mg/kg EV 12/12h SE: instabilidade, mucosite grave, infecção de cateter, celulite
5. Adicionar antifúngico (Caspofungina 70mg D1, 50mg/dia) SE: febre persistente >4-7 dias apesar de ATB
6. G-CSF (Filgrastima) 5mcg/kg/dia SC: considerar se alto risco de complicações
7. Monitorizar: hemograma diário, culturas, PCR, função renal/hepática`,
    notes: "Neutropenia febril: neutrófilos <500/mm³ + febre ≥38,3°C (1x) ou ≥38°C por >1h. MASCC score para estratificação de risco.",
    warnings: "NÃO atrasar ATB por exames. Infecção pode ser fulminante sem neutrófilos. Evitar AINE (mascara febre). Toque retal contraindicado.",
    guideline: "ABHH / IDSA / ASCO / ESMO",
  },
  // === TOXICOLOGIA ===
  {
    id: "rx-intox-organofosforados",
    title: "Intoxicação por Organofosforados",
    type: "Toxicologia",
    prescription: `1. ABCDE + descontaminação (retirar roupas, lavar pele com água e sabão)
2. Atropina 2-4mg EV a cada 5-10min até atropinização:
   - Alvo: secreções secas, FC >80bpm, pupilas médias
   - Pode necessitar doses altas (centenas de mg nas primeiras 24h)
   - Manutenção: infusão contínua 0,5-1mg/h (titular por secreções)
3. Pralidoxima (Contrathion) 1-2g EV em 15-30min:
   - Idealmente nas primeiras 6h (antes do envelhecimento da AChE)
   - Manutenção: 500mg/h EV ou 1g EV 6/6h por 24-48h
4. Diazepam 10mg EV se convulsões
5. IOT precoce se insuficiência respiratória (NÃO usar Succinilcolina — metabolizada por colinesterase)
6. Monitorizar: colinesterase sérica, ECG (QTc), gasometria, eletrólitos
7. Lavagem gástrica: considerar se ingestão <1h (com via aérea protegida)
8. Carvão ativado 1g/kg (se ingestão <1h, paciente consciente)`,
    notes: "Síndrome colinérgica: DUMBELS (Diarrhea, Urination, Miosis, Bradycardia/Bronchospasm, Emesis, Lacrimation, Salivation). Síndrome intermediária: 24-96h após exposição.",
    warnings: "NÃO usar Succinilcolina para IOT (bloqueio prolongado). Atropina NÃO reverte fraqueza muscular (apenas secreções). Pralidoxima ineficaz após 'envelhecimento' da enzima (24-48h).",
    guideline: "SBTox / EXTRIP / WHO / ACT",
  },
  {
    id: "rx-intox-paracetamol",
    title: "Intoxicação por Paracetamol (Acetaminofeno)",
    type: "Toxicologia",
    prescription: `1. Dose tóxica: >150mg/kg ou >7,5g em adultos
2. Carvão ativado 1g/kg VO (se ingestão <2h, paciente consciente)
3. N-Acetilcisteína (NAC) — ANTÍDOTO:
   a) Protocolo EV 21h (Prescott):
      - 150mg/kg em SG 5% 200mL EV em 1h (ataque)
      - 50mg/kg em SG 5% 500mL EV em 4h
      - 100mg/kg em SG 5% 1000mL EV em 16h
   b) Protocolo VO 72h: 140mg/kg ataque → 70mg/kg 4/4h por 17 doses
4. Iniciar NAC se:
   - Dose >150mg/kg e <8h da ingestão (não esperar nível sérico)
   - Nível sérico acima da linha de tratamento no nomograma de Rumack-Matthew
   - Apresentação tardia (>24h) com ALT elevada
5. Monitorizar: ALT/AST 12/12h, bilirrubinas, TP/INR, creatinina, lactato
6. Critérios de King's College para transplante hepático de emergência`,
    notes: "Fases: I (0-24h) assintomático/náuseas; II (24-72h) hepatotoxicidade; III (72-96h) falência hepática; IV (>96h) recuperação. NAC é 100% eficaz se iniciada <8h.",
    warnings: "Paracetamol é a principal causa de falência hepática aguda no mundo. Dose única >150mg/kg ou múltiplas doses >75mg/kg/dia. NAC pode causar reação anafilactóide (não é alergia — reduzir velocidade).",
    guideline: "SBTox / AACT / RCEM / Toxbase",
  },
  {
    id: "rx-intox-triciclicos",
    title: "Intoxicação por Antidepressivos Tricíclicos",
    type: "Toxicologia",
    prescription: `1. ABCDE — IOT precoce se rebaixamento ou convulsão
2. ECG seriado: QRS >100ms = risco de arritmia; >160ms = risco de TV/FV
3. Bicarbonato de sódio 8,4%:
   - 1-2mEq/kg EV em bolus se QRS >100ms ou hipotensão
   - Manutenção: NaHCO3 150mL + SG 5% 850mL EV em BIC (alvo pH 7,45-7,55)
4. Diazepam 10mg EV se convulsões (NÃO usar fenitoína — piora cardiotoxicidade)
5. Noradrenalina 0,1-0,5mcg/kg/min EV (se hipotensão refratária ao NaHCO3)
6. NÃO usar Flumazenil (risco de convulsão)
7. NÃO fazer lavagem gástrica tardia (risco de aspiração + retardo esvaziamento)
8. Carvão ativado 1g/kg (se ingestão <1h, via aérea protegida)
9. Monitorização cardíaca contínua por mínimo 24h
10. Se TV/FV: NaHCO3 + Lidocaína 1mg/kg EV (NÃO amiodarona)`,
    notes: "Tríade da intoxicação tricíclica: convulsão + arritmia + hipotensão. Bloqueio dos canais de Na+ (QRS largo), anticolinérgico (taquicardia, midríase, retenção urinária), anti-histamínico (sedação).",
    warnings: "QRS >100ms é o melhor preditor de convulsão. QRS >160ms prediz arritmia ventricular. NÃO usar antiarrítmicos classe IA/IC. Fenitoína CONTRAINDICADA. Monitorizar mínimo 24h mesmo se assintomático.",
    guideline: "SBTox / AACT / AHA / Toxbase",
  },
  {
    id: "rx-intox-benzodiazepinicos",
    title: "Intoxicação por Benzodiazepínicos",
    type: "Toxicologia",
    prescription: `1. ABCDE — suporte ventilatório (principal risco: depressão respiratória)
2. Flumazenil 0,2mg EV em 30s:
   - Repetir 0,3mg após 30s se sem resposta
   - Depois 0,5mg a cada 1min (dose máxima total: 3-5mg)
   - ATENÇÃO: uso crônico de BZD ou coingesta de tricíclicos → NÃO usar flumazenil
3. Carvão ativado 1g/kg VO (se ingestão <1h, paciente consciente, via aérea protegida)
4. Monitorização: SpO2, FR, nível de consciência
5. Observação por 2h após flumazenil (meia-vida curta — ressedação)
6. Se coingesta de álcool: Tiamina 300mg EV + SG 5% 500mL
7. Intoxicação pura por BZD raramente é fatal (atenção a coingestões)`,
    notes: "BZD isolado: mortalidade muito baixa. Perigo real: coingesta (álcool, opioides, tricíclicos). Flumazenil meia-vida 40-80min < BZD (pode haver ressedação).",
    warnings: "Flumazenil CONTRAINDICADO se: uso crônico de BZD (convulsão), coingesta de tricíclicos (arritmia), história de epilepsia. Na dúvida, NÃO usar — suporte ventilatório é suficiente.",
    guideline: "SBTox / AACT / RCEM",
  },
  {
    id: "rx-intox-opioides",
    title: "Intoxicação por Opioides / Overdose",
    type: "Toxicologia",
    prescription: `1. ABCDE — ventilação com BVM é a prioridade
2. Naloxona (Narcan) 0,4mg EV/IM/IN:
   - Repetir a cada 2-3min até FR >12 e resposta (máx 10mg)
   - Via intranasal: 2mg em cada narina (4mg total)
   - Se dependente: iniciar com 0,04mg (evitar abstinência aguda)
3. Infusão contínua: 2/3 da dose eficaz por hora em SF 0,9%
4. Monitorizar por mínimo 4-6h (naloxona meia-vida < opioides)
5. Se fentanil/metadona: observação prolongada (24-72h)
6. IOT se: apneia refratária, edema pulmonar não cardiogênico
7. Carvão ativado: considerar se ingestão oral <1h
8. Rabdomiólise: hidratação agressiva + monitorizar CPK e função renal`,
    notes: "Tríade da intoxicação opioide: miose, depressão respiratória, rebaixamento de consciência. Fentanil ilícito: pode precisar de doses muito altas de naloxona (5-10mg).",
    warnings: "Naloxona meia-vida (30-90min) < maioria dos opioides → RESSEDAÇÃO. Metadona: observar 72h. Abstinência aguda pode causar vômitos → risco aspiração. Edema pulmonar não cardiogênico: complicação grave.",
    guideline: "SBTox / AACT / AHA / WHO",
  },
  {
    id: "rx-intox-litio",
    title: "Intoxicação por Lítio",
    type: "Toxicologia",
    prescription: `1. Suspender lítio IMEDIATAMENTE
2. Hidratação vigorosa: SF 0,9% 200-300mL/h EV (restaurar volemia e TFG)
3. NÃO usar carvão ativado (não adsorve lítio)
4. Lavagem intestinal total (PEG): considerar se ingestão de formulação de liberação prolongada
5. Hemodiálise — indicações:
   - Lítio sérico >4mEq/L (aguda) ou >2,5mEq/L (crônica com sintomas)
   - Alteração neurológica (convulsão, coma, tremor refratário)
   - Insuficiência renal
   - Deterioração clínica apesar de hidratação
6. Controle de convulsões: Diazepam 10mg EV
7. Monitorizar: lítio sérico 4/4h, Na+, K+, creatinina, ECG
8. Lítio sérico pode subir após diálise (redistribuição) → repetir diálise se necessário`,
    notes: "Intoxicação aguda: GI predominante. Crônica: neurológica predominante (tremor, ataxia, mioclonia, coma). Fatores precipitantes: desidratação, AINE, IECA, diuréticos tiazídicos.",
    warnings: "Sequelas neurológicas permanentes (SILENT: Syndrome of Irreversible Lithium Effectuated Neurotoxicity). Dano pode ser irreversível mesmo com normalização do nível.",
    guideline: "SBTox / EXTRIP / AACT",
  },
  {
    id: "rx-intox-digitálicos",
    title: "Intoxicação Digitálica (Digoxina)",
    type: "Toxicologia",
    prescription: `1. Suspender digoxina
2. ECG: qualquer arritmia é possível (clássico: TV bidirecional, BAV + taqui atrial)
3. Anticorpo antidigoxina (Fab — DigiFab):
   - Indicações: arritmia com instabilidade, K+ >5,5mEq/L, digoxina >10ng/mL
   - Dose: nº frascos = (nível sérico x peso) / 100 OU dose empírica 10-20 frascos
4. Hipercalemia: tratar agressivamente
   - Gluconato de cálcio 10% CONTRAINDICADO (controvérsia — pode piorar)
   - Insulina 10U + Glicose 50% 50mL EV
   - NaHCO3 50mEq EV
5. Atropina 0,5-1mg EV se bradicardia sintomática
6. Marcapasso transcutâneo se bradicardia refratária
7. NÃO cardioverter (risco de FV refratária) — usar Fab antes
8. Monitorização cardíaca contínua, K+ 2/2h, nível digoxina (útil antes do Fab)`,
    notes: "Fatores de risco: hipocalemia, hipercalcemia, hipomagnesemia, insuficiência renal, hipotireoidismo, amiodarona. Nível terapêutico: 0,5-2ng/mL.",
    warnings: "Cardioversão pode causar FV refratária na intox digitálica. K+ é o melhor marcador de gravidade. Gluconato de cálcio: usar com cautela extrema (risco teórico de 'coração de pedra').",
    guideline: "SBTox / AHA / AACT / Toxbase",
  },
  {
    id: "rx-sindrome-nefrotica",
    title: "Síndrome Nefrótica",
    type: "Prescrição Hospitalar",
    prescription: `1. Repouso relativo + dieta hipossódica (<2g Na/dia)
2. Furosemida 40-80mg EV 12/12h (se edema importante)
3. Albumina 20% 50-100mL EV antes da furosemida (se albumina <2g/dL)
4. Espironolactona 25-50mg VO 12/12h
5. Restrição hídrica se Na <130mEq/L
6. Prednisona 1mg/kg/dia VO (máx 80mg) por 4-8 semanas (se lesão mínima)
7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — risco elevado)
8. Atorvastatina 20-40mg VO (dislipidemia nefrótica)
9. IECA/BRA: Enalapril 10-20mg VO 12/12h (antiproteinúrico)
10. Exames: proteinúria 24h, albumina, colesterol, complemento C3/C4, anti-PLA2R
11. Biópsia renal (adultos — guiar tratamento)`,
    notes: "Tríade: proteinúria >3,5g/dia + hipoalbuminemia + edema. Risco de TVP/TEP (perda de antitrombina III). Lesão mínima: mais comum em crianças, responde a corticoide.",
    warnings: "NÃO usar IECA se IRA/hipercalemia. Albumina EV: efeito transitório, usar apenas para mobilizar edema refratário. Vacinar contra pneumococo.",
    guideline: "SBN / KDIGO 2021",
  },
  {
    id: "rx-gnrp",
    title: "Glomerulonefrite Rapidamente Progressiva (GNRP)",
    type: "Prescrição de Emergência Nefrológica",
    prescription: `1. Internação URGENTE (risco de DRC terminal em dias/semanas)
2. Pulsoterapia: Metilprednisolona 500-1000mg EV 1x/dia por 3 dias
3. Após pulso: Prednisona 1mg/kg/dia VO (desmame em 6-12 meses)
4. Ciclofosfamida 2mg/kg/dia VO OU pulso EV 0,5-1g/m² mensal (6 meses)
5. OU Rituximabe 375mg/m² EV semanal por 4 semanas (vasculite ANCA)
6. Plasmaférese: se anti-GBM (Goodpasture) ou hemorragia pulmonar
7. IECA/BRA após estabilização (controle pressórico + antiproteinúrico)
8. Exames: ANCA, anti-GBM, complemento, FAN, crioglobulinas, biópsia renal URGENTE
9. Diálise de urgência se: K+ >6,5, EAP, acidose refratária, uremia grave
10. Monitorizar: creatinina diária, sedimento urinário, hemograma (mielotoxicidade)`,
    notes: "Classificação: tipo I (anti-GBM/Goodpasture), tipo II (imunocomplexos/lúpus), tipo III (pauci-imune/ANCA). Biópsia: crescentes em >50% dos glomérulos. Prognóstico depende da % de crescentes e creatinina inicial.",
    warnings: "Emergência nefrológica — cada dia de atraso piora o prognóstico renal. Ciclofosfamida: leucopenia, infertilidade, cistite hemorrágica (Mesna profilático).",
    guideline: "SBN / KDIGO / ACR / EULAR",
  },
  {
    id: "rx-nefrite-lupica-diag",
    title: "Nefrite Lúpica — Indução",
    type: "Prescrição Hospitalar",
    prescription: `Classe III/IV (proliferativa):
1. Pulsoterapia: Metilprednisolona 1g EV 1x/dia por 3 dias
2. Prednisona 1mg/kg/dia VO (desmame gradual a partir da 4ª semana)
3. Micofenolato Mofetil 1g VO 12/12h (indução — 6 meses) OU
4. Ciclofosfamida EV (Euro-Lupus): 500mg quinzenal por 3 meses (6 pulsos)
5. Hidroxicloroquina 400mg VO 1x/dia (MANTER — reduz flares)
6. IECA/BRA se proteinúria (Losartana 50-100mg ou Enalapril 10-20mg)
7. Atorvastatina 20mg VO (se dislipidemia)
8. Protetor gástrico: Omeprazol 20mg VO 1x/dia
9. Cálcio 1000mg + Vitamina D 1000UI VO 1x/dia
10. Exames: anti-dsDNA, C3/C4, proteinúria 24h, creatinina, biópsia renal (classificação ISN/RPS)`,
    notes: "Classe V (membranosa): Micofenolato ou Ciclosporina. Classe II (mesangial): pode tratar apenas com IECA + hidroxicloroquina. Manutenção: Micofenolato 1g 12/12h ou Azatioprina 2mg/kg/dia.",
    guideline: "SBR / ACR / EULAR / KDIGO",
  },
  {
    id: "rx-ira-dialise",
    title: "IRA — Indicações de Diálise de Urgência",
    type: "Prescrição de Emergência",
    prescription: `INDICAÇÕES ABSOLUTAS (mnemônico AEIOU):
A — Acidose metabólica refratária (pH <7,1)
E — Eletrólitos: Hipercalemia refratária (K+ >6,5 com alteração ECG)
I — Intoxicação dialysável (metanol, etilenoglicol, lítio, salicilatos)
O — Overload (sobrecarga hídrica / EAP refratário a diurético)
U — Uremia sintomática (encefalopatia, pericardite, sangramento)

Preparação:
1. Solicitar acesso para hemodiálise: cateter duplo-lúmen em jugular interna D
2. Exames pré-diálise: K+, Na+, Ca++, P, Mg, gasometria, ureia, creatinina
3. Peso seco estimado
4. Avaliar anticoagulação do circuito (heparina vs citrato)
5. Contato com nefrologia + serviço de diálise`,
    notes: "IRA KDIGO 3 sem indicação absoluta: considerar diálise se oligúria >12h apesar de otimização volêmica. Diálise precoce vs tardia: sem benefício de mortalidade (STARRT-AKI trial).",
    guideline: "SBN / KDIGO 2024",
  },
  {
    id: "rx-hemoptise-macica",
    title: "Hemoptise Maciça",
    type: "Prescrição de Emergência",
    prescription: `1. Via aérea: decúbito lateral (lado sangrante para BAIXO)
2. O2 suplementar alto fluxo
3. 2 acessos venosos calibrosos + reserva de sangue
4. IOT precoce se: insuficiência respiratória, volume >500mL/24h
5. Tubo endotraqueal calibroso (≥8mm) para permitir broncoscopia
6. IOT seletiva no brônquio contralateral se sangramento maciço unilateral
7. Ácido Tranexâmico 1g EV em 10 min (pode repetir em 8h)
8. Suspender anticoagulantes — reverter se necessário
9. Broncoscopia de urgência (localizar + tamponar)
10. TC tórax com contraste (identificar artéria brônquica)
11. Embolização de artéria brônquica (radiologia intervencionista)
12. Cirurgia: lobectomia de urgência se refratária`,
    notes: "Definição: >200-600mL em 24h (varia por autor). Causas: tuberculose, bronquiectasia, CA pulmão, vasculite. Mortalidade por asfixia (não exsanguinação).",
    warnings: "Prioridade: PROTEGER via aérea e pulmão contralateral. Decúbito lateral com lado afetado para baixo. NÃO esperar para intubar se volume elevado.",
    guideline: "SBPT / ATS / BTS",
  },
  {
    id: "rx-derrame-pleural-complicado",
    title: "Derrame Pleural Complicado / Empiema",
    type: "Prescrição Hospitalar",
    prescription: `1. Toracocentese diagnóstica + análise do líquido pleural:
   pH, glicose, LDH, proteínas, celularidade, Gram, cultura, citologia
2. Critérios de Light (exsudato): LDH LP/sérico >0,6 OU proteína LP/sérica >0,5
3. Indicação de drenagem: pH <7,2, glicose <40, Gram/cultura +, empiema franco, loculações
4. Dreno de tórax 28-32Fr (empiema) ou pigtail 12-14Fr (derrames simples)
5. Antibioticoterapia:
   Ceftriaxona 2g EV 1x/dia + Metronidazol 500mg EV 8/8h
   OU Ampicilina-Sulbactam 3g EV 6/6h
6. Se MRSA: adicionar Vancomicina 15-20mg/kg EV 12/12h
7. Fibrinolíticos intrapleurais: Alteplase 10mg + DNase 5mg 12/12h por 3 dias (se loculado)
8. Fisioterapia respiratória
9. Se falha: VATS (videotoracoscopia) — decorticação
10. Exames: hemograma, PCR, RX tórax diário, USG pleural`,
    notes: "Empiema: mortalidade 15-20% — não subestimar. Drenagem precoce + ATB agressivo = melhor prognóstico. Derrames parapneumônicos simples não necessitam drenagem.",
    guideline: "SBPT / BTS / ACCP",
  },
  {
    id: "rx-pneumotorax-espontaneo",
    title: "Pneumotórax Espontâneo",
    type: "Prescrição Hospitalar",
    prescription: `Primário pequeno (<2cm, estável):
1. Observação + O2 alto fluxo (10-15L/min) — acelera absorção
2. RX tórax controle em 4-6h
3. Se estável: alta com RX em 2 semanas

Primário grande (>2cm ou sintomático):
4. Aspiração com cateter 16-18G no 2º EIC, linha hemiclavicular
5. Se falha: dreno de tórax 20-24Fr com selo d'água
6. Analgesia: Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h

Secundário / Hipertensivo:
7. Drenagem IMEDIATA (agulha grossa → dreno)
8. Descompressão com agulha 14G no 2º EIC se instabilidade
9. VM: PEEP baixa, FR baixa (evitar barotrauma)
10. Cirurgia (VATS + pleurodese) se: recidivante, bilateral, fístula persistente >5 dias`,
    guideline: "SBPT / BTS / ACCP",
  },
  {
    id: "rx-sdra",
    title: "SDRA — Síndrome do Desconforto Respiratório Agudo",
    type: "Prescrição de UTI",
    prescription: `1. IOT + VM protetora:
   VC 6mL/kg (peso predito) — NUNCA >8mL/kg
   PEEP conforme tabela PEEP/FiO2 (ARDS Network)
   Pressão de platô ≤30cmH2O
   Driving pressure ≤15cmH2O
2. FiO2: titular para SpO2 88-95% (PaO2 55-80)
3. Sedação profunda (RASS -4/-5): Propofol + Fentanil em BIC
4. Bloqueio neuromuscular: Cisatracúrio 0,15mg/kg bolus → 1-3mcg/kg/min (se P/F <150)
5. Posição prona: se P/F <150 por ≥12h → prona por 16h/dia
6. Balanço hídrico negativo (Furosemida se estável hemodinamicamente)
7. ATB conforme foco (se infeccioso)
8. Corticoide: Dexametasona 20mg EV/dia por 5 dias → 10mg por 5 dias
9. Gasometria 4/4h, mecânica ventilatória 6/6h
10. Meta: pH >7,25 (hipercapnia permissiva aceitável)`,
    notes: "Classificação Berlin: leve P/F 200-300, moderada 100-200, grave <100. Prona melhora mortalidade na SDRA grave (PROSEVA trial). VM protetora é a intervenção com maior impacto.",
    guideline: "AMIB / ATS / ESICM / ARDS Network",
  },
  {
    id: "rx-tep",
    title: "Tromboembolismo Pulmonar (TEP)",
    type: "Prescrição de Emergência",
    prescription: `TEP sem instabilidade:
1. Heparina não fracionada: 80UI/kg bolus → 18UI/kg/h EV em BIC
   OU Enoxaparina 1mg/kg SC 12/12h
2. Iniciar anticoagulação oral junto: Rivaroxabana 15mg VO 12/12h por 21 dias → 20mg 1x/dia
3. AngioTC de tórax (exame confirmatório)
4. Exames: D-dímero, troponina, BNP, gasometria, ECG

TEP maciço (instabilidade hemodinâmica):
5. Trombólise: Alteplase 100mg EV em 2h OU Tenecteplase (dose por peso)
6. Se contraindicação à trombólise: Embolectomia cirúrgica ou por cateter
7. Noradrenalina se choque
8. O2 / VM conforme necessidade
9. Ecocardiograma à beira-leito (disfunção VD)`,
    warnings: "TEP maciço é emergência — trombólise salva vidas. Wells score + D-dímero para estratificação. PESI/sPESI para prognóstico.",
    guideline: "SBC / ESC / ATS",
  },
  {
    id: "rx-dpoc-exacerbada-grave",
    title: "DPOC Exacerbada Grave — UTI",
    type: "Prescrição de UTI",
    prescription: `1. VNI (BiPAP): IPAP 12-20, EPAP 5-8, FiO2 para SpO2 88-92%
2. Se falha VNI: IOT + VM (VC 6-8mL/kg, FR 12-16, PEEP 5, FiO2 mínima)
3. Broncodilatadores: Salbutamol 10 gotas + Ipratrópio 40 gotas NBZ 4/4h
4. Metilprednisolona 40mg EV 1x/dia por 5 dias
5. ATB: Ceftriaxona 1g EV 12/12h + Azitromicina 500mg EV (se escarro purulento)
6. Aminofilina: 5mg/kg EV em 20min (se refratário — controlar FC)
7. Gasometria arterial 2/2h → 4/4h quando estabilizar
8. Fisioterapia respiratória
9. Profilaxia TVP: Enoxaparina 40mg SC 1x/dia
10. NÃO hiper-oxigenar (risco de hipercapnia)`,
    guideline: "GOLD 2024 / SBPT / AMIB",
  },
  {
    id: "rx-sindrome-hepatorrenal",
    title: "Síndrome Hepatorrenal (SHR)",
    type: "Prescrição de UTI",
    prescription: `1. Albumina 20%: 1g/kg EV no D1 (máx 100g) + 20-40g/dia nos dias seguintes
2. Terlipressina 0,5-1mg EV 4/4h (titular até 2mg 4/4h — 1ª escolha)
3. OU Noradrenalina 0,5-3mg/h EV em BIC (alternativa se terlipressina indisponível)
4. Suspender diuréticos
5. SF 0,9% — NÃO hiperhidratar (risco de hipervolemia no cirrótico)
6. Meta: ↓creatinina ≥25% ou normalização
7. Monitorização: PA, diurese, creatinina diária, Na+ sérico
8. Duração: manter até resposta ou máx 14 dias
9. Se refratário: TIPS (shunt transjugular) ou transplante hepático
10. Exames: função renal, Na+ urinário (<10 = SHR), sedimento (normal na SHR)`,
    notes: "SHR tipo 1: rápida (dobra creatinina em <2 semanas) — mortalidade >50% em 30 dias. SHR tipo 2: insidiosa. Diagnóstico de exclusão: excluir hipovolemia, nefrotoxicidade, obstrução.",
    guideline: "SBH / EASL / AASLD",
  },
  {
    id: "rx-encefalopatia-hepatica",
    title: "Encefalopatia Hepática",
    type: "Prescrição Hospitalar",
    prescription: `1. Lactulose 20-30mL VO 8/8h (titular para 2-3 evacuações pastosas/dia)
2. Se coma/sem VO: Lactulose 300mL + 700mL SF via enema de retenção 8/8h
3. Rifaximina 550mg VO 12/12h (se recorrente ou adjuvante)
4. Identificar e tratar fator precipitante: infecção (PBE!), HDA, constipação, drogas, TIPS
5. Dieta: NÃO restringir proteína (1-1,5g/kg/dia) — preferir proteína vegetal/BCAA
6. Correção de distúrbios eletrolíticos (hipocalemia → alcalose → ↑amônia)
7. Suspender benzodiazepínicos e opioides
8. Flumazenil 0,2mg EV: teste diagnóstico (melhora transitória sugere BZD endógeno)
9. Monitorizar: Glasgow, escala de West Haven, amônia (não se correlaciona bem)
10. IOT se Glasgow ≤8`,
    guideline: "SBH / EASL / AASLD",
  },
  {
    id: "rx-ascite-manejo",
    title: "Ascite — Manejo Clínico",
    type: "Prescrição Hospitalar",
    prescription: `1. Restrição de sódio: <2g/dia (88mEq/dia)
2. Espironolactona 100mg VO 1x/dia (início — titular até 400mg/dia)
3. Furosemida 40mg VO 1x/dia (associar — titular até 160mg/dia)
4. Proporção: 100:40 (espironolactona:furosemida)
5. Meta: perda de peso 0,5kg/dia (sem edema) ou 1kg/dia (com edema)
6. Se ascite tensa/sintomática: paracentese de alívio (até 5L sem albumina)
7. Se >5L: Albumina 20% 8g por litro retirado (6-8g/L)
8. Monitorizar: peso diário, Na+ sérico, creatinina, K+
9. Suspender IECA/BRA se PAS <90 ou creatinina ↑
10. Ascite refratária: TIPS ou transplante hepático`,
    guideline: "SBH / EASL / AASLD",
  },
  {
    id: "rx-fibrose-pulmonar-exacerbacao",
    title: "Fibrose Pulmonar — Exacerbação Aguda",
    type: "Prescrição de UTI",
    prescription: `1. O2 suplementar alto fluxo / CNAF (alvo SpO2 >88%)
2. TC tórax de alta resolução (vidro fosco bilateral novo)
3. Excluir: infecção (hemograma, PCT, culturas), TEP (AngioTC), IC (BNP, eco)
4. Metilprednisolona 1g EV 1x/dia por 3 dias → Prednisona 1mg/kg VO (desmame)
5. ATB empírico (enquanto exclui infecção): Ceftriaxona + Azitromicina
6. VNI: pode tentar (evitar IOT se possível — prognóstico reservado em VM)
7. Se IOT: VM protetora (VC 6mL/kg, PEEP cautelosa)
8. Anticoagulação: controversa (alguns estudos sugerem benefício)
9. Manter antifibrótico (Pirfenidona/Nintedanibe) se em uso
10. Prognóstico: mortalidade >50% na exacerbação aguda`,
    guideline: "SBPT / ATS / ERS",
  },
  {
    id: "rx-bronquiectasia-exacerbacao",
    title: "Bronquiectasia — Exacerbação Infecciosa",
    type: "Prescrição Hospitalar",
    prescription: `1. Escarro para cultura + antibiograma (ANTES do ATB)
2. ATB empírico (14 dias):
   Amoxicilina-Clavulanato 875mg VO 12/12h (leve)
   Ciprofloxacino 500mg VO 12/12h (se Pseudomonas prévia)
   Piperacilina-Tazobactam 4,5g EV 6/6h (grave/hospitalar)
3. Se Pseudomonas confirmada: Ceftazidima 2g EV 8/8h OU Meropenem 1g EV 8/8h
4. Broncodilatadores: Salbutamol NBZ 6/6h
5. SF hipertônico 3-7% NBZ 12/12h (fluidificação — antes da fisioterapia)
6. Fisioterapia respiratória (drenagem postural, flutter, PEP) — 2x/dia
7. O2 suplementar se SpO2 <92%
8. Hemograma, PCR, RX tórax`,
    notes: "Causas: pós-infecciosa (TB), fibrose cística, imunodeficiência, discinesia ciliar. Pseudomonas: colonizadora frequente — erradicação no 1º isolamento.",
    guideline: "SBPT / ERS / BTS",
  },
  {
    id: "rx-abscesso-pulmonar",
    title: "Abscesso Pulmonar",
    type: "Prescrição Hospitalar",
    prescription: `1. Clindamicina 600mg EV 6/6h (1ª escolha — cobre anaeróbios)
2. OU Amoxicilina-Clavulanato 1g EV 8/8h
3. OU Metronidazol 500mg EV 8/8h + Ceftriaxona 1g EV 12/12h
4. Duração: 4-6 semanas (ATB prolongado — mínimo até resolução radiológica)
5. Transição VO quando afebril e melhorando: Clindamicina 300mg VO 6/6h
6. Fisioterapia respiratória + drenagem postural
7. TC tórax (diagnóstico + avaliar tamanho e complicações)
8. Broncoscopia: se suspeita de corpo estranho ou neoplasia obstrutiva
9. Drenagem percutânea: se >6cm, refratário a ATB, ou empiema associado
10. Cirurgia: lobectomia se fístula broncopleural ou hemorragia`,
    notes: "Fatores de risco: aspiração (alcoolismo, disfagia, epilepsia), periodontite grave, obstrução brônquica. Agentes: anaeróbios (Peptostreptococcus, Bacteroides, Fusobacterium).",
    guideline: "SBPT / IDSA / ATS",
  },
  {
    id: "rx-hda-varicosa",
    title: "HDA Varicosa — Protocolo Completo",
    type: "Prescrição de Emergência",
    prescription: `1. Ressuscitação: 2 acessos 16G, SF/RL (alvo PAS 90-100, FC <100)
2. Terlipressina 2mg EV bolus → 1mg EV 4/4h por 5 dias
3. OU Octreotida 50mcg EV bolus → 50mcg/h EV por 5 dias
4. Ceftriaxona 1g EV 1x/dia por 7 dias (profilaxia PBE — OBRIGATÓRIA)
5. Omeprazol 80mg EV bolus → 8mg/h BIC (se úlcera associada)
6. Transfusão: Hb alvo 7-8g/dL (transfusão excessiva ↑pressão portal)
7. EDA em <12h: ligadura elástica (1ª escolha) ou escleroterapia
8. Se sangramento incontrolável: Balão de Sengstaken (ponte — máx 24h)
9. Se falha endoscópica: TIPS de resgate
10. Lactulose 30mL VO 8/8h (prevenir encefalopatia pelo sangue no TGI)`,
    notes: "Mortalidade do episódio: 15-20%. Ressangramento em 6 semanas: 60%. Profilaxia secundária: betabloqueador (Propranolol/Carvedilol) + ligadura elástica seriada.",
    guideline: "SBH / EASL / BAVENO VII",
  },
  {
    id: "rx-insuf-hepatica-aguda",
    title: "Insuficiência Hepática Aguda (IHA)",
    type: "Prescrição de UTI",
    prescription: `1. UTI + monitorização contínua (Glasgow, PA, glicemia)
2. NAC (N-Acetilcisteína): considerar independente da causa
   150mg/kg EV em 1h → 50mg/kg em 4h → 100mg/kg em 16h
3. Lactulose 30mL VO/SNG 6/6h (encefalopatia)
4. Manitol 20% 0,5-1g/kg EV se edema cerebral (PIC elevada)
5. Glicose 50% 50mL EV se hipoglicemia (monitorar glicemia 2/2h)
6. Vitamina K 10mg EV (se coagulopatia — pode não responder)
7. Omeprazol 40mg EV 12/12h (profilaxia HDA)
8. ATB profilático: considerar Ceftriaxona 1g EV/dia
9. Contraindicações: NÃO corrigir INR profilaticamente (mascara prognóstico)
10. Avaliar critérios para transplante hepático (King's College)
11. Contato URGENTE com centro de transplante`,
    notes: "Critérios King's College (paracetamol): pH <7,3 OU INR >6,5 + Cr >3,4 + EH grau 3-4. Não-paracetamol: INR >6,5 OU 3 de 5 critérios (idade, etiologia, duração icterícia, INR, BT).",
    guideline: "SBH / EASL / AASLD",
  },
  {
    id: "rx-pancreatite-necrosante",
    title: "Pancreatite Aguda Necrosante",
    type: "Prescrição de UTI",
    prescription: `1. Jejum + SNG se íleo (dieta enteral precoce por SNE se tolerada)
2. Ressuscitação volêmica agressiva: RL 250-500mL/h nas primeiras 12-24h
3. Analgesia: Fentanil 50-100mcg/h EV em BIC (evitar morfina — espasmo Oddi controverso)
4. Omeprazol 40mg EV 12/12h
5. ATB: NÃO usar profilático (sem evidência)
6. ATB terapêutico SE necrose infectada (>7-10 dias com febre/piora):
   Meropenem 1g EV 8/8h (boa penetração no pâncreas)
7. TC abdome com contraste (avaliar extensão da necrose — Balthazar)
8. Punção aspirativa guiada (se necrose + sinais de infecção)
9. Necrosectomia: step-up approach (drenagem percutânea → endoscópica → cirúrgica)
10. Nutrição enteral precoce via SNE (reduz mortalidade vs NPT)`,
    guideline: "SBG / ACG / AGA / IAP",
  },
  {
    id: "rx-cetoacidose-adulto",
    title: "Cetoacidose Diabética — Adulto",
    type: "Prescrição de Emergência",
    prescription: `1. SF 0,9% 1000mL EV em 1h (primeiro litro)
2. SF 0,9% 500mL/h nas próximas 4h (avaliar volemia)
3. Insulina Regular: 0,1UI/kg EV bolus → 0,1UI/kg/h em BIC
4. OU Insulina Regular 0,14UI/kg/h sem bolus
5. Quando glicemia <250: trocar para SG 5% + manter insulina (reduzir dose)
6. Potássio:
   K+ >5,2: NÃO repor (monitorar)
   K+ 3,3-5,2: KCl 20-40mEq em cada litro de SF
   K+ <3,3: REPOR K+ ANTES de iniciar insulina (40mEq/h em acesso central)
7. Bicarbonato: APENAS se pH <6,9 (NaHCO3 100mEq em 400mL em 2h)
8. Monitorizar: glicemia 1/1h, K+ 2/2h, gasometria 4/4h
9. Critérios de resolução: pH >7,3, HCO3 >18, AG <12, glicemia <200
10. Transição para insulina SC: sobrepor 2h antes de desligar BIC`,
    notes: "Meta: queda de glicemia 50-70mg/dL/h. Se não cair: dobrar taxa de insulina. Gap aniônico = Na - (Cl + HCO3). Normal: 10-12. CAD: >12.",
    guideline: "SBD / ADA / AACE",
  },
  {
    id: "rx-estado-hiperosmolar",
    title: "Estado Hiperglicêmico Hiperosmolar (EHH)",
    type: "Prescrição de Emergência",
    prescription: `1. SF 0,9% 1000-1500mL EV na 1ª hora
2. Avaliar Na+ corrigido: Na medido + 1,6 × [(glicemia - 100) / 100]
3. Se Na+ corrigido alto: SF 0,45% 250-500mL/h
4. Se Na+ corrigido normal/baixo: SF 0,9% 250-500mL/h
5. Insulina Regular: 0,1UI/kg/h EV em BIC (APÓS 1-2L de volume)
6. NÃO dar insulina se K+ <3,3 — repor K+ primeiro
7. Quando glicemia <300: SG 5% + manter insulina (reduzir para 0,02-0,05UI/kg/h)
8. Reposição de K+: mesmos critérios da CAD
9. Tromboprofilaxia: Enoxaparina 40mg SC 1x/dia (risco alto de TEV)
10. Monitorizar: glicemia 1/1h, Na+/K+ 2/2h, osmolaridade calculada
11. Osmolaridade alvo: queda <3mOsm/kg/h (risco de edema cerebral)`,
    notes: "Diferenças CAD vs EHH: EHH tem glicemia mais alta (>600), sem cetose significativa, osmolaridade >320. Mortalidade EHH: 5-20% (maior que CAD). Desidratação profunda (déficit 6-9L).",
    guideline: "SBD / ADA / AACE",
  },
  // === OTORRINOLARINGOLOGIA ===
  {
    id: "rx-abscesso-peritonsilar",
    title: "Abscesso Peritonsilar",
    type: "Prescrição Hospitalar",
    prescription: `1. Internação — dieta líquida fria
2. Amoxicilina-Clavulanato 1g EV 8/8h OU Clindamicina 600mg EV 8/8h
3. Drenagem por punção/incisão sob anestesia local (Lidocaína spray 10%)
4. Dexametasona 8mg EV dose única (reduz edema e dor)
5. Dipirona 1g EV 6/6h
6. Tramadol 50mg EV 8/8h se dor intensa
7. SF 0,9% 1000mL EV — hidratação
8. Hemograma, PCR
9. Avaliar TC cervical se extensão profunda ou complicação`,
    warnings: "Se trismo intenso: considerar drenagem sob sedação. Complicação: extensão para espaço parafaríngeo/mediastinite.",
    guideline: "ABR-ORL / AAO-HNS",
  },
  {
    id: "rx-epistaxe-refrataria",
    title: "Epistaxe Refratária",
    type: "Prescrição de Emergência",
    prescription: `Medidas iniciais:
1. Compressão digital bimanual por 15-20 min
2. Oximetazolina 0,05% tópico nasal (vasoconstricção)
3. Lidocaína 2% + Adrenalina tópico (algodão embebido)

Se não ceder:
4. Tamponamento anterior com gaze furacinada ou Merocel
5. Se tamponamento anterior falhar: tamponamento posterior com cateter de Foley (sonda 14-16Fr, insuflar 10-15mL)
6. Ácido tranexâmico 1g EV (adjuvante)
7. Hemograma + coagulograma + tipagem sanguínea
8. Reservar CH se Hb <7 ou instabilidade
9. Avaliar cauterização (anterior) ou embolização (posterior) se refratária
10. Internação + monitorização se tamponamento posterior`,
    warnings: "Tamponamento posterior: risco de reflexo vagal, dessaturação. Monitorar SpO2. Retirar em 48-72h. Antibioticoprofilaxia: Amoxicilina-Clavulanato 875mg 12/12h.",
    guideline: "ABR-ORL / AAO-HNS",
  },
  {
    id: "rx-labirintite",
    title: "Labirintite / Vertigem Periférica",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Dimenidrinato 50mg EV 8/8h (ou Meclizina 25mg VO 8/8h)
2. Ondansetrona 4mg EV 8/8h se vômitos
3. Betaistina 24mg VO 12/12h (manutenção)
4. SF 0,9% 500mL EV — hidratação
5. Repouso em ambiente tranquilo
6. Manobra de Epley se VPPB confirmada
7. Dexametasona 4mg EV (se neurite vestibular)
8. Diazepam 5mg VO SN (supressão vestibular aguda — máx 3 dias)`,
    notes: "Diferenciar central vs periférico: nistagmo vertical/multidirecional, déficit focal = central → TC/RNM urgente.",
    guideline: "ABR-ORL / AAN",
  },
  {
    id: "rx-otite-externa-maligna",
    title: "Otite Externa Maligna/Necrosante",
    type: "Prescrição Hospitalar",
    prescription: `1. Internação — avaliar UTI se sepse
2. Ciprofloxacino 400mg EV 12/12h (1ª escolha — anti-Pseudomonas)
3. OU Piperacilina-Tazobactam 4,5g EV 6/6h (se grave)
4. Curativos locais com aspiração do CAE
5. TC de ossos temporais + RNM (extensão do processo)
6. Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h
7. Controle glicêmico rigoroso (DM — fator de risco principal)
8. Duração: 6-8 semanas de antibioticoterapia
9. Avaliar desbridamento cirúrgico se refratária`,
    warnings: "Mortalidade 10-20% se complicada (osteomielite base do crânio, paralisia facial). Sempre investigar em idoso diabético com otalgia desproporcional.",
    guideline: "ABR-ORL / IDSA",
  },
  {
    id: "rx-angina-ludwig",
    title: "Angina de Ludwig",
    type: "Prescrição de Emergência",
    prescription: `1. Via aérea: avaliar IOT precoce ou via aérea cirúrgica se obstrução
2. Clindamicina 600mg EV 6/6h + Ceftriaxona 2g EV 1x/dia
3. OU Ampicilina-Sulbactam 3g EV 6/6h
4. Dexametasona 10mg EV 8/8h por 48h (reduzir edema)
5. SF 0,9% 1000mL EV — hidratação
6. TC cervical + tórax (avaliar extensão mediastinal)
7. Drenagem cirúrgica de urgência se flutuação ou piora
8. Dipirona 1g EV 6/6h
9. Monitorização contínua — risco de obstrução de VA`,
    warnings: "EMERGÊNCIA com risco de morte por obstrução de via aérea. Manter material de cricotireoidostomia à beira-leito.",
    guideline: "ABR-ORL / IDSA",
  },
  // === CIRURGIA ===
  {
    id: "rx-abdome-agudo",
    title: "Abdome Agudo — Avaliação Inicial",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Dieta ZERO
2. SF 0,9% 1000-2000mL EV — ressuscitação volêmica
3. SNG aberta (se vômitos/distensão importante)
4. SVD — controle de diurese
5. Dipirona 1g EV 6/6h (analgesia NÃO mascara exame — pode dar)
6. Tramadol 50-100mg EV 8/8h se dor moderada/intensa
7. Omeprazol 40mg EV 1x/dia
8. Exames: hemograma, PCR, amilase, lipase, lactato, gasometria, função renal, bilirrubinas
9. RX de abdome em 3 incidências (decúbito, ortostático, PA tórax)
10. TC de abdome com contraste (se disponível e estável)
11. Avaliação cirúrgica URGENTE se: peritonite, instabilidade, pneumoperitônio`,
    notes: "Abdome agudo: inflamatório (apendicite), obstrutivo (bridas), perfurativo (úlcera), vascular (isquemia mesentérica), hemorrágico (gravidez ectópica).",
    guideline: "CBC / EAST",
  },
  {
    id: "rx-apendicite",
    title: "Apendicite Aguda — Pré-operatório",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta ZERO
2. SF 0,9% 1000mL EV — hidratação
3. Ceftriaxona 2g EV + Metronidazol 500mg EV (profilaxia/tratamento)
4. Dipirona 1g EV 6/6h
5. Ondansetrona 4mg EV 8/8h se náusea
6. Omeprazol 40mg EV 1x/dia
7. Enoxaparina 40mg SC (profilaxia TVP — avaliar momento)
8. Reservar hemoderivados (tipagem)
9. Encaminhar para apendicectomia (laparoscópica preferencial)
10. Se abscesso periapendicular: drenagem percutânea + ATB → cirurgia eletiva em 6-8 semanas`,
    notes: "Alvarado score ≥7: alta probabilidade. TC abdome: sensibilidade >95%. Na dúvida em mulher jovem: USG pélvico para excluir patologia ginecológica.",
    guideline: "CBC / SAGES / WSES",
  },
  {
    id: "rx-colecistite-aguda",
    title: "Colecistite Aguda — Pré-operatório",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta ZERO
2. SF 0,9% 1000mL EV
3. Ceftriaxona 2g EV + Metronidazol 500mg EV 8/8h
4. OU Ampicilina-Sulbactam 3g EV 6/6h
5. Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h
6. Buscopan (Escopolamina) 20mg EV 6/6h
7. Ondansetrona 4mg EV se náusea
8. Omeprazol 40mg EV 1x/dia
9. Colecistectomia videolaparoscópica precoce (idealmente <72h — Tokyo Guidelines)
10. Se alto risco cirúrgico: colecistostomia percutânea`,
    notes: "Tokyo Guidelines 2018: Grau I (leve), II (moderado — >72h, leuco >18k, massa palpável), III (grave — disfunção orgânica). USG: parede espessada >4mm + Murphy sonográfico.",
    guideline: "CBC / WSES / Tokyo 2018",
  },
  {
    id: "rx-obstrucao-intestinal",
    title: "Obstrução Intestinal",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta ZERO
2. SNG aberta (descompressão — débito e aspecto)
3. SF 0,9% 1000-2000mL EV — reposição volêmica agressiva
4. SVD — controle de diurese
5. Correção de distúrbios eletrolíticos (K+, Na+, Mg2+)
6. Dipirona 1g EV 6/6h
7. Ondansetrona 4mg EV 8/8h
8. Omeprazol 40mg EV 1x/dia
9. Enoxaparina 40mg SC 1x/dia
10. RX abdome (3 incidências): níveis hidroaéreos
11. TC abdome com contraste (avaliar etiologia, sinais de estrangulamento)
12. Avaliação cirúrgica: URGENTE se estrangulamento, febre, leucocitose progressiva, peritonite`,
    notes: "Causas mais comuns: bridas/aderências (75%), hérnias encarceradas, neoplasia, volvo. Manejo conservador por 48-72h se obstrução parcial sem sinais de complicação.",
    guideline: "CBC / WSES / EAST",
  },
  {
    id: "rx-isquemia-mesenterica",
    title: "Isquemia Mesentérica Aguda",
    type: "Prescrição de Emergência",
    prescription: `1. SF 0,9% 1000-2000mL EV em bolus (choque distributivo)
2. SNG aberta
3. SVD — diurese alvo ≥0,5mL/kg/h
4. Antibioticoterapia ampla: Piperacilina-Tazobactam 4,5g EV 6/6h OU Meropenem 1g EV 8/8h
5. Heparina não fracionada: 80UI/kg bolus → 18UI/kg/h (se embólica/trombótica)
6. Analgesia: Morfina 2-4mg EV (dor desproporcional ao exame)
7. Lactato arterial + gasometria (acidose metabólica)
8. Angiotomografia de abdome URGENTE
9. Cirurgia de emergência: laparotomia exploradora + ressecção de segmento necrótico
10. UTI pós-operatório — second look em 24-48h`,
    warnings: "Mortalidade 60-80%. Dor desproporcional ao exame físico = RED FLAG. Leucocitose + lactato elevado + acidose = isquemia avançada.",
    guideline: "CBC / WSES / ESVS",
  },
  {
    id: "rx-hernia-encarcerada",
    title: "Hérnia Encarcerada / Estrangulada",
    type: "Prescrição de Emergência",
    prescription: `1. Dieta ZERO
2. SF 0,9% 1000mL EV
3. Tentativa de redução manual (Taxis) — APENAS se <6h e sem sinais de estrangulamento
4. Analgesia: Dipirona 1g EV + Tramadol 50mg EV + Trendelenburg
5. Se irredutível ou sinais de estrangulamento: cirurgia de EMERGÊNCIA
6. Ceftriaxona 2g EV + Metronidazol 500mg EV (se suspeita de necrose)
7. SNG se vômitos/distensão
8. Hemograma, lactato, gasometria
9. Omeprazol 40mg EV
10. Reservar hemoderivados`,
    warnings: "Sinais de estrangulamento: dor contínua, eritema na pele sobre a hérnia, febre, vômitos, irritação peritoneal. NÃO tentar Taxis se estrangulada.",
    guideline: "CBC / WSES",
  },
  {
    id: "rx-perfuracao-visceral",
    title: "Perfuração de Víscera Oca",
    type: "Prescrição de Emergência",
    prescription: `1. Dieta ZERO — SNG aberta
2. SF 0,9% 2000mL EV em bolus (ressuscitação)
3. Piperacilina-Tazobactam 4,5g EV 6/6h OU Meropenem 1g EV 8/8h + Metronidazol 500mg EV 8/8h
4. Noradrenalina se choque (0,1mcg/kg/min → titular)
5. Analgesia: Dipirona 1g EV + Morfina 2-4mg EV SN
6. SVD — diurese alvo ≥0,5mL/kg/h
7. Exames: hemograma, lactato, gasometria, coagulograma
8. RX tórax em ortostase: pneumoperitônio (sinal de Rigler)
9. TC abdome com contraste (líquido livre, ar livre)
10. CIRURGIA DE URGÊNCIA — laparotomia/laparoscopia`,
    notes: "Causas: úlcera péptica perfurada, diverticulite, neoplasia, corpo estranho. Pneumoperitônio = indicação cirúrgica na maioria dos casos.",
    guideline: "CBC / WSES",
  },
  // === UTI AVANÇADA ===
  {
    id: "rx-choque-cardiogenico",
    title: "Choque Cardiogênico",
    type: "Prescrição UTI",
    prescription: `1. Dobutamina 2,5-20mcg/kg/min em BIC (inotrópico de 1ª linha)
2. Noradrenalina 0,05-0,5mcg/kg/min em BIC (se PAS <90 apesar de Dobutamina)
3. SF 0,9% — ressuscitação CAUTELOSA (250mL em 10min, reavaliar)
4. Furosemida 40-80mg EV se congestão pulmonar
5. IOT + VM se IRpA/edema pulmonar refratário
6. PA invasiva + cateter de Swan-Ganz ou ecocardiograma seriado
7. SVD — diurese alvo ≥0,5mL/kg/h
8. Heparina profilática: Enoxaparina 40mg SC 1x/dia
9. ECG + troponina + BNP/NT-proBNP + ecocardiograma URGENTE
10. Avaliar: angioplastia primária (se IAM), BIA (balão intra-aórtico), dispositivo de assistência ventricular
11. Lactato seriado (alvo: queda >10% em 2h)`,
    warnings: "NÃO hidratar agressivamente como no choque séptico. Volume pode piorar edema pulmonar. Dobutamina sem vasopressor: pode causar hipotensão (vasodilatação).",
    guideline: "SBC / ESC / ACC/AHA / SCAI",
  },
  {
    id: "rx-ecmo-indicacao",
    title: "ECMO — Indicações e Manejo Inicial",
    type: "Prescrição UTI",
    prescription: `INDICAÇÕES ECMO-VV (Veno-Venosa — respiratória):
1. SDRA grave refratária: P/F <80 por >6h ou <50 por >3h
2. Hipercapnia refratária: pH <7,20 com PaCO2 >80
3. Falha de VM protetora + prona

INDICAÇÕES ECMO-VA (Veno-Arterial — cardíaca):
4. Choque cardiogênico refratário (IAM, miocardite fulminante)
5. PCR refratária (E-CPR) — protocolos específicos
6. Pós-cardiotomia com falência ventricular

MANEJO INICIAL:
7. Heparina não fracionada: bolus 50-100UI/kg → BIC (TTPa alvo 1,5-2x)
8. Fluxo inicial: 50-80mL/kg/min (ajustar por gasometria)
9. FiO2 da membrana: iniciar 100% → desmamar
10. Sweep gas: ajustar conforme PaCO2
11. Monitorização: gasometria pré e pós-membrana, lactato, fibrinogênio, plaquetas, hemólise
12. Hemograma + coagulograma 6/6h nas primeiras 24h
13. Ecocardiograma diário (ECMO-VA: monitorar distensão de VE)`,
    notes: "ECMO-VA: monitorar Harlequin Syndrome (hipóxia diferencial — SpO2 MSD). Complicações: sangramento, trombose, hemólise, infecção de cânula, isquemia de membro.",
    guideline: "ELSO / AMIB / SBCCV",
  },
  {
    id: "rx-ventilacao-protetora",
    title: "Ventilação Mecânica Protetora — SDRA",
    type: "Prescrição UTI",
    prescription: `Parâmetros iniciais:
1. Modo: VCV ou PCV
2. VC: 6mL/kg de peso PREDITO (♂: 50+0,91×[altura cm-152,4] | ♀: 45,5+0,91×[altura cm-152,4])
3. FR: 20-35/min (ajustar por pH/PaCO2)
4. PEEP: conforme tabela PEEP/FiO2 (ARDSNet)
5. FiO2: menor possível para SpO2 92-96%
6. Driving Pressure (Pplatô - PEEP) ≤15cmH2O
7. Pressão de Platô ≤30cmH2O

Adjuntos:
8. Posição PRONA se P/F <150 com PEEP ≥10 e FiO2 ≥0,6 (sessões ≥16h)
9. Bloqueador neuromuscular: Cisatracúrio 0,15mg/kg/h nas primeiras 48h se P/F <120
10. Hidrocortisona 50mg EV 6/6h se SDRA moderada-grave + choque
11. Balanço hídrico negativo (após estabilização hemodinâmica)
12. Sedação: RASS -4 a -5 durante prona / BNM`,
    notes: "Peso predito (não real!) para cálculo de VC. Hipercapnia permissiva é aceitável (pH >7,20). Driving pressure é o melhor preditor de mortalidade.",
    guideline: "ARDSNet / PROSEVA / AMIB",
  },
  {
    id: "rx-delirium-uti",
    title: "Delirium em UTI — Prevenção e Tratamento",
    type: "Prescrição UTI",
    prescription: `Prevenção (Bundle ABCDEF):
1. Avaliação diária de despertar (suspensão de sedação)
2. Teste de respiração espontânea diário
3. Escolha de sedação: Dexmedetomidina preferencial (vs Midazolam)
4. Monitorizar CAM-ICU 2x/dia
5. Mobilização precoce
6. Envolvimento familiar

Tratamento (se CAM-ICU positivo):
7. Haloperidol 2,5-5mg EV 8/8h (1ª linha — evitar se QTc >500ms)
8. OU Quetiapina 25-50mg VO 12/12h (se VO possível)
9. Dexmedetomidina 0,2-0,7mcg/kg/h em BIC (se agitação + necessidade de sedação)
10. Corrigir causas reversíveis: dor, retenção urinária, constipação, hipóxia, infecção
11. Evitar: Benzodiazepínicos (pioram delirium), contenção mecânica desnecessária`,
    notes: "Delirium em UTI: aumenta mortalidade em 3x, tempo de VM e internação. CAM-ICU: ferramenta padrão de screening.",
    guideline: "PADIS 2018 / AMIB",
  },
  {
    id: "rx-desmame-vm",
    title: "Desmame de Ventilação Mecânica",
    type: "Prescrição UTI",
    prescription: `Critérios para TRE (Teste de Respiração Espontânea):
1. Causa da IRpA resolvida/melhorando
2. FiO2 ≤0,4 com PEEP ≤8 e SpO2 ≥92%
3. Hemodinâmica estável (sem/baixa dose vasopressor)
4. Drive respiratório presente (sem BNM, sedação mínima)
5. Tosse eficaz, secreção controlada

TRE (30-120 min):
6. Tubo T com O2 suplementar OU PSV 5-7 + PEEP 5 + FiO2 ≤0,4
7. Monitorar: FR, SpO2, FC, PA, uso de musculatura acessória, sudorese

Sucesso do TRE → EXTUBAÇÃO:
8. Aspirar vias aéreas antes
9. Dexametasona 8mg EV 12/12h (4 doses) se alto risco de estridor pós-extubação
10. Manter VNI profilática se: >65 anos, ICC, DPOC, falha prévia
11. Cuff leak test antes da extubação (risco de edema laríngeo)

Falha do TRE (FR >35, SpO2 <90, FC >140, sudorese, agitação):
12. Retornar VM → reavaliar em 24h`,
    guideline: "AMIB / ATS/ACCP 2017",
  },
  {
    id: "rx-hipotermia-terapeutica",
    title: "Hipotermia Terapêutica Pós-PCR",
    type: "Prescrição UTI",
    prescription: `1. Indicação: RCE (retorno da circulação espontânea) após PCR em comatoso (GCS <8)
2. Temperatura alvo: 32-36°C por 24h (TTM2: alvo <37,8°C aceitável)
3. Indução: SF 0,9% gelado 30mL/kg EV + dispositivo de resfriamento
4. Manutenção: cobertor de resfriamento / cateter intravascular
5. Sedação: Midazolam + Fentanil em BIC (prevenir tremores)
6. Cisatracúrio 0,15mg/kg/h se tremores refratários
7. Monitorizar: temperatura esofágica/vesical contínua
8. Reaquecimento: 0,25-0,5°C/hora (LENTO — risco de hipercalemia e arritmias)
9. Exames: gasometria, lactato, troponina, eletrólitos seriados
10. Evitar hiperglicemia (insulina se >180mg/dL) e hipotensão (PAM ≥65)
11. EEG contínuo (prognóstico neurológico em 72h)`,
    notes: "TTM2 trial: não superioridade de 33°C vs 36°C, mas MANTER normotermia (<37,8°C) é consenso. Reaquecimento rápido = perigoso.",
    guideline: "AHA 2020 / ERC / ILCOR",
  },
  {
    id: "rx-bia",
    title: "Balão Intra-Aórtico (BIA) — Manejo",
    type: "Prescrição UTI",
    prescription: `INDICAÇÕES:
1. Choque cardiogênico pós-IAM (ponte para revascularização)
2. Complicações mecânicas do IAM (IM aguda, CIV)
3. Angina refratária pré-cirurgia
4. Desmame difícil de CEC

MANEJO:
5. Posição: ponta na aorta descendente (abaixo da subclávia esquerda)
6. RX tórax confirmatório (ponta 2-3cm abaixo do arco aórtico)
7. Timing: inflação na dicrótica (diástole), deflação antes da sístole
8. Relação 1:1 (assist a cada batimento)
9. Heparina não fracionada: TTPa alvo 1,5-2,5x
10. Monitorizar: pulso distal do membro canulado, plaquetas diárias
11. Desmame: reduzir relação 1:1 → 1:2 → 1:3 → retirar (se PAM estável e lactato normal)`,
    warnings: "Contraindicações: insuficiência aórtica moderada/grave, dissecção de aorta, DAP. Complicação: isquemia de membro (5-10%).",
    guideline: "SBC / ACC/AHA",
  },
  {
    id: "rx-nutricao-uti",
    title: "Nutrição em UTI — Terapia Nutricional",
    type: "Prescrição UTI",
    prescription: `Enteral (1ª escolha — iniciar em 24-48h):
1. Dieta enteral polimérica 1.0-1.5kcal/mL via SNG/SNE
2. Iniciar: 20-25mL/h → progredir 10-20mL/h a cada 6h
3. Alvo calórico: 25-30kcal/kg/dia (peso ajustado se obeso)
4. Alvo proteico: 1,2-2,0g/kg/dia (mais alto em queimados/trauma)
5. Pausa de 1h antes de procedimentos/prona
6. Verificar resíduo gástrico se distensão (>500mL: suspender, procinético)
7. Metoclopramida 10mg EV 8/8h (se intolerância)
8. Cabeceira ≥30° durante infusão

Parenteral (se contraindicação enteral):
9. Iniciar apenas após D7 se EN impossível (paciente previamente nutrido)
10. Iniciar precoce se desnutrido grave
11. Glicemia alvo: 140-180mg/dL (protocolo de insulina)`,
    guideline: "ESPEN / ASPEN / BRASPEN",
  },
  // === HEMATOLOGIA AVANÇADA ===
  {
    id: "rx-mat-ptt",
    title: "Microangiopatia Trombótica — PTT",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Plasmaférese de URGÊNCIA (1-1,5 volemias/sessão) — diária até normalização
2. Corticoide: Metilprednisolona 1g EV por 3 dias → Prednisona 1mg/kg/dia
3. PFC 15-20mL/kg EV enquanto aguarda plasmaférese (reposição ADAMTS13)
4. Ácido fólico 5mg VO 1x/dia (suporte eritropoiético)
5. NÃO TRANSFUNDIR PLAQUETAS (piora microtrombose — exceção: sangramento ameaçador de vida)
6. Caplacizumab 11mg SC 1x/dia (anti-vWF — se disponível, reduz tempo de resolução)
7. Rituximab 375mg/m² EV semanal (PTT refratária ou recidivante)
8. Exames: hemograma, reticulócitos, LDH, haptoglobina, bilirrubina indireta, esquizócitos, ADAMTS13
9. Monitorização: plaquetas diárias, LDH diário (marcador de resposta)`,
    notes: "Pêntade clássica: anemia hemolítica microangiopática + trombocitopenia + IRA + febre + alteração neurológica. PLASCORE ≥5: alta suspeita. ADAMTS13 <10%: confirma PTT.",
    warnings: "NÃO dar plaquetas na PTT. NÃO atrasar plasmaférese. Mortalidade sem tratamento: >90%. Com plasmaférese: <20%.",
    guideline: "ISTH / ASH / BSH",
  },
  {
    id: "rx-shu-atipica",
    title: "SHU Atípica",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Eculizumab 900mg EV semanal por 4 semanas → 1200mg na semana 5 → 1200mg a cada 2 semanas
2. Vacinação anti-meningocócica (ACWY + B) ANTES ou junto ao início (risco de Neisseria)
3. Penicilina V 500mg VO 12/12h (profilaxia meningocócica até 2 semanas pós-vacina)
4. Suporte renal: hemodiálise se IRA oligúrica/anúrica ou hipercalemia refratária
5. Transfusão de CH se Hb <7 (ou sintomática)
6. NÃO TRANSFUNDIR PLAQUETAS (mesma lógica da PTT)
7. Exames: complemento (C3, C4, CH50), fator H, fator I, anticorpos anti-fator H
8. Monitorização: creatinina, plaquetas, LDH, haptoglobina diários`,
    notes: "Diferenciar de SHU típica (E. coli STEC — suporte apenas, sem Eculizumab). SHU atípica: complemento desregulado. Resposta ao Eculizumab: melhora de plaquetas em 24-48h.",
    guideline: "KDIGO / ASH / SBN",
  },
  {
    id: "rx-hemofilia-sangramento",
    title: "Hemofilia — Sangramento Agudo",
    type: "Prescrição de Emergência",
    prescription: `Hemofilia A (deficiência de Fator VIII):
1. Fator VIII concentrado: dose = Peso(kg) × Aumento desejado(%) × 0,5
   - Sangramento leve (articular): alvo 30-50% → manter 24-48h
   - Sangramento grave (SNC, retroperitônio): alvo 80-100% → manter 7-14 dias
2. Repetir a cada 8-12h (meia-vida FVIII: ~12h)

Hemofilia B (deficiência de Fator IX):
3. Fator IX concentrado: dose = Peso(kg) × Aumento desejado(%) × 1,0
4. Repetir a cada 18-24h (meia-vida FIX: ~24h)

Adjuntos:
5. Ácido tranexâmico 1g EV 8/8h (sangramento mucoso)
6. Desmopressina (DDAVP) 0,3mcg/kg EV em 30min (Hemofilia A leve)
7. NÃO usar AAS ou AINEs (exceto COX-2 seletivos com cautela)
8. Hemograma + TTPa (monitorar — TP normal na hemofilia)
9. Se inibidor: Fator VII ativado recombinante (NovoSeven) 90mcg/kg 2/2h OU CCPA (FEIBA) 50-100UI/kg`,
    warnings: "NUNCA puncionar articulação sem reposição de fator ANTES. NÃO usar IM. NÃO atrasar fator por exames. Acesso venoso: evitar punções múltiplas.",
    guideline: "WFH / SBH / ISTH",
  },
  {
    id: "rx-civd-avancada",
    title: "CIVD — Manejo Avançado",
    type: "Prescrição UTI",
    prescription: `1. TRATAR A CAUSA BASE (sepse, trauma, neoplasia, obstétrica)
2. Se sangramento ativo:
   - PFC 15-20mL/kg EV (repor fatores)
   - Crioprecipitado 10U se fibrinogênio <1,0-1,5g/L
   - Plaquetas se <50.000 + sangramento (ou <20.000 mesmo sem sangramento)
3. Se trombose predominante (CIVD crônica/compensada):
   - Heparina não fracionada 500UI/h em BIC (dose baixa, sem bolus)
   - OU Enoxaparina 40mg SC 12/12h
4. Ácido tranexâmico: CONTRAINDICADO na CIVD (piora trombose microvascular)
5. Monitorização: TP, TTPa, fibrinogênio, D-dímero, plaquetas — 6/6h
6. Score ISTH para CIVD: ≥5 = CIVD manifesta`,
    warnings: "NÃO usar antifibrinolíticos (ácido tranexâmico) na CIVD manifesta. Tratar causa é o MAIS IMPORTANTE.",
    guideline: "ISTH / BSH / SBH",
  },
  {
    id: "rx-trombocitopenia-heparina",
    title: "Trombocitopenia Induzida por Heparina (HIT)",
    type: "Prescrição Hospitalar",
    prescription: `1. SUSPENDER TODA heparina (HNF e HBPM) IMEDIATAMENTE
2. Iniciar anticoagulante alternativo:
   - Argatroban 2mcg/kg/min EV em BIC (ajustar por TTPa 1,5-3x) — preferido se disfunção hepática leve
   - OU Fondaparinux 7,5mg SC 1x/dia (off-label mas usado)
3. NÃO usar Varfarina até plaquetas >150.000 (risco de necrose cutânea / gangrena venosa)
4. Após recuperação plaquetária: transição para Varfarina com overlap de 5 dias
5. Dosar anticorpos anti-PF4/heparina (ELISA) + teste funcional (SRA)
6. Monitorar: plaquetas diárias
7. Score 4T para probabilidade pré-teste`,
    notes: "HIT tipo II: queda >50% nas plaquetas entre D5-D14 da heparina (ou D1 se exposição prévia <100 dias). Risco trombótico: 30-50%. Mortalidade sem tratamento: 20%.",
    guideline: "ASH / ISTH / SBH",
  },
  // === CIRURGIA VASCULAR ===
  {
    id: "rx-aneurisma-aorta-roto",
    title: "Aneurisma de Aorta Roto — Emergência",
    type: "Prescrição de Emergência",
    prescription: `1. CIRURGIA DE EMERGÊNCIA — NÃO atrasar por exames
2. 2 acessos venosos calibrosos (14-16G) + acesso central
3. SF 0,9% / Ringer Lactato em bolus — HIPOTENSÃO PERMISSIVA (PAS 80-90 até sala cirúrgica)
4. Ativar protocolo de transfusão maciça: CH:PFC:Plaq 1:1:1
5. Ácido tranexâmico 1g EV em 10min
6. Tipagem + reservar ≥6U de CH
7. Noradrenalina SN (evitar PAM alta — aumenta sangramento)
8. IOT + VM se instabilidade ou rebaixamento
9. PA invasiva + SVD
10. Angiotomografia APENAS se hemodinâmicamente estável (dúvida diagnóstica)
11. Avaliar: reparo endovascular (EVAR) vs cirurgia aberta`,
    warnings: "Tríade clássica: dor abdominal/lombar + massa pulsátil + hipotensão. Mortalidade pré-hospitalar: 50%. NÃO elevar PA. NÃO atrasar por exames.",
    guideline: "SVB / SBCCV / ESVS / SVS",
  },
  {
    id: "rx-isquemia-aguda-membro",
    title: "Isquemia Aguda de Membro",
    type: "Prescrição de Emergência",
    prescription: `1. Heparina não fracionada: 80UI/kg EV bolus → 18UI/kg/h em BIC (TTPa alvo 2-2,5x)
2. Analgesia: Morfina 2-4mg EV (dor intensa)
3. SF 0,9% 500mL EV — hidratação (evitar hipovolemia)
4. Manter membro em posição neutra (NÃO elevar — piora isquemia)
5. NÃO aquecer membro (aumenta demanda metabólica)
6. Classificação de Rutherford:
   I (viável): anticoagulação + avaliação eletiva
   IIa (marginal): revascularização urgente
   IIb (ameaçada): revascularização IMEDIATA
   III (irreversível): amputação
7. Embolectomia/trombectomia com cateter de Fogarty (se embólica)
8. OU trombólise intra-arterial: Alteplase 0,5-1mg/h via cateter (se trombótica e IIa)
9. Fasciotomia profilática se >6h de isquemia (síndrome compartimental pós-reperfusão)
10. Pós-reperfusão: monitorar K+, CK, mioglobina, função renal (rabdomiólise)`,
    notes: "6 Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia. Janela: 6h para revascularização (golden time).",
    guideline: "SVB / ESVS / SVS / ACC/AHA",
  },
  {
    id: "rx-disseccao-aortica",
    title: "Dissecção Aguda de Aorta",
    type: "Prescrição de Emergência",
    prescription: `1. PA alvo: PAS 100-120mmHg E FC <60bpm (reduzir dP/dt)
2. Esmolol 500mcg/kg bolus → 50-200mcg/kg/min em BIC (1ª escolha — betabloqueador EV)
3. OU Labetalol 20mg EV bolus → 1-2mg/min em BIC
4. Se PA não controlada: Nitroprussiato 0,25-10mcg/kg/min (APENAS APÓS betabloqueador)
5. Morfina 2-4mg EV para dor (reduz descarga simpática)
6. Angiotomografia de aorta (exame de escolha)
7. 2 acessos calibrosos + tipagem + reservar CH
8. PA invasiva (artéria radial DIREITA — avaliar discrepância de PA entre membros)

Stanford A (aorta ascendente): CIRURGIA DE EMERGÊNCIA
Stanford B (descendente): manejo clínico (exceto se complicação)
   Complicações Stanford B: rotura, malperfusão, dor refratária → TEVAR/cirurgia`,
    warnings: "NÃO usar Nitroprussiato ISOLADO (taquicardia reflexa aumenta dP/dt e piora dissecção). SEMPRE betabloqueador PRIMEIRO.",
    guideline: "SBC / SBCCV / ESC / ACC/AHA",
  },
  {
    id: "rx-tvp-extensa",
    title: "TVP Extensa — Iliofemoral / Flegmasia",
    type: "Prescrição Hospitalar",
    prescription: `TVP iliofemoral:
1. Heparina não fracionada: 80UI/kg bolus → 18UI/kg/h (TTPa 1,5-2,5x)
   OU Enoxaparina 1mg/kg SC 12/12h
2. Elevação do membro + compressão elástica (após anticoagulação plena)
3. Analgesia: Dipirona 1g EV 6/6h + AINEs se não contraindicado
4. Transição para DOAC: Rivaroxabana 15mg 12/12h por 21 dias → 20mg 1x/dia
5. Avaliar trombólise dirigida por cateter (CDT) se TVP iliofemoral + <14 dias + baixo risco de sangramento

Flegmasia Cerulea Dolens (emergência):
6. Heparinização plena IMEDIATA
7. Trombólise sistêmica ou CDT
8. Fasciotomia se síndrome compartimental
9. Amputação se irreversível (necrose extensa)
10. Elevação do membro + SF 0,9% 1000mL EV`,
    warnings: "Flegmasia cerulea: membro edemaciado, cianótico, sem pulso. Evolução para gangrena venosa. Mortalidade 25%. Amputação 25%.",
    guideline: "SBC / CHEST / ESVS / ISTH",
  },
  // === SEDAÇÃO/ANALGESIA UTI AVANÇADA ===
  {
    id: "rx-sedacao-dexmedetomidina",
    title: "Sedação com Dexmedetomidina — UTI",
    type: "Prescrição UTI",
    prescription: `DILUIÇÃO:
Dexmedetomidina 200mcg (2mL) + SF 0,9% 48mL = 50mL
Concentração: 4 mcg/mL

DOSE:
Ataque (opcional): 1mcg/kg EV em 10 min (EVITAR se instável — bradicardia/hipotensão)
Manutenção: 0,2-1,4 mcg/kg/h em BIC

Exemplo (70kg, 0,7mcg/kg/h):
0,7 × 70 / 4 = 12,25 mL/h

INDICAÇÕES:
1. Sedação leve a moderada (RASS 0 a -3)
2. Desmame de VM (sedação cooperativa)
3. Delirium em UTI (superior a benzodiazepínicos)
4. Pós-operatório cardíaco
5. Pode ser usada em paciente NÃO intubado (diferencial)`,
    warnings: "Bradicardia e hipotensão: efeitos mais comuns. Evitar bolus em idosos/instáveis. NÃO adequada para sedação PROFUNDA (RASS -4/-5).",
    notes: "Agonista alfa-2: sedação sem depressão respiratória significativa. Reduz incidência de delirium vs Midazolam (estudo MENDS/SEDCOM).",
    guideline: "PADIS 2018 / AMIB",
  },
  {
    id: "rx-analgesia-multimodal-uti",
    title: "Analgesia Multimodal em UTI",
    type: "Prescrição UTI",
    prescription: `Protocolo Analgesia-First (analgosedação):
1. Fentanil 50-200mcg/h em BIC (titulação por BPS/CPOT)
   OU Remifentanil 0,05-0,15mcg/kg/min (ultra-curta ação — ideal para despertar diário)
2. Dipirona 1g EV 6/6h (adjuvante — reduz opioide)
3. Paracetamol 1g EV 6/6h (adjuvante)
4. Cetamina subdissociativa: 0,1-0,3mg/kg/h em BIC (poupa opioide, broncodilatador)
5. Lidocaína EV: 1-2mg/kg/h em BIC (dor abdominal/queimados — poupa opioide)
6. Gabapentina 300mg VO 8/8h (via SNE — dor neuropática)
7. NÃO usar AINEs de rotina em UTI (risco renal + sangramento)

Avaliação:
8. BPS (intubado) ou CPOT: avaliar 4/4h e antes/após intervenção
9. BPS alvo: 3-4 (sem dor) | CPOT alvo: 0-2
10. Sempre tratar dor ANTES de sedar`,
    notes: "Analgosedação (analgesia-first): reduz tempo de VM, UTI e delirium vs sedação-first. Remifentanil: meia-vida 3-4min (ideal para despertar diário).",
    guideline: "PADIS 2018 / AMIB / SBA",
  },
  {
    id: "rx-sedacao-profunda-uti",
    title: "Sedação Profunda em UTI (RASS -4/-5)",
    type: "Prescrição UTI",
    prescription: `INDICAÇÕES: SDRA grave + prona, status epiléptico, hipertensão intracraniana, BNM, tétano

Opção 1 — Midazolam + Fentanil:
1. Midazolam: 0,05-0,2mg/kg/h em BIC (5-15mg/h em 70kg)
2. Fentanil: 1-3mcg/kg/h em BIC (50-200mcg/h em 70kg)

Opção 2 — Propofol + Fentanil (preferido se curta duração):
3. Propofol: 1-4mg/kg/h em BIC (NÃO ultrapassar 5mg/kg/h — PRIS)
4. Fentanil: 1-3mcg/kg/h em BIC

Opção 3 — Cetamina (broncoespasmo, choque):
5. Cetamina: 0,5-2mg/kg/h em BIC (preserva drive respiratório e PA)

Monitorização:
6. RASS a cada 4h (alvo -4 a -5)
7. BIS (se disponível): alvo 40-60
8. Despertar diário: suspender sedação 1x/dia (exceto se contraindicação)
9. Triglicerídeos a cada 48h se Propofol (PRIS: acidose + rabdomiólise + bradicardia)`,
    warnings: "PRIS (Síndrome da Infusão de Propofol): >5mg/kg/h por >48h. Monitorar: lactato, CK, triglicerídeos, ECG. Suspender imediatamente se suspeita.",
    guideline: "PADIS 2018 / AMIB / SBA",
  },
  {
    id: "rx-protocolo-despertar-diario",
    title: "Protocolo de Despertar Diário — SAT/SBT",
    type: "Prescrição UTI",
    prescription: `CRITÉRIOS DE SEGURANÇA (para suspender sedação):
1. Sem BNM ativo
2. Sem convulsão ativa nas últimas 24h
3. Sem HIC monitorada com PIC >20
4. Sem isquemia miocárdica ativa
5. FiO2 ≤0,6 e PEEP ≤10

PROTOCOLO SAT (Spontaneous Awakening Trial):
6. Suspender infusão de sedativo (manter analgesia em dose baixa)
7. Avaliar em 30-60 min:
   Sucesso: abre olhos, segue comandos, RASS ≥ -1
   Falha: agitação perigosa, SpO2 <88%, FR >35, arritmia — reiniciar em 50% da dose

APÓS SAT BEM-SUCEDIDO → SBT (TRE):
8. PSV 5-7 + PEEP 5 OU Tubo T por 30-120 min
9. Sucesso SBT → EXTUBAR
10. SAT + SBT coordenados: redução de 30% na mortalidade em 1 ano (estudo ABC)`,
    notes: "Bundle ABCDEF: A (avaliar dor), B (SAT+SBT), C (escolha de sedação), D (delirium), E (exercício/mobilidade), F (família). Implementação conjunta reduz mortalidade e delirium.",
    guideline: "PADIS 2018 / ABC Trial / AMIB",
  },
  {
    id: "rx-bloqueio-neuromuscular-uti",
    title: "Bloqueio Neuromuscular Contínuo em UTI",
    type: "Prescrição UTI",
    prescription: `INDICAÇÕES RESTRITAS:
1. SDRA grave com P/F <120 + driving pressure >15 + assincronias
2. Hipotermia terapêutica (controle de tremores)
3. Hipertensão intracraniana refratária
4. Tétano grave

PROTOCOLO:
5. Cisatracúrio 0,15mg/kg bolus → 0,06-0,18mg/kg/h em BIC (1ª escolha)
6. OU Pancurônio 0,1mg/kg bolus → 0,02-0,03mg/kg/h (mais barato, mais efeitos CV)
7. OBRIGATÓRIO: sedação profunda RASS -5 (ANTES de iniciar BNM)
8. Monitorar TOF (train-of-four): alvo 1-2/4 twitches
9. Pausar BNM 1x/dia para reavaliar necessidade
10. Tempo máximo recomendado: 48h (se possível)
11. Prevenir: úlcera de córnea (lubrificante ocular), TVP (compressão pneumática)
12. Cuidados: posicionamento articular, fisioterapia passiva`,
    warnings: "Miopatia do doente crítico: risco com BNM >48h + corticoide. Awareness intraoperatória: SEMPRE manter sedação profunda + BIS se disponível.",
    guideline: "PADIS 2018 / AMIB / ACURASYS",
  },
  // === NEFROLOGIA AVANÇADA ===
  {
    id: "rx-dialise-peritoneal",
    title: "Diálise Peritoneal — Indicação e Manejo",
    type: "Prescrição Hospitalar / UTI",
    prescription: `INDICAÇÕES (mesmas da hemodiálise):
1. IRA com: hipercalemia refratária, acidose grave, sobrecarga hídrica, uremia sintomática, intoxicação dialítica

PRESCRIÇÃO CAPD (Diálise Peritoneal Ambulatorial Contínua):
2. Solução de diálise peritoneal a 1,5% / 2,5% / 4,25% (conforme ultrafiltração desejada)
3. Volume de infusão: 2L por troca (30-40mL/kg)
4. Tempo de permanência: 4-6h (diurnas) / 8-10h (noturna)
5. Número de trocas: 4/dia (CAPD) ou automatizada (APD)

DP AGUDA (UTI):
6. Banhos de 1-2L a cada 1-2h (ciclos curtos, alta remoção)
7. Solução a 4,25% se ultrafiltração urgente
8. Heparina 500-1000UI/L de solução (prevenir obstrução do cateter)
9. Monitorar: peso, balanço de UF, glicemia (absorção de glicose), proteínas (perda peritoneal)
10. Sinais de peritonite: líquido turvo, dor abdominal, febre → coletar cultura + celularidade do efluente`,
    notes: "Peritonite em DP: leucócitos >100/mm³ com >50% PMN no efluente. ATB intraperitoneal: Cefazolina 1g + Ceftazidima 1g no efluente (empírico). Resposta em 48h.",
    guideline: "ISPD / SBN / KDIGO",
  },
  {
    id: "rx-nefrite-lupica",
    title: "Nefrite Lúpica — Tratamento",
    type: "Prescrição Hospitalar",
    prescription: `Indução (Classe III/IV — proliferativa):
1. Metilprednisolona 500mg-1g EV por 3 dias (pulsoterapia)
2. → Prednisona 1mg/kg/dia VO (máx 60mg) → desmame em 6-12 meses
3. Micofenolato de Mofetila 1g VO 12/12h (1ª escolha — Euro-Lupus) OU
4. Ciclofosfamida EV: 500mg quinzenal por 3 meses (Euro-Lupus) OU mensal por 6 meses (NIH)
5. Hidroxicloroquina 400mg VO 1x/dia (manter SEMPRE — nefroprotetor)

Classe V (membranosa pura):
6. Micofenolato 1g VO 12/12h + Prednisona 0,5mg/kg/dia

Manutenção (após 3-6 meses de indução):
7. Micofenolato 1g VO 12/12h (preferido) OU Azatioprina 2mg/kg/dia
8. Prednisona ≤7,5mg/dia (alvo)
9. IECA/BRA: controle de proteinúria (alvo <0,5g/dia)
10. Monitorar: creatinina, proteinúria, complemento (C3/C4), anti-dsDNA — mensal na indução`,
    warnings: "Rastrear TB latente ANTES de imunossupressão. Profilaxia pneumocistose: SMX-TMP se alto risco. Vacinar ANTES de iniciar. Monitorar hemograma semanal no início.",
    guideline: "KDIGO / ACR / EULAR / SBR / SBN",
  },
  {
    id: "rx-sindrome-hepatorrenal",
    title: "Síndrome Hepatorrenal — Tipo 1",
    type: "Prescrição UTI / Hospitalar",
    prescription: `1. Albumina 20%: 1g/kg/dia EV por 2 dias → 20-40g/dia EV
2. Terlipressina 0,5-1mg EV 4/4h (titular até 2mg 4/4h — máx 12mg/dia)
   OU Noradrenalina 0,5-3mg/h EV em BIC (se Terlipressina indisponível)
3. Octreotida 100mcg SC 8/8h + Midodrina 7,5-12,5mg VO 8/8h (alternativa menos eficaz)
4. Suspender diuréticos
5. Lactulose 15-30mL VO 8/8h (se encefalopatia hepática)
6. Monitorar: creatinina, Na+, diurese, PA — 12/12h
7. Alvo: queda de creatinina ≥25% em 48h
8. Se sem resposta em 14 dias: suspender Terlipressina
9. Hemodiálise: considerar como ponte para transplante hepático
10. TIPS: avaliar se elegível (contraindicação: encefalopatia grave, Child >13)`,
    notes: "SHR tipo 1: IRA rapidamente progressiva (creatinina dobra em <2 semanas). Mortalidade sem tratamento: >90% em 2 semanas. Transplante hepático é o tratamento definitivo.",
    guideline: "EASL / AASLD / SBH / ICA-AKI",
  },
  {
    id: "rx-glomerulonefrite-crescentica",
    title: "Glomerulonefrite Rapidamente Progressiva (Crescêntica)",
    type: "Prescrição Hospitalar / UTI",
    prescription: `Indução (urgência nefrológica):
1. Metilprednisolona 500mg-1g EV por 3 dias consecutivos
2. → Prednisona 1mg/kg/dia VO (máx 80mg) → desmame lento
3. Ciclofosfamida 2mg/kg/dia VO (ou pulso EV 15mg/kg a cada 2 semanas — PEXIVAS)
4. OU Rituximab 375mg/m² semanal por 4 semanas (se anti-GBM negativo / vasculite ANCA)

Se Doença anti-GBM (Goodpasture):
5. Plasmaférese DIÁRIA por 14 dias (ou até anti-GBM negativo)
6. Volume: 60mL/kg/sessão, reposição com albumina 5%

Se Vasculite ANCA (GPA/MPA):
7. Plasmaférese se creatinina >5,7 ou hemorragia alveolar (controverso pós-PEXIVAS)

Suporte:
8. Hemodiálise se IRA grave (hipercalemia, acidose, anúria)
9. Biópsia renal URGENTE (confirmar diagnóstico + % de crescentes)
10. Profilaxia: SMX-TMP, antifúngico, proteção gástrica`,
    guideline: "KDIGO / ACR / EUVAS / SBN",
  },
  {
    id: "rx-ira-contraste",
    title: "Nefropatia por Contraste — Prevenção e Manejo",
    type: "Prescrição Hospitalar",
    prescription: `Prevenção (em pacientes de risco: DRC, DM, IC, idoso, desidratação):
1. Hidratação pré-contraste: SF 0,9% 1mL/kg/h por 6-12h antes E 6-12h após
2. OU NaHCO3 150mEq em 850mL SG5% — 3mL/kg/h por 1h antes → 1mL/kg/h por 6h após
3. Usar menor volume de contraste possível
4. Preferir contraste iso-osmolar (Iodixanol)
5. Suspender Metformina 48h antes (risco de acidose lática se IRA)
6. Evitar AINEs e diuréticos 24-48h antes
7. N-acetilcisteína 1200mg VO 12/12h no dia anterior e no dia do exame (controverso mas seguro)

Se nefropatia estabelecida:
8. Hidratação agressiva: SF 0,9% 1-1,5mL/kg/h
9. Monitorar creatinina 24h, 48h e 72h pós-contraste
10. Hemodiálise profilática NÃO é recomendada`,
    notes: "Definição: aumento de creatinina ≥0,5mg/dL ou ≥25% em 48-72h após contraste. Pico: 3-5 dias. Recuperação habitual em 7-14 dias. Risco aumenta se DRC com TFG <30.",
    guideline: "KDIGO / SBN / ACR / ESUR",
  },
  // === PNEUMOLOGIA AVANÇADA ===
  {
    id: "rx-pneumotorax-espontaneo",
    title: "Pneumotórax Espontâneo Primário",
    type: "Prescrição no Pronto Socorro",
    prescription: `Pequeno (<2cm na linha hemiclavicular ou <3cm no ápice):
1. Observação por 4-6h com RX de controle
2. Se estável e assintomático: alta com orientação + RX em 24-48h
3. O2 suplementar 10L/min por máscara (acelera reabsorção — 4x)

Moderado/Grande (>2cm ou sintomático):
4. Aspiração simples com jelco 14-16G no 2° EIC linha hemiclavicular
5. Se sucesso (pulmão expandiu): observação 6h + RX → alta
6. Se falha: drenagem torácica em selo d'água (5° EIC, LAA — dreno 20-24Fr)

Indicações cirúrgicas (VATS):
7. Recidiva ipsilateral (2° episódio)
8. Bilateral simultâneo
9. Pneumotórax persistente (fuga aérea >5-7 dias)
10. Hemopneumotórax
11. Profissão de risco (piloto, mergulhador)`,
    notes: "Perfil típico: homem jovem, magro, alto, fumante. Recidiva: 30% no 1° episódio, 50% após 2°. Cessação tabágica reduz recidiva.",
    guideline: "SBPT / BTS / ACCP",
  },
  {
    id: "rx-hemotorax",
    title: "Hemotórax",
    type: "Prescrição de Emergência",
    prescription: `1. 2 acessos venosos calibrosos (14-16G)
2. SF 0,9% / Ringer Lactato 1000-2000mL EV em bolus
3. Tipagem + reservar CH (mínimo 4U)
4. Drenagem torácica: tubo 28-36Fr no 5° EIC, LAA (selo d'água)
5. Mensurar débito inicial e horário
6. Autotransfusão se sistema disponível (sangue do dreno)
7. Ácido tranexâmico 1g EV em 10min (se trauma <3h)
8. Monitorização: PA, FC, SpO2, débito do dreno

INDICAÇÃO DE TORACOTOMIA DE URGÊNCIA:
9. Débito inicial >1500mL OU
10. Débito >200mL/h por 2-4h consecutivas OU
11. Instabilidade hemodinâmica apesar de ressuscitação

Hemotórax retido (>500mL após 72h):
12. VATS precoce (3-7 dias) — antes de organização/fibrotórax`,
    warnings: "Hemotórax maciço: choque classe III/IV. Transfusão maciça + cirurgia. NÃO clampar dreno para 'avaliar' — risco de tamponamento cardíaco se hemopericárdio associado.",
    guideline: "ATLS / SBAIT / EAST / WSES",
  },
  {
    id: "rx-derrame-pleural",
    title: "Derrame Pleural — Investigação e Manejo",
    type: "Prescrição Hospitalar",
    prescription: `1. RX tórax PA e perfil (confirmar derrame)
2. USG de tórax point-of-care (marca ponto de punção, avalia septações)
3. Toracocentese diagnóstica + terapêutica (se dispneia):
   Coletar: citologia total e diferencial, proteínas, LDH, glicose, pH, Gram, cultura, ADA, citologia oncótica

4. Critérios de Light (exsudato se qualquer um +):
   Proteína líquido/soro >0,5
   LDH líquido/soro >0,6
   LDH líquido >2/3 do limite normal sérico

5. Se empiema (pH <7,2, glicose <40, Gram/cultura +, purulento):
   Drenagem torácica + ATB: Ceftriaxona 2g EV + Metronidazol 500mg EV 8/8h
   Fibrinolíticos intrapleurais: Alteplase 10mg + DNase 5mg 12/12h (MIST-2)

6. Se transudato: tratar causa (IC, cirrose, nefrose)
7. Se neoplásico recorrente: pleurodese com talco (via VATS ou dreno)
8. Não drenar >1500mL de uma vez (edema de reexpansão)`,
    guideline: "SBPT / BTS / ATS / ACCP",
  },
  {
    id: "rx-embolia-gordurosa",
    title: "Embolia Gordurosa",
    type: "Prescrição UTI",
    prescription: `1. Suporte ventilatório: O2 suplementar → VNI → IOT+VM se necessário
2. VM protetora se SDRA: VC 6mL/kg predito, PEEP ≥10, Pplatô <30
3. Hidratação: SF 0,9% para manter euvolemia (evitar hipo e hipervolemia)
4. Metilprednisolona 1,5mg/kg EV 8/8h por 48h (controverso, mas usado na prática)
5. Fixação precoce de fraturas de ossos longos (<24h — reduz incidência)
6. Monitorar: SpO2, gasometria, plaquetas (consumo), hemoglobina
7. TC tórax: opacidades em vidro fosco bilaterais
8. RNM crânio: restrição à difusão em substância branca (starfield pattern)
9. Diagnóstico clínico: tríade de Gurd — IRpA + petéquias (tórax/axila/conjuntiva) + confusão mental
10. Suporte de UTI + correção de anemia/coagulopatia`,
    notes: "Incidência: 1-10% das fraturas de ossos longos. Aparece 24-72h após trauma/cirurgia. Petéquias em tórax/axila: patognomônico mas transitório. Mortalidade: 5-15%.",
    guideline: "SBAIT / EAST / BJA",
  },
  {
    id: "rx-fibrose-pulmonar-exacerbacao",
    title: "Exacerbação Aguda de Fibrose Pulmonar",
    type: "Prescrição UTI / Hospitalar",
    prescription: `1. O2 suplementar: cateter/máscara → CNAF → VNI (evitar IOT se possível — mortalidade >90% em VM)
2. Metilprednisolona 500mg-1g EV por 3 dias → Prednisona 1mg/kg/dia com desmame
3. Antibiótico empírico: Ceftriaxona 2g + Azitromicina 500mg (excluir infecção)
4. SMX-TMP dose terapêutica: 15-20mg/kg/dia TMP (excluir Pneumocistose)
5. TC tórax: novas opacidades em vidro fosco sobre padrão UIP
6. Coletas: hemograma, PCR, procalcitonina, β-D-glucana, lavado broncoalveolar se possível
7. Suspender Pirfenidona/Nintedanib na fase aguda (reintroduzir após estabilização)
8. Avaliar paliação precoce: discutir com paciente/família prognóstico
9. NÃO ventilar com volumes/pressões altos (pulmão fibrótico = baixa complacência)
10. Cuidados paliativos: Morfina 2-5mg SC 4/4h se dispneia refratária`,
    notes: "Exacerbação aguda de FPI: piora em <30 dias sem causa identificável. Mortalidade hospitalar: 50-80%. VM invasiva raramente benéfica — discutir diretiva antecipada.",
    guideline: "ATS/ERS/JRS/ALAT / SBPT",
  },
  // === NUTRIÇÃO PARENTERAL DETALHADA ===
  {
    id: "rx-nutricao-parenteral-total",
    title: "Nutrição Parenteral Total (NPT) — Prescrição Detalhada",
    type: "Prescrição UTI / Hospitalar",
    prescription: `INDICAÇÕES: intolerância enteral >7 dias, fístula de alto débito, obstrução intestinal completa, íleo paralítico prolongado, desnutrido grave com contraindicação enteral

CÁLCULO (paciente 70kg):
1. Calorias: 25-30 kcal/kg/dia = 1750-2100 kcal/dia
2. Proteínas: 1,2-1,5g/kg/dia = 84-105g/dia (como aminoácidos)
3. Glicose: 3-5g/kg/dia = 210-350g/dia (máx 5mg/kg/min)
4. Lipídios: 0,7-1,5g/kg/dia = 49-105g/dia (não ultrapassar 30% das calorias; usar MCT/LCT)

COMPOSIÇÃO PADRÃO (para 24h):
5. Aminoácidos 10% — 840-1050mL
6. Glicose 50% — 420-700mL
7. Emulsão lipídica 20% — 245-525mL
8. Volume total: ~1500-2000mL/dia

ELETRÓLITOS (adicionar à bolsa):
9. NaCl 20% — 20-40mL (60-120mEq Na+)
10. KCl 19,1% — 10-20mL (25-50mEq K+)
11. MgSO4 10% — 10-20mL (1-2g Mg)
12. Gluconato de Ca 10% — 10-20mL
13. Fosfato: 15-30mmol/dia

VITAMINAS E OLIGOELEMENTOS:
14. Polivitamínico EV 1 ampola/dia
15. Oligoelementos (Zn, Cu, Se, Mn, Cr) 1 ampola/dia
16. Vitamina K 10mg EV 1x/semana (se não anticoagulado)`,
    notes: "Infundir por CVC (osmolaridade >900mOsm/L). Iniciar com 50% do alvo → progredir em 24-48h. Síndrome de realimentação: monitorar PO4, K+, Mg nas primeiras 72h.",
    warnings: "NÃO infundir NPT por via periférica (flebite). Risco de infecção de cateter: trocar sistema a cada 24h. Hiperglicemia: insulina regular conforme protocolo.",
    guideline: "ESPEN / ASPEN / BRASPEN",
  },
  {
    id: "rx-sindrome-realimentacao",
    title: "Síndrome de Realimentação — Prevenção e Tratamento",
    type: "Prescrição UTI / Hospitalar",
    prescription: `FATORES DE RISCO: jejum >7 dias, anorexia nervosa, etilismo crônico, oncológico, desnutrido grave, pós-cirurgia bariátrica

PREVENÇÃO:
1. Iniciar nutrição com 10-15kcal/kg/dia (50% do alvo)
2. Progredir lentamente em 4-7 dias até alvo
3. ANTES de iniciar nutrição, repor:
   - Tiamina (B1) 200-300mg EV 1x/dia por 3 dias (previne Wernicke)
   - Fosfato: 20-40mmol/dia EV
   - Potássio: alvo >3,5mEq/L
   - Magnésio: alvo >1,8mg/dL
4. Monitorar PO4, K+, Mg 12/12h por 72h → diariamente por 7 dias

TRATAMENTO (se PO4 <2mg/dL ou sintomas):
5. Fosfato de potássio ou sódio 20-40mmol EV em 4-6h
6. Reduzir/pausar nutrição temporariamente
7. Corrigir K+ e Mg concomitantemente
8. ECG (arritmias), monitorar FR (fraqueza diafragmática)
9. Glicemia 4/4h (insulina SN — evitar hiperglicemia que piora depleção)`,
    warnings: "HIPOFOSFATEMIA é o marco laboratorial. Pode ser fatal: arritmia, IC, IRpA, rabdomiólise. SEMPRE dar Tiamina ANTES da glicose em desnutrido (previne Wernicke).",
    guideline: "NICE / ESPEN / ASPEN / BRASPEN",
  },
  {
    id: "rx-nutricao-enteral-protocolo",
    title: "Nutrição Enteral — Protocolo de Início e Progressão",
    type: "Prescrição UTI / Hospitalar",
    prescription: `INDICAÇÕES: todo paciente que não atinge 60% das necessidades por VO em 3 dias
CONTRAINDICAÇÕES: obstrução intestinal mecânica, isquemia mesentérica, HDA ativa não controlada

INÍCIO:
1. Via: SNE (pós-pilórica preferida em alto risco de aspiração) ou SNG
2. Posição: confirmar com RX (ponta do tubo em D2-D4 ou estômago)
3. Cabeceira ≥30° durante infusão e 1h após
4. Dieta enteral polimérica 1.0-1.5kcal/mL

PROGRESSÃO:
5. Iniciar: 10-20mL/h em BIC
6. Progredir 10-20mL/h a cada 6-8h se tolerado
7. Alvo: 25-30kcal/kg/dia (peso ajustado) em 48-72h
8. Proteína: 1,2-2,0g/kg/dia (suplementar módulo proteico se necessário)

INTOLERÂNCIA (resíduo gástrico >500mL, distensão, vômitos):
9. Reduzir velocidade ou pausar por 2-4h
10. Metoclopramida 10mg EV 8/8h OU Eritromicina 250mg EV 8/8h (pró-cinético)
11. Converter para pós-pilórica se intolerância gástrica persistente

CUIDADOS:
12. Lavar sonda com 20mL de água a cada 6h e antes/após medicações
13. NÃO misturar medicações com dieta na mesma via sem lavar
14. Glicemia capilar 6/6h → insulina se >180mg/dL`,
    guideline: "ESPEN / ASPEN / BRASPEN / AMIB",
  },
  // === PNEUMOLOGIA COMPLEMENTAR ===
  {
    id: "rx-tromboembolismo-pulmonar",
    title: "TEP — Tromboembolismo Pulmonar",
    type: "Prescrição de Emergência",
    prescription: `TEP sem instabilidade (submaciço):
1. Enoxaparina 1mg/kg SC 12/12h OU HNF 80UI/kg bolus → 18UI/kg/h
2. Transição para DOAC após estabilização:
   Rivaroxabana 15mg 12/12h por 21 dias → 20mg 1x/dia OU
   Apixabana 10mg 12/12h por 7 dias → 5mg 12/12h
3. O2 suplementar se SpO2 <92%
4. Analgesia: Dipirona 1g EV 6/6h

TEP MACIÇO (instabilidade hemodinâmica):
5. Alteplase 100mg EV em 2h (10mg bolus → 90mg em 2h)
6. OU Tenecteplase dose por peso (se disponível)
7. HNF após trombólise (não HBPM — ajuste mais fácil)
8. Noradrenalina se PAS <90 (0,1mcg/kg/min)
9. SF 0,9% 500mL EV cauteloso (VD já sobrecarregado)
10. Considerar: trombectomia percutânea/cirúrgica, ECMO-VA se PCR

Exames:
11. Angiotomografia de tórax (padrão-ouro)
12. Ecocardiograma (disfunção de VD — estratificação)
13. Troponina + BNP (estratificação de risco)
14. D-dímero (exclusão em baixa probabilidade — Wells/Geneva)`,
    guideline: "SBC / ESC / CHEST / ATS",
  },
  {
    id: "rx-pneumonia-nosocomial",
    title: "Pneumonia Nosocomial / PAV",
    type: "Prescrição UTI",
    prescription: `Sem fatores de risco para MDR:
1. Ceftriaxona 2g EV 1x/dia OU
2. Piperacilina-Tazobactam 4,5g EV 6/6h OU
3. Levofloxacino 750mg EV 1x/dia

Com fatores de risco para MDR (ATB prévio, internação >5 dias, choque séptico):
4. Meropenem 1g EV 8/8h (ou infusão estendida 2g em 3h 8/8h)
5. + Vancomicina 15-20mg/kg EV 12/12h (se risco de MRSA)
   OU Linezolida 600mg EV 12/12h (alternativa anti-MRSA)
6. + Polimixina B 25.000UI/kg/dia EV dividido 12/12h (se risco de KPC/Acinetobacter)

Suporte:
7. Aspiração traqueal para cultura (quantitativa: ≥10⁶ = positivo)
8. Colher hemocultura antes do ATB
9. Procalcitonina seriada (guiar duração do ATB)
10. Duração: 7 dias (exceto se P. aeruginosa ou resposta lenta: 14 dias)
11. Desescalonar conforme cultura em 48-72h`,
    guideline: "IDSA/ATS 2016 / ANVISA / AMIB",
  },
  {
    id: "rx-insuficiencia-resp-hipercapnica",
    title: "Insuficiência Respiratória Hipercápnica Aguda",
    type: "Prescrição de Emergência",
    prescription: `1. O2 controlado: cateter nasal 1-2L/min (alvo SpO2 88-92%)
2. VNI (BiPAP): IPAP 12-20 cmH2O / EPAP 4-8 cmH2O
   Iniciar precocemente — reduz IOT em 50%
3. Gasometria arterial na admissão → 1h após VNI → seriada
4. Se pH <7,25 com VNI otimizada → IOT + VM
5. VM: evitar auto-PEEP, FR baixa (12-16), TE prolongado
6. Broncodilatadores: Salbutamol + Ipratrópio NBZ 6/6h
7. Corticoide: Prednisona 40mg VO 1x/dia por 5 dias (se DPOC)
8. ATB se exacerbação infecciosa: Amoxicilina-Clavulanato OU Levofloxacino
9. Diurético se cor pulmonale descompensado: Furosemida 40mg EV
10. Aminofilina 240mg EV em 20min (apenas se refratário — monitorar toxicidade)`,
    notes: "Causas: DPOC exacerbada (mais comum), apneia obstrutiva, cifoescoliose, neuromuscular, obesidade. VNI é o tratamento de escolha na hipercapnia aguda com pH 7,25-7,35.",
    guideline: "GOLD / SBPT / BTS / ERS",
  },
  {
    id: "rx-cnaf",
    title: "Cânula Nasal de Alto Fluxo (CNAF) — Protocolo",
    type: "Prescrição UTI / Hospitalar",
    prescription: `INDICAÇÕES:
1. IRpA hipoxêmica (P/F 100-300) como alternativa à VNI
2. Pré/pós-extubação (reduz reintubação)
3. IC com edema pulmonar leve
4. Paliação de dispneia (conforto)

PARÂMETROS INICIAIS:
5. Fluxo: 30-60L/min (iniciar com 30-40, titular até 60)
6. FiO2: iniciar 100% → desmamar para SpO2 alvo (92-96%)
7. Temperatura: 37°C (pode reduzir para 34°C se desconforto)
8. Usar cânula de tamanho adequado (não ocluir >50% da narina)

MONITORIZAÇÃO:
9. Índice ROX: (SpO2/FiO2) / FR — avaliar em 2h, 6h, 12h
   ROX ≥4,88 em 12h: sucesso provável
   ROX <3,85: alto risco de falha → considerar IOT
10. Sinais de falha: FR >30, uso de acessório, SpO2 <92% com FiO2 >0,6, agitação

CUIDADOS:
11. NÃO usar em hipercapnia grave (DPOC — preferir VNI/BiPAP)
12. Manter cabeceira 30-45°
13. Pode ser usada durante refeição e fisioterapia`,
    notes: "FLORALI trial: CNAF reduziu mortalidade em 90 dias vs O2 padrão em IRpA hipoxêmica. Vantagem: conforto, clearance de CO2, PEEP fisiológico (~3-5cmH2O).",
    guideline: "ERS / AMIB / SBPT",
  },
  // === ESPECIALIDADES COMPLEMENTARES ===
  {
    id: "rx-pancreatite-aguda",
    title: "Pancreatite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero nas primeiras 24-48h → dieta VO precoce quando tolerada (leve, hipogordurosa)
2. Ringer Lactato 1,5mL/kg/h EV (hidratação agressiva nas primeiras 24h)
3. Dipirona 1g EV 6/6h + Tramadol 50-100mg EV 8/8h
4. Morfina 2-4mg EV SN (NÃO é contraindicada — mito do espasmo de Oddi)
5. Omeprazol 40mg EV 1x/dia
6. Ondansetrona 4mg EV 8/8h
7. NÃO usar ATB profilático (apenas se necrose infectada confirmada)
8. Exames: amilase, lipase, hemograma, PCR, Ca++, triglicerídeos, função hepática
9. TC abdome com contraste: apenas se dúvida diagnóstica ou sem melhora em 72h (Balthazar)
10. CPRE urgente se: colangite associada (icterícia + febre + coledocolitíase)
11. Nutrição enteral precoce (SNE): superior à NPT em pancreatite grave`,
    guideline: "SBG / ACG / AGA / IAP",
  },
  {
    id: "rx-encefalopatia-hepatica",
    title: "Encefalopatia Hepática",
    type: "Prescrição Hospitalar",
    prescription: `1. Lactulose 15-30mL VO 8/8h (titular para 2-3 evacuações pastosas/dia)
2. Se não tolera VO: Lactulose enema 300mL + 700mL água → reter 30-60min
3. Rifaximina 550mg VO 12/12h (profilaxia secundária + adjunto)
4. Dieta normoproteica (1,2g/kg/dia — NÃO restringir proteína)
5. Investigar precipitante: infecção, sangramento GI, constipação, desidratação, medicações
6. Colher: hemograma, eletrólitos, função renal, amônia (não correlaciona bem com gravidade)
7. Paracentese diagnóstica se ascite (excluir PBE)
8. Suspender benzodiazepínicos e opioides
9. SF 0,9% 500-1000mL EV (se desidratado)
10. Flumazenil 0,2mg EV: apenas para diagnóstico diferencial (NÃO rotina)`,
    guideline: "SBH / EASL / AASLD",
  },
  {
    id: "rx-les-atividade",
    title: "LES em Atividade — Flare Grave",
    type: "Prescrição Hospitalar",
    prescription: `1. Metilprednisolona 500mg-1g EV por 3 dias (pulsoterapia)
2. → Prednisona 1mg/kg/dia VO (máx 60mg) → desmame lento
3. Hidroxicloroquina 400mg VO 1x/dia (NUNCA suspender)
4. Micofenolato 1g VO 12/12h (se nefrite classe III/IV)
5. OU Ciclofosfamida EV (se nefrite grave ou cerebrite)
6. Plasmaférese: se SAF catastrófica, hemorragia alveolar, PTT
7. Rituximab 1g EV D0 + D14 (se refratário)
8. Belimumab 10mg/kg EV (manutenção — reduz flares)
9. Profilaxia: SMX-TMP, cálcio + vitamina D, proteção gástrica
10. Exames: anti-dsDNA, complemento C3/C4, hemograma, função renal, EAS, proteinúria 24h`,
    guideline: "SBR / EULAR / ACR / SLEDAI",
  },
  {
    id: "rx-vasculite-anca",
    title: "Vasculite ANCA — GPA/MPA",
    type: "Prescrição Hospitalar",
    prescription: `Indução de remissão:
1. Metilprednisolona 500mg-1g EV por 3 dias → Prednisona 1mg/kg/dia VO
2. Rituximab 375mg/m² semanal por 4 semanas (1ª escolha — RAVE trial)
3. OU Ciclofosfamida 15mg/kg EV a cada 2 semanas por 3 meses → mensal
4. Plasmaférese se: creatinina >5,7 ou hemorragia alveolar (controverso pós-PEXIVAS)

Manutenção (após remissão):
5. Rituximab 500mg EV a cada 6 meses por ≥2 anos (MAINRITSAN)
6. OU Azatioprina 2mg/kg/dia VO
7. Prednisona ≤5mg/dia (desmame completo se possível)

Suporte:
8. Profilaxia pneumocistose: SMX-TMP 400/80mg VO 1x/dia
9. Cálcio 1g + Vitamina D 1000UI/dia
10. Hemograma semanal (início), ANCA seriado, função renal mensal`,
    guideline: "ACR / EULAR / EUVAS / SBR",
  },
  {
    id: "rx-gota-aguda",
    title: "Gota Aguda — Crise Articular",
    type: "Prescrição no Pronto Socorro",
    prescription: `1ª escolha:
1. Colchicina 0,5mg VO → 0,5mg 1h após → 0,5mg 12/12h por 3-5 dias
2. OU AINE: Naproxeno 500mg VO 12/12h OU Indometacina 50mg VO 8/8h por 5-7 dias

Se contraindicação a AINE e Colchicina:
3. Prednisona 30-40mg VO 1x/dia por 5 dias → desmame rápido
4. OU Triancinolona 40mg IM dose única
5. OU Infiltração articular com Triancinolona (se monoarticular)

Adjuntos:
6. Gelo local 20min 4x/dia
7. Omeprazol 20mg VO se AINE
8. NÃO iniciar/modificar Alopurinol durante crise (piora o flare)
9. Se já em uso de Alopurinol: NÃO suspender

Após resolução:
10. Alopurinol 100mg VO → titular até ácido úrico <6mg/dL
11. Colchicina 0,5mg VO 1x/dia profilática por 3-6 meses ao iniciar hipouricemiante`,
    guideline: "SBR / ACR / EULAR / BSR",
  },
  {
    id: "rx-trombose-seio-venoso",
    title: "Trombose de Seio Venoso Cerebral",
    type: "Prescrição de Emergência",
    prescription: `1. Heparina não fracionada: 80UI/kg bolus → 18UI/kg/h (TTPa 2-2,5x)
   OU Enoxaparina 1mg/kg SC 12/12h
2. ANTICOAGULAR MESMO COM INFARTO HEMORRÁGICO (diferente de AVC arterial)
3. Anticonvulsivante profilático: Levetiracetam 500mg EV 12/12h (se lesão cortical)
4. Fenitoína 20mg/kg EV se convulsão (em SF, NÃO SG)
5. Manitol 20% 0,5-1g/kg se HIC com rebaixamento
6. Cabeceira 30°
7. Analgesia: Dipirona 1g EV 6/6h + opioide SN
8. TC com fase venosa ou AngioRNM (exame de escolha)
9. Transição para Varfarina (INR 2-3) por 6-12 meses
10. Investigar: trombofilias, ACO, puerpério, infecção, neoplasia`,
    notes: "Suspeitar se: cefaleia + papiledema, convulsão + déficit focal (especialmente em mulher jovem, puerpério, uso de ACO). Sinal do delta vazio na TC com contraste.",
    guideline: "AHA/ASA / ESO / ABN",
  },
  {
    id: "rx-insuficiencia-cardiaca-descomp",
    title: "IC Descompensada — Perfil B (Quente e Úmido)",
    type: "Prescrição Hospitalar",
    prescription: `1. Furosemida 40-80mg EV em bolus → manter 80-240mg/dia EV (dividido ou BIC)
2. Restrição hídrica: 800-1200mL/dia
3. Restrição de Na+: <2g/dia
4. Captopril 6,25-25mg VO 8/8h (se PAS >100) OU Enalapril 2,5-10mg VO 12/12h
5. Carvedilol: manter se já em uso (NÃO iniciar na descompensação)
6. Espironolactona 25mg VO 1x/dia
7. Nitroglicerina EV 5-200mcg/min (se PA elevada + congestão)
8. Peso diário + balanço hídrico rigoroso (alvo: perda 0,5-1kg/dia)
9. O2 se SpO2 <92% — VNI se EAP
10. Exames: BNP/NT-proBNP, função renal, eletrólitos, hemograma, ECG, ecocardiograma
11. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
12. Dapagliflozina 10mg VO 1x/dia (benefício mesmo na internação — EMPULSE)`,
    guideline: "SBC / ESC / ACC/AHA / DIRETRIZ IC 2023",
  },
  {
    id: "rx-miocardite-aguda",
    title: "Miocardite Aguda",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Repouso absoluto (evitar exercício por 3-6 meses)
2. Monitorização contínua: ECG (arritmias), PA, SpO2
3. IECA/BRA: Enalapril 2,5mg VO 12/12h (neuroproteção miocárdica)
4. Betabloqueador: Carvedilol 3,125mg VO 12/12h (se estável)
5. Diurético: Furosemida 40mg EV SN (se congestão)
6. NÃO usar AINEs (piora inflamação miocárdica — dados em modelos animais)
7. Troponina seriada + BNP/NT-proBNP
8. RNM cardíaca (padrão-ouro: edema + realce tardio)
9. Se IC grave: Dobutamina/Milrinona → BIA → ECMO-VA (ponte para recuperação/transplante)
10. Se arritmia ventricular: Amiodarona 150mg EV → manutenção
11. Biópsia endomiocárdica: considerar se fulminante ou sem melhora
12. Imunossupressão: apenas se biópsia + (células gigantes, eosinofílica)`,
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-endocardite",
    title: "Endocardite Infecciosa — Tratamento Empírico",
    type: "Prescrição Hospitalar",
    prescription: `Válvula nativa — Subaguda:
1. Ampicilina 2g EV 4/4h + Oxacilina 2g EV 4/4h + Gentamicina 3mg/kg/dia EV
2. Duração: 4-6 semanas

Válvula nativa — Aguda (suspeita de S. aureus):
3. Oxacilina 2g EV 4/4h (4-6 semanas)
4. OU Vancomicina 15-20mg/kg EV 12/12h (se MRSA ou alergia)

Válvula protética:
5. Vancomicina 15-20mg/kg EV 12/12h + Gentamicina 3mg/kg/dia + Rifampicina 300mg VO 8/8h
6. Duração: ≥6 semanas

Todos:
7. Hemocultura: 3 pares em sítios diferentes ANTES do ATB
8. Ecocardiograma: ETT → se negativo + alta suspeita: ETE
9. Avaliação cirúrgica: IC refratária, abscesso, prótese instável, embolia recorrente
10. NÃO anticoagular (exceto se prótese mecânica — manter Varfarina com INR terapêutico)`,
    guideline: "SBC / ESC / AHA / IDSA",
  },
  {
    id: "rx-meningite-bacteriana",
    title: "Meningite Bacteriana — Adulto",
    type: "Prescrição de Emergência",
    prescription: `1. Dexametasona 0,15mg/kg EV 6/6h por 4 dias (DAR ANTES ou junto ao ATB — reduz sequela)
2. Ceftriaxona 2g EV 12/12h (10-14 dias)
3. + Ampicilina 2g EV 4/4h (se >50 anos, imunossuprimido, etilista — cobrir Listeria)
4. + Vancomicina 15-20mg/kg EV 12/12h (se suspeita de pneumococo resistente)
5. Punção lombar: citologia, bioquímica (glicose, proteínas), Gram, cultura, látex, ADA
6. TC crânio ANTES da PL se: papiledema, déficit focal, convulsão, imunossuprimido, RNC
7. NÃO atrasar ATB por TC — colher hemocultura e iniciar ATB → depois TC → depois PL
8. Monitorização: nível de consciência, PIC, Na+ (SIADH)
9. Notificação COMPULSÓRIA imediata (SINAN)
10. Quimioprofilaxia (meningococo): Rifampicina 600mg VO 12/12h por 2 dias`,
    guideline: "SBI / IDSA / ESCMID / MS",
  },
  {
    id: "rx-celulite-orbitaria",
    title: "Celulite Orbitária",
    type: "Prescrição de Emergência",
    prescription: `1. INTERNAÇÃO (emergência oftalmológica)
2. Ceftriaxona 2g EV 12/12h + Metronidazol 500mg EV 8/8h
3. OU Ampicilina-Sulbactam 3g EV 6/6h
4. + Vancomicina 15-20mg/kg EV 12/12h (se MRSA/grave)
5. TC de órbita e seios da face com contraste (avaliar abscesso subperiosteal/orbitário)
6. Avaliação oftalmológica: acuidade visual, motilidade ocular, reflexo pupilar, PIO, fundoscopia
7. Drenagem cirúrgica: abscesso >1cm, piora apesar de ATB 48h, comprometimento visual
8. Dipirona 1g EV 6/6h + Dexametasona 4mg EV 6/6h (reduzir edema)
9. Elevação da cabeceira 30°
10. Monitorar sinais de trombose de seio cavernoso: proptose bilateral, oftalmoplegia, meningismo`,
    warnings: "Diferenciar pré-septal (pálpebra — geralmente ambulatorial) de pós-septal (órbita — internação). Complicação: abscesso orbitário, perda visual, trombose de seio cavernoso, abscesso cerebral.",
    guideline: "SBO / AAO / IDSA",
  },
  {
    id: "rx-sindrome-coronariana-sem-supra",
    title: "SCA sem Supra de ST (IAM SSST / Angina Instável)",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. AAS 300mg VO (mastigar)
2. Ticagrelor 180mg VO OU Clopidogrel 300mg VO
3. Enoxaparina 1mg/kg SC 12/12h OU HNF 60UI/kg bolus → 12UI/kg/h
4. Atorvastatina 80mg VO
5. Nitroglicerina SL 5mg (se PA >100 e FC >50) — repetir até 3x a cada 5min
6. Metoprolol 25-50mg VO (se FC >70 e PA >100 — sem contraindicação)
7. Morfina 2-4mg EV lento se dor refratária (usar com cautela)
8. O2 suplementar APENAS se SpO2 <94%
9. ECG seriado (admissão + 3h + 6h)
10. Troponina seriada (0h + 1h ou 0h + 3h — protocolo da instituição)
11. Estratificação: GRACE score → define cate precoce (<24h) vs eletivo
12. Cateterismo: <2h se instabilidade, <24h se alto risco, <72h se risco intermediário`,
    guideline: "SBC / ESC / ACC/AHA",
  },
  {
    id: "rx-taquicardia-svt",
    title: "Taquicardia Supraventricular (TSV)",
    type: "Prescrição de Emergência",
    prescription: `Estável (PA preservada, sem sinais de baixo débito):
1. Manobras vagais: Valsalva modificada (soprar seringa 10mL por 15s → deitar + elevar MMII 45° por 15s)
2. Adenosina 6mg EV rápido (flush com SF) → se não reverte: 12mg EV → 12mg EV
3. Se refratária: Verapamil 5mg EV em 2min (NÃO usar se IC ou betabloqueado)
4. OU Metoprolol 5mg EV lento (pode repetir até 15mg)
5. Diltiazem 0,25mg/kg EV em 2min (alternativa)

Instável (hipotensão, dor torácica, IC, RNC):
6. Cardioversão elétrica sincronizada 50-100J bifásico
7. Sedação breve: Midazolam 2-5mg EV ou Propofol 0,5-1mg/kg

Após reversão:
8. ECG 12 derivações (avaliar Wolff-Parkinson-White — onda delta)
9. Se WPW: NÃO usar Verapamil/Digoxina/Adenosina em FA pré-excitada
10. Encaminhar eletrofisiologista para ablação (tratamento definitivo)`,
    guideline: "SBC / AHA / ESC / ACLS",
  },
  {
    id: "rx-bradiarritmia",
    title: "Bradiarritmia Sintomática",
    type: "Prescrição de Emergência",
    prescription: `1. Atropina 0,5mg EV a cada 3-5min (máx 3mg)
2. Se sem resposta a Atropina:
   Dopamina 5-20mcg/kg/min em BIC OU
   Adrenalina 2-10mcg/min em BIC OU
   Isoproterenol 2-10mcg/min (se disponível)
3. Marcapasso transcutâneo: aplicar pás + capturar (verificar pulso mecânico!)
   Sedação: Midazolam 2-5mg EV + Fentanil 50mcg EV
4. Marcapasso transvenoso: inserir por acesso central (jugular/subclávia/femoral)

Causas reversíveis: investigar drogas (betabloqueador, BCC, digital), distúrbio eletrolítico (K+), hipotireoidismo, isquemia

5. BAV 2° grau tipo II (Mobitz II) ou BAV 3° grau (BAVT): marcapasso definitivo
6. ECG 12 derivações + monitorização contínua
7. Ecocardiograma
8. Holter 24h (se intermitente)`,
    guideline: "SBC / AHA / ESC / ACLS",
  },
  {
    id: "rx-pericardite-aguda",
    title: "Pericardite Aguda",
    type: "Prescrição Hospitalar",
    prescription: `1. Ibuprofeno 600mg VO 8/8h por 1-2 semanas → desmame em 2-4 semanas
   OU AAS 750-1000mg VO 8/8h (preferido se pós-IAM — síndrome de Dressler)
2. Colchicina 0,5mg VO 12/12h por 3 meses (reduz recorrência em 50% — COPE/ICAP trial)
3. Omeprazol 20mg VO 1x/dia (proteção gástrica com AINE)
4. Repouso relativo até resolução dos sintomas + normalização de PCR
5. NÃO usar corticoide de rotina (aumenta recorrência — reservar para refratária/contraindicação)
6. Ecocardiograma (avaliar derrame pericárdico)
7. ECG: supradesnível de ST difuso + infradesnivelamento de PR
8. Troponina (pode estar elevada = miopericardite)
9. Exames: hemograma, PCR, VHS, função renal
10. Internar se: febre >38°C, derrame grande, troponina elevada, imunossuprimido, falha de AINE`,
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-hemorragia-subaracnoidea",
    title: "Hemorragia Subaracnóidea (HSA)",
    type: "Prescrição de Emergência / UTI",
    prescription: `1. PA alvo: PAS <160mmHg (antes do tratamento do aneurisma)
   Nitroprussiato OU Labetalol EV para controle
2. Nimodipino 60mg VO 4/4h por 21 dias (prevenção de vasoespasmo)
3. Analgesia: Dipirona 1g EV 6/6h + Codeína 30mg VO 6/6h (evitar AINEs e AAS)
4. Anticonvulsivante: Fenitoína 100mg EV 8/8h OU Levetiracetam 500mg EV 12/12h (controverso — usar se convulsão)
5. Laxativo: Lactulose 15mL VO 12/12h (evitar Valsalva)
6. Cabeceira 30°
7. Repouso absoluto + ambiente tranquilo
8. TC crânio + AngioTC (identificar aneurisma) → AngioRNM ou arteriografia se negativa
9. Intervenção: clipagem cirúrgica ou embolização endovascular em <72h (ideal <24h)
10. Monitorar vasoespasmo (D3-D14): Doppler transcraniano diário
11. Se vasoespasmo: terapia HHH (hipervolemia + hipertensão + hemodiluição — controverso, manter euvolemia)
12. Derivação ventricular externa (DVE) se hidrocefalia aguda`,
    guideline: "ABN / AHA/ASA / EANS / Hunt-Hess / Fisher",
  },
  {
    id: "rx-guillain-barre",
    title: "Síndrome de Guillain-Barré",
    type: "Prescrição Hospitalar / UTI",
    prescription: `Imunoterapia (iniciar precoce — <2 semanas do início):
1. Imunoglobulina EV (IVIg): 0,4g/kg/dia por 5 dias
2. OU Plasmaférese: 5 sessões em 10-14 dias (1-1,5 volemias/sessão)
3. NÃO usar corticoide (não tem benefício na SGB)

Monitorização respiratória (risco de falência):
4. Capacidade vital forçada (CVF) 4/4h: intubar se <20mL/kg ou queda >30% ou PImáx <-30
5. SpO2 contínua, gasometria se dispneia
6. IOT + VM se insuficiência respiratória

Suporte:
7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — imobilidade)
8. Analgesia: Gabapentina 300mg VO 8/8h (dor neuropática frequente)
9. Fisioterapia motora e respiratória precoce
10. Monitorar disautonomia: PA, FC, arritmias, íleo paralítico, retenção urinária
11. SVD se retenção urinária
12. Líquor: dissociação albuminocitológica (proteína elevada + celularidade normal) — pode ser normal na 1ª semana`,
    guideline: "ABN / GBS/CIDP Foundation / AAN",
  },
  {
    id: "rx-miastenia-crise",
    title: "Crise Miastênica",
    type: "Prescrição de Emergência / UTI",
    prescription: `1. IOT + VM se CVF <15-20mL/kg ou sinais de falência respiratória
2. SUSPENDER anticolinesterásicos durante a crise (piora secreções)
3. IVIg 0,4g/kg/dia por 5 dias (1ª escolha na crise)
4. OU Plasmaférese: 5 sessões em 10-14 dias
5. NÃO usar: aminoglicosídeos, magnésio, quinolonas, betabloqueadores, BCC — PIORAM miastenia
6. Identificar gatilho: infecção, cirurgia, medicação, suspensão de imunossupressor
7. Após estabilização: reiniciar Piridostigmina 30mg VO 6/6h → titular
8. Corticoide: Prednisona 1mg/kg/dia (iniciar APÓS resolução da crise — pode piorar transitoriamente)
9. Fisioterapia respiratória
10. Monitorar CVF seriada + SpO2`,
    warnings: "Diferenciar crise miastênica de crise colinérgica (excesso de anticolinesterásico): ambas causam fraqueza + insuficiência respiratória. Na dúvida: suspender Piridostigmina + suporte.",
    guideline: "ABN / AAN / MGFA",
  },
  // === GERIATRIA ===
  {
    id: "rx-delirium-idoso",
    title: "Delirium no Idoso",
    type: "Prescrição Hospitalar / UTI",
    prescription: `MEDIDAS NÃO FARMACOLÓGICAS (1ª LINHA):
1. Reorientação frequente (relógio, calendário, familiares)
2. Mobilização precoce — evitar contenção física
3. Correção sensorial: óculos e prótese auditiva no leito
4. Ciclo sono-vigília: luz durante o dia, escuro à noite
5. Hidratação oral + evitar desidratação
6. Revisar medicações (Critérios de Beers) — SUSPENDER benzodiazepínicos, anticolinérgicos, opioides desnecessários

FARMACOLÓGICO (se agitação com risco):
7. Haloperidol 0,5-1mg VO/IM 12/12h (menor dose possível)
8. OU Quetiapina 12,5-25mg VO à noite (se Parkinson/Lewy)
9. NÃO usar benzodiazepínicos (exceto se abstinência alcoólica)
10. Investigar e tratar CAUSA: infecção, retenção urinária, constipação, dor, hipóxia, distúrbio metabólico

EXAMES:
11. Hemograma, PCR, EAS, urocultura, função renal, eletrólitos, glicemia, TSH
12. RX tórax, gasometria
13. CAM (Confusion Assessment Method) para diagnóstico`,
    notes: "Delirium é EMERGÊNCIA GERIÁTRICA — mortalidade de 25-33% em hospitalizados. Tipos: hiperativo (agitação), hipoativo (mais comum, subdiagnosticado) e misto. Usar CAM para diagnóstico.",
    warnings: "NÃO usar benzodiazepínicos (pioram delirium). Haloperidol contraindicado se QTc >500ms. Contenção física PIORA delirium.",
    guideline: "AGS / NICE / SBGG",
  },
  {
    id: "rx-polifarmacia-idoso",
    title: "Polifarmácia — Desprescrição no Idoso",
    type: "Prescrição Ambulatorial / Hospitalar",
    prescription: `AVALIAÇÃO CRITÉRIOS DE BEERS (AGS 2023):
MEDICAMENTOS POTENCIALMENTE INAPROPRIADOS (MPI):
1. SUSPENDER/SUBSTITUIR: Benzodiazepínicos de ação longa (Diazepam, Clonazepam)
2. SUSPENDER: Anti-histamínicos 1ª geração (Prometazina, Hidroxizina) — risco anticolinérgico
3. SUSPENDER: AINEs crônicos (Ibuprofeno, Diclofenaco) — risco renal, GI, CV
4. REDUZIR: Opioides — risco de queda, confusão, constipação
5. REAVALIAR: IBPs crônicos (Omeprazol >8 semanas) — risco de fraturas, deficiência B12, Clostridium
6. EVITAR: Antipsicóticos em demência (exceto se risco iminente) — ↑ mortalidade
7. REAVALIAR: Metildopa, Clonidina (hipotensão postural)

SUBSTITUIÇÕES SEGURAS:
8. Diazepam → Lorazepam 0,5mg (se necessário) OU medidas não farmacológicas
9. Prometazina → Ondansetrona (antiemético)
10. AINEs → Dipirona ou Paracetamol
11. Omeprazol crônico → reavaliar indicação; se DRGE: dose mínima efetiva

FERRAMENTA STOPP/START:
12. STOPP: identificar medicamentos a suspender
13. START: identificar medicamentos a iniciar (ex: vitamina D, estatina se indicação)`,
    notes: "Polifarmácia: ≥5 medicamentos. Cada medicamento adicional aumenta risco de interação em 7-10%. Revisão medicamentosa a cada consulta.",
    guideline: "AGS Beers 2023 / STOPP/START v3 / SBGG",
  },
  {
    id: "rx-queda-idoso",
    title: "Queda no Idoso — Avaliação e Prevenção",
    type: "Prescrição Ambulatorial / Hospitalar",
    prescription: `AVALIAÇÃO IMEDIATA (se queda recente):
1. Investigar lesão: TC crânio se TCE, RX se fratura
2. Hemograma, glicemia, eletrólitos, função renal
3. ECG (síncope cardiogênica?)
4. PA deitado e em pé (hipotensão ortostática: queda ≥20mmHg PAS)

INVESTIGAÇÃO DE CAUSA:
5. Revisar medicamentos: hipotensores, sedativos, hipoglicemiantes
6. Teste de visão — encaminhar oftalmologista
7. Avaliação cognitiva (MEEM — demência ↑ risco de queda)
8. Força muscular e marcha: Timed Up & Go (TUG >12s = risco)
9. Avaliação podológica (calçado adequado)

PREVENÇÃO:
10. Vitamina D 1000-2000UI/dia (se deficiente)
11. Exercícios de equilíbrio e fortalecimento (fisioterapia)
12. Adaptação domiciliar: barras de apoio, iluminação, tapetes
13. Reduzir/suspender benzodiazepínicos e sedativos
14. Correção visual/auditiva`,
    guideline: "AGS/BGS / SBGG / OMS",
  },
  {
    id: "rx-fragilidade-idoso",
    title: "Síndrome de Fragilidade — Manejo",
    type: "Prescrição Ambulatorial",
    prescription: `CRITÉRIOS DE FRIED (≥3 = frágil, 1-2 = pré-frágil):
- Perda de peso não intencional (>4,5kg/ano)
- Fadiga autorreferida
- Fraqueza (força de preensão)
- Velocidade de marcha reduzida
- Baixa atividade física

MANEJO:
1. Exercício multicomponente: resistido + equilíbrio + aeróbico (3x/semana)
2. Nutrição: proteína 1,2-1,5g/kg/dia + suplementar se desnutrido
3. Vitamina D 1000-2000UI/dia
4. Revisar polifarmácia (desprescrição)
5. Vacinação em dia: Influenza, Pneumocócica, Herpes Zoster
6. Avaliação geriátrica ampla (AGA): funcionalidade, cognição, humor, nutrição, social
7. Suporte social: cuidador, rede de apoio
8. Prevenção de quedas (protocolo específico)
9. Planejamento de cuidados avançados`,
    guideline: "SBGG / ICFSR / AGA",
  },
  {
    id: "rx-demencia-agitacao",
    title: "Agitação em Demência — Manejo",
    type: "Prescrição Hospitalar",
    prescription: `MEDIDAS NÃO FARMACOLÓGICAS (OBRIGATÓRIAS 1º):
1. Ambiente calmo, com poucos estímulos
2. Comunicação clara, frases curtas, tom calmo
3. Identificar e tratar causa: dor (aplicar PAINAD), infecção, retenção urinária, constipação, fome/sede
4. Presença de familiar/cuidador conhecido
5. Música terapêutica, toque gentil

FARMACOLÓGICO (ÚLTIMA OPÇÃO — se risco):
6. Risperidona 0,25-0,5mg VO 1x/dia (único aprovado pela ANVISA para agitação em demência)
7. OU Quetiapina 12,5-25mg VO à noite
8. Haloperidol 0,5mg IM APENAS se risco iminente (evitar se Lewy/Parkinson)
9. NÃO USAR: benzodiazepínicos, anticolinérgicos
10. Duração: menor tempo possível → reavaliar em 1-2 semanas para desmame`,
    warnings: "Antipsicóticos em demência: FDA BLACK BOX — ↑ mortalidade em 1,6-1,7x. Usar menor dose por menor tempo possível.",
    guideline: "APA / NICE / SBGG / ANVISA",
  },
  // === MEDICINA INTENSIVA AVANÇADA ===
  {
    id: "rx-ecmo-va-avancado",
    title: "ECMO VA — Protocolo Avançado",
    type: "Prescrição UTI — Terapia Avançada",
    prescription: `INDICAÇÕES:
- Choque cardiogênico refratário (após otimização de DVA + IABP)
- PCR refratária (eCPR — considerar se <60 anos, causa tratável, <60min)
- Ponte para transplante cardíaco ou LVAD

CANULAÇÃO:
1. Femoral-femoral (periférica) ou central (esternal)
2. Cânula arterial 15-17Fr / Cânula venosa 21-25Fr
3. Inserção percutânea ou cirúrgica (guiada por USG + fluoroscopia)

PARÂMETROS INICIAIS:
4. Fluxo: 50-80mL/kg/min (adulto: 3-5 L/min)
5. RPM: conforme débito alvo
6. Sweep gas (O2): iniciar 1:1 com fluxo de sangue → titular por PaCO2
7. FiO2: 100% → titular para PaO2 150-200mmHg na pós-membrana

ANTICOAGULAÇÃO:
8. Heparina NF: bolus 50-100UI/kg → infusão 7,5-20UI/kg/h
9. Alvo TCA 180-220s OU TTPa 1,5-2x controle
10. Anti-Xa: 0,3-0,7UI/mL (se disponível)

MONITORIZAÇÃO:
11. PAM alvo: 65-75mmHg
12. SvO2 pré-membrana >65%
13. Pressão transmembrana (ΔP <50mmHg — troca de membrana se >50)
14. Fibrinogênio >150mg/dL (repor crioprecipitado se baixo)
15. Plaquetas >50.000 (>80.000 se sangramento)
16. LDH, Hb livre (hemólise)
17. Ecocardiograma diário (avaliar abertura de valva aórtica — risco de estase/trombose)
18. Checklist perfusional 6/6h

COMPLICAÇÕES:
19. Isquemia de membro (cânula arterial): cânula de reperfusão anterógrada obrigatória
20. Síndrome de Arlequim (ECMO VA periférica): SpO2 mão D + gasometria radial D
21. Sangramento: reavaliar ACT, repor fatores, considerar ácido tranexâmico
22. Trombose: avaliar troca de circuito`,
    guideline: "ELSO / AMIB / SBC",
  },
  {
    id: "rx-monitorizacao-hemodinamica",
    title: "Monitorização Hemodinâmica Avançada",
    type: "Prescrição UTI",
    prescription: `CATETER DE ARTÉRIA PULMONAR (Swan-Ganz):
1. Inserção via jugular interna D ou subclávia
2. Medidas: PVC, PAP, POAP, DC/IC, RVS, RVP, SvO2
3. Valores-alvo:
   - PVC: 8-12mmHg
   - POAP: 12-18mmHg
   - IC: 2,5-4,0 L/min/m²
   - RVS: 800-1200 dina.s.cm-5
   - SvO2: 65-75%

TERMODILUIÇÃO TRANSPULMONAR (PiCCO/EV1000):
4. Cateter arterial femoral + CVC jugular
5. Medidas adicionais: GEDI (pré-carga volumétrica), ELWI (água pulmonar), GEF
6. GEDI alvo: 680-800mL/m² (guia ressuscitação volêmica)
7. ELWI <10mL/kg (>10 = edema pulmonar)

ECOCARDIOGRAMA POINT-OF-CARE (POCUS):
8. Avaliação de função VE/VD, derrame pericárdico
9. VCI: <21mm com colapso >50% = hipovolemia provável
10. TAPSE >17mm (função VD preservada)
11. Protocolo RUSH para choque indiferenciado

PROVA DE VOLUME (FLUID RESPONSIVENESS):
12. Passive Leg Raising (PLR): elevação de MMII 45° por 1-3min
13. Responsivo se: ↑ DC/IC ≥10% (medido por POCUS, PiCCO ou PA linha arterial)
14. OU Variação de Pressão de Pulso (ΔPP) >13% em VM (sem arritmia, VC >8mL/kg)
15. OU Teste de mini-bolus: 100mL em 1min → avaliar resposta hemodinâmica`,
    notes: "Swan-Ganz: indicações cada vez mais restritas. POCUS + PiCCO são preferidos. PLR é o teste mais confiável para fluid responsiveness.",
    guideline: "AMIB / ESICM / SSC",
  },
  {
    id: "rx-desmame-vm",
    title: "Desmame de Ventilação Mecânica",
    type: "Prescrição UTI",
    prescription: `CRITÉRIOS PARA INICIAR DESMAME:
1. Causa da IOT resolvida/controlada
2. FiO2 ≤40%, PEEP ≤8, PaO2/FiO2 >150
3. Hemodinamicamente estável (sem ou baixa dose DVA)
4. Nível de consciência adequado (Glasgow ≥8, responde a comandos)
5. Tosse eficaz, reflexo de deglutição presente
6. Balanço hídrico não excessivamente positivo

TESTE DE RESPIRAÇÃO ESPONTÂNEA (TRE) — 30-120min:
7. Tubo T com O2 úmido OU PSV 5-7cmH2O + PEEP 5
8. Monitorar: FR, VC, SpO2, PA, FC, padrão respiratório
9. FALHA SE: FR >35/min, SpO2 <90%, FC >140 ou ↑20%, PAS >180 ou <90, agitação, sudorese

ÍNDICE DE TOBIN (FR/VC):
10. <105 = sucesso provável (>105 = falha provável)

EXTUBAÇÃO:
11. Teste de vazamento do cuff (cuff leak test) — se risco de edema laríngeo
12. Aspirar via aérea antes de desinsuflar cuff
13. Manter cabeceira elevada 45°
14. O2 suplementar pós-extubação (cateter/máscara/CNAF)
15. Se falha pós-extubação: VNI precoce (DPOC, ICC) OU reintubação se necessário

TRAQUEOSTOMIA (se VM prolongada):
16. Considerar se previsão de VM >14-21 dias
17. Percutânea à beira-leito vs cirúrgica`,
    guideline: "AMIB / ATS / ERS / SBPT",
  },
  {
    id: "rx-nutricao-parenteral-uti",
    title: "Nutrição Parenteral Total — Prescrição UTI",
    type: "Prescrição UTI",
    prescription: `INDICAÇÕES: contraindicação absoluta à dieta enteral (obstrução intestinal, íleo prolongado, isquemia mesentérica, fístula de alto débito)

CÁLCULOS:
1. Necessidade calórica: 20-25kcal/kg/dia (fase aguda) → 25-30kcal/kg/dia (recuperação)
2. Proteína: 1,2-2,0g/kg/dia (crítico)
3. Glicose: 3-5g/kg/dia (máx 5mg/kg/min) — 60-70% das calorias não proteicas
4. Lipídios: 0,7-1,5g/kg/dia (20-30% das calorias) — preferir emulsão com ômega-3 (SMOF)
5. Volume total: 25-30mL/kg/dia

PRESCRIÇÃO (exemplo 70kg):
6. Glicose 50%: ___mL
7. Aminoácidos 10%: ___mL
8. Lipídios 20%: ___mL
9. NaCl 20%: 10-20mL (conforme Na+)
10. KCl 19,1%: 10-20mL (conforme K+)
11. MgSO4 10%: 10mL
12. Gluconato de cálcio 10%: 10mL
13. Fosfato de potássio: conforme fósforo sérico
14. Polivitamínico EV: 1 ampola/dia
15. Oligoelementos: 1 ampola/dia

MONITORIZAÇÃO:
16. Glicemia 6/6h (insulina se >180)
17. Eletrólitos diários (Na, K, Mg, P, Ca)
18. Triglicerídeos 2x/semana (suspender lipídio se >400)
19. Função hepática 2x/semana
20. Balanço nitrogenado semanal`,
    warnings: "Síndrome de realimentação: iniciar com 50% da meta calórica e progredir em 3-5 dias. Monitorar P, K, Mg — repor ANTES de iniciar NPT.",
    guideline: "ESPEN / ASPEN / BRASPEN",
  },
  {
    id: "rx-choque-obstrutivo",
    title: "Choque Obstrutivo — Diagnóstico e Manejo",
    type: "Prescrição de Emergência / UTI",
    prescription: `CAUSAS:
- TEP maciço
- Tamponamento cardíaco
- Pneumotórax hipertensivo
- Hiperinsuflação dinâmica (auto-PEEP)

TEP MACIÇO:
1. Alteplase 100mg EV em 2h (trombólise)
2. OU Tenecteplase (peso-ajustada) se PCR
3. Heparina NF após trombólise
4. Noradrenalina (DVA de escolha no TEP)
5. Volume cauteloso (250mL SF — VD não tolera sobrecarga)

TAMPONAMENTO CARDÍACO:
6. Pericardiocentese de urgência (guiada por USG — via subxifoidea)
7. SF 0,9% 500-1000mL EV (manter pré-carga)
8. NÃO usar diuréticos, NÃO ventilar com pressão positiva (piora retorno venoso)
9. Noradrenalina se hipotensão após drenagem

PNEUMOTÓRAX HIPERTENSIVO:
10. Descompressão imediata: jelco 14G no 2° EIC linha hemiclavicular
11. Drenagem torácica definitiva (5° EIC linha axilar anterior)
12. NÃO esperar RX para tratar se diagnóstico clínico evidente`,
    guideline: "AHA / SBC / ATLS / AMIB",
  },
  {
    id: "rx-pac-hepatopatia-uti",
    title: "Hepatopata Grave na UTI — Manejo",
    type: "Prescrição UTI",
    prescription: `1. Lactulose 30mL VO/SNG 8/8h (alvo: 2-3 evacuações/dia) — encefalopatia
2. Rifaximina 550mg VO 12/12h (profilaxia/tratamento encefalopatia)
3. Albumina 20%: 1,5g/kg D1 + 1g/kg D3 (se PBE)
4. Ceftriaxona 1g EV 1x/dia (profilaxia PBE)
5. Terlipressina 0,5-2mg EV 4/4h (se SHR ou HDA varicosa)
6. Omeprazol 40mg EV 12/12h (se HDA associada)
7. Restrição de Na+ (<2g/dia) + Espironolactona + Furosemida (ascite)
8. Vitamina K 10mg EV 1x/dia por 3 dias (se coagulopatia)
9. Glicemia 4/4h (risco de hipoglicemia — glicogênio depletado)
10. Evitar: benzodiazepínicos, AINEs, aminoglicosídeos, paracetamol >2g/dia
11. Ajustar dose de TODOS os medicamentos metabolizados pelo fígado
12. MELD para prioridade de transplante
13. Encaminhar hepatologia/transplante se MELD ≥15`,
    guideline: "AASLD / SBH / EASL",
  },
  // === CIRURGIA PLÁSTICA ===
  {
    id: "rx-queimadura-face",
    title: "Queimadura de Face — Manejo Especializado",
    type: "Prescrição Hospitalar / Centro de Queimados",
    prescription: `1. IOT precoce se: queimadura de VAS, rouquidão, estridor, edema cervical, lesão por inalação
2. Cabeceira elevada 45° (reduzir edema facial)
3. Reposição volêmica (Parkland): RL 4mL × peso × %SCQ
4. Limpeza suave com SF 0,9% — NÃO esfregar
5. Sulfadiazina de prata 1% nas áreas de 2º grau (EXCETO ao redor dos olhos)
6. Periocular: pomada oftálmica de tobramicina + lubrificante ocular (Gel de carbômer)
7. Avaliação oftalmológica em 24h (queimadura corneal?)
8. Morfina 2-4mg EV (analgesia — queimaduras faciais são muito dolorosas)
9. Dipirona 1g EV 6/6h (adjuvante)
10. Curativo aberto na face (exposição) — NÃO usar curativo oclusivo
11. Profilaxia antitetânica (dT)
12. Hidratação labial com vaselina
13. Nutrição hiperproteica e hipercalórica precoce
14. Avaliar necessidade de escarotomia cervical (se queimadura circular restritiva)
15. Encaminhar cirurgia plástica para planejamento de enxertia se 3º grau`,
    warnings: "Queimadura de face + inalação = alta mortalidade. IOT PRECOCE antes do edema impossibilitar. NÃO usar prata ao redor dos olhos (toxicidade ocular).",
    guideline: "SBQ / ABA / ISBI",
  },
  {
    id: "rx-retalho-cuidados",
    title: "Pós-Operatório de Retalhos — Cuidados",
    type: "Prescrição Hospitalar",
    prescription: `RETALHO LOCAL/REGIONAL:
1. Curativo oclusivo não compressivo por 48h
2. NÃO realizar curativos compressivos sobre o retalho (isquemia)
3. Monitorização do retalho: cor, temperatura, enchimento capilar (a cada 1-2h nas primeiras 24h)
4. Doppler manual do pedículo (se retalho pediculado)
5. Posicionamento: evitar tração, torção ou compressão do pedículo
6. AAS 100mg VO 1x/dia (alguns protocolos — antiagregação leve)
7. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)

SINAIS DE SOFRIMENTO:
8. Congestão venosa: retalho cianótico, edemaciado, sangra escuro → soltar pontos, sanguessugas medicinais
9. Isquemia arterial: retalho pálido, frio, sem enchimento capilar → exploração cirúrgica urgente
10. Hematoma sob retalho: drenagem imediata

CUIDADOS GERAIS:
11. Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h (analgesia)
12. Cefazolina 1g EV 8/8h por 48-72h (profilaxia)
13. Manter normotermia (vasoconstrição prejudica retalho)
14. NÃO fumar (vasoconstricção — necrose de retalho)
15. Nutrição hiperproteica para cicatrização`,
    guideline: "SBCP / ASPS",
  },
  {
    id: "rx-enxerto-pele",
    title: "Pós-Enxerto de Pele — Cuidados",
    type: "Prescrição Hospitalar",
    prescription: `ÁREA RECEPTORA (enxerto):
1. Curativo tipo Brown (gaze vaselinada + algodão + fixação com pontos)
2. 1ª troca: 5-7 dias (NÃO abrir antes exceto se sinais de infecção)
3. Imobilização do membro enxertado (evitar cisalhamento)
4. Elevação do membro (reduzir edema)

ÁREA DOADORA:
5. Curativo com gaze rayon ou alginato de cálcio
6. Manter seco — NÃO molhar por 10-14 dias
7. Analgesia: Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h

CUIDADOS GERAIS:
8. Cefazolina 1g EV 8/8h por 48h (profilaxia)
9. Enoxaparina 40mg SC 1x/dia
10. Dieta hiperproteica
11. Repouso no leito (se enxerto em MMII)
12. Monitorar pega: >80% = sucesso
13. Após pega: hidratação com óleo mineral + protetor solar FPS 50 por 6 meses`,
    guideline: "SBCP / BAPRAS",
  },
  {
    id: "rx-fasciotomia",
    title: "Fasciotomia — Síndrome Compartimental",
    type: "Prescrição de Emergência / Cirúrgica",
    prescription: `INDICAÇÃO: pressão compartimental >30mmHg OU ΔP <30mmHg (PAD - pressão compartimental)

PRÉ-OPERATÓRIO:
1. Analgesia: Morfina 2-4mg EV (NÃO mascarar dor — monitorar evolução)
2. Remover gesso/tala/curativo constritivo
3. Membro ao nível do coração (NÃO elevar — piora isquemia)
4. SF 0,9% 1000mL EV (hidratação — mioglobinúria)
5. Fasciotomia URGENTE (não atrasar — necrose em 6-8h)

PÓS-FASCIOTOMIA:
6. Ferida aberta com curativo a vácuo (VAC) ou gaze úmida
7. Reavaliar em 48-72h para fechamento gradual ou enxerto
8. Monitorar função renal (rabdomiólise → CK, mioglobina)
9. Hidratação agressiva: SF 0,9% 200-300mL/h (manter diurese >200mL/h)
10. Bicarbonato de sódio 8,4% se pH urinário <6,5 (protege túbulos)
11. Cefazolina 1g EV 8/8h (profilaxia)
12. Fisioterapia precoce após estabilização`,
    warnings: "EMERGÊNCIA CIRÚRGICA — atraso >6h = necrose muscular irreversível + amputação. Os 5 Ps: Pain (dor desproporcional), Pressure, Paresthesia, Paralysis, Pulselessness (tardio).",
    guideline: "SBTO / AAOS / BOA",
  },
  // === ANESTESIOLOGIA ===
  {
    id: "rx-raqui-anestesia",
    title: "Raquianestesia — Protocolo",
    type: "Prescrição Anestésica",
    prescription: `INDICAÇÕES: cesárea, cirurgias de MMII, perineais, urológicas, ortopédicas abaixo do umbigo

PRÉ-ANESTÉSICO:
1. Jejum confirmado (sólidos 8h, líquidos claros 2h)
2. Avaliação ASA, via aérea, alergias
3. Acesso venoso calibroso (18-16G)
4. Pré-hidratação: RL 500-1000mL EV (co-loading)
5. Monitorização: ECG, SpO2, PANI

TÉCNICA:
6. Posição sentada ou decúbito lateral
7. Punção: L3-L4 ou L4-L5 (agulha Quincke 25-27G)
8. Líquor claro confirmado
9. Bupivacaína hiperbárica 0,5%:
   - Cesárea: 10-12,5mg (2-2,5mL)
   - Cirurgia de MMII: 12,5-15mg
   - Perineais: 7,5-10mg
10. Morfina intratecal: 80-100mcg (analgesia pós-op 18-24h)
11. OU Fentanil intratecal: 15-25mcg (início rápido, duração 2-4h)
12. Posicionar em decúbito dorsal com coxim na nádega D (cesárea — desvio uterino)

PÓS-RAQUI:
13. PA a cada 3-5min nos primeiros 20min
14. Efedrina 5-10mg EV se PAS <90 ou queda >20%
15. Atropina 0,5mg EV se bradicardia <50
16. Ondansetrona 4mg EV (profilaxia náusea)
17. Cefaleia pós-punção: repouso, hidratação, cafeína, blood patch se refratária`,
    guideline: "SBA / ASA / ESRA",
  },
  {
    id: "rx-peridural",
    title: "Anestesia Peridural / Epidural",
    type: "Prescrição Anestésica",
    prescription: `INDICAÇÕES: analgesia de parto, pós-op abdominal/torácico, cirurgias de grande porte

TÉCNICA:
1. Acesso venoso + monitorização
2. Posição sentada ou decúbito lateral
3. Punção: agulha Tuohy 16-18G no espaço peridural (perda de resistência)
4. Nível: L2-L4 (lombar) ou T6-T10 (torácico — conforme cirurgia)
5. Dose teste: Lidocaína 2% com adrenalina 3mL (excluir intravascular/intratecal)
6. Cateter peridural: avançar 3-5cm no espaço

DROGAS:
7. Bupivacaína 0,25-0,5%: 10-20mL (fracionados 5mL a cada 5min)
8. OU Ropivacaína 0,2-0,75%: 10-20mL
9. Fentanil peridural: 50-100mcg (adjuvante)
10. Morfina peridural: 2-3mg (analgesia prolongada 12-24h)

ANALGESIA DE PARTO (infusão contínua):
11. Bupivacaína 0,0625-0,125% + Fentanil 2mcg/mL: 8-12mL/h
12. OU PCEA (analgesia controlada pela paciente)

COMPLICAÇÕES:
13. Hipotensão: Efedrina 5-10mg EV
14. Raqui total acidental: IOT + suporte
15. Hematoma peridural: emergência neurocirúrgica se déficit motor`,
    guideline: "SBA / ESRA / ASA",
  },
  {
    id: "rx-bloqueio-femoral",
    title: "Bloqueio do Nervo Femoral — Guiado por USG",
    type: "Prescrição Anestésica",
    prescription: `INDICAÇÃO: analgesia para fratura de fêmur, cirurgia de joelho, pós-op de prótese de joelho

TÉCNICA (guiada por USG):
1. Transdutor linear de alta frequência (10-15MHz)
2. Posição: decúbito dorsal, membro em rotação externa leve
3. Localização: triângulo femoral (abaixo do ligamento inguinal)
4. Identificar: artéria femoral, nervo femoral (lateral à artéria, sob fáscia ilíaca)
5. Agulha: 50-100mm, abordagem in-plane (lateral para medial)
6. Aspirar (excluir intravascular) → injetar ao redor do nervo

DROGAS:
7. Ropivacaína 0,375-0,5%: 15-20mL
8. OU Bupivacaína 0,25-0,5%: 15-20mL
9. Duração: 8-16h (dose única)
10. Cateter perineural: infusão contínua Ropivacaína 0,2% 5-8mL/h (pós-op prolongado)

BLOQUEIO DO CANAL ADUTOR (alternativa):
11. Mais distal — preserva função motora do quadríceps
12. Ropivacaína 0,25%: 15-20mL
13. Ideal para deambulação precoce pós-op

DOSE MÁXIMA (sem adrenalina):
14. Bupivacaína: 2mg/kg | Ropivacaína: 3mg/kg | Lidocaína: 4,5mg/kg`,
    warnings: "SEMPRE guiar por USG. Aspirar antes de injetar. Monitorar toxicidade sistêmica por anestésico local (LAST): zumbido, gosto metálico, arritmia → Intralipid 20% 1,5mL/kg bolus.",
    guideline: "SBA / ESRA / ASRA",
  },
  {
    id: "rx-bloqueio-interescalenico",
    title: "Bloqueio Interescalênico — Guiado por USG",
    type: "Prescrição Anestésica",
    prescription: `INDICAÇÃO: cirurgia de ombro (artroscopia, prótese, fratura proximal de úmero)

TÉCNICA (guiada por USG):
1. Transdutor linear no pescoço lateral (nível da cricóide)
2. Identificar: escaleno anterior, escaleno médio, raízes C5-C6-C7 (sinal do semáforo)
3. Agulha: 50mm, abordagem in-plane (posterior para anterior)
4. Injetar entre as raízes no espaço interescalênico

DROGAS:
5. Ropivacaína 0,5%: 15-20mL
6. OU Bupivacaína 0,375%: 15-20mL
7. Dexametasona 4mg perineural (prolonga duração em 6-8h)
8. Duração: 12-20h (dose única com adjuvante)

COMPLICAÇÕES ESPERADAS:
9. Paralisia diafragmática ipsilateral (100% — contraindicado se doença pulmonar bilateral)
10. Síndrome de Horner (ptose, miose, anidrose — transitória)
11. Rouquidão (bloqueio do nervo laríngeo recorrente)

CONTRAINDICAÇÕES:
12. Doença pulmonar contralateral (pneumonectomia, paralisia frênica prévia)
13. Coagulopatia não corrigida`,
    guideline: "SBA / ESRA / ASRA / NYSORA",
  },
  {
    id: "rx-intoxicacao-anestesico-local",
    title: "Intoxicação por Anestésico Local (LAST)",
    type: "Prescrição de Emergência",
    prescription: `SINAIS PRECOCES (SNC): zumbido, gosto metálico, parestesia perioral, agitação, confusão, convulsão
SINAIS TARDIOS (CV): bradicardia, hipotensão, arritmia, PCR (TV/FV ou assistolia)

TRATAMENTO IMEDIATO:
1. PARAR a injeção de anestésico local
2. Chamar ajuda — pedir kit de resgate lipídico
3. Via aérea: O2 100%, IOT se necessário
4. Se convulsão: Midazolam 2-4mg EV (NÃO usar Propofol em dose alta — cardiotóxico)

EMULSÃO LIPÍDICA (INTRALIPID 20%) — ANTÍDOTO:
5. Bolus: 1,5mL/kg EV em 1min (~100mL para 70kg)
6. Infusão: 0,25mL/kg/min por 30-60min
7. Se instabilidade persiste: repetir bolus (máx 2x)
8. Dose máxima total: 12mL/kg

SE PCR:
9. RCP conforme ACLS — pode ser prolongada
10. NÃO usar: Vasopressina, BCC, Betabloqueador, Lidocaína
11. Adrenalina em doses reduzidas (<1mcg/kg)
12. Amiodarona para arritmia (se necessário)
13. Considerar ECMO se refratário`,
    warnings: "LAST pode ocorrer até 30min após bloqueio. Toda sala de bloqueio deve ter Intralipid 20% disponível. Bupivacaína é a mais cardiotóxica.",
    guideline: "ASRA / SBA / AAGBI",
  },
  // === CIRURGIA VASCULAR ===
  {
    id: "rx-tromboembolectomia",
    title: "Tromboembolectomia Arterial — Peri-Operatório",
    type: "Prescrição Cirúrgica / Emergência Vascular",
    prescription: `INDICAÇÃO: isquemia aguda de membro (6Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia)
Classificação de Rutherford: I (viável), IIa (marginalmente ameaçado), IIb (imediatamente ameaçado), III (irreversível)

PRÉ-OPERATÓRIO:
1. Heparina NF 80UI/kg EV bolus (anticoagulação imediata ao diagnóstico)
2. Analgesia: Morfina 2-4mg EV (dor intensa)
3. Membro em posição declive (NÃO elevar — piora isquemia)
4. Hidratação: SF 0,9% 1000mL EV (preparo para reperfusão)
5. Reserva de CH + PFC (sangramento cirúrgico)
6. AngioTC ou arteriografia (se não atrasar cirurgia)

PÓS-OPERATÓRIO:
7. Heparina NF em BIC: 18UI/kg/h (TTPa alvo 1,5-2,5x controle)
8. Fasciotomia profilática se isquemia >6h (síndrome compartimental de reperfusão)
9. Hidratação agressiva: SF 0,9% 200mL/h (mioglobinúria por reperfusão)
10. Monitorar: CK, mioglobina, K+, gasometria, função renal
11. Bicarbonato de sódio 8,4% se pH urinário <6,5
12. Manitol 20% 0,5g/kg EV (proteção renal — controvérso)
13. Pulsos distais + Doppler contínuo pós-op
14. Anticoagulação de longo prazo: transição para Warfarina ou DOAC`,
    warnings: "Síndrome de reperfusão: hipercalemia, acidose, mioglobinúria → pode causar PCR e IRA. Fasciotomia profilática em isquemia >6h. Rutherford III (irreversível) = considerar amputação primária.",
    guideline: "SBACV / SVS / ESVS / ACC/AHA",
  },
  {
    id: "rx-pe-diabetico-avancado",
    title: "Pé Diabético — Manejo Avançado",
    type: "Prescrição Hospitalar / Cirurgia Vascular",
    prescription: `CLASSIFICAÇÃO DE WAGNER:
0: pé em risco (sem úlcera)
1: úlcera superficial
2: úlcera profunda (tendão/cápsula)
3: osteomielite / abscesso profundo
4: gangrena localizada
5: gangrena extensa

MANEJO GERAL:
1. Controle glicêmico rigoroso: insulina EV em BIC se internado (alvo 140-180)
2. Desbridamento cirúrgico de tecido necrótico (Wagner ≥2 com infecção)
3. Antibioticoterapia (guiada por cultura + antibiograma):
   Moderada: Ampicilina-Sulbactam 3g EV 6/6h
   Grave: Piperacilina-Tazobactam 4,5g EV 6/6h + Vancomicina 15-20mg/kg EV 12/12h
4. Curativo diário com SF 0,9% + cobertura especial:
   Exsudativa: alginato de cálcio ou hidrofibra com prata
   Granulação: hidrogel ou gaze não aderente
   Epitelização: filme transparente ou espuma
5. Descarga total (bota gessada de contato total ou sandália de descarga)

AVALIAÇÃO VASCULAR:
6. ITB (Índice Tornozelo-Braquial): <0,9 = DAP; <0,5 = isquemia crítica
7. Doppler arterial / AngioTC de MMII se ITB alterado
8. Se isquemia crítica: revascularização (angioplastia ou bypass) ANTES de amputação
9. Oxigenoterapia hiperbárica (adjuvante — se disponível)

OSTEOMIELITE:
10. RNM é o padrão-ouro para diagnóstico
11. Biópsia óssea + cultura: guia ATB por 6-8 semanas
12. ATB EV 2-4 semanas → VO 2-4 semanas (mínimo 6 semanas total)
13. Avaliar necessidade de ressecção óssea`,
    notes: "Equipe multidisciplinar obrigatória: endócrino, vascular, ortopedia, enfermagem especializada. Salvamento de membro deve ser sempre tentado antes de amputação.",
    guideline: "IWGDF / SBD / SBACV / IDSA",
  },
  {
    id: "rx-trombose-venosa-profunda-extensa",
    title: "TVP Extensa — Flegmasia / Síndrome Pós-Trombótica",
    type: "Prescrição Hospitalar / Cirurgia Vascular",
    prescription: `TVP ILIOFEMORAL EXTENSA:
1. Enoxaparina 1mg/kg SC 12/12h OU Heparina NF EV em BIC (TTPa 1,5-2,5x)
2. Elevação do membro
3. Meias elásticas de compressão (30-40mmHg) — NÃO na fase aguda com dor intensa

FLEGMASIA CERULEA DOLENS (emergência vascular):
4. Heparina NF 80UI/kg bolus → 18UI/kg/h EV BIC
5. Trombólise dirigida por cateter (CDT): Alteplase 0,5-1mg/h intra-trombo
6. OU Trombectomia farmacoquímica (AngioJet, EKOS)
7. OU Trombectomia cirúrgica (se contraindicação à trombólise)
8. Fasciotomia se síndrome compartimental
9. Se gangrena venosa: amputação pode ser necessária

FILTRO DE VEIA CAVA INFERIOR:
10. Indicação: contraindicação absoluta à anticoagulação + TEP/TVP OU TEP recorrente apesar de anticoagulação
11. Preferir filtro removível

TRANSIÇÃO PARA ANTICOAGULAÇÃO ORAL:
12. Warfarina: iniciar junto com heparina → manter heparina até INR 2-3 por 48h
13. OU DOAC: Rivaroxabana 15mg 12/12h por 21 dias → 20mg 1x/dia
14. Duração: 3-6 meses (provocada) OU indefinida (não provocada/recorrente)`,
    guideline: "SBACV / SVS / CHEST / ASH",
  },
  {
    id: "rx-aneurisma-aorta-abd-eletivo",
    title: "Aneurisma de Aorta Abdominal — Peri-Operatório Eletivo",
    type: "Prescrição Cirúrgica / Vascular",
    prescription: `INDICAÇÃO CIRÚRGICA:
- AAA ≥5,5cm (homem) ou ≥5,0cm (mulher)
- Crescimento >1cm/ano
- Sintomático (dor abdominal/lombar)

PRÉ-OPERATÓRIO:
1. Avaliação cardiovascular (risco Goldman/Lee)
2. Ecocardiograma + teste de estresse se indicado
3. AngioTC de aorta (planejamento)
4. Betabloqueador: Atenolol 25-50mg VO (iniciar 7 dias antes se possível)
5. Estatina: Atorvastatina 40-80mg VO
6. Reserva de CH 4U + PFC 4U + Plaquetas 1U
7. Acesso central + PAI (linha arterial)

PÓS-OPERATÓRIO (aberto):
8. UTI por 24-48h mínimo
9. Monitorização hemodinâmica invasiva
10. Analgesia peridural torácica (ideal) OU PCA com Morfina
11. DVA se necessário (Noradrenalina ± Dobutamina)
12. Dieta enteral precoce (se tolerada)
13. Profilaxia TVP: HNF 5000UI SC 8/8h (após hemostasia)
14. Monitorar: função renal (isquemia de pinçamento), abdome (isquemia intestinal), MMII (pulsos)
15. Colonoscopia se suspeita de colite isquêmica (diarreia sanguinolenta pós-op)`,
    guideline: "SBACV / SVS / ESVS / ACC/AHA",
  },
  // === MEDICINA DO TRABALHO ===
  {
    id: "rx-acidente-material-biologico",
    title: "Acidente com Material Biológico — Protocolo PEP",
    type: "Prescrição de Emergência / Saúde Ocupacional",
    prescription: `ATENDIMENTO IMEDIATO (0h):
1. Lavar ferimento com água e sabão por 5min (NÃO espremer)
2. Mucosa: irrigar com SF 0,9% ou água abundante
3. NÃO usar soluções irritantes (hipoclorito, éter, glutaraldeído)

AVALIAÇÃO DE RISCO:
4. Tipo de exposição: percutânea (agulha) > mucosa > pele íntegra
5. Tipo de material: sangue > fluidos com sangue > outros
6. Status do paciente-fonte: HIV, HBV, HCV (solicitar testes rápidos IMEDIATO)
7. Status do profissional: vacinação HBV, anti-HBs

PROFILAXIA PÓS-EXPOSIÇÃO (PEP) — HIV:
Se indicada (fonte HIV+ ou desconhecida de risco):
8. Iniciar em ATÉ 2 HORAS (máx 72h) — cada hora conta
9. Esquema preferencial: TDF/3TC (Tenofovir/Lamivudina) 300/300mg 1cp VO 1x/dia
   + DTG (Dolutegravir) 50mg VO 1x/dia
10. Duração: 28 dias (sem interrupção)
11. Testes do profissional: HIV, HBV, HCV, hemograma, função renal, hepatograma (basal)
12. Seguimento sorológico: 30, 90 e 180 dias

HEPATITE B:
13. Se não vacinado ou anti-HBs <10: IGHAHB 0,06mL/kg IM + iniciar/completar vacinação
14. Se vacinado com anti-HBs ≥10: tranquilizar

HEPATITE C:
15. Sem profilaxia disponível — acompanhar com HCV-RNA em 6 semanas e anti-HCV 3-6 meses
16. Se soroconversão: tratar com DAA (encaminhar hepatologia)

NOTIFICAÇÃO:
17. CAT (Comunicação de Acidente de Trabalho) obrigatória
18. Notificação SINAN (compulsória)`,
    warnings: "PEP HIV: iniciar o MAIS RÁPIDO possível — eficácia diminui drasticamente após 2h. NÃO atrasar para aguardar resultado do fonte. Na DÚVIDA, iniciar e reavaliar.",
    guideline: "MS / PCDT PEP 2021 / CDC / OMS",
  },
  {
    id: "rx-acidente-perfurocortante",
    title: "Acidente Perfurocortante — Fluxo Completo",
    type: "Prescrição de Emergência / Saúde Ocupacional",
    prescription: `FLUXO DE ATENDIMENTO:

1. CUIDADOS LOCAIS IMEDIATOS:
   - Perfurocortante: lavar com água e sabão abundante
   - Respingo em mucosa: lavar com SF ou água corrente por 15min
   - Pele íntegra: sem risco significativo (lavar com água e sabão)

2. TESTE RÁPIDO DO PACIENTE-FONTE (se disponível):
   - HIV teste rápido (resultado em 15-30min)
   - HBsAg
   - Anti-HCV
   - Se fonte desconhecida ou não testável: considerar PEP

3. AVALIAÇÃO DO PROFISSIONAL:
   - Cartão vacinal HBV (3 doses?)
   - Anti-HBs prévio (≥10UI/L = protegido)
   - Sorologia basal: HIV, HBV, HCV

4. DECISÃO PEP HIV (INICIAR EM <2h):
   Fonte HIV+: PEP indicada → TDF/3TC + DTG por 28 dias
   Fonte HIV desconhecida (risco): considerar PEP → decidir com infectologista
   Fonte HIV negativa (teste rápido): PEP NÃO indicada

5. DECISÃO HBV:
   Profissional vacinado + anti-HBs ≥10: nada a fazer
   Profissional não vacinado + fonte HBsAg+: IGHAHB + vacina
   
6. SEGUIMENTO:
   Hemograma + creatinina + hepatograma: basal, 15d, 30d
   Sorologia HIV: 30, 90, 180 dias
   HCV-RNA: 6 semanas | Anti-HCV: 3, 6 meses

7. DOCUMENTAÇÃO:
   - Ficha de notificação SINAN
   - CAT (CLT) ou equivalente (servidor público)
   - Prontuário do profissional (sigilo)`,
    guideline: "MS / PCDT PEP 2021 / NR-32 / CDC",
  },
  {
    id: "rx-dermatose-ocupacional",
    title: "Dermatose Ocupacional — Manejo",
    type: "Prescrição Ambulatorial / Saúde Ocupacional",
    prescription: `INVESTIGAÇÃO:
1. História ocupacional detalhada: agente, exposição, tempo, EPI
2. Patch test (teste de contato) — padrão-ouro para dermatite de contato alérgica
3. Biópsia se dúvida diagnóstica

DERMATITE DE CONTATO IRRITATIVA (mais comum):
4. Afastamento do agente causal
5. Creme barreira: Dexpantenol 5% ou Vaselina 3x/dia
6. Corticoide tópico: Betametasona 0,05% creme 2x/dia por 7-14 dias
7. Anti-histamínico: Loratadina 10mg VO 1x/dia (se prurido)

DERMATITE DE CONTATO ALÉRGICA:
8. Afastamento DEFINITIVO do alérgeno
9. Corticoide tópico potente: Clobetasol 0,05% creme 2x/dia por 7-10 dias
10. Se extenso: Prednisona 0,5mg/kg/dia VO por 7-14 dias (desmame)
11. Emolientes: ureia 10% 2x/dia

ORIENTAÇÕES:
12. EPI adequado (luvas de material compatível, mangas longas)
13. Notificação como doença ocupacional (SINAN)
14. CAT se CLT
15. Encaminhar dermatologia ocupacional se recorrente
16. Readaptação funcional se impossibilidade de evitar agente`,
    guideline: "SBD / ANAMT / MS / NR-7",
  },
  {
    id: "rx-cetoacidose-alcoolica",
    title: "Cetoacidose Alcoólica",
    type: "Endocrinologia / Emergência",
    prescription: `1. Dieta zero inicialmente
2. SF 0,9% 1000mL EV em 1h (bolus) → manter 250mL/h
3. SG 5% 1000mL + NaCl 20% 20mL EV — FUNDAMENTAL (glicose suprime cetogênese)
4. Tiamina (Vit B1) 300mg EV ANTES da glicose (prevenir Wernicke)
5. Complexo B 1 amp EV 1x/dia
6. Sulfato de Magnésio 50% 2g (4mL) EV em 20min
7. KCl 19,1% 10mL em cada 500mL de SF (manter K+ 4-5)
8. Ondansetrona 4mg EV 8/8h (antiemético)
9. Omeprazol 40mg EV 1x/dia
10. Glicemia capilar 1/1h
11. Gasometria 2/2h até AG normalizar
12. Eletrólitos (Na, K, Mg, P) 6/6h
13. Monitorização cardíaca contínua
14. NÃO usar insulina (diferente da CAD diabética!)
15. NÃO usar bicarbonato (exceto pH <6,9)`,
    alternatives: "Se desidratação grave: SF 0,9% 2000mL na 1ª hora. Se hipofosfatemia: Fosfato de potássio 20mmol em 6h.",
    warnings: "SEMPRE dar Tiamina ANTES de glicose — risco de Encefalopatia de Wernicke. A cetoacidose alcoólica NÃO cursa com hiperglicemia significativa (diferente da CAD). Cetona sérica pode ser falsamente BAIXA (predomina beta-hidroxibutirato, não detectado pelo teste de nitroprussiato).",
    guideline: "UpToDate / ADA / Sociedade Brasileira de Endocrinologia",
  },
  {
    id: "rx-hipocalcemia-grave",
    title: "Hipocalcemia Grave (Sintomática / Ca²⁺ <7,0)",
    type: "Endocrinologia / Emergência",
    prescription: `1. Monitorização cardíaca contínua (risco de QT longo → Torsades)
2. Gluconato de Cálcio 10% 20mL (2 ampolas) EV em 10-20min — DILUÍDO em 100mL SF
3. Manutenção: Gluconato de Cálcio 10% 60mL (6 amp) em 500mL SF EV em 6h (infusão contínua)
4. Dosar Ca²⁺ ionizado 2/2h — meta: Ca²⁺i >4,0mg/dL
5. Corrigir hipomagnesemia SIMULTANEAMENTE:
   - MgSO4 50% 2g (4mL) EV em 20min → manter 1g/h por 6h
6. Se pH >7,45 (alcalose): corrigir primeiro (alcalose piora hipocalcemia)
7. Após estabilização: Carbonato de Cálcio 500mg VO 8/8h
8. Calcitriol 0,25-0,5mcg VO 12/12h
9. Colecalciferol 50.000UI VO 1x/semana (se Vit D baixa)
10. ECG seriado (monitorar QTc)
11. Evitar furosemida (aumenta calciúria)
12. Fosfato sérico: se elevado, restringir fósforo na dieta`,
    warnings: "NÃO usar Cloreto de Cálcio em veia periférica (necrose tecidual). Gluconato de Cálcio é mais seguro. NUNCA infundir cálcio com bicarbonato no mesmo acesso (precipita). Hipocalcemia refratária: pensar em hipomagnesemia não corrigida.",
    guideline: "Endocrine Society / SBEM / Uptodate",
  },
  {
    id: "rx-crise-tireotoxica",
    title: "Crise Tireotóxica (Burch-Wartofsky ≥45)",
    type: "Endocrinologia / Emergência",
    prescription: `1. Internação em UTI — monitorização contínua
2. BLOQUEAR SÍNTESE:
   - Propiltiouracil (PTU) 200mg VO/SNG 4/4h (preferir PTU: bloqueia T4→T3)
   - OU Metimazol 20mg VO/SNG 6/6h
3. BLOQUEAR LIBERAÇÃO (1h APÓS antitireoidiano):
   - Lugol 10 gotas VO 8/8h OU Iodeto de potássio saturado (SSKI) 5 gotas 6/6h
4. BLOQUEAR CONVERSÃO PERIFÉRICA:
   - Hidrocortisona 100mg EV 8/8h (bloqueia T4→T3 + trata insuficiência adrenal relativa)
5. BLOQUEAR EFEITOS ADRENÉRGICOS:
   - Propranolol 60-80mg VO 6/6h (bloqueia T4→T3 também)
   - OU Esmolol EV se VO impossível: 500mcg/kg bolus → 50-100mcg/kg/min
6. Paracetamol 750mg EV 6/6h (antitérmico — NÃO usar AAS: desloca T4 da albumina)
7. Resfriamento ativo se T>40°C
8. Hidratação: SG5% + SF0,9% 150mL/h
9. Tratar fator precipitante (infecção, cirurgia, iodo)
10. TSH, T4L, T3 na admissão + 24/24h`,
    warnings: "SEQUÊNCIA É FUNDAMENTAL: antitireoidiano PRIMEIRO, iodo DEPOIS (1h). Iodo sem bloqueio prévio = Jod-Basedow (piora). NÃO usar AAS (aumenta T4 livre). Mortalidade 10-30% mesmo com tratamento.",
    guideline: "ATA / SBEM / Burch-Wartofsky Score",
  },
  {
    id: "rx-insuficiencia-adrenal-aguda",
    title: "Insuficiência Adrenal Aguda (Crise Addisoniana)",
    type: "Endocrinologia / Emergência",
    prescription: `1. Hidrocortisona 100mg EV em bolus IMEDIATO
2. Hidrocortisona 50mg EV 6/6h (primeiras 24h)
3. SF 0,9% 1000mL EV em 1h (expansão volêmica agressiva)
4. Manter SF 0,9% 250mL/h até estabilização hemodinâmica
5. SG 10% se hipoglicemia (glicemia capilar 1/1h)
6. Monitorização cardíaca contínua
7. Eletrólitos 4/4h (Na+, K+) — hipercalemia frequente
8. Se K+ >6,0: Gluconato de Ca 10% 10mL EV + Insulina R 10UI + SG50% 50mL
9. NÃO usar mineralocorticoide na fase aguda (Hidrocortisona em dose de estresse já tem efeito mineralocorticoide)
10. Após estabilização (D2-D3): reduzir para Hidrocortisona 20mg manhã + 10mg tarde VO
11. Fludrocortisona 0,1mg VO 1x/dia (manutenção — insuficiência primária)
12. Identificar e tratar fator precipitante`,
    notes: "Fatores precipitantes: infecção, cirurgia, suspensão abrupta de corticoide, trauma. Em pacientes em uso crônico de corticoide: dose de estresse = Hidrocortisona 100mg EV antes de procedimentos.",
    guideline: "Endocrine Society / SBEM / Uptodate",
  },
  {
    id: "rx-feocromocitoma-crise",
    title: "Crise Hipertensiva por Feocromocitoma",
    type: "Endocrinologia / Emergência",
    prescription: `1. UTI — monitorização invasiva (PA intra-arterial)
2. ALFA-BLOQUEIO PRIMEIRO (NUNCA beta-bloqueador isolado!):
   - Fentolamina 5mg EV em bolus → repetir 5/5min até PA controlada
   - OU Nitroprussiato de sódio 0,5-10mcg/kg/min EV (BIC)
3. APÓS alfa-bloqueio adequado, SE taquicardia:
   - Esmolol 500mcg/kg bolus → 50-200mcg/kg/min
   - OU Propranolol 1mg EV lento (repetir até FC <100)
4. Hidratação: SF 0,9% 250mL/h (depleção volêmica crônica)
5. Glicemia capilar 1/1h (risco de hipoglicemia pós alfa-bloqueio)
6. Metanefrina e Catecolaminas urinárias 24h
7. TC/RM de abdome após estabilização
8. Pré-operatório (se indicado):
   - Doxazosina 2-4mg VO 12/12h (iniciar 10-14 dias antes)
   - Dieta hipersódica + hidratação abundante
   - Beta-bloqueador SOMENTE após 3 dias de alfa-bloqueio`,
    warnings: "NUNCA usar beta-bloqueador ANTES do alfa-bloqueio → vasoconstrição alfa sem oposição → crise hipertensiva paradoxal fatal. Evitar Metoclopramida, Droperidol, Naloxona (podem precipitar crise).",
    guideline: "Endocrine Society / SBEM / AHA",
  },
  {
    id: "rx-hipercalcemia-grave",
    title: "Hipercalcemia Grave (Ca²⁺ >14mg/dL ou sintomática)",
    type: "Endocrinologia / Emergência",
    prescription: `1. Hidratação AGRESSIVA: SF 0,9% 200-500mL/h (meta: diurese 200-300mL/h)
2. Após reidratação adequada: Furosemida 20-40mg EV 6/6h (SOMENTE se euvolêmico)
3. Ácido Zoledrônico 4mg EV em 100mL SF em 15min (efeito em 2-4 dias)
   - OU Pamidronato 60-90mg EV em 500mL SF em 4h
4. Se refratária ou neoplásica: Denosumabe 120mg SC
5. Calcitonina 4UI/kg SC/IM 12/12h (efeito rápido mas transitório — taquifilaxia em 48h)
6. Hidrocortisona 200mg EV/dia (se linfoma, mieloma, intoxicação por Vit D)
7. Ca²⁺ sérico + ionizado 6/6h
8. Eletrólitos (Na, K, Mg, P) 6/6h
9. ECG (QT curto, arritmias)
10. Monitorização cardíaca contínua
11. Diurese rigorosa
12. Diálise se IRC associada ou refratária`,
    warnings: "NÃO usar Furosemida em paciente DESIDRATADO. Hidratar PRIMEIRO. A causa mais comum é hiperparatireoidismo (ambulatorial) e neoplasia (internação). Bifosfonato contraindicado se ClCr <30.",
    guideline: "Endocrine Society / ASCO / SBEM",
  },
  {
    id: "rx-corpo-delito",
    title: "Exame de Corpo de Delito — Orientações Médicas",
    type: "Medicina Legal",
    prescription: `ORIENTAÇÕES PARA EXAME DE CORPO DE DELITO NO PS:

1. O MÉDICO PLANTONISTA NÃO realiza perícia — apenas ATENDE e DOCUMENTA
2. Documentação médica detalhada:
   a. Descrever TODAS as lesões: localização (usar termos anatômicos), dimensões (cm), tipo (escoriação, equimose, ferimento corto-contuso, perfuro-inciso, LAB, etc.)
   b. Fotografar com CONSENTIMENTO (anexar ao prontuário)
   c. Registrar mecanismo referido pelo paciente (entre aspas: "paciente refere que...")
   d. Hora exata do atendimento
3. Classificar natureza das lesões (Art. 129 CP):
   - Leve: sem sequela permanente, incapacidade <30 dias
   - Grave: incapacidade >30 dias, perigo de vida, debilidade permanente
   - Gravíssima: incapacidade permanente, enfermidade incurável, deformidade permanente
4. Preencher Boletim de Atendimento completo
5. Notificação SINAN se violência (Portaria MS 104/2011)
6. Encaminhar paciente ao IML para perícia oficial
7. NÃO emitir laudo pericial (competência do perito legista)
8. Guardar amostras biológicas se indicado (cadeia de custódia)
9. Orientar paciente sobre BO na delegacia
10. Se menor de idade ou incapaz: notificação ao Conselho Tutelar OBRIGATÓRIA`,
    notes: "O médico do PS tem obrigação de atender INDEPENDENTEMENTE de BO. A documentação médica pode ser requisitada judicialmente. Sigilo médico mantido exceto nos casos previstos em lei (violência, menor, notificação compulsória).",
    guideline: "CFM / Código Penal Art. 129 / Lei 10.778/2003 / ECA",
  },
  {
    id: "rx-pericia-embriaguez",
    title: "Perícia de Embriaguez — Conduta no PS",
    type: "Medicina Legal",
    prescription: `CONDUTA MÉDICA EM SUSPEITA DE EMBRIAGUEZ:

1. ATENDER o paciente (prioridade é saúde, não perícia)
2. Sinais clínicos de intoxicação alcoólica a documentar:
   a. Hálito etílico (presente/ausente)
   b. Fala (normal/pastosa/incoerente)
   c. Marcha (normal/ebriosa/impossibilitada)
   d. Equilíbrio (Romberg)
   e. Coordenação (dedo-nariz, calcanhar-joelho)
   f. Pupilas (midríase/normal)
   g. Consciência (Glasgow)
   h. Orientação tempo-espaço
3. NÃO realizar etilometria (competência policial — Lei Seca 12.760/2012)
4. Dosagem de alcoolemia pode ser solicitada CLINICAMENTE se necessário
5. Se traumatismo associado: protocolo de trauma habitual
6. Se Glasgow ≤13: TC de crânio (excluir TCE)
7. Glicemia capilar (excluir hipoglicemia)
8. Se intoxicação grave (coma, depressão respiratória):
   - IOT se Glasgow ≤8
   - Tiamina 300mg EV
   - SG 50% 50mL EV (se hipoglicemia)
   - Monitorização
9. O médico NÃO pode ser obrigado a colher sangue para fins periciais
10. Documentar recusa do paciente em realizar exames (se aplicável)`,
    warnings: "O médico NÃO é perito — atende clinicamente. Dosagem de alcoolemia para fins legais requer CONSENTIMENTO do paciente (ou ordem judicial). Art. 306 CTB: crime é conduzir com capacidade alterada, não apenas ter álcool no sangue.",
    guideline: "CFM Res. 1931/2009 / Lei 12.760/2012 / CTB Art. 306",
  },
  {
    id: "rx-lesao-corporal-documentacao",
    title: "Documentação de Lesão Corporal — Modelo",
    type: "Medicina Legal",
    prescription: `MODELO DE DESCRIÇÃO DE LESÕES NO PRONTUÁRIO:

"Ao exame físico dirigido, identifico:
1. Escoriação linear de aproximadamente [X]cm em [localização anatômica], com [características: crosta hemática, sangramento ativo, bordas regulares/irregulares]
2. Equimose de coloração [avermelhada/arroxeada/esverdeada/amarelada] de [X]x[Y]cm em [localização]
3. Ferimento corto-contuso de [X]cm em [localização], com [bordas irregulares, ponte de tecido, escoriação perilesional]
4. Ferimento perfuro-inciso de [X]cm em [localização], com [bordas regulares, cauda de escoriação — indicar direção]
5. Edema de partes moles em [localização]
6. Hematoma subgaleal/subdural/epidural (se TC)"

CLASSIFICAÇÃO TEMPORAL DAS EQUIMOSES (Legrand du Saulle):
- Vermelho-escuro: recente (<24h)
- Violáceo: 1-3 dias
- Azulado: 3-6 dias
- Esverdeado: 7-12 dias
- Amarelado: 12-20 dias
- Normal: >20 dias

CONDUTA:
1. Suturar/tratar lesões conforme indicação clínica
2. Fotografar (com régua para escala) se consentimento
3. Solicitar exames complementares conforme indicação (RX, TC)
4. Encaminhar ao IML
5. Atestado de comparecimento ao paciente`,
    notes: "Esta classificação temporal é aproximada e pode variar. Múltiplas cores numa mesma equimose sugerem lesões em tempos diferentes (importante para violência doméstica e maus-tratos).",
    guideline: "Hygino Hercules / Genival Veloso / CFM",
  },
  {
    id: "rx-morte-encefalica-protocolo",
    title: "Protocolo de Morte Encefálica (Res. CFM 2.173/2017)",
    type: "Medicina Legal / UTI",
    prescription: `PRÉ-REQUISITOS PARA ABERTURA DE PROTOCOLO:
1. Coma aperceptivo (Glasgow 3) com causa conhecida e irreversível
2. Tempo mínimo de observação em UTI:
   - Adultos: 6h (ou 24h se causa hipóxico-isquêmica)
   - Crianças 2m-2a: 24h
   - RN 7d-2m: 48h
3. Excluir: hipotermia (<35°C), drogas depressoras SNC, distúrbio metabólico grave

PROCEDIMENTOS OBRIGATÓRIOS (2 exames clínicos + 1 complementar):

EXAME CLÍNICO (por 2 médicos diferentes, 1 especialista):
1. Coma aperceptivo (Glasgow 3)
2. Pupilas fixas e arreativas (midríase ou médias)
3. Ausência de reflexo corneopalpebral bilateral
4. Ausência de reflexo oculocefálico
5. Ausência de reflexo vestíbulo-calórico (50mL água gelada cada ouvido, aguardar 5min)
6. Ausência de reflexo de tosse (aspiração traqueal profunda)
7. Teste de Apneia:
   - Pré-oxigenar com FiO2 100% por 10min
   - Desconectar VM
   - Instalar O2 6L/min no TOT
   - Aguardar 10min
   - Gasometria: confirmar PaCO2 ≥55mmHg
   - AUSÊNCIA de movimentos respiratórios

EXAME COMPLEMENTAR (1 obrigatório):
- Arteriografia cerebral (padrão-ouro)
- Doppler transcraniano
- EEG (30min, 8 canais)
- Cintilografia cerebral (SPECT)

INTERVALO ENTRE EXAMES:
- >2 anos: 1h
- 1-2 anos: 12h
- 2 meses-1 ano: 24h

PÓS-CONFIRMAÇÃO:
1. Comunicar família
2. Notificar Central de Transplantes (OPO) — OBRIGATÓRIO
3. Manter suporte se doação de órgãos
4. Registrar horário do óbito = hora do último exame
5. Preencher Declaração de Óbito`,
    warnings: "Protocolo é OBRIGATÓRIO (Decreto 9.175/2017). Médicos examinadores NÃO podem fazer parte da equipe de transplante. Notificação à OPO é obrigatória INDEPENDENTE da doação.",
    guideline: "CFM Res. 2.173/2017 / Decreto 9.175/2017 / ABTO",
  },
  {
    id: "rx-desmame-noradrenalina",
    title: "Desmame de Noradrenalina",
    type: "UTI / Desmame de DVA",
    prescription: `CRITÉRIOS PARA INICIAR DESMAME:
1. PAM ≥65mmHg estável por ≥2h
2. Lactato em queda ou normalizado
3. Diurese ≥0,5mL/kg/h
4. SvO2 >65% ou ScvO2 >70%
5. Foco infeccioso controlado / ATB adequado
6. Sem sinais de hipoperfusão (livedo, extremidades frias)

PROTOCOLO DE DESMAME:
1. Reduzir 0,02-0,05mcg/kg/min a cada 15-30min
2. Se dose <0,1mcg/kg/min e PAM estável: reduzir mais agressivamente
3. Monitorizar PA a cada 5min durante desmame
4. Se PAM cair >10%: retornar à dose anterior, aguardar 30-60min
5. Suspender quando dose <0,02mcg/kg/min com PAM ≥65

OTIMIZAÇÃO PRÉ-DESMAME:
- Corrigir hipovolemia (PVC, variação de PP, elevação passiva de MMII)
- Hidrocortisona 50mg EV 6/6h se choque refratário (dose de estresse)
- Corrigir acidose (pH >7,25)
- Hemoglobina ≥7g/dL (ou ≥9 se coronariopata/hemorragia ativa)
- Corrigir hipocalcemia (Ca²⁺i >4,0)

SE FALHA NO DESMAME (2ª tentativa):
1. Reavaliar volemia
2. Considerar insuficiência adrenal (Cortisol randômico + iniciar Hidrocortisona)
3. Ecocardiograma à beira-leito
4. Pesquisar novo foco infeccioso`,
    notes: "DVA não é tratamento, é suporte. O desmame deve ocorrer assim que possível. Manter meta de PAM individualizada (PAM 70-75 em hipertensos crônicos).",
    guideline: "SSC 2021 / AMIB / Uptodate",
  },
  {
    id: "rx-desmame-vasopressina",
    title: "Desmame de Vasopressina",
    type: "UTI / Desmame de DVA",
    prescription: `INDICAÇÃO DE VASOPRESSINA:
- Associar quando Noradrenalina >0,25-0,5mcg/kg/min
- Dose FIXA: 0,03-0,04UI/min (NÃO titular)

PROTOCOLO DE DESMAME:
1. Desmamar Noradrenalina PRIMEIRO até dose baixa (<0,1mcg/kg/min)
2. SOMENTE ENTÃO iniciar desmame de Vasopressina
3. Reduzir 0,01UI/min a cada 30-60min
4. Se hipotensão: retornar dose anterior + reavaliar Noradrenalina
5. Suspender quando dose ≤0,01UI/min com PAM estável

MONITORIZAÇÃO:
- PA contínua (idealmente invasiva)
- Diurese horária
- Lactato 4/4h
- Natremia 6/6h (vasopressina pode causar hiponatremia)
- Glicemia 4/4h

CUIDADOS:
- Acesso venoso central exclusivo
- Não misturar com outras drogas no mesmo lúmen
- Isquemia digital/esplâncnica: reduzir/suspender
- Se necrose de extremidades: suspender imediatamente`,
    warnings: "NUNCA titular vasopressina como noradrenalina. Dose fixa de 0,03-0,04UI/min. Desmame de vasopressina é o ÚLTIMO passo (após desmamar nora). Risco de isquemia mesentérica e digital.",
    guideline: "SSC 2021 / VASST Trial / AMIB",
  },
  {
    id: "rx-desmame-dobutamina",
    title: "Desmame de Dobutamina",
    type: "UTI / Desmame de DVA",
    prescription: `CRITÉRIOS PARA DESMAME:
1. IC/DC adequado (IC >2,2 L/min/m²)
2. SvO2/ScvO2 normalizada
3. Lactato em queda
4. Sem sinais de baixo débito (extremidades quentes, TEC <3s)
5. Diurese adequada
6. Ecocardiograma: FEVE estável ou melhorando

PROTOCOLO:
1. Reduzir 2,5mcg/kg/min a cada 30-60min
2. Monitorizar: PA, FC, diurese, ScvO2 a cada redução
3. Se FC aumentar >20% ou ScvO2 cair >5%: retornar dose anterior
4. Suspender quando dose <2,5mcg/kg/min com parâmetros estáveis
5. Eco controle após suspensão

ATENÇÃO:
- Evitar suspensão abrupta (down-regulation de receptores beta)
- Se IC/FEVE-dependente: considerar Milrinone ou Levosimendan como ponte
- Em IC crônica descompensada: pode ser necessário transição para inotrópico oral ou indicação de dispositivo

SE FALHA NO DESMAME:
1. Ecocardiograma (função VE/VD)
2. Otimizar pré-carga
3. Considerar Levosimendan 0,1mcg/kg/min por 24h (sensibilizador de cálcio)
4. Avaliar suporte mecânico (BIA, Impella, ECMO VA)`,
    guideline: "ESC Heart Failure / SBC IC / AMIB",
  },
  {
    id: "rx-desmame-milrinone",
    title: "Desmame de Milrinone",
    type: "UTI / Desmame de DVA",
    prescription: `PROTOCOLO DE DESMAME:
1. Reduzir 0,125mcg/kg/min a cada 2-4h (meia-vida longa: 2,5h)
2. Monitorizar PA (risco de hipotensão — vasodilatador)
3. Se hipotensão: Noradrenalina em dose baixa como suporte
4. Suspender quando dose <0,125mcg/kg/min com hemodinâmica estável
5. AGUARDAR 4-6h após suspensão antes de considerar desmame concluído

CUIDADOS ESPECIAIS:
- Meia-vida prolongada na IRA (ajustar para ClCr)
- ClCr 10-50: reduzir dose em 25-50%
- ClCr <10: reduzir dose em 50-75%
- Trombocitopenia: HMG diário
- Arritmias: monitorização contínua
- NÃO associar com Levosimendan (mecanismos sobrepostos)`,
    guideline: "ESC / SBC / FDA prescribing information",
  },
  {
    id: "rx-desmame-nitroprussiato",
    title: "Desmame de Nitroprussiato de Sódio",
    type: "UTI / Desmame de DVA",
    prescription: `PROTOCOLO:
1. Reduzir 0,5-1mcg/kg/min a cada 10-15min
2. Monitorizar PA contínua (meia-vida ultracurta: 2min)
3. Se PA subir: retornar dose anterior, avaliar anti-hipertensivo VO/EV
4. Transição para anti-hipertensivo VO ANTES do desmame:
   - Captopril 25mg VO 8/8h OU
   - Anlodipino 5-10mg VO 1x/dia OU
   - Hidralazina 25mg VO 8/8h
5. Iniciar VO e desmamar BIC simultaneamente

TOXICIDADE POR CIANETO (>48h ou >2mcg/kg/min):
- Sinais: acidose metabólica inexplicada, taquifilaxia, confusão
- Dosar: tiocianato sérico (manter <10mg/dL)
- Antídoto: Hidroxocobalamina 5g EV OU Tiossulfato de sódio 12,5g EV
- Suspender Nitroprussiato IMEDIATAMENTE se suspeita

DURAÇÃO MÁXIMA RECOMENDADA: 48-72h`,
    warnings: "Risco de intoxicação por cianeto após 48h ou doses altas. Proteger da luz (fotossensível). Taquifilaxia = sinal de alerta de toxicidade. Monitorar tiocianato se uso >24h.",
    guideline: "AHA / SBC / UpToDate",
  },
  {
    id: "rx-hipotireoidismo-grave",
    title: "Hipotireoidismo Grave Subclínico Descompensado",
    type: "Endocrinologia",
    prescription: `1. Levotiroxina 1,6mcg/kg/dia VO em jejum (30-60min antes café)
2. Iniciar com dose baixa se idoso ou coronariopata: 12,5-25mcg/dia
3. Aumentar 12,5-25mcg a cada 4-6 semanas
4. TSH + T4L controle em 6 semanas
5. Se componente adrenal: Hidrocortisona ANTES da Levotiroxina
6. Monitorar lipidograma (dislipidemia associada)
7. Avaliar anemia (pode ser macrocítica — B12/folato)
8. ECG basal (bradicardia, baixa voltagem, derrame pericárdico)`,
    guideline: "ATA / SBEM / ETA",
  },
  {
    id: "rx-hiponatremia-grave",
    title: "Hiponatremia Grave (Na+ <120 ou sintomática)",
    type: "Endocrinologia / Nefrologia",
    prescription: `1. Se convulsão ou coma: NaCl 3% 150mL EV em 20min (pode repetir 1x)
2. Meta: elevar Na+ 4-6mEq/L nas primeiras 6h
3. LIMITE: não elevar >8mEq/L em 24h (risco de mielinólise pontina)
4. NaCl 3% preparo: NaCl 20% 60mL + SF 0,9% 440mL = 500mL a 3%
5. Na+ sérico 2/2h nas primeiras 12h, depois 4/4h
6. Osmolaridade sérica e urinária
7. Se SIADH: restrição hídrica 800-1000mL/dia + Furosemida 20mg VO
8. Se hipovolêmica: SF 0,9% 250mL/h
9. Se hipervolêmica (IC/cirrose): restrição hídrica + Furosemida
10. Tolvaptan 15mg VO 1x/dia (SIADH refratária — não disponível SUS)
11. Se correção excessiva: SG 5% 6-10mL/kg em 1h + Desmopressina 2mcg EV`,
    warnings: "MIELINÓLISE PONTINA: desmielinização osmótica se correção >8-10mEq/L/24h. Fatores de risco: alcoolismo, desnutrição, hipocalemia. Se corrigiu demais: REBAIXAR Na+ ativamente com SG5% + DDAVP.",
    guideline: "KDIGO / SBEM / European Guideline on Hyponatraemia",
  },
  {
    id: "rx-sindrome-lise-tumoral",
    title: "Síndrome de Lise Tumoral (SLT)",
    type: "Hematologia / Emergência",
    prescription: `1. Hiper-hidratação: SF 0,9% 3000mL/m²/dia (manter diurese >2mL/kg/h)
2. Rasburicase 0,2mg/kg EV em 30min (1ª linha se ácido úrico >8 ou alto risco)
   - OU Alopurinol 300-600mg/dia VO (se baixo risco)
3. Monitorar 6/6h: K+, Ca²⁺, P, ácido úrico, creatinina, LDH
4. Hipercalemia: tratar conforme protocolo (Gluconato Ca + Insulina/Glicose + Sorcal)
5. Hiperfosfatemia: Hidróxido de alumínio 300mg VO 8/8h + restrição de fósforo
6. Hipocalcemia: NÃO tratar se assintomática (risco de precipitação Ca-P)
7. NÃO alcalinizar urina se usando Rasburicase
8. Diálise se: K+ >6 refratário, oligúria, Ca-P >70, acidose refratária
9. ECG contínuo
10. Classificação Cairo-Bishop para estadiamento`,
    guideline: "ASCO / NCCN / Howard 2011 / SBH",
  },
  {
    id: "rx-rabdomiolise",
    title: "Rabdomiólise",
    type: "Nefrologia / Emergência",
    prescription: `1. Hidratação AGRESSIVA: SF 0,9% 1-2L/h nas primeiras 6h (meta: diurese >200-300mL/h)
2. Manter SF 0,9% 200-500mL/h até CK em queda e diurese adequada
3. Bicarbonato de Sódio 8,4% 100mL em 400mL SG5% (manter pH urinário >6,5 — previne precipitação mioglobina)
4. Manitol 20% 0,5g/kg EV se oligúria (controverso)
5. CK total 6/6h
6. Eletrólitos 4/4h (K+, Ca²⁺, P)
7. Creatinina, ureia 6/6h
8. Mioglobina urinária
9. Hipercalemia: protocolo padrão
10. Hipocalcemia: NÃO corrigir (cálcio se deposita no músculo lesado → hipercalcemia rebote na recuperação)
11. Diálise se: IRA oligúrica refratária, K+ >6,5 refratário, acidose grave
12. Fasciotomia se síndrome compartimental
13. Suspender estatinas/fibratos se causadores`,
    warnings: "CK >5000: alto risco de IRA. CK >15000: diálise frequentemente necessária. A hipocalcemia da fase aguda NÃO deve ser tratada (exceto se arritmia) — haverá hipercalcemia rebote na fase de recuperação.",
    guideline: "KDIGO / AMIB / UpToDate",
  },
  {
    id: "rx-hipertermia-maligna-completo",
    title: "Hipertermia Maligna — Protocolo Completo",
    type: "Anestesiologia / Emergência",
    prescription: `RECONHECIMENTO:
- Rigidez masseteriana após Succinilcolina
- Taquicardia inexplicada, hipercapnia, acidose
- Elevação rápida de temperatura (>1°C a cada 5min)
- Rabdomiólise (CK elevada, mioglobinúria)

TRATAMENTO IMEDIATO:
1. SUSPENDER agente desencadeante (halogenados, Succinilcolina)
2. Chamar AJUDA — avisar equipe
3. Hiperventilar com O2 100% (fluxo >10L/min)
4. Dantrolene 2,5mg/kg EV em bolus rápido → repetir 1mg/kg a cada 5min até controle (dose máx 10mg/kg)
   - Diluição: cada frasco 20mg em 60mL água estéril
5. Resfriamento ativo:
   - SF 0,9% gelado EV
   - Compressas geladas (axilas, virilhas, pescoço)
   - Lavagem gástrica/vesical com SF gelado
   - Meta: T <38,5°C (parar resfriamento — evitar hipotermia)
6. Bicarbonato de Sódio 8,4% 1-2mEq/kg se pH <7,2
7. Hipercalemia: Gluconato de Cálcio 10% 30mg/kg + Insulina R 0,1UI/kg + SG50%
8. Manter Dantrolene 1mg/kg EV 4/4h por 24-48h
9. Diurese forçada (Manitol ou Furosemida) — prevenir IRA por mioglobina
10. UTI obrigatória por ≥48h`,
    warnings: "Mortalidade sem Dantrolene: >70%. Com Dantrolene: <5%. TODO centro cirúrgico deve ter estoque de Dantrolene. Aconselhamento genético para família (herança autossômica dominante — mutação RYR1).",
    guideline: "MHAUS / SBA / ASA / EMHG",
  },
  {
    id: "rx-intoxicacao-digital",
    title: "Intoxicação Digitálica (Digoxina)",
    type: "Cardiologia / Toxicologia",
    prescription: `1. Suspender Digoxina IMEDIATAMENTE
2. Monitorização cardíaca contínua
3. ECG seriado (bradiarritmias, BAV, TV bidirecional, TSV com BAV)
4. Dosagem sérica de Digoxina (terapêutico: 0,5-2ng/mL; tóxico: >2ng/mL)
5. Eletrólitos: K+ (hipocalemia PIORA toxicidade), Mg²⁺, Ca²⁺
6. Corrigir K+ se <4,0: KCl 19,1% em SF — meta K+ 4,0-5,0
7. Se bradicardia sintomática: Atropina 0,5-1mg EV (pode repetir até 3mg)
8. Se taquiarritmia ventricular: Fenitoína 250mg EV em 10min OU Lidocaína 1mg/kg EV
9. NÃO usar cardioversão elétrica (exceto risco iminente de morte — usar energia mínima)
10. ANTÍDOTO — Fragmentos Fab anti-digoxina (Digibind):
    - Indicação: arritmia com risco de vida, K+ >5,5, digoxina >10ng/mL, ingestão >10mg
    - Dose: nº de frascos = (nível sérico ng/mL × peso kg) / 100
    - OU dose empírica: 10 frascos (ingestão aguda)
11. Diálise NÃO remove Digoxina (alto volume de distribuição)
12. Marcapasso provisório se BAV completo refratário à Atropina`,
    warnings: "NÃO usar Cálcio EV (stone heart). NÃO cardioverter (se inevitável: energia mínima). Hipocalemia e hipomagnesemia POTENCIALIZAM toxicidade. Fab é o único antídoto eficaz.",
    guideline: "AHA / SBC / AACT / UpToDate",
  },
  // ========== CIRURGIA TORÁCICA ==========
  {
    id: "rx-drenagem-torax",
    title: "Drenagem Torácica — Pneumotórax/Hemotórax",
    type: "Prescrição Cirúrgica",
    prescription: `PRÉ-PROCEDIMENTO:
1. Monitorização (SpO2, PA, FC, FR)
2. O2 suplementar — manter SpO2 >94%
3. Acesso venoso periférico calibroso
4. Tipagem sanguínea + reserva CH (se hemotórax)
5. RX tórax PA (confirmar lado)
6. Analgesia: Dipirona 1g EV + Tramadol 50mg EV
7. Anestesia local: Lidocaína 2% sem vasoconstritor — 20mL

PROCEDIMENTO:
8. Posição semi-sentada, braço ipsilateral abduzido
9. Incisão no 5º EIC, linha axilar média (triângulo de segurança)
10. Dissecção romba até pleura parietal
11. Dreno tubular 28-36Fr (adulto) — hemotórax: 36Fr
12. Fixar com fio 0 — ponto em U
13. Conectar ao selo d'água (frasco coletor)
14. Confirmar oscilação e borbulhamento

PÓS-PROCEDIMENTO:
15. RX tórax de controle
16. Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h
17. Cefazolina 1g EV (dose única profilática)
18. Registro de débito do dreno a cada 6h
19. Fisioterapia respiratória`,
    warnings: "Hemotórax maciço (>1500mL ou >200mL/h por 2-4h): indicação de toracotomia. NUNCA clampar dreno de tórax (risco de pneumotórax hipertensivo).",
    guideline: "ATLS / SBCT / BTS",
  },
  {
    id: "rx-mediastinite",
    title: "Mediastinite Aguda",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Dieta zero
2. Jejum + SNG aberta
3. SF 0,9% 1000mL EV — reposição volêmica agressiva
4. ATB empírico AMPLO ESPECTRO:
   - Meropenem 1g EV 8/8h + Vancomicina 15-20mg/kg EV 12/12h
   - OU Piperacilina-Tazobactam 4,5g EV 6/6h + Vancomicina
5. Analgesia: Dipirona 1g EV 6/6h + Tramadol 100mg EV 8/8h
6. Omeprazol 40mg EV 12/12h
7. Enoxaparina 40mg SC 1x/dia
8. Monitorização intensiva (UTI)
9. TC tórax com contraste (definir extensão e coleções)
10. CIRURGIA DE URGÊNCIA — drenagem mediastinal + cervicotomia
11. Coleta de cultura de secreção (aeróbio + anaeróbio + fungo)
12. Hemoculturas 2 amostras
13. HMG, PCR, procalcitonina, lactato, gasometria
14. Avaliar etiologia: perfuração esofágica (Boerhaave), pós-cirúrgica, odontogênica descendente`,
    warnings: "Mortalidade 20-50%. Diagnóstico precoce e cirurgia agressiva são decisivos. Mediastinite descendente necrotizante: origem cervical (infecção dentária/periamigdaliana).",
    guideline: "SBCT / ESTS / ACS",
  },
  {
    id: "rx-empiema-pleural",
    title: "Empiema Pleural",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta livre (se tolerar VO)
2. SF 0,9% 1000mL EV — manter acesso
3. ATB empírico:
   - Ceftriaxona 2g EV 1x/dia + Metronidazol 500mg EV 8/8h (comunitário)
   - Piperacilina-Tazobactam 4,5g EV 6/6h (nosocomial)
4. Analgesia: Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h
5. Drenagem pleural fechada (dreno 28-32Fr)
6. Se loculado: considerar fibrinolítico intrapleural (Alteplase 10mg + DNase 5mg em 30mL SF 2x/dia)
7. Fisioterapia respiratória
8. Omeprazol 40mg EV 1x/dia
9. Enoxaparina 40mg SC 1x/dia
10. Cultura + bioquímica do líquido pleural (pH, glicose, LDH, proteínas)
11. Se falha drenagem + fibrinolítico: VATS (videotoracoscopia)
12. RX tórax diário para controle`,
    guideline: "BTS / ATS / SBPT",
  },
  {
    id: "rx-quilotorax",
    title: "Quilotórax",
    type: "Prescrição Hospitalar",
    prescription: `TRATAMENTO CONSERVADOR (1ª linha):
1. Jejum OU dieta com TCM (triglicerídeos de cadeia média) — sem gordura de cadeia longa
2. NPT (nutrição parenteral total) se débito >1000mL/dia
3. Drenagem pleural (dreno de tórax)
4. Octreotida 100mcg SC 8/8h (reduz fluxo linfático)
5. Reposição proteica: Albumina 20% EV se albumina <2,5
6. Controle de eletrólitos e imunoglobulinas
7. Monitorizar linfócitos (risco de imunossupressão)

SE FALHA CONSERVADOR (>2 semanas ou >1L/dia):
8. Ligadura do ducto torácico (VATS ou toracotomia)
9. Pleurodese química (talco)

ETIOLOGIA:
- Pós-operatório (esofagectomia, cirurgia cardíaca)
- Linfoma
- Trauma`,
    guideline: "SBCT / ESTS / Chest",
  },
  {
    id: "rx-contusao-pulmonar",
    title: "Contusão Pulmonar",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Monitorização intensiva (SpO2, gasometria seriada)
2. O2 suplementar — manter SpO2 >94%
3. Analgesia MULTIMODAL (fundamental para ventilação adequada):
   - Dipirona 1g EV 6/6h
   - Tramadol 100mg EV 8/8h
   - Cetamina subdose 0,2mg/kg/h EV (adjuvante)
   - Considerar bloqueio intercostal/peridural torácica
4. Restrição hídrica relativa (evitar sobrecarga — piora edema pulmonar)
5. Fisioterapia respiratória intensiva
6. EVITAR: excesso de cristaloide
7. Se piora respiratória: VNI (BiPAP)
8. Se falha VNI ou PaO2/FiO2 <200: IOT + VM protetora (Vt 6mL/kg, PEEP otimizada)
9. TC tórax para avaliar extensão
10. RX tórax seriado (piora nas primeiras 24-72h)
11. Tratar fraturas costais associadas
12. Profilaxia TEV: Enoxaparina 40mg SC (se sem sangramento ativo)`,
    warnings: "Contusão pulmonar piora nas primeiras 24-72h. Ressuscitação volêmica excessiva agrava o quadro. Tórax instável associado: considerar fixação cirúrgica.",
    guideline: "ATLS / EAST / SBCT",
  },
  {
    id: "rx-torax-instavel",
    title: "Tórax Instável (Flail Chest)",
    type: "Prescrição UTI",
    prescription: `1. IOT + VM protetora se insuficiência respiratória
   (Vt 6mL/kg, PEEP 8-12, FiO2 para SpO2 >94%)
2. Analgesia AGRESSIVA — prioridade absoluta:
   - Peridural torácica contínua (Ropivacaína 0,2% + Fentanil 2mcg/mL)
   - OU Bloqueio do plano eretor (ESP block)
   - Tramadol 100mg EV 8/8h + Dipirona 1g EV 6/6h
   - PCA (analgesia controlada pelo paciente) se disponível
3. Fisioterapia respiratória intensiva (4x/dia)
4. Posição semi-sentada (30-45°)
5. SF 0,9% — restrição hídrica relativa
6. Enoxaparina 40mg SC 1x/dia (se sem sangramento)
7. Omeprazol 40mg EV 1x/dia

INDICAÇÃO CIRÚRGICA (fixação costal):
8. ≥3 costelas fraturadas com desvio
9. Necessidade de VM prolongada atribuída ao tórax instável
10. Deformidade grave da parede torácica
11. Toracotomia por outra indicação`,
    guideline: "EAST / ATLS / Chest Wall Injury Society",
  },
  // ========== ENDOCARDITE INFECCIOSA ==========
  {
    id: "rx-endocardite-valva-nativa",
    title: "Endocardite Infecciosa — Valva Nativa",
    type: "Prescrição Hospitalar",
    prescription: `EMPÍRICO (aguardando culturas):
1. Oxacilina 2g EV 4/4h + Gentamicina 3mg/kg/dia EV 1x/dia
2. Se alergia a penicilina: Vancomicina 15-20mg/kg EV 12/12h + Gentamicina

STREPTOCOCCUS (CIM ≤0,12):
3. Penicilina G Cristalina 4MUI EV 4/4h por 4 semanas
4. OU Ceftriaxona 2g EV 1x/dia por 4 semanas

STAPHYLOCOCCUS AUREUS MSSA:
5. Oxacilina 2g EV 4/4h por 6 semanas

STAPHYLOCOCCUS AUREUS MRSA:
6. Vancomicina 15-20mg/kg EV 12/12h por 6 semanas
7. ± Rifampicina 300mg VO 8/8h (se prótese)

ENTEROCOCCUS:
8. Ampicilina 2g EV 4/4h + Gentamicina 1mg/kg EV 8/8h por 4-6 semanas

SUPORTE:
9. Hemoculturas 3 amostras (sítios diferentes) ANTES de ATB
10. Ecocardiograma TT + TE (transesofágico)
11. Fundoscopia (manchas de Roth)
12. Monitorizar função renal (nefrotoxicidade aminoglicosídeo)`,
    warnings: "Indicações cirúrgicas: ICC refratária, vegetação >10mm com embolia, abscesso perianular, fungo, prótese com deiscência. Mortalidade: 20-30%.",
    guideline: "AHA / ESC / SBC 2023",
  },
  {
    id: "rx-endocardite-protese",
    title: "Endocardite — Válvula Protética",
    type: "Prescrição Hospitalar / UTI",
    prescription: `EMPÍRICO:
1. Vancomicina 15-20mg/kg EV 12/12h + Gentamicina 3mg/kg/dia EV + Rifampicina 300mg VO 8/8h

ESTAFILOCOCO (MRSA ou CoNS):
2. Vancomicina 15-20mg/kg EV 12/12h por ≥6 semanas
3. + Rifampicina 300mg VO 8/8h por ≥6 semanas
4. + Gentamicina 3mg/kg/dia EV por 2 semanas

5. Eco TE obrigatório (sensibilidade muito superior ao TT em prótese)
6. TC crânio (embolia séptica cerebral)
7. Hemoculturas seriadas até negativação
8. Avaliar cirurgia precoce (deiscência, abscesso, IC refratária)`,
    warnings: "Endocardite de prótese precoce (<60 dias PO): estafilococos e gram-negativos predominam. Prótese tardia: perfil semelhante à nativa.",
    guideline: "AHA / ESC / SBC",
  },
  {
    id: "rx-tb-multirresistente",
    title: "Tuberculose Multirresistente (TB-MDR)",
    type: "Prescrição Hospitalar / Ambulatorial",
    prescription: `DEFINIÇÃO: Resistência a pelo menos Rifampicina + Isoniazida

ESQUEMA PADRONIZADO (MS Brasil — regime longo):
1. Fase intensiva (8 meses):
   - Levofloxacino 750mg VO 1x/dia
   - Bedaquilina 400mg VO 1x/dia por 2 semanas → 200mg 3x/semana por 22 semanas
   - Linezolida 600mg VO 1x/dia
   - Clofazimina 100mg VO 1x/dia
   - Cicloserina 250-500mg VO 12/12h

2. Fase de manutenção (12 meses):
   - Levofloxacino + Clofazimina + Cicloserina

MONITORIZAÇÃO:
3. Baciloscopia + cultura mensal
4. Função hepática (TGO/TGP) mensal
5. Audiometria mensal (se aminoglicosídeo)
6. Hemograma mensal (Linezolida — mielotoxicidade)
7. ECG mensal (Bedaquilina — prolongamento QT)
8. Acuidade visual (Linezolida — neurite óptica)
9. Creatinina mensal
10. TSM (teste de sensibilidade) a cada 3 meses`,
    warnings: "Linezolida: mielotoxicidade (anemia, plaquetopenia), neuropatia periférica, acidose lática — monitorizar rigorosamente. Bedaquilina: prolongamento QT — ECG seriado.",
    guideline: "MS Brasil / OMS 2022 / WHO operational handbook on TB",
  },
  {
    id: "rx-tb-xdr",
    title: "Tuberculose Extensivamente Resistente (TB-XDR)",
    type: "Prescrição Hospitalar",
    prescription: `DEFINIÇÃO (OMS 2021): MDR + resistência a fluoroquinolona + ≥1 do grupo A (Bedaquilina ou Linezolida)

ESQUEMA INDIVIDUALIZADO:
1. Referência obrigatória a centro de referência terciário
2. Regime baseado em TSM expandido:
   - Pretomanid (se disponível via uso compassivo)
   - Delamanid 100mg VO 12/12h por 6 meses
   - Imipenem-Cilastatina 1g EV 6/6h + Amoxicilina-Clavulanato 1g VO 12/12h (carbapenêmico)
   - Ácido para-aminossalicílico (PAS) 4g VO 12/12h
   - Clofazimina 100mg VO 1x/dia
3. Duração: 18-20 meses (individualizar)
4. Regime BPaL (Bedaquilina + Pretomanid + Linezolida) — protocolo OMS
5. Monitorização intensiva (mesmos parâmetros de MDR + mais frequente)
6. Isolamento respiratório rigoroso (quarto com pressão negativa)`,
    warnings: "Mortalidade XDR: 40-60%. Adesão ao tratamento é crítica. Notificação compulsória. Encaminhar sempre a centro de referência.",
    guideline: "OMS 2022 / MS Brasil / PNCT",
  },
  // ========== INFECTOLOGIA AVANÇADA ==========
  {
    id: "rx-peritonite-bacteriana-espontanea",
    title: "Peritonite Bacteriana Espontânea (PBE)",
    type: "Prescrição Hospitalar",
    prescription: `1. Dieta zero nas primeiras horas → branda após melhora
2. SF 0,9% — hidratação cautelosa (ascite tensa: NÃO exceder)
3. Paracentese diagnóstica:
   - PMN >250/mm³ = PBE (tratar mesmo sem cultura positiva)
4. Ceftriaxona 2g EV 1x/dia por 5 dias (1ª linha)
   OU Cefotaxima 2g EV 8/8h
5. Albumina humana 20%:
   - 1,5g/kg no D1 + 1g/kg no D3 (reduz mortalidade e SHR)
6. Suspender diuréticos durante tratamento
7. Repetir paracentese em 48h (PMN deve cair >25%)
8. Se falha: ampliar espectro (Meropenem)
9. Profilaxia secundária: Norfloxacino 400mg VO 1x/dia INDEFINIDAMENTE

PROFILAXIA PRIMÁRIA:
10. Cirróticos com hemorragia digestiva: Ceftriaxona 1g EV 1x/dia por 7 dias
11. Proteína no líquido ascítico <1,5: Norfloxacino 400mg/dia`,
    warnings: "SHR (síndrome hepatorrenal) pode ser precipitada pela PBE — albumina no D1/D3 é MANDATÓRIA. Não usar aminoglicosídeos em cirróticos (nefrotoxicidade).",
    guideline: "AASLD / EASL / SBH",
  },
  {
    id: "rx-abscesso-hepatico",
    title: "Abscesso Hepático",
    type: "Prescrição Hospitalar",
    prescription: `ABSCESSO PIOGÊNICO:
1. Ceftriaxona 2g EV 1x/dia + Metronidazol 500mg EV 8/8h por 4-6 semanas
2. OU Piperacilina-Tazobactam 4,5g EV 6/6h
3. Drenagem percutânea guiada por USG/TC se >5cm
4. Hemoculturas + cultura do aspirado
5. Investigar foco: biliar, portal (diverticulite, apendicite)

ABSCESSO AMEBIANO:
6. Metronidazol 750mg EV/VO 8/8h por 10 dias
7. Seguido de Teclozan 500mg VO 8/8h por 3 dias (eliminar cistos intestinais)
8. Drenagem apenas se >10cm, risco de ruptura ou sem resposta ao tratamento
9. Sorologia para E. histolytica

SUPORTE:
10. Analgesia: Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h
11. Omeprazol 40mg EV 1x/dia
12. USG ou TC de controle em 2-4 semanas`,
    guideline: "IDSA / SBI / WGO",
  },
  {
    id: "rx-fasciite-necrotizante",
    title: "Fasciíte Necrotizante",
    type: "Prescrição UTI / Emergência",
    prescription: `1. Ressuscitação volêmica agressiva (30mL/kg cristaloide na 1ª hora)
2. ATB empírico IMEDIATO:
   - Meropenem 1g EV 8/8h + Vancomicina 15-20mg/kg EV 12/12h + Clindamicina 900mg EV 8/8h
   - Clindamicina: efeito antitoxina (inibe síntese proteica de toxinas estreptocócicas)
3. DESBRIDAMENTO CIRÚRGICO DE URGÊNCIA — NÃO ATRASAR
   - Revisão cirúrgica a cada 24-48h
4. Noradrenalina se choque (PAM >65)
5. IOT + VM se necessário
6. Hemoculturas + cultura de tecido desbridado
7. Laboratório: HMG, PCR, lactato, CK, gasometria
8. LRINEC score (Laboratory Risk Indicator for Necrotizing Fasciitis)
9. Considerar Imunoglobulina EV se Strep Grupo A com choque tóxico
10. Câmara hiperbárica (controverso — não atrasar cirurgia para isso)`,
    warnings: "MORTALIDADE: 20-40%. Cada hora de atraso na cirurgia aumenta mortalidade. Diagnóstico é CLÍNICO (dor desproporcional, crepitação, necrose, toxemia). TC/RNM NÃO devem atrasar cirurgia.",
    guideline: "IDSA / WSES / SBI",
  },
  {
    id: "rx-neurocisticercose",
    title: "Neurocisticercose",
    type: "Prescrição Hospitalar / Ambulatorial",
    prescription: `FORMA PARENQUIMATOSA ATIVA (cistos viáveis):
1. Albendazol 15mg/kg/dia VO (máx 800mg) dividido 12/12h por 8-30 dias
   + Praziquantel 50mg/kg/dia VO dividido 8/8h (se >2 cistos)
2. Dexametasona 0,1mg/kg/dia VO por 5-10 dias (iniciar 1 dia ANTES do antiparasitário)
3. Anticonvulsivante: Fenitoína 100mg VO 8/8h OU Levetiracetam 500mg VO 12/12h

FORMA INTRAVENTRICULAR / SUBARACNÓIDEA:
4. Cirurgia (neuroendoscopia para remoção de cisto intraventricular)
5. Derivação ventriculoperitoneal se hidrocefalia

CISTO CALCIFICADO (inativo):
6. NÃO tratar com antiparasitário
7. Apenas anticonvulsivante se crises epilépticas

MONITORIZAÇÃO:
8. RNM de controle em 6 meses
9. Fundoscopia (antes de tratar — excluir cisto intraocular!)
10. TGO/TGP basal e quinzenal`,
    warnings: "NUNCA tratar com antiparasitário sem corticoide (risco de HIC por edema reacional). Excluir cisto ocular ANTES de iniciar albendazol (pode causar cegueira).",
    guideline: "AAN / ASTMH / MS Brasil",
  },
  // ========== INFECTOLOGIA AVANÇADA CONTINUAÇÃO ==========
  {
    id: "rx-aspergilose-invasiva",
    title: "Aspergilose Pulmonar Invasiva",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1ª LINHA:
1. Voriconazol 6mg/kg EV 12/12h no D1 → 4mg/kg EV 12/12h
2. Transição VO: 200mg VO 12/12h (quando tolerável)

ALTERNATIVAS:
3. Isavuconazol 200mg EV 8/8h por 6 doses → 200mg EV/VO 1x/dia
4. Anfotericina B lipossomal 3-5mg/kg/dia EV (se intolerância/falha azólicos)

RESGATE:
5. Caspofungina 70mg D1 → 50mg/dia OU Micafungina 150mg/dia
6. Combinação: Voriconazol + Equinocandina (pacientes graves)

SUPORTE:
7. Galactomanana sérica 2x/semana
8. TC tórax semanal (sinal do halo → crescente aéreo)
9. Reduzir/suspender imunossupressão se possível
10. Função hepática + nível sérico de Voriconazol (alvo 1-5 mcg/mL)
11. Avaliar cirurgia se hemoptise maciça ou lesão pericárdica`,
    warnings: "Voriconazol: fotossensibilidade, alucinações visuais, hepatotoxicidade. Interação com Ciclosporina, Tacrolimus, Sirolimus (reduzir dose).",
    guideline: "IDSA / ECIL / SBI",
  },
  {
    id: "rx-candidemia",
    title: "Candidemia / Candida Invasiva",
    type: "Prescrição Hospitalar / UTI",
    prescription: `EMPÍRICO (antes da identificação da espécie):
1. Anidulafungina 200mg EV D1 → 100mg EV 1x/dia
2. OU Caspofungina 70mg EV D1 → 50mg EV 1x/dia
3. OU Micafungina 100mg EV 1x/dia

APÓS IDENTIFICAÇÃO:
C. albicans sensível: escalonar para Fluconazol 400mg EV/VO 1x/dia (após clearance)
C. glabrata/krusei: manter equinocandina
C. parapsilosis: Fluconazol 400mg (equinocandinas menos eficazes)

MANDATÓRIO:
4. REMOVER cateter venoso central
5. Hemoculturas diárias até negativação
6. Fundoscopia (endoftalmite candidiásica — em 48h)
7. Eco TT/TE (endocardite fúngica se persistência >72h)
8. Tratamento: 14 dias APÓS 1ª hemocultura negativa
9. Não esquecer: exame de fundo de olho por oftalmologista`,
    warnings: "Candidemia NÃO é contaminação — mortalidade 30-50%. Sempre tratar. Sempre retirar cateter. Fluconazol NÃO cobre C. krusei e tem ação variável contra C. glabrata.",
    guideline: "IDSA / ECIL / SBI",
  },
  {
    id: "rx-paracoccidioidomicose",
    title: "Paracoccidioidomicose",
    type: "Prescrição Hospitalar / Ambulatorial",
    prescription: `FORMA LEVE/MODERADA:
1. Itraconazol 200mg VO 1x/dia (após refeição gordurosa) por 9-18 meses
2. OU Sulfametoxazol-Trimetoprim 800/160mg VO 12/12h por 18-24 meses (SUS)

FORMA GRAVE (disseminada/neuroparacoccidioido):
3. Anfotericina B lipossomal 3mg/kg/dia EV por 2-4 semanas
4. Seguida de Itraconazol 200mg VO 1x/dia por 12-24 meses
5. OU Sulfametoxazol-Trimetoprim EV (se indisponível AnfB)

CRITÉRIOS DE CURA:
6. Clínico: resolução dos sintomas
7. Sorológico: imunodifusão negativa ou título estável por 2 exames consecutivos
8. Radiológico: estabilização das lesões

SUPORTE:
9. Reposição nutricional (desnutrição é frequente)
10. Avaliar insuficiência adrenal (acometimento adrenal em 40-50%)
11. Dexametasona se edema laríngeo/dispneia`,
    notes: "Paracoccidioidomicose é a micose sistêmica mais comum no Brasil. Predomina em homens trabalhadores rurais. SMX-TMP é opção SUS mais acessível.",
    guideline: "SBI / Consenso Brasileiro de Paracoccidioidomicose / MS",
  },
  {
    id: "rx-histoplasmose",
    title: "Histoplasmose Disseminada",
    type: "Prescrição Hospitalar / UTI",
    prescription: `FORMA GRAVE (disseminada em imunodeprimido):
1. Anfotericina B lipossomal 3mg/kg/dia EV por 1-2 semanas
2. Seguida de Itraconazol 200mg VO 12/12h por ≥12 meses

FORMA LEVE/MODERADA:
3. Itraconazol 200mg VO 12/12h por 6-12 meses

EM HIV/AIDS:
4. Anfotericina B lipossomal por 2 semanas → Itraconazol 200mg 12/12h
5. Profilaxia secundária: Itraconazol 200mg/dia até CD4 >150 por 6 meses em TARV

DIAGNÓSTICO:
6. Antígeno urinário de Histoplasma (sensibilidade >90% na forma disseminada)
7. Cultura de sangue/MO (resultado em 4-6 semanas)
8. Histopatologia: granulomas + leveduras intracelulares

MONITORIZAÇÃO:
9. Nível sérico de Itraconazol (alvo >1mcg/mL)
10. Função hepática quinzenal
11. Antígeno urinário seriado (resposta ao tratamento)`,
    guideline: "IDSA / SBI / MS Brasil",
  },
  {
    id: "rx-esporotricose",
    title: "Esporotricose",
    type: "Prescrição Ambulatorial / Hospitalar",
    prescription: `FORMA CUTÂNEA/LINFOCUTÂNEA (mais comum):
1. Itraconazol 200mg VO 1x/dia por 3-6 meses (após refeição gordurosa)
2. Alternativa SUS: Iodeto de potássio (solução saturada) 5 gotas VO 3x/dia → aumentar 1 gota/dia até 40 gotas 3x/dia por 3-6 meses

FORMA DISSEMINADA/OSTEOARTICULAR:
3. Anfotericina B lipossomal 3-5mg/kg/dia por 2-4 semanas
4. Seguida de Itraconazol 200mg VO 12/12h por 12-24 meses

FORMA PULMONAR:
5. Se cavitária: Itraconazol 200mg 12/12h por 12 meses
6. Se grave: Anfotericina B → Itraconazol

EM GATOS (zoonose — Sporothrix brasiliensis):
7. Orientar tutores sobre risco de transmissão
8. Usar luvas no contato com lesões de animais
9. Encaminhar animal para veterinário
10. Notificação em áreas endêmicas (RJ, RS, SP)`,
    notes: "Esporotricose zoonótica (por gatos) é epidêmica no Brasil, especialmente RJ. S. brasiliensis é mais virulento que S. schenckii. Iodeto de potássio: barato e disponível no SUS.",
    guideline: "SBD / SBI / MS / UpToDate",
  },
  // ========== CIRURGIA TORÁCICA — COMPLEMENTOS ==========
  {
    id: "rx-hernia-diafragmatica-traumatica",
    title: "Hérnia Diafragmática Traumática",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Monitorização intensiva (SpO2, PA, FC)
2. SNG para descompressão gástrica (ANTES da cirurgia)
3. IOT + VM se insuficiência respiratória
   - EVITAR ventilação com pressão positiva excessiva (piora herniação)
4. Acesso venoso calibroso + reposição volêmica
5. Tipagem + reserva de sangue
6. TC tórax + abdome com contraste (definir lado e conteúdo herniado)
7. CIRURGIA:
   - Trauma agudo: laparotomia (via abdominal)
   - Hérnia crônica/diagnóstico tardio: toracotomia (aderências intratorácicas)
8. Rafia primária do diafragma com fio inabsorvível (Prolene 0)
   OU tela (se defeito >10cm)
9. Drenagem torácica ipsilateral
10. ATB profilático: Cefazolina 2g EV + Metronidazol 500mg EV`,
    warnings: "Lado esquerdo (80-90%) — estômago/cólon/baço herniam. Lado direito: proteção parcial pelo fígado. Pode ser diagnosticada tardiamente (meses-anos após trauma).",
    guideline: "ATLS / EAST / SBCT",
  },
  {
    id: "rx-traqueomalácia",
    title: "Corpo Estranho em Via Aérea — Manejo",
    type: "Prescrição de Emergência / Hospitalar",
    prescription: `OBSTRUÇÃO TOTAL (asfixia):
1. Manobra de Heimlich (adulto consciente)
2. Compressões torácicas (adulto inconsciente / obeso / gestante)
3. Se falha: cricotireoidostomia de emergência

OBSTRUÇÃO PARCIAL / CORPO ESTRANHO BRÔNQUICO:
4. Manter paciente calmo, posição confortável
5. O2 suplementar (se SpO2 <94%)
6. NÃO fazer manobra de Heimlich se tosse eficaz
7. Broncoscopia RÍGIDA de urgência (remoção do CE)
   - Broncoscopia flexível: localização e CE pequenos
8. RX tórax PA + perfil (CE radiopaco / hiperinsuflação localizada / atelectasia)
9. TC tórax se dúvida diagnóstica
10. Pós-remoção: dexametasona 4mg EV (reduzir edema)
11. Corticoide inalatório por 5-7 dias
12. Se infecção secundária: ATB (Amoxicilina-Clavulanato)`,
    guideline: "AHA / ATLS / SBPT / SBCT",
  },
  {
    id: "rx-fistula-broncopleural",
    title: "Fístula Broncopleural",
    type: "Prescrição Hospitalar / UTI",
    prescription: `1. Drenagem torácica adequada (dreno de grosso calibre 32-36Fr)
2. Manter dreno em selo d'água (aspiração contínua -20cmH2O se necessário)
3. Se em VM: minimizar pressão de via aérea:
   - PEEP baixa (≤5cmH2O)
   - Vt baixo
   - FR alta
   - Considerar ventilação unipulmonar (tubo de duplo lúmen)
4. ATB: Piperacilina-Tazobactam 4,5g EV 6/6h + Vancomicina (se pós-pneumonectomia)
5. Nutrição adequada (cicatrização)
6. Avaliar cirurgia:
   - Retalho muscular de reforço (grande dorsal, serrátil)
   - Toracoplastia
   - Selo broncoscópico (cola biológica — temporário)
7. Fisioterapia respiratória (lado contralateral)
8. Controle de BH e nutrição`,
    warnings: "Fístula broncopleural pós-pneumonectomia: emergência — risco de aspiração de líquido da cavidade para o pulmão remanescente. Posicionar com lado operado para BAIXO.",
    guideline: "SBCT / ESTS / Chest",
  },
  {
    id: "rx-hemotorax-retido",
    title: "Hemotórax Retido / Coagulado",
    type: "Prescrição Hospitalar",
    prescription: `DEFINIÇÃO: Hemotórax que não drena adequadamente ou coágulo retido após drenagem

1. TC tórax (quantificar e localizar coleção)
2. Se <72h + volume significativo: VATS (videotoracoscopia) — melhor resultado
3. Se >72h: VATS mais difícil (aderências) → considerar fibrinolítico intrapleural:
   - Alteplase 10mg + DNase 5mg em 30mL SF 2x/dia por 3 dias
4. Se organizado/tardio: decorticação cirúrgica (toracotomia)
5. Manter dreno de tórax (calibroso)
6. ATB profilático: Cefazolina 1g EV 8/8h por 24h
7. Fisioterapia respiratória
8. Analgesia adequada (Tramadol + Dipirona)
9. Enoxaparina 40mg SC 1x/dia (quando sem sangramento ativo)
10. Monitorizar: hemoglobina seriada, RX tórax diário`,
    notes: "VATS nas primeiras 72h: sucesso >90%, menor tempo de internação. Após 7 dias: fibrinolítico intrapleural é alternativa à cirurgia. Hemotórax retido não tratado → empiema + fibrotórax.",
    guideline: "EAST / ATLS / SBCT",
  },
  // ========== PROFILAXIA CIRÚRGICA — MAIS PROCEDIMENTOS ==========
  {
    id: "rx-profilaxia-transplante-renal",
    title: "Profilaxia — Peri-Transplante Renal",
    type: "Prescrição Hospitalar",
    prescription: `PROFILAXIA ANTIMICROBIANA PÓS-TRANSPLANTE RENAL:

ATB:
1. Cefazolina 2g EV (indução anestésica) → DU

ANTIVIRAL (CMV):
2. Se D+/R-: Valganciclovir 900mg VO 1x/dia por 6 meses (alta virulência)
3. Se D+/R+ ou D-/R+: Valganciclovir por 3 meses OU terapia preemptiva (PCR CMV semanal)
4. Se D-/R-: sem profilaxia CMV

PNEUMOCISTOSE:
5. Sulfametoxazol-Trimetoprim 400/80mg VO 1x/dia por 6-12 meses

CANDIDA:
6. Nistatina 500.000UI VO 4x/dia por 1-3 meses OU Fluconazol 100mg/dia

TB LATENTE:
7. Se PPD ≥5mm ou IGRA+: Isoniazida 300mg/dia por 9 meses (antes ou após transplante)

VACINAS PRÉ-TRANSPLANTE:
8. Hepatite B, Pneumo23, Influenza, COVID (INATIVADAS)
9. CONTRAINDICADAS pós-transplante: BCG, Febre Amarela, MMR, VOP`,
    guideline: "KDIGO / ABTo / SBN / SBI",
  },
  {
    id: "rx-profilaxia-esplenectomia",
    title: "Profilaxia — Pós-Esplenectomia",
    type: "Prescrição Hospitalar / Ambulatorial",
    prescription: `VACINAÇÃO (idealmente 14 dias ANTES da esplenectomia eletiva):
1. Pneumocócica 13-valente (Prevenar) → 8 semanas depois: Pneumo23 (polissacarídica)
2. Meningocócica conjugada ACWY
3. Meningocócica B (Bexsero)
4. Haemophilus influenzae tipo B (Hib)
5. Influenza anual

SE ESPLENECTOMIA DE URGÊNCIA:
6. Vacinar 14 dias após cirurgia (antes: resposta insuficiente)

ANTIBIOTICOPROFILAXIA:
7. Penicilina V 250mg VO 12/12h contínua (mínimo 2 anos — idealmente até 5 anos ou mais)
8. Alternativa: Amoxicilina 500mg VO 1x/dia
9. Se alergia: Eritromicina 250mg VO 12/12h

ORIENTAÇÃO AO PACIENTE:
10. Cartão de alerta de asplenia (carregar sempre)
11. Febre é EMERGÊNCIA — procurar PS imediatamente
12. ATB empírico se febre: Amoxicilina-Clavulanato VO OU Ceftriaxona EV
13. Profilaxia em viagem: Amoxicilina-Clavulanato sob demanda
14. Evitar mordedura de cão/carrapato (Babesia, Capnocytophaga)`,
    warnings: "OPSI (Overwhelming Post-Splenectomy Infection): mortalidade 50-70%. Pneumococo é o agente mais comum. Paciente asplênico com febre = emergência médica.",
    guideline: "ACIP / SBI / MS / IDSA",
  },
  {
    id: "rx-profilaxia-mordedura",
    title: "Profilaxia — Mordedura Animal e Humana",
    type: "Prescrição Ambulatorial / Emergência",
    prescription: `MORDEDURA DE CÃO/GATO:
1. Lavagem exaustiva com SF + PVPI (15 min)
2. NÃO suturar (exceto face — sutura com fio fino)
3. ATB profilático (indicado em todas as mordeduras de gato e mordeduras profundas de cão):
   - Amoxicilina-Clavulanato 875/125mg VO 12/12h por 5-7 dias
   - Se alergia: Clindamicina 300mg VO 6/6h + Ciprofloxacino 500mg VO 12/12h
4. Profilaxia antirrábica conforme protocolo MS:
   - Animal observável (10 dias): observar + vacina se sinais
   - Animal silvestre/desaparecido/morto: vacina + soro antirrábico

MORDEDURA HUMANA:
5. Lavagem + Amoxicilina-Clavulanato 875/125mg VO 12/12h por 5-7 dias
6. Sorologias: HIV, HBV, HCV (agressor e vítima)
7. PEP HIV (se risco): TDF + 3TC + DTG por 28 dias
8. Vacina anti-hepatite B (se não imune)

TÉTANO:
9. Avaliar status vacinal: se >5 anos sem reforço → dT + SAT/IGHAT`,
    guideline: "MS Brasil / IDSA / WHO",
  },

  // ═══════════════════════════════════════════════════
  // PSIQUIATRIA — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-psiq-agitacao-grave",
    title: "Agitação Psicomotora Grave",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Contenção mecânica (4 pontos) se risco iminente
2. Haloperidol 5mg IM + Midazolam 5mg IM (coquetel de contenção química)
3. Repetir Haloperidol 5mg IM a cada 30min se necessário (máx 30mg/dia)
4. Monitorizar SpO2, FC, PA a cada 15 minutos
5. Acesso venoso periférico — SF 0,9% 500mL
6. ECG (avaliar QTc antes e após haloperidol)
7. Glicemia capilar (excluir hipoglicemia)
8. Avaliar etiologia: intoxicação, abstinência, psicose, delirium, TCE`,
    alternatives: `Alternativas à contenção química:
- Olanzapina 10mg IM (evitar associar com benzodiazepínico IM)
- Droperidol 2,5-5mg IM (alternativa ao haloperidol, menor QTc)
- Cetamina 4mg/kg IM (agitação extrema refratária)
- Ziprasidona 10-20mg IM (alternativa atípica)`,
    notes: "Contenção mecânica deve ser reavaliada a cada 2h. Documentar indicação, tipo de contenção e horário. Observar síndrome neuroléptica maligna.",
    warnings: "QTc >500ms: suspender haloperidol. NÃO associar olanzapina IM + benzodiazepínico IM (risco de apneia). Vigiar via aérea em pacientes sedados.",
    guideline: "APA / ABP / MS Brasil",
  },
  {
    id: "rx-psiq-surto-psicotico",
    title: "Surto Psicótico Agudo / Primeiro Episódio",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Ambiente calmo, baixa estimulação
2. Haloperidol 5mg VO (se aceitar) ou 5mg IM
3. Prometazina 50mg IM (se agitação associada)
4. SF 0,9% 500mL EV — hidratação
5. ECG (QTc basal)
6. Hemograma, glicemia, função renal, TSH, toxicológico urinário
7. TC crânio (se primeiro episódio ou sinais focais)
8. Avaliação psiquiátrica formal
9. Internação psiquiátrica se risco para si ou terceiros`,
    alternatives: `- Risperidona 2mg VO 12/12h (primeiro episódio leve)
- Olanzapina 10mg VO/IM
- Aripiprazol 15mg VO (perfil metabólico mais favorável em jovens)`,
    notes: "Primeiro episódio psicótico: investigar causas orgânicas (droga, tumor, infecção SNC, autoimune). VDRL, anti-NMDA se jovem.",
    warnings: "Evitar benzodiazepínicos isolados em psicose. Vigiar distonia aguda (tratar com biperideno 2mg IM).",
    guideline: "NICE / ABP / MS Brasil",
  },
  {
    id: "rx-psiq-tentativa-suicidio",
    title: "Tentativa de Suicídio — Manejo no PS",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Estabilização clínica (ABC + tratar lesão/intoxicação)
2. Retirar objetos perfurocortantes, cordas, medicamentos
3. Acompanhante 1:1 (vigilância contínua)
4. Avaliar método, intencionalidade, planejamento, acesso a meios
5. Escala de Columbia (C-SSRS) ou SAD PERSONS
6. Toxicológico urinário + dosagem de medicamentos se ingestão
7. Exames gerais: HMG, eletrólitos, função renal/hepática, ECG
8. Avaliação psiquiátrica OBRIGATÓRIA antes da alta
9. Notificação compulsória (violência autoprovocada)
10. Internação psiquiátrica se risco iminente persistente`,
    notes: "Toda tentativa de suicídio é grave. Não minimizar. Não deixar paciente sozinho. Contato com familiar/responsável.",
    warnings: "NÃO dar alta sem avaliação psiquiátrica. NOTIFICAÇÃO COMPULSÓRIA. Risco maior nas primeiras 48h pós-tentativa.",
    guideline: "MS Brasil / OMS / ABP",
  },
  {
    id: "rx-psiq-sindrome-neuroleptica-maligna",
    title: "Síndrome Neuroléptica Maligna (SNM)",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. SUSPENDER imediatamente TODOS os antipsicóticos
2. Internação em UTI
3. SF 0,9% 2000-3000mL EV (hidratação vigorosa)
4. Resfriamento ativo (compressas, cobertores térmicos)
5. Dantrolene 1-2,5mg/kg EV a cada 6h (máx 10mg/kg/dia) — se disponível
6. Bromocriptina 2,5mg VO/SNG 8/8h (alternativa ao dantrolene)
7. Benzodiazepínico: Diazepam 10mg EV se rigidez intensa
8. Monitorização contínua: T, PA, FC, SpO2, diurese
9. CPK, mioglobina, função renal, eletrólitos seriados
10. SVD (alvo diurese >1mL/kg/h — prevenir IRA por rabdomiólise)`,
    notes: "Tríade clássica: hipertermia + rigidez muscular + alteração do nível de consciência. CPK geralmente >1000. Diagnóstico clínico.",
    warnings: "MORTALIDADE 10-20%. Não reintroduzir antipsicóticos por pelo menos 2 semanas. Diagnóstico diferencial: síndrome serotoninérgica, hipertermia maligna.",
    guideline: "APA / UpToDate / ABP",
  },
  {
    id: "rx-psiq-sindrome-serotoninergica",
    title: "Síndrome Serotoninérgica",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. SUSPENDER TODOS os agentes serotoninérgicos (ISRS, IRSN, tramadol, linezolida, etc.)
2. Medidas de suporte: SF 0,9% EV, resfriamento se hipertermia
3. Benzodiazepínico: Diazepam 5-10mg EV (controle de agitação e mioclonias)
4. Ciproeptadina 12mg VO (dose de ataque) → 4mg VO 8/8h
5. Se hipertermia >41°C: IOT + BNM (evitar succinilcolina)
6. Monitorização contínua em UTI se grave
7. CPK, eletrólitos, gasometria, função renal
8. Controle de temperatura a cada 1h`,
    notes: "Tríade: alteração do estado mental + hiperatividade autonômica + hiperatividade neuromuscular (clônus, mioclonias). Critérios de Hunter.",
    warnings: "NÃO usar dantrolene (ineficaz na SS). Diagnóstico diferencial com SNM. Evitar contenção física (piora rabdomiólise).",
    guideline: "Boyer & Shannon / UpToDate",
  },
  {
    id: "rx-psiq-delirium-tremens",
    title: "Delirium Tremens / Abstinência Alcoólica Grave",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Internação em UTI ou semi-intensiva
2. Diazepam 10mg EV a cada 5-10 min até sedação leve (CIWA-Ar guiado)
3. Tiamina (Vit B1) 500mg EV 8/8h por 3 dias → 300mg EV 1x/dia por 5 dias
4. SF 0,9% 1000mL + KCl 10% 10mL + MgSO4 10% 10mL EV
5. Glicose 50% 40mL EV (SEMPRE após tiamina)
6. Haloperidol 5mg IM se alucinações intensas (adjuvante — não usar isolado)
7. Monitorização contínua: PA, FC, T, SpO2
8. Glicemia capilar 4/4h
9. HMG, eletrólitos (Mg, K, Ca, Na, P), função hepática, coagulograma
10. Escala CIWA-Ar a cada 1-2h`,
    alternatives: `- Lorazepam 2mg EV (preferir se hepatopatia grave — sem metabolismo hepático ativo)
- Fenobarbital 130-260mg EV (refratário ao benzodiazepínico)
- Dexmedetomidina (adjuvante em UTI, refratário)`,
    notes: "CIWA-Ar ≥20: abstinência grave. Delirium tremens: mortalidade 5-15% sem tratamento. Pico em 48-72h após última ingesta.",
    warnings: "SEMPRE dar tiamina ANTES de glicose (risco de encefalopatia de Wernicke). Não usar fenitoína para convulsões da abstinência.",
    guideline: "ASAM / MS Brasil",
  },
  {
    id: "rx-psiq-intoxicacao-benzodiazepinicos",
    title: "Intoxicação por Benzodiazepínicos",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. ABC — garantir via aérea (IOT se Glasgow ≤8 ou apneia)
2. Monitorização contínua: SpO2, ECG, PA
3. Flumazenil 0,2mg EV em 30s → 0,3mg após 1 min → 0,5mg a cada 1 min (máx 3mg)
4. SF 0,9% 1000mL EV
5. Carvão ativado 1g/kg VO/SNG (se ingestão <1h e via aérea protegida)
6. Toxicológico urinário
7. Observação mínima 6-12h (risco de ressedação com flumazenil)`,
    notes: "Meia-vida do flumazenil (45-90min) é menor que a maioria dos BZDs. Risco de ressedação.",
    warnings: "CONTRAINDICAÇÕES do flumazenil: epilepsia em uso crônico de BZD, coingestão de tricíclicos, dependência de BZD (risco de convulsão).",
    guideline: "EXTRIP / AACT",
  },
  {
    id: "rx-psiq-catatonia",
    title: "Catatonia Aguda",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Lorazepam 2mg EV/IM — teste terapêutico (resposta em minutos confirma diagnóstico)
2. Se resposta positiva: Lorazepam 2mg EV/IM 8/8h → titular até 12-16mg/dia
3. Hidratação vigorosa: SF 0,9% 2000-3000mL/dia EV
4. Prevenção de TVP: Enoxaparina 40mg SC 1x/dia
5. Avaliar necessidade de SNG (se recusa alimentar prolongada)
6. CPK, função renal (rabdomiólise por imobilidade)
7. Se refratário a lorazepam: considerar ECT (eletroconvulsoterapia)
8. Monitorização: T, PA, diurese, nutrição`,
    notes: "Bush-Francis Catatonia Rating Scale para diagnóstico e monitorização. Catatonia maligna: febre + rigidez + instabilidade autonômica → UTI.",
    warnings: "NÃO usar antipsicóticos na catatonia (risco de SNM). SUSPENDER antipsicóticos se catatonia surgir durante uso.",
    guideline: "APA / Fink & Taylor",
  },
  {
    id: "rx-psiq-mania-aguda",
    title: "Mania Aguda / Episódio Maníaco",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Ambiente com baixa estimulação
2. Lítio 300mg VO 8/8h (titular até nível sérico 0,8-1,2 mEq/L)
3. OU Valproato 500mg VO 12/12h (titular até 1000-1500mg/dia)
4. Antipsicótico: Risperidona 2mg VO 12/12h OU Olanzapina 10mg VO/IM
5. Se agitação intensa: Haloperidol 5mg IM + Midazolam 5mg IM
6. Hidratação: SF 0,9% 1000mL EV (pacientes em mania frequentemente desidratam)
7. Exames: Lítio sérico (se em uso), TSH, função renal, HMG, Na, Ca
8. ECG (QTc basal)
9. Internação psiquiátrica se impossibilidade de manejo ambulatorial`,
    notes: "Litemia terapêutica: 0,8-1,2 mEq/L. Checar nível a cada 5-7 dias até estabilização. Intoxicação por lítio: >1,5 mEq/L.",
    warnings: "Lítio: monitorizar função renal e tireoidiana. Valproato: hepatotoxicidade, pancreatite. Evitar valproato em mulheres em idade fértil.",
    guideline: "CANMAT / APA / ABP",
  },
  {
    id: "rx-psiq-panico-agudo",
    title: "Crise de Pânico / Ataque de Ansiedade Agudo",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. Reasseguramento e orientação (não é emergência cardíaca/respiratória)
2. Técnica de respiração diafragmática / controle respiratório
3. Alprazolam 0,5mg SL OU Clonazepam 0,5mg SL (se crise intensa)
4. Excluir causas orgânicas: ECG, troponina (se dor torácica), D-dímero (se dispneia)
5. Orientar sobre o transtorno, desmistificar sintomas
6. Encaminhar para psiquiatria/psicologia ambulatorial
7. Prescrição de alta: Clonazepam 0,5mg VO SOS (máx 2x/dia por 7 dias)`,
    notes: "Ataque de pânico: pico em 10 minutos, duração 20-30 min. Sintomas: taquicardia, dispneia, parestesias, medo de morrer.",
    warnings: "SEMPRE excluir SCA, TEP e arritmias antes de diagnosticar pânico. Não prescrever BZD de uso contínuo no PS.",
    guideline: "APA / DSM-5 / ABP",
  },
  {
    id: "rx-psiq-intoxicacao-litio",
    title: "Intoxicação por Lítio",
    type: "Prescrição Psiquiátrica de Emergência",
    prescription: `1. SUSPENDER lítio imediatamente
2. SF 0,9% 1000-2000mL EV (hidratação vigorosa — restaurar volemia)
3. Lítio sérico a cada 4-6h
4. Função renal, eletrólitos (Na, K), gasometria
5. NÃO usar diuréticos (piora a reabsorção de lítio)
6. Hemodiálise se: lítio >4 mEq/L, ou >2,5 com sintomas neurológicos graves, ou IRA
7. Monitorizar ECG (arritmias, alterações de ST)
8. Suporte neurológico: convulsões → diazepam 10mg EV`,
    notes: "Leve (1,5-2,5): tremor, náusea, diarreia. Moderada (2,5-3,5): confusão, mioclonias. Grave (>3,5): convulsões, coma, arritmias.",
    warnings: "Intoxicação crônica é mais perigosa que aguda (maior acúmulo tecidual). Sequelas neurológicas permanentes possíveis.",
    guideline: "EXTRIP / UpToDate",
  },

  // ═══════════════════════════════════════════════════
  // OFTALMOLOGIA — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-oftalmo-glaucoma-agudo-2",
    title: "Glaucoma Agudo — Tratamento Intensivo",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Timolol 0,5% — 1 gota no olho afetado 12/12h
2. Brimonidina 0,2% — 1 gota 8/8h
3. Pilocarpina 2% — 1 gota 15/15 min por 1h → 6/6h
4. Acetazolamida 500mg VO ataque → 250mg VO 6/6h
5. Manitol 20% — 1-2g/kg EV em 45 min (se PIO >50 ou não responde)
6. Dexametasona colírio 0,1% — 1 gota 6/6h (reduzir inflamação)
7. Analgesia: Dipirona 1g EV + Tramadol 50mg EV se dor intensa
8. Encaminhar URGENTE para iridotomia a laser`,
    notes: "PIO alvo: <21mmHg. Medir PIO a cada 1-2h até controle. Pilocarpina pode ser ineficaz se PIO >40 (esfíncter pupilar isquêmico).",
    warnings: "Timolol: evitar em asma/DPOC/bradicardia. Acetazolamida: evitar se alergia a sulfa. Manitol: risco de sobrecarga em cardiopatas.",
    guideline: "AAO / CBO",
  },
  {
    id: "rx-oftalmo-queimadura-quimica",
    title: "Queimadura Química Ocular",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. IRRIGAÇÃO IMEDIATA com SF 0,9% ou Ringer Lactato — mínimo 30 minutos contínuos (2-3L)
2. Verificar pH conjuntival com fita (alvo: 7,0-7,4) — repetir irrigação se pH alterado
3. Remoção de partículas retidas (everter pálpebra + swab)
4. Ciclopentolato 1% — 1 gota 8/8h (cicloplégico — alívio da dor)
5. Antibiótico tópico: Ciprofloxacino colírio 0,3% — 1 gota 6/6h
6. Vitamina C 500mg VO 8/8h (promove cicatrização)
7. Doxiciclina 100mg VO 12/12h (anti-colagenase)
8. Analgesia sistêmica: Dipirona 1g EV 6/6h + Tramadol 50mg EV SOS
9. Encaminhamento URGENTE para oftalmologia (avaliação com lâmpada de fenda)`,
    notes: "Álcalis são mais graves que ácidos (penetração profunda). Classificação de Roper-Hall para gravidade. Não atrasar irrigação para nenhum exame.",
    warnings: "NÃO usar colírios de corticoide nas primeiras 48h sem avaliação oftalmológica. NÃO neutralizar o agente químico (reação exotérmica).",
    guideline: "AAO / CBO / Roper-Hall",
  },
  {
    id: "rx-oftalmo-descolamento-retina",
    title: "Descolamento de Retina — Manejo no PS",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Repouso absoluto no leito
2. Posicionamento: decúbito conforme localização do descolamento (orientação do oftalmologista)
3. Oclusão do olho afetado
4. Evitar esforço físico, Valsalva, tosse
5. Antieméticos: Ondansetrona 4mg EV 8/8h (evitar vômitos/esforço)
6. Analgesia: Dipirona 1g EV 6/6h
7. ENCAMINHAMENTO URGENTE para retinólogo (cirurgia em 24-48h)
8. Orientar sobre sintomas de progressão: aumento do campo escuro`,
    notes: "Sintomas clássicos: flash luminoso (fotopsia) + moscas volantes (miodesopsias) + cortina/sombra no campo visual. Fundoscopia: retina elevada.",
    warnings: "Descolamento com acometimento macular: EMERGÊNCIA CIRÚRGICA (<24h). Sem acometimento macular: urgência (24-72h).",
    guideline: "AAO / CBO",
  },
  {
    id: "rx-oftalmo-celulite-orbitaria",
    title: "Celulite Orbitária",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Internação hospitalar
2. Ceftriaxona 2g EV 12/12h + Metronidazol 500mg EV 8/8h
3. OU Ampicilina-Sulbactam 3g EV 6/6h
4. Dexametasona 4mg EV 6/6h (se edema intenso com compressão do nervo óptico)
5. Analgesia: Dipirona 1g EV 6/6h + AINE
6. TC de órbitas e seios da face com contraste
7. Avaliação oftalmológica: acuidade visual, reflexo pupilar, motilidade ocular
8. Hemograma, PCR, hemocultura
9. Avaliação de cirurgia (drenagem se abscesso subperiosteal >1cm)`,
    notes: "Sinais de alerta: proptose, oftalmoplegia, perda visual, dor à movimentação ocular. Diferenciar de celulite pré-septal (pálpebra apenas).",
    warnings: "RISCO de trombose de seio cavernoso, meningite, abscesso cerebral. Complicação potencialmente fatal.",
    guideline: "AAO / IDSA",
  },
  {
    id: "rx-oftalmo-oclusao-arteria-central",
    title: "Oclusão da Artéria Central da Retina (OACR)",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. EMERGÊNCIA OFTALMOLÓGICA — tempo é visão (janela <6h)
2. Massagem ocular digital intermitente (10s compressão / 10s liberação x 5 min)
3. Respiração em saco fechado (aumentar pCO2 → vasodilatação retiniana) por 10 min a cada 2h
4. Acetazolamida 500mg VO (reduzir PIO para aumentar perfusão)
5. Timolol 0,5% colírio — 1 gota (reduzir PIO)
6. Encaminhamento IMEDIATO para oftalmologia (trombólise intra-arterial ou paracentese de câmara anterior)
7. Investigar fonte embólica: ECG, ecocardiograma, doppler de carótidas
8. AAS 100mg VO (se etiologia trombótica)`,
    notes: "Perda visual monocular, súbita, indolor. Fundoscopia: retina pálida com mancha vermelho-cereja na fóvea. Equivalente a 'AVC do olho'.",
    warnings: "Janela terapêutica muito curta (<4-6h). Após esse período, dano geralmente irreversível. Investigar como evento vascular sistêmico.",
    guideline: "AAO / AHA",
  },
  {
    id: "rx-oftalmo-uveite-anterior",
    title: "Uveíte Anterior Aguda",
    type: "Prescrição de Emergência Oftalmológica",
    prescription: `1. Prednisolona acetato 1% colírio — 1 gota 1/1h nas primeiras 48h → reduzir gradualmente
2. Ciclopentolato 1% — 1 gota 8/8h (cicloplégico — previne sinéquias)
3. OU Atropina 1% — 1 gota 12/12h (se uveíte intensa)
4. Analgesia: Ibuprofeno 600mg VO 8/8h
5. Óculos escuros (fotofobia)
6. Encaminhar para oftalmologia em 24-48h
7. Se recorrente: investigar HLA-B27, sarcoidose, sífilis, TB, toxoplasmose`,
    notes: "Sinais: dor ocular, fotofobia, hiperemia ciliar, células na câmara anterior (lâmpada de fenda). PIO pode estar alta ou baixa.",
    warnings: "NUNCA prescrever corticoide tópico ocular sem excluir herpes (ceratite herpética — piora catastrófica). Encaminhar sempre.",
    guideline: "AAO / SUN Working Group",
  },

  // ═══════════════════════════════════════════════════
  // OTORRINOLARINGOLOGIA — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-orl-abscesso-peritonsilar",
    title: "Abscesso Peritonsilar (Quinsy)",
    type: "Prescrição ORL / Emergência",
    prescription: `1. Drenagem por aspiração com agulha OU incisão e drenagem (I&D)
2. Amoxicilina-Clavulanato 1g EV 8/8h OU
3. Clindamicina 600mg EV 6/6h (se alergia a penicilina)
4. Dexametasona 10mg EV dose única (reduz edema e dor)
5. Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h
6. Hidratação: SF 0,9% 1000mL EV
7. Dieta líquida/pastosa
8. Cultura do material drenado
9. Reavaliação em 24h (recidiva: considerar amigdalectomia a quente)`,
    notes: "Trismo, desvio da úvula, abaulamento do palato mole, voz abafada (hot potato voice). Pico: 20-40 anos.",
    warnings: "RISCO de extensão para espaço parafaríngeo/retrofaríngeo → mediastinite. Garantir via aérea se edema extenso.",
    guideline: "AAO-HNS / ABORL",
  },
  {
    id: "rx-orl-epistaxe-anterior",
    title: "Epistaxe Anterior — Manejo Inicial",
    type: "Prescrição ORL / Emergência",
    prescription: `1. Compressão digital bilateral (pinçar narinas) por 15-20 min sem soltar
2. Posição sentada, cabeça levemente inclinada para frente
3. Aplicar algodão embebido em:
   - Oximetazolina 0,05% (vasoconstritor) OU
   - Adrenalina 1:10.000 + Lidocaína 2%
4. Se não ceder: tamponamento anterior com Merocel ou gaze rayon
5. Se tamponamento: Amoxicilina-Clavulanato 875mg VO 12/12h (profilaxia de sinusite)
6. Controlar PA (se HAS: Captopril 25mg SL ou Anlodipino 5mg VO)
7. Hemograma, coagulograma, tipagem sanguínea (se sangramento volumoso)
8. Cauterização com nitrato de prata (se ponto sangrante visível no plexo de Kiesselbach)`,
    notes: "90% das epistaxes são anteriores (plexo de Kiesselbach). Se bilateral ou posterior: mais grave.",
    warnings: "NÃO tamponar ambas as narinas se suspeita de fratura de base de crânio (rinoliquorreia). Tamponamento posterior: risco de necrose septal.",
    guideline: "AAO-HNS / ABORL",
  },
  {
    id: "rx-orl-epistaxe-posterior",
    title: "Epistaxe Posterior Refratária",
    type: "Prescrição ORL / Emergência",
    prescription: `1. Tamponamento posterior com sonda de Foley 14-16Fr:
   - Inserir pela narina, insuflar balão com 10-15mL de SF na nasofaringe
   - Tração anterior + tamponamento anterior com gaze
2. OU sonda de duplo balão (Epistat/Rapid Rhino posterior)
3. Internação hospitalar (risco de aspiração, hipóxia)
4. Oximetria contínua
5. Amoxicilina-Clavulanato 875mg VO 12/12h
6. Analgesia: Dipirona 1g EV 6/6h
7. Tipagem + reserva de 2CH
8. Hemograma, coagulograma, eletrólitos
9. Se refratário: arteriografia com embolização OU ligadura da artéria esfenopalatina
10. Correção de coagulopatia se presente (Vitamina K, PFC, plaquetas)`,
    warnings: "Tamponamento posterior: monitorizar SpO2 (risco de apneia reflexa — reflexo nasocardíaco). Manter em ambiente monitorizado.",
    guideline: "AAO-HNS / ABORL",
  },
  {
    id: "rx-orl-corpo-estranho-via-aerea",
    title: "Corpo Estranho em Via Aérea",
    type: "Prescrição ORL / Emergência",
    prescription: `1. Se obstrução TOTAL + consciente: manobra de Heimlich
2. Se obstrução TOTAL + inconsciente: RCP + laringoscopia direta
3. Se obstrução PARCIAL (tosse eficaz): NÃO interferir, manter calmo
4. Se obstrução parcial com estridor: preparar material de via aérea difícil
5. Rx tórax PA + lateral (AP e lateral do pescoço em crianças)
6. Broncoscopia rígida (preferência) ou flexível para remoção
7. Dexametasona 0,6mg/kg EV (máx 10mg) — reduzir edema
8. Monitorização contínua: SpO2, FR
9. Pós-remoção: observação 4-6h + Rx controle`,
    notes: "Crianças <3 anos: maior risco. Objetos mais comuns: amendoim, feijão, moedas, peças pequenas. Sinal clássico: engasgo súbito + tosse.",
    warnings: "NÃO fazer tapotagem ou manobras cegas em obstrução parcial com respiração presente. Risco de obstrução total.",
    guideline: "AHA / ATLS / ABORL",
  },
  {
    id: "rx-orl-angina-ludwig",
    title: "Angina de Ludwig",
    type: "Prescrição ORL / Emergência",
    prescription: `1. Via aérea: avaliar IOT precoce (edema de assoalho de boca progressivo)
   - Material de via aérea difícil e cricotireoidostomia à beira leito
2. Ampicilina-Sulbactam 3g EV 6/6h OU
3. Ceftriaxona 2g EV 12/12h + Metronidazol 500mg EV 8/8h + Clindamicina 600mg EV 6/6h
4. Dexametasona 10mg EV 8/8h (reduzir edema)
5. TC cervical com contraste (avaliar extensão e coleções)
6. Drenagem cirúrgica (se coleção >3cm ou sem melhora em 24-48h)
7. Hemograma, PCR, hemocultura
8. Hidratação vigorosa: SF 0,9% 2000mL EV
9. Analgesia: Dipirona 1g EV 6/6h + Morfina 4mg EV SOS`,
    notes: "Infecção do espaço submandibular bilateral + sublingual. Origem dentária em 70-90%. Edema duro do assoalho da boca, protrusão lingual.",
    warnings: "EMERGÊNCIA DE VIA AÉREA. Mortalidade sem tratamento >50%. Risco de mediastinite, fascia necrosante cervical, trombose de jugular.",
    guideline: "IDSA / ABORL",
  },
  {
    id: "rx-orl-mastoidite-aguda",
    title: "Mastoidite Aguda",
    type: "Prescrição ORL / Emergência",
    prescription: `1. Internação hospitalar
2. Ceftriaxona 2g EV 12/12h OU Cefotaxima 2g EV 8/8h
3. + Metronidazol 500mg EV 8/8h (se suspeita de anaeróbios)
4. TC de ossos temporais com contraste (avaliar complicações)
5. Miringotomia com tubo de ventilação (otorrinolaringologista)
6. Analgesia: Dipirona 1g EV 6/6h + AINE
7. Se abscesso subperiosteal: drenagem cirúrgica (mastoidectomia)
8. Hemograma, PCR, VHS, hemocultura
9. Avaliar complicações: trombose de seio sigmoide, abscesso epidural, meningite`,
    notes: "Complicação de otite média aguda. Edema retroauricular, deslocamento do pavilhão, dor intensa, febre alta.",
    warnings: "Complicações intracranianas: abscesso cerebral, meningite, trombose de seio venoso. TC/RM urgente se sinais neurológicos.",
    guideline: "AAO-HNS / ABORL",
  },
  {
    id: "rx-orl-epiglotite-adulto",
    title: "Epiglotite Aguda no Adulto",
    type: "Prescrição ORL / Emergência",
    prescription: `1. EMERGÊNCIA DE VIA AÉREA — material de IOT difícil + cricotireoidostomia pronto
2. NÃO examinar orofaringe com abaixador de língua (risco de laringoespasmo)
3. Manter paciente sentado, inclinado para frente
4. Ceftriaxona 2g EV 12/12h OU Ampicilina-Sulbactam 3g EV 6/6h
5. Dexametasona 10mg EV → 4mg EV 8/8h
6. Adrenalina nebulizada 3-5mL (1:1000) se estridor
7. Heliox (se disponível e obstrução parcial)
8. Monitorização contínua em UTI/semi
9. Hemocultura + cultura de secreção
10. IOT precoce se: estridor em repouso, sialorreia, incapacidade de deglutir`,
    notes: "Adultos: mais insidiosa que crianças. H. influenzae menos comum (vacinação). Etiologia: S. aureus, estreptococo, polimicrobiana.",
    warnings: "NÃO realizar Rx lateral de pescoço se instabilidade respiratória. NÃO sedar sem ter via aérea garantida.",
    guideline: "AAO-HNS / ATLS",
  },
  {
    id: "rx-orl-surdez-subita",
    title: "Surdez Súbita Neurossensorial",
    type: "Prescrição ORL / Emergência",
    prescription: `1. URGÊNCIA OTOLÓGICA — tratamento em até 72h melhora prognóstico
2. Prednisona 1mg/kg/dia VO (máx 60mg) por 10-14 dias → reduzir em 5 dias
3. OU Dexametasona intratimpânica (se contraindicação a corticoide sistêmico)
4. Audiometria tonal e vocal URGENTE
5. RM de crânio com contraste (excluir schwannoma vestibular / AVC de fossa posterior)
6. Exames: hemograma, VHS, PCR, glicemia, VDRL, FTA-Abs, TSH
7. Repouso relativo, evitar ruídos intensos
8. Valaciclovir 1g VO 8/8h por 7 dias (se suspeita viral — controverso)`,
    notes: "Definição: perda ≥30dB em 3 frequências consecutivas em <72h. Idiopática em 90%. Prognóstico: 2/3 recuperam parcialmente.",
    warnings: "SEMPRE excluir AVC de fossa posterior (vertigem + surdez + nistagmo). Schwannoma vestibular: RM obrigatória.",
    guideline: "AAO-HNS / ABORL",
  },

  // ═══════════════════════════════════════════════════
  // CIRURGIA GERAL — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-cir-abdome-agudo-obstrutivo",
    title: "Abdome Agudo Obstrutivo",
    type: "Prescrição Cirúrgica",
    prescription: `1. Jejum absoluto
2. SNG aberta em frasco (descompressão)
3. SVD (controle de diurese)
4. SF 0,9% 2000mL EV nas primeiras 6h (reposição volêmica)
5. Reposição de eletrólitos conforme gasometria
6. Dipirona 1g EV 6/6h + Tramadol 50mg EV 8/8h
7. Bromoprida 10mg EV 8/8h (pró-cinético) — se obstrução parcial
8. Enema glicerinado (se obstrução baixa funcional, sem sinais de estrangulamento)
9. Rx abdome em pé + decúbito (níveis hidroaéreos, distensão)
10. TC abdome com contraste (se dúvida ou suspeita de estrangulamento)
11. Cirurgia de urgência se: sinais peritoneais, isquemia, hérnias encarceradas não redutíveis`,
    notes: "Causas mais comuns: bridas/aderências (60%), hérnias, tumores, vólvulo. Obstrução de delgado vs cólon tem manejo diferente.",
    warnings: "Estrangulamento: dor desproporcional, taquicardia, leucocitose, acidose, lactato elevado → cirurgia IMEDIATA.",
    guideline: "EAST / ATLS / CBC",
  },
  {
    id: "rx-cir-hernia-encarcerada",
    title: "Hérnia Inguinal Encarcerada / Estrangulada",
    type: "Prescrição Cirúrgica",
    prescription: `1. Tentativa de redução manual (Taxis) se <6h e sem sinais de estrangulamento:
   - Sedação: Midazolam 3mg EV + Fentanil 50mcg EV
   - Trendelenburg, bolsa de gelo local, pressão suave e constante
2. Se redução bem-sucedida: internação + cirurgia eletiva precoce (24-48h)
3. Se irredutível ou >6h ou sinais de estrangulamento: CIRURGIA DE URGÊNCIA
4. Jejum absoluto
5. SF 0,9% 1000mL EV (hidratação)
6. Cefazolina 2g EV (profilaxia pré-operatória)
7. Dipirona 1g EV 6/6h
8. HMG, eletrólitos, lactato, gasometria, tipagem sanguínea`,
    notes: "Estrangulamento: dor intensa, irredutibilidade, sinais de obstrução, toxemia. Conteúdo mais comum: intestino delgado, omento.",
    warnings: "NÃO tentar redução se sinais de estrangulamento (isquemia intestinal — risco de perfuração e peritonite). Cirurgia imediata.",
    guideline: "EHS / CBC",
  },
  {
    id: "rx-cir-perfuracao-viscera",
    title: "Perfuração de Víscera Oca / Abdome Agudo Perfurativo",
    type: "Prescrição Cirúrgica",
    prescription: `1. CIRURGIA DE URGÊNCIA — laparotomia exploradora
2. Jejum absoluto
3. 2 acessos venosos calibrosos (jelco 16-18)
4. SF 0,9% 2000mL EV rápido (reposição)
5. Ceftriaxona 2g EV + Metronidazol 500mg EV (cobertura para Gram- e anaeróbios)
6. OU Piperacilina-Tazobactam 4,5g EV (se peritonite difusa)
7. SNG aberta
8. SVD
9. Dipirona 1g EV + Morfina 4mg EV (analgesia — NÃO atrasar por medo de mascarar exame)
10. Rx tórax em ortostase (pneumoperitôneo)
11. Tipagem + reserva 2-4CH
12. Gasometria, lactato, HMG, coagulograma`,
    notes: "Pneumoperitôneo na Rx confirma perfuração. Úlcera péptica perfurada: mais comum. TC se dúvida diagnóstica.",
    warnings: "NÃO atrasar cirurgia para exames. Cada hora de atraso aumenta mortalidade. Peritonite fecal: mortalidade >30%.",
    guideline: "EAST / WSES / CBC",
  },
  {
    id: "rx-cir-trauma-abdominal-fechado",
    title: "Trauma Abdominal Fechado — Manejo Inicial",
    type: "Prescrição Cirúrgica",
    prescription: `1. ATLS: ABCDE
2. 2 acessos venosos calibrosos + SF 0,9% 1000mL EV rápido
3. FAST (US à beira leito) — líquido livre?
4. Se FAST (+) + instável: laparotomia exploradora IMEDIATA
5. Se FAST (+) + estável: TC abdome com contraste EV
6. Se FAST (-) + estável: observação + exames seriados
7. Tipagem + reserva 4CH
8. HMG, lactato, amilase, lipase, função hepática, coagulograma, EAS
9. SNG + SVD (avaliar hematúria)
10. Rx tórax (avaliar hemotórax associado)
11. Analgesia: não atrasar — Dipirona + Fentanil EV titulado`,
    notes: "Órgãos mais lesados: baço (40-55%) > fígado (35-45%) > rim. Lesão esplênica grau I-III em estável: manejo não operatório.",
    warnings: "Hematúria macroscópica: investigar lesão renal/vesical. Fratura de bacia: risco de sangramento retroperitoneal maciço.",
    guideline: "ATLS / EAST / CBC",
  },

  // ═══════════════════════════════════════════════════
  // CIRURGIA VASCULAR — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-vasc-isquemia-aguda-membro",
    title: "Isquemia Aguda de Membro (6 Ps)",
    type: "Prescrição Cirúrgica / Emergência Vascular",
    prescription: `1. EMERGÊNCIA VASCULAR — tempo é membro (6h de janela)
2. Heparina não fracionada 80UI/kg EV em bolus → 18UI/kg/h em BIC
3. Analgesia: Morfina 4mg EV titulada
4. Membro em posição neutra (NÃO elevar — piora isquemia)
5. Proteger calcanhares (almofada)
6. AngioTC ou arteriografia de urgência
7. Hidratação vigorosa: SF 0,9% 1000-2000mL (prevenir nefropatia por mioglobina)
8. Tipagem + reserva 2CH
9. CPK, mioglobina, função renal, gasometria, lactato, potássio
10. Cirurgia de urgência: embolectomia / bypass / trombólise intra-arterial
11. Pós-revascularização: vigiar síndrome de reperfusão (hipercalemia, acidose, mioglobinúria)`,
    notes: "6 Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia. Rutherford I-IIa: viável. IIb: ameaçado. III: irreversível.",
    warnings: "Rutherford III (rigidez, anestesia completa): amputação primária. Síndrome de reperfusão: pode ser fatal (hipercalemia aguda).",
    guideline: "SVS / ESVS / SBACV",
  },
  {
    id: "rx-vasc-aneurisma-aorta-roto",
    title: "Aneurisma de Aorta Abdominal Roto",
    type: "Prescrição Cirúrgica / Emergência Vascular",
    prescription: `1. EMERGÊNCIA CIRÚRGICA — mortalidade >80% sem cirurgia
2. 2 acessos venosos calibrosos (jelco 14-16) + acesso central
3. Protocolo de transfusão maciça: CH 6U + PFC 6U + plaquetas 1 aférese
4. Hipotensão permissiva: PAS alvo 70-80mmHg (NÃO normalizar PA)
5. SF 0,9% aquecido — volume mínimo para manter consciência
6. Tipagem + prova cruzada URGENTE
7. Noradrenalina SOS (evitar vasopressores se possível — pioram sangramento)
8. TC com contraste (SOMENTE se hemodinamicamente tolerável — não atrasar cirurgia)
9. Cirurgia IMEDIATA: reparo aberto ou EVAR (endovascular)
10. Manta térmica (prevenir tríade letal: hipotermia + coagulopatia + acidose)`,
    notes: "Tríade clássica: dor abdominal/lombar + massa pulsátil + hipotensão. Presente em apenas 50% dos casos.",
    warnings: "NÃO atrasar cirurgia para exames. Mortalidade pré-hospitalar 50%, intra-hospitalar sem cirurgia >90%.",
    guideline: "SVS / ESVS / SBACV",
  },
  {
    id: "rx-vasc-pe-diabetico-infectado",
    title: "Pé Diabético Infectado — Wagner 3-4",
    type: "Prescrição Hospitalar / Cirurgia Vascular",
    prescription: `1. Internação hospitalar
2. Piperacilina-Tazobactam 4,5g EV 6/6h OU
3. Ertapenem 1g EV 1x/dia (infecção grave, uso prévio de ATB)
4. + Vancomicina 15-20mg/kg EV 12/12h (se risco de MRSA)
5. Insulina regular conforme glicemia (esquema sliding scale ou BIC)
6. Curativo diário com SF 0,9% + desbridamento de tecido necrótico
7. Rx pé (avaliar osteomielite: destruição óssea, gás em partes moles)
8. RM pé (padrão-ouro para osteomielite) se disponível
9. Doppler arterial de MMII (avaliar isquemia associada)
10. HbA1c, HMG, PCR, VHS, função renal, cultura de tecido profundo (NÃO swab superficial)
11. Avaliar necessidade de revascularização antes de amputação
12. Profilaxia de TVP: Enoxaparina 40mg SC 1x/dia`,
    notes: "Wagner 3: úlcera profunda com osteomielite/abscesso. Wagner 4: gangrena parcial. Wagner 5: gangrena extensa. IDSA: infecção leve/moderada/grave.",
    warnings: "Osteomielite: tratamento prolongado 6-8 semanas de ATB. Gangrena úmida: desbridamento/amputação urgente.",
    guideline: "IDSA / IWGDF / SBACV",
  },

  // ═══════════════════════════════════════════════════
  // ANESTESIOLOGIA — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-anest-sedacao-procedural-ps",
    title: "Sedação Procedural no PS (Cardioversão, Redução de Fratura)",
    type: "Prescrição Anestésica",
    prescription: `1. Jejum: ideal ≥2h para líquidos, ≥6h para sólidos (emergência: avaliar risco/benefício)
2. Monitorização: SpO2, ECG, PA, capnografia (se disponível)
3. Material de via aérea + aspirador + Ambu prontos
4. Pré-oxigenação: O2 5L/min por cateter ou máscara por 3 min

OPÇÕES DE SEDAÇÃO:
a) Propofol 1mg/kg EV lento (30s) → bolus adicionais de 0,5mg/kg SOS
b) Cetamina 1-2mg/kg EV lento (dissociativa — mantém reflexo de VA)
c) Midazolam 0,05mg/kg EV + Fentanil 1mcg/kg EV (sedação leve)
d) Etomidato 0,3mg/kg EV (ideal para cardioversão — estabilidade hemodinâmica)

5. Antagonistas disponíveis: Flumazenil + Naloxona
6. Observação pós-procedimento: mínimo 30-60 min até Aldrete ≥9`,
    notes: "ASA I-II: seguro no PS com monitorização. ASA III-IV: considerar anestesista. Cetamina: ideal em crianças e hemodinamicamente instáveis.",
    warnings: "Propofol: hipotensão e apneia (ter vasopressor pronto). Cetamina: vômito (ondansetrona profilática), laringoespasmo raro. Etomidato: mioclonias, supressão adrenal transitória.",
    guideline: "ACEP / SBA",
  },
  {
    id: "rx-anest-bloqueio-nervoso-femoral",
    title: "Bloqueio do Nervo Femoral (Fratura de Fêmur/Quadril)",
    type: "Prescrição Anestésica",
    prescription: `1. Indicação: analgesia para fratura de fêmur/quadril no PS (reduz necessidade de opioide)
2. Material: agulha de bloqueio 22G 50mm, US linear, seringa 20mL
3. Solução: Bupivacaína 0,25% 20mL OU Ropivacaína 0,375% 20mL
4. Técnica guiada por ultrassom (preferência):
   - Transdutor linear na prega inguinal
   - Identificar: artéria femoral, nervo femoral (lateral à artéria, sob fascia ilíaca)
   - Aspirar antes de injetar (excluir intravascular)
   - Injetar 20mL perineuralmente
5. Monitorização: PA, FC, SpO2 durante e 30 min após
6. Avaliar bloqueio motor (extensão do joelho) e sensitivo (face anterior da coxa)
7. Duração esperada: 8-12h com bupivacaína`,
    notes: "Reduz necessidade de opioide em >50%. Pode ser realizado no PS por emergencista treinado. Técnica com neuroestimulador como alternativa ao US.",
    warnings: "Risco: punção vascular, infecção, LAST (intoxicação por anestésico local). Ter Intralipid 20% disponível.",
    guideline: "NYSORA / SBA / ACEP",
  },
  {
    id: "rx-anest-intoxicacao-anestesico-local",
    title: "LAST — Intoxicação por Anestésico Local",
    type: "Prescrição Anestésica",
    prescription: `1. PARAR administração do anestésico local IMEDIATAMENTE
2. Chamar ajuda — equipe de RCP
3. Via aérea: O2 100% → IOT se necessário
4. Convulsão: Midazolam 2-4mg EV OU Propofol em dose baixa
   - NÃO usar fenitoína
5. PCR: RCP conforme ACLS (evitar vasopressina, reduzir dose de adrenalina para 1mcg/kg)
6. EMULSÃO LIPÍDICA 20% (Intralipid):
   - Bolus: 1,5mL/kg EV em 1 min (~100mL para 70kg)
   - Infusão: 0,25mL/kg/min por 30-60 min
   - Repetir bolus 1-2x se persistir colapso cardiovascular
   - Dose máxima: 12mL/kg
7. NÃO usar lidocaína para arritmias (piora toxicidade)
8. Considerar ECMO/CEC se PCR refratária`,
    notes: "Sinais precoces: zumbido, gosto metálico, parestesia perioral, agitação. Tardios: convulsão, arritmia, PCR. Bupivacaína: mais cardiotóxica.",
    warnings: "LAST pode ocorrer até 30 min após bloqueio. PCR por bupivacaína é refratária a RCP convencional — emulsão lipídica é essencial.",
    guideline: "ASRA / SBA",
  },
  {
    id: "rx-anest-via-aerea-dificil",
    title: "Via Aérea Difícil — Algoritmo e Prescrição",
    type: "Prescrição Anestésica",
    prescription: `1. Preditores de VAD: Mallampati III-IV, DTM <6cm, abertura bucal <3cm, pescoço curto/grosso, obesidade, história prévia

PREPARO:
2. Posicionamento em rampa (obesos) ou sniffing position
3. Pré-oxigenação: O2 100% por 3-5 min (ou 8 respirações de capacidade vital)
4. Apneic oxygenation: cateter nasal 15L/min durante tentativa
5. Videolaringoscópio como primeira escolha (se disponível)

FALHA NA IOT (máx 3 tentativas):
6. Dispositivo supraglótico (máscara laríngea) → ventilar → planejar
7. Se não ventila + não intuba (CICO): cricotireoidostomia de emergência
   - Técnica cirúrgica: incisão vertical pele + horizontal membrana cricotireoidea
   - Bougie + cânula 6.0

DROGAS (SRI):
8. Fentanil 2mcg/kg → Lidocaína 1,5mg/kg → Propofol 2mg/kg (ou Cetamina 2mg/kg) → Succinilcolina 1,5mg/kg OU Rocurônio 1,2mg/kg
9. Sugamadex 16mg/kg (reversão de emergência do rocurônio se CICO)`,
    notes: "LEMON: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility. Sempre ter plano B e C antes de induzir.",
    warnings: "Máx 3 tentativas de IOT. Não persistir se dessaturar <93%. Cricotireoidostomia: não hesitar se CICO.",
    guideline: "DAS / ASA / SBA",
  },

  // ═══════════════════════════════════════════════════
  // REUMATOLOGIA — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-reumato-vasculite-sistemica",
    title: "Vasculite Sistêmica Aguda (ANCA+)",
    type: "Prescrição Hospitalar / Reumatologia",
    prescription: `1. Internação hospitalar
2. Metilprednisolona 1g EV 1x/dia por 3 dias (pulsoterapia)
3. → Prednisona 1mg/kg/dia VO (após pulse — máx 80mg) com redução gradual
4. Ciclofosfamida 15mg/kg EV (indução) OU Rituximab 375mg/m² EV semanal x4
5. Plasmaférese: se hemorragia alveolar ou creatinina >5,7 (controverso — PEXIVAS)
6. Sulfametoxazol-Trimetoprima 400/80mg VO 1x/dia (profilaxia para PCP)
7. IBP: Omeprazol 20mg VO 1x/dia (proteção gástrica)
8. Exames: ANCA (c-ANCA/p-ANCA), anti-MPO, anti-PR3, função renal, EAS com sedimento, Rx tórax
9. Biópsia renal (se glomerulonefrite rapidamente progressiva)
10. Monitorizar: HMG semanal (mielotoxicidade da ciclofosfamida)`,
    notes: "GPA (Wegener): c-ANCA/anti-PR3. MPA: p-ANCA/anti-MPO. EGPA (Churg-Strauss): p-ANCA + eosinofilia. Acometimento renal e pulmonar: emergência.",
    warnings: "Ciclofosfamida: risco de cistite hemorrágica (mesna profilático), infertilidade, neoplasia. Rituximab: risco de reativação de hepatite B (checar HBsAg).",
    guideline: "ACR / EULAR / SBR",
  },
  {
    id: "rx-reumato-lupus-nefrite",
    title: "Nefrite Lúpica Classe III/IV — Tratamento de Indução",
    type: "Prescrição Hospitalar / Reumatologia",
    prescription: `1. Metilprednisolona 500-1000mg EV 1x/dia por 3 dias
2. → Prednisona 0,5-1mg/kg/dia VO com redução progressiva
3. Micofenolato mofetil 1g VO 12/12h (indução — preferência atual) OU
4. Ciclofosfamida EV (Euro-Lupus: 500mg quinzenal x6 doses)
5. Hidroxicloroquina 400mg VO 1x/dia (manter SEMPRE — nefroprotetor)
6. IECA/BRA: Enalapril 10mg VO 12/12h (nefroproteção + anti-proteinúria)
7. IBP: Omeprazol 20mg 1x/dia
8. SMX-TMP profilático (se imunossupressão intensa)
9. Exames: anti-dsDNA, C3/C4, proteinúria 24h, creatinina, biópsia renal (classificação ISN/RPS)
10. Vitamina D + Cálcio (prevenção de osteoporose por corticoide)`,
    notes: "Classe III: focal. Classe IV: difusa (mais grave). Classe V: membranosa. Biópsia renal é mandatória para classificação e tratamento.",
    warnings: "Micofenolato: teratogênico (contracepção obrigatória). Hidroxicloroquina: exame oftalmológico anual (maculopatia). Anti-dsDNA e complemento para monitorizar atividade.",
    guideline: "EULAR/ERA-EDTA / ACR / SBR",
  },
  {
    id: "rx-reumato-esclerodermia-crise-renal",
    title: "Crise Renal Esclerodérmica",
    type: "Prescrição de Emergência / Reumatologia",
    prescription: `1. EMERGÊNCIA NEFROLÓGICA/REUMATOLÓGICA
2. IECA (droga de escolha — NÃO suspender mesmo se creatinina subir):
   - Captopril 12,5-25mg VO 8/8h → titular rapidamente até 50mg 8/8h
   - OU Enalapril 5mg VO 12/12h → titular
3. Alvo PA: reduzir 20mmHg/dia (não normalizar agudamente)
4. Se HAS refratária: Anlodipino 5mg VO + Nitroprussiato em BIC
5. Monitorizar: PA horária, função renal diária, LDH, esquizócitos (MAT associada)
6. Hemodiálise se: uremia sintomática, hipercalemia refratária, sobrecarga
7. NÃO usar corticoides em dose alta (fator de risco para crise renal)
8. Hemograma com reticulócitos, haptoglobina, LDH (avaliar MAT)`,
    notes: "Crise renal esclerodérmica: HAS maligna + IRA rapidamente progressiva. Mais comum em esclerose sistêmica difusa precoce. Anti-RNA polimerase III: marcador de risco.",
    warnings: "IECA é OBRIGATÓRIO mesmo com piora da creatinina. Diálise necessária em 40-50% — muitos recuperam função renal em meses. Corticoide >15mg/dia é fator precipitante.",
    guideline: "EULAR / ACR / SBR",
  },

  // ═══════════════════════════════════════════════════
  // QUEIMADOS / CTQ — EXPANSÃO
  // ═══════════════════════════════════════════════════
  {
    id: "rx-queimado-grande-queimado",
    title: "Grande Queimado — Ressuscitação e Manejo Inicial",
    type: "Prescrição em CTQ / UTI",
    prescription: `1. ATLS: ABCDE (atenção especial à via aérea — queimadura de face/inalação)
2. IOT precoce se: queimadura de face, rouquidão, estridor, escarro carbonáceo
3. PARKLAND: Ringer Lactato 4mL x peso(kg) x %SCQ
   - 50% nas primeiras 8h (a partir do horário da queimadura)
   - 50% nas 16h seguintes
   - Titular para diurese 0,5-1mL/kg/h (adulto) ou 1mL/kg/h (criança)
4. SVD (monitorizar diurese horária OBRIGATÓRIO)
5. SNG (íleo paralítico frequente em >20% SCQ)
6. Analgesia: Morfina 0,1mg/kg EV titulada OU Cetamina 0,3mg/kg EV
7. Profilaxia de Curling (úlcera de estresse): Omeprazol 40mg EV 12/12h
8. Vacina antitetânica (se >5 anos do último reforço)
9. Curativo: SF 0,9% + Sulfadiazina de prata 1% (2º grau) OU Curativo de prata nanocristalina
10. NÃO usar antibiótico profilático sistêmico
11. Exames: HMG, gasometria, carboxi-hemoglobina, lactato, eletrólitos, CPK, mioglobina, função renal
12. Manta térmica (hipotermia é letal no queimado)`,
    notes: "Regra dos 9 (adulto): cabeça 9%, membro superior 9% cada, tronco anterior 18%, posterior 18%, membro inferior 18% cada, períneo 1%. Criança: cabeça proporcionalmente maior.",
    warnings: "SCQ >20%: risco de choque hipovolêmico. Queimadura circunferencial: escarotomia de urgência. Inalação: principal causa de morte em queimados.",
    guideline: "ABA / ISBI / SBQ",
  },
  {
    id: "rx-queimado-queimadura-eletrica",
    title: "Queimadura Elétrica",
    type: "Prescrição em CTQ / UTI",
    prescription: `1. ATLS: ABCDE — atenção a lesão associada (queda, PCR)
2. ECG contínuo por 24-48h (arritmias tardias)
3. Monitorização em UTI/semi
4. Hidratação agressiva: SF 0,9% para diurese >1-2mL/kg/h (prevenir IRA por mioglobina)
5. Se mioglobinúria (urina escura): bicarbonato de sódio 8,4% 100mL em 500mL SF → manter pH urinário >6,5
6. CPK seriada a cada 6h (rabdomiólise)
7. Avaliação neurovascular das extremidades a cada 2h (síndrome compartimental)
8. Fasciotomia se síndrome compartimental
9. Analgesia: Morfina + Cetamina EV
10. Troponina, enzimas cardíacas (lesão miocárdica)
11. Exames: HMG, eletrólitos (K!), função renal, mioglobina, gasometria
12. TC crânio se perda de consciência`,
    notes: "Lesão real muito maior que a visível (corrente percorre tecidos profundos). Alta tensão (>1000V): maior risco de lesão cardíaca e compartimental.",
    warnings: "PCR é a principal causa de morte imediata na queimadura elétrica. Rabdomiólise maciça: hipercalemia fatal. Lesão de órgãos internos pode ser oculta.",
    guideline: "ABA / ATLS / SBQ",
  },
];


