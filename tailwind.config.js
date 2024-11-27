/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise': 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02) 1px, rgba(0, 0, 0, 0.04) 1px, rgba(0, 0, 0, 0.04) 2px), repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02) 1px, rgba(0, 0, 0, 0.04) 1px, rgba(0, 0, 0, 0.04) 2px)'
      },
      filter: {
        'blur': 'blur(2px)'
      },
      opacity: {
        '50': '0.5'
      }
    }
  },
  
  plugins: [],
}
