import React from 'react';
import {connect} from 'react-redux'
import * as actions from './store/actions/Auth'
import {Redirect} from 'react-router-dom'
class Logout extends React.Component{

componentDidMount(){
    this.props.onAuthLogout()
}

    render(){
    return(
        <Redirect to="/"/>
    )

    }
}
    
   



    
const mapDispatchToProps=dispatch=>{
    return{
onAuthLogout:()=>dispatch(actions.authStart())
}}

export default connect(mapDispatchToProps)(Logout)