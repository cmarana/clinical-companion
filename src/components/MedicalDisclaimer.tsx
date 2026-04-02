import { ShieldAlert } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div className="w-full py-4 px-4 mt-8">
      <div className="max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto flex items-start gap-2.5 text-muted-foreground/70">
        <ShieldAlert size={14} className="shrink-0 mt-0.5" />
        <p className="text-[10px] leading-relaxed">
          O PULSO é uma ferramenta de <strong className="text-muted-foreground">apoio à decisão clínica</strong>. 
          As informações apresentadas não substituem o julgamento médico profissional, a avaliação clínica individualizada 
          ou a relação médico-paciente. Sempre considere o contexto clínico completo do paciente.
        </p>
      </div>
    </div>
  );
}
