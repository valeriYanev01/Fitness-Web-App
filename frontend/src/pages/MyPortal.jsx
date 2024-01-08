import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyPortal.css";
import { LoginContext } from "../context/LoginContext";
import { WorkoutContext } from "../context/WorkoutContext";
import { CalendarContext } from "../context/CalendarContext";
import { PortalContext } from "../context/PortalContext";
import { LocationContext } from "../context/LocationContext";
import { CalculatorContext } from "../context/CalculatorContext";
import useUser from "../hooks/useUser";
import WorkoutCalendar from "../components/portalComponents/WorkoutCalendar";
import CreateWorkout from "../components/portalComponents/CreateWorkout";
import WorkoutsFetch from "../components/portalComponents/WorkoutsFetch";
import BMICalculator from "../components/portalComponents/BMICalculator";
import BMIResult from "../components/portalComponents/BMIResult";
import useLogout from "../hooks/useLogout";

const MyPortal = () => {
  const [closeBtnStyle, setCloseBtnStyle] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [usUnits, setUsUnits] = useState(false);
  const [metricUnits, setMetricUnits] = useState(true);

  const { loggedIn } = useContext(LoginContext);
  const { outletName, setOutletName, closeBtnContent, setCloseBtnContent } = useContext(PortalContext);
  const { showSettings, setShowSettings } = useContext(WorkoutContext);
  const { showCalendar, setShowCalendar } = useContext(CalendarContext);
  const { result } = useContext(CalculatorContext);
  const { setCurrentLocation, currentLocation } = useContext(LocationContext);

  const logout = useLogout();

  useEffect(() => {
    if (currentLocation === "/myportal/workouts") {
      const storedOutletName = localStorage.getItem("outlet_name");
      const storedCloseBtnContent = localStorage.getItem("close_button_content");
      const storedShowSettings = localStorage.getItem("settings_visibility");
      const storedShowCalendar = localStorage.getItem("calendar_visibility");

      if (storedOutletName) setOutletName(storedOutletName);
      if (storedCloseBtnContent) setCloseBtnContent(<span>&times;</span>);
      if (storedShowSettings) setShowSettings("Show Workout");
      if (storedShowCalendar) setShowCalendar(true);
      setOutletName("Workouts");
    }
    if (currentLocation === "/myportal/bmi-calculator") {
      const storedOutletName = localStorage.getItem("outlet_name");
      const storedCloseBtnContent = localStorage.getItem("close_button_content");
      const storedShowSettings = localStorage.getItem("settings_visibility");
      const storedShowCalculator = localStorage.getItem("calculator_visibility");

      if (storedOutletName) setOutletName(storedOutletName);
      if (storedCloseBtnContent) setCloseBtnContent(<span>&times;</span>);
      if (storedShowSettings) setShowSettings("Show Calculator");
      if (storedShowCalculator) setShowCalculator(true);
      setOutletName("Calculator");
    }
  }, [currentLocation]);

  useEffect(() => {
    localStorage.setItem("outlet_name", outletName);
    localStorage.setItem("close_button_content", JSON.stringify(closeBtnContent));
    localStorage.setItem("settings_visibility", showSettings);
    localStorage.setItem("calendar_visibility", showCalendar);
    localStorage.setItem("calculator_visibility", showCalculator);
  }, [closeBtnContent, showSettings, showCalculator, outletName, showCalculator]);

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
                    className={showCalendar ? "myportal-dashboard-selected" : ""}
                    onClick={() => {
                      setOutletName("Workouts");
                      setShowCalendar(true);
                      setShowCalculator(false);
                      setCloseBtnContent(<span>&times;</span>);
                      setCloseBtnStyle("");
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

              <div className="myportal-logout" onClick={logout}>
                Logout
              </div>
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
        {showCalculator && (
          <BMICalculator
            usUnits={usUnits}
            setUsUnits={setUsUnits}
            metricUnits={metricUnits}
            setMetricUnits={setMetricUnits}
          />
        )}
        {!showCalendar && !showCalculator && <div>Select a feature from the menu</div>}

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
              setShowCalculator(false);
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
          <WorkoutsFetch />
        ) : showSettings === "Show Calculator" ? (
          <BMIResult result={result} />
        ) : null}
      </div>
    </div>
  );
};

export default MyPortal;
