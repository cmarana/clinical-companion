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
  {
    id: "ocupacional",
    title: "Anamnese Ocupacional",
    emoji: "🏗️",
    tags: ["trabalho", "ocupação", "exposição", "risco"],
    content: `═══════════════════════════════════════
  ANAMNESE OCUPACIONAL DETALHADA
═══════════════════════════════════════

1️⃣ HISTÓRIA OCUPACIONAL CRONOLÓGICA:
   Listar TODOS os empregos/atividades, do primeiro ao atual:

   Emprego 1:
   • Função: ___________________________
   • Empresa/Local: ____________________
   • Período: ___/___/___ a ___/___/___
   • Jornada: ____ h/dia, ____ dias/semana
   • Atividades realizadas: _____________
   • Exposições: ( ) Ruído ( ) Poeira ( ) Químicos
     ( ) Vibração ( ) Calor ( ) Frio ( ) Radiação
     ( ) Agentes biológicos ( ) Ergonômicos
   • EPI utilizado: _____________________
   • Afastamentos neste período: ________

   [Repetir para cada emprego]

2️⃣ EMPREGO ATUAL:
   • Cargo/Função: _____________________
   • Tempo na função: __________________
   • Descrição detalhada do dia de trabalho:
     ____________________________________
   • Postura predominante: ( ) Sentado ( ) Em pé
     ( ) Alternada ( ) Agachado ( ) Ajoelhado
   • Esforço físico: ( ) Leve ( ) Moderado ( ) Intenso
   • Movimentos repetitivos: ( ) Sim ( ) Não
     Qual? ______________________________
   • Levantamento de peso: ( ) Sim ( ) Não
     Quanto? ____ kg, frequência: ________
   • Trabalho noturno/turnos: ( ) Sim ( ) Não
   • Horas extras frequentes: ( ) Sim ( ) Não

3️⃣ EXPOSIÇÕES ESPECÍFICAS:
   AGENTES QUÍMICOS:
   • Solventes (benzeno, tolueno, xileno): ____
   • Metais pesados (chumbo, mercúrio, cromo): ____
   • Agrotóxicos/pesticidas: _______________
   • Poeiras minerais (sílica, amianto): ______
   • Poeiras orgânicas (algodão, madeira): _____
   • Gases/vapores: ________________________
   • Tempo e intensidade de exposição: ________

   AGENTES FÍSICOS:
   • Ruído: ____ dB, ____ h/dia de exposição
   • Vibração: ( ) Corpo inteiro ( ) Mãos/braços
   • Temperaturas extremas: _________________
   • Radiação: ( ) Ionizante ( ) Não-ionizante
   • Pressão anormal: ( ) Hiperbárica ( ) Hipobárica

   AGENTES BIOLÓGICOS:
   • Contato com pacientes/material biológico: ___
   • Animais: ______________________________
   • Acidente com perfurocortante: ( ) Sim ( ) Não

   FATORES ERGONÔMICOS:
   • Posto de trabalho adequado: ( ) Sim ( ) Não
   • Pausas regulares: ( ) Sim ( ) Não
   • Mobiliário: ___________________________

   FATORES PSICOSSOCIAIS:
   • Ritmo de trabalho: ( ) Adequado ( ) Intenso
   • Autonomia: ( ) Sim ( ) Não
   • Assédio moral/sexual: ( ) Sim ( ) Não
   • Satisfação no trabalho: _______________

4️⃣ RELAÇÃO TEMPORAL SINTOMA-TRABALHO:
   • Os sintomas melhoram nos fins de semana/férias?
     ( ) Sim ( ) Não ( ) Parcialmente
   • Os sintomas pioram durante/após o trabalho?
     ( ) Sim ( ) Não
   • Quando começaram em relação ao emprego atual?
     ____________________________________________
   • Colegas com sintomas semelhantes?
     ( ) Sim ( ) Não. Quantos? ____

5️⃣ DOCUMENTAÇÃO E EXAMES OCUPACIONAIS:
   • ASO mais recente: ___/___/___ Resultado: ____
   • PCMSO da empresa: ( ) Sim ( ) Não
   • CAT emitida: ( ) Sim ( ) Não
     Data: ___/___/___ Motivo: ________________
   • Afastamento pelo INSS: ( ) Sim ( ) Não
     B31 ( ) B91 ( )  Período: ________________
   • Laudos de insalubridade/periculosidade: ____

6️⃣ NEXO CAUSAL — CHECKLIST:
   ☐ Exposição compatível com a doença?
   ☐ Tempo de exposição suficiente (latência)?
   ☐ Relação temporal adequada?
   ☐ Exclusão de causas não-ocupacionais?
   ☐ Evidência epidemiológica em co-workers?
   ☐ Lista Nacional de Doenças Relacionadas ao Trabalho consultada?

📌 PRINCIPAIS DOENÇAS OCUPACIONAIS:
• LER/DORT (NR-17)
• PAIR — Perda Auditiva Induzida por Ruído
• Pneumoconioses (silicose, asbestose, bissinose)
• Dermatoses ocupacionais
• Intoxicações (chumbo, mercúrio, organofosforados)
• Distúrbios psíquicos (burnout, depressão)
• Câncer ocupacional (mesotelioma, leucemia por benzeno)
• Hepatopatias tóxicas`,
    tips: "A anamnese ocupacional é obrigatória em toda consulta médica (Resolução CFM). Sempre perguntar: 'O que você faz no trabalho?' e 'Seus sintomas melhoram nos fins de semana?'. Essas duas perguntas simples podem revelar doenças ocupacionais subdiagnosticadas.",
  },
  {
    id: "nutricional",
    title: "Anamnese Nutricional",
    emoji: "🥗",
    tags: ["nutrição", "alimentação", "dieta", "peso"],
    content: `═══════════════════════════════════════
  ANAMNESE NUTRICIONAL DETALHADA
═══════════════════════════════════════

1️⃣ DADOS ANTROPOMÉTRICOS:
   • Peso atual: ______ kg
   • Peso habitual: ______ kg
   • Altura: ______ m
   • IMC: ______ kg/m²
     ( ) <18.5 Baixo peso
     ( ) 18.5-24.9 Eutrófico
     ( ) 25-29.9 Sobrepeso
     ( ) 30-34.9 Obesidade I
     ( ) 35-39.9 Obesidade II
     ( ) ≥40 Obesidade III
   • Circunferência abdominal: ______ cm
     (Risco: H >102cm / M >88cm)
   • Circunferência do braço: ______ cm
   • Prega tricipital: ______ mm
   • Perda de peso recente:
     ( ) Sim — Quanto: ____ kg em ____ semanas/meses
     ( ) Não
   • Perda >10% em 6 meses = DESNUTRIÇÃO GRAVE

2️⃣ RECORDATÓRIO ALIMENTAR 24h:
   MANHÃ (horário: ____):
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______

   LANCHE DA MANHÃ (horário: ____):
   • ______________________________________

   ALMOÇO (horário: ____):
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______

   LANCHE DA TARDE (horário: ____):
   • ______________________________________

   JANTAR (horário: ____):
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______
   • Alimento: _____________ Quantidade: _______

   CEIA (horário: ____):
   • ______________________________________

   LÍQUIDOS/DIA:
   • Água: ______ mL/dia
   • Sucos: ______ mL/dia
   • Refrigerante: ______ mL/dia
   • Café: ______ xícaras/dia
   • Álcool: ______ doses/semana

3️⃣ FREQUÊNCIA ALIMENTAR SEMANAL:
   GRUPO            Diário  3-6x  1-2x  Raro  Nunca
   Frutas            ( )    ( )   ( )   ( )   ( )
   Verduras/legumes  ( )    ( )   ( )   ( )   ( )
   Leite/derivados   ( )    ( )   ( )   ( )   ( )
   Carnes vermelhas  ( )    ( )   ( )   ( )   ( )
   Frango/peixe      ( )    ( )   ( )   ( )   ( )
   Ovos              ( )    ( )   ( )   ( )   ( )
   Arroz/feijão      ( )    ( )   ( )   ( )   ( )
   Pães/massas       ( )    ( )   ( )   ( )   ( )
   Cereais integrais ( )    ( )   ( )   ( )   ( )
   Frituras          ( )    ( )   ( )   ( )   ( )
   Doces/açúcar      ( )    ( )   ( )   ( )   ( )
   Embutidos         ( )    ( )   ( )   ( )   ( )
   Ultraprocessados  ( )    ( )   ( )   ( )   ( )
   Oleaginosas       ( )    ( )   ( )   ( )   ( )

4️⃣ HÁBITOS E COMPORTAMENTO ALIMENTAR:
   • Quem prepara as refeições: _______________
   • Onde costuma comer: ( ) Casa ( ) Restaurante
     ( ) Trabalho ( ) Fast-food
   • Come assistindo TV/celular: ( ) Sim ( ) Não
   • Tempo gasto nas refeições: ____ minutos
   • Mastiga bem os alimentos: ( ) Sim ( ) Não
   • Pula refeições: ( ) Sim — Qual(is)? ______
   • Come por ansiedade/estresse: ( ) Sim ( ) Não
   • Compulsão alimentar: ( ) Sim ( ) Não
   • Purgação/vômitos induzidos: ( ) Sim ( ) Não
   • Uso de laxantes: ( ) Sim ( ) Não
   • Restrição calórica severa: ( ) Sim ( ) Não

5️⃣ RESTRIÇÕES E DIETAS ESPECIAIS:
   • Alergias alimentares: __________________
   • Intolerâncias: ( ) Lactose ( ) Glúten ( ) Outra: ___
   • Dieta vegetariana/vegana: ( ) Sim ( ) Não
   • Dieta por condição médica:
     ( ) Hipossódica ( ) Hipocalórica ( ) Hipolipídica
     ( ) Diabética ( ) Renal ( ) Sem glúten
     ( ) Cetogênica ( ) Outra: ________________
   • Suplementos nutricionais: _______________
   • Vitaminas/minerais em uso: ______________
   • Suplemento proteico: ( ) Sim ( ) Não

6️⃣ AVALIAÇÃO DE RISCO NUTRICIONAL (NRS-2002):
   Triagem inicial:
   ☐ IMC < 20,5?
   ☐ Perda de peso nos últimos 3 meses?
   ☐ Redução da ingesta na última semana?
   ☐ Doença grave (UTI, cirurgia grande)?
   → Se ≥1 SIM: aplicar triagem completa

7️⃣ SINAIS FÍSICOS DE CARÊNCIA NUTRICIONAL:
   • Cabelos: ( ) quebradiços ( ) queda ( ) sem brilho
   • Unhas: ( ) quebradiças ( ) coiloníquia ( ) estrias
   • Pele: ( ) seca ( ) descamativa ( ) petéquias
     ( ) dermatite pelagroide ( ) acantose nigricans
   • Mucosas: ( ) descoradas ( ) queilite angular
     ( ) glossite ( ) estomatite
   • Edema: ( ) MMII ( ) anasarca ( ) Kwashiorkor
   • Musculatura: ( ) preservada ( ) hipotrofia
     Temporal ( ) Interósseos ( ) Quadríceps ( )
   • Tecido subcutâneo: ( ) preservado ( ) reduzido

📌 DEFICIÊNCIAS COMUNS E SINAIS:
• Ferro: palidez, coiloníquia, glossite
• B12: glossite, parestesias, ataxia
• Folato: glossite, anemia megaloblástica
• Vitamina D: dor óssea, fraqueza proximal
• Vitamina C: petéquias, gengivorragia (escorbuto)
• Zinco: alopecia, disgeusia, diarreia, acrodermatite
• Vitamina A: xeroftalmia, cegueira noturna
• Tiamina (B1): Beribéri, Wernicke-Korsakoff`,
    tips: "A avaliação nutricional é essencial em idosos, pacientes oncológicos, pré-operatório, UTI e doenças crônicas. A perda de peso >5% em 1 mês ou >10% em 6 meses indica desnutrição grave e impacta mortalidade. Use NRS-2002 (internados) ou MAN (idosos).",
  },
  {
    id: "cuidados-paliativos",
    title: "Anamnese em Cuidados Paliativos",
    emoji: "🕊️",
    tags: ["paliativo", "fim de vida", "dor", "qualidade de vida"],
    content: `═══════════════════════════════════════
  ANAMNESE EM CUIDADOS PALIATIVOS
═══════════════════════════════════════

1️⃣ IDENTIFICAÇÃO E CONTEXTO:
   • Doença de base: ________________________
   • Data do diagnóstico: ___/___/___
   • Estadiamento/Prognóstico: _______________
   • Tratamentos prévios realizados:
     ( ) Cirurgia ( ) Quimioterapia ( ) Radioterapia
     ( ) Imunoterapia ( ) Outros: _____________
   • Tratamento atual: ______________________
   • Performance Status (PPS ou Karnofsky):
     PPS: _____%    Karnofsky: _____%
   • Funcionalidade (ECOG): _____

2️⃣ AVALIAÇÃO MULTIDIMENSIONAL DA DOR:
   Mnemônico "PQRST" da dor:

   P — PROVOCAÇÃO/PALIAÇÃO:
   • O que provoca/piora? ___________________
   • O que alivia? __________________________

   Q — QUALIDADE:
   • Como é a dor? ( ) Pontada ( ) Queimação
     ( ) Cólica ( ) Pressão ( ) Choque
     ( ) Latejante ( ) Peso ( ) Formigamento

   R — REGIÃO/RADIAÇÃO:
   • Onde dói? _____________________________
   • Irradia para? __________________________

   S — SEVERIDADE (EVA 0-10):
   • Agora: ____/10
   • Pior nas últimas 24h: ____/10
   • Melhor nas últimas 24h: ____/10
   • Média: ____/10

   T — TEMPO:
   • Início: ________________________________
   • Duração: _______________________________
   • Padrão: ( ) Contínua ( ) Intermitente
     ( ) Incidental ( ) Irruptiva

   CLASSIFICAÇÃO DA DOR:
   ( ) Nociceptiva somática (bem localizada, pressão/pontada)
   ( ) Nociceptiva visceral (difusa, cólica, aperto)
   ( ) Neuropática (choque, queimação, formigamento)
   ( ) Mista
   ( ) Dor total (sofrimento existencial associado)

3️⃣ ESCALA DE SINTOMAS — ESAS (0-10):
   Marcar intensidade de 0 (nenhum) a 10 (pior possível):

   Dor:              ____/10
   Cansaço:          ____/10
   Náusea:           ____/10
   Depressão:        ____/10
   Ansiedade:        ____/10
   Sonolência:       ____/10
   Apetite:          ____/10
   Dispneia:         ____/10
   Bem-estar geral:  ____/10
   Outro: _________  ____/10

4️⃣ AVALIAÇÃO DE OUTROS SINTOMAS:
   GASTROINTESTINAIS:
   • Náusea/vômito: frequência ____, trigger: ____
   • Constipação: última evacuação ___/___/___
     ( ) Bristol 1-2: endurecidas
   • Diarreia: ____ episódios/dia
   • Mucosite: ( ) Grau 1 ( ) 2 ( ) 3 ( ) 4
   • Disfagia: ( ) Sólidos ( ) Líquidos ( ) Ambos
   • Ascite sintomática: ( ) Sim ( ) Não
   • Obstrução intestinal: ( ) Sim ( ) Não

   RESPIRATÓRIOS:
   • Dispneia: ( ) Repouso ( ) Esforço mínimo
     ( ) Esforço moderado
   • Tosse: ( ) Seca ( ) Produtiva
   • Hemoptise: ( ) Sim ( ) Não
   • Secreção excessiva (sororoca): ( ) Sim ( ) Não
   • Derrame pleural: ( ) Sim ( ) Não

   NEUROPSIQUIÁTRICOS:
   • Delirium: ( ) Hiperativo ( ) Hipoativo ( ) Misto
     CAM: ( ) Positivo ( ) Negativo
   • Insônia: ____h de sono/noite
   • Depressão: PHQ-2 positivo? ( ) Sim ( ) Não
   • Ansiedade: ( ) Sim ( ) Não
   • Convulsões: ( ) Sim ( ) Não

   PELE E FERIDAS:
   • Úlcera por pressão: ( ) Sim Grau: ____
   • Ferida tumoral: ( ) Sim ( ) Não
     ( ) Odor ( ) Sangramento ( ) Exsudato
   • Prurido: ( ) Sim ( ) Não
   • Linfedema: ( ) Sim ( ) Não

5️⃣ DIMENSÃO PSICOSSOCIAL E ESPIRITUAL:
   EMOCIONAL:
   • Como o paciente se sente sobre sua doença?
     ____________________________________________
   • Medos principais: ( ) Dor ( ) Morte ( ) Dependência
     ( ) Solidão ( ) Perda de dignidade ( ) Outro: ____
   • Luto antecipatório: ( ) Presente ( ) Ausente
   • Desejo de morte: ( ) Sim — explorar com cuidado

   SOCIAL:
   • Rede de apoio: _________________________
   • Cuidador principal: ____________________
   • Sobrecarga do cuidador: ( ) Sim ( ) Não
   • Situação financeira impacta cuidado: ( ) Sim ( ) Não
   • Filhos/dependentes menores: ( ) Sim ( ) Não

   ESPIRITUAL:
   • Tem fé/religião/espiritualidade: ( ) Sim ( ) Não
   • A espiritualidade ajuda no enfrentamento?
     ( ) Sim ( ) Não ( ) Causa sofrimento
   • Deseja suporte espiritual/capelão: ( ) Sim ( ) Não
   • Pendências espirituais/relacionais: ( ) Sim ( ) Não

6️⃣ DIRETIVAS ANTECIPADAS DE VONTADE (DAV):
   • Paciente foi abordado sobre DAV: ( ) Sim ( ) Não
   • Tem DAV registrada: ( ) Sim ( ) Não
   • Procurador de saúde designado: ( ) Sim ( ) Não
     Nome: ______________ Contato: ___________

   PREFERÊNCIAS DO PACIENTE:
   • Em caso de parada cardiorrespiratória:
     ( ) Reanimar (RCP) ( ) Não reanimar (ONR)
   • Intubação orotraqueal:
     ( ) Aceita ( ) Não deseja
   • Ventilação mecânica:
     ( ) Aceita ( ) Não deseja
   • Diálise:
     ( ) Aceita ( ) Não deseja
   • Nutrição artificial:
     ( ) Aceita ( ) Não deseja
   • Internação em UTI:
     ( ) Aceita ( ) Não deseja
   • Hidratação artificial:
     ( ) Aceita ( ) Não deseja
   • Transfusão sanguínea:
     ( ) Aceita ( ) Não deseja

   LOCAL DE CUIDADO PREFERIDO:
   ( ) Hospital ( ) Domicílio ( ) Hospice
   LOCAL DE ÓBITO PREFERIDO:
   ( ) Hospital ( ) Domicílio ( ) Sem preferência

7️⃣ PLANO DE CUIDADOS — CHECKLIST:
   ☐ Dor controlada (EVA ≤ 3)?
   ☐ Sintomas desconfortáveis manejados?
   ☐ Medicações via adequada ao paciente?
   ☐ Prescrição de resgate orientada?
   ☐ Família orientada sobre evolução esperada?
   ☐ Suporte psicológico ofertado?
   ☐ Suporte espiritual ofertado?
   ☐ DAV discutida e registrada?
   ☐ Plano de sedação paliativa discutido se necessário?
   ☐ Equipe multiprofissional envolvida?

📌 "5 COISAS" DE IRA BYOCK:
Encorajar o paciente a expressar:
1. "Me perdoe"
2. "Eu te perdoo"
3. "Obrigado"
4. "Eu te amo"
5. "Adeus"

📌 ESCALA PPS (Palliative Performance Scale):
• 100%: Atividade normal, sem doença
• 70%: Incapaz de trabalho, autocuidado total
• 50%: Sentado/deitado >50%, ajuda considerável
• 30%: Acamado, dependência total
• 10%: Acamado, cuidado total, mínima ingesta
• 0%: Morte`,
    tips: "Em cuidados paliativos, a anamnese vai além do biológico — abrange sofrimento total (dor física, psíquica, social e espiritual). Use ESAS em toda consulta para monitorar sintomas. Sempre pergunte sobre DAV precocemente, não apenas em fase final.",
  },
  {
    id: "pre-operatoria",
    title: "Anamnese Pré-Operatória",
    emoji: "🏥",
    tags: ["cirurgia", "pré-op", "risco cirúrgico", "anestesia"],
    content: `═══════════════════════════════════════
  ANAMNESE PRÉ-OPERATÓRIA COMPLETA
═══════════════════════════════════════

1️⃣ PROCEDIMENTO PROPOSTO:
   • Cirurgia: ______________________________
   • Porte: ( ) Pequeno ( ) Médio ( ) Grande
   • Urgência: ( ) Eletiva ( ) Urgência ( ) Emergência
   • Anestesia prevista: ( ) Geral ( ) Raqui ( ) Peridural
     ( ) Local ( ) Sedação ( ) Combinada
   • Cirurgião responsável: __________________
   • Data prevista: ___/___/___

2️⃣ ANTECEDENTES CIRÚRGICOS E ANESTÉSICOS:
   • Cirurgias prévias:
     1. ________________ Data: ____ Anestesia: ____
     2. ________________ Data: ____ Anestesia: ____
     3. ________________ Data: ____ Anestesia: ____
   • Complicações anestésicas prévias:
     ( ) Nenhuma ( ) Náusea/vômito pós-op
     ( ) Intubação difícil ( ) Anafilaxia
     ( ) Hipertermia maligna ( ) Despertar intraoperatório
     ( ) Outra: _____________________________
   • História familiar de complicação anestésica:
     ( ) Sim — Qual? __________ ( ) Não ( ) Desconhece
   • Hipertermia maligna na família: ( ) Sim ( ) Não

3️⃣ AVALIAÇÃO DE VIA AÉREA (MALLAMPATI):
   • Mallampati: ( ) I ( ) II ( ) III ( ) IV
   • Abertura oral: ______ cm (normal >3cm)
   • Distância tireo-mentoniana: ______ cm (normal >6cm)
   • Extensão cervical: ( ) Normal ( ) Limitada
   • Dentes: ( ) Íntegros ( ) Prótese ( ) Dentes soltos
   • Barba espessa: ( ) Sim ( ) Não
   • Obesidade cervical: ( ) Sim ( ) Não
   • Preditores de IOT difícil: ( ) Sim ( ) Não

4️⃣ COMORBIDADES — CHECKLIST SISTÊMICO:
   CARDIOVASCULAR:
   • HAS: ( ) Sim — PA habitual: ___x___ mmHg
   • Cardiopatia: ( ) Sim — Qual? _____________
   • ICC: ( ) Sim — NYHA: ( ) I ( ) II ( ) III ( ) IV
   • DAC/IAM prévio: ( ) Sim — Data: __________
   • Stent/CRVM: ( ) Sim — Data: ______________
   • Arritmia: ( ) Sim — Tipo: ________________
   • Marca-passo/CDI: ( ) Sim
   • Valvopatia: ( ) Sim — Qual? ______________
   • Capacidade funcional: ______ METs
     ( ) ≥4 METs (sobe escada, caminha 2 quarteirões)
     ( ) <4 METs — ALTO RISCO

   PULMONAR:
   • Asma/DPOC: ( ) Sim — GOLD: ____
   • Tabagismo: ( ) Sim ____ maços/ano ( ) Ex-tabagista
   • SAOS: ( ) Sim — Usa CPAP: ( ) Sim ( ) Não
   • Espirometria recente: VEF1 ____% CVF ____%

   ENDÓCRINO/METABÓLICO:
   • DM: ( ) Sim — Tipo: ____ HbA1c: ____%
   • Tireoide: ( ) Hipo ( ) Hiper ( ) Eutireoidiano
   • Insuficiência adrenal/corticoide crônico: ( ) Sim
     → Necessita stress dose? ( ) Sim
   • Obesidade: IMC ____

   HEPÁTICO:
   • Hepatopatia: ( ) Sim — Child-Pugh: ( ) A ( ) B ( ) C
   • MELD: ____

   RENAL:
   • DRC: ( ) Sim — TFG: ____ mL/min
   • Diálise: ( ) Sim — Tipo: ____ Último: ___/___

   HEMATOLÓGICO:
   • Coagulopatia: ( ) Sim — Qual? ___________
   • Anticoagulante: ( ) Sim — Qual? __________
     Último uso: ___/___/___ Suspenso: ( ) Sim ( ) Não
   • Antiagregante: ( ) Sim — Qual? ___________
     Último uso: ___/___/___
   • Bridging com heparina: ( ) Sim ( ) Não
   • Anemia: ( ) Sim — Hb: ____

   NEUROLÓGICO:
   • Epilepsia: ( ) Sim ( ) Não
   • AVC prévio: ( ) Sim ( ) Não
   • Doença neuromuscular: ( ) Sim — Qual? _____

5️⃣ MEDICAÇÕES EM USO — MANEJO PERIOPERATÓRIO:
   Medicação        Dose     Manter?  Suspender quando?
   ______________   ______   ( )M ( )S  ________________
   ______________   ______   ( )M ( )S  ________________
   ______________   ______   ( )M ( )S  ________________
   ______________   ______   ( )M ( )S  ________________

   📌 REGRAS GERAIS:
   • MANTER: anti-hipertensivos (exceto IECA/BRA manhã),
     betabloqueadores, estatinas, anticonvulsivantes,
     corticoides, broncodilatadores
   • SUSPENDER: metformina (24-48h), IECA/BRA (dia),
     anticoagulantes (ver protocolo específico),
     AINEs (3-5 dias), fitoterápicos (7 dias)

6️⃣ ALERGIAS:
   • Medicamentos: _________________________
   • Látex: ( ) Sim ( ) Não
   • Iodo/contraste: ( ) Sim ( ) Não
   • Alimentos: ____________________________
   • Tipo de reação: ( ) Anafilaxia ( ) Rash
     ( ) Broncoespasmo ( ) Outra: ____________

7️⃣ JEJUM PRÉ-OPERATÓRIO:
   • Última refeição sólida: ___/___/___ ____:____
   • Último líquido claro: ___/___/___ ____:____
   • Protocolo ASA:
     ☐ Líquidos claros: 2h de jejum
     ☐ Leite materno: 4h
     ☐ Fórmula/leite: 6h
     ☐ Refeição leve: 6h
     ☐ Refeição completa/gordurosa: 8h

8️⃣ CLASSIFICAÇÃO DE RISCO:
   • ASA: ( ) I ( ) II ( ) III ( ) IV ( ) V ( ) VI
   • Índice de Lee (RCRI): ____/6 pontos
     ☐ Cirurgia de alto risco
     ☐ DAC
     ☐ ICC
     ☐ DCV (AVC/AIT)
     ☐ DM insulino-dependente
     ☐ Creatinina >2
   • Risco cardíaco estimado: ____%
   • CAPRINI (risco TEV): ____ pontos
     ( ) Baixo ( ) Moderado ( ) Alto ( ) Muito alto
   • Profilaxia TEV: ( ) Mecânica ( ) Farmacológica ( ) Ambas

9️⃣ CONSENTIMENTO E ORIENTAÇÕES:
   ☐ Paciente informado sobre riscos/benefícios
   ☐ TCLE assinado
   ☐ Reserva de hemoderivados (se necessário)
   ☐ Tipagem sanguínea: ____
   ☐ Exames pré-op revisados e adequados
   ☐ Avaliação cardiológica (se indicada)
   ☐ Profilaxia antibiótica planejada
   ☐ Profilaxia TEV planejada`,
    tips: "A avaliação pré-operatória deve ser proporcional ao porte cirúrgico e às comorbidades. Capacidade funcional ≥4 METs é o principal preditor. Sempre avaliar via aérea (Mallampati), risco de TEV (CAPRINI) e manejo de anticoagulantes. O índice de Lee (RCRI) estratifica risco cardíaco.",
  },
  {
    id: "medicina-esporte",
    title: "Anamnese em Medicina do Esporte",
    emoji: "🏃",
    tags: ["esporte", "atleta", "exercício", "aptidão física"],
    content: `═══════════════════════════════════════
  ANAMNESE EM MEDICINA DO ESPORTE
═══════════════════════════════════════

1️⃣ PERFIL DO ATLETA/PRATICANTE:
   • Modalidade(s) praticada(s): _____________
   • Nível: ( ) Recreativo ( ) Amador ( ) Profissional
     ( ) Alto rendimento ( ) Paradesportivo
   • Tempo de prática: ______ anos/meses
   • Frequência: ______ x/semana
   • Duração do treino: ______ minutos
   • Volume semanal: ______ horas
   • Fase do treinamento:
     ( ) Pré-temporada ( ) Competitivo ( ) Transição
   • Treinador/preparador físico: ( ) Sim ( ) Não
   • Acompanhamento médico prévio: ( ) Sim ( ) Não

2️⃣ HISTÓRIA DE LESÕES ESPORTIVAS:
   Lesão 1:
   • Tipo: _________________________________
   • Local anatômico: ______________________
   • Data: ___/___/___
   • Mecanismo: ( ) Agudo/traumático ( ) Overuse
   • Tratamento: ( ) Conservador ( ) Cirúrgico
   • Tempo de afastamento: __________________
   • Retorno completo: ( ) Sim ( ) Não

   [Repetir para cada lesão]

   • Lesões recorrentes na mesma região: ( ) Sim ( ) Não
   • Concussão prévia: ( ) Sim — Quantas? ____
   • Fratura por estresse: ( ) Sim ( ) Não
   • Entorse recidivante: ( ) Sim ( ) Não

3️⃣ AVALIAÇÃO CARDIOVASCULAR PRÉ-PARTICIPAÇÃO:
   ☐ Já desmaiou durante exercício?
   ☐ Dor no peito durante exercício?
   ☐ Palpitações ou taquicardia durante exercício?
   ☐ Falta de ar desproporcional ao esforço?
   ☐ Cansaço excessivo comparado a colegas?
   ☐ Sopro cardíaco conhecido?
   ☐ Hipertensão arterial?
   ☐ Morte súbita em familiar <50 anos?
   ☐ Familiar com miocardiopatia hipertrófica?
   ☐ Familiar com síndrome de Marfan?
   ☐ Familiar com arritmias (QT longo, Brugada)?

   → Se ≥1 SIM: ECG + avaliação cardiológica obrigatória

4️⃣ TREINAMENTO E CARGA:
   • Tipo predominante: ( ) Aeróbico ( ) Anaeróbico
     ( ) Misto ( ) Força ( ) Flexibilidade
   • Método de controle: ( ) FC ( ) Pace ( ) PSE
     ( ) Potência ( ) GPS ( ) Nenhum
   • FC repouso: ______ bpm
   • FC máxima conhecida: ______ bpm
   • VO2máx estimado/medido: ______ mL/kg/min
   • Periodização: ( ) Linear ( ) Ondulada ( ) Bloco

   SEMANA TÍPICA:
   • Seg: ________________________________
   • Ter: ________________________________
   • Qua: ________________________________
   • Qui: ________________________________
   • Sex: ________________________________
   • Sáb: ________________________________
   • Dom: ________________________________

   • Aquecimento: ( ) Sempre ( ) Às vezes ( ) Nunca
   • Alongamento: ( ) Antes ( ) Após ( ) Ambos ( ) Não
   • Descanso/recovery: ____ dias/semana

5️⃣ NUTRIÇÃO ESPORTIVA:
   • Refeição pré-treino: ___________________
     Tempo antes do treino: ______ min
   • Hidratação durante treino:
     ( ) Água ( ) Isotônico ( ) Nada
     Volume: ______ mL/hora
   • Refeição pós-treino: ___________________
     Tempo após treino: ______ min
   • Suplementos em uso:
     ( ) Whey protein ( ) Creatina ( ) Cafeína
     ( ) BCAA ( ) Beta-alanina ( ) Maltodextrina
     ( ) Vitaminas ( ) Ferro ( ) Outro: _______
   • Substâncias proibidas (WADA):
     ( ) Anabolizantes ( ) Estimulantes ( ) EPO
     ( ) Diuréticos ( ) Hormônios ( ) Nenhuma
   • Peso em competição vs. habitual: ________
   • Faz restrição para peso: ( ) Sim ( ) Não

6️⃣ SAÚDE MUSCULOESQUELÉTICA:
   • Dor atual: ( ) Sim ( ) Não
     Local: ______________ EVA: ____/10
     Piora com: ( ) Treino ( ) Repouso ( ) Movimento específico
   • Instabilidade articular: ( ) Sim — Onde? ___
   • Limitação de ADM: ( ) Sim — Onde? ________
   • Assimetria de força/mobilidade: ( ) Sim ( ) Não
   • Uso de órteses/bandagens: ( ) Sim — Qual? __

   TESTES FUNCIONAIS (marcar resultado):
   • Agachamento unipodal: ( ) Normal ( ) Valgo ( ) Dor
   • Y-Balance Test: Ant ____ PL ____ PM ____
   • FMS Score: ____/21
   • Single Leg Hop: D ____ cm  E ____ cm
     LSI: ____% (normal >90%)

7️⃣ SAÚDE MENTAL DO ATLETA:
   • Motivação atual: ( ) Alta ( ) Moderada ( ) Baixa
   • Burnout/overtraining: ( ) Sim ( ) Não
     Sinais: ( ) Insônia ( ) Irritabilidade ( ) Queda rendimento
     ( ) Infecções frequentes ( ) Perda de apetite
   • Ansiedade pré-competição: ( ) Sim ( ) Não
   • Pressão por resultados: ( ) Sim ( ) Não
   • Imagem corporal: ( ) Adequada ( ) Distorcida
   • Tríade da atleta feminina:
     ☐ Disfunção menstrual
     ☐ Baixa disponibilidade energética (RED-S)
     ☐ Baixa densidade mineral óssea
   • Acompanhamento psicológico: ( ) Sim ( ) Não

8️⃣ SONO E RECUPERAÇÃO:
   • Horas de sono/noite: ______
   • Qualidade: ( ) Boa ( ) Regular ( ) Ruim
   • Cochilos: ( ) Sim — ______ min
   • Métodos de recuperação:
     ( ) Crioterapia ( ) Massagem ( ) Compressão
     ( ) Foam roller ( ) Alongamento ( ) Nenhum

📌 SINAIS DE OVERTRAINING:
• Queda persistente de rendimento >2 semanas
• FC repouso elevada (>5 bpm acima do habitual)
• Variabilidade da FC reduzida
• Infecções de repetição (IVAS)
• Lesões frequentes
• Distúrbios do sono e humor`,
    tips: "A avaliação pré-participação esportiva deve sempre incluir screening cardiovascular (questionário + ECG). Em atletas de alto rendimento, monitorar sinais de overtraining e RED-S. A tríade da atleta feminina é subdiagnosticada e tem consequências graves a longo prazo.",
  },
  {
    id: "dermatologica",
    title: "Anamnese Dermatológica",
    emoji: "🔬",
    tags: ["pele", "lesão", "dermatose", "dermatologia"],
    content: `═══════════════════════════════════════
  ANAMNESE DERMATOLÓGICA COMPLETA
═══════════════════════════════════════

1️⃣ QUEIXA DERMATOLÓGICA PRINCIPAL:
   • Lesão/sintoma: _________________________
   • Localização inicial: ____________________
   • Tempo de evolução: _____________________
   • Evolução: ( ) Estável ( ) Crescendo ( ) Diminuindo
     ( ) Recorrente ( ) Migratória
   • Lesão única ou múltipla: ________________

2️⃣ CARACTERIZAÇÃO DA LESÃO — "7 PERGUNTAS DE OURO":
   1. QUANDO começou? ______________________
   2. ONDE iniciou? (primeiro local) _________
   3. COMO era no início? ___________________
   4. COMO evoluiu? (mudou cor, tamanho, forma?)
      ______________________________________
   5. ESPALHOU? Para onde? __________________
   6. O que PIORA? ( ) Sol ( ) Calor ( ) Frio ( ) Suor
      ( ) Estresse ( ) Alimento ( ) Medicamento
      ( ) Menstruação ( ) Atrito ( ) Outro: ____
   7. O que MELHORA? _______________________

3️⃣ SINTOMAS ASSOCIADOS:
   • Prurido: ( ) Sim — Intensidade: ____/10
     ( ) Localizado ( ) Generalizado
     ( ) Piora à noite ( ) Piora com calor
   • Dor/ardência: ( ) Sim ( ) Não
   • Sangramento: ( ) Sim ( ) Não
   • Secreção: ( ) Sim — Tipo: ( ) Purulenta ( ) Serosa
     ( ) Sanguinolenta ( ) Fétida
   • Descamação: ( ) Sim ( ) Não
   • Alteração de sensibilidade: ( ) Sim ( ) Não
   • Sintomas sistêmicos: ( ) Febre ( ) Artralgia
     ( ) Mal-estar ( ) Emagrecimento ( ) Linfadenopatia

4️⃣ TRATAMENTOS JÁ REALIZADOS:
   • Automedicação: ( ) Sim — O quê? __________
   • Tratamentos tópicos prévios: ____________
   • Tratamentos sistêmicos prévios: _________
   • Procedimentos dermatológicos: ___________
   • Resposta aos tratamentos: _______________
   • Uso de produtos cosméticos na lesão: _____

5️⃣ ANTECEDENTES DERMATOLÓGICOS:
   • Dermatoses prévias: _____________________
   • Atopia (eczema, asma, rinite): ( ) Sim ( ) Não
   • Psoríase: ( ) Sim ( ) Não
   • Vitiligo: ( ) Sim ( ) Não
   • Câncer de pele: ( ) Sim — Tipo: __________
   • Melanoma pessoal/familiar: ( ) Sim ( ) Não
   • Nevos atípicos/displásicos: ( ) Sim ( ) Não
   • Alergia de contato conhecida: ___________
   • Reação a medicamentos cutânea: __________

   HISTÓRIA FAMILIAR DERMATOLÓGICA:
   • Psoríase: ( ) Sim ( ) Não
   • Atopia: ( ) Sim ( ) Não
   • Melanoma: ( ) Sim ( ) Não
   • Outras dermatoses hereditárias: _________

6️⃣ FATORES DE RISCO E EXPOSIÇÃO:
   EXPOSIÇÃO SOLAR:
   • Fototipo (Fitzpatrick):
     ( ) I — Sempre queima, nunca bronzeia
     ( ) II — Sempre queima, bronzeia pouco
     ( ) III — Queima moderado, bronzeia gradual
     ( ) IV — Queima pouco, bronzeia fácil
     ( ) V — Raramente queima, bronzeia muito
     ( ) VI — Nunca queima, pigmentação intensa
   • Exposição solar ocupacional: ( ) Sim ( ) Não
   • Exposição solar recreativa: ( ) Sim ( ) Não
   • Uso de protetor solar: ( ) Diário ( ) Eventual ( ) Não
     FPS: ____ Reaplicação: ( ) Sim ( ) Não
   • Câmara de bronzeamento: ( ) Sim ( ) Não
   • Queimaduras solares graves na infância: ( ) Sim ( ) Não
   • Fotossensibilidade: ( ) Sim ( ) Não

   CONTATO/EXPOSIÇÃO:
   • Produtos químicos: _____________________
   • Cosméticos novos: ______________________
   • Metais (bijuterias, níquel): ( ) Sim ( ) Não
   • Plantas: ( ) Sim ( ) Não
   • Animais de estimação: ( ) Sim — Qual? _____
   • Viagem recente: ( ) Sim — Para onde? ______
   • Contato com pessoa com lesões de pele: ( ) Sim ( ) Não
   • Picada de inseto: ( ) Sim ( ) Não

7️⃣ MEDICAÇÕES E CORRELAÇÃO COM PELE:
   • Medicamentos em uso (listar todos):
     ______________________________________
   • Início de medicação nova antes da lesão:
     ( ) Sim — Qual? ________ Tempo: _________
   • Medicamentos sabidamente causadores:
     ☐ Antibióticos (sulfa, penicilina, quinolona)
     ☐ AINEs
     ☐ Anticonvulsivantes (carbamazepina, fenitoína)
     ☐ Alopurinol
     ☐ Quimioterápicos/imunoterápicos
     ☐ Anti-hipertensivos (IECA — angioedema)

8️⃣ DESCRIÇÃO SEMIOLÓGICA DA LESÃO:
   (Preencher após exame físico dermatológico)

   LESÃO ELEMENTAR:
   ( ) Mácula/Mancha   ( ) Pápula         ( ) Placa
   ( ) Nódulo          ( ) Tumor           ( ) Vesícula
   ( ) Bolha           ( ) Pústula         ( ) Úlcera
   ( ) Erosão          ( ) Fissura         ( ) Escama
   ( ) Crosta          ( ) Cicatriz        ( ) Atrofia
   ( ) Esclerose       ( ) Liquenificação  ( ) Púrpura
   ( ) Petéquia        ( ) Equimose        ( ) Telangiectasia
   ( ) Comedão         ( ) Cisto           ( ) Urtica

   COR: ( ) Eritematosa ( ) Hipocrômica ( ) Hipercrômica
   ( ) Violácea ( ) Amarelada ( ) Acastanhada
   ( ) Enegrecida ( ) Cor da pele

   FORMATO: ( ) Circular ( ) Oval ( ) Irregular
   ( ) Linear ( ) Anular ( ) Serpiginosa ( ) Policíclica

   BORDAS: ( ) Regulares ( ) Irregulares ( ) Elevadas
   ( ) Infiltradas ( ) Peroladas

   SUPERFÍCIE: ( ) Lisa ( ) Rugosa ( ) Verrucosa
   ( ) Vegetante ( ) Ulcerada ( ) Crostosa

   DISTRIBUIÇÃO: ( ) Localizada ( ) Disseminada ( ) Universal
   ( ) Simétrica ( ) Assimétrica ( ) Segmentar
   ( ) Fotodistribuída ( ) Áreas de dobra
   ( ) Acral ( ) Dermatômero

   TAMANHO: ______ x ______ cm

9️⃣ REGRA ABCDE PARA LESÕES MELANOCÍTICAS:
   A — Assimetria: ( ) Sim ( ) Não
   B — Bordas irregulares: ( ) Sim ( ) Não
   C — Cores múltiplas (>2): ( ) Sim ( ) Não
   D — Diâmetro >6mm: ( ) Sim ( ) Não
   E — Evolução/mudança recente: ( ) Sim ( ) Não
   → Se ≥2 positivos: BIÓPSIA EXCISIONAL

   "UGLY DUCKLING SIGN":
   • Lesão diferente de todas as outras? ( ) Sim ( ) Não

📌 DERMATOSCOPIA — ACHADOS CHAVE:
• Rede pigmentada: ( ) Regular ( ) Irregular ( ) Ausente
• Glóbulos: ( ) Regulares ( ) Irregulares
• Estrias: ( ) Regulares ( ) Irregulares
• Véu azul-esbranquiçado: ( ) Presente ( ) Ausente
• Estruturas vasculares: ___________________
• Padrão geral: ___________________________`,
    tips: "Na dermatologia, a anamnese estruturada é metade do diagnóstico. As '7 perguntas de ouro' cobrem 90% dos casos. Sempre pergunte sobre fotossensibilidade, medicamentos novos e contato com irritantes. A regra ABCDE é mandatória para toda lesão melanocítica. Não esqueça: 'se a lesão sangra, muda ou coça de forma diferente — biopsie'.",
  },
  {
    id: "pericia-trabalho",
    title: "Anamnese Pericial — Medicina do Trabalho",
    emoji: "⚖️",
    tags: ["perícia", "medicina do trabalho", "nexo causal", "INSS", "CAT"],
    content: `═══════════════════════════════════════
ANAMNESE PERICIAL — MEDICINA DO TRABALHO
═══════════════════════════════════════

1️⃣ IDENTIFICAÇÃO FUNCIONAL
• Nome completo: ___________________________
• Idade: ____ anos   Sexo: ____________
• CPF: _______________   NIT/PIS: _______________
• Empresa atual: ___________________________
• CNPJ: _______________   CNAE: _______________
• Cargo/Função: ___________________________
• Setor: _______________   CBO: _______________
• Data de admissão: ___/___/___
• Regime: ( ) CLT ( ) Estatutário ( ) Temporário ( ) Outro
• Jornada: ____ h/dia   Turno: _______________
• Salário base: R$ _______________

2️⃣ HISTÓRICO OCUPACIONAL CRONOLÓGICO
Para CADA emprego anterior, registrar:
┌─────────────────────────────────────────────┐
│ Empresa: ________________  Período: ___-___ │
│ Função: ___________________________________ │
│ Riscos: ___________________________________ │
│ EPI utilizados: ___________________________ │
│ ASO periódicos realizados: ( ) Sim ( ) Não  │
│ Afastamentos neste emprego: _______________ │
│ Motivo de saída: __________________________ │
└─────────────────────────────────────────────┘
(Repetir para cada vínculo — mínimo 5 anos ou toda a vida laboral)

3️⃣ DESCRIÇÃO DETALHADA DA ATIVIDADE ATUAL
• Descreva passo a passo as atividades diárias:
  ___________________________________________
• Postura predominante: ( ) Sentado ( ) Em pé ( ) Alternada ( ) Agachado
• Movimentos repetitivos: ( ) Sim — quais: ____________ ( ) Não
• Carga manual: ( ) Sim — peso médio: ____ kg  Freq: ____ x/dia ( ) Não
• Vibração: ( ) Corpo inteiro ( ) Mãos/braços ( ) Ausente
• Ruído: ( ) < 80 dB ( ) 80-85 dB ( ) > 85 dB ( ) Desconhece
• Exposição química: _______________________
  FISPQ disponível: ( ) Sim ( ) Não
• Exposição biológica: _____________________
• Temperaturas extremas: ( ) Calor ( ) Frio ( ) Não
• Radiação: ( ) Ionizante ( ) Não ionizante ( ) Ausente
• Fatores psicossociais: ( ) Pressão por produção ( ) Assédio ( ) Isolamento ( ) Monotonia

4️⃣ EVENTO/DOENÇA EM PERÍCIA
• Data do início dos sintomas: ___/___/___
• Data do afastamento: ___/___/___
• CAT emitida: ( ) Sim — nº ____________ ( ) Não
• Tipo: ( ) Acidente típico ( ) Acidente de trajeto ( ) Doença ocupacional
• CID principal: ____ — Descrição: _______________
• CID secundários: ___________________________
• Descrição detalhada do evento/quadro:
  ___________________________________________

5️⃣ NEXO CAUSAL — CHECKLIST PERICIAL
Critérios para estabelecimento de nexo (todos devem ser avaliados):
☐ Nexo epidemiológico (NTEP): Lista C do Decreto 3.048 — CID × CNAE
☐ Nexo profissional: exposição comprovada ao agente
☐ Nexo cronológico: tempo de exposição compatível
☐ Exclusão de causas extralaborais
☐ Documentação de suporte: ASOs, PPRA/PGR, LTCAT, PCMSO
☐ Exames complementares compatíveis

📌 TIPOS DE NEXO (IN 77/INSS):
• Nexo profissional: doença listada no Anexo II (Lista A/B/C)
• NTEP: nexo técnico epidemiológico (estatístico)
• Nexo individual: quando perito estabelece por evidência clínica

6️⃣ TRATAMENTOS E AFASTAMENTOS PRÉVIOS
• Tratamento atual: _________________________
• Medicações em uso: _______________________
• Cirurgias relacionadas: ___________________
• Reabilitação: ( ) Fisioterapia ( ) TO ( ) Psicologia ( ) Não
• Afastamentos INSS prévios:
  B31 (previdenciário): ( ) Sim — períodos: ____________
  B91 (acidentário): ( ) Sim — períodos: ____________
• Reabilitação profissional INSS: ( ) Sim ( ) Não
• Restrições funcionais atuais: _____________

7️⃣ CAPACIDADE LABORATIVA
• Consegue exercer a função habitual: ( ) Sim ( ) Não ( ) Parcialmente
• Limitações funcionais objetivas: ___________
• Necessidade de readaptação: ( ) Sim ( ) Não
• Sugestão de função compatível: ____________
• Prognóstico funcional: ( ) Favorável ( ) Reservado ( ) Desfavorável
• Previsão de consolidação: ____ dias/meses

8️⃣ DOCUMENTAÇÃO PERICIAL NECESSÁRIA
☐ Atestados médicos com CID e período
☐ Exames complementares (imagem, laboratório)
☐ Relatórios de especialistas
☐ CAT (se acidente/doença do trabalho)
☐ PPRA/PGR e PCMSO da empresa
☐ LTCAT (Laudo Técnico de Condições Ambientais)
☐ ASOs (admissional, periódicos, demissional)
☐ PPP (Perfil Profissiográfico Previdenciário)
☐ Receituários e prescrições`,
    tips: "Na perícia trabalhista, o nexo causal é o ponto central. Documente cronologicamente a exposição, use os critérios do NTEP (Nexo Técnico Epidemiológico) e sempre verifique a Lista C do Decreto 3.048. A CAT deve ser emitida em até 1 dia útil do diagnóstico. Diferencia B31 (auxílio-doença previdenciário) de B91 (acidentário) — este último garante estabilidade de 12 meses.",
  },
  {
    id: "reumatologica",
    title: "Anamnese Reumatológica",
    emoji: "🦴",
    tags: ["reumatologia", "articular", "autoimune", "dor articular"],
    content: `═══════════════════════════════════════
ANAMNESE REUMATOLÓGICA ESTRUTURADA
═══════════════════════════════════════

1️⃣ QUEIXA ARTICULAR — MNEMÔNICO "ARTICULAR"
A — Articulação(ões) acometida(s): _______________
R — Ritmo da dor: ( ) Inflamatório (piora repouso/manhã) ( ) Mecânico (piora movimento/fim do dia)
T — Tempo de evolução: ____ dias/semanas/meses/anos
I — Início: ( ) Agudo (<6 sem) ( ) Crônico (>6 sem) ( ) Insidioso ( ) Súbito
C — Característica: ( ) Aditiva ( ) Migratória ( ) Intermitente ( ) Fixa
U — Uniarticular ( ) Oligoarticular (2-4) ( ) Poliarticular (≥5) ( )
L — Lateralidade: ( ) Simétrica ( ) Assimétrica
A — Associações sistêmicas: ___________________
R — Rigidez matinal: ____ minutos (>30 min → inflamatória)

2️⃣ PADRÃO ARTICULAR — DIAGNÓSTICO DIFERENCIAL
┌──────────────────────────────────────────────┐
│ INFLAMATÓRIO vs MECÂNICO                     │
├──────────────┬───────────────────────────────┤
│ Inflamatório │ Mecânico                      │
├──────────────┼───────────────────────────────┤
│ Rigidez >30m │ Rigidez <15min (protocinética)│
│ Piora repouso│ Piora com uso/sobrecarga      │
│ Edema quente │ Sem sinais flogísticos        │
│ Melhora movim│ Piora ao longo do dia         │
│ PCR/VHS ↑    │ Provas inflamat. normais      │
└──────────────┴───────────────────────────────┘

┌──────────────────────────────────────────────┐
│ DISTRIBUIÇÃO ARTICULAR — Pistas diagnósticas │
├──────────────────────────────────────────────┤
│ IFP + MCF simétrica → Artrite reumatoide    │
│ IFD + 1ª CMC → Osteoartrite                 │
│ 1ª MTF (podagra) → Gota                     │
│ Sacroilíacas + coluna → Espondiloartrite     │
│ Grandes articulações migratória → Febre reum.│
│ Joelhos + punhos + pele → Artrite psoriásica │
└──────────────────────────────────────────────┘

3️⃣ MANIFESTAÇÕES EXTRA-ARTICULARES — CHECKLIST
Pele:
☐ Rash malar (lúpus)
☐ Placas psoriásicas
☐ Nódulos subcutâneos (AR, gota)
☐ Eritema nodoso
☐ Fenômeno de Raynaud
☐ Esclerodactilia / espessamento cutâneo
☐ Fotossensibilidade
☐ Úlceras orais/nasais

Olhos:
☐ Olho seco (Sjögren)
☐ Uveíte anterior (espondiloartrites)
☐ Episclerite/esclerite
☐ Conjuntivite (artrite reativa)

Boca/TGI:
☐ Xerostomia
☐ Disfagia (esclerose sistêmica, miopatias)
☐ Dor abdominal recorrente
☐ Diarreia crônica (enteroartropatias)

Pulmão:
☐ Dispneia progressiva (DPI)
☐ Tosse seca crônica
☐ Derrame pleural

Rim:
☐ Hematúria/proteinúria (nefrite lúpica)
☐ Insuficiência renal

Vascular:
☐ TVP/TEP recorrente (SAF)
☐ Abortos de repetição (SAF)
☐ Livedo reticular

Neurológico:
☐ Neuropatia periférica
☐ Cefaleia/AVC em jovem
☐ Fraqueza muscular proximal (miopatias)

4️⃣ HISTÓRICO REUMATOLÓGICO
• Diagnóstico prévio de doença reumática: ( ) Sim — qual: ____________ ( ) Não
• FAN prévio: ( ) Positivo — padrão/título: ____________ ( ) Negativo ( ) Nunca dosado
• Fator reumatoide: ( ) Positivo ( ) Negativo ( ) Nunca dosado
• Anti-CCP: ( ) Positivo ( ) Negativo ( ) Nunca dosado
• HLA-B27: ( ) Positivo ( ) Negativo ( ) Nunca dosado
• Ácido úrico prévio: ____ mg/dL
• Medicações reumatológicas prévias/atuais:
  ☐ Metotrexato   ☐ Leflunomida   ☐ Sulfassalazina
  ☐ Hidroxicloroquina   ☐ Azatioprina   ☐ Micofenolato
  ☐ Ciclofosfamida   ☐ Biológico — qual: ____________
  ☐ Corticoide — dose: ____ mg/dia  Tempo: ____________
  ☐ Colchicina   ☐ Alopurinol/Febuxostate

5️⃣ CRITÉRIOS DIAGNÓSTICOS RÁPIDOS

ACR/EULAR 2010 — Artrite Reumatoide (≥6/10 pontos):
• Articulações: 1 grande (0) | 1-3 pequenas (2) | 4-10 pequenas (3) | >10 com pelo menos 1 pequena (5)
• Sorologia: FR e Anti-CCP negativos (0) | baixo título (2) | alto título (3)
• Provas inflamatórias: normais (0) | PCR ou VHS elevados (1)
• Duração: <6 semanas (0) | ≥6 semanas (1)

SLICC 2012 — LES (≥4 critérios OU nefrite + FAN/anti-dsDNA):
Clínicos: lúpus cutâneo agudo/crônico, úlceras orais, alopecia, artrite, serosite, renal, neurológico, anemia hemolítica, leucopenia, trombocitopenia
Imunológicos: FAN, anti-dsDNA, anti-Sm, antifosfolípide, complemento baixo, Coombs direto

6️⃣ AVALIAÇÃO FUNCIONAL
• HAQ (Health Assessment Questionnaire): ____/3
• DAS28: ____ (remissão <2,6 | baixa 2,6-3,2 | moderada 3,2-5,1 | alta >5,1)
• BASDAI (espondiloartrite): ____/10
• EVA dor (0-10): ____
• EVA atividade global (médico): ____
• EVA atividade global (paciente): ____
• Capacidade funcional: ( ) Classe I ( ) II ( ) III ( ) IV`,
    tips: "Na reumatologia, distinguir dor INFLAMATÓRIA de MECÂNICA é o primeiro passo. Rigidez matinal >30 min é o marcador clínico mais prático. O padrão articular (distribuição + simetria) direciona 70% dos diagnósticos. Sempre pesquisar manifestações extra-articulares — LES e vasculites são doenças sistêmicas. Anti-CCP é mais específico que FR para AR.",
  },
  {
    id: "saude-mental-infantojuvenil",
    title: "Anamnese em Saúde Mental Infantojuvenil",
    emoji: "🧒",
    tags: ["psiquiatria infantil", "TDAH", "autismo", "adolescente", "saúde mental", "criança"],
    content: `═══════════════════════════════════════
ANAMNESE EM SAÚDE MENTAL INFANTOJUVENIL
═══════════════════════════════════════

1️⃣ IDENTIFICAÇÃO DA CRIANÇA/ADOLESCENTE
• Nome: ___________________________
• Idade: ____ anos e ____ meses
• Sexo: ____________   Gênero: ____________
• Escolaridade: ____ ano do ____________
• Escola: ( ) Pública ( ) Privada
• Nome: ___________________________
• Informante: ____________ (parentesco: ____________)
• Responsável legal: ___________________________
• Quem mora com a criança: ___________________________

2️⃣ QUEIXA PRINCIPAL E HDA
• Motivo do encaminhamento: ___________________________
• Quem encaminhou: ( ) Escola ( ) Pediatra ( ) Família ( ) Conselho tutelar ( ) Outro
• Queixa nas palavras do responsável: "___________________________"
• Queixa nas palavras da criança/adolescente (se aplicável): "___________________________"
• Início dos sintomas: ___________________________
• Evolução: ( ) Progressiva ( ) Estável ( ) Flutuante ( ) Episódica
• Fatores desencadeantes: ___________________________
• Tratamentos prévios em saúde mental:
  ☐ Psicólogo — tempo: ____________ Abordagem: ____________
  ☐ Psiquiatra — medicações: ___________________________
  ☐ Fonoaudiólogo   ☐ Terapeuta ocupacional   ☐ Neuropediatra
  ☐ Nenhum tratamento prévio

3️⃣ DESENVOLVIMENTO NEUROPSICOMOTOR (DNPM)
Gestação e parto:
• Pré-natal: ( ) Completo ( ) Incompleto ( ) Sem pré-natal
• Intercorrências gestacionais: ___________________________
• Parto: ( ) Vaginal ( ) Cesárea   IG: ____ semanas
• Peso ao nascer: ____ g   Apgar: ____/____
• Intercorrências neonatais: ( ) UTI neo ( ) Icterícia ( ) Infecção ( ) Não

Marcos do desenvolvimento:
• Sustento cefálico: ____ meses (esperado: 3m)
• Sentou sem apoio: ____ meses (esperado: 6-9m)
• Andou: ____ meses (esperado: 12-18m)
• Primeiras palavras: ____ meses (esperado: 12m)
• Frases: ____ meses (esperado: 24m)
• Controle esfincteriano diurno: ____ meses  Noturno: ____ meses
• Lateralidade definida: ( ) Destro ( ) Canhoto ( ) Indefinida

📌 SINAIS DE ALERTA NO DNPM:
⚠️ Não balbucia aos 12 meses
⚠️ Não aponta/não faz gestos aos 12 meses
⚠️ Nenhuma palavra aos 16 meses
⚠️ Nenhuma frase de 2 palavras aos 24 meses
⚠️ Perda de qualquer habilidade em qualquer idade

4️⃣ RASTREIO TEA (Transtorno do Espectro Autista)
Comunicação social:
☐ Contato visual pobre ou atípico
☐ Não responde ao nome
☐ Não aponta para compartilhar interesse
☐ Dificuldade em brincadeiras de faz-de-conta
☐ Dificuldade em entender sentimentos dos outros
☐ Linguagem ecolálica ou peculiar
☐ Dificuldade em conversação recíproca

Padrões restritos/repetitivos:
☐ Interesses intensos e restritos
☐ Estereotipias motoras (flapping, girar)
☐ Adesão rígida a rotinas
☐ Hiper ou hiporreatividade sensorial
☐ Alinhamento/organização de objetos

Nível de suporte necessário:
( ) Nível 1 — necessita suporte
( ) Nível 2 — necessita suporte substancial
( ) Nível 3 — necessita suporte muito substancial

M-CHAT-R (18-24 meses): ____/20 (risco ≥3)

5️⃣ RASTREIO TDAH
Desatenção (≥6/9 para diagnóstico, ≥5 em >17 anos):
☐ Não presta atenção a detalhes / erros por descuido
☐ Dificuldade em manter atenção em tarefas
☐ Parece não ouvir quando falam diretamente
☐ Não segue instruções / não termina tarefas
☐ Dificuldade em organizar tarefas
☐ Evita tarefas que exigem esforço mental prolongado
☐ Perde coisas necessárias para as atividades
☐ Facilmente distraído por estímulos externos
☐ Esquecido nas atividades diárias
Total: ____/9

Hiperatividade/Impulsividade (≥6/9, ≥5 em >17 anos):
☐ Remexe mãos/pés ou se contorce na cadeira
☐ Levanta da cadeira quando deveria ficar sentado
☐ Corre/escala em situações inapropriadas
☐ Dificuldade em brincar calmamente
☐ "A mil" / "ligado no motor"
☐ Fala excessivamente
☐ Responde antes da pergunta ser completada
☐ Dificuldade em esperar sua vez
☐ Interrompe ou se intromete
Total: ____/9

Apresentação: ( ) Predominante desatenta ( ) Predominante hiperativa-impulsiva ( ) Combinada
Sintomas presentes ANTES dos 12 anos: ( ) Sim ( ) Não
Prejuízo em ≥2 ambientes: ( ) Sim — quais: ____________ ( ) Não

6️⃣ RASTREIO TRANSTORNOS EMOCIONAIS
Ansiedade:
☐ Preocupação excessiva com diversas situações
☐ Medos específicos intensos (fobias)
☐ Ansiedade de separação (não adequada à idade)
☐ Recusa escolar
☐ Queixas somáticas (dor de barriga, cefaleia)
☐ Rituais/compulsões (TOC)
☐ Ataques de pânico
Escala: SCARED ____/41 (ponto de corte ≥25)

Depressão:
☐ Humor irritável ou triste persistente (≥2 semanas)
☐ Perda de interesse em atividades prazerosas
☐ Isolamento social
☐ Alteração do sono
☐ Alteração do apetite/peso
☐ Fadiga/diminuição de energia
☐ Culpa excessiva / baixa autoestima
☐ Dificuldade de concentração
☐ Pensamentos de morte/ideação suicida
PHQ-A: ____/27 (leve 5-9 | moderada 10-14 | grave ≥15)

⚠️ AVALIAÇÃO DE RISCO — OBRIGATÓRIA em >10 anos:
• Ideação suicida: ( ) Sim ( ) Não
• Plano: ( ) Sim ( ) Não
• Tentativa prévia: ( ) Sim — quando: ____________ ( ) Não
• Autolesão não suicida: ( ) Sim ( ) Não
• Acesso a meios letais: ( ) Sim ( ) Não

7️⃣ CONTEXTO ESCOLAR
• Rendimento acadêmico: ( ) Adequado ( ) Dificuldade leve ( ) Dificuldade significativa ( ) Reprovação
• Reprovações: ( ) Sim — quantas/séries: ____________ ( ) Não
• Relação com colegas: ( ) Boa ( ) Regular ( ) Conflituosa ( ) Isolamento
• Bullying: ( ) Vítima ( ) Autor ( ) Ambos ( ) Não
• Laudo/apoio escolar: ( ) Sim ( ) Não ( ) Em processo
• Queixas da escola: ___________________________

8️⃣ DINÂMICA FAMILIAR E FATORES DE RISCO
• Estrutura familiar: ___________________________
• Relação entre pais: ( ) Estável ( ) Conflituosa ( ) Separados ( ) Ausente
• Conflitos familiares significativos: ___________________________
• História familiar psiquiátrica:
  ☐ TDAH   ☐ TEA   ☐ Depressão   ☐ Bipolar
  ☐ Esquizofrenia   ☐ Ansiedade   ☐ Uso de substâncias
  ☐ Suicídio na família
  Quem: ___________________________

Fatores de risco:
☐ Violência doméstica (física/psicológica/sexual)
☐ Negligência
☐ Uso de substâncias pelos pais
☐ Institucionalização/acolhimento
☐ Situação socioeconômica precária
☐ Luto recente
☐ Mudança significativa de ambiente

9️⃣ TELAS E SONO (AVALIAÇÃO MODERNA)
Telas:
• Tempo de tela diário: ____ h/dia
• Dispositivos: ☐ Celular ☐ Tablet ☐ TV ☐ Computador ☐ Videogame
• Acesso a redes sociais: ( ) Sim — quais: ____________ ( ) Não
• Conteúdo inapropriado: ( ) Sim ( ) Não ( ) Desconhece
• Cyberbullying: ( ) Sim ( ) Não

📌 Recomendações SBP para telas:
• <2 anos: EVITAR
• 2-5 anos: máx. 1h/dia
• 6-10 anos: máx. 1-2h/dia
• 11-18 anos: máx. 2-3h/dia

Sono:
• Horário de dormir: ____h  Acordar: ____h
• Dorme sozinho: ( ) Sim ( ) Não
• Dificuldade para adormecer: ( ) Sim ( ) Não
• Despertares noturnos: ( ) Sim ( ) Não
• Pesadelos/terror noturno: ( ) Sim ( ) Não
• Usa tela antes de dormir: ( ) Sim ( ) Não

🔟 USO DE SUBSTÂNCIAS (ADOLESCENTES)
CRAFFT/CESARE:
☐ C — Já andou em CARRO dirigido por alguém (ou você) sob efeito?
☐ R — Usa para RELAXAR ou se sentir melhor?
☐ A — Usa quando está ALONE (sozinho)?
☐ F — FORGET (esquece) o que fez sob efeito?
☐ F — Família/FRIENDS dizem para parar?
☐ T — Já se meteu em TROUBLE (problema) por uso?
Score: ____/6 (≥2 → risco)

Substâncias experimentadas:
☐ Álcool — idade de início: ____
☐ Tabaco/vape — idade de início: ____
☐ Maconha — idade de início: ____
☐ Inalantes — idade de início: ____
☐ Outras: ___________________________`,
    tips: "Na psiquiatria infantojuvenil, SEMPRE colher história com múltiplos informantes (pais, escola, criança). TDAH exige sintomas em ≥2 ambientes e início antes dos 12 anos. Para TEA, investigar ativamente em toda criança com atraso de linguagem/socialização. A avaliação de risco suicida é OBRIGATÓRIA em adolescentes com queixas emocionais. O M-CHAT-R é rastreio, não diagnóstico. Tempo de tela é fator de risco emergente para ansiedade e TDAH-like.",
  },
  {
    id: "pre-hospitalar-samu",
    title: "Anamnese Pré-Hospitalar (SAMU/APH)",
    emoji: "🚑",
    tags: ["SAMU", "pré-hospitalar", "APH", "emergência", "resgate", "SAMPLE", "ABCDE"],
    content: `═══════════════════════════════════════
ANAMNESE PRÉ-HOSPITALAR — SAMU / APH
═══════════════════════════════════════

1️⃣ DADOS DA OCORRÊNCIA
• Data: ___/___/___   Hora do chamado: ____:____
• Hora chegada à cena: ____:____
• Hora saída da cena: ____:____
• Hora chegada ao hospital: ____:____
• Local: ___________________________
• Tipo de ocorrência: ( ) Clínico ( ) Trauma ( ) Psiquiátrico ( ) Obstétrico ( ) Pediátrico
• USA ( ) ou USB ( )   Equipe: ___________________________
• Regulação médica: Dr(a). ___________________________

2️⃣ AVALIAÇÃO PRIMÁRIA — ABCDE
A — VIA AÉREA (com controle cervical no trauma):
• Perviedade: ( ) Livre ( ) Obstruída parcial ( ) Obstruída total
• Colar cervical: ( ) Sim ( ) Não ( ) N/A
• Manobra realizada: ( ) Chin-lift ( ) Jaw-thrust ( ) Aspiração ( ) Cânula orofaríngea ( ) IOT
• Cânula nº: ____   IOT tubo nº: ____  Fixação: ____ cm

B — VENTILAÇÃO:
• FR: ____ irpm   SpO2: ____%   FiO2: ____%
• Padrão: ( ) Normal ( ) Taquipneia ( ) Bradipneia ( ) Apneia ( ) Dispneia
• Ausculta: ( ) MV bilateral ( ) Reduzido em ____ ( ) Abolido em ____
• Desvio traqueal: ( ) Sim ( ) Não
• Enfisema subcutâneo: ( ) Sim ( ) Não
• Suporte: ( ) O2 cateter ____ L/min ( ) Máscara ____ L/min ( ) BVM ( ) VM

C — CIRCULAÇÃO:
• FC: ____ bpm   PA: ____x____ mmHg
• Pulso: ( ) Cheio ( ) Filiforme ( ) Ausente
• Perfusão periférica: ( ) <2s ( ) 2-4s ( ) >4s
• Pele: ( ) Corada ( ) Pálida ( ) Cianótica ( ) Fria ( ) Úmida
• Sangramento externo: ( ) Sim — local: ____________ Controle: ____________ ( ) Não
• Acesso venoso: ( ) Periférico ____G  MSE/MSD ( ) IO ( ) Não obtido
• Volume infundido: SF 0,9% ____ mL   RL ____ mL
• Drogas vasoativas: ___________________________

D — DÉFICIT NEUROLÓGICO:
• Glasgow: AO (__) + RV (__) + RM (__) = ____/15
• Pupilas: ( ) Isocóricas ( ) Anisocóricas   D: ____ mm  E: ____ mm
• Fotorreagentes: ( ) Sim ( ) Não
• Lateralização motora: ( ) Sim — lado: ____ ( ) Não
• Glicemia capilar: ____ mg/dL
• Convulsão: ( ) Sim — duração: ____ min ( ) Não

E — EXPOSIÇÃO:
• Temperatura: ____°C
• Lesões identificadas: ___________________________
• Hipotermia prevenida: ( ) Sim ( ) N/A

3️⃣ MNEMÔNICO SAMPLE / AMPLE
S — Sinais e Sintomas: ___________________________
A — Alergias: ___________________________
M — Medicações em uso: ___________________________
P — Passado médico (doenças prévias): ___________________________
L — Last meal (última refeição): ____h atrás
E — Eventos relacionados: ___________________________

4️⃣ AVALIAÇÃO ESPECÍFICA POR CENÁRIO

TRAUMA — Cinemática:
• Mecanismo: ( ) Colisão auto ( ) Moto ( ) Atropelamento ( ) Queda ____ m
  ( ) FAB ( ) FAF ( ) Agressão ( ) Esmagamento ( ) Queimadura
• Uso de cinto: ( ) Sim ( ) Não   Airbag: ( ) Sim ( ) Não
• Ejeção do veículo: ( ) Sim ( ) Não
• Óbito no veículo: ( ) Sim ( ) Não
• Deformidade do veículo: ___________________________
• Tempo de extricação: ____ min

Escala de Trauma:
• RTS (Revised Trauma Score): ____ (GCS + PAS + FR)
• START (triagem múltiplas vítimas): ( ) Verde ( ) Amarelo ( ) Vermelho ( ) Preto

CLÍNICO — Dor torácica:
• Início: ____h   Duração: ____ min
• Caráter: ( ) Opressiva ( ) Pontada ( ) Queimação
• Irradiação: ___________________________
• ECG 12 derivações: ( ) Realizado ( ) Não disponível
  Achado: ___________________________

PCR:
• Ritmo inicial: ( ) FV ( ) TVSP ( ) AESP ( ) Assistolia
• Hora da PCR: ____:____   RCE: ( ) Sim ____:____ ( ) Não
• Ciclos de RCP: ____   Choques: ____
• Drogas: Adrenalina ____ mg (____x)   Amiodarona ____ mg (____x)

5️⃣ ESCALA DE COMA DE GLASGOW (detalhada)
┌──────────────────────────────────────┐
│ ABERTURA OCULAR           Pontos    │
│ Espontânea                   4      │
│ Ao estímulo verbal           3      │
│ À pressão/dor                2      │
│ Ausente                      1      │
├──────────────────────────────────────┤
│ RESPOSTA VERBAL                     │
│ Orientada                    5      │
│ Confusa                      4      │
│ Palavras inapropriadas       3      │
│ Sons incompreensíveis        2      │
│ Ausente                      1      │
├──────────────────────────────────────┤
│ RESPOSTA MOTORA                     │
│ Obedece comandos             6      │
│ Localiza dor                 5      │
│ Retirada (flexão normal)     4      │
│ Flexão anormal (decorticação)3      │
│ Extensão (descerebração)     2      │
│ Ausente                      1      │
└──────────────────────────────────────┘
• Reatividade pupilar: -0 (bilateral) / -1 (unilateral) / -2 (ausente)
• Glasgow-P = GCS - Reatividade pupilar = ____

6️⃣ PASSAGEM DE CASO (HANDOFF — ISBAR)
I — Identificação: ___________________________
S — Situação: ___________________________
B — Background (antecedentes): ___________________________
A — Avaliação (achados): ___________________________
R — Recomendação (conduta sugerida): ___________________________

Destino: Hospital ___________________________
Setor: ( ) Sala vermelha ( ) Sala amarela ( ) CC ( ) Outro`,
    tips: "No APH, rapidez e sistematização são vitais. O ABCDE deve ser completado em <2 min na avaliação primária. SAMPLE é colhido simultaneamente (equipe). A cinemática do trauma prediz 90% das lesões — sempre documentar mecanismo. Use ISBAR no handoff para o hospital. Documente TODOS os horários (chamado, chegada, saída, hospital). Glasgow-P (com pupilas) é o padrão atual.",
  },
  {
    id: "medicina-legal",
    title: "Anamnese em Medicina Legal",
    emoji: "🔍",
    tags: ["medicina legal", "perícia", "IML", "lesão corporal", "corpo de delito", "laudo"],
    content: `═══════════════════════════════════════
ANAMNESE EM MEDICINA LEGAL / PERÍCIA
═══════════════════════════════════════

1️⃣ IDENTIFICAÇÃO DO PERICIANDO
• Nome: ___________________________
• Idade: ____ anos   DN: ___/___/___
• Sexo: ____________   Estado civil: ____________
• Profissão: ___________________________
• RG: _______________   CPF: _______________
• Endereço: ___________________________
• Naturalidade: ____________   Nacionalidade: ____________

Dados do exame:
• Data/hora do exame: ___/___/___ ____:____
• Local do exame: ( ) IML ( ) Hospital ( ) Delegacia ( ) Outro
• Requisição: BO nº ____________   Delegacia: ____________
• Autoridade requisitante: ___________________________
• Perito responsável: ___________________________
• Acompanhante presente: ( ) Sim — quem: ____________ ( ) Não

2️⃣ HISTÓRICO DO EVENTO (versão do periciando)
• Data e hora do evento: ___/___/___ ____:____
• Local da ocorrência: ___________________________
• Descrição dos fatos (palavras do periciando):
  "___________________________________________
   ___________________________________________"
• Agressor(es): ( ) Conhecido ( ) Desconhecido ( ) Não se aplica
• Instrumento/meio utilizado (referido): ___________________________
• Número de golpes/agressões referidos: ____
• Perda de consciência: ( ) Sim — duração: ____________ ( ) Não
• Atendimento médico prévio: ( ) Sim — local: ____________ ( ) Não
• Tempo decorrido entre evento e exame: ____h/dias

3️⃣ EXAME PERICIAL — LESÕES CORPORAIS
Classificação das lesões:
┌────────────────────────────────────────────────┐
│ NATUREZA DA LESÃO                              │
├────────────────────────────────────────────────┤
│ ( ) Escoriação   ( ) Equimose   ( ) Hematoma   │
│ ( ) Ferida contusa   ( ) Ferida incisa         │
│ ( ) Ferida perfurante   ( ) Ferida corto-contusa│
│ ( ) Ferida perfuro-contusa   ( ) Ferida LAB    │
│ ( ) Queimadura (____ grau, ____% SCQ)          │
│ ( ) Fratura   ( ) Luxação   ( ) Entorse        │
│ ( ) Mordedura   ( ) Marca de ligadura          │
│ ( ) Sem lesão aparente                         │
└────────────────────────────────────────────────┘

Descrição topográfica (para CADA lesão):
Lesão nº ____:
• Tipo: ___________________________
• Localização anatômica: ___________________________
• Dimensões: ____ x ____ cm
• Coloração (equimose): ___________________________
• Bordas: ( ) Regulares ( ) Irregulares ( ) Escoriadas
• Profundidade: ( ) Superficial ( ) Profunda ( ) Transfixante
• Vitalidade: ( ) Vital (ante-mortem) ( ) Avital (post-mortem)
• Instrumento compatível: ___________________________

📌 CRONOLOGIA DAS EQUIMOSES (Espectro de Legrand du Saulle):
• Vermelho-violáceo: 1-3 dias
• Azulado: 3-6 dias
• Esverdeado: 7-12 dias
• Amarelado: 12-20 dias
• Desaparecimento: 15-25 dias

4️⃣ QUALIFICAÇÃO JURÍDICA DA LESÃO (Art. 129 CP)
Lesão corporal LEVE (caput):
• Ofensa à integridade corporal/saúde sem gravidade

Lesão corporal GRAVE (§1º):
☐ Incapacidade para ocupações habituais >30 dias
☐ Perigo de vida
☐ Debilidade permanente de membro, sentido ou função
☐ Aceleração de parto

Lesão corporal GRAVÍSSIMA (§2º):
☐ Incapacidade permanente para o trabalho
☐ Enfermidade incurável
☐ Perda ou inutilização de membro, sentido ou função
☐ Deformidade permanente
☐ Aborto

Lesão corporal seguida de MORTE (§3º)

5️⃣ EXAMES ESPECÍFICOS POR TIPO DE PERÍCIA

VIOLÊNCIA SEXUAL:
⚠️ Coleta de vestígios em até 72h (ideal <24h)
• Vestimenta: ( ) Íntegra ( ) Danificada — descrição: ____________
• Região genital:
  Grandes lábios: ___________________________
  Pequenos lábios: ___________________________
  Hímen: ( ) Íntegro ( ) Rotura — posição: ____h
    Rotura: ( ) Recente (<10 dias) ( ) Cicatrizada ( ) Complacente
  Fúrcula: ___________________________
  Períneo: ___________________________
• Região anal:
  Pregueamento: ( ) Preservado ( ) Apagado
  Tônus esfincteriano: ( ) Normal ( ) Diminuído
  Fissuras: ( ) Sim — posição: ____h ( ) Não
  Sinal de Lacassagne: ( ) Presente ( ) Ausente
• Coleta de material:
  ☐ Swab vaginal   ☐ Swab anal   ☐ Swab oral
  ☐ Raspado subungueal   ☐ Fio de cabelo/pelo
  ☐ Sangue para DNA   ☐ Urina (toxicológico)
  ☐ Preservativo/material biológico

EMBRIAGUEZ ALCOÓLICA:
• Etilômetro: ____ mg/L (limite legal: 0,05 mg/L para direção)
• Sinais clínicos:
  ☐ Hálito etílico   ☐ Fala pastosa   ☐ Marcha atáxica
  ☐ Olhos avermelhados   ☐ Desorientação
  ☐ Agressividade   ☐ Sonolência
• Coleta de sangue para alcoolemia: ( ) Sim ( ) Recusa

LESÃO POR ARMA DE FOGO:
• Orifício de entrada:
  Localização: ___________________________
  Dimensão: ____ cm   Forma: ( ) Circular ( ) Oval ( ) Irregular
  Orla de escoriação: ( ) Sim ( ) Não
  Tatuagem: ( ) Sim ( ) Não
  Zona de esfumaçamento: ( ) Sim ( ) Não
  Zona de chamuscamento: ( ) Sim ( ) Não
• Distância estimada do disparo:
  ( ) Encostado (sinal de Werkgärtner)
  ( ) Curta distância (<15cm — tatuagem)
  ( ) Média distância (esfumaçamento)
  ( ) Longa distância (apenas orla)
• Orifício de saída: ( ) Presente — local: ____________ ( ) Ausente
• Trajeto: ___________________________

6️⃣ ANTECEDENTES RELEVANTES PARA PERÍCIA
• Lesões/cirurgias preexistentes na região: ___________________________
• Doenças que afetam cicatrização: ___________________________
• Uso de anticoagulantes: ( ) Sim ( ) Não
• Distúrbios de coagulação: ( ) Sim ( ) Não
• Lesões autoinfligidas prévias: ( ) Sim ( ) Não

7️⃣ CONCLUSÃO PERICIAL (estrutura)
• Há lesão corporal: ( ) Sim ( ) Não
• Instrumento/meio produtor: ___________________________
• Qualificação: ( ) Leve ( ) Grave ( ) Gravíssima
• Nexo causal com o evento: ( ) Sim ( ) Não ( ) Inconclusivo
• Necessidade de exame complementar: ( ) Sim — qual: ____________ ( ) Não
• Data para retorno (se necessário): ___/___/___`,
    tips: "Na medicina legal, DESCREVA com precisão topográfica e métrica — nunca interprete a causa na descrição. Use linguagem técnica padronizada (ferida incisa, não 'corte'). A cronologia das equimoses é estimativa, não exata. Em violência sexual, priorize coleta de vestígios (<72h). O perito responde aos QUESITOS — não extrapole. Fotografe todas as lesões com régua métrica. Equimoses em crianças em áreas não proeminentes são red flags para maus-tratos.",
  },
  {
    id: "idoso-institucionalizado",
    title: "Anamnese — Idoso Institucionalizado (ILPI)",
    emoji: "🏥",
    tags: ["geriatria", "ILPI", "institucionalizado", "idoso", "cuidados prolongados", "funcionalidade"],
    content: `═══════════════════════════════════════
ANAMNESE DO IDOSO INSTITUCIONALIZADO (ILPI)
═══════════════════════════════════════

1️⃣ IDENTIFICAÇÃO E CONTEXTO INSTITUCIONAL
• Nome: ___________________________
• Idade: ____ anos   DN: ___/___/___
• Sexo: ____________
• Estado civil: ____________
• Escolaridade: ____________
• Profissão pregressa: ___________________________
• Religião: ____________
• ILPI: ___________________________
• Data de admissão na ILPI: ___/___/___
• Motivo da institucionalização:
  ( ) Ausência de cuidador familiar
  ( ) Dependência funcional grave
  ( ) Demência avançada
  ( ) Decisão do idoso
  ( ) Negligência/abandono
  ( ) Questão financeira
  ( ) Outro: ___________________________
• Recebe visitas: ( ) Sim — frequência: ____________ ( ) Não
• Responsável legal/contato: ___________________________
• Curatela: ( ) Sim ( ) Não ( ) Em processo

2️⃣ AVALIAÇÃO GERIÁTRICA AMPLA (AGA) — RESUMIDA

FUNCIONALIDADE — Atividades Básicas (Katz):
☐ Banho: ( ) Independente ( ) Ajuda parcial ( ) Dependente
☐ Vestir: ( ) Independente ( ) Ajuda parcial ( ) Dependente
☐ Toilete: ( ) Independente ( ) Ajuda parcial ( ) Dependente
☐ Transferência: ( ) Independente ( ) Ajuda parcial ( ) Dependente
☐ Continência: ( ) Continente ( ) Incontinente ocasional ( ) Incontinente
☐ Alimentação: ( ) Independente ( ) Ajuda parcial ( ) Dependente
Katz: ____/6

FUNCIONALIDADE — Atividades Instrumentais (Lawton):
☐ Telefone: 3 ( ) 2 ( ) 1 ( )
☐ Compras: 3 ( ) 2 ( ) 1 ( )
☐ Preparo de refeições: 3 ( ) 2 ( ) 1 ( )
☐ Tarefas domésticas: 3 ( ) 2 ( ) 1 ( )
☐ Lavanderia: 3 ( ) 2 ( ) 1 ( )
☐ Transporte: 3 ( ) 2 ( ) 1 ( )
☐ Medicações: 3 ( ) 2 ( ) 1 ( )
☐ Finanças: 3 ( ) 2 ( ) 1 ( )
Lawton: ____/27

COGNIÇÃO:
• MEEM: ____/30 (corte: analfabeto ≥20 | 1-4 anos ≥25 | 5-8 anos ≥26 | >8 anos ≥28)
• Teste do relógio: ____/5
• Fluência verbal (animais/1min): ____ (normal ≥12)
• Diagnóstico cognitivo:
  ( ) Normal para idade
  ( ) Comprometimento cognitivo leve (CCL)
  ( ) Demência leve ( ) Demência moderada ( ) Demência avançada
• Tipo: ( ) Alzheimer ( ) Vascular ( ) Mista ( ) Corpos de Lewy ( ) Frontotemporal ( ) Outro
• CDR (Clinical Dementia Rating): ____

HUMOR:
• GDS-15 (Geriatric Depression Scale): ____/15
  Normal: 0-5 | Depressão leve: 6-10 | Grave: 11-15
• Sintomas comportamentais: ( ) Agitação ( ) Apatia ( ) Agressividade
  ( ) Perambulação ( ) Sundowning ( ) Gritos ( ) Desinibição

3️⃣ AVALIAÇÃO NUTRICIONAL
• Peso: ____ kg   Altura: ____ m   IMC: ____ kg/m²
  (Idoso: baixo peso <22 | eutrófico 22-27 | sobrepeso >27)
• Circunferência da panturrilha: ____ cm (depleção <31 cm)
• Circunferência do braço: ____ cm
• MNA-SF (Mini Nutritional Assessment Short Form): ____/14
  Normal ≥12 | Risco de desnutrição 8-11 | Desnutrido ≤7
• Via de alimentação: ( ) Oral ( ) SNE ( ) Gastrostomia ( ) Parenteral
• Consistência: ( ) Livre ( ) Branda ( ) Pastosa ( ) Líquida espessada
• Suplementação: ( ) Sim — qual: ____________ ( ) Não
• Disfagia: ( ) Sim — grau: ____________ ( ) Não
• Hidratação: ____ mL/dia estimado

4️⃣ MOBILIDADE E RISCO DE QUEDAS
• Deambulação: ( ) Independente ( ) Com auxílio — qual: ____________ ( ) Cadeirante ( ) Acamado
• Timed Up and Go (TUG): ____ segundos
  Normal <10s | Risco moderado 10-20s | Alto risco >20s
• Teste de Tinetti: Equilíbrio ____/16 + Marcha ____/12 = ____/28
  Alto risco de queda <19
• Histórico de quedas (último ano): ____ quedas
• Última queda: ___/___/___  Consequência: ___________________________
• Fraturas prévias por fragilidade: ___________________________
• Medo de cair: ( ) Sim ( ) Não
• Contenção física: ( ) Sim — tipo: ____________ ( ) Não

Fatores de risco para queda:
☐ Hipotensão ortostática (PA deitado vs em pé)
☐ Polifarmácia (≥5 medicamentos)
☐ Uso de psicotrópicos/benzodiazepínicos
☐ Déficit visual
☐ Déficit auditivo
☐ Calçado inadequado
☐ Ambiente institucional inadequado

5️⃣ SÍNDROMES GERIÁTRICAS — 7 Is
☐ Imobilidade: ( ) Presente — grau: ____________ ( ) Ausente
☐ Instabilidade postural: ( ) Presente ( ) Ausente
☐ Incontinência urinária: ( ) Urgência ( ) Esforço ( ) Mista ( ) Funcional ( ) Ausente
  Incontinência fecal: ( ) Presente ( ) Ausente
☐ Insuficiência cognitiva: ( ) Presente — ver AGA ( ) Ausente
☐ Iatrogenia: medicações potencialmente inapropriadas (Beers/STOPP):
  ___________________________
☐ Isolamento social: ( ) Sim ( ) Não
  Participação em atividades da ILPI: ( ) Sim ( ) Recusa ( ) Impossibilitado
☐ Insuficiência familiar: ( ) Presente ( ) Ausente

6️⃣ POLIFARMÁCIA E RECONCILIAÇÃO MEDICAMENTOSA
Medicações em uso (com horários):
┌──────────────────────────────────────────────────┐
│ Medicamento  │ Dose  │ Via │ Horário │ Indicação │
├──────────────┼───────┼─────┼─────────┼───────────┤
│              │       │     │         │           │
│              │       │     │         │           │
│              │       │     │         │           │
│              │       │     │         │           │
│              │       │     │         │           │
└──────────────┴───────┴─────┴─────────┴───────────┘
• Total de medicamentos: ____
• Polifarmácia: ( ) Sim (≥5) ( ) Não
• Critérios de Beers aplicados: ___________________________
• Medicamentos potencialmente inapropriados identificados:
  ___________________________
• Cascata medicamentosa identificada: ( ) Sim ( ) Não
• Desprescrição sugerida: ___________________________

7️⃣ INTEGRIDADE CUTÂNEA E ÚLCERAS POR PRESSÃO
• Escala de Braden: ____/23
  Alto risco ≤12 | Risco moderado 13-14 | Risco baixo 15-18 | Sem risco ≥19
• Úlceras de pressão atuais:
  Local: ____________ Estágio: ____ Dimensão: ____x____cm
  Local: ____________ Estágio: ____ Dimensão: ____x____cm
• Superfície de apoio: ( ) Colchão comum ( ) Pneumático ( ) Piramidal ( ) Outro
• Reposicionamento: a cada ____ horas
• Dermatite associada à incontinência: ( ) Sim ( ) Não

Classificação das úlceras por pressão:
• Estágio 1: Eritema não branqueável
• Estágio 2: Perda parcial da espessura da pele
• Estágio 3: Perda total da espessura da pele
• Estágio 4: Perda total com exposição de osso/tendão
• Não classificável: base coberta por escara/esfacelo

8️⃣ DIRETIVAS ANTECIPADAS DE VONTADE (DAV)
• DAV registradas: ( ) Sim ( ) Não ( ) Em discussão
• Preferências documentadas:
  Reanimação cardiopulmonar: ( ) Sim ( ) Não
  Intubação orotraqueal/VM: ( ) Sim ( ) Não
  Diálise: ( ) Sim ( ) Não
  Nutrição artificial (SNE/gastro): ( ) Sim ( ) Não
  Internação hospitalar: ( ) Sim ( ) Não
  Sedação paliativa: ( ) Sim ( ) Não
• Nível de intervenção definido: ( ) Pleno ( ) Limitado ( ) Conforto
• Decisor substituto designado: ___________________________
• Paliação indicada: ( ) Sim ( ) Não ( ) Em discussão

9️⃣ PLANO DE CUIDADOS INTERDISCIPLINAR
• Médico responsável: ___________________________
• Enfermagem: ___________________________
• Fisioterapia: ( ) Sim — freq: ____________ ( ) Não
• Terapia ocupacional: ( ) Sim ( ) Não
• Fonoaudiologia: ( ) Sim ( ) Não
• Nutrição: ( ) Sim ( ) Não
• Psicologia: ( ) Sim ( ) Não
• Serviço social: ( ) Sim ( ) Não
• Próxima revisão do plano: ___/___/___`,
    tips: "Na ILPI, a AGA é obrigatória e deve ser revisada a cada 3-6 meses. Quedas são a principal causa de morbidade — TUG >20s exige intervenção. Braden <12 demanda protocolo intensivo de prevenção de UPP. Polifarmácia é epidêmica: aplique Beers/STOPP-START em toda consulta. SEMPRE discutir DAV precocemente — em demência avançada, o momento já passou. Circunferência da panturrilha <31 cm é o melhor marcador de sarcopenia no idoso institucionalizado.",
  },
  {
    id: "aps-esf",
    title: "Anamnese em Medicina de Família (APS/ESF)",
    emoji: "🏠",
    tags: ["atenção primária", "ESF", "família", "comunidade"],
    content: `══════════════════════════════════════════════
   ANAMNESE EM MEDICINA DE FAMÍLIA (APS/ESF)
══════════════════════════════════════════════

1️⃣ MOTIVO DA CONSULTA — ABORDAGEM CENTRADA NA PESSOA
• Queixa principal (palavras do paciente): "____________________"
• O que o(a) trouxe HOJE especificamente?
• Sentimentos sobre a queixa: _______________________
• Ideias próprias sobre o que pode ser: _______________________
• Impacto na vida cotidiana (funcionalidade): _______________________
• Expectativas em relação à consulta: _______________________

Método SOAP (para registro):
  S (Subjetivo): narrativa do paciente
  O (Objetivo): exame físico e dados mensuráveis
  A (Avaliação): hipóteses/diagnósticos (CIAP-2 + CID-10)
  P (Plano): conduta, encaminhamentos, retorno

2️⃣ CONTEXTO FAMILIAR — GENOGRAMA E ECOMAPA
• Composição familiar (quem mora junto):
  Nome: __________ Parentesco: __________ Idade: ____ Saúde: __________
  Nome: __________ Parentesco: __________ Idade: ____ Saúde: __________
  Nome: __________ Parentesco: __________ Idade: ____ Saúde: __________
  Nome: __________ Parentesco: __________ Idade: ____ Saúde: __________
• Tipo de família: ( ) Nuclear ( ) Extensa ( ) Monoparental ( ) Reconstituída ( ) Unipessoal
• Ciclo de vida familiar (Duvall):
  ( ) Formação do casal
  ( ) Família com filhos pequenos
  ( ) Família com filhos adolescentes
  ( ) Família com filhos adultos (plataforma de lançamento)
  ( ) Família no estágio tardio
• Dinâmica familiar:
  Conflitos identificados: _______________________
  Rede de apoio: _______________________
  Cuidador principal (se aplicável): _______________________
• Ecomapa — Redes de suporte:
  Saúde (UBS, hospital): _______________________
  Escola/trabalho: _______________________
  Igreja/religião: _______________________
  Lazer/amigos: _______________________
  Assistência social (CRAS/CREAS): _______________________

3️⃣ CLASSIFICAÇÃO CIAP-2 E ABORDAGEM POR PROBLEMAS
• Problema 1: _____________ CIAP-2: _____ CID-10: _____
  Status: ( ) Ativo ( ) Inativo  Início: ___/___/___
• Problema 2: _____________ CIAP-2: _____ CID-10: _____
  Status: ( ) Ativo ( ) Inativo  Início: ___/___/___
• Problema 3: _____________ CIAP-2: _____ CID-10: _____
  Status: ( ) Ativo ( ) Inativo  Início: ___/___/___

📌 CIAP-2 prioriza o motivo da consulta, não o diagnóstico final.
   Componentes: 1-Queixas/Sintomas | 2-Procedimentos | 3-Medicações | 
   4-Resultados | 5-Administrativo | 6-Encaminhamento | 7-Diagnósticos

4️⃣ RASTREAMENTOS E PREVENÇÃO (ciclo de vida)
CRIANÇAS (0-10 anos):
  ( ) Puericultura em dia (calendário de consultas)
  ( ) Vacinação atualizada (PNI)
  ( ) Desenvolvimento neuropsicomotor (Denver II/DNPM)
  ( ) Teste do olhinho, orelhinha, coraçãozinho, pezinho
  ( ) Suplementação de ferro e vitamina A
  ( ) Saúde bucal — primeira consulta até 1 ano
  ( ) Avaliação nutricional (curvas OMS)

ADOLESCENTES (10-19 anos):
  ( ) Tanner/maturação sexual
  ( ) Saúde mental (PHQ-A, uso de substâncias)
  ( ) Contracepção e ISTs
  ( ) Violência/bullying
  ( ) HPV — esquema vacinal

ADULTOS:
  ( ) PA a cada consulta (≥18 anos)
  ( ) Glicemia de jejum a cada 3 anos (≥45 anos ou FR)
  ( ) Lipidograma (homens ≥35a; mulheres ≥45a ou FR)
  ( ) Papanicolaou (25-64 anos, a cada 3 anos)
  ( ) Mamografia (50-69 anos, a cada 2 anos — INCA)
  ( ) Pesquisa de sangue oculto (50-75 anos, anual)
  ( ) Rastreio de depressão (PHQ-2/PHQ-9)
  ( ) Rastreio de tabagismo e etilismo (AUDIT)

IDOSOS (≥60 anos):
  ( ) Avaliação multidimensional da pessoa idosa (AMPI)
  ( ) Rastreio cognitivo (Mini-Cog/MEEM)
  ( ) Risco de quedas
  ( ) Vacinação (influenza, pneumococo, herpes-zóster)
  ( ) Revisão de polifarmácia

5️⃣ ESTRATIFICAÇÃO DE RISCO CARDIOVASCULAR E METABÓLICO
• Escore de Framingham: _____ pontos → Risco: ( ) Baixo ( ) Intermediário ( ) Alto
• HAS — Classificação de risco:
  ( ) Baixo (E1 sem FR) ( ) Moderado (E1-2 com 1-2 FR)
  ( ) Alto (E3 ou LOA ou DM) ( ) Muito alto (DCV estabelecida)
• DM — Classificação:
  ( ) Sem complicações ( ) Com complicação micro ( ) Com complicação macro
• Tabagismo — estágio motivacional (Prochaska):
  ( ) Pré-contemplação ( ) Contemplação ( ) Preparação ( ) Ação ( ) Manutenção

6️⃣ TERRITORIALIZAÇÃO E DETERMINANTES SOCIAIS
• Área/Microárea: __________ ACS responsável: __________
• Acesso à água tratada: ( ) Sim ( ) Não
• Esgotamento sanitário: ( ) Rede ( ) Fossa ( ) Céu aberto
• Moradia: ( ) Alvenaria ( ) Madeira ( ) Outro: __________
  Cômodos: ____ Moradores: ____ (aglomeração: >2 pessoas/cômodo)
• Renda familiar: R$ _________ | Per capita: R$ _________
  ( ) <1/4 SM ( ) 1/4-1/2 SM ( ) 1/2-1 SM ( ) 1-2 SM ( ) >2 SM
• Cadastro Único: ( ) Sim — NIS: ____________ ( ) Não
• Bolsa Família/BPC: ( ) Sim ( ) Não
• Segurança alimentar (EBIA): ( ) Segurança ( ) Insegurança leve ( ) Moderada ( ) Grave
• Violência doméstica/comunitária: ( ) Rastreada ( ) Identificada → notificação

7️⃣ SAÚDE DA MULHER NA APS
• Menarca: ____ anos  DUM: ___/___/___
• G___P___A___C___ | IG (se gestante): ____ sem
• Pré-natal: ( ) Em acompanhamento ( ) Nº consultas: ____
  Estratificação (caderneta): ( ) Risco habitual ( ) Alto risco
• Anticoncepção atual: _______________________
• Último Papanicolaou: ___/___/___ Resultado: _______________
• Última mamografia (se aplicável): ___/___/___ BI-RADS: _____
• Climatério/menopausa: ( ) Não ( ) Sim — sintomas: ______________

8️⃣ SAÚDE MENTAL NA APS
• PHQ-2 (rastreio): Nas últimas 2 semanas:
  1) Pouco interesse ou prazer: ( ) 0 ( ) 1 ( ) 2 ( ) 3
  2) Sentir-se deprimido/sem esperança: ( ) 0 ( ) 1 ( ) 2 ( ) 3
  Total: ____ (≥3 → aplicar PHQ-9)
• PHQ-9 (se positivo): Total: ____ / 27
  ( ) Mínima (0-4) ( ) Leve (5-9) ( ) Moderada (10-14) ( ) Mod-grave (15-19) ( ) Grave (20-27)
• GAD-7 (ansiedade): Total: ____ / 21
• AUDIT (álcool): Total: ____ / 40
  ( ) Uso de baixo risco (0-7) ( ) Uso de risco (8-15) ( ) Uso nocivo (16-19) ( ) Provável dependência (≥20)
• ASSIST (outras substâncias): _______________________
• Ideação suicida: ( ) Não ( ) Sim → escala Columbia (C-SSRS)
• Matriciamento com NASF/CAPS: ( ) Indicado ( ) Já em acompanhamento

9️⃣ VISITA DOMICILIAR — ROTEIRO
• Data: ___/___/___ Profissionais presentes: _______________________
• Motivo: ( ) Busca ativa ( ) Acamado ( ) Puerpério ( ) Pós-alta ( ) Outro: __________
• Condições do domicílio:
  Higiene: ( ) Adequada ( ) Inadequada
  Acessibilidade: ( ) Adequada ( ) Barreiras: __________
  Riscos identificados: _______________________
• Avaliação do paciente:
  Estado geral: _______________________
  Medicações em uso (conferir embalagens): _______________________
  Adesão ao tratamento: ( ) Boa ( ) Regular ( ) Ruim
  Sinais vitais: PA: ___/___ FC: ___ Tax: ___ SpO2: ___
• Orientações fornecidas: _______________________
• Encaminhamentos necessários: _______________________
• Próxima visita: ___/___/___`,
    tips: "Na APS, use SEMPRE a CIAP-2 como classificação primária (o CID-10 é complementar). O genograma é ferramenta essencial — desenhe na primeira consulta e atualize. A abordagem centrada na pessoa (método Calgary-Cambridge) melhora adesão em 30%. Lembre: 80% dos problemas de saúde se resolvem na APS — evite encaminhamentos desnecessários. O SOAP é o padrão-ouro de registro no prontuário da ESF.",
  },
  {
    id: "toxicologia",
    title: "Anamnese em Toxicologia Clínica",
    emoji: "☠️",
    tags: ["intoxicação", "toxicologia", "envenenamento", "drogas"],
    content: `══════════════════════════════════════════════
      ANAMNESE EM TOXICOLOGIA CLÍNICA
══════════════════════════════════════════════

1️⃣ IDENTIFICAÇÃO DO AGENTE TÓXICO
• Agente suspeito/confirmado: _______________________________
• Classe do agente:
  ( ) Medicamento — qual: _______________________
  ( ) Agrotóxico/pesticida — classe: ( ) Organofosforado ( ) Carbamato ( ) Piretroide ( ) Herbicida ( ) Rodenticida ( ) Outro
  ( ) Produto de limpeza — qual: _______________________
  ( ) Droga de abuso — qual: _______________________
  ( ) Planta tóxica — qual: _______________________
  ( ) Animal peçonhento — qual: _______________________
  ( ) Metal pesado — qual: _______________________
  ( ) Gás/inalante — qual: _______________________
  ( ) Alimento (intoxicação alimentar)
  ( ) Substância industrial/ocupacional — qual: _______________________
  ( ) Desconhecido

• Fonte de informação do agente:
  ( ) Paciente ( ) Familiar ( ) Embalagem/rótulo ( ) Bombeiros/SAMU
  ( ) CIT — Centro de Informação Toxicológica: 0800-722-6001 (DISQUE-INTOXICAÇÃO)

2️⃣ CIRCUNSTÂNCIAS DA EXPOSIÇÃO
• Via de exposição:
  ( ) Oral/ingestão ( ) Inalatória ( ) Dérmica/cutânea ( ) Ocular
  ( ) Parenteral (IV/IM/SC) ( ) Retal ( ) Mucosa ( ) Picada/mordedura
• Quantidade estimada: _______________________________
  Medicamentos: ____ comprimidos × ____ mg = ____ mg total
  Peso do paciente: ____ kg → Dose: ____ mg/kg
• Horário da exposição: ___:___  Tempo decorrido: ____ h ____ min
• Local da exposição: ( ) Domicílio ( ) Trabalho ( ) Via pública ( ) Rural ( ) Outro
• Circunstância:
  ( ) Acidental ( ) Tentativa de suicídio ( ) Homicídio/criminosa
  ( ) Ocupacional ( ) Abuso/uso recreativo ( ) Reação adversa a medicamento
  ( ) Erro de medicação ( ) Ambiental ( ) Alimentar
  ( ) Automedicação

⚠️ Se TENTATIVA DE SUICÍDIO:
  • Intencionalidade: ( ) Impulsiva ( ) Planejada
  • Meios disponíveis em casa: _______________________
  • Carta/mensagem de despedida: ( ) Sim ( ) Não
  • Tentativas prévias: ( ) Sim — quantas: ____ ( ) Não
  • Acompanhamento psiquiátrico: ( ) Sim ( ) Não
  → Acionar CAPS/psiquiatria e notificação compulsória (SINAN)

3️⃣ TOXÍNDROMES — RECONHECIMENTO CLÍNICO
┌─────────────────────────────────────────────────────────────────┐
│ TOXÍNDROME        │ SINAIS CLÁSSICOS                           │
├─────────────────────────────────────────────────────────────────┤
│ Colinérgica       │ SLUDGE: Salivação, Lacrimejamento,         │
│ (organofosf.)     │ Urina, Diarreia, GI (cólica), Emese       │
│                   │ + Miose, bradicardia, broncoespasmo         │
│                   │ → Antídoto: ATROPINA + PRALIDOXIMA          │
├─────────────────────────────────────────────────────────────────┤
│ Anticolinérgica   │ "Quente como uma lebre, seco como um       │
│ (atropínicos)     │ osso, cego como um morcego, louco como     │
│                   │ um chapeleiro, vermelho como beterraba"     │
│                   │ Midríase, taquicardia, retenção urinária    │
│                   │ → Antídoto: FISOSTIGMINA (se grave)         │
├─────────────────────────────────────────────────────────────────┤
│ Simpatomimética   │ Midríase, taquicardia, HAS, hipertermia,   │
│ (cocaína, anfet.) │ agitação, sudorese, convulsões              │
│                   │ → BZD + suporte                             │
├─────────────────────────────────────────────────────────────────┤
│ Opioide           │ Miose puntiforme, bradipneia, ↓consciência │
│                   │ hipotensão, hipotermia                      │
│                   │ → Antídoto: NALOXONA 0,4-2 mg IV            │
├─────────────────────────────────────────────────────────────────┤
│ Sedativo-hipnót.  │ Sedação, ataxia, disartria, hipotensão     │
│ (BZD, barbit.)    │ → BZD: FLUMAZENIL 0,2 mg IV (com cautela)  │
├─────────────────────────────────────────────────────────────────┤
│ Serotoninérgica   │ Tríade: alteração mental + hiperatividade   │
│                   │ autonômica + neuromuscular (clônus, hiper-  │
│                   │ reflexia, tremor) → CIPROEPTADINA            │
├─────────────────────────────────────────────────────────────────┤
│ Extrapiramidal    │ Distonia, acatisia, rigidez, opisthótonos   │
│ (antipsicóticos)  │ → BIPERIDENO 2-5 mg IM/IV                   │
└─────────────────────────────────────────────────────────────────┘

4️⃣ QUADRO CLÍNICO ATUAL
• Nível de consciência: Glasgow: ____ /15 (O:__ V:__ M:__)
• Pupilas: ( ) Miose ( ) Midríase ( ) Isocóricas ( ) Anisocoria
  Fotorreação: ( ) Presente ( ) Ausente
• Pele: ( ) Seca ( ) Sudorese ( ) Rubor ( ) Palidez ( ) Cianose
• Mucosas: ( ) Secas ( ) Úmidas ( ) Queimaduras químicas ( ) Sialorreia
• Sinais vitais:
  PA: ___/___ mmHg  FC: ___ bpm  FR: ___ irpm  Tax: ___°C  SpO2: ___%
  Glicemia capilar: ___ mg/dL
• Cardiovascular: ( ) Taqui ( ) Bradi ( ) Arritmia — tipo: __________
  QTc no ECG: ____ ms (>500 ms = risco de Torsades)
  QRS alargado: ( ) Sim — largura: ____ ms ( ) Não
• Respiratório: ( ) Bradipneia ( ) Taquipneia ( ) Broncoespasmo ( ) Edema pulmonar
• GI: ( ) Vômitos ( ) Diarreia ( ) Dor abdominal ( ) Hematêmese
• Neurológico: ( ) Convulsões ( ) Fasciculações ( ) Tremor ( ) Nistagmo ( ) Ataxia ( ) Coma
• Odores característicos:
  ( ) Alho (organofosforado) ( ) Amêndoas amargas (cianeto)
  ( ) Acetona (cetoacidose) ( ) Naftalina (paradiclorobenzeno)

5️⃣ MEDIDAS DE DESCONTAMINAÇÃO (verificar indicação)
□ LAVAGEM GÁSTRICA: indicada até 1-2h da ingestão
  Contraindicações: ( ) Cáusticos ( ) Hidrocarbonetos ( ) Rebaixamento sem IOT ( ) Convulsões
  Realizada: ( ) Sim — horário: ___:___ Volume: ____ mL ( ) Não — motivo: __________
□ CARVÃO ATIVADO: 1 g/kg (máx 50g) em água
  Indicado até 1-2h da ingestão (exceção: doses múltiplas para teofilina, carbamazepina, dapsona)
  Administrado: ( ) Sim — dose: ____ g horário: ___:___ ( ) Não — motivo: __________
  CI: cáusticos, hidrocarbonetos, metais, álcoois, íleo
□ IRRIGAÇÃO INTESTINAL TOTAL (PEG): para body packers, ferro, lítio, sustained-release
□ DESCONTAMINAÇÃO CUTÂNEA: lavagem com água corrente × 15-20 min
□ DESCONTAMINAÇÃO OCULAR: irrigação com SF 0,9% × 15-30 min

6️⃣ ANTÍDOTOS — REFERÊNCIA RÁPIDA
┌──────────────────────────────────────────────────┐
│ TÓXICO              │ ANTÍDOTO                   │
├──────────────────────────────────────────────────┤
│ Paracetamol          │ N-acetilcisteína (NAC)     │
│ Organofosforado      │ Atropina + Pralidoxima     │
│ Benzodiazepínico     │ Flumazenil (com cautela)   │
│ Opioide              │ Naloxona                   │
│ Betabloqueador       │ Glucagon                   │
│ BCC (verapamil/dilt) │ Cálcio IV + insulina HD    │
│ Warfarina            │ Vitamina K + PFC/CCP       │
│ Ferro                │ Deferoxamina               │
│ Cianeto              │ Hidroxocobalamina           │
│ Metanol/Etilenoglicol│ Fomepizol (ou etanol)      │
│ Isoniazida           │ Piridoxina (Vit B6)        │
│ Digoxina             │ Anticorpos antidigoxina     │
│ Heparina             │ Protamina                  │
│ Metemoglobinemia      │ Azul de metileno           │
│ Anticolinérgico       │ Fisostigmina               │
│ Antipsicótico (DEP)   │ Biperideno                 │
│ Cumarínico (rato)     │ Vitamina K1 (fitomenadiona)│
│ Sulfoniluréia         │ Octreotida                 │
│ Tricíclico            │ Bicarbonato de sódio        │
└──────────────────────────────────────────────────┘

7️⃣ EXAMES COMPLEMENTARES
Laboratoriais:
  ( ) Hemograma ( ) Eletrólitos (Na, K, Ca, Mg, P)
  ( ) Função renal (Ur, Cr) ( ) Função hepática (TGO, TGP, BT, INR)
  ( ) Gasometria arterial com lactato
  ( ) Glicemia ( ) Amilase/lipase
  ( ) CPK/CK-MB/troponina (rabdomiólise/cardiotoxicidade)
  ( ) Coagulograma (TP, TTPa, INR, fibrinogênio)
  ( ) Nível sérico do tóxico: ____________ Resultado: ___________
  ( ) Screening toxicológico urinário (ETS)
  ( ) Colinesterase sérica/eritrocitária (organofosforados)
  ( ) Metemoglobina ( ) Carboxiemoglobina
  ( ) Osmolalidade sérica (gap osmolar para álcoois tóxicos)
  GAP osmolar = Osm medida - Osm calculada (>10 = significativo)
  GAP aniônico = Na - (Cl + HCO3) (normal 8-12)

ECG:
  ( ) QTc prolongado ( ) QRS alargado ( ) Brugada-like ( ) Bradicardia
  ( ) Taquicardia sinusal ( ) Arritmia ventricular

8️⃣ NOTIFICAÇÃO COMPULSÓRIA
• SINAN — Ficha de investigação de intoxicação exógena
  ( ) Notificação realizada — Nº: _______________
• CIT contactado: ( ) Sim — orientação: _______________________ ( ) Não
• Caso ocupacional → CAT emitida: ( ) Sim ( ) Não ( ) NA`,
    tips: "Ligue SEMPRE para o CIT (0800-722-6001) em caso de dúvida — funciona 24h. O carvão ativado NÃO adsorve: metais (ferro, lítio), álcoois (metanol, etanol), cáusticos e hidrocarbonetos. QRS >100ms no tricíclico → bicarbonato de sódio. NAC é mais eficaz nas primeiras 8h pós-paracetamol (use o nomograma de Rumack-Matthew). Organofosforado: atropinize até secar secreções (pode precisar de doses muito altas). Síndrome serotoninérgica ≠ Síndrome neuroléptica maligna — a primeira tem clônus e hiperreflexia, a segunda tem rigidez em cano de chumbo. NUNCA induza vômitos com xarope de ipeca — prática abandonada.",
  },
  {
    id: "medicina-sono",
    title: "Anamnese em Medicina do Sono",
    emoji: "😴",
    tags: ["sono", "insônia", "apneia", "sonolência"],
    content: `══════════════════════════════════════════════
       ANAMNESE EM MEDICINA DO SONO
══════════════════════════════════════════════

1️⃣ QUEIXA PRINCIPAL RELACIONADA AO SONO
• Queixa: ( ) Dificuldade para dormir ( ) Sonolência diurna excessiva
  ( ) Ronco ( ) Apneias presenciadas ( ) Movimentos anormais no sono
  ( ) Comportamento anormal no sono ( ) Horário de sono irregular
  ( ) Outro: _______________________
• Duração da queixa: _______________________
• Frequência: ( ) Toda noite ( ) >3x/sem ( ) 1-3x/sem ( ) Esporádica
• Fator desencadeante identificado: _______________________

2️⃣ DIÁRIO DO SONO (últimas 2 semanas)
• Horário de deitar: ___:___
• Latência do sono (tempo para adormecer): ____ min
  Normal <30 min | Patológico >30 min
• Horário de adormecer: ___:___
• Despertares noturnos: ____ vezes/noite
  Causa: ( ) Espontâneo ( ) Dor ( ) Noctúria ( ) Ansiedade ( ) Dispneia ( ) Outro
  Tempo para readormecer: ____ min
• Despertar final: ___:___
• Horário de levantar: ___:___
• Tempo total na cama (TTC): ____ h ____ min
• Tempo total de sono estimado (TTS): ____ h ____ min
• Eficiência do sono = TTS/TTC × 100 = ____%
  Normal ≥85% | Insônia <85%

• Qualidade subjetiva do sono: ( ) Boa ( ) Regular ( ) Ruim ( ) Péssima
• Sensação ao acordar: ( ) Descansado ( ) Cansado ( ) Pior que antes de dormir

3️⃣ HIGIENE DO SONO — CHECKLIST
Hábitos inadequados (marcar os presentes):
  ( ) Horários irregulares de dormir/acordar
  ( ) Tempo excessivo na cama (sem dormir)
  ( ) Cochilos diurnos >30 min ou após 15h
  ( ) Uso de telas (celular/TV/computador) <1h antes de dormir
  ( ) Cafeína após 14h — quantidade/dia: ____ xícaras
  ( ) Álcool como indutor de sono
  ( ) Exercício físico intenso <3h antes de dormir
  ( ) Refeição pesada noturna (jantar tardio)
  ( ) Ambiente inadequado: ( ) Luz ( ) Ruído ( ) Temperatura ( ) Colchão
  ( ) Trabalho/estudo na cama
  ( ) Uso de celular durante despertares noturnos

4️⃣ ESCALAS E QUESTIONÁRIOS VALIDADOS

EPWORTH (Sonolência Diurna) — Chance de cochilar (0-3):
  Sentado lendo: ____
  Assistindo TV: ____
  Sentado em local público: ____
  Passageiro em carro por 1h: ____
  Deitado à tarde: ____
  Sentado conversando: ____
  Sentado após almoço sem álcool: ____
  No carro parado por minutos no trânsito: ____
  TOTAL: ____ /24
  Interpretação: ≤10 normal | 11-14 leve | 15-17 moderada | ≥18 grave

ISI — Índice de Gravidade da Insônia (0-4 cada):
  1) Dificuldade para iniciar o sono: ____
  2) Dificuldade para manter o sono: ____
  3) Despertar precoce: ____
  4) Satisfação com o sono: ____
  5) Interferência na funcionalidade: ____
  6) Percepção do problema por outros: ____
  7) Preocupação com o sono: ____
  TOTAL: ____ /28
  0-7: sem insônia | 8-14: subclínica | 15-21: moderada | 22-28: grave

STOP-BANG (Rastreio de AOS):
  S — Snoring (ronco alto): ( ) Sim ( ) Não
  T — Tired (cansaço/sonolência diurna): ( ) Sim ( ) Não
  O — Observed apnea (apneias presenciadas): ( ) Sim ( ) Não
  P — Pressure (HAS em tratamento): ( ) Sim ( ) Não
  B — BMI >35: ( ) Sim ( ) Não
  A — Age >50 anos: ( ) Sim ( ) Não
  N — Neck >40 cm (♀) ou >43 cm (♂): ( ) Sim ( ) Não
  G — Gender masculino: ( ) Sim ( ) Não
  TOTAL: ____ /8
  0-2: baixo risco | 3-4: intermediário | 5-8: alto risco de AOS

5️⃣ RONCO E APNEIA OBSTRUTIVA DO SONO (AOS)
• Ronco: ( ) Presente ( ) Ausente
  Intensidade: ( ) Leve ( ) Incomoda parceiro ( ) Ouvido em outro cômodo
  Posicional: ( ) Pior em decúbito dorsal ( ) Todas posições
  Há quanto tempo: _______________________
• Apneias presenciadas por parceiro: ( ) Sim ( ) Não
  Engasgos/sufocamento noturno: ( ) Sim ( ) Não
• Noctúria (>2x): ( ) Sim — ___x/noite ( ) Não
• Cefaleia matinal: ( ) Sim ( ) Não
• Boca seca ao acordar: ( ) Sim ( ) Não
• Refluxo noturno: ( ) Sim ( ) Não
• Avaliação anatômica:
  Mallampati: ( ) I ( ) II ( ) III ( ) IV
  Circunferência cervical: ____ cm
  Retrognatia: ( ) Sim ( ) Não
  Hipertrofia de amígdalas: ( ) 0 ( ) I ( ) II ( ) III ( ) IV
  Desvio de septo/obstrução nasal: ( ) Sim ( ) Não

• Polissonografia (PSG) prévia: ( ) Sim — IAH: ____ /h ( ) Não
  Classificação AOS: <5 normal | 5-14 leve | 15-29 moderada | ≥30 grave
  SpO2 mínima: ___% | Tempo SpO2 <90%: ____ min
• CPAP/BiPAP em uso: ( ) Sim — pressão: ____ cmH2O ( ) Não
  Adesão (h/noite média): ____ h | ≥4h em ≥70% das noites = adequada

6️⃣ INSÔNIA — AVALIAÇÃO DETALHADA
• Tipo: ( ) Inicial (dificuldade para iniciar)
  ( ) Manutenção (despertares) ( ) Terminal (despertar precoce)
  ( ) Mista
• Duração: ( ) Aguda (<3 meses) ( ) Crônica (≥3 meses, ≥3x/sem)
• Modelo 3P de Spielman:
  Predisponentes: ( ) Ansiedade-traço ( ) Perfeccionismo ( ) Hipervigilância ( ) HF insônia
  Precipitantes: _______________________
  Perpetuantes: ( ) Tempo excessivo na cama ( ) Cochilos ( ) Preocupação com sono ( ) Substâncias
• Cognições disfuncionais sobre o sono:
  ( ) "Preciso dormir 8h" ( ) "Amanhã será terrível se não dormir"
  ( ) "Algo está errado comigo" ( ) "Nunca mais vou dormir bem"
• TCC-I (Terapia Cognitivo-Comportamental para Insônia) — 1ª linha:
  ( ) Já tentou ( ) Em andamento ( ) Não oferecida

7️⃣ PARASSONIAS E OUTROS DISTÚRBIOS
NREM (1ª metade da noite):
  ( ) Sonambulismo ( ) Terror noturno ( ) Despertar confusional
  ( ) Sexsônia ( ) Alimentação noturna relacionada ao sono
REM (2ª metade da noite):
  ( ) Transtorno comportamental do sono REM (TCR)
    Atuação de sonhos (socos, chutes, gritos, queda da cama)
    ⚠️ TCR é fator de risco para sinucleinopatias (Parkinson, DCL)
  ( ) Pesadelos recorrentes
  ( ) Paralisia do sono

Movimentos relacionados ao sono:
  ( ) Síndrome das pernas inquietas (SPI/RLS)
    Urgência para mover as pernas com sensação desagradável
    Piora: ( ) Repouso ( ) Noite/final do dia → Alívio: ( ) Movimento
    Ferritina sérica: ____ ng/mL (tratar se <75 na SPI)
  ( ) Movimentos periódicos dos membros (PLMS)
  ( ) Bruxismo do sono
  ( ) Câimbras noturnas

Distúrbios do ritmo circadiano:
  ( ) Fase atrasada (coruja extrema — dorme ~3-5h, acorda ~11-13h)
  ( ) Fase avançada (idosos — dorme ~19-21h, acorda ~3-5h)
  ( ) Trabalho em turnos/noturno
  ( ) Jet lag
  Cronotipo: ( ) Matutino ( ) Vespertino ( ) Intermediário

8️⃣ MEDICAÇÕES E SUBSTÂNCIAS QUE AFETAM O SONO
Medicações em uso que podem causar insônia:
  ( ) Corticoides ( ) ISRS/IRSN ( ) Betabloqueadores ( ) Hormônios tireoidianos
  ( ) Descongestionantes ( ) Estimulantes (metilfenidato) ( ) Broncodilatadores
Medicações em uso que podem causar sonolência:
  ( ) Anti-histamínicos ( ) Benzodiazepínicos ( ) Opioides ( ) Anticonvulsivantes
  ( ) Antipsicóticos ( ) Mirtazapina ( ) Trazodona ( ) Gabapentina/pregabalina
Substâncias:
  ( ) Cafeína: ____ mg/dia (1 xícara ≈ 100 mg) | Horário último café: ___:___
  ( ) Álcool — freq/quantidade: _______________________
  ( ) Cannabis ( ) Nicotina ( ) Energéticos ( ) Outros: __________

Hipnóticos em uso:
  Medicação: _________________ Dose: ______ Há quanto tempo: ____________
  ( ) Uso contínuo ( ) Uso conforme necessidade
  Tentativas de retirada: ( ) Sim ( ) Não

9️⃣ COMORBIDADES RELEVANTES PARA O SONO
  ( ) Depressão ( ) Ansiedade generalizada ( ) TEPT
  ( ) Dor crônica — localização: _______________________
  ( ) DRGE/refluxo ( ) IC/dispneia paroxística noturna
  ( ) DPOC ( ) Asma noturna
  ( ) Fibromialgia ( ) Noctúria (HPB, DM, IC)
  ( ) Hipotireoidismo ( ) Hipertireoidismo
  ( ) Gravidez — IG: ____ semanas
  ( ) Menopausa (fogachos noturnos)
  ( ) Parkinson/doenças neurodegenerativas
  ( ) TDAH`,
    tips: "A TCC-I é o tratamento de 1ª linha para insônia crônica — superior a hipnóticos no longo prazo. Epworth ≥11 indica sonolência diurna excessiva, mas não diferencia a causa (AOS, narcolepsia, sono insuficiente). STOP-BANG ≥5 tem alta sensibilidade para AOS moderada-grave. Ferritina <75 ng/mL em paciente com SPI → repor ferro antes de iniciar dopaminérgicos. TCR isolado em >50 anos evolui para Parkinson/DCL em 80-90% dos casos em 10-15 anos — é um sinal prodrômico. Restrição de tempo na cama (janela de sono) é a técnica mais potente da TCC-I: comece com TTS + 30 min e expanda conforme eficiência >85%.",
  },
  {
    id: "exercicio-reabilitacao",
    title: "Anamnese em Medicina do Exercício e Reabilitação",
    emoji: "🏋️",
    tags: ["exercício", "reabilitação", "esporte", "fisiatria"],
    content: `═══════════════════════════════════════════
  ANAMNESE EM MEDICINA DO EXERCÍCIO E REABILITAÇÃO
═══════════════════════════════════════════

1️⃣ PERFIL DO PACIENTE
• Idade: ____ Sexo: ____
• Modalidade esportiva / atividade física principal: ___________
• Nível: ( ) Sedentário ( ) Recreativo ( ) Amador competitivo ( ) Profissional
• Frequência semanal: ____ dias  Duração média da sessão: ____ min
• Volume semanal (km/h/repetições): __________
• Anos de prática: ____
• Objetivo: ( ) Saúde ( ) Performance ( ) Emagrecimento ( ) Reabilitação ( ) Retorno ao esporte

2️⃣ HISTÓRICO DE LESÕES — MNEMÔNICO "SALTOM"
S — Segmento acometido: ___________
A — Atividade que causou a lesão: ___________
L — Lateralidade: ( ) D ( ) E ( ) Bilateral
T — Tempo desde a lesão / Tempo de afastamento: ____
O — Operado? ( ) Sim ( ) Não — Procedimento: ___________
M — Mecanismo de lesão:
    ( ) Trauma direto (contato)
    ( ) Trauma indireto (desaceleração, rotação)
    ( ) Sobrecarga/overuse (aumento >10%/semana)
    ( ) Estresse repetitivo (tendinopatia, fratura por estresse)

3️⃣ DOR RELACIONADA AO EXERCÍCIO
• Localização: ___________
• Momento:
  ( ) Início do exercício (warm-up pain) → sugere inflamação ativa
  ( ) Durante (após __ min/km) → sugere isquemia/mecânico
  ( ) Após exercício → sugere sobrecarga
  ( ) Em repouso/noturna → sinal de alarme 🚩
• EVA em atividade: ___/10   EVA em repouso: ___/10
• Melhora com aquecimento? ( ) Sim → tendinopatia crônica  ( ) Não

4️⃣ AVALIAÇÃO FUNCIONAL
┌─────────────────────────────────────┐
│ TESTES PRÉ-PARTICIPAÇÃO            │
├─────────────────────────────────────┤
│ PAR-Q+: ( ) Positivo ( ) Negativo  │
│ ECG repouso: ( ) Normal ( ) Alt.   │
│ TE / Ergoespirometria:             │
│   VO₂máx: ____ mL/kg/min           │
│   FC máx: ____   LA: ____ bpm      │
│   Classificação AHA: ___________   │
│ Composição corporal:               │
│   IMC: ____  %G: ____              │
│   Massa magra: ____ kg             │
│ FMS (Functional Movement Screen):  │
│   Score: ____/21                   │
│   Assimetrias: ___________         │
└─────────────────────────────────────┘

5️⃣ TREINAMENTO ATUAL
• Periodização: ( ) Linear ( ) Ondulada ( ) Bloco ( ) Sem plano
• Fase atual: ( ) Preparação geral ( ) Específica ( ) Competitiva ( ) Transição
• Última competição: ___/___/___  Próxima: ___/___/___
• Progressão recente (últimas 4 sem):
  Volume: ( ) Estável ( ) ↑ <10% ( ) ↑ >10% 🚩
  Intensidade: ( ) Estável ( ) ↑ progressiva ( ) ↑ abrupta 🚩
• Aquecimento adequado? ( ) Sim ( ) Não
• Recuperação: ( ) Sono ≥7h ( ) Descanso ativo ( ) Crioterapia ( ) Compressão

6️⃣ NUTRIÇÃO ESPORTIVA
• Hidratação: ____ L/dia  Durante exercício: ____ mL/h
• Suplementação:
  ( ) Whey ( ) Creatina ( ) BCAA ( ) Cafeína ( ) β-alanina
  ( ) Ferro ( ) Vit D ( ) Outros: ___________
• RED-S (Relative Energy Deficiency in Sport):
  ( ) Perda de peso não intencional
  ( ) Amenorreia / irregularidade menstrual
  ( ) Fraturas por estresse
  ( ) ↓ Performance inexplicada
  ( ) Fadiga crônica / lesões recorrentes
  → ≥2 sinais = rastrear RED-S (antigo "tríade da atleta feminina")

7️⃣ REABILITAÇÃO — CRITÉRIOS DE RETORNO AO ESPORTE
┌──────────────────────────────────────────┐
│ CHECKLIST RETURN-TO-SPORT (RTS)         │
├──────────────────────────────────────────┤
│ ( ) Sem dor em repouso e em atividade   │
│ ( ) ADM completa e simétrica            │
│ ( ) Força ≥90% do membro contralateral  │
│     (dinamometria isocinética)          │
│ ( ) Testes funcionais:                  │
│     - Single-leg hop ≥90% LSI           │
│     - Y-balance test simétrico          │
│     - Triple hop / crossover hop        │
│ ( ) Propriocepção restaurada            │
│ ( ) Critérios psicológicos:             │
│     - ACL-RSI ≥56 (se LCA)             │
│     - Sem cinesiofobia (Tampa <37)      │
│ ( ) Treino esporte-específico ≥4 sem    │
│ ( ) Liberação médica formal             │
└──────────────────────────────────────────┘

8️⃣ PRESCRIÇÃO DE EXERCÍCIO — FITT-VP
F — Frequência: ____x/semana
I — Intensidade: ( ) Leve ( ) Moderada ( ) Vigorosa
    Zona FC: ____–____ bpm  |  PSE Borg: ____/20
T — Tempo: ____ min/sessão
T — Tipo: ( ) Aeróbico ( ) Resistido ( ) Flexibilidade ( ) Neuromotor
V — Volume: ____ séries x ____ reps ou ____ min total/semana
P — Progressão: ↑ ≤10%/semana  |  Reavaliação a cada ____ semanas

📌 RECOMENDAÇÕES OMS/ACSM ADULTOS:
• Aeróbico: 150-300 min/sem moderado OU 75-150 min/sem vigoroso
• Resistência: ≥2x/semana, todos os grandes grupos musculares
• Flexibilidade: ≥2-3x/semana, 10-30s por alongamento
• Equilíbrio: ≥3x/semana (especialmente >65 anos)`,
    tips: "A regra dos 10% (não aumentar volume >10%/semana) é o principal fator modificável para prevenir lesões por overuse. O FMS score <14 ou assimetria ≥2 pontos prediz risco aumentado de lesão. Para retorno ao esporte após LCA, o critério LSI ≥90% em bateria de hops + ACL-RSI ≥56 reduz risco de re-ruptura. RED-S substituiu o conceito de 'tríade da atleta' e afeta ambos os sexos. VO₂máx <20 mL/kg/min em adulto jovem indica descondicionamento severo; >60 mL/kg/min sugere atleta de elite de endurance.",
  },
  {
    id: "uti-intensiva",
    title: "Anamnese em Medicina Intensiva (UTI)",
    emoji: "🏥",
    tags: ["UTI", "terapia intensiva", "crítico", "ventilação"],
    content: `═══════════════════════════════════════════
  ANAMNESE EM MEDICINA INTENSIVA (UTI)
═══════════════════════════════════════════

1️⃣ ADMISSÃO — MNEMÔNICO "FAST-HUG-MAIDENS"
(Checklist de Cuidados Diários na UTI)

F — Feeding (Nutrição)
    Via: ( ) Oral ( ) SNE ( ) SNJ ( ) NPT
    Meta calórica: ____ kcal/dia  Proteica: ____ g/kg/dia
    Resíduo gástrico: ____ mL  Tolerância: ( ) Sim ( ) Não

A — Analgesia
    Escala: ( ) EVA ____/10 ( ) BPS ____/12 ( ) CPOT ____/8
    Esquema: ___________

S — Sedation (Sedação)
    RASS alvo: ____  RASS atual: ____
    Fármaco: ___________  Dose: ____
    ( ) Despertar diário programado (SAT)

T — Thromboembolic prophylaxis
    ( ) Enoxaparina 40 mg/dia SC
    ( ) HNF 5.000 UI 8/8h SC
    ( ) Mecânica (CPI)
    ( ) Contraindicação: ___________

H — Head of bed elevation (Cabeceira ≥30°)
    ( ) Sim ( ) Não — Justificativa: ___________

U — Ulcer prophylaxis (Profilaxia de úlcera de estresse)
    ( ) Omeprazol 40 mg/dia IV
    ( ) Pantoprazol 40 mg/dia IV
    Indicação: ( ) VM >48h ( ) Coagulopatia ( ) Politrauma ( ) TCE grave

G — Glucose control (Controle glicêmico)
    Glicemia capilar: ____ mg/dL  Protocolo insulina: ___________
    Alvo: 140-180 mg/dL (NICE-SUGAR)

2️⃣ AVALIAÇÃO HEMODINÂMICA
┌────────────────────────────────────────────┐
│ PARÂMETROS HEMODINÂMICOS                  │
├────────────────────────────────────────────┤
│ PA: ____/____ mmHg   PAM: ____ mmHg       │
│ FC: ____ bpm   Ritmo: ___________         │
│ PVC: ____ mmHg (se CVC)                   │
│ Lactato: ____ mmol/L                      │
│ SvO₂/ScvO₂: ____%                        │
│ Débito urinário: ____ mL/kg/h             │
│ Enchimento capilar: ____ seg              │
│ Delta PP: ____%  (se VM e ritmo sinusal)  │
│ IVC USG: ____ mm / Colapsibilidade: ___% │
│                                           │
│ DVA em uso:                               │
│ ( ) Noradrenalina: ____ mcg/kg/min        │
│ ( ) Adrenalina: ____ mcg/kg/min           │
│ ( ) Vasopressina: ____ UI/min             │
│ ( ) Dobutamina: ____ mcg/kg/min           │
│ ( ) Milrinona: ____ mcg/kg/min            │
└────────────────────────────────────────────┘

3️⃣ VENTILAÇÃO MECÂNICA
• Modo: ( ) VCV ( ) PCV ( ) PSV ( ) PRVC ( ) APRV
• Parâmetros:
  FiO₂: ____%   PEEP: ____ cmH₂O
  VT: ____ mL (____ mL/kg peso predito)
  FR programada: ____/min   FR total: ____/min
  Ppico: ____ cmH₂O   Pplatô: ____ cmH₂O
  Driving Pressure: ____ cmH₂O (alvo <15)
  Complacência estática: ____ mL/cmH₂O
• Gasometria:
  pH: ____  pCO₂: ____  pO₂: ____  HCO₃: ____  BE: ____
  P/F: ____ (PaO₂/FiO₂)
  Classificação SDRA: ( ) Leve 200-300 ( ) Moderada 100-200 ( ) Grave <100

• Estratégia protetora:
  ( ) VT ≤6 mL/kg peso predito
  ( ) Pplatô ≤30 cmH₂O
  ( ) Driving Pressure ≤15 cmH₂O
  ( ) PEEP tabela PEEP-FiO₂ (ARDSNet)
  ( ) Pronação (se P/F <150 com FiO₂ ≥0.6 e PEEP ≥5)

4️⃣ DISFUNÇÕES ORGÂNICAS — SOFA SCORE
┌──────────────────────────────────────────────┐
│     SOFA SCORE DIÁRIO                        │
├──────────────┬───────────────────────────────┤
│ Respiratório │ P/F: ____ → Score: ____       │
│ Coagulação   │ Plaquetas: ____ → Score: ____ │
│ Hepático     │ Bilirrubina: ____ → Score: ___│
│ Cardiovasc.  │ PAM/DVA: ____ → Score: ____   │
│ Neurológico  │ Glasgow: ____ → Score: ____   │
│ Renal        │ Cr/DU: ____ → Score: ____     │
├──────────────┼───────────────────────────────┤
│ TOTAL        │ ____/24                       │
└──────────────┴───────────────────────────────┘
Variação SOFA ≥2 = sepse (Sepsis-3)

5️⃣ BUNDLES E PROTOCOLOS ATIVOS
( ) Bundle de Sepse (Hour-1)
( ) Protocolo de Ventilação Protetora
( ) Protocolo de Desmame Ventilatório (TRE)
( ) Despertar diário (SAT + SBT)
( ) Protocolo de Mobilização Precoce
( ) Bundle de Prevenção PAV
( ) Bundle de Prevenção ITU associada a cateter
( ) Bundle de Prevenção de IPCS
( ) Protocolo de Controle de Temperatura (TTM)
( ) Protocolo de Neuroproteção (TCE/AVC)

6️⃣ MEDICAÇÕES DE ALTA VIGILÂNCIA
┌──────────────────────────────────────┐
│ RECONCILIAÇÃO UTI                   │
├──────────────────────────────────────┤
│ Antimicrobianos:                    │
│  _______________ Dia: ___/___       │
│  _______________ Dia: ___/___       │
│ Corticoides: ( ) Sim → ___________  │
│ Anticoagulação terapêutica:         │
│  ( ) Sim → ___________ Dose: ____   │
│ Insulina: ( ) Protocolo contínuo    │
│ Hemoderivados últimas 24h:          │
│  ( ) CH ____ UI ( ) PFC ( ) PLQ     │
│ Diálise: ( ) Sim → Modalidade: ____ │
│  ( ) HD intermitente ( ) SLED       │
│  ( ) CRRT (CVVHDF)                  │
└──────────────────────────────────────┘

7️⃣ PROGNÓSTICO E COMUNICAÇÃO
• APACHE II: ____  Mortalidade estimada: ____%
• SAPS 3: ____  Mortalidade estimada: ____%
• Decisão sobre limitação terapêutica: ( ) Sim ( ) Não
  ( ) DNR ( ) Sem DVA ( ) Sem diálise ( ) Cuidados de conforto
• Conferência familiar realizada: ( ) Sim — Data: ___/___/___
• Diretivas antecipadas registradas: ( ) Sim ( ) Não`,
    tips: "O FAST-HUG é o checklist diário mais utilizado em UTIs — garante que nenhum item essencial seja esquecido na passagem de plantão. Driving Pressure (Pplatô - PEEP) <15 cmH₂O é o parâmetro mais associado a sobrevida na SDRA. Despertar diário (SAT) + teste de respiração espontânea (SBT) combinados reduzem tempo de VM em ~1,5 dias vs. SBT isolado. NICE-SUGAR mostrou que alvo glicêmico 140-180 mg/dL é superior ao controle estrito (80-110) na UTI. SOFA ≥2 tem sensibilidade >90% para identificar sepse — substituiu os critérios SIRS no Sepsis-3. Mobilização precoce (até D1-D2) reduz tempo de internação e melhora funcionalidade na alta.",
  },
  {
    id: "genetica-clinica",
    title: "Anamnese em Genética Clínica",
    emoji: "🧬",
    tags: ["genética", "dismorfologia", "aconselhamento", "heredograma"],
    content: `═══════════════════════════════════════════
  ANAMNESE EM GENÉTICA CLÍNICA
═══════════════════════════════════════════

1️⃣ MOTIVO DO ENCAMINHAMENTO
( ) Malformação congênita
( ) Atraso do DNPM / deficiência intelectual
( ) Dismorfias faciais / características atípicas
( ) Diagnóstico pré-natal alterado
( ) Abortos de repetição (≥2)
( ) Consanguinidade com desejo reprodutivo
( ) Doença genética conhecida na família
( ) Câncer hereditário (suspeita de síndrome)
( ) Erro inato do metabolismo (triagem neonatal alterada)
( ) Aconselhamento genético pré-concepcional
( ) Outro: ___________

2️⃣ HEREDOGRAMA — MÍNIMO 3 GERAÇÕES
📌 SÍMBOLOS PADRÃO:
□ = Masculino   ○ = Feminino   ◇ = Sexo indeterminado
■ ● = Afetado(a)   / = Falecido(a)
═══ = Consanguinidade   ─── = Casal
│ = Filiação   ∥ = Gêmeos dizigóticos   ||| = Monozigóticos

Para cada membro afetado registrar:
• Idade atual ou de óbito
• Diagnóstico confirmado ou suspeita
• Idade de início dos sintomas
• Exames genéticos realizados

PADRÃO DE HERANÇA SUGERIDO:
( ) Autossômica dominante (AD) — afetados em todas gerações, ♂=♀
( ) Autossômica recessiva (AR) — pais saudáveis, consanguinidade
( ) Ligada ao X recessiva — ♂ afetados, ♀ portadoras
( ) Ligada ao X dominante — ♂ e ♀, mais grave em ♂, letal em ♂?
( ) Mitocondrial — herança materna exclusiva
( ) Multifatorial — agregação familiar sem padrão mendeliano
( ) Esporádico / Mutação de novo

3️⃣ HISTÓRIA GESTACIONAL E PERINATAL
• Gestação: ( ) Planejada ( ) Espontânea ( ) TRA (FIV/ICSI)
• IG ao nascimento: ____ semanas  Peso: ____ g  Comprimento: ____ cm  PC: ____ cm
• Classificação: ( ) AIG ( ) PIG ( ) GIG
• Intercorrências gestacionais:
  ( ) Infecção (TORCH): ___________
  ( ) Diabetes gestacional  ( ) Pré-eclâmpsia
  ( ) Sangramento 1º/2º/3º trimestre
  ( ) Exposição teratogênica: ___________
  ( ) Oligoâmnio ( ) Polidrâmnio
  ( ) Restrição de crescimento intrauterino
• Rastreamento pré-natal:
  ( ) USG morfológico: ___________
  ( ) TN: ____ mm  ( ) Bioquímico: ___________
  ( ) NIPT/cfDNA: ( ) Baixo risco ( ) Alto risco — Cromossomo: ____
  ( ) Amniocentese/Biópsia de vilo: ___________
  ( ) Cariótipo fetal: ___________
• Apgar: ___/___ (1'/5')
• Intercorrências neonatais: ___________

4️⃣ DESENVOLVIMENTO NEUROPSICOMOTOR (DNPM)
┌─────────────────────────────────────────┐
│ MARCOS DO DESENVOLVIMENTO              │
├─────────────────────────────────────────┤
│ Sustento cefálico: ____ meses (N: 3m)  │
│ Sentar sem apoio: ____ meses (N: 6-7m) │
│ Engatinhar: ____ meses (N: 8-10m)      │
│ Andar independente: ____ meses (N: 12m)│
│ Primeiras palavras: ____ meses (N: 12m)│
│ Frases: ____ meses (N: 24m)            │
│ Controle esfincteriano: ____ meses     │
│                                        │
│ REGRESSÃO? ( ) Sim → Idade: ____       │
│ Marcos perdidos: ___________           │
│ → Suspeitar: dça metabólica, Rett,     │
│   dça neurodegenerativa               │
└─────────────────────────────────────────┘

5️⃣ EXAME DISMORFOLÓGICO SISTEMÁTICO
📌 MNEMÔNICO "FACES-HANDS" para avaliar dismorfias

F — Face: formato (redonda/triangular/alongada), assimetria
A — Auricular: implantação baixa, rotação posterior, tags pré-auriculares
C — Cranial: micro/macrocefalia, fontanelas, plagiocefalia
E — Eyes (olhos): epicanto, telecanto, hipertelorismo, fendas palpebrais
S — Skull/Sutures: craniossinostose, bossa frontal

H — Hands/Feet: clinodactilia, braquidactilia, polidactilia, sindactilia
A — Abdominal: hérnia umbilical, diástase de retos, genitália
N — Neck: pescoço alado, implantação baixa de cabelos
D — Dermatoglíficos: prega palmar única, dermatóglifos atípicos
S — Skin: manchas café com leite (>6 = NF1), hipopigmentação (ET)

MEDIDAS ANTROPOMÉTRICAS OBRIGATÓRIAS:
• PC (perímetro cefálico): ____ cm → Percentil: ____
• Distância interpupilar: ____ mm
• Comprimento da orelha: ____ cm
• Comprimento da mão: ____ cm
• Relação segmento superior/inferior: ____
• Envergadura: ____ cm  (Envergadura > altura → Marfan?)

6️⃣ TRIAGEM NEONATAL E EXAMES GENÉTICOS
┌──────────────────────────────────────────────┐
│ EXAMES REALIZADOS                            │
├──────────────────────────────────────────────┤
│ Teste do Pezinho (triagem neonatal):         │
│ ( ) Básico (6 doenças) ( ) Expandido         │
│ Resultado: ___________                       │
│                                              │
│ Cariótipo: ( ) Normal ( ) Alterado           │
│ Resultado: ___________                       │
│                                              │
│ FISH: ( ) Realizado — Resultado: ___         │
│                                              │
│ Array-CGH / SNP-array:                       │
│ ( ) Normal ( ) CNV patogênica                │
│ Resultado: ___________                       │
│                                              │
│ Exoma / Genoma:                              │
│ ( ) Solo ( ) Trio (paciente + pais)          │
│ Variante identificada: ___________           │
│ Classificação ACMG: ( ) Patogênica           │
│ ( ) Provavelmente patogênica ( ) VUS         │
│ ( ) Provavelmente benigna ( ) Benigna        │
│                                              │
│ Painel gênico específico:                    │
│ Nome do painel: ___________                  │
│ Resultado: ___________                       │
│                                              │
│ Dosagens enzimáticas (EIM):                  │
│ _______________ Resultado: ___________       │
│ Cromatografia de aminoácidos: ___________    │
│ Ácidos orgânicos urinários: ___________      │
│ Acilcarnitinas: ___________                  │
└──────────────────────────────────────────────┘

7️⃣ ACONSELHAMENTO GENÉTICO
• Risco de recorrência informado: ____%
• Padrão de herança explicado: ( ) Sim ( ) Não
• Teste genético oferecido a familiares em risco: ( ) Sim ( ) Não
• Diagnóstico pré-natal disponível: ( ) Sim ( ) Não
  Método: ( ) CVS ( ) Amniocentese ( ) PGT-M ( ) NIPT
• Encaminhamentos:
  ( ) Estimulação precoce  ( ) Fonoterapia  ( ) TO
  ( ) Fisioterapia  ( ) Psicologia  ( ) Serviço Social
  ( ) APAE / AACD / Centro de referência
• Associação de pacientes indicada: ___________
• Registro em DATASUS/SINAN (se doença de notificação): ( ) Sim ( ) Não

📌 SÍNDROMES GENÉTICAS — RED FLAGS:

→ Down (T21): hipotonia neonatal, fenda palpebral oblíqua para cima, 
  prega palmar única, espaço sandália
→ Edwards (T18): CIUR, mão cerrada (2º e 5º sobre 3º e 4º), 
  pé em mata-borrão, micrognatia
→ Patau (T13): holoprosencefalia, fenda labiopalatina, polidactilia
→ Turner (45,X): pescoço alado, linfedema neonatal, baixa estatura
→ Klinefelter (47,XXY): alta estatura, ginecomastia, infertilidade
→ Marfan: alta estatura, aracnodactilia, luxação de cristalino, 
  dilatação aórtica (Ghent criteria)
→ NF1: ≥6 manchas café com leite, neurofibromas, Lisch, glioma óptico
→ Williams: face de "elfo", estenose aórtica supravalvar, hipercalcemia
→ Prader-Willi: hipotonia neonatal grave, hiperfagia, obesidade, 
  hipogonadismo
→ Angelman: riso imotivado, ataxia, ausência de fala, EEG típico
→ DiGeorge (22q11): cardiopatia conotruncal, hipocalcemia, 
  palato insuficiente, imunodeficiência`,
    tips: "O heredograma de 3 gerações é obrigatório — ele sozinho pode sugerir o padrão de herança e direcionar a investigação. O array-CGH (microarray) substituiu o cariótipo como exame de 1ª linha para investigação de deficiência intelectual e malformações múltiplas (rendimento diagnóstico 15-20% vs 3-5% do cariótipo convencional). O exoma clínico (trio) tem rendimento diagnóstico de 25-40% quando bem indicado. VUS (variante de significado incerto) NÃO deve ser usada para aconselhamento genético — reclassificação periódica é essencial. >6 manchas café com leite >5 mm pré-puberal ou >15 mm pós-puberal = critério diagnóstico de NF1. A classificação ACMG em 5 categorias (patogênica a benigna) é o padrão-ouro para interpretação de variantes.",
  },
  {
    id: "endocrinologia",
    title: "Anamnese em Endocrinologia",
    emoji: "🦋",
    tags: ["tireoide", "diabetes", "hormônios", "metabolismo"],
    content: `═══════════════════════════════════════
 ANAMNESE ENDOCRINOLÓGICA COMPLETA
═══════════════════════════════════════

📋 MOTIVO DA CONSULTA ENDÓCRINA
• Alteração de peso (ganho/perda involuntária)
• Poliúria / polidipsia / polifagia
• Fadiga / astenia / fraqueza muscular
• Intolerância ao calor ou frio
• Alterações menstruais / infertilidade
• Alterações de crescimento / puberdade
• Nódulo cervical / bócio
• Alterações de pele / cabelo / unhas
• Fraturas de fragilidade / dor óssea

🩸 DIABETES MELLITUS — Mnemônico "4P + LICA"
• Poliúria (noctúria? quantos episódios?)
• Polidipsia (quantos litros/dia?)
• Polifagia (paradoxal com perda de peso?)
• Perda de peso (quanto em quanto tempo?)
• Lesões de pele (acantose nigricans, micose)
• Infecções de repetição (ITU, candidíase)
• Cicatrização lenta
• Alteração visual (embaçamento)

📌 Rastreio de complicações crônicas:
→ Retinopatia: última fundoscopia? queixa visual?
→ Nefropatia: edema? urina espumosa?
→ Neuropatia: parestesias? queimação plantar? 
  disfunção erétil? gastroparesia?
→ Pé diabético: calosidades? úlceras? amputações?
→ Cardiovascular: IAM? AVC? claudicação?

🦋 TIREOIDE — Mnemônico "BONFIM" (hipotireoidismo)
• Bradicardia / bradipsiquismo
• Obstipação
• Nodosidade/bócio (crescimento cervical?)
• Frio (intolerância)
• Inchaço (edema / mixedema)
• Menorragia / menstruação irregular

📌 Hipertireoidismo — Mnemônico "TREMA"
• Taquicardia / tremor fino / perda de peso
• Reflexos exaltados / retração palpebral
• Exoftalmia (Graves? — oftalmopatia?)
• Menstruação escassa / amenorreia
• Ansiedade / agitação / insônia / sudorese

⚖️ OBESIDADE — Avaliação completa
• IMC atual e histórico de peso (peso máximo/mínimo)
• Ganho de peso: quando começou? fatores associados?
• Dieta habitual (recordatório 24h)
• Atividade física (tipo, frequência, duração)
• Tentativas prévias de emagrecimento
• Medicações que engordam (corticoide, antipsicóticos, 
  insulina, sulfonilureias, betabloqueadores)
• Apneia do sono (roncos? sonolência diurna?)
• Transtorno de compulsão alimentar (binge eating)
• SOP associada? (hirsutismo, acne, irregularidade menstrual)

🦴 METABOLISMO ÓSSEO
• Fraturas prévias (local, mecanismo, idade)
• Fraturas de fragilidade? (vértebra, fêmur, rádio distal)
• Perda de altura? (cifose dorsal?)
• Quedas (frequência, circunstâncias)
• Cálcio/vitamina D (suplementação? sol?)
• Menopausa (idade? TRH?)
• Corticoterapia crônica?
• Causas 2árias: hiperparatireoidismo, hipogonadismo

🧪 ADRENAL — Mnemônico "CUSHMA"
Síndrome de Cushing:
• Central obesity / moon face / buffalo hump
• Úlceras / estrias violáceas
• Skin thin / bruising fácil
• Hipertensão / hiperglicemia
• Miopatia proximal / fraqueza
• Acne / hirsutismo

Insuficiência adrenal — "HAPA":
• Hipotensão ortostática / hiperpigmentação
• Astenia / fadiga profunda
• Perda de peso / apetite por sal
• Anorexia / náuseas / vômitos

🧬 EIXO HIPOTÁLAMO-HIPÓFISE
• Cefaleia (compressão de quiasma?)
• Alteração de campo visual (hemianopsia bitemporal)
• Galactorreia (prolactinoma?)
• Amenorreia / disfunção erétil / libido
• Acromegalia: crescimento de extremidades, prognatismo
• Diabetes insipidus: poliúria aquosa (>3L/dia)

📋 EXAMES A SOLICITAR (checklist)
□ Glicemia jejum / HbA1c / TOTG 75g
□ TSH / T4 livre (± T3, anti-TPO, anti-Tg)
□ Perfil lipídico completo
□ Cortisol basal / ACTH / cortisol salivar noturno
□ Ca / P / PTH / 25-OH vitamina D
□ Densitometria óssea (DEXA)
□ USGTC (se nódulo/bócio)
□ Prolactina / IGF-1 / GH
□ Testosterona / DHEA-S / 17-OH progesterona`,
    tips: "O mnemônico '4P + LICA' cobre os sintomas clássicos de DM descompensado. Na tireoide, BONFIM (hipotireoidismo) e TREMA (hipertireoidismo) são úteis para direcionar o raciocínio. Sempre perguntar sobre medicações que causam ganho de peso e sobre história familiar endócrina (DM, tireoide, osteoporose). Na avaliação de nódulo tireoidiano, o TI-RADS da USGTC e o sistema Bethesda da PAAF guiam a conduta. HbA1c ≥6,5% confirma DM; entre 5,7-6,4% indica pré-diabetes. O FRAX estima risco de fratura em 10 anos e auxilia na decisão terapêutica da osteoporose.",
  },
  {
    id: "urologia",
    title: "Anamnese em Urologia",
    emoji: "🫘",
    tags: ["próstata", "urinário", "litíase", "disfunção erétil"],
    content: `═══════════════════════════════════════
 ANAMNESE UROLÓGICA COMPLETA
═══════════════════════════════════════

📋 SINTOMAS DO TRATO URINÁRIO INFERIOR (LUTS)
Mnemônico "FINO JIPE" (armazenamento + esvaziamento)

Armazenamento:
• Frequência (>8x/dia?)
• Incontinência (esforço? urgência? mista?)
• Noctúria (quantas vezes?)
• Overactive bladder (urgência miccional?)

Esvaziamento:
• Jato fraco / intermitente
• Início hesitante (hesitância)
• Push (esforço abdominal para urinar)
• Esvaziamento incompleto (sensação de resíduo)

📊 IPSS — International Prostate Symptom Score
(Aplicar questionário padronizado — 7 perguntas + QoL)
• Esvaziamento incompleto (0-5)
• Frequência (0-5)
• Intermitência (0-5)
• Urgência (0-5)
• Jato fraco (0-5)
• Esforço (0-5)
• Noctúria (0-5)
• Qualidade de vida (0-6)
→ Leve: 0-7 | Moderado: 8-19 | Grave: 20-35

🪨 LITÍASE URINÁRIA — Mnemônico "COLICA"
• Cólica lombar (início súbito, irradiação?)
• Onset (quando começou? duração?)
• Localização (lombar → flanco → fossa ilíaca → escroto)
• Irradiação (flanco → genitália? testículo?)
• Cor da urina (hematúria macro/micro?)
• Antecedentes (cálculos prévios? litotripsia? cirurgia?)

📌 Perguntar sempre:
→ Ingestão hídrica (quantos litros/dia?)
→ Dieta (excesso de proteína, sal, oxalato?)
→ Composição do cálculo (se análise prévia)
→ Medicações (indinavir, topiramato, vitamina C)
→ Doenças associadas (hiperparatireoidismo, gota, Crohn)
→ História familiar de litíase (1º grau)

🫘 PRÓSTATA — Avaliação completa
HPB (Hiperplasia Prostática Benigna):
• LUTS obstrutivos (jato fraco, hesitância)
• LUTS irritativos (urgência, frequência, noctúria)
• Retenção urinária aguda? (globo vesical?)
• Hematúria macroscópica?
• ITU de repetição?
• Uso de alfa-bloqueadores / inibidores 5α-redutase?

Câncer de próstata:
• PSA prévio? (valores e evolução?)
• Toque retal prévio? (alterações?)
• Biópsia prévia? (Gleason? ISUP?)
• HF de Ca próstata (1º grau <65 anos?)
• Sintomas de doença avançada: dor óssea, 
  perda de peso, compressão medular

💧 INCONTINÊNCIA URINÁRIA — "DIAPPERS"
(causas reversíveis — mnemônico de Resnick)
• Delirium
• Infecção (ITU)
• Atrofia vaginal (pós-menopausa)
• Pharmaceuticals (diuréticos, alfa-bloqueadores)
• Psychological (depressão)
• Excessive urine output (DM, IC, hipercalcemia)
• Restricted mobility
• Stool impaction (fecaloma)

📌 Classificação funcional:
→ Esforço: perda com tosse/espirro/exercício
→ Urgência: perda precedida de desejo imperioso
→ Mista: ambos os componentes
→ Overflow: bexigoma / resíduo pós-miccional elevado
→ Funcional: limitação física/cognitiva

🔴 HEMATÚRIA — Roteiro diagnóstico
• Macro ou microscópica?
• Início, meio ou final da micção? (uretral/vesical/renal)
• Coágulos? (formato — vermiforme = ureteral)
• Sintomas associados (dor? disúria? febre?)
• Idade >40 anos + hematúria = EXCLUIR neoplasia
• Medicações (anticoagulantes, AINEs)
• Exercício intenso recente?

🍆 DISFUNÇÃO ERÉTIL — Mnemônico "ESCORE"
• Ereção: matinal preservada? (sugere causa psicogênica)
• Sustentação: mantém durante o ato?
• Curso: início gradual (orgânico) vs súbito (psicogênico)
• Orgasmo: preservado? ejaculação normal?
• Relação: satisfação do casal? parceira/o?
• Etiologia: DM? HAS? tabagismo? medicações? 
  (ISRS, betabloqueadores, espironolactona)

📌 Escala IIEF-5 (International Index of Erectile Function)
→ 5 perguntas, score 5-25
→ Grave: 5-7 | Moderada: 8-11 | Leve-mod: 12-16 | 
  Leve: 17-21 | Normal: 22-25

📋 EXAMES INICIAIS (checklist urológico)
□ Urina tipo I / Urocultura
□ Creatinina / Ureia / TFG
□ PSA total e livre (se indicado)
□ USGTRU (rins e vias urinárias)
□ Urofluxometria (se LUTS)
□ Resíduo pós-miccional (USG ou BladderScan)
□ TC sem contraste (se litíase)
□ Citologia urinária (se hematúria >40 anos)
□ Estudo urodinâmico (se incontinência complexa)`,
    tips: "O IPSS é o instrumento padrão para quantificar LUTS — aplicar em toda consulta urológica masculina >50 anos. O mnemônico DIAPPERS de Resnick identifica causas reversíveis de incontinência antes de investigar causas estruturais. Hematúria macroscópica indolor em >40 anos é câncer de bexiga até que se prove o contrário — cistoscopia é mandatória. PSA deve ser interpretado com velocidade (variação anual), densidade (PSA/volume prostático) e relação livre/total. Na litíase, cálculos <5mm têm 90% de chance de eliminação espontânea; 5-10mm ~50%; >10mm geralmente requer intervenção. Ereção matinal preservada + disfunção durante o ato = forte indicativo de causa psicogênica.",
  },
  {
    id: "cirurgia-plastica-queimaduras",
    title: "Anamnese em Cirurgia Plástica e Queimaduras",
    emoji: "🔥",
    tags: ["queimadura", "enxerto", "reconstrutiva", "estética"],
    content: `═══════════════════════════════════════
 ANAMNESE EM CIRURGIA PLÁSTICA E QUEIMADURAS
═══════════════════════════════════════

🔥 QUEIMADURAS — Avaliação Primária (ABCDE + F)
A — Airway: inalação? rouquidão? estridor? fuligem?
B — Breathing: dispneia? queimadura circunferencial torax?
C — Circulation: acesso venoso? reposição volêmica
D — Disability: nível de consciência (CO? cianeto?)
E — Exposure: SCQ? profundidade? circunferencial?
F — Fluid resuscitation (Parkland)

📊 REGRA DOS 9 DE WALLACE (Adulto)
┌──────────────────────────┬────────┐
│ Região                   │   %    │
├──────────────────────────┼────────┤
│ Cabeça/pescoço           │   9%   │
│ Membro superior (cada)   │   9%   │
│ Tronco anterior          │  18%   │
│ Tronco posterior         │  18%   │
│ Membro inferior (cada)   │  18%   │
│ Períneo/genitália        │   1%   │
└──────────────────────────┴────────┘
Total = 100%

📌 Criança: usar Lund-Browder (cabeça maior proporcionalmente)
📌 Palma do paciente ≈ 1% SCQ (útil para queimaduras irregulares)

🎯 CLASSIFICAÇÃO DE PROFUNDIDADE
1º grau (superficial):
  → Eritema, dor, sem bolha — ex: queimadura solar
  → NÃO entra no cálculo de SCQ para Parkland

2º grau superficial (espessura parcial superficial):
  → Bolhas, base rósea, muito dolorosa, branqueia
  → Cicatriza em 7-14 dias sem sequelas

2º grau profunda (espessura parcial profunda):
  → Bolhas, base esbranquiçada/mosqueada
  → Dor variável, pode precisar de enxerto
  → Cicatriza em 14-21 dias com risco de cicatriz

3º grau (espessura total):
  → Escara branca/marrom/preta, indolor, não branqueia
  → Textura de couro — SEMPRE precisa de enxerto

4º grau: compromete músculo/osso/tendão

💧 FÓRMULA DE PARKLAND
Volume = 4 mL × peso (kg) × SCQ (%)
→ 50% nas primeiras 8h (desde a queimadura, não da chegada!)
→ 50% nas próximas 16h
→ Ringer Lactato como cristaloide de escolha
→ Meta: diurese 0,5-1 mL/kg/h (adulto), 1 mL/kg/h (criança)

📌 Critérios de INTERNAÇÃO / Centro de Queimados:
→ SCQ ≥20% (adulto) ou ≥10% (criança/idoso)
→ Queimadura 3º grau ≥5%
→ Face / mãos / pés / períneo / articulações
→ Queimadura circunferencial (risco de síndrome compartimental)
→ Lesão inalatória (rouquidão, fuligem oronasal, escarro carbonáceo)
→ Queimadura elétrica / química
→ Trauma associado
→ Comorbidades graves (DM, IC, imunossupressão)

🧪 LESÃO INALATÓRIA — Mnemônico "FUMAÇA"
• Fuligem em narinas/orofaringe
• Ulceração de mucosa oral
• Mudança de voz (rouquidão/estridor)
• Ambiente fechado (incêndio confinado)
• Carbonácea (expectoração)
• Edema facial/cervical progressivo
→ Intubação precoce se 2+ critérios!
→ Dosagem de carboxihemoglobina (COHb)
→ COHb >15% = intoxicação por CO significativa

⚡ QUEIMADURA ELÉTRICA — Particularidades
• Lesão maior do que aparenta (iceberg effect)
• Entrada + saída do arco elétrico
• Rabdomiólise → CPK / mioglobina / clearance de Cr
• Arritmias → monitorização cardíaca 24-48h (ECG seriado)
• Síndrome compartimental → fasciotomia precoce
• Lesão renal (mioglobinúria → hidratação agressiva + 
  alcalinização da urina se CPK >5000)

🏥 CIRURGIA PLÁSTICA RECONSTRUTIVA — "Escada Reconstrutiva"
1. Cicatrização por segunda intenção
2. Fechamento primário direto
3. Enxerto de pele (parcial ou total)
4. Retalho local (avanço, rotação, transposição)
5. Retalho regional (pediculado)
6. Retalho livre (microcirúrgico)

📌 Enxerto de pele:
→ Parcial (EPEP): derme parcial, área doadora cicatriza sozinha
→ Total (EPTC): derme completa, melhor resultado estético, 
  área doadora precisa de fechamento
→ Leito receptor: vascularizado, sem infecção, sem osso 
  exposto sem periósteo

💉 CIRURGIA PLÁSTICA ESTÉTICA — Avaliação pré-operatória

Anamnese específica:
• Motivação real (expectativa realista?)
• Dismorfismo corporal? (BDD — Body Dysmorphic Disorder)
  → Preocupação excessiva com "defeito" mínimo/inexistente
  → CONTRAINDICAÇÃO a procedimento estético
• Cirurgias prévias (ficha técnica de próteses?)
• Uso de tabaco (risco de necrose — suspender 4-6 sem antes)
• Medicações: AAS, anticoagulantes, vitamina E, fitoterápicos
• Alergias (anestésicos locais, latex, fitas)
• Cicatrização: queloide? cicatriz hipertrófica prévia?
• Expectativa do paciente vs possibilidade cirúrgica

📌 Red flags para NÃO operar:
→ Expectativas irrealistas
→ Motivação por terceiros (parceiro/a exige)
→ Histórico de múltiplas cirurgias insatisfatórias
→ BDD (Body Dysmorphic Disorder)
→ Instabilidade emocional / transtorno psiquiátrico ativo

📊 CLASSIFICAÇÃO DE FITZPATRICK (fototipo cutâneo)
I — Sempre queima, nunca bronzeia (pele muito clara)
II — Sempre queima, bronzeia minimamente
III — Queima moderadamente, bronzeia gradualmente
IV — Queima minimamente, bronzeia facilmente
V — Raramente queima, bronzeia profusamente
VI — Nunca queima, pele muito pigmentada
→ Importante para: risco de cicatriz, 
  hiperpigmentação pós-inflamatória, laser

📋 CHECKLIST DOCUMENTAÇÃO (queimados)
□ Hora e mecanismo da queimadura
□ SCQ (Regra dos 9 ou Lund-Browder)
□ Profundidade (1º, 2º sup, 2º prof, 3º, 4º grau)
□ Regiões acometidas (mapear em diagrama)
□ Circunferencial? (risco compartimental)
□ Lesão inalatória? (critérios FUMAÇA)
□ Parkland calculado e iniciado
□ Vacina antitetânica (última dose?)
□ Foto-documentação (com consentimento)
□ Diurese horária monitorizada`,
    tips: "A Regra dos 9 de Wallace é rápida para adultos, mas em crianças use Lund-Browder (cabeça = 18% no RN vs 9% no adulto). A fórmula de Parkland é um GUIA — titular pela diurese (0,5-1 mL/kg/h). Queimadura de 1º grau NÃO entra no cálculo de SCQ para Parkland. Queimadura circunferencial de extremidade pode causar síndrome compartimental — escarotomia de urgência. Na lesão inalatória, a intubação precoce salva vidas — edema de glote pode tornar a via aérea impossível em horas. Queimadura elétrica: a lesão real é sempre maior que a cutânea visível (efeito iceberg) — monitorizar rabdomiólise e arritmias. Na estética, o rastreio de BDD é obrigatório — operar paciente com dismorfismo corporal gera insatisfação crônica e litígios. Fitzpatrick orienta risco de cicatrização — fototipos IV-VI têm maior risco de queloide e hiperpigmentação pós-inflamatória.",
  },
  {
    id: "infectologia",
    title: "Anamnese em Infectologia (HIV/AIDS e Tuberculose)",
    emoji: "🦠",
    tags: ["infectologia", "HIV", "AIDS", "tuberculose", "TARV", "IST"],
    content: `═══════════════════════════════════════════
 ANAMNESE EM INFECTOLOGIA — HIV/AIDS E TB
═══════════════════════════════════════════

📋 1. RASTREIO DE RISCO PARA HIV
□ Relações sexuais desprotegidas (anal/vaginal/oral)
□ Número de parceiros nos últimos 12 meses
□ Uso de preservativo: ( ) sempre ( ) às vezes ( ) nunca
□ Parceiro(a) com HIV ou status desconhecido
□ ISTs prévias: sífilis, gonorreia, clamídia, HPV, herpes
□ Uso de drogas injetáveis / compartilhamento de agulhas
□ Transfusão sanguínea antes de 1993
□ Acidente com material biológico (profissional)
□ Exposição vertical (gestante ou neonato)

📋 2. ESTADIAMENTO HIV — CATEGORIAS CDC
┌────────────────┬──────────────────────┐
│ CATEGORIA      │ CRITÉRIOS            │
├────────────────┼──────────────────────┤
│ A (assintomát.)│ Infecção aguda,      │
│                │ adenopatia generaliz. │
│ B (sintomátic.)│ Candidíase oral,     │
│                │ herpes-zóster >1     │
│                │ dermátomo, diarreia  │
│                │ >1 mês, febre >1 mês│
│ C (AIDS)       │ Doenças definidoras  │
│                │ de AIDS              │
└────────────────┴──────────────────────┘

CD4 (células/mm³):
≥500 → Categoria 1
200-499 → Categoria 2
<200 → Categoria 3 (AIDS independente de sintomas)

📋 3. DOENÇAS DEFINIDORAS DE AIDS (principais)
Mnemônico: CCCC-TTTML-PKS
□ Candidíase esofágica/traqueal/pulmonar
□ Criptococose extrapulmonar (meningite)
□ CMV (retinite ou outro órgão exceto fígado/baço/linfonodo)
□ Criptosporidiose intestinal crônica (>1 mês)
□ Toxoplasmose cerebral
□ Tuberculose extrapulmonar ou disseminada
□ Tuberculose pulmonar
□ Tumor: linfoma não-Hodgkin/Hodgkin/Burkitt
□ Mycobacterium avium disseminado
□ Leucoencefalopatia multifocal progressiva (LMP)
□ Pneumocistose (PCP — Pneumocystis jirovecii)
□ Kaposi (sarcoma)
□ Síndrome consuntiva do HIV (wasting)

📋 4. AVALIAÇÃO PRÉ-TARV
□ Data do diagnóstico: ___/___/___
□ Contagem CD4 mais recente: ____ cél/mm³
□ Carga viral mais recente: ____ cópias/mL
□ Genotipagem pré-tratamento realizada? ( ) sim ( ) não
□ HLA-B*5701 (se uso de abacavir): ( ) negativo ( ) positivo
□ Coinfecções: ( ) HBV ( ) HCV ( ) sífilis ( ) TB ( ) HTLV
□ Comorbidades: DM, HAS, dislipidemia, doença renal, psiquiátrica
□ Medicações em uso (interações com TARV!)
□ Tabagismo / etilismo / drogas ilícitas
□ Gestação atual ou planejada?
□ Função renal (TFG) e hepática (transaminases)
□ Perfil lipídico e glicemia

📋 5. ESQUEMA TARV — REGISTRO E ADESÃO
Esquema atual: ______________________________
Data de início: ___/___/___
Esquemas anteriores e motivos de troca: _________
□ Adesão auto-referida:
  ( ) >95% (ótima) ( ) 80-95% ( ) <80% (crítica)
□ Barreiras à adesão:
  ( ) Esquecimento ( ) Efeitos adversos
  ( ) Estigma ( ) Custo/acesso
  ( ) Comprimidos grandes/muitos
  ( ) Uso de álcool/drogas
□ Efeitos adversos da TARV:
  ( ) Náusea/diarreia ( ) Cefaleia ( ) Insônia/sonhos vívidos
  ( ) Lipodistrofia ( ) Neuropatia ( ) Nefrolitíase (IDV/ATV)
  ( ) Alteração renal (TDF) ( ) Anemia (AZT) ( ) Rash

📋 6. PROFILAXIAS E IMUNIZAÇÕES
□ Profilaxia primária para PCP (CD4 <200):
  SMX-TMP 800/160mg/dia → ( ) em uso ( ) não indicada
□ Profilaxia para MAC (CD4 <50):
  Azitromicina 1200mg/sem → ( ) em uso ( ) não indicada
□ ILTB: Prova tuberculínica (PPD) ≥5mm = tratar
  Esquema: ( ) Isoniazida 270 doses ( ) Rifampicina 120 doses
□ Imunizações (SE CD4 >200):
  ( ) Hepatite B ( ) Pneumococo 23v ( ) Influenza anual
  ( ) HPV (até 45 anos) ( ) dT/dTpa ( ) COVID-19
  ⚠️ CONTRAINDICADAS se CD4<200: BCG, febre amarela, varicela

═══════════════════════════════════════════
 SEÇÃO TUBERCULOSE (TB)
═══════════════════════════════════════════

📋 7. RASTREIO DE TB — SINTOMAS CLÁSSICOS
Mnemônico: TEFE (Tosse-Emagrecimento-Febre-Escarros)
□ Tosse ≥3 semanas (qualquer padrão)
□ Febre (geralmente vespertina) ≥2 semanas
□ Sudorese noturna
□ Emagrecimento não intencional
□ Hemoptise (escarro com sangue)
□ Astenia / hiporexia

⚠️ Em PVHIV: qualquer tosse = investigar TB (sem exigir ≥3 semanas!)

📋 8. FATORES DE RISCO PARA TB
□ Contato domiciliar/próximo com caso de TB
□ Populações vulneráveis:
  ( ) Privados de liberdade ( ) Indígenas
  ( ) Pessoas em situação de rua ( ) PVHIV
  ( ) Profissionais de saúde
□ Comorbidades: HIV, diabetes, silicose, neoplasias,
  insuficiência renal, uso de imunossupressores
□ Uso de corticoide sistêmico >15mg/dia por >2 semanas
□ TB prévia? Data: ___ Esquema: ___ Desfecho: ___
□ Tabagismo / etilismo

📋 9. INVESTIGAÇÃO DIAGNÓSTICA
□ Baciloscopia de escarro (BAAR): 2 amostras
  1ª amostra: ( ) positivo ( ) negativo
  2ª amostra: ( ) positivo ( ) negativo
□ TRM-TB (GeneXpert / Teste Rápido Molecular):
  ( ) MTB detectado ( ) não detectado
  ( ) Resistência à rifampicina detectada
□ Cultura para micobactérias + TSA (se disponível)
□ Rx de tórax: _______________________
□ PPD/IGRA (para ILTB, não para TB ativa)
□ Em TB extrapulmonar: biópsia, líquor, líquido pleural (ADA)

📋 10. TRATAMENTO — ESQUEMA BÁSICO (RIPE)
┌─────────┬──────────────────────────────────┐
│ FASE     │ MEDICAMENTOS                    │
├─────────┼──────────────────────────────────┤
│ Intensiva│ 2 meses: RIPE                   │
│ (2RHZE)  │ R=Rifampicina H=Isoniazida      │
│          │ Z=Pirazinamida E=Etambutol       │
├─────────┼──────────────────────────────────┤
│ Manuten. │ 4 meses: RH                     │
│ (4RH)    │ R=Rifampicina H=Isoniazida      │
└─────────┴──────────────────────────────────┘

□ Peso: ___kg → Dose ajustada (comp. dose fixa combinada)
□ Hepatotoxicidade: monitorar TGO/TGP basal e mensal
□ Neuropatia por isoniazida → Piridoxina (B6) 50mg/dia
□ Hiperuricemia por pirazinamida → monitorar ácido úrico
□ Neurite óptica por etambutol → avaliar acuidade visual

📋 11. TDO E ADESÃO
□ Tratamento Diretamente Observado indicado? ( ) sim ( ) não
□ Local de TDO: ( ) UBS ( ) domicílio ( ) outro
□ Barreiras à adesão: ___________________________
□ Comunicantes rastreados? ( ) sim → nº: ___ ( ) não
□ Notificação SINAN realizada? ( ) sim ( ) não

📋 CHECKLIST FINAL — INFECTOLOGIA HIV/TB
□ Estadiamento HIV (CDC) determinado
□ CD4 e CV solicitados/revisados
□ Coinfecções rastreadas (HBV/HCV/sífilis/TB)
□ TARV prescrita conforme protocolo DCCI/MS
□ Profilaxias indicadas conforme CD4
□ Adesão avaliada e barreiras identificadas
□ Se TB: baciloscopia/TRM-TB solicitados
□ Comunicantes convocados e rastreados
□ Notificação compulsória realizada
□ Retorno agendado e plano terapêutico explicado`,
    tips: "Em PVHIV, QUALQUER tosse deve ser investigada para TB — não exigir ≥3 semanas. A coinfecção TB-HIV é a principal causa de óbito em PVHIV no Brasil. Sempre verificar interações entre TARV e tuberculostáticos: rifampicina reduz drasticamente níveis de inibidores de protease e dolutegravir (DTG requer dose dobrada 50mg 12/12h). CD4 <200 define AIDS independente de sintomas. A adesão >95% ao TARV é essencial para supressão viral — adesão de 80% pode gerar falha virológica e resistência. PPD ≥5mm em PVHIV = tratar ILTB. Nunca usar BCG ou febre amarela em imunodeprimidos graves (CD4 <200). Na TB, o TRM-TB (GeneXpert) detecta simultaneamente MTB e resistência à rifampicina em 2 horas — é o teste inicial preferencial no SUS. Piridoxina (B6) previne neuropatia pela isoniazida — sempre prescrever em PVHIV, gestantes, diabéticos e etilistas.",
  },
  {
    id: "hematologia",
    title: "Anamnese em Hematologia",
    emoji: "🩸",
    tags: ["hematologia", "anemia", "coagulopatia", "leucemia", "linfoma", "hemograma"],
    content: `═══════════════════════════════════════════
 ANAMNESE EM HEMATOLOGIA
═══════════════════════════════════════════

📋 1. QUEIXA HEMATOLÓGICA — TRÍADE SINTOMÁTICA
Avaliar os 3 eixos da medula óssea:

A) SÉRIE VERMELHA (anemia):
□ Fadiga / cansaço progressivo
□ Dispneia aos esforços (escalonada)
□ Palidez cutaneomucosa
□ Taquicardia / palpitações
□ Tontura / lipotimia
□ Cefaleia
□ Pica (pagofagia, geofagia) → pensar ferropenia
□ Síndrome de pernas inquietas → ferropenia

B) SÉRIE BRANCA (leucócitos):
□ Infecções de repetição
□ Febre sem foco identificável
□ Úlceras orais recorrentes
□ Herpes recorrente / candidíase

C) PLAQUETAS / COAGULAÇÃO:
□ Petéquias / equimoses espontâneas
□ Epistaxe / gengivorragia
□ Menorragia (quantificar: troca de absorvente/hora)
□ Sangramento pós-procedimentos (extração dentária, cirurgia)
□ Hematúria / melena / hematoquezia
□ Sangramento desproporcional ao trauma

📋 2. CLASSIFICAÇÃO DA ANEMIA
Mnemônico por VCM:

MICROCÍTICA (VCM <80): FAST
□ Ferropenia (causa mais comum no mundo)
□ Anemia de doença crônica (pode ser normo)
□ Sideroblástica
□ Talassemia

NORMOCÍTICA (VCM 80-100): HIDRA
□ Hemolítica
□ Insuficiência renal (↓EPO)
□ Doença crônica
□ Reticulocitose (regenerativa)
□ Aplasia medular

MACROCÍTICA (VCM >100): BALM
□ B12 deficiência (anemia megaloblástica)
□ Ácido fólico deficiência
□ Liver disease (hepatopatia / etilismo)
□ Mielodisplasia / medicamentos (MTX, AZT, hidroxiureia)

📋 3. HISTÓRIA ALIMENTAR E CARENCIAL
□ Dieta: vegetariana/vegana? (risco B12)
□ Consumo de carne vermelha / vísceras (ferro heme)
□ Consumo de folhas verdes escuras (ácido fólico)
□ Consumo de leite e derivados (B12)
□ Fatores que reduzem absorção de ferro:
  ( ) Chá/café junto às refeições
  ( ) Uso de IBP/antiácidos crônicos
  ( ) Cirurgia bariátrica (bypass)
  ( ) Doença celíaca
□ Fatores que aumentam absorção:
  ( ) Vitamina C junto ao ferro
  ( ) Carne junto a vegetais ricos em ferro

📋 4. HISTÓRIA DE SANGRAMENTO
Escore de sangramento (ISTH-BAT simplificado):
□ Epistaxe: ( ) raro ( ) >5 episódios ( ) necessitou cauterização
□ Sangramento cutâneo: ( ) equimoses >1cm sem trauma ( ) petéquias
□ Sangramento oral: ( ) gengivorragia espontânea ( ) pós-extração
□ Menorragia: ( ) >7 dias ( ) troca absorvente <2h ( ) coágulos >2,5cm
□ Sangramento pós-cirúrgico: ( ) nunca operou ( ) normal ( ) excessivo
□ Sangramento pós-parto: ( ) normal ( ) hemorragia ( ) transfusão
□ Sangramento GI: ( ) melena ( ) hematoquezia
□ Hematúria: ( ) macro ( ) micro
□ Hemartrose: ( ) sim → pensar hemofilia

📋 5. HISTÓRIA TRANSFUSIONAL
□ Já recebeu transfusão? ( ) sim ( ) não
□ Quantas vezes? ____  Última: ___/___/___
□ Componentes: ( ) concentrado hemácias ( ) plaquetas
  ( ) plasma ( ) crioprecipitado
□ Reação transfusional prévia?
  ( ) Febre ( ) Urticária ( ) Anafilaxia
  ( ) TRALI ( ) Hemólise ( ) Nenhuma
□ Aloimunização conhecida? Anticorpos: _____________

📋 6. RASTREIO DE HEMOGLOBINOPATIAS
□ Etnia/origem: ( ) Afrodescendente ( ) Mediterrâneo
  ( ) Asiático ( ) Indígena
□ Eletroforese de hemoglobina prévia? Resultado: ____
□ Traço falciforme conhecido na família?
□ Episódios de crise vaso-oclusiva:
  ( ) Dor óssea intensa ( ) Priapismo
  ( ) Síndrome torácica aguda ( ) AVC
  ( ) Sequestro esplênico
□ Esplenectomia prévia? ( ) sim → vacinação OK?
□ Úlceras de MMII crônicas?
□ Uso de hidroxiureia? ( ) sim ( ) não

📋 7. RASTREIO DE NEOPLASIAS HEMATOLÓGICAS
Sinais de alarme — "RED FLAGS":
□ Linfadenopatia >2cm, endurecida, aderida, indolor
□ Esplenomegalia (sensação de plenitude, massa em HE)
□ Hepatomegalia
□ Febre prolongada sem foco (>2 semanas)
□ Sudorese noturna (encharca roupa/lençol)
□ Perda ponderal >10% em 6 meses (sintomas B)
□ Prurido generalizado sem causa dermatológica
□ Dor óssea (mieloma, leucemia)
□ Hipercalcemia sintomática (mieloma): sede, poliúria, confusão
□ Infecções oportunistas recorrentes

📋 8. DISTÚRBIOS DA COAGULAÇÃO
□ História familiar de sangramento excessivo?
□ Consanguinidade parental?
□ Uso de anticoagulantes/antiplaquetários:
  ( ) Varfarina (RNI alvo: ___) ( ) Heparina
  ( ) DOACs: ( ) Rivaroxabana ( ) Apixabana ( ) Dabigatrana
  ( ) AAS ( ) Clopidogrel ( ) Ticagrelor
□ Trombose prévia?
  ( ) TVP ( ) TEP ( ) Trombose arterial ( ) AVC
  ( ) Trombose em sítio atípico (esplâncnica, cerebral)
□ Rastreio de trombofilia:
  ( ) Fator V Leiden ( ) Mutação protrombina G20210A
  ( ) Deficiência proteína C/S ( ) Antitrombina
  ( ) SAF (anticorpos antifosfolípides)
□ Perdas gestacionais recorrentes? → SAF?

📋 CHECKLIST FINAL — HEMATOLOGIA
□ Tríade medular avaliada (série vermelha/branca/plaquetas)
□ Anemia classificada por VCM e reticulócitos
□ História carencial/alimentar completa
□ Escore de sangramento aplicado
□ História transfusional documentada
□ Hemoglobinopatia rastreada (se indicado)
□ Red flags de neoplasia hematológica investigados
□ Distúrbios de coagulação e trombofilia avaliados
□ Hemograma, reticulócitos, ferritina, B12, folato solicitados
□ Esfregaço de sangue periférico solicitado`,
    tips: "Ferritina é o PRIMEIRO exame a alterar na ferropenia — cai antes do VCM e da hemoglobina. Mas ferritina é proteína de fase aguda: em infecção/inflamação pode estar falsamente normal mesmo com estoques depletados (usar saturação de transferrina <20% como alternativa). Reticulócitos dividem anemias em HIPO e HIPERPROLIFERATIVAS — esse dado muda completamente a investigação. Anemia + plaquetopenia + leucopenia = pensar PANCITOPENIA → mielograma/biópsia de MO. Os 'sintomas B' (febre, sudorese noturna, perda >10% peso) são obrigatórios no estadiamento de linfomas. Na hemofilia, o sangramento é tardio e profundo (hemartrose, hematoma muscular) — diferente da plaquetopenia (petéquias, mucosas). SAF é a trombofilia adquirida mais comum — sempre investigar em trombose em jovem, AVC inexplicado ou perdas gestacionais de repetição. DOACs não requerem monitorização laboratorial de rotina, mas não têm antídoto universal facilmente disponível (idarucizumabe para dabigatrana, andexanet alfa para anti-Xa).",
  },
  {
    id: "medicina-viajante",
    title: "Anamnese em Medicina do Viajante",
    emoji: "✈️",
    tags: ["medicina do viajante", "viagem", "vacinas", "malária", "febre amarela", "profilaxia"],
    content: `═══════════════════════════════════════════
 ANAMNESE EM MEDICINA DO VIAJANTE
═══════════════════════════════════════════

📋 1. CONSULTA PRÉ-VIAGEM — DADOS DA VIAGEM
Mnemônico: DESTINO
□ Destino(s): país/região específica
□ Estadia: duração da viagem (dias/semanas/meses)
□ Saída: data de partida ___/___/___
□ Tipo de viagem:
  ( ) Turismo ( ) Trabalho ( ) Voluntariado/missão
  ( ) Aventura/ecoturismo ( ) Visita familiares (VFR)
  ( ) Estudo/intercâmbio
□ Itinerário: urbano vs rural? Áreas remotas?
□ Noites: hospedagem
  ( ) Hotel ( ) Hostel ( ) Camping ( ) Casas locais
□ Orçamento: acesso a atendimento médico local?

📋 2. PERFIL DO VIAJANTE
□ Idade: ____ anos
□ Comorbidades: _______________________________
□ Medicações em uso: __________________________
□ Alergias (especialmente a vacinas/ovos/gelatina): ___
□ Imunossupressão? ( ) sim → contraindicações para vacinas vivas!
□ Gestante? ( ) sim → restrições medicamentosas e vacinais
□ História vacinal prévia (cartão de vacinação):
  ( ) Febre amarela ( ) Hepatite A ( ) Hepatite B
  ( ) Tétano ( ) Febre tifoide ( ) Meningococo
  ( ) Raiva ( ) Poliomielite ( ) COVID-19
  ( ) Encefalite japonesa ( ) Cólera oral
□ Viagens anteriores e doenças adquiridas em viagem: ___

📋 3. AVALIAÇÃO DE RISCOS POR REGIÃO
┌────────────────┬──────────────────────────────┐
│ RISCO          │ REGIÕES ENDÊMICAS            │
├────────────────┼──────────────────────────────┤
│ Malária        │ África subsaariana, Amazônia, │
│                │ Sudeste Asiático, Oceania     │
│ Febre amarela  │ Brasil (exceto litoral Sul/SE)│
│                │ África equatorial             │
│ Dengue/Zika/   │ Tropicais/subtropicais       │
│ Chikungunya    │ América Latina, Ásia, África  │
│ Febre tifoide  │ Sul da Ásia, África, Am. Lat. │
│ Cólera         │ África, Haiti, Sul da Ásia   │
│ Esquistossomose│ África, Brasil (MG/BA/PE/AL) │
│ Raiva          │ Ásia (Índia), África, Am.Lat.│
│ Meningococo    │ Cinturão meningítico africano│
│ Altitude       │ Andes, Himalaias, Kilimanjaro│
└────────────────┴──────────────────────────────┘

📋 4. PROFILAXIAS RECOMENDADAS
A) QUIMIOPROFILAXIA PARA MALÁRIA:
□ Indicada para área de risco?
  ( ) Atovaquona-proguanil: iniciar 1-2 dias antes
  ( ) Doxiciclina: iniciar 1-2 dias antes
  ( ) Mefloquina: iniciar 2-3 semanas antes
□ Contraindicações verificadas?
□ Medidas anti-mosquito complementares:
  ( ) Repelente DEET ≥30% ( ) Roupas longas ao entardecer
  ( ) Mosquiteiro impregnado com permetrina
  ( ) Ar condicionado (reduz picadas)

B) DIARREIA DO VIAJANTE:
□ Orientações de higiene alimentar:
  "Boil it, cook it, peel it, or forget it"
□ Kit de auto-tratamento:
  ( ) Loperamida (se não-disentérica)
  ( ) Azitromicina 1000mg dose única (se disentérica/febre)
  ( ) Sais de reidratação oral
□ Rifaximina profilática (em situações especiais)

C) MAL DE ALTITUDE:
□ Destino >2.500m? Tempo de aclimatação planejado?
□ Acetazolamida profilática 125mg 12/12h
  (iniciar 24h antes da ascensão)
□ Orientar: ascensão gradual, hidratação, evitar álcool
□ Sinais de alarme: cefaleia intensa, ataxia, edema pulmonar

📋 5. IMUNIZAÇÕES DO VIAJANTE
□ Vacinas OBRIGATÓRIAS (exigência sanitária):
  ( ) Febre amarela → CIVP (certificado internacional)
  ( ) Meningococo ACWY → exigência para Hajj/Arábia Saudita
  ( ) Poliomielite → exigência para alguns países
□ Vacinas RECOMENDADAS conforme destino:
  ( ) Hepatite A (2 doses: 0, 6 meses)
  ( ) Febre tifoide (oral ou injetável)
  ( ) Raiva pré-exposição (0, 7, 21-28 dias)
  ( ) Cólera oral (áreas de surto)
  ( ) Encefalite japonesa (Ásia rural)
□ Vacinas de ROTINA atualizadas:
  ( ) dT/dTpa ( ) Tríplice viral ( ) Influenza

⚠️ Vacinas vivas contraindicadas em imunossuprimidos:
  Febre amarela, BCG, tríplice viral, varicela

📋 6. CONSULTA PÓS-VIAGEM — FEBRE NO RETORNO
Mnemônico: VIAGEM (para avaliar febre pós-viagem)
□ Viagem: destino, itinerário, datas exatas
□ Incubação: período entre exposição e sintomas
  Malária: 7-30 dias (até meses com P.vivax)
  Dengue: 4-10 dias
  Febre tifoide: 7-14 dias
  Febre amarela: 3-6 dias
  Esquistossomose aguda: 2-8 semanas
□ Atividades de risco: banho em água doce, trilhas,
  alimentação de rua, relações sexuais
□ Gravidade: sinais de alarme (icterícia, sangramento,
  confusão, oligúria, dispneia)
□ Exames urgentes:
  ( ) Gota espessa / teste rápido para malária
  ( ) Hemograma com plaquetas
  ( ) Hemocultura ( ) Função hepática
  ( ) Sorologia dengue (NS1 + IgM)
  ( ) Parasitológico de fezes
□ Malária é EMERGÊNCIA — tratar presuntivamente
  se gota espessa demorar e clínica sugestiva

📋 7. FARMÁCIA DO VIAJANTE
Kit médico pessoal recomendado:
□ Repelente DEET ≥30%
□ Protetor solar FPS ≥30
□ Antidiarreico (loperamida) + SRO
□ Antibiótico (azitromicina ou ciprofloxacino)
□ Antialérgico (loratadina/cetirizina)
□ Analgésico/antitérmico (paracetamol)
  ⚠️ Evitar AAS/ibuprofeno em áreas de dengue!
□ Curativos, antisséptico, termômetro
□ Preservativos
□ Medicações de uso contínuo (dose extra para imprevistos)
□ Cópia das receitas médicas (em inglês)
□ Seguro viagem com cobertura médica

📋 CHECKLIST FINAL — MEDICINA DO VIAJANTE
□ Itinerário detalhado e riscos mapeados
□ Perfil do viajante e comorbidades avaliados
□ Vacinas indicadas e aplicadas (tempo hábil?)
□ Quimioprofilaxia para malária prescrita (se indicada)
□ Orientações sobre diarreia do viajante fornecidas
□ Kit farmácia do viajante orientado
□ CIVP emitido (se febre amarela)
□ Seguro viagem recomendado
□ Plano de ação para febre no retorno explicado
□ Consulta pós-viagem agendada (se viagem longa)`,
    tips: "VFR (Visiting Friends and Relatives) é o grupo de MAIOR risco — geralmente não buscam consulta pré-viagem e frequentam áreas rurais. Malária por P.falciparum mata em 48h se não tratada — toda febre em viajante de área endêmica é malária até prova contrária. P.vivax pode recidivar meses depois por hipnozoítos hepáticos (tratar com primaquina após G6PD). Febre amarela vacinal tem risco de eventos adversos graves em >60 anos e primovacinados imunodeprimidos — avaliar risco-benefício. Não prescrever doxiciclina para profilaxia de malária em gestantes e crianças <8 anos. Mefloquina é contraindicada em epilepsia e transtornos psiquiátricos. Na diarreia do viajante, fluoroquinolonas têm alta resistência no Sudeste Asiático — preferir azitromicina. Acetazolamida para altitude é contraindicada em alergia a sulfa. Lembrar que o período de incubação ajuda a diferenciar diagnósticos: dengue (curto), malária (médio), esquistossomose aguda (longo). Sempre perguntar sobre banho em água doce na África e Brasil (esquistossomose) e contato com animais (raiva).",
  },
  {
    id: "cardiologia",
    title: "Anamnese em Cardiologia",
    emoji: "❤️",
    tags: ["cardiologia", "dor torácica", "dispneia", "ICC", "arritmia", "coronária"],
    content: `═══════════════════════════════════════════
 ANAMNESE EM CARDIOLOGIA
═══════════════════════════════════════════

📋 1. DOR TORÁCICA — Mnemônico PQRST-DA

P — Provocação/Paliação
  • O que provoca? (esforço, repouso, alimentação, respiração)
  • O que alivia? (repouso, nitrato, posição, AINEs)
  • Esforço → isquêmica | Respiração → pleurítica/pericárdica
  • Alivia com nitrato sublingual → sugestivo coronariano
  • Alivia com inclinação para frente → pericardite

Q — Qualidade
  • Opressiva/peso → isquêmica (típica)
  • Pontada/facada → pleurítica / musculoesquelética
  • Rasgando/dilacerante → dissecção de aorta
  • Queimação → DRGE / síndrome coronariana

R — Região/Irradiação
  • Retroesternal → coronariana
  • Irradiação para MSE, mandíbula, dorso → IAM
  • Irradiação para dorso interescapular → dissecção
  • Precordial puntiforme → musculoesquelética

S — Severidade (escala 0-10)
  • > 7 → emergência cardiovascular
  • Desproporção dor/achado → pensar em dissecção

T — Tempo
  • > 20 min contínua → IAM até prova contrária
  • Segundos → improvável coronariana
  • Horas-dias → pericardite, musculoesquelética

D — Duração e frequência
  • Estável: mesmo padrão há semanas
  • Instável: piora recente, menor limiar, repouso

A — Associados
  • Sudorese, náusea, dispneia → alto risco
  • Síncope → arritmia ou obstrução

📋 2. DISPNEIA — Classificação NYHA

Classe I  — Sem limitação; atividades habituais sem sintomas
Classe II — Limitação leve; dispneia em atividades habituais
Classe III — Limitação acentuada; dispneia em atividades menores
Classe IV — Incapacidade; dispneia em repouso

📌 Avaliar:
  • Ortopneia: quantos travesseiros? (1, 2, 3?)
  • DPN: acorda à noite com falta de ar?
  • Bendopneia: dispneia ao inclinar para frente
  • Platipneia: piora ao sentar (shunt intracardíaco)
  • Trepopneia: piora em um decúbito lateral

📋 3. PALPITAÇÕES — Mnemônico PALPIT

P — Padrão (regular/irregular, rápido/lento)
A — Atividade no momento (repouso, esforço, emoção)
L — Latência (início súbito ou gradual)
P — Provocadores (café, álcool, estresse, drogas)
I — Intensidade e impacto funcional
T — Tempo (duração: segundos, minutos, horas)

📌 Manobras no episódio:
  • Vagais (Valsalva, água gelada) → TSV se reverte
  • Sopro antes das palpitações → valvopatia
  • Síncope associada → alto risco (TV, BAVT)

📋 4. FATORES DE RISCO CARDIOVASCULAR — DIABESHOL

D — Diabetes mellitus (HbA1c, tempo de DM)
I — Inatividade física (sedentarismo)
A — Antecedente familiar (DAC < 55 anos ♂ / < 65 anos ♀)
B — Baixo HDL / Dislipidemia (LDL > 190, uso de estatina)
E — Estresse e depressão
S — Sexo masculino / pós-menopausa
H — Hipertensão arterial (tempo, controle, LOA)
O — Obesidade (IMC, circunferência abdominal)
L — Lípides/Tabagismo (anos-maço, ex-tabagista há quanto?)

📋 5. HISTÓRIA DE ICC — Mnemônico CONGEST

C — Congestão (edema MMII, ascite, turgência jugular)
O — Ortopneia / DPN
N — Noctúria (> 2x/noite)
G — Ganho de peso recente (> 2 kg em 3 dias)
E — Esforço (tolerância reduzida, fadiga)
S — Sinais de baixo débito (extremidades frias, hipotensão)
T — Tosse seca noturna (congestão pulmonar)

📋 6. ANTECEDENTES CARDIOLÓGICOS

  • Cirurgias cardíacas prévias (CRM, troca valvar, TAVI)
  • Cateterismos (achados, stents, data)
  • Dispositivos (marcapasso, CDI, CRT — marca, data, última revisão)
  • Febre reumática na infância
  • Sopros cardíacos conhecidos
  • Kawasaki na infância
  • Cardiopatias congênitas

📋 7. MEDICAÇÕES CARDIOLÓGICAS — Checar

  • Anticoagulantes: warfarina (INR), DOACs (dose, função renal)
  • Antiplaquetários: AAS, clopidogrel, ticagrelor (dupla antiagregação)
  • Beta-bloqueadores: FC alvo 50-70 bpm na ICC
  • IECA/BRA/ARNI: dose otimizada? Tosse?
  • Diuréticos: dose, potássio, creatinina
  • Estatinas: miopatia? LDL atual?
  • Antiarrítmicos: amiodarona (tireoide), sotalol (QT)

📋 8. ESCORES DE RISCO

  • HEART Score (dor torácica): H-história, E-ECG, A-idade, R-risco, T-troponina
  • Framingham / PCE (risco 10 anos)
  • CHA₂DS₂-VASc (FA → anticoagulação)
  • HAS-BLED (risco sangramento)
  • GRACE (SCA → mortalidade)
  • TIMI (IAM com/sem supra)

📋 9. EXAME CARDIOVASCULAR DIRECIONADO

  • PA em ambos os braços (diferença > 20 mmHg → dissecção)
  • FC e ritmo
  • Turgência jugular (45°)
  • Pulsos periféricos (simétricos, amplitude)
  • Índice tornozelo-braquial (ITB < 0,9 → DAOP)
  • Refluxo hepatojugular
  • Sopros: localização, irradiação, intensidade (Levine I-VI)
  • B3 (ICC), B4 (hipertrofia), atrito pericárdico`,
    tips: "Na dor torácica, sempre aplique o HEART Score para estratificação rápida. Ortopneia quantificada em travesseiros é mais objetiva que 'falta de ar ao deitar'. O CHA₂DS₂-VASc ≥ 2 em homens e ≥ 3 em mulheres indica anticoagulação na FA.",
  },
  {
    id: "pneumologia",
    title: "Anamnese em Pneumologia",
    emoji: "🫁",
    tags: ["pneumologia", "tosse", "dispneia", "asma", "DPOC", "tabagismo", "tuberculose"],
    content: `═══════════════════════════════════════════
 ANAMNESE EM PNEUMOLOGIA
═══════════════════════════════════════════

📋 1. TOSSE — Mnemônico TOSSE-P

T — Tempo de evolução
  • Aguda: < 3 semanas (IVAS, pneumonia)
  • Subaguda: 3-8 semanas (pós-infecciosa, coqueluche)
  • Crônica: > 8 semanas (asma, DRGE, gotejamento pós-nasal, IECA)

O — Oleosa ou seca?
  • Produtiva: bronquiectasia, DPOC, pneumonia, TB
  • Seca: asma, fibrose, IECA, linfoma

S — Secreção (aspecto do escarro)
  • Mucóide → alergia, asma
  • Purulento → infecção bacteriana
  • Hemoptóico → TB, TEP, neoplasia, bronquiectasia
  • Róseo espumoso → EAP
  • Escuro (vômica) → abscesso

S — Situação (gatilhos)
  • Noturna → asma, ICC, DRGE
  • Pós-prandial → DRGE, aspiração
  • Ocupacional (melhora no fim de semana) → asma ocupacional
  • Mudança de posição → bronquiectasia, abscesso
  • Exercício → broncoespasmo induzido

E — Evolução (piora/melhora, tratamentos prévios)

P — Precedentes (infecções, cirurgias, intubação, tabagismo)

📋 2. DISPNEIA RESPIRATÓRIA — Escala mMRC

Grau 0 — Dispneia apenas com exercício intenso
Grau 1 — Falta de ar ao subir ladeira ou andar rápido
Grau 2 — Anda mais devagar que pessoas da mesma idade
Grau 3 — Para para respirar após andar ~100 m
Grau 4 — Falta de ar ao vestir-se ou em repouso

📌 Caracterizar:
  • Início (súbito → TEP, pneumotórax | gradual → DPOC, fibrose)
  • Posição: ortopneia (ICC/DPOC), platipneia (hepatopulmonar)
  • Sibilância associada → obstrução de via aérea
  • Estridor → obstrução de via aérea superior

📋 3. TABAGISMO — Carga Tabágica

  Anos-maço = (cigarros/dia ÷ 20) × anos de uso

  Perguntas essenciais:
  • Idade de início: ___ anos
  • Quantidade: ___ cigarros/dia (ou ___ maços)
  • Tempo total: ___ anos
  • Parou? Quando? Tentativas prévias?
  • Carga: ___ anos-maço
  • Teste de Fagerström (dependência nicotínica)

  📌 > 20 anos-maço → rastreio com TC de baixa dose (55-80 anos)
  📌 > 10 anos-maço → risco elevado de DPOC

📋 4. EXPOSIÇÕES — Mnemônico PANO

P — Profissional
  • Asbesto → mesotelioma, asbestose (latência 20-40 anos)
  • Sílica → silicose (mineração, jateamento)
  • Poeiras orgânicas → pneumonite por hipersensibilidade
  • Isocianatos → asma ocupacional

A — Ambiental
  • Mofo, pássaros → pneumonite por hipersensibilidade
  • Fogão a lenha → DPOC/bronquiectasia
  • Poluição → exacerbação de asma/DPOC

N — Nosocomial
  • Internação recente, ventilação mecânica → PAV
  • Imunossupressão → oportunistas

O — Outros
  • Viagens (histoplasmose, coccidioidomicose)
  • Contato com TB (intradomiciliar, institucional)
  • Drogas inalatórias (crack → "pulmão de crack")

📋 5. ASMA — Controle (GINA)

  Nas últimas 4 semanas:
  ┌──────────────────────────────────────────────┐
  │ 1. Sintomas diurnos > 2x/semana?            │
  │ 2. Despertar noturno por asma?               │
  │ 3. Uso de SABA > 2x/semana?                  │
  │ 4. Limitação de atividades?                   │
  ├──────────────────────────────────────────────┤
  │ 0 sim → Controlada                           │
  │ 1-2 sim → Parcialmente controlada            │
  │ 3-4 sim → Não controlada                     │
  └──────────────────────────────────────────────┘

  📌 Avaliar também:
  • Fatores de risco para exacerbação (VEF1 < 60%, eosinofilia, uso excessivo de SABA)
  • Adesão e técnica inalatória
  • Comorbidades: rinite, DRGE, obesidade, ansiedade

📋 6. DPOC — Avaliação GOLD ABE

  Espirometria: VEF1/CVF < 0,7 pós-broncodilatador
  
  Classificação de obstrução:
  • GOLD 1 — VEF1 ≥ 80%
  • GOLD 2 — 50-79%
  • GOLD 3 — 30-49%
  • GOLD 4 — < 30%

  Grupo (exacerbações + sintomas):
  • A — ≤ 1 exacerbação (sem internação) + poucos sintomas
  • B — ≤ 1 exacerbação (sem internação) + muitos sintomas
  • E — ≥ 2 exacerbações OU ≥ 1 com internação

  📌 Perguntar:
  • Exacerbações no último ano (número, antibiótico, corticoide, internação)
  • Uso de O₂ domiciliar
  • Vacinação (influenza, pneumococo, COVID)
  • Reabilitação pulmonar prévia

📋 7. HEMOPTISE — Mnemônico SANGUE

S — Severidade (volume: leve < 100 mL, maciça > 500 mL/24h)
A — Aspecto (sangue vivo, escuro, misturado com escarro)
N — Número de episódios
G — Gatilhos (esforço, tosse, posição)
U — Urgência (comprometimento hemodinâmico/respiratório?)
E — Exclusão de hematêmese e epistaxe posterior

  📌 Causas principais por frequência:
  1. Bronquiectasia
  2. Tuberculose
  3. Neoplasia pulmonar
  4. TEP
  5. Pneumonia necrosante

📋 8. SONO E RESPIRAÇÃO

  • Ronco habitual? Intensidade?
  • Apneias testemunhadas?
  • Sonolência diurna excessiva (Epworth > 10)?
  • IMC e circunferência cervical (> 43 cm ♂ / > 41 cm ♀)
  • STOP-BANG:
    S — Snoring (ronco alto)
    T — Tired (cansaço diurno)
    O — Observed apneas
    P — Pressure (HAS)
    B — BMI > 35
    A — Age > 50
    N — Neck > 40 cm
    G — Gender masculino
  • ≥ 3 → alto risco de SAHOS

📋 9. EXAME RESPIRATÓRIO DIRECIONADO

  • FR, SpO₂ (repouso e esforço)
  • Padrão respiratório (Kussmaul, Cheyne-Stokes)
  • Tiragem, uso de musculatura acessória
  • Percussão: timpanismo (pneumotórax), macicez (derrame)
  • Ausculta: MV reduzido, sibilos, roncos, estertores, atrito
  • Baqueteamento digital → fibrose, bronquiectasia, neoplasia
  • Teste da caminhada de 6 minutos (TC6M)`,
    tips: "Na tosse crônica, as 3 causas mais comuns são: gotejamento pós-nasal, asma e DRGE (tríade de Irwin). Sempre calcule a carga tabágica em anos-maço. O mMRC ≥ 2 já indica limitação funcional significativa na DPOC.",
  },
  {
    id: "nefrologia",
    title: "Anamnese em Nefrologia",
    emoji: "🫘",
    tags: ["nefrologia", "rins", "diálise", "proteinúria", "hematúria", "IRA", "DRC"],
    content: `═══════════════════════════════════════════
 ANAMNESE EM NEFROLOGIA
═══════════════════════════════════════════

📋 1. QUEIXAS URINÁRIAS — Mnemônico URINA-S

U — Urina (volume estimado)
  • Oligúria: < 400 mL/dia (ou < 0,5 mL/kg/h)
  • Anúria: < 100 mL/dia
  • Poliúria: > 3 L/dia

R — Ritmo miccional
  • Noctúria (quantas vezes?)
  • Polaciúria
  • Urgência

I — Início (agudo vs crônico)
  • Agudo: horas-dias → pensar IRA
  • Crônico: meses-anos → DRC

N — Natureza (aspecto da urina)
  • Hematúria: macro/microscópica
  • Espumosa → proteinúria (> 300 mg/dia)
  • Colúria/Turva

A — Associados
  • Edema (periorbital matinal, MMII vespertino)
  • HAS de difícil controle
  • Dor lombar

S — Sistêmicos
  • Febre, perda de peso → vasculite, neoplasia
  • Artralgia, rash → LES, vasculite
  • Hemoptise → síndrome pulmão-rim (Goodpasture, ANCA)

📋 2. HEMATÚRIA — Glomerular vs Urológica

  ┌─────────────────────┬──────────────────────┐
  │    GLOMERULAR       │     UROLÓGICA        │
  ├─────────────────────┼──────────────────────┤
  │ Cor "coca-cola"     │ Sangue vivo          │
  │ Cilindros hemáticos │ Coágulos             │
  │ Dismorfismo > 80%   │ Hemácias isomórficas │
  │ Proteinúria > 500mg │ Sem proteinúria      │
  │ Indolor             │ Pode ter disúria     │
  │ Início insidioso    │ Início/fim jato      │
  └─────────────────────┴──────────────────────┘

  📌 Hematúria + proteinúria = biópsia renal na maioria dos casos

📋 3. EDEMA RENAL — Características

  • Periorbital matinal (síndrome nefrótica)
  • Anasarca: face, MMII, ascite, derrame pleural
  • Ganho de peso rápido (> 1 kg/dia = retenção hídrica)
  • Cacifo (Godet): grau I-IV

  📌 Diferenciar de edema cardíaco:
  • Renal: inicia na face, pior pela manhã
  • Cardíaco: inicia em MMII, pior à tarde
  • Hepático: ascite predominante

📋 4. FUNÇÃO RENAL — Avaliação

  • Creatinina basal conhecida? Valor mais antigo?
  • Taxa de filtração glomerular (TFG) — CKD-EPI
  • Estágios DRC:
    G1 — TFG ≥ 90 (com marcador de lesão)
    G2 — TFG 60-89
    G3a — TFG 45-59
    G3b — TFG 30-44
    G4 — TFG 15-29
    G5 — TFG < 15 (dialítica se < 10-15 com sintomas)

  • Albuminúria:
    A1 — < 30 mg/g (normal)
    A2 — 30-300 mg/g (moderadamente aumentada)
    A3 — > 300 mg/g (gravemente aumentada)

  📌 KDIGO: classificar sempre GxAx (ex: G3bA2)

📋 5. LESÃO RENAL AGUDA — Mnemônico PRÉ-RENAL-PÓS

  PRÉ-RENAL (70% dos casos):
  • Desidratação, hemorragia, sepse, ICC
  • Medicações: IECA/BRA + diurético + AINE = "triple whammy"
  • Contraste iodado recente? (NIC: 48-72h após)

  RENAL (intrínseca):
  • NTA: aminoglicosídeo, contraste, rabdomiólise
  • NIA: antibióticos (betalactâmicos), AINEs, omeprazol
  • Glomerulonefrite: ANCA, anti-GBM, imunocomplexos
  • Microangiopatia: SHU, PTT, HELLP

  PÓS-RENAL (obstrução):
  • HPB, neoplasia, cálculo bilateral, bexiga neurogênica
  • Anúria + bexigoma → sondagem de alívio

📋 6. DIÁLISE — Histórico

  • Tipo: hemodiálise (HD) ou diálise peritoneal (DP)?
  • Acesso: FAV (localização, maturação), cateter (tipo, tempo)
  • Frequência e duração das sessões
  • Peso seco e interdialítico
  • Complicações: hipotensão intradialítica, câimbras, prurido
  • KT/V (adequação): alvo > 1,2 (HD) / > 1,7 (DP)
  • Fila de transplante? Tempo de espera?
  • PRA (reatividade contra painel) — sensibilização

📋 7. NEFROTOXINAS — Checklist

  ┌──────────────────────────────────────────────┐
  │ ( ) AINEs (tempo de uso)                     │
  │ ( ) Aminoglicosídeos                         │
  │ ( ) Anfotericina B                           │
  │ ( ) Contraste iodado (< 72h)                 │
  │ ( ) Lítio                                    │
  │ ( ) IECA/BRA (em estenose bilateral)         │
  │ ( ) Ciclosporina / Tacrolimus                │
  │ ( ) Quimioterápicos (cisplatina)              │
  │ ( ) Suplementos e fitoterápicos               │
  │ ( ) Inibidores de bomba (NIA)                 │
  └──────────────────────────────────────────────┘

📋 8. DISTÚRBIOS ELETROLÍTICOS — Sinais de Alerta

  HIPERCALEMIA (K > 5,5):
  • Fraqueza muscular, parestesias
  • ECG: onda T apiculada → alargamento QRS → FV
  • Causas: IRA, IECA, espironolactona, rabdomiólise

  HIPOCALEMIA (K < 3,5):
  • Câimbras, fraqueza, íleo paralítico
  • ECG: onda U, achatamento T
  • Causas: diuréticos de alça, vômitos, diarreia

  HIPONATREMIA (Na < 135):
  • Confusão, convulsão (se aguda < 120)
  • Sempre avaliar volemia e osmolaridade

  HIPERCALCEMIA:
  • Náusea, constipação, poliúria, confusão
  • "Stones, bones, groans, moans, psychiatric overtones"

📋 9. ANTECEDENTES E COMORBIDADES RENAIS

  • DM (principal causa de DRC no Brasil)
  • HAS (segunda causa)
  • LES, vasculites
  • Doença policística renal (ADPKD) — história familiar
  • Refluxo vesicoureteral na infância
  • Cálculos renais de repetição (composição?)
  • Infecções urinárias de repetição
  • Biópsia renal prévia (resultado?)
  • Transplante renal prévio (doador, tempo, rejeições?)

📋 10. EXAME NEFROLÓGICO DIRECIONADO

  • PA (preferencialmente MAPA/MRPA)
  • Edema: Godet I-IV, localização, evolução
  • Palpação renal (rim aumentado → ADPKD, hidronefrose)
  • Sopro em flanco/abdome → estenose de artéria renal
  • Globo vesical
  • Fístula arteriovenosa (frêmito, thrill)
  • Fundoscopia: retinopatia hipertensiva/diabética
  • Sinais de uremia: hálito urêmico, flapping, pericardite`,
    tips: "A tríade proteinúria + hematúria dismórfica + cilindros hemáticos = síndrome nefrítica até prova contrária. Sempre verifique nefrotoxinas antes de atribuir IRA a causas intrínsecas. Na DRC, classifique pelo KDIGO (GxAx) para padronizar a comunicação.",
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
