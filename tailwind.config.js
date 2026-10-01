/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121410",
        forest: "#1e3a2f",
        clay: "#c45c26",
        claydeep: "#9a3f16",
        sand: "#f3ece2",
        stone: "#6f675c",
        paper: "#faf7f2",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(18, 20, 16, 0.45)",
      },
    },
  },
  plugins: [],
};
