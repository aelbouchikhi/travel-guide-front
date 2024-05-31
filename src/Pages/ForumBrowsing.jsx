import React from "react";
import ForumFilters from "../Components/ForumFilters";
import PostContainer from "../Components/PostContainer";
import { getUser } from "../UserContext/UserContext";
import PopularPosts from "../Components/PopularPosts";

const ForumBrowsing = () => {
  const { user } = getUser();
  return (
    <div className="flex justify-between gap-96">
      <PostContainer />
    </div>
  );
};

export default ForumBrowsing;
