import React, { useState, useEffect } from 'react';
import { useAuthenticator} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function UserProfile(){
    const user = Auth.currentAuthenticatedUser();
    const { route } = useAuthenticator((context) => [context.route]);
    const {sub : userID, email : userEmail, family_name, given_name, phone_number} = useAuthenticator().user.attributes;
    const [emailNotification, setEmailNotification] = useState(false);
    const [smsNotification, setSmsNotification] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        family_name: family_name,
        given_name: given_name,
        userEmail: userEmail,
        phone_number: phone_number,
        old_password: null,
        new_password: null
    })
    useEffect(() => {
        const elements = document.getElementsByTagName('input');
        
        if (editMode){
           for (let i = 0; i < elements.length; i++) {
            elements[i].disabled = false;
          }
           console.log(elements)
        } else{
            for (let i = 0; i < elements.length; i++) {
                elements[i].disabled = true;
              }
        }
    },[editMode])

    useEffect(() => {
        fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/users/${userID}`).then(res => res.json()).then(res => {
            setEmailNotification(res.body[0].email_notification);
            setSmsNotification(res.body[0].sms_notification);
        });
    },[])

    function switchEmailSettings(){
        setEmailNotification(!emailNotification)
    }
    function switchSmsNotification(){
        setSmsNotification(!smsNotification)
    }    

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(`Name is ${name} and Value is ${value}`)
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
      function handleSubmit(e) {
        e.preventDefault();
        console.log("SUbmitting")
        console.log(formData);
        console.log(formData.family_name)
        console.log(formData.new_password,formData.old_password)
        if (formData.new_password && formData.old_password) {
            console.log("I am changing the password")
            Auth.currentAuthenticatedUser()
            .then((user) => {
                return Auth.changePassword(user, formData.old_password, formData.new_password);
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
        Auth.currentAuthenticatedUser()
            .then((user) => {
                Auth.updateUserAttributes(user, {
                    family_name: formData.family_name
                  }).then(res => {
                    console.log("Cred ca am actualizat datele")
                    console.log(res)
                  })
            })
          
        setEditMode(false);
      };

    console.log("Inside user Profile:")
    console.log(userID, userEmail, family_name, given_name, phone_number, emailNotification, smsNotification)
    return(
        <div className='profilePageContainer'>
            <h1 className="center-profile">Bine ai revenit, {given_name}</h1>
            <form className='profileForm' onSubmit={handleSubmit} id="profileForm">
                <div className="row profile">
                    <div className="col-25">
                    <label htmlFor="Nume">Nume</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="Nume" name="family_name" defaultValue={family_name} onChange={handleChange} disabled />
                    </div>
                </div>
              
                <div className="row profile">
                    <div className="col-25">
                       <label htmlFor="Prenume">Prenume</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="Prenume" name="given_name" defaultValue={given_name} onChange={handleChange} disabled/>
                    </div>
                </div>
                <div className="row profile">
                    <div className="col-25">
                        <label htmlFor='Email'>Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="Email" name="userEmail" defaultValue={userEmail} onChange={handleChange} disabled/>
                    </div>
                </div>
                <div className="center-profile">
                    
                </div>
                <div className="row profile">
                    <div className="col-25">
                        <label htmlFor="parola_curenta">Parola curentă</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="parola_curenta" name="old_password" placeholder="********" onChange={handleChange} disabled/>
                    </div>
                </div>
                <div className="row profile">
                    <div className="col-25">
                        <label htmlFor="parola_noua">Parola nouă</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="parola_noua" name="new_password" placeholder="***********" onChange={handleChange} disabled/>
                    </div>
                </div>
                <div className="row profile">
                    <div className="col-25">
                    <label htmlFor="confirma_parola">Confirma parola</label>
                    </div>
                    <div className="col-75">
                    <input type="password" id="confirma_parola" name="confirm_password" placeholder="***********" onChange={handleChange} disabled/>
                    </div>
                </div>
                <div className="row profile hidden">
                    <div className="col-25">
                        <input type="checkbox" id="email_setting" name="email_setting" checked={emailNotification} onChange={switchEmailSettings} disabled />
                    </div>
                    <div className="col-75">
                        Doresc să fiu notificat prin email cu privire la progrămarile mele.
                    </div>
                </div>
                <div className="row profile hidden">
                    <div className="col-25">
                    <input type="checkbox" id="sms_setting" name="sms_setting" checked={smsNotification} onChange={switchSmsNotification} disabled />
                    </div>
                    <div className="col-75 ">
                        Doresc să fiu notificat prin SMS cu privire la progrămarile mele.
                    </div>
                </div>
                <div className="row profile hidden">
                    {!editMode && <button className='greenButton' onClick={()=> setEditMode(true)}>
                    Modifică datele
                    </button>}
                    {editMode && 
                    <button type="submit" className='greenButton'>
                        Salvează Modificările
                    </button>}
                    
                    {editMode &&
                    <button className='greenButton' onClick={()=> setEditMode(false)}>
                    Renuntă
                    </button>}
                </div>
                
            </form>
            
        </div>
    )
}

export default UserProfile;