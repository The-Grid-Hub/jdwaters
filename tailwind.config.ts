import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1100px',
      '2xl': '1260px',
    },
    extend: {
      colors: {
        navy:         '#0D2040',
        navy2:        '#162B52',
        navy3:        '#1B3668',
        cyan:         '#17A8CE',
        'cyan-dark':  '#0F8BAA',
        amber:        '#F5A623',
        'amber-dark': '#D88E0F',
        bg:           '#F7F9FC',
        'bg-alt':     '#FFFFFF',
        border:       '#E0E7EF',
        text:         '#1A2840',
        'text-light': '#5A6B82',
        'text-muted': '#8A9BB4',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      maxWidth: {
        page: '1260px',
      },
    },
  },
  plugins: [],
}

export default config
