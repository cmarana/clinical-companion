import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Reusable checkbox-based calculator
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

// --- SCORES ---

export function HASBLEDCalculator() {
  return <ChecklistCalc title="Risco de sangramento em anticoagulação (FA)"
    items={[
      { label: "Hipertensão (PAS >160)" }, { label: "Função renal/hepática anormal", pts: 2 },
      { label: "AVC prévio" }, { label: "Sangramento prévio/predisposição" },
      { label: "INR lábil" }, { label: "Idade >65 anos" },
      { label: "Drogas (antiplaquetários/AINEs) ou álcool", pts: 2 },
    ]}
    getResult={(t) => t <= 2
      ? { text: "Baixo risco de sangramento", color: "text-success", extra: "Anticoagulação segura" }
      : { text: "Alto risco de sangramento", color: "text-destructive", extra: "Considerar risco-benefício cuidadosamente" }}
  />;
}

export function PERCCalculator() {
  return <ChecklistCalc title="Se TODOS negativos → TEP excluído sem D-dímero"
    items={[
      { label: "Idade ≥50 anos" }, { label: "FC ≥100 bpm" },
      { label: "SpO₂ <95% em ar ambiente" }, { label: "Hemoptise" },
      { label: "Uso de estrogênio" }, { label: "Cirurgia/trauma <4 semanas" },
      { label: "TVP/TEP prévio" }, { label: "Edema unilateral de MMII" },
    ]}
    getResult={(t) => t === 0
      ? { text: "PERC negativo — TEP excluído", color: "text-success", extra: "Sem necessidade de D-dímero" }
      : { text: `${t} critério(s) positivo(s) — PERC não exclui TEP`, color: "text-destructive", extra: "Prosseguir com D-dímero ou Wells" }}
  />;
}

export function GRACECalculator() {
  const [age, setAge] = useState(""); const [fc, setFc] = useState(""); const [pas, setPas] = useState("");
  const [cr, setCr] = useState(""); const [killip, setKillip] = useState("1");
  const [stdev, setStdev] = useState(false); const [troponin, setTroponin] = useState(false);
  const [pcr2, setPcr2] = useState(false);

  const calculate = () => {
    const a=Number(age), f=Number(fc), p=Number(pas), c=Number(cr);
    if(!a||!f||!p) return null;
    let s=0;
    if(a>=80) s+=91; else if(a>=70) s+=75; else if(a>=60) s+=58; else if(a>=50) s+=41; else if(a>=40) s+=25; else s+=0;
    if(f>=200) s+=46; else if(f>=150) s+=38; else if(f>=110) s+=29; else if(f>=90) s+=15; else if(f>=70) s+=7; else s+=0;
    if(p<80) s+=63; else if(p<100) s+=53; else if(p<120) s+=43; else if(p<140) s+=34; else if(p<160) s+=24; else if(p<200) s+=12; else s+=0;
    if(c>=4) s+=31; else if(c>=2) s+=21; else if(c>=1.5) s+=14; else if(c>=1) s+=7; else s+=1;
    s += (Number(killip)-1)*21;
    if(stdev) s+=30; if(troponin) s+=15; if(pcr2) s+=14;
    return s;
  };
  const score = calculate();
  const risk = (s:number)=> s<=108?"Baixo (<1%)":s<=140?"Intermediário (1-3%)":"Alto (>3%)";
  const color = (s:number)=> s<=108?"text-success":s<=140?"text-warning-foreground":"text-destructive";

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Risco de mortalidade intra-hospitalar na SCA</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Idade</Label><Input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="65" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FC (bpm)</Label><Input type="number" value={fc} onChange={e=>setFc(e.target.value)} placeholder="80" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">PAS (mmHg)</Label><Input type="number" value={pas} onChange={e=>setPas(e.target.value)} placeholder="130" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Cr (mg/dL)</Label><Input type="number" value={cr} onChange={e=>setCr(e.target.value)} placeholder="1.0" step="0.1" className="h-8 text-xs"/></div>
      </div>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Killip</Label>
        <Select value={killip} onValueChange={setKillip}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
          <SelectContent>
            <SelectItem value="1">I - Sem IC</SelectItem><SelectItem value="2">II - Estertores/B3</SelectItem>
            <SelectItem value="3">III - EAP</SelectItem><SelectItem value="4">IV - Choque cardiogênico</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        {[{l:"Desvio de ST",v:stdev,s:setStdev},{l:"Troponina elevada",v:troponin,s:setTroponin},{l:"PCR na admissão",v:pcr2,s:setPcr2}].map(x=>(
          <label key={x.l} className="flex items-center gap-2 text-xs cursor-pointer">
            <input type="checkbox" checked={x.v} onChange={()=>x.s(!x.v)} className="rounded border-border"/><span>{x.l}</span>
          </label>
        ))}
      </div>
      {score!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{score}</p>
        <p className={`font-heading text-sm font-semibold ${color(score)}`}>{risk(score)}</p>
      </div>)}
    </div>
  );
}

export function BishopCalculator() {
  const cats = [
    { label: "Dilatação (cm)", opts: ["0 (0pt)","1-2 (1pt)","3-4 (2pts)","≥5 (3pts)"] },
    { label: "Esvaecimento (%)", opts: ["0-30 (0pt)","40-50 (1pt)","60-70 (2pts)","≥80 (3pts)"] },
    { label: "Estação (De Lee)", opts: ["-3 (0pt)","-2 (1pt)","-1/0 (2pts)","+1/+2 (3pts)"] },
    { label: "Consistência", opts: ["Firme (0pt)","Médio (1pt)","Amolecido (2pts)"] },
    { label: "Posição", opts: ["Posterior (0pt)","Médio (1pt)","Anterior (2pts)"] },
  ];
  const [vals, setVals] = useState<number[]>(new Array(cats.length).fill(0));
  const total = vals.reduce((a,b)=>a+b,0);

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Avaliação cervical para indução do parto</p>
      {cats.map((cat,ci)=>(
        <div key={ci} className="space-y-1">
          <Label className="font-heading text-xs">{cat.label}</Label>
          <Select value={String(vals[ci])} onValueChange={v=>{const n=[...vals];n[ci]=Number(v);setVals(n)}}>
            <SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{cat.opts.map((opt,oi)=>(<SelectItem key={oi} value={String(oi)}>{opt}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/13</p>
        <p className={`font-heading text-sm font-semibold ${total>=8?"text-success":total>=6?"text-warning-foreground":"text-destructive"}`}>
          {total>=8?"Colo favorável — indução provável sucesso":total>=6?"Colo intermediário":"Colo desfavorável — considerar amadurecimento"}
        </p>
      </div>
    </div>
  );
}

export function RansonCalculator() {
  return <ChecklistCalc title="Gravidade da pancreatite aguda (admissão + 48h)"
    items={[
      { label: "Idade >55 anos" }, { label: "Leucócitos >16.000" },
      { label: "Glicemia >200 mg/dL" }, { label: "LDH >350 U/L" },
      { label: "TGO >250 U/L" }, { label: "Queda do Ht >10% (48h)" },
      { label: "Aumento da ureia >5 mg/dL (48h)" }, { label: "Cálcio <8 mg/dL (48h)" },
      { label: "PaO₂ <60 mmHg (48h)" }, { label: "Base excess > -4 (48h)" },
      { label: "Sequestro de líquido >6L (48h)" },
    ]}
    getResult={(t)=>t<=2
      ?{text:"Pancreatite leve",color:"text-success",extra:"Mortalidade <5%"}
      :t<=5?{text:"Pancreatite moderada",color:"text-warning-foreground",extra:"Mortalidade ~15-20%"}
      :{text:"Pancreatite grave",color:"text-destructive",extra:"Mortalidade >40%"}}
  />;
}

export function NEWSCalculator() {
  const [fr, setFr] = useState(""); const [spo2, setSpo2] = useState(""); const [temp, setTemp] = useState("");
  const [pas, setPas] = useState(""); const [fc, setFc] = useState(""); const [cons, setCons] = useState("0");
  const [o2, setO2] = useState(false);

  const scoreFr = (v:number)=>v<=8?3:v<=11?1:v<=20?0:v<=24?2:3;
  const scoreSpo2 = (v:number)=>v<=91?3:v<=93?2:v<=95?1:0;
  const scoreTemp2 = (v:number)=>v<=35?3:v<=36?1:v<=38?0:v<=39?1:2;
  const scorePas = (v:number)=>v<=90?3:v<=100?2:v<=110?1:v<=219?0:3;
  const scoreFc = (v:number)=>v<=40?3:v<=50?1:v<=90?0:v<=110?1:v<=130?2:3;

  const f=Number(fr),s=Number(spo2),t=Number(temp),p=Number(pas),h=Number(fc);
  const canCalc = f&&s&&t&&p&&h;
  const total = canCalc ? scoreFr(f)+scoreSpo2(s)+scoreTemp2(t)+scorePas(p)+scoreFc(h)+Number(cons)+(o2?2:0) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">National Early Warning Score — deterioração clínica</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1"><Label className="font-heading text-[10px]">FR (irpm)</Label><Input type="number" value={fr} onChange={e=>setFr(e.target.value)} placeholder="16" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">SpO₂ (%)</Label><Input type="number" value={spo2} onChange={e=>setSpo2(e.target.value)} placeholder="97" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">Temp (°C)</Label><Input type="number" value={temp} onChange={e=>setTemp(e.target.value)} placeholder="37" step="0.1" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">PAS (mmHg)</Label><Input type="number" value={pas} onChange={e=>setPas(e.target.value)} placeholder="120" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-[10px]">FC (bpm)</Label><Input type="number" value={fc} onChange={e=>setFc(e.target.value)} placeholder="75" className="h-8 text-xs"/></div>
        <div className="space-y-1">
          <Label className="font-heading text-[10px]">Consciência</Label>
          <Select value={cons} onValueChange={setCons}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="0">Alerta</SelectItem><SelectItem value="3">AVPU ≠ A</SelectItem></SelectContent>
          </Select>
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs cursor-pointer">
        <input type="checkbox" checked={o2} onChange={()=>setO2(!o2)} className="rounded border-border"/>
        <span>O₂ suplementar</span>
      </label>
      {total!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/20</p>
        <p className={`font-heading text-sm font-semibold ${total<=4?"text-success":total<=6?"text-warning-foreground":"text-destructive"}`}>
          {total<=4?"Baixo risco":total<=6?"Risco médio — aumentar vigilância":"Alto risco — acionar time de resposta rápida"}
        </p>
      </div>)}
    </div>
  );
}

export function MEWSCalculator() {
  const [pas, setPas] = useState(""); const [fc, setFc] = useState(""); const [fr, setFr] = useState("");
  const [temp, setTemp] = useState(""); const [cons, setCons] = useState("0");

  const scorePas = (v:number)=>v<=70?3:v<=80?2:v<=100?1:v<=199?0:2;
  const scoreFc2 = (v:number)=>v<=40?2:v<=50?1:v<=100?0:v<=110?1:v<=129?2:3;
  const scoreFr2 = (v:number)=>v<9?2:v<=14?0:v<=20?1:v<=29?2:3;
  const scoreTemp3 = (v:number)=>v<35?2:v<=38.4?0:2;

  const p=Number(pas),f=Number(fc),r=Number(fr),t=Number(temp);
  const canCalc = p&&f&&r&&t;
  const total = canCalc ? scorePas(p)+scoreFc2(f)+scoreFr2(r)+scoreTemp3(t)+Number(cons) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Modified Early Warning Score — triagem à beira-leito</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">PAS (mmHg)</Label><Input type="number" value={pas} onChange={e=>setPas(e.target.value)} placeholder="120" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FC (bpm)</Label><Input type="number" value={fc} onChange={e=>setFc(e.target.value)} placeholder="75" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FR (irpm)</Label><Input type="number" value={fr} onChange={e=>setFr(e.target.value)} placeholder="16" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Temp (°C)</Label><Input type="number" value={temp} onChange={e=>setTemp(e.target.value)} placeholder="37" step="0.1" className="h-8 text-xs"/></div>
      </div>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Nível de consciência</Label>
        <Select value={cons} onValueChange={setCons}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
          <SelectContent><SelectItem value="0">Alerta</SelectItem><SelectItem value="1">Responde à voz</SelectItem><SelectItem value="2">Responde à dor</SelectItem><SelectItem value="3">Irresponsivo</SelectItem></SelectContent>
        </Select>
      </div>
      {total!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${total<=2?"text-success":total<=4?"text-warning-foreground":"text-destructive"}`}>
          {total<=2?"Vigilância de rotina":total<=4?"Aumentar monitorização":"Ativar time de resposta rápida"}
        </p>
      </div>)}
    </div>
  );
}

export function RoxIndexCalculator() {
  const [spo2, setSpo2] = useState(""); const [fio2, setFio2] = useState(""); const [fr, setFr] = useState("");
  const s=Number(spo2),f=Number(fio2),r=Number(fr);
  const rox = s&&f&&r ? (s/f)/r : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Predição de falha de CNAF (Cânula Nasal de Alto Fluxo)</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">SpO₂ (%)</Label><Input type="number" value={spo2} onChange={e=>setSpo2(e.target.value)} placeholder="95" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FiO₂ (%)</Label><Input type="number" value={fio2} onChange={e=>setFio2(e.target.value)} placeholder="50" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FR (irpm)</Label><Input type="number" value={fr} onChange={e=>setFr(e.target.value)} placeholder="25" className="h-8 text-xs"/></div>
      </div>
      {rox!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(rox*100)/100).toFixed(2)}</p>
        <p className={`font-heading text-sm font-semibold ${rox>=4.88?"text-success":rox>=3.85?"text-warning-foreground":"text-destructive"}`}>
          {rox>=4.88?"Baixo risco de IOT":rox>=3.85?"Risco intermediário — reavaliar em 2h":"Alto risco de falha — considerar IOT"}
        </p>
      </div>)}
    </div>
  );
}

export function SIRS_Calculator() {
  return <ChecklistCalc title="Critérios de Síndrome da Resposta Inflamatória Sistêmica"
    items={[
      { label: "Temperatura >38°C ou <36°C" },
      { label: "FC >90 bpm" },
      { label: "FR >20 irpm ou PaCO₂ <32 mmHg" },
      { label: "Leucócitos >12.000 ou <4.000 ou >10% bastões" },
    ]}
    getResult={(t)=>t>=2
      ?{text:"SIRS positivo (≥2 critérios)",color:"text-destructive",extra:"Se infecção suspeita → considerar sepse"}
      :{text:"SIRS negativo",color:"text-success"}}
  />;
}

export function MASCCCalculator() {
  return <ChecklistCalc title="Risco em neutropenia febril — MASCC Score"
    items={[
      { label: "Carga da doença: assintomático ou sintomas leves", pts: 5 },
      { label: "Sem hipotensão (PAS ≥90)", pts: 5 },
      { label: "Sem DPOC", pts: 4 },
      { label: "Tumor sólido ou sem infecção fúngica prévia", pts: 4 },
      { label: "Sem desidratação", pts: 3 },
      { label: "Carga da doença: sintomas moderados", pts: 3 },
      { label: "Paciente ambulatorial no início da febre", pts: 3 },
      { label: "Idade <60 anos", pts: 2 },
    ]}
    getResult={(t)=>t>=21
      ?{text:"Baixo risco — considerar tratamento ambulatorial",color:"text-success",extra:`Score: ${t}`}
      :{text:"Alto risco — internação e ATB IV",color:"text-destructive",extra:`Score: ${t}`}}
  />;
}

export function GlasgowBlatchfordCalculator() {
  const [hb, setHb] = useState(""); const [bun, setBun] = useState("");
  const [pas, setPas] = useState(""); const [fc, setFc] = useState("");
  const [melena, setMelena] = useState(false); const [syncope, setSyncope] = useState(false);
  const [liver, setLiver] = useState(false); const [cardiac, setCardiac] = useState(false);
  const [sex, setSex] = useState("male");

  const calculate = () => {
    const h=Number(hb),b=Number(bun),p=Number(pas),f=Number(fc);
    if(!h||!b||!p) return null;
    let s=0;
    if(b>=25) s+=6; else if(b>=18.2) s+=4; else if(b>=10) s+=3; else if(b>=6.5) s+=2;
    if(sex==="male"&&h<10) s+=6; else if(sex==="male"&&h<12) s+=3; else if(sex==="male"&&h<13) s+=1;
    if(sex==="female"&&h<10) s+=6; else if(sex==="female"&&h<12) s+=1;
    if(p<90) s+=3; else if(p<100) s+=2; else if(p<110) s+=1;
    if(f>=100) s+=1;
    if(melena) s+=1; if(syncope) s+=2; if(liver) s+=2; if(cardiac) s+=2;
    return s;
  };
  const score = calculate();

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Necessidade de intervenção em HDA</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Hb (g/dL)</Label><Input type="number" value={hb} onChange={e=>setHb(e.target.value)} placeholder="12" step="0.1" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Ureia (mmol/L)</Label><Input type="number" value={bun} onChange={e=>setBun(e.target.value)} placeholder="8" step="0.1" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">PAS (mmHg)</Label><Input type="number" value={pas} onChange={e=>setPas(e.target.value)} placeholder="120" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">FC (bpm)</Label><Input type="number" value={fc} onChange={e=>setFc(e.target.value)} placeholder="80" className="h-8 text-xs"/></div>
      </div>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Sexo</Label>
        <Select value={sex} onValueChange={setSex}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
          <SelectContent><SelectItem value="male">Masculino</SelectItem><SelectItem value="female">Feminino</SelectItem></SelectContent>
        </Select>
      </div>
      {[{l:"Melena",v:melena,s:setMelena},{l:"Síncope",v:syncope,s:setSyncope},{l:"Hepatopatia",v:liver,s:setLiver},{l:"IC",v:cardiac,s:setCardiac}].map(x=>(
        <label key={x.l} className="flex items-center gap-2 text-xs cursor-pointer">
          <input type="checkbox" checked={x.v} onChange={()=>x.s(!x.v)} className="rounded border-border"/><span>{x.l}</span>
        </label>
      ))}
      {score!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{score}</p>
        <p className={`font-heading text-sm font-semibold ${score===0?"text-success":score<=5?"text-warning-foreground":"text-destructive"}`}>
          {score===0?"Pode ter alta (muito baixo risco)":score<=5?"Risco intermediário":"Alto risco — EDA urgente"}
        </p>
      </div>)}
    </div>
  );
}

export function WellsTVPCalculator() {
  return <ChecklistCalc title="Probabilidade pré-teste para TVP"
    items={[
      { label: "Câncer ativo (tratamento <6 meses)" },
      { label: "Paralisia/paresia/imobilização de MMII" },
      { label: "Acamado >3 dias ou cirurgia major <12 semanas" },
      { label: "Dor à palpação ao longo do sistema venoso profundo" },
      { label: "Edema de toda a perna" },
      { label: "Edema de panturrilha >3cm (comparativo)" },
      { label: "Edema depressível (cacifo)" },
      { label: "Veias colaterais superficiais (não varicosas)" },
      { label: "TVP prévia documentada" },
      { label: "Diagnóstico alternativo tão ou mais provável", pts: -2 },
    ]}
    getResult={(t)=>t<=0
      ?{text:"Baixa probabilidade",color:"text-success",extra:"D-dímero se negativo → exclui TVP"}
      :t<=2?{text:"Probabilidade moderada",color:"text-warning-foreground",extra:"D-dímero ou US com Doppler"}
      :{text:"Alta probabilidade",color:"text-destructive",extra:"US com Doppler — iniciar anticoagulação"}}
  />;
}

export function CentorCalculator() {
  return <ChecklistCalc title="Faringite estreptocócica — indicação de ATB"
    items={[
      { label: "Febre >38°C" },
      { label: "Ausência de tosse" },
      { label: "Exsudato/edema tonsilar" },
      { label: "Adenopatia cervical anterior dolorosa" },
      { label: "Idade 3-14 anos" },
    ]}
    getResult={(t)=>t<=1
      ?{text:"Baixo risco — não tratar",color:"text-success",extra:"Probabilidade de SGA: 1-10%"}
      :t<=3?{text:"Risco intermediário — teste rápido",color:"text-warning-foreground",extra:"Probabilidade de SGA: 15-35%"}
      :{text:"Alto risco — considerar ATB empírica",color:"text-destructive",extra:"Probabilidade de SGA: 51-53%"}}
  />;
}

export function ABCD2Calculator() {
  return <ChecklistCalc title="Risco de AVC após AIT (2 e 7 dias)"
    items={[
      { label: "Idade ≥60 anos" },
      { label: "PA ≥140/90 mmHg" },
      { label: "Fraqueza unilateral", pts: 2 },
      { label: "Alteração de fala sem fraqueza" },
      { label: "Duração ≥60 min", pts: 2 },
      { label: "Duração 10-59 min" },
      { label: "Diabetes" },
    ]}
    getResult={(t)=>t<=3
      ?{text:"Baixo risco",color:"text-success",extra:"AVC em 2 dias: ~1%"}
      :t<=5?{text:"Risco moderado",color:"text-warning-foreground",extra:"AVC em 2 dias: ~4%"}
      :{text:"Alto risco",color:"text-destructive",extra:"AVC em 2 dias: ~8%"}}
  />;
}

export function OsmolarityCalculator() {
  const [na, setNa] = useState(""); const [gli, setGli] = useState(""); const [ur, setUr] = useState("");
  const n=Number(na),g=Number(gli),u=Number(ur);
  const osm = n ? 2*n + (g?g/18:0) + (u?u/2.8:0) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Osmolaridade sérica calculada</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Na⁺ (mEq/L)</Label><Input type="number" value={na} onChange={e=>setNa(e.target.value)} placeholder="140" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Glicose (mg/dL)</Label><Input type="number" value={gli} onChange={e=>setGli(e.target.value)} placeholder="100" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Ureia (mg/dL)</Label><Input type="number" value={ur} onChange={e=>setUr(e.target.value)} placeholder="30" className="h-8 text-xs"/></div>
      </div>
      {osm!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{Math.round(osm)} <span className="text-base font-normal">mOsm/kg</span></p>
        <p className={`font-heading text-sm font-semibold ${osm>=275&&osm<=295?"text-success":"text-destructive"}`}>
          {osm<275?"Hiposmolar":osm>295?"Hiperosmolar":"Normal (275-295)"}
        </p>
      </div>)}
    </div>
  );
}

export function SodiumCorrectionCalculator() {
  const [na, setNa] = useState(""); const [gli, setGli] = useState("");
  const n=Number(na),g=Number(gli);
  const corrected = n&&g ? n + 1.6*((g-100)/100) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Na⁺ corrigido pela hiperglicemia</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Na⁺ (mEq/L)</Label><Input type="number" value={na} onChange={e=>setNa(e.target.value)} placeholder="130" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Glicose (mg/dL)</Label><Input type="number" value={gli} onChange={e=>setGli(e.target.value)} placeholder="400" className="h-8 text-xs"/></div>
      </div>
      {corrected!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(corrected*10)/10).toFixed(1)} <span className="text-base font-normal">mEq/L</span></p>
        <p className="text-xs text-muted-foreground">Fórmula: Na + 1.6 × ((Glicose - 100) / 100)</p>
      </div>)}
    </div>
  );
}

export function WaterDeficitCalculator() {
  const [na, setNa] = useState(""); const [weight, setWeight] = useState(""); const [sex, setSex] = useState("male"); const [age, setAge] = useState("adult");
  const n=Number(na),w=Number(weight);
  const factor = sex==="male"?(age==="elderly"?0.5:0.6):(age==="elderly"?0.45:0.5);
  const deficit = n&&w ? factor*w*((n/140)-1) : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Déficit de água livre na hipernatremia</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">Na⁺ atual (mEq/L)</Label><Input type="number" value={na} onChange={e=>setNa(e.target.value)} placeholder="155" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Peso (kg)</Label><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="70" className="h-8 text-xs"/></div>
        <div className="space-y-1"><Label className="font-heading text-xs">Sexo</Label>
          <Select value={sex} onValueChange={setSex}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="male">Masculino</SelectItem><SelectItem value="female">Feminino</SelectItem></SelectContent>
          </Select>
        </div>
        <div className="space-y-1"><Label className="font-heading text-xs">Faixa etária</Label>
          <Select value={age} onValueChange={setAge}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent><SelectItem value="adult">Adulto</SelectItem><SelectItem value="elderly">Idoso</SelectItem></SelectContent>
          </Select>
        </div>
      </div>
      {deficit!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(deficit*100)/100).toFixed(1)} <span className="text-base font-normal">L</span></p>
        <p className="text-xs text-muted-foreground">Repor em 48-72h (máx 10-12 mEq/L/dia)</p>
      </div>)}
    </div>
  );
}

export function CorticosteroidConverterCalculator() {
  const drugs = [
    {name:"Hidrocortisona",eq:20,mineral:2},
    {name:"Prednisona",eq:5,mineral:1},
    {name:"Prednisolona",eq:5,mineral:1},
    {name:"Metilprednisolona",eq:4,mineral:0},
    {name:"Dexametasona",eq:0.75,mineral:0},
    {name:"Betametasona",eq:0.6,mineral:0},
  ];
  const [from, setFrom] = useState("0"); const [to, setTo] = useState("4"); const [dose, setDose] = useState("");
  const d = Number(dose);
  const fromDrug = drugs[Number(from)]; const toDrug = drugs[Number(to)];
  const converted = d ? (d / fromDrug.eq) * toDrug.eq : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Conversão entre corticosteroides</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">De</Label>
          <Select value={from} onValueChange={setFrom}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{drugs.map((d,i)=>(<SelectItem key={i} value={String(i)}>{d.name}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-1"><Label className="font-heading text-xs">Para</Label>
          <Select value={to} onValueChange={setTo}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{drugs.map((d,i)=>(<SelectItem key={i} value={String(i)}>{d.name}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1"><Label className="font-heading text-xs">Dose (mg)</Label>
        <Input type="number" value={dose} onChange={e=>setDose(e.target.value)} placeholder="40" className="h-8 text-xs"/>
      </div>
      {converted!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(converted*100)/100)} <span className="text-base font-normal">mg</span></p>
        <p className="text-xs text-muted-foreground">{fromDrug.name} {dose}mg = {toDrug.name} {(Math.round(converted*100)/100)}mg</p>
      </div>)}
    </div>
  );
}

export function OpioidConverterCalculator() {
  const drugs = [
    {name:"Morfina VO",eq:30},{name:"Morfina IV/SC",eq:10},
    {name:"Tramadol VO",eq:300},{name:"Codeína VO",eq:200},
    {name:"Metadona VO",eq:3},{name:"Oxicodona VO",eq:20},
    {name:"Fentanil TD (mcg/h)",eq:0.1},
  ];
  const [from, setFrom] = useState("0"); const [to, setTo] = useState("1"); const [dose, setDose] = useState("");
  const d=Number(dose);
  const fromDrug=drugs[Number(from)]; const toDrug=drugs[Number(to)];
  const converted = d ? (d/fromDrug.eq)*toDrug.eq : null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Conversão equianalgésica de opioides</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1"><Label className="font-heading text-xs">De</Label>
          <Select value={from} onValueChange={setFrom}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{drugs.map((d,i)=>(<SelectItem key={i} value={String(i)}>{d.name}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-1"><Label className="font-heading text-xs">Para</Label>
          <Select value={to} onValueChange={setTo}><SelectTrigger className="h-8 text-xs"><SelectValue/></SelectTrigger>
            <SelectContent>{drugs.map((d,i)=>(<SelectItem key={i} value={String(i)}>{d.name}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1"><Label className="font-heading text-xs">Dose</Label>
        <Input type="number" value={dose} onChange={e=>setDose(e.target.value)} placeholder="10" className="h-8 text-xs"/>
      </div>
      {converted!==null&&(<div className="bg-muted rounded-lg p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{(Math.round(converted*100)/100)}</p>
        <p className="text-xs text-muted-foreground">Reduzir 25-50% para tolerância cruzada incompleta</p>
      </div>)}
    </div>
  );
}
