module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#2879fe",
        grey888: "#888",
        grey999: "#999",
        grey777: "#777",
        black30: "#303030",
        black19: "#191919",
        whiteF7: "#f7f8fa",
        whiteD8: "#d8d8d8",
        whiteE9: "#e9e7e7",
      },
      fontFamily: {},
      fontSize: {},
    },
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
