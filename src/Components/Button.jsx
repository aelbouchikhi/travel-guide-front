import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center gap-2 px-6 py-2 border font-montserrat text-lg leading-none bg-primary rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
