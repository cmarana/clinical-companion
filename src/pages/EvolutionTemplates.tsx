import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface Template { id: string; title: string; subtitle: string; text: string }

const templates: Template[] = [
  {
    id: "adm-ps", title: "Admissão no PS", subtitle: "Modelo de avaliação inicial",
    text: `ADMISSÃO — PRONTO-SOCORRO
Data/Hora: ___/___/___ às ___:___
Médico(a): ___________________________ CRM: ________

IDENTIFICAÇÃO:
Nome: _____________________________ Idade: ____ anos
Sexo: ( ) M ( ) F   Leito: ______  Prontuário: ________

QUEIXA PRINCIPAL:
_________________________________________________

HISTÓRIA DA DOENÇA ATUAL (HDA):
Paciente refere ___________________________________
Início há _______ (horas/dias), de caráter ____________
Fatores de melhora: _______________________________
Fatores de piora: _________________________________
Sintomas associados: ______________________________

ANTECEDENTES:
- Comorbidades: __________________________________
- Medicações em uso: _____________________________
- Alergias: ______________________________________
- Cirurgias prévias: _______________________________
- Tabagismo: ( ) Sim ( ) Não  Etilismo: ( ) Sim ( ) Não

EXAME FÍSICO:
Estado geral: _____________ Glasgow: E__V__M__ = ___
PA: ___x___ mmHg  FC: ___ bpm  FR: ___ irpm
SpO₂: ___% (em ___)  Tax: ___°C  Glicemia: ___ mg/dL

Cabeça/Pescoço: __________________________________
Aparelho Respiratório: _____________________________
Aparelho Cardiovascular: ___________________________
Abdome: ________________________________________
Extremidades: ____________________________________
Neurológico: _____________________________________

HIPÓTESES DIAGNÓSTICAS:
1. _________________________ (CID: ______)
2. _________________________ (CID: ______)

CONDUTA:
1. Dieta ________________________________________
2. Hidratação: ___________________________________
3. Medicações: __________________________________
4. Exames solicitados: ____________________________
5. Interconsultas: ________________________________

_______________________________________________
Assinatura / Carimbo / CRM`
  },
  {
    id: "evol-diaria", title: "Evolução Diária", subtitle: "Modelo SOAP para enfermaria/UTI",
    text: `EVOLUÇÃO MÉDICA — DIA ___
Data/Hora: ___/___/___ às ___:___
___º DIH (dia de internação hospitalar)
___º DPO (dia de pós-operatório) — se aplicável

S (SUBJETIVO):
Paciente refere ___________________________________.
Queixas: ________________________________________
Sono: ( ) Bom ( ) Regular ( ) Ruim
Evacuação: ( ) Sim ( ) Não  Diurese: ( ) Presente ( ) Oligúria
Aceitação alimentar: ( ) Boa ( ) Regular ( ) Ruim

O (OBJETIVO):
Estado geral: ____________ LOC: ___________________
PA: ___x___ mmHg  FC: ___ bpm  FR: ___ irpm
SpO₂: ___% (em ___)  Tax: ___°C  HGT: ___ mg/dL

Aparelho Respiratório: MV __________, sem RA ( ) / com RA: ___
Aparelho Cardiovascular: RCR, BNF, _____ bulhas, sem sopros ( )
Abdome: ________________________________________
Extremidades: perfusão ___, edema ( ) Sim ( ) Não
Drenos/cateteres: _________________________________
Ferida operatória: ________________________________

Balanço hídrico (24h): Entrada ___ mL / Saída ___ mL = ___ mL

EXAMES DO DIA:
Hb/Ht: ___/___  Leuco: ___  Plaq: ___  Cr: ___  Ur: ___
Na: ___  K: ___  PCR: ___  Lactato: ___
Outros: _________________________________________

A (AVALIAÇÃO):
Diagnóstico principal: _____________________________
Problemas ativos: ________________________________
Evolução: ( ) Melhora ( ) Estável ( ) Piora

P (PLANO):
1. Dieta: _______________________________________
2. Hidratação: ___________________________________
3. Manter/alterar medicações: _____________________
4. Exames: _____________________________________
5. Interconsultas: ________________________________
6. Previsão: ( ) Manter internação ( ) Programar alta

_______________________________________________
Assinatura / Carimbo / CRM`
  },
  {
    id: "evol-uti", title: "Evolução UTI", subtitle: "Modelo completo para terapia intensiva",
    text: `EVOLUÇÃO MÉDICA — UTI — DIA ___
Data/Hora: ___/___/___ às ___:___
___º DIH | ___º dia de UTI

NEUROLÓGICO:
RASS: ___  Glasgow: E__V__M__ = ___  Pupilas: ______
Sedação: ___________ dose: ___  BNM: ( ) Sim ( ) Não
CAM-ICU: ( ) Positivo ( ) Negativo  Delirium: ( ) Sim ( ) Não

HEMODINÂMICA:
PA: ___x___ mmHg  FC: ___ bpm  PAM: ___ mmHg
DVA: ( ) Noradrenalina ___ mcg/kg/min ( ) Vasopressina ___ UI/h
     ( ) Dobutamina ___ mcg/kg/min ( ) Adrenalina ___ mcg/kg/min
Lactato: ___ mmol/L  SvO₂/ScvO₂: ___%  DC/IC: ___/___
Ritmo ECG: _____________ Acesso central: ___________

RESPIRATÓRIO:
Via aérea: ( ) TOT ( ) TQT ( ) Espontânea  SpO₂: ___%
Modo VM: _________  FiO₂: ___  PEEP: ___  VT: ___
PPI: ___  Pplatô: ___  Driving pressure: ___  P/F: ___
Rx tórax: ________________________________________
Gasometria: pH ___ pCO₂ ___ pO₂ ___ HCO₃ ___ BE ___ Lac ___

RENAL:
Diurese 24h: ___ mL (___ mL/kg/h)  BH 24h: ___ mL
Cr: ___  Ur: ___  Na: ___  K: ___  Ca: ___  Mg: ___  P: ___
Diálise: ( ) Não ( ) HD intermitente ( ) SLED ( ) CRRT

INFECCIOSO:
Temp máx 24h: ___°C  Leucócitos: ___  PCR: ___  PCT: ___
Culturas pendentes: _______________________________
ATB em uso: _____________ (D___)
                _____________ (D___)

GASTROINTESTINAL:
Dieta: _________ via: ( ) oral ( ) enteral ( ) parenteral
Resíduo gástrico: ___  Evacuação: ( ) Sim ( ) Não
Abdome: ________________________________________
Profilaxia úlcera: _________________________________

HEMATOLÓGICO:
Hb: ___ Ht: ___% Plaq: ___ INR: ___ TTPa: ___
Transfusões: ____________________________________
Profilaxia TVP: ___________________________________

NUTRIÇÃO:
Necessidade calórica: ___ kcal/dia  Proteína: ___ g/kg/dia
Ofertado: ___ kcal/dia  Balanço: ___________________

DISPOSITIVOS:
CVC: ( ) Jugular ( ) Subclávia ( ) Femoral — D___
SVD: D___  SNG/SNE: D___  Drenos: ________________

PLANO:
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________
Previsão: ( ) Manter UTI ( ) Transferir enfermaria

_______________________________________________
Assinatura / Carimbo / CRM`
  },
  {
    id: "passagem-plantao", title: "Passagem de Plantão", subtitle: "Modelo I-PASS",
    text: `PASSAGEM DE PLANTÃO — I-PASS
Data/Hora: ___/___/___ às ___:___

PACIENTE: _________________ Leito: ____ Idade: ____

I — ILLNESS SEVERITY (Gravidade):
( ) Estável  ( ) Observação  ( ) Instável

P — PATIENT SUMMARY (Resumo):
Diagnóstico: ____________________________________
História resumida: _______________________________
_________________________________________________

A — ACTION LIST (Lista de ações pendentes):
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

S — SITUATION AWARENESS (Alertas):
- Se ____________, então fazer ___________________
- Se ____________, então fazer ___________________
- Previsão de exames/resultados: __________________

S — SYNTHESIS (Síntese do receptor):
Confirmo recebimento do caso. Dúvidas: _____________
_________________________________________________

Transmitido por: ___________________ CRM: ________
Recebido por: ____________________ CRM: ________`
  },
  {
    id: "sumario-alta", title: "Sumário de Alta", subtitle: "Resumo para alta hospitalar",
    text: `SUMÁRIO DE ALTA HOSPITALAR
Data da alta: ___/___/___

IDENTIFICAÇÃO:
Nome: ___________________________ Prontuário: _____
Data de nascimento: ___/___/___  Idade: ____ anos
Data de internação: ___/___/___  Período: ____ dias

DIAGNÓSTICO(S) DE INTERNAÇÃO:
1. _________________________ (CID: ______)
2. _________________________ (CID: ______)

RESUMO DA INTERNAÇÃO:
Paciente internado por _____________________________
Durante internação: _______________________________
Procedimentos realizados: _________________________
Intercorrências: __________________________________
Evolução: _______________________________________

EXAMES RELEVANTES DA INTERNAÇÃO:
________________________________________________
________________________________________________

CONDIÇÃO DE ALTA:
Estado geral: ____________  PA: ___x___  FC: ___
Orientado: ( ) Sim ( ) Não  Deambulando: ( ) Sim ( ) Não

PRESCRIÇÃO DE ALTA:
1. _________________________ — ______ por ___ dias
2. _________________________ — ______ por ___ dias
3. _________________________ — ______ por ___ dias

ORIENTAÇÕES:
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

RETORNO:
Ambulatório de ____________ em ___ dias (___/___/___)
Levar exames: ___________________________________

SINAIS DE ALERTA — RETORNAR AO PS SE:
- ______________________________________________
- ______________________________________________

_______________________________________________
Médico responsável / CRM / Assinatura`
  },
  {
    id: "obito", title: "Declaração de Óbito", subtitle: "Modelo para preenchimento da DO",
    text: `ORIENTAÇÕES PARA PREENCHIMENTO DA DECLARAÇÃO DE ÓBITO

BLOCO V — CAUSAS DA MORTE (Parte I):
Linha a (causa imediata): __________________________
Linha b (devido a): _______________________________
Linha c (devido a): _______________________________
Linha d (causa básica): ____________________________

BLOCO V — CAUSAS CONTRIBUINTES (Parte II):
________________________________________________

ATENÇÃO:
• A causa básica (última da sequência) é a mais importante epidemiologicamente
• NÃO usar "parada cardiorrespiratória" como causa — é mecanismo de morte
• NÃO usar siglas
• O CID deve ser preenchido para TODAS as causas
• Em mortes violentas: encaminhar ao IML (NÃO preencher a DO)
• Em morte natural sem assistência: encaminhar ao SVO

TEMPO APROXIMADO ENTRE CAUSA E ÓBITO:
Linha a: ___ (horas/dias)
Linha b: ___ (dias/meses)
Linha c: ___ (meses/anos)
Linha d: ___ (anos)

EXEMPLO CORRETO:
a) Choque séptico — horas — CID: R57.2
b) Pneumonia bacteriana — dias — CID: J15.9
c) Neoplasia de pulmão — meses — CID: C34.9`
  },
];

export default function EvolutionTemplates() {
  const { subscription } = useAuth();
  const [active, setActive] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  if (!subscription.subscribed) {
    return <><TopBar title="Modelos de Evolução" /><PremiumGate /></>;
  }

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Modelo copiado para a área de transferência!");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <TopBar title="Modelos de Evolução" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        <p className="text-xs text-muted-foreground">Modelos prontos de evolução médica — toque para copiar e preencher</p>

        {templates.map(t => {
          const isOpen = active === t.id;
          return (
            <Card key={t.id} className="overflow-hidden">
              <button
                onClick={() => setActive(isOpen ? null : t.id)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="text-left">
                  <p className="font-heading font-semibold text-sm">{t.title}</p>
                  <p className="text-[10px] text-muted-foreground">{t.subtitle}</p>
                </div>
                {isOpen ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
              </button>

              {isOpen && (
                <CardContent className="px-4 pb-4 pt-0 space-y-3">
                  <pre className="text-[10px] leading-relaxed whitespace-pre-wrap bg-muted/50 rounded-lg p-3 font-mono max-h-[400px] overflow-y-auto">
                    {t.text}
                  </pre>
                  <Button size="sm" variant="outline" className="w-full gap-2" onClick={() => copyText(t.id, t.text)}>
                    {copied === t.id ? <><Check size={14} /> Copiado!</> : <><Copy size={14} /> Copiar modelo</>}
                  </Button>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
}
