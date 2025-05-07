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
        gray_ccc: "#CCCCCC",
        green_24D6DC: "#24D6DC",
      },
      spacing: {
        '18': '4.5rem', // tương đương 72px
        '6': '1.5rem',  // 24px
      },
      fontSize: {
        '14': '14px',
        '18': '18px',
        '19': '19px',
        '32' : '32px',
        '40': '40px',
        '56': '56px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
