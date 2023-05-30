import React, { useState, useContext } from 'react';
import "./AvailableServices.css"
import { Await, defer, useLoaderData } from 'react-router-dom';
import { getAvailableServices } from '../../api/getAvailableServices';
import ServiceBox from "./ServiceBox";
import { multiStepContext } from "../../StepperContext.js"
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import "./ToggleButtons.css"

export async function loader(){
    const services =  await getAvailableServices();
    return defer({services : services});
}


function AvailableServices(){   
    const services = useLoaderData().services;
    const {serviceData, setServiceData} = useContext(multiStepContext)
    console.log("Service data is")
    console.log(serviceData)
    
    const online = services
            .filter(service => service.location ==='online')
            .map( service =>{
                return(
                    <ToggleButton
                        className="ServiceChoice"
                        key={service.id}
                        color="success"
                        value={service}>
                        <ServiceBox
                        key={service.id}
                        name={service.name}
                        duration={service.duration}
                        price={service.price}
                        booked_slots={service.booked_slots}/>
                    </ToggleButton>
                )
            })
    const onsite = services
            .filter(service => service.location === 'cabinet')
            .map( service =>{
                return(
                    <ToggleButton
                        className="ServiceChoice"
                        key={service.id}
                        color="success"
                        value={service}
                        >
                            <ServiceBox
                            key={service.id}
                            name={service.name}
                            duration={service.duration}
                            price={service.price}/>
                    </ToggleButton>
                )
            })
    return (
        <div className="availableServicesContainer">
            
            <ToggleButtonGroup
                className="toggleButtonGroup"
                orientation="vertical"
                value={serviceData}
                onChange={(event, newService) =>{
                    console.log("I changed the selected service to:")
                    console.log(newService)
                    setServiceData(newService)
                }}
                exclusive
                color="primary">
                    <h3 className="category">Servicii online: </h3>
                    {online}
                    <h3 className="category"> Servicii la cabinet: </h3>
                    {onsite}
                    
            </ToggleButtonGroup>
        </div>
    )
}


export default AvailableServices;