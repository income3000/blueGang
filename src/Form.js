
import React from 'react'
import {useState, useEffect } from 'react'
import EventData from './EventData'


export default function Form({searchString, setSearchString}) {
  
    return (
        <div>
            
            
            <input type="text" className="cityBox" placeholder="enter city" onChange={((event)=> setSearchString(event.target.value))}/>
       
            
        </div>
    )
}
