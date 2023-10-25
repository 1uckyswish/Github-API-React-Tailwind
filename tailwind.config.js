/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        'rr': {
          

 'primary' : '#f28c18',


          

 'primary-focus' : '#c9710d',


          

 'primary-content' : '#131616',



          

 'secondary' : '#6d3b9b',


          

 'secondary-focus' : '#532c77',


          

 'secondary-content' : '#ffffff',



          

 'accent' : '#4fa300',


          

 'accent-focus' : '#367000',


          

 'accent-content' : '#ffffff',



          

 'neutral' : '#1b1d5d',


          

 'neutral-focus' : '#131616',


          

 'neutral-content' : '#ffffff',



          

 'base-100' : '#1f1f1f',


          

 'base-200' : '#1b1d1d',


          

 'base-300' : '#131616',


          

 'base-content' : '#ffffff',



          

 'info' : '#66c7ff',


          

 'success' : '#87cf3a',


          

 'warning' : '#e1d460',


          

 'error' : '#ff6b6b',



          

'--rounded-box': '1rem',          


          

'--rounded-btn': '.5rem',        


          

'--rounded-badge': '1.9rem',      



          

'--animation-btn': '.25s',       


          

'--animation-input': '.2s',       



          

'--btn-text-case': 'uppercase',   


          

'--navbar-padding': '.5rem',      


          

'--border-btn': '1px',            


        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
