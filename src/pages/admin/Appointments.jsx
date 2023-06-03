import React,{ useState, useContext, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import momentPlugin from '@fullcalendar/moment'
import interactionPlugin from '@fullcalendar/interaction';
import roLocale from '@fullcalendar/core/locales/ro';
import "./adminPages.css"
import {slotMinTime, slotMaxTime} from "../../globalValues"
import { getJustTime } from "../../functions/dateManipulation"

import { MdVideoCameraFront } from 'react-icons/md'
//
import  PopupCalendarEvent from '../../components/Popups/PopupsCalendarEvent'
import {multiStepContext} from '../../CalendarContext';
import getAppointmentsBetween from '../../api/getAppointmentsBetween'



const renderEventContent = (eventInfo) => {
    const viewType = eventInfo.view.type;
    const props = eventInfo.event.extendedProps;
   
        return (
            <div className="eventFrame">
                <div className='eventFrameTitle'>{props.location === 'online' && <MdVideoCameraFront className="videoIcon"/>} {eventInfo.event.title}</div>
                {
                
                }
                <div className="eventInterval">{`${getJustTime(eventInfo.event._instance.range.start)}-${getJustTime(props.realEnd)}`}</div>
            </div>
            
        )    
};



function Appointments(){
    
    const [events, setEvents] = useState(null);
    const {openPopup, setOpenPopup, popupData, setPopupData} = useContext(multiStepContext)

    useEffect(()=>{
        const leftNav = document.getElementById("MainMenuUser");
        const outlet = document.getElementById("outletWrapper");
        if (openPopup) {
        leftNav.style.filter = "blur(3px)";
        outlet.style.filter = "blur(3px)";
        } else {
        leftNav.style.filter = "none";
        outlet.style.filter = "none";
        }
    },[openPopup])
    
    async function handleDateChange(event) {
        const data = await getAppointmentsBetween(event)
        setEvents(data);
    }
    function eventClick(info){
        console.log("You just clicked on the event")
        console.log(info);
        setPopupData(info);
        setOpenPopup(true);
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
          contentHeight={"auto"}
          datesSet = {(dateInfo)=>{handleDateChange(dateInfo)}}
          events = {events}
          //eventContent = {renderEventContent}
          editable = {false}
          eventStartEditable = {false} // set True to make evnet dragable
          eventClick = {eventClick}
        />
        {openPopup && <PopupCalendarEvent info={popupData}  />}
        </>
      )
}

export default Appointments;