import React, { useContext } from "react";
import SidePanel from "../components/storeComponents/SidePanel";
import { Outlet } from "react-router-dom";
import { ProductTypeContext } from "../context/Store Page/ProductTypeContext";
import "./store.css"; 

const Store = () => {
  const { type } = useContext(ProductTypeContext);

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
