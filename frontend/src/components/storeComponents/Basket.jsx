import React, { useContext } from "react";
import "./Basket.css";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basketItems } = useContext(ProductTypeContext);

  return (
    <div className="store-basket">
      <Link to="/checkout">
        <img src="/svg/basket.svg" />
      </Link>
      <span>{basketItems.length}</span>
    </div>
  );
};

export default Basket;
