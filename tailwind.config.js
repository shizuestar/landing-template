/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px'
      },
      colors:{
        "primary" : '#0ea5e9',
        "secondary" : '#a855f7',
        "light": "#f1f5f9",
        "dark" : '#0f172a'
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}