import React, { useState } from "react";
import "./AppointmentsContainer.css";
import UserAppointment from "../User Appointment Box/UserAppointment";
import { formatSelectedDate } from "../../functions/dateManipulation";
import compareAsc from "date-fns/compareAsc";

function AppointmentsContainer(props) {
  const [eventTypes, setEventTypes] = React.useState([]);
  console.log("Inside AppointmentsContainer");
  console.log(props);
  React.useEffect(() => {
    fetch("https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/events")
      .then((res) => res.json())
      .then((data) => setEventTypes(data));
  }, []);

  // helper function for comparing dates
  const compareDates = (a, b) => {
    const timeDifferenceA = new Date(a.date).getTime() - new Date().getTime();
    const timeDifferenceB = new Date(b.date).getTime() - new Date().getTime();
    if (timeDifferenceA > 0 && timeDifferenceB > 0) {
      return timeDifferenceA - timeDifferenceB;
    }
    if (timeDifferenceA <= 0 && timeDifferenceB <= 0) {
      return Math.abs(timeDifferenceA) - Math.abs(timeDifferenceB);
    }
    return timeDifferenceA > timeDifferenceB ? -1 : 1;
  };
  //
  const appointmentList = props.appointments
    //.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
    .sort(compareDates)
    .filter((a) => a.status === "confirmed")
    .map((appointment, index) => {
      const appData = {
        date: new Date(appointment.date),
        data: formatSelectedDate(new Date(appointment.date)),
        ora: appointment.time.slice(0, 5),
        status: appointment.status,
        durata: appointment.duration,
        tipSedinta: appointment.name,
        prepaid: appointment.prepaid,
        appointmentId: appointment.appointment_id,
        slots: appointment.slots,
      };

      return <UserAppointment key={index} {...appData} />;
    });
  return <div className="AppointmentsContainer">{appointmentList}</div>;
}

export default AppointmentsContainer;
