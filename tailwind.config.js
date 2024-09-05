/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
          poppins: ['Poppins', 'sans-serif'],
              // You can add more custom fonts here
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // Add other custom fonts as needed
      },
    },
  },
  plugins: [],
}
