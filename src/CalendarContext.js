import React, { useState, useEffect } from "react";
import { getAvailableServices } from "./api/getAvailableServices";
import { getAllUsers } from "./api/getAllUsers";
export const multiStepContext = React.createContext();

function CalendarContextProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [allServices, setAllServices] = useState(null);
  const [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await getAvailableServices();
        const users = await getAllUsers();
        setAllServices(services);
        setAllUsers(users);
      } catch (error) {
        console.log("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

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
          allServices,
          allUsers,
        }}
      >
        {children}
      </multiStepContext.Provider>
    </>
  );
}

export default CalendarContextProvider;
