import React, { useContext, useEffect } from "react";
import SidePanel from "../components/storeComponents/SidePanel";
import "./Store.css";
import { Outlet } from "react-router-dom";
import ProductTypeContext from "../context/Store Page/ProductTypeContext";
import { LocationContext } from "../context/MyPortal Page/LocationContext";

const Store = () => {
  const { type, setType } = useContext(ProductTypeContext);

  const { currentLocation } = useContext(LocationContext);

  useEffect(() => {
    const storedType = localStorage.getItem("type");
    if (storedType) setType(storedType);
  }, [currentLocation]);

  return (
    <div className="store-page">
      <SidePanel />
      {!type ? (
        <div className="store-introduction">
          Welcome to our gym supplements store, your one-stop destination for premium fitness nutrition. Elevate your
          workout experience with our carefully curated selection of high-quality supplements, designed to fuel your
          performance, support muscle growth, and enhance recovery. Achieve your fitness goals with confidence, as we
          prioritize excellence in every product we offer. Your journey to a stronger, healthier you starts here!
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Store;
