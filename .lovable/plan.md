## Onboarding Guiado — Tour Interativo

### Objetivo
Após o primeiro login (quando o usuário chega na Home pela primeira vez), exibir um tour guiado com **tooltips animados** que destacam os recursos mais importantes do app.

### Etapas do Tour (5 passos)

1. **Busca Inteligente** — "Use a busca para encontrar qualquer protocolo, medicamento ou calculadora em segundos"
2. **Modo Emergência** — "Acesse protocolos de emergência com um toque para decisões rápidas no plantão"
3. **IA Clínica** — "Tire dúvidas clínicas em tempo real com nossa IA especializada (Pro)"
4. **Favoritos** — "Salve seus protocolos mais usados para acesso rápido"
5. **Modo Offline** — "Baixe conteúdo para usar sem internet (Pro)"

### Comportamento
- Aparece **apenas na primeira vez** (flag salva em localStorage)
- Tooltips com animação suave apontando para os elementos reais da Home
- Botões "Próximo" e "Pular tour"
- Indicador de progresso (1/5, 2/5...)
- Pode ser reativado em Configurações → "Refazer tour"

### Implementação
- Componente `GuidedTour` com overlay semi-transparente
- Highlight no elemento alvo com borda pulsante
- Sem dependência de biblioteca externa (framer-motion já está no projeto)
