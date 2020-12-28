import React, { Component } from 'react'
import Input from './Input'
import "./Auth.css"
import {connect} from 'react-redux'
import * as authActions from './store/actions/Auth' 
import Spinner from './Spinner'
import { Redirect } from 'react-router-dom'
class Auth extends Component{

    componentDidMount(){
        if(!this.props.building && this.props.authRedirectPath!=="/"){
            this.props.onAuthRedirectPath("/checkout")
        }
    }

    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Email'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true,
                    
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'password'
                },
                value:'',
                validation:{
                    required:true,
                  
                },
                valid:false,
                touched:false,
            },
        },
        isSignup:true
    } 

    checkValidity=(value,rules)=>{
      
        let isValid=true
        if(rules.required){
isValid=value.trim()!=="" && isValid

        }
        if(rules.minLength){
isValid=value.length>=rules.minLength && isValid
        }
       if(rules.maxLength){
           isValid=value.length<=rules.maxLength && isValid
           console.log(value.length,rules.maxLength,"MAx-length")
       }
        return isValid
    }


    inputChangedHandler=(e,name)=>{
        const updatedControls={...this.state.controls,
            [name]:{
         ...this.state.controls[name],
         value:e.target.value,
         valid:this.checkValidity(e.target.value,this.state.controls[name].validation),
         touched:true,
            }
        }


this.setState({controls:updatedControls})


    }
     submitHandler=(e)=>{
         e.preventDefault()

         this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignup)
     }

     onSignChange=()=>{
         this.setState(pre=>{
             return{...pre,isSignup:!pre.isSignup}
         })
     }
  

    render(){ 

// 

        const formElementArray=[]
        for (let key in this.state.controls){
            formElementArray.push({id:key,config:this.state.controls[key]})
        }
        console.log(formElementArray.length,"Length") 

        const form=formElementArray.map(formElement=>( <Input key={formElement.id} elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig} 
            value={formElement.config.value}
            touched={formElement.config.touched}
            type={formElement.id}
            

            changed={(e)=>this.inputChangedHandler(e,formElement.id)}
            invalid={!formElement.config.valid}
            />
            
            ))




            // let Error=null
let redirect=null;
if(this.props.token){
redirect=<Redirect to={this.props.authRedirectPath}/>
}

console.log(this.props.token,"TOKEEN")
         
    
        

            let spinner=(
                <div className="Auth">
                    {/* {Error} */}
                    {redirect}
                <form onSubmit={this.submitHandler}>
                    <Input/>

{form}
        <button id="Succ" >{this.state.isSignup?"SIGN UP":"SIGN IN"}</button>
        <button id="Dan" onClick={this.onSignChange} >SWITCH TO {this.state.isSignup?"SIGN IN":"SIGN UP"}</button>

                </form>
            </div>   
            )
        if(this.props.loading){
            return spinner=(
                <Spinner/>
            )
        }  

        // if(this.props.error){
        //     Error=(
        //     <p>{this.props.error.message}</p>
        //     )
        // }


        return(
            
          <>
          {spinner}
          </>
        )
    }
}

const mapStateToProps=state=>{
    return{
        loading:state.authReducer.loading,
        error:state.authReducer.error,
        token:state.authReducer.token!==null,
        building:state.authReducer.building,
        authRedirectPath:state.authReducer.authRedirectPath
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(email,password,isSignup)=>dispatch(authActions.auth(email,password,isSignup)),
        onAuthRedirectPath:(path)=>dispatch(authActions.authRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);