import React from 'react'
import './App.css'
import NavigationItem from './NavigationItem'

function NavigationItems(props) {
    return (
       <ul className="NavigationItems ">
<NavigationItem authentication={props.authentication} />
{/* <NavigationItem link='/'>CheckOut</NavigationItem> */}
       </ul>
    )
}

export default NavigationItems
