import React, { Component } from 'react';
import Order from './Order'
import './Order.css'
import axios from 'axios'
import Spinner from './Spinner'
// import * as orderFetch from '../src/store/actions/order'

import * as orderFetch from '../src/store/actions/order'
import {connect} from 'react-redux'

 class Orders extends Component {

state={
    orders:null,
    loading:true
}

componentDidMount(){
    
    
    const params='?auth='+this.props.token +'&orderBy="userId"&equalTo="'+this.props.userId+'"';
    console.log(params,"par")
axios.get("https://myburger-f07d4.firebaseio.com/orders.json"+ params).then(res=>{
    console.log(params,"params")
    let fetchOrder=[]
for (let key in res.data){
fetchOrder.push({...res.data[key],id:key})
}
this.setState({loading:false,orders:fetchOrder
})
    console.log(fetchOrder,"Order Data")
})
  
// this.props.onFetchOrder(this.props.token,this.props.userId)

// let order=this.props.onFetchOrder(this.props.token,this.props.userId)
// console.log(order,"ORDER")

}


    render() {
        console.log(this.state,"DATASSS")
        console.log(this.props.orders,"ORDDERS")
        console.log(this.props.token,"token")

 
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


const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchOrder:(token,userId)=>dispatch(orderFetch.fetchOrders(token,userId))

    }
  
}
  const mapStateToProps=state=>{
        return{
            token:state.authReducer.token,
            orders:state.order.orders,
            userId:state.authReducer.userId,
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Orders);
