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
                        <p>Bine ai venit în secțiunea de Servicii! Aici vei găsi o gamă variată de servicii personalizate, concepute pentru a sprijini și îmbunătăți starea ta de bine și dezvoltarea personală.
                        </p>
                       <ol>
                        <li>Terapie Individuală</li>
                        <p>În cadrul terapiei individuale, ofer suport și îndrumare personalizată pentru a te ajuta să explorezi și să înțelegi mai profund aspectele care te afectează. Lucrăm împreună pentru a identifica sursele de stres, anxietate sau alte probleme, și pentru a găsi soluții practice și eficiente care să-ți îmbunătățească calitatea vieții.
                        </p>
                        <li>Terapie de Cuplu</li>
                        <p>
                        Dacă te afli într-o relație și dorești să îmbunătățești comunicarea, să depășiți conflictele sau să reconstruiți conexiunea emoțională, terapia de cuplu poate fi o soluție eficientă. Împreună cu partenerul tău, vom explora dinamica relației și vom învăța strategii și tehnici pentru a vă construi o relație sănătoasă și fericită. 
                        </p>
                        <li>Dezvoltare Personală</li>
                        <p>
                        Programul de dezvoltare personală este conceput pentru a te sprijini în obținerea unui nivel superior de conștientizare de sine și pentru a-ți dezvolta potențialul neexploatat. Vom explora valorile, pasiunile și obiectivele tale și vom lucra împreună pentru a construi abilitățile necesare pentru a-ți atinge succesul personal și profesional.
                        </p>
                        <li>Consiliere pentru gestionarea stresului</li>
                        <p>
                        Stresul poate avea un impact semnificativ asupra sănătății și bunăstării noastre. Prin consilierea pentru gestionarea stresului, vei învăța tehnici și strategii eficiente pentru a-ți gestiona și reduce nivelul de stres. Vom explora cauzele stresului și vom dezvolta un plan personalizat pentru a-ți recăpăta echilibrul și a-ți îmbunătăți calitatea vieții.
                        </p>
                       </ol>
                    </div>
                    <div className="imgContainer">
                        <img src={keyhole} alt="profile"></img>
                        <p>
                        Indiferent de serviciul pe care îl alegi, te asigur că vei primi suportul și atenția de care ai nevoie pentru a-ți atinge obiectivele. Fiecare ședință va fi personalizată în funcție de nevoile și dorințele tale, și vom lucra într-un mediu sigur și confidențial.
                        </p>
                        <p>
                        Te invit să explorezi mai multe detalii despre fiecare serviciu pe pagina noastră și să mă contactezi pentru a programa o primă întâlnire. Abia aștept să colaborez cu tine și să te susțin în călătoria ta către o viață mai fericită și împlinită.
                        </p>
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
                        Tipurile de ședințe disponibile
                    </div>
                    <div className="ServicesInfo">
                        <div className="row">
                           <div className="serviceBox">
                                <div><img src={sedintaOnlineSingle} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Ședință Individuală - Online</div>
                                    <div className="dataField">
                                        <div>Durată:</div>
                                        <div>50</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Preț:</div>
                                        <div>300</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZĂ-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={sedintaOnlineDouble} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Ședință Individuală Dublă - Online</div>
                                    <div className="dataField">
                                        <div>Durată:</div>
                                        <div>90</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Preț:</div>
                                        <div>500</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZĂ-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={sedintaCabinetSingle} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Ședință Individuală - Cabinet</div>
                                    <div className="dataField">
                                        <div>Durată:</div>
                                        <div>50</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Preț:</div>
                                        <div>250</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZĂ-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                        </div>
                        <div className="row">
                        <div className="serviceBox">
                                <div><img src={sedintaCabinetDubla} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Ședință Individuală Dublă - Cabinet</div>
                                    <div className="dataField">
                                        <div>Durată:</div>
                                        <div>90</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Preț:</div>
                                        <div>350</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZĂ-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={terapieCuplu} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Terapie de Familie și Cuplu</div>
                                    <div className="dataField">
                                        <div>Durată:</div>
                                        <div>90</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Preț:</div>
                                        <div>500</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>PROGRAMEAZĂ-TE!<span></span><span></span><span></span><span></span></button> </div>
                                </div>
                           </div>
                           <div className="serviceBox">
                                <div><img src={terapieCopii} alt="stockImage"/></div>
                                <div className="content">
                                    <div>Terapie Copii și Adolescenți</div>
                                    <div className="dataField">
                                        <div>Durată:</div>
                                        <div>50</div>
                                        <div>minute</div>
                                    </div>
                                    <div className="dataField">
                                        <div>Preț:</div>
                                        <div>200</div>
                                        <div>RON</div>
                                    </div>
                                    <div><button className="cta"  onClick={routeChange}>
                                        PROGRAMEAZĂ-TE!<span></span><span></span><span></span><span></span>
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
            Durată:
        </div>
        <div>
        50 minute
        </div>
    </div>
    <div className='pret'>
        <div>
            Preț: 
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
            Durată: 
        </div>
        <div>
            90 minute
        </div>
    </div>
    <div className='pret'>
        <div>Preț:</div>
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
        <div>Durată:</div>
        <div>50 minute</div>
    </div>
    <div className='pret'>
        <div>Preț:</div>
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
                                        <div>Durată: </div>
                                        <div>90 minute</div>
                                    </div>
                                    <div className='pret'>
                                        <div>Preț:</div>
                                        <div>350 RON</div>
                                    </div>
                                </div>
                            </div>
                            <div className='serviceDetailsWrapper'>
                                <div className="serviceDetails">
                                    <div className="title">
                                    Terapie de familie și cuplu
                                    </div>
                                    <div className="durata">
                                        <div>Durată:</div>
                                        <div>90 minute</div>
                                    </div>
                                    <div className='pret'>
                                        <div>Preț:</div>
                                        <div>500 RON</div>
                                    </div>
                                </div>
                            </div>
                            <div className='serviceDetailsWrapper'>
                                <div className="serviceDetails">
                                    <div className="title">
                                    Terapie copii și adolescenti
                                    </div>
                                    <div className="durata">
                                        <div>Durată:</div>
                                        <div>50 minute</div>
                                    </div>
                                    <div className='pret'>
                                        <div>Preț:</div>
                                        <div>200 RON</div>
                                    </div>
                            </div>
                            </div> */}