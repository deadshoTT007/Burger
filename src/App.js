import React,{Component} from 'react';
import Layout from './Layout';
import BurgerBuilder from './BurgerBuilder'
import './App.css';
import Checkout from './Checkout'
import {Route,Switch} from 'react-router-dom'
import ContactData from './ContactData';
import Orders from './Orders'
import Auth from './Auth'
import Logout from './Logout'
import {connect} from "react-redux"
import * as authActions from './store/actions/Auth'
class App extends Component {
componentDidMount(){
    this.props.onStateChange()
}
    render(){


        // let routes=(
//     <Switch>
//         <Route path="/Authenticate" exact component={Auth} />
//         <Route path="/" exact component={BurgerBuilder}/>
//         <Redirect to="/" />
//     </Switch>
// )

// if(this.props.token){
//     routes=(
//         <Switch>

// <Route path="/orders" exact component={Orders}/>
// <Route exact path="/checkout/contact-data" component={ContactData}/>
// <route path="/logout" exact component={Logout}/>
// <Route path="/checkout" exact component={Checkout}/>
// <Redirect to="/"/>
//         </Switch>
//         )
    
// }
return(
<>
        <Layout>
            <Switch>
            <Route path="/checkout" exact component={Checkout}/>
<Route path="/orders" exact component={Orders}/>
<Route path='/Authenticate' exact component={Auth}/>
<route path="/logout" exact component={Logout}/>
                <Route path="/" exact component={BurgerBuilder}/>
                                <Route exact path="/checkout/contact-data" component={ContactData}/>
            </Switch>
            
        </Layout>
        </>
        )
    }
}

const mapStateToProps=state=>{
    return{
        token:state.authReducer.token
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onStateChange:()=>dispatch(authActions.authStateChange())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);