import { defineConfig } from "vite";
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from "@vitejs/plugin-vue";
import path from "path";
import nightwatchPlugin from 'vite-plugin-nightwatch'
export default defineConfig({
  plugins: [vue(), basicSsl(),
    nightwatchPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src")
    }
  },
  define: {
    "process.env": {
      BAP_URI: "https://13.50.62.21:5173"
    }
  }
});
