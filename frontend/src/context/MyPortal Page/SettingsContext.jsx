import React, { createContext, useState } from "react";

export const SettingsContext = createContext({});

export const SettingsContextProvider = ({ children }) => {
  const [optionChange, setOptionChange] = useState(null);

  return <SettingsContext.Provider value={{ optionChange, setOptionChange }}>{children}</SettingsContext.Provider>;
};
