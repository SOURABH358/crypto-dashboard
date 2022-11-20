/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'dark-blue': '#0C49B1',
        'medium-blue': '#4169FF',
        'light-blue': '#15BAFE',
        'darker-blue': '#030F1F',
        'darkest-blue': '#030B18',
        'purple': '#7B5B9E',
        'pink': '#ED7297',
        'dark-green':'#236486',
        'light-green':'#79C4C0',
        'grey':'#A0A0A0'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      
    }
  },
  plugins: [],
}