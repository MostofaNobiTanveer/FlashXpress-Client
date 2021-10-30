module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        smalt: {
          50: "#f5f5f9",
          100: "#eaeaf4",
          200: "#cbcbe3",
          300: "#abacd2",
          400: "#6c6eb0",
          500: "#2D308E",
          600: "#292b80",
          700: "#22246b",
          800: "#1b1d55",
          900: "#161846",
        },
        amber: "#FFBE0B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
