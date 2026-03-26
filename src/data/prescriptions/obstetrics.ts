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
];
