const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      rbcPrimary: "#28CB8B",
      rbcSecoundry: "#263238",
      info: "#2194f3",
      natural: {
        100: "#FFFFFF",
        200: "#F5F7FA",
        300: "#ABBED1",
        400: "#89939E",
        500: "#717171",
        600: "#4D4D4D",
        700: "#263238 ",
      },
      action: {
        100: "#FBC02D",
        200: "#E53835",
        300: "#2E7D31",
      },
      rbc: {
        100: "#103E13",
        200: "#103E13",
        300: "#1B5E1F",
        400: "#C8E6C9",
        500: "#237D31",
        600: "#A5D6A7",
        700: "#388E3B",
        800: "#81C784",
        900: "#43A046",
        1000: "#66BB69",
      },
      // ...
    },
  },
  plugins: [require("daisyui")],
});
