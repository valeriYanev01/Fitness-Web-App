import React, { useContext } from "react";
import SidePanel from "../components/storeComponents/SidePanel";
import Products from "../components/storeComponents/Products";
import "./Store.css";
import ProductTypeContext from "../context/Store Page/ProductTypeContext";

const Store = () => {
  const { type } = useContext(ProductTypeContext);
  console.log(type);

  return (
    <div className="store-page">
      <SidePanel />
      <Products />
    </div>
  );
};

export default Store;
