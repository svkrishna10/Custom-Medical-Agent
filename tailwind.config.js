/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif']
      },
      colors : {
        orange:{
          DEFAULT: '#ff4d03'
        },
        black: {
          DEFAULT : '#000000'
        },
        blue : {
          DEFAULT : '#0512e6'
        },
        gray : {
          100 : '#babbbd',
          600 : '#87888a'
        },
        lightgray:{
          DEFAULT: '#edeef0'
        },
        green:{
          DEFAULT: '#01aa00'
        }
        
        


      },
      spacing : {
        13 : '3.25rem',
      },
      boxShadow : {
        primary : '0px 9.9px 21.6px rgba(0, 0, 150, 0.41)'
      }
    },
  },
  plugins: [],
}

