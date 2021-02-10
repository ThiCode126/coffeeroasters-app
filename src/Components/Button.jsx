import React from "react";

const Button = ({ openModal, isDisabled }) => {
  return openModal ? (
    <div
      onClick={isDisabled ? () => {} : openModal}
      className={`btn create-btn${isDisabled ? " disabled" : ""}`}
    >
      Create your plan
    </div>
  ) : (
    <div className="btn create-btn">Create your plan</div>
  );
};

export default Button;
