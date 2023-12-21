import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import { LoginContext } from "../context/LoginContext";
import Login from "./Login";
import Signup from "./Signup";

const Account = () => {
  const [sign, setSign] = useState(false);

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <div className="account-page">
      <img src="/Images/Accound-Background.jpg" className="account-page-bg" />
      <div className="account-page-container">
        {loggedIn ? (
          <div>
            <p>Logged In</p>
            <span onClick={logout}>Logout</span>
          </div>
        ) : !sign ? (
          <div>
            <Login />
            <Link to="signup">
              <span className="account-page-login-create-account" onClick={() => setSign(true)}>
                Don't have an account? Create one
              </span>
            </Link>
          </div>
        ) : (
          <div>
            <Signup />
            <Link to="login">
              <span className="account-page-login-create-account" onClick={() => setSign(false)}>
                Already have an account? Log In
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
