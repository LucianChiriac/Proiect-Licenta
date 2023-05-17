import React,{ useState } from 'react';
import AppointmentsContainer from '../components/Appointments Container/AppointmentsContainer';

const userId = "8ee6c784-fcac-4958-9b90-7c29385807f3"


function UserAppointments(){
    const [appointments, setAppointments] = useState(null);
    React.useEffect(() => {
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments/${userId}`)
            .then(res => res.json())
            .then(data => setAppointments(data.body))
            
    }, [])
    console.log(appointments)

    return(
        <div className="AppointmentsContainer">
            { appointments ? (<AppointmentsContainer appointments={appointments}/>) : <h4>Loading..</h4>}
        </div>
    )
}

export default UserAppointments;