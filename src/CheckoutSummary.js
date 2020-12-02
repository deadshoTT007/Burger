import React from 'react'
import Burger from './Burger'
// import Button from './Button'
import './App.css'

function CheckoutSummary(props) {
    return (
        <div className="Checkout">
            <h1>We Hope it tastes good</h1>
            <div style={{width:"100%",height:"auto",margin:"auto"}}>
<Burger ingredients={props.ingredients}/>

            </div>
            <button id="Succ" onClick={props.checkoutContinue}>CONTINUE </button>  
            <button id="Dan" onClick={props.checkoutCancel}>CANCEL </button>  

            
        </div>
    )
}

export default CheckoutSummary
