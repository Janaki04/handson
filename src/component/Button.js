 import React from 'react'
import { useState } from 'react'
import Functional from './Functional'
import './style.css'
import Class from './Class'


 const Button = () => {
    const [funText, clickHandler1] = useState(false)
    const [clsText, clickHandler2] = useState(false)

    return (
        <div>
          <div>
            <h1 className='heading'>Styling using Functional and Class Component</h1>
          </div>

          <div >
          <button className='click' onClick={()=>clickHandler1(!funText)}>To see styling in Functional Component </button>  
         </div>

            <div>
            <button className='click1' onClick={()=>clickHandler2(!clsText)}>To see styling in Class Component </button>  
           </div>

           <div>
            <div  onClick={()=>clickHandler1(!funText)}>
         {funText && <Functional />} </div>
         
     <div onClick={()=>clickHandler2(!clsText)}>
       {clsText && <Class/>} </div>
       </div>
        </div>
        )
    }

    export default Button;