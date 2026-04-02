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
          manualChunks: {
            "vendor-react": ["react", "react-dom", "react-router-dom"],
            "vendor-supabase": ["@supabase/supabase-js"],
            "vendor-ui": ["framer-motion"],
            "vendor-charts": ["recharts"],
            "data-protocols": [
              "./src/data/protocols.ts",
              "./src/data/fullProtocols/index.ts",
              "./src/data/emergency/index.ts",
            ],
            "data-medications": [
              "./src/data/medications.ts",
              "./src/data/prescriptions/index.ts",
            ],
            "data-reference": [
              "./src/data/cidData.ts",
              "./src/data/labValues.ts",
              "./src/data/symptomGuides.ts",
            ],
          },
        },
      },
      chunkSizeWarningLimit: 600,
    },
  };
});
