/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xxs: "160px",
      xs: "320px",
      ss: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "1920px",
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}