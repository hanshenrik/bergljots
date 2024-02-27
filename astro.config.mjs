import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    webmanifest({
      name: "Bergljots",
      description: "På vei ut døra i Bergljots",
      icons: [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      short_name: "Bergljots",
      description: "På vei ut døra i Bergljots",
      start_url: "/",
      theme_color: "#33B8D6",
      background_color: "#000000",
      display: "minimal-ui",
      orientation: "landscape",
    }),
  ],
});
