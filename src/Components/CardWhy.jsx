import React from "react";

const CardWhy = ({ article }) => {
  return (
    <div className="card-article">
      <img
        className="img-icon"
        src={`./assets/home/${article.img}`}
        alt="icon"
      />
      <h4 className="card-title">{article.title}</h4>
      <p className="card-desc">{article.desc}</p>
    </div>
  );
};

export default CardWhy;
