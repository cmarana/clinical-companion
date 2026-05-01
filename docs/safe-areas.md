# Safe Areas — Notch, Dynamic Island & Barra de Gestos

Este documento descreve como o PULSO trata as **safe areas** nativas
(iOS notch / Dynamic Island, Android cutout, barra de gestos / home indicator)
e como **validar manualmente** em dispositivos reais.

> Verificações automatizadas: `src/test/safe-area.test.tsx` e
> `src/test/safe-area-insets.test.ts` (executados via `bun run test`).

---

## 1. Arquitetura de safe-area

Tokens centralizados em `src/index.css`:

| Token / utility       | Valor                                                                  | Uso                                                       |
| --------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------- |
| `--safe-top`          | `env(safe-area-inset-top, 0px)`                                        | Notch / Dynamic Island / status bar                       |
| `--safe-bottom`       | `env(safe-area-inset-bottom, 0px)`                                     | Home indicator iOS / barra de gestos Android              |
| `--safe-left/right`   | `env(safe-area-inset-left/right, 0px)`                                 | Landscape com notch                                       |
| `--topbar-h`          | `3rem` (48 px)                                                         | Altura fixa do header mobile                              |
| `--bottomnav-h`       | `4rem` (64 px)                                                         | Altura fixa da bottom nav                                 |
| `.safe-area-top`      | `padding-top: var(--safe-top)`                                         | TopBar e header desktop                                   |
| `.pt-safe`            | `padding-top: calc(var(--safe-top) + 0.75rem)`                         | Páginas com header próprio                                |
| `.pt-safe-0`          | `padding-top: var(--safe-top)`                                         | Headers que já têm padding interno (ex.: AdminAiCosts)    |
| `.top-safe`           | `top: var(--safe-top)`                                                 | Stickies que precisam grudar abaixo do notch              |
| `.top-after-topbar`   | `top: calc(var(--safe-top) + var(--topbar-h))`                         | Banners abaixo da TopBar                                  |
| `.pb-nav`             | `padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom))`        | `<main>` — não cobre conteúdo com nav nem home indicator  |
| `.pb-nav-extra`       | `+ 1rem`                                                               | Páginas com CTA fixo no fundo                             |

**Capacitor StatusBar** (em `src/lib/native-statusbar.ts`):

- `setOverlaysWebView({ overlay: true })` força a WebView a renderizar
  **edge-to-edge** sob a status bar — é isso que faz `env(safe-area-inset-top)`
  retornar valor > 0 dentro do app nativo.
- `applyNativeStatusBarStyle(theme)` é chamado pelo `ThemeContext` a cada
  mudança de tema para alternar ícones claros/escuros.

---

## 2. Como `padding-top` é calculado

Para a TopBar mobile (`<header class="sticky top-0 ... safe-area-top">`):

```
altura visível total = --safe-top + --topbar-h
                     = env(safe-area-inset-top) + 48 px
```

Para a Home (`<div style="paddingTop: calc(env(safe-area-inset-top) + 0.75rem)">`):

```
padding-top final = inset-top + 12 px
```

Para a AdminAiCosts (`top-safe` + `pt-safe-0`):

```
top do sticky    = inset-top
padding-top      = inset-top   (header com py-4 interno → conteúdo ok)
```

Para `<main>` (`.pb-nav`):

```
padding-bottom = 64 px (bottom nav) + inset-bottom (home indicator)
```

---

## 3. Matriz de teste por dispositivo

Valores de `env(safe-area-inset-*)` reportados pelos navegadores nativos
(WebKit iOS / WebView Android, modo retrato, app standalone Capacitor):

| Dispositivo                     | inset-top | inset-bottom | Notas                                       |
| ------------------------------- | --------: | -----------: | ------------------------------------------- |
| iPhone SE (2ª/3ª)               |     20 px |         0 px | Sem notch, sem home indicator               |
| iPhone 11 / XR (notch)          |     48 px |        34 px | Notch clássico                              |
| iPhone 13 / 14 (notch)          |     47 px |        34 px | Notch reduzido                              |
| iPhone 14 Pro / 15 / 16 (Island)|     59 px |        34 px | **Dynamic Island — maior inset**            |
| iPhone 15 Plus / 16 Plus        |     59 px |        34 px |                                             |
| Android — sem cutout (gestos)   |     24 px |        16 px | Status bar + barra de gestos                |
| Android — punch-hole (Pixel 8)  |     24 px |        24 px |                                             |
| Android — botões clássicos      |     24 px |         0 px | Navegação por botões físicos/virtuais       |
| Android — cutout grande (Z Fold)|     32 px |        16 px |                                             |

> Valores dependem da fabricante/versão; trate-os como referência.
> O importante é que **nenhum cálculo no app dependa de valor fixo** —
> tudo passa por `env(...)` ou pelas variáveis CSS.

---

## 4. Checklist de validação manual

Para cada dispositivo da matriz acima, navegar pelas telas críticas e
**confirmar visualmente** os pontos abaixo. Marcar ✅/❌ no PR.

### 4.1 TopBar (qualquer tela com `<TopBar />`)

- [ ] O título e os ícones (voltar, tema, settings) ficam **inteiramente
      abaixo** do relógio/Dynamic Island/punch-hole.
- [ ] Ao rolar a página, a TopBar permanece sticky **sem cobrir** o relógio
      (background `bg-card/95` deve aparecer atrás da status bar).
- [ ] Ao alternar tema (☀️ → 🌙 → 🌑), os ícones nativos da status bar
      mudam de cor (claro vira escuro e vice-versa).

### 4.2 Home (`/home`)

- [ ] Logo PULSO + tagline aparecem com pelo menos 12 px de respiro
      abaixo do notch/Island.
- [ ] Avatar do usuário no canto superior direito **não** é cortado
      pela borda curva da tela.
- [ ] O grid de atalhos não fica escondido pela bottom nav: o último
      card é totalmente visível ao rolar até o fim.
- [ ] Em landscape (iPhone Pro Max), `safe-area-x` mantém os ícones
      laterais fora da área do notch.

### 4.3 AdminAiCosts (`/admin/ai-costs`)

- [ ] Header sticky “Custos de IA” gruda exatamente abaixo do inset-top
      (sem gap nem sobreposição).
- [ ] Botão de voltar e botão de refresh permanecem clicáveis.

### 4.4 Bottom Nav + conteúdo

- [ ] Em qualquer página com `AppLayout`, a bottom nav fica **acima** do
      home indicator iOS / barra de gestos Android (não há sobreposição
      do indicador branco com os ícones).
- [ ] O conteúdo final da página (último parágrafo / botão) é totalmente
      visível ao rolar até o fim — `pb-nav` reserva o espaço correto.

### 4.5 Modal / overlays

- [ ] Banner “Conexão restabelecida” aparece logo abaixo da TopBar
      (usa `top-after-topbar`), sem invadir a status bar.
- [ ] Dropdown de configurações (engrenagem) também respeita
      `top-after-topbar`.

### 4.6 PWA standalone (Add to Home Screen)

- [ ] iOS Safari → “Adicionar à Tela de Início” → abrir: comportamento
      idêntico ao Capacitor (insets > 0).
- [ ] Android Chrome → “Instalar app” → abrir: status bar transparente,
      header não fica embaixo dela.

---

## 5. Como reproduzir sem dispositivo físico

### iOS Simulator (macOS + Xcode)

```bash
npx cap sync ios
npx cap open ios
# Em Xcode: escolher iPhone 15 Pro / iPhone SE / iPad → Run
```

### Android Emulator

```bash
npx cap sync android
npx cap open android
# Em Android Studio: AVD Manager → Pixel 8 (API 34) → Run
```

### DevTools (aproximação para PWA)

Chrome DevTools → Toggle device toolbar → escolher iPhone 14 Pro.
Para forçar valores de inset no preview web:

```css
/* Em DevTools > Sources > overrides, adicionar: */
:root {
  --safe-top: 59px;
  --safe-bottom: 34px;
}
```

> ⚠️ DevTools **não** simula `env(safe-area-inset-*)` nativamente —
> use a sobrescrita acima para testar layouts visualmente.

---

## 6. Regressões já cobertas por teste

| Teste                                                  | O que protege                                                |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `src/test/safe-area.test.tsx`                          | Tokens CSS + classes nos componentes-chave                   |
| `src/test/safe-area-insets.test.ts`                    | Cálculo de padding final em vários dispositivos simulados    |

Falha em qualquer asserção = risco real de o conteúdo passar por baixo
do relógio, bateria ou home indicator. **Não fazer merge** sem revisar.
