import { PrescriptionItem } from "./types";

export const antibioticsByFocusItems: PrescriptionItem[] = [
  {
    id: "rx-atb-pulmao",
    title: "Antibiótico — Foco Pulmonar",
    type: "Antibiótico por Foco",
    prescription: `PAC leve (ambulatorial):
1. Amoxicilina 500mg VO 8/8h por 7 dias
2. OU Azitromicina 500mg VO 1x/dia por 3-5 dias

PAC moderada/grave (hospitalar):
3. Ceftriaxona 1g EV 12/12h + Azitromicina 500mg EV 1x/dia

PAC grave UTI:
4. Ceftriaxona 2g EV 1x/dia + Azitromicina 500mg EV
5. Se risco Pseudomonas: Piperacilina-Taz 4,5g 6/6h OU Meropenem 1g 8/8h

Aspirativa:
6. Ceftriaxona + Clindamicina 600mg EV 6/6h
7. OU Amoxicilina-Clavulanato`,
    guideline: "SBP / IDSA 2019",
  },
  {
    id: "rx-atb-urinario",
    title: "Antibiótico — Foco Urinário",
    type: "Antibiótico por Foco",
    prescription: `Cistite simples:
1. Fosfomicina 3g VO dose única
2. OU Nitrofurantoína 100mg VO 6/6h por 5 dias

ITU complicada:
3. Ceftriaxona 1g EV 12/12h

Pielonefrite:
4. Ceftriaxona 1g EV 12/12h por 10-14 dias
5. OU Ciprofloxacino 400mg EV 12/12h

Urossepse:
6. Piperacilina-Tazobactam 4,5g EV 6/6h
7. OU Meropenem 1g EV 8/8h (se ESBL)

Gestante:
8. Cefalexina 500mg VO 6/6h por 7 dias (categoria B)`,
    guideline: "SBI / IDSA",
  },
  {
    id: "rx-atb-abdome",
    title: "Antibiótico — Foco Abdominal",
    type: "Antibiótico por Foco",
    prescription: `Leve (apendicite não complicada):
1. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h

Moderado (peritonite localizada):
2. Piperacilina-Tazobactam 4,5g EV 6/6h
3. OU Ceftriaxona + Metronidazol

Grave (peritonite difusa / sepse abdominal):
4. Meropenem 1g EV 8/8h
5. OU Piperacilina-Taz + Metronidazol
6. Avaliar necessidade de Fluconazol (se Candida)

SUS (sem Piperacilina):
7. Ceftriaxona 1g 12/12h + Metronidazol 500mg 8/8h + Gentamicina 5mg/kg/dia`,
    guideline: "SBI / WSES",
  },
  {
    id: "rx-atb-pele",
    title: "Antibiótico — Foco Pele / Partes Moles",
    type: "Antibiótico por Foco",
    prescription: `Celulite/Erisipela leve:
1. Cefalexina 500mg VO 6/6h por 7-10 dias
2. OU Amoxicilina-Clavulanato 875mg VO 12/12h

Moderada/Grave:
3. Oxacilina 2g EV 4/4h
4. OU Cefazolina 1g EV 8/8h

Fascite necrosante:
5. Piperacilina-Taz 4,5g 6/6h + Clindamicina 900mg 8/8h
6. OU Meropenem + Clindamicina + Vancomicina

Mordedura:
7. Amoxicilina-Clavulanato 875mg VO 12/12h
8. Profilaxia tétano + raiva conforme indicação`,
    guideline: "IDSA / SBI",
  },
  {
    id: "rx-atb-snc",
    title: "Antibiótico — Foco SNC (Meningite)",
    type: "Antibiótico por Foco",
    prescription: `Meningite bacteriana — empírico:
Adulto:
1. Ceftriaxona 2g EV 12/12h + Ampicilina 2g EV 4/4h (se >50 anos)
2. Dexametasona 0,15mg/kg EV 6/6h por 4 dias (iniciar ANTES ou junto com ATB)

Pediátrico (>1 mês):
3. Ceftriaxona 100mg/kg/dia EV div 12/12h

Neonatal:
4. Ampicilina + Gentamicina OU Cefotaxima

Encefalite herpética:
5. Aciclovir 10mg/kg EV 8/8h por 14-21 dias`,
    warnings: "ATB IMEDIATO na suspeita. NÃO atrasar para exames. Dexametasona reduz sequela.",
    guideline: "IDSA / SBI / MS",
  },
  {
    id: "rx-atb-sepse",
    title: "Antibiótico — Sepse (empírico)",
    type: "Antibiótico por Foco",
    prescription: `Foco pulmonar: Ceftriaxona 2g + Azitromicina 500mg
Foco urinário: Ceftriaxona 1g 12/12h
Foco abdominal: Piperacilina-Taz 4,5g 6/6h OU Ceftriaxona + Metronidazol
Foco pele: Oxacilina 2g 4/4h OU Cefazolina 1g 8/8h
Foco desconhecido: Piperacilina-Taz 4,5g 6/6h OU Meropenem 1g 8/8h
Cateter: Vancomicina 15-20mg/kg 12/12h + Cefepime 2g 8/8h
Neutropenia febril: Cefepime 2g 8/8h OU Meropenem 1g 8/8h

SUS: Ceftriaxona 2g + Metronidazol 500mg 8/8h (cobertura ampla)`,
    notes: "ATB na 1ª hora. Ajustar conforme cultura em 48-72h. Descalonar sempre que possível.",
    guideline: "SSC 2021",
  },
  {
    id: "rx-atb-pediatria",
    title: "Antibiótico — Pediatria",
    type: "Antibiótico por Foco",
    prescription: `OTITE MÉDIA: Amoxicilina 50mg/kg/dia VO div 8/8h por 10 dias
FARINGITE: Amoxicilina 50mg/kg/dia VO 8/8h por 10 dias OU Penicilina Benzatina IM dose única
PNEUMONIA: Amoxicilina 50mg/kg/dia VO 8/8h (ambulatorial) OU Penicilina Cristalina EV (hospitalar)
ITU: Cefalexina 50mg/kg/dia VO 6/6h ou Ceftriaxona 50-100mg/kg/dia EV
SEPSE <3 meses: Ampicilina + Gentamicina
SEPSE >3 meses: Ceftriaxona 100mg/kg/dia EV
MENINGITE: Ceftriaxona 100mg/kg/dia EV + Dexametasona`,
    notes: "Sempre calcular dose por kg. Preferir suspensão oral quando possível.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-atb-hospitalar",
    title: "Antibiótico — Infecção Hospitalar",
    type: "Antibiótico por Foco",
    prescription: `PAH/PAVM:
1. Piperacilina-Taz 4,5g 6/6h OU Meropenem 1g 8/8h
2. + Vancomicina se risco MRSA

ITU associada a cateter:
3. Ceftriaxona 1g 12/12h (se sensível)
4. Meropenem se ESBL

Infecção de corrente sanguínea (cateter):
5. Vancomicina + Cefepime/Meropenem
6. Remover cateter

Clostridium difficile:
7. Vancomicina 125mg VO 6/6h por 10 dias (1ª escolha)
8. OU Metronidazol 500mg VO 8/8h (casos leves)`,
    guideline: "ANVISA / IDSA",
  },
  {
    id: "rx-atb-comunitario",
    title: "Antibiótico — Infecção Comunitária",
    type: "Antibiótico por Foco",
    prescription: `IVAS (sinusite): Amoxicilina 500mg VO 8/8h por 7-10 dias
AMIGDALITE: Amoxicilina VO ou Penicilina Benzatina IM dose única
OTITE EXTERNA: Ciprofloxacino otológico 3 gotas 12/12h por 7 dias
CELULITE: Cefalexina 500mg VO 6/6h por 7-10 dias
ITU SIMPLES: Fosfomicina 3g dose única ou Nitrofurantoína 100mg 6/6h 5 dias
PAC AMBULATORIAL: Amoxicilina 500mg 8/8h ± Azitromicina 500mg 1x/dia
DIARREIA BACTERIANA: Ciprofloxacino 500mg VO 12/12h por 3-5 dias (se indicado)`,
    notes: "Maioria das IVAS é viral — ATB apenas se critérios bacterianos. Evitar uso desnecessário.",
    guideline: "ANVISA / MS",
  },
  {
    id: "rx-atb-gestante",
    title: "Antibiótico — Gestante",
    type: "Antibiótico por Foco",
    prescription: `SEGUROS (Categoria B):
Penicilinas: Amoxicilina, Ampicilina, Penicilina
Cefalosporinas: Cefalexina, Ceftriaxona, Cefazolina
Macrolídeos: Azitromicina, Eritromicina
Nitrofurantoína: 100mg VO 6/6h (evitar próximo ao parto)
Metronidazol: evitar no 1º trimestre (usar se necessário depois)

CONTRAINDICADOS:
Quinolonas (Cipro, Levo): toxicidade cartilagem fetal
Tetraciclinas (Doxiciclina): manchas dentárias, toxicidade hepática
Aminoglicosídeos: ototoxicidade fetal (usar apenas se risco-benefício)
Sulfametoxazol-Trimetoprim: 1º trim (defeitos tubo neural) e 3º trim (kernicterus)

ITU na gestação: Cefalexina 500mg VO 6/6h por 7 dias
Pielonefrite: Ceftriaxona 1g EV 12/12h`,
    warnings: "SEMPRE verificar categoria FDA/ANVISA. Quinolonas e Tetraciclinas são CONTRAINDICADAS.",
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-atb-drc",
    title: "Antibiótico — Ajuste em DRC",
    type: "Antibiótico por Foco",
    prescription: `AJUSTES CONFORME ClCr (mL/min):

Ceftriaxona: NÃO precisa ajuste (eliminação biliar)
Amoxicilina: ClCr <30: 500mg 12/12h (em vez de 8/8h)
Ciprofloxacino: ClCr <30: 250-500mg 12/12h
Levofloxacino: ClCr <50: 750mg 48/48h
Metronidazol: NÃO precisa ajuste
Vancomicina: ajustar por nível sérico (vale 15-20mcg/mL)
Gentamicina: ClCr <60: espaçar intervalo ou guiar por nível
Meropenem: ClCr <25: 1g 12/12h (em vez de 8/8h)
Fluconazol: ClCr <50: 50% da dose

DIÁLISE: doses suplementares pós-diálise para drogas dialisáveis`,
    notes: "Aminoglicosídeos e Vancomicina: monitorar nível sérico. Ceftriaxona é o ATB mais seguro em DRC.",
    guideline: "KDIGO / SBI",
  },
  {
    id: "rx-atb-odontogenico",
    title: "Antibiótico — Infecção Odontogênica",
    type: "Antibiótico por Foco",
    prescription: `Leve (ambulatorial):
1. Amoxicilina 500mg VO 8/8h por 7 dias
2. OU Amoxicilina-Clavulanato 875mg VO 12/12h
3. Se alergia a penicilina: Clindamicina 300mg VO 6/6h

Moderada/Grave (hospitalar):
4. Ampicilina-Sulbactam 3g EV 6/6h
5. OU Clindamicina 600mg EV 6/6h + Ceftriaxona 1g EV 12/12h
6. Metronidazol 500mg EV 8/8h (cobertura anaeróbia)

Angina de Ludwig (EMERGÊNCIA):
7. Ampicilina-Sulbactam 3g EV 6/6h OU Clindamicina + Ceftriaxona
8. Dexametasona 8mg EV (reduzir edema)
9. Avaliação de via aérea URGENTE (risco de obstrução)
10. Drenagem cirúrgica`,
    warnings: "Angina de Ludwig: infecção do assoalho da boca — risco de obstrução de via aérea!",
    guideline: "SBI / IDSA",
  },
  {
    id: "rx-atb-endocardite",
    title: "Antibiótico — Endocardite Infecciosa",
    type: "Antibiótico por Foco",
    prescription: `Valva nativa (empírico):
1. Oxacilina 2g EV 4/4h + Gentamicina 3mg/kg/dia 1x/dia por 4-6 semanas
2. Se alergia a penicilina: Vancomicina 15-20mg/kg EV 12/12h

Valva protética (empírico):
3. Vancomicina 15mg/kg EV 12/12h + Gentamicina + Rifampicina 300mg VO 8/8h

Streptococcus viridans (sensível à penicilina):
4. Penicilina Cristalina 4 milhões UI EV 4/4h por 4 semanas

Staphylococcus (MSSA):
5. Oxacilina 2g EV 4/4h por 6 semanas

MRSA:
6. Vancomicina 15-20mg/kg EV 12/12h (monitorar nível sérico)`,
    notes: "3 pares de hemocultura ANTES do ATB. Ecocardiograma transesofágico preferencial.",
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-atb-artrite-septica",
    title: "Antibiótico — Artrite Séptica",
    type: "Antibiótico por Foco",
    prescription: `Empírico adulto:
1. Oxacilina 2g EV 4/4h (cobertura Staphylococcus)
2. Se MRSA: Vancomicina 15-20mg/kg EV 12/12h
3. Se gonococo suspeito: Ceftriaxona 1g EV 1x/dia
4. Duração: 4-6 semanas (EV 2-4 sem → VO completar)

Pediátrico:
5. <3 meses: Oxacilina + Ceftriaxona
6. >3 meses: Oxacilina 200mg/kg/dia EV 6/6h
7. Se suspeita Kingella (<5 anos): Ceftriaxona

Artrocentese:
8. OBRIGATÓRIA (diagnóstica e terapêutica)
9. Gram, cultura, contagem celular (>50.000 leucócitos = séptica)
10. Lavagem articular se purulenta`,
    warnings: "Artrite séptica = emergência ortopédica. Drenagem cirúrgica se quadril ou refratária.",
    guideline: "SBOT / IDSA",
  },
  {
    id: "rx-atb-meningite",
    title: "Antibiótico — Meningite Bacteriana",
    type: "Antibiótico por Foco",
    prescription: `Empírico adulto (18-50 anos):
1. Ceftriaxona 2g EV 12/12h + Vancomicina 15-20mg/kg EV 12/12h
2. Dexametasona 0,15mg/kg EV 6/6h por 4 dias (ANTES ou junto do ATB)

>50 anos ou imunossuprimido:
3. Adicionar Ampicilina 2g EV 4/4h (Listeria)

Pediátrico (>1 mês):
4. Ceftriaxona 100mg/kg/dia EV 12/12h + Vancomicina

Neonatal (<1 mês):
5. Ampicilina + Gentamicina OU Ampicilina + Cefotaxima

6. Punção lombar ANTES do ATB (se não atrasar >30min)
7. Duração: Meningococo 7d, Pneumococo 10-14d, Listeria 21d`,
    warnings: "NÃO atrasar ATB para fazer punção lombar. Se instável: ATB primeiro, PL depois.",
    guideline: "SBI / IDSA 2017",
  },
  {
    id: "rx-atb-osteomielite",
    title: "Antibiótico — Osteomielite",
    type: "Antibiótico por Foco",
    prescription: `Empírico adulto:
1. Oxacilina 2g EV 4/4h por 4-6 semanas
2. Se MRSA: Vancomicina 15-20mg/kg EV 12/12h
3. Se pé diabético: Piperacilina-Tazobactam 4,5g EV 6/6h OU Meropenem 1g 8/8h (polimicrobiano)
4. Transição EV→VO: após 2-3 semanas se boa resposta
   Ciprofloxacino 750mg VO 12/12h + Rifampicina 300mg VO 12/12h (Staphylococcus)

Pediátrico:
5. Oxacilina 200mg/kg/dia EV 6/6h
6. Se <5 anos: + Ceftriaxona (Kingella kingae)

7. Hemocultura (positiva em 50%)
8. Biópsia óssea se possível (padrão-ouro)
9. PCR/VHS seriados (marcadores de resposta)
10. RMN (exame de imagem de escolha)`,
    notes: "Duração: aguda 4-6 semanas. Crônica: 6-8 semanas + desbridamento cirúrgico.",
    guideline: "SBOT / IDSA",
  },
  {
    id: "rx-atb-peritonite-pbep",
    title: "Antibiótico — PBE (Peritonite Bacteriana Espontânea)",
    type: "Antibiótico por Foco",
    prescription: `Diagnóstico: PMN >250/mm³ no líquido ascítico

1. Ceftriaxona 2g EV 1x/dia por 5-7 dias (1ª escolha)
2. OU Cefotaxima 2g EV 8/8h
3. Albumina:
   D1: 1,5g/kg EV
   D3: 1g/kg EV
   (reduz mortalidade e SHR — OBRIGATÓRIA)
4. Paracentese de controle em 48h (queda >25% de PMN = resposta)
5. Se falha: ampliar para Meropenem 1g EV 8/8h

Profilaxia (quem já teve PBE):
6. Norfloxacino 400mg VO 1x/dia indefinidamente
7. OU Ciprofloxacino 500mg VO 1x/semana
8. OU Sulfametoxazol-Trimetoprim 800/160mg VO 1x/dia`,
    warnings: "Albumina na PBE SALVA VIDA. Não esquecer. Mortalidade sem albumina: 30% vs 10% com.",
    guideline: "SBG / EASL / AASLD",
  },
  {
    id: "rx-atb-itu-cateter",
    title: "Antibiótico — ITU Associada a Cateter",
    type: "Antibiótico por Foco",
    prescription: `1. Trocar a sonda vesical ANTES de iniciar ATB (reduz falha)
2. Se possível: remover a sonda (melhor opção)

Empírico leve/moderada:
3. Ciprofloxacino 400mg EV 12/12h OU 500mg VO 12/12h
4. OU Ceftriaxona 1g EV 1x/dia

Empírico grave/sepse:
5. Piperacilina-Tazobactam 4,5g EV 6/6h
6. OU Meropenem 1g EV 8/8h (se risco de ESBL)
7. + Vancomicina se risco de Enterococcus

8. Urocultura + hemocultura ANTES do ATB
9. Duração: 7-10 dias (5 dias se remoção rápida do cateter e boa resposta)
10. NÃO tratar bacteriúria assintomática (exceto pré-operatório urológico)`,
    guideline: "SBI / IDSA 2010",
  },
  {
    id: "rx-atb-biliar",
    title: "Antibiótico — Foco Biliar",
    type: "Antibiótico por Foco",
    prescription: `Colecistite aguda leve (Grau I Tokyo):
1. Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h

Colecistite moderada/grave ou colangite:
2. Piperacilina-Tazobactam 4,5g EV 6/6h
3. OU Meropenem 1g EV 8/8h (se risco de MDR)

Pós-CPRE com colangite:
4. Manter esquema por 5-7 dias
5. Descalonar conforme cultura da bile

Germes: E. coli, Klebsiella, Enterococcus, anaeróbios
6. Hemoculturas + cultura da bile (na CPRE)
7. Duração: 5-7 dias (colecistite), 7-14 dias (colangite complicada)`,
    guideline: "Tokyo Guidelines 2018 / SBI",
  },
  {
    id: "rx-atb-pe-diabetico",
    title: "Antibiótico — Pé Diabético Infectado",
    type: "Antibiótico por Foco",
    prescription: `Leve (celulite superficial):
1. Cefalexina 500mg VO 6/6h + Metronidazol 400mg VO 8/8h
2. OU Amoxicilina-Clavulanato 875/125mg VO 12/12h

Moderado (úlcera profunda, celulite extensa):
3. Oxacilina 2g EV 4/4h + Ceftriaxona 1g EV 12/12h + Metronidazol 500mg EV 8/8h
4. OU Piperacilina-Tazobactam 4,5g EV 6/6h

Grave (sepse, osteomielite, necrose):
5. Meropenem 1g EV 8/8h + Vancomicina 15mg/kg EV 12/12h
6. Desbridamento cirúrgico urgente
7. RNM do pé (avaliar osteomielite)
8. Cultura profunda do tecido (swab superficial não serve)
9. Duração: 2-4 semanas (partes moles), 6 semanas (osteomielite)
10. Controle glicêmico rigoroso + curativos especializados`,
    guideline: "IDSA / SBD / IWGDF",
  },
  {
    id: "rx-atb-neutropenia-febril",
    title: "Antibiótico — Neutropenia Febril",
    type: "Antibiótico por Foco",
    prescription: `DEFINIÇÃO: Neutrófilos <500 + Tax ≥38,3°C (ou ≥38°C por >1h)

BUNDLE 1ª HORA:
1. Hemoculturas (2 pares periféricos + 1 do cateter se houver)
2. ATB empírico imediato:
   Cefepime 2g EV 8/8h (1ª escolha)
   OU Meropenem 1g EV 8/8h (se instável/colonizado MDR)
   OU Piperacilina-Tazobactam 4,5g EV 6/6h

Adicionar Vancomicina se:
3. Mucosite grave, infecção de cateter, celulite, pneumonia, instabilidade

Adicionar antifúngico se:
4. Febre persistente >4-7 dias: Caspofungina 70mg D1 → 50mg/dia
5. OU Anfotericina B lipossomal 3mg/kg/dia

Suporte:
6. G-CSF (Filgrastima): considerar se alto risco
7. Hemograma diário + PCR
8. Duração: até neutrófilos >500 por 2 dias + afebril`,
    warnings: "Neutropenia febril = emergência. ATB na 1ª HORA. Cada hora de atraso aumenta mortalidade.",
    guideline: "SBOC / NCCN / IDSA / ASCO",
  },
  {
    id: "rx-atb-infeccao-cateter",
    title: "Antibiótico — Infecção de Cateter Venoso Central",
    type: "Antibiótico por Foco",
    prescription: `1. Hemoculturas PAREADAS: periférica + do cateter (tempo diferencial)
2. Vancomicina 15-20mg/kg EV 12/12h (cobertura Gram+ incluindo MRSA)
3. + Cefepime 2g EV 8/8h OU Piperacilina-Tazobactam 4,5g EV 6/6h
4. Se instável/candidíase: adicionar antifúngico

Decisão sobre cateter:
5. REMOVER se: S. aureus, Candida, P. aeruginosa, tunelite, sepse grave
6. Tentar salvar se: CoNS sem complicação (lock terapia + ATB sistêmico)

Ajustar conforme cultura:
7. S. aureus MRSA: Vancomicina 14 dias (4-6 semanas se complicado)
8. S. aureus MSSA: Oxacilina 2g EV 4/4h → 14 dias
9. Candida: remover cateter + Fluconazol/Caspofungina 14 dias após última hemocultura positiva
10. Ecocardiograma se S. aureus (excluir endocardite)`,
    guideline: "IDSA / ANVISA / CCIH",
  },
  {
    id: "rx-atb-prostatico",
    title: "Antibiótico — Prostatite Aguda",
    type: "Antibiótico por Foco",
    prescription: `Prostatite aguda bacteriana:
1. Ciprofloxacino 500mg VO 12/12h por 4-6 semanas
2. OU Levofloxacino 500mg VO 1x/dia por 4-6 semanas
3. Se grave/sepse: Ceftriaxona 1g EV 12/12h + Gentamicina 5mg/kg 1x/dia
4. Após melhora: trocar para quinolona VO até completar 4-6 semanas

Suporte:
5. Dipirona 1g EV 6/6h
6. Cetoprofeno 100mg EV 12/12h
7. Alfa-bloqueador: Tansulosina 0,4mg VO 1x/dia (melhora sintomas obstrutivos)
8. SVD se retenção urinária aguda (NÃO fazer cateterismo intermitente)
9. USG próstata transretal se suspeita de abscesso (drenagem se >2cm)
10. Urocultura + hemoculturas (E. coli é o germe mais comum)`,
    guideline: "SBU / EAU / IDSA",
  },
  {
    id: "rx-atb-oftalmologico",
    title: "Antibiótico — Infecções Oftalmológicas",
    type: "Antibiótico por Foco",
    prescription: `Conjuntivite bacteriana:
1. Ciprofloxacino colírio 0,3% — 1 gota 4x/dia por 7 dias
2. OU Tobramicina colírio 0,3% — 1 gota 4x/dia por 7 dias

Celulite periorbitária (pré-septal):
3. Amoxicilina-Clavulanato 875/125mg VO 12/12h por 7-10 dias
4. Se grave: Ceftriaxona 1g EV 12/12h

Celulite orbitária (pós-septal — EMERGÊNCIA):
5. Ceftriaxona 2g EV 12/12h + Metronidazol 500mg EV 8/8h
6. OU Piperacilina-Tazobactam 4,5g EV 6/6h
7. TC órbitas com contraste urgente
8. Avaliação oftalmológica IMEDIATA
9. Drenagem cirúrgica se abscesso subperiósteo

Endoftalmite:
10. Injeção intravítrea: Vancomicina 1mg + Ceftazidima 2,25mg
11. EMERGÊNCIA oftalmológica — vitrectomia se necessário`,
    warnings: "Celulite orbitária: proptose, oftalmoplegia, perda visual = EMERGÊNCIA. Pode causar trombose de seio cavernoso.",
    guideline: "CBO / AAO / SBI",
  },
  {
    id: "rx-atb-otorrinolaringologico",
    title: "Antibiótico — Infecções ORL",
    type: "Antibiótico por Foco",
    prescription: `Otite média aguda:
1. Amoxicilina 50mg/kg/dia VO 8/8h por 10 dias (criança)
2. Amoxicilina 500mg VO 8/8h por 7 dias (adulto)
3. Se falha: Amoxicilina-Clavulanato ou Ceftriaxona IM

Sinusite aguda bacteriana (>10 dias ou piora após melhora):
4. Amoxicilina 500mg VO 8/8h por 10-14 dias
5. OU Amoxicilina-Clavulanato 875mg VO 12/12h
6. Se alergia: Levofloxacino 500mg 1x/dia

Amigdalite estreptocócica:
7. Amoxicilina 500mg VO 8/8h por 10 dias
8. OU Penicilina Benzatina 1.200.000 UI IM dose única

Otite externa:
9. Ciprofloxacino + Dexametasona otológico — 4 gotas 12/12h por 7 dias
10. NÃO usar aminoglicosídeos tópicos se perfuração timpânica`,
    guideline: "ABORL / AAO-HNS / IDSA",
  },
  {
    id: "rx-atb-empiema",
    title: "Antibiótico — Empiema Pleural",
    type: "Antibiótico por Foco",
    prescription: `Comunitário:
1. Ceftriaxona 2g EV 1x/dia + Clindamicina 600mg EV 8/8h
2. OU Amoxicilina-Clavulanato 1g EV 8/8h

Nosocomial:
3. Piperacilina-Tazobactam 4,5g EV 6/6h
4. OU Meropenem 1g EV 8/8h + Vancomicina 15-20mg/kg EV 12/12h

IMPORTANTE:
5. Drenagem torácica é o PRINCIPAL tratamento — ATB sozinho NÃO resolve
6. Tempo de ATB: 2-6 semanas (guiado por melhora clínica/laboratorial)
7. Se loculado: fibrinolítico intrapleural (Alteplase 10mg + DNAse 5mg 2x/dia por 3 dias)`,
    guideline: "BTS / SBPT / IDSA",
  },
  {
    id: "rx-atb-mordedura",
    title: "Antibiótico — Mordedura Animal/Humana",
    type: "Antibiótico por Foco",
    prescription: `Profilaxia (mordedura <24h, sem sinais de infecção):
1. Amoxicilina-Clavulanato 875mg VO 12/12h por 5 dias
2. Se alergia: Clindamicina 300mg VO 8/8h + Ciprofloxacino 500mg VO 12/12h

Infecção estabelecida:
3. Amoxicilina-Clavulanato 1g EV 8/8h (leve/moderada)
4. OU Piperacilina-Tazobactam 4,5g EV 6/6h (grave)
5. OU Ampicilina-Sulbactam 3g EV 6/6h

MORDEDURA HUMANA (maior risco de infecção):
6. Sempre profilaxia ATB
7. Pesquisar HIV, Hepatite B e C do agressor (se possível)

TODOS:
8. Profilaxia antitetânica (dT/dTpa conforme cartão)
9. Profilaxia antirrábica conforme protocolo MS (cão/gato observável x desconhecido)
10. Lavar ferida exaustivamente com SF e PVPI
11. NÃO suturar mordedura de gato ou mordedura com >6h`,
    guideline: "IDSA / MS / SVS",
  },
  {
    id: "rx-atb-fungico-invasivo",
    title: "Antifúngico Empírico — Infecção Fúngica Invasiva",
    type: "ATB por Foco",
    prescription: `CANDIDEMIA / CANDIDÍASE INVASIVA:
1ª linha: Micafungina 100mg EV 1x/dia OU Anidulafungina 200mg EV D1, depois 100mg/dia
Alternativa: Fluconazol 800mg EV D1, depois 400mg/dia (se paciente estável e Candida sensível)

ASPERGILOSE INVASIVA:
1ª linha: Voriconazol 6mg/kg EV 12/12h D1, depois 4mg/kg 12/12h
Alternativa: Isavuconazol 200mg EV 8/8h D1-2, depois 200mg/dia

MUCORMICOSE:
1ª linha: Anfotericina B lipossomal 5-10mg/kg/dia EV
+ Debridamento cirúrgico URGENTE

DURAÇÃO:
- Candidemia: 14 dias após última hemocultura negativa
- Aspergilose: mínimo 6-12 semanas
- Mucormicose: até resolução clínica

MONITORIZAÇÃO: Função renal, K+, Mg++ (Anfotericina). Nível sérico de Voriconazol (vale: 1-5,5 mcg/mL)`,
    notes: "Hemoculturas demoram 2-5 dias para Candida. Equinocandinas não cobrem Mucor/Rhizopus nem SNC.",
    warnings: "Anfotericina B desoxicolato: nefrotoxicidade grave. Preferir formulação lipossomal SEMPRE.",
    guideline: "IDSA / ESCMID / SBI",
  },
  {
    id: "rx-atb-ferida-operatoria",
    title: "ATB — Infecção de Ferida Operatória",
    type: "ATB por Foco",
    prescription: `SUPERFICIAL (pele e subcutâneo):
1. Abrir pontos + drenagem
2. Cefalexina 500mg VO 6/6h 7 dias OU
3. Amoxicilina-Clavulanato 875/125mg VO 12/12h 7 dias
4. Cultura + antibiograma do material drenado

PROFUNDA (fáscia/músculo):
1. Oxacilina 2g EV 4/4h + Ceftriaxona 2g EV 1x/dia OU
2. Piperacilina-Tazobactam 4,5g EV 6/6h
3. Se MRSA risco: adicionar Vancomicina 15-20mg/kg EV 12/12h
4. Debridamento cirúrgico
5. Cultura do tecido profundo

ÓRGÃO/ESPAÇO (cavidade):
1. Meropenem 1g EV 8/8h + Vancomicina 15-20mg/kg 12/12h
2. Drenagem percutânea ou cirúrgica
3. TC para avaliação de coleção`,
    notes: "Classificação CDC de infecção de sítio cirúrgico: superficial (<30 dias), profunda (<30-90 dias), órgão/espaço (<30-90 dias).",
    guideline: "ANVISA / CDC / IDSA / SBI",
  },
  {
    id: "rx-atb-pie-diabetico-wagner",
    title: "ATB — Pé Diabético por Classificação de Wagner",
    type: "ATB por Foco",
    prescription: `WAGNER 1 (úlcera superficial):
- Cefalexina 500mg VO 6/6h OU Amoxicilina-Clavulanato 875/125mg 12/12h
- Duração: 7-14 dias
- Curativo diário + desbridamento ambulatorial

WAGNER 2 (úlcera profunda sem abscesso):
- Amoxicilina-Clavulanato 875/125mg VO 12/12h OU
- Ciprofloxacino 500mg 12/12h + Clindamicina 300mg 6/6h
- Duração: 14-21 dias
- RX pé (osteomielite?)

WAGNER 3 (abscesso/osteomielite):
- Piperacilina-Tazobactam 4,5g EV 6/6h OU
- Ertapenem 1g EV 1x/dia
- Se MRSA risco: + Vancomicina 15-20mg/kg 12/12h
- Duração: 4-6 semanas (osteomielite)
- RNM pé + cultura profunda + desbridamento cirúrgico

WAGNER 4-5 (gangrena parcial/total):
- Meropenem 1g EV 8/8h + Vancomicina
- Avaliação Vascular URGENTE (revascularização?)
- Amputação se inviável`,
    notes: "Cultura superficial (swab) é INÚTIL. Coletar cultura PROFUNDA (tecido/osso). ITBI (índice tornozelo-braquial) para avaliação vascular.",
    warnings: "Diabético pode ter infecção grave sem febre ou leucocitose. Hiperglicemia persistente pode ser único sinal de infecção.",
    guideline: "IDSA / IWGDF / SBD / SBACV",
  },
  {
    id: "rx-atb-endoftalmite",
    title: "ATB — Endoftalmite Pós-Operatória",
    type: "ATB por Foco",
    prescription: `INTRAVÍTREO (URGÊNCIA — idealmente <6h):
1. Vancomicina 1mg/0,1mL intravítreo
2. Ceftazidima 2,25mg/0,1mL intravítreo
3. Dexametasona 0,4mg/0,1mL intravítreo (controverso)

SISTÊMICO (adjuvante):
4. Vancomicina 1g EV 12/12h
5. Ceftazidima 2g EV 8/8h
6. Moxifloxacino 400mg VO 1x/dia (boa penetração ocular)

TÓPICO:
7. Moxifloxacino 0,5% colírio 1 gota 1/1h (espaçar progressivamente)
8. Dexametasona 0,1% colírio 1 gota 2/2h (após 24-48h do ATB)
9. Atropina 1% colírio 1 gota 8/8h (cicloplégico)

VITRECTOMIA: se acuidade visual ≤ percepção luminosa (EVS criteria)`,
    notes: "Endoftalmite aguda (<6 semanas): Staphylococcus coagulase-negativo mais comum. Tardia (>6 semanas): Propionibacterium acnes.",
    warnings: "EMERGÊNCIA OFTALMOLÓGICA. Cada hora de atraso piora o prognóstico visual. Avaliação oftalmológica IMEDIATA.",
    guideline: "CBO / AAO / ESCRS / EVS",
  },
  {
    id: "rx-atb-artrite-septica",
    title: "ATB — Artrite Séptica",
    type: "ATB por Foco",
    prescription: `1. Artrocentese ANTES do ATB (Gram + cultura + cristais)
2. ATB empírico:
   - Adulto: Oxacilina 2g EV 4/4h (se MRSA: Vancomicina 15-20mg/kg 12/12h)
   - Criança >5 anos: Oxacilina 200mg/kg/dia EV 6/6h
   - Criança <5 anos: Oxacilina + Ceftriaxona (cobrir Kingella kingae)
   - Prótese articular: Vancomicina + Rifampicina 300mg VO 12/12h
3. Duração: 4-6 semanas (EV 2-4 semanas → transição VO)
4. Drenagem articular:
   - Joelho: artrocenteses de repetição ou artroscopia
   - Quadril: SEMPRE drenagem cirúrgica (artrotomia)
5. Imobilização inicial → mobilização precoce
6. Monitorizar: PCR seriada (melhor marcador de resposta)`,
    notes: "S. aureus é o germe mais comum em todas as idades (exceto neonato: Streptococcus B). Gonococo: jovem sexualmente ativo com poliartralgia migratória.",
    warnings: "Artrite séptica de quadril em criança: EMERGÊNCIA CIRÚRGICA. Atraso >24h: necrose da cabeça femoral.",
    guideline: "SBR / SBOT / IDSA / EULAR",
  },
  {
    id: "rx-atb-colangite-aguda",
    title: "ATB — Colangite Aguda (Tríade de Charcot)",
    type: "ATB por Foco",
    prescription: `GRAU I (leve — responde a ATB):
1. Ciprofloxacino 400mg EV 12/12h + Metronidazol 500mg EV 8/8h
   OU Amoxicilina-Clavulanato 1g EV 8/8h

GRAU II (moderada — sem disfunção orgânica):
2. Piperacilina-Tazobactam 4,5g EV 6/6h
   OU Ceftriaxona 2g EV 1x/dia + Metronidazol 500mg EV 8/8h

GRAU III (grave — Pêntade de Reynolds: Charcot + hipotensão + confusão):
3. Meropenem 1g EV 8/8h ± Vancomicina
4. Drenagem biliar de URGÊNCIA (<24h): CPRE
5. Se CPRE impossível: drenagem percutânea ou cirúrgica

TODOS:
6. Hidratação vigorosa
7. Analgesia (evitar Morfina — controvérsia sobre espasmo de Oddi)
8. Duração ATB: 4-7 dias após drenagem efetiva`,
    notes: "Tríade de Charcot: febre + icterícia + dor em HCD. Causa mais comum: coledocolitíase. CPRE é diagnóstica E terapêutica.",
    warnings: "Grau III: mortalidade >30% sem drenagem. NÃO atrasar drenagem por exames complementares.",
    guideline: "FBG / TG18 (Tokyo Guidelines) / WSES",
  },
  {
    id: "rx-atb-ocular",
    title: "ATB — Infecção Ocular",
    type: "Antibiótico por Foco",
    prescription: `CONJUNTIVITE BACTERIANA:
1. Moxifloxacino 0,5% colírio — 1 gota 6/6h por 5-7 dias
2. OU Tobramicina 0,3% colírio 6/6h por 7 dias

ÚLCERA DE CÓRNEA:
3. Moxifloxacino 0,5% colírio FORTIFICADO — 1 gota 1/1h (24h) → 2/2h
4. OU Colírio fortificado duplo: Cefazolina 5% + Gentamicina 1,4% alternados 1/1h
5. Cultura de raspado corneal ANTES do ATB (se possível)

ENDOFTALMITE:
6. EMERGÊNCIA — Injeção intravítrea: Vancomicina 1mg/0,1mL + Ceftazidima 2,25mg/0,1mL
7. Colírio Moxifloxacino 0,5% 1/1h + Prednisolona 1% 2/2h
8. Vitrectomia se: AV ≤ conta dedos (EVTS)`,
    notes: "Endoftalmite pós-operatória: 0,05-0,1% após facectomia. Sintomas 2-7 dias PO: dor, BAV, hipópio. É EMERGÊNCIA — cada hora conta.",
    warnings: "NÃO usar corticoide tópico sem avaliação oftalmológica (risco de perfuração em úlcera herpética/fúngica). Colírio de aminoglicosídeo: toxicidade epitelial se uso prolongado.",
    guideline: "CBO / AAO / ESCRS",
  },
  {
    id: "rx-atb-snc",
    title: "ATB — Infecção do SNC (Meningite / Encefalite)",
    type: "Antibiótico por Foco",
    prescription: `MENINGITE BACTERIANA (empírica):
Adulto imunocompetente:
1. Ceftriaxona 2g EV 12/12h + Dexametasona 0,15mg/kg EV 6/6h (iniciar ANTES ou junto com ATB)
2. Se >50 anos ou imunossuprimido: + Ampicilina 2g EV 4/4h (cobertura Listeria)

Neonatal:
3. Ampicilina 75mg/kg EV 8/8h + Gentamicina 5mg/kg EV 1x/dia
4. OU Ampicilina + Cefotaxima 50mg/kg EV 8/8h

ENCEFALITE HERPÉTICA:
5. Aciclovir 10mg/kg EV 8/8h por 14-21 dias

MENINGITE FÚNGICA (Criptococose):
6. Anfotericina B lipossomal 3-4mg/kg EV 1x/dia + Flucitosina 25mg/kg VO 6/6h (indução 2 semanas)
7. Manutenção: Fluconazol 400mg VO 1x/dia por ≥8 semanas`,
    notes: "Dexametasona na meningite bacteriana: reduz mortalidade por Pneumococo. Dar ANTES ou junto com ATB (após perde benefício). Quimioprofilaxia contactantes (Meningococo): Rifampicina 600mg VO 12/12h por 2 dias.",
    warnings: "NÃO atrasar ATB por punção lombar ou TC. Se contraindicação à PL: ATB empírico + TC → PL quando possível.",
    guideline: "SBI / IDSA / ESCMID / MS",
  },
];

