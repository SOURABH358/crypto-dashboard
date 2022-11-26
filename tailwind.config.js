/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        'darker-blue': '#04152b',
        'darkest-blue': '#030B18',
        'dark-purple': '#7B5B9E',
        'light-purple':'#7B5C9F',
        'pink': '#ED7297',
        'light-pink':'#EC8871',
        'dark-green':'#236486',
        'light-green':'#79C4C0',
        'grey':'#A0A0A0',
        'white':'#ffffff',
        'orange':'	#FF8C00',
        'success-green':'#50C878'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}