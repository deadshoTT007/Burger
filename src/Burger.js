import React from 'react';
import BurgerIngredient from './BurgerIngredient'
import './Burger.css';
import {withRouter} from 'react-router-dom'
const burger=(props)=>{

console.log("Props",props)
    let transforMedIngredients=Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,index)=>{
            return <BurgerIngredient key={igKey+index} type={igKey}/>
            
        })
        
    }).reduce((larr,carr)=>{
        return larr.concat(carr)
    },[])
    

    if(transforMedIngredients.length===0){
        
        transforMedIngredients=<p style={{textAlign:"center"}}>PLease Insert Ingredients</p>
    }
    
    console.log(transforMedIngredients)


    return(
        <div className="Burger">
<BurgerIngredient type="bread-top" />
{transforMedIngredients}
<BurgerIngredient type="bread-bottom"/>

        </div>
    )
}
export default withRouter(burger);