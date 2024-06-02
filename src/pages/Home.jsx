import React from "react";
import * as util from "../components/Home";
import Navigation from "../components/Navigation/Navigation";
const Home = () => {
  return (
    <div>
      <Navigation />
      <util.Header />
      <util.Transform />
      <util.How />
      <util.Footer />
    </div>
  );
};

export default Home;
