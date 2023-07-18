import React from 'react'
import { useState } from 'react';
import "./test.css";

const Testing = () => {
    const [showLogic,setShowLogic]  = useState(false);
    console.log(showLogic);
    
    return(
       <div className='div_test'>
        
          <div className=  { `toggle${showLogic ? `_hide` : `` } `}>  hello </div>
          <button  onClick={ () => setShowLogic( !showLogic)} >Toggle</button> 
         
         
         </div>
    )
      
}

export default Testing
