/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          default: "#c4cfde"
        },
        black: {
          default: "#1e2024",
          extra: {
            light: "#32363b"
          },
          light: "#23272b"
        },
        orange: {
          default: "#feb633"
        }
      },
      screens: {
        
      },
      fontSize: {
        
      },
      backgroundImage: {
        'laptop': "url('/laptop.webp')"
      }
    },
  },
  plugins: [],
}
