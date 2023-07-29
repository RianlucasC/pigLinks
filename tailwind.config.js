/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinkLive': '#FFAEAD',
        'blackLive': '#1F1F1F',
        'whiteText': '#F1F1F1',
        'grayLive': '#282828',
        'linkHover': '#3B3B3B',
      },
      backgroundImage: {
        'imageMain': "url('/public/background5.png')",
        'imageMainMedium': "url('/public/backgroundMedium.png')",
      },
      boxShadow: {
        'shadowLive': '5px 5px 5px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

