import React, { useState, useContext, useEffect } from "react"
import { multiStepContext } from "../../StepperContext"
import { formatSelectedDate } from "../../functions/dateManipulation"
import "./BookingReview.css"


function BookingReview(){

    const { serviceData, dateData, setDateData } = useContext(multiStepContext)
    const [ errorMessage, setErrorMessage ] = useState(null);
    
    console.log(serviceData, dateData)

    // useEffect(()=>{
    //     fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/create-checkout-session/${serviceData.id}`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({"serviceData": serviceData,"dateData": dateData})
    //     })
    //     .then(async res => {
    //         console.log(res)
    //         if (res.ok) {
    //             return await res.json();}
    //         console.log("here")
    //         return await res.json().then(json => {
    //             console.log(json)
    //             Promise.reject(json)
    //             throw json});
    //     })
    //     .catch(err=>{
    //         console.log("First catch")
    //         setErrorMessage(err);
    //         console.log(err);
    //     })
    //     .then(({ url }) => {
    //         window.location = url
    //       })
    //     .catch(err => {
    //         console.log("Final")
    //         console.error(err);
    //     })
    // },[])
    
    return(
        <div className="review_page">
           { errorMessage && <div className="newBookingError">{errorMessage.stringify}</div>}
           <h3 className="summary_title">Rezumatul Programarii</h3>
           <div className="container">
            <form className="Appointment_Summary">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="tipul_programarii">Tipul programarii </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="tipul_programarii" value={serviceData.name} disabled />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="durata_sedintei">Durata sedintei </label>
                    </div>
                    <div className="col-75">
                        <input id="durata_sedintei" type="text" value={`${serviceData.duration} minute`} disabled/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="locatie">Locatie </label>
                    </div>
                    <div className="col-75">
                        <input id="locatie" type="text" value={serviceData.location} disabled />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="data_programarii">Data programarii </label>
                    </div>
                    <div className="col-75">
                        <input id="data_programarii" type="text" value={formatSelectedDate(new Date(dateData.date))} disabled></input>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="interval_orar">Interval orar </label>
                    </div>
                    <div className="col-75">
                        <input id="interval_orar" type="text" value={dateData.slot} disabled></input>
                    </div>
                </div>
                   
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="pret">Pret </label>
                    </div>
                    <div className="col-75">
                        <input id="pret" type="text" value={`${serviceData.price} RON`} disabled></input>
                    </div>
                </div>

            </form>
           </div>
           
        </div>
    )

}

export default BookingReview;