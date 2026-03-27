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
];

