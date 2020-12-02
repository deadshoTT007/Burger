import React,{Component} from 'react';
import Layout from './Layout';
import BurgerBuilder from './BurgerBuilder'
import './App.css';
import Checkout from './Checkout'
import {Route,Switch} from 'react-router-dom'
import ContactData from './ContactData';
import Orders from './Orders'
class App extends Component {

    render(){
return(
<>
        <Layout>
            <Switch>
            <Route path="/checkout" exact component={Checkout}/>
<Route path="/orders" exact component={Orders}/>
                <Route path="/" exact component={BurgerBuilder}/>
                                <Route exact path="/checkout/contact-data" component={ContactData}/>
            </Switch>
            
        </Layout>
        </>
        )
    }
}
export default App;