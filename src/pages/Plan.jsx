import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Button from "../Components/Button";
import ButtonOut from "../Components/ButtonOut";

import CardWorks from "../Components/CardWorks";
import Hero from "../Components/Hero";

import data from "../utils/dataHome.json";
import dataPlan from "../utils/dataPlan.json";

Modal.setAppElement("#root");

const Plan = () => {
  const { works } = data;
  const { hero, step, summary, price } = dataPlan;

  let defaultState = {};

  for (let i = 0; i < step.length; i++) {
    defaultState[step[i].id] = {
      id: null,
      title: "",
      active: false,
      disabled: false,
    };
  }
  defaultState[0]["active"] = true;

  const [myState, setMyState] = useState(defaultState);
  const [lastActive, setLastActive] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const nbrStep = Object.keys(myState).length - 1;
    for (let i = nbrStep; i >= 0; i--) {
      if (myState[i]["active"] === true) {
        setLastActive(i);
        return;
      }
    }
  }, [myState]);

  useEffect(() => {
    // price[myState[2]["id"]][sub_id].toFixed(2)
    if (myState[2]["id"] !== null && myState[4]["id"] !== null) {
      let newTotal = 0;

      const thePrice = price[myState[2]["id"]][myState[4]["id"]];

      if (myState[4]["id"] === 0) {
        newTotal = thePrice * 4;
      } else if (myState[4]["id"] === 1) {
        newTotal = thePrice * 2;
      } else if (myState[4]["id"] === 2) {
        newTotal = thePrice;
      }

      setPriceTotal(newTotal);
    }
  }, [myState, price]);

  const onValueChange = (id, title, sub_id) => {
    let newState = { ...myState };
    newState[id]["title"] = title;
    newState[id]["id"] = sub_id;

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
            const { sub_id, title, desc } = current;
            return (
              <div key={k} className="choice">
                <input
                  type="radio"
                  name={stepName}
                  value={title}
                  checked={myState[stepId]["title"] === title}
                  onChange={() => onValueChange(stepId, title, sub_id)}
                  id={`${stepId}_${title}`}
                />
                <label htmlFor={`${stepId}_${title}`}>
                  <h5 className="title">{title}</h5>
                  <p className="desc">
                    <span>
                      {myState[2]["id"] !== null && stepId === 4
                        ? "$" + price[myState[2]["id"]][sub_id].toFixed(2)
                        : ""}
                    </span>

                    {desc}
                  </p>
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const orderText = () => {
    const nbrStep = Object.keys(myState).length - 1;
    const { text } = summary;
    const openSpan = '<span class="green-text">';
    const closeSpan = "</span>";

    // Change "" to _____
    let newState = { ...myState };
    let sentenceArray = [];
    for (let i = 0; i <= nbrStep; i++) {
      sentenceArray[i] =
        newState[i]["title"] === ""
          ? openSpan + "_____" + closeSpan
          : openSpan + newState[i]["title"] + closeSpan;
    }

    let sentence;
    if (
      myState[0]["title"] === "Filter" ||
      myState[0]["title"] === "Espresso"
    ) {
      sentence =
        text[0] +
        "as " +
        sentenceArray[0] +
        text[1] +
        sentenceArray[1] +
        text[2] +
        sentenceArray[2] +
        text[3] +
        sentenceArray[3] +
        text[4] +
        sentenceArray[4] +
        '."';
    } else {
      sentence =
        text[0] +
        "as " +
        sentenceArray[0] +
        text[1] +
        sentenceArray[1] +
        text[2] +
        sentenceArray[2] +
        text[4] +
        sentenceArray[4] +
        '."';
    }

    return { __html: sentence };
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <section id="choice">
        <div className="content-wrapper">
          <div className="in-section in-plan">
            <div className="column">
              <div className="menu-left">
                <ul>
                  {step.map((data, k) => (
                    <li className="list-menu" key={k}>
                      <a
                        className={`link-left${
                          lastActive === data.id ? " active" : ""
                        }${
                          myState[data.id]["disabled"] === true
                            ? " disabled"
                            : ""
                        }`}
                        href={`#${data.id}`}
                      >
                        <span className="number">{data.number}</span>{" "}
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cards">
                {step.map((data, k) => (
                  <BtnSelect data={data} key={k} />
                ))}
                <div id="order">
                  <h4 className="title">{summary.title}</h4>
                  <p
                    className="order-text"
                    dangerouslySetInnerHTML={orderText()}
                  />
                </div>
                <Button isDisabled={isDisabled} openModal={openModal} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Order Summary"
      >
        <div className="header">
          <h4 className="title">{summary.title}</h4>
        </div>
        <div className="body">
          <p className="order-text" dangerouslySetInnerHTML={orderText()} />
          <p className="check-text">{summary.check}</p>
          <ButtonOut priceTotal={priceTotal} />
        </div>
      </Modal>
    </div>
  );
};

export default Plan;
