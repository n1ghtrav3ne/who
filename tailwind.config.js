// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        neutral:{
          50:"#f6f6f6",
          100:"#e7e7e7",
          200:"#d1d1d1",
          300:"#b0b0b0",
          400:"#888888",
          500:"#6d6d6d",
          600:"#5d5d5d",
          700:"#4f4f4f",
          800:"#454545",
          900:"#3d3d3d",
          950:"#0a0a0a",
        }
      }
    },
  },
  plugins: [],
}
