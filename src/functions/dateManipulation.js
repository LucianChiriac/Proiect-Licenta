import { format, addHours, differenceInHours, addMinutes} from 'date-fns';
import { ro } from 'date-fns/locale';




function formatSelectedDate(date){
    if (date){
        return (format(date,"EEEE, d MMMM yyyy",{locale : ro}))
    } else {
        return ""
    }
}

function getJustTime(date){
    const offset = date.getTimezoneOffset();

    return(format(addMinutes(date,offset),"HH:mm",{locale : ro}))
}

function getMonthText(date){
    return (format(date,"MMMM",{locale : ro}))
}

function hoursTillAppointment(appointmentDate, appointmentHour){
    const augmentedDate = new Date(addHours(appointmentDate,Number(appointmentHour.slice(0,2))))
    return differenceInHours(augmentedDate, new Date());
}

function datePlusTime(apDate, apTime, booked_slots=0){
    let augmentedDate;
    augmentedDate = addHours(new Date(apDate),Number(apTime.slice(0,2)));
    if (booked_slots !==0){
        augmentedDate = addHours(augmentedDate,Number(booked_slots))
    }
    return augmentedDate;
}

export {
    formatSelectedDate,
    getMonthText,
    hoursTillAppointment,
    datePlusTime,
    getJustTime,
}