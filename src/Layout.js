 import React,{useState} from 'react'
import Aux from './Aux'
import {connect} from 'react-redux'
import './App.css'
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer'
function Layout(props) {

    const[show,setShow]=useState({show:true})

    const showHandler=()=>{
        setShow(show.show=false)
    }
    const toggleHandler=()=>{

        setShow(pre=>{
            return{
                show:!pre.show,
            }
        })
    }

    console.log(props.isAuth,"ISAUTH")
    return (
       
        <>
        <Aux>
        <Toolbar authentication={props.isAuth} toggle={toggleHandler}/>
        <SideDrawer authentication={props.isAuth} show={show} close={showHandler}  />
             <main  className="content"> {props.children}
             </main>
        
        </Aux>
        </>
    )
}
const mapStateToProps=state=>{
    return{
        isAuth:state.authReducer.token!==null
    }
}

export default connect(mapStateToProps,null)(Layout);
