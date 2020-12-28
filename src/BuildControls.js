import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl'
const controls=[
    { label:"Salad",type:"salad"},
    { label:"Bacon",type:"bacon"},
    { label:"Cheese",type:"cheese"},
    { label:"Meat",type:"meat"},

]
function BuildControls(props) {
console.log("iadaid",controls)
    return(
        <div className="BuildControls">
            <p>Current Price:<strong>${props.price.toFixed(2)}</strong></p>
            {
            controls.map(ctrl=>(
            <BuildControl key={ctrl.label} 
            disabled={props.disabled[ctrl.type]}  
            label={ctrl.type}
             deleted={()=>props.deletedIngredient(ctrl.type)} 
             added={()=>props.ingredientAdded(ctrl.type)} 
             />))}
            <button className="OrderButton" onClick={props.ordered} 
            disabled={!props.purchasable}>{props.isAuthenticated?"ORDER NOW":"SIGN UP"}</button>
        </div>
    )
}

export default BuildControls


