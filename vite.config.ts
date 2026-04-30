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
            // Vendor splits — granular for better caching
            if (id.includes("node_modules")) {
              if (id.includes("react-router")) return "vendor-router";
              if (id.includes("react-dom") || id.includes("/react/")) return "vendor-react";
              if (id.includes("@supabase")) return "vendor-supabase";
              if (id.includes("framer-motion")) return "vendor-motion";
              if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
              if (id.includes("@radix-ui")) return "vendor-radix";
              if (id.includes("lucide-react")) return "vendor-icons";
              if (id.includes("@tanstack")) return "vendor-query";
              if (id.includes("zod") || id.includes("react-hook-form")) return "vendor-forms";
              if (id.includes("date-fns")) return "vendor-date";
              return "vendor";
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
