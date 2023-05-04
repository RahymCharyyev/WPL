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
        regular: ["fonts/OpenSans-Regular.ttf"],
        semiBold: ["fonts/OpenSans-SemiBold.ttf"],
        bold: ["fonts/OpenSans-Bold.ttf"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
