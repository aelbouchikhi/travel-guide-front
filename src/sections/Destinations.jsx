import React from "react";
import Slider from "../Components/Slider";
// import './destinations.css'
const Destinations = () => {
  return (
    <section className="destinations container mx-auto">
      <div className="heading">
        <p className="text-primary font-montserrat font-medium">Top Destination</p>
        <h2 className="font-montserrat">
           Explore top destination
        </h2>
      </div>
      <div className="slider">
        <div className="visible-part shadow-left"></div>
        <div className="visible-part shadow-right"></div>
        <Slider/>
      </div>
    </section>
  );
};

export default Destinations;
