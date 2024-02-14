/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './src/**/*.html', './src/**/*.tsx'],
  // other Tailwind CSS configurations...


  theme: {
    fontSize:{
      sm:"20rem"
    },

    extend: {
      fontSize:{
        elijah:"90em"
      }
    },
  },
  plugins: [],
}

