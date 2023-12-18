import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Links from "./Navbar/Links";

const Footer = () => {
  return (
    <footer>
      <div className="disclaimer">
        <div>
          Disclaimer: Educational App
          <br />
          <span className="disclaimer-more">
            Click for <Link className="disclaimer-more-link">more</Link>
          </span>
          <p>This app was created by Valeri Yanev</p>
          <p>
            Check out my <Link className="disclaimer-more-link">portfolio</Link>
          </p>
        </div>
      </div>
      <div className="contacts">
        <p className="contact1 contacts-padding">LinkedIn:</p>
        <p className="contact2 contacts-padding">Github:</p>
        <p className="contact3 contacts-padding">Gmail:</p>

        <Link target="blank" to="https://www.linkedin.com/in/valeri-yanev-65bbb9277/">
          <img className="link1" src="/Svg/linkedin.svg" />
        </Link>
        <Link target="blank" to="https://github.com/valeriYanev01/Fitness-Web-App">
          <img className="link2" src="/Svg/github2.svg" />
        </Link>
        <Link to="mailto:valeri.t.yanev@gmail.com">
          <img className="link3" src="/Svg/gmail.svg" />
        </Link>
      </div>

      <ul className="links">
        <Links />
      </ul>
    </footer>
  );
};

export default Footer;
