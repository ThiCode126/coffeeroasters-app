import React from "react";
import Button from "../Components/Button";
import CardWorks from "../Components/CardWorks";
import Hero from "../Components/Hero";

import data from "../utils/dataHome.json";
import dataPlan from "../utils/dataPlan.json";

const BtnSelect = () => {
  return (
    <button class="accordion">Section 1</button>
      <div class="panel">
        <p>Lorem ipsum...</p>
      </div>
  )
}

const Plan = () => {
  const { works } = data;
  const { hero } = dataPlan;
  return (
    <div id="plan">
      <Hero data={hero} page="plan" />
      <section id="works">
        <div className="content-wrapper">
          <div className="in-section in-works">
            <div className="cards">
              {works.articles.map((article, k) => (
                <CardWorks article={article} key={k} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan;
