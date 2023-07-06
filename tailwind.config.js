/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',      // Small screens
        'md': '768px',      // Medium screens
        'lg': '1024px',
        'w1200': '1200px',     // Large screens
        'xl': '1280px',     // Extra large screens
        '2xl': '1536px',    // 2x extra large screens
      }
    },
  },
  plugins: [],
}

