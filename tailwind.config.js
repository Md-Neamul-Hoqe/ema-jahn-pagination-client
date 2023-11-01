/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx, js}"
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "ema-dip-black": "#1C2B35",
        "ema-black": "#0E161A",
        "ema-orange": "#FF9900",
        "ema-gold": "#FFE0B3",
        "ema-red": "#FF3030",
        "ema-light-red": "#EB5757",
        "ema-gray": "#95A0A7",
        "ema-light-blue": "#2A414F",
      },
      dropShadow: {
        '2xl': '-12px 12px 0px #FFE0B3',
      }
    },
    fontFamily: {
      'lato': [ 'Lato', 'sans' ],
    },

    container: {
      center: true,
    },
  },
}

