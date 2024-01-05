import React, { createContext, useEffect, useState } from "react";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);

  useEffect(() => {
    if (currentLocation !== "/myportal/workouts") {
      localStorage.removeItem("outlet_name");
      localStorage.removeItem("close_button_content");
      localStorage.removeItem("settings_visibility");
      localStorage.removeItem("calendar_visibility");
    }
  });

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
