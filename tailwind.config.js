/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#121212', // Możesz nazwać go, jak chcesz, np. "darkGray"
        text: '#313131', // Możesz nazwać go, jak chcesz, np. "darkGray"
        lightGray: '#C9C9C9', // Możesz nazwać go, jak chcesz, np. "darkGray"
        textGray: '#797979', // Możesz nazwać go, jak chcesz, np. "darkGray"
        backgroundColor: '#EEEEEE',
        burger: '#232323',
        services: '#434343',
        lightRed: '#E87575',
        footer: '#1B1B1B',
        footerText: '#EEEEEE'
      }
    },
  },
  plugins: [],
}