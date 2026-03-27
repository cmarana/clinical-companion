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
  {
    id: "rx-sus-sala-vermelha",
    title: "Protocolo Sala Vermelha — UPA/Hospital Público",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Materiais que DEVEM estar prontos:
1. Carrinho de PCR montado e testado
2. Desfibrilador bifásico carregado
3. Material de IOT (laringoscópio, tubos 7.0-8.0, guia, bougie)
4. Aspirador ligado
5. Drogas preparadas: Adrenalina, Amiodarona, Atropina
6. BVM com reservatório + O2

Prescrição padrão Sala Vermelha:
7. Monitorização contínua (ECG, PA, SpO2, EtCO2)
8. 2 acessos calibrosos (jelco 16-18G)
9. SF 0,9% 1000mL EV (ajustar conforme)
10. Tipagem sanguínea + hemograma + gasometria STAT
11. Glicemia capilar
12. IOT se Glasgow ≤8
13. Noradrenalina se PAM <65 (iniciar 0,1mcg/kg/min)
14. FAST (se trauma)`,
    notes: "Sala vermelha = paciente INSTÁVEL. Médico deve ficar à beira do leito até estabilização.",
    guideline: "MS / AMIB / ATLS",
  },
  {
    id: "rx-sus-receituario-controlado",
    title: "Receituário Controlado — Regras Anvisa",
    type: "Prescrição SUS / Hospital Público",
    prescription: `RECEITA BRANCA COMUM:
Anti-hipertensivos, antibióticos, AINEs — receita simples (2 vias)

RECEITA BRANCA ESPECIAL (C1):
Antidepressivos (fluoxetina, sertralina), anticonvulsivantes (gabapentina)
2 vias, validade 30 dias, máx 60 dias de tratamento

RECEITA B (AZUL — Notificação B):
Benzodiazepínicos (diazepam, clonazepam, alprazolam)
Receita azul, 2 vias, validade 30 dias, máx 60 dias
Barbitúricos: fenobarbital também

RECEITA A (AMARELA — Notificação A):
Opioides fortes: morfina, metadona, fentanil, oxicodona
Receita amarela em 3 vias (1 paciente, 1 farmácia, 1 vigilância)
Validade 30 dias, máx 30 dias de tratamento

RECEITA ANTIMICROBIANOS:
2 vias, validade 10 dias, identificação do paciente`,
    notes: "SUS fornece: diazepam, clonazepam, fenobarbital, morfina solução oral, codeína. Formulário terapêutico RENAME.",
    guideline: "ANVISA / Portaria SVS 344/1998",
  },
  {
    id: "rx-sus-transferencia",
    title: "Transferência Inter-hospitalar — SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `1. Estabilizar paciente ANTES da transferência
2. Contato com Central de Regulação (SAMU, regulação estadual)
3. Documentação obrigatória:
   - Resumo clínico + exames
   - Justificativa para transferência
   - Classificação de risco
   - Consentimento do paciente/familiar
4. Prescrição de transporte:
   - Monitorização contínua
   - Acesso venoso pérvio
   - Medicações de emergência disponíveis
   - Profissional adequado ao nível de complexidade
5. Se VM: ambú + O2 suficiente para tempo + 30 min reserva
6. Drogas vasoativas em BIC com bateria (verificar carga)
7. Comunicar hospital receptor (leito confirmado)
8. Prontuário + exames de imagem acompanham o paciente`,
    notes: "Nunca transferir paciente instável sem estabilização prévia. Responsabilidade é do médico solicitante até chegada.",
    guideline: "CFM / MS / SAMU",
  },
  {
    id: "rx-sus-alta-responsavel",
    title: "Alta Responsável — Modelo SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `1. Resumo de alta com diagnósticos (CID-10)
2. Medicações prescritas com duração e posologia clara
3. Orientações escritas em linguagem acessível
4. Sinais de alarme para retorno ao PS
5. Encaminhamento para UBS (contrarreferência)
6. Agendamento ambulatorial (quando possível)
7. Entrega de medicações disponíveis na farmácia hospitalar
8. Orientar retirada na UBS/farmácia popular se indisponível
9. Atestado médico (dias de afastamento)
10. Relatório para perícia INSS se necessário
11. Orientação sobre vacinação (quando aplicável)
12. Assinatura do paciente/responsável confirmando orientações`,
    notes: "Contrarreferência para UBS é obrigatória no SUS. Garantir seguimento do paciente na atenção primária.",
    guideline: "MS / SUS / Política Nacional de Humanização",
  },
  {
    id: "rx-sus-mordedura-animal",
    title: "Mordedura Animal — Profilaxia Antirrábica SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Limpeza do ferimento:
1. Lavagem exaustiva com água e sabão (5-10 min)
2. SF 0,9% irrigação copiosa
3. NÃO suturar (exceto face — sutura após lavar)
4. Antisséptico: Clorexidina ou PVPI tópico

Profilaxia antirrábica (conforme MS):
5. Animal doméstico observável + mordedura leve:
   Observar animal 10 dias (vacina se sinais ou se animal morre)
6. Animal não observável / silvestre / morcego:
   Vacina antirrábica D0, D3, D7, D14
   + Soro/Imunoglobulina antirrábica se grave

Profilaxia antitetânica:
7. Avaliar cartão vacinal → dT se >5 anos da última dose
8. SAT 5000UI IM se ferimento contaminado + esquema incompleto

ATB profilaxia (mordedura):
9. Amoxicilina-Clavulanato 875/125mg VO 12/12h por 5-7 dias`,
    guideline: "MS / SVS / Protocolo Antirrábico 2023",
  },
  {
    id: "rx-sus-notificacao",
    title: "Doenças de Notificação Compulsória — Lista SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `NOTIFICAÇÃO IMEDIATA (até 24h):
- Dengue (óbito ou grave), Chikungunya, Zika
- Meningite meningocócica
- Sarampo, Difteria, Poliomielite (suspeita)
- Raiva humana
- Malária (região extra-amazônica)
- Febre amarela
- COVID-19 (grave/óbito)
- Botulismo, Cólera, Varíola
- Acidente de trabalho grave/fatal
- Violência (sexual, contra criança/idoso, tentativa de suicídio)
- Intoxicação exógena

NOTIFICAÇÃO SEMANAL:
- Tuberculose, Hanseníase, HIV/AIDS, Sífilis
- Hepatites virais
- Leishmaniose, Esquistossomose, Leptospirose
- Acidente por animal peçonhento

COMO NOTIFICAR:
1. Preencher ficha SINAN (Sistema de Informação de Agravos de Notificação)
2. Notificar vigilância epidemiológica do município
3. Registrar em prontuário
4. Art. 269 CP: deixar de notificar é crime (detenção 6 meses a 2 anos)`,
    guideline: "MS / SVS / Portaria 217/2023",
  },
  {
    id: "rx-sus-observacao-ps",
    title: "Modelo Prescrição — Sala de Observação PS/UPA",
    type: "Prescrição SUS / Hospital Público",
    prescription: `1. Dieta _____ (zero / líquida / branda / livre)
2. SF 0,9% ___mL EV — ___mL/h (ou manter acesso heparinizado)
3. Dipirona 1g EV 6/6h se dor ou Tax ≥37,8°C
4. Ondansetrona 4mg EV 8/8h se náusea/vômito
5. Omeprazol 40mg EV 1x/dia (se indicado)
6. _____________________ (medicação específica)
7. Sinais vitais a cada ___h
8. Glicemia capilar se DM: ___/___h
9. Comunicar plantonista se:
   - PA <90/60 ou >180/110
   - FC <50 ou >120
   - SpO2 <92%
   - Temperatura >38,5°C
   - Alteração nível de consciência
   - Dor intensa EVA >7
10. Reavaliação médica em ___h para decisão: alta / internação / transferência`,
    notes: "Observação PS/UPA: máximo 24h. Se necessidade de internação >24h, regular leito hospitalar.",
    guideline: "MS / PNAU",
  },
  {
    id: "rx-sus-atestado",
    title: "Atestado Médico — Modelo e Regras",
    type: "Prescrição SUS / Hospital Público",
    prescription: `MODELO:
Atesto para os devidos fins que o(a) Sr(a). _______________,
portador(a) do documento _______________, esteve sob cuidados médicos
nesta unidade no dia ___/___/___, necessitando de afastamento de suas
atividades por ___ dias a partir desta data.

CID (com autorização do paciente): ___

Data: ___/___/___
CRM: ___________
Assinatura e carimbo

REGRAS CFM:
1. NÃO é obrigatório colocar CID (sigilo médico) — apenas se paciente autorizar
2. Atestado é direito do paciente — médico não pode negar
3. Validade: prazo determinado pelo médico
4. Para INSS (>15 dias): relatório médico detalhado para perícia
5. Empresa pode contestar com médico do trabalho (mas deve aceitar inicialmente)
6. Atestado falso: crime (art. 302 CP)
7. Acompanhante: atestado de acompanhamento (filhos menores, idosos)`,
    guideline: "CFM / Resolução 1658/2002 / CLT",
  },
  {
    id: "rx-sus-regulacao-vaga",
    title: "Regulação de Vaga — Como Solicitar",
    type: "SUS — Documentação",
    prescription: `COMO SOLICITAR VAGA UTI/ENFERMARIA:
1. Preencher Laudo de Regulação (SISREG ou sistema local)
2. Dados obrigatórios:
   - Nome completo, CPF, CNS (Cartão SUS)
   - Diagnóstico com CID-10
   - Quadro clínico DETALHADO (sinais vitais, exames, condutas já realizadas)
   - Nível de complexidade: UTI, Semi, Enfermaria, Centro Cirúrgico
3. Classificação de prioridade:
   - EMERGÊNCIA (risco iminente) — regulação 0 (imediata)
   - URGÊNCIA — regulação em até 4h
   - PRIORIDADE — regulação em até 24h
4. Contato direto com Central de Regulação se emergência
5. NUNCA transferir sem vaga regulada (responsabilidade médica)
6. Preencher SAMU/TIH para transporte se necessário
7. Resumo de transferência obrigatório`,
    notes: "Médico que transfere SEM vaga pode responder por negligência. Sempre documentar em prontuário as tentativas de regulação.",
    guideline: "MS / Portaria 2048 / CFM",
  },
  {
    id: "rx-sus-declaracao-obito",
    title: "Declaração de Óbito — Preenchimento",
    type: "SUS — Documentação",
    prescription: `PREENCHIMENTO DA DO:
1. OBRIGATÓRIO para todo óbito no território nacional
2. Causa básica: doença ou evento que iniciou a cadeia de eventos que levou à morte
3. Preencher de BAIXO para CIMA (linha D → A):
   - Linha D: causa básica (ex: Neoplasia de pulmão)
   - Linha C: consequência (ex: Metástases cerebrais)
   - Linha B: consequência (ex: Hipertensão intracraniana)
   - Linha A: causa imediata (ex: Parada Cardiorrespiratória — NÃO usar como causa básica)
4. Parte II: condições contribuintes (ex: DM, HAS, tabagismo)
5. CID-10 de CADA linha
6. NÃO usar como causa básica: PCR, falência múltipla de órgãos, sepse (sem especificar foco)
7. Mortes violentas: NÃO preencher — encaminhar ao IML
8. Óbito fetal: DO específica (se peso >500g ou IG >22 semanas)`,
    notes: "DO mal preenchida prejudica estatísticas de saúde pública. Seja preciso na causa básica.",
    guideline: "MS / CFM / OMS / CID-10",
  },
  {
    id: "rx-sus-consentimento-informado",
    title: "Termo de Consentimento Informado",
    type: "SUS — Documentação",
    prescription: `MODELO DE CONSENTIMENTO:
"Eu, [NOME COMPLETO], portador do RG [____] e CPF [____], declaro que fui informado(a) pelo(a) Dr(a). [NOME] — CRM [____] — sobre:
1. Meu diagnóstico: [DIAGNÓSTICO]
2. O procedimento/tratamento proposto: [PROCEDIMENTO]
3. Os riscos envolvidos: [LISTAR PRINCIPAIS RISCOS]
4. As alternativas ao tratamento proposto: [ALTERNATIVAS]
5. As consequências de não realizar o procedimento: [CONSEQUÊNCIAS]

Declaro que tive oportunidade de fazer perguntas, que foram respondidas de forma clara, e que consinto livremente com o procedimento."

Data: ___/___/____
Assinatura do paciente: ________________
Assinatura de testemunha: ________________
Assinatura do médico: ________________ CRM: ____`,
    notes: "Consentimento informado é obrigatório para procedimentos invasivos. Paciente pode revogar a qualquer momento. Menor de 18 anos: responsável legal assina.",
    guideline: "CFM / Resolução 1931/2009 / Código de Ética Médica",
  },
  {
    id: "rx-sus-profilaxia-rabica",
    title: "Profilaxia Antirrábica — Protocolo MS/SUS",
    type: "SUS / UPA",
    prescription: `CLASSIFICAÇÃO DO ACIDENTE:
Leve: lambedura pele íntegra, arranhadura superficial
Grave: lambedura de mucosa, mordedura, arranhadura profunda, morcego

ANIMAL OBSERVÁVEL (cão/gato doméstico):
- Acidente leve: observar animal 10 dias. Se morrer/desaparecer: vacinar
- Acidente grave: vacinar (dias 0, 3, 7, 14) + observar animal

ANIMAL NÃO OBSERVÁVEL / SILVESTRE / MORCEGO:
- Acidente leve: vacinar (4 doses: dias 0, 3, 7, 14)
- Acidente grave: vacinar (4 doses) + Soro antirrábico (SAR 40UI/kg) ou Imunoglobulina

VACINAÇÃO:
- Vacina antirrábica humana (VERO): 0,5mL IM deltóide
- Dias 0, 3, 7, 14

SORO ANTIRRÁBICO (SAR):
- 40UI/kg, infiltrar ao redor da ferida (máximo possível local)
- Restante: IM glúteo
- Aplicar junto com a 1ª dose da vacina (máx até 3° dia)`,
    notes: "Lavar ferida exaustivamente com água e sabão por 15 minutos. PVPI tópico. NÃO suturar mordedura (exceto face).",
    warnings: "Morcego: SEMPRE acidente grave, mesmo sem mordedura visível. Contato com morcego encontrado morto = profilaxia completa.",
    guideline: "MS / SVS / OMS / Norma Técnica de Profilaxia da Raiva",
  },
  {
    id: "rx-sus-ficha-notificacao",
    title: "Ficha de Notificação Compulsória — Orientações",
    type: "SUS / UPA",
    prescription: `DOENÇAS DE NOTIFICAÇÃO IMEDIATA (até 24h):
- Meningite, Dengue grave, Chikungunya grave
- Raiva humana, Febre amarela, Malária (área não endêmica)
- Sarampo, Difteria, Poliomielite
- Botulismo, Cólera, Peste
- Violência (sexual, infantil, idoso)
- Acidente com animal peçonhento
- Intoxicação exógena

COMO NOTIFICAR:
1. Preencher SINAN NET (ficha específica por agravo)
2. Comunicar Vigilância Epidemiológica do município
3. Telefone: Disque-Notifica ou Vigilância local
4. CIEVS (Centro de Informações Estratégicas de Vigilância em Saúde)

DADOS OBRIGATÓRIOS:
- Nome, data nascimento, endereço, cartão SUS
- Data dos primeiros sintomas
- Hipótese diagnóstica (CID-10)
- Dados do notificante (médico + CRM)`,
    notes: "Notificação é OBRIGAÇÃO LEGAL do médico (Lei 6.259/1975). Omissão = infração ética + responsabilidade administrativa.",
    guideline: "MS / SVS / Portaria GM/MS 217/2023",
  },
  {
    id: "rx-sus-acidente-trabalho",
    title: "Acidente de Trabalho — CAT e Conduta no PS",
    type: "SUS / UPA",
    prescription: `DOCUMENTAÇÃO OBRIGATÓRIA:
1. Abertura de CAT (Comunicação de Acidente de Trabalho) pelo empregador
2. Se empregador recusar: sindicato, médico ou o próprio trabalhador pode emitir
3. Preencher: descrição do acidente, parte do corpo atingida, CID-10
4. Emitir Relatório Médico com:
   - Data/hora do atendimento
   - Descrição das lesões
   - Nexo causal (acidente x lesão)
   - Conduta e prognóstico
5. Se acidente de trajeto: mesmo procedimento

CONDUTA CLÍNICA:
6. Tratar lesão conforme protocolo específico
7. Profilaxia antitetânica se ferimento
8. Afastamento: atestado médico com CID
   - Até 15 dias: empresa paga
   - >15 dias: encaminhar ao INSS (perícia)
9. Encaminhar para referência se necessário (Ortopedia, Cirurgia)
10. Acidentes com material biológico: ver protocolo PEP`,
    notes: "CAT deve ser emitida até 1° dia útil após o acidente. Acidente de trajeto tem mesmos direitos. Doença ocupacional equipara-se a acidente de trabalho.",
    guideline: "MS / CLT / Lei 8.213/91 / INSS",
  },
  {
    id: "rx-sus-violencia-domestica",
    title: "Violência Doméstica / Contra Mulher — Protocolo PS",
    type: "SUS / UPA",
    prescription: `ATENDIMENTO:
1. Acolhimento em ambiente reservado
2. Documentar lesões detalhadamente (localização, extensão, mecanismo)
3. Fotografar lesões (com consentimento) — prontuário
4. Exame clínico completo

VIOLÊNCIA SEXUAL:
5. Anticoncepção de emergência: Levonorgestrel 1,5mg VO dose única (até 72h)
6. Profilaxia DST:
   - PEP HIV: TDF/3TC + DTG por 28 dias (até 72h)
   - Ceftriaxona 500mg IM + Azitromicina 1g VO + Metronidazol 2g VO
   - Hepatite B: vacina + IGHAHB (se não vacinada)
7. Coleta de vestígios (até 72h — NÃO necessita BO)

NOTIFICAÇÃO COMPULSÓRIA:
8. Notificar SINAN (violência interpessoal/autoprovocada)
9. Comunicar ao Conselho Tutelar se menor
10. Informar sobre Lei Maria da Penha e serviços de apoio
11. Encaminhar ao CREAS/Centro de Referência da Mulher
12. Acompanhamento psicológico`,
    notes: "Notificação é obrigação do profissional de saúde (Lei 10.778/2003). NÃO depende de BO policial. Sigilo profissional mantido.",
    warnings: "Não minimizar relato. Não questionar por que não saiu de casa. Documentação médica pode ser usada como prova judicial.",
    guideline: "MS / Lei Maria da Penha / Norma Técnica MS 2012 / CFM",
  },
  {
    id: "rx-sus-tuberculose",
    title: "Tuberculose Pulmonar — Esquema Básico (RIPE) SUS",
    type: "SUS / UPA",
    prescription: `FASE INTENSIVA (2 meses):
1. RIPE: Rifampicina 150mg + Isoniazida 75mg + Pirazinamida 400mg + Etambutol 275mg
   Dose por peso:
   - 20-35kg: 2 comprimidos/dia
   - 36-50kg: 3 comprimidos/dia
   - >50kg: 4 comprimidos/dia
   Em jejum ou com refeição leve

FASE DE MANUTENÇÃO (4 meses):
2. RI: Rifampicina 150mg + Isoniazida 75mg (mesma posologia por peso)

ACOMPANHAMENTO:
3. Baciloscopia mensal (2°, 4°, 6° mês)
4. Função hepática: TGO, TGP (basal + mensal se sintomas)
5. RX tórax: basal + 2° + 6° mês
6. Tratamento Diretamente Observado (TDO) — obrigatório
7. Notificação compulsória (SINAN)
8. Avaliar contactantes (PPD/IGRA + RX)
9. HIV obrigatório em todo paciente com TB`,
    notes: "TDO: profissional de saúde observa a tomada da medicação 3x/semana. Disponível gratuitamente no SUS. Dose fixa combinada (DFC) = 1 comprimido 4 em 1.",
    warnings: "Hepatotoxicidade: suspender se TGO/TGP >3x LSN com sintomas ou >5x sem. Rifampicina: coloração alaranjada de urina/lágrima (orientar paciente). Isoniazida: neuropatia periférica → dar Piridoxina 50mg/dia (gestantes, etilistas, DM, HIV).",
    guideline: "MS / PNCT / OMS / SBPT",
  },
  {
    id: "rx-sus-hanseniase",
    title: "Hanseníase — Esquema PQT SUS",
    type: "SUS / UPA",
    prescription: `PAUCIBACILAR (PB — até 5 lesões):
Duração: 6 doses em até 9 meses
- Dose supervisionada (mensal): Rifampicina 600mg + Dapsona 100mg
- Dose autoadministrada (diária): Dapsona 100mg/dia

MULTIBACILAR (MB — >5 lesões):
Duração: 12 doses em até 18 meses
- Dose supervisionada (mensal): Rifampicina 600mg + Dapsona 100mg + Clofazimina 300mg
- Dose autoadministrada (diária): Dapsona 100mg + Clofazimina 50mg

REAÇÕES:
- Tipo 1 (reversa): Prednisona 1-2mg/kg/dia (desmame lento 6-9 meses)
- Tipo 2 (ENH): Talidomida 100-400mg/dia (APENAS homens ou mulheres pós-menopausa)
  Mulheres em idade fértil: Pentoxifilina 400mg 8/8h

ACOMPANHAMENTO:
3. Exame neurológico simplificado mensal
4. Avaliação de incapacidades (grau 0, 1, 2)
5. Notificação compulsória
6. Examinar contactantes domiciliares (BCG)`,
    notes: "Diagnóstico clínico: lesão de pele com alteração de sensibilidade e/ou espessamento de nervo periférico. PQT disponível gratuitamente no SUS.",
    warnings: "Talidomida: TERATOGÊNICA — proibida para mulheres em idade fértil. Dapsona: pode causar metemoglobinemia e anemia hemolítica (G6PD). Clofazimina: pigmentação cutânea (orientar paciente).",
    guideline: "MS / OMS / SBD / SBH",
  },
  {
    id: "rx-sus-pre-natal-baixo-risco",
    title: "Pré-Natal Baixo Risco — Prescrição Inicial UBS",
    type: "SUS / UPA",
    prescription: `1. Ácido fólico 5mg VO 1x/dia (iniciar pré-concepção, manter até 12 semanas)
2. Sulfato ferroso 40mg Fe elementar VO 1x/dia (a partir de 20 semanas)
   - Tomar em jejum com suco cítrico (vitamina C melhora absorção)
3. Exames do 1° trimestre:
   - Hemograma, tipagem sanguínea (ABO/Rh), Coombs indireto (se Rh-)
   - Glicemia jejum, VDRL, HIV, HBsAg, Toxoplasmose IgG/IgM
   - Urina rotina + urocultura, parasitológico de fezes
   - USG obstétrica (datação: 11-14 semanas com TN)
4. Consultas: mensais até 28 sem → quinzenais até 36 sem → semanais até parto
5. Vacinas: dTpa (27-36 sem), Influenza, Hepatite B (se não vacinada)
6. Orientações: nutrição, atividade física, sinais de alerta (sangramento, PA alta)
7. Mínimo 6 consultas (idealmente ≥10)
8. Cartão da Gestante: preencher e entregar`,
    notes: "Caderneta da Gestante do MS: documento obrigatório. SISPRENATAL: cadastro obrigatório para acompanhamento. Ácido fólico previne defeitos do tubo neural.",
    warnings: "Glicemia jejum ≥92: Diabetes Gestacional (TOTG 75g entre 24-28 sem). VDRL positivo: tratar sífilis IMEDIATAMENTE (Penicilina Benzatina). Rh-: Coombs indireto mensal a partir de 28 semanas.",
    guideline: "MS / FEBRASGO / Caderno AB nº 32",
  },
  {
    id: "rx-sus-caps-surto",
    title: "SUS/CAPS — Surto Psicótico / Emergência Psiquiátrica",
    type: "Prescrição SUS",
    prescription: `Disponível no SUS:
1. Haloperidol 5mg IM + Prometazina 50mg IM (combinação padrão CAPS/UPA)
2. Diazepam 10mg VO/IM (se ansiedade/agitação)
3. Risperidona 2mg VO 12/12h (manutenção — disponível RENAME)
4. Clorpromazina 100mg VO 8/8h (alternativa)
5. Biperideno 2mg VO 12/12h (profilaxia SEP — RENAME)
6. Haloperidol Decanoato 50mg IM (depot mensal — RENAME)

Fluxo SUS:
7. Acolhimento → CAPS → Internação hospitalar se necessário (CAPS III com leito noturno)
8. Internação involuntária: comunicar MPF em 72h (Lei 10.216)
9. PTS (Projeto Terapêutico Singular)
10. Matriciamento com equipe de saúde mental da ESF`,
    notes: "RENAME 2024: Haloperidol, Clorpromazina, Risperidona, Biperideno, Diazepam, Clonazepam, Carbamazepina, Valproato, Lítio, Fluoxetina, Amitriptilina estão disponíveis.",
    guideline: "MS / RAPS / Lei 10.216",
  },
  {
    id: "rx-sus-protocolo-diabetes",
    title: "SUS — Protocolo de Diabetes no PS",
    type: "Prescrição SUS",
    prescription: `Disponível no SUS:
1. Insulina Regular (frasco) — para BIC ou SC
2. Insulina NPH — manutenção
3. SF 0,9% 1000mL EV
4. KCl 19,1% — reposição de potássio
5. Dipirona 1g EV 6/6h se necessário
6. Glicemia capilar: fita reagente + glicosímetro (RENAME)

CAD no SUS/UPA (sem BIC):
7. Insulina Regular 0,1UI/kg IM a cada hora (alternativa sem bomba)
8. KCl 10mL (19,1%) em cada 500mL de SF — infusão gravitacional
9. Controle de glicemia capilar 1/1h
10. Gasometria (se disponível) ou venosa + lactato

Manutenção ambulatorial SUS:
11. Metformina 850mg VO 12/12h (1ª linha — RENAME)
12. Glibenclamida 5mg VO 12/12h (2ª linha — RENAME)
13. Insulina NPH: disponível pelo SUS (Farmácia Popular)`,
    notes: "Farmácia Popular: Insulina, Metformina, Glibenclamida são GRATUITOS. Seringas e fitas reagentes também. Orientar paciente sobre direitos.",
    guideline: "MS / SBD / PCDT Diabetes",
  },
  {
    id: "rx-sus-intox-agrotoxicos",
    title: "Intoxicação por Agrotóxicos — Manejo SUS",
    type: "SUS / UPA",
    prescription: `1. ABCDE + descontaminação (retirar roupas, lavar pele — EQUIPE com EPI)
2. Identificar produto: classe (organofosforado, carbamato, piretroide, glifosato)
3. Atropina 2mg EV a cada 5min até atropinização (organofosforado/carbamato)
4. Pralidoxima 1-2g EV lento (se organofosforado — solicitar via farmácia hospitalar/CIEVS)
5. Carvão ativado 1g/kg VO (se ingestão <1h, paciente consciente)
6. Contatar CIATox: 0800-722-6001 (orientação especializada 24h)
7. Notificação COMPULSÓRIA: SINAN — ficha de intoxicação exógena
8. Encaminhar para Centro de Referência em Toxicologia (se grave)
9. Solicitar colinesterase sérica (eritrocitária = exposição crônica)`,
    notes: "Brasil: maior consumidor de agrotóxicos do mundo. Intoxicação por organofosforado: principal causa de morte por intoxicação no meio rural. Notificação obrigatória em até 24h.",
    warnings: "Equipe deve usar EPI completo na descontaminação. Vômito provocado: CONTRAINDICADO (risco de aspiração). Em UPA sem pralidoxima: atropinizar e transferir.",
    guideline: "MS / SINITOX / CIATox / SBTox",
  },
  {
    id: "rx-sus-acidente-ofidico",
    title: "Acidente Ofídico (Serpentes) — Protocolo SUS",
    type: "SUS / UPA",
    prescription: `1. Identificar o tipo de acidente: Botrópico (jararaca), Crotálico (cascavel), Laquético (surucucu), Elapídico (coral)
2. SORO ANTIVENENO (disponível nas UPAs/Hospitais de referência via SUS):
   a) Botrópico leve: SAB 4 ampolas EV
   b) Botrópico moderado: SAB 8 ampolas EV
   c) Botrópico grave: SAB 12 ampolas EV
   d) Crotálico: SAC 10-20 ampolas EV
   e) Laquético: SABL 10-20 ampolas EV
   f) Elapídico: SAE 10 ampolas EV
3. Diluir soro em SF 0,9% 250mL, EV em 20-60min (infusão rápida)
4. Pré-medicação: Hidrocortisona 500mg + Prometazina 50mg EV (prevenir reação)
5. Hidratação vigorosa: SF 0,9% + manter diurese >1mL/kg/h
6. Monitorizar: TC (coagulograma) 12/12h, CPK, função renal, diurese
7. NÃO fazer torniquete, NÃO sugar veneno, NÃO aplicar substâncias no local
8. Notificação COMPULSÓRIA: SINAN`,
    notes: "Botrópico: 90% dos acidentes no Brasil. Coagulopatia de consumo é o principal risco. Dose de soro baseada na gravidade clínica (não no peso do paciente).",
    guideline: "MS / Instituto Butantan / Fundação Ezequiel Dias",
  },
  {
    id: "rx-sus-dialise-urgencia",
    title: "Diálise de Urgência — Fluxo SUS",
    type: "SUS / UPA",
    prescription: `1. INDICAÇÕES (AEIOU): Acidose, Eletrólitos (K+), Intoxicação, Overload, Uremia
2. Estabilizar paciente + tratar hipercalemia enquanto aguarda vaga:
   a) Gluconato de cálcio 10% 10mL EV em 5min (proteção cardíaca)
   b) Insulina Regular 10UI + Glicose 50% 50mL EV
   c) Nebulização com Salbutamol 10 gotas (reduz K+)
   d) Bicarbonato 8,4% 50mL EV se acidose grave
3. Solicitar vaga em hospital com serviço de nefrologia/hemodiálise via regulação
4. Implantar cateter duplo-lúmen em jugular interna D (se disponível)
5. Exames: gasometria, K+, Na+, ureia, creatinina, hemograma
6. Furosemida 200-400mg EV (tentativa — pode não funcionar se DRC avançada)
7. Monitorização cardíaca contínua (risco de arritmia por hipercalemia)`,
    notes: "Em UPA sem nefrologia: estabilizar e regular vaga. Hipercalemia é a urgência mais imediata — tratar antes de transferir. Gluconato de cálcio NÃO reduz K+, apenas protege o miocárdio.",
    guideline: "SBN / KDIGO / MS",
  },
  {
    id: "rx-sus-asma-grave",
    title: "Crise Asmática Grave — Manejo em UPA",
    type: "SUS / UPA",
    prescription: `1. Salbutamol spray 4-8 jatos com espaçador a cada 20min (3 doses na 1ª hora)
2. Ipratrópio 3 jatos com espaçador a cada 20min (3 doses)
3. Se sem espaçador: NBZ com Salbutamol 10 gotas + Ipratrópio 20 gotas + SF 3mL a cada 20min
4. Hidrocortisona 200mg EV (ataque) → 100mg EV 6/6h OU Prednisona 40-60mg VO
5. Sulfato de Magnésio 2g EV em 20min (se refratária)
6. O2 cateter nasal/máscara para SpO2 >94%
7. Adrenalina 0,3-0,5mg IM se não responder (broncoespasmo grave)
8. Se falência: IOT (cetamina para indução — broncodilatador)
9. Solicitar vaga UTI via regulação se não melhorar em 1-2h`,
    notes: "Spray + espaçador é tão eficaz quanto NBZ e mais prático. MgSO4 EV: evidência sólida na crise refratária. Aminofilina: NÃO recomendada de rotina (muitos efeitos adversos).",
    guideline: "GINA 2023 / SBPT / MS",
  },
  {
    id: "rx-sus-meningite",
    title: "Meningite Bacteriana — Protocolo SUS",
    type: "SUS / UPA",
    prescription: `1. Ceftriaxona 2g EV 12/12h (INICIAR NA PRIMEIRA HORA — não aguardar líquor)
2. Dexametasona 0,15mg/kg EV 6/6h por 4 dias (iniciar ANTES ou junto com ATB)
3. SF 0,9% — hidratação (evitar hiper-hidratação)
4. Dipirona 1g EV 6/6h se febre
5. Coletar: hemograma, PCR, hemocultura (2 pares), glicemia
6. Punção lombar (se não contraindicada): citologia, bioquímica, Gram, cultura, látex
7. TC crânio ANTES do líquor se: papiledema, déficit focal, convulsão, imunossuprimido
8. Notificação COMPULSÓRIA (SINAN) — imediata
9. Quimioprofilaxia contactantes (meningococo): Rifampicina 600mg VO 12/12h por 2 dias
10. Se <3 meses: Ampicilina 50mg/kg EV 6/6h + Ceftriaxona (cobrir Listeria)`,
    notes: "Meningocócica: petéquias/púrpura = URGÊNCIA. ATB na 1ª hora reduz mortalidade. Dexametasona: benefício comprovado para pneumocócica (reduz sequela auditiva).",
    guideline: "MS / SBI / IDSA / ESCMID",
  },
  {
    id: "rx-sus-vascular-emergencia",
    title: "Emergência Vascular — Recursos SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Isquemia aguda de membro (UPA/Hospital):
1. Heparina não fracionada 5000UI EV bolus (disponível SUS)
2. Dipirona 1g EV + Tramadol 50mg EV (analgesia)
3. SF 0,9% 500mL EV — hidratação
4. NÃO elevar membro, NÃO aquecer
5. TRANSFERIR URGENTE para hospital com cirurgia vascular (SAMU/regulação)

Trombose venosa profunda (UPA):
6. Enoxaparina 1mg/kg SC 12/12h (iniciar na UPA se disponível)
7. OU Heparina NF 80UI/kg bolus → 18UI/kg/h (se HBPM indisponível)
8. Solicitar USG Doppler venoso (se disponível) — se não: clínica + Wells
9. Encaminhar para internação com heparinização`,
    notes: "Na UPA sem cirurgião vascular: anticoagular e transferir. Isquemia aguda: tempo é membro. TVP: pode iniciar anticoagulação antes do exame se alta suspeita clínica.",
    guideline: "MS / SVB",
  },
  {
    id: "rx-sus-hemoderivados",
    title: "Solicitação de Hemoderivados — SUS",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Concentrado de Hemácias (CH):
1. Indicação: Hb <7 (ou <9 se cardiopata/instável)
2. Dose: 1U eleva Hb em ~1g/dL (adulto 70kg)
3. Solicitar: tipagem ABO/Rh + prova cruzada
4. Transfundir em 2-4h (máx 4h fora da geladeira)
5. Aquecer apenas se transfusão maciça (>3U em <1h)

Plasma Fresco Congelado (PFC):
6. Indicação: coagulopatia com sangramento ativo (INR >1,5)
7. Dose: 10-15mL/kg

Concentrado de Plaquetas:
8. Indicação: plaquetas <50.000 + sangramento OU <10.000 (mesmo sem sangramento)
9. Dose: 1U/10kg (aférese: 1U)

Crioprecipitado:
10. Indicação: fibrinogênio <1,5g/L
11. Dose: 1-2U/10kg

REAÇÃO TRANSFUSIONAL: parar imediato, SF 0,9%, adrenalina se anafilaxia, enviar bolsa ao banco de sangue.`,
    notes: "Preencher requisição com indicação clínica + Hb/Ht + peso. Toda reação transfusional deve ser notificada ao Hemocentro (NOTIVISA).",
    guideline: "MS / ANVISA / AABB",
  },
  {
    id: "rx-sus-sedacao-upa",
    title: "Sedação e Analgesia — Recursos disponíveis UPA/SAMU",
    type: "Prescrição SUS / Hospital Público",
    prescription: `Sedação para IOT (disponível na maioria das UPAs):
1. Midazolam 15mg/3mL: 0,1-0,3mg/kg EV (sedação)
2. Fentanil 0,5mg/10mL: 2-3mcg/kg EV (analgesia)
3. Succinilcolina 100mg: 1-1,5mg/kg EV (BNM — se disponível)

Sedação para procedimento (redução de fratura, cardioversão):
4. Cetamina 50mg/mL: 1-2mg/kg EV (sedação dissociativa — mantém drive respiratório)
5. Midazolam 2-5mg EV lento (alternativa)

Agitação psicomotora:
6. Haloperidol 5mg IM (1ª escolha)
7. Midazolam 5-10mg IM (se agitação intensa)
8. Prometazina 25mg IM (associar ao Haloperidol se necessário)

SEMPRE: monitorar SpO2, ter material de via aérea e Flumazenil/Naloxona disponíveis.`,
    notes: "Na UPA sem capnografia: monitorar SpO2 + FR + nível de consciência continuamente durante sedação. Manter 1 profissional exclusivo para monitorização.",
    guideline: "CFM / SBA / MS",
  },
];

