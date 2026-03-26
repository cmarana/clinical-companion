import { PrescriptionItem } from "./types";

export const bySymptomItems: PrescriptionItem[] = [
  {
    id: "rx-sint-dor",
    title: "Dor Aguda",
    type: "Prescrição Sintomática",
    prescription: `Leve (EVA 1-3):
1. Dipirona 1g EV/VO 6/6h
2. Paracetamol 750mg VO 6/6h

Moderada (EVA 4-6):
3. Cetoprofeno 100mg EV 12/12h
4. Tramadol 50-100mg EV 8/8h
5. Metoclopramida 10mg EV se náusea

Intensa (EVA 7-10):
6. Morfina 2-4mg EV lento (titular a cada 5 min)
7. OU Fentanil 50-100mcg EV
8. Dipirona 1g EV 6/6h (adjuvante)
9. Ondansetrona 4mg EV 8/8h`,
    notes: "Sempre usar escala EVA. Multimodal é melhor que monoterapia.",
    guideline: "SBA",
  },
  {
    id: "rx-sint-febre",
    title: "Febre",
    type: "Prescrição Sintomática",
    prescription: `Adulto:
1. Dipirona 1g EV 6/6h (1ª escolha no Brasil)
2. OU Paracetamol 750mg VO 6/6h
3. Medidas físicas: compressas mornas
4. Hidratação EV/VO
5. Investigar foco infeccioso

Pediátrico:
6. Dipirona 15mg/kg VO/EV 6/6h
7. OU Paracetamol 10-15mg/kg VO 6/6h
8. OU Ibuprofeno 5-10mg/kg VO 8/8h (>6 meses)`,
    warnings: "NÃO usar AAS em crianças. Febre em <3 meses: SEMPRE investigar.",
    guideline: "MS / SBP",
  },
  {
    id: "rx-sint-nausea",
    title: "Náusea / Vômito",
    type: "Prescrição Sintomática",
    prescription: `1. Ondansetrona 4mg EV 8/8h (1ª escolha — menor sedação)
2. OU Metoclopramida 10mg EV 8/8h
3. OU Dimenidrinato 50mg EV 8/8h
4. SF 0,9% 500-1000mL EV (se desidratação)
5. Omeprazol 40mg EV 1x/dia (se origem gástrica)
6. Dieta líquida → branda conforme tolerância
7. Se gestante: Dimenidrinato 50mg EV (categoria B)`,
    notes: "Metoclopramida: risco de reação extrapiramidal. Reverter com Biperideno 2mg EV.",
    guideline: "SBG",
  },
  {
    id: "rx-sint-dispneia",
    title: "Dispneia",
    type: "Prescrição Sintomática",
    prescription: `Avaliação imediata:
1. SpO2, FR, PA, FC, temperatura
2. O2 suplementar se SpO2 <94% (88-92% se DPOC)
3. Gasometria arterial

Tratamento conforme causa:
Broncoespasmo:
4. Salbutamol 10 gotas NBZ + SF 3mL
5. Ipratrópio 20-40 gotas na mesma NBZ
6. Corticóide EV

EAP:
7. Furosemida 40-80mg EV + Nitroglicerina + VNI

TEP:
8. Heparina EV + AngioTC

Pneumonia:
9. ATB + O2 + suporte`,
    notes: "Dispneia aguda + dor torácica: descartar IAM, TEP, pneumotórax.",
  },
  {
    id: "rx-sint-agitacao",
    title: "Agitação / Delirium",
    type: "Prescrição Sintomática",
    prescription: `1. Excluir: hipoglicemia, hipóxia, dor, retenção urinária, drogas
2. Haloperidol 5mg IM (1ª escolha)
3. Midazolam 5mg IM (se agitação intensa)
4. OU Haloperidol 5mg + Prometazina 50mg IM
5. Monitorar nível de consciência, PA, SpO2
6. Contenção mecânica apenas se risco iminente
7. Após estabilização: investigar causa orgânica`,
    warnings: "Haloperidol EV: monitorar QTc. NÃO usar BZD isolado em idosos com delirium.",
    guideline: "ABP / AMIB",
  },
  {
    id: "rx-sint-insonia",
    title: "Insônia — Paciente Internado",
    type: "Prescrição Sintomática",
    prescription: `1. Medidas não farmacológicas primeiro: reduzir ruído, luz, horários de intervenção
2. Zolpidem 5-10mg VO à noite (adulto)
3. OU Prometazina 25mg VO à noite
4. OU Difenidramina 25-50mg VO à noite
5. Idoso: Trazodona 25-50mg VO à noite (mais seguro)
6. NÃO usar BZD de rotina em idosos
7. Avaliar dor, ansiedade, delirium como causa`,
    warnings: "BZD em idosos: risco de queda, delirium, depressão respiratória.",
    guideline: "AMIB / SBA",
  },
  {
    id: "rx-sint-tosse",
    title: "Tosse",
    type: "Prescrição Sintomática",
    prescription: `Tosse seca:
1. Dextrometorfano 15-30mg VO 6/6h
2. OU Codeína 10-20mg VO 6/6h (adulto, se intensa)
3. Mel + limão (adjuvante — exceto <1 ano)

Tosse produtiva:
4. NÃO suprimir — facilitar expectoração
5. Ambroxol 30mg VO 8/8h
6. OU N-acetilcisteína 600mg VO 1x/dia
7. Nebulização com SF 0,9% 3-5mL
8. Hidratação oral abundante

Investigar causa se >3 semanas:
9. RX tórax, espirometria, pesquisa BAAR`,
    notes: "Codeína: NÃO usar em <12 anos. Tosse crônica: pensar em refluxo, gotejamento nasal, asma.",
  },
  {
    id: "rx-sint-diarreia",
    title: "Diarreia",
    type: "Prescrição Sintomática",
    prescription: `1. Hidratação oral (SRO) — 1ª medida
2. SF 0,9% EV se desidratação moderada/grave
3. Ondansetrona 4mg EV se vômitos associados
4. Racecadotrila 100mg VO 8/8h (adulto)
5. Probiótico: Saccharomyces boulardii 200mg 12/12h
6. Dieta: evitar lactose, gordura por 3-5 dias
7. NÃO usar Loperamida se: febre, sangue, disenteria`,
    warnings: "Diarreia + febre + sangue = disenteria. Considerar ATB (Ciprofloxacino).",
    guideline: "OMS / SBG",
  },
  {
    id: "rx-sint-constipacao",
    title: "Constipação",
    type: "Prescrição Sintomática",
    prescription: `Medidas gerais:
1. Hidratação oral ≥2L/dia
2. Fibras na dieta

Laxantes:
3. Lactulose 15-30mL VO 12/12h (1ª escolha)
4. OU Polietilenoglicol (Muvinlax) 1 envelope VO 1-2x/dia
5. Bisacodil 5-10mg VO à noite (se necessário)
6. Óleo mineral 15-30mL VO 1x/dia (curto prazo)
7. Fleet enema retal se impactação

Investigar se >4 semanas:
8. Colonoscopia (se >50 anos ou sinais de alarme)`,
    notes: "Em internados: avaliar opioides, anticolinérgicos, imobilização como causa.",
  },
  {
    id: "rx-sint-vertigem",
    title: "Vertigem",
    type: "Prescrição Sintomática",
    prescription: `1. Dimenidrinato 50mg EV 8/8h (1ª escolha)
2. OU Meclizina 25mg VO 8/8h
3. Ondansetrona 4mg EV se vômitos
4. SF 0,9% 500mL EV
5. Betaistina 24mg VO 12/12h (manutenção)
6. Manobra de Epley (se VPPB)
7. Investigar: Dix-Hallpike, nistagmo, déficit neurológico
8. Se sinais centrais (nistagmo vertical, ataxia): TC/RNM urgente`,
    notes: "VPPB: Manobra de Epley é o tratamento. Medicação é sintomática.",
    guideline: "SBO / ABN",
  },
  {
    id: "rx-sint-dor-toracica",
    title: "Dor Torácica",
    type: "Prescrição Sintomática",
    prescription: `Avaliação imediata:
1. ECG 12 derivações em até 10 min
2. Troponina + CK-MB
3. RX tórax
4. Monitorização contínua
5. AAS 200mg VO (mastigar) se suspeita de SCA
6. Nitroglicerina SL (se PA >100 e sem CI)
7. Morfina 2-4mg EV se dor refratária
8. O2 se SpO2 <94%
9. Diagnósticos diferenciais: IAM, TEP, dissecção, pneumotórax, pericardite`,
    warnings: "Dor torácica + instabilidade = sala vermelha. NÃO dar alta sem excluir SCA.",
  },
  {
    id: "rx-sint-soluço",
    title: "Soluço Persistente",
    type: "Prescrição Sintomática",
    prescription: `1. Manobras vagais: Valsalva, água gelada, susto
2. Metoclopramida 10mg EV 8/8h
3. OU Clorpromazina 25mg EV/IM (se refratário)
4. OU Baclofeno 5-10mg VO 8/8h
5. Gabapentina 300mg VO 8/8h (se crônico)
6. Omeprazol 40mg EV (se origem gástrica)
7. Investigar causa se >48h: RX tórax, TC crânio, função renal`,
    notes: "Soluço >48h = investigar SNC, diafragma, mediastino, metabólico.",
  },
  {
    id: "rx-sint-prurido",
    title: "Prurido",
    type: "Prescrição Sintomática",
    prescription: `Agudo/alérgico:
1. Difenidramina 50mg EV (ou Hidroxizina 25mg VO)
2. Dexametasona 4mg EV (se componente inflamatório)
3. Compressas frias
4. Loratadina 10mg VO 1x/dia (manutenção)

Por opioides:
5. Naloxona em dose baixa (0,25-0,5mcg/kg/h)
6. OU Ondansetrona 4mg EV

Urêmico/colestático:
7. Colestiramina 4g VO (colestase)
8. Gabapentina 100-300mg (urêmico)`,
  },
  {
    id: "rx-sint-edema",
    title: "Edema / Retenção Hídrica",
    type: "Prescrição Sintomática",
    prescription: `1. Avaliar causa: IC, DRC, síndrome nefrótica, hepática, medicamentosa
2. Restrição hídrica 800-1000mL/dia
3. Restrição de sódio (<2g/dia)
4. Furosemida 40mg EV (ajustar conforme resposta)
5. OU Furosemida 40mg VO 1x/dia (ambulatorial)
6. Espironolactona 25mg VO 1x/dia (se IC ou ascite)
7. Controle de peso diário
8. Balanço hídrico
9. Eletrólitos: Na+, K+, Mg2+, creatinina
10. Albumina sérica (hipoalbuminemia = edema refratário)`,
    notes: "Edema + dispneia = considerar IC ou síndrome nefrótica. ECO + BNP.",
  },
  {
    id: "rx-sint-lombalgia",
    title: "Lombalgia Aguda",
    type: "Prescrição Sintomática",
    prescription: `1. Dipirona 1g EV 6/6h
2. Cetoprofeno 100mg EV 12/12h (se não CI)
3. Ciclobenzaprina 5mg VO 8/8h (relaxante muscular)
4. Tramadol 50mg EV 8/8h (se EVA ≥6)
5. Compressas mornas
6. NÃO prescrever repouso absoluto — atividade tolerável
7. RX lombar: apenas se red flags
8. Red flags: déficit motor, alteração esfincteriana (cauda equina), febre, perda de peso, trauma, >50 anos`,
    warnings: "Síndrome de cauda equina (retenção/incontinência + anestesia perineal + fraqueza MMII) = EMERGÊNCIA cirúrgica.",
  },
  {
    id: "rx-sint-retencao-urinaria",
    title: "Retenção Urinária Aguda",
    type: "Prescrição Sintomática",
    prescription: `1. SVD (Sonda Vesical de Demora) — Foley 16-18Fr
2. Esvaziar gradualmente (máx 500mL por vez)
3. Monitorar diurese pós-desobstrução (pode haver poliúria)
4. Tamsulosina 0,4mg VO 1x/dia
5. EAS + urocultura
6. Creatinina (IRA pós-renal?)
7. USG vias urinárias
8. Encaminhar urologia`,
    notes: "Causas: HPB (mais comum em idosos), medicamentos (anticolinérgicos, opioides), cálculos, tumor.",
  },
  {
    id: "rx-sint-hematuria",
    title: "Hematúria",
    type: "Prescrição Sintomática",
    prescription: `Macroscópica com coágulos:
1. SVD 3 vias (Foley 22-24Fr) — irrigação vesical contínua com SF 0,9%
2. Hemograma, coagulograma, função renal
3. USG vias urinárias
4. EAS + urocultura

Macroscópica sem coágulos:
5. EAS + urocultura
6. Hidratação oral/EV
7. USG vias urinárias
8. Encaminhar urologia ambulatorial

Investigação:
9. >40 anos + hematúria = excluir neoplasia (cistoscopia + uroTC)
10. Jovem: pensar em glomerulonefrite, litíase, ITU`,
    warnings: "Hematúria em >40 anos = descartar neoplasia urológica até prova contrária.",
    guideline: "SBU / AUA",
  },
  {
    id: "rx-sint-cefaleia-tensional",
    title: "Cefaleia Tensional",
    type: "Prescrição Sintomática",
    prescription: `Aguda:
1. Dipirona 1g VO/EV dose única
2. OU Paracetamol 750mg VO
3. OU Ibuprofeno 400mg VO
4. Associar relaxante muscular: Ciclobenzaprina 5mg VO (se tensão muscular)

Moderada/recorrente:
5. Cetoprofeno 100mg EV dose única
6. Clorpromazina 0,1mg/kg EV diluído em 500mL SF (infundir lento) — refratária

Profilaxia (se >15 dias/mês):
7. Amitriptilina 10-25mg VO à noite
8. OU Nortriptilina 10-25mg VO à noite
9. Orientações: higiene do sono, redução de estresse, postura`,
    notes: "Cefaleia por uso excessivo de analgésicos: se >15 dias/mês de medicação. Suspender gradualmente.",
    guideline: "SBCe / IHS",
  },
  {
    id: "rx-sint-oliguria",
    title: "Oligúria / Anúria",
    type: "Prescrição Sintomática",
    prescription: `1. Excluir globo vesical (USG point-of-care ou cateterismo vesical de alívio)
2. SF 0,9% 500mL EV em 30 min (prova de volume — se não hipervolêmico)
3. Reavaliar diurese após 1h:
   - Se responsivo: manter hidratação
   - Se não responsivo: Furosemida 40-80mg EV (teste diurético)
4. Se mantém oligúria: avaliar IRA (pré-renal vs renal vs pós-renal)
5. Creatinina, ureia, K+, Na+, gasometria
6. EAS, Na urinário (FENa <1% = pré-renal)
7. USG renal (obstrução?)
8. Suspender drogas nefrotóxicas (AINEs, aminoglicosídeos, contraste)
9. Ajustar doses conforme TFG`,
    warnings: "K+ >6,0 com oligúria = emergência. Tratar hipercalemia e considerar diálise.",
    guideline: "KDIGO / SBN",
  },
  {
    id: "rx-sint-ictericia",
    title: "Icterícia no Adulto — Investigação",
    type: "Prescrição Sintomática / Investigação",
    prescription: `1. Bilirrubinas (total, direta, indireta)
2. TGO, TGP, FA, GGT
3. Hemograma (anemia hemolítica?)
4. Coagulograma (INR — função hepática)
5. Albumina sérica
6. Reticulócitos + LDH + haptoglobina (se suspeita hemolítica)
7. Sorologias hepatites: HBsAg, anti-HBs, anti-HBc, anti-HCV, anti-HAV IgM
8. USG abdome (vias biliares dilatadas = obstrutiva)
9. Se obstrutiva: ColangioRM ou CPRE
10. Se hepatocelular: avaliar hepatite, drogas, álcool
11. Se hemolítica: Coombs direto, esfregaço

TRATAMENTO SINTOMÁTICO:
12. Colestiramina 4g VO 8/8h (prurido)
13. Hidratação adequada
14. Vitamina K 10mg EV se INR alargado`,
    notes: "BD elevada = causa hepática ou obstrutiva. BI elevada = hemólise ou Gilbert.",
  },
  {
    id: "rx-sint-crise-asmatica",
    title: "Crise Asmática — Manejo no PS",
    type: "Prescrição Sintomática",
    prescription: `Leve/Moderada:
1. Salbutamol spray 4-8 puffs com espaçador a cada 20 min (3x)
2. OU NBZ: Fenoterol 10gts + Ipratrópio 20gts + SF 3mL 20/20 min (3x)
3. Prednisona 40-60mg VO dose única

Grave (fala entrecortada, FR >30, SpO2 <90%):
4. NBZ contínua: Fenoterol 20gts + Ipratrópio 40gts 20/20 min
5. O2 para SpO2 ≥93%
6. Hidrocortisona 200mg EV OU Metilprednisolona 60mg EV
7. MgSO4 2g EV em 20 min (se refratária)
8. Gasometria arterial (PaCO2 normal ou elevada = sinal de gravidade)
9. Se deterioração: VNI ou IOT (ketamina como indutor)

Alta:
10. Prednisona 40mg VO 5-7 dias
11. Manter broncodilatador inalatório
12. Encaminhar pneumologia`,
    guideline: "SBPT / GINA 2024",
  },
  {
    id: "rx-sint-artralgia",
    title: "Artralgia / Dor Articular Aguda",
    type: "Prescrição Sintomática",
    prescription: `Sem sinais de artrite séptica:
1. Cetoprofeno 100mg EV/VO 12/12h
2. Dipirona 1g EV 6/6h (adjuvante)
3. Compressas frias 20min 4/4h
4. Repouso articular relativo

Se artrite (edema, calor, limitação):
5. Artrocentese se monoartrite aguda (descartar séptica/gota)
6. Líquido sinovial: gram, cultura, cristais, celularidade
7. Se séptica: ATB + drenagem (emergência ortopédica)
8. Se gota: Colchicina + AINE (ver protocolo)

Investigação:
9. Hemograma, PCR/VHS, ácido úrico
10. FAN, FR se poliarticular
11. RX da articulação afetada`,
    notes: "Monoartrite aguda = excluir artrite séptica até prova contrária (artrocentese!).",
  },
  {
    id: "rx-sint-dor-torax-nao-cardiaca",
    title: "Dor Torácica Não Cardíaca",
    type: "Prescrição Sintomática",
    prescription: `Após exclusão de SCA (ECG + troponina normais):

Musculoesquelética:
1. Cetoprofeno 100mg VO 12/12h por 5 dias
2. Dipirona 1g VO 6/6h
3. Compressas quentes
4. Orientar benignidade

DRGE / Esofagiana:
5. Omeprazol 40mg VO 1x/dia em jejum (teste terapêutico)
6. Domperidona 10mg VO 30min antes das refeições
7. Cabeceira elevada à noite

Ansiedade / Pânico:
8. Acolhimento + orientação
9. Clonazepam 0,25-0,5mg SL se crise aguda
10. Encaminhar psiquiatria/psicologia

11. Orientar sinais de alarme para retorno: dor com esforço, dispneia, síncope`,
    notes: "Dor torácica atípica em jovens: 80-90% é musculoesquelética ou ansiedade. Sempre excluir SCA.",
  },
  {
    id: "rx-sint-globo-vesical",
    title: "Globo Vesical / Retenção Urinária Aguda",
    type: "Prescrição Sintomática",
    prescription: `1. Cateterismo vesical de alívio (sonda Foley 14-18Fr)
   Se dificuldade: tentar sonda de maior calibre ou Coude
2. Medir volume residual (>500mL = retenção significativa)
3. Se >1000mL: clampear após 500mL e liberar mais 500mL a cada 30 min
   (prevenir hematúria ex-vacuo)
4. Manter SVD em sistema fechado
5. Monitorar diurese pós-desobstrução (poliúria pós-obstrutiva)
6. SF 0,9% 500mL EV (repor perdas se poliúria)
7. Tamsulosina 0,4mg VO 1x/dia (relaxa colo vesical)
8. Creatinina, ureia, K+ (IRA pós-renal?)
9. EAS + urocultura
10. USG renal e vias urinárias
11. Encaminhar urologia`,
    warnings: "Poliúria pós-obstrutiva pode causar desidratação grave. Monitorar e repor.",
    guideline: "SBU",
  },
  {
    id: "rx-sint-hipotensao",
    title: "Hipotensão Sintomática",
    type: "Prescrição Sintomática",
    prescription: `1. Posição Trendelenburg (pernas elevadas)
2. SF 0,9% 500-1000mL EV rápido (prova de volume)
3. Reavaliar PA + FC após 500mL
4. Se responsivo: manter hidratação + investigar causa
5. Se NÃO responsivo: considerar vasopressor (Noradrenalina)

Investigar causa (4 Hs):
6. Hipovolemia (sangramento, desidratação)
7. Hipoadrenalismo (Hidrocortisona 100mg EV se suspeita)
8. Hipotireoidismo
9. Hipotermia

10. Hemograma, lactato, gasometria, culturas se febre
11. ECG (bradiarritmia? IAM inferior?)
12. RX tórax (pneumotórax? EAP?)
13. USG POCUS (tamponamento? hipovolemia? TEP?)`,
    notes: "POCUS à beira-leito: ferramenta essencial para hipotensão indiferenciada.",
  },
  {
    id: "rx-sint-hemoptise",
    title: "Hemoptise",
    type: "Prescrição Sintomática",
    prescription: `Leve (raias de sangue):
1. Repouso + decúbito lateral com lado afetado para baixo
2. Codeína 30mg VO 6/6h (antitussígeno)
3. RX tórax
4. Hemograma, coagulograma
5. Investigar: TB (BAAR), neoplasia, bronquiectasia

Moderada a grave:
6. O2 alto fluxo
7. 2 acessos calibrosos + tipagem
8. Ácido Tranexâmico 1g EV em 10 min
9. IOT se hemorragia maciça (>600mL/24h)
10. Broncoscopia URGENTE
11. AngioTC tórax`,
    warnings: "Hemoptise maciça: posicionar com lado sangrante para BAIXO. Via aérea é prioridade.",
  },
  {
    id: "rx-sint-disuria",
    title: "Disúria",
    type: "Prescrição Sintomática",
    prescription: `1. EAS + urocultura
2. Fenazopiridina 200mg VO 8/8h por 2-3 dias (alívio da dor vesical)
3. Analgesia: Dipirona 1g VO 6/6h
4. Hidratação oral abundante (≥2L/dia)
5. Se ITU confirmada: iniciar ATB (Nitrofurantoína ou Fosfomicina)
6. Se uretrite: avaliar DST (Ceftriaxona 500mg IM + Azitromicina 1g VO)
7. Se vaginite: exame ginecológico
8. Retorno se: febre, dor lombar, hematúria`,
    notes: "Fenazopiridina: aviso que urina fica laranja/vermelha. Máximo 2-3 dias.",
  },
  {
    id: "rx-sint-palpitacoes",
    title: "Palpitações",
    type: "Prescrição Sintomática",
    prescription: `1. ECG 12 derivações IMEDIATO
2. Monitorização contínua
3. PA, FC, SpO2

Se taquicardia sinusal:
4. Tratar causa base (febre, dor, ansiedade, desidratação)

Se TPSV:
5. Manobra vagal (Valsalva modificado, gelo na face)
6. Adenosina 6mg EV rápida → 12mg → 12mg

Se FA:
7. Controle de FC (Metoprolol ou Diltiazem)

Se estável sem arritmia:
8. TSH, hemograma, eletrólitos
9. Holter 24h ambulatorial se recorrente
10. Ansiolítico SN: Clonazepam 0,25mg SL`,
  },
  {
    id: "rx-sint-dor-pelvica",
    title: "Dor Pélvica Aguda",
    type: "Prescrição Sintomática",
    prescription: `1. Analgesia: Dipirona 1g EV + Cetoprofeno 100mg EV
2. Buscopan composto EV 6/6h
3. beta-HCG (excluir gravidez ectópica — PRIORIDADE)
4. USG pélvica transvaginal
5. EAS + urocultura
6. Hemograma, PCR

Se DIP: Ceftriaxona 500mg IM + Doxiciclina 100mg VO 12/12h + Metronidazol 500mg VO 12/12h
Se torção ovariana: USG Doppler urgente → cirurgia
Se gravidez ectópica: tipagem + cirurgia/MTX
Se cisto roto: observação + analgesia (cirurgia se instável)
Se endometriose: AINE + encaminhar ginecologia`,
    warnings: "TODA mulher em idade fértil com dor pélvica: beta-HCG antes de qualquer conduta.",
  },
  {
    id: "rx-sint-parestesias",
    title: "Parestesias / Dormência",
    type: "Prescrição Sintomática",
    prescription: `1. Exame neurológico completo (nível sensitivo, dermátomos, força)
2. Glicemia (hipoglicemia, diabetes)
3. Eletrólitos: Ca, K, Mg, Na
4. Se déficit focal agudo: protocolo AVC (TC crânio urgente)
5. Se bilateral + ascendente: considerar Guillain-Barré (reflexos, CVF)
6. Se perioral + mãos: pensar hipocalcemia (Chvostek, Trousseau)
7. Se território radicular: RNM coluna (hérnia, compressão)
8. Hemograma, B12, ácido fólico, TSH, HbA1c
9. ENMG ambulatorial se crônica
10. Gabapentina 300mg VO à noite se dor neuropática associada`,
  },
  {
    id: "rx-sint-epistaxe",
    title: "Epistaxe (Sangramento Nasal)",
    type: "Prescrição Sintomática",
    prescription: `Anterior (90% dos casos):
1. Sentar paciente, inclinar para frente
2. Comprimir asa do nariz por 10-15 min contínuos
3. Algodão com Adrenalina 1:10.000 ou Oximetazolina intranasal
4. Se persistir: tamponamento anterior com Merocel ou gaze rayon
5. Cauterização com nitrato de prata (se ponto visível)

Posterior:
6. Tamponamento posterior com sonda de Foley (cateter 14Fr, inflar com 10mL)
7. OU tampão posterior duplo (anterior + posterior)
8. Internação + monitorização (risco de obstrução VA)

Ambos:
9. PA (tratar crise hipertensiva se presente)
10. Hemograma, coagulograma, tipagem (se volumoso)
11. ATB profilático: Amoxicilina-Clavulanato (se tamponamento >24h)
12. ORL: avaliação se refratário`,
  },
  {
    id: "rx-sint-disfagia",
    title: "Disfagia Aguda",
    type: "Prescrição Sintomática",
    prescription: `1. Avaliar: odinofagia vs disfagia vs globus
2. Se corpo estranho (espinha, osso): RX cervical lateral + EDA urgente
3. Se bateria/objeto cortante: EDA de emergência (<2h)
4. Se impactação alimentar esofágica:
   Glucagon 1mg EV (relaxa EEI — pode resolver)
   EDA se não resolver em 30 min
5. Se suspeita de abscesso peritonsilar: TC cervical + drenagem + ATB
6. Se disfagia + sialorreia + estridor: pensar epiglotite (IOT + ATB)
7. Hidratação EV se não tolera VO
8. NÃO insistir em dieta VO se engasgos frequentes (risco aspiração)
9. Fonoaudiologia se disfagia neurológica
10. Hemograma, PCR, RX cervical perfil`,
    warnings: "Bateria-botão impactada no esôfago = EMERGÊNCIA (<2h). Corpo estranho pontiagudo = EDA urgente.",
  },
  {
    id: "rx-sint-odinofagia",
    title: "Odinofagia (Dor de Garganta)",
    type: "Prescrição Sintomática",
    prescription: `Viral (maioria):
1. Ibuprofeno 400mg VO 8/8h por 3-5 dias
2. Paracetamol 750mg VO 6/6h SN
3. Gargarejo com água morna + sal
4. Pastilhas/spray anestésico local (lidocaína)
5. Hidratação abundante

Faringoamigdalite estreptocócica (Centor ≥3):
6. Amoxicilina 500mg VO 8/8h por 10 dias (1ª escolha)
7. OU Penicilina Benzatina 1.200.000 UI IM dose única
8. Se alergia: Azitromicina 500mg VO 1x/dia por 5 dias

Abscesso peritonsilar:
9. Drenagem + ATB (Amoxicilina-Clavulanato + Clindamicina)
10. Internação se trismo grave

Epiglotite (adulto):
11. ATB + IOT eletiva em ambiente controlado`,
    notes: "Critérios de Centor: febre >38°C, exsudato tonsilar, adenopatia cervical anterior, ausência de tosse.",
  },
  {
    id: "rx-sint-cianose",
    title: "Cianose",
    type: "Prescrição Sintomática",
    prescription: `Central (lábios, língua — SpO2 baixa):
1. O2 100% alto fluxo imediato
2. Gasometria arterial STAT
3. Se não melhora com O2: pensar shunt (cardiopatia, TEP maciço)
4. Se metaemoglobinemia: Azul de metileno 1-2mg/kg EV em 5 min

Periférica (extremidades — SpO2 normal):
5. Aquecer extremidades
6. Avaliar: choque, vasculopatia, Raynaud

Investigação:
7. RX tórax, ECG, ecocardiograma
8. Hemograma (policitemia?)
9. MetaHb (se SpO2 baixa com PaO2 normal)
10. AngioTC se suspeita TEP
11. D-dímero se baixa probabilidade

Causas comuns:
Pneumonia grave, EAP, TEP, DPOC, cardiopatia cianótica, metaemoglobinemia`,
  },
  {
    id: "rx-sint-soluço-persistente",
    title: "Soluço Persistente (>48h)",
    type: "Prescrição Sintomática",
    prescription: `Manobras físicas:
1. Manobra de Valsalva
2. Estimulação faríngea (gelo, açúcar granulado sublingual)
3. Compressão do nervo frênico (pressão supraclavicular)

Farmacológico:
4. Metoclopramida 10mg EV 8/8h (1ª linha)
5. OU Clorpromazina 25-50mg EV lento (2ª linha — pode causar hipotensão)
6. OU Baclofeno 5mg VO 8/8h (aumentar gradualmente)
7. OU Gabapentina 300mg VO 8/8h
8. Omeprazol 40mg EV 1x/dia (DRGE pode ser causa)

Investigar causa:
9. RX tórax, ECG (IAM inferior pode causar soluço)
10. TC abdome se refratário (lesão diafragmática, abscesso subfrênico)
11. Endoscopia se DRGE
12. RNM crânio se suspeita central (AVC, esclerose múltipla)`,
    notes: "Soluço >48h é soluço persistente. >1 mês é intratável. Sempre investigar causa orgânica.",
  },
];
