import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import "./Header.css"

function Header(){

    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    
    const navigate = useNavigate();

    function logOut(){
        signOut();
        navigate('/login', {replace : true})
    }

    return(
        <header>
            <nav className="mainNav">
                {/* <Button onClick={() => navigate('/')}>Home</Button> */}
                <NavLink to="/Home" 
                className={({isActive}) => isActive ? "activeStyle" : ""}
                >Home</NavLink>
                <NavLink to="/About" className={({isActive}) => isActive ? "activeStyle" : ""}>Despre</NavLink>
                <NavLink to="/Services" className={({isActive}) => isActive ? "activeStyle" : ""}>Servicii</NavLink>
                <NavLink to="/Booking" className={({isActive}) => isActive ? "activeStyle" : ""}>Booking</NavLink>
                <NavLink to="/Questions" className={({isActive}) => isActive ? "activeStyle" : ""}>Intrebari</NavLink>
                <NavLink to="/Contact" className={({isActive}) => isActive ? "activeStyle" : ""}>Contact</NavLink>
                {route !== 'authenticated' ? (
                    <NavLink to="/login" className={({isActive}) => isActive ? "activeStyle" : ""}>Sign in</NavLink>
                ) : (
                    <NavLink to="/user" className={({isActive}) => isActive ? "activeStyle" : ""}>Profil</NavLink>
                    // <Button onClick={() => logOut()}>Logout</Button>
                )}
            </nav>
            {/* <Heading level={1}>Example auth routes App</Heading>
            <View>
                { route === 'authenticated' ? 'You are logged in' : 'Please log in'}
            </View> */}
        </header>
    )
}

export default Header;
