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
        },
        error: {
          default: "#e14b41"
        },
        success: {
          default: "#a4d338"
        }
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-pre-bg': "#282c34",
            '--tw-prose-invert-pre-bg': "#282c34"
          },
        },
      }),
      transitionProperty: {
        backgroundSize: "background-size",
        transform: "transform"
      },
      width: {
        86: "22rem",
        105: "28.125rem",
        110: "30rem"
      },
      gridTemplateColumns: {
        'autoFill': "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))"
      },
      screens: {
        minProject: "430px",
        minIntroduce: "920px"
      },
      scale: {
        press: "0.98"
      },
      keyframes: {
        messageBottom: {
          '0%': { bottom: "-10rem" },
          '100%': { bottom: "1.25rem" },
        }
      },
      animation: {
        message: "messageBottom 300ms linear"
      },
      borderWidth: {
        "0.5": "0.01rem"
      },
      fontSize: {
        "2xs": "0.5rem"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
}
