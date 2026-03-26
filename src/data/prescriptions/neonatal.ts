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
];
