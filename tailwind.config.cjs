const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        LiberationSans: [
          "LiberationSans",
          "sans-serif",
          /*...*/ defaultTheme.fontFamily.LiberationSans,
        ],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
