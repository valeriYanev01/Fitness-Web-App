import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePanel.css";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";

const SidePanel = () => {
  const { setType, type } = useContext(ProductTypeContext);

  const navigate = useNavigate();

  return (
    <div className="store-side-panel">
      <span
        className={`${type == "protein" ? "active " : ""}store-side-panel-item`}
        onClick={() => {
          navigate("protein");
          setType("protein");
        }}
      >
        Proteins
      </span>
      <span
        className={`${type == "creatine" ? "active " : ""}store-side-panel-item`}
        onClick={() => {
          navigate("creatine");
          setType("creatine");
        }}
      >
        Creatine
      </span>
      <span
        className={`${type == "bcaa" ? "active " : ""}store-side-panel-item`}
        onClick={() => {
          navigate("bcaa");
          setType("bcaa");
        }}
      >
        BCAA
      </span>
      <span
        className={`${type == "carbohydrate" ? "active " : ""}store-side-panel-item`}
        onClick={() => {
          setType("carbohydrate");
          navigate("carbohydrate");
        }}
      >
        Carbohydrates
      </span>
      <span
        className={`${type == "vitamins" ? "active " : ""}store-side-panel-item`}
        onClick={() => {
          setType("vitamins");
          navigate("vitamins");
        }}
      >
        Vitamins
      </span>
      <span
        className={`${type == "minerals" ? "active " : ""}store-side-panel-item`}
        onClick={() => {
          setType("minerals");
          navigate("minerals");
        }}
      >
        Minerals
      </span>
    </div>
  );
};

export default SidePanel;
