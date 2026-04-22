import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#64CEFB',
      },
      keyframes: {
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'shine-sweep': {
          '0%': { backgroundPosition: '-250% center' },
          '100%': { backgroundPosition: '250% center' },
        },
      },
      animation: {
        'bounce-y': 'bounce-y 1.8s ease-in-out infinite',
        'shine-sweep': 'shine-sweep 3s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
