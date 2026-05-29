import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        soft: "var(--color-soft)",
        "text-main": "var(--color-text-main)",
        "text-sub": "var(--color-text-sub)",
        success: "var(--color-success)",
        disclaimer: "var(--color-disclaimer)",
        "brand-border": "var(--color-border)",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(27, 77, 140, 0.08)",
        glow: "0 0 40px rgba(255, 107, 53, 0.35)",
        "primary-lg": "0 20px 60px -10px rgba(27, 77, 140, 0.45)",
      },
      borderRadius: {
        card: "16px",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #1B4D8C 0%, #0E2E5C 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #FF6B35 0%, #F23E1B 100%)",
        "best-pattern":
          "radial-gradient(circle at 20% 20%, rgba(255,107,53,0.18) 0%, transparent 45%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.08) 0%, transparent 50%)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
