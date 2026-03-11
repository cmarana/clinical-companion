import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { protocols } from "@/data/protocols";
import { medications } from "@/data/medications";
import { Search, FileText, Pill } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: "protocol" | "medication";
  path: string;
}

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const results = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();

    const protocolResults: SearchResult[] = protocols
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)) ||
          p.sections.some((s) => s.content.toLowerCase().includes(q))
      )
      .map((p) => ({
        id: p.id,
        title: p.title,
        subtitle: p.category,
        type: "protocol" as const,
        path: `/protocols/${p.id}`,
      }));

    const medResults: SearchResult[] = medications
      .filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.tags.some((t) => t.includes(q)) ||
          m.indication.toLowerCase().includes(q)
      )
      .map((m) => ({
        id: m.id,
        title: m.name,
        subtitle: "Medicamento",
        type: "medication" as const,
        path: `/medications/${m.id}`,
      }));

    return [...protocolResults, ...medResults];
  }, [query]);

  return (
    <>
      <TopBar title="Busca" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Buscar protocolos, medicamentos, palavras-chave..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-10 text-sm"
          />
        </div>

        {query.length >= 2 && (
          <p className="text-xs text-muted-foreground">{results.length} resultado(s)</p>
        )}

        <div className="space-y-2">
          {results.map((r) => (
            <Card
              key={`${r.type}-${r.id}`}
              onClick={() => navigate(r.path)}
              className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
            >
              <CardContent className="flex items-center gap-3 p-3.5">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                  {r.type === "protocol" ? <FileText size={16} /> : <Pill size={16} />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {query.length >= 2 && results.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-8">Nenhum resultado encontrado.</p>
        )}
      </div>
    </>
  );
}
