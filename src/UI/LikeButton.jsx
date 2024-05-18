import React from "react";
import like from "../assets/icons/like.svg";

const LikeButton = () => {
  return (
    <div className=" rounded-bl-xl py-3 w-[50%] hover:bg-zinc-200 transition-colors duration-500 cursor-pointer flex gap-2 justify-center items-center font-Montserrat font-medium text-xl">
      <img src={like} alt="" />
      <h3>Like</h3>
    </div>
  );
};

export default LikeButton;
