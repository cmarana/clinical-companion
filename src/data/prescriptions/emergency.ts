import { PrescriptionItem } from "./types";

export const emergencyItems: PrescriptionItem[] = [
  {
    id: "rx-emerg-pcr",
    title: "PCR — Parada Cardiorrespiratória",
    type: "Prescrição de Emergência",
    prescription: `1. Adrenalina 1mg (1:10.000) EV a cada 3-5 min
2. Amiodarona 300mg EV bolus (FV/TV refratária) → 150mg após
3. SF 0,9% 250mL — acesso calibroso
4. IOT + ventilação mecânica
5. Monitorização (ECG, SpO2, capnografia)
6. Desfibrilação 200J bifásico se FV/TV sem pulso
7. Bicarbonato 8,4% 1mEq/kg se acidose grave`,
    notes: "Trocar compressor a cada 2 min. ETCO2 >10 = RCP eficaz.",
    warnings: "NÃO desfibrilar assistolia. NÃO atrasar compressões.",
    guideline: "AHA 2020 / ACLS",
  },
  {
    id: "rx-emerg-iot",
    title: "Intubação — Sequência Rápida",
    type: "Prescrição de Emergência",
    prescription: `Pré-oxigenação:
1. O2 100% por 3-5 min (máscara com reservatório)

Indução:
2. Fentanil 2-3 mcg/kg EV (2-3 min antes)
3. Lidocaína 1,5mg/kg EV (se TCE/broncoespasmo)
4. Etomidato 0,3mg/kg EV OU Cetamina 1,5mg/kg EV (se instabilidade)
5. Succinilcolina 1,5mg/kg EV OU Rocurônio 1,2mg/kg EV

Pós-IOT:
6. Confirmar com capnografia + ausculta
7. Fixar tubo e conectar ao ventilador
8. Midazolam 0,1mg/kg/h + Fentanil 1-2mcg/kg/h em BIC (manutenção)
9. RX tórax confirmatório`,
    warnings: "Ter material de via aérea difícil disponível. Sempre ter aspirador ligado.",
    guideline: "SBA / AMIB",
  },
  {
    id: "rx-emerg-sedacao",
    title: "Sedação de Emergência",
    type: "Prescrição de Emergência",
    prescription: `Sedação leve (procedimentos breves):
1. Midazolam 2-5mg EV lento (titular)
2. OU Cetamina 0,5-1mg/kg EV

Sedação profunda (IOT/procedimentos invasivos):
3. Propofol 1-2mg/kg EV bolus → 2-4mg/kg/h em BIC
4. Fentanil 50-100mcg EV (analgesia associada)

Manutenção em VM:
5. Midazolam 0,05-0,2mg/kg/h em BIC
6. Fentanil 1-3mcg/kg/h em BIC
7. RASS alvo: -2 a -3
8. Monitorar: PA, FC, SpO2, RASS a cada 2h`,
    notes: "Propofol: risco de hipotensão. Cetamina: opção em choque (não deprime PA).",
    guideline: "SBA / AMIB",
  },
  {
    id: "rx-emerg-choque",
    title: "Choque — Abordagem Inicial",
    type: "Prescrição de Emergência",
    prescription: `1. 2 acessos venosos calibrosos (jelco 14-16G)
2. SF 0,9% 30mL/kg EV rápido (reavaliar a cada 250-500mL)
3. Noradrenalina 0,1-1mcg/kg/min se PAM <65 após volume
4. Monitorização contínua (PA invasiva se disponível)
5. Lactato arterial + gasometria
6. SVD (alvo diurese ≥0,5mL/kg/h)
7. Tratar causa base:
   - Séptico: ATB na 1ª hora
   - Hemorrágico: hemoderivados + cirurgia
   - Cardiogênico: Dobutamina + vasopressor
   - Obstrutivo: tratar causa (TEP, tamponamento, pneumotórax)`,
    guideline: "ATLS / SSC 2021",
  },
  {
    id: "rx-emerg-sepse-grave",
    title: "Sepse Grave — Protocolo Rápido",
    type: "Prescrição de Emergência",
    prescription: `BUNDLE 1ª HORA:
1. Lactato arterial
2. Hemoculturas (2 pares) ANTES do ATB
3. ATB de amplo espectro (Piperacilina-Tazobactam 4,5g EV)
4. SF 0,9% 30mL/kg EV se hipotensão ou lactato ≥4
5. Vasopressor (Noradrenalina) se PAM <65 após volume

BUNDLE 6H:
6. Reavaliar volemia (Δ PP, USG, elevação de MMII)
7. Novo lactato se inicial >2
8. Hidrocortisona 50mg EV 6/6h (se refratário)
9. Dobutamina se baixo débito persistente`,
    warnings: "CADA HORA DE ATRASO no ATB = +7% mortalidade.",
    guideline: "SSC 2021",
  },
  {
    id: "rx-emerg-eap",
    title: "Edema Agudo de Pulmão",
    type: "Prescrição de Emergência",
    prescription: `1. Furosemida 40-80mg EV bolus
2. Nitroglicerina EV 5-200mcg/min (se PA >100)
3. VNI: CPAP 5-10 ou BiPAP IPAP 10-15 / EPAP 5-8
4. O2 para SpO2 >94%
5. Cabeceira 90°
6. Captopril 25mg SL se PAS >160
7. Morfina 2-4mg EV (criterioso)
8. IOT se sem melhora`,
    warnings: "NÃO usar nitrato se PA <100 ou uso de sildenafil.",
    guideline: "SBC / ESC",
  },
  {
    id: "rx-emerg-asma-grave",
    title: "Asma Grave — Emergência",
    type: "Prescrição de Emergência",
    prescription: `1. Salbutamol NBZ contínua: 10 gotas + SF 3mL a cada 20 min
2. Ipratrópio 40 gotas na mesma NBZ
3. Hidrocortisona 200mg EV → 100mg 6/6h
4. Sulfato de magnésio 2g EV em 20 min
5. O2 para SpO2 >94%
6. Adrenalina 0,3-0,5mg IM se risco de PCR
7. VNI se tolerada
8. IOT se falência (cuidado: broncoespasmo pós-IOT)`,
    notes: "Cetamina pode ser usada na indução se IOT necessária (broncodilatador).",
    guideline: "GINA 2023",
  },
  {
    id: "rx-emerg-status",
    title: "Status Epiléptico",
    type: "Prescrição de Emergência",
    prescription: `0-5 min:
1. Diazepam 10mg EV (ou Midazolam 10mg IM)
2. O2 + via aérea segura
3. Glicemia → Glicose 50% se <70

5-20 min:
4. Fenitoína 20mg/kg EV (máx 50mg/min, em SF)
5. OU Valproato 40mg/kg EV em 10 min

>20 min:
6. Midazolam BIC 0,2mg/kg → 0,1-0,4mg/kg/h
7. OU Propofol 2mg/kg → 2-5mg/kg/h
8. IOT
9. EEG contínuo`,
    guideline: "ABN / AES",
  },
  {
    id: "rx-emerg-anafilaxia",
    title: "Anafilaxia — Emergência",
    type: "Prescrição de Emergência",
    prescription: `1. Adrenalina 1:1000 — 0,5mg IM na coxa IMEDIATO
2. Repetir a cada 5-15 min se necessário
3. SF 0,9% 1000-2000mL EV rápido
4. Difenidramina 50mg EV
5. Hidrocortisona 200mg EV
6. Salbutamol NBZ se broncoespasmo
7. O2 alto fluxo
8. Preparar IOT se edema de via aérea`,
    warnings: "ADRENALINA É A 1ª DROGA. Não atrasar para dar corticóide.",
    guideline: "WAO 2023",
  },
  {
    id: "rx-emerg-agitacao",
    title: "Agitação Psicomotora — Emergência",
    type: "Prescrição de Emergência",
    prescription: `1. Contenção verbal primeiro (de-escalação)
2. Se necessário contenção química:
   - Haloperidol 5mg IM + Midazolam 5mg IM (1ª escolha)
   - OU Haloperidol 5mg IM + Prometazina 50mg IM
3. Monitorar: PA, FC, SpO2, nível de consciência
4. Glicemia capilar (excluir hipoglicemia)
5. Considerar: intoxicação, TCE, sepse, hipóxia
6. Após estabilização: investigar causa base
7. Contenção mecânica se risco iminente (protocolo institucional)`,
    warnings: "Haloperidol EV: risco de arritmia (QT longo). Monitorar ECG se EV.",
    guideline: "ABP / APA",
  },
  {
    id: "rx-emerg-hipoglicemia",
    title: "Hipoglicemia Grave",
    type: "Prescrição de Emergência",
    prescription: `1. Glicose 50% — 40mL (20g) EV em bolus
2. Reavaliar glicemia em 15 min
3. Se persistir: repetir Glicose 50% 40mL
4. Manter SG 10% 100mL/h após correção
5. Se sem acesso: Glucagon 1mg IM/SC
6. Após estabilização: refeição VO
7. Investigar causa: insulina, sulfonilureia, jejum, insuficiência hepática/adrenal
8. Se por sulfonilureia: observar 24-48h (meia-vida longa)`,
    warnings: "Hipoglicemia recorrente por sulfonilureia: manter SG 10% por 24-48h. NÃO dar alta precocemente.",
    guideline: "SBD / ADA",
  },
  {
    id: "rx-emerg-tamponamento",
    title: "Tamponamento Cardíaco",
    type: "Prescrição de Emergência",
    prescription: `1. SF 0,9% 500-1000mL EV rápido (aumentar pré-carga)
2. NÃO usar diuréticos ou vasodilatadores (piora!)
3. Pericardiocentese de emergência (via subxifoide — guiada por USG se possível)
4. Monitorização contínua
5. ECG: baixa voltagem, alternância elétrica
6. ECOTT à beira do leito: derrame + colapso de VD
7. Preparar drenagem pericárdica definitiva (cirurgia)
8. Tipagem sanguínea
9. Se trauma: toracotomia de emergência`,
    warnings: "Tríade de Beck: hipotensão + turgência jugular + abafamento de bulhas. NÃO usar diuréticos.",
    guideline: "ATLS / SBC",
  },
  {
    id: "rx-emerg-pneumotorax-hipert",
    title: "Pneumotórax Hipertensivo",
    type: "Prescrição de Emergência",
    prescription: `1. Diagnóstico CLÍNICO — NÃO esperar RX
2. Punção descompressiva IMEDIATA:
   - 2º espaço intercostal, linha hemiclavicular
   - Jelco 14G ou agulha calibrosa
   - Ouvirá saída de ar sob pressão
3. Após estabilização: drenagem torácica em selo d'água
   - 5º EIC, linha axilar média
   - Dreno 28-32Fr
4. O2 alto fluxo
5. RX tórax após drenagem
6. Monitorização contínua
7. Analgesia: Morfina 2-4mg EV se dor intensa`,
    warnings: "CADA SEGUNDO CONTA. Descompressão com agulha salva vida. Drenagem depois.",
    guideline: "ATLS",
  },
  {
    id: "rx-emerg-crise-tireotoxica",
    title: "Crise Tireotóxica / Tempestade Tireoidiana",
    type: "Prescrição de Emergência",
    prescription: `1. Propiltiouracil (PTU) 200mg VO/SNG 6/6h (bloqueia síntese)
2. Lugol 10 gotas VO 8/8h (1h APÓS o PTU — bloqueia liberação)
3. Propranolol 1mg EV lento a cada 5 min (máx 10mg) → VO 40-80mg 6/6h
4. Hidrocortisona 100mg EV 8/8h (bloqueia conversão T4→T3)
5. Paracetamol se febre (NÃO AAS — desloca T4 da proteína)
6. SF 0,9% — reposição volêmica agressiva
7. Resfriamento ativo se hipertermia >39°C
8. Monitorização contínua (arritmias, IC)
9. TSH, T4L, T3, hemograma, função hepática`,
    warnings: "Dar PTU ANTES do Iodo. AAS é CONTRAINDICADO. Mortalidade 20-30% sem tratamento.",
    guideline: "SBEM / ATA",
  },
  {
    id: "rx-emerg-rebaixamento",
    title: "Rebaixamento de Consciência — Abordagem",
    type: "Prescrição de Emergência",
    prescription: `1. ABCDE (via aérea, respiração, circulação)
2. IOT se Glasgow ≤8
3. Glicemia capilar IMEDIATA:
   Se <70: Glicose 50% 40-60mL EV
4. Tiamina 100mg EV (antes da glicose se etilista)
5. Naloxona 0,4-2mg EV se suspeita de opioide
6. Flumazenil 0,2mg EV se suspeita de BZD (contraindicado se epiléptico)
7. SF 0,9% — acesso venoso
8. TC crânio urgente (sem contraste)
9. Gasometria, eletrólitos, amônia, toxicológico
10. Hemograma, função renal/hepática, coagulograma
11. ECG
12. Pupilas + reflexo oculocefálico (localizar nível da lesão)`,
    notes: "Mnemônico: AEIOU-TIPS — Álcool, Epilepsia, Insulina, Opioide, Uremia, Trauma, Infecção, Psiquiátrico, Stroke.",
    guideline: "ACLS / Neurocrítico",
  },
  {
    id: "rx-emerg-hipotermia",
    title: "Hipotermia — Reaquecimento",
    type: "Prescrição de Emergência",
    prescription: `LEVE (32-35°C):
1. Reaquecimento passivo: cobertores, ambiente aquecido
2. Líquidos EV aquecidos (38-42°C)

MODERADA (28-32°C):
3. Reaquecimento ativo externo: manta térmica, bolsas de água quente
4. SF aquecido 500mL EV
5. Monitorização contínua (risco de arritmias)

GRAVE (<28°C):
6. Reaquecimento ativo interno: lavagem peritoneal/pleural com SF aquecido
7. Se PCR: RCP até reaquecer >30°C ("não está morto até estar quente e morto")
8. Desfibrilação pode ser ineficaz <30°C (tentar 1x, depois reaquecer)
9. Adrenalina: espaçar doses se <30°C
10. Temperatura esofágica (mais fidedigna)`,
    warnings: "NÃO declarar óbito se hipotérmico sem reaquecimento. Arritmias de reaquecimento são comuns.",
    guideline: "AHA / ILCOR",
  },
  {
    id: "rx-emerg-afogamento",
    title: "Afogamento — Prescrição",
    type: "Prescrição de Emergência",
    prescription: `1. ABCDE — priorizar via aérea e ventilação
2. O2 100% por máscara com reservatório
3. IOT se: apneia, Glasgow ≤8, SpO2 <90% refratária
4. PEEP 5-10 cmH2O (edema pulmonar não cardiogênico)
5. SF 0,9% — acesso venoso (NÃO corrigir Na+ agudamente)
6. Aquecimento se hipotermia
7. SNG aberta (estômago cheio de água — risco de broncoaspiração)
8. Gasometria, eletrólitos, hemograma, lactato
9. RX tórax (pode ser normal nas primeiras horas)
10. Observação mínima 6-8h (edema pulmonar tardio)
11. Coluna cervical: imobilizar se trauma/mergulho`,
    warnings: 'Manobra de Heimlich para "tirar água" é INEFICAZ e PERIGOSA. NÃO fazer.',
    guideline: "SOBRASA / ILCOR",
  },
  {
    id: "rx-emerg-hemoptise",
    title: "Hemoptise Maciça",
    type: "Prescrição de Emergência",
    prescription: `1. Posicionar em DL com lado sangrante para BAIXO (proteger pulmão são)
2. O2 100% sob máscara
3. 2 acessos calibrosos + tipagem sanguínea
4. IOT se: hipoxemia grave, sangramento incontrolável (tubo 8.0+ para broncoscopia)
   IOT seletiva no brônquio do lado SÃO se possível
5. Ácido Tranexâmico 1g EV em 10 min
6. SF 0,9% — ressuscitação se instável
7. Concentrado de hemácias se Hb <7 ou choque
8. Broncoscopia URGENTE (localizar + tamponar)
9. AngioTC tórax (identificar artéria brônquica)
10. Embolização arterial brônquica (tratamento definitivo na maioria)
11. Cirurgia se: embolização falha ou sangramento maciço refratário`,
    warnings: "Hemoptise maciça (>600mL/24h ou >100mL/h) = risco de asfixia. Via aérea é prioridade.",
    guideline: "SBPT / BTS",
  },
  {
    id: "rx-emerg-reacao-transfusional",
    title: "Reação Transfusional Aguda",
    type: "Prescrição de Emergência",
    prescription: `1. PARAR a transfusão IMEDIATAMENTE
2. Manter acesso com SF 0,9%
3. Verificar etiqueta x pulseira do paciente

Reação hemolítica aguda (calafrios, febre, dor lombar, hemoglobinúria):
4. SF 0,9% agressivo (manter diurese >100mL/h)
5. Furosemida 40mg EV se oligúria
6. Adrenalina se anafilaxia
7. Enviar amostra do paciente + bolsa ao banco de sangue
8. Hemograma, Coombs direto, bilirrubinas, haptoglobina, LDH, DHL

Reação alérgica leve (urticária):
9. Dexclorfeniramina 5mg EV → pode reiniciar lentamente

TRALI (dispneia, infiltrado bilateral, hipoxemia):
10. Suporte ventilatório (VNI ou IOT)
11. NÃO dar diurético (é edema NÃO cardiogênico)`,
    warnings: "Hemólise aguda = emergência. Identificar corretamente bolsa e paciente ANTES de toda transfusão.",
    guideline: "HEMOMINAS / AABB",
  },
  {
    id: "rx-emerg-cetoacidose-alcoolica",
    title: "Cetoacidose Alcoólica",
    type: "Prescrição de Emergência",
    prescription: `1. Tiamina 300mg EV ANTES da glicose (prevenir Wernicke)
2. SG 5% 1000mL + NaCl 20% 20mL EV (corrigir desidratação + glicose)
3. SF 0,9% — ressuscitação se hipovolêmico
4. KCl 19,1% 10mL em cada SF/SG (repor potássio)
5. MgSO4 2g EV em 100mL SF (hipomagnesemia é frequente)
6. NÃO usar insulina (diferente da CAD diabética)
7. Gasometria seriada (acidose metabólica com AG elevado)
8. Cetonúria/cetonemia
9. Glicemia (pode ser normal ou baixa — diferente da CAD)
10. Hemograma, função renal, eletrólitos, amilase/lipase
11. Dieta assim que tolerar VO`,
    notes: "Melhora rápida com SG + tiamina. Diferente da CAD diabética: glicemia normal/baixa, sem insulina.",
    guideline: "SBH / AMIB",
  },
  {
    id: "rx-emerg-choque-anafilatico",
    title: "Choque Anafilático — Protocolo Completo",
    type: "Prescrição de Emergência",
    prescription: `1. Adrenalina 1:1000 (1mg/mL) — 0,3-0,5mg IM face lateral da coxa
   Repetir a cada 5-15 min se necessário (até 3 doses)
2. Posição de Trendelenburg (pernas elevadas)
3. SF 0,9% 1000-2000mL EV rápido (bolus)
4. O2 alto fluxo 10-15L/min
5. Se broncoespasmo: Salbutamol NBZ 10-20 gotas
6. Hidrocortisona 200mg EV (efeito em 4-6h — prevenção bifásica)
7. Dexclorfeniramina 5mg EV OU Ranitidina 50mg EV (adjuvantes)
8. Se refratário: Adrenalina EV 0,1mg (1:10.000) lento + BIC
9. IOT se edema de glotis/estridor
10. Observação 8-24h (reação bifásica em 20%)
11. Na alta: prescrever Adrenalina autoinjetável + plano de ação`,
    warnings: "ADRENALINA IM é a PRIMEIRA droga. Anti-histamínico NÃO trata anafilaxia, é adjuvante.",
    guideline: "ASBAI / WAO / EAACI",
  },
];
