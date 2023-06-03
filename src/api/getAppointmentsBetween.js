import { datePlusTime, getJustTime } from "../functions/dateManipulation"
import {addMinutes, addHours} from 'date-fns'


async function getAppointmentsBetween(prop){
    try {
        const responseAppointments = await fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments/${prop.startStr}/${prop.endStr}`);
        const resAppointments = await responseAppointments.json();
    
        // mapping the appointments into format required by FullCalendar
        const appointments = resAppointments.body.map((appointment) => {
          const start = datePlusTime(appointment.date.slice(0, -1), appointment.time);
          const end = datePlusTime(appointment.date.slice(0, -1), appointment.time, appointment.booked_slots);
          const realEnd = addHours(addMinutes(start, appointment.duration),3); /// weird stuff going on with the date, so I added +3 hours
          return {
            title: `${appointment.given_name} ${appointment.family_name}`,
            start: start,
            end: end,
            realEnd: realEnd,
            location: appointment.location,
            allProps : appointment
          };
        });
        return appointments;
      } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return an empty array in case of error
      }
}

export default getAppointmentsBetween