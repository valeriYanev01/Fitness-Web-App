import React, { useState, useContext } from "react";
import axios from "axios";

import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { setLoggedIn } = useContext(LoginContext);

  const login = () => {
    axios
      .post("http://localhost:6969/api/users/login", { email, password })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
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
          <label>Email Address:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <br />
        <div className="login-password-container">
          <label>Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
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
