import React from "react";
import SingleProductCapsule from "./SingleProductCapsule";

const Minerals = () => {
  return (
    <div className="products-grid">
      <SingleProductCapsule name="Boron" caps={60} price={6} img="minerals/bor.jpg" />
      <SingleProductCapsule name="Chromium" caps={60} price={6} img="minerals/chromium.jpg" />
      <SingleProductCapsule name="Electrolyte" caps={60} price={6} img="minerals/electrolyte.jpg" />
      <SingleProductCapsule name="Iron" caps={60} price={6} img="minerals/iron.jpg" />
      <SingleProductCapsule name="Zinc" caps={60} price={6} img="minerals/zinc.jpg" />
    </div>
  );
};

export default Minerals;
