import React from "react";
import Slider from "../Components/Slider";
// import './destinations.css'
const Destinations = () => {
  return (
    <section className=" w-[90%]  mb-20 mx-auto">
      <div className="mb-8 text-center md:text-left">
        <p className="text-primary font-montserrat font-medium text-[1.2rem] uppercase tracking-[2px] leading-[120%]">Top Destination</p>
        <h2 className="font-montserrat text-[2.2rem] font-bold leading-[120%] mt-2">
           Explore top destination
        </h2>
      </div>
      <div className="slider relative">
        <div className="visible-part shadow-left"></div>
        <div className="visible-part shadow-right"></div>
        <Slider/>
      </div>
    </section>
  );
};

export default Destinations;
