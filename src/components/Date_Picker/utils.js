import React from 'react';
import {eachDayOfInterval, isSameDay, getHours, getMinutes, startOfDay, addMinutes, addHours, addDays, isWeekend} from 'date-fns'


function processIncomingSlots(allSlotArray, eventDuration, bookedSlots, firstDay, lastDay, startDay, endDay) {
    let result  = 
            eachDayOfInterval({start : new Date(firstDay), end : new Date(lastDay)}) // returns array of days between start and end
            .map( day => {
                    let unavailableSlots = new Set([...allSlotArray
                        .filter((slot) => isSameDay(new Date(day), new Date(slot.date)))]
                        .map((slot) => {
                                return(
                                    Number(slot.time.slice(0,2))
                                )
                            })); /// array of hours which are not available in "day"
                    let availableSlots = getDifference(new Set(arrayRange(startDay, endDay-1,1)), unavailableSlots); // available hours

                    /// generate the list of available intervals
                    let availableIntervals = [...availableSlots]
                        .filter((slot) => {
                            let cond = true;
                            for (let i = 1; i < bookedSlots; i++)
                                if(![...availableSlots].includes(slot+i))
                                    cond = false;
                            return cond;
                        }) // list contains hours at which the appointment can start
                        .map((slot) => {
                            let startAppointment = addHours(startOfDay(day), slot);
                            let endAppointment = addMinutes(startAppointment, eventDuration);
                            let displayValue = `${('0'+slot).slice(-2)}:00 - ${('0'+getHours(endAppointment)).slice(-2)}:${getMinutes(endAppointment)}`;
                            
                            return{
                                startAppointment : startAppointment,
                                endAppointment : endAppointment,
                                displayValue : displayValue,
                                selected :false,
                            }
                        })
                    
                        return {
                            day : day, 
                            availableSlots : availableSlots,
                            unavailableSlots : unavailableSlots,
                            availableIntervals : availableIntervals
                    }});
                
return result;
}


const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
            );
function getDifference(setA, setB) {
    return new Set(
        [...setA].filter(element => !setB.has(element))
    );
    }
function isWeekday (date) {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
    };

function getFirstAvailableDate (data) { /// TO DO
    try {
            let firstAvailableDays = data.filter((obj) => obj.availableIntervals.length > 0).filter(obj => !isWeekend(obj.day));
            if (firstAvailableDays.length === 0) {
                return null;
            }
            return new Date(firstAvailableDays[0].day);
            //return new Date()
        } catch (error) { 
            return addDays(new Date(),1);
        }
}

function getUnavailableDates (data) { /// TO DO
    try {
            let unavailable = data.filter((obj) => obj.availableIntervals.length === 0).map((obj) => obj.day);
            return unavailable;
        } catch (error) { 
            return null;
        }
}
    
export {processIncomingSlots, isWeekday, getFirstAvailableDate, getUnavailableDates}