// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' // Ensure this path is correct
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#5B7B7F',
      },
      animation: {
        blink: 'blink 1s infinite', // Custom blinking animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },  // Start and end with no opacity (hidden)
          '50%': { opacity: '1' },        // Halfway through the animation, show the dot
        }
      }
    },
  },
  plugins: [],
}
