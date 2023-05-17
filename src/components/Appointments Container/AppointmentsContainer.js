import React, { useState } from 'react';
import "./AppointmentsContainer.css"
import UserAppointment from '../User Appointment Box/UserAppointment';
import { formatSelectedDate } from '../../functions/dateManipulation';
import compareAsc from 'date-fns/compareAsc'

function AppointmentsContainer(props) {
    const [eventTypes, setEventTypes] = React.useState([]);
    React.useEffect(() => {
        fetch("https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/events")
        .then(res => res.json())
        .then(data => setEventTypes(data))
    }, [])


    const appointmentList = props.appointments
        .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
        .map((appointment, index) =>{
            const appData = {
                date : new Date(appointment.date),
                data : formatSelectedDate(new Date(appointment.date)),
                ora : appointment.time.slice(0,5),
                status : appointment.status,
                durata : appointment.duration,
                tipSedinta : appointment.name,
                prepaid : appointment.prepaid,
            }

            return (
            <UserAppointment
            key={index} 
            {...appData}
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