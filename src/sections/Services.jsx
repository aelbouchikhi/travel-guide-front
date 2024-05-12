import React from "react";
import "./Services.css";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";

const Services = () => {
  return (
    <section className="services items-center   w-full">
      <div className="heading">
        <p className="text-primary font-montserrat font-medium">services</p>
        <h2 className="font-montserrat">
          Our top value <br />
          categories for you
        </h2>
      </div>
      <div className="content-text font-montserrat">
         <div className="service">
            <img src={service1}/>
            <h3>best tour guide</h3>
            <p>What looked like a small patch of purple grass, above five feet.</p>
         </div>
         <div className="service">
            <img src={service2}/>
            <h3>easy booking</h3>
            <p>What looked like a small patch of purple grass, above five feet.</p>
         </div>
         <div className="service">
            <img src={service3}/>
            <h3>Weather Forecast</h3>
            <p>What looked like a small patch of purple grass, above five feet.</p>
         </div>
      </div>
    </section>
  );
};

export default Services;
