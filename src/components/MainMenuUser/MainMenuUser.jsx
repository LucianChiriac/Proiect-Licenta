import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MainMenuUser.css"
import { Authenticator, translations } from '@aws-amplify/ui-react';


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
    return(
        <nav className="MainMenuUser">
            <NavLink to="profile" end className={({isActive}) => isActive ? "activeStyle" : ""}>Profil</NavLink>
            <NavLink to="bookings" className={({isActive}) => isActive ? "activeStyle" : ""}>Programarile mele</NavLink>
            <NavLink to="newBooking" className={({isActive}) => isActive ? "activeStyle" : ""}>Programare noua</NavLink>
            <NavLink to="/login" className={({isActive}) => isActive ? "activeStyle" : ""}>
                < Authenticator formFields={formFields} >
                {({ signOut, user }) => (
                    <button onClick={signOut}>Sign out</button>
                    // <NavLink to="/login" onClick={signOut}>Sign out</NavLink>
                )}
                </Authenticator>
            </NavLink>
        </nav>
    )
}

export default MainMenuUser;