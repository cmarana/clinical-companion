import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Activity, Brain, Droplets, Heart, Scale, Baby, Stethoscope, Syringe, Search } from "lucide-react";
import {
  HASBLEDCalculator, PERCCalculator, GRACECalculator, BishopCalculator, RansonCalculator,
  NEWSCalculator, MEWSCalculator, RoxIndexCalculator, SIRS_Calculator, MASCCCalculator,
  GlasgowBlatchfordCalculator, WellsTVPCalculator, CentorCalculator, ABCD2Calculator,
  OsmolarityCalculator, SodiumCorrectionCalculator, WaterDeficitCalculator,
  CorticosteroidConverterCalculator, OpioidConverterCalculator,
} from "@/components/calculators/CalculatorsBatch2";
import {
  PediatricWeightCalculator, PediatricDoseCalculator, AldretteCalculator,
  MallampatiCalculator, ASACalculator, FENaCalculator, TranstubularKGradientCalculator,
  BodySurfaceAreaCalculator, IdealBodyWeightCalculator, LightCriteriaCalculator,
  CaGradientCalculator, MAP_Calculator, QTcCalculator, FallRiskCalculator, BradenCalculator,
} from "@/components/calculators/CalculatorsBatch3";

interface CalculatorConfig {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  component: React.FC;
}

function GlasgowCalculator() {
  const [eye, setEye] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);
  const total = eye + verbal + motor;

  const getClassification = (score: number) => {
    if (score <= 8) return { text: "Grave (IOT indicada)", color: "text-destructive" };
    if (score <= 12) return { text: "Moderado", color: "text-warning-foreground" };
    return { text: "Leve", color: "text-success" };
  };

  const classification = getClassification(total);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="font-heading text-xs">Abertura Ocular (E)</Label>
        <Select value={String(eye)} onValueChange={(v) => setEye(Number(v))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 - Nenhuma</SelectItem>
            <SelectItem value="2">2 - À dor</SelectItem>
            <SelectItem value="3">3 - Ao comando verbal</SelectItem>
            <SelectItem value="4">4 - Espontânea</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="font-heading text-xs">Resposta Verbal (V)</Label>
        <Select value={String(verbal)} onValueChange={(v) => setVerbal(Number(v))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 - Nenhuma</SelectItem>
            <SelectItem value="2">2 - Sons incompreensíveis</SelectItem>
            <SelectItem value="3">3 - Palavras inapropriadas</SelectItem>
            <SelectItem value="4">4 - Confusa</SelectItem>
            <SelectItem value="5">5 - Orientada</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="font-heading text-xs">Resposta Motora (M)</Label>
        <Select value={String(motor)} onValueChange={(v) => setMotor(Number(v))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 - Nenhuma</SelectItem>
            <SelectItem value="2">2 - Extensão anormal</SelectItem>
            <SelectItem value="3">3 - Flexão anormal</SelectItem>
            <SelectItem value="4">4 - Retirada à dor</SelectItem>
            <SelectItem value="5">5 - Localiza a dor</SelectItem>
            <SelectItem value="6">6 - Obedece comandos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${classification.color}`}>{classification.text}</p>
        <p className="text-xs text-muted-foreground">E{eye} V{verbal} M{motor}</p>
      </div>
    </div>
  );
}

function CreatinineClearanceCalculator() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [sex, setSex] = useState("male");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const a = Number(age), w = Number(weight), cr = Number(creatinine);
    if (!a || !w || !cr) return;
    let clcr = ((140 - a) * w) / (72 * cr);
    if (sex === "female") clcr *= 0.85;
    setResult(Math.round(clcr * 10) / 10);
  };

  const getClassification = (v: number) => {
    if (v >= 90) return "Normal";
    if (v >= 60) return "DRC Estágio 2";
    if (v >= 30) return "DRC Estágio 3";
    if (v >= 15) return "DRC Estágio 4";
    return "DRC Estágio 5 (Diálise)";
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Fórmula de Cockcroft-Gault</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Idade (anos)</Label>
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="60" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Peso (kg)</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Creatinina (mg/dL)</Label>
          <Input type="number" value={creatinine} onChange={(e) => setCreatinine(e.target.value)} placeholder="1.2" step="0.1" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Sexo</Label>
          <Select value={sex} onValueChange={setSex}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Masculino</SelectItem>
              <SelectItem value="female">Feminino</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={calculate} className="w-full" size="sm">Calcular</Button>
      {result !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{result} <span className="text-base font-normal">mL/min</span></p>
          <p className="font-heading text-sm font-semibold text-primary">{getClassification(result)}</p>
        </div>
      )}
    </div>
  );
}

function DoseCalculator() {
  const [weight, setWeight] = useState("");
  const [dosePerKg, setDosePerKg] = useState("");
  const [concentration, setConcentration] = useState("");

  const dose = Number(weight) && Number(dosePerKg) ? Number(weight) * Number(dosePerKg) : null;
  const volume = dose && Number(concentration) ? dose / Number(concentration) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Calcular dose total e volume com base no peso</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Peso (kg)</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Dose (mg/kg)</Label>
          <Input type="number" value={dosePerKg} onChange={(e) => setDosePerKg(e.target.value)} placeholder="10" step="0.1" />
        </div>
      </div>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Concentração da solução (mg/mL) — opcional</Label>
        <Input type="number" value={concentration} onChange={(e) => setConcentration(e.target.value)} placeholder="50" step="0.1" />
      </div>
      {dose !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{Math.round(dose * 100) / 100} <span className="text-base font-normal">mg</span></p>
          {volume !== null && (
            <p className="font-heading text-sm text-primary font-semibold">Volume: {Math.round(volume * 100) / 100} mL</p>
          )}
        </div>
      )}
    </div>
  );
}

function IMCCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const heightM = Number(height) / 100;
  const imc = Number(weight) && heightM ? Number(weight) / (heightM * heightM) : null;

  const getClassification = (v: number) => {
    if (v < 18.5) return { text: "Abaixo do peso", color: "text-warning-foreground" };
    if (v < 25) return { text: "Normal", color: "text-success" };
    if (v < 30) return { text: "Sobrepeso", color: "text-warning-foreground" };
    if (v < 35) return { text: "Obesidade I", color: "text-destructive" };
    if (v < 40) return { text: "Obesidade II", color: "text-destructive" };
    return { text: "Obesidade III", color: "text-destructive" };
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Peso (kg)</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Altura (cm)</Label>
          <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="170" />
        </div>
      </div>
      {imc !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{(Math.round(imc * 10) / 10).toFixed(1)}</p>
          {(() => { const c = getClassification(imc); return <p className={`font-heading text-sm font-semibold ${c.color}`}>{c.text}</p>; })()}
          <p className="text-xs text-muted-foreground">Peso ideal: {Math.round(22 * heightM * heightM)} kg</p>
        </div>
      )}
    </div>
  );
}

function SofaCalculator() {
  const [resp, setResp] = useState(0);
  const [coag, setCoag] = useState(0);
  const [liver, setLiver] = useState(0);
  const [cardio, setCardio] = useState(0);
  const [neuro, setNeuro] = useState(0);
  const [renal, setRenal] = useState(0);
  const total = resp + coag + liver + cardio + neuro + renal;

  const getMortality = (score: number) => {
    if (score <= 1) return "<3%";
    if (score <= 3) return "~5%";
    if (score <= 5) return "~20%";
    if (score <= 7) return "~20-30%";
    if (score <= 9) return "~33%";
    if (score <= 11) return "~50%";
    return ">90%";
  };

  const ScoreSelect = ({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) => (
    <div className="space-y-1">
      <Label className="font-heading text-xs">{label}</Label>
      <Select value={String(value)} onValueChange={(v) => onChange(Number(v))}>
        <SelectTrigger><SelectValue /></SelectTrigger>
        <SelectContent>
          {[0, 1, 2, 3, 4].map((n) => (
            <SelectItem key={n} value={String(n)}>{n}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Avaliação de disfunção orgânica na sepse</p>
      <div className="grid grid-cols-2 gap-3">
        <ScoreSelect label="Respiratório (PaO2/FiO2)" value={resp} onChange={setResp} />
        <ScoreSelect label="Coagulação (Plaquetas)" value={coag} onChange={setCoag} />
        <ScoreSelect label="Hepático (Bilirrubina)" value={liver} onChange={setLiver} />
        <ScoreSelect label="Cardiovascular (PAM)" value={cardio} onChange={setCardio} />
        <ScoreSelect label="Neurológico (Glasgow)" value={neuro} onChange={setNeuro} />
        <ScoreSelect label="Renal (Creatinina)" value={renal} onChange={setRenal} />
      </div>
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className="font-heading text-sm font-semibold text-primary">Mortalidade estimada: {getMortality(total)}</p>
      </div>
    </div>
  );
}

function InfusionRateCalculator() {
  const [weight, setWeight] = useState("");
  const [dose, setDose] = useState("");
  const [concentration, setConcentration] = useState("");

  const w = Number(weight), d = Number(dose), c = Number(concentration);
  const rate = w && d && c ? (d * w * 60) / (c * 1000) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Calcular velocidade de infusão (BIC) em mL/h</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Peso (kg)</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Dose (mcg/kg/min)</Label>
          <Input type="number" value={dose} onChange={(e) => setDose(e.target.value)} placeholder="0.1" step="0.01" />
        </div>
      </div>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Concentração da solução (mcg/mL)</Label>
        <Input type="number" value={concentration} onChange={(e) => setConcentration(e.target.value)} placeholder="64" />
      </div>
      {rate !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{(Math.round(rate * 100) / 100).toFixed(1)} <span className="text-base font-normal">mL/h</span></p>
        </div>
      )}
    </div>
  );
}

function WellsCalculator() {
  const items = [
    { label: "Sinais clínicos de TVP", pts: 3 },
    { label: "Diagnóstico alternativo menos provável que TEP", pts: 3 },
    { label: "FC >100 bpm", pts: 1.5 },
    { label: "Imobilização >3 dias ou cirurgia <4 semanas", pts: 1.5 },
    { label: "TVP ou TEP prévio", pts: 1.5 },
    { label: "Hemoptise", pts: 1 },
    { label: "Câncer ativo (tratamento <6 meses)", pts: 1 },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, item, i) => sum + (checked[i] ? item.pts : 0), 0);
  const risk = total <= 1 ? "Baixo risco" : total <= 6 ? "Risco intermediário" : "Alto risco";
  const color = total <= 1 ? "text-success" : total <= 6 ? "text-warning-foreground" : "text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Probabilidade pré-teste para TEP</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border" />
          <span className="flex-1">{item.label}</span>
          <span className="text-muted-foreground font-heading">+{item.pts}</span>
        </label>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{risk}</p>
      </div>
    </div>
  );
}

function CHA2DS2Calculator() {
  const items = [
    { label: "IC congestiva / disfunção VE", pts: 1 },
    { label: "Hipertensão", pts: 1 },
    { label: "Idade ≥75 anos", pts: 2 },
    { label: "Diabetes mellitus", pts: 1 },
    { label: "AVC/AIT/tromboembolismo prévio", pts: 2 },
    { label: "Doença vascular (IAM, DAP, placa aórtica)", pts: 1 },
    { label: "Idade 65-74 anos", pts: 1 },
    { label: "Sexo feminino", pts: 1 },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, item, i) => sum + (checked[i] ? item.pts : 0), 0);
  const rec = total === 0 ? "Sem anticoagulação" : total === 1 ? "Considerar anticoagulação" : "Anticoagulação recomendada";
  const color = total === 0 ? "text-success" : total === 1 ? "text-warning-foreground" : "text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Risco de AVC em FA (CHA₂DS₂-VASc)</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border" />
          <span className="flex-1">{item.label}</span>
          <span className="text-muted-foreground font-heading">+{item.pts}</span>
        </label>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{rec}</p>
      </div>
    </div>
  );
}

function CURB65Calculator() {
  const items = [
    { label: "Confusão mental", pts: 1 },
    { label: "Ureia >50 mg/dL (>7 mmol/L)", pts: 1 },
    { label: "FR ≥30 irpm", pts: 1 },
    { label: "PAS <90 ou PAD ≤60 mmHg", pts: 1 },
    { label: "Idade ≥65 anos", pts: 1 },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, _, i) => sum + (checked[i] ? 1 : 0), 0);
  const rec = total <= 1 ? "Ambulatorial" : total === 2 ? "Internação breve / observação" : "Internação (considerar UTI se 4-5)";
  const color = total <= 1 ? "text-success" : total === 2 ? "text-warning-foreground" : "text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Gravidade de pneumonia comunitária</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border" />
          <span className="flex-1">{item.label}</span>
        </label>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{rec}</p>
        <p className="text-xs text-muted-foreground">Mortalidade: {total <= 1 ? "<3%" : total === 2 ? "~9%" : total === 3 ? "~22%" : ">30%"}</p>
      </div>
    </div>
  );
}

function QSofaCalculator() {
  const items = [
    { label: "PAS ≤100 mmHg", pts: 1 },
    { label: "FR ≥22 irpm", pts: 1 },
    { label: "Alteração do nível de consciência (Glasgow <15)", pts: 1 },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, _, i) => sum + (checked[i] ? 1 : 0), 0);
  const rec = total < 2 ? "Baixo risco — reavaliar" : "Alto risco de sepse — investigar disfunção orgânica (SOFA)";
  const color = total < 2 ? "text-success" : "text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Triagem rápida para sepse à beira-leito</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border" />
          <span className="flex-1">{item.label}</span>
        </label>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/3</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{rec}</p>
      </div>
    </div>
  );
}

function ApgarCalculator() {
  const cats = [
    { label: "Frequência cardíaca", opts: ["Ausente (0)", "<100 bpm (1)", "≥100 bpm (2)"] },
    { label: "Esforço respiratório", opts: ["Ausente (0)", "Irregular/fraco (1)", "Choro forte (2)"] },
    { label: "Tônus muscular", opts: ["Flácido (0)", "Alguma flexão (1)", "Movimento ativo (2)"] },
    { label: "Irritabilidade reflexa", opts: ["Sem resposta (0)", "Careta (1)", "Choro/tosse (2)"] },
    { label: "Cor", opts: ["Cianose/palidez (0)", "Cianose extremidades (1)", "Rosado (2)"] },
  ];
  const [vals, setVals] = useState<number[]>(new Array(cats.length).fill(2));
  const total = vals.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Avaliação do recém-nascido (1º e 5º minuto)</p>
      {cats.map((cat, ci) => (
        <div key={ci} className="space-y-1">
          <Label className="font-heading text-xs">{cat.label}</Label>
          <Select value={String(vals[ci])} onValueChange={(v) => { const n = [...vals]; n[ci] = Number(v); setVals(n); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {cat.opts.map((opt, oi) => (
                <SelectItem key={oi} value={String(oi)}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/10</p>
        <p className={`font-heading text-sm font-semibold ${total >= 7 ? "text-success" : total >= 4 ? "text-warning-foreground" : "text-destructive"}`}>
          {total >= 7 ? "Normal" : total >= 4 ? "Moderadamente deprimido" : "Gravemente deprimido"}
        </p>
      </div>
    </div>
  );
}

function ParklandCalculator() {
  const [weight, setWeight] = useState("");
  const [burn, setBurn] = useState("");
  const w = Number(weight), b = Number(burn);
  const total = w && b ? 4 * w * b : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Reposição volêmica em queimados (Ringer Lactato)</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Peso (kg)</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">% SCQ</Label>
          <Input type="number" value={burn} onChange={(e) => setBurn(e.target.value)} placeholder="30" />
        </div>
      </div>
      {total !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{total} <span className="text-base font-normal">mL/24h</span></p>
          <p className="font-heading text-sm text-primary font-semibold">1as 8h: {Math.round(total / 2)} mL | 16h seguintes: {Math.round(total / 2)} mL</p>
          <p className="text-xs text-muted-foreground">Fórmula: 4 × peso × %SCQ</p>
        </div>
      )}
    </div>
  );
}

function AnionGapCalculator() {
  const [na, setNa] = useState("");
  const [cl, setCl] = useState("");
  const [hco3, setHco3] = useState("");
  const [albumin, setAlbumin] = useState("4.0");
  const n = Number(na), c = Number(cl), h = Number(hco3), a = Number(albumin);
  const ag = n && c && h ? n - (c + h) : null;
  const corrected = ag !== null && a ? ag + 2.5 * (4 - a) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">AG = Na - (Cl + HCO3)</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Na⁺ (mEq/L)</Label>
          <Input type="number" value={na} onChange={(e) => setNa(e.target.value)} placeholder="140" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Cl⁻ (mEq/L)</Label>
          <Input type="number" value={cl} onChange={(e) => setCl(e.target.value)} placeholder="104" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">HCO₃⁻ (mEq/L)</Label>
          <Input type="number" value={hco3} onChange={(e) => setHco3(e.target.value)} placeholder="24" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Albumina (g/dL)</Label>
          <Input type="number" value={albumin} onChange={(e) => setAlbumin(e.target.value)} placeholder="4.0" step="0.1" />
        </div>
      </div>
      {ag !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{Math.round(ag * 10) / 10}</p>
          {corrected !== null && <p className="text-xs text-muted-foreground">Corrigido pela albumina: {Math.round(corrected * 10) / 10}</p>}
          <p className={`font-heading text-sm font-semibold ${ag > 12 ? "text-destructive" : "text-success"}`}>
            {ag > 12 ? "AG elevado — acidose metabólica com AG" : "AG normal (8-12)"}
          </p>
        </div>
      )}
    </div>
  );
}

function TIMICalculator() {
  const items = [
    { label: "Idade ≥65 anos" },
    { label: "≥3 fatores de risco para DAC" },
    { label: "Estenose coronariana conhecida ≥50%" },
    { label: "Uso de AAS nos últimos 7 dias" },
    { label: "≥2 episódios de angina nas últimas 24h" },
    { label: "Desvio de ST ≥0,5mm" },
    { label: "Marcadores cardíacos elevados (troponina)" },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, _, i) => sum + (checked[i] ? 1 : 0), 0);
  const risk = total <= 2 ? "Baixo" : total <= 4 ? "Intermediário" : "Alto";
  const color = total <= 2 ? "text-success" : total <= 4 ? "text-warning-foreground" : "text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Risco em SCA sem supra de ST</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border" />
          <span className="flex-1">{item.label}</span>
        </label>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/7</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>Risco {risk}</p>
      </div>
    </div>
  );
}

function ChildPughCalculator() {
  const cats = [
    { label: "Bilirrubina", opts: ["<2 (1 pt)", "2-3 (2 pts)", ">3 (3 pts)"] },
    { label: "Albumina", opts: [">3.5 (1 pt)", "2.8-3.5 (2 pts)", "<2.8 (3 pts)"] },
    { label: "INR", opts: ["<1.7 (1 pt)", "1.7-2.3 (2 pts)", ">2.3 (3 pts)"] },
    { label: "Ascite", opts: ["Ausente (1 pt)", "Leve (2 pts)", "Moderada/tensa (3 pts)"] },
    { label: "Encefalopatia", opts: ["Ausente (1 pt)", "Grau I-II (2 pts)", "Grau III-IV (3 pts)"] },
  ];
  const [vals, setVals] = useState<number[]>(new Array(cats.length).fill(1));
  const total = vals.reduce((a, b) => a + b, 0);
  const cls = total <= 6 ? "A" : total <= 9 ? "B" : "C";
  const mort = total <= 6 ? "5-6% (1 ano)" : total <= 9 ? "20% (1 ano)" : "55% (1 ano)";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Classificação de gravidade na cirrose</p>
      {cats.map((cat, ci) => (
        <div key={ci} className="space-y-1">
          <Label className="font-heading text-xs">{cat.label}</Label>
          <Select value={String(vals[ci])} onValueChange={(v) => { const n = [...vals]; n[ci] = Number(v); setVals(n); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {cat.opts.map((opt, oi) => (
                <SelectItem key={oi} value={String(oi + 1)}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total} <span className="text-base font-normal">— Classe {cls}</span></p>
        <p className={`font-heading text-sm font-semibold ${cls === "A" ? "text-success" : cls === "B" ? "text-warning-foreground" : "text-destructive"}`}>
          Mortalidade: {mort}
        </p>
      </div>
    </div>
  );
}

function HEARTScoreCalculator() {
  const cats = [
    { label: "História", opts: ["Pouco suspeita (0)", "Moderadamente suspeita (1)", "Altamente suspeita (2)"] },
    { label: "ECG", opts: ["Normal (0)", "Alteração inespecífica (1)", "Desvio ST significativo (2)"] },
    { label: "Idade", opts: ["<45 anos (0)", "45-64 anos (1)", "≥65 anos (2)"] },
    { label: "Fatores de risco", opts: ["Nenhum (0)", "1-2 fatores (1)", "≥3 fatores ou aterosclerose (2)"] },
    { label: "Troponina", opts: ["Normal (0)", "1-3x LSN (1)", ">3x LSN (2)"] },
  ];
  const [vals, setVals] = useState<number[]>(new Array(cats.length).fill(0));
  const total = vals.reduce((a, b) => a + b, 0);
  const risk = total <= 3 ? "Baixo risco (1.7%)" : total <= 6 ? "Risco intermediário (12-16.6%)" : "Alto risco (50-65%)";
  const color = total <= 3 ? "text-success" : total <= 6 ? "text-warning-foreground" : "text-destructive";
  const conduct = total <= 3 ? "Alta precoce — investigação ambulatorial" : total <= 6 ? "Observação, troponina seriada, considerar teste funcional" : "Internação, considerar cateterismo";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Estratificação de risco na dor torácica aguda</p>
      {cats.map((cat, ci) => (
        <div key={ci} className="space-y-1">
          <Label className="font-heading text-xs">{cat.label}</Label>
          <Select value={String(vals[ci])} onValueChange={(v) => { const n = [...vals]; n[ci] = Number(v); setVals(n); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {cat.opts.map((opt, oi) => (
                <SelectItem key={oi} value={String(oi)}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/10</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{risk}</p>
        <p className="text-xs text-muted-foreground">{conduct}</p>
      </div>
    </div>
  );
}

function NIHSSCalculator() {
  const items = [
    { label: "1a. Nível de consciência", opts: ["Alerta (0)","Sonolento (1)","Estuporoso (2)","Coma (3)"] },
    { label: "1b. Perguntas (mês/idade)", opts: ["Ambas corretas (0)","Uma correta (1)","Nenhuma (2)"] },
    { label: "1c. Comandos (abrir/fechar olhos, apertar mão)", opts: ["Ambos corretos (0)","Um correto (1)","Nenhum (2)"] },
    { label: "2. Melhor olhar conjugado", opts: ["Normal (0)","Paralisia parcial (1)","Desvio forçado (2)"] },
    { label: "3. Visual (campos)", opts: ["Sem perda (0)","Hemianopsia parcial (1)","Hemianopsia completa (2)","Bilateral (3)"] },
    { label: "4. Paralisia facial", opts: ["Normal (0)","Menor (1)","Parcial (2)","Completa (3)"] },
    { label: "5a. Motor braço esq.", opts: ["Sem queda (0)","Queda (1)","Algum esforço (2)","Sem esforço (3)","Nenhum (4)"] },
    { label: "5b. Motor braço dir.", opts: ["Sem queda (0)","Queda (1)","Algum esforço (2)","Sem esforço (3)","Nenhum (4)"] },
    { label: "6a. Motor perna esq.", opts: ["Sem queda (0)","Queda (1)","Algum esforço (2)","Sem esforço (3)","Nenhum (4)"] },
    { label: "6b. Motor perna dir.", opts: ["Sem queda (0)","Queda (1)","Algum esforço (2)","Sem esforço (3)","Nenhum (4)"] },
    { label: "7. Ataxia de membros", opts: ["Ausente (0)","Um membro (1)","Dois membros (2)"] },
    { label: "8. Sensibilidade", opts: ["Normal (0)","Perda leve (1)","Perda grave (2)"] },
    { label: "9. Linguagem", opts: ["Normal (0)","Afasia leve (1)","Afasia grave (2)","Mudo/afasia global (3)"] },
    { label: "10. Disartria", opts: ["Normal (0)","Leve (1)","Grave (2)"] },
    { label: "11. Extinção/inatenção", opts: ["Normal (0)","Parcial (1)","Completa (2)"] },
  ];
  const [vals, setVals] = useState<number[]>(new Array(items.length).fill(0));
  const total = vals.reduce((a, b) => a + b, 0);
  const sev = total === 0 ? "Sem déficit" : total <= 4 ? "Leve" : total <= 15 ? "Moderado" : total <= 20 ? "Grave" : "Muito grave";
  const color = total <= 4 ? "text-success" : total <= 15 ? "text-warning-foreground" : "text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Escala de AVC do NIH — avaliação de gravidade</p>
      {items.map((item, i) => (
        <div key={i} className="space-y-1">
          <Label className="font-heading text-xs">{item.label}</Label>
          <Select value={String(vals[i])} onValueChange={(v) => { const n = [...vals]; n[i] = Number(v); setVals(n); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {item.opts.map((opt, oi) => (
                <SelectItem key={oi} value={String(oi)}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/42</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{sev}</p>
        {total >= 4 && total <= 25 && <p className="text-xs text-muted-foreground">Janela terapêutica: considerar trombólise (rt-PA) se ≤4,5h</p>}
      </div>
    </div>
  );
}

function MELDCalculator() {
  const [bilirubin, setBilirubin] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [inr, setInr] = useState("");
  const [sodium, setSodium] = useState("");

  const b = Math.max(1, Number(bilirubin));
  const c = Math.max(1, Math.min(4, Number(creatinine)));
  const i = Math.max(1, Number(inr));
  const na = Math.min(137, Math.max(125, Number(sodium) || 137));

  const canCalc = Number(bilirubin) && Number(creatinine) && Number(inr);
  const meld = canCalc ? Math.round(10 * (0.957 * Math.log(c) + 0.378 * Math.log(b) + 1.12 * Math.log(i) + 0.643)) : null;
  const meldNa = meld !== null && Number(sodium) ? Math.round(meld + 1.32 * (137 - na) - 0.033 * meld * (137 - na)) : null;

  const getMortality = (s: number) => {
    if (s <= 9) return "1.9%";
    if (s <= 19) return "6%";
    if (s <= 29) return "19.6%";
    if (s <= 39) return "52.6%";
    return "71.3%";
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Gravidade de hepatopatia / prioridade em transplante</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Bilirrubina (mg/dL)</Label>
          <Input type="number" value={bilirubin} onChange={(e) => setBilirubin(e.target.value)} placeholder="1.0" step="0.1" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Creatinina (mg/dL)</Label>
          <Input type="number" value={creatinine} onChange={(e) => setCreatinine(e.target.value)} placeholder="1.0" step="0.1" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">INR</Label>
          <Input type="number" value={inr} onChange={(e) => setInr(e.target.value)} placeholder="1.0" step="0.1" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Na⁺ (mEq/L) — MELD-Na</Label>
          <Input type="number" value={sodium} onChange={(e) => setSodium(e.target.value)} placeholder="140" />
        </div>
      </div>
      {meld !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{meld}</p>
          {meldNa !== null && <p className="font-heading text-sm text-primary font-semibold">MELD-Na: {meldNa}</p>}
          <p className={`font-heading text-sm font-semibold ${meld <= 9 ? "text-success" : meld <= 19 ? "text-warning-foreground" : "text-destructive"}`}>
            Mortalidade 3 meses: {getMortality(meldNa ?? meld)}
          </p>
        </div>
      )}
    </div>
  );
}

function APACHEIICalculator() {
  const [temp, setTemp] = useState(""); const [pam, setPam] = useState(""); const [fc, setFc] = useState("");
  const [fr, setFr] = useState(""); const [pao2, setPao2] = useState(""); const [ph, setPh] = useState("");
  const [na2, setNa2] = useState(""); const [k, setK] = useState(""); const [cr2, setCr2] = useState("");
  const [ht, setHt] = useState(""); const [wbc, setWbc] = useState(""); const [gcs, setGcs] = useState("15");
  const [age2, setAge2] = useState(""); const [chronic, setChronic] = useState("0");

  const scoreTemp = (v:number)=>v>=41||v<=29.9?4:v>=39||v<=31.9?3:v>=38.5||v<=33.9?1:0;
  const scorePam = (v:number)=>v>=160||v<=49?4:v>=130||v<=69?2:v>=110?2:0;
  const scoreFc = (v:number)=>v>=180||v<=39?4:v>=140||v<=54?3:v>=110||v<=69?2:0;
  const scoreFr = (v:number)=>v>=50||v<=5?4:v>=35?3:v>=25||v<=9?1:0;
  const scorePh2 = (v:number)=>v>=7.7||v<7.15?4:v>=7.6||v<7.25?3:v>=7.5||v<7.33?2:0;

  const calculate = () => {
    const t=Number(temp),p=Number(pam),f=Number(fc),r=Number(fr),o=Number(pao2),
      ph2=Number(ph),n=Number(na2),kv=Number(k),c=Number(cr2),h=Number(ht),w=Number(wbc),
      g=Number(gcs),a=Number(age2),ch=Number(chronic);
    if(!t||!p||!f||!r||!a) return null;
    let s = scoreTemp(t)+scorePam(p)+scoreFc(f)+scoreFr(r);
    if(ph2) s+=scorePh2(ph2);
    s += (15-g);
    if(a>=75) s+=6; else if(a>=65) s+=5; else if(a>=55) s+=3; else if(a>=45) s+=2;
    s += ch;
    return s;
  };
  const score = calculate();
  const mort = (s:number)=>s<=4?"~4%":s<=9?"~8%":s<=14?"~15%":s<=19?"~25%":s<=24?"~40%":s<=29?"~55%":s<=34?"~73%":">85%";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Gravidade na UTI — primeiras 24h (simplificado)</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1"><Label className="font-heading text-[10px]">Temp (°C)</Label><Input type="number" value={temp} onChange={e=>setTemp(e.target.value)} placeholder="37" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">PAM (mmHg)</Label><Input type="number" value={pam} onChange={e=>setPam(e.target.value)} placeholder="80" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">FC (bpm)</Label><Input type="number" value={fc} onChange={e=>setFc(e.target.value)} placeholder="80" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">FR (irpm)</Label><Input type="number" value={fr} onChange={e=>setFr(e.target.value)} placeholder="16" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">pH</Label><Input type="number" value={ph} onChange={e=>setPh(e.target.value)} placeholder="7.4" step="0.01" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">PaO₂</Label><Input type="number" value={pao2} onChange={e=>setPao2(e.target.value)} placeholder="90" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">Na⁺</Label><Input type="number" value={na2} onChange={e=>setNa2(e.target.value)} placeholder="140" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">K⁺</Label><Input type="number" value={k} onChange={e=>setK(e.target.value)} placeholder="4" step="0.1" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">Cr (mg/dL)</Label><Input type="number" value={cr2} onChange={e=>setCr2(e.target.value)} placeholder="1" step="0.1" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">Ht (%)</Label><Input type="number" value={ht} onChange={e=>setHt(e.target.value)} placeholder="40" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">Leucócitos</Label><Input type="number" value={wbc} onChange={e=>setWbc(e.target.value)} placeholder="10000" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">Glasgow</Label><Input type="number" value={gcs} onChange={e=>setGcs(e.target.value)} placeholder="15" className="h-8 text-xs"/></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-[10px]">Idade (anos)</Label><Input type="number" value={age2} onChange={e=>setAge2(e.target.value)} placeholder="60" className="h-8 text-xs"/></div>
        <div className="space-y-1">
          <Label className="font-heading text-[10px]">Doença crônica</Label>
          <Select value={chronic} onValueChange={setChronic}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="0">Não (0)</SelectItem><SelectItem value="2">Pós-op eletivo (2)</SelectItem><SelectItem value="5">Não-cirúrgico ou pós-op urgência (5)</SelectItem></SelectContent>
          </Select>
        </div>
      </div>
      {score !== null && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="font-heading text-3xl font-bold">{score}</p>
          <p className={`font-heading text-sm font-semibold ${score<=9?"text-success":score<=19?"text-warning-foreground":"text-destructive"}`}>
            Mortalidade estimada: {mort(score)}
          </p>
        </div>
      )}
    </div>
  );
}

const calculators: CalculatorConfig[] = [
  // — Originais —
  { id: "glasgow", title: "Escala de Glasgow", icon: <Brain size={18} />, description: "Nível de consciência (3-15)", component: GlasgowCalculator },
  { id: "sofa", title: "SOFA Score", icon: <Activity size={18} />, description: "Disfunção orgânica na sepse", component: SofaCalculator },
  { id: "qsofa", title: "qSOFA", icon: <Activity size={18} />, description: "Triagem rápida para sepse", component: QSofaCalculator },
  { id: "heart", title: "HEART Score", icon: <Heart size={18} />, description: "Risco na dor torácica", component: HEARTScoreCalculator },
  { id: "nihss", title: "NIHSS", icon: <Brain size={18} />, description: "Gravidade do AVC", component: NIHSSCalculator },
  { id: "wells", title: "Wells (TEP)", icon: <Heart size={18} />, description: "Probabilidade de TEP", component: WellsCalculator },
  { id: "cha2ds2", title: "CHA₂DS₂-VASc", icon: <Heart size={18} />, description: "Risco de AVC em FA", component: CHA2DS2Calculator },
  { id: "timi", title: "TIMI Score", icon: <Heart size={18} />, description: "Risco na SCA sem supra", component: TIMICalculator },
  { id: "meld", title: "MELD / MELD-Na", icon: <Droplets size={18} />, description: "Gravidade hepatopatia", component: MELDCalculator },
  { id: "apacheii", title: "APACHE II", icon: <Activity size={18} />, description: "Gravidade na UTI", component: APACHEIICalculator },
  { id: "curb65", title: "CURB-65", icon: <Activity size={18} />, description: "Gravidade de pneumonia", component: CURB65Calculator },
  { id: "apgar", title: "APGAR", icon: <Scale size={18} />, description: "Avaliação do RN", component: ApgarCalculator },
  { id: "childpugh", title: "Child-Pugh", icon: <Droplets size={18} />, description: "Gravidade na cirrose", component: ChildPughCalculator },
  { id: "clearance", title: "Clearance Creatinina", icon: <Droplets size={18} />, description: "Cockcroft-Gault", component: CreatinineClearanceCalculator },
  { id: "dose", title: "Dose por Peso", icon: <Scale size={18} />, description: "mg/kg → dose total e volume", component: DoseCalculator },
  { id: "infusion", title: "Velocidade de Infusão", icon: <Heart size={18} />, description: "BIC em mL/h", component: InfusionRateCalculator },
  { id: "parkland", title: "Parkland (Queimados)", icon: <Calculator size={18} />, description: "Reposição volêmica", component: ParklandCalculator },
  { id: "aniongap", title: "Anion Gap", icon: <Calculator size={18} />, description: "Acidose metabólica", component: AnionGapCalculator },
  { id: "imc", title: "IMC", icon: <Calculator size={18} />, description: "Índice de Massa Corporal", component: IMCCalculator },
  // — Batch 2 —
  { id: "hasbled", title: "HAS-BLED", icon: <Heart size={18} />, description: "Risco de sangramento em FA", component: HASBLEDCalculator },
  { id: "perc", title: "PERC Rule", icon: <Heart size={18} />, description: "Exclusão de TEP", component: PERCCalculator },
  { id: "grace", title: "GRACE Score", icon: <Heart size={18} />, description: "Risco na SCA", component: GRACECalculator },
  { id: "bishop", title: "Bishop Score", icon: <Baby size={18} />, description: "Maturidade cervical", component: BishopCalculator },
  { id: "ranson", title: "Ranson Criteria", icon: <Droplets size={18} />, description: "Gravidade pancreatite", component: RansonCalculator },
  { id: "news", title: "NEWS Score", icon: <Activity size={18} />, description: "Deterioração clínica", component: NEWSCalculator },
  { id: "mews", title: "MEWS", icon: <Activity size={18} />, description: "Alerta precoce modificado", component: MEWSCalculator },
  { id: "rox", title: "Índice ROX", icon: <Stethoscope size={18} />, description: "Sucesso de CNAF", component: RoxIndexCalculator },
  { id: "sirs", title: "SIRS", icon: <Activity size={18} />, description: "Resp. inflamatória sistêmica", component: SIRS_Calculator },
  { id: "mascc", title: "MASCC", icon: <Activity size={18} />, description: "Risco neutropenia febril", component: MASCCCalculator },
  { id: "glasgowblatchford", title: "Glasgow-Blatchford", icon: <Droplets size={18} />, description: "HDA — necessidade de intervenção", component: GlasgowBlatchfordCalculator },
  { id: "wellstvp", title: "Wells (TVP)", icon: <Heart size={18} />, description: "Probabilidade de TVP", component: WellsTVPCalculator },
  { id: "centor", title: "Centor / McIsaac", icon: <Stethoscope size={18} />, description: "Faringite estreptocócica", component: CentorCalculator },
  { id: "abcd2", title: "ABCD²", icon: <Brain size={18} />, description: "Risco de AVC após AIT", component: ABCD2Calculator },
  { id: "osmolarity", title: "Osmolaridade Sérica", icon: <Calculator size={18} />, description: "Calculada vs medida", component: OsmolarityCalculator },
  { id: "nacorrection", title: "Correção de Na⁺", icon: <Droplets size={18} />, description: "Hiperglicemia", component: SodiumCorrectionCalculator },
  { id: "waterdeficit", title: "Déficit de Água Livre", icon: <Droplets size={18} />, description: "Hipernatremia", component: WaterDeficitCalculator },
  { id: "corticoid", title: "Conversor Corticoides", icon: <Syringe size={18} />, description: "Equivalência entre corticoides", component: CorticosteroidConverterCalculator },
  { id: "opioid", title: "Conversor Opioides", icon: <Syringe size={18} />, description: "Equivalência entre opioides", component: OpioidConverterCalculator },
  // — Batch 3 —
  { id: "pedweight", title: "Peso Pediátrico (PALS)", icon: <Baby size={18} />, description: "Estimativa por idade", component: PediatricWeightCalculator },
  { id: "peddose", title: "Dose Pediátrica", icon: <Baby size={18} />, description: "mg/kg com dose máx.", component: PediatricDoseCalculator },
  { id: "aldrete", title: "Aldrete", icon: <Activity size={18} />, description: "Alta pós-anestésica", component: AldretteCalculator },
  { id: "mallampati", title: "Mallampati", icon: <Stethoscope size={18} />, description: "Via aérea difícil", component: MallampatiCalculator },
  { id: "asa", title: "Classificação ASA", icon: <Stethoscope size={18} />, description: "Risco anestésico", component: ASACalculator },
  { id: "fena", title: "FENa", icon: <Droplets size={18} />, description: "Fração excreção de sódio", component: FENaCalculator },
  { id: "ttkg", title: "TTKG", icon: <Droplets size={18} />, description: "Gradiente transtubular K⁺", component: TranstubularKGradientCalculator },
  { id: "bsa", title: "Superfície Corporal", icon: <Calculator size={18} />, description: "Dubois & Dubois (m²)", component: BodySurfaceAreaCalculator },
  { id: "ibw", title: "Peso Ideal", icon: <Calculator size={18} />, description: "Devine formula", component: IdealBodyWeightCalculator },
  { id: "light", title: "Critérios de Light", icon: <Stethoscope size={18} />, description: "Transudato vs exsudato", component: LightCriteriaCalculator },
  { id: "aagradient", title: "Gradiente A-a", icon: <Calculator size={18} />, description: "Diferença alvéolo-arterial", component: CaGradientCalculator },
  { id: "map", title: "PAM", icon: <Heart size={18} />, description: "Pressão arterial média", component: MAP_Calculator },
  { id: "qtc", title: "QTc", icon: <Heart size={18} />, description: "QT corrigido (Bazett)", component: QTcCalculator },
  { id: "fallrisk", title: "Morse (Queda)", icon: <Activity size={18} />, description: "Risco de queda", component: FallRiskCalculator },
  { id: "braden", title: "Braden", icon: <Activity size={18} />, description: "Risco lesão por pressão", component: BradenCalculator },
];

export default function Calculators() {
  const { subscription } = useAuth();
  const [activeCalc, setActiveCalc] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = calculators.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Calculadoras" />
        <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar calculadora..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 rounded-2xl bg-card border-0 shadow-sm"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">{calculators.length} calculadoras disponíveis</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filtered.map((calc) => (
              <Card key={calc.id} className="opacity-60">
                <CardContent className="flex items-center gap-3 p-3.5">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                    {calc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-xs">🔒 {calc.title}</p>
                    <p className="text-[10px] text-muted-foreground">{calc.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <PremiumGate />
        </div>
      </>
    );
  }

  const ActiveComponent = activeCalc ? calculators.find((c) => c.id === activeCalc)?.component : null;

  return (
    <>
      <TopBar title="Calculadoras" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar calculadora..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setActiveCalc(null); }}
            className="pl-9 rounded-2xl bg-card border-0 shadow-sm"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center">{filtered.length} de {calculators.length} calculadoras</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((calc) => (
            <div
              key={calc.id}
              onClick={() => setActiveCalc(activeCalc === calc.id ? null : calc.id)}
              className={`cursor-pointer bg-card rounded-[20px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border-0 ${
                activeCalc === calc.id ? "ring-2 ring-primary shadow-md" : ""
              }`}
            >
              <div className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  {calc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-[13px]">{calc.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{calc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {ActiveComponent && (
          <div className="bg-card rounded-[20px] shadow-sm border-0">
            <div className="pb-2 pt-5 px-5">
              <h3 className="text-sm font-heading font-bold">{calculators.find((c) => c.id === activeCalc)?.title}</h3>
            </div>
            <div className="px-5 pb-5">
              <ActiveComponent />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
