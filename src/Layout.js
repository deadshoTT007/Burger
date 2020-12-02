 import React,{useState} from 'react'
import Aux from './Aux'

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
    return (
       
        <>
        <Aux>
        <Toolbar toggle={toggleHandler}/>
        <SideDrawer show={show} close={showHandler}  />
             <main  className="content"> {props.children}
             </main>
        
        </Aux>
        </>
    )
}

export default Layout;
