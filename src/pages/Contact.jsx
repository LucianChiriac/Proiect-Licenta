import React from 'react'
import {googleApi} from "../globalValues"
import whatsappButton from "../assets/WhatsAppButtonGreenMedium.png"

function Contact(){
return(
    <div className="contact background">
    <div className="content">
        <div className="firstPage">
            <div className="contactData">
                <div className="title">
                    CONTACT
                </div>
                <div className="field">
                    <div>Adresa: </div>
                    <div>Str. Fara Nume 5 </div>
                </div>
                <div className='field'>
                    <div>Email: </div>
                    <div>testemail@gmail.com</div>
                </div>
                <div className='field'>
                    <div>Telefon: </div>
                    <div>+40 0745 597 525</div>
                </div>
                <div className='field whatsappButton'>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/+40745597525" target="_blank"> <img alt="Chat on WhatsApp" src={whatsappButton} />
                </a>
                </div>
            </div>
            <div className="maps">
            <iframe
                title="locatieCabinet"
                width="600"
                height="450"
                style={{border:0}}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleApi}
                    &q=47.21303334695497, 27.59572727917447&zoom=15&language=ro`}>
            </iframe>
            </div>
        </div>
    </div>
</div>
    )
}

export default Contact;