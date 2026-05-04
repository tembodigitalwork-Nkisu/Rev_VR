/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#0a0a0a",
          800: "#141414",
          700: "#1f1f1f",
        },
        brand: {
          yellow: "#FFD60A",
          gold: "#F5C518",
          amber: "#FFB300",
          cream: "#FFF4B8",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(255, 214, 10, 0.45), 0 0 60px rgba(245, 197, 24, 0.25)",
        glowYellow: "0 0 18px rgba(255, 214, 10, 0.65)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,214,10,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,10,0.07) 1px, transparent 1px)",
      },
      animation: {
        floatSlow: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(255,214,10,0.6)" },
          "50%": { boxShadow: "0 0 28px rgba(255,214,10,1)" },
        },
      },
    },
  },
  plugins: [],
};
