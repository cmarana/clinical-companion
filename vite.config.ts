import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Build-time version stamp. Used by the SW + client to detect new releases
// and force cache invalidation. Changes on every build.
const BUILD_ID =
  process.env.BUILD_ID ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.COMMIT_REF ||
  `${Date.now()}`;

// Plugin: writes /version.json into the final build and injects BUILD_ID
// into the service worker so its cache name rotates per release.
const versionPlugin = (): Plugin => ({
  name: "pulso-version-stamp",
  apply: "build",
  // Stamp BUILD_ID into index.html so the inline pre-React probe
  // (the no-SW fallback) can detect stale HTML before the bundle loads.
  transformIndexHtml: {
    order: "post",
    handler(html) {
      return html.replace(/__BUILD_ID__/g, BUILD_ID);
    },
  },
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "version.json",
      source: JSON.stringify({ buildId: BUILD_ID, builtAt: new Date().toISOString() }),
    });
  },
  closeBundle() {
    // Stamp the static SW with the build id (replaces __BUILD_ID__ token).
    const swPath = path.resolve(__dirname, "dist", "sw.js");
    if (fs.existsSync(swPath)) {
      const src = fs.readFileSync(swPath, "utf8");
      fs.writeFileSync(swPath, src.replace(/__BUILD_ID__/g, BUILD_ID), "utf8");
    }
  },
});

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
      "import.meta.env.VITE_BUILD_ID": JSON.stringify(BUILD_ID),
    },
    plugins: [react(), mode === "development" && componentTagger(), versionPlugin()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Content-hashed asset filenames for long-term caching + safe invalidation
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
          manualChunks: (id) => {
            // Do not manually split node_modules. Recharts/d3 and other CJS-heavy
            // packages can form circular vendor chunks in production, causing
            // TDZ crashes such as "Cannot access 'S' before initialization".
            if (id.includes("node_modules")) return undefined;

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
