import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
        'sm': '640px',
        'md': '768px',
        'lg': '960px',  //ВНИМАНИЕ! Не дефолтное значение! По дефолту 1024px
        'xl': '1200px', //ВНИМАНИЕ! Не дефолтное значение! По дефолту 1280px
        '2xl': '1440px', //ВНИМАНИЕ! Не дефолтное значение! По дефолту 1536px
      },
      colors: {
        '_green': '#00FFB2',
        '_blue': '#0E6AC5',
        '_bg_div': '#2C67B0',
      },
    },
  },
  plugins: [],
};
export default config;
