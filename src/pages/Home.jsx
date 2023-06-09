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
                    <h1>Iulia Comanescu</h1>
                    <div>Psiholog, psihoterapeut Iasi</div>
                    <div>"Lorem ipsum something text very short optional"</div>
                </div>
            </div>
        </div>
    )
}

export default Home;