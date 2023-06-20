import React from 'react'
import logoHead from "../assets/logo_head.svg"
import "./HeaderPages.css"
import { ReactSVG  } from "react-svg";

function Home(){
return(
        <div className="homePage">
            <div className="caption">
                <div className="col-50">
                    <div className="profileImg">
                    {/* <img src={logoHead} alt="Logo" className="logo" /> */}
                    <ReactSVG  
                     beforeInjection={(svg) => {
                        svg.classList.add('svg-logoHead')
                        const [firstGElement] = [...svg.querySelectorAll('style')]
                        firstGElement.classList.add('svg-logo-head')
                      }}
                      src={logoHead} className="logo"  wrapper='div'/>
                    </div>
                </div>
                <div className="homeTitle col-50">
                    <h1>Iulia Pâslaru</h1>
                    <div className="subtitle">PSIHOTERAPEUT {'\n'} TRAINER DEZVOLTARE PERSONALĂ</div>
                    <div className="motto">Fii schimbarea pe care o dorești ȋn lume</div>
                </div>
            </div>
        </div>
    )
}

export default Home;