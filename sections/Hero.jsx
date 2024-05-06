import React from "react";
import  './Hero.css';
import landing1 from '../src/assets/images/Rectangle1.png'
import landing2 from '../src/assets/images/Rectangle2.png'
import landing3 from '../src/assets/images/photo-1.png'
import layer from '../src/assets/images/layer.png'
import send from '../src/assets/images/send.png'
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative hero-section flex justify-between container mx-auto items-center min-h-screen ">
      <img src={layer} className="absolute layer"/>
      <div className="hero-text-content relative w-2/5">
         <img src={send} className="absolute send"/>
          <p className="top-heading  font-palanquin font-medium">Expore the world!</p>
          <h1 className="font-montserrat">
            Travel <span>top</span>
            <br />
            <span>destination</span> of the world
          </h1>
          <p className="desc font-montserrat">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <button className="font-montserrat  capitalize bg-primary text-white px-4 py-2 rounded-full  font-medium border border-primary">
                  Get Started
          </button>
          <div className="top-places">
            <FaLocationDot className="icon" size={20}/>
          <span className="font-montserrat capitalize ">top places</span>
        </div>
      </div>
      
      <div className="hero-images ">
         <img src={landing1} className="absolute"/>
         <img src={landing2} className="absolute"/>
         <img src={landing3} className="absolute"/>
      </div>

     
    </section>
  );
};

export default Hero;
