/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orangeEE: "#EE6C4D",
        dark29: "#293241",
        yellowFC: "#FCD342",
        whiteFF: "#fff",
        greyE6: "#e6e6e6",
      },

      screens: {
        laptop: "1025px",
        tablet: "900px",
      },
    },
  },
  plugins: [],
};
