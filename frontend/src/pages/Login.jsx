import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const { setLoggedIn } = useContext(LoginContext);

  const URL = import.meta.env.VITE_URL;

  const login = () => {
    setLoginError(null);
    axios
      .post(`${URL}users/login`, { email, password })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/myportal");
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoginError(err.response.data.error);
      });
  };

  return (
    <div
      className="login"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          login();
        }
      }}
    >
      <h2 className="login-heading">Login</h2>
      <div>
        <div className="login-email-container">
          <label id="email">Email Address:</label>
          <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <br />
        <div className="login-password-container">
          <label id="password">Password:</label>
          <input id="password" onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <p className="login-error">{loginError}</p>
        <br />
        <span className="login-button" onClick={login}>
          Login
        </span>
      </div>
    </div>
  );
};

export default Login;
