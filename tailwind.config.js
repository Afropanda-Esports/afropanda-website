/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Site-wide default body / UI text — lifted for readability on dark bg */
        copy: "#c4c2c8",
      },
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        maitree: ["Maitree", "san-serif"],
      },
      maxWidth: {
        "8xl": "85rem",
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
    },
  },
  plugins: [],
};
