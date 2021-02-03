import React from "react";
import Button from "./Button";

const Hero = ({ data, page }) => {
  const { title, desc } = data;
  return (
    <section id="hero">
      <div className="content-wrapper">
        <div className={`in-section in-hero in-${page}`}>
          <h1 className="title">{title}</h1>
          <p className="desc">{desc}</p>
          {page === "home" ? <Button /> : ""}
        </div>
      </div>
    </section>
  );
};

export default Hero;
