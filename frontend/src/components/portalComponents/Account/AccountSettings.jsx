import React, { useContext } from "react";
import "./AccountSettings.css";
import { WorkoutContext } from "../../../context/MyPortal Page/WorkoutContext";
import { SettingsContext } from "../../../context/MyPortal Page/SettingsContext";
import { AccountSettingsContext } from "../../../context/MyPortal Page/AccountSettingsContext";
import { LocationContext } from "../../../context/MyPortal Page/LocationContext";

const AccountSettings = ({
  setUsername,
  setOldEmail,
  setNewEmail,
  setConfirmNewEmail,
  setOldPassword,
  setNewPassword,
  setConfirmNewPassword,
}) => {
  const { setShowSettings } = useContext(WorkoutContext);
  const { optionChange, setOptionChange } = useContext(SettingsContext);
  const { setError } = useContext(AccountSettingsContext);
  const { setCurrentLocation } = useContext(LocationContext);

  const nullifyCredentialFields = () => {
    setUsername("");
    setOldEmail("");
    setNewEmail("");
    setConfirmNewEmail("");
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="myportal-changecredentials">
      <div className="myportal-changecredentials-description">
        From here You can change your email address, your password and your username. The username then will be shown
        across the page while you are logged in!
      </div>
      <div className="options-container">
        <div>
          <div
            className={`${optionChange == "username" ? "account-selected" : ""} myportal-changecredentials-option`}
            onClick={() => {
              setShowSettings("Change Credentials");
              setOptionChange("username");
              setError(null);
              nullifyCredentialFields();
              setCurrentLocation("/myportal/account/change-username");
            }}
          >
            Change Username <span className="second-arrow"></span>
          </div>
        </div>

        <div>
          <div
            className={`${optionChange == "email" ? "account-selected" : ""} myportal-changecredentials-option`}
            onClick={() => {
              setShowSettings("Change Credentials");
              setOptionChange("email");
              setError(null);
              nullifyCredentialFields();
            }}
          >
            Change Email <span className="second-arrow"></span>
          </div>
        </div>

        <div>
          <div
            className={`${optionChange == "password" ? "account-selected" : ""} myportal-changecredentials-option`}
            onClick={() => {
              setShowSettings("Change Credentials");
              setOptionChange("password");
              setError(null);
              nullifyCredentialFields();
            }}
          >
            Change Password <span className="second-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
