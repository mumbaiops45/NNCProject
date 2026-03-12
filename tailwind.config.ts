import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ── NNC Brand Colours (from logo: teal swirl → deep green) ──
      colors: {
        teal:  { DEFAULT: "#00C9A7", light: "#1fd1b5", dark: "#00a07a", glow: "#00c9a740" },
        navy:  { 0: "#010812", 1: "#030B18", 2: "#061425", 3: "#0a1f38", card: "#06142580" },
        green: { DEFAULT: "#1fd1b5", deep: "#00a07a" },
      },

      // ── Typography ──
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm)",   "sans-serif"],
      },

      // ── Custom gradients ──
      backgroundImage: {
        "brand-grad":  "linear-gradient(135deg, #00C9A7 0%, #00a07a 60%, #1fd1b5 100%)",
        "text-grad":   "linear-gradient(120deg, #00C9A7, #1fd1b5, #7fffed)",
        "hero-bg":     "linear-gradient(160deg, #010812 0%, #030B18 50%, #061425 100%)",
        "grid-lines":  "linear-gradient(rgba(0,201,167,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.035) 1px, transparent 1px)",
        "glow-radial": "radial-gradient(ellipse at center, rgba(0,201,167,0.12) 0%, transparent 65%)",
        "scan-line":   "linear-gradient(90deg, transparent, #00C9A7, transparent)",
      },

      // ── Keyframes & animations ──
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%":       { opacity: "0.9" },
        },
        marquee:     { from: { transform: "translateX(0)" },    to: { transform: "translateX(-50%)" } },
        "marquee-r": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        fadeUp:      { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in":   { from: { opacity: "0" },                  to: { opacity: "1" } },
        "spin-slow": { from: { transform: "rotate(0deg)" },      to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        marquee:      "marquee 30s linear infinite",
        "marquee-r":  "marquee-r 36s linear infinite",
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-up-d1": "fadeUp 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both",
        "fade-up-d2": "fadeUp 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both",
        "fade-up-d3": "fadeUp 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both",
        "spin-slow":  "spin-slow 20s linear infinite",
      },

      boxShadow: {
        "teal-glow":  "0 0 32px rgba(0,201,167,0.4)",
        "teal-soft":  "0 0 60px rgba(0,201,167,0.12)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,201,167,0.1)",
      },

      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;