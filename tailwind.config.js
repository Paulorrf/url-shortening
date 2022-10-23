/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      btnBg: "#2ACFCF",
      primaryBg: "#3B3054",
      error: "#F46262",
      gray: "#BFBFBF",
      grayViolet: "#9E9AA7",
      darkBlue: "#35323E",
      darkViolet: "#232127",
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
