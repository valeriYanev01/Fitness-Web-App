import React from "react";
import "./AboutPrices.css";

const AboutPrices = ({ heading, price, benefits, description }) => {
  return (
    <div className="about-prices-container">
      <h3 className="about-prices-heading">{heading}</h3>
      <div className="price-and-benefits">
        <div className="price-container">
          <h3 className="about-prices-label">Price:</h3>
          <span className="about-prices-value">BGN {price}/month</span>
        </div>
        <div className="benefits-container">
          <h3 className="about-prices-label">Benefits:</h3>
          <span className="about-prices-value">{benefits}</span>
        </div>
      </div>
      <h3 className="about-prices-subheading">Why {heading}</h3>
      <p className="about-prices-description">{description}</p>
    </div>
  );
};

export default AboutPrices;
