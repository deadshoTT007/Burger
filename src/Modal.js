import React from 'react'
import './App.css'
import Aux from './Aux'
import Backdrop from './Backdrop'

function Modal(props) {
    return (

        <Aux>
            <Backdrop show={props.show} cancel={props.cancel}/>
            <div style={{transform:props.show ? 'translateY(0)':'tranlateY(-100vh)',
        opacity:props.show ?'1':'0'}} className="Modal"> 
            {props.children}
        </div>
        </Aux>
        
    )
} 
 
export default Modal
