import React from "react";

const CardWorks = ({ article }) => {
  return (
    <div className="card-article">
      <span className="number">{article.number}</span>
      <h4 className="card-title">{article.title}</h4>
      <p className="card-desc">{article.desc}</p>
    </div>
  );
};

export default CardWorks;
