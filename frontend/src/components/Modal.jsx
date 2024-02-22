import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    });
  }, []);

  if (!open) return null;

  return (
    <div className="modal-container" onKeyDown={(e) => console.log(e)}>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        {children}
        <div className="modal-button-container">
          <span className="modal-button" onClick={onClose}>
            Okay
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
