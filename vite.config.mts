import reactPlugin from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

const config = defineConfig({
  base: "/",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        ".": "index.html",
      },
      output: {
        entryFileNames: "[name]/index.js",
        chunkFileNames: "[name]/[name].js",
        assetFileNames: "[name]/[ext]/[name].[ext]",
      },
    },
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [reactPlugin(), sassDts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@types": path.resolve(__dirname, "src/types"),
      "@logger": path.resolve(__dirname, "src/logger.ts"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/components/utils"),
    },
  },
});

export default config;
