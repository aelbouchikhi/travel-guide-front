import React from 'react';
import Destinations from "../../sections/Destinations";
import Hero from "../../sections/Hero";
import Parterns from "../../sections/Parterns";
import Services from "../../sections/Services";

import Photo from "../../sections/Photo";
import Subscribe from "../../sections/Subscribe";
import Footer from "../Components/Footer";
import { getUser } from "../UserContext/UserContext";

const Home = () => {
  const { user } = getUser();
  console.log(user);
  return (
    <main>
      <Hero />
      <Parterns />
      <Services />
      <Destinations />
      {/* <Photo/> */}
      <Subscribe />
    </main>
  );
};

export default Home;
