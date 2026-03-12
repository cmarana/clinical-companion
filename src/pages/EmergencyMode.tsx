import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import { emergencyCategories, allEmergencyProtocols } from "@/data/emergency";

export default function EmergencyMode() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [search, setSearch] = useState("");
  const [openCats, setOpenCats] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(emergencyCategories.map(c => [c.id, true]))
  );

  const searchResults = useMemo(() => {
    if (search.length < 2) return null;
    const q = search.toLowerCase();
    return allEmergencyProtocols.filter(p =>
      p.title.toLowerCase().includes(q)
    );
  }, [search]);

  const toggleCat = (id: string) =>
    setOpenCats(prev => ({ ...prev, [id]: !prev[id] }));

  if (!subscription.subscribed) {
    return (
      <>
      <TopBar title="Emergência / UTI / SAMU" />
        <PremiumGate />
      </>
    );
  }

  return (
    <>
      <TopBar title="Emergência" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        {/* Header */}
        <div className="duty-card p-4 space-y-2">
          <h1 className="font-heading font-bold text-base tracking-tight">
            Protocolos de Emergência
          </h1>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Seção destinada ao manejo imediato de condições potencialmente fatais,
            com acesso rápido a algoritmos, fluxogramas, doses, prescrições e condutas
            padronizadas para uso durante o plantão.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Baseado em diretrizes utilizadas no Brasil, incluindo recomendações da
            AHA, ACLS, ATLS, Surviving Sepsis Campaign, SBC, AMIB, Ministério da
            Saúde, SBP e outras referências internacionais.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Uso destinado a profissionais da saúde e estudantes em treinamento supervisionado.
          </p>
          <p className="font-heading text-[11px] font-medium text-muted-foreground mt-1">
            Acesso rápido a condutas críticas no plantão
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar protocolo de emergência..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 h-9 text-xs rounded-lg"
          />
        </div>

        {/* Search Results */}
        {searchResults && searchResults.length > 0 && (
          <div className="duty-card p-3 space-y-1">
            {searchResults.map(p => (
              <button
                key={p.id}
                onClick={() => navigate(`/emergency/${p.id}`)}
                className="duty-list-item"
              >
                <span className="flex-1 text-left text-xs">{p.title}</span>
                <ChevronRight size={13} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        )}
        {searchResults && searchResults.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-4">
            Nenhum protocolo encontrado.
          </p>
        )}

        {/* Categories */}
        {!searchResults && emergencyCategories.map(cat => (
          <div key={cat.id} className="duty-card overflow-hidden">
            <button
              onClick={() => toggleCat(cat.id)}
              className="w-full flex items-center justify-between p-4"
            >
              <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                {cat.title}
              </h2>
              <ChevronDown
                size={14}
                className={`text-muted-foreground transition-transform ${openCats[cat.id] ? "rotate-180" : ""}`}
              />
            </button>
            {openCats[cat.id] && (
              <div className="px-3 pb-3 grid grid-cols-2 gap-1.5">
                {cat.protocols.map(p => (
                  <button
                    key={p.id}
                    onClick={() => navigate(`/emergency/${p.id}`)}
                    className="duty-list-item"
                  >
                    <span className="flex-1 text-left text-xs">{p.title}</span>
                    <ChevronRight size={13} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
