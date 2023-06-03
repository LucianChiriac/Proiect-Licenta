import React from 'react';
import "./ServiceBox.css"

function ServiceBox(props){

    return(
        <div className="ServiceBox">
            <div className="ServiceBox-data">{props.name}</div>
            <div className="ServiceBox-data">
                <div className="leftAlign">Durata:</div>
                <div className="rightAlign">{props.duration} minute</div>
            </div>
            <div className="ServiceBox-data">
                <div className="leftAlign">Pret:</div>
                <div className="rightAlign">{props.price} RON</div>  
            </div>
        </div>
    )
}

export default ServiceBox;