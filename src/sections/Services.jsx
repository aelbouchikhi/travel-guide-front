import React from "react";
// import "./Services.css";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";

const Services = () => {
  return (
    <section className="w-[90%] mx-auto pb-40 pt-20 flex flex-col lg:flex-row gap-2 items-center">
      <div className="text-center lg:w-3/5 lg:text-left ">
        <p className="text-primary font-montserrat font-medium text-[1.2rem] uppercase tracking-[2px] leading-[120%]">services</p>
        <h2 className="font-montserrat text-[2.2rem] font-bold leading-[120%] mt-2">
          Our top value <br />
          categories for you
        </h2>
      </div>
      <div className="font-montserrat flex flex-col lg:flex-row gap-10 items-center mt-8 lg:mt-0">
         <div className="bg-[#F9F9F9] text-center p-8 lg:p-4 rounded-lg">
            <img src={service1} className='mx-auto mb-6 w-[40px] lg:w-[30px]'/>
            <h3 className="capitalize text-[1.3rem] lg:text-[1.2rem] font-bold mb-4">best tour guide</h3>
            <p className="text-[#00000080]  w-[200px]">Touring with seasoned guides made journeys.</p>
         </div>
         <div className="bg-white shadow-3xl text-center p-8 lg:p-4 rounded-lg">
            <img src={service2} className='mx-auto mb-6 w-[40px] lg:w-[30px] lg:text-[1.2rem]'/>
            <h3 className="capitalize text-[1.3rem] font-bold mb-4">easy booking</h3>
            <p className="text-[#00000080] w-[200px]">Booking made simple, effortless process. </p>
         </div>
         <div className="bg-[#F9F9F9] text-center p-8 lg:p-4 rounded-lg">
            <img src={service3} className='mx-auto mb-6 w-[40px] lg:w-[30px] '/>
            <h3 className="capitalize text-[1.3rem] lg:text-[1.2rem] font-bold mb-4">Wether Forcast</h3>
            <p className="text-[#00000080] leading-[180%] w-[200px]">Forecasting weather quick, accurate updates. </p>
         </div>
      </div>
    </section>
  );
};

export default Services;
