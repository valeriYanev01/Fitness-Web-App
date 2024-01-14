import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleProductCapsule = ({ name, img, caps, price }) => {
  return (
    <Link>
      <span>{name}</span>
      <img src={`/Images/store/${img}`} className="single-product-img" />
      <span>Caps: {caps}</span>
      <span>Price: {price} EUR</span>
      <div>Add to Basket</div>
    </Link>
  );
};

export default SingleProductCapsule;
