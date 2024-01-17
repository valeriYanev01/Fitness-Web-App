import React, { useContext } from "react";
import "./AccountSettings.css";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../../../context/MyPortal Page/WorkoutContext";
import { SettingsContext } from "../../../context/MyPortal Page/SettingsContext";
import { AccountSettingsContext } from "../../../context/MyPortal Page/AccountSettingsContext";

const AccountSettings = () => {
  const { setShowSettings } = useContext(WorkoutContext);
  const { setOptionChange } = useContext(SettingsContext);
  const { setError } = useContext(AccountSettingsContext);

  return (
    <div className="myportal-changecreditentials">
      <div className="myportal-changecreditentials-description">
        From here You can change your email address, your password and your username. The username then will be shown
        across the page while you are logged in!
      </div>
      <div className="options-container">
        <p
          onClick={() => {
            setShowSettings("Change Creditentials");
            setOptionChange("username");
            setError(null);
          }}
        >
          <Link to="/myportal/account/change-username" className="myportal-changecreditentials-option">
            Change Username <span className="second-arrow"></span>
          </Link>
        </p>
        <p
          onClick={() => {
            setShowSettings("Change Creditentials");
            setOptionChange("email");
            setError(null);
          }}
        >
          <Link to="/myportal/account/change-email" className="myportal-changecreditentials-option">
            Change Email <span className="second-arrow"></span>
          </Link>
        </p>
        <p
          onClick={() => {
            setShowSettings("Change Creditentials");
            setOptionChange("password");
            setError(null);
          }}
        >
          <Link to="/myportal/account/change-password" className="myportal-changecreditentials-option">
            Change Password <span className="second-arrow"></span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
