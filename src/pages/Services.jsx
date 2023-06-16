import React from 'react'
import { useNavigate } from "react-router-dom";

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
                    <div className="imgContainer">
                        <div className="img"></div>
                    </div>
                    <div className="servicesContent">
                        <h1>Servicii oferite</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex mi. Morbi elementum sagittis dui, quis blandit urna imperdiet id. Nam pulvinar mollis ultricies. Mauris eu lorem eu lectus iaculis elementum sit amet et felis. Vestibulum rhoncus vehicula magna, sed viverra lectus. Donec mattis orci at bibendum aliquam. 
                        </p>
                        <p>
                        Sed ligula sem, ullamcorper vel luctus vel, fermentum sed libero. Nullam ac neque eu nulla imperdiet feugiat. Duis nec mauris mollis, scelerisque dui ac, posuere magna. Vivamus mollis sit amet mauris dapibus mollis. Donec at fringilla dui. Donec non libero turpis. Sed vel rutrum nunc. Donec pellentesque nec diam et bibendum. Sed nibh diam, egestas et ultrices sed, lobortis a nibh. 
                        </p>
                        <h4>
                        Problemele pe care le putem aborda impreuna:
                        </h4>
                        <div className="issueList">
                            <div>Anxietate, atacuri de panica</div>
                            <div>Stari depresive, stima de sine scazuta, devalorizare</div>
                            <div>Dificultati de comunicare, relationare, adaptare</div>
                            <div>Criza spirituala, angoase existentiale</div>
                            <div>Indecizie profesionala, dificultati in luarea deciziilor</div>
                            <div>Comportamente audistructive – exces de alcool, droguri, jocuri de noroc</div>
                            <div>Tulburari de somn, tulburari alimentare, experiente traumatice</div>
                            <div>Disfunctii sexuale, gelozia patologica</div>
                            <div>Fobii, furie excesiva</div>
                            <div>Consiliere in cariera</div>
                            <div>Dezvoltare personala- identificam care sunt abilitatile ce au nevoie de dezvoltare, ce informatii sustin schimbarea ( carti, conferinte, cursuri), ce obiceiuri trebuiesc schimbate.</div>
                        </div>
                    </div>
                </div>
                <div className="secondPage">
                    <div className="sectionTitle">
                        Tipurile de sedinte disponibile
                    </div>
                    <div className="ServicesInfo">
                        <div className="row">
                            <div className='serviceDetailsWrapper'>
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
                            </div>
                            </div>
                        <div className="row">
                            <div className='serviceDetailsWrapper'>
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
                            </div>
                        </div>
                    </div>
                    <div className="butonProgramare">
                    <button
                        className="greenButton noFloat"
                        onClick={routeChange}
                      >
                        Programeaza-te online!
                      </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;