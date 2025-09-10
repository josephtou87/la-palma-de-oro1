import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // ¡Esta línea es crucial para el modo oscuro!
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
        yellow: {
          '50': '#fffef7',
          '100': '#fffceb',
          '200': '#fff7c9',
          '300': '#fff09a',
          '400': '#ffe45f',
          '500': '#ffd933',
          '600': '#f2c200',
          '700': '#cc9e00',
          '800': '#a67b00',
          '900': '#856100',
          '950': '#4f3600',
        },
      }
    },
  },
  plugins: [],
}
export default config