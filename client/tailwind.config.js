/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { crimson: ["Crimson Text"] },
    extend: {
      backgroundColor: {
        primary: {
          50: "#EDEFF6",
          100: "#DBDFEC",
          200: "#B7BFD9",
          300: "#92A0C7",
          400: "#6360B4",
          500: "#4A60A1",
          600: "#3B4D81",
          700: "#2C3A61",
          800: "#1E2640",
          900: "#0F1320",
        },
        overlay: {
          70: "rgba(0,0,0,0.7)",
          50: "rgba(0,0,0,0.5)",
          30: "rgba(0,0,0,0.3)",
        },
      },
      colors: {
        primary: {
          50: "#EDEFF6",
          100: "#DBDFEC",
          200: "#B7BFD9",
          300: "#92A0C7",
          400: "#6360B4",
          500: "#4A60A1",
          600: "#3B4D81",
          700: "#2C3A61",
          800: "#1E2640",
          900: "#0F1320",
        },
      },
      width: {
        main: "1319px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
