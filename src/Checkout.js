import React, { Component } from 'react'
import CheckoutSummary from './CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData'
// import axios from 'axios'

export default class Checkout extends Component {

    
    state={
        ingredients:null,
        totalPrice:0
    }
    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search)
        console.log("Querydata",query)
        console.log("ChekoutQuery",query)
        const ingredients={}
        let param;
        let price=0
        for (  param of query.entries()){
            if(param[0]==="price"){
                price=param[1]
            }else{
            ingredients[param[0]]=+param[1];
        }
        }
       
        
        this.setState({ingredients:ingredients,totalPrice:price})
    }

    checkoutCancelHandler=()=>{
        console.log("adad")
        this.props.history.goBack()
    }
    checkoutContinueHandler=()=>{
        // this.props.history.replace('/checkout/contact-data')
    }

    render() {
        console.log("DATAS",this.state)
     console.log("Querrrry",this.props)
        return (
            <div>
                
                <CheckoutSummary checkoutContinue={this.checkoutContinueHandler} checkoutCancel={this.checkoutCancelHandler} ingredients={this.state.ingredients}/>
<Route path= '/checkout/contact-data' render={(props)=>(<ContactData totalPrice={this.state.totalPrice} ingredients={this.state.ingredients}/>)}/>
{/* <ContactData ingredients={this.state.ingredients} /> */}
            </div>
        )
    }
}
