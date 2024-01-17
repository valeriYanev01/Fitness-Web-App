import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useLogout from "../../hooks/useLogout";
import "./Panel.css";
import { LoginContext } from "../../context/LoginContext";
import { PortalContext } from "../../context/MyPortal Page/PortalContext";
import { WorkoutContext } from "../../context/MyPortal Page/WorkoutContext";
import { CalendarContext } from "../../context/MyPortal Page/CalendarContext";
import { LocationContext } from "../../context/MyPortal Page/LocationContext";
import { AccountSettingsContext } from "../../context/MyPortal Page/AccountSettingsContext";

const Panel = ({ showCalculator, setShowCalculator, setCloseBtnStyle }) => {
  const { loggedIn } = useContext(LoginContext);
  const { setOutletName, setCloseBtnContent } = useContext(PortalContext);
  const { setShowSettings } = useContext(WorkoutContext);
  const { showCalendar, setShowCalendar, setWorkoutDate } = useContext(CalendarContext);
  const { setCurrentLocation } = useContext(LocationContext);
  const { setShowAccountSettings } = useContext(AccountSettingsContext);

  const username = useUser();
  const logout = useLogout();

  return (
    <div className="myportal-dashboard">
      {loggedIn ? (
        <div>
          <h2 className="myportal-dashboard-greet">Hello, {username}</h2>
          <div>
            <ul className="myportal-dashboard-links">
              <li>
                <Link
                  className={showCalendar ? "myportal-dashboard-selected" : ""}
                  onClick={() => {
                    setOutletName("Workouts");
                    setShowCalendar(true);
                    setShowAccountSettings(false);
                    setShowCalculator(false);
                    setCloseBtnContent(<span>&times;</span>);
                    setCloseBtnStyle("");
                    setWorkoutDate(new Date());
                    setShowSettings("Show Workout");
                    setCurrentLocation("/myportal/workouts");
                  }}
                  to="workouts"
                >
                  Workouts <span className="second-arrow"></span>
                </Link>
              </li>
              <li>
                <Link
                  className={showCalculator ? "myportal-dashboard-selected" : ""}
                  onClick={() => {
                    setOutletName("Calculator");
                    setShowCalendar(false);
                    setShowAccountSettings(false);
                    setShowCalculator(true);
                    setCloseBtnContent(<span>&times;</span>);
                    setCloseBtnStyle("");
                    setShowSettings("Show Calculator");
                    setCurrentLocation("/myportal/bmi-calculator");
                  }}
                  to="bmi-calculator"
                >
                  BMI Calculator <span className="second-arrow"></span>
                </Link>
              </li>
            </ul>

            <Link className="myportal-account-settings" to="account">
              <div
                className="myportal-account-settings-creditentials"
                onClick={() => {
                  setOutletName("Change Account Settings");
                  setShowCalculator(false);
                  setShowCalendar(false);
                  setShowAccountSettings(true);
                  setCloseBtnContent(<span>&times;</span>);
                  setShowSettings(null);
                  setCloseBtnStyle("");
                  setCurrentLocation("/myportal/account");
                }}
              >
                Change Account Settings
              </div>
              <div className="myportal-account-settings-logout" onClick={logout}>
                Logout
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          You need to be logged in to use this page!{" "}
          <span>
            <Link to="/account/login">Login</Link>
          </span>{" "}
        </div>
      )}
    </div>
  );
};

export default Panel;
