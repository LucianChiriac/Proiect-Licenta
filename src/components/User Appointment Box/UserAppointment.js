import React from 'react';
import './UserAppointment.css'
import { maxTimeReschedule } from '../../globalValues';
import { hoursTillAppointment } from '../../functions/dateManipulation';

function UserAppointment(props){

    const timeLeft = hoursTillAppointment(new Date(props.date), props.ora);
    let status = props.status;
    props.status !== 'cancelled'  && timeLeft < 0 ? status = 'passed' : status = "pending";
  
    console.log("Inside the box, i get this data")
    console.log(props)
    return(
        <div className="appointmentContainer">
            <div className="appointmentContainer--firstRow">
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
            <div className="appointmentContainer--secondRow">
                <div >
                    <div className="prop">Status</div>
                    <div>{status}</div>
                </div>
                <div className="appointmentContainer--secondRow--buttons">
                    {
                    timeLeft >= maxTimeReschedule && 
                    <button className=" btn Reprogrameaza" type="button">
                            Reprogrameaza
                    </button>
                    }
                    {
                    props.prepaid>0 &&
                        <button className=" btn Anuleaza" type="button">
                            Anuleaza sedinta
                    </button>
                    }
                </div>
                
            </div>
          
        </div>
    )
}

export default UserAppointment;