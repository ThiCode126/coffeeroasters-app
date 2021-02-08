import React, { useState } from "react";
import CardWorks from "../Components/CardWorks";
import Hero from "../Components/Hero";

import data from "../utils/dataHome.json";
import dataPlan from "../utils/dataPlan.json";

const Plan = () => {
  const { works } = data;
  const { hero, step } = dataPlan;

  let defaultState = {};

  for (let i = 0; i < step.length; i++) {
    defaultState[step[i].id] = {
      title: "",
      active: false,
      disabled: false,
    };
  }
  defaultState[0]["active"] = true;

  const [myState, setMyState] = useState(defaultState);

  const onValueChange = (id, title) => {
    console.log(id);
    let newState = { ...myState };
    newState[id]["title"] = title;

    if (id === 0) {
      if (title === "Capsule") {
        newState[3]["disabled"] = true;
      } else {
        newState[3]["disabled"] = false;
      }
    }

    if (id === 2 && newState[3]["disabled"] === true) {
      newState[4]["active"] = true;
    } else if (id <= 3) {
      const idMore = id + 1;
      newState[idMore]["active"] = true;
    }
    setMyState(newState);
  };

  const BtnSelect = ({ data }) => {
    const { id: stepId, title: stepTitle, name: stepName } = data;
    console.log(stepId);

    const toggleAcc = (e) => {
      e.preventDefault();
      e.target.parentElement.classList.toggle("active");
    };

    return (
      <>
        <button
          id={stepId}
          className={`accordion${myState[stepId]["active"] ? " active" : ""}`}
          onClick={toggleAcc}
          disabled={myState[stepId]["disabled"] ? true : false}
        >
          <span className="title">{stepTitle}</span>
        </button>
        <div className="panel">
          {data.choice.map((current, k) => {
            //const { id, name } = data;
            const { title, desc } = current;
            return (
              <div key={k} className="choice">
                <input
                  type="radio"
                  name={stepName}
                  value={title}
                  checked={myState[stepId]["title"] === title}
                  onChange={() => onValueChange(stepId, title)}
                  id={`${stepId}_${title}`}
                />
                <label htmlFor={`${stepId}_${title}`}>
                  <h5 className="title">{title}</h5>
                  <p className="desc">{desc}</p>
                </label>
              </div>
            );
          })}
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
