import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePanel.css";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";

const SidePanel = () => {
  const { setType } = useContext(ProductTypeContext);

  const navigate = useNavigate();

  return (
    <div className="store-side-panel">
      <div
        className="store-side-panel-item"
        onClick={() => {
          navigate("protein");
          setType("protein");
        }}
      >
        Proteins
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          navigate("creatine");
          setType("creatine");
        }}
      >
        Creatine
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          navigate("bcaa");
          setType("bcaa");
        }}
      >
        BCAA
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("carbohydrate");
          navigate("carbohydrate");
        }}
      >
        Carbohydrates
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("vitamins");
          navigate("vitamins");
        }}
      >
        Vitamins
      </div>
      <div
        className="store-side-panel-item"
        onClick={() => {
          setType("minerals");
          navigate("minerals");
        }}
      >
        Minerals
      </div>
    </div>
  );
};

export default SidePanel;
