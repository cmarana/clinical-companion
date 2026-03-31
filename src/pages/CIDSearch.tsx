import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Copy, Check, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { cidData, type CIDEntry } from "@/data/cidData";

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
