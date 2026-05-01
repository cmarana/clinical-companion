import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          surface: "hsl(var(--destructive-surface))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      /**
       * Sistema de camadas (z-index) — fonte única da verdade.
       * ──────────────────────────────────────────────────────
       * Use SEMPRE estes tokens (z-nav, z-toast…) em vez de números mágicos
       * (z-50, z-[100]) para evitar conflitos de sobreposição.
       *
       *   base       (1)   — empilhamento mínimo dentro do fluxo
       *   sticky-low (10)  — sub-headers/listas internas
       *   sticky-mid (20)  — pinned cards
       *   page-header(30)  — cabeçalhos de páginas internas (Rounds, Voice…)
       *   app-chrome (40)  — TopBar/AppSidebar do AppLayout
       *   nav        (50)  — NavBar fixa (Landing, BottomNav)
       *   status-bar (60)  — Faixa opaca cobrindo relógio/bateria (StatusBarScrim)
       *   banner     (65)  — Banners globais (offline, PWA install, update)
       *   floating   (70)  — Botões flutuantes (FAB, FloatingThemeToggle)
       *   toast      (80)  — Notificações
       *   modal      (90)  — Dialogs, Sheets, Drawers
       *   tour       (100) — Overlay full-screen do tour guiado / WelcomeScreen
       *   tour-pop   (110) — Tooltip do tour (acima do overlay)
       */
      zIndex: {
        base: "1",
        "sticky-low": "10",
        "sticky-mid": "20",
        "page-header": "30",
        "app-chrome": "40",
        nav: "50",
        "status-bar": "60",
        banner: "65",
        floating: "70",
        toast: "80",
        modal: "90",
        tour: "100",
        "tour-pop": "110",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
