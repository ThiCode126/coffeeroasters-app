import React from "react";
import useWindowDimensions from "../utils/useWindowDimensions";

const ButtonOut = ({ priceTotal }) => {
  const { isMobile } = useWindowDimensions();

  const price = priceTotal.toFixed(2);

  if (isMobile) {
    return <div className="btn checkout-btn">Checkout - ${price} / mo</div>;
  } else {
    return (
      <div className="wrap-btn">
        <div className="price-month">${price} / mo</div>
        <div className="btn checkout-btn">Checkout</div>
      </div>
    );
  }
};

export default ButtonOut;
