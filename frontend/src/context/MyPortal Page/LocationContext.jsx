import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "../LoginContext";
import { useNavigate } from "react-router-dom";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);

  const { user } = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      if (
        currentLocation == "/myportal/workouts" ||
        currentLocation == "/myportal/bmi-calculator" ||
        currentLocation == "/myportal/account" ||
        currentLocation == "/myportal/account/change-username" ||
        currentLocation == "/myportal/account/change-email" ||
        currentLocation == "/myportal/account/change-password"
      ) {
        navigate("/myportal");
      }
    }

    if (!currentLocation.startsWith("/myportal")) {
      localStorage.removeItem("account_visibility");
      localStorage.removeItem("calendar_visibility");
      localStorage.removeItem("close_button_content");
      localStorage.removeItem("settings_visibility");
      localStorage.removeItem("calculator_visibility");
      localStorage.removeItem("outlet_name");
    }

    if (!currentLocation.startsWith("/store")) {
      localStorage.removeItem("type");
    }
  }, [currentLocation, user]);

  return (
    <LocationContext.Provider
      value={{
        setCurrentLocation,
        currentLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// to be used in MyPortal.jsx and Links.jsx
