// import * as orderActionTypes from './order'
import * as orderActionTypes from '../actions/actionType.js'

const initialState={
    orders:[],
    spinnerLoading:false,
    error:''
}

export const orderReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Purchase_Burger_start":
            return{
                ...state,
                spinnerLoading:true,
            }
        case "Purchase_Burger_Success":
            const newOrder={
                ...action.orders,
                id:action.id
            }
            return{
                ...state,
                orders:state.orders.concat(newOrder),
                spinnerLoading:false
            }
            case orderActionTypes.PURCHASE_BURGER_FAIL:
                return{
                    ...state,error:action.error
                }
case "FETCH_ORDER_START":
    return{
        ...state,
        loading:true
    }
    case "FETCH_ORDER_SUCCESS":
    return{
        ...state,
        orders:state.orders.push(action.orders)

    }
    case "Fetch_ORDER_FAIL":
        return{
            ...state,loading:false
        }

                default:
                    return initialState 
            
    }
}
