import React from "react";

const Filters = () => {
  return (
    <div className="m-6 w-[20%] h-96 border-2 border-[#E1E1E1] rounded-3xl">
      {/* Div / Reset */}
      <div className="items-center justify-center flex  w-full h-24 border-b-2 border-[#E1E1E1] rounded-3xl">
        <div className="flex gap-44 items-center">
          <div>
            <h3 className="font-Montserrat text-xl font-bold">Filters</h3>
          </div>
          <div className=" text-[#9A9AB0] flex justify-center items-center border-[#E1E1E1] border-2 w-20 h-11 rounded-3xl">
            Reset
          </div>
        </div>
      </div>
      {/* Div Of Category Filtering*/}
      <div className=" p-8 h-72 border-[#E1E1E1] border-b-2">
        <h4 className="block font-Montserrat font-medium"> Category</h4>
        <label className="inline-flex items-center mt-3">
          {" "}
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 bg-orange-900"
          />
          Promo Deals
        </label>
      </div>
    </div>
  );
};

export default Filters;
