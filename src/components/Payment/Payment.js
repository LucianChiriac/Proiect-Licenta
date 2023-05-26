import React, { useState, useContext, useEffect } from "react"
import { multiStepContext } from "../../StepperContext"
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import "./Payment.css"


function Payment(){

    const { user } = useAuthenticator((context) => [context.user]);
    
    const userData = {
         userId : user.attributes.sub,
         userMail : user.attributes.email,
         userGroup : user.signInUserSession.accessToken.payload["cognito:groups"][0],
    }
    
    console.log(userData)

    const { serviceData, dateData, setDateData } = useContext(multiStepContext)
    const [ errorMessage, setErrorMessage ] = useState(null);
    console.log("The service data is:")
    console.log(serviceData)
    console.log(dateData)
    useEffect(()=>{
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/create-checkout-session/${serviceData.id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "serviceData": serviceData,
                "dateData": dateData,
                "userData": userData,})
        })
        .then(async res => {
            console.log(res)
            if (res.ok) {
                return await res.json();}
            console.log("here")
            return await res.json().then(json => {
                console.log(json)
                Promise.reject(json)
                throw json});
        })
        .catch(err=>{
            console.log("First catch")
            setErrorMessage(err);
            console.log(err);
        })
        .then(({ url }) => {
            window.location = url
          })
        .catch(err => {
            console.log("Final")
            console.error(err);
        })
    },[])
    

    return(
        <div>
           { errorMessage && <div className="newBookingError">{errorMessage.stringify}</div>}
           
        </div>
    )

}

export default Payment;