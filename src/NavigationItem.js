import React from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'

function NavigationItem(props) {
    return (

        // className={props.active? "active":null}
       <li className="NavigationItem">
           <NavLink to='/' exact activeClassName='active' >Burger Builder</NavLink>
           <NavLink to='/orders' exact activeClassName='active' >Orders</NavLink>
           
       </li>
    )
}

export default NavigationItem
