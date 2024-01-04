import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CalendarContext } from "../../context/CalendarContext";
import { WorkoutContext } from "../../context/WorkoutContext";
import { PortalContext } from "../../context/PortalContext";

const Links = () => {
  const { setShowCalendar } = useContext(CalendarContext);
  const { setShowSettings } = useContext(WorkoutContext);
  const { setOutletName, setCloseBtnContent } = useContext(PortalContext);

  const handleNullify = () => {
    setOutletName(null);
    setCloseBtnContent(null);
    setShowSettings(null);
    setShowCalendar(false);
  };

  return (
    <>
      <li>
        <NavLink onClick={handleNullify} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleNullify} to="store">
          Store
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleNullify} to="myportal">
          My Portal
        </NavLink>
      </li>
    </>
  );
};

export default Links;
