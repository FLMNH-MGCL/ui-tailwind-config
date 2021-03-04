// const _ = require("lodash");
const plugin = require("tailwindcss/plugin");
const uicolors = require("@tailwindcss/ui/colors");

module.exports = plugin(
  function () {
    // function ({ addUtilities, e, theme, variants }) {
    // add utilities would go here
  },
  {
    theme: {
      colors: {
        ...uicolors,
        dark: {
          900: "rgb(25,25,25)",
          800: "rgb(36,36,36)",
          700: "rgb(40,40,40)",
          600: "#2D2D2D",
          500: "rgb(50,50,50)",
          400: "#3d3d3d",
          300: "#b2b2b2",
          200: "rgb(223,223,223)",
          twilight: "rgb(30, 30, 30)",
          stacking: "rgba(25,25,25,0.2)",
        },
      },
    },
    plugins: [require("tailwindcss-textshadow")],
    variants: {
      textShadow: ["responsive", "hover", "focus"],
    },
  }
);
