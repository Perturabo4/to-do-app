import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary"> 
                <div className="navbar-brand">
                        Note App
                </div>  
                <ul className="navbar-nav">
                    <li>
                        <NavLink 
                            className="nav-link" 
                            to="/"
                            exact
                            >Home </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="nav-link" 
                            to="/about"
                            >About </NavLink>
                    </li>
                </ul>           
            </nav>
        </Fragment>
    )
}

export default Navbar