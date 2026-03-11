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

const calculators: CalculatorConfig[] = [
  { id: "glasgow", title: "Escala de Glasgow", icon: <Brain size={18} />, description: "Nível de consciência (3-15)", component: GlasgowCalculator },
  { id: "sofa", title: "SOFA Score", icon: <Activity size={18} />, description: "Disfunção orgânica na sepse", component: SofaCalculator },
  { id: "clearance", title: "Clearance de Creatinina", icon: <Droplets size={18} />, description: "Cockcroft-Gault", component: CreatinineClearanceCalculator },
  { id: "dose", title: "Dose por Peso", icon: <Scale size={18} />, description: "mg/kg → dose total e volume", component: DoseCalculator },
  { id: "infusion", title: "Velocidade de Infusão", icon: <Heart size={18} />, description: "BIC em mL/h", component: InfusionRateCalculator },
  { id: "imc", title: "IMC", icon: <Calculator size={18} />, description: "Índice de Massa Corporal", component: IMCCalculator },
];

export default function Calculators() {
  const { subscription } = useAuth();
  const [activeCalc, setActiveCalc] = useState<string | null>(null);

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Calculadoras" />
        <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
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
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
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
