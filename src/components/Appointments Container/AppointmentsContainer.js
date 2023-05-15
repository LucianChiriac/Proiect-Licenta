import React from 'react';
import "./AppointmentsContainer.css"
import UserAppointment from '../User Appointment Box/UserAppointment';

function AppointmentsContainer(props) {
    const appointmentList = props.appointments.map(appointment =>{
        return (
        <UserAppointment 
        {...appointment}
        />
        )
    })
    return (
        <div className="appointmentsContainer">
            {appointmentList}
        </div>
    )
}

export default AppointmentsContainer;