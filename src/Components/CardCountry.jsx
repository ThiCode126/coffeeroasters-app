import React from "react";

const CardCountry = ({ article }) => {
  return (
    <div className="card-country">
      <h4 className="card-title">{article.name}</h4>
    </div>
  );
};

export default CardCountry;
