import * as actionTypes from '../actions/actionType'
import { updateObject } from './utility'
let initialState={
    ingredients:null,
    totalPrice:4,
    loading:false,
    building:false
}
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient={[action.name]:state.ingredients[action.name]+1}
            const updatedIngredients=updateObject(state.ingredients,updatedIngredient)

            const updatedState={
                ingredients:updatedIngredients,
                totalPrice:state.totalPrice+INGREDIENT_PRICES[action.name],
                building:true,
            }

        return  updateObject(state,updatedState)
        
        // break;
        case actionTypes.REMOVE_INGREDIENT:

            const updatedIngredientRemoved={[action.name]:state.ingredients[action.name]-1}
            const updatedIngredientsRemoved=updateObject(state.ingredients,updatedIngredientRemoved)

            const updatedStateRemoved={
                ingredients:updatedIngredientsRemoved,
                totalPrice:state.totalPrice+INGREDIENT_PRICES[action.name],
                building:true
            }


            return updateObject(state,updatedStateRemoved)

case "SET_INGREDIENTS":{
    return updateObject(state,{
        ingredients:{
            salad:action.ingredients.salad,
            bacon:action.ingredients.bacon,
            cheese:action.ingredients.cheese,
            meat:action.ingredients.meat
        },
        totalPrice:4,
        loading:false,
        building:false
    })
}

        case "Error":
            return updateObject(state,{loading: true})
            case actionTypes.SET_INGREDIENT:
                return{
                    ...state,
                    ingredients:action.ingredients,
                    loading:false,
                    totalPrice:4,
                }
    }
    return state;
}
export default reducer