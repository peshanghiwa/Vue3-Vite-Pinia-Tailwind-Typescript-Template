/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      red: "red",
      transparent: "transparent",
      black: {
        100: "#fcfcfc",
        200: "#ececec",
        300: "#6b6b6b",
        500: "#4b4b4b",
        700: "#2e2e2e",
        900: "#000000",
      },
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
