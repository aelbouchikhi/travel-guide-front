import React from "react";
import "./CheckBoxStyling.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";

const Filters = () => {
  return (
    <div>
      <div className=" box-border m-12 w-[16%] min-w-[10%] h-auto border-2 border-[#E1E1E1] rounded-3xl">
        {/* Div / Reset */}
        <div className="box-border items-center justify-center flex  w-full h-24 border-b-2 border-[#E1E1E1] rounded-3xl">
          <div className="flex gap-44 items-center">
            <div>
              <h3 className="font-Montserrat text-xl font-bold">Filters</h3>
            </div>
            <div className=" box-border cursor-pointer text-[#9A9AB0] flex justify-center items-center border-[#E1E1E1] border-2 w-20 h-11 rounded-3xl hover:bg-[#f77002] hover:text-white">
              Reset
            </div>
          </div>
        </div>
        {/* Div Of Category Filtering*/}
        <div className=" box-border p-8 h-auto border-[#E1E1E1] border-b-2">
          <h4 className="mb-6 block font-Montserrat font-medium"> Category </h4>
          <label className="myContainer">
            Promo Deals
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
        </div>
        {/* Price Range Filtering */}
        <div className=" box-border p-8 h-auto border-[#E1E1E1] border-b-2">
          <h4 className="mb-6 block font-Montserrat font-medium">
            {" "}
            Price Range{" "}
          </h4>
          <RangeSlider aria-label={["min", "max"]} defaultValue={[30, 80]}>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="#f77002" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0}>
              <Box color="#f77002" />
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={6} index={1}>
              <Box color="#f77002" />
            </RangeSliderThumb>
          </RangeSlider>
        </div>
        {/* Rating Filtering Div */}
        <div className=" box-border p-8 h-auto border-[#E1E1E1] border-b-2">
          <h4 className="mb-6 block font-Montserrat font-medium">Rating</h4>
          <label className="myContainer">
            ⭐⭐⭐⭐⭐ (5 Stars)
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            ⭐⭐⭐⭐ (4 Stars)
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            ⭐⭐⭐ (3 Stars)
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            ⭐⭐ (2 Stars)
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            ⭐ (1 Star)
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        {/* Activity Filtering Div */}
        <div className=" box-border p-8 h-auto border-[#E1E1E1] ">
          <h4 className="mb-6 block font-Montserrat font-medium">Activity</h4>
          <label className="myContainer">
            Moseums
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Outdoors
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Sport
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="myContainer">
            Music
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
