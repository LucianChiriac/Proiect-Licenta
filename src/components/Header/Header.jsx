import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import "./Header.css"

/*
const { user } = useAuthenticator((context) => [context.user]);
const userGroup = user.signInUserSession.accessToken.payload["cognito:groups"][0];
 */

function Header(){

    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const { user } = useAuthenticator((context) => [context.user]);
    const userGroup = user?.signInUserSession?.accessToken.payload["cognito:groups"][0];
    const navigate = useNavigate();

    function logOut(){
        signOut();
        navigate('/login', {replace : true})
    }

    return(
        <header className="mainHeader">
            <nav className="mainNav">
                {/* <Button onClick={() => navigate('/')}>Home</Button> */}
                <NavLink to="/Home" 
                className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}
                >Home</NavLink>
                <NavLink to="/About" className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Despre</NavLink>
                <NavLink to="/Services" className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Servicii</NavLink>
                {/* <NavLink to="/Booking" className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Booking</NavLink> */}
                <NavLink to="/Questions" className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Intrebari</NavLink>
                <NavLink to="/Contact" className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Contact</NavLink>
                {route !== 'authenticated' ? (
                    <NavLink to="/login" className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Sign in</NavLink>
                ) : (
                    <NavLink to={userGroup==="registered" ? "/user" : "/admin"} className={({isActive}) => isActive ? "headerLink activeStyleHeader" : "headerLink"}>Profil</NavLink>
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
