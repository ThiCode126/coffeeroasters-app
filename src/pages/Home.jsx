import React from "react";
import Hero from "../Components/Hero";

import data from "../utils/dataHome.json";

const Home = () => {
  const { hero, collection, why, works } = data;
  return (
    <>
      <Hero data={hero} page="home" />
      <section id="collection">
        <div className="content-wrapper">
          <div className="in-section in-collection">
            <h2 className="title">{collection.title}</h2>
            {collection.articles.map((article) => console.log(article))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
