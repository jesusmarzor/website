/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: {
          default: "#f3f3f3"
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
        },
        white: {
          default: "#ffffff"
        }
      },
      transitionProperty: {
        backgroundSize: "background-size",
        transform: "transform"
      },
      width: {
        86: "22rem",
        110: "30rem"
      },
      gridTemplateColumns: {
        'autoFill': "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))"
      },
      screens: {
        minProject: "430px"
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}
