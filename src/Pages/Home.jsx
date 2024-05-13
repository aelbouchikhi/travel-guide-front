import React from "react";
import Hero from "../sections/Hero";
import Parterns from "../sections/Parterns";
import Services from "../sections/Services";
import Subscribe from "../sections/Subscribe";
import Footer from "../Components/Footer";
import Stats from "../sections/Stats";
import Destinations from "../sections/Destinations";


const Home = () => {
  return (
      <main>
        <Hero />
        <Parterns />
        <Services />
        <Stats/>
        <Destinations/>
        <Subscribe />
    </main>
  );
};

export default Home;
