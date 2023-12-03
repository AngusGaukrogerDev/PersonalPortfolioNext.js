/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      rich_black: {
        DEFAULT: "#0d1821",
        100: "#030507",
        200: "#050a0d",
        300: "#080e14",
        400: "#0a131a",
        500: "#0d1821",
        600: "#284863",
        700: "#4279a6",
        800: "#7aa6ca",
        900: "#bdd3e5",
      },
      mint: {
        DEFAULT: "#09bc8a",
        100: "#02261c",
        200: "#044c37",
        300: "#057253",
        400: "#07986f",
        500: "#09bc8a",
        600: "#11f4b4",
        700: "#4df7c6",
        800: "#88f9d9",
        900: "#c4fcec",
      },
      "anti-flash_white": {
        DEFAULT: "#ebebeb",
        100: "#2f2f2f",
        200: "#5e5e5e",
        300: "#8d8d8d",
        400: "#bcbcbc",
        500: "#ebebeb",
        600: "#efefef",
        700: "#f3f3f3",
        800: "#f7f7f7",
        900: "#fbfbfb",
      },
      medium_slate_blue: {
        DEFAULT: "#6874e8",
        100: "#090e3b",
        200: "#121b75",
        300: "#1a29b0",
        400: "#2e3fe0",
        500: "#6874e8",
        600: "#8691ed",
        700: "#a4acf1",
        800: "#c3c8f6",
        900: "#e1e3fa",
      },
      lime: {
        DEFAULT: "#bced09",
        100: "#252f02",
        200: "#4b5e03",
        300: "#708e05",
        400: "#96bd07",
        500: "#bced09",
        600: "#cdf832",
        700: "#d9f965",
        800: "#e6fb99",
        900: "#f2fdcc",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
