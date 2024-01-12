import React from "react";
import SingleProductCapsule from "./SingleProductCapsule";

const Vitamins = () => {
  return (
    <div className="products-grid">
      <SingleProductCapsule name="Omega-3" caps={60} price={6} img="vitamin/omega-3-90caps.jpg" />
      <SingleProductCapsule name="Vitamin D3" caps={60} price={6} img="vitamin/vitamin-d3.jpg" />
      <SingleProductCapsule name="Vitamin B12" caps={60} price={6} img="vitamin/vitamin-b12.jpg" />
      <SingleProductCapsule name="Vitamin C" caps={60} price={6} img="vitamin/vitamin-c.jpg" />
    </div>
  );
};

export default Vitamins;
