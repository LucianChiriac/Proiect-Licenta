import React,{ useState, useContext, useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import momentPlugin from '@fullcalendar/moment'
import interactionPlugin from '@fullcalendar/interaction';
import roLocale from '@fullcalendar/core/locales/ro';
import { Calendar } from '@fullcalendar/core';

import "./adminPages.css"
import {slotMinTime, slotMaxTime} from "../../globalValues"
import { getJustTime } from "../../functions/dateManipulation"
import { differenceInHours, addHours, startOfDay, compareAsc } from "date-fns";

//
import  PopupCalendarEvent from '../../components/Popups/PopupsCalendarEvent'
import  PopupAddCalendarEvent from '../../components/Popups/PopupAddCalendarEvent'
import {multiStepContext} from '../../CalendarContext';
import {getAppointmentsBetween,getAppointmentsBetweenTwo} from '../../api/getAppointmentsBetween'
import { renderEventContent, selectBehaviour, dateClickBehaviour } from '../../functions/adminCalendar'







function Appointments(){
    
    const [events, setEvents] = useState(null);
    const {openPopup, setOpenPopup, popupData, setPopupData, allServices, refetchData, setRefetchData} = useContext(multiStepContext)
    const eventsRef = useRef(events);
    const calendarRef = useRef(null);

    useEffect(()=>{
        const leftNav = document.getElementById("MainMenuUser");
        const outlet = document.getElementById("outletWrapper");
        if (openPopup > 0) {
        leftNav.style.filter = "blur(3px)";
        outlet.style.filter = "blur(3px)";
        } else {
        leftNav.style.filter = "none";
        outlet.style.filter = "none";
        }
    },[openPopup])
    
    useEffect(() => {
        // Update the eventsRef whenever the events state changes
        eventsRef.current = events;
      }, [events])
    async function handleDateChange(event) {
        //const data = await getAppointmentsBetween(event)
        //console.log(data)
        //setEvents(data);
        console.log("Changing date")
        setRefetchData(true);
    }
    function eventClick(info){
        console.log("You just clicked on the event"); console.log(info);
        setRefetchData(false);
        setPopupData(info);
        setOpenPopup(1);
    }
    
    function selectBehaviour(selectInfo, allServices, eventsRef) {
        console.log("selectBehaviour");console.log(selectInfo);console.log(allServices);console.log(eventsRef);
        function isInArray(array, value) {
          return !!array.find((item) => {
            return compareAsc(item, value) === 0;
          });
        }
        // Step 1 : detect how many slots have been selected;
        const numberOfSlots = differenceInHours(selectInfo.end, selectInfo.start);
    
        if (numberOfSlots === 1) {
          // just one slot selected, which means the user wants to add an event;
          // Step 1: check how many of the adjacent slots are available
          // 1.a) Construct the last slot of the day
          const firstSlot = selectInfo.start;
          const lastSlotOfDay = addHours(
            startOfDay(selectInfo.start),
            Number(slotMaxTime.slice(0, 2))
          );
          let currentSlot = addHours(firstSlot, 1); // start checking with the next slot
          let slots = [firstSlot];
          let slotCount = 1;
          // 1.b) Build the array with the start date&time from the events to see which (start) slots are occupied
          const alreadyBooked = eventsRef.map((ev) => ev.start);
          // console.log(alreadyBooked); console.log(currentSlot);
          // 1.c) build a while loop, that goes on until the lastSlotOfDay or until it finds the first occupied slot
    
          while (compareAsc(currentSlot, lastSlotOfDay) === -1) {
            // compareAsc returns -1 if date1<date2, 0 if equal, 1 if date1>date2
            // check if the slot is already booked
            if (isInArray(alreadyBooked, currentSlot)) {
              break;
            }
            slots.push(currentSlot);
            currentSlot = addHours(currentSlot, 1);
            slotCount += 1;
          }
          console.log(`Availble slots: ${slotCount}`);
          // console.log(slots);
          // 1.d) obtain only the services that can be fitted into those slots
          const bookableServices = allServices.filter(
            (ev) => ev.booked_slots <= slotCount
          );
          // console.log("Only the following services can be booked"); console.log(bookableServices);
    
          // Now create a popup where the admin can chose which of these services it wants
          // as well as input customer Data
          setPopupData({
            bookableServices : bookableServices,
            availableSlots : slots,
            startDate : firstSlot,
          })
          setOpenPopup(2);
          return true;
        } else {
          console.log(`I selected ${numberOfSlots} slots`);
          //behaviour
          return true;
        }
      }
    
      function dateClickBehaviour(selectInfo, allServices, eventsRef) {
        console.log("Inside dateClickBehaviour");
        console.log(selectInfo);
        if (selectInfo.allDay) {
          // case where the entire day has been selected; usefull for blocking intervals in a day
        } else {
          // only one slot selected, pass to selectBehaviour function
          if (compareAsc(selectInfo.date, new Date()) > 0)
            selectBehaviour(
              {
                start: selectInfo.date,
                end: addHours(selectInfo.date, 1),
              },
              allServices,
              eventsRef
            );
        }
        return true;
      }
    return (
        <>
        
        <FullCalendar
          plugins={[ momentPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView = 'timeGridWeek'
          headerToolbar = {{
            left: 'prev,next',
            center: 'title',
            right: 'timeGridWeek, timeGridDay, dayGridMonth'
          }}
          views = {{
            timeGridWeek: {
                eventContent : renderEventContent
            },
            day: {
                eventContent : renderEventContent
            }
          }}
         
          locale = {roLocale}
          slotMinTime = {slotMinTime}
          slotMaxTime = {slotMaxTime}
          slotDuration = '01:00:00'
          contentHeight={"auto"}
          //datesSet = {(dateInfo)=>{handleDateChange(dateInfo)}}
          //events = {events}
          datesSet = {(dateInfo)=> {handleDateChange(dateInfo)}}
          events = {(info,successCallback, failureCallback)=> {
            if (refetchData === false) {
              console.log("False, not refetching; I am using:")
              console.log(eventsRef.current)
              if(eventsRef.current === null) return [];
              return successCallback(eventsRef.current);
            } else{
              console.log("I am refetching")
              console.log(refetchData);getAppointmentsBetween(info, successCallback, failureCallback, refetchData).then((res)=>{eventsRef.current = res; setRefetchData(false)})
            }
          }}
          //eventContent = {renderEventContent}
          editable = {false}
          eventStartEditable = {false} // set True to make event dragable
          eventClick = {eventClick}
          selectable = {true}
        //   selectAllow = {selectAllow}
          selectOverlap = {false}
          select = {(selectInfo)=>{selectBehaviour(selectInfo, allServices, eventsRef.current)}}
          selectMinDistance = {30}
          dateClick = {(selectInfo)=>{dateClickBehaviour(selectInfo, allServices, eventsRef.current)}}
          ref={calendarRef}
        />
        {openPopup === 1 && <PopupCalendarEvent info={popupData}  />}
        {openPopup === 2 && <PopupAddCalendarEvent info={popupData}  />}
        </>
      )
}

export default Appointments;