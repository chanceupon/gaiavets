import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexendDeca: ['var(--font-lexend-deca)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#EEEEE4',
      },
      colors: {
        text_primary: '#37725F',
        primary: '#EEEEE4',
        color_2: '#004322',
        color_4: '#DD5C35',
        color_5: '#EEEEE4',
        color_6: '#D1CB53',
        color_8: '#F9BDB2',
        color_9: '#FEC426',
        color_11: '#114A15',
        color_12: '#143021',
        color_10: '#808080',
      },

      fontSize: {},
      lineHeight: {
        '2': '1.375rem',
      },
      screens: {
        '4xl': { min: '2400px' },
        '3xl': { max: '1600px' },
        xxl: { max: '1440px' },
        mxl: { max: '1410px' },
        xl: { max: '1200px' },
        lg: { max: '1025px' },
        md: { max: '768px' },
        sm: { max: '576px' },
        xs: { max: '425px' },
        xxs: { max: '380px' },
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-400%)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        paused: 'paused',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-clip-text': {
          'background-clip': 'text',
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.paused': {
          'animation-play-state': 'paused !important',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'group-hover']);
      addUtilities({
        '.paused': {
          'animation-play-state': 'paused !important',
        },
        '.running': {
          'animation-play-state': 'running',
        },
      });
    },
  ],
};
export default config;
