import React from "react";
import worldMap from "../assets/images/world-map.png";
import stats1 from "../assets/images/stats1.png";
import stats2 from "../assets/images/stats2.png";
import stats3 from "../assets/images/stats3.png";
import stats4 from "../assets/images/stats4.png";

const stats = [
  {
    icon: stats1,
    number: "15+",
    label: "Years of Experience",
  },
  {
    icon: stats2,
    number: "15k+",
    label: "Happy Travellers",
  },
  {
    icon: stats3,
    number: "650+",
    label: "Places Visited",
  },
  {
    icon: stats4,
    number: "2k+",
    label: "Travel History",
  },
];
const Stats = () => {
  return (
    <section
      className=" bg-statsColor  mb-40 bg-cover"
      style={{ backgroundImage: `url(${worldMap})` }}
    >
      <div className="w-[90%] mx-auto py-10">
        <div className="text-center">
          <h2 className="text-[2rem] font-bold  font-montserrat">
            We always try to give you <br />
            the best service
          </h2>
          <p className="text-[#777] mt-4 text-[15px]">
            We always try to make our customer Happy. We provide all kind of<br/>
            facilities. Your Satisfaction is our main priority.
          </p>
        </div>
        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((el) => (
            <div className="bg-white py-6 rounded-xl text-center shadow-3xl">
              <img className="w-[1.5rem] mx-auto" src={el.icon} />
              <span className="inline-block my-3 font-bold text-[2rem]">{el.number}</span>
              <h3 className="font-montserrat ">{el.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
