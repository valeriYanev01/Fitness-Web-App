import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyPortal.css";
import WorkoutCalendar from "../components/portalComponents/WorkoutCalendar";
import CreateWorkout from "../components/portalComponents/CreateWorkout";
import WorkoutsFetch from "../components/portalComponents/WorkoutsFetch";
import BMICalculator from "../components/portalComponents/BMICalculator";
import BMIResult from "../components/portalComponents/BMIResult";
import Panel from "../components/portalComponents/Panel";
import { PortalContext } from "../context/MyPortal Page/PortalContext";
import { WorkoutContext } from "../context/MyPortal Page/WorkoutContext";
import { CalendarContext } from "../context/MyPortal Page/CalendarContext";
import { CalculatorContext } from "../context/MyPortal Page/CalculatorContext";
import { LocationContext } from "../context/MyPortal Page/LocationContext";

const MyPortal = () => {
  const [closeBtnStyle, setCloseBtnStyle] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [usUnits, setUsUnits] = useState(false);
  const [metricUnits, setMetricUnits] = useState(true);

  const { outletName, setOutletName, closeBtnContent, setCloseBtnContent } = useContext(PortalContext);
  const { showSettings, setShowSettings } = useContext(WorkoutContext);
  const { showCalendar, setShowCalendar } = useContext(CalendarContext);
  const { result } = useContext(CalculatorContext);
  const { currentLocation } = useContext(LocationContext);

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

  return (
    <div className="myportal-page">
      <Panel
        showCalculator={showCalculator}
        setShowCalculator={setShowCalculator}
        setCloseBtnStyle={setCloseBtnStyle}
      />

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
