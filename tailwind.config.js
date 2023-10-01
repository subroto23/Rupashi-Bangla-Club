const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        linethrough: "linethrough 3s linear forwards infinite",
      },
      keyframes: {
        linethrough: {
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      fontSize: {
        "10xl": ["12rem", { lineHeight: "1" }],
      },
      letterSpacing: {
        extra: "0.5em",
      },
    },
  },
  plugins: [require("daisyui")],
});
