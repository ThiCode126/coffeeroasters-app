import React from "react";
import { ReactSVG } from "react-svg";

const CardCountry = ({ article }) => {
  return (
    <div className="card-country">
      <ReactSVG
        src={`assets/about/${article.icon}`}
        className="icon"
        wrapper="span"
      />
      <h4 className="card-title">{article.name}</h4>
      <p className="address">
        {article.address} <br />
        {article.city} <br />
        {article.code} <br />
        {article.tel}
      </p>
    </div>
  );
};

export default CardCountry;
