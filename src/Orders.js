import React, { Component } from 'react';
import Order from './Order'
import './Order.css'
import axios from 'axios'
import Spinner from './Spinner'
export default class Orders extends Component {

state={
    orders:null,
    loading:true
}

componentDidMount(){
axios.get("https://myburger-f07d4.firebaseio.com/orders.json").then(res=>{
    let fetchOrder=[]
for (let key in res.data){
fetchOrder.push({...res.data[key],id:key})
}
this.setState({loading:false,orders:fetchOrder
})
    console.log(fetchOrder,"Order Data")
})


}


    render() {
        console.log(this.state,"DATASSS")

 
if(this.state.loading){
    return(<Spinner/>)
}     



        return (
           <div className="orders">
          {this.state.orders.map(order=>{
              
              return(
                  <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                //    price={order.price}
              )
          })}
           </div>
           
        )
    }
}
