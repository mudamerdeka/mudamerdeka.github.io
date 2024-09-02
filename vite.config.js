import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import decapCmsPlugin from "vite-plugin-decap-cms";

export default defineConfig({
  plugins: [react(), decapCmsPlugin()],
});