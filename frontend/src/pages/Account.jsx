import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { LoginContext } from "../context/LoginContext";
import "./Account.css";

const Account = () => {
  const [sign, setSign] = useState(false);

  const { loggedIn } = useContext(LoginContext);

  return (
    <div className="account-page">
      <img src="/Images/Accound-Background.jpg" className="account-page-bg" />
      <div className="account-page-container">
        {loggedIn ? (
          <div>
            <p>Logged In</p>
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
