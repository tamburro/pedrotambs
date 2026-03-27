/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmos:    '#080810',
        void:      '#0D0D18',
        nebula:    '#1A1A2E',
        stardust:  '#2D2540',
        plasma:    '#8200DB',
        aurora:    '#C070FF',
        moonlight: '#F0F0FA',
        mist:      'rgba(240,240,250,0.55)',
      },
      fontFamily: {
        body:  ['"Poppins"', 'sans-serif'],
        mono:  ['"Space Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      borderColor: {
        DEFAULT: 'rgba(130,0,219,0.15)',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
}
