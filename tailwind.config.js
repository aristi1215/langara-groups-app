/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily: {
        'adelle-bold': ['Adelle-bold', 'sans-serif'],
        'adelle-medium': ['Adelle-regular', 'sans-serif'],
        'adelle-semibold': ['Adelle-semibold', 'sans-serif'],
        'adelle-light': ['Adelle-light', 'sans-serif'],
      },
      
      colors: {
        primary: {
         default: '#e75425',
         light: '#fde3d2'
        },
        primaryGray: '#20232c'

      }

    },
  },
  plugins: [],
}