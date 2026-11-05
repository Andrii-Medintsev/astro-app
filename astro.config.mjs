// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://unrivaled-figolla-a6e2a3.netlify.app/",
  integrations: [preact()],
});