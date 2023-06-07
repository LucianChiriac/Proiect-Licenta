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
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
//

function PopupAddCalendarEvent() {
  const {
    openPopup,
    setOpenPopup,
    popupData,
    setPopupData,
    allUsers,
    refetchData,
    setRefetchData,
  } = useContext(CalendarContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState(null);
  const [confirmButton, setConfirmButton] = useState(true);
  const [reloadPage, setReloadPage] = useState(false);
  const [parentPopupVisible, setParentPopupVisible] = useState(true);

  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [email, setEmail] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [prepaid, setPrepaid] = useState(false);
  const [nameAutoOptions, setNameAutoOptions] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const parentContainer = document.getElementById("calendarAddEventPopup");
    parentPopupVisible
      ? (parentContainer.style.visibility = "visible")
      : (parentContainer.style.visibility = "hidden");
  }, [parentPopupVisible]);

  // console.log("all users are");
  // console.log(allUsers);
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
    console.log(selectedUser);
    if (
      selectedUser === null &&
      allUsers.filter((user) => user.phone === phone.split(" ").join(""))
        .length > 0
    ) {
      console.log("Numarul de telefon este deja asociat unui alt client.");
    } else
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
              forUserType: selectedUser ? selectedUser.type : null,
              userId: selectedUser ? selectedUser.id : null,
              ...(selectedUser &&
                selectedUser.type !== "registered" && {
                  forUserFamilyName: familyName,
                  forUserGivenName: givenName,
                  forUserEmail: email,
                  forUserPhone: phone.split(" ").join(""),
                }),
              ...(selectedUser === null && {
                forUserFamilyName: familyName,
                forUserGivenName: givenName,
                forUserEmail: email,
                forUserPhone: phone.split(" ").join(""),
              }),
            },
          }),
        }
      )
        .then(async (res) => {
          if (res.ok) {
            setRefetchData(true);
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
        .catch((err) => {
          console.error(err);
          setErrorMessage(err.messageUser);
        });
  }
  const handleFamilyNameChange = (value) => {
    console.log("I get called");
    if (typeof value === "string") {
      console.log("typing value");
      // If the value is a string (typed by the user), set only the familyName
      setFamilyName(value);
    } else if (typeof value === "object" && value !== null) {
      // If the value is an object (selected from the dropdown), set familyName, givenName, phone, and email
      console.log("SELECTED VALUE");
      console.log(value);
      setSelectedUser(value);
      setFamilyName(value.family_name);
      setGivenName(value.given_name);
      setPhone(value.phone);
      setEmail(value.email);
    }
  };

  const handleGivenNameChange = (event, value) => {
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

  const handleClear = () => {
    console.log("I'm clearing");
    setGivenName("");
    setFamilyName("");
    setEmail("");
    setPhone("");
    setSelectedUser(null);
  };
  // console.log("Inside AddCalendar, this is what I get: ");
  // console.log(popupData);
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
                  <Autocomplete
                    id="input-name"
                    options={nameAutoOptions}
                    freeSolo
                    getOptionLabel={(user) =>
                      selectedUser === user
                        ? user.family_name
                        : `${user.family_name}, ${user.given_name}`
                    }
                    disabled={
                      selectedUser ? true : false // && selectedUser.type === "registered"
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        label="Numele de familie"
                        value={email}
                        onChange={(e) => handleFamilyNameChange(e.target.value)}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <>
                              {params.InputProps.endAdornment}
                              {selectedUser && (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="Custom Button"
                                    onClick={handleClear}
                                  >
                                    <ClearIcon color="primary" />
                                  </IconButton>
                                </InputAdornment>
                              )}
                            </>
                          ),
                        }}
                      />
                    )}
                    onChange={(e, value) => {
                      handleFamilyNameChange(value);
                      setSelectedUser(value);
                    }}
                    onInputChange={(event, value) => {
                      const filteredUsers = allUsers.filter((user) =>
                        `${user.family_name} ${user.given_name}`
                          .toLowerCase()
                          .includes(value.toLowerCase())
                      );
                      setNameAutoOptions(filteredUsers);
                    }}
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
                    value={givenName}
                    onChange={handleGivenNameChange}
                    disabled={
                      selectedUser ? true : false // && selectedUser.type === "registered"
                    }
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
                    value={email}
                    error={emailError}
                    onChange={handleEmailChange}
                    helperText={emailError ? "Invalid email" : ""}
                    disabled={
                      selectedUser ? true : false // && selectedUser.type === "registered"
                    }
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
                    disabled={
                      selectedUser ? true : false // && selectedUser.type === "registered"
                    }
                  />
                  {!isPhoneValid && (
                    <div className="phone-invalid-message">Numar invalid</div>
                  )}
                  {selectedUser === null &&
                    allUsers.filter(
                      (user) => user.phone === phone.split(" ").join("")
                    ).length > 0 && (
                      <div className="phone-invalid-message">
                        Numar asociat altui client
                      </div>
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
                      value={selectedService}
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
