import React, { createContext, useState } from "react";

export const PortalContext = createContext();

export const PortalContextProvider = ({ children }) => {
  const [outletName, setOutletName] = useState("");
  const [closeBtnContent, setCloseBtnContent] = useState(null);

  return (
    <PortalContext.Provider value={{ outletName, setOutletName, closeBtnContent, setCloseBtnContent }}>
      {children}
    </PortalContext.Provider>
  );
};
