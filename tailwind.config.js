/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: ['0.86rem', '1.154rem'], // [13px, 15px]
      base: ['1rem', '1.2rem'], // [15px, 18px]
      lg: ['1.2rem', '1.4rem'], // [18px, 21px]
      xl: ['1.26rem', '1.47rem'], // [19px, 22px]
      '2xl': ['1.53rem', '1.8rem'], // [23px, 27px]
      '3xl' : ['1.8rem', '2.13rem'], // [27px, 32px]
      '4xl': ['4.93rem', '5.8rem'] // [74px, 87px]
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-helvetica-nueu)'],
      },
      screens: {
        '2xl': "1440px",
        '3xl': "1536px"
      }
    },
  },
  plugins: [],
}
