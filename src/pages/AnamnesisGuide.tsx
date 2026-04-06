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
