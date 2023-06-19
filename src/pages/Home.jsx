import React from 'react'
import "./HeaderPages.css"

function Home(){
return(
        <div className="homePage">
            <div className="caption">
                <div className="col-50">
                    <div className="profileImg">
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