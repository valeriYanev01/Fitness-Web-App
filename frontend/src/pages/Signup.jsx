import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(null);

  const { setLoggedIn } = useContext(LoginContext);

  const navigate = useNavigate();

  const URL = import.meta.env.VITE_URL;

  const signup = () => {
    setSignupError(null);
    axios
      .post(`${URL}users/signup`, { email, password })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        setSignupError(err.response.data.error);
      });
  };

  return (
    <div
      className="signup"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          signup();
        }
      }}
    >
      <h2 className="signup-heading">Signup</h2>
      <div>
        <div className="signup-email-container">
          <label>Email Address:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <br />
        <div className="signup-password-container">
          <label>Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <br />
        <div className="signup-confirm-password-container">
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <p className="signup-error">{signupError}</p>
        <span className="signup-button" onClick={signup}>
          Sign up
        </span>
      </div>
    </div>
  );
};

export default Signup;
