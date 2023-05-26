import React, { useState } from 'react';

export const multiStepContext = React.createContext();

function StepContextProvider({children}) {
    const [activeStep, setActiveStep] = useState(0);
    const [serviceData, setServiceData] = useState(null);
    const [dateData, setDateData] = useState([]);

   
    return(
        <>
            <multiStepContext.Provider value={{activeStep, setActiveStep, serviceData, setServiceData, dateData, setDateData}}>
                {children}
            </multiStepContext.Provider>
        </>
    )
}


export default StepContextProvider;
