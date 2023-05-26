import React from 'react';
import "./ServiceBox.css"

function ServiceBox(props){

    return(
        <div className="ServiceBox">
            <div className="ServiceBox-data">{props.name}</div>
            <div className="ServiceBox-data">Durata: {props.duration} minute</div>
            <div className="ServiceBox-data">Pret: {props.price} RON</div>
        </div>
    )
}

export default ServiceBox;