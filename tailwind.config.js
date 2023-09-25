/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      'maroon': '#800000',
      'placeholder':{
        'sm' : '0.875rem',
      }
    },
  },
  plugins: [],
}

