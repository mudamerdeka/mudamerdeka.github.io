import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import { VitePluginDecapCMS } from 'vite-plugin-decap-cms'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: "8080",
  },
  plugins: [
    react(),
    VitePluginDecapCMS({
      config: {
        backend: {
          name: 'github',
          repo: 'mudamerdeka/mudamerdeka.github.io',
          branch: 'main',
        },
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
});
