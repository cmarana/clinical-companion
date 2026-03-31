import type { NoteCategory } from "@/types/medical";

export interface ClinicalTemplate {
  id: string;
  title: string;
  subtitle: string;
  category: NoteCategory;
  icon: string;
  text: string;
}

export const noteCategoryLabels: Record<NoteCategory, string> = {
  admissao: "Admissão",
  evolucao: "Evolução",
  alta: "Alta",
  procedimento: "Procedimento",
  interconsulta: "Interconsulta",
  plantao: "Plantão",
  outro: "Outro",
};

export const noteCategoryColors: Record<NoteCategory, string> = {
  admissao: "bg-blue-500/15 text-blue-500",
  evolucao: "bg-emerald-500/15 text-emerald-500",
  alta: "bg-violet-500/15 text-violet-500",
  procedimento: "bg-orange-500/15 text-orange-500",
  interconsulta: "bg-cyan-500/15 text-cyan-500",
  plantao: "bg-amber-500/15 text-amber-500",
  outro: "bg-muted text-muted-foreground",
};

export const clinicalTemplates: ClinicalTemplate[] = [
  {
    id: "adm-ps",
    title: "Admissão no PS",
    subtitle: "Avaliação inicial completa",
    category: "admissao",
    icon: "ClipboardPlus",
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
Ap. Respiratório: _________________________________
Ap. Cardiovascular: _______________________________
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
Assinatura / Carimbo / CRM`,
  },
  {
    id: "evol-soap",
    title: "Evolução SOAP",
    subtitle: "Modelo SOAP para enfermaria/UTI",
    category: "evolucao",
    icon: "FileText",
    text: `EVOLUÇÃO MÉDICA — DIA ___
Data/Hora: ___/___/___ às ___:___
___º DIH | ___º DPO (se aplicável)

S (SUBJETIVO):
Paciente refere ___________________________________
Queixas: ________________________________________
Sono: ( ) Bom ( ) Regular ( ) Ruim
Evacuação: ( ) Sim ( ) Não  Diurese: ( ) Presente ( ) Oligúria
Aceitação alimentar: ( ) Boa ( ) Regular ( ) Ruim

O (OBJETIVO):
Estado geral: ____________ LOC: ___________________
PA: ___x___ mmHg  FC: ___ bpm  FR: ___ irpm
SpO₂: ___% (em ___)  Tax: ___°C  HGT: ___ mg/dL

Ap. Respiratório: MV __________, sem RA ( ) / com RA: ___
Ap. Cardiovascular: RCR, BNF, _____ bulhas, sem sopros ( )
Abdome: ________________________________________
Extremidades: perfusão ___, edema ( ) Sim ( ) Não
Drenos/cateteres: _________________________________
Ferida operatória: ________________________________

Balanço hídrico (24h): Entrada ___ mL / Saída ___ mL = ___ mL

EXAMES DO DIA:
Hb/Ht: ___/___  Leuco: ___  Plaq: ___  Cr: ___  Ur: ___
Na: ___  K: ___  PCR: ___  Lactato: ___

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
Assinatura / Carimbo / CRM`,
  },
  {
    id: "evol-uti",
    title: "Evolução UTI",
    subtitle: "Modelo completo para terapia intensiva",
    category: "evolucao",
    icon: "HeartPulse",
    text: `EVOLUÇÃO MÉDICA — UTI — DIA ___
Data/Hora: ___/___/___ às ___:___
___º DIH | ___º dia de UTI

NEUROLÓGICO:
RASS: ___  Glasgow: E__V__M__ = ___  Pupilas: ______
Sedação: ___________ dose: ___  BNM: ( ) Sim ( ) Não
CAM-ICU: ( ) Positivo ( ) Negativo

HEMODINÂMICA:
PA: ___x___ mmHg  FC: ___ bpm  PAM: ___ mmHg
DVA: ( ) Noradrenalina ___ mcg/kg/min ( ) Vasopressina ___ UI/h
     ( ) Dobutamina ___ mcg/kg/min
Lactato: ___ mmol/L  SvO₂: ___%
Ritmo ECG: _____________ Acesso central: ___________

RESPIRATÓRIO:
Via aérea: ( ) TOT ( ) TQT ( ) Espontânea  SpO₂: ___%
Modo VM: _________  FiO₂: ___  PEEP: ___  VT: ___
PPI: ___  Pplatô: ___  Driving pressure: ___  P/F: ___
Gasometria: pH ___ pCO₂ ___ pO₂ ___ HCO₃ ___ BE ___ Lac ___

RENAL:
Diurese 24h: ___ mL (___ mL/kg/h)  BH 24h: ___ mL
Cr: ___  Ur: ___  Na: ___  K: ___  Ca: ___  Mg: ___
Diálise: ( ) Não ( ) HD ( ) SLED ( ) CRRT

INFECCIOSO:
Temp máx 24h: ___°C  Leucócitos: ___  PCR: ___  PCT: ___
Culturas: ________________________________________
ATB: _____________ (D___) | _____________ (D___)

GASTROINTESTINAL / NUTRIÇÃO:
Dieta: _________ via: ( ) oral ( ) enteral ( ) parenteral
Resíduo gástrico: ___  Evacuação: ( ) Sim ( ) Não
Profilaxia úlcera: _________________________________

HEMATOLÓGICO:
Hb: ___ Plaq: ___ INR: ___ TTPa: ___
Profilaxia TVP: ___________________________________

PLANO:
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

_______________________________________________
Assinatura / Carimbo / CRM`,
  },
  {
    id: "passagem-plantao",
    title: "Passagem de Plantão (I-PASS)",
    subtitle: "Modelo estruturado I-PASS",
    category: "plantao",
    icon: "ArrowRightLeft",
    text: `PASSAGEM DE PLANTÃO — I-PASS
Data/Hora: ___/___/___ às ___:___

PACIENTE: _________________ Leito: ____ Idade: ____

I — ILLNESS SEVERITY (Gravidade):
( ) Estável  ( ) Observação  ( ) Instável

P — PATIENT SUMMARY (Resumo):
Diagnóstico: ____________________________________
História: _______________________________________

A — ACTION LIST (Pendências):
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

S — SITUATION AWARENESS (Alertas):
- Se ____________, então fazer ___________________
- Se ____________, então fazer ___________________

S — SYNTHESIS (Confirmação):
Confirmo recebimento. Dúvidas: ____________________

Transmitido por: ___________________ CRM: ________
Recebido por: ____________________ CRM: ________`,
  },
  {
    id: "sumario-alta",
    title: "Sumário de Alta",
    subtitle: "Resumo completo para alta hospitalar",
    category: "alta",
    icon: "LogOut",
    text: `SUMÁRIO DE ALTA HOSPITALAR
Data da alta: ___/___/___

IDENTIFICAÇÃO:
Nome: ___________________________ Prontuário: _____
Data de nascimento: ___/___/___  Idade: ____ anos
Internação: ___/___/___ a ___/___/___ (___dias)

DIAGNÓSTICO(S):
1. _________________________ (CID: ______)
2. _________________________ (CID: ______)

RESUMO DA INTERNAÇÃO:
Paciente internado por _____________________________
Procedimentos: __________________________________
Intercorrências: __________________________________
Evolução: _______________________________________

EXAMES RELEVANTES:
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

RETORNO:
Ambulatório de ____________ em ___ dias (___/___/___)

SINAIS DE ALERTA — RETORNAR AO PS SE:
- ______________________________________________
- ______________________________________________

_______________________________________________
Médico / CRM / Assinatura`,
  },
  {
    id: "proc-geral",
    title: "Nota de Procedimento",
    subtitle: "Registro de procedimento invasivo",
    category: "procedimento",
    icon: "Syringe",
    text: `NOTA DE PROCEDIMENTO
Data/Hora: ___/___/___ às ___:___

PACIENTE: _________________ Leito: ____ Pront: ____

PROCEDIMENTO: __________________________________

INDICAÇÃO: ______________________________________

TÉCNICA:
- Antissepsia com ________________________________
- Anestesia: ______________ (volume: ___ mL)
- Posição do paciente: ____________________________
- Material utilizado: ______________________________
- Descrição: ____________________________________
________________________________________________
________________________________________________

INTERCORRÊNCIAS: ( ) Não ( ) Sim: __________________

RESULTADO / AMOSTRA:
________________________________________________

ORIENTAÇÕES PÓS-PROCEDIMENTO:
1. _____________________________________________
2. _____________________________________________

_______________________________________________
Médico / CRM / Assinatura`,
  },
  {
    id: "proc-acesso-central",
    title: "Acesso Venoso Central",
    subtitle: "Nota de passagem de CVC",
    category: "procedimento",
    icon: "Syringe",
    text: `NOTA DE PROCEDIMENTO — ACESSO VENOSO CENTRAL
Data/Hora: ___/___/___ às ___:___

PACIENTE: _________________ Leito: ____ Pront: ____

INDICAÇÃO: ______________________________________

TÉCNICA:
- Sítio: ( ) Jugular interna D/E ( ) Subclávia D/E ( ) Femoral D/E
- Paramentação completa: ( ) Sim
- Antissepsia com clorexidina alcoólica 0,5%
- Campos estéreis amplos
- Anestesia local com lidocaína ___% — ___ mL
- Punção guiada por USG: ( ) Sim ( ) Não
- Técnica de Seldinger: ( ) Sim
- Cateter: _____________ (___ lúmens, ___ Fr)
- Fixação com fio _____ à pele
- Curativo oclusivo estéril
- Verificação de retorno sanguíneo em todos os lúmens: ( ) Sim

INTERCORRÊNCIAS: ( ) Não ( ) Sim: __________________

CONFIRMAÇÃO:
- RX de tórax pós-procedimento: ( ) Solicitado
- Posição adequada: ( ) Sim ( ) Não: ________________
- Pneumotórax: ( ) Ausente ( ) Presente

_______________________________________________
Médico / CRM / Assinatura`,
  },
  {
    id: "proc-intubacao",
    title: "Intubação Orotraqueal",
    subtitle: "Nota de IOT",
    category: "procedimento",
    icon: "Wind",
    text: `NOTA DE PROCEDIMENTO — INTUBAÇÃO OROTRAQUEAL
Data/Hora: ___/___/___ às ___:___

PACIENTE: _________________ Leito: ____ Pront: ____

INDICAÇÃO: ______________________________________

PRÉ-OXIGENAÇÃO:
- Máscara com reservatório a ___ L/min por ___ min
- SpO₂ pré-IOT: ___%

DROGAS UTILIZADAS (Sequência Rápida de Intubação):
- Fentanil: ___ mcg (___ mcg/kg)
- Lidocaína: ___ mg — se indicada
- Indutor: ( ) Etomidato ___ mg ( ) Propofol ___ mg ( ) Quetamina ___ mg
- BNM: ( ) Succinilcolina ___ mg ( ) Rocurônio ___ mg

VIA AÉREA:
- Mallampati: ___  Cormack-Lehane: ___
- Tentativas: ___
- Tubo: nº ___ ( ) Oral ( ) Nasal
- Fixação em ___ cm na rima labial
- Cuff insuflado: ( ) Sim  Pressão: ___ cmH₂O

CONFIRMAÇÃO:
- Capnografia: ( ) Sim — EtCO₂: ___ mmHg
- Ausculta bilateral simétrica: ( ) Sim
- SpO₂ pós-IOT: ___%
- RX de tórax: ( ) Solicitado

PARÂMETROS INICIAIS DA VM:
Modo: ___  VT: ___ mL  FR: ___  PEEP: ___  FiO₂: ___

_______________________________________________
Médico / CRM / Assinatura`,
  },
  {
    id: "proc-drenagem-torax",
    title: "Drenagem de Tórax",
    subtitle: "Nota de drenagem torácica",
    category: "procedimento",
    icon: "Syringe",
    text: `NOTA DE PROCEDIMENTO — DRENAGEM TORÁCICA
Data/Hora: ___/___/___ às ___:___

PACIENTE: _________________ Leito: ____ Pront: ____

INDICAÇÃO: ( ) Pneumotórax ( ) Hemotórax ( ) Derrame pleural ( ) Empiema

TÉCNICA:
- Lado: ( ) Direito ( ) Esquerdo
- Local: ___ EIC, linha axilar _________
- Antissepsia: clorexidina alcoólica
- Anestesia: lidocaína ___% — ___ mL (pele a pleura)
- Incisão de ___ cm
- Dissecção romba até pleura parietal
- Dreno: nº ___ ( ) Tubular ( ) Pigtail
- Conectado a selo d'água: ( ) Sim
- Fixação com fio _____ + ponto em U
- Curativo oclusivo

ACHADOS:
- Saída de: ( ) Ar ( ) Líquido seroso ( ) Sangue ( ) Pus
- Volume drenado inicial: ___ mL
- Oscilação: ( ) Sim ( ) Não
- Borbulhamento: ( ) Sim ( ) Não

RX de tórax controle: ( ) Solicitado

_______________________________________________
Médico / CRM / Assinatura`,
  },
  {
    id: "interconsulta",
    title: "Pedido de Interconsulta",
    subtitle: "Solicitação para outra especialidade",
    category: "interconsulta",
    icon: "MessageSquare",
    text: `PEDIDO DE INTERCONSULTA
Data: ___/___/___

DE: _________________________ (especialidade)
PARA: ________________________ (especialidade)

PACIENTE: _________________ Leito: ____ Pront: ____
Idade: ____ anos  Sexo: ( ) M ( ) F

DIAGNÓSTICO(S) ATUAL(IS):
1. _____________________________________________
2. _____________________________________________

MOTIVO DA INTERCONSULTA:
________________________________________________
________________________________________________

RESUMO CLÍNICO:
Paciente internado desde ___/___/___ por ______________
Evolução: _______________________________________
Exames relevantes: _______________________________

DÚVIDA ESPECÍFICA:
________________________________________________
________________________________________________

URGÊNCIA: ( ) Rotina ( ) Urgente ( ) Emergência

_______________________________________________
Médico solicitante / CRM / Assinatura`,
  },
  {
    id: "evol-pediatrica",
    title: "Evolução Pediátrica",
    subtitle: "Modelo adaptado para pediatria",
    category: "evolucao",
    icon: "Baby",
    text: `EVOLUÇÃO PEDIÁTRICA — DIA ___
Data/Hora: ___/___/___ às ___:___
___º DIH  Idade: ___ anos/meses  Peso: ___ kg

S (SUBJETIVO):
Mãe/Responsável refere ____________________________
Febre: ( ) Sim T máx: ___°C ( ) Não
Alimentação: ( ) Seio materno ( ) Fórmula ( ) Dieta oral
Aceitação: ( ) Boa ( ) Regular ( ) Recusa
Diurese: ( ) Normal ( ) Reduzida  Evacuação: ________
Sono: ___________________________________________

O (OBJETIVO):
Estado geral: ____________ Hidratação: ______________
Peso: ___ kg (variação: ___)  Estatura: ___ cm
FC: ___ bpm  FR: ___ irpm  SpO₂: ___%  Tax: ___°C
PA: ___x___ mmHg (se indicado)

Fontanela: ( ) Normotensa ( ) Abaulada ( ) Deprimida
Orofaringe: _____________________________________
Ap. Respiratório: _________________________________
Ap. Cardiovascular: _______________________________
Abdome: ________________________________________
Pele: ___________________________________________
Neurológico: _____________________________________

Balanço hídrico: Entrada ___ mL/kg/dia

EXAMES:
Hb: ___  Leuco: ___  Plaq: ___  PCR: ___
Na: ___  K: ___  Cr: ___  Glicemia: ___

A (AVALIAÇÃO):
Diagnóstico: ____________________________________
Evolução: ( ) Melhora ( ) Estável ( ) Piora

P (PLANO):
1. Dieta: _______________________________________
2. Hidratação: ___ mL/kg/dia = ___ mL/h (Holliday-Segar)
3. Medicações (doses por kg): _____________________
4. _____________________________________________

_______________________________________________
Assinatura / Carimbo / CRM`,
  },
  {
    id: "evol-obstetrica",
    title: "Evolução Obstétrica",
    subtitle: "Modelo para gestante internada",
    category: "evolucao",
    icon: "Baby",
    text: `EVOLUÇÃO OBSTÉTRICA — DIA ___
Data/Hora: ___/___/___ às ___:___

IDENTIFICAÇÃO:
Nome: ___________________________  Idade: ____ anos
G___P___A___  IG: ___ sem + ___ dias (DUM: ___/___/___)
Tipo sanguíneo: ___  Rh: ___

S (SUBJETIVO):
Queixas: ________________________________________
Movimentação fetal: ( ) Presente ( ) Reduzida ( ) Ausente
Perdas vaginais: ( ) Não ( ) Sim: ___________________
Contrações: ( ) Não ( ) Sim: freq ___ / intensidade ___

O (OBJETIVO):
PA: ___x___ mmHg  FC: ___ bpm  Tax: ___°C
Peso: ___ kg (ganho total: ___ kg)
Edema: ( ) Ausente ( ) MMII ( ) Face ( ) Anasarca

Abdome obstétrico:
- AFU: ___ cm  BCF: ___ bpm
- Apresentação: ( ) Cefálica ( ) Pélvica ( ) Transversa
- Situação: ( ) Longitudinal ( ) Transversa
- Dinâmica uterina: ___ contrações/___ min

Toque vaginal (se indicado):
- Dilatação: ___ cm  Apagamento: ___%
- Apresentação: Plano de De Lee ___
- Bolsa: ( ) Íntegra ( ) Rota — LA: _______________

EXAMES:
Hb: ___  Plaq: ___  Cr: ___  TGO: ___  TGP: ___
EAS: ___  Proteinúria: ___
CTG: ( ) Categoria I ( ) Categoria II ( ) Categoria III

A (AVALIAÇÃO):
Diagnóstico: ____________________________________
IG compatível com: _______________________________

P (PLANO):
1. _____________________________________________
2. _____________________________________________

_______________________________________________
Assinatura / Carimbo / CRM`,
  },
  {
    id: "evol-psiquiatrica",
    title: "Evolução Psiquiátrica",
    subtitle: "Exame do estado mental",
    category: "evolucao",
    icon: "Brain",
    text: `EVOLUÇÃO PSIQUIÁTRICA — DIA ___
Data/Hora: ___/___/___ às ___:___
___º DIH

EXAME DO ESTADO MENTAL:

Aparência: ( ) Cuidada ( ) Descuidada ( ) Bizarra
Atitude: ( ) Cooperativo ( ) Hostil ( ) Indiferente ( ) Desconfiado
Psicomotricidade: ( ) Normal ( ) Agitação ( ) Lentificação ( ) Inquietação
Contato visual: ( ) Presente ( ) Evitativo ( ) Ausente

Consciência: ( ) Lúcido ( ) Obnubilado ( ) Confuso
Orientação: ( ) Tempo ( ) Espaço ( ) Pessoa — preservada/prejudicada
Atenção: ( ) Preservada ( ) Hipotenaz ( ) Hipovigilante
Memória: Imediata ( ) OK ( ) ↓  Recente ( ) OK ( ) ↓  Remota ( ) OK ( ) ↓

Linguagem: ( ) Normal ( ) Pobreza ( ) Pressão de fala ( ) Neologismos
Pensamento:
- Curso: ( ) Normal ( ) Acelerado ( ) Lentificado ( ) Frouxo
- Forma: ( ) Lógico ( ) Tangencial ( ) Circunstancial ( ) Desagregado
- Conteúdo: ( ) Normal ( ) Delírios: _________________

Sensopercepção:
- Alucinações: ( ) Não ( ) Auditivas ( ) Visuais ( ) Outras: ___
- Ilusões: ( ) Não ( ) Sim: ______________________

Humor: _____________  Afeto: ( ) Modulado ( ) Congruente ( ) Embotado ( ) Lábil
Volição: ( ) Preservada ( ) Hipobulia ( ) Abulia
Pragmatismo: ( ) Preservado ( ) Prejudicado

RISCO:
- Suicídio: ( ) Baixo ( ) Moderado ( ) Alto — Columbia: ___
- Heteroagressividade: ( ) Baixo ( ) Moderado ( ) Alto
- Fuga: ( ) Baixo ( ) Moderado ( ) Alto

SONO: ___________________________________________
ALIMENTAÇÃO: ____________________________________

DIAGNÓSTICO: ____________________ (CID: ________)

PLANO:
1. _____________________________________________
2. _____________________________________________

_______________________________________________
Assinatura / Carimbo / CRM`,
  },
  {
    id: "atestado",
    title: "Atestado Médico",
    subtitle: "Modelo de atestado para paciente",
    category: "outro",
    icon: "FileCheck",
    text: `ATESTADO MÉDICO

Atesto para os devidos fins que o(a) Sr(a). ________________________________,
portador(a) do documento __________________, foi atendido(a) nesta data
(___/___/___), necessitando de afastamento de suas atividades por ___ dia(s),
a partir de ___/___/___.

CID: ______ (com autorização do paciente conforme Art. 73 do CEM)

_______________________________________________
Local e data: _________________, ___/___/___

_______________________________________________
Médico(a) / CRM / Assinatura`,
  },
  {
    id: "obito",
    title: "Orientações — Declaração de Óbito",
    subtitle: "Auxílio para preenchimento da DO",
    category: "outro",
    icon: "FileWarning",
    text: `ORIENTAÇÕES PARA DECLARAÇÃO DE ÓBITO

BLOCO V — CAUSAS DA MORTE (Parte I):
Linha a (causa imediata): __________________________
Linha b (devido a): _______________________________
Linha c (devido a): _______________________________
Linha d (causa básica): ____________________________

BLOCO V — CAUSAS CONTRIBUINTES (Parte II):
________________________________________________

ATENÇÃO:
• A causa básica (última) é a mais importante epidemiologicamente
• NÃO usar "parada cardiorrespiratória" — é mecanismo, não causa
• NÃO usar siglas
• CID para TODAS as causas
• Mortes violentas → IML (NÃO preencher a DO)
• Morte natural sem assistência → SVO

EXEMPLO CORRETO:
a) Choque séptico — horas — R57.2
b) Pneumonia bacteriana — dias — J15.9
c) Neoplasia de pulmão — meses — C34.9`,
  },
];
