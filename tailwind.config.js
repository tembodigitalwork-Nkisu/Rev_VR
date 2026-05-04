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
          950: "#06010f",
          900: "#0c0418",
          800: "#140828",
          700: "#1d0d3a",
        },
        neon: {
          purple: "#b14bff",
          violet: "#7c3aed",
          cyan: "#22d3ee",
          green: "#39ff9c",
          pink: "#ff3df6",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(177, 75, 255, 0.45), 0 0 60px rgba(34, 211, 238, 0.25)",
        glowCyan: "0 0 18px rgba(34, 211, 238, 0.55)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(177,75,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
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
          "0%, 100%": { boxShadow: "0 0 12px rgba(57,255,156,0.55)" },
          "50%": { boxShadow: "0 0 28px rgba(57,255,156,0.95)" },
        },
      },
    },
  },
  plugins: [],
};
