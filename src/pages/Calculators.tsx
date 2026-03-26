import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Activity, Brain, Droplets, Heart, Scale } from "lucide-react";

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

const calculators: CalculatorConfig[] = [
  { id: "glasgow", title: "Escala de Glasgow", icon: <Brain size={18} />, description: "Nível de consciência (3-15)", component: GlasgowCalculator },
  { id: "sofa", title: "SOFA Score", icon: <Activity size={18} />, description: "Disfunção orgânica na sepse", component: SofaCalculator },
  { id: "qsofa", title: "qSOFA", icon: <Activity size={18} />, description: "Triagem rápida para sepse", component: QSofaCalculator },
  { id: "wells", title: "Wells (TEP)", icon: <Heart size={18} />, description: "Probabilidade de TEP", component: WellsCalculator },
  { id: "cha2ds2", title: "CHA₂DS₂-VASc", icon: <Heart size={18} />, description: "Risco de AVC em FA", component: CHA2DS2Calculator },
  { id: "timi", title: "TIMI Score", icon: <Heart size={18} />, description: "Risco na SCA sem supra", component: TIMICalculator },
  { id: "curb65", title: "CURB-65", icon: <Activity size={18} />, description: "Gravidade de pneumonia", component: CURB65Calculator },
  { id: "apgar", title: "APGAR", icon: <Scale size={18} />, description: "Avaliação do RN", component: ApgarCalculator },
  { id: "childpugh", title: "Child-Pugh", icon: <Droplets size={18} />, description: "Gravidade na cirrose", component: ChildPughCalculator },
  { id: "clearance", title: "Clearance Creatinina", icon: <Droplets size={18} />, description: "Cockcroft-Gault", component: CreatinineClearanceCalculator },
  { id: "dose", title: "Dose por Peso", icon: <Scale size={18} />, description: "mg/kg → dose total e volume", component: DoseCalculator },
  { id: "infusion", title: "Velocidade de Infusão", icon: <Heart size={18} />, description: "BIC em mL/h", component: InfusionRateCalculator },
  { id: "parkland", title: "Parkland (Queimados)", icon: <Calculator size={18} />, description: "Reposição volêmica", component: ParklandCalculator },
  { id: "aniongap", title: "Anion Gap", icon: <Calculator size={18} />, description: "Acidose metabólica", component: AnionGapCalculator },
  { id: "imc", title: "IMC", icon: <Calculator size={18} />, description: "Índice de Massa Corporal", component: IMCCalculator },
];

export default function Calculators() {
  const { subscription } = useAuth();
  const [activeCalc, setActiveCalc] = useState<string | null>(null);

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Calculadoras" />
        <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {calculators.map((calc) => (
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
        <div className="grid grid-cols-2 gap-2">
          {calculators.map((calc) => (
            <Card
              key={calc.id}
              onClick={() => setActiveCalc(activeCalc === calc.id ? null : calc.id)}
              className={`cursor-pointer transition-all hover:shadow-sm active:scale-[0.98] ${
                activeCalc === calc.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardContent className="flex items-center gap-3 p-3.5">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                  {calc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-xs">{calc.title}</p>
                  <p className="text-[10px] text-muted-foreground">{calc.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {ActiveComponent && (
          <Card>
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm font-heading">{calculators.find((c) => c.id === activeCalc)?.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <ActiveComponent />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
