import React from "react";
import CardCountry from "../Components/CardCountry";
import Hero from "../Components/Hero";

import data from "../utils/dataAbout.json";

const About = () => {
  const { hero, commit, quality, country } = data;
  return (
    <div id="about">
      <Hero data={hero} page="about" />
      <section id="commit">
        <div className="content-wrapper">
          <div className="in-section in-commit">
            <div className="img-commit"></div>
            <div className="text-commit">
              <h2 className="title">{commit.title}</h2>
              <p className="desc">{commit.desc}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="quality">
        <div className="content-wrapper">
          <div className="in-section in-quality">
            <div className="img-quality"></div>
            <div className="text-quality">
              <h2 className="title">{quality.title}</h2>
              <p className="desc">{quality.desc}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="country">
        <div className="content-wrapper">
          <div className="in-section in-country">
            <h2 className="title">{country.title}</h2>
            {country.articles.map((article, k) => (
              <CardCountry article={article} key={k} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
