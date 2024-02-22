import React from "react";
import "./AboutFeatures.css";

const AboutFeatures = ({ title, description }) => {
  return (
    <div className="about-features-container">
      <h3 className="about-features-heading">{title}</h3>
      <div className="about-feature">
        <div className="about-feature-description-container">
          <p className="about-feature-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
