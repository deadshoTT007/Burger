import React, { Component } from 'react';
 import Aux from './Aux';
 import Burger from './Burger'
 import BuildControls from './BuildControls';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

 class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4
    }



     addIngredientsHandler=(type)=>{
         const oldCount=this.state.ingredients[type];
         const updatedCount=oldCount+ 1;
         const updatedIngredient={
             ...this.state.ingredients
         }
         updatedIngredient[type]=updatedCount;
         const oldPrice=this.state.totalPrice;
         const priceAddition=INGREDIENT_PRICES[type];
         const newPrice=priceAddition + oldPrice;
         this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
     }
      deleteIngredientsHandler=(type)=>{

        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount -1;
        if(oldCount<=0){
            return;
        }
        const updatedIngredient={...this.state.ingredients}
        updatedIngredient[type]=updatedCount;
        const price=this.state.totalPrice;
        const priceAddition=INGREDIENT_PRICES[type];

        const newPrice=price - priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient})




      }


     render(){

        const disabledInfo={
            ...this.state.ingredients,
        }

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
         return(
             <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls price={this.state.totalPrice} ingredientAdded={this.addIngredientsHandler} deletedIngredient={this.deleteIngredientsHandler} disabled={disabledInfo}/>
             </Aux>
         )
     }
 }
 export default BurgerBuilder;
