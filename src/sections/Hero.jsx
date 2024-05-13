import React from "react";
import landing1 from "../assets/images/Rectangle1.png";
import landing2 from "../assets/images/Rectangle2.png";
import landing3 from "../assets/images/photo-1.png";
import layer from "../assets/images/layer.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Hero = () => {
  return (
    <section className="w-[90%] h-[calc(100vh - 72px)] relative z-0 mx-auto mt-4 flex gap-8  flex-col-reverse md:flex-row">
      <div className="text-center mt-12 md:text-left md:w-2/5 relative">
        <p className="font-montserrat text-primary font-medium tracking-[2px]">
          Expore the world!
        </p>
        <h1 className="font-montserrat text-[3rem] leading-[120%] lg:text-[4rem] font-bold">
          Travel <span className="text-primary">top</span>
          <br />
          <span className="text-primary">destination</span> of the world
        </h1>
        <p className="font-montserrat text-[#777] text-[15px] mt-[1rem] mb-[1.2rem]">
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <button className="font-montserrat  capitalize bg-primary text-white px-4 py-2 rounded-full  font-medium border border-primary">
          Get Started
        </button>
      </div>

      <div className="relative  md:w-3/5">
        <img src={layer} className="w-full" />
   
          <div className=" w-[30%] absolute left-[14%] top-[4rem]  md:left-[12%] lg:top-[10%] lg:left-[20%] xl:left-[30%] xl:top-[17%] lg:w-[11rem] 2xl:w-[14rem]">
              <img src={landing1} className="w-full  rounded-[1.5rem]" />
              <div className="rounded-full p-2 shadow-xl bg-primary absolute bottom-[-8%] left-[-16%]">
                <IoIosSend className="text-3xl text-white" />
              </div>
          </div>
          <div className=" w-[30%] absolute left-[14%] top-[63%] md:left-[12%] md:top-[60%]  xl:left-[30%] xl:top-[60%] lg:top-[52%] lg:left-[20%] lg:w-[11rem] 2xl:w-[14rem]">
              <img src={landing2} className="w-full rounded-[1.5rem]" />
          </div>

        <div className="w-[30%]  relative top-[-3rem]  left-[54%] md:left-[50%] lg:left-[52%]  xl:left-[66%] lg:top-[-20%] lg:w-[11rem] 2xl:w-[14rem]">
          <img src={landing3} className="w-full rounded-[1.5rem]" />
          <div className="flex gap-2 absolute bottom-8 right-[-50%] bg-white shadow-xl py-4 px-5  rounded-full">
            <FaLocationDot className="icon text-[#FACD49]" size={20} />
            <span className="font-montserrat text-sm font-bold capitalize ">top places</span>
          </div>
         </div>

      </div>
    </section>

  );
};

export default Hero;
