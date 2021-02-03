import React from "react";

const Article = ({ article }) => {
  return (
    <div className="card-article">
      <img src={`../assets/home/${article.img}`} alt="article" />
    </div>
  );
};

export default Article;
