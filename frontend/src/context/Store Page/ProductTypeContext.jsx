import React, { createContext, useState } from "react";

export const ProductTypeContext = createContext();

export const ProductTypeContextProvider = ({ children }) => {
  const [type, setType] = useState("protein");

  return <ProductTypeContext.Provider value={{ type, setType }}>{children}</ProductTypeContext.Provider>;
};

export default ProductTypeContext;
