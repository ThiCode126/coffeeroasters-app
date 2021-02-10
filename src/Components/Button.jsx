import React from "react";

const Button = ({ openModal }) => {
  return openModal ? (
    <div onClick={openModal} className="btn create-btn">
      Create your plan
    </div>
  ) : (
    <div className="btn create-btn">Create your plan</div>
  );
};

export default Button;
