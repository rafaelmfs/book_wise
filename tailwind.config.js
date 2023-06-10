/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },

      lineHeight: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%',
      },

      colors: {
        white: '#FFFFFF',
        black: '#000000',

        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },
  
        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },
  
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },

        'gradient-vertical': 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-horizontal': 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
      },

      backgroundImage: {
        'gradient-vertical': 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-horizontal': 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',

      },

      borderRadius: {
        xs: '2.5px',
        sm: '5px',
        md: '10px',
        lg: '20px',
        full: '99999px'
      }
    },
  },
  plugins: [],
}
