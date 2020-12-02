import React from 'react'
import './App.css'
import NavigationItem from './NavigationItem'

function NavigationItems() {
    return (
       <ul className="NavigationItems ">
<NavigationItem link='/' active>Burger Builder</NavigationItem>
{/* <NavigationItem link='/'>CheckOut</NavigationItem> */}
       </ul>
    )
}

export default NavigationItems
