import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

const Features = ({ image, content }) => {
  return (
    <div className="home-about-features">
      <div className="home-about-features-single">
        <img src={image} className="home-about-features-image" />
        <p>{content}</p>
      </div>
      <div className="home-about-features-link">
        <Link to="/">See More</Link>
      </div>
    </div>
  );
};

export default Features;
