/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "rgb(var(--brand-white-rgb) / <alpha-value>)",
          black: "rgb(var(--brand-black-rgb) / <alpha-value>)",
          orange: "rgb(var(--brand-orange-rgb) / <alpha-value>)",
        },
        neutral: {
          50: "var(--n50)",
          100: "var(--n100)",
          200: "var(--n200)",
          300: "var(--n300)",
          400: "var(--n400)",
          500: "var(--n500)",
          600: "var(--n600)",
          700: "var(--n700)",
          800: "var(--n800)",
          900: "var(--n900)",
        },
      },
      fontFamily: {
        heading: ["American Captain", "Teko", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 16px rgba(0,0,0,0.06), 0 4px 32px rgba(0,0,0,0.04)",
        card: "0 4px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        cardhover: "0 8px 40px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
        glow: "0 0 24px rgba(255,107,1,0.15), 0 4px 32px rgba(255,107,1,0.1)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
