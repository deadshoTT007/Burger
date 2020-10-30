 import React from 'react'
import Aux from './Aux'

import './App.css'
function Layout(props) {
    return (
        <>
        <Aux>
        <div >toolbar
             <main className="content"> {props.children}
             </main>
        </div>
        </Aux>
        </>
    )
}

export default Layout;
