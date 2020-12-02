import * as actionTypes from '../actions/actionType'
let initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0

    },
    totalPrice:4
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
        return{
            ...state,
            ingredients:{...state.ingredients,[action.name]:state.ingredients[action.name]+1},
            totalPrice:state.totalPrice+INGREDIENT_PRICES[action.name]
        }
        // break;
        case actionTypes.REMOVE_INGREDIENT:{
            return{
                ...state,
                ingredients:{...state.ingredients,[action.name]:state.ingredients[action.name]-1},
                totalPrice:state.totalPrice-INGREDIENT_PRICES[action.name]
    
            }
            // break;
             
        }
    }
    return state;
}
export default reducer