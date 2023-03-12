// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'light-blue': '#ADD8E6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
