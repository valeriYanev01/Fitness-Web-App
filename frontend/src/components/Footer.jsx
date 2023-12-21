import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Footer.css";
import Links from "./Navbar/Links";
import Modal from "./Modal";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <footer>
      <div className="disclaimer">
        <div>
          Disclaimer: <span className="disclaimer-underline">Educational App</span>
          <br />
          <p className="disclaimer-more">
            Click for{" "}
            <Link
              className="disclaimer-more-link"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              more
            </Link>
          </p>
          <p>This app was created by Valeri Yanev</p>
          <p>
            Check out my{" "}
            <Link className="disclaimer-more-link" to="https://valeriyanev.vercel.app/" target="blank">
              portfolio
            </Link>
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
      {createPortal(
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          The images used in this app are sourced from various places on the internet and are intended for illustrative
          purposes only. All images remain the property of their respective owners. The information provided in this app
          is for general informational purposes only and should not be considered as professional medical advice. It is
          not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your
          physician or other qualified health provider with any questions you may have regarding a medical condition.
          Users are advised to consult with a qualified healthcare professional before making any health-related
          decisions based on the information provided in this app.
        </Modal>,
        document.getElementById("disclaimer-modal")
      )}
    </footer>
  );
};

export default Footer;
