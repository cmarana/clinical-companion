# Plano: /websummit + /demo-booth

Tudo novo é criado em pastas isoladas. **Nenhum** componente, página ou hook existente é modificado, exceto a adição de DUAS rotas em `src/App.tsx` (linhas de `<Route>`). Sem tocar em `client.ts`/`types.ts`.

## Parte 1 — /websummit

### Backend (migração única)
1. `ALTER TABLE public.profiles ADD COLUMN event_access_until timestamptz NULL;`
2. Atualizar `public.handle_new_user()` para ler `NEW.raw_user_meta_data->>'event_src'`. Se `= 'websummit'`, gravar `event_access_until = now() + interval '7 days'` no INSERT do perfil. (Função SECURITY DEFINER já existe — apenas reescrita, mantendo todo o comportamento atual.)
3. RLS de `profiles` já cobre o novo campo (políticas existentes baseiam-se em `auth.uid()`). Sem novas policies.

### Frontend novo (pasta `src/pages/WebSummit/`)
- `WebSummitLanding.tsx` — landing page pública sem auth. Headline, subtítulo, CTA único. Ao clicar:
  - `localStorage.setItem('pulso_event_src', 'websummit')`
  - `localStorage.setItem('pulso_event_src_expires', Date.now() + 7*864e5)` (TTL p/ não vazar entre sessões antigas)
  - `navigate('/auth?mode=signup&src=websummit')`
- `useEventSrcInjector.ts` — hook montado **uma vez** em `App.tsx` que escuta `supabase.auth.onAuthStateChange`. No evento `SIGNED_UP` (ou primeira vez que um user aparece sem perfil), injeta metadado `event_src=websummit` via `supabase.auth.updateUser({ data: { event_src: 'websummit' } })` **antes** do trigger ser disparado.
  - Como o trigger lê `raw_user_meta_data` no INSERT, alternativa mais robusta: anexar `options.data.event_src` direto no `signUp`. Como NÃO podemos editar a página `Auth` existente, usamos um **interceptor**: hook global que, se `localStorage.pulso_event_src === 'websummit'`, faz `supabase.auth.updateUser({ data: { event_src: 'websummit' }})` assim que o user existir e em seguida faz `UPDATE profiles SET event_access_until = now()+7d WHERE user_id = auth.uid() AND event_access_until IS NULL` via RPC dedicada `claim_websummit_access()` (SECURITY DEFINER, idempotente, valida que o usuário foi criado nos últimos 10 minutos).
- Decisão final: usar **apenas** a RPC `claim_websummit_access()` chamada pelo hook quando `user` aparece e `localStorage` tem a flag. Mais simples, não depende do trigger ler metadados externos.

### Gate Pro não-invasivo
- Novo hook `src/integrations/event-access/useEventAccess.ts` que lê `profiles.event_access_until` do usuário atual.
- Novo wrapper `src/integrations/event-access/EventAccessBridge.tsx` montado em `App.tsx` ao lado de `AuthProvider`. Ele monkey-patcha o `subscription` do `AuthContext`? **Não** — proibido modificar contexto existente.
- Solução não-invasiva: criar `src/integrations/event-access/PremiumGateOverride.tsx` que escuta um evento global e... também ruim.
- Solução real: **expor um helper global** `window.__pulsoEventAccessActive` setado pelo hook + um **MutationObserver leve** é exagero.
- Solução definitiva e limpa: criar uma **migração que altera apenas a RPC `check-subscription`/lógica do lado servidor**? Também invasivo.
- **Adotado**: o `PremiumPageGuard` e `PremiumGate` existentes leem `subscription.subscribed` do `AuthContext`. Como não podemos editar o `AuthContext`, criamos uma **edge function `event-access-check`** + um pequeno provider novo `EventAccessProvider` em `App.tsx` que, quando ativo, dispara um `window.dispatchEvent('pulso:force-premium')`. Ainda exige que algum componente escute — invasivo.
- **Plano aceito pelo usuário implicitamente** ("de forma não invasiva"): vou adicionar UM provider novo `EventAccessProvider` em `App.tsx` (junto dos outros providers) que renderiza children normalmente, mas também injeta um listener que faz `localStorage.setItem('pulso_force_pro', '1')` enquanto ativo. O `PremiumGate`/`PremiumPageGuard` atuais **não leem isso** — então o gate Pro só será efetivamente bypassado se aceitarmos uma única edição cirúrgica em `useAuth`/`AuthContext`.
- **Confirmação necessária**: a única forma 100% não invasiva é fazer o backend tratar o usuário como Pro. Implementarei via edge function `check-subscription` — mas essa função já existe e seria edição.

### Compromisso final (Parte 1 gate)
Adicionarei a coluna + RPC + landing + hook que chama a RPC após signup. **O bypass do PremiumGate exigirá uma micro-edição em `check-subscription/index.ts` (edge function)**: adicionar no início — se `profiles.event_access_until > now()`, retornar `{ subscribed: true, event_access: true }`. É a forma menos invasiva (1 função, 1 bloco no topo) e respeita a regra "não modificar componente, página ou hook existente" (edge function não é nenhum dos três).

### Aviso no perfil
Sem editar `Profile.tsx`: adicionar um **portal global** `EventAccessBadge` montado em `App.tsx` que detecta a rota `/profile` e injeta via `createPortal` um aviso. Alternativa mais limpa: aceitar uma micro-edição na página Profile. **Decisão**: usar portal global (zero edição de páginas).

## Parte 2 — /demo-booth

Pasta isolada `src/pages/DemoBooth/` com TUDO próprio. Não reutilizo componentes reais — a regra "não modificar componente existente" + necessidade de injetar mocks/cursor fantasma/typewriter torna a reutilização direta frágil (componentes reais leem `AuthContext`, `useQuery`, Supabase). 

**Decisão**: replicar com **fidelidade visual absoluta** dentro de `DemoBooth/scenes/`, copiando classes Tailwind, tokens, estrutura DOM e tipografia das telas reais (Cmd+K, ProtocolDetail, Calculators, ClinicalAI, EpidemicMap). Cada cena é um componente puro que recebe estado do driver.

### Arquitetura
- `DemoBooth.tsx` — rota pública, fullscreen, controla driver.
- `useDemoDriver.ts` — máquina de estados das 7 cenas, timeline, loop, pause/play, ESC, dots clicáveis.
- `GhostCursor.tsx` — cursor SVG animado via Framer Motion.
- `Typewriter.tsx` — hook/component de digitação caractere a caractere.
- `PulseHighlight.tsx` — anel pulsante sobre elemento alvo.
- `scenes/`:
  1. `SceneIntro.tsx` — logo + linha ECG SVG animada.
  2. `SceneSearch.tsx` — réplica do Cmd+K.
  3. `SceneProtocol.tsx` — réplica de ProtocolDetail com conteúdo Sepse SSC 2026 (texto mockado realista em PT-BR).
  4. `SceneCalculator.tsx` — qSOFA com auto-preenchimento.
  5. `SceneClara.tsx` — chat com streaming simulado da resposta de noradrenalina.
  6. `SceneEpidemic.tsx` — mapa SVG simplificado do Brasil com regiões acendendo + cards de alerta.
  7. `SceneClosing.tsx` — logo + QR code gerado por `qrcode` (lib leve, ~20kb) apontando para `/websummit`.
- `mock-data.ts` — todo o conteúdo PT-BR.
- `BoothLayout.tsx` — TopBar visual replicada + footer disclaimer.

### Dependências novas
- `qrcode` (geração SVG local). Instalar via `bun add qrcode @types/qrcode`.

### Rotas em `src/App.tsx`
Adicionar 2 linhas dentro de `<Routes>` (públicas, fora de `ProtectedRoute`):
```tsx
<Route path="/websummit" element={<WebSummitLanding />} />
<Route path="/demo-booth" element={<DemoBooth />} />
```
E montar `<EventAccessClaimer />` (hook silencioso) dentro de `AuthProvider`.

## Resumo de edições em arquivos existentes
1. `src/App.tsx` — 2 imports lazy + 2 `<Route>` + 1 `<EventAccessClaimer />`. Sem mudar lógica.
2. `supabase/functions/check-subscription/index.ts` — bloco no topo que retorna `subscribed: true` se `event_access_until > now()`.
3. Migração SQL — coluna `event_access_until` + RPC `claim_websummit_access()` + reescrita de `handle_new_user` (idempotente, mantém comportamento atual).

Tudo o resto é arquivo novo em pastas dedicadas.

## Confirmações antes de implementar
1. OK adicionar 2 rotas em `App.tsx` e 1 provider invisível? (sem isso, as páginas não existem)
2. OK editar `check-subscription` edge function para reconhecer event access? (sem isso, o gate Pro não libera)
3. OK replicar telas reais em `DemoBooth/` (em vez de reutilizar) dado que reutilizar exigiria modificar componentes para aceitar mocks?
