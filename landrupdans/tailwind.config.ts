import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGray: '#EAEAEA',
        lightPink: '#E1A1E9',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        racing: ['Racing Sans One', 'cursive'],
      },
      fontSize: {
        sm: '18px',
        md: '24px',
        lg: '36px',
      },
    },
  },
  plugins: [],
} satisfies Config;
