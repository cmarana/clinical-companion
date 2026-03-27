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
  {
    id: "rx-sint-sincope",
    title: "Síncope",
    type: "Prescrição Sintomática",
    prescription: `1. ECG 12 derivações (arritmia, BAV, WPW, Brugada, QT longo)
2. PA deitado e em pé (hipotensão ortostática: queda ≥20 PAS ou ≥10 PAD)
3. Glicemia capilar
4. Monitorização contínua por 2-4h
5. Hemograma (anemia?), troponina, eletrólitos

Vasovagal (pródromo, fator desencadeante, jovem):
6. Hidratação oral, repouso, orientações (sentar/deitar ao sentir)
7. Alta com orientações

Cardiogênica (sem pródromo, durante esforço, cardiopata):
8. Internação + monitorização contínua
9. Ecocardiograma (estenose aórtica, HCM, disfunção VE)
10. Holter 24h / monitor de eventos
11. Avaliar indicação de marcapasso

Red flags: durante exercício, dor torácica, palpitação, história familiar de morte súbita, ECG anormal`,
    warnings: "Síncope durante exercício = SEMPRE investigar (morte súbita). Não dar alta sem ECG.",
  },
  {
    id: "rx-sint-convulsao-ps",
    title: "Convulsão no PS — Manejo Inicial",
    type: "Prescrição Sintomática",
    prescription: `Durante a crise:
1. Proteger via aérea (DL, aspirar secreções)
2. NÃO introduzir objetos na boca
3. O2 por máscara
4. Diazepam 10mg EV lento (ou Midazolam 10mg IM se sem acesso)
5. Repetir em 5 min se persistir
6. Glicemia capilar IMEDIATA → Glicose 50% se <70

Pós-ictal:
7. Monitorização (SpO2, PA, FC, Glasgow)
8. Glicemia, eletrólitos (Na, Ca, Mg), hemograma
9. Gasometria (acidose metabólica pós-ictal é comum)
10. TC crânio sem contraste (se: primeira crise, focal, TCE, HIV+, anticoagulado)
11. ECG (QT longo pode mimetizar convulsão)
12. Se primeira crise + exame normal + TC normal: encaminhar neurologia
13. Se epiléptico: verificar nível sérico do anticonvulsivante, aderência
14. Fenitoína 20mg/kg EV se necessário dose de ataque`,
    notes: "Primeira crise convulsiva em adulto: SEMPRE investigar causa (TC crânio + exames).",
  },
  {
    id: "rx-sint-confusao-mental",
    title: "Confusão Mental / Delirium no PS",
    type: "Prescrição Sintomática",
    prescription: `1. ABCDE — garantir via aérea se Glasgow baixo
2. Glicemia capilar IMEDIATA
3. Tiamina 100mg EV (ANTES da glicose se suspeita de etilismo)
4. Naloxona 0,4mg EV se suspeita opioide
5. Flumazenil 0,2mg EV se suspeita BZD (CI se epiléptico)

Investigação:
6. Gasometria, eletrólitos (Na, Ca, Mg), ureia, creatinina
7. Hemograma, PCR, EAS, toxicológico urinário
8. TSH, amônia, função hepática
9. TC crânio (se focal, TCE, anticoagulado, HIC)
10. ECG
11. Punção lombar se: febre + rigidez de nuca

Se agitação:
12. Haloperidol 5mg IM (ou EV com monitorização de QT)
13. NÃO usar benzodiazepínicos como 1ª linha no delirium (exceto abstinência alcoólica)
14. Mnemônico AEIOU-TIPS: Álcool, Epilepsia, Insulina, Opioide, Uremia, Trauma, Infecção, Psiquiátrico, Stroke`,
  },
  {
    id: "rx-sint-dor-flanco",
    title: "Dor em Flanco",
    type: "Prescrição Sintomática",
    prescription: `1. Analgesia IMEDIATA (não esperar diagnóstico):
   Cetoprofeno 100mg EV (1ª linha para cólica renal)
   + Dipirona 1g EV
   + Buscopan composto EV
2. Morfina 2-4mg EV se dor refratária (EVA >7)
3. SF 0,9% 500mL EV (NÃO hiper-hidratar na cólica aguda)

Investigação:
4. EAS (hematúria apoia litíase, mas ausência não exclui)
5. Creatinina (rim único? obstrução bilateral?)
6. TC abdome sem contraste (padrão-ouro para litíase)
7. OU USG de vias urinárias (se gestante ou indisponível TC)
8. Hemograma, PCR (pielonefrite? abscesso?)

Diagnósticos diferenciais:
9. Cólica renal (mais comum)
10. Pielonefrite (febre + Giordano positivo)
11. Aneurisma de aorta roto (>50 anos, PA assimétrica)
12. Dor musculoesquelética`,
    warnings: "Cólica renal + febre = pielonefrite ou cálculo infectado → ATB + USG urgente. Pode ser sepse urinária.",
  },
  {
    id: "rx-sint-hipercalemia",
    title: "Hipercalemia — Manejo Sintomático",
    type: "Prescrição por Sintoma",
    prescription: `Se K+ >6,5 ou alteração ECG (onda T apiculada, QRS alargado):
1. Gluconato de cálcio 10% 10mL EV em 2-3 min (estabiliza membrana — NÃO baixa K+)
2. Insulina regular 10UI + Glicose 50% 50mL (5 ampolas SG 50%) EV em 15-30 min
3. Salbutamol 10 gotas nebulização (adjuvante — baixa K+ 0,5-1mEq/L)
4. Bicarbonato de sódio 8,4% 50mL EV se acidose (pH <7,2)
5. Furosemida 40-80mg EV (aumenta excreção renal)
6. Resina de troca: Poliestirenossulfonato de cálcio (Sorcal) 30g VO ou VR
7. ECG contínuo
8. K+ a cada 1-2h até <5,5
9. Diálise de urgência se: K+ >7, refratário, sintomático`,
    warnings: "Gluconato de cálcio: efeito em 1-3 min, dura 30-60 min. NÃO misturar com bicarbonato na mesma via. Insulina sem glicose = hipoglicemia grave.",
    guideline: "KDIGO / SBN / AHA",
  },
  {
    id: "rx-sint-hiponatremia-aguda",
    title: "Hiponatremia Aguda Sintomática",
    type: "Prescrição por Sintoma",
    prescription: `Se Na+ <120 ou sintomas neurológicos (convulsão, rebaixamento):
1. NaCl 3% (salina hipertônica): 150mL EV em 20 min → repetir até 2x se necessário
   Alvo: elevar Na+ 4-6 mEq/L nas primeiras 6h
2. NÃO elevar >8 mEq/L em 24h (risco de mielinólise pontina)
3. Furosemida 20-40mg EV se SIADH
4. Restrição hídrica 800-1000mL/dia (SIADH)
5. Na+ sérico a cada 2-4h
6. Osmolaridade sérica e urinária
7. Se Na+ subir rápido demais: SG 5% EV + DDAVP 2mcg EV (freiar correção)

CRÔNICA (Na+ <130, assintomática):
8. Restrição hídrica
9. Investigar causa: SIADH, IC, cirrose, hipotireoidismo, insuf. adrenal
10. Correção NÃO >0,5 mEq/L/h`,
    warnings: "MIELINÓLISE PONTINA: complicação devastadora por correção rápida. Máximo 8mEq/L em 24h. Se ultrapassar: reverter com SG 5% + DDAVP.",
    guideline: "KDIGO / SBN / ESE",
  },
  {
    id: "rx-sint-broncoespasmo",
    title: "Broncoespasmo Agudo — Manejo no PS",
    type: "Prescrição por Sintoma",
    prescription: `1. Salbutamol spray 4-8 jatos com espaçador a cada 20 min (3x na 1ª hora)
2. OU Salbutamol nebulização: 10 gotas + SF 3mL a cada 20 min
3. Ipratrópio 40mcg (2 jatos) a cada 20 min
4. Prednisona 40-60mg VO dose única OU Hidrocortisona 200mg EV
5. O2 suplementar se SpO2 <94%
6. Se refratário: Sulfato de magnésio 2g EV em 20 min
7. Se falência: Adrenalina 0,3-0,5mg SC/IM
8. Se iminência de PCR: IOT + ventilação mecânica
9. Peak flow antes e após broncodilatador (se possível)
10. Monitorar SpO2, FR, sinais de exaustão respiratória`,
    guideline: "GINA / SBPT",
  },
  {
    id: "rx-sint-retencao-fecal",
    title: "Impactação Fecal / Fecaloma",
    type: "Prescrição no Pronto Socorro",
    prescription: `1. Desimpactação manual (luva + lidocaína gel) se fecaloma retal palpável
2. Fleet enema (fosfato de sódio) 130mL VR — pode repetir em 6h
3. OU Glicerina 12% enema 500mL VR
4. Óleo mineral 30mL VO 8/8h (amolecedor)
5. Lactulose 30mL VO 8/8h
6. Bisacodil 10mg VO à noite
7. Hidratação oral abundante
8. Dipirona 500mg EV se dor/desconforto
9. RX abdome (nível hidroaéreo, distensão)
10. Após resolução: orientar dieta rica em fibras, hidratação, atividade física
11. Se idoso acamado: considerar enema de Lactulose regular`,
    notes: "Fecaloma + dor abdominal intensa + distensão: excluir volvo e obstrução intestinal (RX/TC).",
    guideline: "SBG / AGA",
  },
  {
    id: "rx-sint-rash-cutaneo",
    title: "Rash Cutâneo Agudo no PS",
    type: "Por Sintoma",
    prescription: `1. Avaliar sinais de gravidade: descolamento epidérmico, Nikolsky+, mucosas
2. Se urticária simples:
   - Loratadina 10mg VO OU Cetirizina 10mg VO
   - Prednisona 40mg VO dose única
3. Se farmacodermia extensa:
   - Dexametasona 10mg EV
   - Difenidramina 50mg EV
   - SUSPENDER todos medicamentos suspeitos
4. Se SSJ/NET (descolamento >10%): ver protocolo específico
5. Se petéquias/púrpura: hemograma urgente (plaquetas)
6. Se vesículas em dermátomo: Herpes Zoster → Aciclovir
7. Documentar com fotos
8. Biópsia se dúvida diagnóstica`,
    notes: "Cronologia medicamentosa é CHAVE: ATB (7-14d), anticonvulsivantes (2-8 semanas), alopurinol (2-6 semanas).",
    warnings: "Sinal de Nikolsky positivo = EMERGÊNCIA dermatológica. Transferir para centro de queimados se NET.",
    guideline: "SBD / AAD / BAD",
  },
  {
    id: "rx-sint-hipotermia-ps",
    title: "Hipotermia no PS",
    type: "Por Sintoma",
    prescription: `1. Medir temperatura central (retal/esofágica)
2. Leve (32-35°C):
   - Reaquecimento passivo: cobertores, ambiente aquecido
   - Líquidos aquecidos VO
3. Moderada (28-32°C):
   - Reaquecimento ativo externo: manta térmica, ar quente forçado
   - SF 0,9% aquecido (40-42°C) EV
4. Grave (<28°C):
   - Reaquecimento ativo interno: lavagem peritoneal aquecida, ECMO
   - Cuidado com arritmias (manipulação mínima)
5. Monitorização cardíaca contínua (risco de FV)
6. Glicemia capilar (hipoglicemia frequente)
7. Gasometria (corrigir pH para temperatura)
8. Eletrólitos seriados
9. NÃO declarar óbito até reaquecer (>35°C): "ninguém está morto até estar quente e morto"`,
    warnings: "FV em hipotermia: desfibrilação pode não funcionar <30°C. Tentar 1x, reaquecer para >30°C antes de repetir.",
    guideline: "AHA / Wilderness Medical Society",
  },
  {
    id: "rx-sint-linfonodomegalia-aguda",
    title: "Linfonodomegalia Aguda no PS",
    type: "Por Sintoma",
    prescription: `1. Anamnese dirigida: tempo de evolução, sintomas B, infecção recente
2. Se sinais infecciosos locais (adenite):
   - Amoxicilina-Clavulanato 875/125mg VO 12/12h 7-10d
   - Analgesia: Ibuprofeno 600mg VO 8/8h
3. Se flutuação: USG + drenagem se abscesso
4. Exames iniciais: hemograma, VHS, PCR, LDH, ácido úrico
5. Sorologias: EBV, CMV, HIV, toxoplasmose
6. Se suspeita de linfoma/neoplasia:
   - Biópsia excisional (NÃO PAAF)
   - TC cervical/tórax/abdome
   - LDH, beta-2-microglobulina
7. Sinais de alarme: >2cm, endurecido, aderido, supraclavicular, >4 semanas`,
    notes: "Linfonodo supraclavicular esquerdo (Virchow) = investigar neoplasia abdominal. Cervical posterior + esplenomegalia: pensar mononucleose.",
    guideline: "SBHH / ASH",
  },
  {
    id: "rx-sint-rigidez-nuca",
    title: "Rigidez de Nuca / Meningismo no PS",
    type: "Por Sintoma",
    prescription: `1. Sinais meníngeos: Kernig, Brudzinski, rigidez de nuca
2. Se sinais positivos + febre:
   - Hemoculturas 2 pares IMEDIATO
   - Ceftriaxona 2g EV ANTES da TC/PL (não atrasar ATB)
   - Dexametasona 0,15mg/kg EV (antes ou junto do ATB)
3. TC crânio SEM contraste (antes da PL se: papiledema, déficit focal, imunocomprometido, convulsão)
4. Punção lombar: citologia, bioquímica, cultura, Gram, Latex
5. Se líquor purulento: manter Ceftriaxona 2g 12/12h + Vancomicina 15-20mg/kg 12/12h
6. Se líquor claro com pleocitose linfocítica: viral OU TB OU fúngica
7. Aciclovir 10mg/kg 8/8h se suspeita de encefalite herpética
8. Notificação compulsória (meningite)`,
    notes: "Meningismo sem febre: pensar em HSA (thunderclap headache). Punção lombar: xantocromia se HSA.",
    warnings: "ATB EMPÍRICO antes da TC e PL se alta suspeita clínica. Cada hora de atraso aumenta mortalidade.",
    guideline: "IDSA / SBI / ABN / MS",
  },
  {
    id: "rx-sint-claudicacao-aguda",
    title: "Isquemia Aguda de Membro (Claudicação/Membro Frio)",
    type: "Por Sintoma",
    prescription: `1. 6 P's: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia
2. Heparina não fracionada: bolus 80UI/kg + 18UI/kg/h EV (anticoagulação plena)
3. Analgesia: Morfina 2-4mg EV titulada
4. NÃO elevar membro (manter horizontal ou levemente pendente)
5. Proteger membro: algodão, evitar trauma, não aplicar calor
6. Doppler vascular urgente OU Angio-TC
7. Classificação de Rutherford:
   - I (viável): anticoagulação + investigação
   - IIA (ameaçado marginalmente): revascularização eletiva
   - IIB (ameaçado imediatamente): revascularização URGENTE
   - III (irreversível): amputação
8. Avaliação Cirurgia Vascular IMEDIATA
9. Embolectomia (Fogarty) ou trombólise intra-arterial
10. Pós-revascularização: monitorizar síndrome de reperfusão (K+, CPK, mioglobina)`,
    warnings: "Membro com paralisia + anestesia = Rutherford IIB: revascularização em <6h ou amputação. EMERGÊNCIA.",
    guideline: "SBACV / SVS / ESVS / ACC/AHA",
  },
  {
    id: "rx-sint-ictericia-aguda",
    title: "Icterícia Aguda no Adulto",
    type: "Sintoma",
    prescription: `INVESTIGAÇÃO:
1. Bilirrubinas (total, direta, indireta)
2. TGO, TGP, FA, GGT, albumina, TAP/INR
3. Hemograma + reticulócitos + LDH + haptoglobina (hemólise?)
4. Sorologias: HAV IgM, HBsAg, Anti-HBc IgM, Anti-HCV
5. USG abdome total (dilatação de vias biliares?)

ICTERÍCIA PRÉ-HEPÁTICA (BI elevada, BD normal):
- Anemia hemolítica: hemograma + reticulócitos + Coombs direto
- Síndrome de Gilbert: BI leve, sem doença hepática

ICTERÍCIA HEPÁTICA (BD + BI elevadas):
- Hepatite viral/tóxica/medicamentosa/autoimune
- Suspender hepatotóxicos (paracetamol, álcool, fitoterápicos)

ICTERÍCIA PÓS-HEPÁTICA (BD elevada):
- Obstrutiva: coledocolitíase, tumor de cabeça de pâncreas
- ColangioRM ou CPRE
- Se colangite: ATB + drenagem de urgência`,
    notes: "FA/GGT elevados desproporcionalmente: padrão colestático (obstrutivo). TGO/TGP elevados: padrão hepatocelular.",
    warnings: "Icterícia + coagulopatia + encefalopatia = insuficiência hepática aguda. Transferir para centro com transplante.",
    guideline: "FBG / SBH / ACG / BSG",
  },
  {
    id: "rx-sint-oliguria-aguda",
    title: "Oligúria Aguda (<0,5mL/kg/h)",
    type: "Sintoma",
    prescription: `1. Confirmar oligúria real (SVD se necessário — diurese horária)
2. Avaliar volemia:
   - USG point-of-care (VCI, B-lines pulmonares)
   - Teste de Trendelenburg / elevação passiva de MMII
3. Se hipovolêmico: SF 0,9% 250-500mL em bolus → reavaliar
4. Laboratório: Cr, ureia, Na+, K+, gasometria, EAS, sódio urinário
   - FeNa <1%: pré-renal / FeNa >2%: NTA (necrose tubular aguda)
5. Suspender nefrotóxicos: AINEs, aminoglicosídeos, contraste, IECA/BRA (se IRA)
6. Corrigir hipercalemia se K+ >5,5
7. Se anúria + hipervolemia: avaliar diálise de urgência
8. Furosemida 40-80mg EV (apenas se HIPERVOLÊMICO — NÃO usar para "estimular" diurese em hipovolemia)
9. Avaliar obstrução: USG (hidronefrose) → SVD → Nefrostomia se necessário`,
    notes: "Pré-renal: causa mais comum de IRA (50-60%). Melhora com volume. NTA: causa mais comum de IRA intrínseca (isquemia, nefrotóxicos).",
    warnings: "Furosemida NÃO melhora prognóstico da IRA — apenas controla hipervolemia. NÃO usar para transformar oligúrica em não-oligúrica.",
    guideline: "KDIGO / SBN / NICE / ADQI",
  },
  {
    id: "rx-sint-dor-toracica-abordagem",
    title: "Dor Torácica — Abordagem Sistematizada no PS",
    type: "Sintoma",
    prescription: `AVALIAÇÃO INICIAL (primeiros 10 minutos):
1. ECG 12 derivações (<10min da chegada)
2. Sinais vitais + SpO2
3. Acesso venoso + coleta: Troponina, hemograma, Cr, eletrólitos
4. AAS 200mg mastigar (se SCA não descartada)

CAUSAS LETAIS (descartar primeiro):
A - SCA (síndrome coronariana aguda): ECG + Troponina seriada (0h/1h/3h)
B - Dissecção de aorta: angio-TC (PA nos 4 membros, D-dímero)
C - TEP: D-dímero + Wells → angio-TC se positivo
D - Pneumotórax hipertensivo: diagnóstico clínico → descompressão imediata
E - Tamponamento cardíaco: USG FAST → pericardiocentese

OUTRAS CAUSAS:
5. Pericardite: ECG (supra ST difuso côncavo + infra PR)
6. Musculoesquelética: dor reprodutível à palpação
7. DRGE: queimação retroesternal, piora com alimentação
8. Herpes-zóster: dor dermatomérica + vesículas`,
    notes: "HEART Score: estratificação de risco em dor torácica (History, ECG, Age, Risk factors, Troponin). Score ≤3: baixo risco, alta precoce.",
    warnings: "ECG normal NÃO exclui SCA. Troponina negativa na 1ª coleta NÃO exclui IAM (sensibilidade máxima em 3-6h). Sempre seriação.",
    guideline: "SBC / AHA/ACC / ESC",
  },
  {
    id: "rx-sint-alucinacoes",
    title: "Alucinações / Psicose Aguda",
    type: "Prescrição Sintomática",
    prescription: `1. Haloperidol 5mg IM + Prometazina 50mg IM (1ª linha no PS)
2. OU Olanzapina 10mg IM (NÃO combinar com benzo IM)
3. OU Risperidona 2mg VO (se aceitar VO e cooperativo)
4. Ambiente calmo, iluminação adequada, acompanhante
5. Glicemia capilar (descartar hipoglicemia)
6. Monitorização: PA, FC, SpO2, nível de consciência
7. Se distonia aguda: Biperideno 2mg IM
8. Investigar: tóxico, metabólico, infeccioso, neurológico (TC se 1º episódio)`,
    notes: "1º episódio psicótico: SEMPRE fazer TC de crânio + exames metabólicos + toxicológico. Descartar delirium orgânico antes de diagnóstico psiquiátrico.",
    guideline: "ABP / NICE / APA",
  },
  {
    id: "rx-sint-olho-vermelho",
    title: "Olho Vermelho Agudo — Abordagem no PS",
    type: "Prescrição Sintomática",
    prescription: `CONJUNTIVITE BACTERIANA:
1. Moxifloxacino 0,5% colírio — 1 gota 6/6h por 7 dias
2. Compressas frias

CONJUNTIVITE ALÉRGICA:
3. Olopatadina 0,1% colírio — 1 gota 12/12h
4. Anti-histamínico VO se necessário

CORPO ESTRANHO:
5. Anestésico tópico (Proximetacaína 0,5%) para exame
6. Remoção com cotonete úmido ou irrigação
7. Fluoresceína: descartar úlcera de córnea
8. Moxifloxacino 0,5% colírio 6/6h por 5 dias (profilaxia)

SINAIS DE ALARME (encaminhar Oftalmo):
- Dor intensa + baixa visual + pupila irregular → uveíte/glaucoma
- Hifema (sangue na câmara anterior) → trauma penetrante`,
    notes: "NUNCA prescrever anestésico tópico para uso domiciliar (retarda cicatrização, mascara lesão grave). Colírio de corticoide: SOMENTE com avaliação oftalmológica.",
    warnings: "Olho vermelho + dor + baixa visual + fotofobia = NÃO é conjuntivite simples. Encaminhar urgente.",
    guideline: "CBO / AAO",
  },
  {
    id: "rx-sint-vertigem",
    title: "Vertigem / Tontura Aguda",
    type: "Prescrição Sintomática",
    prescription: `VPPB (vertigem posicional):
1. Manobra de Epley (tratamento — NÃO medicar de rotina)
2. Dimenidrinato 50mg VO 8/8h por 3-5 dias (fase aguda apenas)

NEURITE VESTIBULAR:
3. Dimenidrinato 50mg EV 8/8h
4. Ondansetrona 4mg EV se vômitos
5. SF 0,9% 500-1000mL EV (hidratação)
6. Prednisona 60mg VO 1x/dia por 5 dias (desmame em 2 semanas)
7. Reabilitação vestibular precoce

DESCARTAR CAUSA CENTRAL (HINTS):
8. Head Impulse normal + Nistagmo direction-changing + Test of Skew positivo = CENTRAL → RM urgente
9. Idade >60 + FR cardiovasculares + vertigem aguda = pensar AVC de fossa posterior`,
    notes: "HINTS é mais sensível que RM nas primeiras 48h para AVC de fossa posterior. VPPB é a causa mais comum de vertigem (benigna). NÃO medicar crônicamente com sedativos vestibulares.",
    warnings: "Vertigem + déficit focal/cerebelar = AVC até prova em contrário. Flunarizina/Cinarizina uso crônico: parkinsonismo em idosos.",
    guideline: "SBO / AAO-HNS / AAN",
  },
  {
    id: "rx-sint-epistaxe",
    title: "Epistaxe (Sangramento Nasal)",
    type: "Prescrição de Emergência",
    prescription: `ANTERIOR (90% dos casos):
1. Comprimir asa nasal por 15-20 min (paciente sentado, cabeça levemente inclinada para frente)
2. Algodão com Lidocaína 2% + Adrenalina 1:10.000 (tamponamento farmacológico)
3. Cauterização com Nitrato de Prata se ponto sangrante visível
4. Tamponamento anterior com Merocel ou gaze vaselinada (se persistente)

POSTERIOR (grave):
5. Tamponamento posterior com sonda de Foley + tamponamento anterior
6. OU balão de Epistat
7. SF 0,9% EV se instável
8. Hemograma, coagulograma, tipagem sanguínea
9. Amoxicilina-Clavulanato 875mg VO 12/12h (profilaxia — se tamponamento)
10. Encaminhar ORL se: posterior, recorrente, coagulopata`,
    notes: "Causas comuns: trauma digital, HAS, anticoagulantes, rinossinusite, Rendu-Osler-Weber. Plexo de Kiesselbach (anterior) é o local mais frequente.",
    warnings: "NÃO hiperestender cabeça (risco de aspiração de sangue). Verificar PA — crise hipertensiva pode ser causa. Manter tamponamento por 48-72h.",
    guideline: "ABORL-CCF / AAO-HNS",
  },
  {
    id: "rx-sint-miose-sialorr",
    title: "Síndrome Colinérgica (Miose + Sialorreia + Bradicardia)",
    type: "Por Sintoma",
    prescription: `1. Suspeitar de: organofosforados, carbamatos, cogumelos muscarínicos
2. Atropina 2-4mg EV a cada 5-10min (até secreções secas)
3. Pralidoxima 1-2g EV em 15-30min (se organofosforado)
4. IOT precoce se broncorreia/insuficiência respiratória
5. Descontaminação cutânea + roupas
6. Monitorizar colinesterase sérica
7. Diazepam 10mg EV se convulsões`,
    notes: "DUMBELS: Diarrhea, Urination, Miosis, Bradycardia/Bronchospasm, Emesis, Lacrimation, Salivation. Nicotínicos: fasciculações, fraqueza, taquicardia.",
    guideline: "SBTox / AACT",
  },
  {
    id: "rx-sint-midriase-taqui",
    title: "Síndrome Anticolinérgica (Midríase + Taquicardia + Pele Seca)",
    type: "Por Sintoma",
    prescription: `1. Suspeitar de: tricíclicos, anti-histamínicos, escopolamina, atropina, plantas (Datura)
2. Fisostigmina 1-2mg EV lento em 5min (APENAS se diagnóstico confirmado, sem QRS largo)
3. Diazepam 10mg EV se agitação/convulsão
4. Resfriamento ativo se hipertermia >39°C
5. SVD se retenção urinária
6. Carvão ativado 1g/kg se ingestão <1-2h
7. ECG: QRS largo → NaHCO3 (pode ser tricíclico)`,
    notes: "'Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter, full as a flask'. Fisostigmina: meia-vida 20-30min, pode precisar repetir.",
    warnings: "Fisostigmina CONTRAINDICADA se QRS largo (tricíclico) — risco de assistolia. Na dúvida, não usar.",
    guideline: "SBTox / AACT",
  },
  {
    id: "rx-sint-dor-articular-aguda",
    title: "Dor Articular Aguda — Manejo Inicial",
    type: "Por Sintoma",
    prescription: `1. Artrocentese diagnóstica (OBRIGATÓRIA se monoartrite aguda — excluir artrite séptica)
2. Análise do líquido sinovial: celularidade, Gram, cultura, cristais (birrefringência)
3. Analgesia: Dipirona 1g EV 6/6h + Cetoprofeno 100mg EV 12/12h
4. Se artrite séptica: ATB empírico (Oxacilina 2g EV 4/4h + Ceftriaxona 2g EV/dia)
5. Se gota: Colchicina 0,5mg VO 8/8h + AINE (NÃO iniciar alopurinol na crise)
6. Se artrite reativa: AINE + repouso articular
7. Imobilização + gelo local 20min 4x/dia`,
    notes: "Monoartrite aguda: artrite séptica até prova em contrário. Líquido purulento (>50.000 cel): tratar como séptica. Gota: cristais em forma de agulha com birrefringência negativa.",
    guideline: "SBR / ACR / EULAR",
  },
  {
    id: "rx-sint-edema-mmii",
    title: "Edema de Membros Inferiores — Investigação",
    type: "Por Sintoma",
    prescription: `1. Anamnese: bilateral vs unilateral, dor, início, medicações
2. Exames iniciais: albumina, proteínas totais, creatinina, ureia, EAS, Na+, TSH
3. Se bilateral: avaliar IC (BNP, eco), síndrome nefrótica (proteinúria 24h), cirrose
4. Se unilateral + dor: Doppler venoso (excluir TVP)
5. Furosemida 40mg VO 1x/dia (se congestão — titular)
6. Restrição de sódio (<2g/dia)
7. Meias de compressão (se insuficiência venosa crônica)
8. Elevar MMII
9. Se anasarca + hipoalbuminemia: Albumina 20% 50mL EV + Furosemida`,
    guideline: "SBC / SBN / SBACV",
  },
  {
    id: "rx-sint-oliguria",
    title: "Oligúria — Investigação e Manejo",
    type: "Por Sintoma",
    prescription: `Definição: diurese <0,5mL/kg/h por >6h

1. Avaliar volemia: desafio com SF 0,9% 250-500mL em 15-30min
2. Se resposta (+): continuar reposição volêmica
3. Se sem resposta: Furosemida 40-80mg EV (teste de estresse com furosemida)
4. Suspender nefrotóxicos: AINEs, aminoglicosídeos, contraste
5. Verificar SVD (obstrução? Globo vesical?)
6. USG de vias urinárias (excluir hidronefrose)
7. Exames: creatinina, ureia, Na+ urinário, osmolaridade urinária, sedimento
8. Na+ urinário <20 = pré-renal | >40 = renal (NTA)
9. FeNa <1% = pré-renal | >2% = NTA
10. Se IRA refratária: avaliar indicação de diálise (AEIOU)`,
    guideline: "SBN / KDIGO",
  },
  {
    id: "rx-sint-hematuria",
    title: "Hematúria — Investigação Inicial",
    type: "Por Sintoma",
    prescription: `1. EAS + sedimento urinário (confirmar hematúria verdadeira)
2. Se dismorfismo eritrocitário / cilindros hemáticos: origem glomerular
3. Se hemácias isomórficas: origem urológica
4. Exames: creatinina, ureia, hemograma, coagulograma, PSA (se >40 anos)
5. USG de vias urinárias (cálculos, massas, rins)
6. Se >40 anos ou fatores de risco: uroTC + cistoscopia (excluir CA)
7. Se glomerular: complemento C3/C4, FAN, ANCA, anti-GBM, proteinúria 24h
8. Se hematúria macroscópica intensa: irrigação vesical contínua com SF 0,9%
9. Suspender anticoagulantes se sangramento ativo
10. Encaminhar: nefro (se glomerular) ou uro (se urológica)`,
    guideline: "SBU / AUA / SBN",
  },
  {
    id: "rx-sint-dispneia-aguda",
    title: "Dispneia Aguda — Diagnóstico Diferencial",
    type: "Por Sintoma",
    prescription: `1. ABCDE + monitorização (SpO2, PA, FC, FR)
2. O2 suplementar se SpO2 <94% (<88-92% se DPOC)
3. ECG 12 derivações (IAM, arritmia, sobrecarga de VD)
4. RX tórax (EAP, derrame, pneumotórax, pneumonia)
5. Gasometria arterial (hipoxemia, acidose, hipercapnia)
6. BNP/NT-proBNP (IC — BNP >400 sugere descompensação)
7. D-dímero se Wells sugere TEP
8. Troponina se suspeita de SCA
9. AngioTC tórax se suspeita de TEP
10. Se broncoespasmo: NBZ com Salbutamol + Ipratrópio
11. Se EAP: Furosemida + Nitrato + VNI
12. Se pneumotórax: drenagem`,
    guideline: "SBPT / ATS / ESC",
  },
  {
    id: "rx-sint-hipocalemia",
    title: "Hipocalemia — Reposição de Potássio",
    type: "Por Sintoma",
    prescription: `Leve (K+ 3-3,5mEq/L):
1. KCl 600mg (8mEq) VO 8/8h por 3-5 dias
2. Dieta rica em potássio

Moderada (K+ 2,5-3mEq/L):
3. KCl 10% — 10mL (13mEq) EV diluído em SF 0,9% 500mL em 4h
4. Máximo: 20mEq/h por via periférica
5. KCl 600mg VO 6/6h concomitante

Grave (K+ <2,5 ou sintomático):
6. KCl 19,1% — 10mL (25mEq) + SF 0,9% 250mL EV em 2-4h (acesso central)
7. Máximo: 40mEq/h por acesso central (com monitorização ECG)
8. Dosar K+ 2/2h até correção
9. Corrigir hipomagnesemia concomitante (MgSO4 2g EV)`,
    warnings: "NÃO infundir KCl em bolus (risco de PCR). Via periférica: máx 20mEq/h. Acesso central: máx 40mEq/h com ECG contínuo. Corrigir Mg para corrigir K.",
    guideline: "SBN / AMIB",
  },
  {
    id: "rx-sint-sangramento-anticoag",
    title: "Sangramento por Anticoagulante",
    type: "Prescrição Sintomática",
    prescription: `Varfarina (INR elevado):
1. INR 4,5-10 sem sangramento: suspender Varfarina + Vitamina K 2,5mg VO
2. INR >10 sem sangramento: suspender + Vitamina K 5mg VO
3. Sangramento grave: Complexo Protrombínico (CCP) 25-50UI/kg EV + Vitamina K 10mg EV lento
4. Se CCP indisponível: PFC 15-20mL/kg

DOACs (Rivaroxabana, Apixabana):
5. Sangramento grave: Andexanet alfa (se disponível) OU CCP 50UI/kg
6. Ácido tranexâmico 1g EV (adjuvante)
7. Não dialisa (alta ligação proteica)

Heparina:
8. Protamina: 1mg para cada 100UI de HNF das últimas 2-3h (máx 50mg)
9. HBPM: Protamina reverte ~60% (1mg para cada 1mg de Enoxaparina)

Dabigatrana:
10. Idarucizumab 5g EV (antídoto específico)`,
    warnings: "Sempre avaliar necessidade de transfusão (CH se Hb <7, plaquetas se <50.000 + sangramento). Controlar PA. Identificar foco do sangramento.",
    guideline: "ISTH / SBC / ACC/AHA",
  },
  {
    id: "rx-sint-dor-pos-op",
    title: "Dor Pós-Operatória — Protocolo Escalonado",
    type: "Prescrição Sintomática",
    prescription: `Degrau 1 (dor leve — EVA 1-3):
1. Dipirona 1g EV 6/6h
2. Paracetamol 1g EV 6/6h (alternar)

Degrau 2 (dor moderada — EVA 4-6):
3. Cetoprofeno 100mg EV 12/12h (se não contraindicado)
4. Tramadol 50-100mg EV 8/8h
5. Ondansetrona 4mg EV 8/8h (profilaxia náusea por opioide)

Degrau 3 (dor intensa — EVA 7-10):
6. Morfina 2-4mg EV 4/4h (titular)
7. OU PCA (analgesia controlada pelo paciente) se disponível
8. Cetamina subdissociativa: 0,1-0,3mg/kg/h em BIC (poupa opioide)

Adjuvantes:
9. Dipirona 1g EV 6/6h (manter em TODOS os degraus)
10. Gabapentina 300mg VO 8/8h (se componente neuropático)
11. Bloqueio regional (se possível): superior a sistêmico`,
    guideline: "SBA / ESRA / PROSPECT",
  },
  {
    id: "rx-sint-oliguria",
    title: "Oligúria — Abordagem no PS/UTI",
    type: "Prescrição Sintomática",
    prescription: `Definição: diurese <0,5mL/kg/h por >6h

Avaliação inicial:
1. SVD (se não tem) — confirmar que não é retenção urinária
2. USG bexiga (bexigoma?)
3. Avaliar volemia: POCUS (VCI, linhas B pulmonares), lactato, FC, PA

Pré-renal (hipovolemia):
4. SF 0,9% 250-500mL EV em 15-30min (fluid challenge) — reavaliar
5. Se responsivo: manter hidratação
6. Se não responsivo após 2L: considerar vasopressor (PAM alvo ≥65)

Renal (NTA):
7. Suspender nefrotóxicos (AINEs, aminoglicosídeos, contraste)
8. Manter euvolemia (não hiper-hidratar)
9. Furosemida 40-80mg EV (teste de estresse diurético: >200mL em 2h = boa resposta)

Pós-renal (obstrutiva):
10. USG: hidronefrose → SVD ou nefrostomia
11. Avaliar causa: HPB, cálculo, tumor

INDICAÇÕES DE DIÁLISE: K+ refratário, acidose grave, EAP, uremia sintomática, intoxicação dialítica`,
    guideline: "KDIGO / SBN / AMIB",
  },
  {
    id: "rx-sint-dispneia-aguda",
    title: "Dispneia Aguda — Abordagem no PS",
    type: "Prescrição Sintomática",
    prescription: `Avaliação inicial:
1. O2 suplementar: cateter nasal → máscara → VNI (conforme SpO2)
2. Monitorização: SpO2, FR, PA, FC, ECG
3. Gasometria arterial
4. RX tórax PA
5. Hemograma, D-dímero (se suspeita de TEP), BNP/NT-proBNP, troponina

Por etiologia provável:
ASMA/DPOC: Salbutamol 4-8 jatos + Ipratrópio + Corticoide
EAP: VNI + Furosemida 40mg EV + Nitroglicerina SL
TEP: Heparina dose plena + AngioTC
PNEUMONIA: ATB + O2
PNEUMOTÓRAX: Drenagem torácica
ANAFILAXIA: Adrenalina IM + SF bolus

6. Se IRpA grave (FR >35, SpO2 <90% apesar de O2, rebaixamento): IOT + VM
7. Posição sentada / cabeceira elevada
8. Acesso venoso calibroso
9. Dipirona 1g EV se febre associada`,
    notes: "Causas mais comuns de dispneia aguda no PS: ICC descompensada, DPOC exacerbada, asma, pneumonia, TEP, pneumotórax, anafilaxia, ansiedade.",
    guideline: "SBPT / ATS / ERS",
  },
  {
    id: "rx-sint-edema-mmii",
    title: "Edema de Membros Inferiores — Abordagem",
    type: "Prescrição Sintomática",
    prescription: `Bilateral (sistêmico):
1. ICC: Furosemida 40mg EV + restrição hídrica + IECA
2. DRC/Nefrose: Furosemida + restrição Na+ + avaliar albumina
3. Cirrose: Espironolactona 100mg + Furosemida 40mg VO + restrição Na+
4. Medicamentoso: revisar medicações (Anlodipino, AINEs, corticoides)

Unilateral (local):
5. TVP: Doppler venoso → Enoxaparina 1mg/kg SC 12/12h se confirmado
6. Celulite/Erisipela: ATB (Cefalexina ou Oxacilina)
7. Insuficiência venosa crônica: meias de compressão + exercícios
8. Linfedema: fisioterapia + drenagem linfática manual

Exames:
9. Hemograma, albumina, função renal, função hepática, EAS (proteinúria)
10. Ecocardiograma se suspeita de ICC
11. USG Doppler venoso se unilateral
12. BNP/NT-proBNP (diferencial cardíaco vs não-cardíaco)`,
    guideline: "SBC / SBN / SBACV",
  },
  {
    id: "rx-sint-confusao-idoso",
    title: "Confusão Mental Aguda no Idoso",
    type: "Prescrição Sintomática",
    prescription: `INVESTIGAÇÃO OBRIGATÓRIA:
1. Glicemia capilar (hipoglicemia?)
2. EAS + urocultura (ITU é a causa #1)
3. Hemograma, PCR, função renal, Na+, K+, Ca++
4. Gasometria (hipóxia? hipercapnia?)
5. RX tórax (pneumonia?)
6. ECG (arritmia? IAM silencioso?)
7. Lista de medicamentos (polifarmácia/intoxicação)
8. Exame físico: globo vesical? fecaloma? dor?

MANEJO:
9. Tratar causa identificada
10. Hidratação cautelosa: SF 0,9% 500mL EV em 4-6h
11. Reorientação: relógio, familiar, ambiente calmo
12. Se agitação com risco: Haloperidol 0,5mg VO/IM (dose ÚNICA — reavaliar)
13. NÃO usar: Diazepam, Prometazina, Fenergan no idoso
14. Se suspeita de meningite: TC + punção lombar`,
    notes: "Confusão no idoso NÃO é normal do envelhecimento — SEMPRE tem causa. Delirium hipoativo é mais comum e mais perigoso (subdiagnosticado).",
    guideline: "SBGG / AGS / NICE",
  },
  {
    id: "rx-sint-instabilidade-hemodinamica",
    title: "Instabilidade Hemodinâmica — Abordagem Sistemática",
    type: "Prescrição de Emergência / UTI",
    prescription: `ABORDAGEM RUSH (Rapid Ultrasound for Shock and Hypotension):
1. PUMP: ecocardiograma (função VE, derrame pericárdico)
2. TANK: VCI (pré-carga), FAST (líquido livre), pleura (derrame)
3. PIPES: aorta (aneurisma/dissecção), TVP (TEP)

MANEJO POR TIPO DE CHOQUE:
Hipovolêmico:
4. SF 0,9% 500-1000mL bolus → reavaliar
5. Concentrado hemácias se Hb <7 (ou <9 se cardiopata)

Distributivo (séptico):
6. SF 0,9% 30mL/kg em 3h + Noradrenalina se PAM <65 pós-volume
7. ATB na 1ª hora

Cardiogênico:
8. Dobutamina 2,5-20mcg/kg/min ± Noradrenalina
9. NÃO fazer volume excessivo (sobrecarga)

Obstrutivo:
10. Tratar causa: pericardiocentese, drenagem torácica, trombólise

MONITORIZAÇÃO:
11. PA invasiva, SVD, gasometria, lactato seriado
12. Alvo: PAM ≥65, diurese ≥0,5mL/kg/h, lactato ↓, SvO2 >65%`,
    guideline: "SSC / AMIB / AHA",
  },
  {
    id: "rx-sint-oliguria",
    title: "Oligúria — Investigação e Manejo",
    type: "Prescrição Sintomática / UTI",
    prescription: `DEFINIÇÃO: diurese <0,5mL/kg/h por >6h

INVESTIGAÇÃO:
1. SVD funcionante? Flush vesical se dúvida de obstrução
2. USG bexiga (globo vesical? = pós-renal)
3. Na+ urinário: <20 = pré-renal | >40 = renal (NTA)
4. FENa: <1% = pré-renal | >2% = renal
5. Ureia/Creatinina sérica: relação >40:1 sugere pré-renal

MANEJO:
Pré-renal (hipovolemia):
6. Prova de volume: SF 0,9% 250-500mL em 15-30min → observar resposta
7. Se responsivo: manter hidratação
8. Se não responsivo: NÃO insistir em volume

Renal (NTA/nefrotóxica):
9. Suspender nefrotóxicos (AINEs, aminoglicosídeos, contraste)
10. Manter euvolemia
11. Furosemida 40-80mg EV (NÃO melhora prognóstico, mas controla volemia)

Pós-renal (obstrutivo):
12. SVD de alívio → se débito >400mL: esvaziar gradualmente (200mL/vez)
13. Nefrostomia se obstrução alta bilateral`,
    guideline: "KDIGO AKI / SBN / AMIB",
  },
  {
    id: "rx-sint-hipotermia-neonato",
    title: "Hipotermia Neonatal",
    type: "Prescrição Pediátrica — Neonatal",
    prescription: `CLASSIFICAÇÃO:
Frio (36-36,4°C): reaquecimento lento
Hipotermia moderada (32-35,9°C): reaquecimento ativo
Hipotermia grave (<32°C): emergência

MANEJO:
1. Berço aquecido com servo-controle (alvo T axilar 36,5-37,5°C)
2. Contato pele-a-pele (método Canguru — mãe/pai)
3. Gorro, meias, luvas (reduzir perdas)
4. Saco plástico em <32 semanas (imediatamente após nascer)
5. Glicemia capilar: hipoglicemia é associada → SG 10% 2mL/kg se <40
6. Monitorar: FC, FR, SpO2, T axilar a cada 15-30min
7. Gasometria se grave (acidose metabólica)
8. Considerar sepse como causa: hemograma + PCR + hemocultura + ATB empírico
9. Meta: T 36,5°C em 1h
10. NÃO reaquecer rapidamente (risco de apneia e bradicardia)`,
    guideline: "SBP / OMS / AAP / NRP",
  },
  {
    id: "rx-sint-dor-torax-ps",
    title: "Dor Torácica no PS — Abordagem Sistemática",
    type: "Prescrição Sintomática",
    prescription: `ATENDIMENTO IMEDIATO:
1. ECG 12 derivações em <10min da chegada
2. Monitorização contínua
3. Acesso venoso calibroso
4. AAS 200mg mastigar (se suspeita de SCA)
5. O2 se SpO2 <94%

ESTRATIFICAÇÃO:
6. Troponina (0h e 3h) — se alta sensibilidade: 0h e 1h
7. HEART Score: History, ECG, Age, Risk factors, Troponin
   ≤3: baixo risco (alta com acompanhamento)
   4-6: moderado (observação, teste provocativo)
   ≥7: alto risco (internação, cateterismo)

DIAGNÓSTICOS DIFERENCIAIS GRAVES (Big Five):
8. SCA (IAM): ECG + Troponina + hemodinâmica
9. TEP: D-dímero, Wells Score, angioTC
10. Dissecção aórtica: angioTC tórax, pulsos assimétricos
11. Pneumotórax hipertensivo: clínico → descompressão imediata
12. Tamponamento: tríade de Beck (hipotensão + turgência jugular + hipofonese) → POCUS

CAUSAS NÃO CARDÍACAS:
13. Osteomuscular, DRGE, ansiedade/pânico, pleurite, herpes zoster`,
    guideline: "SBC / AHA / ESC 2023",
  },
  {
    id: "rx-sint-hipocalemia-grave",
    title: "Hipocalemia Grave",
    type: "Prescrição de Emergência",
    prescription: `DEFINIÇÃO GRAVE: K+ <2,5mEq/L OU sintomático (arritmia, paralisia, rabdomiólise)

REPOSIÇÃO EV (GRAVE):
1. KCl 19,1% (2,56mEq/mL) — NÃO infundir puro
2. Diluição: KCl 10mL (25,6mEq) + SF 0,9% 490mL = 500mL
3. Velocidade máxima periférica: 10mEq/h (40mEq/L na solução)
4. Velocidade máxima central: 20-40mEq/h (com monitorização ECG)
5. Alvo: K+ >3,5mEq/L
6. Dosar K+ a cada 2h durante reposição

REPOSIÇÃO VO (MODERADA — K+ 2,5-3,5):
7. KCl xarope 6%: 15-30mL VO 6/6h (cada 15mL = 12mEq)
8. OU KCl comprimido 600mg VO 8/8h (cada cp = 8mEq)

CORRIGIR MAGNÉSIO:
9. Mg++ <1,5: MgSO4 50% 1-2g EV em 1h (hipomagnesemia impede correção de K+)

CAUSAS:
10. Investigar: diurético, vômitos, diarreia, hiperaldosteronismo, alcalose
11. Se diurético crônico: associar Espironolactona 25-50mg VO`,
    warnings: "NUNCA infundir KCl EV em bolus (PCR por arritmia). Velocidade máxima periférica: 10mEq/h. Sempre corrigir Mg++ junto.",
    guideline: "SBN / KDIGO / AMIB",
  },
  {
    id: "rx-sint-hipernatremia",
    title: "Hipernatremia — Correção",
    type: "Prescrição de Emergência / UTI",
    prescription: `DEFINIÇÃO: Na+ >145mEq/L | Grave: >160mEq/L

PRINCÍPIO: corrigir LENTAMENTE (<10-12mEq/24h) para evitar edema cerebral

CÁLCULO DO DÉFICIT DE ÁGUA LIVRE:
Déficit (L) = ACT × [(Na+ atual / 140) - 1]
ACT = peso × 0,6 (homem) ou × 0,5 (mulher/idoso)
Exemplo (70kg homem, Na+ 160): 42 × (160/140 - 1) = 6L

REPOSIÇÃO:
1. Fase aguda (<48h de instalação): pode corrigir mais rápido (1-2mEq/h nas primeiras 4h)
2. Fase crônica (>48h ou incerto): máx 10mEq/24h

SOLUÇÃO:
3. Água livre VO/SNG (se tolerar) — mais seguro
4. SG 5% EV (açúcar livre = água livre)
5. SF 0,45% EV (meia-salina — cada litro = 500mL de água livre)
6. NÃO usar SF 0,9% isolado (Na 154 — não corrige hipernatremia)

MONITORIZAÇÃO:
7. Na+ sérico a cada 4-6h
8. Balanço hídrico rigoroso
9. Diurese + osmolalidade urinária (DDI vs renal vs desidratação)
10. Se diabetes insipidus central: Desmopressina 1-2mcg EV/SC 12/12h`,
    guideline: "SBN / KDIGO / AMIB / Uptodate",
  },
  {
    id: "rx-sint-prurido-generalizado",
    title: "Prurido Generalizado",
    type: "Prescrição Sintomática",
    prescription: `INVESTIGAÇÃO:
1. Dermatose primária? (eczema, urticária, escabiose, dermatite de contato)
2. Causas sistêmicas: DRC (uremia), colestase, policitemia, linfoma, DM, tireoide, HIV
3. Exames: hemograma, função renal, hepatograma, bilirrubinas, TSH, glicemia, VHS, LDH

TRATAMENTO:
4. Hidratação cutânea: creme hidratante à base de ureia 10% 2x/dia
5. Banho morno (NÃO quente) com sabonete neutro
6. Anti-histamínico:
   - Dia: Loratadina 10mg VO 1x/dia OU Cetirizina 10mg VO 1x/dia
   - Noite (se insônia pelo prurido): Hidroxizina 25mg VO à noite
7. Se urticariforme: aumentar anti-H1 até 4x dose (off-label — eficaz)
8. Corticoide tópico: Betametasona 0,05% creme 2x/dia por 7-14 dias (lesões localizadas)
9. Se colestásico: Colestiramina 4g VO 2-4x/dia
10. Se urêmico: otimizar diálise + Gabapentina 100-300mg VO à noite
11. Se refratário: Doxepina 10-25mg VO à noite (tricíclico com efeito anti-H1/H2)`,
    guideline: "SBD / BAD / AAD / EADV",
  },
  // ========== SINTOMAS TORÁCICOS ==========
  {
    id: "rx-sint-dor-toracica-pleuritica",
    title: "Dor Torácica Pleurítica",
    type: "Prescrição por Sintoma",
    prescription: `INVESTIGAÇÃO:
1. RX tórax PA e perfil
2. ECG (descartar SCA)
3. HMG, PCR, D-dímero (se suspeita TEP)
4. USG point-of-care (POCUS) — derrame pleural?
5. Oximetria de pulso

TRATAMENTO SINTOMÁTICO:
6. Se derrame pleural: toracocentese diagnóstica (>1cm)
7. Analgesia:
   - AINEs: Ibuprofeno 600mg VO 8/8h (primeira linha para pleurisia)
   - OU Cetoprofeno 100mg EV 12/12h (se VO impossível)
   - Dipirona 1g EV 6/6h (adjuvante)
8. Se derrame volumoso com dispneia: toracocentese de alívio (máx 1500mL)
9. Tratar causa base: pneumonia, TEP, pleurite, TB pleural, neoplasia

QUANDO INTERNAR:
10. Derrame pleural volumoso ou bilateral
11. Empiema (líquido purulento, pH <7,2, glicose <40)
12. Suspeita de TEP/SCA`,
    guideline: "BTS / ATS / SBPT",
  },
  {
    id: "rx-sint-enfisema-subcutaneo",
    title: "Enfisema Subcutâneo",
    type: "Prescrição por Sintoma",
    prescription: `INVESTIGAÇÃO:
1. RX tórax PA (pneumotórax? pneumomediastino?)
2. TC tórax se RX inconclusivo
3. Palpação cervical e torácica (extensão do enfisema)
4. Avaliar via aérea (se cervical extenso)

CAUSAS COMUNS:
- Pneumotórax (mais frequente)
- Pneumomediastino espontâneo
- Lesão traqueobrônquica
- Pós-procedimento (biópsia, acesso central, IOT)
- Perfuração esofágica (síndrome de Boerhaave)

TRATAMENTO:
5. Tratar causa base (se pneumotórax: drenar)
6. O2 suplementar alto fluxo (acelera reabsorção)
7. Se extenso/compressivo: incisões de descompressão ("blowhole")
8. Analgesia: Dipirona 1g EV 6/6h
9. Monitorização: SpO2, FR, circunferência cervical
10. Se pneumomediastino espontâneo: repouso + O2 + analgesia (autolimitado)`,
    guideline: "ATLS / SBCT",
  },
  {
    id: "rx-sint-hemoptise-moderada",
    title: "Hemoptise — Avaliação e Manejo Inicial",
    type: "Prescrição por Sintoma",
    prescription: `CLASSIFICAÇÃO:
- Leve: <100mL/24h (escarro hemoptoico)
- Moderada: 100-500mL/24h
- Maciça: >500mL/24h OU >100mL/h (risco de vida)

AVALIAÇÃO INICIAL:
1. Confirmar hemoptise (diferenciar de hematemese/epistaxe posterior)
2. Monitorização (SpO2, PA, FC)
3. Acesso venoso calibroso
4. Tipagem + reserva sanguínea
5. HMG, coagulograma, gasometria
6. RX tórax PA (localizar lado)
7. TC tórax com contraste (se estável)

MANEJO:
8. Posicionar em DECÚBITO LATERAL (lado sangrante para BAIXO)
9. O2 suplementar
10. Ácido Tranexâmico 1g EV 8/8h (antifibrinolítico)
11. Codeína 30mg VO 4/4h (supressor de tosse — com cautela)
12. Se maciça: IOT com TOT 8+ (proteção do pulmão são) → broncoscopia de urgência
13. Se refratário: arteriografia bronquial com embolização`,
    guideline: "SBPT / BTS / Chest",
  },
  // ========== SINTOMAS INFECCIOSOS ==========
  {
    id: "rx-sint-febre-prolongada",
    title: "Febre Prolongada (>3 semanas) — Investigação",
    type: "Prescrição por Sintoma",
    prescription: `DEFINIÇÃO: Febre >38,3°C por >3 semanas sem diagnóstico após 1 semana de investigação

INVESTIGAÇÃO INICIAL:
1. HMG completo com diferencial
2. VHS + PCR + Ferritina
3. Hemoculturas 3 amostras (sítios diferentes)
4. Urocultura
5. TGO/TGP, Bilirrubinas, FA, GGT
6. LDH, Ácido úrico
7. FAN, Fator Reumatoide, ANCA
8. PPD/IGRA + RX tórax (TB)
9. Sorologias: HIV, CMV, EBV, Toxoplasmose, Hepatites B/C
10. Esfregaço periférico (linfoma, leucemia)
11. Gota espessa (malária — se região endêmica)
12. Ecocardiograma (endocardite)
13. TC tórax + abdome + pelve

SEGUNDA LINHA:
14. PET-CT (localizar foco inflamatório/neoplásico oculto)
15. Biópsia de medula óssea
16. Biópsia hepática (granulomas)
17. Biópsia de linfonodo (se adenomegalia)`,
    notes: "As 3 grandes causas de FOI: infecções (TB, endocardite, abscessos), neoplasias (linfomas), autoimunes (Still, LES, vasculites). Em 15-25% dos casos não se encontra a causa.",
    guideline: "IDSA / SBI / UpToDate",
  },
  {
    id: "rx-sint-sudorese-noturna",
    title: "Sudorese Noturna — Investigação",
    type: "Prescrição por Sintoma",
    prescription: `INVESTIGAÇÃO (especialmente se sintomas B: febre + perda de peso + sudorese):
1. HMG completo com diferencial (linfocitose? blastos?)
2. VHS + PCR + LDH
3. RX tórax (alargamento mediastinal? tuberculose?)
4. PPD/IGRA (tuberculose)
5. HIV (teste rápido)
6. TSH + T4L (hipertireoidismo)
7. Glicemia de jejum (hipoglicemia noturna — DM em uso de insulina)
8. Hemoculturas (se febre associada — endocardite?)
9. TC tórax + abdome (linfadenopatia profunda?)
10. Se adenomegalia: biópsia (Linfoma de Hodgkin: sintomas B clássicos)
11. Ferritina (doença de Still)
12. Considerar: feocromocitoma (metanefrinas), carcinoide (5-HIAA)

TRATAMENTO SINTOMÁTICO (enquanto investiga):
13. Evitar cobertores pesados
14. Manter ambiente fresco
15. Revisar medicamentos (antidepressivos ISRS, tamoxifeno, opioides — causas comuns)`,
    guideline: "UpToDate / Harrison's / SBI",
  },
];

