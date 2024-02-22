import React, { useContext } from "react";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";
import { Link } from "react-router-dom";
import "./Basket.css";

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
