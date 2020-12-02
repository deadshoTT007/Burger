import React from 'react'
import logo from '../src/assest/28.1 burger-logo.png'
import './App.css'

function Logo(props) {
    return (
        <div className="Logo">
            <img src={logo} style={{height:props.height}}  alt="Logo"/>
        </div>
    )
}

export default Logo
