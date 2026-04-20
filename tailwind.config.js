/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cccccc',
          300: '#adadad',
          400: '#707070',
          500: '#333333',
          600: '#2e2e2e',
          700: '#262626',
          800: '#1a1a1a', // Arka plan
          900: '#111111', // Daha koyu arkaplan
          950: '#0a0a0a',
        },
        accent: {
          50: '#fcf8f2',
          100: '#f7edde',
          200: '#ecd2ad',
          300: '#e1b77d',
          400: '#d59c4d',
          500: '#C5A059', // Ana Gold Rengi
          600: '#b48324',
          700: '#956b1b',
          800: '#785514',
          900: '#644712',
        },
      },
    },
  },
  plugins: [],
};
