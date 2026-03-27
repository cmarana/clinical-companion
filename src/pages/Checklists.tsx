import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronDown, RotateCcw, CheckCircle2 } from "lucide-react";

interface CheckItem { id: string; text: string; critical?: boolean }
interface ChecklistData { id: string; title: string; subtitle: string; items: CheckItem[] }

const checklistsData: ChecklistData[] = [
  {
    id: "pcr", title: "PCR / ACLS", subtitle: "Parada Cardiorrespiratória",
    items: [
      { id: "pcr1", text: "Confirmar ausência de pulso carotídeo (<10s)", critical: true },
      { id: "pcr2", text: "Iniciar compressões torácicas (100-120/min)", critical: true },
      { id: "pcr3", text: "Pedir desfibrilador / DEA" },
      { id: "pcr4", text: "Garantir acesso venoso ou intraósseo" },
      { id: "pcr5", text: "Ventilar com BVM com O₂ 100%" },
      { id: "pcr6", text: "Monitorizar ritmo cardíaco" },
      { id: "pcr7", text: "FV/TV: desfibrilar 200J bifásico", critical: true },
      { id: "pcr8", text: "Adrenalina 1mg EV (a cada 3-5 min)" },
      { id: "pcr9", text: "FV/TV refratária: Amiodarona 300mg EV" },
      { id: "pcr10", text: "Considerar IOT (sem interromper compressões)" },
      { id: "pcr11", text: "Capnografia (ETCO₂) — confirmar IOT e qualidade da RCP" },
      { id: "pcr12", text: "Buscar causas reversíveis: 5H e 5T", critical: true },
      { id: "pcr13", text: "Alternar compressor a cada 2 min" },
      { id: "pcr14", text: "Registrar horários de drogas e choques" },
    ],
  },
  {
    id: "iot", title: "Intubação Orotraqueal", subtitle: "Sequência rápida de intubação",
    items: [
      { id: "iot1", text: "Avaliar via aérea (Mallampati, abertura oral, mobilidade cervical)" },
      { id: "iot2", text: "Preparar material: laringoscópio, tubos (7.0-8.0), guia, BVM" },
      { id: "iot3", text: "Aspirador montado e funcionando" },
      { id: "iot4", text: "Pré-oxigenar com O₂ 100% por 3-5 min", critical: true },
      { id: "iot5", text: "Monitorização: SpO₂, ECG, PA, capnógrafo" },
      { id: "iot6", text: "Acesso venoso calibroso confirmado" },
      { id: "iot7", text: "Drogas preparadas: Fentanil, Etomidato/Cetamina, Succinilcolina/Rocurônio" },
      { id: "iot8", text: "Pré-tratamento: Fentanil 2-3 mcg/kg EV (3 min antes)" },
      { id: "iot9", text: "Indução: Etomidato 0.3mg/kg ou Cetamina 1-2mg/kg EV", critical: true },
      { id: "iot10", text: "Bloqueador: Succinilcolina 1.5mg/kg ou Rocurônio 1.2mg/kg" },
      { id: "iot11", text: "Aguardar fasciculações cessarem (~45-60s)" },
      { id: "iot12", text: "Laringoscopia e inserção do tubo sob visão direta", critical: true },
      { id: "iot13", text: "Insuflar cuff (20-30 cmH₂O)" },
      { id: "iot14", text: "Confirmar posição: ausculta + capnografia", critical: true },
      { id: "iot15", text: "Fixar tubo e registrar nº na rima labial" },
      { id: "iot16", text: "Solicitar Rx de tórax para confirmação" },
      { id: "iot17", text: "Iniciar ventilação mecânica protetora" },
    ],
  },
  {
    id: "trauma", title: "Politrauma (ATLS)", subtitle: "Avaliação primária e secundária",
    items: [
      { id: "tr1", text: "A — Via aérea com proteção cervical", critical: true },
      { id: "tr2", text: "Colar cervical aplicado" },
      { id: "tr3", text: "B — Ventilação: ausculta bilateral, SpO₂, FR" },
      { id: "tr4", text: "Descartar pneumotórax hipertensivo", critical: true },
      { id: "tr5", text: "C — Circulação: dois acessos calibrosos (14-16G)" },
      { id: "tr6", text: "Tipagem sanguínea e prova cruzada" },
      { id: "tr7", text: "Ácido tranexâmico 1g EV (se <3h do trauma)", critical: true },
      { id: "tr8", text: "Reposição: Ringer Lactato 1000mL aquecido" },
      { id: "tr9", text: "Protocolo de Transfusão Maciça se indicado" },
      { id: "tr10", text: "D — Neurológico: Glasgow, pupilas, lateralização" },
      { id: "tr11", text: "E — Exposição: despir completamente + prevenir hipotermia" },
      { id: "tr12", text: "FAST (ultrassom) ou LPD", critical: true },
      { id: "tr13", text: "Sonda vesical (se não houver contraindicação)" },
      { id: "tr14", text: "Sonda nasogástrica (orogástrica se fratura base crânio)" },
      { id: "tr15", text: "Exames: hemograma, coagulograma, gasometria, lactato" },
      { id: "tr16", text: "TC (crânio, cervical, tórax, abdome, pelve) conforme indicação" },
      { id: "tr17", text: "Avaliação secundária: head-to-toe, dorso, períneo" },
    ],
  },
  {
    id: "sepse", title: "Sepse (Hour-1 Bundle)", subtitle: "Surviving Sepsis Campaign",
    items: [
      { id: "sep1", text: "Medir lactato sérico", critical: true },
      { id: "sep2", text: "Coletar hemoculturas (2 pares) ANTES do ATB", critical: true },
      { id: "sep3", text: "Iniciar antibiótico de amplo espectro na 1ª hora", critical: true },
      { id: "sep4", text: "Ringer Lactato 30 mL/kg se hipotensão ou lactato ≥4" },
      { id: "sep5", text: "Reavaliar volemia (após bolus: PA, FC, diurese, perfusão)" },
      { id: "sep6", text: "Iniciar vasopressor se PAM <65 após volume (Noradrenalina)" },
      { id: "sep7", text: "Relactar em 2-4h se lactato inicial elevado" },
      { id: "sep8", text: "Acesso venoso central (para vasopressor)" },
      { id: "sep9", text: "Sonda vesical para controle de diurese (>0.5 mL/kg/h)" },
      { id: "sep10", text: "Gasometria arterial" },
      { id: "sep11", text: "Exames: hemograma, PCR, procalcitonina, coagulograma, função renal/hepática" },
      { id: "sep12", text: "Controle glicêmico (alvo <180 mg/dL)" },
      { id: "sep13", text: "Profilaxia de TVP e úlcera de estresse" },
      { id: "sep14", text: "Considerar hidrocortisona se choque refratário a DVA" },
    ],
  },
  {
    id: "salaverm", title: "Sala Vermelha", subtitle: "Admissão do paciente grave",
    items: [
      { id: "sv1", text: "Monitor multiparamétrico (ECG, SpO₂, PA, FC, FR)", critical: true },
      { id: "sv2", text: "Dois acessos venosos periféricos calibrosos" },
      { id: "sv3", text: "O₂ suplementar conforme SpO₂" },
      { id: "sv4", text: "Avaliação primária (ABCDE)" },
      { id: "sv5", text: "Glasgow e pupilas" },
      { id: "sv6", text: "Glicemia capilar" },
      { id: "sv7", text: "ECG 12 derivações" },
      { id: "sv8", text: "Gasometria arterial + lactato" },
      { id: "sv9", text: "Exames laboratoriais de urgência" },
      { id: "sv10", text: "Comunicar equipe e acionar especialidades conforme caso" },
      { id: "sv11", text: "Identificar e tratar ameaças à vida (choque, IRpA, arritmias)" },
      { id: "sv12", text: "Registrar em prontuário: hora de chegada, avaliações, condutas" },
    ],
  },
];

export default function Checklists() {
  const { subscription } = useAuth();
  const [active, setActive] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, Set<string>>>({});

  if (!subscription.subscribed) {
    return <><TopBar title="Checklists" /><PremiumGate /></>;
  }

  const toggle = (listId: string, itemId: string) => {
    setChecked(prev => {
      const s = new Set(prev[listId] || []);
      if (s.has(itemId)) s.delete(itemId); else s.add(itemId);
      return { ...prev, [listId]: s };
    });
  };

  const resetList = (listId: string) => {
    setChecked(prev => ({ ...prev, [listId]: new Set() }));
  };

  const getProgress = (list: ChecklistData) => {
    const done = checked[list.id]?.size || 0;
    return Math.round((done / list.items.length) * 100);
  };

  return (
    <>
      <TopBar title="Checklists Interativos" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        <p className="text-xs text-muted-foreground">Listas de verificação para situações críticas no PS e UTI</p>

        {checklistsData.map(list => {
          const isOpen = active === list.id;
          const progress = getProgress(list);
          const doneCount = checked[list.id]?.size || 0;

          return (
            <Card key={list.id} className="overflow-hidden">
              <button
                onClick={() => setActive(isOpen ? null : list.id)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <p className="font-heading font-semibold text-sm">{list.title}</p>
                    {doneCount === list.items.length && <CheckCircle2 size={14} className="text-green-500" />}
                  </div>
                  <p className="text-[10px] text-muted-foreground">{list.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  {doneCount > 0 && <Badge variant="secondary" className="text-[10px]">{doneCount}/{list.items.length}</Badge>}
                  {isOpen ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
                </div>
              </button>

              {isOpen && (
                <CardContent className="px-4 pb-4 pt-0 space-y-2">
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="space-y-1">
                    {list.items.map(item => {
                      const isDone = checked[list.id]?.has(item.id);
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${isDone ? "bg-primary/5" : "hover:bg-muted/50"} ${item.critical ? "border-l-2 border-destructive" : ""}`}
                        >
                          <input
                            type="checkbox"
                            checked={!!isDone}
                            onChange={() => toggle(list.id, item.id)}
                            className="mt-0.5 rounded border-border"
                          />
                          <span className={`text-xs leading-relaxed ${isDone ? "line-through text-muted-foreground" : ""}`}>
                            {item.text}
                            {item.critical && <span className="text-destructive ml-1 font-semibold">●</span>}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <button onClick={() => resetList(list.id)} className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors">
                    <RotateCcw size={10} /> Resetar checklist
                  </button>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
}
