import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { VitePWA } from "vite-plugin-pwa";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [VitePWA(), WindiCSS(), Icons],
  },
  integrations: [react()],
});
