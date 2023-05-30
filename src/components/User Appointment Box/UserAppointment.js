import React, { useContext, useState, useEffect } from 'react';
import './UserAppointment.css'
import { maxTimeReschedule } from '../../globalValues';
import { hoursTillAppointment } from '../../functions/dateManipulation';
import Popup from 'reactjs-popup';
import Datepicker from "../Date_Picker/DatePicker"
import StepContextProvider, {multiStepContext} from '../../StepperContext';

function UserAppointment(props){


    const {serviceData, setServiceData, dateData} = useContext(multiStepContext)
    const [ response, setResponse ]= useState(null)
    const [confirmButton, setConfirmButton] = useState(true)
    const [reloadPage, setReloadPage] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    //const [ updatingAppointment, setUpdatingAppointment ] = useState(null)
    const timeLeft = hoursTillAppointment(new Date(props.date), props.ora);
    let status = props.status;
    props.status !== 'cancelled'  && timeLeft < 0 ? status = 'passed' : status = "pending";
    
    useEffect(() => {
        const leftNav = document.getElementById('MainMenuUser');
        const outlet = document.getElementById('outletWrapper');
        if (modalOpen) {
            leftNav.style.filter = 'blur(3px)';
            outlet.style.filter = 'blur(3px)';
          } else {
            leftNav.style.filter = 'none';
            outlet.style.filter = 'none';
          }
      }, [modalOpen]);


    function setState(datepicker = true){
        setModalOpen(true);
        setReloadPage(false);
        setConfirmButton(true);
        setServiceData({
            ...props,
            duration : props.durata,
            booked_slots : JSON.parse(props.slots).length
        })
        if (datepicker) 
            setResponse(<Datepicker/>)
        else
            setResponse(<div>
                In cazul anularii programarilor, sumele achitate <b>nu</b> vor fi restituite! Puteti reprograma sedinta, dar nu mai tarziu de 7 zile de la data programata. Daca doriti sa continuati cu anularea sedintei, apasati pe butonul "Confirma"!"
            </div>)
    }

    function sendUpdateRequest(){
        setResponse("Loading...")
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "serviceData": serviceData,
                "newDateData": dateData,
                })
        })
        .then(async res => {
            console.log(res)
            if (res.ok) {
                setResponse("Sedinta a fost reprogramata cu success!")
                setReloadPage(true)
                setConfirmButton(false);
                return await res.json();
            }
            setResponse("Reprogramarea a esuat! Incercati din nou sau contactati administratorul")
            setReloadPage(true)
            setConfirmButton(false);
            return await res.json().then(json => {
                console.log(json)
                Promise.reject(json)
                throw json});
        })
        .catch(err=>{
            console.log("First catch")
            setResponse(err);
            setConfirmButton(false);
            console.log(err);
        })
        .catch(err => {
            console.log("Final")
            console.error(err);
        })
    }
    

    function sendDeleteRequest(){
        setResponse("Loading...")
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "serviceData": serviceData,
                })
        })
        .then(async res => {
            console.log(res)
            if (res.ok) {
                setResponse("Sedinta a fost anulata cu success!")
                setReloadPage(true)
                setConfirmButton(false);
                return await res.json();
            }
            setResponse("Anularea sedintei a esuat! Incercati din nou sau contactati administratorul")
            setReloadPage(true)
            setConfirmButton(false);
            return await res.json().then(json => {
                console.log(json)
                Promise.reject(json)
                throw json});
        })
        .catch(err=>{
            console.log("First catch")
            setResponse(err);
            setConfirmButton(false);
            console.log(err);
        })
    }

    return(
        <div className="singleAppointmentContainer">
            <div className="singleAppointmentContainer--firstRow">
                <div>
                    <div className="prop">Data</div>
                    <div>{props.data}</div>
                </div>
                <div>
                    <div className="prop">Ora</div>
                    <div>{props.ora}</div>
                </div>
                <div>
                    <div className="prop">Durata</div>
                    <div>{props.durata} min</div>
                </div>
                <div>
                    <div className="prop">Tip sedinta</div>
                    <div>{props.tipSedinta}</div>
                </div>
            </div>
            <div className="singleAppointmentContainer--secondRow">
                <div >
                    <div className="prop">Status</div>
                    <div>{status}</div>
                </div>
                <div className="singleAppointmentContainer--secondRow--buttons">
                    {
                        // timeLeft >= maxTimeReschedule && 
                        <Popup
                        trigger={<button className={timeLeft >= maxTimeReschedule ? "greenButton" : "greenButton hidden"}> Reprogrameaza </button>}
                        onOpen = {setState}
                        onClose = {()=>{
                            setModalOpen(false);
                            if (reloadPage){
                                window.location.reload(true);
                            }
                        }}
                        modal
                        nested
                        >
                            {close => (
                            <div className="modal">
                                <button className="greenButton floatRight" onClick={close}>
                                &times;
                                </button>
                                <div className="header"> Reprogramare </div>
                                <div className="content">
                                {response}
                                </div>
                                <div className="actions">
                                {
                                    dateData.date && dateData.slot && confirmButton &&
                                    <button className="greenButton noFloat" onClick={sendUpdateRequest}>
                                        Confirma
                                    </button>
                                }
                    
                                <button
                                    className="greenButton noFloat"
                                    onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                    }}
                                >
                                    Inchide
                                </button>
                                </div>
                            </div>
                            )}
                        </Popup>
                    }
                    {
                        <Popup
                        trigger={ props.prepaid>0 && <button className="greenButton"> Anuleaza programarea </button>}
                        onOpen = {()=> setState(false)}
                        onClose = {()=>{
                            setModalOpen(false);
                            if (reloadPage){
                                window.location.reload(true);
                            }
                        }}
                        modal
                        nested
                        >
                            {close => (
                            <div className="modal modalAnulare">
                                <button className="greenButton floatRight" onClick={close}>
                                &times;
                                </button>
                                <div className="header"> Anuleaza programarea </div>
                                <div className="content">
                                    {response}
                                </div>
                                <div className="actions">
                                {
                                    confirmButton &&
                                    <button className="greenButton noFloat" onClick={sendDeleteRequest}>
                                        Confirma
                                    </button>
                                }
                    
                                <button
                                    className="greenButton noFloat"
                                    onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                    }}
                                >
                                    Inchide
                                </button>
                                </div>
                            </div>
                            )}
                        </Popup>
                    }
                </div>
                
            </div>
          
        </div>
    )
}


export default UserAppointment;