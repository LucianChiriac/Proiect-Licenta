import React from 'react'
import { Authenticator, withAuthenticator, translations } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n,Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { config } from 'aws-sdk';
import awsconfig from '../aws-exports';
import UserLayout from '../components/Layouts/UserLayout'


Amplify.configure(awsExports);
I18n.putVocabularies(translations);
I18n.setLanguage('en');

I18n.putVocabularies({
  'en': {
    'Sign In': 'Log in',
    'Create Account': 'Creaza cont',
    'Sign Up': 'Creaza cont',
    'Forgot Password': 'Am uitat parola',
    'Forgot your password?': 'Am uitat parola',
    'Reset Password': 'Reseteaza parola',
    'Submit': 'Submit',
    'Confirm': 'Confirm',
    'Resend Code': 'Retrimite codul',
    'Back to Sign In': 'Inapoi la log in'
  }
});

function Authenticator_(){
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
  return (
    < Authenticator formFields={formFields} >
                {({ signOut, user }) => (
                    <UserLayout/>
                )}
    </Authenticator>
  )    
}


export default Authenticator_

// <main>
//                     <h1>Bine ai revenit, {user.attributes.given_name}</h1>
//                     <div className="App">
//                     <header className="App-header">
//                         <button onClick={signOut}>Sign out</button>
//                         <h2>My App Sucks</h2>
//                     </header>
//                     </div>
//                 </main>