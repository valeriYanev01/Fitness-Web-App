import React, { useContext, useState } from "react";
import "./SidePanel.css";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";

const SidePanel = () => {
  const { setType } = useContext(ProductTypeContext);

  return (
    <div className="store-side-panel">
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("protein");
        }}
      >
        Proteins
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("creatine");
        }}
      >
        Creatine
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("bcaa");
        }}
      >
        BCAA
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("vitamins");
        }}
      >
        Vitamins
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("minerals");
        }}
      >
        Minerals
      </div>
    </div>
  );
};

export default SidePanel;
