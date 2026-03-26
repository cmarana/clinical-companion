import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Baby, ChevronRight, ChevronDown } from "lucide-react";

const weightByAge = [
  { age: "RN (0 meses)", weight: "3-3.5 kg" },
  { age: "3 meses", weight: "5-6 kg" },
  { age: "6 meses", weight: "7-8 kg" },
  { age: "1 ano", weight: "9-10 kg" },
  { age: "2 anos", weight: "12-13 kg" },
  { age: "5 anos", weight: "18-20 kg" },
  { age: "10 anos", weight: "30-35 kg" },
];

const pedDoses = [
  { drug: "Dipirona", dose: "10-15 mg/kg/dose", max: "1g", route: "VO/EV", interval: "6/6h" },
  { drug: "Paracetamol", dose: "10-15 mg/kg/dose", max: "750mg", route: "VO", interval: "6/6h" },
  { drug: "Ibuprofeno", dose: "5-10 mg/kg/dose", max: "400mg", route: "VO", interval: "6-8/8h" },
  { drug: "Amoxicilina", dose: "50 mg/kg/dia", max: "1.5g/dia", route: "VO", interval: "8/8h" },
  { drug: "Ceftriaxona", dose: "50-100 mg/kg/dia", max: "4g/dia", route: "EV/IM", interval: "12/12h ou 1x/dia" },
  { drug: "Adrenalina (PCR)", dose: "0,01 mg/kg", max: "1mg", route: "EV/IO", interval: "3-5 min" },
  { drug: "Adrenalina (Anafilaxia)", dose: "0,01 mg/kg (1:1000)", max: "0,3mg", route: "IM", interval: "5-15 min" },
  { drug: "Salbutamol spray", dose: "1 jato/3kg", max: "10 jatos", route: "Inalatório", interval: "20/20 min" },
  { drug: "Ondansetrona", dose: "0,15 mg/kg/dose", max: "4mg", route: "EV/VO", interval: "8/8h" },
  { drug: "Diazepam (convulsão)", dose: "0,2-0,5 mg/kg", max: "10mg", route: "EV/VR", interval: "dose única" },
  { drug: "Midazolam (convulsão)", dose: "0,15-0,2 mg/kg", max: "10mg", route: "IM/IN", interval: "dose única" },
  { drug: "SRO", dose: "50-100 mL/kg em 4h", max: "-", route: "VO", interval: "desidratação leve/mod" },
];

const pedEmergencies = [
  { label: "PCR Pediátrica", desc: "PALS - Suporte avançado de vida pediátrico" },
  { label: "Convulsão febril", desc: "Manejo e quando investigar" },
  { label: "Crise asmática", desc: "Classificação e tratamento escalonado" },
  { label: "Anafilaxia infantil", desc: "Adrenalina IM e doses por peso" },
  { label: "Bronquiolite", desc: "Critérios de internação e suporte" },
  { label: "Desidratação", desc: "Classificação e reidratação" },
  { label: "Cetoacidose diabética", desc: "Hidratação e insulina pediátrica" },
];

type SectionId = "doses" | "weight" | "emergencies";

export default function Pediatrics() {
  const { subscription } = useAuth();
  const [expanded, setExpanded] = useState<SectionId | null>("doses");
  const [doseSearch, setDoseSearch] = useState("");

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Pediatria" />
        <PremiumGate />
      </>
    );
  }

  const filteredDoses = pedDoses.filter(d =>
    d.drug.toLowerCase().includes(doseSearch.toLowerCase())
  );

  return (
    <>
      <TopBar title="Pediatria" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        <div className="flex items-center gap-2 mb-1">
          <Baby size={18} className="text-primary" />
          <p className="font-heading font-semibold text-sm">Guia rápido de Pediatria</p>
        </div>

        {/* Doses section */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === "doses" ? null : "doses")}
            className="w-full p-3.5 flex items-center justify-between text-left"
          >
            <span className="font-heading font-semibold text-sm">💊 Doses Pediátricas</span>
            {expanded === "doses" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {expanded === "doses" && (
            <CardContent className="pt-0 pb-4 px-4 space-y-3">
              <Input
                placeholder="Buscar medicamento..."
                value={doseSearch}
                onChange={e => setDoseSearch(e.target.value)}
                className="h-8 text-xs"
              />
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-1.5 font-heading font-semibold">Medicamento</th>
                      <th className="text-left py-1.5 font-heading font-semibold">Dose</th>
                      <th className="text-left py-1.5 font-heading font-semibold">Máx</th>
                      <th className="text-left py-1.5 font-heading font-semibold">Via</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDoses.map((d, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-2 font-medium">{d.drug}</td>
                        <td className="py-2">{d.dose}</td>
                        <td className="py-2">{d.max}</td>
                        <td className="py-2">{d.route}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Weight by age */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === "weight" ? null : "weight")}
            className="w-full p-3.5 flex items-center justify-between text-left"
          >
            <span className="font-heading font-semibold text-sm">⚖️ Peso por Idade</span>
            {expanded === "weight" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {expanded === "weight" && (
            <CardContent className="pt-0 pb-4 px-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-1.5 font-heading font-semibold">Idade</th>
                    <th className="text-left py-1.5 font-heading font-semibold">Peso estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {weightByAge.map((w, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 font-medium">{w.age}</td>
                      <td className="py-2">{w.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          )}
        </Card>

        {/* Emergencies */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === "emergencies" ? null : "emergencies")}
            className="w-full p-3.5 flex items-center justify-between text-left"
          >
            <span className="font-heading font-semibold text-sm">🚨 Emergências Pediátricas</span>
            {expanded === "emergencies" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {expanded === "emergencies" && (
            <CardContent className="pt-0 pb-4 px-4 space-y-2">
              {pedEmergencies.map((e, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-destructive/5 border border-destructive/10">
                  <p className="font-heading font-semibold text-xs">{e.label}</p>
                  <p className="text-[10px] text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
}
