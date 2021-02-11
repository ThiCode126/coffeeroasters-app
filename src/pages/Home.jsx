import React from "react";
import { ReactSVG } from "react-svg";

import Article from "../Components/Article";
import Button from "../Components/Button";
import CardWhy from "../Components/CardWhy";
import CardWorks from "../Components/CardWorks";
import Hero from "../Components/Hero";

import useWindowDimensions from "../utils/useWindowDimensions";
import data from "../utils/dataHome.json";

const Home = () => {
  const { hero, collection, why, works } = data;
  const { isTablet, isDesktop } = useWindowDimensions();
  return (
    <div id="home">
      <Hero data={hero} page="home" />
      <section id="collection">
        <div className="content-wrapper">
          <div className="in-section in-collection">
            <h2 className="title">{collection.title}</h2>
            <div className="cards">
              {collection.articles.map((article, k) => (
                <Article article={article} key={k} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="why">
        <div className="content-wrapper">
          <div className="in-section in-why">
            <h2 className="title">{why.title}</h2>
            <p className="desc">{why.desc}</p>
            <div className="cards">
              {why.articles.map((article, k) => (
                <CardWhy article={article} key={k} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="works">
        <div className="content-wrapper">
          <div className="in-section in-works">
            <h2 className="title">{works.title}</h2>
            {isTablet && (
              <ReactSVG
                src="assets/bandeau-tablet.svg"
                className="bandeau"
                wrapper="div"
              />
            )}
            {isDesktop && (
              <ReactSVG
                src="assets/bandeau-desktop.svg"
                className="bandeau"
                wrapper="div"
              />
            )}
            <div className="cards">
              {works.articles.map((article, k) => (
                <CardWorks article={article} key={k} />
              ))}
            </div>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
