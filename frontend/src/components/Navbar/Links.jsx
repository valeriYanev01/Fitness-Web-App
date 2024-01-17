import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CalendarContext } from "../../context/MyPortal Page/CalendarContext";
import { WorkoutContext } from "../../context/MyPortal Page/WorkoutContext";
import { PortalContext } from "../../context/MyPortal Page/PortalContext";
import { LocationContext } from "../../context/MyPortal Page/LocationContext";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";
import { AccountSettingsContext } from "../../context/MyPortal Page/AccountSettingsContext";

const Links = () => {
  const { setShowCalendar } = useContext(CalendarContext);
  const { setShowSettings } = useContext(WorkoutContext);
  const { setOutletName, setCloseBtnContent } = useContext(PortalContext);
  const { setCurrentLocation } = useContext(LocationContext);
  const { setType } = useContext(ProductTypeContext);
  const { setShowAccountSettings } = useContext(AccountSettingsContext);

  const location = useLocation();

  const handleNullify = () => {
    setType("");
    setCloseBtnContent(null);
    setShowSettings(null);
    setShowCalendar(false);
    setShowAccountSettings(false);
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
