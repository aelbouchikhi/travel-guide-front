import React from "react";
import comment from "../assets/icons/comment.svg";

const CommentButton = () => {
  return (
    <div className=" rounded-br-xl py-3 w-[50%] hover:bg-zinc-200 transition-colors duration-500 cursor-pointer flex gap-2 justify-center items-center font-Montserrat font-medium text-xl">
      <img src={comment} alt="" />
      <h3>Comment</h3>
    </div>
  );
};

export default CommentButton;
