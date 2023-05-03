import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { config } from 'aws-sdk';

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



function App() {

  return (
    < Authenticator formFields={formFields} >
      {({ signOut, user }) => (
        <main>
          <h1>{user.attributes.given_name}</h1>
          <div className="App">
            <header className="App-header">
              <button onClick={signOut}>Sign out</button>
              <h2>My App Sucks</h2>
            </header>
          </div>
        </main>
      )}
    </Authenticator>

  );
}

export default App;

