import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePanel.css";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";
import Basket from "./Basket";

const SidePanel = () => {
  const { setType, type } = useContext(ProductTypeContext);

  const navigate = useNavigate();

  return (
    <div className="store-side-panel">
      <span
        className={`${type == "protein" ? "activeProduct " : ""}store-side-panel-item`}
        onClick={() => {
          navigate("protein");
          setType("protein");
        }}
      >
        Proteins
      </span>
      <span
        className={`${type == "creatine" ? "activeProduct " : ""}store-side-panel-item`}
        onClick={() => {
          navigate("creatine");
          setType("creatine");
        }}
      >
        Creatine
      </span>
      <span
        className={`${type == "bcaa" ? "activeProduct " : ""}store-side-panel-item`}
        onClick={() => {
          navigate("bcaa");
          setType("bcaa");
        }}
      >
        BCAA
      </span>
      <span
        className={`${type == "carbohydrate" ? "activeProduct " : ""}store-side-panel-item`}
        onClick={() => {
          setType("carbohydrate");
          navigate("carbohydrate");
        }}
      >
        Carbohydrates
      </span>
      <span
        className={`${type == "vitamins" ? "activeProduct " : ""}store-side-panel-item`}
        onClick={() => {
          setType("vitamins");
          navigate("vitamins");
        }}
      >
        Vitamins
      </span>
      <span
        className={`${type == "minerals" ? "activeProduct " : ""}store-side-panel-item`}
        onClick={() => {
          setType("minerals");
          navigate("minerals");
        }}
      >
        Minerals
      </span>
      <Basket />
    </div>
  );
};

export default SidePanel;
