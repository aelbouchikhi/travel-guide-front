import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import NewPost from "./NewPost";
import axios from "axios";

const PostContainer = () => {
  console.log("rerendering");
  const [posts, setPosts] = useState([]); // Using useState to manage posts state
  const [reload, setReload] = useState(false);

  const onLike = (newState) => {
    setReload(newState);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/forum/posts"
        );
        if (response.data) {
          setPosts(response.data); // Updating state with setPosts
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [reload]);

  return (
    <div className="m-auto my-6 mt-24 box-border flex h-auto max-h-[80%] w-[60%] max-w-[800px] flex-col gap-6 rounded-xl border-2 p-8">
      <NewPost />
      {posts.map(
        (
          post,
          index // Iterating over posts from state
        ) => (
          <PostCard
            post={post}
            key={post._id}
            reload={reload}
            onLike={onLike}
          /> // Ensure each PostCard has a unique 'key' prop
        )
      )}
    </div>
  );
};

export default PostContainer;