import React from "react";
import "./SingleProductWeight.css";

const SingleProductWeight = ({ name, type, weight, price, img, taste }) => {
  return (
    <div>
      <span>{name}</span>
      <img src={`Images/store/${img}`} className="single-product-img" />
      <span>Weight: {weight} g</span>
      <span>Taste: {taste} </span>
      <span>Price: {price} EUR</span>
      <div>Add to Basket</div>
    </div>
  );
};

export default SingleProductWeight;
