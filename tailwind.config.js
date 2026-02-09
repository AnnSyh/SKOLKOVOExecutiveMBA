/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // ← ВАЖНО: добавьте эту строку
  content: [
    "./src/**/*.{html,js}",
    "./src/*.{html,js}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))', // Определяем 16 колонки
      },
      gridColumn: {
        'span-16': 'span 16 / span 16', // Добавляем кастомный класс col-span-18
        'span-15': 'span 15 / span 15', // Добавляем кастомный класс col-span-15
        'span-14': 'span 14 / span 14', // Добавляем кастомный класс col-span-14
        'span-13': 'span 13 / span 13', // Добавляем кастомный класс col-span-13
        'span-7': 'span 7 / span 7', // Добавляем кастомный класс col-span-7
        'span-6': 'span 6 / span 6', // Добавляем кастомный класс col-span-6
        'span-5': 'span 5 / span 5', // Добавляем кастомный класс col-span-5
        'span-4': 'span 4 / span 4', // Добавляем кастомный класс col-span-4
        'span-3': 'span 3 / span 3', // Добавляем кастомный класс col-span-3
      },
      backdropBlur: {
        'custom': '28.6px',// backdrop-blur-custom
      },
      fontFamily: {
        sans: [ 'Raleway', 'sans-serif' ],
      },
      colors: {
        primary: '#ffffff',
        secondary: '#10182A',
        tertiary: '#F7F7F7',
        violet: '#480CA8',
        bgviolet: '#8B79D9',
        gray: {
          DEFAULT: '#656462',// bg-gray
          dark: '#3d3b3c',   // bg-gray-dark
        },
        rosy: {
          DEFAULT: '#fffcfb',// bg-rosy
          dark: '#fff5f7', // bg-rosy-dark
        },
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
};
