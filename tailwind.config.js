/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 daisyui: {
    themes: [
      {
        'cupcake': {
          

 'primary' : '#65c3c8',


          

 'primary-focus' : '#42b2b8',


          

 'primary-content' : '#ffffff',



          

 'secondary' : '#ef9fbc',


          

 'secondary-focus' : '#e7739e',


          

 'secondary-content' : '#ffffff',



          

 'accent' : '#eeaf3a',


          

 'accent-focus' : '#e09915',


          

 'accent-content' : '#ffffff',



          

 'neutral' : '#261230',


          

 'neutral-focus' : '#200f29',


          

 'neutral-content' : '#ffffff',



          

 'base-100' : '#faf7f5',


          

 'base-200' : '#efeae6',


          

 'base-300' : '#e7e2df',


          

 'base-content' : '#261230',



          

 'info' : '#1c92f2',


          

 'success' : '#009485',


          

 'warning' : '#ff9900',


          

 'error' : '#ff5724',



          

'--rounded-box': '1rem',          


          

'--rounded-btn': '1.9rem',        


          

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
  plugins: [require('daisyui')],
}