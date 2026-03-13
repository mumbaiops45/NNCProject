import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: "#00C9A7", light: "#1fd1b5", dark: "#00a07a" },
        navy: { 0: "#010812", 1: "#030B18", 2: "#061425", 3: "#0a1f38" },
      },
    },
  },
  plugins: [],
};

export default config;