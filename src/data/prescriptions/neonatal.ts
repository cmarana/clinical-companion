import { PrescriptionItem } from "./types";

export const neonatalItems: PrescriptionItem[] = [
  {
    id: "rx-neo-sepse",
    title: "Sepse Neonatal",
    type: "Prescrição Neonatal",
    prescription: `Sepse precoce (<72h de vida):
1. Ampicilina 50mg/kg EV 12/12h (≤7dias) ou 8/8h (>7dias)
2. Gentamicina 4mg/kg EV 1x/dia
3. SF 0,9% — acesso venoso
4. Glicemia capilar 4/4h (manter 40-110mg/dL)
5. Hemograma, PCR, hemocultura, líquor se suspeita

Sepse tardia (>72h):
6. Oxacilina 50mg/kg EV 6/6h + Amicacina 15mg/kg 1x/dia
7. OU Vancomicina 15mg/kg EV 12/12h (se MRSA) + Cefepime
8. Culturas antes do ATB`,
    notes: "Sinais sutis no RN: hipoatividade, recusa alimentar, instabilidade térmica, apneias.",
    guideline: "SBP / Neonatologia",
  },
  {
    id: "rx-neo-hipoglicemia",
    title: "Hipoglicemia Neonatal",
    type: "Prescrição Neonatal",
    prescription: `Assintomático (glicemia 25-46mg/dL):
1. Alimentar (seio materno ou fórmula)
2. Reavaliar glicemia em 30-60 min
3. Se persistir: Glicose 10% EV 2mL/kg em bolus

Sintomático ou <25mg/dL:
4. Glicose 10% — 2mL/kg EV em bolus lento (1mL/min)
5. Manter: SG 10% — VIG 6-8mg/kg/min
6. VIG = (Taxa de infusão mL/h × concentração glicose × 0,167) / peso(kg)
7. Reavaliar glicemia 30 min após bolus
8. Se refratária: Hidrocortisona 5mg/kg/dia ou Glucagon 0,1mg/kg IM`,
    notes: "Meta glicêmica: >47mg/dL. Hipoglicemia refratária: investigar hiperinsulinismo.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-neo-ictericia",
    title: "Icterícia Neonatal",
    type: "Prescrição Neonatal",
    prescription: `1. Bilirrubina total e frações (BT, BD, BI)
2. Tipagem sanguínea + Coombs direto
3. Hemograma + reticulócitos
4. Avaliar necessidade de fototerapia pelo nomograma de Bhutani

Fototerapia:
5. Fototerapia intensiva (irradiância ≥30 μW/cm²)
6. RN despido, proteção ocular (óculos próprios)
7. Amamentação mantida
8. Controle de BT a cada 6-12h

Exsanguineotransfusão:
9. Se BT >25mg/dL ou sinais de encefalopatia
10. Trocar 2 volemias (160mL/kg) com sangue irradiado`,
    warnings: "Icterícia <24h de vida = SEMPRE patológica. Investigar hemólise.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-neo-reanimacao",
    title: "Reanimação Neonatal",
    type: "Prescrição Neonatal",
    prescription: `Passos iniciais (30 segundos):
1. Aquecer, secar, posicionar, aspirar (se necessário)
2. Se FC <100 ou apneia: VPP com máscara e balão (40-60 ventilações/min)

Se FC <100 após 30s de VPP eficaz:
3. IOT (cânula 3,0-3,5mm para RN a termo)
4. Verificar posição e ventilação

Se FC <60 após IOT + ventilação eficaz:
5. Compressões torácicas 3:1 (3 compressões : 1 ventilação)
6. Adrenalina 0,01-0,03mg/kg EV (veia umbilical)
7. OU Adrenalina 0,05-0,1mg/kg via traqueal

Expansor volêmico:
8. SF 0,9% 10mL/kg EV em 5-10 min (se hipovolemia)`,
    notes: "O2: iniciar com 21% (ar ambiente) em RN ≥34 sem. Titular conforme SpO2.",
    guideline: "SBP / NRP 2020",
  },
  {
    id: "rx-neo-drogas",
    title: "Drogas de Emergência Neonatal",
    type: "Prescrição Neonatal",
    prescription: `ADRENALINA:
- EV: 0,01-0,03mg/kg (0,1-0,3mL/kg da solução 1:10.000)
- Traqueal: 0,05-0,1mg/kg

GLICOSE 10%:
- Hipoglicemia: 2mL/kg EV em bolus
- Manutenção: VIG 6-8mg/kg/min

SURFACTANTE (Survanta):
- 4mL/kg via traqueal (SDRA neonatal/PMH)

CAFEÍNA (citrato):
- Ataque: 20mg/kg EV
- Manutenção: 5mg/kg/dia EV/VO (apneia da prematuridade)

FENOBARBITAL:
- Ataque: 20mg/kg EV lento (convulsão neonatal)
- Manutenção: 3-5mg/kg/dia

VITAMINA K:
- 1mg IM ao nascer (profilaxia DHRN)

ANTIBIÓTICOS:
- Ampicilina 50mg/kg + Gentamicina 4mg/kg (sepse precoce)`,
    notes: "Sempre calcular doses por kg. RN prematuro: ajustar doses e intervalos.",
    guideline: "SBP / Neonatologia",
  },
  {
    id: "rx-neo-desconforto-resp",
    title: "Desconforto Respiratório Neonatal",
    type: "Prescrição Neonatal",
    prescription: `1. O2 suplementar para SpO2 alvo (prematuro: 90-95%, termo: >95%)
2. CPAP nasal: 5-7 cmH2O (1ª linha para prematuro)
3. Surfactante (Survanta 4mL/kg) via traqueal se: FiO2 >40% em CPAP, PMH confirmada
4. IOT se: apneia frequente, FiO2 >60%, acidose respiratória grave
5. Gasometria arterial seriada
6. Acesso venoso + GIG (glicose + eletrólitos)
7. Dieta zero inicialmente → leite materno por sonda quando estável
8. RX tórax (padrão reticulogranular = PMH)
9. Hemograma + PCR (excluir sepse)`,
    notes: "PMH (Doença da Membrana Hialina): mais comum em prematuros <34 sem. Surfactante é o tratamento.",
    guideline: "SBP / Neonatologia",
  },
  {
    id: "rx-neo-apneia",
    title: "Apneia da Prematuridade",
    type: "Prescrição Neonatal",
    prescription: `1. Monitorização cardiorrespiratória contínua
2. Estimulação tátil (1ª medida se apneia)
3. CPAP nasal 4-6 cmH2O (reduz frequência de apneias)
4. Cafeína citrato:
   - Ataque: 20mg/kg EV/VO
   - Manutenção: 5-10mg/kg/dia 1x/dia
5. Aminofilina (alternativa): 5mg/kg ataque → 2mg/kg 8/8h
6. Excluir causas secundárias: sepse, hipoglicemia, hipotermia, anemia
7. IOT + VM se apneias frequentes refratárias`,
    notes: "Cafeína é a droga de escolha. Pode ser mantida até 34-36 semanas de IG corrigida.",
    guideline: "SBP / Neonatologia",
  },
  {
    id: "rx-neo-convulsao",
    title: "Convulsão Neonatal",
    type: "Prescrição Neonatal",
    prescription: `1. Estabilizar via aérea + O2
2. Glicemia capilar → se <47: Glicose 10% 2mL/kg EV
3. Cálcio iônico → se baixo: Gluconato de Cálcio 10% 1-2mL/kg EV lento
4. Fenobarbital 20mg/kg EV lento (em 15-20 min) — 1ª escolha
5. Se persistir: dose adicional de Fenobarbital 10mg/kg (até total 40mg/kg)
6. Se refratária: Fenitoína 20mg/kg EV lento (em SF, monitorar ECG)
7. OU Midazolam 0,05-0,1mg/kg EV bolus → 0,1-0,4mg/kg/h BIC
8. Manutenção: Fenobarbital 3-5mg/kg/dia EV/VO
9. Investigar: USG transfontanelar, líquor, eletrólitos, TORCH, EEG
10. Monitorização contínua`,
    notes: "Causas mais comuns: encefalopatia hipóxico-isquêmica, infecção, distúrbio metabólico, hemorragia.",
    guideline: "SBP / Neonatologia",
  },
  {
    id: "rx-neo-enterocolite",
    title: "Enterocolite Necrosante (ECN)",
    type: "Prescrição Neonatal",
    prescription: `1. Suspender dieta (jejum absoluto)
2. SNG aberta (descompressão)
3. Acesso venoso: NPT (nutrição parenteral total)
4. ATB: Ampicilina 50mg/kg EV 12/12h + Gentamicina 4mg/kg/dia + Metronidazol 7,5mg/kg EV 8/8h
5. SF 0,9% — ressuscitação volêmica se instabilidade
6. Suporte vasopressor se choque (Dopamina/Dobutamina)
7. RX abdome seriado (6-8h): distensão, pneumatose, pneumoperitônio
8. Hemograma, PCR, gasometria, lactato seriados
9. Cirurgia se: pneumoperitônio (perfuração), deterioração clínica
10. Estadiamento de Bell (I-III)`,
    warnings: "Pneumoperitônio = perfuração = cirurgia de EMERGÊNCIA.",
    guideline: "SBP / Neonatologia",
  },
  {
    id: "rx-neo-hipotermia",
    title: "Hipotermia Terapêutica Neonatal",
    type: "Prescrição Neonatal",
    prescription: `Indicação: Asfixia perinatal (IG ≥36 sem, <6h de vida):
1. Temperatura alvo: 33,5°C ± 0,5°C (corporal total) por 72h
2. Manta de resfriamento OU gelo controlado
3. Monitorização contínua: temperatura esofágica/retal, ECG, SpO2
4. Sedação leve: Morfina 10-20mcg/kg/h EV se desconforto
5. Dieta zero nas primeiras 24-48h → iniciar cautamente
6. Exames seriados: gasometria, lactato, eletrólitos, coagulograma
7. EEG contínuo (padrão de surto-supressão)
8. RMN encéfalo após reaquecimento (D5-D7)
9. Reaquecimento gradual: 0,5°C/h até 36,5°C
10. NÃO usar anticonvulsivante profilático`,
    warnings: "Reaquecimento rápido causa convulsões e instabilidade. Máximo 0,5°C por hora.",
    guideline: "SBP / ILCOR Neonatal",
  },
  {
    id: "rx-neo-cardiopatia",
    title: "Cardiopatia Congênita — Suspeita Neonatal",
    type: "Prescrição Neonatal",
    prescription: `Sinais de alarme: cianose central, sopro, taquipneia, dificuldade de mamar

Canal-dependente (cianótica):
1. Prostaglandina E1 0,01-0,05mcg/kg/min EV contínua
2. NÃO oferecer O2 em alta concentração (fecha o canal)
3. Manter SpO2 75-85% (aceitável)

Não cianótica (sobrecarga):
4. Furosemida 1mg/kg EV 12/12h
5. Captopril 0,1mg/kg VO 8/8h (se IC)
6. Restrição hídrica (80-100mL/kg/dia)

Todos:
7. Ecocardiograma urgente
8. Teste de hiperóxia (O2 100% por 10 min — se PaO2 não sobe = cardiopatia)
9. Gasometria arterial pré e pós-ductal
10. ECG + RX tórax
11. Transferência para centro com cirurgia cardíaca pediátrica`,
    warnings: "Prostaglandina causa apneia — ter material de IOT pronto. NÃO suspender antes de confirmação.",
    guideline: "SBC / SBP",
  },
  {
    id: "rx-neo-asfixia",
    title: "Asfixia Perinatal — Manejo Inicial",
    type: "Prescrição Neonatal",
    prescription: `1. Passos iniciais: aquecer, posicionar, aspirar se necessário, secar, estimular
2. Se FC <100 ou apneia: VPP com ambu + O2 21-30% (prematuro) ou 21% (termo)
3. Se FC <60 após VPP eficaz por 30s: compressões torácicas 3:1
4. Se FC <60 mantida: Adrenalina 0,01-0,03mg/kg EV (veia umbilical)
5. Volume: SF 0,9% 10mL/kg EV se hipovolemia suspeitada
6. Gasometria de cordão (pH <7,0 ou BE <-16 = asfixia significativa)
7. Apgar 1 e 5 min (e 10 min se <7)
8. Glicemia capilar seriada
9. Avaliar critérios para hipotermia terapêutica
10. Exames: hemograma, gasometria, lactato, função renal/hepática, coagulação`,
    warnings: "RN a termo: iniciar VPP com O2 21% (ar ambiente). Prematuro <35sem: 21-30%.",
    guideline: "SBP / NRP / ILCOR",
  },
];
