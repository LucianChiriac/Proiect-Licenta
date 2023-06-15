import React, { useContext, useState } from 'react'
import {multiStepContext} from '../../CalendarContext';
import whatsappLogo from "../../assets/WhatsApp.svg";


function Pacienti(){
    const {allUsers} = useContext(multiStepContext)
    const [filter, setFilter] = useState('')
    console.log(allUsers)
return(
    <div className="patientsContainer">
        <div className="title">Lista pacientilor</div>
        <div className="searchBar">
            <input id="filter" name="filter" type="text" placeHolder="Cautare" value={filter} 
            onChange={event => setFilter(event.target.value)}>

            </input>
        </div>
        <ul className="listaPacienti">
            <li>
                <div className="family_name">
                    Nume
                </div>
                <div className="given_name">
                    Prenume
                </div>
                <div className="email">
                    Email
                </div>
                <div className="phone">
                    Telefon
                </div>
                <div className="whatsappIcon">
                </div>
            </li>
            {allUsers && 
            allUsers
            .filter(user => user.family_name.includes(filter) || user.given_name.includes(filter) || filter==='')
            .map((user,index) =>
            <li key={index}>
                <div className="family_name">
                    {user.family_name}
                </div>
                <div className="given_name">
                    {user.given_name}
                </div>
                <div className="email">
                    {user.email}
                </div>
                <div className="phone">
                    {user.phone}
                </div>
                <div className="whatsappIcon">
                    <a
                        aria-label="Chat on WhatsApp"
                        href={`https://wa.me/${user.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img
                            className="whatsappLogo"
                            src={whatsappLogo}
                            alt="whatsapp logo"
                        />
                    </a>
                </div>
            </li>)}
        </ul>
    </div>
    )
}

export default Pacienti;