/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a5276",
        accent: "#d8942c",
        gold: "#d8a600",
        muted: "#6b7280",
      },
    },
  },
  plugins: [],
};

