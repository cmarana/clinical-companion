import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { medications } from "@/data/medications";
import { ChevronRight, Pill, Lock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate, { PremiumBadge } from "@/components/PremiumGate";

export default function Medications() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const isPremium = subscription.subscribed;
  const [search, setSearch] = useState("");

  const filtered = search
    ? medications.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      )
    : medications;

  return (
    <>
      <TopBar title="Medicamentos" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        {!isPremium && (
          <div className="flex items-center gap-2">
            <PremiumBadge />
            <span className="text-xs text-muted-foreground">Conteúdo completo requer assinatura</span>
          </div>
        )}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar medicamento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
        <div className="space-y-2">
          {filtered.map((m) => (
            <Card
              key={m.id}
              onClick={() => navigate(`/medications/${m.id}`)}
              className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
            >
              <CardContent className="flex items-center gap-3 p-3.5">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                  <Pill size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {isPremium ? m.indication.slice(0, 60) + "..." : m.tags.slice(0, 3).join(", ")}
                  </p>
                </div>
                {!isPremium ? (
                  <Lock size={14} className="text-muted-foreground shrink-0" />
                ) : (
                  <ChevronRight size={16} className="text-muted-foreground shrink-0" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {!isPremium && (
          <PremiumGate />
        )}
      </div>
    </>
  );
}
