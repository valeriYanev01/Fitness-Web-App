import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkoutCalendar from "../components/portalComponents/WorkoutCalendar";
import CreateWorkout from "../components/portalComponents/CreateWorkout";
import WorkoutsFetch from "../components/portalComponents/WorkoutsFetch";
import BMICalculator from "../components/portalComponents/BMICalculator";
import BMIResult from "../components/portalComponents/BMIResult";
import Panel from "../components/portalComponents/Panel";
import AccountSettings from "../components/portalComponents/Account/AccountSettings";
import ChangeCredentials from "../components/portalComponents/Account/ChangeCredentials";
import { PortalContext } from "../context/MyPortal Page/PortalContext";
import { WorkoutContext } from "../context/MyPortal Page/WorkoutContext";
import { CalendarContext } from "../context/MyPortal Page/CalendarContext";
import { CalculatorContext } from "../context/MyPortal Page/CalculatorContext";
import { LocationContext } from "../context/MyPortal Page/LocationContext";
import { AccountSettingsContext } from "../context/MyPortal Page/AccountSettingsContext";
import { LoginContext } from "../context/LoginContext";
import "./MyPortal.css";

const MyPortal = () => {
  const [closeBtnStyle, setCloseBtnStyle] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [usUnits, setUsUnits] = useState(false);
  const [metricUnits, setMetricUnits] = useState(true);
  const [username, setUsername] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const { outletName, setOutletName, closeBtnContent, setCloseBtnContent } = useContext(PortalContext);
  const { showSettings, setShowSettings } = useContext(WorkoutContext);
  const { showCalendar, setShowCalendar } = useContext(CalendarContext);
  const { result } = useContext(CalculatorContext);
  const { currentLocation } = useContext(LocationContext);
  const { showAccountSettings, setShowAccountSettings } = useContext(AccountSettingsContext);
  const { user } = useContext(LoginContext);

  useEffect(() => {
    if (user) {
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

      if (currentLocation === "/myportal/account") {
        const storedOutletName = localStorage.getItem("outlet_name");
        const storedCloseBtnContent = localStorage.getItem("close_button_content");
        const storedShowSettings = localStorage.getItem("settings_visibility");
        const storedShowAccount = localStorage.getItem("account_visibility");

        if (storedOutletName) setOutletName(storedOutletName);
        if (storedCloseBtnContent) setCloseBtnContent(<span>&times;</span>);
        if (storedShowSettings) setShowSettings("Change Credentials");
        if (storedShowAccount) setShowAccountSettings(true);
        setOutletName("Change Account Settings");
      }
    }
  }, [currentLocation]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("outlet_name", outletName);
      localStorage.setItem("close_button_content", JSON.stringify(closeBtnContent));
      localStorage.setItem("settings_visibility", showSettings);
      localStorage.setItem("calendar_visibility", showCalendar);
      localStorage.setItem("calculator_visibility", showCalculator);
      localStorage.setItem("account_visibility", showAccountSettings);
    }
  }, [closeBtnContent, showSettings, outletName, currentLocation]);

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
        {showAccountSettings && (
          <AccountSettings
            setUsername={setUsername}
            setOldEmail={setOldEmail}
            setNewEmail={setNewEmail}
            setConfirmNewEmail={setConfirmNewEmail}
            setOldPassword={setOldPassword}
            setNewPassword={setNewPassword}
            setConfirmNewPassword={setConfirmNewPassword}
          />
        )}
        {!showCalendar && !showCalculator && !showAccountSettings && user && <div>Select a feature from the menu</div>}

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
              setShowAccountSettings(false);
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
        ) : showSettings === "Change Credentials" ? (
          <ChangeCredentials
            setUsername={setUsername}
            username={username}
            setOldEmail={setOldEmail}
            oldEmail={oldEmail}
            setNewEmail={setNewEmail}
            newEmail={newEmail}
            setConfirmNewEmail={setConfirmNewEmail}
            confirmNewEmail={confirmNewEmail}
            setOldPassword={setOldPassword}
            oldPassword={oldPassword}
            setNewPassword={setNewPassword}
            newPassword={newPassword}
            setConfirmNewPassword={setConfirmNewPassword}
            confirmNewPassword={confirmNewPassword}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MyPortal;
