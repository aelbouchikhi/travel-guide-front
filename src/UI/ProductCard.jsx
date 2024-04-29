import React from "react";
import jameelafna from "../assets/jamee-lafnaa.webp";
import Star from "./Star";

const ProductCard = ({ infos }) => {
  return (
    <div className="rounded-xl h-[30rem] shadow-xl shadow-gray-300">
      <div className=" box-border w-full h-[18rem] rounded-xl relative">
        <div className="absolute flex justify-center items-center w-12 h-12 right-5 top-4 bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ff4500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </div>
        <img
          className="rounded-t-xl w-full h-full"
          src={jameelafna}
          alt="jameelafna"
        />
      </div>
      <div className=" rounded-b-xl flex flex-col gap-2 p-3 w-full h-[12rem] border-2 bg-[#FFFFFF]">
        <h2 className="text-3xl font-Montserrat font-bold">$40</h2>
        <h3 className="text-xl font-Montserrat font-bold">
          {infos.result_object.name}
        </h3>
        <h3 className=" text-lg font-Montserrat font-medium">
          Marrakech , Morocco
        </h3>
        <h3 className="flex items-center gap-2 font-Montserrat font-medium">
          ⭐ <p>{infos.result_object.rating}</p>{" "}
          <p>({infos.result_object.num_reviews} Reviews)</p>
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
