import axios from 'axios';
import * as actionTypes from './actionType'

export const addIngredient=(name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        name:name
    }
}

export const removeIngredient=(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        name:name
    }
}

export const setIngredient=(ingredients)=>{
    return{
        type:actionTypes.SET_INGREDIENT,ingredients:ingredients
    }
}

export const Error=()=>{
    return{
        type:"Error"
    }
}




export const initIngredients=()=>{
    return dispatch=>{  
  
dispatch(Error())
        axios.get("https://myburger-f07d4.firebaseio.com/ingredients.json").then(response=>{
            dispatch(setIngredient(response.data))
        })
        
}}

