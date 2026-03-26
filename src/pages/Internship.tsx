import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronDown, BookOpen, AlertTriangle, CheckCircle, XCircle, Lightbulb } from "lucide-react";

const sections = [
  {
    id: "what-to-do",
    title: "O que fazer no plantão",
    icon: CheckCircle,
    color: "text-success",
    items: [
      "Chegue antes do horário e revise os casos pendentes",
      "Confira se os materiais de emergência estão disponíveis (carro de PCR, desfibrilador)",
      "Leia os prontuários dos pacientes internados sob sua responsabilidade",
      "Avalie sinais vitais e exames pendentes logo ao chegar",
      "Priorize atendimentos por gravidade (protocolo de Manchester ou similar)",
      "Documente TUDO: evolução, prescrição, intercorrências",
      "Comunique-se claramente na passagem de plantão",
      "Peça ajuda quando necessário — não tente resolver sozinho casos que fogem da sua competência",
      "Mantenha uma lista organizada dos pacientes e pendências",
      "Reavalie pacientes instáveis a cada 30-60 minutos",
    ],
  },
  {
    id: "never-do",
    title: "O que NUNCA fazer",
    icon: XCircle,
    color: "text-destructive",
    items: [
      "Nunca prescreva medicação sem conferir dose, via e alergias",
      "Nunca deixe de examinar o paciente antes de prescrever",
      "Nunca assine documentos em branco ou de pacientes que não avaliou",
      "Nunca ignore sinais vitais alterados — reavalie o paciente",
      "Nunca libere paciente sem diagnóstico diferencial minimamente investigado",
      "Nunca faça procedimentos sem consentimento informado",
      "Nunca deixe de notificar doenças de notificação compulsória",
      "Nunca administre medicação por via que não seja segura (ex: KCl puro IV)",
      "Nunca subestime queixa de dor torácica, cefaleia súbita ou dispneia",
      "Nunca altere dose de insulina ou anticoagulante sem revisar exames recentes",
    ],
  },
  {
    id: "common-errors",
    title: "Erros comuns de internos",
    icon: AlertTriangle,
    color: "text-warning",
    items: [
      "Não checar alergias medicamentosas antes de prescrever",
      "Prescrever antibiótico sem coletar culturas",
      "Não calcular dose por peso em pediatria",
      "Esquecer de prescrever profilaxia de TVP em pacientes internados",
      "Não solicitar ECG em dor torácica",
      "Confundir mg com mL nas diluições",
      "Não verificar interações medicamentosas",
      "Esquecer de ajustar dose em insuficiência renal",
      "Não verificar glicemia em pacientes com alteração de consciência",
      "Não reavaliar paciente após administração de medicação de emergência",
    ],
  },
  {
    id: "tips",
    title: "Dicas para internos e residentes",
    icon: Lightbulb,
    color: "text-primary",
    items: [
      "Tenha sempre à mão: estetoscópio, lanterna, caneta, bloco de notas",
      "Monte um kit de sobrevivência com doses mais usadas anotadas",
      "Estude os 10 diagnósticos mais comuns do seu estágio",
      "Pratique a apresentação de caso: seja objetivo e organizado",
      "Aprenda a fazer gasometria, acesso periférico e passagem de sonda rapidamente",
      "Conheça os limites da sua autonomia — saiba quando chamar o preceptor",
      "Use mnemônicos: 5H5T na PCR, ABCDE no trauma, SAMPLE na anamnese rápida",
      "Revise farmacologia das drogas mais prescritas no PS",
      "Mantenha um diário de aprendizado com erros e acertos",
      "Durma quando puder — fadiga causa erros médicos",
    ],
  },
];

export default function Internship() {
  const { subscription } = useAuth();
  const [expanded, setExpanded] = useState<string | null>("what-to-do");

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Internato / Residência" />
        <PremiumGate />
      </>
    );
  }

  return (
    <>
      <TopBar title="Internato / Residência" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen size={18} className="text-primary" />
          <p className="font-heading font-semibold text-sm">Guia prático para internos e residentes</p>
        </div>

        {sections.map(section => (
          <Card key={section.id} className="overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === section.id ? null : section.id)}
              className="w-full p-3.5 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2.5">
                <section.icon size={18} className={section.color} />
                <span className="font-heading font-semibold text-sm">{section.title}</span>
              </div>
              {expanded === section.id ? <ChevronDown size={16} className="text-muted-foreground" /> : <ChevronRight size={16} className="text-muted-foreground" />}
            </button>

            {expanded === section.id && (
              <CardContent className="pt-0 pb-4 px-4">
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-xs leading-relaxed flex items-start gap-2">
                      <span className={`${section.color} mt-0.5 shrink-0`}>
                        {i + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}
