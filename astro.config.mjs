import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    webmanifest({
      /**
       * required
       **/
      name: "Bergljots",

      /**
       * optional
       **/
      icon: "public/favicon.svg",

      short_name: "Bergljots",
      description: "På vei ut døra i Bergljots",
      start_url: "/",
      theme_color: "#33B8D6",
      background_color: "#33B8D6",
      display: "minimal-ui",
      orientation: "landscape"
    }),
  ],
});
