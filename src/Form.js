import './Form.css'
import React from 'react'




export default function Form({searchString, setSearchString}) {
  
    return (
        <div className="textBar">
            
           <form id="thisForm">
         <input type="text" className="cityBox" placeholder="ENTER STATE" onChange={((event)=> setSearchString(event.target.value))}/>
         </form>
            
        </div>
    )
}
