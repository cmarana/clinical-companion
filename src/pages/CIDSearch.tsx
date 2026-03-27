import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CIDEntry { code: string; description: string; category: string }

const cidData: CIDEntry[] = [
  // Cardiovascular
  { code: "I21.0", description: "IAM parede anterior", category: "Cardiovascular" },
  { code: "I21.1", description: "IAM parede inferior", category: "Cardiovascular" },
  { code: "I21.9", description: "IAM não especificado", category: "Cardiovascular" },
  { code: "I20.0", description: "Angina instável", category: "Cardiovascular" },
  { code: "I48", description: "Fibrilação / flutter atrial", category: "Cardiovascular" },
  { code: "I50.0", description: "Insuficiência cardíaca congestiva", category: "Cardiovascular" },
  { code: "I50.1", description: "Insuficiência ventricular esquerda", category: "Cardiovascular" },
  { code: "I10", description: "Hipertensão arterial essencial", category: "Cardiovascular" },
  { code: "I11.0", description: "Cardiopatia hipertensiva com ICC", category: "Cardiovascular" },
  { code: "I13.2", description: "Cardiopatia hipertensiva + nefropatia com ICC", category: "Cardiovascular" },
  { code: "I46.0", description: "Parada cardíaca com ressuscitação", category: "Cardiovascular" },
  { code: "I46.9", description: "Parada cardíaca não especificada", category: "Cardiovascular" },
  { code: "I26.0", description: "Embolia pulmonar com cor pulmonale", category: "Cardiovascular" },
  { code: "I26.9", description: "Embolia pulmonar sem cor pulmonale", category: "Cardiovascular" },
  { code: "I71.3", description: "Aneurisma de aorta abdominal roto", category: "Cardiovascular" },
  { code: "I74.3", description: "Embolia/trombose artérias MMII", category: "Cardiovascular" },
  { code: "I80.2", description: "Trombose venosa profunda", category: "Cardiovascular" },
  { code: "I47.2", description: "Taquicardia ventricular", category: "Cardiovascular" },
  { code: "I49.0", description: "Fibrilação ventricular", category: "Cardiovascular" },
  // Neurológico
  { code: "I64", description: "AVC não especificado", category: "Neurológico" },
  { code: "I63.9", description: "AVC isquêmico", category: "Neurológico" },
  { code: "I61.9", description: "AVC hemorrágico", category: "Neurológico" },
  { code: "I60.9", description: "Hemorragia subaracnóidea", category: "Neurológico" },
  { code: "G40.9", description: "Epilepsia não especificada", category: "Neurológico" },
  { code: "G41.0", description: "Estado de mal epiléptico", category: "Neurológico" },
  { code: "R40.2", description: "Coma não especificado", category: "Neurológico" },
  { code: "G43.9", description: "Enxaqueca", category: "Neurológico" },
  { code: "G61.0", description: "Síndrome de Guillain-Barré", category: "Neurológico" },
  { code: "R55", description: "Síncope", category: "Neurológico" },
  // Respiratório
  { code: "J18.9", description: "Pneumonia não especificada", category: "Respiratório" },
  { code: "J15.9", description: "Pneumonia bacteriana", category: "Respiratório" },
  { code: "J44.1", description: "DPOC exacerbada", category: "Respiratório" },
  { code: "J45.9", description: "Asma", category: "Respiratório" },
  { code: "J46", description: "Estado de mal asmático", category: "Respiratório" },
  { code: "J96.0", description: "Insuficiência respiratória aguda", category: "Respiratório" },
  { code: "J80", description: "SDRA (síndrome do desconforto respiratório)", category: "Respiratório" },
  { code: "J93.1", description: "Pneumotórax espontâneo", category: "Respiratório" },
  { code: "J94.2", description: "Hemotórax", category: "Respiratório" },
  { code: "J81", description: "Edema agudo de pulmão", category: "Respiratório" },
  // Infecciosas / Sepse
  { code: "A41.9", description: "Sepse não especificada", category: "Infecciosas" },
  { code: "R65.1", description: "Sepse grave / choque séptico", category: "Infecciosas" },
  { code: "A49.9", description: "Infecção bacteriana não especificada", category: "Infecciosas" },
  { code: "N39.0", description: "Infecção do trato urinário", category: "Infecciosas" },
  { code: "A09", description: "Gastroenterite infecciosa", category: "Infecciosas" },
  { code: "A46", description: "Erisipela", category: "Infecciosas" },
  { code: "L03.9", description: "Celulite", category: "Infecciosas" },
  { code: "G00.9", description: "Meningite bacteriana", category: "Infecciosas" },
  { code: "B20", description: "HIV / SIDA", category: "Infecciosas" },
  { code: "A15.0", description: "Tuberculose pulmonar", category: "Infecciosas" },
  { code: "A19.9", description: "Tuberculose miliar", category: "Infecciosas" },
  { code: "B58.9", description: "Toxoplasmose", category: "Infecciosas" },
  // Trauma
  { code: "S06.9", description: "TCE não especificado", category: "Trauma" },
  { code: "S06.2", description: "TCE com lesão difusa", category: "Trauma" },
  { code: "S27.0", description: "Pneumotórax traumático", category: "Trauma" },
  { code: "S36.0", description: "Lesão esplênica", category: "Trauma" },
  { code: "S36.1", description: "Lesão hepática", category: "Trauma" },
  { code: "T79.4", description: "Choque traumático", category: "Trauma" },
  { code: "S72.0", description: "Fratura do colo do fêmur", category: "Trauma" },
  { code: "T07", description: "Politraumatismo", category: "Trauma" },
  // Metabólico
  { code: "E10.1", description: "Cetoacidose diabética tipo 1", category: "Metabólico" },
  { code: "E11.0", description: "Cetoacidose diabética tipo 2", category: "Metabólico" },
  { code: "E11.6", description: "Diabetes com complicações", category: "Metabólico" },
  { code: "E16.2", description: "Hipoglicemia não especificada", category: "Metabólico" },
  { code: "E87.1", description: "Hiponatremia", category: "Metabólico" },
  { code: "E87.5", description: "Hipercalemia", category: "Metabólico" },
  { code: "E87.6", description: "Hipocalemia", category: "Metabólico" },
  { code: "E86", description: "Desidratação", category: "Metabólico" },
  { code: "E05.5", description: "Crise tireotóxica", category: "Metabólico" },
  { code: "E27.2", description: "Crise addisoniana", category: "Metabólico" },
  // Gastrointestinal
  { code: "K92.2", description: "Hemorragia digestiva não especificada", category: "Gastrointestinal" },
  { code: "K92.0", description: "Hematêmese", category: "Gastrointestinal" },
  { code: "K92.1", description: "Melena", category: "Gastrointestinal" },
  { code: "K85.9", description: "Pancreatite aguda", category: "Gastrointestinal" },
  { code: "K35.9", description: "Apendicite aguda", category: "Gastrointestinal" },
  { code: "K56.6", description: "Obstrução intestinal", category: "Gastrointestinal" },
  { code: "K81.0", description: "Colecistite aguda", category: "Gastrointestinal" },
  { code: "K25.0", description: "Úlcera gástrica com hemorragia", category: "Gastrointestinal" },
  { code: "K70.4", description: "Insuficiência hepática alcoólica", category: "Gastrointestinal" },
  // Obstétrico
  { code: "O15.0", description: "Eclâmpsia na gravidez", category: "Obstétrico" },
  { code: "O14.1", description: "Pré-eclâmpsia grave", category: "Obstétrico" },
  { code: "O72.1", description: "Hemorragia pós-parto", category: "Obstétrico" },
  { code: "O45.0", description: "DPP com coagulopatia", category: "Obstétrico" },
  { code: "O44.1", description: "Placenta prévia com hemorragia", category: "Obstétrico" },
  { code: "O88.1", description: "Embolia amniótica", category: "Obstétrico" },
  { code: "O75.1", description: "Choque durante trabalho de parto", category: "Obstétrico" },
  // Psiquiátrico
  { code: "F20.0", description: "Esquizofrenia paranoide", category: "Psiquiátrico" },
  { code: "F23", description: "Transtorno psicótico agudo", category: "Psiquiátrico" },
  { code: "F10.0", description: "Intoxicação alcoólica aguda", category: "Psiquiátrico" },
  { code: "F10.3", description: "Abstinência alcoólica", category: "Psiquiátrico" },
  { code: "F10.4", description: "Delirium tremens", category: "Psiquiátrico" },
  { code: "X71", description: "Autolesão intencional por afogamento", category: "Psiquiátrico" },
  { code: "T14.9", description: "Tentativa de suicídio / autolesão", category: "Psiquiátrico" },
  // Intoxicações
  { code: "T40.1", description: "Intoxicação por opiáceos", category: "Intoxicações" },
  { code: "T42.4", description: "Intoxicação por benzodiazepínicos", category: "Intoxicações" },
  { code: "T43.0", description: "Intoxicação por tricíclicos", category: "Intoxicações" },
  { code: "T39.1", description: "Intoxicação por paracetamol", category: "Intoxicações" },
  { code: "T60.0", description: "Intoxicação por organofosforados", category: "Intoxicações" },
  { code: "T54.9", description: "Ingestão de cáusticos", category: "Intoxicações" },
  { code: "T58", description: "Intoxicação por monóxido de carbono", category: "Intoxicações" },
  // Alergia
  { code: "T78.2", description: "Choque anafilático", category: "Alergia" },
  { code: "T78.0", description: "Choque anafilático alimentar", category: "Alergia" },
  { code: "L50.0", description: "Urticária alérgica", category: "Alergia" },
  { code: "T78.3", description: "Angioedema", category: "Alergia" },
  // Renal
  { code: "N17.9", description: "Injúria renal aguda", category: "Renal" },
  { code: "N18.5", description: "Doença renal crônica estágio 5", category: "Renal" },
  { code: "N10", description: "Pielonefrite aguda", category: "Renal" },
  { code: "N20.0", description: "Cólica nefrética / litíase", category: "Renal" },
  // Outros frequentes
  { code: "R06.0", description: "Dispneia", category: "Sintomas" },
  { code: "R07.9", description: "Dor torácica não especificada", category: "Sintomas" },
  { code: "R10.4", description: "Dor abdominal não especificada", category: "Sintomas" },
  { code: "R50.9", description: "Febre não especificada", category: "Sintomas" },
  { code: "R51", description: "Cefaleia", category: "Sintomas" },
  { code: "R42", description: "Tontura / vertigem", category: "Sintomas" },
  { code: "R11", description: "Náuseas e vômitos", category: "Sintomas" },
  { code: "R40.0", description: "Sonolência / rebaixamento", category: "Sintomas" },
  { code: "R57.0", description: "Choque cardiogênico", category: "Sintomas" },
  { code: "R57.1", description: "Choque hipovolêmico", category: "Sintomas" },
  { code: "R57.8", description: "Choque (outros)", category: "Sintomas" },
  { code: "T20-T32", description: "Queimaduras (geral)", category: "Trauma" },
  { code: "W84", description: "Obstrução de vias aéreas (OVACE)", category: "Trauma" },
];

export default function CIDSearch() {
  const { subscription } = useAuth();
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const results = useMemo(() => {
    if (query.length < 2) return null;
    const q = query.toLowerCase();
    return cidData.filter(c =>
      c.code.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }, [query]);

  const categories = useMemo(() => {
    if (results) return null;
    const cats: Record<string, CIDEntry[]> = {};
    cidData.forEach(c => { if (!cats[c.category]) cats[c.category] = []; cats[c.category].push(c); });
    return cats;
  }, [results]);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    toast.success(`CID ${code} copiado!`);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!subscription.subscribed) {
    return <><TopBar title="CID-10" /><PremiumGate /></>;
  }

  return (
    <>
      <TopBar title="CID-10 — Pronto-Socorro" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        <p className="text-xs text-muted-foreground">CIDs mais usados no pronto-socorro — toque para copiar</p>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar CID ou diagnóstico..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pl-8 h-10 text-sm rounded-xl"
          />
        </div>

        {results && results.length === 0 && <p className="text-center text-sm text-muted-foreground py-4">Nenhum CID encontrado.</p>}

        {results && results.length > 0 && (
          <div className="space-y-1">
            {results.map(c => (
              <CIDItem key={c.code} entry={c} copied={copied} onCopy={copyCode} />
            ))}
          </div>
        )}

        {!results && categories && Object.entries(categories).map(([cat, entries]) => (
          <div key={cat} className="space-y-1.5">
            <p className="font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider">{cat}</p>
            {entries.map(c => (
              <CIDItem key={c.code} entry={c} copied={copied} onCopy={copyCode} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function CIDItem({ entry, copied, onCopy }: { entry: CIDEntry; copied: string | null; onCopy: (c: string) => void }) {
  return (
    <Card onClick={() => onCopy(entry.code)} className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all">
      <CardContent className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="font-mono text-xs shrink-0">{entry.code}</Badge>
          <span className="text-xs">{entry.description}</span>
        </div>
        {copied === entry.code ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-muted-foreground" />}
      </CardContent>
    </Card>
  );
}
