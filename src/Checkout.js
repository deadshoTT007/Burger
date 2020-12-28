import React, { Component } from 'react'
import CheckoutSummary from './CheckoutSummary'
import {Route,Redirect} from 'react-router-dom'
import ContactData from './ContactData'
import {connect} from 'react-redux'
// import axios from 'axios'

 class    Checkout extends Component {

    
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
        this.props.history.replace('/checkout/contact-data')
    }

    render() {


let summary=<Redirect to="/"/>
if(this.props.ing){
    summary=(
        <div>
                     
                     <CheckoutSummary checkoutContinue={this.checkoutContinueHandler} checkoutCancel={this.checkoutCancelHandler} ingredients={this.state.ingredients}/>
<Route path= '/checkout/contact-data' exact  render={(props)=><ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>}/>
{/* <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} /> */} 
        </div>
    )
}
       
        return (
            summary
        )
         
        
    }
}
const mapStateToProps=state=>{
    return{
        ing:state.burgerBuilder.ingredients
    }
}
export default connect(mapStateToProps)(Checkout);

