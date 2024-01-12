import React, { useContext } from "react";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";
import "./Products.css";
import Bcaa from "./Bcaa";
import Protein from "./Protein";
import Carbohydrate from "./Carbohydrate";
import Creatine from "./Creatine";
import Minerals from "./Minerals";
import Vitamins from "./Vitamins";

const Products = () => {
  const { type } = useContext(ProductTypeContext);

  return (
    <div className="products">
      {type == "protein" ? (
        <Protein />
      ) : type == "bcaa" ? (
        <Bcaa />
      ) : type == "carbohydrate" ? (
        <Carbohydrate />
      ) : type == "creatine" ? (
        <Creatine />
      ) : type == "minerals" ? (
        <Minerals />
      ) : type == "vitamins" ? (
        <Vitamins />
      ) : (
        ""
      )}
    </div>
  );
};

export default Products;
