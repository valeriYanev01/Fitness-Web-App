import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  return <LoginContext.Provider value={{ loggedIn, setLoggedIn, user }}>{children}</LoginContext.Provider>;
};
