import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const supabaseUrl = env.VITE_SUPABASE_URL || "https://xwmqqwqynyhccmyqtxje.supabase.co";
  const supabasePublishableKey =
    env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    env.VITE_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3bXFxd3F5bnloY2NteXF0eGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODY1NzAsImV4cCI6MjA4ODc2MjU3MH0.jLuDG_z8xVxT_00yw1GhyIarKpUthMFbORraeCticbg";

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(supabaseUrl),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(supabasePublishableKey),
      "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(supabasePublishableKey),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendor splits — keep the React ecosystem together to avoid
            // temporal-dead-zone errors caused by circular vendor chunks
            // (e.g. "Cannot access 'L' before initialization").
            if (id.includes("node_modules")) {
              // React runtime + everything that ships with React refs
              if (
                id.includes("/react/") ||
                id.includes("/react-dom/") ||
                id.includes("/scheduler/") ||
                id.includes("/react-router") ||
                id.includes("/@remix-run/") ||
                id.includes("/@tanstack/react-query") ||
                id.includes("/use-sync-external-store/") ||
                id.includes("/react-is/")
              ) return "vendor-react";

              if (id.includes("@supabase")) return "vendor-supabase";
              if (id.includes("framer-motion")) return "vendor-motion";
              if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
              if (id.includes("@radix-ui")) return "vendor-radix";
              if (id.includes("lucide-react")) return "vendor-icons";
              if (id.includes("zod") || id.includes("react-hook-form")) return "vendor-forms";
              if (id.includes("date-fns")) return "vendor-date";
              // Everything else stays in Vite's default vendor chunk —
              // do NOT return a name here, otherwise Rollup may create
              // circular references between vendor-* groups.
              return undefined;
            }
            // Data splits — keep heavy clinical content out of the main chunk
            if (id.includes("/src/data/full-protocols/")) return "data-full-protocols";
            if (id.includes("/src/data/prescriptions/")) return "data-prescriptions";
            if (
              id.includes("/src/data/drugInteractionPairs") ||
              id.includes("/src/data/drugInteractionsDB")
            ) return "data-interactions";
            if (
              id.includes("/src/data/cidData") ||
              id.includes("/src/data/labValues") ||
              id.includes("/src/data/symptomGuides")
            ) return "data-reference";
            if (id.includes("/src/data/medications")) return "data-medications";
            if (
              id.includes("/src/data/protocols.ts") ||
              id.includes("/src/data/emergency/")
            ) return "data-protocols-legacy";
            if (id.includes("/src/data/flashcards")) return "data-flashcards";
          },
        },
      },
      chunkSizeWarningLimit: 600,
      target: "es2020",
      minify: "esbuild",
      cssMinify: true,
    },
  };
});
