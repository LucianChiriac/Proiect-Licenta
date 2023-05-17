import React from 'react';
import { NavLink } from 'react-router-dom'
import "./Header.css"

function Header(){
    return(
        <header>
            <nav className="mainNav">
            <NavLink to="/Home" 
            className={({isActive}) => isActive ? "activeStyle" : ""}
            >Home</NavLink>
            <NavLink to="/About" className={({isActive}) => isActive ? "activeStyle" : ""}>Despre</NavLink>
            <NavLink to="/Services" className={({isActive}) => isActive ? "activeStyle" : ""}>Servicii</NavLink>
            <NavLink to="/Booking" className={({isActive}) => isActive ? "activeStyle" : ""}>Booking</NavLink>
            <NavLink to="/Questions" className={({isActive}) => isActive ? "activeStyle" : ""}>Intrebari</NavLink>
            <NavLink to="/Contact" className={({isActive}) => isActive ? "activeStyle" : ""}>Contact</NavLink>
            <NavLink to="/SignIn" className={({isActive}) => isActive ? "activeStyle" : ""}>Sign in</NavLink>
            </nav>
        </header>
    )
}

export default Header;
