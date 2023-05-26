import React, { useState } from 'react';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react'; 
import AppointmentsContainer from '../../components/Appointments Container/AppointmentsContainer';
import  getUserAppointments  from '../../api/getUserAppointments';
import { useLoaderData } from 'react-router-dom';
//const userId = "8ee6c784-fcac-4958-9b90-7c29385807f3"

// export function Loader(){
//     const userId = useAuthenticator().user.attributes.sub;
//     return getUserAppointments(userId);
// }

function UserBookingsPage(){

    // const userData = useAuthenticator();
    // console.log(userData.user.attributes.sub);
    const userId = useAuthenticator().user.attributes.sub;
    const [error, setError] = React.useState(null);
    const appointments = getUserAppointments(userId);
    // const { route } = useAuthenticator((context) => [context.route]);
    // const [appointments, setAppointments] = useState(null);
    // React.useEffect(() => {
    //     fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments/${userId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAppointments(data.body)})
            
    // }, [])
    // console.log(appointments)

    //const message = route === 'authenticated' ? 'User bookings page is protected' : 'Loading...';
    if (error){
        return <h1>There was an error: {error.message}</h1>
    }
    return(
        <>
            {
                appointments.length > 0 ?  
                <div className="AppointmentsContainer">
                { appointments }
                </div> : 
                <h1>It seems that you don't have any appointments yet</h1>
            }
        </>

        
    )
}

export default UserBookingsPage;


