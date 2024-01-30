import { createContext, useState } from "react";

export const ChangeBgContext = createContext({});

export const ChangeBgContextProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState("");

  return <ChangeBgContext.Provider value={{ selectedItem, setSelectedItem }}>{children}</ChangeBgContext.Provider>;
};
