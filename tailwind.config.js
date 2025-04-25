/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: '#0154AA',
          background: '#F4F4F4',
          backgroundSecondary: '#FAFAFA',
          secondary: '#F6F9FF',
          textSecondary: '#737A91',
          textPrimary: '#333333',
          textTiertiary: '#585D6E'
          
        },
        fontFamily: {
          primary: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  