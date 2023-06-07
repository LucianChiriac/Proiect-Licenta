import React, { useContext, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { multiStepContext as CalendarContext } from "../../CalendarContext";
import { multiStepContext as DatepickerStepContext } from "../../StepperContext";
import Datepicker from "../Date_Picker/DatePicker";
import { getJustTime } from "../../functions/dateManipulation";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { MdVideoCameraFront } from "react-icons/md";
import "./Popups.css";
import whatsappLogo from "../../assets/WhatsApp.svg";

function PopupCalendarEvent() {
  const {
    openPopup,
    setOpenPopup,
    popupData,
    setPopupData,
    refetchData,
    setRefetchData,
  } = useContext(CalendarContext);
  const { serviceData, setServiceData, dateData } = useContext(
    DatepickerStepContext
  );
  const [response, setResponse] = useState(null);
  const [confirmButton, setConfirmButton] = useState(true);
  const [reloadPage, setReloadPage] = useState(false);
  const [parentPopupVisible, setParentPopupVisible] = useState(true);

  useEffect(() => {
    const parentContainer = document.getElementById("calendarEventPopup");
    parentPopupVisible
      ? (parentContainer.style.visibility = "visible")
      : (parentContainer.style.visibility = "hidden");
  }, [parentPopupVisible]);

  function setState(datepicker = true) {
    setOpenPopup(1);
    setReloadPage(false);
    setConfirmButton(true);
    console.log("inside setState");
    console.log(popupData);
    setServiceData({
      appointmentId: popupData.event._def.extendedProps.allProps.appointment_id,
      date: popupData.event._def.extendedProps.allProps.date,
      slots: popupData.event._def.extendedProps.allProps.slots,
      duration: popupData.event._def.extendedProps.allProps.duration,
      booked_slots: popupData.event._def.extendedProps.allProps.booked_slots,
    });
    if (datepicker) setResponse(<Datepicker />);
    else
      setResponse(
        <div>
          {popupData.event._def.extendedProps.allProps.prepaid === 1 && (
            <div className="warning">
              Atentie! Aceasta programare a fost pre-platita!
            </div>
          )}
          Daca doriti sa continuati cu anularea sedintei, apasati pe butonul
          "Confirma"!"
        </div>
      );
  }
  function sendUpdateRequest() {
    console.log("update request");
    console.log(serviceData, dateData);
    setResponse("Loading...");
    setConfirmButton(false);
    fetch(
      `https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceData: serviceData,
          newDateData: dateData,
        }),
      }
    )
      .then(async (res) => {
        console.log(res);
        if (res.ok) {
          setResponse("Sedinta a fost reprogramata cu success!");
          //setReloadPage(true);
          setRefetchData(true);
          return await res.json();
        }
        setResponse(
          "Reprogramarea a esuat! Incercati din nou sau contactati administratorul"
        );
        //setReloadPage(true);
        setConfirmButton(false);
        return await res.json().then((json) => {
          console.log(json);
          Promise.reject(json);
          throw json;
        });
      })
      .catch((err) => {
        console.log("First catch");
        setResponse(err.message);
        setConfirmButton(false);
        console.log(err);
      })
      .catch((err) => {
        console.log("Final");
        console.error(err);
      });
  }
  function sendDeleteRequest() {
    setResponse("Loading...");
    setConfirmButton(false);
    fetch(
      `https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceData: serviceData,
        }),
      }
    )
      .then(async (res) => {
        console.log(res);
        if (res.ok) {
          setResponse("Sedinta a fost anulata cu success!");
          //setReloadPage(true);
          setRefetchData(true);
          return await res.json();
        }
        setResponse(
          "Anularea sedintei a esuat! Incercati din nou sau contactati administratorul"
        );
        //setReloadPage(true);
        setRefetchData(true);
        setConfirmButton(false);
        return await res.json().then((json) => {
          console.log(json);
          Promise.reject(json);
          throw json;
        });
      })
      .catch((err) => {
        console.log("First catch");
        setResponse(err.message);
        console.log("after first");
        setConfirmButton(false);
        console.log("Second");
        console.log(err.message);
        console.log("after second");
      });
  }

  console.log("Data in popupcalendarevent");
  console.log(popupData);

  return (
    <Popup
      position="right center"
      open={openPopup === 1}
      onClose={() => {
        setOpenPopup(0);
        setParentPopupVisible(false);
      }}
      closeOnDocumentClick={false}
      modal
    >
      {(close) => (
        <div className="calendarEventPopup modal" id="calendarEventPopup">
          <button
            className="greenButton closeX"
            onClick={() => {
              setOpenPopup(0);
              close();
            }}
          >
            &times;
          </button>
          <div className="row">
            <div className="col">Nume pacient:</div>
            <div className="col">{popupData.event._def.title}</div>
          </div>
          <div className="row">
            <div className="col">Ora programare:</div>
            <div className="col">
              {`${getJustTime(
                popupData.event._instance.range.start
              )}-${getJustTime(popupData.event._def.extendedProps.realEnd)}`}
            </div>
          </div>
          <div className="row">
            <div className="col">Tip sedinta:</div>
            <div className="col">
              {popupData.event._def.extendedProps.allProps.name}
              {popupData.event._def.extendedProps.allProps.location ===
                "online" && <MdVideoCameraFront className="cameraIcon" />}
            </div>
          </div>
          <div className="row">
            <div className="col">Preplatit:</div>
            <div className="col">
              {popupData.event._def.extendedProps.allProps.prepaid ? (
                <div className="prepaid">
                  <div>Da</div>
                  <div>
                    <BsFillCheckCircleFill className="greenIcon" />
                  </div>
                </div>
              ) : (
                <div className="prepaid">
                  <div>Nu</div>
                  <div>
                    <BsFillXCircleFill className="redIcon" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row modalButtons">
            <div className="col">
              <Popup
                trigger={
                  <button className="greenButton"> Reprogrameaza </button>
                }
                onOpen={() => {
                  setState();
                  setParentPopupVisible(false); //
                }}
                onClose={() => {
                  setOpenPopup(0);
                  setParentPopupVisible(true);
                  if (reloadPage) {
                    window.location.reload(true);
                  }
                }}
                modal
                nested
                closeOnDocumentClick={false}
              >
                {(close) => (
                  <div className="modal">
                    <button className="greenButton floatRight" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Reprogramare </div>
                    <div className="content">{response}</div>
                    <div className="actions">
                      {dateData.date && dateData.slot && confirmButton && (
                        <button
                          className="greenButton noFloat"
                          onClick={sendUpdateRequest}
                        >
                          Confirma
                        </button>
                      )}

                      {response !== "Loading..." && (
                        <button
                          className="greenButton noFloat"
                          onClick={() => {
                            console.log("modal closed ");
                            close();
                          }}
                        >
                          Inchide
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="col">
              <Popup
                trigger={
                  <button className="greenButton"> Anuleaza sedinta </button>
                }
                onOpen={() => {
                  setState(false);
                  setParentPopupVisible(false);
                }}
                onClose={() => {
                  setOpenPopup(0);
                  setParentPopupVisible(true);
                  if (reloadPage) {
                    window.location.reload(true);
                  }
                }}
                modal
                nested
              >
                {(close) => (
                  <div className="modal modalAnulare">
                    <button className="greenButton floatRight" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Anuleaza programarea </div>
                    <div className="content">{response}</div>
                    <div className="actions">
                      {confirmButton && (
                        <button
                          className="greenButton noFloat"
                          onClick={sendDeleteRequest}
                        >
                          Confirma
                        </button>
                      )}
                      {response !== "Loading..." && (
                        <button
                          className="greenButton noFloat"
                          onClick={() => {
                            console.log("modal closed ");
                            close();
                          }}
                        >
                          Inchide
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="row modalButtons">
            <div className="col">
              <a
                aria-label="Chat on WhatsApp"
                href={`https://wa.me/${popupData.event._def.extendedProps.allProps.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="whatsappLogo"
                  src={whatsappLogo}
                  alt="whatsapp logo"
                />
              </a>
            </div>
          </div>

          {/* Add more details or customize the popup content as needed */}
        </div>
      )}
    </Popup>
  );
}

export default PopupCalendarEvent;
