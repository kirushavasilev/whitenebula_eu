export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nebula-green': '#9dfc03',
        'nebula-red': '#eb5851',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'ibm': ['IBM Plex Serif', 'serif'],
      },
    },
  },
  plugins: [],
} 