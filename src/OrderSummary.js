import React from 'react'
import Aux from './Aux';
import Button from './Button'
import './App.css'

function OrderSummary(props) {

const ingredients=Object.keys(props.ingredients).map(igkey=>{
return <li key={igkey}><span style={{textTransform:"capitalize"}}>{igkey}:</span>{props.ingredients[igkey]}</li>

})
const ing=ingredients.reduce((larr,carr)=>{
    return larr.concat(carr)
},[])
console.log(ingredients,ing)

    return (
        <Aux>
             
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients :</p>
            <ul>
{ingredients}
            </ul>
            <p><strong>Total:{props.price.toFixed(2)}</strong></p>
            <Button  id="Succ" class="Button"  Click={props.purchaseContinue}>CONTINUE</Button>
            <Button  id="Dan" class="Button" Click={props.purchaseCancel}>CANCEL</Button>
            
        </Aux>
    )
}

export default OrderSummary




