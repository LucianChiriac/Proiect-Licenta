import { format, addHours, differenceInHours } from 'date-fns';
import { ro } from 'date-fns/locale';




function formatSelectedDate(date){
    if (date){
        return (format(date,"EEEE, d MMMM yyyy",{locale : ro}))
    } else {
        return ""
    }
}

function getMonthText(date){
    return (format(date,"MMMM",{locale : ro}))
}

function hoursTillAppointment(appointmentDate, appointmentHour){
    const augmentedDate = new Date(addHours(appointmentDate,Number(appointmentHour.slice(0,2))))
    return differenceInHours(augmentedDate, new Date());
}

export {
    formatSelectedDate,
    getMonthText,
    hoursTillAppointment,
}