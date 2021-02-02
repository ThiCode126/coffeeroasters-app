import React from "react";
import Hero from "../Components/Hero";

import data from "../utils/dataHome.json";

const Home = () => {
  return (
    <div>
      <Hero data={data.hero} />
    </div>
  );
};

export default Home;
