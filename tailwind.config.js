/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#17d067',
          '50': '#effef5',
          '100': '#dafee8',
          '200': '#b7fbd3',
          '300': '#7ff6b2',
          '400': '#53ea94',
          '500': '#17d067',
          '600': '#0dac52',
          '700': '#0e8743',
          '800': '#116a39',
          '900': '#105731',
          '950': '#023119',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
