/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
                'sm': '425px',

                'md': '768px',

                'lg': '992px',

                'xl': '1200px',

                '2xl': '1400px',
                
                '3xl': "1800px",
                

            },
    extend: {},
  },
  plugins: [],
}
