import React, { useState, useContext } from 'react';
import "./AvailableServices.css"
import { Await, defer, useLoaderData } from 'react-router-dom';
import { getAvailableServices } from '../../api/getAvailableServices';
import ServiceBox from "./ServiceBox";
import { multiStepContext } from "../../StepperContext.js"
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import "./ToggleButtons.css"
import { InfinitySpin } from  'react-loader-spinner'

// export async function loader(){
//     const services =  await getAvailableServices();
//     return defer({services : services});
// }


function AvailableServices(){   
    //const services = useLoaderData().services;
    const {serviceData, setServiceData} = useContext(multiStepContext)
    const [dataLoaded, setDataLoaded] = useState(false);
    const [online, setOnline] = useState([]);
    const [onsite, setOnsite] = useState([])

    React.useEffect(() => {
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/events`)
            .then(res => res.json())
            .then(data => {
                 const online_services = data.body
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
                setOnline(online_services);
                const  onsite_services = data.body
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
                setOnsite(onsite_services);
                setDataLoaded(true);
                //setDateDataLoaded(true);
            })
            
    }, [])
    
   
    return (
        <div className="availableServicesContainer">
            
            {dataLoaded ? 
                <ToggleButtonGroup
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
                :
                <div className="loadingScreen">
                        <InfinitySpin 
                            width='200'
                            color="#4fa94d"
                        />
                        <div className="loadingMessage">
                            Pagina se incarca...
                       </div>
                </div> 
            }

            
        </div>
    )
}


export default AvailableServices;