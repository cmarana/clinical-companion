import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ChecklistCalc({ title, items, getResult }: {
  title: string;
  items: { label: string; pts?: number }[];
  getResult: (total: number) => { text: string; color: string; extra?: string };
}) {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, item, i) => sum + (checked[i] ? (item.pts ?? 1) : 0), 0);
  const result = getResult(total);
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">{title}</p>
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border" />
          <span className="flex-1">{item.label}</span>
          {item.pts !== undefined && item.pts !== 1 && <span className="text-muted-foreground font-heading">+{item.pts}</span>}
        </label>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${result.color}`}>{result.text}</p>
        {result.extra && <p className="text-xs text-muted-foreground">{result.extra}</p>}
      </div>
    </div>
  );
}

// --- Pediatric & OB/GYN ---

export function PediatricWeightCalculator() {
  const [age, setAge] = useState(""); const [unit, setUnit] = useState("years");
  const a = Number(age);
  let weight: number | null = null;
  if (a && unit === "years") {
    if (a <= 1) weight = (a * 12 + 9) / 2; // PALS infant
    else if (a <= 5) weight = 2 * a + 8;
    else weight = 3 * a + 7;
  } else if (a && unit === "months") {
    if (a <= 12) weight = (a + 9) / 2;
    else weight = 2 * (a / 12) + 8;
  }
  const ett = a && unit === "years" && a >= 1 ? (a / 4) + 4 : null;
  const ettCuff = ett ? ett - 0.5 : null;
  const blade = a && unit === "years" ? (a < 2 ? 1 : a < 8 ? 2 : 3) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Estimativa de peso, TOT e lâmina por idade (PALS)</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Idade</Label>
          <Input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="5" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Unidade</Label>
          <Select value={unit} onValueChange={setUnit}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="years">Anos</SelectItem><SelectItem value="months">Meses</SelectItem></SelectContent>
          </Select></div>
      </div>
      {weight!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{Math.round(weight*10)/10} <span className="text-base font-normal">kg</span></p>
        {ett&&<p className="text-xs text-muted-foreground">TOT sem cuff: {ett.toFixed(1)}mm | com cuff: {ettCuff?.toFixed(1)}mm</p>}
        {blade&&<p className="text-xs text-muted-foreground">Lâmina: {blade}</p>}
      </div>)}
    </div>
  );
}

export function PediatricDoseCalculator() {
  const drugs = [
    { name: "Paracetamol", dose: "10-15 mg/kg", max: 75, unit: "mg/kg/dia", freq: "6/6h" },
    { name: "Ibuprofeno", dose: "5-10 mg/kg", max: 40, unit: "mg/kg/dia", freq: "6-8h" },
    { name: "Amoxicilina", dose: "40-90 mg/kg/dia", max: 3000, unit: "mg/dia", freq: "8/8h ou 12/12h" },
    { name: "Amoxicilina+Clav", dose: "40-90 mg/kg/dia (amoxi)", max: 3000, unit: "mg/dia", freq: "8/8h ou 12/12h" },
    { name: "Azitromicina", dose: "10 mg/kg (D1), 5 mg/kg (D2-5)", max: 500, unit: "mg/dia", freq: "1x/dia" },
    { name: "Cefalexina", dose: "25-50 mg/kg/dia", max: 4000, unit: "mg/dia", freq: "6/6h" },
    { name: "Prednisolona", dose: "1-2 mg/kg/dia", max: 60, unit: "mg/dia", freq: "1x ou 12/12h" },
    { name: "Dipirona", dose: "10-25 mg/kg", max: 75, unit: "mg/kg/dia", freq: "6/6h" },
    { name: "Ondansetrona", dose: "0.15 mg/kg", max: 4, unit: "mg/dose", freq: "8/8h" },
    { name: "Adrenalina (anafilaxia)", dose: "0.01 mg/kg (IM)", max: 0.5, unit: "mg/dose", freq: "Repetir 5-15min" },
  ];
  const [sel, setSel] = useState("0"); const [weight, setWeight] = useState("");
  const w = Number(weight); const drug = drugs[Number(sel)];

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Doses pediátricas por peso</p>
      <div className="space-y-1"><Label className="font-heading text-xs">Medicação</Label>
        <Select value={sel} onValueChange={setSel}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
          <SelectContent>{drugs.map((d,i)=>(<SelectItem key={i} value={String(i)}>{d.name}</SelectItem>))}</SelectContent>
        </Select></div>
      <div className="space-y-1"><Label className="font-heading text-xs">Peso (kg)</Label>
        <Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="15" className="h-8 text-xs"/></div>
      {w>0&&(<div className="bg-muted rounded-lg p-4 space-y-1">
        <p className="font-heading text-sm font-bold text-center">{drug.name}</p>
        <p className="text-xs text-center text-muted-foreground">{drug.dose}</p>
        <p className="text-xs text-center text-muted-foreground">Frequência: {drug.freq}</p>
        <p className="text-xs text-center text-muted-foreground">Dose máx: {drug.max} {drug.unit}</p>
      </div>)}
    </div>
  );
}

export function AldretteCalculator() {
  const cats = [
    { label: "Atividade", opts: ["Move 4 extremidades (2)","Move 2 extremidades (1)","Nenhuma (0)"] },
    { label: "Respiração", opts: ["Respira profundamente e tosse (2)","Dispneia/respiração limitada (1)","Apneia (0)"] },
    { label: "Circulação", opts: ["PA ±20% pré-op (2)","PA ±20-49% (1)","PA ±50% (0)"] },
    { label: "Consciência", opts: ["Totalmente desperto (2)","Desperta ao chamado (1)","Sem resposta (0)"] },
    { label: "SpO₂", opts: [">92% ar ambiente (2)","Precisa O₂ para >90% (1)","<90% com O₂ (0)"] },
  ];
  const [vals, setVals] = useState<number[]>(new Array(cats.length).fill(2));
  const total = vals.reduce((a,b)=>a+b,0);

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Critério de alta da RPA (Recuperação Pós-Anestésica)</p>
      {cats.map((cat,ci)=>(
        <div key={ci} className="space-y-1">
          <Label className="font-heading text-xs">{cat.label}</Label>
          <Select value={String(vals[ci])} onValueChange={v=>{const n=[...vals];n[ci]=Number(v);setVals(n)}}>
            <SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{cat.opts.map((opt,oi)=>(<SelectItem key={oi} value={String(2-oi)}>{opt}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/10</p>
        <p className={`font-heading text-sm font-semibold ${total>=9?"text-success":total>=7?"text-warning-foreground":"text-destructive"}`}>
          {total>=9?"Apto para alta da RPA":total>=7?"Observar mais tempo":"Não apto para alta"}
        </p>
      </div>
    </div>
  );
}

export function MallampatiCalculator() {
  const [grade, setGrade] = useState("1");
  const desc: Record<string,string> = {
    "1": "Palato mole, fauces, úvula e pilares visíveis — Via aérea fácil",
    "2": "Palato mole, fauces e úvula visíveis — Via aérea provavelmente fácil",
    "3": "Palato mole e base da úvula visíveis — Via aérea possivelmente difícil",
    "4": "Apenas palato duro visível — Via aérea provavelmente difícil",
  };
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Classificação de Mallampati — predição de via aérea difícil</p>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Classe</Label>
        <Select value={grade} onValueChange={setGrade}><SelectTrigger><SelectValue/></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Classe I</SelectItem><SelectItem value="2">Classe II</SelectItem>
            <SelectItem value="3">Classe III</SelectItem><SelectItem value="4">Classe IV</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">Classe {grade}</p>
        <p className={`font-heading text-sm font-semibold ${Number(grade)<=2?"text-success":"text-destructive"}`}>{desc[grade]}</p>
      </div>
    </div>
  );
}

export function ASACalculator() {
  const [asa, setAsa] = useState("1");
  const desc: Record<string,{text:string,mort:string}> = {
    "1": {text:"Paciente saudável",mort:"<0.1%"},
    "2": {text:"Doença sistêmica leve",mort:"~0.2%"},
    "3": {text:"Doença sistêmica grave",mort:"~1.8%"},
    "4": {text:"Doença sistêmica grave com ameaça constante à vida",mort:"~7.8%"},
    "5": {text:"Moribundo — não se espera sobreviver sem cirurgia",mort:"~9.4%"},
    "6": {text:"Morte encefálica — doador de órgãos",mort:"-"},
  };
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Classificação do estado físico (ASA)</p>
      <Select value={asa} onValueChange={setAsa}><SelectTrigger><SelectValue/></SelectTrigger>
        <SelectContent>
          {["1","2","3","4","5","6"].map(v=>(<SelectItem key={v} value={v}>ASA {v}</SelectItem>))}
        </SelectContent>
      </Select>
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">ASA {asa}</p>
        <p className="font-heading text-sm font-semibold text-primary">{desc[asa].text}</p>
        <p className="text-xs text-muted-foreground">Mortalidade perioperatória: {desc[asa].mort}</p>
      </div>
    </div>
  );
}

export function FENaCalculator() {
  const [naU, setNaU] = useState(""); const [naS, setNaS] = useState("");
  const [crU, setCrU] = useState(""); const [crS, setCrS] = useState("");
  const nu=Number(naU),ns=Number(naS),cu=Number(crU),cs=Number(crS);
  const fena = nu&&ns&&cu&&cs ? ((nu*cs)/(ns*cu))*100 : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Fração de excreção de sódio — diferencial de IRA</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Na⁺ urinário</Label><Input type="number" value={naU} onChange={e=>setNaU(e.target.value)} placeholder="15" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Na⁺ sérico</Label><Input type="number" value={naS} onChange={e=>setNaS(e.target.value)} placeholder="140" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Cr urinária</Label><Input type="number" value={crU} onChange={e=>setCrU(e.target.value)} placeholder="100" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Cr sérica</Label><Input type="number" value={crS} onChange={e=>setCrS(e.target.value)} placeholder="2" step="0.1" className="h-8 text-xs"/></div>
      </div>
      {fena!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(fena*100)/100).toFixed(2)} <span className="text-base font-normal">%</span></p>
        <p className={`font-heading text-sm font-semibold ${fena<1?"text-success":"text-destructive"}`}>
          {fena<1?"Pré-renal (<1%)":fena>2?"Renal intrínseca (>2%)":"Zona intermediária (1-2%)"}
        </p>
      </div>)}
    </div>
  );
}

export function TranstubularKGradientCalculator() {
  const [kU, setKU] = useState(""); const [kS, setKS] = useState("");
  const [osmU, setOsmU] = useState(""); const [osmS, setOsmS] = useState("");
  const ku=Number(kU),ks=Number(kS),ou=Number(osmU),os=Number(osmS);
  const ttkg = ku&&ks&&ou&&os ? (ku/ks)/(ou/os) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">TTKG — Avaliação da secreção tubular de K⁺</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">K⁺ urinário</Label><Input type="number" value={kU} onChange={e=>setKU(e.target.value)} placeholder="40" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">K⁺ sérico</Label><Input type="number" value={kS} onChange={e=>setKS(e.target.value)} placeholder="5" step="0.1" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Osm urinária</Label><Input type="number" value={osmU} onChange={e=>setOsmU(e.target.value)} placeholder="600" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Osm sérica</Label><Input type="number" value={osmS} onChange={e=>setOsmS(e.target.value)} placeholder="290" className="h-8 text-xs"/></div>
      </div>
      {ttkg!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(ttkg*10)/10).toFixed(1)}</p>
        <p className="text-xs text-muted-foreground">Normal: 6-12 | HiperK com TTKG{'<'}5 → causa renal | HipoK com TTKG{'>'}3 → perda renal</p>
      </div>)}
    </div>
  );
}

export function BodySurfaceAreaCalculator() {
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const w=Number(weight),h=Number(height);
  const bsa = w&&h ? Math.sqrt((w*h)/3600) : null; // Mosteller

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Superfície corporal (Mosteller) — para doses de QT</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Peso (kg)</Label><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="70" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Altura (cm)</Label><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="170" className="h-8 text-xs"/></div>
      </div>
      {bsa!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(bsa*100)/100).toFixed(2)} <span className="text-base font-normal">m²</span></p>
        <p className="text-xs text-muted-foreground">Fórmula de Mosteller: √(peso × altura / 3600)</p>
      </div>)}
    </div>
  );
}

export function IdealBodyWeightCalculator() {
  const [height, setHeight] = useState(""); const [sex, setSex] = useState("male");
  const h = Number(height);
  const ibw = h ? (sex === "male" ? 50 + 0.91 * (h - 152.4) : 45.5 + 0.91 * (h - 152.4)) : null;
  const abw = ibw && h ? ibw + 0.4 * (h > 152.4 ? Number(h) * 0.1 : 0) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Peso ideal (Devine) — para VM, aminoglicosídeos</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Altura (cm)</Label><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="170" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Sexo</Label>
          <Select value={sex} onValueChange={setSex}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="male">Masculino</SelectItem><SelectItem value="female">Feminino</SelectItem></SelectContent>
          </Select></div>
      </div>
      {ibw!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{Math.round(ibw*10)/10} <span className="text-base font-normal">kg</span></p>
        <p className="text-xs text-muted-foreground">VC VM: {Math.round(ibw*6)}-{Math.round(ibw*8)} mL (6-8 mL/kg peso ideal)</p>
      </div>)}
    </div>
  );
}

export function LightCriteriaCalculator() {
  return <ChecklistCalc title="Diferenciação transudato vs exsudato pleural"
    items={[
      { label: "Proteína pleural / sérica > 0.5" },
      { label: "LDH pleural / sérica > 0.6" },
      { label: "LDH pleural > 2/3 do LSN sérico" },
    ]}
    getResult={(t)=>t>=1
      ?{text:"EXSUDATO (≥1 critério de Light)",color:"text-destructive",extra:"Investigar: infecção, neoplasia, TEP, colagenose"}
      :{text:"TRANSUDATO (nenhum critério)",color:"text-success",extra:"Causas: IC, cirrose, síndrome nefrótica"}}
  />;
}

export function CaGradientCalculator() {
  const [pao2, setPao2] = useState(""); const [paco2, setPaco2] = useState(""); const [fio2, setFio2] = useState("21"); const [age, setAge] = useState("");
  const o=Number(pao2),c=Number(paco2),f=Number(fio2)/100,a=Number(age);
  const pao2Alv = f*(713)-(c/0.8);
  const gradient = o&&c ? pao2Alv - o : null;
  const expected = a ? (a/4)+4 : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Gradiente alvéolo-arterial de O₂</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">PaO₂ (mmHg)</Label><Input type="number" value={pao2} onChange={e=>setPao2(e.target.value)} placeholder="90" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">PaCO₂ (mmHg)</Label><Input type="number" value={paco2} onChange={e=>setPaco2(e.target.value)} placeholder="40" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FiO₂ (%)</Label><Input type="number" value={fio2} onChange={e=>setFio2(e.target.value)} placeholder="21" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Idade (anos)</Label><Input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="50" className="h-8 text-xs"/></div>
      </div>
      {gradient!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{Math.round(gradient)} <span className="text-base font-normal">mmHg</span></p>
        {expected&&<p className="text-xs text-muted-foreground">Esperado para idade: {Math.round(expected)} mmHg</p>}
        <p className={`font-heading text-sm font-semibold ${expected&&gradient>expected?"text-destructive":"text-success"}`}>
          {expected&&gradient>expected?"Gradiente elevado — defeito de difusão/shunt":"Gradiente normal"}
        </p>
      </div>)}
    </div>
  );
}

export function MAP_Calculator() {
  const [sys, setSys] = useState(""); const [dia, setDia] = useState("");
  const s=Number(sys),d=Number(dia);
  const map = s&&d ? d + (s-d)/3 : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Pressão Arterial Média</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">PAS (mmHg)</Label><Input type="number" value={sys} onChange={e=>setSys(e.target.value)} placeholder="120" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">PAD (mmHg)</Label><Input type="number" value={dia} onChange={e=>setDia(e.target.value)} placeholder="80" className="h-8 text-xs"/></div>
      </div>
      {map!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{Math.round(map)} <span className="text-base font-normal">mmHg</span></p>
        <p className={`font-heading text-sm font-semibold ${map>=65?"text-success":"text-destructive"}`}>
          {map>=65?`PAM adequada (≥65 mmHg)`:"PAM baixa — considerar vasopressor se choque"}
        </p>
      </div>)}
    </div>
  );
}

export function QTcCalculator() {
  const [qt, setQt] = useState(""); const [rr, setRr] = useState("");
  const q=Number(qt),r=Number(rr);
  const fc = r ? 60/r : null;
  const qtc = q&&r ? q/Math.sqrt(r) : null; // Bazett

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">QTc corrigido (Bazett) — risco de Torsades</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">QT (ms)</Label><Input type="number" value={qt} onChange={e=>setQt(e.target.value)} placeholder="420" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">RR (seg)</Label><Input type="number" value={rr} onChange={e=>setRr(e.target.value)} placeholder="0.8" step="0.01" className="h-8 text-xs"/></div>
      </div>
      {qtc!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{Math.round(qtc)} <span className="text-base font-normal">ms</span></p>
        {fc&&<p className="text-xs text-muted-foreground">FC: {Math.round(fc)} bpm</p>}
        <p className={`font-heading text-sm font-semibold ${qtc<=450?"text-success":qtc<=500?"text-warning-foreground":"text-destructive"}`}>
          {qtc<=450?"QTc normal (≤450ms)":qtc<=500?"QTc prolongado (450-500ms)":"QTc muito prolongado (>500ms) — risco de Torsades"}
        </p>
      </div>)}
    </div>
  );
}

export function FallRiskCalculator() {
  return <ChecklistCalc title="Risco de queda — Escala de Morse"
    items={[
      { label: "Histórico de queda (últimos 3 meses)", pts: 25 },
      { label: "Diagnóstico secundário (≥2 diagnósticos)", pts: 15 },
      { label: "Auxílio para deambulação (muleta/andador/mobiliário)", pts: 30 },
      { label: "Terapia IV / cateter heparinizado", pts: 20 },
      { label: "Marcha comprometida", pts: 20 },
      { label: "Estado mental alterado / superestima capacidade", pts: 15 },
    ]}
    getResult={(t)=>t<=24
      ?{text:"Baixo risco de queda",color:"text-success",extra:"Medidas padrão"}
      :t<=44?{text:"Risco moderado de queda",color:"text-warning-foreground",extra:"Implementar protocolo de prevenção"}
      :{text:"Alto risco de queda",color:"text-destructive",extra:"Todas as medidas de prevenção + vigilância"}}
  />;
}

export function BradenCalculator() {
  const cats = [
    { label: "Percepção sensorial", opts: ["Completamente limitada (1)","Muito limitada (2)","Levemente limitada (3)","Sem comprometimento (4)"] },
    { label: "Umidade", opts: ["Constantemente úmida (1)","Frequentemente (2)","Ocasionalmente (3)","Raramente (4)"] },
    { label: "Atividade", opts: ["Acamado (1)","Confinado à cadeira (2)","Deambula ocasionalmente (3)","Deambula frequentemente (4)"] },
    { label: "Mobilidade", opts: ["Totalmente imóvel (1)","Muito limitada (2)","Levemente limitada (3)","Sem limitação (4)"] },
    { label: "Nutrição", opts: ["Muito pobre (1)","Provavelmente inadequada (2)","Adequada (3)","Excelente (4)"] },
    { label: "Fricção e cisalhamento", opts: ["Problema (1)","Problema potencial (2)","Sem problema aparente (3)"] },
  ];
  const [vals, setVals] = useState<number[]>([4,4,4,4,4,3]);
  const total = vals.reduce((a,b)=>a+b,0);

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Risco de lesão por pressão (Braden Scale)</p>
      {cats.map((cat,ci)=>(
        <div key={ci} className="space-y-1">
          <Label className="font-heading text-xs">{cat.label}</Label>
          <Select value={String(vals[ci])} onValueChange={v=>{const n=[...vals];n[ci]=Number(v);setVals(n)}}>
            <SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{cat.opts.map((opt,oi)=>(<SelectItem key={oi} value={String(oi+1)}>{opt}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/23</p>
        <p className={`font-heading text-sm font-semibold ${total>=19?"text-success":total>=15?"text-warning-foreground":"text-destructive"}`}>
          {total>=19?"Sem risco":total>=15?"Baixo risco":total>=13?"Risco moderado":"Alto risco de LPP"}
        </p>
      </div>
    </div>
  );
}
