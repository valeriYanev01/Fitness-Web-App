import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`scrollToTop ${visible ? "visible" : ""}`}
    >
      <div className="arrow-container">
        <img className="arrow" src="/svg/upArrow.svg" />
      </div>
    </div>
  );
};

export default ScrollToTop;
