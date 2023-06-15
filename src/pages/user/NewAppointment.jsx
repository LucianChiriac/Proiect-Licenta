import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AvailableServices from "../../components/Available Services/AvailableServices";
import DatePicker from "../../components/Date_Picker/DatePicker"
import Payment from '../../components/Payment/Payment';
import BookingReview from '../../components/BookingReview/BookingReview';
import {multiStepContext} from '../../StepperContext';
import "./userPages.css"

const steps = ['Selectati un serviciu', 'Selectati data si ora', 'Confirmare programare', 'Plata'];

export default function HorizontalLinearStepper() {
  //const [activeStep, setActiveStep] = React.useState(0);
  const {activeStep, setActiveStep, serviceData, dateData} = useContext(multiStepContext)
  const getStepContent = (step) =>{
    switch(step){
        case 0:
            return<AvailableServices/>;
        case 1:
            return<DatePicker/>
        case 2:
          return<BookingReview/>
        case 3:
          return<Payment/>
        default:
            return "missing"
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 
  const handleReset = () => {
    //setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper style={{width:"100%"}} activeStep={activeStep} orientation="horizontal">
        {steps
        .map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              {/* {getStepContent(index)} */}
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep !==0 && <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Inapoi
            </Button>}
            <Box sx={{ flex: '1 1 auto' }} />


            { 
            activeStep === 0 &&
            serviceData && 
            <Button onClick={handleNext}>
              Pasul urmator
            </Button>
            }

            { 
            activeStep === 1 && 
            dateData.slot &&
            <Button onClick={handleNext}>
              Pasul urmator
            </Button>
            }

            {
              activeStep === 2 &&
              <Button className="PayButton" onClick={handleNext}>Confirma si plateste
              </Button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}