import {useState, useEffect} from "react"
import {getMonth, format, addDays, lastDayOfMonth, isSameDay} from 'date-fns';
import { ro } from 'date-fns/locale';
import {minDate, maxDate, dayStart, dayEnd} from "../globalValues.js"
import { processIncomingSlots, isWeekday , getFirstAvailableDate, getUnavailableDates} from "../components/Date_Picker/utils.js"
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import "./ToggleButtons.css"
import { getSlotData } from "../api/getSlotData.js"

function useSlotPicker(props){

    console.log(`Props inside useSlotPicker `)
    console.log(props)
    const eventDuration = props.eventDuration; // number of minutes event takes
    const bookedSlots = props.bookedSlots; // slots booked in calendar
    const [currentMonth, setCurrentMonth] = useState({
        firstDay : format(addDays(new Date(),minDate), 'yyyy-MM-dd'),
        lastDay : format(lastDayOfMonth(new Date()), "yyyy-MM-dd"),
      });

    const [monthInformation, setMonthInformation] = useState([])
    const [excludeDates, setExcludeDates] = useState([])
    const [firstAvailableDate, setFirstAvailableDate] = useState(null)
    const [intervalButtons, setIntervalButtons] = useState(); ///
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [error, setError] = useState(null);
    //const [loading, setLoading] = useState(true);
    
    useEffect(function() {
      try {
        getSlotData(currentMonth.firstDay, currentMonth.lastDay)
            .catch(err => {
              setError(err);
              console.log(err);})
            .then(data => {
              const allSlots = [...data];
              let result = processIncomingSlots(allSlots, eventDuration, bookedSlots, currentMonth.firstDay, currentMonth.lastDay, dayStart, dayEnd);
              let excludeDates = getUnavailableDates(result);
              let firstAvailableDay = getFirstAvailableDate(result);
              let resultWBtn = result.map( (obj) => {
              let buttons = obj.availableIntervals.map((interval, index) => (
                <ToggleButton
                    className = "slotButton" 
                    value={interval.displayValue} 
                    key={index}
                    color="success">
                    {interval.displayValue}
                </ToggleButton>
                ))
            
            return ({...obj, buttons : [...buttons]});
              }) 
              setMonthInformation(resultWBtn);
              setExcludeDates(excludeDates);
              setFirstAvailableDate(firstAvailableDay);
              setSelectedDate(firstAvailableDay);
            });
      
      } catch (error) {
        console.log("Error is");
        console.log(error);
      }
    }, [currentMonth.firstDay]);

    useEffect(() => {
        try{
          let todaySlots;
          setSelectedSlot(null)
          if (selectedDate){
            todaySlots = monthInformation.filter((slot) => isSameDay(slot.day, selectedDate))[0].buttons
          } else {
            todaySlots = null;
          }
          
          let todaySlotsContainer = 
          <ToggleButtonGroup
            className = "toggleButtonGroup"
            orientation="vertical"
            value={selectedSlot}
            onChange={(event, newSlot) => {
            setSelectedSlot(newSlot);
            }}
            exclusive
            color="primary"
            >
                {todaySlots}
          </ToggleButtonGroup>
          setIntervalButtons(todaySlotsContainer);
        } catch(err){
            console.log("Error generating slot buttons")
        }
    }, [selectedDate])

    useEffect(()=> {
        try {
            let todaySlots = monthInformation.filter((slot) => isSameDay(slot.day, selectedDate))[0].buttons
          let todaySlotsContainer = 
          <ToggleButtonGroup
          orientation="vertical"
            value={selectedSlot}
            onChange={(event, newSlot) => {
            setSelectedSlot(newSlot);
            }}
            exclusive
            color="primary"
            >
                {todaySlots}
          </ToggleButtonGroup>
          setIntervalButtons(todaySlotsContainer);
        } catch (error) {
            console.log("Eroare la schimbarea slot-ului")
        }
    },[selectedSlot])

    function handleMonthNavigation(date){
        setCurrentMonth({
          firstDay : getMonth(new Date()) === getMonth(date) ?  format(new Date(), 'yyyy-MM-dd') : format(new Date(date), 'yyyy-MM-01'),
          lastDay : format(lastDayOfMonth(new Date(date)), "yyyy-MM-dd")
        });
        setSelectedDate(new Date(getMonth(new Date()) === getMonth(date) ?  format(new Date(), 'yyyy-MM-dd') : format(new Date(date), 'yyyy-MM-01')));
    }
    
    function handleDateChange(date){
        setSelectedDate(new Date(date));
    }

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

    return {currentMonth,
        monthInformation,
        excludeDates,
        firstAvailableDate,
        intervalButtons,
        selectedDate,
        selectedSlot,
        error,
        //loading,
        formatSelectedDate,
        handleMonthNavigation,
        handleDateChange,
        getMonthText}
}

export default useSlotPicker;