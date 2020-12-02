import React from 'react'
import NavigationItems from './NavigationItems'
import Logo from './Logo'
import Aux from './Aux'
import Backdrop from './Backdrop'

function SideDrawer(props) {

    let classes=["SideDrawer","Close"]
if(props.show){
    classes=["SideDrawer","Open"]

}

    return (
<Aux>
<Backdrop show={props.show} cancel={props.close}/>
     <div className={classes.join(' ')}>
         <Logo/>
         <nav>
             <NavigationItems/>
         </nav>
     </div>
     </Aux>
    )
}

export default SideDrawer
