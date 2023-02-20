/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 0.6s infinite 200ms',
        bounce400: 'bounce 0.6s infinite 400ms',
      },
    },
  },
  plugins: [],
}
