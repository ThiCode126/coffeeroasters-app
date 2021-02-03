import React from "react";

const Article = ({ article }) => {
  return (
    <div className="card-article">
      <img
        className="img-coffee"
        src={`./assets/home/${article.img}`}
        alt="article"
      />
      <h4 className="title">{article.title}</h4>
      <p className="desc">{article.desc}</p>
    </div>
  );
};

export default Article;
