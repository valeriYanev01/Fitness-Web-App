import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ChangeCreditentials.css";
import { SettingsContext } from "../../../context/MyPortal Page/SettingsContext";
import { LoginContext } from "../../../context/LoginContext";
import { AccountSettingsContext } from "../../../context/MyPortal Page/AccountSettingsContext";
import useLogout from "../../../hooks/useLogout";

const ChangeCreditentials = () => {
  const [username, setUsername] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [id, setId] = useState("");

  const { optionChange } = useContext(SettingsContext);
  const { error, setError } = useContext(AccountSettingsContext);
  const { loggedIn } = useContext(LoginContext);
  const logout = useLogout();

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      const { email } = JSON.parse(localStorage.getItem("user"));

      axios.get("http://localhost:6969/api/users/", { params: { email: email } }).then((data) => {
        setId(data.data.user._id);
      });
    }
  }, []);

  const handleChangeUsername = () => {
    if (loggedIn) {
      axios
        .patch("http://localhost:6969/api/users/changeUsername", { username: username }, { params: { _id: id } })
        .catch((err) => {
          setError(err.response.data.error);
        });
    }
  };

  const handleChangeEmail = () => {
    axios
      .patch(
        "http://localhost:6969/api/users/changeEmail",
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
        "http://localhost:6969/api/users/changePassword",
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

  return (
    <div className="myportal-account-change-creditentials">
      {optionChange == "username" ? (
        <form>
          <label>New Username:</label>
          <input name="username-settings" onChange={(e) => setUsername(e.target.value)} />
          <div
            onClick={() => {
              handleChangeUsername();
              setTimeout(() => {
                navigate("/myportal");
              }, 3000);
            }}
          >
            Change
          </div>
          <div>{error}</div>
        </form>
      ) : optionChange == "email" ? (
        <form>
          <div>
            <label>Old Email:</label>
            <input name="old-email-settings" onChange={(e) => setOldEmail(e.target.value)} />
          </div>
          <div>
            <label>New Email:</label>
            <input name="new-email-settings" onChange={(e) => setNewEmail(e.target.value)} />
          </div>
          <div>
            <label>Confirm New Email:</label>
            <input name="new-email-confirm-settings" onChange={(e) => setConfirmNewEmail(e.target.value)} />
          </div>
          <div onClick={handleChangeEmail}>Change</div>
          <p>
            After You successfully change your email you will be logged out and will need to log in with the new email!
          </p>
          <div>{error}</div>
        </form>
      ) : optionChange == "password" ? (
        <form>
          <div>
            <label>Old Password:</label>
            <input name="old-password-settings" onChange={(e) => setOldPassword(e.target.value)} />
          </div>
          <div>
            <label>New Password:</label>
            <input name="new-password-settings" onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <div>
            <label>Confirm New Password:</label>
            <input name="new-password-confirm-settings" onChange={(e) => setConfirmNewPassword(e.target.value)} />
          </div>
          <div onClick={handleChangePassword}>Change</div>
          <p>
            After You successfully change your password you will be logged out and will need to log in with the new
            password!
          </p>
          <div>{error}</div>
        </form>
      ) : null}
    </div>
  );
};

export default ChangeCreditentials;
