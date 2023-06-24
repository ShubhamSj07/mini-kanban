/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.js"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#FEFFFF",
        secondary: "#F5F5F5",
        accent: "#787486",
        black: "#0D062D",
        civia: "#DBDBDB",
        blue: "#5030E5",
        inProgress: "#FFA500",
        done: "#8BC48A",
      },
      gridTemplateColumns: {
        sidebar: "300px auto",
      },
      gridTemplateRows: {
        header: "64px auto",
      },
    },
  },
  plugins: [],
};
