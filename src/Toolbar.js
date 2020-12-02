import React from 'react'
import './App.css'
import Logo from './Logo'
import NavigationItems from './NavigationItems'

function Toolbar(props) {
    return (
       <header className="Toolbar">
           <div id="DrawerToggle" onClick={props.toggle}>
               <div></div>
               <div></div>
               <div></div>
           </div>
           <Logo/>
           <nav>
               <NavigationItems/>
           </nav>

       </header>
    )
}

export default Toolbar
