import React, { useState } from "react";

const SingleProductCapsule = ({ name, img, caps, price }) => {
  return (
    <div>
      <span>{name}</span>
      <img src={`/Images/store/${img}`} className="single-product-img" />
      <span>Caps: {caps}</span>
      <span>Price: {price} EUR</span>
      <div>Add to Basket</div>
    </div>
  );
};

export default SingleProductCapsule;
