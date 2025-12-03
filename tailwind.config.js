/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Arctic Night theme
        'arctic-blue': '#3E86F5', // primary accent
        'arctic-ice': '#CFEFFF', // light accent / snow
        'arctic-200': '#E6F6FF',
        'arctic-100': '#F4FBFF',
        'arctic-dark': '#071224', // deep background
        'arctic-800': '#0f1724',
        'arctic-700': '#112233',
        'text-primary': '#EAF6FF', // light primary text for dark bg
        'text-secondary': '#94A7BB', // subdued text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
