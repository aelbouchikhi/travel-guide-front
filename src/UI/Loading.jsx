import React from "react";

const Loading = () => {
  return (
    <div>
      <div className=" w-24 h-24 box-content relative rounded-full border-8 shadow-xl shadow-slate-300">
        <div className=" animate-spin transition-all duration-5000 absolute top-[-8px] left-[-8px] rounded-full w-full h-full border-b-orange-500 box-content border-8"></div>
      </div>
    </div>
  );
};

export default Loading;
