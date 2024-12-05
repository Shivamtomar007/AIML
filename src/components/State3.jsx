import React from 'react'
import { useState } from 'react';
const State3 = () => {
    const[total,settotal] = useState(0);
  return (
    <div>
            <button onClick={()=>{
                settotal(total+1)
            }}>
        count++
        </button>
  <button onClick={()=>{
    settotal(total-1)
  }}>
        count--
         </button>  
         <h2> {total}</h2>
    </div>
  )
}

export default State3







