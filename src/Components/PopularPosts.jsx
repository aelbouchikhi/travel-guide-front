import React, { useEffect, useState } from "react";
import axios from "axios";

const PopularPosts = () => {
  const [PopularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/forum/posts/most-engaging-posts"
        );
        if (response.data) {
          setPopularPosts(response.data); // Updating state with setPosts
          console.log(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>PopularPosts</div>;
};

export default PopularPosts;
