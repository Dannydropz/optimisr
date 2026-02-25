import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5", // Hero bg
        foreground: "#000000",
        optimisr: {
          black: "#000000",
          grey: "#E5E5E5",
          yellow: "#F9E547",
          darkgrey: "#444444",
        },
      },
      fontFamily: {
        sans: ["Suisse Intl", "Inter", "sans-serif"],
        condensed: ["Suisse Intl Condensed", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};
export default config;
