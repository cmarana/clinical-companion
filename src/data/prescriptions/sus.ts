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
];
