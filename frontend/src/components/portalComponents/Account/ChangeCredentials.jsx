import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SettingsContext } from "../../../context/MyPortal Page/SettingsContext";
import { LoginContext } from "../../../context/LoginContext";
import { AccountSettingsContext } from "../../../context/MyPortal Page/AccountSettingsContext";
import useLogout from "../../../hooks/useLogout";
import "./Changecredentials.css";

const ChangeCredentials = ({
  username,
  setUsername,
  oldEmail,
  setOldEmail,
  newEmail,
  setNewEmail,
  confirmNewEmail,
  setConfirmNewEmail,
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
}) => {
  const [id, setId] = useState("");

  const { optionChange } = useContext(SettingsContext);
  const { error, setError } = useContext(AccountSettingsContext);
  const { loggedIn } = useContext(LoginContext);
  const logout = useLogout();

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      const { email } = JSON.parse(localStorage.getItem("user"));

      axios.get("https://backend-ten-bice.vercel.app/api/users/", { params: { email: email } }).then((data) => {
        setId(data.data.user._id);
      });
    }
  }, [loggedIn]);

  const handleChangeUsername = () => {
    if (loggedIn) {
      axios
        .patch(
          "https://backend-ten-bice.vercel.app/api/users/changeUsername",
          { username: username },
          { params: { _id: id } }
        )
        .then(() => {
          setUsername("");
          navigate("/myportal/account");
        })
        .catch((err) => {
          setError(err.response.data.error);
        });
    }
  };

  const handleChangeEmail = () => {
    axios
      .patch(
        "https://backend-ten-bice.vercel.app/api/users/changeEmail",
        {
          oldEmail: oldEmail,
          newEmail: newEmail,
          confirmNewEmail: confirmNewEmail,
        },
        { params: { _id: id } }
      )
      .then(() => {
        logout();
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  const handleChangePassword = () => {
    axios
      .patch(
        "https://backend-ten-bice.vercel.app/api/users/changePassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword,
        },
        {
          params: {
            _id: id,
          },
        }
      )
      .then(() => {
        logout();
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  const chancelUsername = () => {
    setUsername("");
    setError("");
  };

  const cancelEmail = () => {
    setOldEmail("");
    setNewEmail("");
    setConfirmNewEmail("");
    setError("");
  };

  const cancelPassword = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  return (
    <div className="myportal-account-change-credentials">
      {optionChange == "username" ? (
        <div className="change-credentials-info">
          <div className="change-credentials-username-container">
            <label htmlFor="username-settings">New Username:</label>
            <input
              value={username}
              className="change-old"
              id="username-settings"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <span className="change-credentials-button" onClick={handleChangeUsername}>
            Change
          </span>
          <span className="change-credentials-button" onClick={chancelUsername}>
            Cancel
          </span>
          <div>{error}</div>
        </div>
      ) : optionChange == "email" ? (
        <div className="change-credentials-info">
          <div>
            <label htmlFor="old-email-settings">Old Email:</label>
            <input
              type="email"
              className="change-old"
              id="old-email-settings"
              value={oldEmail}
              onChange={(e) => setOldEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="new-email-settings">New Email:</label>
            <input
              type="email"
              className="change-new"
              id="new-email-settings"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="new-email-confirm-settings">Confirm New Email:</label>
            <input
              type="email"
              className="change-new-confirm"
              id="new-email-confirm-settings"
              value={confirmNewEmail}
              onChange={(e) => setConfirmNewEmail(e.target.value)}
            />
          </div>
          <span className="change-credentials-button" onClick={handleChangeEmail}>
            Change
          </span>
          <span className="change-credentials-button" onClick={cancelEmail}>
            Cancel
          </span>
          <p>
            After You successfully change your email you will be logged out and will need to log in with the new email!
          </p>
          <div>{error}</div>
        </div>
      ) : optionChange == "password" ? (
        <div className="change-credentials-info">
          <div>
            <label htmlFor="old-password-settings">Old Password:</label>
            <input
              type="password"
              className="change-old"
              id="old-password-settings"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="new-password-settings">New Password:</label>
            <input
              type="password"
              className="change-new"
              id="new-password-settings"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="new-password-confirm-settings">Confirm New Password:</label>
            <input
              type="password"
              className="change-new-confirm"
              id="new-password-confirm-settings"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <span className="change-credentials-button" onClick={handleChangePassword}>
            Change
          </span>
          <span className="change-credentials-button" onClick={cancelPassword}>
            Cancel
          </span>
          <p>
            After You successfully change your password you will be logged out and will need to log in with the new
            password!
          </p>
          <div>{error}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ChangeCredentials;
