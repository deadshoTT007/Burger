import React, { Component } from 'react';
 import Aux from './Aux';
 import Burger from './Burger'
 import BuildControls from './BuildControls';
import OrderSummary from './OrderSummary';
import Modal from './Modal';
import Spinner from './Spinner'
import {connect} from 'react-redux';
import  * as actionTypes from './store/actions/actionType'
import * as burgerBuilderActions from './store/actions/index'

 class BurgerBuilder extends Component{

    
    state={
             
        
        purchase:false,
        purchasing:false,
        loading:false
    }
    componentDidMount(){
        console.log("History",this.props)
    }

    updatePurchaseState=(ingredients)=>{

     
      const sum=  Object.keys(ingredients).map(igkey=>{
            return ingredients[igkey]
        }).reduce((sum,el)=>{
return sum+el;
        },0)

        return sum>0
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
        

    }

  


     addIngredientsHandler=(type)=>{
         console.log("dada")
         const oldCount=this.state.ingredients[type];
         const updatedCount=oldCount+ 1;
         const updatedIngredient={
             ...this.state.ingredients
         }
         updatedIngredient[type]=updatedCount;
         const oldPrice=this.state.totalPrice;
         const priceAddition=this.props.prices[type];
         const newPrice=priceAddition + oldPrice;
         this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
         this.updatePurchaseState(updatedIngredient)
     }
      deleteIngredientsHandler=(type)=>{

        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount -1;
        if(oldCount<=0){
            return;
        }
        const updatedIngredient={...this.state.ingredients}
        updatedIngredient[type]=updatedCount;
        const price=this.state.totalPrice;
        const priceAddition=this.props.prices[type];

        const newPrice=price - priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
        this.updatePurchaseState(updatedIngredient)

      }
      cancelOrder=()=>{
          this.setState({purchasing:false})
      }
      purchaseContinue=()=>{
        //   this.setState({loading:true})
        //   const order={
              
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:"Manish Kharel",
                
        //         address:{
        //             zipCode:412354,
        //             street:"Balkumari",
        //             country:'Nepal'
        //          },
        //          email:"kharelmanish2@gmail.com"
        //     },
        //     deliveryMethod:'fastest'
        //   }
          
        //     axios.post("https://myburger-f07d4.firebaseio.com//orders.json",order).then(response=>{this.setState({loading:false,purchasing:false})}).catch(err=> {this.setState({loading:false,})})
         const queryParams=[]
         for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+ "=" + encodeURIComponent(this.state.ingredients[i]))
         }
         queryParams.push("price="+ this.state.totalPrice)
         const queryString=queryParams.join("&")
         console.log("Queryparams",queryString)

         this.props.history.push('/checkout')
        this.props.history.push({
           
            search:'?' + queryString,
        })
      }
      

     render(){
        console.log("History",this.props)

        const disabledInfo={
            ...this.props.ing,
        }

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }

        

       
        let burger=<Spinner/>
        let orderSummary=null

        if(this.props.ing){
             burger=(
                <Aux>
                <Burger ingredients={this.props.ing}/>
                <BuildControls price={this.props.prices} 
                ingredientAdded={this.props.onIngredientAdded} 
                deletedIngredient={this.props.onIngredientRemoved} 
                purchasable={this.updatePurchaseState(this.props.ing)}
                disabled={disabledInfo}
                ordered={this.purchaseHandler}
                purchase={this.state.purchasing}
                />
                
             </Aux>
           
            )
            orderSummary=(
                <OrderSummary ingredients={this.props.ing} price={this.props.prices} purchaseContinue={this.purchaseContinue} purchaseCancel={this.cancelOrder}/>
                
             )
        }
        if(this.state.loading){
            orderSummary=<Spinner/>

        }
         return(
             <Aux>
             
             <Modal show={this.state.purchasing} cancel={this.cancelOrder}>
              {orderSummary}
             </Modal>
          {burger}
          </Aux>
             
         )
     }
 }

const mapStateToProps=state=>{
    return{
    ing:state.ingredients,
    prices:state.totalPrice
    
}
}
const mapDispatchtoProps=dispatch=>{
    return{
        onIngredientAdded:(name)=>dispatch(burgerBuilderActions.addIngredient(name)),
        onIngredientRemoved:(name)=>dispatch(burgerBuilderActions.removeIngredient(name))
    }
}

 export default connect(mapStateToProps,mapDispatchtoProps)(BurgerBuilder);
