module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mountainmist: {
          50: "#F4F5FA",
          100: "#f4f4f4",
          200: "#e3e4e4",
          300: "#d2d3d3",
          400: "#b0b3b3",
          500: "#8E9292",
          600: "#808383",
          700: "#6b6e6e",
          800: "#E5E8F2",
          900: "#FBFBFB",
        },
        alabaster: {
          50: "#ffffff",
          100: "#E1E5E9",
          200: "#fefeff",
          300: "#fdfeff",
          400: "#fcfdff",
          500: "#fbfcff",
          600: "#e2e3e6",
          700: "#bcbdbf",
          800: "#979799",
          900: "#7b7b7d",
        },
        cerise: {
          50: "#fcf4f8",
          100: "#faeaf2",
          200: "#f2cade",
          300: "#ebaacb",
          400: "#db6ba3",
          500: "#cc2b7c",
          600: "#b82770",
          700: "#99205d",
          800: "#7a1a4a",
          900: "#64153d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
