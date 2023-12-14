import React from "react";
import { Link } from "react-router-dom";

const Price = ({ cName, name, price, content, link }) => {
  return (
    <div className={`home-section-prices-${cName} home-section-prices-flex`}>
      <h3>{name}</h3>
      <ul>
        <li>BGN {price}/month</li>
        <li>24/7 Access to {content}</li>
      </ul>
      <Link to={link} className="home-section-prices-link">
        Check offer
      </Link>
    </div>
  );
};

export default Price;
