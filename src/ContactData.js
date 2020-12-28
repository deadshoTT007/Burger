import React, { Component } from 'react'
import './ContactData.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import Input from  './Input'
import Spinner from './Spinner'
import './index.css'
import {connect} from 'react-redux';
import * as actions from '../src/store/actions/order'

 class ContactData extends Component {
    

    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'my name'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3
                },
                valid:false,
                touched:false
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Your Street"
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3
                },
                valid:false,
                touched:false
            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Zipcode"
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5
                },
                
                valid:false,
                touched:false

            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Your Country"
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:"Your Email"
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3
                },
                valid:false,
                touched:false
            },
            deleveryMethod:{
                elementType:"select",
                elementConfig:{
                    options:[{value:"fastest",displayValue:"Fastest"},
                    {value:"slowest",displayValue:"Slowest"}
                ]
                },
                value:"fastest",
                // validation:{},
                valid:true
            }   
        
       
    },
    
    formIsValid:false
    }

    checkValidity=(value,rules)=>{
      
        let isValid=true
        if(rules.required){
isValid=value.trim()!=="" && isValid
console.log(value,rules.required,isValid,"Min Length")

        }
        if(rules.minLength){
isValid=value.length>=rules.minLength && isValid
console.log(value.length,rules.minLength,isValid,"Min Length")
        }
       if(rules.maxLength){
           isValid=value.length<=rules.maxLength && isValid
           console.log(value.length,rules.maxLength,"MAx-length")
       }
       console.log(value.length,rules,isValid,"Valid It anyhow")
        return isValid
    }

    orderHandler=(e)=>{
        e.preventDefault()
        this.props.history.push('/')
        
      
           this.setState({loading:true})
           const formData={}
        for (let name in this.state.orderForm){
            formData[name]=this.state.orderForm[name].value
        }
                  let order={
                      
                    ingredients:this.props.ing,
                    price:this.props.prices,
                  orderData:formData,
                  userId:this.props.userId
                  }
                 this.props.onPurchaseBurger(order,this.props.token)
                  
               
                
        
        }

        inputChangedHandler=(e,name)=>{
            const updatedOrderForm={...this.state.orderForm}
            const updatedFormElement={...updatedOrderForm[name] }
            updatedFormElement.value=e.target.value;
            updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
            updatedFormElement.touched=true;
            console.log(updatedFormElement,"updated")
            console.log(updatedOrderForm[name],"validation")
updatedOrderForm[name]=updatedFormElement;
let formIsValid=true;
for(let key in updatedOrderForm){
    formIsValid=updatedOrderForm[key].valid && formIsValid;
    console.log(formIsValid,"formis validornot")


}
this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid})
console.log(formIsValid,"formValid")
console.log(this.state)

        }
        

    render() {
        
       
        const formElementArray=[]
        for (let key in this.state.orderForm){
            formElementArray.push({id:key,config:this.state.orderForm[key]})
        }



        let form=(
            <form onSubmit={this.orderHandler}>
 
                   
                 {formElementArray.map(formElement=>{
                     console.log(formElement,"formELement")
                    return( <Input key={formElement.id} elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        touched={formElement.config.touched}
                        type={formElement.id}
                        

                        changed={(e)=>this.inputChangedHandler(e,formElement.id)}
                        invalid={!formElement.config.valid}
                        />
                        
                        )})}
                        
                   
                    <button id="Succ" disabled={!this.state.formIsValid}>ORDER</button>
            </form>
        )
        
        if(this.props.loading===true){
            form=(<Spinner/>)
        }
        console.log(this.props.loading,"LOad")
        // console.log("Order List",order)
        return (
            <div className="ContactData" >
                <h4>Enter your Contact Data</h4>
                
                
                   
{form}
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
    ing:state.burgerBuilder.ingredients,
    prices:state.burgerBuilder.totalPrice,
    loading:state.order.spinnerLoading,
    error:state.order.error,
    token:state.authReducer.token,
    userId:state.authReducer.userId
    
}
}
const mapDispatchToProps=dispatch=>{
    return{
    onPurchaseBurger:(orderData,token)=>dispatch(actions.purchaseBurger(orderData,token))
}}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ContactData));
// export default connect(mapStateToProps,mapDispatchtoProps)(BurgerBuilder);
