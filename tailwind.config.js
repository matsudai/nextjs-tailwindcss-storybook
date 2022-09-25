/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        rounded: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'
      }
    }
  },
  plugins: []
};
