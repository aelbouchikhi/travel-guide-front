import React from "react";
import "./CheckBoxStyling.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";

const ForumFilters = () => {
  return (
    <div>
      <div className=" fixed overflow-hidden top-12 box-border h-[80vh] m-12 w-[18%] min-w-[10%] border-2 border-[#E1E1E1] rounded-3xl">
        {/* Div / Reset */}
        <div className=" p-10 box-border items-center justify-center flex flex-col gap-6 w-full h-44 border-b-2 border-[#E1E1E1] rounded-3xl">
          <div className="flex items-center mt-6">
            <div>
              <h3 className="font-Montserrat text-2xl font-bold">Search</h3>
            </div>
          </div>
          <div>
            <input
              className=" bg-white p-2 h-16 mb-6 w-full rounded-3xl border-2 placeholder:text-gray-300 text-lg"
              type="text"
              placeholder="Anything you want"
            />
          </div>
        </div>
        {/* Div Of Category Filtering*/}
        <div className="box-border p-8 h-auto border-[#E1E1E1] border-b-2">
          <h4 className="mb-6 block font-Montserrat font-medium"> Category </h4>
          <label className="myContainer">
            All
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Hotels
            <input className="mr-4" type="checkbox" />
            <span className="checkmark"></span>
          </label>{" "}
          <label className="myContainer">
            Restaurants
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>{" "}
          <label className="myContainer">
            Attractions
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Transport
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Experiences
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        {/* Sort By Filtering Div */}
        <div className=" box-border p-8 h-auto border-[#E1E1E1] ">
          <h4 className="mb-6 block font-Montserrat font-medium">Sort By</h4>
          <label className="myContainer">
            Revealance
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Popularity
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Most Recent
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ForumFilters;
