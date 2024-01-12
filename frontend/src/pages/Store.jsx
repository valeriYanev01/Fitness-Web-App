import React from "react";
import SidePanel from "../components/storeComponents/SidePanel";
import Products from "../components/storeComponents/Products";
import "./Store.css";

const Store = () => {
  return (
    <div className="store-page">
      <SidePanel />
      <Products />
    </div>
  );
};

export default Store;
