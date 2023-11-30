/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#252466",
        "main-light": "#3873FF",
        "main-dark": "#41427D",
        "text-color": "#FCFCFC",
        "text-gray": "#667085",
      },
      gridTemplateColumns: {
        prod: "repeat(auto-fit, minmax(130px, 1fr))",
        plog: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
