import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, Copy, Check, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

interface AnamnesisSection {
  id: string;
  title: string;
  emoji: string;
  tags: string[];
  content: string;
  tips?: string;
}

const sections: AnamnesisSection[] = [
  {
    id: "identificacao",
    title: "Identificação",
    emoji: "🪪",
    tags: ["dados pessoais", "registro"],
    content: `Nome completo: ___________________________
Idade: ____ anos   Data de nascimento: ___/___/___
Sexo: ( ) Masculino ( ) Feminino ( ) Outro
Estado civil: _____________
Profissão/Ocupação: _______________________
Naturalidade: _____________  Procedência: _____________
Escolaridade: _____________
Religião: _____________
Etnia/Cor: _____________
Endereço: ________________________________
Telefone: ________________

📌 DICA: A profissão pode ser chave diagnóstica (ex: pneumoconioses em mineradores, LER em digitadores, intoxicação por agrotóxicos em agricultores).`,
    tips: "A identificação não é mera formalidade — idade, sexo, profissão e procedência podem direcionar hipóteses diagnósticas desde o início.",
  },
  {
    id: "qp",
    title: "Queixa Principal (QP)",
    emoji: "🎯",
    tags: ["motivo", "consulta"],
    content: `Registre com as PALAVRAS DO PACIENTE, entre aspas:

"_________________________________________________"

⚠️ REGRAS:
• Nunca usar termos técnicos na QP (ex: NÃO escrever "dispneia", escrever "falta de ar")
• Deve ser breve — 1 a 2 sintomas principais
• Incluir DURAÇÃO: "Dor no peito há 3 dias"
• Não colocar diagnósticos como QP

📌 EXEMPLOS CORRETOS:
• "Dor de cabeça forte há 2 dias"
• "Falta de ar que piora ao deitar há 1 semana"
• "Sangramento na urina há 3 dias"

❌ EXEMPLOS INCORRETOS:
• "IAM" (diagnóstico, não queixa)
• "Cefaleia" (termo técnico)
• "Dor" (muito vago, sem localização/tempo)`,
    tips: "A QP é o 'título' da história — deve ser curta, nas palavras do paciente e SEMPRE com tempo de evolução.",
  },
  {
    id: "hda",
    title: "História da Doença Atual (HDA)",
    emoji: "📖",
    tags: ["doença atual", "sintomas", "cronologia"],
    content: `A HDA é a parte mais importante da anamnese. Use a técnica dos 7 ATRIBUTOS DO SINTOMA:

1️⃣ INÍCIO / CRONOLOGIA:
   • Quando começou? Súbito ou gradual?
   • Contínuo ou intermitente? Frequência?
   • Progressão: melhorando, estável ou piorando?

2️⃣ LOCALIZAÇÃO:
   • Onde exatamente? Pedir para apontar
   • Irradiação? Para onde se espalha?

3️⃣ QUALIDADE / CARÁTER:
   • Como é? (em aperto, queimação, pontada, pulsátil, cólica, peso)
   • Comparar: "parece com algo que já sentiu antes?"

4️⃣ INTENSIDADE:
   • Escala de 0-10 (para dor)
   • Interfere nas atividades diárias? Acorda à noite?
   • É a pior que já sentiu?

5️⃣ FATORES DE MELHORA:
   • O que alivia? Repouso, posição, alimentação, medicação?
   • Já tomou algo? Funcionou?

6️⃣ FATORES DE PIORA:
   • O que agrava? Esforço, alimentação, posição, respiração?
   • Relação com horário, estresse, menstruação?

7️⃣ SINTOMAS ASSOCIADOS:
   • Febre, náuseas, vômitos, sudorese, palpitações?
   • Perda de peso, apetite, sono alterado?
   • Sintomas constitucionais?

📌 MNEMÔNICO "LIQCFASMA":
L — Localização
I — Início
Q — Qualidade
C — Cronologia
F — Fatores de piora
A — Fatores de alívio
S — Sintomas associados
M — Manifestações prévias
A — Amplitude (intensidade)

📋 MODELO DE REDAÇÃO:
"Paciente refere [sintoma principal] há [tempo], de início [súbito/gradual], de caráter [tipo], localizado em [região], com irradiação para [local], intensidade [X/10], [contínuo/intermitente]. Refere piora com [fatores] e melhora com [fatores]. Associado a [sintomas]. Nega [sintomas pertinentes negativos]. Já fez uso de [medicações] com [resultado]. [Evolução temporal do quadro]."

⚠️ PERTINENTES NEGATIVOS:
Sempre registrar sintomas RELEVANTES que o paciente NEGOU — isso mostra raciocínio clínico.
Ex: Em dor torácica → "Nega dispneia, sudorese, náuseas, síncope e irradiação para MSE."`,
    tips: "A HDA bem feita resolve >70% dos diagnósticos antes mesmo do exame físico. Dedique tempo a ela. Use perguntas abertas primeiro, depois dirija.",
  },
  {
    id: "isda",
    title: "Interrogatório Sobre os Diversos Aparelhos (ISDA)",
    emoji: "🔍",
    tags: ["revisão sistemas", "ISDA", "review of systems"],
    content: `Revisão sistemática — perguntar sobre cada sistema:

🧠 NEUROLÓGICO:
• Cefaleia, tontura, vertigem, síncope
• Convulsões, tremores, formigamento, fraqueza
• Alteração de memória, visão, audição, fala

👁️ OLHOS/OUVIDOS/NARIZ/GARGANTA:
• Alteração visual, dor ocular, lacrimejamento
• Hipoacusia, zumbido, otorreia, otalgia
• Obstrução nasal, epistaxe, rinorreia
• Odinofagia, disfagia, rouquidão

❤️ CARDIOVASCULAR:
• Dor torácica, palpitações, dispneia aos esforços
• Ortopneia, DPN, edema de MMII
• Claudicação intermitente

🫁 RESPIRATÓRIO:
• Tosse (seca/produtiva), expectoração (cor, volume)
• Dispneia, sibilância, hemoptise
• Dor pleurítica

🧬 GASTROINTESTINAL:
• Apetite, náuseas, vômitos, pirose, disfagia
• Dor abdominal, distensão, hábito intestinal
• Diarreia, constipação, melena, hematoquezia
• Icterícia, colúria, acolia fecal

🫘 GENITURINÁRIO:
• Disúria, polaciúria, urgência, noctúria
• Hematúria, incontinência, retenção
• Corrimento, prurido, úlceras genitais
• Homens: jato urinário, disfunção erétil
• Mulheres: ciclo menstrual, DUM, dispareunia, leucorreia

🦴 MUSCULOESQUELÉTICO:
• Artralgia, mialgia, lombalgia
• Rigidez matinal, edema articular
• Limitação de movimento

🩸 HEMATOLÓGICO:
• Sangramento fácil, equimoses, petéquias
• Adenomegalias, esplenomegalia
• Transfusões prévias

🧴 DERMATOLÓGICO:
• Lesões cutâneas, prurido, alteração de coloração
• Lesões de mucosa, alterações ungueais/capilares

😰 PSIQUIÁTRICO:
• Humor, ansiedade, insônia
• Ideação suicida (SEMPRE perguntar quando pertinente)
• Uso de substâncias

⚡ SINTOMAS GERAIS:
• Febre, perda de peso, fadiga, sudorese noturna
• Astenia, anorexia`,
    tips: "O ISDA captura sintomas que o paciente não mencionou espontaneamente. É onde se encontram achados 'escondidos'. Não precisa ser exaustivo em toda consulta — foque nos sistemas relevantes ao caso.",
  },
  {
    id: "hpp",
    title: "História Patológica Pregressa (HPP)",
    emoji: "🏥",
    tags: ["antecedentes", "comorbidades", "cirurgias"],
    content: `DOENÇAS CRÔNICAS:
• HAS ( ) DM ( ) Dislipidemia ( ) Cardiopatia ( )
• DPOC ( ) Asma ( ) IRC ( ) Hepatopatia ( )
• HIV ( ) Tuberculose ( ) Neoplasia ( )
• Doenças autoimunes: _________________________
• Outras: ____________________________________
• Doenças da infância: _________________________

INTERNAÇÕES PRÉVIAS:
• Motivo: _____________ Ano: _____ Local: __________
• Motivo: _____________ Ano: _____ Local: __________

CIRURGIAS:
• Procedimento: ______________ Ano: ___ Complicações: ___
• Procedimento: ______________ Ano: ___ Complicações: ___

TRAUMATISMOS:
• Tipo: _________________ Ano: ___ Sequelas: __________

TRANSFUSÕES:
• ( ) Sim — Quando: _____ Reações: _________________
• ( ) Não

ALERGIAS:
• Medicamentosas: _______________________________
  (Tipo de reação: anafilaxia / rash / GI / outro)
• Alimentares: __________________________________
• Ambientais: __________________________________
• Contraste iodado: ( ) Sim ( ) Não
• Látex: ( ) Sim ( ) Não

MEDICAÇÕES EM USO (nome, dose, frequência, há quanto tempo):
1. __________________________ — ________________
2. __________________________ — ________________
3. __________________________ — ________________
4. __________________________ — ________________
• Uso de fitoterápicos / suplementos: ________________
• Adesão: ( ) Boa ( ) Irregular ( ) Abandonou

VACINAÇÃO:
• Cartão atualizado: ( ) Sim ( ) Não ( ) Não sabe
• COVID-19: ___ doses  Influenza: ___  Tétano: ___

📌 MNEMÔNICO "CHAM DITA":
C — Cirurgias
H — Hospitalizações
A — Alergias
M — Medicações
D — Doenças prévias
I — Imunizações
T — Transfusões
A — Acidentes/Traumatismos`,
    tips: "Sempre perguntar especificamente sobre alergias — é uma questão de segurança. Detalhar tipo de reação alérgica (rash vs anafilaxia muda a conduta).",
  },
  {
    id: "hf",
    title: "História Familiar (HF)",
    emoji: "👨‍👩‍👧‍👦",
    tags: ["família", "hereditário", "genética"],
    content: `Investigar doenças nos parentes de 1º grau (pais, irmãos, filhos):

PAIS:
• Pai: ( ) Vivo — Doenças: ___________  ( ) Falecido — Causa: _______ Idade: ___
• Mãe: ( ) Viva — Doenças: ___________  ( ) Falecida — Causa: _______ Idade: ___

IRMÃOS: ___ irmãos. Doenças: _______________________

FILHOS: ___ filhos. Doenças: ________________________

DOENÇAS RELEVANTES NA FAMÍLIA:
• HAS: ( ) Sim — Quem: _________
• DM: ( ) Sim — Quem: _________
• Cardiopatia / IAM precoce (<55H / <65M): ( ) Sim — Quem: _________
• AVC: ( ) Sim — Quem: _________
• Câncer: ( ) Sim — Tipo: ________ Quem: _________
• Doenças psiquiátricas: ( ) Sim — Quem: _________
• Doenças autoimunes: ( ) Sim — Quem: _________
• Tuberculose: ( ) Sim — Quem: _________
• Doenças genéticas / hereditárias: _________________
• Morte súbita: ( ) Sim — Quem: _______ Idade: ___

📌 IMPORTÂNCIA: IAM em parente de 1º grau <55 anos (homem) ou <65 anos (mulher) é fator de risco cardiovascular independente.`,
    tips: "A HF é essencial para rastreamento e estratificação de risco. Morte súbita em jovem na família requer investigação de canalopatias/cardiomiopatias.",
  },
  {
    id: "hs",
    title: "História Social e Hábitos de Vida",
    emoji: "🏠",
    tags: ["social", "hábitos", "tabagismo", "etilismo"],
    content: `MORADIA E CONDIÇÕES SOCIAIS:
• Mora com quem: _____________________________
• Tipo de moradia: ( ) Alvenaria ( ) Madeira ( ) Outro
• Saneamento básico: ( ) Sim ( ) Não
• Água tratada: ( ) Sim ( ) Não
• Renda familiar: ______________________________
• Contato com animais: ( ) Sim — Quais: ______________

TABAGISMO:
• ( ) Nunca fumou
• ( ) Ex-tabagista — Parou há: ___ anos
  Fumou por ___ anos, ___ cigarros/dia
  Carga tabágica: ___ maços-ano
• ( ) Tabagista ativo — ___ cigarros/dia há ___ anos
  Carga tabágica: ___ maços-ano
  (Cálculo: nº de maços/dia × anos de tabagismo)

ETILISMO:
• ( ) Não bebe
• ( ) Social (< 1x/semana)
• ( ) Moderado (uso regular, sem dependência)
• ( ) Abusivo / Dependência
  CAGE: ( ) Cut down ( ) Annoyed ( ) Guilty ( ) Eye-opener
  CAGE ≥ 2 = alta suspeita de dependência
  Tipo de bebida: _________ Quantidade: ______________
  Tempo de uso: _________

DROGAS ILÍCITAS:
• ( ) Nega
• ( ) Sim — Quais: _______________________________
  Frequência: ___________ Via: ___________________

ATIVIDADE FÍSICA:
• ( ) Sedentário
• ( ) Ativo — Tipo: ____________ Frequência: ___x/sem
  Duração: ___ min/sessão

ALIMENTAÇÃO:
• ( ) Adequada  ( ) Irregular  ( ) Restritiva
• Restrições: ___________________________________
• Consumo de ultra-processados: ( ) Baixo ( ) Moderado ( ) Alto

SONO:
• Horas/noite: ___  Qualidade: ( ) Boa ( ) Ruim
• Roncos: ( ) Sim ( ) Não  Apneia presenciada: ( ) Sim ( ) Não
• Sonolência diurna excessiva (Epworth): ___

SEXUALIDADE:
• Vida sexual ativa: ( ) Sim ( ) Não
• Parceiro(s): ( ) Fixo ( ) Múltiplos
• Uso de preservativo: ( ) Sempre ( ) Às vezes ( ) Nunca
• ISTs prévias: _________________________________

EXPOSIÇÕES OCUPACIONAIS:
• Agentes: ( ) Poeira ( ) Químicos ( ) Ruído ( ) Sol
• EPI: ( ) Usa ( ) Não usa
• Tempo de exposição: ___________________________

VIAGENS RECENTES:
• Local: _________________ Data: _________________
• Áreas endêmicas: ( ) Sim — Qual doença: ___________`,
    tips: "Carga tabágica ≥20 maços-ano = critério para rastreamento de CA de pulmão com TC de baixa dose. CAGE ≥2 = rastrear síndrome de dependência alcoólica.",
  },
  {
    id: "go",
    title: "História Ginecológica e Obstétrica",
    emoji: "🤰",
    tags: ["ginecologia", "obstetrícia", "menstruação", "gestação"],
    content: `(Quando aplicável)

GINECOLÓGICO:
• Menarca: ___ anos
• DUM (Data da Última Menstruação): ___/___/___
• Ciclo menstrual: Regular ( ) Irregular ( )
  Duração: ___ dias  Intervalo: ___ dias
• Dismenorreia: ( ) Sim ( ) Não
• Sangramento anormal: ( ) Sim — Tipo: ______________
• Menopausa: ( ) Sim — Idade: ___ anos
  TRH: ( ) Sim ( ) Não
• Último Papanicolau: ___/___/___  Resultado: _________
• Última Mamografia: ___/___/___  Resultado: _________
• Método contraceptivo: __________________________

OBSTÉTRICO:
• G___ P___ A___ (Gestações, Partos, Abortos)
  Partos normais: ___  Cesáreas: ___
• Complicações gestacionais prévias:
  ( ) Pré-eclâmpsia  ( ) DMG  ( ) Prematuridade
  ( ) Abortamento de repetição  ( ) Outros: ___________
• RN de maior peso: ___ g
• Amamentação: ( ) Sim — Duração: ___ meses ( ) Não

📌 FÓRMULA OBSTÉTRICA: GxPxAx
Ex: G3P2A1 = 3 gestações, 2 partos, 1 aborto
Detalhar: G3P2(1N+1C)A1 = 1 parto normal + 1 cesárea + 1 aborto`,
    tips: "Sempre perguntar a DUM em mulheres em idade fértil — pode mudar completamente a conduta (ex: imagem, medicações teratogênicas, diagnóstico diferencial).",
  },
  {
    id: "crianca",
    title: "Anamnese Pediátrica — Complementos",
    emoji: "👶",
    tags: ["pediatria", "neonatal", "desenvolvimento"],
    content: `(Adicionar à anamnese padrão quando o paciente for criança)

HISTÓRIA NEONATAL:
• Parto: ( ) Normal ( ) Cesárea ( ) Fórceps
• IG ao nascer: ___ semanas
• Peso ao nascer: ___ g  Comprimento: ___ cm  PC: ___ cm
• Apgar: 1min: ___  5min: ___
• Chorou ao nascer: ( ) Sim ( ) Não
• Intercorrências neonatais: ( ) Icterícia ( ) UTI neonatal
  ( ) Infecção ( ) Outras: _________________________
• Triagem neonatal (Teste do Pezinho): ( ) Normal ( ) Alterado

ALIMENTAÇÃO:
• Aleitamento materno: ( ) Exclusivo até ___ meses
  ( ) Misto desde ___ meses  ( ) Nunca amamentou
• Fórmula: ( ) Sim — Tipo: _________ Desde: ___ meses
• Introdução alimentar: ___ meses
• Alimentação atual: ______________________________
• Seletividade alimentar: ( ) Sim ( ) Não

DESENVOLVIMENTO NEUROPSICOMOTOR (DNPM):
• Sustento cefálico: ___ meses (normal: 3-4m)
• Sentou sem apoio: ___ meses (normal: 6-9m)
• Andou: ___ meses (normal: 12-18m)
• Primeiras palavras: ___ meses (normal: 12m)
• Frases: ___ meses (normal: 24m)
• Controle esfincteriano: ___ anos (normal: 2-3a)
• Desempenho escolar: ____________________________

VACINAÇÃO:
• Cartão em dia: ( ) Sim ( ) Não ( ) Não trouxe
• Vacinas atrasadas: _____________________________

ANTECEDENTES:
• Doenças comuns da infância: _____________________
• Internações prévias: ___________________________
• Alergias alimentares: ___________________________
• Uso crônico de medicações: _____________________`,
    tips: "Os marcos do DNPM são cobrados em provas e essenciais no dia a dia. Atraso em ≥2 domínios = encaminhar para avaliação especializada.",
  },
  {
    id: "idoso",
    title: "Anamnese Geriátrica — Complementos",
    emoji: "🧓",
    tags: ["geriatria", "idoso", "funcionalidade"],
    content: `(Adicionar à anamnese padrão quando o paciente for idoso)

AVALIAÇÃO FUNCIONAL:
• Atividades Básicas de Vida Diária (ABVD — Katz):
  Banho: ( ) Independente ( ) Dependente
  Vestir: ( ) Independente ( ) Dependente
  Higiene pessoal: ( ) Independente ( ) Dependente
  Transferência: ( ) Independente ( ) Dependente
  Continência: ( ) Independente ( ) Dependente
  Alimentação: ( ) Independente ( ) Dependente

• Atividades Instrumentais (AIVD — Lawton):
  Telefone: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Compras: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Cozinhar: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Tarefas domésticas: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Lavar roupa: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Transporte: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Medicações: ( ) Independente ( ) Com ajuda ( ) Incapaz
  Finanças: ( ) Independente ( ) Com ajuda ( ) Incapaz

COGNIÇÃO:
• Queixa de memória: ( ) Sim ( ) Não
• Mini-Mental (MEEM): ___/30 pontos
• Teste do relógio: ( ) Normal ( ) Alterado
• Declínio funcional progressivo: ( ) Sim ( ) Não

HUMOR:
• GDS-15 (Escala de Depressão Geriátrica): ___/15
  ≥5 = sugestivo de depressão
• Isolamento social: ( ) Sim ( ) Não

MOBILIDADE E QUEDAS:
• Quedas no último ano: ___ vezes
• Causa: ( ) Tropeço ( ) Tontura ( ) Síncope ( ) Fraqueza
• Consequências: ( ) Fratura ( ) Medo de cair ( ) Nenhuma
• Timed Up and Go: ___ segundos (>12s = risco)
• Dispositivo de auxílio: ( ) Nenhum ( ) Bengala ( ) Andador ( ) Cadeira de rodas

POLIFARMÁCIA:
• Total de medicamentos em uso: ___
• Medicamentos potencialmente inapropriados (Beers): ___
• Cascata medicamentosa identificada: ( ) Sim ( ) Não

NUTRIÇÃO:
• Peso: ___ kg  Altura: ___ cm  IMC: ___
• Perda de peso involuntária: ( ) Sim — ___kg em ___meses
• MNA (Mini Nutritional Assessment): ___/30

SÍNDROMES GERIÁTRICAS (7 I's):
( ) Instabilidade postural  ( ) Incontinência
( ) Insuficiência cognitiva  ( ) Iatrogenia
( ) Imobilidade  ( ) Isolamento social
( ) Inanição (desnutrição)

CUIDADOR:
• Cuidador principal: ____________________________
• Sobrecarga do cuidador: ( ) Sim ( ) Não`,
    tips: "Os 5 gigantes da geriatria: Instabilidade, Imobilidade, Incontinência, Insuficiência cognitiva e Iatrogenia. Avaliar funcionalidade é mais importante que contar doenças.",
  },
  {
    id: "psiq",
    title: "Anamnese Psiquiátrica — Complementos",
    emoji: "🧠",
    tags: ["psiquiatria", "saúde mental", "exame psíquico"],
    content: `(Adicionar à anamnese padrão em casos psiquiátricos)

HISTÓRIA PSIQUIÁTRICA:
• Diagnósticos prévios: ___________________________
• Internações psiquiátricas: ___ vezes
  Última: ___/___/___  Motivo: ____________________
• Tratamentos anteriores: _________________________
• Adesão ao tratamento: ( ) Boa ( ) Irregular ( ) Abandono
• Tentativas de suicídio: ( ) Não ( ) Sim — ___ vez(es)
  Método: ____________ Quando: __________________

AVALIAÇÃO DE RISCO:
⚠️ IDEAÇÃO SUICIDA (perguntar SEMPRE):
• "Você tem pensado em se machucar?" ( ) Sim ( ) Não
• "Tem pensado em não querer mais viver?" ( ) Sim ( ) Não
• "Tem algum plano?" ( ) Sim ( ) Não
• "Tem acesso a meios?" ( ) Sim ( ) Não
• Fatores de risco: ( ) Tentativa prévia ( ) Plano estruturado
  ( ) Desesperança ( ) Isolamento ( ) Uso de substâncias
  ( ) Doença crônica/dor ( ) Perda recente

EXAME DO ESTADO MENTAL (EEM):
1. Aparência: vestuário, higiene, postura, atitude
2. Nível de consciência: vigil / sonolento / torporoso
3. Orientação: ( ) Tempo ( ) Espaço ( ) Pessoa
4. Atenção: ( ) Preservada ( ) Diminuída — Tipo: ________
5. Memória: imediata / recente / remota
6. Pensamento:
   • Curso: ( ) Normal ( ) Acelerado ( ) Lentificado ( ) Desagregado
   • Conteúdo: ( ) Delírios ( ) Ideação suicida ( ) Obsessões
7. Sensopercepção: ( ) Normal ( ) Alucinações (tipo: _________)
8. Humor: ( ) Eutímico ( ) Deprimido ( ) Elevado ( ) Ansioso ( ) Irritável
9. Afeto: ( ) Modulado ( ) Embotado ( ) Lábil ( ) Incongruente
10. Psicomotricidade: ( ) Normal ( ) Agitação ( ) Lentificação
11. Juízo crítico: ( ) Preservado ( ) Comprometido
12. Pragmatismo: ( ) Preservado ( ) Comprometido

HISTÓRIA DE VIDA:
• Infância: ______________________________________
• Relações familiares: _____________________________
• Relações interpessoais: __________________________
• Vida sexual/afetiva: _____________________________
• Estressores atuais: ______________________________`,
    tips: "Perguntar sobre suicídio NÃO aumenta o risco — pelo contrário, acolhe e permite intervenção. A Columbia Suicide Severity Rating Scale (C-SSRS) é uma ferramenta validada.",
  },
  {
    id: "emergencia",
    title: "Anamnese Rápida no PS (SAMPLE/AMPLE)",
    emoji: "🚨",
    tags: ["emergência", "SAMPLE", "AMPLE", "rápida"],
    content: `Na emergência, quando o tempo é crítico, use o mnemônico SAMPLE:

S — SIGNS & SYMPTOMS (Sinais e Sintomas):
    • Qual a queixa? Quando começou? Intensidade?
    ________________________________________________

A — ALLERGIES (Alergias):
    • Medicamentos, alimentos, contraste, látex?
    ________________________________________________

M — MEDICATIONS (Medicações):
    • Quais medicamentos em uso? Dose?
    • Anticoagulantes? Insulina? Anti-hipertensivos?
    ________________________________________________

P — PAST MEDICAL HISTORY (Passado Médico):
    • Doenças crônicas? Cirurgias? Internações?
    ________________________________________________

L — LAST MEAL (Última Refeição):
    • O que comeu? Quando? (importante se IOT/cirurgia)
    ________________________________________________

E — EVENTS (Eventos):
    • O que aconteceu? Mecanismo do trauma?
    • O que estava fazendo quando começou?
    ________________________________________________

⏱️ TEMPO ALVO: 2-5 minutos para SAMPLE completo

📌 VARIAÇÃO "AMPLE" (mesma informação, ordem diferente):
A — Alergias
M — Medicações
P — Passado médico
L — Last meal
E — Eventos

📌 DICA DE OURO: Em paciente inconsciente, obter SAMPLE com:
• Familiares/acompanhantes
• Pulseira de alerta médico
• Carteira/documentos
• Prontuário eletrônico
• SAMU/bombeiros que trouxeram`,
    tips: "No trauma, o SAMPLE é obrigatório e pode ser feito simultaneamente ao exame primário (ABCDE). Treinar para ser ágil e objetivo.",
  },
];

export default function AnamnesisGuide() {
  const [active, setActive] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = sections.filter(s => {
    const q = search.toLowerCase();
    return !q || s.title.toLowerCase().includes(q) || s.tags.some(t => t.includes(q)) || s.content.toLowerCase().includes(q);
  });

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copiado para a área de transferência!");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <TopBar title="Guia de Anamnese" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        <p className="text-xs text-muted-foreground mb-2">
          Roteiro completo e estruturado para anamnese médica — toque para expandir e copiar
        </p>

        <div className="relative mb-3">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar seção (ex: HDA, tabagismo, SAMPLE...)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>

        <p className="text-[10px] text-muted-foreground">{filtered.length} seções encontradas</p>

        {filtered.map(s => {
          const isOpen = active === s.id;
          return (
            <Card key={s.id} className="overflow-hidden">
              <button
                onClick={() => setActive(isOpen ? null : s.id)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="text-left flex items-center gap-2">
                  <span className="text-lg">{s.emoji}</span>
                  <div>
                    <p className="font-heading font-semibold text-sm">{s.title}</p>
                    <div className="flex gap-1 flex-wrap mt-0.5">
                      {s.tags.slice(0, 3).map(t => (
                        <Badge key={t} variant="secondary" className="text-[8px] py-0 px-1.5">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {isOpen ? <ChevronDown size={14} className="text-muted-foreground shrink-0" /> : <ChevronRight size={14} className="text-muted-foreground shrink-0" />}
              </button>

              {isOpen && (
                <CardContent className="px-4 pb-4 pt-0 space-y-3">
                  {s.tips && (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <p className="text-[10px] font-semibold text-primary mb-1">💡 Dica clínica</p>
                      <p className="text-[10px] text-foreground/80 leading-relaxed">{s.tips}</p>
                    </div>
                  )}
                  <pre className="text-[10px] leading-relaxed whitespace-pre-wrap bg-muted/50 rounded-lg p-3 font-mono max-h-[500px] overflow-y-auto">
                    {s.content}
                  </pre>
                  <Button size="sm" variant="outline" className="w-full gap-2" onClick={() => copyText(s.id, s.content)}>
                    {copied === s.id ? <><Check size={14} /> Copiado!</> : <><Copy size={14} /> Copiar seção</>}
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
