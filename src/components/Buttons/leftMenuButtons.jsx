import React from 'react';
import "./buttons.css"

function Button(props) {
    return(
        <div className="btn_box" onClick={props.onClick}>
            <div className='btn_icon'>
                <props.icon/>
            </div>
            <div className='btn_text'>
                {props.text}
            </div>
        </div>
    )
}

export default Button;
