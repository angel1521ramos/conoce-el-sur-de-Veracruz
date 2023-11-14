import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://angel1521ramos.github.io',
  base: '/conoce-el-sur-de-Veracruz',
});