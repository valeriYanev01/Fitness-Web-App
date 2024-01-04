import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./MyPortal.css";
import { LoginContext } from "../context/LoginContext";
import { WorkoutContext } from "../context/WorkoutContext";
import { CalendarContext } from "../context/CalendarContext";
import useUser from "../hooks/useUser";
import WorkoutCalendar from "../components/portalComponents/WorkoutCalendar";
import CreateWorkout from "../components/portalComponents/CreateWorkout";
import WorkoutsFetch from "../components/portalComponents/WorkoutsFetch";
import { PortalContext } from "../context/PortalContext";

const MyPortal = () => {
  const [closeBtnStyle, setCloseBtnStyle] = useState("");

  const { loggedIn } = useContext(LoginContext);
  const { outletName, setOutletName, closeBtnContent, setCloseBtnContent } = useContext(PortalContext);
  const { showSettings, setShowSettings } = useContext(WorkoutContext);
  const { showCalendar, setShowCalendar } = useContext(CalendarContext);

  const greet = useUser();

  return (
    <div className="myportal-page">
      <div className="myportal-dashboard">
        {loggedIn ? (
          <>
            <h2 className="myportal-dashboard-greet">Hello {greet}</h2>
            <div>
              <ul className="myportal-dashboard-links">
                <li>
                  <Link
                    onClick={() => {
                      setOutletName("Workouts");
                      setShowCalendar(true);
                      setCloseBtnContent("Close");
                      setCloseBtnStyle("");
                    }}
                    to="workouts"
                  >
                    Workouts &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOutletName("Calculator");
                      setShowCalendar(false);
                      setCloseBtnContent("Close");
                      setCloseBtnStyle("");
                    }}
                    to="bmi-calculator"
                  >
                    BMI Calculator &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div>
            You need to be logged in to use this page!{" "}
            <span>
              <Link to="/account/login">Login</Link>
            </span>{" "}
          </div>
        )}
      </div>

      <div className="outlet">
        {showCalendar && <WorkoutCalendar />}

        <h2 className="myportal-outletName">{outletName}</h2>
        <Link to="/myportal">
          <span
            className={`${closeBtnStyle} myportal-closeBtn`}
            onClick={() => {
              setCloseBtnStyle("hideBtn");
              setOutletName(null);
              setCloseBtnContent(null);
              setShowSettings(null);
              setShowCalendar(false);
            }}
          >
            {closeBtnContent}
          </span>
        </Link>
      </div>

      <div className="myportal-settings">
        {showSettings === "Create Workout" ? (
          <CreateWorkout />
        ) : showSettings === "Show Workout" ? (
          <div>
            <WorkoutsFetch />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MyPortal;
