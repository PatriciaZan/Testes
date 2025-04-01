/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"K2D"', "sans-serif"],
      },
      colors: {
        'font-main': '#1E1E1E'
      }
    },
    
    fontSize: {
      sm: '20px',
      md: '40px',
      md36: '36px',
      lg: '200px',

    },

    
    
  },
  plugins: [],
}

