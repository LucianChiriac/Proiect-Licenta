import React from 'react';
import './UserAppointment.css'
import { maxTimeReschedule } from '../../globalValues';

function UserAppointment(props){
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
                    <div>{props.durata}</div>
                </div>
                <div>
                    <div className="prop">Tip sedinta</div>
                    <div>{props.tipSedinta}</div>
                </div>
            </div>
            <div className="appointmentContainer--secondRow">
                <div >
                    <div className="prop">Status</div>
                    <div>{props.status}</div>
                </div>
                <div className="appointmentContainer--secondRow--buttons">
                    {
                    props.timeLeft >= maxTimeReschedule && 
                    <button class=" btn Reprogrameaza" type="button">
                            Reprogrameaza
                    </button>
                    }
                    {
                    props.prepaid &&
                        <button class=" btn Anuleaza" type="button">
                            Anuleaza sedinta
                    </button>
                    }
                </div>
                
            </div>
          
        </div>
    )
}

export default UserAppointment;