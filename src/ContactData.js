import React, { Component } from 'react'
import './ContactData.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
 class ContactData extends Component {
    

    state={
        name:"",
        email:"",
        address:{
        street:"",
        postal:"",
    },
    loading:false
    }

    orderHandler=(e)=>{
        e.preventDefault()
        this.props.history.push('/contact-data')
       
      
           this.setState({loading:true})
                  let order={
                      
                    ingredients:this.props.ingredients,
                    price:this.props.totalPrice,
                    customer:{
                        name:"Manish Kharel",
                        
                        address:{
                            zipCode:412354,
                            street:"Balkumari",
                            country:'Nepal'
                         },
                         email:"kharelmanish2@gmail.com"
                    },
                    deliveryMethod:'fastest'
                  }
                  
                    axios.post("https://myburger-f07d4.firebaseio.com//orders.json",order).then(response=>{this.setState({loading:false})}).catch(err=> {this.setState({loading:false})})

                    console.log(order)
                
        
        }
        

    render() {
        console.log(this.props.ingredients,"DADADADAD")
        console.log("Contact",this.props)
        // console.log("Order List",order)
        return (
            <div className="ContactData" >
                <h4>Enter your Contact Data</h4>
                
                    <input type="text" name="name" placeholder="your name"/>
                    <input type="email" name="email" placeholder="your email"/>
                    <input type="street" name="street" placeholder="your street" />
                    <input type="text" name="postal" placeholder="your postal"/>
                    <button id="Succ" onClick={(e)=>this.orderHandler(e)}>ORDER</button>

                
            </div>
        )
    }
}
export default withRouter(ContactData);
