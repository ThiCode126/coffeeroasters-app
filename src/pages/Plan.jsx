import React, { useState } from "react";
import CardWorks from "../Components/CardWorks";
import Hero from "../Components/Hero";

import data from "../utils/dataHome.json";
import dataPlan from "../utils/dataPlan.json";

const Plan = () => {
  const { works } = data;
  const { hero, step } = dataPlan;

  console.log(step);

  let defaultState = {};

  for (let i = 0; i < step.length; i++) {
    defaultState[step[i].id] = "";
  }

  const [myState, setMyState] = useState(defaultState);

  const onValueChange = (id, title) => {
    console.log(id, title);
    let newState = { ...myState };
    newState[id] = title;
    setMyState(newState);
  };

  const BtnSelect = ({ data }) => {
    console.log(data);
    const toggleAcc = (e) => {
      e.preventDefault();
      e.target.parentElement.classList.toggle("active");
    };
    return (
      <>
        <button className="accordion active" onClick={toggleAcc}>
          <span className="title">{data.title}</span>
        </button>
        <div className="panel">
          {data.choice.map((current, k) => (
            <div key={k} className="choice">
              <input
                type="radio"
                name={data.name}
                value={current.title}
                checked={myState[data.id] === current.title}
                onChange={() => onValueChange(data.id, current.title)}
                id={`${data.id}_${current.title}`}
              />
              <label htmlFor={`${data.id}_${current.title}`}>
                <h5 className="title">{current.title}</h5>
                <p className="desc">{current.desc}</p>
              </label>
            </div>
          ))}
        </div>
      </>
    );
  };
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
      <section id="plan">
        <div className="content-wrapper">
          <div className="in-section in-plan">
            <div className="cards">
              {step.map((data, k) => (
                <BtnSelect data={data} key={k} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan;
