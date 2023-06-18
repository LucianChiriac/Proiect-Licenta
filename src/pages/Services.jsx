import React from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai"
import keyhole from "../assets/keyhole.jpg"
import sedintaOnlineSingle from "../assets/sedinta-individuala-online.jpg"
import sedintaOnlineDouble from "../assets/sedinta-individuala-dubla-online.jpg"
import sedintaCabinetSingle from "../assets/sedinta-individuala-cabinet.jpg"
import sedintaCabinetDubla from "../assets/sedinta-individuala-dubla-cabinet.jpg"
import terapieCuplu from "../assets/terapie-de-familie-si-cuplu.jpg"
import terapieCopii from "../assets/terapie-copii-si-adolescenti.jpg"


function Services(){

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/user/newBooking`; 
        navigate(path);
    }

    return(
        <div className="services background">
            <div className="content">
                <div className="firstPage">
                    <div className="servicesContent">
                        <h1>SERVICII OFERITE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex mi. Morbi elementum sagittis dui, quis blandit urna imperdiet id. Nam pulvinar mollis ultricies. Mauris eu lorem eu lectus iaculis elementum sit amet et felis. Vestibulum rhoncus vehicula magna, sed viverra lectus. Donec mattis orci at bibendum aliquam. 
                        </p>
                        <p>
                        Sed ligula sem, ullamcorper vel luctus vel, fermentum sed libero. Nullam ac neque eu nulla imperdiet feugiat. Duis nec mauris mollis, scelerisque dui ac, posuere magna. Vivamus mollis sit amet mauris dapibus mollis. Donec at fringilla dui. Donec non libero turpis. Sed vel rutrum nunc. Donec pellentesque nec diam et bibendum. Sed nibh diam, egestas et ultrices sed, lobortis a nibh. 
                        </p>
                    </div>
                    <div className="imgContainer">
                        <img src={keyhole} alt="profile"></img>
                    </div>
                </div>
                <div className="secondPage">
                        <h4>
                        Problemele pe care le putem aborda impreuna:
                        </h4>
                        <div className="issueList">
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Anxietate, atacuri de panica
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Stari depresive, stima de sine scazuta, devalorizare
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Dificultati de comunicare, relationare, adaptare
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Criza spirituala, angoase existentiale
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Indecizie profesionala, dificultati in luarea deciziilor
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Comportamente autodistructive – exces de alcool, droguri, jocuri de noroc
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Tulburari de somn, tulburari alimentare, experiente traumatice
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Disfunctii sexuale, gelozia patologica
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Fobii, furie excesiva
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Consiliere in cariera
                                </div>
                            </div>
                            <div> 
                                <div className="checkIcon">
                                    <AiOutlineCheckCircle/>
                                </div>
                                <div className="issueText">
                                Dezvoltare personala- identificam care sunt abilitatile ce au nevoie de dezvoltare, ce informatii sustin schimbarea ( carti, conferinte, cursuri), ce obiceiuri trebuiesc schimbate.
                                </div>
                            </div>
                        </div>
                </div>
                <div className="thirdPage">
                    <div className="sectionTitle">
                        Tipurile de sedinte disponibile
                    </div>
                    <div className="ServicesInfo">
                        <div className="row">
                           <div className="serviceBox">
                                <div><img src={sedintaOnlineSingle} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Sedinta Individuala - Online</div>
                                    <div className="dataField">
                                        <div>Durata:</div>
                                        <div>50</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Pret:</div>
                                        <div>300</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZA-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={sedintaOnlineDouble} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Sedinta Individuala Dubla - Online</div>
                                    <div className="dataField">
                                        <div>Durata:</div>
                                        <div>90</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Pret:</div>
                                        <div>500</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZA-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={sedintaCabinetSingle} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Sedinta Individuala - Cabinet</div>
                                    <div className="dataField">
                                        <div>Durata:</div>
                                        <div>50</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Pret:</div>
                                        <div>250</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZA-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                        </div>
                        <div className="row">
                        <div className="serviceBox">
                                <div><img src={sedintaCabinetDubla} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Sedinta Individuala Dubla - Cabinet</div>
                                    <div className="dataField">
                                        <div>Durata:</div>
                                        <div>90</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Pret:</div>
                                        <div>350</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZA-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={terapieCuplu} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Terapie de Familie si Cuplu</div>
                                    <div className="dataField">
                                        <div>Durata:</div>
                                        <div>90</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Pret:</div>
                                        <div>500</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZA-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={terapieCopii} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Terapie Copii si Adolescenti</div>
                                    <div className="dataField">
                                        <div>Durata:</div>
                                        <div>50</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Pret:</div>
                                        <div>200</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>
                                        PROGRAMEAZA-TE!<span></span><span></span><span></span><span></span>
                                    </button> </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className="butonProgramare">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;

{/* <div className='serviceDetailsWrapper'>
<div className="serviceDetails">
    <div className="title">
        Sedinta individuala - online
    </div>
    <div className="durata">
        <div>
            Durata:
        </div>
        <div>
        50 minute
        </div>
    </div>
    <div className='pret'>
        <div>
            Pret: 
        </div>
        <div>
            300 RON
        </div>
    </div>
</div>
</div>
<div className='serviceDetailsWrapper'>
<div className="serviceDetails">
    <div className="title">
    Sedinta individuala dubla - online
    </div>
    <div className="durata">
        <div>
            Durata: 
        </div>
        <div>
            90 minute
        </div>
    </div>
    <div className='pret'>
        <div>Pret:</div>
        <div>500 RON</div>
    </div>
</div>
</div>
<div className='serviceDetailsWrapper'>
<div className="serviceDetails">
    <div className="title">
    Sedinta individuala - cabinet
    </div>
    <div className="durata">
        <div>Durata:</div>
        <div>50 minute</div>
    </div>
    <div className='pret'>
        <div>Pret:</div>
        <div>250 RON</div>
    </div>
</div>
</div> */}

{/* <div className='serviceDetailsWrapper'>
                                <div className="serviceDetails">
                                    <div className="title">
                                    Sedinta individuala dubla - cabinet
                                    </div>
                                    <div className="durata">
                                        <div>Durata: </div>
                                        <div>90 minute</div>
                                    </div>
                                    <div className='pret'>
                                        <div>Pret:</div>
                                        <div>350 RON</div>
                                    </div>
                                </div>
                            </div>
                            <div className='serviceDetailsWrapper'>
                                <div className="serviceDetails">
                                    <div className="title">
                                    Terapie de familie si cuplu
                                    </div>
                                    <div className="durata">
                                        <div>Durata:</div>
                                        <div>90 minute</div>
                                    </div>
                                    <div className='pret'>
                                        <div>Pret:</div>
                                        <div>500 RON</div>
                                    </div>
                                </div>
                            </div>
                            <div className='serviceDetailsWrapper'>
                                <div className="serviceDetails">
                                    <div className="title">
                                    Terapie copii si adolescenti
                                    </div>
                                    <div className="durata">
                                        <div>Durata:</div>
                                        <div>50 minute</div>
                                    </div>
                                    <div className='pret'>
                                        <div>Pret:</div>
                                        <div>200 RON</div>
                                    </div>
                            </div>
                            </div> */}