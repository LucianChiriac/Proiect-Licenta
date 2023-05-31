import React, { useState } from 'react';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react'; 
import AppointmentsContainer from '../../components/Appointments Container/AppointmentsContainer';
import  getUserAppointments  from '../../api/getUserAppointments';
import { useLoaderData } from 'react-router-dom';


function UserBookingsPage(){

    const userId = useAuthenticator().user.attributes.sub;
    const [error, setError] = React.useState(null);
    const [dataLoaded, setDateDataLoaded] = React.useState(false);

    const { route } = useAuthenticator((context) => [context.route]);
    const [appointments, setAppointments] = useState(getUserAppointments(userId));
    React.useEffect(() => {
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments/${userId}`)
            .then(res => res.json())
            .then(data => {
                setAppointments(data.body);
                setDateDataLoaded(true);
            })
            
    }, [])
    console.log(appointments)

    //const message = route === 'authenticated' ? 'User bookings page is protected' : 'Loading...';
    if (error){
        return <h1>There was an error: {error.message}</h1>
    }
    return(
        <>
            {
                dataLoaded ? 
                (
                    appointments.filter(a => a.prepaid === 1).length > 0 ?  
                    <div className=" AppointmentsPage">
                        <div className="userPageTitle">
                            Programarile dumneavoastra
                        </div>
                        <AppointmentsContainer appointments={appointments}/>
                    </div> : 
                    <div className="userPageTitle">Nu aveti nici o programare facuta!</div>
                ) 
                    :
                (<div className="userPageTitle">
                    Pagina se incarca...
                </div> )

                
            }
            
        </>

        
    )
}

export default UserBookingsPage;


