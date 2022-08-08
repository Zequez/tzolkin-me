module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fred: "#cb535a",
        fwhite: "#ffffff",
        fblue: "#4088c6",
        fyellow: "#f8de32",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
