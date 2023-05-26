import React from 'react';
import  { useAuthenticator, Heading} from '@aws-amplify/ui-react';


function NewUserBookingPage(){

    const { route } = useAuthenticator((context) => [context.route]);
    const message = route === 'authenticated' ? 'Make new booking is protected' : 'Loading...';

    return(
        <>
            <Heading level={1}>{message}</Heading>
            <h1>Here the user makes a new booking</h1>
        </>
    )
}

export default NewUserBookingPage;