import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import "./MainMenu.css"
import { Authenticator } from '@aws-amplify/ui-react';
import  Button from "../Buttons/leftMenuButtons"; 
import { FaRegUserCircle } from "react-icons/fa"
import { BsCalendar4Week, BsBoxArrowInLeft } from "react-icons/bs"
import { LuCalendarPlus } from "react-icons/lu"
import { GiBinoculars } from "react-icons/gi"

function MainMenuUser(){
    const formFields = {
        signIn: {
          username: {
            placeholder: "Introduceti adresa dumneavoastra de email:",
            isRequired: true,
            label: 'Email:',
            dialCode: '+40'
          },
          password: {
            placeholder: 'Introduceti parola:',
            isRequired: true,
            label: 'Parola'
          }
        },
        signUp: {
          phone_number: {
            dialCode: '+40',
            placeholder: 'Introduceti numarul dumneavoastra de telefon',
            label: 'Numar de telefon'
          },
          email: {
            placeholder: 'Adresa dumneavoastra de email',
            label: 'Email'
          },
          password: {
            placeholder: 'Introduceti parola',
            label: 'Parola'
          },
          confirm_password: {
            placeholder: 'Reintroduceti parola',
            label: 'Confirmati parola'
          },
          family_name: {
            placeholder: "Numele de familie (ex: Popescu)",
            label: 'Nume de familie'
          },
          given_name: {
            placeholder: 'Prenumele dumneavoastra',
            label: 'Prenume'
          }
        },
      }
      const { user } = useAuthenticator((context) => [context.user]);
      const { route } = useAuthenticator((context) => [context.route]);
    //const {sub : userID, email : userEmail, family_name, given_name, phone_number} = user.attributes;
      const userData = {
          userId : user.attributes.sub,
          userMail : user.attributes.email,
          userGroup : user.signInUserSession.accessToken.payload["cognito:groups"][0],
      }
    return( 
        userData.userGroup === 'registered' ? 
       
        <nav className="MainMenu" id="MainMenuUser">
            <NavLink to="profile" end className={({isActive}) => isActive ? "activeStyle" : ""}>
              <Button icon={FaRegUserCircle} text="Profil"/>
            </NavLink>
            <NavLink to="bookings" className={({isActive}) => isActive ? "activeStyle" : ""}>
              <Button icon={BsCalendar4Week} text="Programarile mele"/>
            </NavLink>
            <NavLink to="newBooking" className={({isActive}) => isActive ? "activeStyle" : ""}>
              <Button icon={LuCalendarPlus} text="Programare noua"/>
              </NavLink>
            <NavLink to="/login" className={({isActive}) => isActive ? "activeStyle" : ""}>
                < Authenticator formFields={formFields} >
                {({ signOut, user }) => (
                    <Button  icon={BsBoxArrowInLeft} text="Sign Out" onClick={signOut}/>
                    // <NavLink to="/login" onClick={signOut}>Sign out</NavLink>
                )}
                </Authenticator>
            </NavLink>
        </nav>
        :
        <nav className="MainMenu" id="MainMenuUser">
            <NavLink to="profile" end className={({isActive}) => isActive ? "activeStyle" : ""}>
              <Button icon={FaRegUserCircle} text="Profil"/>
            </NavLink>
            <NavLink to="pacienti" className={({isActive}) => isActive ? "activeStyle" : ""}>
              <Button icon={GiBinoculars} text="Pacienti"/>
            </NavLink>
            <NavLink to="appointments" className={({isActive}) => isActive ? "activeStyle" : ""}>
              <Button icon={BsCalendar4Week} text="Programari"/>
            </NavLink>
            <NavLink to="/login" className={({isActive}) => isActive ? "activeStyle" : ""}>
                < Authenticator formFields={formFields} >
                {({ signOut, user }) => (
                    <Button  icon={BsBoxArrowInLeft} text="Sign Out" onClick={signOut}/>
                    // <NavLink to="/login" onClick={signOut}>Sign out</NavLink>
                )}
                </Authenticator>
            </NavLink>
        </nav>
    )
}

export default MainMenuUser;