module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#eee",
        "super-blue-color": "#0e8ef1",
      },
      backgroundImage: {
        "header-bg": "url('./src/img/header__img.webp')",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
