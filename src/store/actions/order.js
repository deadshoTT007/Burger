import axios from 'axios'
import * as actionTypes from './actionType'

export const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type:"Purchase_Burger_Success",
        id:id,
        orderData:orderData
    }
}
export const purchaseBurgerFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}
export const purchaseBurgerStart=()=>{
    return{
        type:"Purchase_Burger_Start"
    }
}

export const purchaseBurger=(orderData,token)=>{
    console.log('aaa')
    return dispatch=>{
        dispatch(purchaseBurgerStart)
        console.log("aaaaa")
           axios.post("https://myburger-f07d4.firebaseio.com//orders.json?auth="+token,orderData).then(response=>{
           dispatch(purchaseBurgerSuccess(response.data.name,orderData))
           console.log(response.data.name,orderData,"resdata")
    
    })
    .catch(err=> {
        dispatch(purchaseBurgerFail(err))
        console.log(err,"err")
    })
}
}


    export const fetchOrderStart=()=>{
        return{
            type:"FETCH_ORDER_START"
        }
    }
    export const fetchOrderSuccess=(orders)=>{
        return{
            type:"FETCH_ORDER_SUCCESS",
            orders:orders
        }
    }
    export const fetchOrderFail=()=>{
        return{
            type:"FETCH_ORDER_FAIL"
        }
    }

    export const fetchOrders=(token,userId)=>{
        return dispatch=>{
            dispatch(fetchOrderStart())
            const params='?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';


            axios.get("https://myburger-f07d4.firebaseio.com/orders.json"+params).then(res=>{
                console.log(res,"res")
    
    let fetchOrder=[]
for (let key in res.data){
fetchOrder.push({...res.data[key],id:key})
console.log(fetchOrder,"fetchOrder")
}
dispatch(fetchOrderSuccess(fetchOrder))
    
}).catch(err=>{
    dispatch(fetchOrderFail(err))
})

        }
    }
       
    


    

