import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lighthouse: {
          blue: "#0057A8",
          lightBlue: "#56C0E0",
          navy: "#002E4C",
          grey: "#F4F4F4",
          yellow: "#FDCB2F"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(0, 87, 168, 0.45)",
        "glow-cyan": "0 0 40px rgba(86, 192, 224, 0.45)"
      },
      borderRadius: {
        "3xl": "1.5rem"
      },
      backgroundImage: {
        "lighthouse-gradient":
          "radial-gradient(circle at top left, rgba(86,192,224,0.65), transparent 55%), radial-gradient(circle at bottom right, rgba(253,203,47,0.4), transparent 55%), linear-gradient(135deg, #000814, #001d3d, #002E4C)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(10px,-20px,0) scale(1.05)" },
          "100%": { transform: "translate3d(-10px,20px,0) scale(1)" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "float-slow": "float 18s ease-in-out infinite",
        drift: "drift 26s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
