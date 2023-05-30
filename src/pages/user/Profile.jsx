import React from 'react';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';


function UserProfile(){
    const { route } = useAuthenticator((context) => [context.route]);
    //const message = route === 'authenticated' ? 'Profile is protected' : "Loading...";
    return(
        <div className='profilePageContainer'>
            <h1>This is the user's profile</h1>
        </div>
    )
}

export default UserProfile;