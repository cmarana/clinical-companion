import { PrescriptionItem } from "./types";

export const obstetricsItems: PrescriptionItem[] = [
  {
    id: "rx-obst-pre-eclampsia",
    title: "Pré-eclâmpsia Grave",
    type: "Prescrição Obstétrica",
    prescription: `1. Internação + monitorização contínua (PA, SpO2, BCF)
2. Sulfato de Magnésio (Esquema Zuspan):
   Ataque: MgSO4 4g EV em 20 min (8mL MgSO4 50% + SF 0,9% 100mL)
   Manutenção: 1-2g/h EV (10g MgSO4 50% + SF 0,9% 490mL → 50-100mL/h)
3. Anti-hipertensivo de urgência (PAS ≥160 ou PAD ≥110):
   Nifedipino 10mg VO (pode repetir em 30 min)
   OU Hidralazina 5mg EV lento a cada 20 min (máx 20mg)
4. SF 0,9% — restringir volume (risco de EAP)
5. SVD (controle de diurese — alvo ≥25mL/h)
6. Exames: hemograma, plaquetas, TGO/TGP, LDH, bilirrubinas, creatinina, ácido úrico, proteinúria
7. Avaliar síndrome HELLP (hemólise, ↑enzimas, ↓plaquetas)
8. Corticoide se IG <34sem: Betametasona 12mg IM 24/24h (2 doses)
9. Avaliar resolução da gestação (via de parto)`,
    warnings: "Monitorar reflexo patelar, FR e diurese (toxicidade do MgSO4). Antídoto: Gluconato de Cálcio 10mL EV.",
    guideline: "FEBRASGO / MS / ACOG",
  },
  {
    id: "rx-obst-eclampsia",
    title: "Eclâmpsia — Convulsão na Gestante",
    type: "Prescrição de Emergência Obstétrica",
    prescription: `1. Decúbito lateral esquerdo (DLE)
2. Proteger via aérea (Guedel se necessário)
3. O2 sob máscara 10L/min
4. Sulfato de Magnésio (Zuspan):
   Ataque: MgSO4 4g EV em 5-10 min
   Manutenção: 1-2g/h EV contínua (manter 24h após última convulsão)
5. Se convulsão refratária ao MgSO4: Midazolam 5mg EV OU Diazepam 10mg EV
6. Anti-hipertensivo se PA ≥160/110:
   Hidralazina 5mg EV a cada 20 min
7. NÃO usar Fenitoína (inferior ao MgSO4)
8. Avaliar resolução da gestação APÓS estabilização (máx 4-6h)
9. TC crânio se: déficit focal, convulsão atípica, rebaixamento prolongado
10. Exames: HELLP, função renal, gasometria`,
    warnings: "Eclâmpsia = emergência. Estabilizar ANTES de resolver gestação. MgSO4 é a droga de PRIMEIRA escolha.",
    guideline: "FEBRASGO / MS / WHO",
  },
  {
    id: "rx-obst-hpp",
    title: "Hemorragia Pós-Parto (HPP)",
    type: "Prescrição de Emergência Obstétrica",
    prescription: `PROTOCOLO DOS 4 Ts (Tônus, Trauma, Tecido, Trombina):

TÔNUS (causa mais comum — atonia uterina):
1. Massagem uterina bimanual
2. Ocitocina 10UI IM + 20-40UI em SF 500mL EV (correr rápido)
3. Metilergometrina 0,2mg IM (CI se hipertensão)
4. Misoprostol 800mcg via retal
5. Ácido Tranexâmico 1g EV em 10 min (nas primeiras 3h — SEMPRE)
6. SF 0,9% e Ringer Lactato — ressuscitação volêmica agressiva
7. Hemoderivados: CH se Hb <7 ou instabilidade
8. PFC se coagulopatia (INR >1,5)
9. Crioprecipitado se fibrinogênio <200
10. Balão de tamponamento intrauterino (Bakri) se refratária
11. Cirurgia: sutura de B-Lynch, ligadura de artérias uterinas, histerectomia

TRAUMA: revisar canal de parto, sutura de lacerações
TECIDO: revisão manual + curetagem se restos
TROMBINA: coagulograma, repor fatores`,
    warnings: "Ácido Tranexâmico dentro de 3h SALVA VIDAS (estudo WOMAN). Ativar protocolo de transfusão maciça se >1500mL.",
    guideline: "FEBRASGO / MS / FIGO / WHO",
  },
  {
    id: "rx-obst-dpp",
    title: "Descolamento Prematuro de Placenta (DPP)",
    type: "Prescrição de Emergência Obstétrica",
    prescription: `1. 2 acessos venosos calibrosos (jelco 14-16G)
2. SF 0,9% / Ringer Lactato — ressuscitação agressiva
3. Hemoderivados: tipagem sanguínea URGENTE + reserva de CH
4. Monitorização fetal contínua (sofrimento fetal agudo)
5. Hemograma, coagulograma (CIVD é frequente), fibrinogênio
6. Gasometria materna
7. Ácido Tranexâmico 1g EV
8. SVD (vigilância de diurese — IRA por choque)
9. CONDUTA OBSTÉTRICA:
   Feto vivo + viável: cesárea de EMERGÊNCIA
   Feto morto: parto vaginal se condições favoráveis (amniotomia)
10. Vigilância pós-parto: coagulopatia, atonia, IRA`,
    warnings: "DPP = emergência obstétrica. CIVD pode ser fulminante. Não retardar cesárea se feto viável.",
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-obst-sepse-puerperal",
    title: "Sepse Puerperal / Endometrite",
    type: "Prescrição Obstétrica",
    prescription: `1. Hemoculturas 2 amostras ANTES do ATB
2. Clindamicina 900mg EV 8/8h + Gentamicina 5mg/kg/dia EV 1x/dia
   (esquema clássico — Streptococcus, anaeróbios, Gram-negativos)
3. OU Ampicilina 2g EV 6/6h + Gentamicina + Metronidazol 500mg EV 8/8h (esquema triplo)
4. SF 0,9% — ressuscitação volêmica (30mL/kg se sepse)
5. Dipirona 1g EV 6/6h
6. Ocitocina 10UI EV (involuição uterina)
7. USG pélvico (restos ovulares? abscesso?)
8. Se restos: curetagem uterina
9. Hemograma, PCR, lactato, função renal
10. Se abscesso pélvico: drenagem + ampliar ATB
11. Manter ATB EV até afebril por 48h → NÃO precisa completar VO`,
    notes: "Endometrite pós-cesárea é mais comum. Esquema Clindamicina + Gentamicina tem >90% de eficácia.",
    guideline: "FEBRASGO / ACOG",
  },
  {
    id: "rx-obst-placenta-previa",
    title: "Placenta Prévia com Sangramento",
    type: "Prescrição Obstétrica",
    prescription: `1. Internação + repouso
2. 2 acessos venosos calibrosos
3. Tipagem sanguínea + reserva de CH
4. SF 0,9% — manter volemia
5. Monitorização fetal contínua
6. NÃO fazer toque vaginal (risco de hemorragia maciça)
7. Hemograma seriado
8. Corticoide se IG <34sem: Betametasona 12mg IM 24/24h (2 doses)
9. Nifedipino 20mg VO 8/8h (tocólise se <34sem e contrações)
10. Se sangramento ativo importante: cesárea de emergência
11. Se estável e IG <36sem: conduta expectante com vigilância
12. Programar cesárea eletiva com 37-38 semanas`,
    warnings: "NUNCA toque vaginal em placenta prévia. Risco de hemorragia catastrófica.",
    guideline: "FEBRASGO / RCOG",
  },
  {
    id: "rx-obst-trabalho-parto-prematuro",
    title: "Trabalho de Parto Prematuro",
    type: "Prescrição Obstétrica",
    prescription: `IG 24-34 semanas:
1. Corticoide: Betametasona 12mg IM 24/24h (2 doses)
   OU Dexametasona 6mg IM 12/12h (4 doses)
2. Tocólise (ganhar 48h para corticoide):
   Nifedipino: 20mg VO ataque → 20mg 8/8h por 48h
   OU Atosibana 6,75mg EV bolus → 18mg/h por 3h → 6mg/h por 45h
3. MgSO4 neuroprotetor (se IG <32sem):
   4g EV em 30 min → 1g/h por 12-24h
4. Pesquisar infecção: hemograma, PCR, EAS/urocultura
5. ATB se RPM: Ampicilina 2g EV 6/6h + Azitromicina 1g VO DU
6. Cultura para Streptococcus B (swab vaginal/retal)
7. Monitorização fetal + dinâmica uterina

IG 34-36+6 semanas:
8. Corticoide: controverso (considerar se 1º curso)
9. Não usar tocolíticos após 34 semanas`,
    notes: "Corticoide máximo efeito 24h-7 dias. Resgate com dose única se >14 dias do 1º curso.",
    guideline: "FEBRASGO / MS / ACOG",
  },
  {
    id: "rx-obst-pcr-gestante",
    title: "PCR na Gestante",
    type: "Prescrição de Emergência Obstétrica",
    prescription: `1. RCP padrão ACLS (compressões, via aérea, desfibrilação)
2. Deslocar útero para a ESQUERDA (mão ou cunha)
3. IOT precoce (risco de aspiração)
4. Acessos acima do diafragma
5. Adrenalina 1mg EV a cada 3-5 min
6. CESÁREA PERIMORTEM em 4 minutos se sem ROSC
   (não esperar — melhora RCP da mãe + salva o feto)
7. Causas reversíveis na gestante (além dos 5Hs e 5Ts):
   Eclâmpsia, hemorragia, embolia amniótica, IAM, TEP
8. MgSO4 NÃO é causa comum de PCR (suspender se em uso)
9. Equipe de neonatologia presente`,
    warnings: "Cesárea perimortem em ATÉ 4 MIN de PCR. Melhora RCP da mãe. Não esperar.",
    guideline: "AHA / ACLS / ALSO",
  },
  {
    id: "rx-gin-dip",
    title: "Doença Inflamatória Pélvica (DIP)",
    type: "Prescrição Ginecológica",
    prescription: `Ambulatorial (leve/moderada):
1. Ceftriaxona 500mg IM dose única
2. + Doxiciclina 100mg VO 12/12h por 14 dias
3. + Metronidazol 500mg VO 12/12h por 14 dias
4. Dipirona 500mg VO 6/6h se dor
5. Retorno em 48-72h obrigatório

Hospitalar (grave, abscesso, gestante, falha ambulatorial):
6. Ceftriaxona 1g EV 12/12h + Doxiciclina 100mg VO 12/12h + Metronidazol 500mg EV 8/8h
7. OU Clindamicina 900mg EV 8/8h + Gentamicina 5mg/kg/dia EV
8. SF 0,9% — hidratação
9. Dipirona 1g EV 6/6h
10. USG transvaginal (abscesso tubo-ovariano?)
11. Manter EV até 48h afebril → completar 14 dias VO
12. Tratar parceiro sexual (Ceftriaxona 500mg IM + Azitromicina 1g VO)`,
    notes: "Sempre rastrear ISTs: Chlamydia, Gonococo, HIV, Sífilis, Hepatites.",
    guideline: "FEBRASGO / CDC / MS",
  },
  {
    id: "rx-gin-ato",
    title: "Abscesso Tubo-Ovariano (ATO)",
    type: "Prescrição Ginecológica",
    prescription: `1. Internação obrigatória
2. Clindamicina 900mg EV 8/8h + Gentamicina 5mg/kg/dia EV
3. OU Ampicilina 2g EV 6/6h + Gentamicina + Metronidazol 500mg EV 8/8h
4. OU Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h
5. SF 0,9% — hidratação
6. Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h
7. USG TV seriado (evolução do abscesso)
8. Se >8cm ou falha ATB 48-72h: drenagem (percutânea guiada por USG/TC ou cirúrgica)
9. Se rotura de abscesso: laparotomia de EMERGÊNCIA
10. Hemograma, PCR, hemocultura
11. Manter ATB EV até afebril 48-72h → completar 14 dias VO`,
    warnings: "ATO roto = abdome agudo cirúrgico. Peritonite e choque séptico. Cirurgia imediata.",
    guideline: "FEBRASGO / ACOG",
  },
  {
    id: "rx-gin-gravidez-ectopica",
    title: "Gravidez Ectópica",
    type: "Prescrição Ginecológica / Emergência",
    prescription: `ESTÁVEL (não rota):
Metotrexato (se critérios):
1. MTX 50mg/m² IM dose única
   Critérios: β-hCG <5000, saco <3,5cm, sem BCF, estável
2. β-hCG D4 e D7 (queda ≥15% entre D4-D7 = sucesso)
3. Se queda insuficiente: 2ª dose MTX ou cirurgia

INSTÁVEL (rota/choque):
4. 2 acessos calibrosos
5. SF 0,9% / Ringer — ressuscitação agressiva
6. Tipagem + reserva de CH
7. Laparotomia ou laparoscopia de EMERGÊNCIA (salpingectomia)
8. Hemograma, β-hCG quantitativo, tipagem Rh

Todos:
9. Se Rh negativo: Imunoglobulina anti-D 300mcg IM
10. Acompanhar β-hCG até negativar`,
    warnings: "Gravidez ectópica rota = choque hemorrágico. Cirurgia IMEDIATA. Não esperar exames.",
    guideline: "FEBRASGO / ACOG",
  },
  {
    id: "rx-gin-sua",
    title: "Sangramento Uterino Anormal (SUA) Agudo",
    type: "Prescrição Ginecológica",
    prescription: `ESTÁVEL:
1. Ácido Tranexâmico 1g VO 8/8h por 5 dias
2. + AINEs: Ibuprofeno 600mg VO 8/8h por 5 dias
3. Anticoncepcional combinado dose alta:
   EE 30mcg + Levonorgestrel: 1cp VO 8/8h por 7 dias → 1cp/dia

Se falha ou moderado/grave:
4. Medroxiprogesterona 20mg VO 8/8h por 7 dias → reduzir gradualmente
5. OU EE 30mcg/Levonorgestrel 1cp 6/6h por 48h → 8/8h por 5d → 12/12h → 1/dia

INSTÁVEL (Hb <7, choque):
6. SF 0,9% — ressuscitação
7. Transfusão de CH
8. Ácido Tranexâmico 1g EV em 10 min
9. Balão de tamponamento uterino (Foley 30mL)
10. Estrogênio conjugado 25mg EV 4/4h (máx 6 doses)
11. Se refratário: curetagem ou cirurgia

Investigação: β-hCG, hemograma, coagulograma, TSH, USG TV`,
    notes: "Sempre excluir gestação (β-hCG). Em >40 anos: biópsia endometrial para excluir neoplasia.",
    guideline: "FEBRASGO / ACOG / FIGO",
  },
  {
    id: "rx-gin-violencia-sexual",
    title: "Violência Sexual — Prescrição Profilática",
    type: "Prescrição Ginecológica / Protocolo MS",
    prescription: `PROFILAXIA ISTs (iniciar em até 72h):
1. Penicilina Benzatina 2.400.000UI IM DU (sífilis)
2. Ceftriaxona 500mg IM DU (gonorreia)
3. Azitromicina 1g VO DU (clamídia)
4. Metronidazol 2g VO DU (tricomoníase)

PROFILAXIA HIV (iniciar em até 72h):
5. Tenofovir 300mg + Lamivudina 300mg + Dolutegravir 50mg — 1cp/dia por 28 dias

PROFILAXIA HEPATITE B:
6. Imunoglobulina anti-HBs IM (se não vacinada)
7. Vacina Hepatite B (iniciar esquema)

CONTRACEPÇÃO DE EMERGÊNCIA:
8. Levonorgestrel 1,5mg VO DU (até 5 dias)
9. OU DIU de cobre (mais eficaz)

10. Exames basais: β-hCG, HIV, VDRL, HBsAg, anti-HCV, hemograma
11. Notificação compulsória (não precisa de BO)
12. Acolhimento psicológico`,
    warnings: "NÃO exigir Boletim de Ocorrência. Notificação compulsória é obrigatória pelo profissional de saúde.",
    guideline: "MS / Protocolo Nacional 2023",
  },
  {
    id: "rx-obst-itu-gestante",
    title: "ITU na Gestante",
    type: "Prescrição Obstétrica",
    prescription: `Bacteriúria assintomática (TRATAR na gestação):
1. Cefalexina 500mg VO 6/6h por 7 dias (1ª escolha)
2. OU Amoxicilina 500mg VO 8/8h por 7 dias
3. OU Nitrofurantoína 100mg VO 6/6h por 7 dias (evitar >36 sem e no 1º tri)

Cistite:
4. Mesmo esquema acima

Pielonefrite (INTERNAR):
5. Ceftriaxona 1g EV 12/12h por 10-14 dias
6. SF 0,9% — hidratação
7. Dipirona 1g EV 6/6h se febre
8. Urocultura + hemocultura
9. Monitorização fetal (BCF)
10. Após melhora: transição VO e completar 14 dias

11. Urocultura de controle 1-2 semanas após tratamento
12. Considerar profilaxia: Nitrofurantoína 100mg VO à noite até o parto (se recorrência)`,
    notes: "Bacteriúria assintomática: tratar SEMPRE na gestação (risco de pielonefrite e parto prematuro).",
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-obst-diabetes-gestacional",
    title: "Diabetes Gestacional — Manejo",
    type: "Prescrição Obstétrica",
    prescription: `Diagnóstico (TOTG 75g):
Jejum ≥92, 1h ≥180, 2h ≥153 (1 valor alterado = DMG)

Medidas iniciais (2 semanas):
1. Dieta fracionada (6 refeições) + exercício 30min/dia
2. Glicemia capilar 4 pontos: jejum (<95), 1h pós-refeição (<140), 2h pós (<120)

Se metas não atingidas:
3. Insulina NPH 0,3-0,5UI/kg/dia SC
   Iniciar: 10UI à noite (se jejum alta) OU manhã/almoço (se pós-prandial alta)
4. Insulina Regular pré-refeição se pós-prandial não controlada
5. Titular a cada 3-5 dias

6. Metformina: alternativa se recusa/indisponibilidade de insulina (850mg 12/12h)
7. USG mensal (crescimento fetal, ILA)
8. Perfil biofísico fetal semanal após 32 semanas
9. Programar parto: 39-40 sem (DMG dieta) ou 37-39 sem (DMG insulina)
10. Pós-parto: suspender insulina + TOTG 6-12 semanas após`,
    guideline: "FEBRASGO / SBD / ADA",
  },
  {
    id: "rx-obst-corioamnionite",
    title: "Corioamnionite",
    type: "Prescrição Obstétrica",
    prescription: `1. ATB imediato (NÃO esperar cultura):
   Ampicilina 2g EV 6/6h + Gentamicina 5mg/kg EV 1x/dia
2. Se cesárea: adicionar Clindamicina 900mg EV 8/8h (anaeróbios)
3. Antitérmico: Dipirona 1g EV 6/6h
4. SF 0,9% — hidratação
5. Monitorização materno-fetal contínua (CTG)
6. Resolução da gestação: parto vaginal é preferível (NÃO é indicação absoluta de cesárea)
7. Cesárea por indicação obstétrica (não pela corioamnionite em si)
8. Hemograma, PCR, hemocultura materna
9. Cultura do recém-nascido ao nascer
10. Pós-parto: manter ATB se cesárea (dose adicional de Clindamicina). Se parto vaginal: ATB pode ser suspenso`,
    warnings: "Febre intraparto + taquicardia fetal + LA fétido = corioamnionite. ATB IMEDIATO + resolução.",
    guideline: "FEBRASGO / ACOG / NICE",
  },
  {
    id: "rx-obst-embolia-amniotica",
    title: "Embolia de Líquido Amniótico",
    type: "Prescrição Obstétrica",
    prescription: `EMERGÊNCIA MÁXIMA — Mortalidade 60-80%

1. Ativar equipe de emergência (anestesista + obstetra + neonatologista)
2. IOT imediata + VM (hipóxia grave)
3. 2 acessos calibrosos + tipagem
4. SF 0,9% / RL — ressuscitação agressiva
5. Noradrenalina 0,1-1mcg/kg/min se hipotensão refratária
6. Se PCR: RCP + cesárea perimortem em 4 min se IG >20 semanas
7. Tratar CIVD: plasma fresco, crioprecipitado, plaquetas, fibrinogênio
8. Ácido Tranexâmico 1g EV
9. Concentrado de hemácias conforme necessidade
10. Ocitocina 20-40UI em SF (se atonia uterina associada)
11. UTI pós-estabilização
12. NÃO há tratamento específico — suporte agressivo`,
    warnings: "Tríade clássica: hipotensão súbita + hipóxia + CIVD durante parto ou pós-parto imediato. Diagnóstico CLÍNICO.",
    guideline: "FEBRASGO / ACOG / SMFM",
  },
  {
    id: "rx-obst-dheg-cronica",
    title: "Hipertensão Crônica na Gestação",
    type: "Prescrição Obstétrica",
    prescription: `1. Anti-hipertensivo 1ª linha: Metildopa 250mg VO 8/8h (até 2g/dia)
2. 2ª linha: Nifedipino retard 20mg VO 12/12h (até 60mg/dia)
3. 3ª linha: Hidralazina 25mg VO 8/8h
4. CONTRAINDICADOS na gestação: IECA, BRA, Atenolol, Espironolactona
5. Alvo PA: <140/90 (sem comprometer perfusão placentária)
6. AAS 100mg/dia a partir de 12 semanas (prevenção pré-eclâmpsia sobreposta)
7. Cálcio 1-2g/dia VO (se ingesta baixa)
8. USG seriada: crescimento fetal + Doppler de artérias uterinas
9. Pré-natal de alto risco
10. Monitorar: proteinúria, plaquetas, TGO/TGP, creatinina, ácido úrico (screening pré-eclâmpsia sobreposta)
11. Resolução: 37-39 semanas (sem complicações)`,
    guideline: "FEBRASGO / ACOG / ISSHP",
  },
  {
    id: "rx-obst-rupreme",
    title: "Ruptura Prematura de Membranas (RPM)",
    type: "Prescrição Obstétrica",
    prescription: `CONFIRMAR: teste de cristalização, pH vaginal (Nitrazina), USG (oligoâmnio)

Se IG <34 semanas (conduta expectante):
1. Internação + repouso
2. Betametasona 12mg IM 24/24h (2 doses) — maturação pulmonar
3. ATB profilaxia: Ampicilina 2g EV 6/6h + Azitromicina 1g VO dose única
   → Amoxicilina 500mg VO 8/8h por 5 dias (após 48h EV)
4. Sulfato de magnésio se IG <32 sem (neuroproteção fetal)
5. Monitorar: temperatura, leucograma, PCR, CTG, ILA
6. NÃO fazer toque vaginal repetido (risco infecção)
7. Critérios de resolução: corioamnionite, sofrimento fetal, IG >34 semanas

Se IG ≥34 semanas:
8. Resolução da gestação (indução ou cesárea conforme indicação)`,
    guideline: "FEBRASGO / ACOG / NICE",
  },
  {
    id: "rx-gin-mioma-agudo",
    title: "Mioma Uterino — Sangramento Agudo",
    type: "Prescrição Ginecológica",
    prescription: `Sangramento agudo abundante:
1. SF 0,9% — acesso venoso + ressuscitação se instável
2. Ácido Tranexâmico 1g EV 8/8h (antifibrinolítico — 1ª linha)
3. Hemograma, tipagem sanguínea, coagulograma
4. Transfusão se Hb <7 (ou <9 se sintomática)

Tratamento hormonal:
5. Progesterona: Medroxiprogesterona 10mg VO 8/8h por 10 dias (para cessar sangramento)
6. OU ACO combinado: estradiol 30mcg + levonorgestrel — 1cp 8/8h por 7 dias → 1cp/dia
7. Após estabilização: avaliar DIU de levonorgestrel (Mirena)

Tratamento definitivo:
8. Cirurgia se: anemia refratária, mioma >10cm, compressão, falha hormonal
9. Miomectomia (desejo reprodutivo) ou histerectomia
10. USG pélvica transvaginal (tamanho, localização, vascularização)
11. Sulfato ferroso 200mg VO 1x/dia (repor ferro)`,
    guideline: "FEBRASGO / ACOG / NICE",
  },
  {
    id: "rx-obst-hiperemese",
    title: "Hiperêmese Gravídica",
    type: "Prescrição Obstétrica",
    prescription: `1. Internação se: desidratação, perda >5% peso, cetonúria, distúrbio eletrolítico
2. Dieta zero inicialmente → líquidos gelados em pequenos volumes → progredir
3. SF 0,9% 1000mL + KCl 19,1% 10mL EV (correção de desidratação)
4. Tiamina 100mg EV 1x/dia (prevenção de Wernicke — obrigatória se >3 semanas de vômitos)
5. Ondansetrona 4mg EV 8/8h (seguro no 2°-3° trimestre; 1° trimestre: avaliar risco-benefício)
6. Metoclopramida 10mg EV 8/8h (alternativa)
7. Dimenidrinato 50mg EV 6/6h SN
8. Piridoxina (B6) 25mg VO 8/8h (1ª linha ambulatorial)
9. Omeprazol 20mg EV 1x/dia se epigastralgia
10. Monitorar: eletrólitos, função renal, cetonúria, função tireoidiana (TSH — pode causar tireotoxicose gestacional transitória)
11. USG obstétrica (excluir mola hidatiforme, gemelaridade)
12. Peso diário + balanço hídrico`,
    notes: "PUQE score (Pregnancy-Unique Quantification of Emesis) para classificar gravidade.",
    guideline: "FEBRASGO / ACOG / NICE",
  },
  {
    id: "rx-obst-tev-gestacao",
    title: "TEV na Gestação — Anticoagulação",
    type: "Prescrição Obstétrica",
    prescription: `1. Enoxaparina 1mg/kg SC 12/12h (tratamento) — dose terapêutica
2. NÃO usar Varfarina no 1° trimestre (teratogênica — embriopatia warfarínica)
3. NÃO usar DOACs na gestação (contraindicados)
4. Monitorar anti-Xa a cada 4 semanas (alvo 0,6-1,0 UI/mL)

Parto:
5. Suspender enoxaparina 24h antes do parto programado (12h se dose profilática)
6. Anestesia neuroaxial: aguardar ≥24h após última dose terapêutica
7. Reiniciar 12h após parto vaginal ou 24h após cesárea

Pós-parto:
8. Manter anticoagulação por mínimo 6 semanas pós-parto (total ≥3 meses)
9. Pode usar Varfarina no pós-parto (segura na amamentação)
10. AngioTC tórax é seguro na gestação (menor dose de radiação fetal que V/Q)
11. USG Doppler MMII se suspeita de TVP
12. D-dímero é ELEVADO fisiologicamente na gestação — NÃO usar para excluir TEV`,
    warnings: "TEV é a principal causa de morte materna no puerpério em países desenvolvidos.",
    guideline: "FEBRASGO / ESC / ACOG / RCOG",
  },
  {
    id: "rx-gin-bartholinite",
    title: "Abscesso de Bartholin / Bartholinite",
    type: "Prescrição Ginecológica",
    prescription: `1. Drenagem cirúrgica + marsupialização (tratamento definitivo)
2. OU Inserção de cateter de Word (balão — manter por 4-6 semanas)
3. Anestesia local: Lidocaína 2% sem vaso (bloqueio + infiltração)

Pré-drenagem:
4. Cetoprofeno 100mg EV 12/12h
5. Dipirona 1g EV 6/6h
6. Banhos de assento mornos 3x/dia

ATB (apenas se celulite associada ou imunodeprimida):
7. Amoxicilina-Clavulanato 875mg VO 12/12h por 7 dias
8. OU Ciprofloxacino 500mg VO 12/12h + Metronidazol 500mg VO 8/8h
9. Se suspeita de IST: Ceftriaxona 500mg IM + Azitromicina 1g VO

10. Cultura do material drenado
11. Em >40 anos: biópsia para excluir carcinoma de Bartholin
12. Retorno em 7-10 dias para reavaliação + retirada do cateter de Word em 4-6 semanas`,
    guideline: "FEBRASGO / ACOG",
  },
  {
    id: "rx-obst-sofrimento-fetal",
    title: "Sofrimento Fetal Agudo",
    type: "Prescrição Obstétrica",
    prescription: `Sinais: desacelerações tardias/prolongadas, bradicardia fetal, variabilidade ausente

Ressuscitação intrauterina (ENQUANTO prepara cesárea):
1. DLE (decúbito lateral esquerdo) — melhora perfusão uteroplacentária
2. O2 10L/min por máscara (controverso, mas ainda feito na prática)
3. SF 0,9% 500-1000mL EV rápido (expansão volêmica)
4. SUSPENDER ocitocina se em uso
5. Terbutalina 0,25mg SC (tocólise de emergência — relaxar útero)
6. Amnioinfusão (se desaceleração variável + oligoâmnio)
7. Exame vaginal: excluir prolapso de cordão
   Se prolapso de cordão: elevar apresentação fetal + CESÁREA IMEDIATA

Se não houver melhora:
8. CESÁREA DE EMERGÊNCIA — tempo decisão-nascimento <30 min
9. Neonatologista presente na sala
10. Gasometria de cordão ao nascer (pH artéria umbilical)
11. Apgar 1° e 5° minuto
12. pH cordão <7,0 + BE <-12 = asfixia perinatal significativa`,
    warnings: "Prolapso de cordão: NÃO tentar reintroduzir. Elevar apresentação + cesárea IMEDIATA. Manter mão até incisão.",
    guideline: "FEBRASGO / ACOG / NICE / FIGO",
  },
  {
    id: "rx-obst-colestase-gestacional",
    title: "Colestase Intra-hepática da Gestação",
    type: "Obstetrícia",
    prescription: `1. Ácido Ursodesoxicólico 300mg VO 8/8h (ou 15mg/kg/dia)
2. Monitorizar ácidos biliares séricos (semanal)
3. Função hepática (TGO, TGP, GGT) semanal
4. Coagulograma + Vitamina K 10mg VO/IM se TP alargado
5. Anti-histamínico para prurido: Difenidramina 25mg VO 8/8h
6. CTG 2x/semana a partir do diagnóstico
7. Resolução:
   - Ácidos biliares <40: 37-38 semanas
   - Ácidos biliares 40-99: 36 semanas
   - Ácidos biliares ≥100: considerar resolução imediata
8. Corticoide para maturidade pulmonar se <37 semanas`,
    notes: "Prurido em palmas e plantas (pior à noite) no 3° trimestre: dosar ácidos biliares. Risco de óbito fetal súbito.",
    warnings: "Ácidos biliares >100: risco elevado de morte fetal. Não usar Colestiramina (interfere absorção de vitaminas).",
    guideline: "FEBRASGO / RCOG / SMFM",
  },
  {
    id: "rx-obst-inversao-uterina",
    title: "Inversão Uterina Aguda",
    type: "Obstetrícia",
    prescription: `1. CHAMAR AJUDA — emergência obstétrica
2. NÃO remover a placenta (se ainda aderida)
3. Manobra de Johnson: reposicionar fundo uterino imediatamente
   - Empurrar o fundo uterino pela vagina na direção do umbigo
4. Se resistência: Terbutalina 0,25mg SC OU Nitroglicerina 50-100mcg EV (relaxamento uterino)
5. Após reposição: Ocitocina 20UI em 500mL RL EV
6. Reposição volêmica agressiva (choque distributivo + hemorrágico)
7. ATB profilático: Cefazolina 2g EV
8. Se falha: redução sob anestesia geral OU laparotomia (Huntington)
9. Monitorização contínua
10. Reserva de sangue (2-4 CH)`,
    warnings: "NÃO tentar retirar a placenta antes de reduzir a inversão. Choque desproporcional à perda sanguínea visível (componente neurogênico).",
    guideline: "FEBRASGO / ACOG / RCOG",
  },
  {
    id: "rx-gin-candidíase-complicada",
    title: "Candidíase Vulvovaginal Complicada / Recorrente",
    type: "Ginecologia",
    prescription: `1. Indução:
   - Fluconazol 150mg VO dias 1, 4 e 7 (3 doses)
2. Manutenção (se recorrente ≥4 episódios/ano):
   - Fluconazol 150mg VO 1x/semana por 6 meses
3. Tópico associado: Clotrimazol creme vaginal 1% por 7-14 noites
4. Se gestante: APENAS tópico (Clotrimazol ou Miconazol 7 noites)
5. Tratar parceiro SOMENTE se balanite
6. Orientações:
   - Roupa íntima de algodão
   - Evitar duchas vaginais
   - Evitar roupas apertadas
7. Se refratária a Fluconazol: cultura + antifungigrama
   - Considerar: Ácido Bórico 600mg intravaginal 1x/dia 14 noites`,
    notes: "Candida glabrata: resistente a Azólicos. Tratar com Ácido Bórico ou Nistatina tópica.",
    guideline: "FEBRASGO / CDC / IDSA",
  },
  {
    id: "rx-obst-tocolitico",
    title: "Tocólise — Trabalho de Parto Prematuro",
    type: "Obstetrícia",
    prescription: `INDICAÇÃO: contrações regulares + dilatação progressiva entre 24-34 semanas

1ª LINHA:
1. Nifedipino: 20mg VO ataque + 20mg VO após 30min se contrações persistem
   Manutenção: 20mg VO 6/6-8/8h (máx 72h)

2ª LINHA:
2. Atosibano: bolus 6,75mg EV em 1min → 18mg/h em 3h → 6mg/h por até 45h

CORTICOIDE PARA MATURIDADE PULMONAR:
3. Betametasona 12mg IM — 2 doses com intervalo de 24h OU
   Dexametasona 6mg IM — 4 doses com intervalo de 12h
   (Entre 24-34 semanas, dose de resgate se >14 dias da 1ª dose)

4. Neuroproteção fetal: Sulfato de Magnésio 4g EV em 30min + 1g/h (se <32 semanas)
5. NÃO usar tocolítico se: corioamnionite, sofrimento fetal, DPPNI, eclâmpsia
6. Cultura reto-vaginal para GBS (se não coletada)
7. Fibronectina fetal (se disponível) — VPN alto
8. Medida de colo por USG TV (<25mm = risco)`,
    notes: "Tocólise ganha 48h para corticoide e transferência. Não prolongar além de 48h. Nifedipino: evitar se hipotensão ou cardiopatia.",
    warnings: "MgSO4 como tocolítico: não usar >48h (risco de desmineralização óssea fetal). NÃO usar Indometacina >32 semanas (fechamento do ducto arterioso).",
    guideline: "FEBRASGO / ACOG / RCOG / NICE",
  },
  {
    id: "rx-obst-cerclagem-emergencia",
    title: "Insuficiência Istmocervical / Cerclagem de Emergência",
    type: "Obstetrícia",
    prescription: `1. Repouso em Trendelenburg
2. Indometacina 100mg VR ataque + 25mg VO 6/6h por 48h (tocolítico + anti-inflamatório)
3. ATB: Azitromicina 1g VO dose única + Amoxicilina 500mg VO 8/8h 7 dias
4. Cultura cervical
5. Cerclagem de emergência (McDonald) se:
   - IG entre 14-24 semanas
   - Dilatação cervical + membranas visíveis
   - Sem corioamnionite, sem trabalho de parto ativo
6. Progesterona 200mg vaginal/dia (manutenção pós-cerclagem)
7. Repouso relativo
8. USG seriada (comprimento cervical + viabilidade fetal)
9. Corticoide: Betametasona 12mg IM x 2 doses (se 24-34 semanas)
10. Retirada da cerclagem: 36-37 semanas`,
    notes: "Cerclagem profilática (história): oferecida se ≥3 perdas no 2° trimestre ou colo <25mm <24 semanas + história prévia.",
    guideline: "FEBRASGO / ACOG / RCOG",
  },
  {
    id: "rx-obs-diabetes-gestacional",
    title: "Diabetes Gestacional — Manejo",
    type: "Obstetrícia",
    prescription: `DIAGNÓSTICO (TOTG 75g entre 24-28 semanas):
- Jejum ≥92 / 1h ≥180 / 2h ≥153 (1 valor alterado = DG)

TRATAMENTO:
1. Dieta fracionada (6 refeições): 30-35kcal/kg/dia
   - 40-50% carboidratos complexos, 20% proteínas, 30-40% gorduras
2. Exercício físico moderado: 30min/dia (caminhada, natação)
3. Automonitorização glicêmica: 4-7x/dia (jejum + pós-prandiais)
   Alvos: jejum <95 / 1h pós <140 / 2h pós <120
4. Se dieta insuficiente após 2 semanas:
   - Insulina NPH: 0,5UI/kg/dia (ajustar conforme perfil)
   - Insulina Regular pré-prandial se pós-prandiais elevados
5. Metformina 500mg 12/12h (se recusa/indisponibilidade de insulina — off-label)
6. USG mensal com perfil biofísico fetal
7. Parto: 39 semanas (DG com dieta) / 38-39 sem (DG com insulina)
8. Pós-parto: suspender insulina + TOTG 75g em 6-12 semanas`,
    notes: "DG aumenta risco de macrossomia, distocia de ombro, hipoglicemia neonatal, pré-eclâmpsia. 50% das mulheres com DG desenvolverão DM2 em 10 anos.",
    warnings: "NÃO usar antidiabéticos orais como 1ª linha (Glibenclamida: maior risco neonatal). Insulina é o tratamento padrão.",
    guideline: "FEBRASGO / SBD / ADA / IADPSG",
  },
  {
    id: "rx-obs-sifilis-gestacao",
    title: "Sífilis na Gestação — Tratamento",
    type: "Obstetrícia",
    prescription: `SÍFILIS PRIMÁRIA / SECUNDÁRIA / LATENTE RECENTE (<1 ano):
1. Penicilina Benzatina 2.400.000 UI IM dose única

SÍFILIS LATENTE TARDIA / INDETERMINADA / TERCIÁRIA:
2. Penicilina Benzatina 2.400.000 UI IM 1x/semana por 3 semanas

ALERGIA À PENICILINA:
3. DESSENSIBILIZAÇÃO obrigatória + Penicilina (gestante NÃO pode usar Doxiciclina)

MONITORIZAÇÃO:
4. VDRL mensal durante gestação
5. VDRL no parto (sangue materno + cordão umbilical)
6. Tratamento adequado: ≥30 dias antes do parto + queda ≥2 diluições em 3 meses
7. Parceiro: tratar simultaneamente (Penicilina Benzatina)
8. Notificação compulsória (sífilis gestacional + sífilis congênita)
9. Se tratamento inadequado: RN = investigação completa (VDRL, hemograma, líquor, RX ossos longos)`,
    notes: "Sífilis congênita é EVITÁVEL com tratamento materno adequado. Brasil: alta prevalência — rastrear em TODA consulta de pré-natal.",
    warnings: "Reação de Jarisch-Herxheimer: febre, mialgia, contrações nas primeiras 24h pós-tratamento. Monitorizar BCF. Não atrasar tratamento por medo da reação.",
    guideline: "MS / FEBRASGO / CDC / OMS",
  },
  {
    id: "rx-obst-colestase-intra-hepatica",
    title: "Colestase Intra-Hepática da Gestação",
    type: "Obstetrícia",
    prescription: `1. Ácido Ursodesoxicólico (UDCA) 300mg VO 8/8h (dose total: 10-15mg/kg/dia)
2. Dexametasona 12mg IM (maturação pulmonar se <34 semanas)
3. Monitorizar: ácidos biliares séricos semanais, função hepática, coagulograma
4. CTG (cardiotocografia) 2x/semana a partir do diagnóstico
5. Anti-histamínico para prurido: Difenidramina 25-50mg VO 6/6h (seguro na gestação)
6. Colestiramina 4g VO 2-3x/dia (se UDCA insuficiente)
7. Vitamina K 10mg VO/dia (se coagulopatia)
8. Programar parto com 36-37 semanas (se ácidos biliares ≥40) ou 37-38 semanas
9. Resolução: sintomas desaparecem em 48h pós-parto`,
    notes: "Ácidos biliares ≥40mcmol/L: risco aumentado de óbito fetal súbito (antecipar parto). Prurido palmo-plantar de predomínio noturno: sintoma clássico. É diagnóstico de exclusão.",
    warnings: "Risco de morte fetal intraútero — monitorização fetal rigorosa. Colestiramina pode reduzir absorção de vitaminas lipossolúveis (K, D, A, E).",
    guideline: "FEBRASGO / RCOG / ACOG / SMFM",
  },
  {
    id: "rx-obst-infeccao-puerperal",
    title: "Infecção Puerperal / Endometrite",
    type: "Obstetrícia",
    prescription: `1. Internação + hemograma, PCR, hemocultura
2. Clindamicina 900mg EV 8/8h + Gentamicina 5mg/kg EV 1x/dia (esquema clássico)
3. OU Ampicilina-Sulbactam 3g EV 6/6h
4. Se pós-cesárea grave: adicionar Ampicilina 2g EV 6/6h (cobertura enterococo)
5. Ocitocina 10UI EV se subinvolução uterina
6. SF 0,9% 1000mL EV
7. Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h
8. USG pélvica: avaliar restos ovulares, abscesso, coleção
9. Curetagem se restos placentários
10. Manter ATB EV até 48h afebril → alta com Amoxicilina-Clavulanato VO`,
    notes: "Endometrite: principal infecção puerperal. Fatores de risco: cesárea (5-10x mais), RPM prolongada, trabalho de parto prolongado, múltiplos toques.",
    guideline: "FEBRASGO / ACOG / WHO",
  },
  {
    id: "rx-obst-itu-gestacional",
    title: "ITU na Gestação — Bacteriúria a Pielonefrite",
    type: "Obstetrícia",
    prescription: `Bacteriúria Assintomática / Cistite:
1. Cefalexina 500mg VO 6/6h por 7 dias (1ª escolha — categoria B)
2. OU Nitrofurantoína 100mg VO 6/6h por 7 dias (evitar no 3º tri perto do parto)
3. OU Amoxicilina 500mg VO 8/8h por 7 dias
4. Urocultura de controle 1-2 semanas após tratamento

Pielonefrite na Gestação (INTERNAÇÃO OBRIGATÓRIA):
5. Ceftriaxona 1g EV 12/12h por 10-14 dias
6. SF 0,9% 1000mL EV (hidratação)
7. Dipirona 1g EV 6/6h se febre
8. Monitorização fetal (CTG)
9. Hemograma, PCR, creatinina, urocultura + antibiograma
10. Transição VO quando afebril 48h → Cefalexina 500mg VO 6/6h até completar 14 dias`,
    notes: "Bacteriúria assintomática DEVE ser tratada na gestação (30% evoluem para pielonefrite se não tratada). Urocultura no 1º trimestre para todas.",
    guideline: "FEBRASGO / MS / ACOG / IDSA",
  },
  {
    id: "rx-obst-diabetes-gestacional",
    title: "Diabetes Gestacional — Manejo",
    type: "Prescrição Obstétrica",
    prescription: `Medidas não farmacológicas (2 semanas):
1. Dieta fracionada (5-6 refeições/dia), baixo índice glicêmico
2. Exercício físico: 30 min/dia de caminhada (se não contraindicado)
3. Glicemia capilar: jejum + 1-2h pós-prandial (4-7 medidas/dia)

Alvos glicêmicos:
Jejum: <95mg/dL
1h pós-prandial: <140mg/dL
2h pós-prandial: <120mg/dL

Se metas não atingidas (2 semanas de dieta):
4. Insulina NPH: iniciar 0,2UI/kg/dia SC (dividido 2-3x/dia)
5. Insulina Regular: pré-prandial se pós-prandial elevada
6. Metformina 500mg VO 12/12h (alternativa — categoria B, mas controverso)

Monitorização:
7. USG mensal (crescimento fetal, ILA)
8. CTG semanal a partir de 32-34 semanas
9. Parto: indução com 39-40 semanas (ou 37-39 se insulina)
10. Pós-parto: suspender insulina → TOTG 75g em 6-12 semanas`,
    guideline: "FEBRASGO / SBD / ADA / ACOG",
  },
  {
    id: "rx-obst-tpe",
    title: "Trabalho de Parto Prematuro — Tocólise",
    type: "Prescrição Obstétrica",
    prescription: `Critérios: 24-34 semanas + contrações regulares + dilatação <4cm

Tocolíticos:
1. Nifedipino (1ª escolha): 20mg VO → 10mg VO a cada 20min (máx 40mg na 1ª hora)
   Manutenção: 20mg VO 6/6-8/8h por 48h
2. OU Atosiban (antagonista de ocitocina): 6,75mg EV bolus → 18mg/h por 3h → 6mg/h por 45h

NÃO usar:
3. Indometacina >32 semanas (fechamento ducto arterioso)
4. Nifedipino + MgSO4 juntos (hipotensão grave)

Corticoide para maturação pulmonar fetal (24-34 semanas):
5. Betametasona 12mg IM a cada 24h — 2 doses (total 24mg)
6. OU Dexametasona 6mg IM a cada 12h — 4 doses (total 24mg)

Neuroproteção fetal (<32 semanas):
7. MgSO4 4g EV em 30min → 1g/h por 12-24h (ou até o parto)

8. ATB se RPMO: Ampicilina 2g EV 6/6h + Azitromicina 1g VO dose única`,
    guideline: "FEBRASGO / MS / ACOG / RCOG",
  },
  {
    id: "rx-obst-dheg-hellp",
    title: "Síndrome HELLP",
    type: "Prescrição Obstétrica de Emergência",
    prescription: `1. Sulfato de Magnésio (Zuspan): 4g EV bolus → 1-2g/h EV em BIC
2. Anti-hipertensivo: Hidralazina 5mg EV 20/20min (máx 20mg) OU Nifedipino 10mg VO
3. Dexametasona 10mg EV 12/12h (2-4 doses — melhora plaquetas)
4. Reservar: CH + PFC + plaquetas (se <50.000 ou pré-cesárea)
5. Exames seriados: hemograma, plaquetas, LDH, AST/ALT, bilirrubinas, creatinina, coagulograma
6. Monitorização fetal contínua (CTG)
7. PARTO: resolução da gestação assim que estabilizada
   ≥34 semanas: parto imediato
   <34 semanas: corticoide + parto em 24-48h (se possível)
8. Transfusão de plaquetas: apenas se <20.000 ou pré-cesárea com <50.000
9. UTI materna pós-parto (monitorização 48-72h — pico de complicações)`,
    warnings: "HELLP: Hemólise + Elevated Liver enzymes + Low Platelets. Risco: rotura hepática, CIVD, descolamento de placenta, IRA. Mortalidade materna: 1-3%.",
    guideline: "FEBRASGO / ACOG / ISSHP",
  },
  {
    id: "rx-obst-embolia-liquido-amniotico",
    title: "Embolia por Líquido Amniótico",
    type: "Prescrição Obstétrica de Emergência",
    prescription: `1. IOT + VM imediata (se parada respiratória)
2. RCP se PCR (decúbito lateral esquerdo ou deslocamento uterino manual)
3. Cesariana perimortem se >4min de PCR sem resposta (4 minutos regra)
4. SF 0,9% + CH + PFC + plaquetas (CIVD frequente)
5. Noradrenalina 0,1-2mcg/kg/min se choque
6. Dobutamina se disfunção de VD (ecocardiograma beira-leito)
7. Ácido tranexâmico 1g EV
8. Ocitocina 20UI em SF 500mL EV (hemorragia uterina pós-parto)
9. UTI materna
10. Tratar CIVD agressivamente: manter fibrinogênio >1,5g/L, plaquetas >50.000`,
    warnings: "Mortalidade: 20-60%. Apresentação: colapso cardiovascular súbito + hipóxia + CIVD durante/após parto. Diagnóstico de EXCLUSÃO. Suporte é o único tratamento.",
    guideline: "FEBRASGO / ACOG / RCOG / SMFM",
  },
];
