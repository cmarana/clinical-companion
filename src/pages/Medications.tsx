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
import { FREE_MEDICATION_IDS } from "@/lib/plans";
import { cn } from "@/lib/utils";

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
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4">
        {!isPremium && (
          <div className="flex items-center gap-2">
            <PremiumBadge />
            <span className="text-xs text-muted-foreground">15 medicamentos gratuitos — assine para acesso completo</span>
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
          {filtered.map((m) => {
            const isFree = FREE_MEDICATION_IDS.includes(m.id);
            const locked = !isPremium && !isFree;

            return (
              <Card
                key={m.id}
                onClick={() => !locked && navigate(`/medications/${m.id}`)}
                className={cn(
                  "cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all",
                  locked && "opacity-60 cursor-default"
                )}
              >
                <CardContent className="flex items-center gap-3 p-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                    <Pill size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-sm">
                      {locked && "🔒 "}{m.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {locked ? m.tags.slice(0, 3).join(", ") : m.indication.slice(0, 60) + "..."}
                    </p>
                  </div>
                  {locked ? (
                    <Lock size={14} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight size={16} className="text-muted-foreground shrink-0" />
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        {!isPremium && (
          <PremiumGate feature="Todos os medicamentos" />
        )}
      </div>
    </>
  );
}
