import { PrescriptionItem } from "./types";

export const susItems: PrescriptionItem[] = [
  {
    id: "rx-sus-atb",
    title: "Antibiótico SUS — Disponível em UPA",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Disponíveis na maioria das UPAs/Hospitais públicos:
1. Amoxicilina 500mg VO 8/8h
2. Amoxicilina-Clavulanato 500/125mg VO 8/8h
3. Cefalexina 500mg VO 6/6h
4. Ceftriaxona 1g EV 12/12h (principal ATB parenteral)
5. Metronidazol 500mg EV ou VO 8/8h
6. Clindamicina 600mg EV 6/6h
7. Gentamicina 5mg/kg/dia EV 1x/dia
8. Sulfametoxazol-Trimetoprim 800/160mg VO 12/12h
9. Azitromicina 500mg VO 1x/dia
10. Ciprofloxacino 500mg VO 12/12h

NÃO DISPONÍVEIS habitualmente:
- Piperacilina-Tazobactam
- Meropenem
- Vancomicina
- Levofloxacino EV
- Linezolida`,
    notes: "Confirmar disponibilidade local. Muitas UPAs têm lista restrita. Adaptar esquema à realidade do serviço.",
    guideline: "RENAME / MS",
  },
  {
    id: "rx-sus-analgesia",
    title: "Analgesia SUS — Drogas Disponíveis",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Dor leve:
1. Dipirona 500mg-1g VO ou EV 6/6h
2. Paracetamol 750mg VO 6/6h

Dor moderada:
3. Cetoprofeno 100mg EV 12/12h (se disponível)
4. Diclofenaco 75mg IM (dose única — NÃO repetir)
5. Tramadol 50-100mg EV 8/8h

Dor intensa:
6. Morfina 2-4mg EV lento
7. Nalbufina 10mg EV (alternativa sem controle especial)

Adjuvantes:
8. Buscopan Composto (Escopolamina+Dipirona) 1 amp EV
9. Metoclopramida 10mg EV (adjuvante + antiemético)`,
    notes: "Dipirona é o analgésico mais disponível no Brasil. Morfina requer notificação especial em alguns locais.",
    guideline: "MS / RENAME",
  },
  {
    id: "rx-sus-sedacao",
    title: "Sedação SUS — Drogas Disponíveis",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Para procedimentos breves:
1. Midazolam 5mg EV lento (mais disponível)
2. Cetamina 1-2mg/kg EV (procedimentos dolorosos)
3. Fentanil 50-100mcg EV (analgesia + sedação)

Para IOT em UPA:
4. Cetamina 1,5mg/kg EV (não deprime PA)
5. Midazolam 0,2mg/kg EV (alternativa)
6. Succinilcolina 1,5mg/kg EV (quando disponível)
7. Rocurônio — geralmente NÃO disponível em UPA

Agitação:
8. Haloperidol 5mg IM + Midazolam 5mg IM
9. OU Haloperidol 5mg IM + Prometazina 50mg IM`,
    notes: "Propofol geralmente NÃO disponível em UPA. Cetamina é a melhor opção para IOT sem bomba.",
    guideline: "SBA / AMIB",
  },
  {
    id: "rx-sus-drogas-upa",
    title: "Drogas Disponíveis em UPA",
    type: "Prescrição SUS / Hospital Público",
    prescription: `ANALGÉSICOS: Dipirona, Paracetamol, Tramadol, Morfina, Nalbufina
AINEs: Cetoprofeno, Diclofenaco, Ibuprofeno
ANTIEMÉTICOS: Metoclopramida, Ondansetrona, Dimenidrinato
ANTICONVULSIVANTES: Diazepam, Fenitoína, Fenobarbital
ANTIBIÓTICOS: Ceftriaxona, Metronidazol, Amoxicilina, Cefalexina, Gentamicina, Clindamicina
CARDIOVASCULAR: Adrenalina, Atropina, Amiodarona, Adenosina, Captopril, Losartana, Furosemida, Hidralazina
SEDATIVOS: Midazolam, Haloperidol, Prometazina, Clorpromazina
CORTICÓIDES: Hidrocortisona, Dexametasona, Prednisona
BRONCODILATADORES: Salbutamol, Ipratrópio
SOROS: SF 0,9%, SG 5%, Ringer Lactato
ELETRÓLITOS: KCl 19,1%, MgSO4, NaCl 20%, Gluconato de Cálcio, Bicarbonato 8,4%
OUTROS: Insulina Regular, Glicose 50%, Heparina, Enoxaparina, AAS, Clopidogrel, Omeprazol`,
    notes: "Lista pode variar por município. Drogas como Propofol, Noradrenalina, Dobutamina podem não estar disponíveis em UPA simples.",
  },
  {
    id: "rx-sus-sem-bomba",
    title: "Prescrições Sem Bomba de Infusão",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Quando NÃO há bomba de infusão:

Noradrenalina (alternativa):
1. Noradrenalina 4amp (16mg) + SF 0,9% 234mL = 250mL
2. Gotejamento: iniciar 5 gotas/min, titular conforme PA
3. Macrogotas: 1mL = 20 gotas

Fenitoína (sem bomba):
4. Fenitoína 20mg/kg + SF 0,9% 250mL
5. Correr em 20-30 min (máx 50mg/min)
6. NÃO usar SG!

Midazolam contínuo:
7. Midazolam 50mg + SF 0,9% 100mL
8. Microgotas: 1mL = 60 microgotas
9. Calcular: dose (mg/h) × 2 = microgotas/min

Amiodarona:
10. Amiodarona 900mg + SG 5% 500mL
11. Fase rápida: 45 gotas/min por 6h
12. Manutenção: 15 gotas/min por 18h`,
    notes: "Cálculo de gotejamento: Gotas/min = Volume(mL) × 20 / Tempo(min). Microgotas/min = Volume(mL) × 60 / Tempo(min).",
    warnings: "Sem bomba: risco de infusão irregular. Verificar gotejamento frequentemente.",
  },
  {
    id: "rx-sus-sem-levofloxacino",
    title: "Alternativas sem Levofloxacino",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Quando Levofloxacino NÃO está disponível:

Pneumonia comunitária:
1. Ceftriaxona 1g EV 12/12h + Azitromicina 500mg VO/EV

ITU complicada:
2. Ceftriaxona 1g EV 12/12h + Metronidazol (se suspeita anaeróbio)

DPOC exacerbada:
3. Amoxicilina-Clavulanato 875mg VO 12/12h
4. OU Ceftriaxona 1g EV 12/12h + Azitromicina

Sinusite bacteriana:
5. Amoxicilina-Clavulanato 875mg VO 12/12h

Infecção abdominal:
6. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h`,
    notes: "Quinolonas têm uso restrito no SUS. Ceftriaxona + Azitromicina cobre a maioria dos cenários.",
  },
  {
    id: "rx-sus-sem-pipe",
    title: "Alternativas sem Piperacilina-Tazobactam",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Quando Piperacilina-Tazobactam NÃO está disponível:

Infecção abdominal grave:
1. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h

Sepse sem foco definido:
2. Ceftriaxona 2g EV 1x/dia + Metronidazol 500mg EV 8/8h

Pneumonia aspirativa:
3. Ceftriaxona 1g EV 12/12h + Clindamicina 600mg EV 6/6h

Infecção de partes moles grave:
4. Ceftriaxona + Clindamicina 600mg EV 6/6h

Neutropenia febril:
5. Ceftazidima 2g EV 8/8h (se disponível)
6. OU Ceftriaxona 2g EV + Amicacina 15mg/kg/dia`,
    notes: "A combinação Ceftriaxona + Metronidazol é a principal alternativa no SUS para cobertura ampla.",
  },
  {
    id: "rx-sus-sem-vanco",
    title: "Alternativas sem Vancomicina",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Quando Vancomicina NÃO está disponível:

MRSA pele/partes moles:
1. Clindamicina 600mg EV 6/6h (boa cobertura MRSA comunitário)
2. Sulfametoxazol-Trimetoprim 800/160mg VO 12/12h (formas leves)

Endocardite suspeita:
3. Encaminhar para hospital terciário

Meningite (cobertura empírica):
4. Ceftriaxona 2g EV 12/12h (cobre maioria)
5. Associar Dexametasona 0,15mg/kg EV 6/6h

Infecção de cateter:
6. Remover cateter + Clindamicina EV
7. Encaminhar para serviço com Vancomicina`,
    warnings: "Se suspeita de MRSA invasivo, transferir para hospital com recursos.",
  },
  {
    id: "rx-sus-sem-meropenem",
    title: "Alternativas sem Meropenem",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Quando Meropenem NÃO está disponível:

Infecção abdominal grave:
1. Ceftriaxona 2g EV 1x/dia + Metronidazol 500mg EV 8/8h + Amicacina 15mg/kg/dia

Sepse grave sem foco definido:
2. Ceftriaxona 2g + Metronidazol + Gentamicina 5mg/kg/dia

Pneumonia aspirativa grave:
3. Ceftriaxona + Clindamicina 600mg EV 6/6h

Neutropenia febril:
4. Ceftazidima 2g EV 8/8h (se disponível)
5. OU Ceftriaxona 2g + Amicacina 15mg/kg/dia

ESBL sem carbapenêmico:
6. Amicacina 15mg/kg/dia + avaliar sensibilidade
7. Transferir se possível para hospital com recursos`,
    notes: "Sem carbapenêmico, a cobertura de ESBL fica limitada. Transferir casos graves.",
  },
  {
    id: "rx-sus-prescricao-ubs",
    title: "Prescrição Padrão UBS / APS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Medicações disponíveis na UBS/APS:

ANALGÉSICOS: Dipirona, Paracetamol, Ibuprofeno
ANTIBIÓTICOS: Amoxicilina, Cefalexina, Sulfametoxazol-Trimetoprim, Azitromicina, Metronidazol
ANTI-HIPERTENSIVOS: Losartana, Enalapril, Hidroclorotiazida, Anlodipino, Captopril
ANTIDIABÉTICOS: Metformina, Glibenclamida, Insulina NPH, Insulina Regular
RESPIRATÓRIO: Salbutamol spray, Beclometasona spray, Prednisona
GASTRO: Omeprazol, Ranitidina
PSIQUIÁTRICOS: Fluoxetina, Amitriptilina, Haloperidol, Diazepam, Clorpromazina
OUTROS: Dexametasona, AAS, Sinvastatina, Furosemida, Espironolactona

Receituário: branco comum (maioria), azul B2 (BZD), amarelo A (opioides)`,
    notes: "Lista pode variar por município. Conferir RENAME e lista municipal.",
    guideline: "RENAME / MS",
  },
  {
    id: "rx-sus-gotejamento",
    title: "Tabela de Gotejamento — Sem Bomba",
    type: "Prescrição SUS / Hospital Público",
    prescription: `FÓRMULAS:
Macrogotas/min = Volume(mL) / (Tempo(h) × 3)
Microgotas/min = Volume(mL) / Tempo(h)

TABELA RÁPIDA (1000mL):
8h = 42 gotas/min = 125 microgotas/min
12h = 28 gotas/min = 83 microgotas/min
24h = 14 gotas/min = 42 microgotas/min

TABELA RÁPIDA (500mL):
4h = 42 gotas/min
6h = 28 gotas/min
8h = 21 gotas/min

RELAÇÕES:
1mL = 20 macrogotas = 60 microgotas
1 macrogota = 3 microgotas

ATB COMUNS:
Ceftriaxona 1g + SF 100mL em 30 min = 67 gotas/min
Metronidazol 500mg/100mL em 30 min = 67 gotas/min
Clindamicina 600mg + SF 100mL em 30 min = 67 gotas/min`,
    notes: "Colar tabela de gotejamento na sala de prescrição. Verificar gotejamento frequentemente.",
  },
  {
    id: "rx-sus-curativos",
    title: "Curativos e Feridas — UPA/PS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Ferida limpa (corte, escoriação):
1. Limpeza com SF 0,9% em jato (seringa 20mL + agulha 40×12)
2. Clorexidina aquosa 0,2% ou PVPI tópico perilesional
3. Sutura se necessário (Nylon 3-0 a 5-0)
4. Curativo oclusivo com gaze + micropore

Ferida contaminada:
5. Limpeza exaustiva com SF 0,9%
6. Desbridamento se tecido desvitalizado
7. Cefalexina 500mg VO 6/6h por 7 dias (se sinais de infecção)
8. OU Amoxicilina-Clavulanato 500/125mg VO 8/8h

Queimadura (1º/2º grau pequena):
9. SF 0,9% gelado para limpeza
10. Sulfadiazina de prata 1% tópica
11. Curativo não aderente

Profilaxia tétano: Verificar cartão vacinal. dT se >5 anos.`,
    notes: "Na UPA: priorizar SF 0,9% para limpeza. Não usar álcool ou água oxigenada em ferida aberta.",
  },
  {
    id: "rx-sus-nebulizacao",
    title: "Nebulização Padrão — UPA/PS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Crise asmática / Broncoespasmo:
1. Fenoterol 10 gotas + Ipratrópio 20 gotas + SF 3mL — NBZ 20/20 min (3x na 1ª hora)
2. Depois: NBZ 4/4h ou 6/6h conforme resposta
3. Prednisona 40-60mg VO OU Hidrocortisona 100mg EV

Bronquiolite (pediatria):
4. SF 0,9% 3-5mL — NBZ (umidificação)
5. NÃO usar broncodilatadores de rotina em bronquiolite <6 meses

Laringite / Crupe:
6. Adrenalina 1:1000 — 3-5mL pura em NBZ
7. Dexametasona 0,6mg/kg VO/IM dose única

DPOC exacerbado:
8. Fenoterol 10 gotas + Ipratrópio 40 gotas + SF 3mL — NBZ
9. O2 baixo fluxo (alvo SpO2 88-92%)`,
    warnings: "Na DPOC: O2 em baixo fluxo (risco de narcose por CO2). Não suspender O2, apenas titular.",
    guideline: "SBPT / GINA",
  },
  {
    id: "rx-sus-hidratacao",
    title: "Hidratação Venosa Padrão — Adulto",
    type: "Prescrição SUS / Hospital Público",
    prescription: `MANUTENÇÃO (paciente em dieta zero):
1. SG 5% 1000mL + NaCl 20% 20mL + KCl 19,1% 10mL — EV 8/8h
   (fornece ~2400mL/dia + eletrólitos básicos)

REPOSIÇÃO (desidratação moderada):
2. SF 0,9% 1000mL EV em 2-4h → reavaliar
3. Se persistir: mais 500-1000mL conforme clínica

DESIDRATAÇÃO GRAVE / CHOQUE:
4. SF 0,9% 500mL EV em 15-20 min (pode repetir até 30mL/kg)
5. Reavaliar PA, FC, perfusão

MONITORAR:
6. Diurese (alvo ≥0,5mL/kg/h)
7. Eletrólitos a cada 12-24h
8. Balanço hídrico
9. Peso diário se internado`,
    notes: "Regra de Holliday-Segar (manutenção): 100mL/kg (primeiros 10kg) + 50mL/kg (10-20kg) + 20mL/kg (>20kg) /dia.",
  },
  {
    id: "rx-sus-ortopedia",
    title: "Imobilizações e Analgesia — UPA/PS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Tala gessada (sem gesso circular no PS):
1. Algodão ortopédico + atadura gessada (tala)
2. NÃO fazer gesso circular no PS agudo (edema → síndrome compartimental)
3. Membro elevado + gelo

Analgesia padrão ortopedia:
4. Dipirona 1g EV 6/6h
5. Cetoprofeno 100mg EV 12/12h (se sem CI)
6. Tramadol 50-100mg EV 8/8h (se dor moderada/intensa)
7. Morfina 2-4mg EV (se dor intensa — fratura de fêmur, politrauma)
8. Diazepam 5-10mg VO (relaxante muscular — lombalgia)

Disponível na UPA:
- Tala gessada, tipoia, colar cervical, prancha
- NÃO disponível: parafusos, placas, fixadores (transferir)`,
    notes: "Fratura exposta, lesão vascular, luxação irredutível: TRANSFERIR para hospital com ortopedia.",
  },
  {
    id: "rx-sus-psiquiatria",
    title: "Emergência Psiquiátrica — UPA/PS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Agitação psicomotora:
1. Haloperidol 5mg IM + Prometazina 50mg IM (mesma seringa)
   Repetir após 30 min se necessário (máx 3 doses em 24h)
2. Se disponível: Midazolam 7,5-15mg IM (ação mais rápida)

Surto psicótico:
3. Haloperidol 5mg IM → após estabilização: Risperidona 2mg VO 12/12h

Intoxicação aguda (álcool):
4. Tiamina 300mg IM (ANTES de glicose)
5. Glicose hipertônica se glicemia baixa
6. Hidratação: SF 0,9% 1000mL + complexo B

Tentativa de suicídio:
7. Estabilizar clinicamente (lavagem gástrica se <1h, carvão ativado)
8. Avaliação psiquiátrica obrigatória
9. NÃO dar alta sem avaliação psiquiátrica
10. Internação involuntária se risco iminente (Lei 10.216)
11. Notificação compulsória (violência autoprovocada)`,
    warnings: "NÃO dar alta a paciente com ideação suicida sem avaliação psiquiátrica.",
    guideline: "ABP / MS",
  },
  {
    id: "rx-sus-dengue",
    title: "Dengue — Classificação e Manejo SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `GRUPO A (sem sinais de alarme, sem comorbidades):
1. Hidratação oral 60mL/kg/dia (1/3 SRO + 2/3 líquidos caseiros)
2. Paracetamol 750mg VO 6/6h OU Dipirona 1g VO 6/6h
3. NÃO usar AAS ou AINEs
4. Retorno diário até 48h após febre

GRUPO B (comorbidades OU <2 anos OU >65 anos OU gestante):
5. Hidratação oral supervisionada na UBS/UPA por 4-6h
6. Hemograma (Ht basal)

GRUPO C (sinais de alarme):
7. SF 0,9% 20mL/kg em 2h → reavaliar
8. Se melhora: 25mL/kg em 6h → manutenção
9. Hemograma + Ht seriado 2/2h
10. Internar

GRUPO D (dengue grave — choque):
11. SF 0,9% 20mL/kg em 20 min (repetir até 3x)
12. Se refratário: albumina ou coloides
13. UTI + monitorização`,
    guideline: "MS / OMS 2024",
  },
];
