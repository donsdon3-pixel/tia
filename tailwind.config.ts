import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tia: {
          dark: "#040914",
          darker: "#02050B",
          navy: "#0A192F",
          "navy-light": "#112240",
          card: "#0B1A30",
          gold: "#D4AF37",
          "gold-light": "#ECC94B",
          "gold-dark": "#B8860B",
          amber: "#F59E0B",
          cyan: "#00F0FF",
          accent: "#38BDF8"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(10, 25, 47, 0) 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.7), 0 0 45px rgba(0, 240, 255, 0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
