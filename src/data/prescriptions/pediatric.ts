import { PrescriptionItem } from "./types";

export const pediatricItems: PrescriptionItem[] = [
  {
    id: "rx-ped-febre",
    title: "Febre na Criança",
    type: "Prescrição Pediátrica",
    prescription: `1. Dipirona gotas: 1 gota/kg VO 6/6h (máx 40 gotas)
2. OU Paracetamol gotas: 1 gota/kg VO 6/6h (máx 35 gotas)
3. OU Ibuprofeno 50mg/mL: 1 gota/kg VO 8/8h (>6 meses)
4. Medidas físicas: banho morno, roupas leves
5. Hidratação oral reforçada
6. Retorno se: febre >48h, prostração, manchas, convulsão, <3 meses com febre`,
    notes: "Febre em <3 meses: SEMPRE investigar (hemograma, PCR, hemocultura, EAS, urocultura). Internar se <1 mês.",
    warnings: "NÃO usar AAS em crianças (Síndrome de Reye).",
    guideline: "SBP 2023",
  },
  {
    id: "rx-ped-desidratacao",
    title: "Desidratação Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Plano A (sem desidratação):
1. SRO após cada evacuação: <1 ano: 50-100mL; 1-10 anos: 100-200mL

Plano B (desidratação leve/moderada):
2. TRO: SRO 50-100mL/kg em 4-6h (via oral, frequente, pequenos volumes)
3. Se vômitos: Ondansetrona 0,15mg/kg VO/EV (máx 4mg)
4. Reavaliar após 4h

Plano C (desidratação grave):
5. SF 0,9% 20mL/kg EV em 20-30 min (repetir até 3x)
6. Reavaliar: se melhorou → Plano B
7. Se choque: SF 0,9% 20mL/kg em bolus rápido
8. Glicemia capilar (hipoglicemia frequente)`,
    guideline: "OMS / MS / SBP",
  },
  {
    id: "rx-ped-asma",
    title: "Asma Pediátrica — Crise",
    type: "Prescrição Pediátrica",
    prescription: `Leve/Moderada:
1. Salbutamol spray 2-4 jatos com espaçador a cada 20 min (3x)
2. Ipratrópio 2 jatos a cada 20 min (3x)
3. Prednisolona 1-2mg/kg VO (máx 40mg)

Grave:
4. Salbutamol NBZ: 0,15mg/kg (mín 2,5mg) + SF 3mL a cada 20 min
5. Ipratrópio 250mcg na NBZ
6. Metilprednisolona 1-2mg/kg EV
7. Sulfato de magnésio 25-50mg/kg EV em 20 min (máx 2g)
8. O2 para SpO2 >94%
9. Adrenalina IM se risco de PCR`,
    guideline: "GINA 2023 / SBP",
  },
  {
    id: "rx-ped-convulsao-febril",
    title: "Convulsão Febril",
    type: "Prescrição Pediátrica",
    prescription: `Durante a crise:
1. Proteção (posição lateral, nada na boca)
2. Diazepam 0,3-0,5mg/kg EV (máx 10mg) OU retal 0,5mg/kg
3. OU Midazolam 0,2mg/kg IM/intranasal
4. Antitérmico: Dipirona 15mg/kg EV

Após a crise:
5. Observação por 4-6h
6. Glicemia capilar
7. Investigar foco infeccioso
8. Punção lombar: se <12 meses, suspeita de meningite, ou crise complexa
9. Orientar pais: convulsão febril simples é benigna`,
    notes: "Convulsão febril SIMPLES: <15 min, generalizada, sem recorrência em 24h, 6m-5 anos.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-pneumonia",
    title: "Pneumonia Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Ambulatorial (>2 meses, sem gravidade):
1. Amoxicilina 50mg/kg/dia VO dividido 8/8h por 7-10 dias
2. Dipirona gotas 1gota/kg 6/6h se febre
3. Hidratação oral

Hospitalar (sinais de gravidade):
4. Penicilina Cristalina 200.000 UI/kg/dia EV div 6/6h
5. OU Ampicilina 200mg/kg/dia EV div 6/6h
6. SF 0,9% — acesso venoso
7. O2 se SpO2 <92%
8. Dipirona 15mg/kg EV 6/6h
9. RX tórax + hemograma + PCR`,
    notes: "<2 meses: SEMPRE internar. ATB: Ampicilina + Gentamicina.",
    guideline: "SBP / OMS",
  },
  {
    id: "rx-ped-sepse",
    title: "Sepse Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1ª HORA:
1. O2 alto fluxo
2. SF 0,9% 20mL/kg EV em 5-10 min (repetir até 60mL/kg)
3. Ceftriaxona 100mg/kg EV (máx 4g) — ATB IMEDIATO
4. Glicemia: se <70 → Glicose 25% 2mL/kg EV
5. Cálcio: Gluconato de Cálcio 10% 1mL/kg EV lento

Se refratário a fluido:
6. Adrenalina 0,1-1mcg/kg/min OU Noradrenalina
7. Hidrocortisona 2mg/kg EV (se refratário a catecolaminas)
8. IOT precoce se instável`,
    warnings: "Criança compensa choque até colapso súbito. PAM mínima = 40 + (2 × idade em anos).",
    guideline: "SSC 2020 Pediatric / SBP",
  },
  {
    id: "rx-ped-anafilaxia",
    title: "Anafilaxia Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1. Adrenalina 1:1000 — 0,01mg/kg IM na coxa (máx 0,3mg em <30kg)
2. Repetir a cada 5-15 min se necessário
3. SF 0,9% 20mL/kg EV rápido
4. Difenidramina 1mg/kg EV (máx 50mg)
5. Metilprednisolona 1-2mg/kg EV
6. Salbutamol NBZ se broncoespasmo
7. O2 alto fluxo
8. Monitorização por 6-8h`,
    warnings: "Dose de adrenalina pediátrica: 0,01mg/kg (máx 0,3mg se <30kg, 0,5mg se >30kg).",
    guideline: "SBP / WAO",
  },
  {
    id: "rx-ped-dor",
    title: "Analgesia Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Dor leve:
1. Dipirona 15mg/kg VO/EV 6/6h
2. Paracetamol 10-15mg/kg VO 6/6h (máx 75mg/kg/dia)
3. Ibuprofeno 5-10mg/kg VO 8/8h (>6 meses)

Dor moderada:
4. Tramadol 1-2mg/kg EV 6/6h (>1 ano)
5. OU Codeína 0,5-1mg/kg VO 6/6h (>12 anos)

Dor intensa:
6. Morfina 0,1mg/kg EV lento (titular)
7. OU Fentanil 1-2mcg/kg EV
8. Monitorar SpO2 e FR`,
    warnings: "NÃO usar AAS em crianças. Codeína: contraindicada <12 anos (metabolismo variável).",
    guideline: "SBP / SBA",
  },
  {
    id: "rx-ped-bronquiolite",
    title: "Bronquiolite Viral Aguda",
    type: "Prescrição Pediátrica",
    prescription: `1. O2 suplementar se SpO2 <92%
2. Aspiração nasal com SF 0,9% antes das mamadas
3. Hidratação: VO ou EV conforme tolerância
4. Posição: cabeceira elevada 30°
5. Monitorização de SpO2 e FR
6. Cateter nasal de alto fluxo (se disponível e SpO2 <92%)
7. NÃO usar: broncodilatador de rotina, corticóide, antibiótico
8. Teste rápido para VSR (se disponível)
9. Internação se: <3 meses, prematuro, SpO2 <92%, apneias, recusa alimentar`,
    notes: "Bronquiolite é VIRAL. ATB apenas se infecção bacteriana secundária documentada.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-laringite",
    title: "Laringite / Crupe",
    type: "Prescrição Pediátrica",
    prescription: `Leve (estridor apenas ao chorar):
1. Dexametasona 0,15-0,6mg/kg VO dose única (máx 10mg)
2. Observação por 2-4h

Moderada/Grave (estridor em repouso):
3. Nebulização com Adrenalina pura (1:1000) 3-5mL
4. Dexametasona 0,6mg/kg VO/EV (máx 10mg)
5. O2 umidificado se SpO2 <94%
6. Observar por 3-4h após NBZ com adrenalina (efeito rebote)
7. Se grave/sem resposta: considerar IOT (tubo 0,5-1mm menor)`,
    notes: "Adrenalina NBZ: início em 10-30min, duração ~2h. Observar efeito rebote.",
    guideline: "SBP",
  },
  {
    id: "rx-ped-itu",
    title: "ITU Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `<3 meses ou grave: INTERNAR
1. Ampicilina 100mg/kg/dia EV div 6/6h + Gentamicina 5mg/kg/dia EV

3 meses-2 anos (moderada):
2. Ceftriaxona 50mg/kg/dia EV 1x/dia

>2 anos (leve, ambulatorial):
3. Cefalexina 50mg/kg/dia VO div 6/6h por 7-10 dias
4. OU Amoxicilina-Clavulanato

Sempre solicitar:
5. EAS + urocultura (coleta por cateterismo se <2 anos)
6. USG renal
7. UCM se <6 meses ou ITU recorrente`,
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-cetoacidose",
    title: "Cetoacidose Diabética Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1. SF 0,9% 20mL/kg EV em 1h (expansão) → 10mL/kg/h nas 2h seguintes
2. NÃO corrigir desidratação rápido demais (risco de edema cerebral)
3. Insulina Regular 0,1UI/kg/h EV contínua (iniciar APÓS 1ª hora de hidratação)
4. K+ ≥5,3: não repor. K+ 3,5-5,3: 40mEq/L no soro. K+ <3,5: repor ANTES da insulina
5. Glicemia capilar 1/1h
6. Gasometria 2/2h
7. Quando glicemia <250: trocar para SG 5% + SF 0,45% e reduzir insulina
8. Transição para SC quando pH >7,3 e HCO3 >15 e paciente comendo`,
    warnings: "Edema cerebral: cefaleia, bradicardia, alteração consciência → Manitol 0,5-1g/kg EV.",
    guideline: "SBP / ISPAD",
  },
  {
    id: "rx-ped-meningite",
    title: "Meningite Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `>3 meses:
1. Ceftriaxona 100mg/kg/dia EV div 12/12h (máx 4g/dia)
2. Dexametasona 0,15mg/kg EV 6/6h por 4 dias (ANTES ou junto com ATB)

1-3 meses:
3. Ampicilina 200mg/kg/dia + Ceftriaxona 100mg/kg/dia

<1 mês:
4. Ampicilina 200mg/kg/dia + Gentamicina 5mg/kg/dia OU Cefotaxima

Todos:
5. Punção lombar (se sem CI)
6. Hemograma, PCR, hemocultura, glicemia
7. Dipirona 15mg/kg EV 6/6h se febre
8. SF 0,9% — cuidado com restrição hídrica (SIADH)
9. Notificação compulsória
10. Isolamento se meningocócica`,
    warnings: "ATB IMEDIATO na suspeita. Dexametasona reduz sequela auditiva (H. influenzae).",
    guideline: "SBP / IDSA / MS",
  },
  {
    id: "rx-ped-geca",
    title: "Gastroenterite Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Sem desidratação (Plano A):
1. SRO após cada evacuação: <1 ano 50-100mL, 1-10 anos 100-200mL
2. Manter aleitamento materno
3. Zinco 10mg/dia (<6m) ou 20mg/dia (>6m) por 10-14 dias

Desidratação leve/moderada (Plano B):
4. TRO: SRO 50-100mL/kg em 4-6h
5. Ondansetrona 0,15mg/kg VO (máx 4mg) se vômitos

Desidratação grave (Plano C):
6. SF 0,9% 20mL/kg EV em 20-30 min (repetir até 3x)
7. Reavaliar → se melhorou: Plano B
8. Glicemia capilar (hipoglicemia frequente)`,
    notes: "Zinco reduz duração e gravidade da diarreia. ATB: apenas se disenteria com comprometimento sistêmico.",
    guideline: "OMS / SBP",
  },
  {
    id: "rx-ped-intoxicacao",
    title: "Intoxicação Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1. ABCDE — estabilizar primeiro
2. Identificar substância, dose, tempo
3. Carvão ativado 1g/kg VO (máx 50g) — se <1h da ingestão e via aérea protegida
4. NÃO induzir vômito (risco de aspiração)
5. Lavagem gástrica: raramente indicada (<1h, substância potencialmente fatal)
6. Antídotos específicos:
   Paracetamol: N-acetilcisteína 140mg/kg VO ataque → 70mg/kg 4/4h
   BZD: Flumazenil 0,01mg/kg EV (cuidado se epiléptico)
   Opioide: Naloxona 0,1mg/kg EV
   Organofosforado: Atropina 0,02mg/kg EV
7. Exames: hemograma, função renal/hepática, gasometria, eletrólitos
8. ECG (QTc)
9. Contatar CIATox (0800-722-6001)`,
    guideline: "SBP / CIATox",
  },
  {
    id: "rx-ped-oma",
    title: "Otite Média Aguda Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `<6 meses ou grave (febre ≥39°C, otalgia intensa, bilateral):
1. Amoxicilina 50mg/kg/dia VO 8/8h por 10 dias
2. Se falha em 48-72h: Amoxicilina-Clavulanato 90mg/kg/dia (amox) VO 12/12h

≥6 meses, unilateral, não grave:
3. Observação por 48-72h (watchful waiting)
4. Analgesia: Ibuprofeno 10mg/kg VO 8/8h

Todos:
5. Dipirona gotas 1 gota/kg VO 6/6h se dor/febre
6. NÃO usar descongestionantes ou anti-histamínicos (sem benefício)
7. Retorno se: febre persistente, piora, otorreia`,
    notes: "Otoscopia pneumática é o padrão-ouro. Amoxicilina dose alta em locais com resistência.",
    guideline: "SBP / AAP 2023",
  },
  {
    id: "rx-ped-coqueluche",
    title: "Coqueluche — Prescrição Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1. Azitromicina:
   <6 meses: 10mg/kg/dia VO 1x/dia por 5 dias
   ≥6 meses: 10mg/kg no D1 → 5mg/kg D2-D5
2. OU Claritromicina 7,5mg/kg/dose VO 12/12h por 7 dias (>1 mês)
3. Isolamento respiratório por 5 dias após início do ATB
4. O2 suplementar se SpO2 <92%
5. Aspiração de secreções se necessário
6. Hidratação (alimentação fracionada — vômitos pós-tosse)
7. Monitorização: apneia em <6 meses (pode ser o único sintoma)
8. Hemograma (linfocitose importante sugere coqueluche)
9. PCR para Bordetella pertussis (nasofaringe)
10. Profilaxia dos contactantes: Azitromicina por 5 dias`,
    warnings: "RN e lactentes <6 meses: INTERNAR. Risco de apneia e cianose.",
    guideline: "SBP / MS / SVS",
  },
  {
    id: "rx-ped-alergia-alimentar",
    title: "Alergia Alimentar — Reação Aguda Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Reação leve/moderada (urticária, vômito):
1. Dexclorfeniramina 0,15mg/kg/dia VO 8/8h
2. OU Cetirizina gotas: 6-12m: 2,5mg/dia; 1-5a: 5mg/dia; >6a: 10mg/dia
3. Prednisolona 1mg/kg VO dose única (se edema/urticária extensa)
4. Suspender o alérgeno alimentar

Reação grave (anafilaxia):
5. Adrenalina 1:1000 IM 0,01mg/kg (máx 0,3mg) — face lateral da coxa
6. SF 0,9% 20mL/kg EV rápido
7. Hidrocortisona 4mg/kg EV
8. Monitorização por 6-8h (reação bifásica)
9. Prescrever adrenalina autoinjetável na alta
10. Encaminhar alergista pediátrico`,
    warnings: "Toda anafilaxia deve receber ADRENALINA IM como primeira medida. Anti-histamínico NÃO trata anafilaxia.",
    guideline: "SBP / ASBAI",
  },
  {
    id: "rx-ped-tcec",
    title: "TCE Leve na Criança — Conduta",
    type: "Prescrição Pediátrica",
    prescription: `PECARN (critérios de baixo risco — NÃO fazer TC):
<2 anos: sem hematoma (exceto frontal), mecanismo não grave, comportamento normal, sem perda de consciência
≥2 anos: sem perda de consciência, sem vômito, mecanismo não grave, sem cefaleia grave

Se baixo risco:
1. Observação por 4-6h no PS
2. Paracetamol 1gota/kg VO 6/6h se dor (NÃO usar AINEs nas primeiras 24h)
3. Dieta leve
4. NÃO sedar (dificulta avaliação neurológica)

Se risco intermediário:
5. Observação prolongada (6-12h) OU TC crânio
6. Monitorar: Glasgow pediátrico, pupilas, fontanela, vômitos

Alta com orientações:
7. Acordar a cada 2-3h nas primeiras 24h
8. Retorno se: vômitos repetidos, sonolência excessiva, convulsão, líquido pelo nariz/ouvido`,
    notes: "PECARN reduz TC desnecessárias em crianças. Aplicar criteriosamente.",
    guideline: "SBP / PECARN",
  },
  {
    id: "rx-ped-pcr",
    title: "PCR Pediátrica — Prescrição",
    type: "Prescrição de Emergência Pediátrica",
    prescription: `1. RCP: 15:2 (2 socorristas) ou 30:2 (1 socorrista)
   Frequência: 100-120 compressões/min
   Profundidade: 1/3 do diâmetro AP do tórax
2. Adrenalina 0,01mg/kg (0,1mL/kg da 1:10.000) EV/IO a cada 3-5 min
   Dose máxima: 1mg
3. Se FV/TV: desfibrilar 2J/kg → 4J/kg → até 10J/kg
4. Amiodarona 5mg/kg EV bolus (FV/TV refratária)
5. SF 0,9% 20mL/kg bolus se hipovolemia suspeitada
6. IOT: tubo sem cuff <8 anos: (idade/4 + 4); com cuff: (idade/4 + 3,5)
7. Tratar causas reversíveis: 5Hs e 5Ts
8. Glicemia capilar (hipoglicemia é causa comum em crianças)
9. Acesso IO se EV não obtido em 60-90 segundos`,
    warnings: "Bradicardia <60 com má perfusão em criança = INICIAR RCP. Causa mais comum de PCR pediátrica: hipóxia.",
    guideline: "AHA / PALS 2020",
  },
  {
    id: "rx-ped-diabetes-novo",
    title: "Diabetes Tipo 1 — Diagnóstico Novo na Criança",
    type: "Prescrição Pediátrica / Hospitalar",
    prescription: `Se CAD: ver protocolo de Cetoacidose Pediátrica

Sem CAD (diagnóstico ambulatorial/internação):
1. Insulina NPH 0,3-0,5UI/kg/dia SC dividida 2/3 manhã + 1/3 noite
2. Insulina Regular: escala móvel conforme glicemia
   <150: 0; 150-200: 1UI; 200-250: 2UI; 250-300: 3UI; >300: 4UI
3. Glicemia capilar: pré-refeições + 22h + 3h
4. Dieta fracionada (6 refeições)
5. Hemoglobina glicada (A1c) basal
6. Peptídeo C, anti-GAD, anti-IA2 (confirmar tipo 1)
7. TSH + anti-TPO (associação com Hashimoto)
8. Função renal, perfil lipídico
9. Avaliação oftalmológica anual
10. Educação em diabetes: aplicação, rodízio, hipoglicemia, contagem de carboidratos`,
    guideline: "SBD / ISPAD / ADA",
  },
  {
    id: "rx-ped-choque",
    title: "Choque Pediátrico",
    type: "Prescrição Pediátrica",
    prescription: `1. O2 100% alto fluxo
2. Acesso EV/IO em 90 segundos (se não conseguir periférico)
3. SF 0,9% 20mL/kg EV rápido em bolus (push/pull com seringa)
   Repetir até 60mL/kg na 1ª hora (reavaliar após cada bolus)
4. Se não responde a 40-60mL/kg:
   Adrenalina 0,1-1mcg/kg/min (choque frio — perfusão ruim, extremidades frias)
   OU Noradrenalina 0,1-2mcg/kg/min (choque quente — vasodilatado, corado)
5. Hidrocortisona 2mg/kg EV (se refratário a vasopressor)
6. Glicemia capilar (hipoglicemia é causa de choque em crianças)
7. Cálcio iônico (hipocalcemia piora contractilidade)
8. ATB na 1ª hora se séptico
9. Monitorização: PA, FC, perfusão periférica, TEC, diurese
10. Alvo: TEC <2s, pulsos normais, diurese >1mL/kg/h`,
    warnings: "Criança compensa muito antes de descompensar. Hipotensão é sinal TARDIO = choque descompensado.",
    guideline: "SBP / PALS / SSC Pediátrica",
  },
  {
    id: "rx-ped-status-epilepticus",
    title: "Status Epiléptico Pediátrico",
    type: "Prescrição Pediátrica",
    prescription: `0-5 min (estabilização):
1. Via aérea, O2, monitorização, glicemia
2. Diazepam 0,3mg/kg EV (máx 10mg) OU 0,5mg/kg retal
3. OU Midazolam 0,2mg/kg IM/intranasal se sem acesso

5-15 min (2ª linha):
4. Repetir benzodiazepínico 1x se persistir
5. Fenitoína 20mg/kg EV em 20 min (em SF, máx 1mg/kg/min)
6. OU Valproato 20-40mg/kg EV em 5 min (preferido se crise focal)
7. OU Levetiracetam 40-60mg/kg EV em 15 min

>30 min (status refratário):
8. Midazolam BIC 0,1-0,4mg/kg/h
9. OU Propofol (>3 anos) — NÃO usar em BIC prolongada em crianças
10. IOT
11. Piridoxina 100mg EV se <18 meses (excluir deficiência de B6)`,
    guideline: "SBP / ABN / AES",
  },
  {
    id: "rx-ped-queimadura",
    title: "Queimadura Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Avaliação:
1. SCQ pelo diagrama de Lund-Browder (NÃO usar regra dos 9 em criança)
2. Classificação: 1° (epiderme), 2° (derme), 3° (total)

Ressuscitação (se SCQ >10% em criança):
3. SF 0,9% ou RL: 3mL/kg/% SCQ em 24h
   Metade nas primeiras 8h, metade nas próximas 16h
4. + Necessidade hídrica basal de manutenção (Holliday-Segar)
5. Alvo diurese: 1mL/kg/h

Tratamento local:
6. Sulfadiazina de prata 1% nas áreas abertas
7. Curativo oclusivo em áreas de 2° grau
8. NÃO usar gelo, pasta de dente, manteiga

Suporte:
9. Analgesia: Morfina 0,1mg/kg EV + Dipirona 15mg/kg EV
10. Verificar vacinação antitetânica
11. SNG se SCQ >20% (íleo adinâmico)
12. IOT precoce se: queimadura de face/VA, inalação, edema progressivo`,
    warnings: "Queimadura em criança: SEMPRE investigar maus-tratos (padrão de luva/meia, lesões simétricas).",
    guideline: "SBP / SBCP / ABA",
  },
  {
    id: "rx-ped-politrauma",
    title: "Politrauma Pediátrico",
    type: "Prescrição Pediátrica",
    prescription: `A — Via aérea (tubo sem cuff <8 anos):
1. Tubo: (idade/4) + 4 para sem cuff, (idade/4) + 3,5 para com cuff
2. Colar cervical pediátrico

B — Ventilação:
3. FR alvo: lactente 30-40, pré-escolar 20-30, escolar 15-20

C — Circulação:
4. Acesso EV/IO (intraósseo se >90s sem periférico)
5. SF 0,9% 20mL/kg bolus → reavaliar
6. Transfusão se não responder a 40mL/kg
7. Ácido Tranexâmico 15mg/kg EV (máx 1g) em 10 min
8. PA normal: PAS = 70 + (2 × idade)

D — Neurológico:
9. Glasgow pediátrico, pupilas, fontanela
10. TC crânio se Glasgow <15, vômitos, mecanismo grave (PECARN)

E — Exposição:
11. Peso estimado: Broselow ou (idade × 2) + 8
12. Hipotermia é MUITO mais rápida em crianças — aquecer ativamente`,
    guideline: "ATLS / PHTLS / SBP",
  },
  {
    id: "rx-ped-afogamento",
    title: "Afogamento Pediátrico",
    type: "Prescrição Pediátrica",
    prescription: `1. ABCDE — priorizar ventilação (hipóxia é a causa da PCR no afogamento)
2. 5 ventilações de resgate ANTES de compressões
3. O2 100% por máscara
4. IOT se: apneia, Glasgow ≤8, SpO2 <90% refratária
5. PEEP 5-8 cmH2O (edema pulmonar não cardiogênico)
6. Aquecimento se hipotermia (retirar roupas molhadas, manta térmica)
7. SNG aberta (prevenir broncoaspiração)
8. SF 0,9% — acesso venoso (cuidado com volume se edema pulmonar)
9. Glicemia capilar
10. Gasometria, eletrólitos, hemograma
11. RX tórax (pode ser normal nas primeiras horas)
12. Observação mínima 6-8h (edema tardio)
13. Coluna cervical se mecanismo sugestivo (mergulho)`,
    warnings: "NÃO fazer manobra de Heimlich. Priorizar VENTILAÇÃO. Hipotermia em criança: NÃO parar RCP até reaquecer.",
    guideline: "SBP / SOBRASA / ILCOR",
  },
  {
    id: "rx-ped-corpo-estranho",
    title: "Corpo Estranho de Via Aérea Pediátrico",
    type: "Prescrição Pediátrica",
    prescription: `OBSTRUÇÃO COMPLETA (não respira, não chora, cianose):

<1 ano:
1. 5 tapas dorsais + 5 compressões torácicas (alternados)
2. NÃO fazer Heimlich em lactente
3. Verificar boca entre ciclos (remover se visível)
4. Se inconsciente: iniciar RCP

>1 ano:
5. Manobra de Heimlich (compressões abdominais subdiafragmáticas)
6. Se inconsciente: RCP + verificar boca a cada ciclo

OBSTRUÇÃO PARCIAL (tosse eficaz):
7. NÃO intervir — estimular tosse
8. Monitorar — pode evoluir para completa

Pós-desobstrução:
9. RX tórax AP + lateral
10. Broncoscopia se: suspeita de CE residual, estridor persistente, sibilância unilateral
11. Observação mínima 6h
12. CE esofágico: RX + endoscopia (bateria-botão = EMERGÊNCIA)`,
    warnings: "Bateria-botão no esôfago: EMERGÊNCIA absoluta (<2h causa necrose). Endoscopia IMEDIATA.",
    guideline: "SBP / AHA / PALS",
  },
  {
    id: "rx-ped-desnutricao-grave",
    title: "Desnutrição Grave (Marasmo/Kwashiorkor)",
    type: "Prescrição Pediátrica",
    prescription: `FASE DE ESTABILIZAÇÃO (D1-7):
1. NÃO hiper-hidratar (risco de IC)
2. ReSoMal 5mL/kg a cada 30 min por 2h → reavaliação
3. ATB: Amoxicilina 15mg/kg VO 8/8h + Gentamicina 7,5mg/kg IM 1x/dia
4. Vitamina A: <6m 50.000UI, 6-12m 100.000UI, >12m 200.000UI (dose única)
5. Ácido fólico 5mg D1 → 1mg/dia
6. Alimentação: F-75 (100kcal/100mL) a cada 2-3h → NÃO usar F-100 nesta fase
7. Manter aquecido (hipotermia é letal)
8. Glicemia 3/3h (hipoglicemia é frequente e fatal)
   Se <54: Glicose 10% 5mL/kg VO ou EV

FASE DE REABILITAÇÃO (D8-42):
9. F-100 (100kcal/100mL) → aumentar gradualmente
10. Sulfato ferroso 3mg/kg/dia (SOMENTE nesta fase, NÃO antes)
11. Zinco 2mg/kg/dia
12. Estimulação psicomotora`,
    warnings: "NÃO dar ferro na fase de estabilização (piora infecção). NÃO hiper-hidratar (risco IC). Aquecer SEMPRE.",
    guideline: "MS / OMS / SBP",
  },
  {
    id: "rx-ped-croup",
    title: "Crupe Viral (Laringotraqueobronquite) — Completo",
    type: "Prescrição Pediátrica",
    prescription: `Leve (estridor apenas ao chorar, sem tiragem):
1. Dexametasona 0,15-0,3mg/kg VO dose única (máx 10mg)
2. Alta com orientações

Moderado (estridor em repouso, tiragem intercostal):
3. Dexametasona 0,6mg/kg VO/IM dose única (máx 10mg)
4. Adrenalina NBZ: 0,5mL/kg (máx 5mL) da solução 1:1000 + SF 3mL
5. Observar 2-4h após adrenalina (efeito rebote possível)

Grave (estridor importante, tiragem grave, agitação, cianose):
6. Adrenalina NBZ repetida a cada 20 min (até 3x)
7. Dexametasona 0,6mg/kg EV/IM
8. O2 umidificado
9. Posição confortável (NÃO examinar orofaringe — risco de laringoespasmo)
10. IOT se: falência respiratória (tubo 0,5-1 menor que o habitual)

Todos:
11. Manter hidratação oral/EV
12. NÃO usar sedativos`,
    notes: "Pico dos sintomas: D2-3 da doença. Tosse ladrante + estridor inspiratório + rouquidão.",
    guideline: "SBP / AAP / CPS",
  },
  {
    id: "rx-ped-urticaria",
    title: "Urticária / Reação Alérgica Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Urticária sem anafilaxia:
1. Dexclorfeniramina 0,15mg/kg/dia VO dividido em 3 doses
   OU Loratadina: 2-5 anos 5mg 1x/dia; >6 anos 10mg 1x/dia
   OU Cetirizina: 6-12m 2,5mg; 1-6a 2,5-5mg; >6a 5-10mg 1x/dia
2. Prednisolona 1mg/kg VO dose única (se extenso/edema)
3. Observação 2-4h (risco de evolução para anafilaxia)

Angioedema (edema de lábios/pálpebras sem dispneia):
4. Dexclorfeniramina 0,1mg/kg EV lento
5. Hidrocortisona 5mg/kg EV (máx 200mg)
6. Observação 6h

Anafilaxia:
7. Adrenalina 0,01mg/kg IM (máx 0,3mg criança, 0,5mg adolescente)
8. Protocolo de anafilaxia completo

Todos:
9. Identificar e evitar desencadeante
10. Na alta: anti-histamínico por 5-7 dias
11. Encaminhar alergista se recorrente`,
    guideline: "SBP / ASBAI / WAO",
  },
  {
    id: "rx-ped-ictericia",
    title: "Icterícia Neonatal — Prescrição no PS",
    type: "Prescrição Pediátrica",
    prescription: `1. Bilirrubina total e frações (direta e indireta)
2. Tipagem sanguínea (mãe e RN), Coombs direto
3. Hemograma + reticulócitos
4. Plotar no nomograma de Bhutani (hora de vida × bilirrubina)

FOTOTERAPIA se acima da curva de indicação:
5. Fototerapia intensiva: irradiância ≥30 µW/cm²/nm
6. RN despido, proteção ocular
7. Monitorar: temperatura (hipo/hipertermia), hidratação, diurese
8. Bilirrubina de controle em 4-6h após início

EXSANGUINEOTRANSFUSÃO se:
9. BT >25 em RN a termo (ou conforme curva)
10. Encefalopatia bilirrubínica aguda (letargia, hipotonia, choro agudo)

Icterícia PATOLÓGICA (investigar):
11. Início <24h de vida → incompatibilidade ABO/Rh, esferocitose, G6PD
12. BD elevada → atresia biliar, infecção congênita (TORCH), hepatite neonatal
13. Encaminhar urgente se colúria + acolia fecal (atresia biliar — cirurgia <60 dias)`,
    guideline: "SBP / AAP / Neonatologia",
  },
  {
    id: "rx-ped-iva-lactente",
    title: "Infecção de Vias Aéreas Superiores (IVAS) — Lactente",
    type: "Prescrição Pediátrica",
    prescription: `1. Lavagem nasal com SF 0,9% 1-2mL em cada narina 4-6x/dia
2. Aspiração nasal suave (pera de borracha) se obstrução
3. Dipirona gotas 1 gota/kg VO 6/6h se febre ≥37,8°C (máx 40 gotas)
4. OU Paracetamol gotas 1 gota/kg VO 6/6h
5. Hidratação oral reforçada (oferecer líquidos frequentemente)
6. Cabeceira elevada para dormir
7. NÃO usar: descongestionantes, anti-histamínicos, mucolíticos em <2 anos
8. NÃO usar mel em <1 ano (risco de botulismo)
9. NÃO prescrever antibiótico (viral na imensa maioria)

Sinais de alerta para retorno:
10. Febre >48h, prostração, recusa alimentar
11. Taquipneia, tiragem, gemência (pneumonia?)
12. <3 meses com febre: SEMPRE investigar (hemograma, EAS, hemocultura)`,
    notes: "IVAS é a causa mais comum de consulta pediátrica no PS. 95% viral. ATB desnecessário na maioria.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-faringoamigdalite",
    title: "Faringoamigdalite Bacteriana (Pediatria)",
    type: "Pediatria",
    prescription: `1. Penicilina Benzatina IM dose única:
   - <20kg: 600.000 UI IM
   - ≥20kg: 1.200.000 UI IM
   OU Amoxicilina 50mg/kg/dia VO 12/12h por 10 dias
2. Ibuprofeno 5-10mg/kg/dose VO 8/8h (dor e febre)
3. Paracetamol 10-15mg/kg/dose VO 6/6h (alternância)
4. Hidratação VO incentivada (líquidos frios/gelados aliviam dor)
5. Dieta livre conforme tolerância (evitar ácidos)
6. Retorno se: febre persistente >48h após ATB, trismo, abaulamento de palato (abscesso periamigdaliano)`,
    notes: "Critérios de Centor/McIsaac ≥3: tratar empiricamente. Score 0-1: viral, não prescrever ATB.",
    warnings: "Abscesso periamigdaliano: trismo + desvio de úvula + voz abafada = drenagem + internação.",
    guideline: "SBP / IDSA / SBI",
  },
  {
    id: "rx-ped-tce-leve",
    title: "TCE Leve Pediátrico (Avaliação e Conduta)",
    type: "Pediatria",
    prescription: `1. Avaliar por PECARN:
   <2 anos: GCS ≤14, palpação craniana alterada, alteração do comportamento, hematoma não frontal, perda de consciência >5s, mecanismo grave
   ≥2 anos: GCS ≤14, sinais de fratura de base, alteração mental, perda de consciência, vômitos, cefaleia intensa, mecanismo grave
2. PECARN baixo risco: observação 4-6h no PS
3. PECARN risco intermediário: observação OU TC crânio
4. PECARN alto risco: TC crânio sem contraste
5. Analgesia: Paracetamol 15mg/kg VO
6. Manter em observação com reavaliações neurológicas 1/1h
7. Dieta leve após 2h sem vômitos
8. Se alta: orientações por escrito (sinais de alarme 48h)`,
    notes: "PECARN: sensibilidade >99% para lesão intracraniana clinicamente importante. Reduz TC desnecessárias.",
    warnings: "Fratura de crânio em <1 ano: mesmo sem alteração neurológica, considerar TC e observação prolongada.",
    guideline: "SBP / PECARN / NICE",
  },
  {
    id: "rx-ped-refluxo-lactente",
    title: "Refluxo Gastroesofágico do Lactente",
    type: "Pediatria",
    prescription: `1. Tranquilizar os pais: RGE fisiológico é comum e autolimitado
2. Medidas posturais:
   - Cabeceira elevada 30°
   - Manter sentado 30min após mamadas
3. Fracionamento: mamadas menores e mais frequentes
4. Espessamento da fórmula (se fórmula): 1 colher de cereal de arroz/30mL
5. Se AM exclusivo: manter, ajustar pega
6. Medicamentos SOMENTE se DRGE complicada:
   - Omeprazol 1mg/kg/dia VO 1x/dia (máx 20mg)
   - Domperidona 0,25mg/kg/dose VO 8/8h
7. Encaminhar Gastropediatria se: recusa alimentar, deficit ponderal, hematêmese, apneia
8. Retorno em 30 dias para reavaliação de peso`,
    notes: "90% dos lactentes com refluxo melhoram até 12-18 meses. IBP NÃO melhora choro/irritabilidade isolados.",
    guideline: "SBP / NASPGHAN / ESPGHAN",
  },
  {
    id: "rx-ped-celulite-periorbitaria",
    title: "Celulite Periorbitária / Pré-septal (Pediatria)",
    type: "Pediatria",
    prescription: `1. Diferenciar pré-septal (pálpebra) de orbitária (proptose, dor, déficit visual)
2. Se pré-septal sem sinais de gravidade:
   - Amoxicilina-Clavulanato 50mg/kg/dia VO 12/12h por 10 dias
3. Se <1 ano, febre alta ou piora rápida:
   - Internação + Cefuroxima 150mg/kg/dia EV 8/8h OU
   - Ceftriaxona 80mg/kg/dia EV 1x/dia
4. TC de órbita com contraste se: proptose, limitação de MOE, piora com ATB oral
5. Se celulite orbitária confirmada:
   - Ceftriaxona + Oxacilina EV
   - Avaliação Oftalmo + ORL
6. Analgesia: Ibuprofeno 10mg/kg 8/8h
7. Compressas mornas locais
8. Retorno em 48h (se ambulatorial)`,
    notes: "Causa mais comum: sinusite etmoidal. Staphylococcus e Streptococcus predominam.",
    warnings: "Celulite orbitária: risco de trombose de seio cavernoso e meningite. TC + internação obrigatória.",
    guideline: "SBP / AAP / IDSA",
  },
  {
    id: "rx-ped-sibilancia-recorrente",
    title: "Sibilância Recorrente do Lactente",
    type: "Pediatria",
    prescription: `1. Crise aguda:
   - Salbutamol spray 100mcg: 2-4 jatos com espaçador + máscara, a cada 20min (3 doses)
   - Prednisolona 1-2mg/kg/dia VO por 3-5 dias
2. Se resposta parcial: manter Salbutamol 4/4h
3. Tratamento de manutenção (≥3 episódios em 6 meses):
   - Budesonida 200mcg spray 1x/dia OU
   - Montelucaste 4mg VO 1x/dia (6m-5a)
4. Trial terapêutico por 8-12 semanas, depois reavaliar
5. Investigar: DRGE, alergia alimentar, fibrose cística, imunodeficiência
6. Índice Preditivo de Asma (IPA): critério maior (pais asmáticos, eczema) + menores
7. Fisioterapia respiratória
8. Controle ambiental (tabagismo passivo, mofo, ácaros)
9. Retorno em 30 dias para reavaliação`,
    notes: "Fenótipos: sibilante transitório (melhora até 3 anos), sibilante persistente (atópico — provável asma). IPA positivo: 77% serão asmáticos.",
    guideline: "SBP / GINA / PRACTALL",
  },
  {
    id: "rx-ped-meningite-bacteriana",
    title: "Meningite Bacteriana — Pediatria",
    type: "Pediatria",
    prescription: `1. Ceftriaxona 100mg/kg/dia EV 12/12h (máx 4g/dia) — 10-14 dias
   (Neisseria/Pneumococo: 7 dias; H. influenzae: 7-10 dias)
2. Vancomicina 60mg/kg/dia EV 6/6h (se suspeita de Pneumococo resistente)
3. Dexametasona 0,6mg/kg/dia EV 6/6h por 4 dias (iniciar ANTES ou junto ao ATB)
4. Líquor: celularidade, proteína, glicose, Gram, cultura, látex
5. Hidratação: 80% da manutenção (risco de SIADH)
6. Monitorizar: PC (lactentes), nível de consciência, convulsões
7. Isolamento respiratório (meningococo) até 24h de ATB
8. Quimioprofilaxia de contactantes (meningococo):
   - Rifampicina 10mg/kg 12/12h por 2 dias (adulto: 600mg)
9. Notificação compulsória imediata`,
    notes: "RN (<28d): Ampicilina + Gentamicina (Listeria + E. coli + Streptococcus B). >3 meses: Ceftriaxona ± Vancomicina.",
    warnings: "Dexametasona: benefício comprovado para H. influenzae. Controverso para outras etiologias, mas recomendado empiricamente. NÃO atrasar ATB para fazer PL.",
    guideline: "SBP / IDSA / ABN / MS",
  },
  {
    id: "rx-ped-cetoacidose-diabetica",
    title: "Cetoacidose Diabética — Pediatria",
    type: "Pediatria",
    prescription: `1. Peso da criança: ___kg
2. FASE 1 — Expansão (1ª hora):
   - SF 0,9% 20mL/kg EV em 1h (repetir se choque, máx 40-60mL/kg)
3. FASE 2 — Hidratação (manutenção + déficit em 24-48h):
   - SF 0,9% → calcular: manutenção + 5-10% déficit
   - Adicionar KCl 40mEq/L quando K+ <5,5 e diurese presente
4. Insulina Regular: 0,1UI/kg/h EV BIC (iniciar APÓS 1ª hora de hidratação)
   - Meta: queda de glicemia 50-75mg/dL/h
5. Quando glicemia <250-300: trocar para SG 5% + SF 0,45% (manter insulina)
6. Gasometria + eletrólitos + glicemia capilar: a cada 1-2h
7. Bicarbonato: APENAS se pH <6,9 (risco de edema cerebral)
8. Transição para SC: quando pH >7,3, BIC >15, AG normal, VO tolerada
   - Insulina SC 30min ANTES de suspender BIC
9. MONITORIZAR edema cerebral: cefaleia, vômito, bradicardia, alteração pupilar
   - Se edema: Manitol 0,5-1g/kg EV em 20min OU NaCl 3% 2,5-5mL/kg`,
    notes: "Edema cerebral: complicação mais temida na CAD pediátrica (0,5-1%). Fatores de risco: correção rápida de Na+, excesso de volume, uso de bicarbonato.",
    warnings: "NUNCA fazer bolus de insulina na CAD pediátrica. Queda de glicemia muito rápida = risco de edema cerebral. Monitorização neurológica contínua.",
    guideline: "SBP / ISPAD / ADA / SBD",
  },
  {
    id: "rx-ped-kawasaki",
    title: "Doença de Kawasaki — Pediatria",
    type: "Pediatria",
    prescription: `CRITÉRIOS (≥5 dias de febre + 4/5):
- Conjuntivite bilateral não purulenta
- Alteração labial/oral (lábios fissurados, língua em morango)
- Exantema polimórfico
- Alteração de extremidades (edema/descamação)
- Linfadenopatia cervical >1,5cm

TRATAMENTO:
1. Imunoglobulina IV 2g/kg em dose única (infusão em 10-12h)
   - Idealmente <10 dias de febre
2. AAS 80-100mg/kg/dia VO 6/6h (fase aguda — até afebril por 48-72h)
3. AAS 3-5mg/kg/dia VO 1x/dia (fase subaguda — por 6-8 semanas)
4. Ecocardiograma: basal → 2 semanas → 6-8 semanas
5. Se aneurisma coronariano: AAS indefinido ± anticoagulação
6. Refratário (febre >36h pós-IGIV): 2ª dose IGIV OU Infliximab OU Metilprednisolona`,
    notes: "Kawasaki incompleto: febre ≥5 dias + <4 critérios + marcadores inflamatórios elevados → considerar eco e tratar. Pico: 6-11 meses de idade.",
    warnings: "Complicação mais temida: aneurisma coronariano (20-25% sem tratamento). Com IGIV: reduz para 3-5%. NÃO vacinar (vacinas vivas) por 11 meses após IGIV.",
    guideline: "SBP / AHA / JCS",
  },
  {
    id: "rx-ped-anafilaxia-pediatrica",
    title: "Anafilaxia — Pediatria",
    type: "Pediatria",
    prescription: `1. Adrenalina IM (VASTO LATERAL da coxa):
   - <10kg: 0,1mL (0,01mg/kg)
   - 10-25kg: 0,15mg (auto-injetor pediátrico)
   - >25kg: 0,3mg
   - Repetir a cada 5-15min se necessário (até 3 doses)
2. Decúbito dorsal + elevar MMII (exceto se vômito/dispneia)
3. O2 alto fluxo (máscara com reservatório)
4. SF 0,9% 20mL/kg EV rápido (repetir se hipotensão)
5. Salbutamol NBZ 0,15mg/kg (mín 2,5mg) se broncoespasmo
6. Metilprednisolona 2mg/kg EV (máx 125mg) — prevenção fase bifásica
7. Difenidramina 1mg/kg EV (máx 50mg)
8. Observação: mínimo 4-6h (8-12h se grave)
9. Alta com: Adrenalina auto-injetável + plano de ação escrito + encaminhar alergista`,
    notes: "Causa mais comum em crianças: alimentos (leite de vaca, ovo, amendoim). Diagnóstico CLÍNICO — não esperar exames.",
    warnings: "Adrenalina é a ÚNICA droga que salva na anafilaxia. Anti-histamínico e corticoide são ADJUVANTES. Atraso na adrenalina = maior mortalidade.",
    guideline: "SBP / ASBAI / WAO / EAACI",
  },
];

