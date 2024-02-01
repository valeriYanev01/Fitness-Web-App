// ProductTypeContextProvider.js

import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../LoginContext";

export const ProductTypeContext = createContext();

export const ProductTypeContextProvider = ({ children }) => {
  const [type, setType] = useState(() => {
    const storedType = localStorage.getItem("type");
    return storedType ? storedType : "";
  });

  const [id, setId] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [basketItems, setBasketItems] = useState([]);
  const { loggedIn } = useContext(LoginContext);

  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    if (loggedIn) {
      const { email } = JSON.parse(localStorage.getItem("user"));
      axios
        .get(`${URL}users/`, { params: { email: email } })
        .then((response) => {
          setId(response.data.user._id);
          setBasketItems(response.data.user.basket);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setBasketItems([]);
    }
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem("type", type);
  }, [type]);

  return (
    <ProductTypeContext.Provider
      value={{
        type,
        setType,
        basketItems,
        setBasketItems,
        finalPrice,
        setFinalPrice,
        id,
      }}
    >
      {children}
    </ProductTypeContext.Provider>
  );
};
