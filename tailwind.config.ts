/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // màu xanh (blue-600)
        "primary-foreground": "#ffffff",
        black_202937: "#202937",
      },
      spacing: {
        '18': '4.5rem', // tương đương 72px
      }
    },
  },
  plugins: [],
}
