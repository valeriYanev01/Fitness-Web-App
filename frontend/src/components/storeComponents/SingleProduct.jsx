import React from "react";

const SingleProduct = ({ name, type, weight, quantity, price, img }) => {
  return (
    <div>
      <span>{name}</span>
      <span>Weight: {weight}</span>
      <img src={`Images/store/${img}.png`} className="single-product-img" />
      <span>In Stock: {quantity}</span>
      <span>{price} EUR</span>
      <div>Add to Basket</div>
    </div>
  );
};

export default SingleProduct;
