import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BularioMedicationRow } from "@/hooks/useBularioMedications";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { HIGH_RISK_PAIRS, normalizeDrugName as normalize } from "@/data/drugInteractionPairs";

interface InteractionItem {
  drugName: string;
  drugId: string | null;
  severity: "grave" | "moderado" | "leve";
  description: string;
}

export default function DrugInteractionAlert({ medication }: { medication: BularioMedicationRow }) {
  const navigate = useNavigate();

  // Fetch all medication names for cross-referencing
  const { data: allMeds = [] } = useQuery({
    queryKey: ["bulario-names"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bulario_medications")
        .select("id, nome, principio_ativo")
        .order("nome");
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 10 * 60 * 1000,
  });

  const interactions = useMemo<InteractionItem[]>(() => {
    const result: InteractionItem[] = [];
    const currentNorm = normalize(medication.principio_ativo);
    const currentName = normalize(medication.nome);

    // Check high-risk pairs
    for (const [drug, pairs] of Object.entries(HIGH_RISK_PAIRS)) {
      const drugNorm = normalize(drug);
      if (currentNorm.includes(drugNorm) || currentName.includes(drugNorm)) {
        for (const pair of pairs) {
          for (const target of pair.drugs) {
            const targetNorm = normalize(target);
            const matchedMed = allMeds.find(m =>
              normalize(m.principio_ativo).includes(targetNorm) ||
              normalize(m.nome).includes(targetNorm)
            );
            if (matchedMed && matchedMed.id !== medication.id) {
              if (!result.find(r => r.drugId === matchedMed.id && r.description === pair.desc)) {
                result.push({
                  drugName: matchedMed.nome,
                  drugId: matchedMed.id,
                  severity: pair.severity,
                  description: pair.desc,
                });
              }
            }
          }
        }
      }
      // Also check if current drug is a TARGET in pairs
      for (const pair of pairs) {
        for (const target of pair.drugs) {
          const targetNorm = normalize(target);
          if (currentNorm.includes(targetNorm) || currentName.includes(targetNorm)) {
            const drugNormKey = normalize(drug);
            const sourceMed = allMeds.find(m =>
              normalize(m.principio_ativo).includes(drugNormKey) ||
              normalize(m.nome).includes(drugNormKey)
            );
            if (sourceMed && sourceMed.id !== medication.id) {
              if (!result.find(r => r.drugId === sourceMed.id && r.description === pair.desc)) {
                result.push({
                  drugName: sourceMed.nome,
                  drugId: sourceMed.id,
                  severity: pair.severity,
                  description: pair.desc,
                });
              }
            }
          }
        }
      }
    }

    // Deduplicate by drugId
    const seen = new Set<string>();
    return result.filter(r => {
      const key = `${r.drugId}-${r.description}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [medication, allMeds]);

  if (interactions.length === 0) return null;

  const graveCount = interactions.filter(i => i.severity === "grave").length;

  return (
    <Card className="border-destructive/30 bg-destructive/5">
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-sm font-heading flex items-center gap-2">
          <AlertTriangle size={16} className="text-destructive" />
          Interações detectadas ({interactions.length})
          {graveCount > 0 && (
            <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
              {graveCount} grave(s)
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 space-y-2">
        {interactions
          .sort((a, b) => (a.severity === "grave" ? -1 : 1) - (b.severity === "grave" ? -1 : 1))
          .map((inter, i) => (
            <div
              key={i}
              onClick={() => inter.drugId && navigate(`/bulario/${inter.drugId}`)}
              className={`p-2.5 rounded-lg cursor-pointer transition-colors ${
                inter.severity === "grave"
                  ? "bg-destructive/10 hover:bg-destructive/15 border border-destructive/20"
                  : "bg-warning/10 hover:bg-warning/15 border border-warning/20"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={inter.severity === "grave" ? "destructive" : "outline"}
                      className="text-[9px] px-1.5 py-0 shrink-0"
                    >
                      {inter.severity === "grave" ? "⚠ GRAVE" : "MODERADO"}
                    </Badge>
                    <span className="font-heading font-semibold text-xs truncate">{inter.drugName}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{inter.description}</p>
                </div>
                <ArrowRight size={14} className="text-muted-foreground shrink-0" />
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
