import React, { useContext, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { multiStepContext as CalendarContext } from "../../CalendarContext";
import { getJustTime } from "../../functions/dateManipulation";
import { MdVideoCameraFront } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import "./Popups.css";
import startOfDay from "date-fns/startOfDay";
import getHours from "date-fns/getHours";
import format from "date-fns/format";
//
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
//

function PopupAddCalendarEvent() {
  const { openPopup, setOpenPopup, popupData, setPopupData, allUsers } =
    useContext(CalendarContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState(null);
  const [confirmButton, setConfirmButton] = useState(true);
  const [reloadPage, setReloadPage] = useState(false);
  const [parentPopupVisible, setParentPopupVisible] = useState(true);

  const [phone, setPhone] = useState();
  const [selectedService, setSelectedService] = useState(null);
  const [email, setEmail] = useState(null);
  const [familyName, setFamilyName] = useState(null);
  const [givenName, setGivenName] = useState(null);
  const [prepaid, setPrepaid] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  useEffect(() => {
    const parentContainer = document.getElementById("calendarAddEventPopup");
    parentPopupVisible
      ? (parentContainer.style.visibility = "visible")
      : (parentContainer.style.visibility = "hidden");
  }, [parentPopupVisible]);

  console.log("all users are");
  console.log(allUsers);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitting form data");
    console.log(popupData.startDate);
    console.log(format(popupData.startDate, "HH:mm:ss"));
    console.log(familyName);
    console.log(givenName);
    console.log(email);
    console.log(phone);
    console.log(selectedService);
    console.log(prepaid);
    console.log("end");
    console.log(e.target.checkValidity());
    fetch(
      `https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceData: selectedService,
          dateData: {
            date: popupData.startDate,
            slot: format(popupData.startDate, "HH:mm:ss"),
          },
          userData: {
            userGroup: "admin",
            userId: null,
          },
        }),
      }
    )
      .then(async (res) => {
        if (res.ok) {
          return await res.json();
        }
        return await res.json().then((json) => {
          Promise.reject(json);
          throw json;
        });
      })
      .catch((err) => {
        console.error(err);
        console.log("I got this error:");
        console.log(err);
        setErrorMessage(err.messageUser);
      })
      .then((res) => {
        setOpenPopup(0);
      })
      // .then(({ url }) => {
      //   window.location = url;
      // })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.messageUser);
      });
  }
  const handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value);
  };

  const handleGivenNameChange = (event) => {
    setGivenName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
    setEmail(email);
  };

  const handlePhoneChange = (newNumber) => {
    setIsPhoneValid(matchIsValidTel(newNumber));
    setPhone(newNumber);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handlePrepaid = (event) => {
    setPrepaid(event.target.checked);
  };

  console.log("Inside AddCalendar, this is what I get: ");
  console.log(popupData);
  return (
    <Popup
      position="right center"
      open={openPopup}
      onClose={() => {
        setOpenPopup(0);
        setParentPopupVisible(false);
      }}
      closeOnDocumentClick={false}
      modal
    >
      {(close) => (
        <Box sx={{ minWidth: 120 }}>
          <form className="formAdminAddCalendar" onSubmit={handleSubmit}>
            <div
              className="calendarAddEventPopup modal"
              id="calendarAddEventPopup"
            >
              <button className="greenButton closeX" onClick={close}>
                &times;
              </button>
              <div className="row title">Introduceti detaliile programarii</div>
              <div className="row">
                <div className="col">
                  <InputLabel id="input-name">Nume</InputLabel>
                </div>
                <div className="col">
                  <TextField
                    required
                    id="input-name"
                    label="Numele de familie"
                    defaultValue=""
                    onChange={handleFamilyNameChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <InputLabel id="input-givenName">Prenume</InputLabel>
                </div>
                <div className="col">
                  <TextField
                    required
                    id="input-givenName"
                    label="Prenumele pacientului"
                    defaultValue=""
                    onChange={handleGivenNameChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <InputLabel id="input-email">Email</InputLabel>
                </div>
                <div className="col">
                  <TextField
                    required
                    id="input-email"
                    type={"email"}
                    label="Email pacient"
                    defaultValue=""
                    error={emailError}
                    onChange={handleEmailChange}
                    helperText={emailError ? "Invalid email" : ""}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <InputLabel id="input-phone">Telefon</InputLabel>
                </div>
                <div
                  className={`col ${isPhoneValid ? "" : "phone-invalid-input"}`}
                >
                  <MuiTelInput
                    required
                    defaultCountry={"RO"}
                    forceCallingCode={true}
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  {!isPhoneValid && (
                    <div className="phone-invalid-message">Numar invalid</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <InputLabel id="tip-sedinta">Tip sedinta</InputLabel>
                </div>
                <div className="col">
                  <FormControl required fullWidth>
                    <InputLabel id="tip-sedinta">Tip sedinta</InputLabel>
                    <Select
                      labelId="tip-sedinta"
                      id="tip-sedinta"
                      label="Selectati tipul sedintei"
                      onChange={handleServiceChange}
                      defaultValue=""
                    >
                      {popupData.bookableServices.map((service, index) => (
                        <MenuItem key={index} value={service}>
                          {service.location === "online" && (
                            <MdVideoCameraFront
                              style={{ marginRight: "0.5em" }}
                            />
                          )}
                          {service.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <InputLabel id="input-preplatit">Platit in avans</InputLabel>
                </div>
                <div className="col">
                  <Checkbox
                    defaultChecked={false}
                    color="success"
                    onChange={handlePrepaid}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="greenButton" type="submit">
                    Confirma
                  </button>
                </div>
                <div className="col">
                  <button className="greenButton" onClick={close}>
                    Renunta
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Box>
      )}
    </Popup>
  );
}

export default PopupAddCalendarEvent;

// <form
//             onSubmit={handleSubmit}
//             className="addAppointmentForm--admin"
//             id="addAppointmentForm--admin"
//           >
//             <div className="row">
//               <div className="col">Datele programarii</div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <label htmlFor="Nume">Nume</label>
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   id="Nume"
//                   name="family_name"
//                   placeholder="Numele de familie al pacientului"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <label htmlFor="Prenume">Prenume</label>
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   id="Prenume"
//                   name="given_name"
//                   placeholder="Prenumele pacientului"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <label htmlFor="Email">Email</label>
//               </div>
//               <div className="col">
//                 <input
//                   type="email"
//                   id="Email"
//                   name="Email"
//                   placeholder="Adresa email a pacientului"
//                   pattern=".+@.+\..+"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <label htmlFor="Phone">Telefon</label>
//               </div>
//               <div className="col">
//                 <PhoneInput
//                   defaultCountry="RO"
//                   // value={value}
//                   placeholder="ex: 0755 555 555"
//                   onChange={setPhone}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <label htmlFor="TipSedinta">Tip sedinta </label>
//               </div>
//               <div className="col">
//                 <select name="TipSedinta" id="TipSedinta" required>
//                   <option value=""> --- Selectati tipul sedintei ---</option>
//                   {popupData.bookableServices.map((service) => (
//                     <option key={service.id} value={service.id}>
//                       {service.name}{" "}
//                       {service.location === "online" && <MdVideoCameraFront />}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">Preplatit:</div>
//               <div className="col"></div>
//             </div>
//           </form>
