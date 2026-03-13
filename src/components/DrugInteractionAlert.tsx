import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BularioMedicationRow } from "@/hooks/useBularioMedications";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface InteractionItem {
  drugName: string;
  drugId: string | null;
  severity: "grave" | "moderado" | "leve";
  description: string;
}

// Known high-risk interaction pairs (principio_ativo based)
const HIGH_RISK_PAIRS: Record<string, { drugs: string[]; severity: "grave" | "moderado"; desc: string }[]> = {
  "varfarina": [
    { drugs: ["ácido acetilsalicílico", "aas"], severity: "grave", desc: "Risco hemorrágico aumentado. Monitorar INR rigorosamente." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno", "tenoxicam"], severity: "grave", desc: "AINEs aumentam risco de sangramento GI com varfarina." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Amiodarona aumenta efeito anticoagulante — reduzir dose de varfarina 30–50%." },
    { drugs: ["metronidazol"], severity: "moderado", desc: "Inibe metabolismo da varfarina — monitorar INR." },
    { drugs: ["fluconazol"], severity: "grave", desc: "Inibe CYP2C9 — aumento significativo do INR." },
  ],
  "digoxina": [
    { drugs: ["amiodarona"], severity: "grave", desc: "Amiodarona eleva nível sérico de digoxina — reduzir dose 50%." },
    { drugs: ["verapamil"], severity: "grave", desc: "Verapamil aumenta digoxinemia e risco de bradicardia." },
    { drugs: ["furosemida", "hidroclorotiazida", "clortalidona"], severity: "moderado", desc: "Diuréticos causam hipocalemia → maior toxicidade digitálica." },
    { drugs: ["espironolactona"], severity: "moderado", desc: "Espironolactona pode aumentar nível de digoxina." },
  ],
  "amiodarona": [
    { drugs: ["digoxina"], severity: "grave", desc: "Aumenta nível sérico de digoxina — reduzir dose 50%." },
    { drugs: ["varfarina"], severity: "grave", desc: "Aumenta efeito anticoagulante — reduzir varfarina 30–50%." },
    { drugs: ["sotalol", "procainamida"], severity: "grave", desc: "Risco de prolongamento QT e torsades de pointes." },
    { drugs: ["ciprofloxacino", "azitromicina", "levofloxacino"], severity: "moderado", desc: "Risco adicional de prolongamento QT." },
    { drugs: ["sinvastatina", "atorvastatina"], severity: "moderado", desc: "Aumento do risco de miopatia/rabdomiólise." },
  ],
  "enalapril": [
    { drugs: ["espironolactona", "amilorida", "eplerenona"], severity: "grave", desc: "Hipercalemia potencialmente fatal — monitorar K+ sérico." },
    { drugs: ["losartana", "valsartana", "candesartana", "telmisartana"], severity: "moderado", desc: "Duplo bloqueio SRAA — risco de hipercalemia e IRA." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno"], severity: "moderado", desc: "AINEs reduzem efeito anti-hipertensivo e aumentam risco de IRA." },
  ],
  "losartana": [
    { drugs: ["espironolactona", "amilorida", "eplerenona"], severity: "grave", desc: "Hipercalemia — monitorar K+ sérico." },
    { drugs: ["enalapril", "captopril", "ramipril", "lisinopril"], severity: "moderado", desc: "Duplo bloqueio SRAA — risco de hipercalemia e IRA." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "moderado", desc: "AINEs reduzem efeito anti-hipertensivo." },
  ],
  "metformina": [
    { drugs: ["contraste iodado"], severity: "grave", desc: "Suspender 48h antes e após contraste — risco de acidose lática." },
    { drugs: ["furosemida"], severity: "moderado", desc: "Furosemida pode aumentar risco de acidose lática em desidratação." },
  ],
  "sinvastatina": [
    { drugs: ["amiodarona"], severity: "moderado", desc: "Limitar sinvastatina a 20mg/dia com amiodarona — risco de rabdomiólise." },
    { drugs: ["ciclosporina"], severity: "grave", desc: "Contraindicado — risco de rabdomiólise." },
    { drugs: ["fluconazol", "itraconazol", "voriconazol"], severity: "grave", desc: "Azólicos inibem CYP3A4 — risco de rabdomiólise." },
  ],
  "atorvastatina": [
    { drugs: ["ciclosporina"], severity: "grave", desc: "Evitar — risco de rabdomiólise." },
    { drugs: ["amiodarona"], severity: "moderado", desc: "Monitorar CPK — risco de miopatia." },
  ],
  "clopidogrel": [
    { drugs: ["omeprazol"], severity: "moderado", desc: "Omeprazol reduz ativação do clopidogrel via CYP2C19. Preferir pantoprazol." },
  ],
  "metotrexato": [
    { drugs: ["sulfametoxazol", "trimetoprima"], severity: "grave", desc: "Ambos inibem folato — pancitopenia grave." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno"], severity: "grave", desc: "AINEs reduzem clearance renal do metotrexato — toxicidade." },
  ],
  "lítio": [
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno"], severity: "grave", desc: "AINEs aumentam litemia — risco de intoxicação." },
    { drugs: ["furosemida", "hidroclorotiazida"], severity: "grave", desc: "Diuréticos aumentam litemia." },
    { drugs: ["enalapril", "losartana", "captopril"], severity: "moderado", desc: "IECA/BRA podem aumentar litemia." },
  ],
  "ciprofloxacino": [
    { drugs: ["tizanidina"], severity: "grave", desc: "Contraindicado — ciprofloxacino aumenta drasticamente nível de tizanidina." },
    { drugs: ["amiodarona", "sotalol"], severity: "moderado", desc: "Risco de prolongamento QT." },
  ],
};

// Normalize drug name for matching
function normalize(s: string): string {
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
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
