import React from "react";
import Modal from "react-modal";
const Modals = ({ children, isOpen, onRequestClose }) => {
  const customStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      textAlign: "right",
      marginRight: "-50%",
      transform: "translate(-50%,-50%)",
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyle}
      >
        {children}
        <button className="btn btn-primary" onClick={onRequestClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Modals;
