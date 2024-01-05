import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CalendarContext } from "../../context/CalendarContext";
import { WorkoutContext } from "../../context/WorkoutContext";
import { PortalContext } from "../../context/PortalContext";
import { LocationContext } from "../../context/LocationContext";

const Links = () => {
  const { setShowCalendar } = useContext(CalendarContext);
  const { setShowSettings } = useContext(WorkoutContext);
  const { setOutletName, setCloseBtnContent } = useContext(PortalContext);
  const { setCurrentLocation } = useContext(LocationContext);

  const location = useLocation();

  const handleNullify = () => {
    setCloseBtnContent(null);
    setShowSettings(null);
    setShowCalendar(false);
    setOutletName(null);
    setCurrentLocation(location);
  };

  return (
    <>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/");
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/store");
          }}
          to="store"
        >
          Store
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/myportal");
          }}
          to="myportal"
        >
          My Portal
        </NavLink>
      </li>
    </>
  );
};

export default Links;
