import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {minDate, maxDate} from "../../globalValues.js"
import "./DatePicker.css"
import {addDays} from 'date-fns';
import { isWeekday} from "./utils.js"
import locale from "./DateLocale.js"
import useSlotPicker from "../../hooks/useSlotPicker.js";

function MyDatePicker(props) {
  
    const {
      currentMonth,
      excludeDates,
      intervalButtons,
      selectedDate,
      selectedSlot,
      formatSelectedDate,
      handleMonthNavigation,
      handleDateChange,
      getMonthText,
    } = useSlotPicker(props)

    const handleSubmit = (event) => {        
      event.preventDefault()        

      // log form content        
      console.log(selectedDate)        
      console.log(selectedSlot)   
  }  

    return (
      <>
      <form onSubmit={handleSubmit}>
          <div className="date-slot-picker">
            <DatePicker
              selected={selectedDate}
              // onChange={(date) => {generateDaySlots(date)}}
              onChange={(date) => handleDateChange(date)}
              inline
              locale={locale}
              minDate={addDays(new Date(),minDate)}
              maxDate={addDays(new Date(), maxDate)}
              openToDate={selectedDate}
              calendarStartDay={1} // week starts on Monday
              dateFormat="yyyy-MM-dd"
              filterDate={isWeekday}
              excludeDates={excludeDates} /// insert here the array of booked / unavailable days
              disabledKeyboardNavigation
              onMonthChange={(date)=>{ handleMonthNavigation(date); }} 
            />
            <div className="Slot-picker-container">
              { !selectedDate && <div className = "fullMonthMessage">
                Din pacate luna {getMonthText(new Date(currentMonth.firstDay))} este complet rezervata!
              </div>}
              <div className = "sectionTitle">
                {selectedDate && "Data Selectata: "}
              </div>
              <div className = "sectionValue">{formatSelectedDate(selectedDate)}</div>
              <div className="sectionTitle">
              {selectedDate && "Selectati un interval orar "}
              </div>
              <div className="slotOptions">
                {intervalButtons} 
              </div>
              <div>
                {selectedSlot}
              </div>
            </div>
          </div>
          {selectedDate && selectedSlot && <button type="submit"className="submitBtn"> Mai departe</button>  }  
        </form>
      </>
        
        
      );
    };
  export default MyDatePicker;