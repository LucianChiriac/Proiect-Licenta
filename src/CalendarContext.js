import React, { useState, useEffect } from "react";

export const multiStepContext = React.createContext();

function CalendarContextProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    console.log(`In context, openPopup has changed to ${openPopup}`);
  }, [openPopup]);
  return (
    <>
      <multiStepContext.Provider
        value={{
          showPopup,
          setShowPopup,
          popupData,
          setPopupData,
          openPopup,
          setOpenPopup,
        }}
      >
        {children}
      </multiStepContext.Provider>
    </>
  );
}

export default CalendarContextProvider;
