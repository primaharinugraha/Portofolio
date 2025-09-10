import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ⬅️ tambahin ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ⬅️ alias biar bisa pakai @/
    },
  },
});
