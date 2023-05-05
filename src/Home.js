import React from "react";
import Heroseaction from "./component/Heroseaction";
import Services from "./component/Services";
import Trusted from "./component/Trusted";
import Featuredproduct from "./component/Featuredproduct";

const Home = () => {
  const name = "Ecommerce"
  return (
    <>
    <Heroseaction name={name}/>
    <Featuredproduct/>
    <Services/>
    <Trusted/>
    </>

  );
};

export default Home;
