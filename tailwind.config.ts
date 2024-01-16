import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-background": "url('/images/auth-bg.png')",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F3F3F4",
          200: "#E8E8F0",
          300: "#D8D8D8",
          400: "#C8C8C8",
          500: "#B8B8B8",
          600: "#A8A8A8",
          650: "#FDFDFD",
          700: "#989898",
          800: "#888888",
          900: "#787878",
          1000: "#686868",
          1100: "#585858",
          1200: "#484848",
          1300: "#383838",
          1400: "#282828",
          1500: "#181818",
          1600: "#080808",
        },
        kotani: {
          blue: '#6B88EF',
          lightblue: '#99BEFF',
          yellow: '#FEDB5B',
          orange: '#F09F20',
          red: '#E80000',
        },
        black: {
          DEFAULT: "#000000",
          100: "#080808",
          200: "#181818",
          300: "#282828",
          400: "#383838",
          500: "#484848",
          600: "#585858",
          700: "#686868",
          800: "#787878",
          900: "#888888",
          1000: "#989898",
          1100: "#A8A8A8",
          1200: "#B8B8B8",
          1300: "#C8C8C8",
          1400: "#D8D8D8",
          1500: "#E8E8F0",
          1600: "#F3F3F4",
        },
       
      },
    },
  },
  plugins: [],
};
export default config;
