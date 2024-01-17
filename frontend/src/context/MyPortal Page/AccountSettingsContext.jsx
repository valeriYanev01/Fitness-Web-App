import React, { createContext, useState } from "react";

export const AccountSettingsContext = createContext({});

export const AccountSettingsContextProvider = ({ children }) => {
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  return (
    <AccountSettingsContext.Provider
      value={{ showAccountSettings, setShowAccountSettings, username, setUsername, error, setError }}
    >
      {children}
    </AccountSettingsContext.Provider>
  );
};
