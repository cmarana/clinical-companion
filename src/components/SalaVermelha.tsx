import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart, Wind, Zap, Bug, Brain, Syringe, AlertTriangle, Activity,
  Search, Droplet, Thermometer, Baby, Skull, Pill, FlaskConical,
  HeartPulse, Stethoscope, Flame, ShieldAlert, Timer, Waves,
} from "lucide-react";
import { startTTPSession } from "@/hooks/useTTPTracking";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Category = "ABCDE" | "Cardio" | "Neuro" | "Infecto" | "Trauma" | "Metab" | "Tóxico" | "Pediatria";

interface RedItem {
  id: string;
  label: string;
  icon: any;
  desc: string;
  category: Category;
  keywords?: string;
}

const items: RedItem[] = [
  // ABCDE / Reanimação
  { id: "em-pcr-adulto", label: "PCR / RCP", icon: Heart, desc: "ACLS • Compressões • Drogas", category: "ABCDE", keywords: "parada cardio rcp acls" },
  { id: "em-iot", label: "IOT / VA", icon: Wind, desc: "SRI • Via Aérea Difícil", category: "ABCDE", keywords: "intubacao via aerea sri" },
  { id: "em-sri", label: "SRI", icon: Syringe, desc: "Sequência rápida de intubação", category: "ABCDE", keywords: "sequencia rapida intubacao etomidato" },
  { id: "em-vm-inicial", label: "VM Inicial", icon: Waves, desc: "Parâmetros • PEEP • FiO₂", category: "ABCDE", keywords: "ventilacao mecanica" },
  { id: "em-pos-pcr", label: "Pós-PCR", icon: HeartPulse, desc: "Cuidados pós-RCE • TTM", category: "ABCDE", keywords: "pos parada rce hipotermia" },

  // Cardiovascular
  { id: "em-iam-supra", label: "IAM c/ Supra", icon: Zap, desc: "STEMI • Reperfusão", category: "Cardio", keywords: "infarto stemi troponina" },
  { id: "em-iam-sem-supra", label: "IAM s/ Supra", icon: Zap, desc: "NSTEMI • Risco GRACE", category: "Cardio", keywords: "nstemi sca" },
  { id: "em-choque-cardiogenico", label: "Choque", icon: Activity, desc: "Hipo • Cardio • Séptico", category: "Cardio", keywords: "choque hipovolemico cardiogenico" },
  { id: "em-taquiarritmia-instavel", label: "Arritmia Instável", icon: AlertTriangle, desc: "CVE • Adenosina", category: "Cardio", keywords: "taquicardia bradicardia cve" },
  { id: "em-eap", label: "EAP", icon: Droplet, desc: "Edema agudo de pulmão", category: "Cardio", keywords: "edema pulmao furosemida" },
  { id: "em-disseccao-aorta", label: "Dissecção Aorta", icon: AlertTriangle, desc: "Stanford A/B • PA alvo", category: "Cardio", keywords: "aneurisma aorta dissecao" },
  { id: "em-tep-macico", label: "TEP Maciço", icon: Wind, desc: "Trombólise • Anticoag", category: "Cardio", keywords: "tromboembolismo pulmonar" },

  // Neurológico
  { id: "avc-isquemico", label: "AVC Isquêmico", icon: Brain, desc: "NIHSS • Janela tPA", category: "Neuro", keywords: "avc isquemico trombolitico" },
  { id: "avc-hemorragico", label: "AVC Hemorrágico", icon: Brain, desc: "PA • Reversão anticoag", category: "Neuro", keywords: "hemorragia avc" },
  { id: "status-epilepticus", label: "Status Epilético", icon: Zap, desc: "Benzo • Fenitoína", category: "Neuro", keywords: "convulsao mal epileptico" },
  { id: "hipertensao-intracraniana", label: "HIC", icon: Brain, desc: "Manitol • Salina 3%", category: "Neuro", keywords: "hipertensao intracraniana" },

  // Infecto
  { id: "sepse-grave-infecto", label: "Sepse", icon: Bug, desc: "Bundle 1h • ATB • Volume", category: "Infecto", keywords: "sepse choque septico" },
  { id: "meningite-bacteriana-adulto", label: "Meningite", icon: Bug, desc: "ATB empírico • Dexa", category: "Infecto", keywords: "meningite encefalite" },
  { id: "covid-grave-srag", label: "SRAG", icon: Stethoscope, desc: "COVID • Suporte O₂", category: "Infecto", keywords: "covid srag pneumonia" },

  // Trauma
  { id: "atls-abordagem-inicial", label: "ATLS", icon: ShieldAlert, desc: "Trauma • ABCDE", category: "Trauma", keywords: "trauma atls politrauma" },
  { id: "tce", label: "TCE Grave", icon: Brain, desc: "Glasgow • Marshall", category: "Trauma", keywords: "trauma cranio encefalico" },
  { id: "choque-hemorragico", label: "Choque Hemorrágico", icon: Droplet, desc: "Damage control • Sangue", category: "Trauma", keywords: "hemorragia trauma" },
  { id: "em-pneumotorax-hipertensivo", label: "Pneumotórax Hip.", icon: Wind, desc: "Toracocentese imediata", category: "Trauma", keywords: "pneumotorax hipertensivo" },

  // Metabólico
  { id: "anafilaxia-emergencia", label: "Anafilaxia", icon: Syringe, desc: "Adrenalina IM • Volume", category: "Metab", keywords: "anafilaxia alergia" },
  { id: "cetoacidose-diabetica", label: "CAD", icon: FlaskConical, desc: "Insulina • K+ • Volume", category: "Metab", keywords: "cetoacidose diabetica" },
  { id: "hipercalemia-emergencia", label: "Hipercalemia", icon: FlaskConical, desc: "Gluconato Ca • Insulina", category: "Metab", keywords: "hipercalemia potassio" },
  { id: "hipoglicemia-grave", label: "Hipoglicemia", icon: Pill, desc: "Glicose 50% • Glucagon", category: "Metab", keywords: "hipoglicemia glicose" },
  { id: "crise-adrenal", label: "Crise Adrenal", icon: Thermometer, desc: "Hidrocortisona IV", category: "Metab", keywords: "crise adrenal addison" },

  // Tóxico
  { id: "intoxicacao-abordagem", label: "Intoxicação", icon: Skull, desc: "Antídotos • Descontam.", category: "Tóxico", keywords: "intoxicacao envenenamento" },
  { id: "intoxicacao-opioide", label: "Opioides", icon: Pill, desc: "Naloxona", category: "Tóxico", keywords: "opioide naloxona overdose" },
  { id: "intoxicacao-paracetamol", label: "Paracetamol", icon: Pill, desc: "NAC • Nomograma", category: "Tóxico", keywords: "paracetamol acetaminofeno" },

  // Pediatria / Obstetrícia
  { id: "em-pcr-pediatrica", label: "PCR Pediátrica", icon: Baby, desc: "PALS • Drogas por kg", category: "Pediatria", keywords: "pcr pediatrica pals" },
  { id: "sepse-pediatrica", label: "Sepse Pediátrica", icon: Baby, desc: "Volume • ATB • Inotrópico", category: "Pediatria", keywords: "sepse pediatrica" },
  { id: "eclampsia", label: "Eclâmpsia", icon: Flame, desc: "Sulfato Mg • Hidralazina", category: "Pediatria", keywords: "eclampsia gestante pre" },
  { id: "hemorragia-pos-parto", label: "HPP", icon: Droplet, desc: "Ocitocina • Misoprostol", category: "Pediatria", keywords: "hemorragia parto puerperal" },
];

const categories: Category[] = ["ABCDE", "Cardio", "Neuro", "Infecto", "Trauma", "Metab", "Tóxico", "Pediatria"];

export default function SalaVermelha() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<Category | "Todos">("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(it => {
      const matchCat = activeCat === "Todos" || it.category === activeCat;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        it.label.toLowerCase().includes(q) ||
        it.desc.toLowerCase().includes(q) ||
        (it.keywords ?? "").toLowerCase().includes(q)
      );
    });
  }, [query, activeCat]);

  const handleClick = (id: string, label: string) => {
    startTTPSession("sala_vermelha", label);
    navigate(`/emergency/${id}`);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
          <h2 className="font-heading font-bold text-sm text-destructive">MODO SALA VERMELHA</h2>
        </div>
        <span className="text-[10px] text-muted-foreground">{filtered.length} condutas</span>
      </div>
      <p className="text-[10px] text-muted-foreground -mt-2">
        Acesso direto às condutas críticas — toque para abrir
      </p>

      {/* Busca rápida */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar protocolo (ex: sepse, IAM, AVC...)"
          className="pl-9 h-9 text-sm bg-destructive/5 border-destructive/20 focus-visible:ring-destructive/30"
        />
      </div>

      {/* Filtros por categoria */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
        {(["Todos", ...categories] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat as Category | "Todos")}
            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all ${
              activeCat === cat
                ? "bg-destructive text-destructive-foreground"
                : "bg-destructive/10 text-destructive hover:bg-destructive/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Atalhos rápidos */}
      <div className="grid grid-cols-3 gap-1.5">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/emergencias")}
          className="h-8 text-[10px] border-destructive/20 hover:bg-destructive/10"
        >
          <Activity size={12} className="mr-1" /> Todas
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/timer-acls")}
          className="h-8 text-[10px] border-destructive/20 hover:bg-destructive/10"
        >
          <Timer size={12} className="mr-1" /> ACLS
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/calculadoras")}
          className="h-8 text-[10px] border-destructive/20 hover:bg-destructive/10"
        >
          <FlaskConical size={12} className="mr-1" /> Doses
        </Button>
      </div>

      {/* Grid de blocos */}
      {filtered.length === 0 ? (
        <div className="py-8 text-center text-xs text-muted-foreground">
          Nenhuma conduta encontrada para "{query}"
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {filtered.map(item => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id, item.label)}
              className="flex items-center gap-3 p-3 rounded-xl border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-destructive/15 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-destructive" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading font-bold text-xs truncate">{item.label}</p>
                <p className="text-[9px] text-muted-foreground leading-tight line-clamp-2">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
