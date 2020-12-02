import React from 'react'
import './Order.css'

function Order(props) {
    console.log(props)

    let array=[]
    for(let name in props.ingredients){
        
        array.push({name:name,ingredients:props.ingredients[name]})
        console.log("array",array)

    }
    let value=array.map(data=>{
        return(
        <span>{data.name}: {data.ingredients}</span>
        )
    })
    return (
        <div className="order">
            
    <p>Ingredients:{value}</p>
    <h1>Price:${props.price.toFixed(2)}</h1>
        </div>
    )
}

export default Order
