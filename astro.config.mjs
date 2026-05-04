import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import siteData from "./src/data/site.ts";

export default defineConfig({
  site: `https://${siteData.domain}`,
  vite: {
    plugins: [tailwindcss()],
  },
});
