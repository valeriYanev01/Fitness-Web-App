import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setLoggedIn(true);
    }
  }, []);

  return <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>{children}</LoginContext.Provider>;
};
