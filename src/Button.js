import React from 'react'
import './App.css'

function Button(props) {
    
    return (
       <button id={props.id} className={props.button}  onClick={props.Click} >{props.children}</button>
     
    )
}

export default Button
