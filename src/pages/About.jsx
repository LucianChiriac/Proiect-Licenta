import React from 'react'
import profilePic from "../assets/profilePic.jpg"

function About(){
    return(
        <div className="about background">
            <div className="content">
                <div className="aboutMe">
                    <div className="imgContainer">
                        <img src={profilePic} alt="profile"></img>
                    </div>
                    <div className="aboutContent">
                        <div>DESPRE MINE</div>
                        <h1>Iulia Pâslaru</h1>
                        <p>Bună! Mă numesc Iulia și sunt un psihoterapeut și trainer de dezvoltare personală. Îmi dedic timpul și energia pentru a ajuta oamenii să-și descopere și să-și exploreze potențialul, să-și depășească obstacolele și să-și atingă obiectivele personale și profesionale.
                        </p>
                        <p>
                        Cred cu tărie în puterea transformării și în capacitatea fiecărei persoane de a-și îmbunătăți calitatea vieții. Prin experiența și cunoștințele acumulate de-a lungul anilor, am dezvoltat abilități solide în domeniul psihologiei și al dezvoltării personale, pe care le aplic în mod individualizat pentru fiecare persoană care îmi caută ajutorul.
                        </p>
                        <p>
                        Prin intermediul sesiunilor de terapie și a programelor de dezvoltare personală pe care le ofer, încurajez autocunoașterea, înțelegerea emoțiilor și a gândurilor, precum și dezvoltarea abilităților de comunicare și relaționare sănătoasă. Colaborez cu clienții mei într-un mediu sigur și confidențial, oferindu-le suportul și îndrumarea necesare pentru a-și depăși dificultățile și a-și atinge obiectivele.
                        </p>
                        <p>
                        Fie că te confrunți cu probleme de anxietate, depresie, stres sau dificultăți în relații, sunt aici pentru tine. Prin lucrul împreună, vom explora modalități eficiente de a-ți gestiona emoțiile, de a-ți dezvolta abilitățile de coping și de a construi o viață echilibrată și împlinită.
                        </p>
                        <p>
                        Îmi place să creez un mediu cald, prietenos și non-judgmental, în care fiecare persoană să se simtă în siguranță și acceptată. Împreună, vom descoperi resursele și potențialul tău interior, construind o bază solidă pentru creștere și transformare.
                        </p>
                        <p>
                        Te invit să explorezi pagina mea și să descoperi mai multe despre serviciile pe care le ofer. Dacă simți că ai nevoie de sprijin și îndrumare în calatoria ta personală, nu ezita să mă contactezi. Abia aștept să lucrez împreună cu tine și să te susțin în atingerea obiectivelor tale.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;