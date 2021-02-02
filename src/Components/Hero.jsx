import React from "react";

const Hero = ({ data }) => {
  const { title, desc } = data;
  console.log(title, desc);
  return <div>Hero</div>;
};

export default Hero;
