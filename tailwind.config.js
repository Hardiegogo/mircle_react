/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#446DF6',
        'secondary':'#9B7EDE',
        'bgColor':'#F1E3D3',
        'black':'#0A0A0A'
      },
      screens:{
        'sm':{'max':'480px'},
        'md':{'max':'640px'},
        'lg':{'max':'768px'},
        'xl':{'max':'1024px'},
        
      },
      boxShadow:{
        'neu':'5px 5px 0px 0px rgba(10,10,10,1);'
      }
      
    },
    fontFamily:{
      'sans':['Montserrat','sans-serif'],
    }
  },
  plugins: [],
}
