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
  {
    id: "rx-emerg-hemorragia-digestiva",
    title: "Hemorragia Digestiva — Ressuscitação",
    type: "Prescrição de Emergência",
    prescription: `1. 2 acessos calibrosos (jelco 14-16G)
2. SF 0,9% / RL — ressuscitação volêmica agressiva
3. Tipagem sanguínea + reserva de CH (mínimo 4 unidades)
4. Transfusão se Hb <7 (ou <9 se cardiopata/instável)
5. Omeprazol 80mg EV bolus → 8mg/h em BIC (HDA não varicosa)
6. OU Terlipressina 2mg EV + Ceftriaxona 1g EV (se suspeita varicosa/hepatopata)
7. Octreotida 50mcg bolus → 50mcg/h EV (alternativa à Terlipressina)
8. SNG: aspirar — sangue confirma HDA (mas aspirado limpo não exclui)
9. IOT se: rebaixamento, hematêmese maciça (proteger via aérea para EDA)
10. Hemograma, coagulograma, INR, função renal, lactato
11. EDA em até 12-24h (urgente se instável)
12. Ácido Tranexâmico 1g EV (controverso em HDA — considerar)`,
    warnings: "HDA varicosa em cirrótico: Terlipressina + ATB (Ceftriaxona) REDUZ mortalidade. Não esquecer o ATB.",
    guideline: "SBG / ESGE / AASLD",
  },
  {
    id: "rx-emerg-politrauma",
    title: "Politrauma — ABCDE Prescrição",
    type: "Prescrição de Emergência",
    prescription: `A — Via Aérea + Coluna Cervical:
1. Colar cervical + prancha
2. IOT se Glasgow ≤8 ou perda de reflexo protetor

B — Ventilação:
3. O2 100% alto fluxo
4. Drenagem torácica se pneumo/hemotórax

C — Circulação:
5. 2 acessos calibrosos (14-16G)
6. SF 0,9% 1000mL EV rápido → reavaliar
7. Ácido Tranexâmico 1g EV em 10 min (dentro de 3h do trauma)
8. Tipagem + reserva CH. Protocolo de transfusão maciça se >4 CH
9. Torniquete + compressão se hemorragia externa

D — Déficit Neurológico:
10. Glasgow, pupilas, déficit motor
11. TC crânio se Glasgow <15 ou mecanismo grave

E — Exposição:
12. Despir completamente + prevenir hipotermia
13. FAST (USG — líquido livre?)
14. Laboratório: hemograma, tipagem, gasometria, lactato, coagulograma
15. RX cervical, tórax AP, pelve AP`,
    guideline: "ATLS 10ª ed / PHTLS",
  },
  {
    id: "rx-emerg-crise-falciforme",
    title: "Crise Vaso-Oclusiva (Doença Falciforme)",
    type: "Prescrição de Emergência",
    prescription: `1. Analgesia AGRESSIVA (prioridade):
   Morfina 0,1mg/kg EV a cada 15-20 min até controle
   + Dipirona 1g EV 6/6h
   + Cetoprofeno 100mg EV 12/12h
2. Hidratação: SF 0,9% 1000-1500mL EV (NÃO hiper-hidratar — risco EAP)
3. O2 suplementar APENAS se SpO2 <95% (hiperóxia pode inibir eritropoiese)
4. Ácido fólico 5mg VO 1x/dia
5. Hemograma + reticulócitos + função renal + bilirrubinas
6. RX tórax (Síndrome Torácica Aguda: infiltrado + febre/dor/hipóxia)
7. Se STA: Ceftriaxona 1g EV + Azitromicina 500mg + transfusão simples
8. Transfusão simples se Hb <5 ou queda >2 do basal
9. Exsanguineotransfusão se: STA grave, AVC, priapismo >4h
10. NÃO dar O2 sem indicação. NÃO hiper-hidratar.`,
    warnings: "Dor na falciforme é REAL e INTENSA. NÃO subtratar. Escala de dor + protocolo de opioide.",
    guideline: "ABHH / MS / ASH",
  },
  {
    id: "rx-emerg-fa-rapida",
    title: "FA com Alta Resposta Ventricular",
    type: "Prescrição de Emergência",
    prescription: `COM instabilidade (hipotensão, EAP, angina, rebaixamento):
1. Cardioversão elétrica sincronizada 120-200J bifásico
2. Sedação: Propofol 1mg/kg ou Etomidato 0,3mg/kg EV

SEM instabilidade — Controle de FC:
3. Metoprolol 5mg EV lento a cada 5 min (máx 15mg) → VO 50mg 12/12h
4. OU Diltiazem 0,25mg/kg EV em 2 min → 5-15mg/h BIC
5. OU Amiodarona 150mg EV em 10 min → 1mg/min 6h → 0,5mg/min 18h (se IC/instável)
6. Alvo FC <110 bpm
7. Avaliar anticoagulação (CHA₂DS₂-VASc)
8. Se FA >48h: anticoagular 3 semanas antes da cardioversão OU eco transesofágico
9. Heparina se cardioversão urgente
10. ECG, troponina, TSH, eletrólitos, hemograma`,
    warnings: "NÃO usar betabloqueador + diltiazem juntos (bloqueio AV). Amiodarona na IC.",
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-emerg-bradiarritmia",
    title: "Bradiarritmia / BAV — Emergência",
    type: "Prescrição de Emergência",
    prescription: `SEM sintomas: observar + monitorizar

COM sintomas (hipotensão, síncope, dispneia, IC):
1. Atropina 0,5mg EV a cada 3-5 min (máx 3mg)
2. Se não responder à atropina:
   - Adrenalina 2-10 mcg/min EV em BIC
   - OU Dopamina 5-20 mcg/kg/min EV em BIC
3. Marcapasso transcutâneo (MP-TC):
   - Eletrodos anteroposterior
   - FC 60-80 bpm, output mínimo para captura
   - Sedação: Fentanil 50mcg + Midazolam 2-3mg EV
4. Marcapasso transvenoso se refratário ou definitivo
5. ECG 12 derivações (localizar bloqueio)
6. Excluir: hipercalemia, hipotireoidismo, drogas (betabloq, BCC, digoxina)`,
    warnings: "Atropina é INEFICAZ no BAV de 2° Mobitz II e BAVT infranodal. Ir direto para marcapasso.",
    guideline: "AHA / ACLS 2020",
  },
  {
    id: "rx-emerg-tvsp",
    title: "Taquicardia Ventricular com Pulso",
    type: "Prescrição de Emergência",
    prescription: `COM instabilidade:
1. Cardioversão elétrica sincronizada 100-200J bifásico
2. Sedação: Propofol 1mg/kg ou Etomidato 0,3mg/kg EV

SEM instabilidade (TV monomórfica):
3. Amiodarona 150mg EV em 10 min → 1mg/min 6h → 0,5mg/min 18h
4. OU Lidocaína 1-1,5mg/kg EV → 1-4mg/min BIC
5. OU Procainamida 20-50mg/min EV (suspender se QRS alargar >50%)

TV Polimórfica (Torsades de Pointes):
6. Sulfato de Magnésio 2g EV em 10 min
7. Se QT longo: isoproterenol ou overdrive pacing
8. Corrigir K >4,0 e Mg >2,0
9. ECG: identificar QRS largo, regularidade, morfologia
10. Troponina, eletrólitos, gasometria
11. Ecocardiograma (função ventricular, cardiopatia estrutural)`,
    guideline: "AHA / ACLS / SBC",
  },
  {
    id: "rx-emerg-hipertermia-maligna",
    title: "Hipertermia Maligna",
    type: "Prescrição de Emergência",
    prescription: `1. SUSPENDER agente desencadeante imediatamente (halogenado, succinilcolina)
2. Dantrolene 2,5mg/kg EV bolus — repetir a cada 5 min até controle (máx 10mg/kg)
3. Resfriamento ativo: compressas geladas, SF gelado EV, lavagem gástrica gelada
4. O2 100% alto fluxo — hiperventilar
5. Bicarbonato 1-2mEq/kg EV se acidose grave
6. Tratar hipercalemia: Gluconato de cálcio + insulina + glicose
7. SF 0,9% gelado — ressuscitação agressiva
8. SVD (vigiar mioglobinúria — urina escura)
9. Manter diurese >2mL/kg/h (Manitol 0,25g/kg se mioglobinúria)
10. Gasometria, CPK, K, Ca, lactato, coagulação a cada 30 min
11. Monitorização contínua em UTI por 24-72h (risco de recorrência)
12. Encaminhar para teste genético (RYR1) — família também`,
    warnings: "CADA MINUTO CONTA. Dantrolene salva vida. Mortalidade sem tratamento: >70%.",
    guideline: "MHAUS / SBA",
  },
  {
    id: "rx-emerg-intox-organo",
    title: "Intoxicação por Organofosforado",
    type: "Prescrição de Emergência",
    prescription: `1. Descontaminação: retirar roupas, lavar pele com água e sabão (equipe com EPI)
2. ABCDE — IOT se insuficiência respiratória (secreção massiva)
3. Atropina 2-4mg EV a cada 5-10 min até secar secreções
   Dose pode ser MUITO alta (dezenas de mg) — titular por secreções/FC
4. Pralidoxima (Contrathion) 1-2g EV em 15-30 min → 500mg/h BIC (reativar colinesterase)
   Iniciar em <6h da exposição (depois pode ser ineficaz)
5. Diazepam 10mg EV se convulsão (NÃO usar fenitoína)
6. O2 + aspiração contínua de secreções
7. Carvão ativado 1g/kg se ingestão <1h
8. Monitorização contínua (bradiarritmia, insuficiência resp)
9. Colinesterase sérica (eritrocitária e plasmática)
10. Observar 48-72h (efeitos tardios: síndrome intermediária)`,
    warnings: "Síndrome DUMBELS: Diarreia, Urina, Miose, Bradicardia, Emese, Lacrimejamento, Salivação.",
    guideline: "CIT / ABCF / WHO",
  },
  {
    id: "rx-emerg-sindrome-serotoninergica",
    title: "Síndrome Serotoninérgica",
    type: "Prescrição de Emergência",
    prescription: `1. SUSPENDER todos os agentes serotoninérgicos (ISRS, IRSN, tramadol, triptanos, linezolida)
2. Medidas de suporte: SF 0,9% EV, resfriamento ativo
3. Benzodiazepínico: Diazepam 5-10mg EV (agitação, hipertonia, convulsão)
4. Ciproheptadina 12mg VO/SNG (antídoto) → 4mg 6/6h (máx 32mg/dia)
5. Resfriamento ativo se temperatura >41°C
6. IOT + BNM (Rocurônio — NÃO usar succinilcolina) se rigidez refratária
7. Monitorização contínua (FC, PA, temperatura, SpO2)
8. NÃO usar propranolol (mascara taquicardia, piora instabilidade)
9. CPK, função renal, eletrólitos, coagulação
10. Resolução em 24-72h após suspensão do agente`,
    notes: "Tríade: alteração mental + hiperatividade autonômica + hiperatividade neuromuscular (clônus, tremor, rigidez).",
    warnings: "Diagnóstico diferencial: SNM (mais lento, rigidez em cano de chumbo). Critérios de Hunter.",
    guideline: "ABCF / Toxicologia Clínica",
  },
  {
    id: "rx-emerg-snm",
    title: "Síndrome Neuroléptica Maligna",
    type: "Prescrição de Emergência",
    prescription: `1. SUSPENDER antipsicótico causador
2. SF 0,9% — hidratação agressiva (prevenção IRA por rabdomiólise)
3. Resfriamento ativo (compressas, manta, SF gelado)
4. Dantrolene 1-2,5mg/kg EV a cada 6h (relaxante muscular)
5. Bromocriptina 2,5-5mg VO/SNG 8/8h (agonista dopaminérgico)
6. Benzodiazepínico: Diazepam 5-10mg EV se rigidez/agitação
7. IOT se insuficiência respiratória
8. SVD — manter diurese >2mL/kg/h
9. CPK seriado, mioglobina, função renal, eletrólitos, coagulação
10. Evolução mais lenta que síndrome serotoninérgica (5-10 dias)
11. Monitorizar em UTI
12. Reintrodução de antipsicótico: mínimo 2 semanas, baixa dose, outra classe`,
    warnings: "Tétrade: hipertermia + rigidez + alteração mental + disautonomia. CPK >1000 é comum.",
    guideline: "ABP / APA / Toxicologia",
  },
  {
    id: "rx-emerg-intox-paracetamol",
    title: "Intoxicação por Paracetamol",
    type: "Prescrição de Emergência",
    prescription: `1. N-Acetilcisteína (NAC) — ANTÍDOTO:
   Protocolo 21h (Prescott):
   150mg/kg EV em 200mL SG5% em 1h (ataque)
   → 50mg/kg em 500mL SG5% em 4h
   → 100mg/kg em 1000mL SG5% em 16h

2. Carvão ativado 1g/kg VO (se <2h da ingestão)
3. Dosar nível sérico de paracetamol (a partir de 4h da ingestão)
4. Nomograma de Rumack-Matthew (plotar nível x tempo)
5. Iniciar NAC se: nível acima da linha de tratamento OU dose >150mg/kg OU dúvida
6. TGO/TGP, bilirrubinas, INR, creatinina, gasometria a cada 6-12h
7. Se INR >2 e encefalopatia: critérios de King's College (transplante)
8. Lactato >3,5 em <4h = mau prognóstico
9. Monitorar: insuficiência hepática nas primeiras 24-72h`,
    warnings: "Dose tóxica: >150mg/kg ou >7,5g em adulto. Início pode ser ASSINTOMÁTICO — não esperar sintomas.",
    guideline: "ABCF / CIT / Toxicologia Clínica",
  },
  {
    id: "rx-emerg-overdose-opioide",
    title: "Overdose de Opioide",
    type: "Prescrição de Emergência",
    prescription: `Tríade clássica: miose + rebaixamento + depressão respiratória

1. ABCDE — garantir via aérea (ventilação é prioridade)
2. Naloxona 0,4mg EV/IM/SC — repetir a cada 2-3 min até resposta
   Dose pode chegar a 2-10mg se refratário
3. Se sem acesso: Naloxona intranasal 4mg (spray)
4. BVM se apneia enquanto prepara naloxona
5. CUIDADO: meia-vida da naloxona (30-90min) é MENOR que a do opioide
   → Risco de re-sedação → observar 4-6h mínimo
6. Se opioide de longa ação (metadona): Naloxona BIC 0,4-0,8mg/h
7. O2 suplementar
8. Monitorização contínua (SpO2, FR, Glasgow)
9. Glicemia capilar (excluir hipoglicemia)
10. ECG (metadona causa QT longo)
11. Toxicológico urinário
12. Na alta: orientar sobre naloxona domiciliar (onde disponível)`,
    warnings: "Naloxona pode precipitar abstinência aguda. Titular com cautela em dependentes. Monitorar por re-sedação.",
    guideline: "ABCF / AHA / WHO",
  },
  {
    id: "rx-emerg-eclampsia-ps",
    title: "Eclâmpsia — Emergência no PS",
    type: "Prescrição de Emergência",
    prescription: `1. Proteger via aérea — DLE (decúbito lateral esquerdo)
2. O2 sob máscara
3. NÃO conter a convulsão fisicamente
4. Sulfato de Magnésio (Esquema Zuspan) — 1ª LINHA:
   Ataque: MgSO4 4g EV em 20 min
   Manutenção: 1-2g/h EV em BIC
5. Se convulsão refratária: Diazepam 10mg EV (resgate)
6. Anti-hipertensivo se PAS ≥160 ou PAD ≥110:
   Nifedipino 10mg VO OU Hidralazina 5mg EV
7. SVD (diurese ≥25mL/h confirma nível terapêutico de Mg)
8. Monitorar toxicidade do MgSO4: reflexo patelar, FR, diurese
   Antídoto: Gluconato de cálcio 1g EV em 3 min se toxicidade
9. Exames STAT: hemograma, plaquetas, TGO/TGP, LDH, creatinina, ácido úrico
10. Avaliar resolução da gestação APÓS estabilização
11. NÃO é indicação de cesárea de emergência imediata (estabilizar primeiro)`,
    warnings: "Eclâmpsia pode ocorrer pós-parto (até 48h). MgSO4 manter por 24h após última crise.",
    guideline: "FEBRASGO / ACOG / MS",
  },
  {
    id: "rx-emerg-queimadura-va",
    title: "Queimadura de Via Aérea / Inalação",
    type: "Prescrição de Emergência",
    prescription: `1. IOT PRECOCE (edema progride rapidamente — esperar é perigoso)
   Tubo ≥7,5 (edema pode dificultar reintubação)
2. O2 100% por 6-12h (tratar intoxicação por CO)
3. Broncoscopia precoce (avaliar lesão de VA inferior)
4. Ventilação protetora: VT 6mL/kg, PEEP 5-8
5. NBZ com Salbutamol 10 gotas 2/2h (broncoespasmo)
6. NBZ com Heparina 5000UI + SF 3mL 4/4h (reduz formação de cilindros)
7. Aspiração traqueal frequente
8. Cabeceira 30°
9. Ressuscitação volêmica: Parkland (4mL × kg × %SCQ)
10. Carboxihemoglobina (COHb): >15% = intoxicação significativa
11. Gasometria: PaO2 pode estar NORMAL mesmo com CO alto
12. Observação mínima 24h mesmo se assintomático`,
    warnings: "Sinais de queimadura de VA: rouquidão, estridor, vibrissas chamuscadas, escarro carbonáceo, edema facial. IOT PRECOCE.",
    guideline: "SBCP / ABA / AMIB",
  },
  {
    id: "rx-emerg-acidente-escorpiao",
    title: "Acidente Escorpiônico (Escorpião)",
    type: "Prescrição de Emergência",
    prescription: `Leve (dor local, parestesia):
1. Analgesia: Dipirona 1g EV + Tramadol 50mg EV
2. Lidocaína 2% sem vaso (infiltração local 1-2mL)
3. Observação 4-6h
4. NÃO requer soro

Moderado (dor intensa + vômitos, sudorese, taquicardia):
5. Soro antiescorpiônico (SAEsc) 2-3 ampolas EV
6. Analgesia EV
7. Monitorização 12-24h

Grave (choque, EAP, arritmia, rebaixamento — mais em crianças):
8. SAEsc 4-6 ampolas EV
9. UTI
10. Dobutamina se disfunção miocárdica (Eco à beira-leito)
11. Furosemida se EAP
12. Atropina se bradicardia
13. IOT se insuficiência respiratória

TODOS:
14. Pré-medicar soro: Prometazina 25mg IM + Hidrocortisona 200mg EV
15. Notificação compulsória`,
    warnings: "Crianças <7 anos: SEMPRE grave até prova em contrário. Internação obrigatória. ECG + Eco.",
    guideline: "MS / Instituto Butantan / SVS",
  },
  {
    id: "rx-emerg-choque-hemorragico",
    title: "Choque Hemorrágico — Protocolo de Transfusão Maciça",
    type: "Prescrição de Emergência",
    prescription: `Classificação (ATLS):
Classe I: <750mL (normal) | II: 750-1500mL (taquicardia)
Classe III: 1500-2000mL (hipotensão) | IV: >2000mL (risco de morte)

1. 2 acessos calibrosos (14-16G) → IO se necessário
2. SF 0,9% ou RL 1000mL EV rápido (máx 1-2L cristaloide)
3. Ácido Tranexâmico 1g EV em 10 min (dentro de 3h)
4. Tipagem sanguínea + ativar protocolo de transfusão maciça

PROTOCOLO DE TRANSFUSÃO MACIÇA (PTM):
5. CH:PFC:PLQ na proporção 1:1:1
6. Pacote 1: 6 CH + 6 PFC + 1 aférese PLQ
7. Fibrinogênio alvo >1,5: Crioprecipitado 10 unidades
8. Cálcio: Gluconato de cálcio 1g EV a cada 4 CH (citrato quela Ca)
9. Aquecer hemoderivados (hipotermia piora coagulopatia)

Tríade letal do trauma:
10. Hipotermia + Acidose + Coagulopatia → reaquecimento + correção
11. Cirurgia de controle de danos (tamponar → UTI → reabordar)
12. Alvo: PAM 65 (ou PAS 80-90 se hemorragia não controlada — hipotensão permissiva)`,
    warnings: "Hipotensão permissiva (PAS 80-90) EXCETO em TCE (manter PAS ≥100 em TCE).",
    guideline: "ATLS / ABHH / CRASH-2",
  },
  {
    id: "rx-emerg-intox-bzd",
    title: "Intoxicação por Benzodiazepínico",
    type: "Prescrição de Emergência",
    prescription: `1. ABCDE — via aérea é prioridade (depressão respiratória)
2. O2 suplementar
3. IOT se: apneia, Glasgow ≤8, perda de reflexo protetor
4. Flumazenil 0,2mg EV em 15s → 0,3mg após 30s → 0,5mg a cada 1 min
   Dose máxima: 3-5mg total
   
CONTRAINDICAÇÕES DO FLUMAZENIL:
5. Epiléptico em uso crônico de BZD (risco de status epiléptico)
6. Coingestão de ADT, cocaína, ou substância pró-convulsivante
7. Dependente de BZD (precipita abstinência grave + convulsão)
8. ECG com QRS alargado (sugere ADT)

9. Carvão ativado 1g/kg se <1h da ingestão
10. Monitorização contínua (re-sedação: meia-vida do flumazenil é CURTA — 45-90min)
11. Observação 6-12h (BZDs de longa ação)
12. Glicemia, gasometria, toxicológico
13. Avaliar intencionalidade (tentativa de suicídio → psiquiatria)`,
    warnings: "Flumazenil é PERIGOSO em epilépticos e polintoxicação. Na dúvida, NÃO usar — manter suporte.",
    guideline: "ABCF / CIT / Toxicologia",
  },
  {
    id: "rx-emerg-crise-hipertensiva-ps",
    title: "Emergência vs Urgência Hipertensiva — Manejo no PS",
    type: "Prescrição de Emergência",
    prescription: `URGÊNCIA HIPERTENSIVA (PA elevada SEM lesão de órgão-alvo):
1. Captopril 25mg VO (pode repetir em 30 min)
2. OU Clonidina 0,1-0,2mg VO (repetir 0,1mg a cada hora, máx 0,6mg)
3. Repouso + ambiente calmo
4. Meta: reduzir PA em 24-48h (NÃO rapidamente)
5. Alta com anti-hipertensivo ajustado + retorno em 7 dias

EMERGÊNCIA HIPERTENSIVA (PA elevada COM lesão de órgão-alvo):
6. Nitroprussiato de sódio 0,3-10mcg/kg/min EV (1ª escolha na maioria)
7. OU Nitroglicerina 5-200mcg/min (se SCA ou EAP)
8. OU Labetalol EV (dissecção aórtica — com esmolol)
9. OU Hidralazina 5mg EV (gestante — pré-eclâmpsia)
10. Meta: reduzir 20-25% da PA na 1ª hora → normalizar em 24-48h
11. Monitorização contínua (UTI)
12. Investigar LOA: fundo de olho, creatinina, EAS, troponina, TC crânio, ECG`,
    warnings: "NÃO dar nifedipino SL (queda abrupta = AVC/IAM). Redução gradual e controlada.",
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-emerg-tep-macico",
    title: "TEP Maciço — Trombólise",
    type: "Prescrição de Emergência",
    prescription: `Critérios de TEP maciço: hipotensão (PAS <90 por >15 min) + evidência de TEP

1. SF 0,9% 250-500mL EV cauteloso (VD já está sobrecarregado)
2. Noradrenalina 0,1-1mcg/kg/min se hipotensão
3. Trombólise SISTÊMICA:
   Alteplase 100mg EV em 2h
   OU Tenecteplase dose ajustada ao peso EV bolus
4. Se PCR por TEP: Alteplase 50mg EV bolus → RCP por 60-90 min
5. Heparina NF após trombólise (iniciar quando TTPA <2x)
6. O2 alto fluxo → IOT se necessário
7. Dobutamina 5-20mcg/kg/min (suporte de VD)
8. ECMO se disponível e refratário
9. Embolectomia cirúrgica se: contraindicação à trombólise + instável
10. AngioTC tórax (se estável o suficiente para imagem)
11. Eco beira-leito: dilatação de VD, sinal de McConnell, septo paradoxal
12. Troponina, BNP, D-dímero, gasometria`,
    warnings: "TEP maciço com PCR: Alteplase 50mg em bolus + continuar RCP por 60-90 min antes de considerar parada.",
    guideline: "SBC / ESC 2019 / AHA",
  },
  {
    id: "rx-emerg-acidente-abelha",
    title: "Acidente por Abelhas (Múltiplas Picadas)",
    type: "Prescrição de Emergência",
    prescription: `Reação local / poucas picadas:
1. Remover ferrões (raspar — não pinçar)
2. Gelo local
3. Dexclorfeniramina 5mg EV
4. Hidrocortisona 200mg EV
5. Analgesia: Dipirona 1g EV

Ataque maciço (>20 picadas adulto / >5 criança):
6. Protocolo de anafilaxia se sinais sistêmicos
7. Adrenalina 0,5mg IM se anafilaxia
8. SF 0,9% — hidratação agressiva (prevenção IRA por rabdomiólise)
9. Monitorar: CPK, mioglobina, função renal, coagulograma (CIVD)
10. SVD — manter diurese >1mL/kg/h
11. Hemograma, gasometria, lactato, DHL, reticulócitos (hemólise)
12. Hemodiálise se IRA por mioglobinúria
13. >500 picadas: mortalidade alta — UTI obrigatória
14. Notificação compulsória`,
    warnings: "Envenenamento maciço por abelhas: hemólise + rabdomiólise + CIVD + IRA. Diferente de anafilaxia.",
    guideline: "MS / CEVAP / SVS",
  },
  {
    id: "rx-emerg-edema-glote",
    title: "Edema de Glote / Obstrução de Via Aérea",
    type: "Prescrição de Emergência",
    prescription: `1. Adrenalina 0,3-0,5mg IM (1:1000) — IMEDIATA
2. Adrenalina nebulização: 3-5mL puro via nebulizador
3. Dexametasona 10mg EV
4. O2 suplementar alto fluxo (10-15L/min)
5. Preparar material para IOT difícil
6. Cricotireoidostomia de emergência se IOT impossível
7. Salbutamol 10 gotas neb se broncoespasmo associado
8. Hidrocortisona 200mg EV
9. Difenidramina 50mg EV
10. Monitorização contínua SpO2, FR, FC`,
    warnings: "Via aérea difícil — chamar anestesiologista. Se edema completo: crico é salvadora. NÃO perder tempo com múltiplas tentativas de IOT.",
    guideline: "AHA / ASBAI / DAS",
  },
  {
    id: "rx-emerg-pneumoperitonio",
    title: "Pneumoperitônio / Perfuração de Víscera Oca",
    type: "Prescrição de Emergência",
    prescription: `1. Dieta ZERO absoluta
2. SNG aberta em frasco
3. SF 0,9% 1000mL EV em bolus (ressuscitação)
4. Ceftriaxona 2g EV + Metronidazol 500mg EV
5. OU Piperacilina-Tazobactam 4,5g EV 6/6h
6. Dipirona 1g EV + Tramadol 100mg EV
7. Omeprazol 40mg EV
8. SVD — controle de diurese
9. Avaliação Cirurgia Geral URGENTE (laparotomia)
10. RX tórax em ortostase (pneumoperitônio)
11. TC abdome se estável
12. Reserva de hemoderivados`,
    warnings: "Pneumoperitônio em RX = cirurgia. Exceção rara: pneumoperitônio pós-procedimento recente. Não atrasar cirurgia.",
    guideline: "EAST / CBC / ACS",
  },
  {
    id: "rx-emerg-hemorragia-varicosa",
    title: "Hemorragia Varicosa Esofágica",
    type: "Prescrição de Emergência",
    prescription: `1. Ressuscitação: 2 acessos calibrosos, cristalóide
2. Terlipressina 2mg EV bolus → 1mg EV 4/4h por 5 dias
3. OU Octreotida 50mcg EV bolus → 50mcg/h BIC
4. Ceftriaxona 1g EV 1x/dia (profilaxia PBE — REDUZ mortalidade)
5. Omeprazol 80mg EV bolus → 8mg/h BIC
6. EDA em até 12h (ligadura elástica)
7. Se sangramento maciço: Balão de Sengstaken-Blakemore (ponte para EDA)
8. Tipagem + reserva 4 UCH
9. Transfundir se Hb <7 (alvo 7-9)
10. Lactulose 30mL VO 8/8h (profilaxia encefalopatia)
11. Evitar sedação excessiva`,
    warnings: "NÃO hiperhidratar — PA alvo ~100mmHg. Excesso de volume piora sangramento varicoso. Mortalidade por episódio ~20%.",
    guideline: "Baveno VII / SBG / EASL",
  },
  {
    id: "rx-emerg-embolia-pulmonar-subm",
    title: "TEP Submassivo — Disfunção de VD",
    type: "Prescrição de Emergência",
    prescription: `1. Heparina não fracionada: 80UI/kg bolus → 18UI/kg/h BIC
2. OU Enoxaparina 1mg/kg SC 12/12h
3. SF 0,9% 250mL EV (cuidado: NÃO hiper-hidratar — piora VD)
4. Noradrenalina se hipotensão (0,1mcg/kg/min)
5. O2 suplementar (alvo SpO2 >92%)
6. Dobutamina 5mcg/kg/min se disfunção de VD sem hipotensão
7. AngioTC de tórax (confirmatório)
8. Ecocardiograma à beira-leito (sinais de sobrecarga de VD)
9. Troponina + BNP (estratificação PESI)
10. Se deterioração → trombólise sistêmica (Alteplase 100mg EV 2h)
11. UTI obrigatória
12. Avaliar filtro de VCI se contraindicação a anticoagulação`,
    notes: "TEP submassivo = normotenso + disfunção VD + troponina elevada. Monitorar de perto — pode evoluir para maciço.",
    guideline: "ESC / SBC / CHEST",
  },
  {
    id: "rx-emerg-taquicardia-svt",
    title: "Taquicardia Supraventricular (TSV)",
    type: "Prescrição de Emergência",
    prescription: `1. Manobra vagal: Valsalva modificado (soprar seringa 10mL por 15s + deitar com pernas elevadas)
2. Se não reverte: Adenosina 6mg EV bolus rápido + flush de SF (antecubital)
3. Se não reverte: Adenosina 12mg EV bolus rápido
4. Se refratária: Verapamil 5mg EV em 2 min (se PA estável e sem IC)
5. OU Diltiazem 0,25mg/kg EV em 2 min
6. Se instável (hipotensão, dor torácica, IC): Cardioversão sincronizada 50-100J
7. ECG de 12 derivações (durante e após conversão)
8. Monitorização contínua
9. Após conversão: encaminhar para Holter e EEF`,
    warnings: "Adenosina: avisar paciente que vai sentir 'aperto no peito' e 'pausa' transitória. Contraindicada em asmáticos graves. NÃO dar Verapamil se suspeita de WPW (FA pré-excitada).",
    guideline: "AHA / SBC / ESC",
  },
];

