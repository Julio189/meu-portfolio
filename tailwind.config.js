/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primaryBgColor': '#1f242d',
        'secondaryBgColor': '#323946',
        'textColor': '#fff',
        'mainColor': '#20bbf8',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px'
      }
    },
  },
  plugins: [],
}
