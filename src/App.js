import React,{Component} from 'react';
import Layout from './Layout';
import BurgerBuilder from './BurgerBuilder'
import './App.css';
class App extends Component {

    render(){
return(
<>
        <Layout>
            <BurgerBuilder/>
        </Layout>
        </>
        )
    }
}
export default App;