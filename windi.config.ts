import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx,svelte,vue,astro,html}"],
  attributify: true,
  preflight: {},
  theme: {
    extend: {
      colors: {
        fred: "#cb535a",
        fwhite: "#ffffff",
        fblue: "#4088c6",
        fyellow: "#f8de32",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  shortcuts: {
    //...
  },
  plugins: [],
});
