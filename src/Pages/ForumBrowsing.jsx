import React from "react";
import ForumFilters from "../Components/ForumFilters";
import PostContainer from "../Components/PostContainer";
import { getUser } from "../UserContext/UserContext";

const ForumBrowsing = () => {
  const { user } = getUser();
  return (
    <div className="flex justify-between gap-96">
      <ForumFilters />
      <PostContainer />
    </div>
  );
};

export default ForumBrowsing;
