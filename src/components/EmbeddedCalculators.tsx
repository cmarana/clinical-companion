import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";

// ── Inline calculator components ──

function QSofaCalc() {
  const items = [
    { label: "PAS ≤100 mmHg", pts: 1 },
    { label: "FR ≥22 irpm", pts: 1 },
    { label: "Alteração do nível de consciência (Glasgow <15)", pts: 1 },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(3).fill(false));
  const total = checked.filter(Boolean).length;
  const rec = total < 2 ? "Baixo risco — reavaliar" : "Alto risco de sepse — investigar SOFA";
  const color = total < 2 ? "text-primary dark:text-primary" : "text-destructive";

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2.5 text-sm cursor-pointer py-1">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border w-4 h-4" />
          <span className="flex-1">{item.label}</span>
        </label>
      ))}
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/3</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{rec}</p>
      </div>
    </div>
  );
}

function SofaCalc() {
  const [resp, setResp] = useState(0);
  const [coag, setCoag] = useState(0);
  const [liver, setLiver] = useState(0);
  const [cardio, setCardio] = useState(0);
  const [neuro, setNeuro] = useState(0);
  const [renal, setRenal] = useState(0);
  const total = resp + coag + liver + cardio + neuro + renal;

  const getMortality = (s: number) => {
    if (s <= 1) return "<3%";
    if (s <= 3) return "~5%";
    if (s <= 5) return "~20%";
    if (s <= 7) return "~20-30%";
    if (s <= 9) return "~33%";
    if (s <= 11) return "~50%";
    return ">90%";
  };

  const ScoreSelect = ({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) => (
    <div className="space-y-1">
      <Label className="font-heading text-xs">{label}</Label>
      <Select value={String(value)} onValueChange={(v) => onChange(Number(v))}>
        <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
        <SelectContent>
          {[0, 1, 2, 3, 4].map((n) => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <ScoreSelect label="Respiratório (PaO2/FiO2)" value={resp} onChange={setResp} />
        <ScoreSelect label="Coagulação (Plaquetas)" value={coag} onChange={setCoag} />
        <ScoreSelect label="Hepático (Bilirrubina)" value={liver} onChange={setLiver} />
        <ScoreSelect label="Cardiovascular (PAM)" value={cardio} onChange={setCardio} />
        <ScoreSelect label="Neurológico (Glasgow)" value={neuro} onChange={setNeuro} />
        <ScoreSelect label="Renal (Creatinina)" value={renal} onChange={setRenal} />
      </div>
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className="font-heading text-sm font-semibold text-primary">Mortalidade estimada: {getMortality(total)}</p>
      </div>
    </div>
  );
}

function GlasgowCalc() {
  const [eye, setEye] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);
  const total = eye + verbal + motor;
  const cls = total <= 8 ? { text: "Grave (IOT indicada)", color: "text-destructive" } : total <= 12 ? { text: "Moderado", color: "text-destructive dark:text-destructive" } : { text: "Leve", color: "text-primary dark:text-primary" };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Label className="font-heading text-xs">Abertura Ocular (E)</Label>
        <Select value={String(eye)} onValueChange={(v) => setEye(Number(v))}>
          <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
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
          <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
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
          <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
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
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${cls.color}`}>{cls.text}</p>
        <p className="text-xs text-muted-foreground">E{eye} V{verbal} M{motor}</p>
      </div>
    </div>
  );
}

function WellsCalc() {
  const items = [
    { label: "Sinais clínicos de TVP", pts: 3 },
    { label: "Diagnóstico alternativo menos provável que TEP", pts: 3 },
    { label: "FC >100 bpm", pts: 1.5 },
    { label: "Imobilização >3d ou cirurgia <4 sem", pts: 1.5 },
    { label: "TVP ou TEP prévio", pts: 1.5 },
    { label: "Hemoptise", pts: 1 },
    { label: "Câncer ativo", pts: 1 },
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const total = items.reduce((sum, item, i) => sum + (checked[i] ? item.pts : 0), 0);
  const risk = total <= 1 ? "Baixo risco" : total <= 6 ? "Risco intermediário" : "Alto risco";
  const color = total <= 1 ? "text-primary dark:text-primary" : total <= 6 ? "text-destructive dark:text-destructive" : "text-destructive";

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2.5 text-sm cursor-pointer py-1">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border w-4 h-4" />
          <span className="flex-1">{item.label}</span>
          <span className="text-muted-foreground font-heading text-xs">+{item.pts}</span>
        </label>
      ))}
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{risk}</p>
      </div>
    </div>
  );
}

function NIHSSCalc() {
  const domains = [
    { label: "Nível de consciência", max: 3 },
    { label: "Perguntas (mês, idade)", max: 2 },
    { label: "Comandos (abrir/fechar olhos, apertar mão)", max: 2 },
    { label: "Melhor olhar conjugado", max: 2 },
    { label: "Campo visual", max: 3 },
    { label: "Paralisia facial", max: 3 },
    { label: "Motor MMSS direito", max: 4 },
    { label: "Motor MMSS esquerdo", max: 4 },
    { label: "Motor MMII direito", max: 4 },
    { label: "Motor MMII esquerdo", max: 4 },
    { label: "Ataxia de membros", max: 2 },
    { label: "Sensibilidade", max: 2 },
    { label: "Linguagem", max: 3 },
    { label: "Disartria", max: 2 },
    { label: "Extinção/inatenção", max: 2 },
  ];
  const [vals, setVals] = useState<number[]>(new Array(domains.length).fill(0));
  const total = vals.reduce((a, b) => a + b, 0);
  const sev = total === 0 ? "Sem déficit" : total <= 4 ? "Leve" : total <= 15 ? "Moderado" : total <= 20 ? "Moderado-grave" : "Grave";

  return (
    <div className="space-y-2">
      {domains.map((d, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-xs flex-1">{d.label}</span>
          <Select value={String(vals[i])} onValueChange={(v) => { const n = [...vals]; n[i] = Number(v); setVals(n); }}>
            <SelectTrigger className="w-16 h-7 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Array.from({ length: d.max + 1 }, (_, n) => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      ))}
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/42</p>
        <p className="font-heading text-sm font-semibold text-primary">{sev}</p>
      </div>
    </div>
  );
}

function CURB65Calc() {
  const items = [
    "Confusão mental", "Ureia >50 mg/dL", "FR ≥30 irpm", "PAS <90 ou PAD ≤60", "Idade ≥65 anos",
  ];
  const [checked, setChecked] = useState<boolean[]>(new Array(5).fill(false));
  const total = checked.filter(Boolean).length;
  const rec = total <= 1 ? "Ambulatorial" : total === 2 ? "Internação breve" : "Internação (UTI se 4-5)";
  const color = total <= 1 ? "text-primary dark:text-primary" : total === 2 ? "text-destructive dark:text-destructive" : "text-destructive";

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <label key={i} className="flex items-center gap-2.5 text-sm cursor-pointer py-1">
          <input type="checkbox" checked={checked[i]} onChange={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} className="rounded border-border w-4 h-4" />
          <span className="flex-1">{item}</span>
        </label>
      ))}
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/5</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{rec}</p>
      </div>
    </div>
  );
}

function HEARTCalc() {
  const [history, setHistory] = useState(0);
  const [ecg, setEcg] = useState(0);
  const [age, setAge] = useState(0);
  const [risk, setRisk] = useState(0);
  const [troponin, setTroponin] = useState(0);
  const total = history + ecg + age + risk + troponin;
  const rec = total <= 3 ? "Baixo risco — alta precoce" : total <= 6 ? "Risco moderado — observação" : "Alto risco — internação / cateterismo";
  const color = total <= 3 ? "text-primary dark:text-primary" : total <= 6 ? "text-destructive dark:text-destructive" : "text-destructive";

  const Sel = ({ label, value, onChange, opts }: { label: string; value: number; onChange: (v: number) => void; opts: string[] }) => (
    <div className="space-y-1">
      <Label className="font-heading text-xs">{label}</Label>
      <Select value={String(value)} onValueChange={(v) => onChange(Number(v))}>
        <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
        <SelectContent>{opts.map((o, i) => <SelectItem key={i} value={String(i)}>{o}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="space-y-3">
      <Sel label="História" value={history} onChange={setHistory} opts={["Pouco suspeita (0)", "Moderada (1)", "Altamente suspeita (2)"]} />
      <Sel label="ECG" value={ecg} onChange={setEcg} opts={["Normal (0)", "Alteração inespecífica (1)", "Desvio ST significativo (2)"]} />
      <Sel label="Idade" value={age} onChange={setAge} opts={["<45 anos (0)", "45-64 anos (1)", "≥65 anos (2)"]} />
      <Sel label="Fatores de risco" value={risk} onChange={setRisk} opts={["Nenhum (0)", "1-2 fatores (1)", "≥3 fatores ou DAC prévia (2)"]} />
      <Sel label="Troponina" value={troponin} onChange={setTroponin} opts={["Normal (0)", "1-3x limite (1)", ">3x limite (2)"]} />
      <div className="bg-muted rounded-xl p-4 text-center space-y-1">
        <p className="font-heading text-3xl font-bold">{total}/10</p>
        <p className={`font-heading text-sm font-semibold ${color}`}>{rec}</p>
      </div>
    </div>
  );
}

// ── Calculator registry mapped to protocol keywords ──

// ── Dengue / Chikungunya: hidratação por peso e fase ──
function DengueHidratacaoCalc() {
  const [peso, setPeso] = useState<number>(70);
  const [grupo, setGrupo] = useState<"A" | "B" | "C" | "D">("A");
  const [faixa, setFaixa] = useState<"adulto" | "crianca" | "idoso">("adulto");
  const isCrianca = faixa === "crianca";
  const isIdoso = faixa === "idoso";

  const oralDiaria = Math.round(peso * 60);
  const cExpansao1h = Math.round(peso * 10);
  const cFase2 = Math.round(peso * 25);
  const cFase3 = Math.round(peso * 25);
  const dBolus = Math.round(peso * 20);
  const cMax = Math.round(peso * 30);

  const blocos: Record<string, { titulo: string; passos: string[]; alerta?: string }> = {
    A: {
      titulo: "Grupo A — Hidratação oral domiciliar",
      passos: [
        `Volume diário total: ${oralDiaria} mL/dia (≈ 60 mL/kg)`,
        "1/3 do volume com SRO + 2/3 líquidos caseiros",
        "Reavaliação em 48 h ou imediato se sinais de alarme",
      ],
    },
    B: {
      titulo: "Grupo B — Observação + hidratação supervisionada",
      passos: [
        `Mesmo volume oral (${oralDiaria} mL/dia)`,
        "Hemograma + Hct + plaquetas a cada 4-6 h",
        "Se Hct ↑ >10% ou plaquetas em queda → conduzir como Grupo C",
      ],
      alerta: isIdoso ? "≥65 a: limiar baixo para internação. Monitorar PA postural, lactato e perfusão." : undefined,
    },
    C: {
      titulo: "Grupo C — Expansão parenteral (sinais de alarme)",
      passos: isCrianca
        ? [
            `Fase 1 (criança): SF/Ringer ${Math.round(peso * 20)} mL EV em 2 h (20 mL/kg)`,
            "Reavaliar Hct, PA, diurese e perfusão",
            "Se melhora: manutenção Holliday-Segar; se sem melhora: repetir fase",
          ]
        : [
            `Fase 1: SF 0,9% ou Ringer ${cExpansao1h} mL EV em 1 h (10 mL/kg)`,
            `Se MELHORA: ${cFase2} mL EV em 6-8 h (25 mL/kg) → ${cFase3} mL EV em 8-12 h`,
            `Se sem melhora: repetir 10 mL/kg em 1 h até 3× (teto ${cMax} mL na expansão)`,
            "Se persistir após 30 mL/kg → tratar como Grupo D",
          ],
      alerta: isIdoso ? "≥65 a: reavaliar a cada 2 h, vigiar BNP/POCUS para evitar sobrecarga." : undefined,
    },
    D: {
      titulo: "Grupo D — Choque (UTI)",
      passos: [
        `Bolus: Ringer lactato ${dBolus} mL EV em 15-30 min (20 mL/kg) — repetir até 3×`,
        "Se PAM <65 após 30 mL/kg: noradrenalina 0,05-0,5 mcg/kg/min EV BIC",
        "Albumina 5% 250-500 mL se refratário e Hct elevado",
        "Hemácias se Hb <7 ou sangramento; plaquetas só se ativo + <50 mil",
      ],
    },
  };
  const b = blocos[grupo];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Peso (kg)</Label>
          <Input type="number" min={3} max={200} value={peso} onChange={(e) => setPeso(Number(e.target.value) || 0)} className="h-8 text-xs" />
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Faixa etária</Label>
          <Select value={faixa} onValueChange={(v) => setFaixa(v as typeof faixa)}>
            <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="adulto">Adulto (15-64 a)</SelectItem>
              <SelectItem value="idoso">Idoso ≥65 a (alto risco)</SelectItem>
              <SelectItem value="crianca">Criança</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1">
        <Label className="font-heading text-xs">Estrato de risco / fase</Label>
        <Select value={grupo} onValueChange={(v) => setGrupo(v as typeof grupo)}>
          <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="A">Grupo A — sem alarme, sem comorbidade</SelectItem>
            <SelectItem value="B">Grupo B — sem alarme, com comorbidade/risco</SelectItem>
            <SelectItem value="C">Grupo C — sinais de alarme</SelectItem>
            <SelectItem value="D">Grupo D — choque / dengue grave</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="bg-muted rounded-xl p-4 space-y-2">
        <p className="font-heading text-sm font-bold text-primary">{b.titulo}</p>
        <ul className="space-y-1.5">
          {b.passos.map((p, i) => (
            <li key={i} className="text-xs leading-relaxed flex gap-2">
              <span className="text-primary font-bold shrink-0">•</span><span>{p}</span>
            </li>
          ))}
        </ul>
        {b.alerta && (
          <p className="text-[11px] font-semibold text-destructive dark:text-destructive border-l-2 border-destructive0 pl-2 mt-2">⚠ {b.alerta}</p>
        )}
        <p className="text-[10px] text-muted-foreground italic pt-1">
          Base: PCDT Dengue MS 2025-2026 + OPAS 2025. Reavaliar a cada 1 h em Grupo C/D.
        </p>
      </div>
    </div>
  );
}

// ── Estratificador de risco Dengue / Chikungunya ──
function ArbovirusRiskCalc() {
  const [doenca, setDoenca] = useState<"dengue" | "chikungunya">("dengue");
  const [idade, setIdade] = useState<"<2" | "2-14" | "15-64" | "≥65">("15-64");
  const [gestante, setGestante] = useState(false);
  const [comorbidade, setComorbidade] = useState(false);

  const alarmeItens = [
    "Dor abdominal intensa contínua",
    "Vômitos persistentes",
    "Hepatomegalia >2 cm",
    "Sangramento de mucosa",
    "Letargia / irritabilidade",
    "Hipotensão postural / lipotimia",
    "↑ Hct + queda de plaquetas",
  ];
  const graveItens = [
    "Choque (PAS <90 / PAM <65 / pulso fino)",
    "Sangramento grave (digestivo, SNC)",
    "Disfunção orgânica (hepatite, miocardite, encefalite)",
    "Insuficiência respiratória",
  ];
  const chikGraveItens = [
    "Cardite / miocardite",
    "Encefalite / mielite",
    "Hepatite fulminante",
    "Sepse bacteriana secundária",
    "Gestante 3º trimestre periparto",
  ];

  const [alarme, setAlarme] = useState<boolean[]>(new Array(alarmeItens.length).fill(false));
  const [grave, setGrave] = useState<boolean[]>(new Array(graveItens.length).fill(false));
  const [chikGrave, setChikGrave] = useState<boolean[]>(new Array(chikGraveItens.length).fill(false));

  const hasAlarme = alarme.some(Boolean);
  const hasGrave = grave.some(Boolean);
  const hasChikGrave = chikGrave.some(Boolean);
  const grupoRisco = comorbidade || gestante || idade === "<2" || idade === "≥65";

  let classif: { grupo: string; cor: string; conduta: string[] };
  if (doenca === "dengue") {
    if (hasGrave) classif = {
      grupo: "Grupo D — Dengue grave",
      cor: "bg-destructive0/15 text-destructive dark:text-destructive border-destructive0/40",
      conduta: [
        "UTI imediata + monitorização invasiva",
        "Cristaloide 20 mL/kg em 15-30 min (até 3 bolus)",
        "Noradrenalina precoce se PAM <65 após 30 mL/kg",
        "Hemoderivados conforme sangramento; plaquetas só se ativo + <50 mil",
        "Notificação SINAN imediata",
      ],
    };
    else if (hasAlarme) classif = {
      grupo: "Grupo C — Sinais de alarme",
      cor: "bg-destructive0/15 text-destructive dark:text-destructive border-destructive0/40",
      conduta: [
        "Internação + hidratação parenteral (10 mL/kg em 1 h)",
        "Hct, plaquetas, PA e diurese a cada 1 h",
        "Escalonar a Grupo D se sem melhora após 30 mL/kg",
      ],
    };
    else if (grupoRisco) classif = {
      grupo: "Grupo B — Risco aumentado",
      cor: "bg-destructive0/15 text-destructive dark:text-destructive border-destructive0/40",
      conduta: [
        "Observação 24-48 h em unidade de saúde",
        "Hidratação oral supervisionada (60 mL/kg/dia)",
        "Hemograma seriado 4-6 h",
        idade === "≥65" ? "≥65 a: maior letalidade em 2025/2026 — limiar baixo para internar" : "Vigiar surgimento de sinais de alarme",
      ],
    };
    else classif = {
      grupo: "Grupo A — Manejo domiciliar",
      cor: "bg-primary0/15 text-primary dark:text-primary border-primary0/40",
      conduta: [
        "Hidratação oral 60 mL/kg/dia (1/3 SRO + 2/3 líquidos)",
        "Paracetamol/dipirona — vedado AAS, AINE, corticoide",
        "Retorno em 48 h ou imediato se sinais de alarme",
      ],
    };
  } else {
    if (hasChikGrave) classif = {
      grupo: "Chikungunya grave / atípica",
      cor: "bg-destructive0/15 text-destructive dark:text-destructive border-destructive0/40",
      conduta: [
        "Internação (UTI se cardite/encefalite/hepatite fulminante)",
        "Suporte de órgão + analgesia escalonada",
        "Avaliar transmissão vertical se gestante periparto",
        "Notificação SINAN em ≤24 h",
      ],
    };
    else if (grupoRisco) classif = {
      grupo: "Chikungunya com risco aumentado",
      cor: "bg-destructive0/15 text-destructive dark:text-destructive border-destructive0/40",
      conduta: [
        "Observação + analgesia (paracetamol/dipirona)",
        "AINE somente após excluir dengue (NS1 negativo + plaquetas estáveis)",
        "Reavaliação em 48 h e em 14 d (fase subaguda)",
        gestante ? "Gestante: paracetamol exclusivo; vigiar transmissão vertical" : "Idoso/<2 a: vigiar formas atípicas e desidratação",
      ],
    };
    else classif = {
      grupo: "Chikungunya aguda — manejo ambulatorial",
      cor: "bg-primary0/15 text-primary dark:text-primary border-primary0/40",
      conduta: [
        "Hidratação oral + paracetamol/dipirona",
        "NÃO usar AAS/AINE nas primeiras 2 sem (até excluir dengue)",
        "Repouso relativo + crioterapia articular",
        "Reavaliar em 14 d; encaminhar reumato se >6 sem",
      ],
    };
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="font-heading text-xs">Doença</Label>
          <Select value={doenca} onValueChange={(v) => setDoenca(v as typeof doenca)}>
            <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="dengue">Dengue</SelectItem>
              <SelectItem value="chikungunya">Chikungunya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label className="font-heading text-xs">Faixa etária</Label>
          <Select value={idade} onValueChange={(v) => setIdade(v as typeof idade)}>
            <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="<2">&lt; 2 anos</SelectItem>
              <SelectItem value="2-14">2-14 anos</SelectItem>
              <SelectItem value="15-64">15-64 anos</SelectItem>
              <SelectItem value="≥65">≥ 65 anos (maior letalidade)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" checked={gestante} onChange={(e) => setGestante(e.target.checked)} className="w-4 h-4" /> Gestante
        </label>
        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" checked={comorbidade} onChange={(e) => setComorbidade(e.target.checked)} className="w-4 h-4" />
          Comorbidade (DM, HAS, DRC, IC, hemoglobinopatia, imunossupressão)
        </label>
      </div>

      {doenca === "dengue" && (
        <>
          <div className="space-y-1">
            <p className="font-heading text-xs font-semibold">Sinais de alarme (qualquer = Grupo C)</p>
            {alarmeItens.map((it, i) => (
              <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
                <input type="checkbox" checked={alarme[i]} onChange={() => { const c = [...alarme]; c[i] = !c[i]; setAlarme(c); }} className="w-4 h-4" />
                <span>{it}</span>
              </label>
            ))}
          </div>
          <div className="space-y-1">
            <p className="font-heading text-xs font-semibold text-destructive">Sinais de gravidade (qualquer = Grupo D)</p>
            {graveItens.map((it, i) => (
              <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
                <input type="checkbox" checked={grave[i]} onChange={() => { const c = [...grave]; c[i] = !c[i]; setGrave(c); }} className="w-4 h-4" />
                <span>{it}</span>
              </label>
            ))}
          </div>
        </>
      )}

      {doenca === "chikungunya" && (
        <div className="space-y-1">
          <p className="font-heading text-xs font-semibold text-destructive">Sinais de gravidade / forma atípica</p>
          {chikGraveItens.map((it, i) => (
            <label key={i} className="flex items-center gap-2 text-xs cursor-pointer">
              <input type="checkbox" checked={chikGrave[i]} onChange={() => { const c = [...chikGrave]; c[i] = !c[i]; setChikGrave(c); }} className="w-4 h-4" />
              <span>{it}</span>
            </label>
          ))}
        </div>
      )}

      <div className={`rounded-xl p-4 border-2 ${classif.cor}`}>
        <p className="font-heading text-sm font-bold mb-2">{classif.grupo}</p>
        <ul className="space-y-1.5">
          {classif.conduta.map((c, i) => (
            <li key={i} className="text-xs leading-relaxed flex gap-2">
              <span className="font-bold shrink-0">→</span><span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="text-[10px] text-muted-foreground italic pt-2 mt-2 border-t border-current/20">
          Base: PCDT Dengue/Chikungunya MS 2025-2026 + SBI 2026.
        </p>
      </div>
    </div>
  );
}

interface EmbeddedCalc {
  id: string;
  title: string;
  description: string;
  component: React.FC;
}

const CALC_REGISTRY: Record<string, EmbeddedCalc> = {
  qsofa: { id: "qsofa", title: "qSOFA", description: "Triagem rápida para sepse", component: QSofaCalc },
  sofa: { id: "sofa", title: "SOFA Score", description: "Disfunção orgânica na sepse", component: SofaCalc },
  glasgow: { id: "glasgow", title: "Escala de Glasgow", description: "Nível de consciência (3-15)", component: GlasgowCalc },
  wells: { id: "wells", title: "Wells (TEP)", description: "Probabilidade pré-teste", component: WellsCalc },
  nihss: { id: "nihss", title: "NIHSS", description: "Gravidade do AVC", component: NIHSSCalc },
  curb65: { id: "curb65", title: "CURB-65", description: "Gravidade de pneumonia", component: CURB65Calc },
  heart: { id: "heart", title: "HEART Score", description: "Risco na dor torácica", component: HEARTCalc },
  "dengue-hidratacao": { id: "dengue-hidratacao", title: "Hidratação na Dengue", description: "Volume por peso, fase e estrato (PCDT 2026)", component: DengueHidratacaoCalc },
  "arbovirus-risco": { id: "arbovirus-risco", title: "Estratificador Dengue / Chikungunya", description: "Classifica grupo A-D e gera conduta", component: ArbovirusRiskCalc },
};

const PROTOCOL_CALC_MAP: Record<string, string[]> = {
  "sepse": ["qsofa", "sofa"],
  "choque-septico": ["qsofa", "sofa"],
  "choque-séptico": ["qsofa", "sofa"],
  "iam": ["heart"],
  "supra": ["heart"],
  "sem-supra": ["heart"],
  "coronariana": ["heart"],
  "avc": ["nihss", "glasgow"],
  "isquemico": ["nihss", "glasgow"],
  "hemorragico": ["glasgow"],
  "tep": ["wells"],
  "tromboembolismo": ["wells"],
  "pneumonia": ["curb65"],
  "pac": ["curb65"],
  "trauma": ["glasgow"],
  "tce": ["glasgow"],
  "pcr": ["glasgow"],
  "meningite": ["glasgow"],
  "dengue": ["arbovirus-risco", "dengue-hidratacao"],
  "chikungunya": ["arbovirus-risco"],
};

function findCalcsForProtocol(protocolId: string): EmbeddedCalc[] {
  const pid = protocolId.toLowerCase();
  // Direct match
  if (PROTOCOL_CALC_MAP[pid]) {
    return PROTOCOL_CALC_MAP[pid].map(id => CALC_REGISTRY[id]).filter(Boolean);
  }
  // Partial match
  for (const key of Object.keys(PROTOCOL_CALC_MAP)) {
    if (pid.includes(key) || key.includes(pid)) {
      return PROTOCOL_CALC_MAP[key].map(id => CALC_REGISTRY[id]).filter(Boolean);
    }
  }
  return [];
}

// ── Main component ──

interface EmbeddedCalculatorsProps {
  protocolId: string;
}

export default function EmbeddedCalculators({ protocolId }: EmbeddedCalculatorsProps) {
  const calcs = useMemo(() => findCalcsForProtocol(protocolId), [protocolId]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    calcs.forEach((c, i) => { init[c.id] = i === 0; }); // first one open
    return init;
  });

  if (calcs.length === 0) return null;

  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground mb-2">
        Calcule os scores relevantes sem sair do protocolo
      </p>
      {calcs.map(calc => {
        const Comp = calc.component;
        const isOpen = expanded[calc.id];
        return (
          <Card key={calc.id} className="border-primary/20 shadow-sm">
            <button
              onClick={() => toggle(calc.id)}
              className="w-full flex items-center gap-3 p-4 text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Calculator size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-semibold text-sm">{calc.title}</p>
                <p className="text-xs text-muted-foreground">{calc.description}</p>
              </div>
              {isOpen ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
            </button>
            {isOpen && (
              <CardContent className="pt-0 pb-4 px-4">
                <div className="border-t border-border pt-4">
                  <Comp />
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}
    </div>
  );
}

export { findCalcsForProtocol };
