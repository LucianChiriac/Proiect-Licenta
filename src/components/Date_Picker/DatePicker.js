import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { minDate, maxDate } from "../../globalValues.js";
import "./DatePicker.css";
import { addDays } from "date-fns";
import { isWeekday } from "./utils.js";
import locale from "./DateLocale.js";
import useSlotPicker from "../../hooks/useSlotPicker.js";
import { useLoaderData } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { multiStepContext } from "../../StepperContext";
//

function MyDatePicker(props) {
  const { serviceData, dateData, setDateData } = useContext(multiStepContext);
  console.log("MyDatePicker : Service data");
  console.log(serviceData);
  const {
    currentMonth,
    excludeDates,
    intervalButtons,
    selectedDate,
    selectedSlot,
    dataLoaded,
    error,
    //loading,
    formatSelectedDate,
    handleMonthNavigation,
    handleDateChange,
    getMonthText,
  } = useSlotPicker({
    eventDuration: serviceData.duration,
    bookedSlots: serviceData.booked_slots,
  });

  useEffect(
    function () {
      console.log("I changed the date information to:");
      console.log(selectedDate, selectedSlot);
      setDateData((prev) => {
        return { ...prev, date: selectedDate?.toString(), slot: selectedSlot };
      });
    },
    [selectedSlot]
  );

  // if (loading){
  //   return <h1>Loading...</h1>
  // }
  if (error) {
    return <h3>There was an error: {error.message}</h3>;
  }

  return (
    <>
      {dataLoaded ? (
        <div className="date-slot-picker">
          <div className="calendar-col">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                handleDateChange(date);
              }}
              inline
              locale={locale}
              minDate={addDays(new Date(), minDate)}
              maxDate={addDays(new Date(), maxDate)}
              openToDate={selectedDate}
              calendarStartDay={1} // week starts on Monday
              dateFormat="yyyy-MM-dd"
              filterDate={isWeekday}
              excludeDates={excludeDates} /// insert here the array of booked / unavailable days
              disabledKeyboardNavigation
              onMonthChange={(date) => {
                handleMonthNavigation(date);
              }}
            />
          </div>
          <div className="Slot-picker-container">
            {!selectedDate && (
              <div className="fullMonthMessage">
                Din pacate luna {getMonthText(new Date(currentMonth.firstDay))}{" "}
                este complet rezervata!
              </div>
            )}
            <div className="sectionTitle">
              {selectedDate && "Data Selectata: "}
            </div>
            <div className="sectionValue">
              {formatSelectedDate(selectedDate)}
            </div>
            <div className="sectionTitle">
              {selectedDate && "Selectati un interval orar "}
            </div>
            <div className="slotOptions">{intervalButtons}</div>
          </div>
        </div>
      ) : (
        <div className="loadingScreen">
          <InfinitySpin width="200" color="#4fa94d" />
          <div className="loadingMessage">Pagina se incarca...</div>
        </div>
      )}
    </>
  );
}
export default MyDatePicker;
