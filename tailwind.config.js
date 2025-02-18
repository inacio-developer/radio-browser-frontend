/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Garante suporte a JSX e TSX
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4D4D56",
          dark: "#2F2F33",
        },
        accent: {
          light: "#62626C",
          dark: "#4D4D56",
        },
        click: {
          DEFAULT: "#1267FC",
        },
      },
    },
  },
  plugins: [],
};
