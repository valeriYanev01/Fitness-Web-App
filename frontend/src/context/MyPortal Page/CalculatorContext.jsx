import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({ children }) => {
  const [result, setResult] = useState(null);
  const [bmiResultVisibility, setBmiResultVisibility] = useState(false);

  return (
    <CalculatorContext.Provider
      value={{
        result,
        setResult,
        bmiResultVisibility,
        setBmiResultVisibility,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
